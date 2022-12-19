import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { HelpTopicV1 } from './HelpTopicV1';
import { HelpArticleV1 } from './HelpArticleV1';
import { IHelpClientV1 } from './IHelpClientV1';

export class HelpCommandableLambdaClientV1 extends CommandableLambdaClient implements IHelpClientV1 {

    constructor(config?: any) {
        super('help');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
       
    public async getTopics(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<HelpTopicV1>> {
        return await this.callCommand(
            'get_topics',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getTopicById(correlationId: string, topicId: string): Promise<HelpTopicV1> {
        return await this.callCommand(
            'get_topic_by_id',
            correlationId,
            {
                topic_id: topicId
            }
        );
    }

    public async createTopic(correlationId: string, topic: HelpTopicV1): Promise<HelpTopicV1> {
        return await this.callCommand(
            'create_topic',
            correlationId,
            {
                topic: topic,
            }
        );
    }

    public async updateTopic(correlationId: string, topic: HelpTopicV1): Promise<HelpTopicV1> {
        return await this.callCommand(
            'update_topic',
            correlationId,
            {
                topic: topic,
            }
        );
    }

    public async deleteTopicById(correlationId: string, topicId: string): Promise<HelpTopicV1> {
        return await this.callCommand(
            'delete_topic_by_id',
            correlationId,
            {
                topic_id: topicId
            }
        );
    }

    public async getArticles(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<HelpArticleV1>> {
        return await this.callCommand(
            'get_articles',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getRandomArticle(correlationId: string, filter: FilterParams): Promise<HelpArticleV1> {
        return await this.callCommand(
            'get_random_article',
            correlationId,
            {
                filter: filter
            }
        );
    }

    public async getArticleById(correlationId: string, articleId: string): Promise<HelpArticleV1> {
        return await this.callCommand(
            'get_article_by_id',
            correlationId,
            {
                article_id: articleId
            }
        );
    }

    public async createArticle(correlationId: string, article: HelpArticleV1): Promise<HelpArticleV1> {
        return await this.callCommand(
            'create_article',
            correlationId,
            {
                article: article
            }
        );
    }

    public async updateArticle(correlationId: string, article: HelpArticleV1): Promise<HelpArticleV1> {
        return await this.callCommand(
            'update_article',
            correlationId,
            {
                article: article
            }
        );
    }

    public async deleteArticleById(correlationId: string, articleId: string): Promise<HelpArticleV1> {
        return await this.callCommand(
            'delete_article_by_id',
            correlationId,
            {
                article_id: articleId
            }
        );
    }

}
