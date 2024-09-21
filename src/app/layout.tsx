import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ajay-Portfolio",
  description: `As a Full-Stack Developer with a specialization in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I am driven by the desire to make a meaningful impact through technology. With a strong foundation in Computer Science Engineering and a passion for staying up-to-date with the latest trends, I am constantly seeking new challenges that allow me to leverage my technical and management skills to contribute to organizational growth.

In my personal projects, I have demonstrated my ability to create practical and user-friendly applications. One such project is a Todo App, developed solely using React.js, with features including storing, adding, editing, deleting, and checking tasks. I leveraged device's local storage for efficient data management.

I am always eager to take on new challenges and collaborate with like-minded professionals to drive innovation and create impactful solutions.


My Skills :
        Languages:- C/C++, JAVA, JavaScript, Python, SQL, HTML, CSS.
        Library/Framework:- MongoDB, ExpressJS, ReactJS, NodeJS, Database, REST API.
        Tools/Others: Data Structure and Algorithms, Object Oriented Programming, Git/GitHub, Linux.
        Soft skills: Problem Solving, Time Management, Teamwork, Leadership, Teaching.

Finalist SIH'23 (Leadership) ✨

Learning DSA . Master of C++.  I have solved 300+ questions in LeetCode ( 100+ Easy, 100+ Medium and 30+ Hard) .
Specially C++ and Full-stack Developer. HTML || CSS || JavaScript , React.js

Learning DevOps 

My Hobby is Video Editing & coding.

I'm interested in being a Software Engineer.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profilepic.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
