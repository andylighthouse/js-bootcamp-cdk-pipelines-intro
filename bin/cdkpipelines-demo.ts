#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkpipelinesDemoPipelineStack } from "../lib/cdkpipelines-demo-pipeline-stack";

const app = new App();

new CdkpipelinesDemoPipelineStack(app, "CdkpipelinesDemoPipelineStack", {
  env: { account: "213528851320", region: "us-east-1" },
});

app.synth();

// aws secretsmanager create-secret --region us-east-1 --name github-token --secret-string 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

// npx cdk bootstrap --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://213528851320/us-east-1
