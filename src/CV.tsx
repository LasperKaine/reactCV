import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { styles } from "./styles/styles";
import { ResumeData } from "./types/resume";

interface Translations {
  links: string;
  skills: string;
  education: string;
  languages: string;
  about: string;
  experience: string;
}

// English translations (default)
const translationsEn: Translations = {
  links: "Links",
  skills: "Skills",
  education: "Education",
  languages: "Languages",
  about: "About",
  experience: "Experience",
};

// Finnish translations
const translationsFi: Translations = {
  links: "Linkit",
  skills: "Taidot",
  education: "Koulutus",
  languages: "Kielet",
  about: "Tietoa",
  experience: "Työkokemus",
};

interface CVDocumentProps {
  data: ResumeData & { language?: string };
}

export const CVDocument = ({ data }: CVDocumentProps) => {
  // Choose translations based on language
  const t = data.language === "fi" ? translationsFi : translationsEn;

  return (
    <Document>
      <Page style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.basics.name}</Text>
          {data.basics.summary && (
            <Text style={styles.title}>{data.basics.summary}</Text>
          )}
          <View style={styles.contactInfo}>
            {data.basics.email && <Text>{data.basics.email}</Text>}
            {data.basics.phone && <Text>{data.basics.phone}</Text>}
            {data.basics.location && <Text>{data.basics.location}</Text>}
          </View>
        </View>

        {/* MAIN 2-COLUMN LAYOUT */}
        <View style={styles.container}>
          {/* LEFT SIDEBAR */}
          <View style={styles.sidebar}>
            {/* LINKS */}
            {data.basics.profiles && data.basics.profiles.length > 0 && (
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.sectionTitle}>{t.links}</Text>
                {data.basics.profiles.map((profile, idx) => (
                  <View key={idx} style={{ marginBottom: 3 }}>
                    <Text style={{ ...styles.link, fontWeight: "bold", color: "#9d4edd" }}>
                      {profile.label}
                    </Text>
                    <Text 
                      style={{ ...styles.link, marginBottom: 0, color: "#b565f5", textDecoration: "underline" }}
                      {...({ href: profile.url, allowEmpty: true } as any)}
                    >
                      {profile.display || profile.url}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* SKILLS */}
            {data.skills && data.skills.length > 0 && (
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.sectionTitle}>{t.skills}</Text>
                {data.skills.map((skill, idx) => (
                  <View key={idx} style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>{skill.name}</Text>
                    <Text style={styles.skillText}>
                      {skill.keywords.join(", ")}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* EDUCATION */}
            {data.education && data.education.length > 0 && (
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.sectionTitle}>{t.education}</Text>
                {data.education.map((edu, idx) => (
                  <View key={idx} style={styles.educationItem}>
                    <Text style={styles.educationTitle}>
                      {edu.institution}
                    </Text>
                    <Text style={styles.educationSubtitle}>
                      {edu.studyType}
                    </Text>
                    <Text style={styles.educationSubtitle}>
                      {edu.startDate} - {edu.endDate}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* LANGUAGES */}
            {data.languages && data.languages.length > 0 && (
              <View>
                <Text style={styles.sectionTitle}>{t.languages}</Text>
                {data.languages.map((lang: any, idx: number) => (
                  <Text key={idx} style={{ fontSize: 8.5, color: "#555", marginBottom: 2 }}>
                    <Text style={{ fontWeight: "bold", color: "#9d4edd" }}>
                      {lang.language}
                    </Text>
                    {" - "}
                    {lang.fluency}
                  </Text>
                ))}
              </View>
            )}
          </View>

          {/* RIGHT MAIN CONTENT */}
          <View style={styles.mainContent}>
            {/* ABOUT */}
            {data.basics.about && (
              <View style={{ marginBottom: 12 }}>
                <Text style={styles.sectionTitle}>{t.about}</Text>
                <Text style={styles.description}>{data.basics.about}</Text>
              </View>
            )}

            {/* WORK EXPERIENCE */}
            {data.work && data.work.length > 0 && (
              <View>
                <Text style={styles.sectionTitle}>{t.experience}</Text>
                {data.work.map((job, idx) => (
                  <View key={idx} style={styles.jobEntry}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 2,
                      }}
                    >
                      <Text style={styles.jobTitle}>{job.position}</Text>
                      <Text style={styles.dates}>
                        {job.startDate} - {job.endDate}
                      </Text>
                    </View>
                    <Text style={styles.company}>{job.name}</Text>
                    {job.location && (
                      <Text style={{ fontSize: 8.5, color: "#7f8c8d" }}>
                        {job.location}
                      </Text>
                    )}
                    <Text style={styles.description}>
                      {job.summary}
                    </Text>
                    {job.skills && job.skills.length > 0 && (
                      <Text
                        style={{
                          fontSize: 8.5,
                          color: "#b565f5",
                          marginTop: 3,
                        }}
                      >
                        {job.skills.join(" • ")}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};