export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'beyond-sport'),
			user: env('DATABASE_USERNAME', 'admin'),
			password: env('DATABASE_PASSWORD', 'LAemkgJvbLFFpjpDXTWXxG6x'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
