import { Configuration, PlaidApi, PlaidEnvironments} from 'plaid';

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {

    }

})