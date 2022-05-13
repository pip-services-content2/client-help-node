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
exports.HelpDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { IHelpController } from 'service-help-nodex';
class HelpDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-help", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getTopics(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_topics');
            try {
                return yield this._controller.getTopics(correlationId, filter, paging);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getTopicById(correlationId, topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_topic_by_id');
            try {
                return yield this._controller.getTopicById(correlationId, topicId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createTopic(correlationId, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.create_topic');
            try {
                return yield this._controller.createTopic(correlationId, topic);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateTopic(correlationId, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.update_topic');
            try {
                return yield this._controller.updateTopic(correlationId, topic);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteTopicById(correlationId, topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.delete_topic_by_id');
            try {
                return yield this._controller.deleteTopicById(correlationId, topicId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getArticles(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_articles');
            try {
                return yield this._controller.getArticles(correlationId, filter, paging);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getRandomArticle(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_random_article');
            try {
                return yield this._controller.getRandomArticle(correlationId, filter);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getArticleById(correlationId, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_article_by_id');
            try {
                return yield this._controller.getArticleById(correlationId, articleId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createArticle(correlationId, article) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.create_article');
            try {
                return yield this._controller.createArticle(correlationId, article);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateArticle(correlationId, article) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.update_article');
            try {
                return yield this._controller.updateArticle(correlationId, article);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteArticleById(correlationId, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.delete_article_by_id');
            try {
                return yield this._controller.deleteArticleById(correlationId, articleId);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.HelpDirectClientV1 = HelpDirectClientV1;
//# sourceMappingURL=HelpDirectClientV1.js.map