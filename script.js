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
            'A': '\u0041', 'B': '\u0042', 'C': '\u0043', 'D': '\u0044', 'E': '\u0045',
            'F': '\u0046', 'G': '\u0047', 'H': '\u0048', 'I': '\u0049', 'J': '\u004A',
            'K': '\u004B', 'L': '\u004C', 'M': '\u004D', 'N': '\u004E', 'O': '\u004F',
            'P': '\u0050', 'Q': '\u0051', 'R': '\u0052', 'S': '\u0053', 'T': '\u0054',
            'U': '\u0055', 'V': '\u0056', 'W': '\u0057', 'X': '\u0058', 'Y': '\u0059', 'Z': '\u005A',
            'a': '\u0061', 'b': '\u0062', 'c': '\u0063', 'd': '\u0064', 'e': '\u0065',
            'f': '\u0066', 'g': '\u0067', 'h': '\u0068', 'i': '\u0069', 'j': '\u006A',
            'k': '\u006B', 'l': '\u006C', 'm': '\u006D', 'n': '\u006E', 'o': '\u006F',
            'p': '\u0070', 'q': '\u0071', 'r': '\u0072', 's': '\u0073', 't': '\u0074',
            'u': '\u0075', 'v': '\u0076', 'w': '\u0077', 'x': '\u0078', 'y': '\u0079', 'z': '\u007A',
            '0': '\u0030', '1': '\u0031', '2': '\u0032', '3': '\u0033', '4': '\u0034',
            '5': '\u0035', '6': '\u0036', '7': '\u0037', '8': '\u0038', '9': '\u0039'
        };
        return text.split('').map(char => aurebeshMap[char] || char).join('');
    }
});
