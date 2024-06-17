import AWS from 'aws-sdk';

const ssm = new AWS.SSM({ region: 'your-region' });

export async function getDatabaseUrl(): Promise<string> {
  const params = {
    Names: [
      '/my-app/db/host',
      '/my-app/db/port',
      '/my-app/db/name',
      '/my-app/db/user',
      '/my-app/db/password'
    ],
    WithDecryption: true
  };

  const response = await ssm.getParameters(params).promise();

  const dbParams = response.Parameters?.reduce((acc: any, param: any) => {
    const name = param.Name.split('/').pop();
    acc[name] = param.Value;
    return acc;
  }, {});

  if (!dbParams) {
    throw new Error('Failed to retrieve database parameters');
  }

  const { host, port, name, user, password } = dbParams;

  return `mysql://${user}:${password}@${host}:${port}/${name}`;
}
