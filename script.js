document.addEventListener('DOMContentLoaded', () => {
    // Simulating receiving messages
    receiveMessage("Hello, world!");
    receiveMessage("How's it going?");
    receiveMessage("Welcome to the stream!");

    function receiveMessage(text) {
        console.log('Received message:', text);  // Debugging line
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        const front = document.createElement('div');
        front.className = 'front';
        front.textContent = toAurebesh(text);
        
        const back = document.createElement('div');
        back.className = 'back';
        back.textContent = text;
        
        messageContent.appendChild(front);
        messageContent.appendChild(back);
        messageElement.appendChild(messageContent);
        chatBox.appendChild(messageElement);
        
        setTimeout(() => {
            messageElement.classList.add('flip');
        }, 2000);  // 2 seconds delay
    }

    function toAurebesh(text) {
        const aurebeshMap = {
            'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e',
            'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i', 'J': 'j',
            'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o',
            'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't',
            'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z',
            'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e',
            'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j',
            'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o',
            'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't',
            'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z',
            '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
            '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
        };
        return text.split('').map(char => aurebeshMap[char] || char).join('');
    }
});
