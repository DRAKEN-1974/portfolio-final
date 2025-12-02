import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'Tools, hardware, and software I use for Rust backend development.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A clean list of the tools, hardware, and development setup I use daily for building Rust backends, experimenting with systems programming, and creating high-performance applications."
        />

        {/* ---------------------- DEVELOPMENT SECTION ----------------------- */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    My main editor is <Link href="https://code.visualstudio.com/">VS Code</Link> or  
                    <Link href="https://helix-editor.com/"> Helix</Link> depending on the project.  
                    VS Code for bigger projects, Helix for fast Rust hacking.
                  </ListItem>

                  <ListItem>
                    I build backend services using{' '}
                    <Link href="https://actix.rs/">Actix Web</Link> and{' '}
                    <Link href="https://rocket.rs/">Rocket</Link>.  
                    For low-level experimentation I also use <Link href="https://tokio.rs/">Tokio</Link>.
                  </ListItem>

                  <ListItem>
                    My Rust crates of choice:  
                    <strong>sqlx</strong> for DB, <strong>serde</strong> for serialization,  
                    <strong>reqwest</strong> for HTTP,  
                    <strong>jsonwebtoken</strong> for auth,  
                    <strong>tracing</strong> for logs.
                  </ListItem>

                  <ListItem>
                    For databases, I mainly use{' '}
                    <Link href="https://www.postgresql.org/">PostgreSQL</Link>.  
                    When I need something embedded or extremely light, I switch to SQLite.
                  </ListItem>

                  <ListItem>
                    I work on Linux full-time and use <strong>Cargo</strong> for everything —  
                    builds, testing, benchmarking, release pipelines.
                  </ListItem>

                  <ListItem>
                    For API testing, I use{' '}
                    <Link href="https://www.brimdata.io/">Bruno</Link> or simple CLI tools like curl & httpie.
                  </ListItem>

                  <ListItem>
                    For animations, 3D, or web front-ends, I use{' '}
                    <Link href="https://threejs.org/">three.js</Link> +{' '}
                    <Link href="https://gsap.com/">GSAP</Link> when needed.  
                    Frontend is not my main focus, but I build functional UIs when required.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ---------------------- SYSTEM SECTION ----------------------- */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Tools & Workflow</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <strong>Starship</strong> as my terminal prompt with fast-fetch for system stats.
                  </ListItem>

                  <ListItem>
                    <strong>Alacritty</strong> is my go-to terminal — minimal, GPU-accelerated, and fast.
                  </ListItem>

                  <ListItem>
                    Package managers: <strong>pacman</strong>,{' '}
                    <strong>yay</strong> for AUR, and <strong>rustup</strong> for toolchains.
                  </ListItem>

                  <ListItem>
                    For notes and planning, I use <Link href="https://obsidian.md/">Obsidian</Link>.
                  </ListItem>

                  <ListItem>
                    For DevOps I use Docker, systemd services, and server-side Linux deployments.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ---------------------- HARDWARE SECTION ----------------------- */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom-built Linux Machine</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Arch Linux / Ubuntu (depending on work)</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Firefox / Zen Browser</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1080p / 144hz display (upgrading soon)</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Mechanical Keyboard (Red switches)</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech G304</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Linux-running laptop for coding on the go</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Sony / Boat depending on work</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Basic condenser mic</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </>
  );
};
