document.addEventListener('DOMContentLoaded', () => {
    // Example messages to demonstrate functionality
    receiveMessage("Hello, world!", "User1", "badge-url");
    receiveMessage("How's it going?", "User2", "badge-url");
    receiveMessage("Welcome to the stream!", "User3", "badge-url");

    // Function to receive and process chat messages
    function receiveMessage(text, username, badgeUrl) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        const front = document.createElement('div');
        front.className = 'front';
        
        const back = document.createElement('div');
        back.className = 'back';
        
        const badges = document.createElement('img');
        badges.className = 'badges';
        badges.src = badgeUrl;
        
        const usernameElement = document.createElement('span');
        usernameElement.className = 'username';
        usernameElement.textContent = username + ": ";
        
        front.appendChild(badges);
        front.appendChild(usernameElement);
        
        back.appendChild(badges.cloneNode(true));
        back.appendChild(usernameElement.cloneNode(true));
        
        // Split the text into individual characters
        const frontText = document.createElement('span');
        const backText = document.createElement('span');
        
        for (let i = 0; i < text.length; i++) {
            const frontChar = document.createElement('span');
            frontChar.textContent = toAurebesh(text[i]);
            frontChar.style.display = 'inline';
            frontText.appendChild(frontChar);
            
            const backChar = document.createElement('span');
            backChar.textContent = text[i];
            backChar.style.display = 'none'; // Initially hide the back characters
            backText.appendChild(backChar);
        }
        
        front.appendChild(frontText);
        back.appendChild(backText);
        
        messageContent.appendChild(front);
        messageContent.appendChild(back);
        messageElement.appendChild(messageContent);
        chatBox.appendChild(messageElement);
        
        // Delay the flip effect
        setTimeout(() => {
            // Flip each character individually
            const frontChars = frontText.children;
            const backChars = backText.children;
            
            for (let i = 0; i < frontChars.length; i++) {
                setTimeout(() => {
                    frontChars[i].style.display = 'none';
                    backChars[i].style.display = 'inline';
                }, i * 100); // Adjust the timing for each character flip
            }
        }, 2000);  // 2 seconds delay
    }
}
    function toAurebesh(text) {
        const aurebeshMap = {
            'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': ‘e’,
            'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i', 'J': 'j',
            'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o',
            'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't',
            'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z',
	        ‘a’: 'a', ‘b’: 'b', ‘c’: 'c', ‘d’: 'd', ‘e’: ‘e’,
            ‘f’: 'f', ‘g’: 'g', ‘h’: 'h', ‘i’: 'i', ‘j’: 'j',
            ‘k’: 'k', ‘l’: 'l', ‘m’: 'm', ’n’: 'n', ‘o’: 'o',
            ‘p’: 'p', ‘q’: 'q', ‘r’: 'r', ’s’: 's', ’t’: 't',
            ‘u’: 'u', ‘v’: 'v', ‘w’: 'w', ‘x’: 'x', ‘y’: 'y', ‘z’: 'z',
        };
        return text.split('').map(char => aurebeshMap[char] || char).join('');
    }
});
