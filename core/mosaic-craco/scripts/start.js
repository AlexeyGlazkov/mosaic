process.env.NODE_ENV = process.env.NODE_ENV || "development";

const { overrideWebpackDev } = require("../lib/features/webpack/override");
const { overrideDevServer } = require("../lib/features/dev-server/override");
const { start } = require("../lib/cra");
const { initialize } = require("./script");

const { craco, context } = initialize();

craco.then(
    (cracoConfig) => {
        overrideWebpackDev(cracoConfig, context);
        overrideDevServer(cracoConfig, context);
        start(cracoConfig);
    }
);
