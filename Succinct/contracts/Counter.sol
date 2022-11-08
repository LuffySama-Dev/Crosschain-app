// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IAmb {
    function send(string memory _message, address _recepient) external;
}

contract Counter {
    uint256 public counter;
    address amb;
    IAmb __amb;
    string public receivedMessage;

    // constructor: Called once during deployment and need one parameter.
    // @Param: address of trustedlayer for validation
    constructor(address _amb) {
        amb = _amb;
    }

    // sendMessage: Function takes two parameters, when called will
    // call the message bridge and pass the message.
    // @Params: message and address of the contract on other chain.
    function sendMessage(string memory _message, address _to) public {
        __amb = IAmb(amb);
        __amb.send(_message, _to);
    }

    // receivedMessage: Function take one parameter and will only
    // execute when the address calling the bridge address passed
    // durign the deployment.
    // @Params: message
    function receiveMessage(string memory _message) public {
        require(msg.sender == amb, "Message not from bridge!");
        receivedMessage = _message;
        increment();
    }

    // increment: Function will increase the counter by 1 whenever
    // it is called by receiveMessage and the address is of bridge.
    function increment() public {
        require(msg.sender == amb, "Message not from bridge!");
        counter++;
    }
}
