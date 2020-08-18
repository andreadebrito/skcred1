
  var request = new Request('https://us17.api.mailchimp.com/3.0/lists/1065774/members', {
                    method: 'POST',
                    mode: 'cors',
                    json: {
                        "email_address": "",
                        "status": "subscribed",
                        "telephone": "",
                        "name": ""
                    },
                    redirect: 'follow',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic apikey'
                    })
                    auth: {
                        'user': 'SkaarXP35',
                        'pass': 'y4c01010deab626432611551eda3c1d7f-us17'
                    }
                });

// Now use it!
                fetch(request).then(function (data) {
                    console.log(data);
                });