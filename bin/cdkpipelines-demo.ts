#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkpipelinesDemoPipelineStack } from "../lib/cdkpipelines-demo-pipeline-stack";

const app = new App();

new CdkpipelinesDemoPipelineStack(app, "CdkpipelinesDemoPipelineStack", {
  env: { account: "037628486752", region: "us-east-1" },
});

app.synth();

// aws secretsmanager create-secret --region us-east-1 --name github-token --secret-string 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
