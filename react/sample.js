import React, {Component} from 'react'

const Web3 = require('web3')

let web3js = ''

let contract = ''

let accounts = ''

let ethereum = ''

class Sample extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // important line to enable metamask connection with reactjs
        ethereum = window.ethereum;
        this.checkWeb3()
    }

    async checkWeb3() {
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider.
            web3js = new Web3(window.web3.currentProvider);

            //get selected account on metamask
            accounts = await web3js.eth.getAccounts()

            //get network which metamask is connected too
            let network = await web3js.eth.net.getNetworkType()


        } else {
            /*** meta mask is not installed ***/
        }
    }

    initContract() {
        contract = new web3js.eth.Contract(/*** ABI ***/, /*** CONTRACT ADDRESS ***/)
    }

    async sendTransactionToContract() {
        await contract.methods.burnFrom(/*** parameters ***/).send({from: accounts /*** selected account from metamask ***/}) // contract.methods.methodName(parameters).send({from:selected account})
            .on('transactionHash', (hash) => {
                // hash of tx
            }).on('confirmation', function (confirmationNumber, receipt) {
                if (confirmationNumber === 2) {
                   // tx confirmed
                }
            })
    }

    async sendTransactionEth(){
        web3js.eth.sendTransaction({
            to: /*** to public key ***/,
            from: /*** from public key ***/,
            value: web3js.utils.toWei('amount', 'ether'),
        })
    }

    async callContract(){
        contract.methods.getManufacturerAddress().call({ from: accounts /*** selected account from metamask ***/ }) // contract.methods.methodName(parameters).call({from:selected account})
            .then((res) => {
                /*** here you will get the return value from smart contract ***/
            });
    }


    render() {
        // render
    }
}
                                                                                                                                                                                            < /svg>
                                                                                                                                                                                                < /a>
                                                                                                                                                                                                    < /div>
                                                                                                                                                                                                        < /div>)
                                                                                                                                                                                                            }
                                                                                                                                                                                                            }
