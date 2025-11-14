import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ankit",
  lastName: "Shah",
  name: `Ankit Shah`,
  role: "Interdisciplinary Biomedical Engineer",
  avatar: "/images/avatar.jpg",
  email: "shah731@purdue.edu",
  location: "America/Indianapolis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali", "Hindi", "Malayalam", "Maithili"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ankitshah59",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anki-tech/",
  },
  {
    name: "X",
    icon: "xai",
    link: "https://x.com/AnkiTechhy",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Purdue University</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ankit, a biomedical engineer at Purdue University
{/*       <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      /> */}
      , where I craft meaningful 
      <br /> solutions to complex biomedical challenges. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ankit-shah-bublag",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a biomedical engineer driven by the intersection of technology, materials, and intelligence. 
        My work focuses on developing systems that integrate electronics, data, and automation to enhance human health and performance. 
        With a foundation in engineering design, AI, and advanced manufacturing, I aim to push the boundaries of what’s possible in medical technology — creating solutions that are not only smart and connected, but also adaptive, precise, and scalable. 
        I believe innovation happens where biology meets computation, and I strive to engineer that frontier.
      </>
    ),
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>Proficient in hardware, software, and embedded systems programming: Modern Web, Desktop and iOS/Android cross platform Apps. Data Analysis and Database. Blockchain.</>
        ),
        tags: [
          {
            name: "C",
            icon: "coursera",
          },
            {
            name: "C++",
            icon: "cplusplus",
          },
          {
            name: "Python",
            icon: "python",
          },
          { 
            name: "C#",
            icon: "csharp",
          },
         {
            name: "MATLAB",
            icon: "matlab",
          },
          {
            name: "JavaScript",
            icon: "javascript", 
          },
          { name: "HTML5",
            icon: "html5",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
         {
            name: "Next.js",
            icon: "nextjs",
          },
          {name: "React Native",
            icon: "react",
          },
          {
            name: "SQL",
            icon: "mysql",
          },
          { name: "MongoDB",
            icon: "mongodb",
          },
          { name: "Swift",
            icon: "swift",
          },
          {name: "JAVA/Kotlin",
            icon: "androidstudio",
          },
          {name: ".NET",
            icon: "dotnet",
          },
          {name: "VHDL",
            icon: "wave",
          },
          {name: "MIPS",
            icon: "code",
          },
          {name: "R",
            icon: "r",
          },
          {
            name: "Solidity",
            icon: "solidity",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Tools and Platforms",
        description: (
          <> Extensive experience with PCB Development, CAD Modelling and Simulations. Web based hosting applications and cloud services. GitHub Actions.</>
        ),
        tags: [
          {
            name: "Altium Designer",
            icon: "altiumdesigner",
          },
          {
            name: "SolidWorks",
            icon: "dassaultsystemes",
          },
          {
            name: "Fusion 360",
            icon: "autocad",
          },
          {
            name: "COMSOL Multiphysics",
            icon: "comsol",
          },
          {
            name: "ANSYS HFSS",
            icon: "ansys",
          },
          {
            name: "LabVIEW",
            icon: "labview",
          },
          {
            name: "Git",
            icon: "git",
          },{
            name: "Docker",
            icon: "docker", 
          },{
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Arduino",
            icon: "arduino",
          },
          {
            name: "Raspberry Pi",
            icon: "raspberrypi",
          },
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Amazon Web Services",
            icon: "aws",
          },
          {
            name: "Google Cloud",
            icon: "googlecloud",
          },
          { name: "Firebase",
            icon: "firebase",
          },
          {
            name: "MQTT",
            icon: "mqtt",
          },    
          {
            name: "ROS",
            icon: "ros",
          },
          { name: "LTspice",
            icon: "ltspice",
          },
          { name: "KiCad",
            icon: "kicad",
          },  
          { name: "Adobe Photoshop",
            icon: "adobephotoshop",
          },
          { name: "Adobe Illustrator",
            icon: "adobeillustrator",
          },  
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },  
      {
        title: "Frameworks and Libraries",
        description: (
          <>Experience with AI/ML frameworks. Data Science and Visualization Libraries.</> 
        ),
        tags: [
          { name: "TensorFlow",
            icon: "tensorflow",
          },  
          {
            name: "OpenCV",
            icon: "opencv",
          },
          { name: "OpenAI",
            icon: "openai",
          },
          { name: "PyTorch",
            icon: "pytorch",
          },
          {
            name: "LSTM",
            icon: "code",
          },
          { name: "CNN",
            icon: "code",
          },
          {
            name: "MLP",
            icon: "code",
          },
          { name: "Kalman Filtering",
            icon: "code",
          },
          { name: "Scikit: Time Series Analysis",
            icon: "scikitlearn",
          },
          {
            name: "Pandas",
            icon: "pandas",
          },
        ],
      },  
        {
        title: "Communication and Networking Protocols",
        description: (
          <>Experience with communication and networking protocols. Hardware + Software communications.</> 
        ),
        tags: [
          { name: "BLE 5.0",
            icon: "bluetooth",
          },  
          {
            name: "UART",
            icon: "networkInterfaces",
          },
          { name: "SPI",
            icon: "networkInterfaces",
          },
          { name: "I2C",
            icon: "networkInterfaces",
          },
          {
            name: "TCP/IP",
            icon: "networkInterfaces",
          },
          { name: "SHA 256",
            icon: "code",
          },
          { name: "Hashing Algorithms",
            icon: "code",
          },
        ],
      },    
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Purdue University",
        timeframe: "2021 - Present",
        role: "Graduate Research Assistant - PhD",
        achievements: [
          <>
            Built a 4-axis rotary DIW printer with PID-controlled optical leveling and confocal feedback, enabling 50 μm-resolution printing on 1.75–6 mm catheters.

          </>,
          <>
            Built C#-based LIMR GUI and backend integrating Thorlabs Kinesis and Keyence Confocal APIs, with custom path planning and G-code execution.
          </>,
          <>
          Leading the development of smart catheter systems integrating printed strain sensors, temperature sensors, microheaters, and chipless RFID tags for real-time physiological monitoring and secure medical data tracking.
          </>,
          <>
          Conducted COMSOL and CST simulations for thermal, electromagnetic, and mechanical modeling of sensors and actuators on soft substrates.
         </>,
         <>
         Made cross-platform (iOS/Android/web) app to get real-time sensor data (Heart Rate, Respiration, Orientation, Audio) from the flexible custom-made nRF52840 SoC microcontroller with integrated sensors to monitor Equine Health diagnostics using Machine Learning.
         </>,
         <>
         Quantified how microelectrode geometry & surface finish impact enzymatic biosensors; demonstrated +83.3%
        sensitivity with fractal Pt‑black vs. circular Pt electrodes. Adaptable for high-resolution BCI implantable electrodes of the future.
         </>


        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Picture1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/Electrodes.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/Sensor1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/Horse.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Purdue University",
        timeframe: "2021 - Present",
        role: "Senior Design Teachning Assistant",
        achievements: [
          <>
            Mentored 50+ undergraduate Biomedical Engineering Capstone design teams (2021–2025), working closely
            with industry sponsors, academic collaborators, and medical companies to align student projects with practical
            engineering, research, and clinical requirements.
          </>,
          <>
            Guided students with the Design of Experiments (DOE), Design history files (DHF), software design,
            COMSOL/CAD simulations, Circuit design, PCB design, 3D printing, and Machining.
          </>,
          <>
          Implemented Scrum Methodology and updated students with latest industry standards technologies, AI/ML
          frameworks, and tools to make students competitive in real world leading them to win various awards and two
          patents.
          </>
        ],
        images: [
                    {
            src: "/images/projects/project-01/bme1.jfif",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/bme2.jfif",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
          {
        company: "Acme Solutions LLC",
        timeframe: "March 2020 - May 2020",
        role: "Engineering Intern",
        achievements: [
          <>
            Developed Smart Low-Cost Ventilator in response to Covid-19 Crisis using C++. Based on pneumatic controlled
            design, it had 98% precise volume, pressure, and I:E time control when tested on medical dummies.
          </>,
          <>
          Integrated manual and nrf52840 Bluetooth LE control function, which made it a pandemic friendly equipment.
          Could be run using "AcmeVent App" developed using React Native.          
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/acmevent.jfif",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/acme3.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "UNM Hospitals - Orthopedic Research Lab",
        timeframe: "Jan 2019 - May 2021",
        role: "Medical Device Development Research Assistant",
        achievements: [
          <>
            Designed and Developed wireless "Smart Pedicle Probe" which could be used to assist surgeons during guided
            spine surgery providing real-time pressure, torque and orientation data.
          </>,
          <>
           Developed desktop software and mobile app to display realtime sensor data using Python, C++, and React Native.     
          </>,
          <>
          Tested the efficiency of the Smart Probe on SWOTA conference 2019, using 27 residents from various medical
          colleges from 3 states to collect data for post data and signal analysis using Python to publish scientific reports. 
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/unm1.jfif",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
                    {
            src: "/images/projects/project-01/unm2.jfif",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Purdue University",
        description: <>PhD in Biomedical Engineering        (2021-Present)</>,
      },
      {
        name: "The University of New Mexico",
        description: <>B.S. in Computer Science             (2018-2021)</>,
      },
    ],
  },
  /* technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  }, */
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,


  images: [
    {
      src: "/images/gallery/stem2.jfif",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/bci2.jfif",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bme1.jfif",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/acmevent.jfif",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bci4.jfif",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/stem1.jfif",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/bme2.jfif",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/prize.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
