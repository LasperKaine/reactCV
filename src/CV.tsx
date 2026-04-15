import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { Box, TimelineItem } from "./components/index";
import { ResumeData } from "./types/resume";

export const CVDocument = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page style={{ padding: 30, fontSize: 10 }}>
      {/* HEADER */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {data.basics.name}
        </Text>
        {data.basics.summary && (
          <Text style={{ marginTop: 5 }}>{data.basics.summary}</Text>
        )}

        <View style={{ marginTop: 5 }}>
          <Text>{data.basics.email}</Text>
          {data.basics.phone && <Text>{data.basics.phone}</Text>}
          {data.basics.profiles?.map((p: any, i: number) => (
            <Text key={i}>{p.url}</Text>
          ))}
        </View>
      </View>

      {/* MAIN 2-COLUMN LAYOUT */}
      <View style={{ flexDirection: "row" }}>
        {/* LEFT SIDEBAR */}
        <View style={{ width: "35%", paddingRight: 15 }}>
          {/* EDUCATION */}
          {data.education?.length > 0 && (
            <Box title="Education">
              {data.education.map((edu, idx) => (
                <View key={idx} style={{ marginBottom: 8 }}>
                  <Text style={{ fontWeight: "bold" }}>{edu.institution}</Text>
                  <Text>{edu.studyType}</Text>
                  <Text>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
              ))}
            </Box>
          )}

          {/* SKILLS */}
          {data.skills?.length ? (
            <Box title="Skills">
              {data.skills.map((skill: any, idx: number) => (
                <View key={idx} style={{ marginBottom: 6 }}>
                  <Text style={{ fontWeight: 'bold' }}>{skill.name}</Text>
                  <Text>{skill.keywords.join(', ')}</Text>
                </View>
              ))}
            </Box>
          ) : null}

          {/* LANGUAGES */}
          {data.languages?.length ? (
            <Box title="Languages">
              {data.languages.map((lang: any, idx: number) => (
                <Text key={idx}>
                  {lang.language} - {lang.fluency}
                </Text>
              ))}
            </Box>
          ) : null}
        </View>

        {/* RIGHT MAIN CONTENT */}
        <View style={{ width: "65%" }}>
          {/* WORK */}
          {data.work?.length > 0 && (
            <Box title="Experience" color={data.work[0]?.color}>
              {data.work.map((job, idx) => (
                <View key={idx} style={{ marginBottom: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    {job.position} - {job.name}
                  </Text>
                  <Text style={{ fontSize: 9, marginBottom: 4 }}>
                    {job.startDate} - {job.endDate}
                  </Text>
                  <Text>{job.summary}</Text>
                </View>
              ))}
            </Box>
          )}
        </View>
      </View>
    </Page>
  </Document>
);
