{\rtf1\ansi\ansicpg1252\cocoartf2812
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 Aurebesh;\f2\fnil\fcharset0 AurebeshCondensed;
}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww23640\viewh15320\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    // Simulating receiving messages\
    receiveMessage("Hello, world!");\
    receiveMessage("How's it going?");\
    receiveMessage("Welcome to the stream!");\
\
    function receiveMessage(text) \{\
        const chatBox = document.getElementById('chat-box');\
        const messageElement = document.createElement('div');\
        messageElement.className = 'message';\
        \
        const messageContent = document.createElement('div');\
        messageContent.className = 'message-content';\
        \
        const front = document.createElement('div');\
        front.className = 'front';\
        front.textContent = toAurebesh(text);\
        \
        const back = document.createElement('div');\
        back.className = 'back';\
        back.textContent = text;\
        \
        messageContent.appendChild(front);\
        messageContent.appendChild(back);\
        messageElement.appendChild(messageContent);\
        chatBox.appendChild(messageElement);\
        \
        setTimeout(() => \{\
            messageElement.classList.add('flip');\
        \}, 2000);  // 2 seconds delay\
    \}\
\
\}\
\
    function toAurebesh(text) \{\
        const aurebeshMap = \{\
            'A': '
\f1 a
\f0 ', 'B': '
\f2 b
\f0 ', 'C': '
\f1 c
\f0 ', 'D': '
\f1 d
\f0 ', 'E': \'91
\f1 e
\f0 \'92,\
            'F': '
\f1 f
\f0 ', 'G': '
\f1 g
\f0 ', 'H': '
\f1 h
\f0 ', 'I': '
\f1 i
\f0 ', 'J': '
\f1 j
\f0 ',\
            'K': '
\f1 k
\f0 ', 'L': '
\f1 l
\f0 ', 'M': '
\f1 m
\f0 ', 'N': '
\f1 n
\f0 ', 'O': '
\f1 o
\f0 ',\
            'P': '
\f1 p
\f0 ', 'Q': '
\f1 q
\f0 ', 'R': '
\f1 r
\f0 ', 'S': '
\f1 s
\f0 ', 'T': '
\f1 t
\f0 ',\
            'U': '
\f1 u
\f0 ', 'V': '
\f1 v
\f0 ', 'W': '
\f1 w
\f0 ', 'X': '
\f1 x
\f0 ', 'Y': '
\f1 y
\f0 ', 'Z': '
\f1 z
\f0 ',\
	  \'91a\'92: '
\f1 a
\f0 ', \'91b\'92: '
\f2 b
\f0 ', \'91c\'92: '
\f1 c
\f0 ', \'91d\'92: '
\f1 d
\f0 ', \'91e\'92: \'91
\f1 e
\f0 \'92,\
            \'91f\'92: '
\f1 f
\f0 ', \'91g\'92: '
\f1 g
\f0 ', \'91h\'92: '
\f1 h
\f0 ', \'91i\'92: '
\f1 i
\f0 ', \'91j\'92: '
\f1 j
\f0 ',\
            \'91k\'92: '
\f1 k
\f0 ', \'91l\'92: '
\f1 l
\f0 ', \'91m\'92: '
\f1 m
\f0 ', \'92n\'92: '
\f1 n
\f0 ', \'91o\'92: '
\f1 o
\f0 ',\
            \'91p\'92: '
\f1 p
\f0 ', \'91q\'92: '
\f1 q
\f0 ', \'91r\'92: '
\f1 r
\f0 ', \'92s\'92: '
\f1 s
\f0 ', \'92t\'92: '
\f1 t
\f0 ',\
            \'91u\'92: '
\f1 u
\f0 ', \'91v\'92: '
\f1 v
\f0 ', \'91w\'92: '
\f1 w
\f0 ', \'91x\'92: '
\f1 x
\f0 ', \'91y\'92: '
\f1 y
\f0 ', \'91z\'92: '
\f1 z
\f0 ',\
        \};\
        return text.split('').map(char => aurebeshMap[char] || char).join('');\
    \}\
\});\
}