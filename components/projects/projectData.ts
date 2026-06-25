import { Project } from '~/types/Project';
import Typescript from '../icons/languages/Typescript.vue';
const halliburtonIconSize = 70;
const vlDevOpsIcons = 45;
const vlToolsIcons = 35;
const apolloInsightsIcons = 30;
const enonIcons = 40;
const bibleSocIcons = 40;
export const projects: Project[] = [
  new Project({ 
    name: 'Goals Football Internal Web Tool',
    company: 'GoalsFootball',
    tech: ['CSharp', 'SQL', 'DotNet', 'Git', 'Nuxt', 'Vue', 'Typescript', 'Bash', 'Json'], 
    heading:"Goals Football",
    subheading:'New Internal Web Tool',
    summary:'Started a new web app, assisting in admin tasks',
    dates:'January 2026 - Present',
    iconSize: enonIcons,
    toShow: false,
    url: 'https://www.goalsfootball.co.uk/'
  }),
  new Project({ 
    name: 'Goals Football Internal Tools',
    company: 'GoalsFootball',
    tech: ['CSharp', 'SQL', 'DotNet', 'TFS'], 
    heading:"Goals Football",
    subheading:'Internal Tools',
    summary:'Delivered enhancements to a production internal system, including discount functionality with validation, persistence, and UI integration. Implemented payment link integration into internal tooling.',
    dates:'November 2025 - Present',
    iconSize: enonIcons,
    toShow: true,
    url: 'https://www.goalsfootball.co.uk/'
  }),
  new Project({ 
    name: 'Church Tools for Enon Baptist Church',
    tech: [ 'TailwindCss', 'HtmlFive', 'Git', 'Markdown'], 
    heading:"Enon Baptist Church",
    subheading:'Church Tools Suite',
    summary:'A suite of tools to assist with repetitive administrative tasks within the church, enhancing efficiency and organization.',
    dates:'November 2025 - Present',
    iconSize: enonIcons,
    toShow: true,
    url: 'https://enonbaptistchurch.github.io/'
  }), 
  new Project({ 
    name: 'Song Selector for Enon Baptist Church',
    tech: ['Astro', 'Vue', 'Typescript', 'Javascript', 'Css', 'HtmlFive', 'Git', 'Markdown', 'TailwindCss', 'GithubActions'], 
    heading:"Enon Baptist Church",
    subheading:'Song Selector Tool',
    summary:'Created a tool to help select songs for church services, reformating data and serving external media services.',
    dates:'December 2025 - Present',
    iconSize: enonIcons,
    toShow: true,
    url: 'https://enonbaptistchurch.github.io/song-selector/'
  }),  
  new Project({ 
    name: 'Enon Website', 
    tech: ['Nuxt', 'Css', 'HtmlFive', 'Markdown', 'Typescript', 'Vue', 'Git'], 
    heading:"Enon Baptist Church",
    subheading:'New Website',
    summary:'Initiated and developed a new website for Enon Baptist Church, focusing on modern and responsive design, continuous development and improving user experience.',
    dates:'September 2024 - Present',
    iconSize: enonIcons,
    toShow: true,
    url: 'https://www.enonbaptistchatham.org.uk/'
  }),
  new Project({ 
    name: 'The Bible Society', 
    tech: [ 'JQuery', 'Css', 'HtmlFive', 'Javascript', 'Git'], 
    heading:"The Bible Society",
    subheading:'Bible Bolt',
    summary:'Collaborated in a very small team at Kingdom Code\'s 24 hour Hackathon (Build) to create a new Word add-in to make pasting bible verses easy and efficient.',
    dates:'11 October 2024 - 12 October 2024',
    iconSize: bibleSocIcons,
    toShow: true
  }),
  new Project({ 
    name: 'VL Tools', 
    company:'VerticalLeap / Gain', 
    tech: ['Aws', 'Markdown', 'Css', 'CSharp', 'Git', 'HtmlFive', 'Javascript', 'Json', 'Typescript', 'NextJs', 'Nuxt', 'React', 'GithubActions'], 
    heading:"VL / Gain Tools",
    subheading:'Standalone Tools',
    summary:'Developed endpoints and refactored code to improve performance and reliability. Updated packages for tools.',
    dates:'June 2023 - June 2025',
    iconSize: vlToolsIcons,
    toShow: true
  }),
  new Project({ 
    name: 'VL DevOps', 
    company:'VerticalLeap', 
    tech: ['Aws', 'Bash', 'Docker', 'Git', 'Markdown', 'YAML' ], 
    heading:"VL Dev Ops",
    subheading:'Infrastructure and DevOps',
    summary:'Created and oversaw infrastructure for the new tools platforms, including CI/CD pipelines, monitoring, and deployment strategies. Also setup logging server.',
    dates:'September 2023 - June 2025',
    iconSize: vlDevOpsIcons,
    toShow: true
  }),
  new Project({ 
    name: 'Apollo Insights', 
    company:'VerticalLeap', 
    tech: ['Aws', 'Bootstrap', 'CSharp', 'Css','Git', 'HtmlFive', 'Javascript', 'JQuery', 'Json', 'Bash', 'RequireJs', 'SQL', 'NodeJs', 'Vue', 'DotNet','TFS', 'DotNetCore', 'Docker', 'XML', 'GithubActions'], 
    heading:"Apollo Insights",
    subheading:'A search marketing platform',
    summary:'Maintaining and building a comprehensive platform with data and analytics dashboards for digital search data and providing actionable insights.',
    dates:'January 2017 - June 2023',
    iconSize: apolloInsightsIcons,
    toShow: true
  }),
  new Project({ 
    name: 'Halliburton', 
    company:'Halliburton', 
    tech: ['DotNet', 'SQL', 'CSharp'], 
    heading:"Sperry Drilling (Halliburton)",
    subheading:'MWD Tool Software Development',
    summary:'Contributed to the development and testing of high-performance Measurement While Drilling (MWD) tools for extreme downhole environments.',
    dates:'September 2014 - August 2015',
    iconSize: halliburtonIconSize,
    toShow: true
  })
  
];