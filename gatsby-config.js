module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://hammadsheikh.github.io/`,
    // Your Name
    name: 'Hammad Sheikh',
    // Main Site Title
    title: `Hammad Sheikh | Quantitative Researcher`,
    // Description that goes under your name in main bio
    description: `Qantitative psychologist, looking for maximing impact`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/hammadsheikh`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/hammad-sheikh/`,
    // Content of the About Me section
    about: `1. Ph.D. in Cognitive, Social, and Developmental Psychology; designed experimental studies to test theories on group-based cognition and decisions making in adults and children
    2. Broad skillset and proven effective collaborations in a wide range of disciplines: cognitive science, statistical modeling, data science, machine learning, computational social science, data visualization, data sonification, experimental design, multi-method studies
    3. Deep expertise in quantifying human cognition (psychometrics), designing experimental tests of hypotheses, and translating research findings into actionable insights
    4. Lectured many university-level courses such as Intro to Statistics and Research Design, History & Politics of Terrorism, R for psychologists; presented to professional and non-professional audiences; translated qualitative and quantitative research findings and into actionable insights for decision makers (media companies & governments)
    5. Extensive teamwork and collaboration with peers across disciplines and around the globe; trained field worker, mentored junior researchers
    6. Self-starter, quick study, individual contributor, problem solver, teacher & mentor, always learning`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Visualizing Terrorism',
        description:
          'Dashboard: Customizable Visualization (& Animation) of Terrorism Attacks Around the World',
        link: 'https://github.com/hammadsheikh/visualizingterorrism',
      },
      {
        name: 'Query: Global Terrorism Database',
        description:
          'SQL Query for the Global Terrorism Database',
        link: 'https://github.com/hammadsheikh/SQLGTD',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Big Bad Boo Studios',
        description: 'Lead Quantitative Researcher, May 2017 - Present',
        link: 'https://www.bigbadboo.com/bigbadboo/about.html',
      },
      {
        name: 'Centre for the Resolution of Intracatable Conflicts (Oxford University)',
        description: 'Visiting Researcher, December 2015 - Present',
        link: 'http://cric-oxford.org/',
      },
      {
        name: 'New School for Social Research',
        description: 'Postdoctoral Research Fellow, September 2018 - August 2021',
        link: 'https://www.newschool.edu/nssr/faculty/Hammad-Sheikh/',
      },
      {
        name: 'Artis International',
        description: 'Young Investigator, September 2018 - August 2021',
        link: 'https://artisinternational.org/category/hammad-sheikh/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Tools',
        description:
          'R (tidyverse, lme4, caret, gpart), Python (pandas, numpy), SQL, SPSS, Amos, SAS, Mplus, AWS',
      },
      {
        name: 'Statistics & ML',
        description: 'Supervised and Unsuyprevised (incl. Anova, Linear & Logistic Regression, Multi-Level Models, PCA, FA, CFA, Cluster Analysis',
      },
      {
        name: 'Project Management',
        description:
          'Trello, Slack, MS Teams',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
