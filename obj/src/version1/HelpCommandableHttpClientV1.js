"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCommandableHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class HelpCommandableHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/help');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getTopics(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_topics', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    getTopicById(correlationId, topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_topic_by_id', correlationId, {
                topic_id: topicId
            });
        });
    }
    createTopic(correlationId, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('create_topic', correlationId, {
                topic: topic,
            });
        });
    }
    updateTopic(correlationId, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('update_topic', correlationId, {
                topic: topic,
            });
        });
    }
    deleteTopicById(correlationId, topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('delete_topic_by_id', correlationId, {
                topic_id: topicId
            });
        });
    }
    getArticles(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_articles', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    getRandomArticle(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_random_article', correlationId, {
                filter: filter
            });
        });
    }
    getArticleById(correlationId, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_article_by_id', correlationId, {
                article_id: articleId
            });
        });
    }
    createArticle(correlationId, article) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('create_article', correlationId, {
                article: article
            });
        });
    }
    updateArticle(correlationId, article) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('update_article', correlationId, {
                article: article
            });
        });
    }
    deleteArticleById(correlationId, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('delete_article_by_id', correlationId, {
                article_id: articleId
            });
        });
    }
}
exports.HelpCommandableHttpClientV1 = HelpCommandableHttpClientV1;
//# sourceMappingURL=HelpCommandableHttpClientV1.js.map