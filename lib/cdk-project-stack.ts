import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkProjectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const bucket = new Bucket(this, 'TutoStorage', {
      encryption: BucketEncryption.S3_MANAGED,
    });

    const firstRoute = new lambda.NodejsFunction(this, 'MySimpleAppLambda', {
      runtime: Runtime.NODEJS_12_X,
      entry: path.join(__dirname, '..', 'api', 'firstroute', 'index.ts'),
      handler: 'firstRoute'
    });

    new CfnOutput(this, 'TutoStorageExport', {
      value: bucket.bucketName,
      exportName: 'TutoStorageBucketName',
    });
  }

}
