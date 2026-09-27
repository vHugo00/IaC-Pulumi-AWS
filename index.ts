import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("my-bucket", {
bucket: 'vhugo00-iac-stg',
  tags: {
    IAC: "true",
  }, 
});

const ecr = new aws.ecr.Repository("my-ecr-repo", {
  name: 'vhugo00-iac-stg-ecr',
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

export const bucketName = bucket.id;
export const bucketArn = bucket.arn;
export const bucketRegion = bucket.region;

export const ecrName = ecr.name;
export const ecrRepoUrl = ecr.repositoryUrl;