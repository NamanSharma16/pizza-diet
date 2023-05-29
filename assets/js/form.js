async function sendContact(ev) {
    ev.preventDefault();
    const firstName= document
      .getElementById('emailInput').value;
      const senderEmail = document
      .getElementById('emailInput').value;
    const senderPhone = document
      .getElementById('emailInput').value;
    const senderMessage = document
      .getElementById('formControlTextarea1').value;
    const webhookBody = {
      embeds: [{
        title: 'Careers Form Submitted',
        fields: [{
            name: 'FName',
            value: senderEmail
          },
          {
            name: 'Sender',
            value: senderEmail
          },
          {
            name: 'Sender',
            value: senderEmail
          },
          {
            name: 'Message',
            value: senderMessage
          }
        ]
      }],
    };
    const webhookUrl = '<discord webhook url>';
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    if (response.ok) {
      alert('I have received your message!');
    } else {
      alert('There was an error! Try again later!');
    }
  }
