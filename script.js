const API = "https://economia.awesomeapi.com.br/json/last/";
const https = require('https');

function fetch(url){
  return new Promise((resolve, reject) => {
    https.get(url, (resposta) => {
      let data = '';
      resposta.on('data', (chunk) => {
        data += chunk;
      });
      resposta.on('end', () => {
        resolve(JSON.parse(data));
      });
      resposta.on('error', (err) => {
        reject(err);
      });
    });
  });
}