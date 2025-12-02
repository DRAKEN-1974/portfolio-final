import { Heading } from "~/components/heading";
import { Text } from "~/components/text";

export default function ActixCrudArticle() {
  return (
    <div style={{ padding: "40px 0" }}>
      <Heading level={2}>Creating a Basic CRUD Application in Actix-Web</Heading>
      <Text size="s" style={{ opacity: 0.7 }}>Published on Nov 23, 2025</Text>

      <Text>
        In this tutorial, we build a basic CRUD application using the Rust framework
        Actix-Web. This guide is beginner-friendly and explains every component clearly.
      </Text>

      <Heading level={3}>Dependencies</Heading>
      <pre>
{`[dependencies]
actix-web = "4.12.0"
dotenv = "0.15.0"
serde = "1.0.228"
sqlx = { version = "0.8", features = ["runtime-tokio", "postgres"] }
uuid = { version = "1", features = ["v4"] }`}
      </pre>

      <Heading level={3}>Basic Server Setup</Heading>
      <pre>
{`#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(index))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}`}
      </pre>

      <Heading level={3}>Database Setup</Heading>
      <pre>
{`async fn get_db() -> PgPool {
    let db_url = env::var("DATABASE_URL").expect("Could not find the db url");
    PgPoolOptions::new()
        .max_connections(10)
        .connect(&db_url)
        .await
        .expect("Could not connect to the db")
}`}
      </pre>
    </div>
  );
}
