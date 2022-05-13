# Help Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-help](https://github.com/pip-services-content2/service-help-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* AWS Lambda client
* Direct client

<a name="links"></a> Quick Links:

* [Development Help](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

TODO: Rewrite documentation!

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-help-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-help-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.HelpHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
} catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Create a new help
let help = await client.createHelp(
    null,
    { 
        type: 'introduction',
        app: 'Test App 1',
        pages: [
            { 
                title: { en: 'Welcome to Test App 1' } 
            }
        ]
    }
);
```

```javascript
// Get a random intro help for app1
let help = await client.getRandomHelp(
    null,
    {
        type: 'introduction',
        app: 'app1'
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

