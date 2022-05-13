import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { HelpTopicsMemoryPersistence } from 'service-help-node';
import { HelpArticlesMemoryPersistence } from 'service-help-node';
import { HelpController } from 'service-help-node';
import { HelpDirectClientV1 } from '../../src/version1/HelpDirectClientV1';
import { HelpClientFixtureV1 } from './HelpClientFixtureV1';

suite('HelpDirectClientV1', ()=> {
    let client: HelpDirectClientV1;
    let fixture: HelpClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistenceTopics = new HelpTopicsMemoryPersistence();
        let persistenceArticles = new HelpArticlesMemoryPersistence();
        let controller = new HelpController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-help', 'persistence-topics', 'memory', 'default', '1.0'), persistenceTopics,
            new Descriptor('service-help', 'persistence-articles', 'memory', 'default', '1.0'), persistenceArticles,
            new Descriptor('service-help', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new HelpDirectClientV1();
        client.setReferences(references);

        fixture = new HelpClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('Topics CRUD Operations', async () => {
        await fixture.testTopicsCrudOperations();
    });

    test('Articles CRUD Operations', async () => {
        await fixture.testArticlesCrudOperations();
    });
    
});
