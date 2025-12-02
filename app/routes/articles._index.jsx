import { Section } from "~/components/section";
import { Heading } from "~/components/heading";
import { Text } from "~/components/text";
import { Divider } from "~/components/divider";
import { DecoderText } from "~/components/decoder-text";
import { Transition } from "~/components/transition";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import styles from "./articles/articles.module.css";

export const loader = () => {
  return [
    {
      slug: "actix-crud",
      title: "Creating a basic CRUD app in Actix-Web",
      date: "Nov 23, 2025",
      description:
        "A clear, beginner-friendly tutorial for building CRUD in Rust using Actix-Web.",
      url: "https://medium.com/@lp3587269/creating-a-basic-crud-application-in-actix-web-1b8aa28fc789",
    },

    // 🔥 Add more articles like this:
    {
      slug: "Actix-web-guide",
      title: "JWT and security features in Actix-web",
      date: "Dec 5, 2025",
      description: "Learn async/await, executors, futures and concurrency patterns.",
      url: "https://medium.com/@lp3587269/actix-web-authorization-implementation-31cbcd8a7ac0"
    }
  ];
};

export default function Articles() {
  const posts = useLoaderData();
  const [visible, setVisible] = useState(true);

  return (
    <Section className={styles.articlesList}>
      {/* ✨ Animated Header */}
      <Transition in={visible} timeout={0}>
        {({ nodeRef }) => (
          <header className={styles.header} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-visible={visible}
              level={3}
              id="articles-title"
            >
              <DecoderText text="Latest Articles" start={visible} delay={300} />
            </Heading>

            <Text className={styles.subtitle} size="l" data-visible={visible}>
              Explore my latest tutorials, technical write-ups, and guides.
            </Text>

            <Divider
              notchWidth="64px"
              notchHeight="8px"
              collapsed={!visible}
              collapseDelay={900}
            />
          </header>
        )}
      </Transition>

      {/* ✨ Article List */}
      <div className={styles.list}>
        {posts.map((post, index) => (
          <a
            key={post.slug}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{
              animationDelay: `${index * 120 + 200}ms`,
            }}
          >
            <Heading level={4}>{post.title}</Heading>
            <Text size="s">{post.date}</Text>

            <Text size="s" className={styles.desc}>
              {post.description}
            </Text>

            <Text size="s" className={styles.readMore}>
              Read more →
            </Text>
          </a>
        ))}
      </div>
    </Section>
  );
}
