import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { HelpDirectClientV1 } from '../version1/HelpDirectClientV1';
import { HelpCommandableHttpClientV1 } from '../version1/HelpCommandableHttpClientV1';
import { HelpCommandableLambdaClientV1 } from '../version1/HelpCommandableLambdaClientV1';

export class HelpClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-help', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-help', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-help', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-help', 'client', 'commandable-lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(HelpClientFactory.DirectClientV1Descriptor, HelpDirectClientV1);
		this.registerAsType(HelpClientFactory.CmdHttpClientV1Descriptor, HelpCommandableHttpClientV1);
		this.registerAsType(HelpClientFactory.CmdLambdaClientV1Descriptor, HelpCommandableLambdaClientV1);
	}
	
}
