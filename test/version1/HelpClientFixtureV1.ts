const assert = require('chai').assert;

import { MultiString } from 'pip-services3-commons-nodex';

import { IHelpClientV1 } from '../../src/version1/IHelpClientV1';
import { HelpTopicV1 } from '../../src/version1/HelpTopicV1';
import { HelpArticleV1 } from '../../src/version1/HelpArticleV1';

let HELP_TOPIC1 = <HelpTopicV1>{
    id: '1',
    app: 'Test App 1',
    title: new MultiString({ en: 'Main topic' })
};
let HELP_TOPIC2 = <HelpTopicV1>{
    id: '2',
    parent_id: '1',
    app: 'Test App 1',
    title: new MultiString({ en: 'Subtopic 1' }),
    popular: true
};

let HELP_ARTICLE1 = <HelpArticleV1>{
    id: '1',
    topic_id: '1',
    app: 'Test App 1',
    min_ver: 0,
    max_ver: 9999,
    status: 'new'
};
let HELP_ARTICLE2 = <HelpArticleV1>{
    id: '2',
    tags: ['TAG 1'],
    all_tags: ['tag1'],
    topic_id: '1',
    app: 'Test App 1',
    min_ver: 2,
    max_ver: 9999,
    status: 'new'
};

export class HelpClientFixtureV1 {
    private _client: IHelpClientV1;
    
    constructor(client: IHelpClientV1) {
        this._client = client;
    }
        
    public async testTopicsCrudOperations() {
        let topic1, topic2: HelpTopicV1;

        // Create one topic
        let topic = await this._client.createTopic(null, HELP_TOPIC1);

        assert.isObject(topic);
        assert.equal(topic.id, HELP_TOPIC1.id);
        assert.equal(topic.app, HELP_TOPIC1.app);

        topic1 = topic;

        // Create another topic
        topic = await this._client.createTopic(null, HELP_TOPIC2);

        assert.isObject(topic);
        assert.equal(topic.id, HELP_TOPIC2.id);
        assert.equal(topic.app, HELP_TOPIC2.app);

        topic2 = topic;

        // Get all topics
        let page = await this._client.getTopics(null, null, null);

        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        // Update the topic
        topic1.app = 'New App 1';

        topic = await this._client.updateTopic(null, topic1);

        assert.isObject(topic);
        assert.equal(topic.app, 'New App 1');
        assert.equal(topic.id, HELP_TOPIC1.id);

        topic1 = topic;

        // Delete topic
        await this._client.deleteTopicById(null, topic1.id);

        // Try to get delete topic
        topic = await this._client.getTopicById(null, topic1.id);

        assert.isNull(topic || null);
    }

    public async testArticlesCrudOperations() {
        let article1, article2: HelpArticleV1;

        // Create one article
        let article = await this._client.createArticle(null, HELP_ARTICLE1);

        assert.isObject(article);
        assert.equal(article.id, HELP_ARTICLE1.id);
        assert.equal(article.app, HELP_ARTICLE1.app);

        article1 = article;
        
        // Create another article
        article = await this._client.createArticle(null, HELP_ARTICLE2);

        assert.isObject(article);
        assert.equal(article.id, HELP_ARTICLE2.id);
        assert.equal(article.app, HELP_TOPIC2.app);

        article2 = article;

        // Get all articles
        let page = await this._client.getArticles(null, null, null);

        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        // Update the article
        article1.app = 'New App 1';

        article = await this._client.updateArticle(null, article1);

        assert.isObject(article);
        assert.equal(article.app, 'New App 1');
        assert.equal(article.id, HELP_TOPIC1.id);

        article1 = article;

        // Delete article
        await this._client.deleteArticleById(null, article1.id);

        // Try to get deleted article
        article = await this._client.getArticleById(null, article1.id);

        assert.isNull(article || null);
    }

}
