"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const HelpDirectClientV1_1 = require("../version1/HelpDirectClientV1");
const HelpCommandableHttpClientV1_1 = require("../version1/HelpCommandableHttpClientV1");
const HelpCommandableLambdaClientV1_1 = require("../version1/HelpCommandableLambdaClientV1");
class HelpClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(HelpClientFactory.DirectClientV1Descriptor, HelpDirectClientV1_1.HelpDirectClientV1);
        this.registerAsType(HelpClientFactory.CmdHttpClientV1Descriptor, HelpCommandableHttpClientV1_1.HelpCommandableHttpClientV1);
        this.registerAsType(HelpClientFactory.CmdLambdaClientV1Descriptor, HelpCommandableLambdaClientV1_1.HelpCommandableLambdaClientV1);
    }
}
exports.HelpClientFactory = HelpClientFactory;
HelpClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'factory', 'default', 'default', '1.0');
HelpClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'client', 'direct', 'default', '1.0');
HelpClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'client', 'commandable-http', 'default', '1.0');
HelpClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-help', 'client', 'commandable-lambda', 'default', '1.0');
//# sourceMappingURL=HelpClientFactory.js.map