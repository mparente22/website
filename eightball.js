let startQuestion = confirm ('Do you want to ask the Magic Eightball a Question?'); 
  if (startQuestion) true; {
    result = window.confirm('Lets get the party started!');
}

let userName = prompt ('What is your name?');
let userQuestion = prompt ('What is your question?');
// userName ? document.write(`Hello, ${userName}!`) : console.log('Hello!'); 
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
case 0:
    eightBall = 'It is certain';
break;
case 1:
    eightBall = 'It is decidedly so';
break;
case 2:
    eightBall = 'Reply hazy try again';
break;
case 3:
    eightBall = 'Cannot predict now';
break;
case 4:
    eightBall = 'Do not count on it';
break;
case 5:
    eightBall = 'My sources say no';
break;
case 6:
    eightBall = 'Outlook not so good';
break;
case 7:
'Signs point to yes';
break; 
}
    {
        document.write(`<strong>Hello ${userName}!</strong> <br><br> You asked, <strong>${userQuestion}</strong> <br><br> The eight ball answered: <strong>${eightBall}</strong>`);
        }