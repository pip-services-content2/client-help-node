import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { HelpTopicV1 } from './HelpTopicV1';
import { HelpArticleV1 } from './HelpArticleV1';
import { IHelpClientV1 } from './IHelpClientV1';
//import { IHelpController } from 'service-help-nodex';

export class HelpDirectClientV1 extends DirectClient<any> implements IHelpClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-help", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getTopics(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<HelpTopicV1>> {
        let timing = this.instrument(correlationId, 'help.get_topics');
        
        try {
            return await this._controller.getTopics(correlationId, filter, paging);
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
            return await this._controller.getTopicById(correlationId, topicId);
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
            return await this._controller.createTopic(correlationId, topic);
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
            return await this._controller.updateTopic(correlationId, topic);
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
            return await this._controller.deleteTopicById(correlationId, topicId);
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
            return await this._controller.getArticles(correlationId, filter, paging);
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
            return await this._controller.getRandomArticle(correlationId, filter);
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
            return await this._controller.getArticleById(correlationId, articleId);
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
            return await this._controller.createArticle(correlationId, article);
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
            return await this._controller.updateArticle(correlationId, article);
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
            return await this._controller.deleteArticleById(correlationId, articleId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
}