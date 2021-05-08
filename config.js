const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "uk-co-noizebox-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://tgfmmzpt04.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_8E1eh0OJx",
      APP_CLIENT_ID: "7v6eiu2tt8e59dc93obeps1d1b",
      IDENTITY_POOL_ID: "us-east-1:045eed9f-450b-4117-91ae-a187f7741cd",
    },
  };
  
  export default config;