import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { HelpTopicsMemoryPersistence } from 'service-help-node';
import { HelpArticlesMemoryPersistence } from 'service-help-node';
import { HelpController } from 'service-help-node';
import { HelpHttpServiceV1 } from 'service-help-node';
import { HelpHttpClientV1 } from '../../src/version1/HelpHttpClientV1';
import { HelpClientFixtureV1 } from './HelpClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('HelpHttpClientV1', ()=> {
    let service: HelpHttpServiceV1;
    let client: HelpHttpClientV1;
    let fixture: HelpClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistenceTopics = new HelpTopicsMemoryPersistence();
        let persistenceArticles = new HelpArticlesMemoryPersistence();
        let controller = new HelpController();

        service = new HelpHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-help', 'persistence-topics', 'memory', 'default', '1.0'), persistenceTopics,
            new Descriptor('service-help', 'persistence-articles', 'memory', 'default', '1.0'), persistenceArticles,
            new Descriptor('service-help', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-help', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new HelpHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new HelpClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('Topics CRUD Operations', async () => {
        await fixture.testTopicsCrudOperations();
    });

    test('Articles CRUD Operations', async () => {
        await fixture.testArticlesCrudOperations();
    });
    
});
