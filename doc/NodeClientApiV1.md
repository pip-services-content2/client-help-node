# Client API (version 1) <br/> Help Microservices Client SDK for Node.js

Node.js client API for Help microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [HelpPageV1 class](#class1)
* [HelpV1 class](#class2)
* [IHelpClientV1 interface](#interface)
    - [getHelp()](#operation1)
    - [getRandomHelp()](#operation2)
    - [getHelpById()](#operation3)
    - [createHelp()](#operation4)
    - [updateHelp()](#operation5)
    - [deleteHelpById()](#operation6)
* [HelpHttpClientV1 class](#client_http)
* [HelpLambdaClientV1 class](#client_lambda)
* [HelpDirectClientV1 class](#client_direct)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

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

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
let sdk = new require('client-help-node');

// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
let client = sdk.HelpHttpClientV1(config);

// Open client connection to the microservice
await client.open(null, function(err) {

console.log('Opened connection');
        
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
            
console.log('Created help is');
console.log(help);
            
// Get a random intro help for app1
help = await client.getRandomHelp(
    null,
    {
        type: 'introduction',
        app: 'app1'
    }
);

console.log('Random help is');
console.log(help);      

// Close connection
await client.close(null); 
```

## Data types

### <a name="class1"></a> HelpPageV1 class

Contains single page from a help

**Properties:**
- title: MultiString - page title in multiple lanuguages
- content: MultiString - page content in multiple languages
- more_url: string - Url with additional information
- color: string - page background color code or name
- pic_id: string - picture block id from blobs to show at the page

### <a name="class4"></a> HelpV1 class

Represents a system help. 

**Properties:**
- id: string - unique help id
- type: string - help type, i.e. 'introduction', 'new release', etc.
- app: string - (optional) application name
- version: string - (optional) application version
- create_time: Date - date and time when help was created
- pages: [HelpPageV1] - (optional) array of pages
- tags: [string] - (optional) explicit tags with annoucement topic for searching
- all_tags: [string] - (readonly) normalized array of explicit and hash tags used by search
- status: string - editing status: 'new', 'writing', 'translating', 'completed' (default: 'new')
- custom_hdr: Object - custom data summary that is always returned (in list and details)
- custom_dat: Object - custom data details that is returned only when a single object is returned (details)

## <a name="interface"></a> IHelpClientV1 interface

If you are using Typescript, you can use IHelpClientV1 as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IHelpClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IHelpClientV1 {
    getHelp(correlationId, filter, paging);
    getRandomHelp(correlationId, filter);
    getHelpById(correlationId, helpId);
    createHelp(correlationId, help, user);
    updateHelp(correlationId, helpId, update, user);
    deleteHelpById(correlationId, helpId);
}
```

### <a name="operation1"></a> getHelp(correlationId, filter, paging)

Retrieves a list of help by specified criteria

**Params properties:** 
- correlationId: string - id that uniquely identifies transaction
- filter: object - filter parameters
  - type: string - (optional) help type
  - app: string - (optional) application name
  - version: string - (optional) application version
  - status: string - (optional) editing status
  - tags: [string] - search tags
- paging: object - paging parameters
  - paging: bool - (optional) true to enable paging and return total count
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
- returns: DataPage<HelpV1> - retrieved page of Help objects

### <a name="operation3"></a> getHelpById(correlationId, helpId)

Retrieves help by its unique id. 

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- helpId: string - unique help id
- returns: HelpV1 - retrieved Help object

### <a name="operation4"></a> createHelp(correlationId, help)

Creates an help

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- help: HelpV1 - a help to be created
- returns: HelpV1 - created Help object
 
### <a name="operation5"></a> updateHelp(correlationId, help)

Updates an help

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- help: HelpV1 - a help to be updated
- returns: HelpV1 - updated Help object
 
### <a name="operation6"></a> deleteHelpById(correlationId, helpId)

Deletes system help specified by its unique id.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- helpId: string - unique help id
 
## <a name="client_http"></a> HelpHttpClientV1 class

HelpHttpClientV1 is a client that implements HTTP protocol

```javascript
class HelpHttpClientV1 extends CommandableHttpClient implements IHelpClientV1 {
    constructor(config: any);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getHelp(correlationId, filter, paging);
    getRandomHelp(correlationId, filter);
    getHelpById(correlationId, helpId);
    createHelp(fcorrelationId, eedback, user);
    updateHelp(correlationId, helpId, update, user);
    deleteHelpById(correlationId, helpId);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number
```
