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
                let res = yield this._controller.getTopics(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getTopicById(correlationId, topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_topic_by_id');
            try {
                let res = yield this._controller.getTopicById(correlationId, topicId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createTopic(correlationId, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.create_topic');
            try {
                let res = yield this._controller.createTopic(correlationId, topic);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateTopic(correlationId, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.update_topic');
            try {
                let res = yield this._controller.updateTopic(correlationId, topic);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteTopicById(correlationId, topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.delete_topic_by_id');
            try {
                let res = yield this._controller.deleteTopicById(correlationId, topicId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getArticles(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_articles');
            try {
                let res = yield this._controller.getArticles(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getRandomArticle(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_random_article');
            try {
                let res = yield this._controller.getRandomArticle(correlationId, filter);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getArticleById(correlationId, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.get_article_by_id');
            try {
                let res = yield this._controller.getArticleById(correlationId, articleId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createArticle(correlationId, article) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.create_article');
            try {
                let res = yield this._controller.createArticle(correlationId, article);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateArticle(correlationId, article) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.update_article');
            try {
                let res = yield this._controller.updateArticle(correlationId, article);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteArticleById(correlationId, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'help.delete_article_by_id');
            try {
                let res = yield this._controller.deleteArticleById(correlationId, articleId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.HelpDirectClientV1 = HelpDirectClientV1;
//# sourceMappingURL=HelpDirectClientV1.js.map