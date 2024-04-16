const gots = require('gotsjs');// Generate and save certificate and private key using gots library   

gots.generateAndSaveCert('certificate.pem', 'private_key.pem', './certs'); // Print a message indicating completion

console.log('Certificate and Private Key generation initiated.');