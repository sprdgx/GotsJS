# 🔒 GotsJS - Go Js TLS Library

GotsJS is a Golang JavaScript library for generating self-signed TLS certificates and managing TLS connections. It simplifies the process of handling TLS certificates, especially for development and testing purposes.

## ✨ Features 

  **Certificate Generation:**
    Easily generate self-signed TLS certificates with a simple function call.

  **Key Pair Creation:**
    Create private key and public key pairs for secure communication.

  **Certificate Storage:** 
    Save generated certificates and keys to specified directories.

  **Flexible Configuration:**
    Customize certificate and key file names and output directories as per your needs.
    
  **Error Handling:** 
    Comprehensive error handling for smooth troubleshooting and debugging.

## ⚙️ Installation

To start using GotsJS in your Node.js project:

**You can install it via NPM**
    
    npm install gotsjs

## 🔧 Usage

Here's an example of how you can utilize GotsJS to generate self-signed TLS certificates and set up an HTTPS server:

1. **Import GotsJS: Import GotsJS into your project using require:**

   ```bash
   const gots = require('gotsjs');

2. **Generate TLS Certificate: Generate a self-signed TLS certificate and private key:**
   
   ```bash
   gots.generateAndSaveCert('certificate.pem', 'private_key.pem', './certificates');
   
3. **Set Up HTTPS Server: Create an HTTPS server using the generated certificate and private key:**

   ```bash

    // Paths for certificate and key files
    const certPath = 'certificate.pem';
    const keyPath = 'private_key.pem';
    const outputDir = './certs'; // User-defined output directory

    // Generate and save certificate and private key using gots library
    gots.generateAndSaveCert(certPath, keyPath, outputDir);

    const app = express();

    // Define routes
    app.get('/', (req, res) => {
    res.send('Hello, HTTPS!');
    });

    // Set up HTTPS server
    const options = {
    key: fs.readFileSync(path.join(outputDir, keyPath)), // Use output directory for key path
    cert: fs.readFileSync(path.join(outputDir, certPath)) // Use output directory for cert path
    };

    const server = https.createServer(options, app);

    // Start the server
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });

## 🤔 Why Use GotsJS? 

  **Simplicity:**
    Easily generate self-signed TLS certificates without complex configurations.

  **Convenience:**
    Simplify TLS certificate management for development and testing purposes.

  **Flexibility:** 
    Integrate TLS functionality seamlessly into Node.js applications.

## 🤝 Contributing

Contributions to GotsJS are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on [GitHub repository ](https://github.com/sprdgx/GotsJS).

## 📄 License

This project is licensed under the MIT License.


**Thank you for choosing GotsJS for your TLS certificate generation and management! If you have any questions, need assistance, or want to contribute to the project, feel free to reach out. Happy secure communication with GotsJS! 🌟**
