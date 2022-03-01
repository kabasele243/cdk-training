import {
    APIGatewayProxyEventV2,
    Context,
    APIGatewayProxyResultV2,
  } from 'aws-lambda';
 
  
  async function firstRoute(
    event: APIGatewayProxyEventV2,
    context: Context
  ): Promise<APIGatewayProxyResultV2> {
   
      return {
        statusCode: 500,
        body: 'Tala kaka biso!',
      };
  }
  
  export { firstRoute };
  