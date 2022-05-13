"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const HelpDirectClientV1_1 = require("../version1/HelpDirectClientV1");
const HelpHttpClientV1_1 = require("../version1/HelpHttpClientV1");
const HelpLambdaClientV1_1 = require("../version1/HelpLambdaClientV1");
class HelpClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(HelpClientFactory.DirectClientV1Descriptor, HelpDirectClientV1_1.HelpDirectClientV1);
        this.registerAsType(HelpClientFactory.HttpClientV1Descriptor, HelpHttpClientV1_1.HelpHttpClientV1);
        this.registerAsType(HelpClientFactory.LambdaClientV1Descriptor, HelpLambdaClientV1_1.HelpLambdaClientV1);
    }
}
exports.HelpClientFactory = HelpClientFactory;
HelpClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'factory', 'default', 'default', '1.0');
HelpClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'client', 'direct', 'default', '1.0');
HelpClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'client', 'http', 'default', '1.0');
HelpClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=HelpClientFactory.js.map