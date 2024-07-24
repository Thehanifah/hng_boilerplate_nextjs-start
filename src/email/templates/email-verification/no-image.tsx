import {
  Button,
  Column,
  Heading,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface IProperties {
  title: string;
  username: string;
  statementOne: string;
  statementTwo: string;
  statementThree: string;
  buttonTitle: string;
  buttonLink: string;
}

export default function Email(properties: IProperties) {
  const {
    title,
    username,
    statementOne,
    statementTwo,
    statementThree,
    buttonTitle,
    buttonLink,
  } = properties;

  return (
    <Layout>
      <Preview>Password Reset for {username}</Preview>
      <Column align="center">
        <Section className="w-full max-w-[678px] py-12 md:py-14">
          <Heading
            as="h1"
            className="text-center text-[20px] text-[#0A0A0A] md:text-2xl"
          >
            {title}
          </Heading>
          <Section>
            <Heading
              as="h2"
              className="mb-8 text-left text-base text-[#111111] md:text-lg"
            >
              Hi John Doe,
            </Heading>
            <Text className="mb-7 text-justify text-sm text-[#434343] md:text-base">
              {statementOne}
            </Text>
            <Text className="mb-7 text-justify text-sm text-[#434343] md:text-base">
              {statementTwo}
            </Text>
            <Text className="text-justify text-sm text-[#434343] md:text-base">
              {statementThree}
            </Text>
            <div className="flex items-center justify-center">
              <Button
                className="w-full rounded-[8px] bg-[#F97316] px-10 py-3 text-center text-base font-medium text-[#FAF8F8] md:w-auto"
                href={buttonLink}
              >
                {buttonTitle}
              </Button>
            </div>
            <Text className="text-xs text-[#0F172A] md:text-base">
              Or copy this link:
              <Link
                className="text-[Primary/Primary Color] underline"
                href={buttonLink}
              >
                {buttonLink}
              </Link>
            </Text>
          </Section>
          <Section>
            <Heading as="h3" className="text-sm font-medium text-[#111111]">
              Regards,
            </Heading>
            <Heading as="h3" className="text-sm font-medium text-[#111111]">
              Boilerplate
            </Heading>
          </Section>
        </Section>
      </Column>
    </Layout>
  );
}

Email.PreviewProps = {
  title: "Introducing Our Latest Feature:",
  username: "John Doe",
  statementOne:
    "is designed to help you create shared spaces for collaboration. Invite team members, share files, and work together seamlessly. From project planning to brainstorming sessions, collaborative spaces foster productivity.. Whether you’re a seasoned user or just getting started, this enhancement will transform your experience.",
  statementTwo:
    "Collaborative Spaces allow you to create dedicated areas for teamwork. Whether it’s a project, brainstorming session, or ongoing discussion, team members can collaborate seamlessly within these spaces.",
  statementThree:
    "With Collaborative Spaces, accountability becomes clearer. Each team member’s contributions are visible within the shared space.",
  buttonTitle: "Verify Account",
  buttonLink: "https://i.imgur.com/jBHlv7Y.png",
} as IProperties;