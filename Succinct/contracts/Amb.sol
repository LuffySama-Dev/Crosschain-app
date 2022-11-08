// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ICounter {
    function receiveMessage(string memory __message) external;
}

contract AMB {
    ICounter counter;

    // sendMessage: When called by Counter contract on one chain the function will take params
    // and exectue the receive function on other chain.
    // @Params: string _message, address _recepient
    function send(string memory _message, address _recepient) public {
        counter = ICounter(_recepient);
        counter.receiveMessage(_message);
    }
}
