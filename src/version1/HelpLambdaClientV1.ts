import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { HelpTopicV1 } from './HelpTopicV1';
import { HelpArticleV1 } from './HelpArticleV1';
import { IHelpClientV1 } from './IHelpClientV1';

export class HelpLambdaClientV1 extends CommandableLambdaClient implements IHelpClientV1 {

    constructor(config?: any) {
        super('help');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
       
    public async getTopics(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<HelpTopicV1>> {
        let timing = this.instrument(correlationId, 'help.get_topics');

        try {
            return await this.callCommand(
                'get_topics',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getTopicById(correlationId: string, topicId: string): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.get_topic_by_id');

        try {
            return await this.callCommand(
                'get_topic_by_id',
                correlationId,
                {
                    topic_id: topicId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createTopic(correlationId: string, topic: HelpTopicV1): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.create_topic');

        try {
            return await this.callCommand(
                'create_topic',
                correlationId,
                {
                    topic: topic,
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateTopic(correlationId: string, topic: HelpTopicV1): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.update_topic');

        try {
            return await this.callCommand(
                'update_topic',
                correlationId,
                {
                    topic: topic,
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteTopicById(correlationId: string, topicId: string): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.delete_topic_by_id');

        try {
            return await this.callCommand(
                'delete_topic_by_id',
                correlationId,
                {
                    topic_id: topicId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getArticles(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<HelpArticleV1>> {
        let timing = this.instrument(correlationId, 'help.get_articles');

        try {
            return await this.callCommand(
                'get_articles',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getRandomArticle(correlationId: string, filter: FilterParams): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.get_random_article');

        try {
            return await this.callCommand(
                'get_random_article',
                correlationId,
                {
                    filter: filter
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getArticleById(correlationId: string, articleId: string): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.get_article_by_id');

        try {
            return await this.callCommand(
                'get_article_by_id',
                correlationId,
                {
                    article_id: articleId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createArticle(correlationId: string, article: HelpArticleV1): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.create_article');

        try {
            return await this.callCommand(
                'create_article',
                correlationId,
                {
                    article: article
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateArticle(correlationId: string, article: HelpArticleV1): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.update_article');

        try {
            return await this.callCommand(
                'update_article',
                correlationId,
                {
                    article: article
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteArticleById(correlationId: string, articleId: string): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.delete_article_by_id');

        try {
            return await this.callCommand(
                'delete_article_by_id',
                correlationId,
                {
                    article_id: articleId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
