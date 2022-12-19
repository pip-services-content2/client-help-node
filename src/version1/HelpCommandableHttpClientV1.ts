import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { HelpTopicV1 } from './HelpTopicV1';
import { HelpArticleV1 } from './HelpArticleV1';
import { IHelpClientV1 } from './IHelpClientV1';

export class HelpCommandableHttpClientV1 extends CommandableHttpClient implements IHelpClientV1 {

    constructor(config?: any) {
        super('v1/help');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getTopics(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<HelpTopicV1>> {
        let timing = this.instrument(correlationId, 'help.get_topics');

        try {
            let res: DataPage<HelpTopicV1> = await this.callCommand(
                'get_topics',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getTopicById(correlationId: string, topicId: string): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.get_topic_by_id');

        try {
            let res: HelpTopicV1 = await this.callCommand(
                'get_topic_by_id',
                correlationId,
                {
                    topic_id: topicId
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createTopic(correlationId: string, topic: HelpTopicV1): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.create_topic');

        try {
            let res: HelpTopicV1 = await this.callCommand(
                'create_topic',
                correlationId,
                {
                    topic: topic,
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateTopic(correlationId: string, topic: HelpTopicV1): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.update_topic');

        try {
            let res: HelpTopicV1 = await this.callCommand(
                'update_topic',
                correlationId,
                {
                    topic: topic,
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteTopicById(correlationId: string, topicId: string): Promise<HelpTopicV1> {
        let timing = this.instrument(correlationId, 'help.delete_topic_by_id');

        try {
            let res: HelpTopicV1 = await this.callCommand(
                'delete_topic_by_id',
                correlationId,
                {
                    topic_id: topicId
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getArticles(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<HelpArticleV1>> {
        let timing = this.instrument(correlationId, 'help.get_articles');

        try {
            let res: DataPage<HelpArticleV1> = await this.callCommand(
                'get_articles',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getRandomArticle(correlationId: string, filter: FilterParams): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.get_random_article');

        try {
            let res: HelpArticleV1 = await this.callCommand(
                'get_random_article',
                correlationId,
                {
                    filter: filter
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getArticleById(correlationId: string, articleId: string): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.get_article_by_id');

        try {
            let res: HelpArticleV1 = await this.callCommand(
                'get_article_by_id',
                correlationId,
                {
                    article_id: articleId
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createArticle(correlationId: string, article: HelpArticleV1): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.create_article');

        try {
            let res: HelpArticleV1 = await this.callCommand(
                'create_article',
                correlationId,
                {
                    article: article
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateArticle(correlationId: string, article: HelpArticleV1): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.update_article');

        try {
            let res: HelpArticleV1 = await this.callCommand(
                'update_article',
                correlationId,
                {
                    article: article
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteArticleById(correlationId: string, articleId: string): Promise<HelpArticleV1> {
        let timing = this.instrument(correlationId, 'help.delete_article_by_id');

        try {
            let res: HelpArticleV1 = await this.callCommand(
                'delete_article_by_id',
                correlationId,
                {
                    article_id: articleId
                }
            );
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}
