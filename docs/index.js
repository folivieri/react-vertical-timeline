/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import 'purecss/build/pure.css';


import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../src/MyAwesomeReactComponent';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};

const header = (
  <div className='resumeIntro'>
    <a name='#home'></a>
    <div id="Resume-home" className="ResumeHomeBlock ScreenBlock">
      <div className="ResumeHomeBlock-headline-container">
        <div className="ResumeHomeBlock-headline"><h1><span>Frederic Olivieri</span></h1>
          <h2>Full-stack Software Engineer in Reno, Nevada</h2></div>
      </div>
    </div>
  </div>
)

const swSummary = (
  <div class="star-wars-intro">
    <p id="start">A short time ago in a browser very, very close&hellip;</p>

    <h1>STAR WARS<sub>titles in CSS3</sub></h1>


    <div id="titles">
      <div id="titlecontent">

        <p class="center">EPISODE I<br />A NEW HOPE FOR CLEARCAPITAL</p>

        <p>The company has been searching for someone to help their efforts.</p>

        <p>Enter Fred Olivieri, a senior software engineer with over 20 years of hands-on experience and expertise in application software design and development and involvement in all phases of Software Development Lifecycle (SDLC).</p>
        <p>He was responsible for having architected and developed multiple highly successful Java EE based commercial software applications fully internationalized, using the following JEE technologies: Session and Entity EJBs, CMP 2.0, Message Driven Beans, JMS, JDBC, JSP, JSF, Hibernate, Spring, JSTL, Servlets, Struts MVC framework.</p>
        <p>He has extensive experience with agile software development techniques, such as Extreme Programming (XP) and Scrum methodologies (certified scrum master), as well as Rational Unified Process using UML ,Class-responsibility-collaboration (CRC) cards.</p>
        <p>But perhaps more pertinent, he has expert level front end skills in HTML/DHTML/XHTML, JavaScript, Cascading Style Sheets (CSS), JSP, Servlets, XSL, JSON, Java Server Faces (JSF) including Oracle ADF Faces and Apache MyFaces, Grails, Ajax Component frameworks such as Node.js, Dojo, YUI, Angular JS, Facebook’s React, and Sencha Command/ExtJS.</p>
        <p>Hoping to take advantage of his exceptional leadership and management skills, experienced in leading local, remote, and offshore teams, they are evaluating whether he can support their efforts.</p>
        <p>Since he was instructor for University of California, Irvine extension courses related to J2EE development: JSP, JDBC, UML, Intro to J2EE, Enterprise Java Beans, they are hoping his leadership will provide the spark the company needs.</p>
      </div>
    </div>
  </div>
)

const summary = (
  <div className='resumeSummary'>
    <div id="Resume-summary" className="ResumeHomeBlock ScreenBlock">
        <h3>SUMMARY OF EXPERIENCE</h3>
          <ul>
            <li>Senior software engineer with over 20 years of hands-on experience and expertise in application software design and development and involvement in all phases of Software Development Lifecycle (SDLC).</li>
            <li>Responsible for having architected and developed multiple highly successful Java EE based commercial software applications fully internationalized, using the following JEE technologies: Session and Entity EJBs, CMP 2.0, Message Driven Beans, JMS, JDBC, JSP, JSF, Hibernate, Spring, JSTL, Servlets, Struts MVC framework.</li>
            <li>Extensive experience with agile software development techniques, such as Extreme Programming (XP) and Scrum methodologies (certified scrum master), as well as Rational Unified Process using UML ,Class-responsibility-collaboration (CRC) cards.</li>
            <li>Expert level front end skills in HTML/DHTML/XHTML, JavaScript, Cascading Style Sheets (CSS), JSP, Servlets, XSL, JSON, Java Server Faces (JSF) including Oracle ADF Faces and Apache MyFaces, Grails, Ajax Component frameworks such as Node.js, Dojo, YUI, Angular JS, Facebook’s React, and Sencha Command/ExtJS.</li>
            <li>Exceptional leadership and management skills, experienced in leading local, remote, and offshore teams.</li>
            <li>Experienced instructor for University of California, Irvine extension courses related to J2EE development: JSP, JDBC, UML, Intro to J2EE, Enterprise Java Beans. Also, conducted numerous corporate training courses on product usage</li>
          </ul>
        </div>
      </div>
)

const content=  (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="October 2015 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <a name='#experience'></a>
      <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">TriNet HR Corporation, Reno NV</h4>
      <ul>
        <li>Payroll Entry, UI and RESTful API Implementation</li>
        <li>Implementation of new features and maintenance on ExtJS SAAS based payroll entry system</li>
        <li>Created Java APIs for Rest based transactions to allow for migration to Angular based UI</li>
        <li>Trained and Mentored off-shore resources on the environment and development processes</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="June 2010 - March 2016"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Senior Member of Technical Staff</h3>
      <h4 className="vertical-timeline-element-subtitle">Vmware Inc., Palo Alto, CA</h4>
      <ul>
        <li>Implementation of remote collection configuration user interface for vROps Remote Collector</li>
        <li>Ownership of vROps integration plug-in for vCenter/vSphere web user interface</li>
        <li>Design and implementation of archiving as a service feature for Log Insight.</li>
        <li> Responsible for initial UI scaffolding for outbound alerting mechanism, symptom definition,
          problem definition, and recommendations/remediation features using Sencha Command/ExtJS.</li>
        <li>Designed and maintained servlet and AJAX (ExtJS /GXT) based graphing components</li>
        <li>Spearheaded development platform migration from existing frameworks into VMware
          corporate toolsets going from StarTeam to Perforce and AntRunner to Gobuild</li>
        <li>Wrote Spring remotable API for external access to internal processes</li>
        <li>Lead API team to create Spring Based REST API for the next-gen Stats Platform</li>
        <li>Designed and implemented a ExtJS Javascript based UI which unifies the user interfaces of
          multiple products into one yet maintains the familiarity of the existing product</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="July 2009 - July 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">Auctions Team/Skunkworks, Salt Lake City, UT</h4>
      <ul>
        <li>Configuration and migration of existing Selenium test infrastructure to use internal WebDriver
          based testing framework.</li>
        <li>Porting of C++ Auctions code to web-based Java framework. Work included migration of
          selling functionality by examining existing code, implementing UI designed by the graphic
          design team in Jamon- an open source templating library, the JQuery Javascript library
          for UI enhancement, and Hibernate for persistence management.</li>
        <li>Redesigned existing Java code to utilize a more REST-ful resource oriented approach to exposing auctions functionality.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="December 2008 - July 2009"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Senior Developer &amp; Architect, Enterprise Portal Team</h3>
      <h4 className="vertical-timeline-element-subtitle">University of North Carolina, Chapel Hill, NC</h4>
      <ul>
        <li>Design of infrastructure for Java Content Repository (JCR) based portlets, including use if
          Google jcrom, JSR-170 based connectivity using Spring to Jackrabbit content repository, and
          utilizing a YUI objects for AJAX component visualization and CRUD operations.</li>
        <li>Porting of BPEL/SOA web services to Java Web Services due to inadequate implementation of
          SOA infrastructure used to support many systems, including portal.</li>
        <li>Implementation of portlets based on JSR-168 and JSR-286 and implemented using the Spring
          MVS Portal Framework. Deployment to Glassfish and Open Portal Server in development and
          Sun Portal Server 7.2x in production.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="October 2008 - December 2008"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer, Consultant</h3>
      <h4 className="vertical-timeline-element-subtitle">Matrix Project Solutions, Raleigh, NC</h4>
      <ul>
        <li>Design analysis and implementation of Electronic Data Interchange (EDI) application using Grails framework,
          including ExtJS, on top of an Oracle 10g data warehouse for BASF Agricultural Division</li>
        <li>Coordinate EDI integration with new Business Data Warehouse application</li>
        <li>Support and implementation of Atlassian Crowd Single Sign On (SSO) including custom directory connectors and a
          custom authentication module for Cognos reporting tool.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="February 2007 - September 2008"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer, Technical Lead, Common User Interface Team</h3>
      <h4 className="vertical-timeline-element-subtitle">Teradata Corporation, Raleigh, NC</h4>
      <ul>
        <li>Designed sophisticated ExtJS UI mechanisms for improving the usability of the existing product.</li>
        <li>Duties primarily included common user interface framework for Look and Feel (LAF), templating (Tiles),
          internationalization and localization, and browser compatibility.</li>
        <li>Spearheaded localization testing efforts with respect to Java, and JavaScript resources using various locales.</li>
        <li>Designed and implemented UI for performing bulk operations easily for design and maintenance of CRM target
          segment creation.</li>
        <li>Managed team of 8 developers of various skill levels, mentoring more junior level
          members, assigning units of work via JIRA, code reviews, group backlog maintenance and reduction</li>
        <li>Advised management on practices of external UI framework development and based on
          quality and performance, recommended we abandon poorly developed in house framework.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Janualy 2003 - February 2007"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer IV, Technical Lead</h3>
      <h4 className="vertical-timeline-element-subtitle">Quest Software, Inc. Aliso Viejo, CA</h4>
      <ul>
        <li>Lead developer of new product using Extreme Programming (XP) and Agile techniques, including test driven
          development, user stories, and XP project tracking using XPlanner</li>
        <li>Played a critical role in architectural and conceptual design of product, one of three Senior Engineers along with one
          product manager</li>
        <li>Managed development team of five senior engineers and two junior engineers, and assorted consultants.</li>
        <li>Designed and implemented Java Server Faces (JSF) front end using a Spring and Hibernate backend solution for
          enterprise deployment.</li>
        <li>In depth knowledge of JSF technologies including Sun's reference implementation, Apache's My Faces
          implementation, and Oracle's ADF faces implementation, as well as implementing custom JSF deliverable
          components.</li>
        <li>Mandated unit and integration test authoring prior to implementation to reinforce test-driven development.</li>
        <li>Configured project to use Maven 1.02 for development, testing, building the project.</li>
        <li><hr/></li>
        <li>Led project porting legacy PowerBuilder client user interface application onto J2EE platform.</li>
        <li> Managed development team of five senior engineers and two junior engineers.</li>
        <li> Architected, prototyped, and coded J2EE Web Client for Stat Product, using J2EE Web technologies: JSP, JSTL,
          Servlets, Struts MVC framework, JavaScript, Session and Entity EJBs.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="July 2004 - April 2006"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <a name='#education'></a>
      <h3 className="vertical-timeline-element-title">Instructor and Corporate Extension Instructor</h3>
      <h4 className="vertical-timeline-element-subtitle">University of California, Irvine, CA</h4>
      <ul>
        <li>Assumed instruction for corporate program designed to ramp up Boeing employees quickly from beginning Java to
          J2EE concepts.</li>
        <li> Instructed students on fundamentals of Java Programming through advanced topics such as EJB to enable them to
          take over maintenance of offshore J2EE project.</li>
        <li> University Extension Courses instructed include: Unified Modeling Language (UML), Java Data Structures,
          Working with Java Database Connectivity (JDBC) and SQL, Overview of Java 2 Enterprise
          Edition Technologies (J2EE), Developing Server-Side Applications with Java Server Pages (JSP),
          and Programming for the Enterprise with Enterprise Java Beans (EJB)</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="January 1999 - Janualy 2003"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Senior Software Engineer IV, Technical Lead (CONTINUED)</h3>
      <h4 className="vertical-timeline-element-subtitle">Quest Software, Inc. Aliso Viejo, CA</h4>
      <ul>
        <li>Led project porting legacy PowerBuilder job scheduling application onto J2EE platform.</li>
        <li> Managed two different teams of five senior engineers and four junior engineers.</li>
        <li> Mandated use of JUnit unit testing framework to improve code integrity.</li>
        <li> Utilized Log4J logging framework for various levels of project logging.</li>
        <li> Instituted use of XDoclet for automatic creation of EJB interfaces and deployment descriptors.</li>
        <li> Maintained application construction using Ant.</li>
        <li> Reviewed and approved all code reviews for two different products</li>
        <li> Responsible for breaking project up into coding tasks, assigning to development team, and making sure all deadlines
          were met.</li>
        <li> Coded, tested and deployed J2EE (Servlet, JSP, Session and Entity EJBs) modules using JBoss 3.2 and WebLogic
          6.1</li>
        <li> Designed and implemented messaging framework to communicate with Oracle E-Business Suite using JMS publish
          and subscribe, J2EE Session and Entity beans.</li>
        <li> Designed and developed configuration management web application to aid in the configuration of database
          connectivity, logging, and availability testing of the Stat application's underlying Jboss application server.</li>
        <li> Semi-annual Knowledge Transfers to various audiences, both technical and non-technical, explaining both usage
          and new functionality of the Vista Plus product.</li>
        <li> Conducted training course for pre-sales engineers on J2EE deployment issues and product usage.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="January 1994 - November 1998"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
      >
      <h3 className="vertical-timeline-element-title">Software Engineer, Telecom / System Administrator</h3>
      <h4 className="vertical-timeline-element-subtitle">Solexa, formerly Lynx Therapeutics, Inc, Hayward, CA</h4>
      <ul>
        <li>Designed and implemented JAVA-based interface to a Sybase database used to track experiments using JAVA,
          RMI, JDBC, Sybase's jConnect, and Roguewave's dbTools.j (formerly JDBTools).</li>
          <li> Assisted in design of relational database schema to model proprietary process for DNA sequencing.</li>
          <li> Designed HTML / JavaScript interface to archive experimental data.</li>
          <li> Supervised administration of network and PC/Mac workstations.</li>
          <li> Designed various C / C++ interfaces using Motif in Sun Workshop for instrumentation and image analysis.</li>
          <li> Intermediate database management of Sybase System 11.5, Adaptive Server.</li>
          <li> Occasional production of corporate presentations using Director, Photoshop, and PowerPoint</li>
      </ul>
    </VerticalTimelineElement>
  </VerticalTimeline>
);
const education=  (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="November 1998"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Masters of Science, Software Engineering</h3>
      <h4 className="vertical-timeline-element-subtitle">Golden Gate University</h4>
      <p>
        Dean's List 1998
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="December 1993"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Bachelor of Arts, Criminal Justice- Pre-Law Emphasis</h3>
      <h4 className="vertical-timeline-element-subtitle">California State University, Fullerton</h4>
      <p>
        Dean's List 1993
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="September 1991"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
      >
      <h3 className="vertical-timeline-element-title">Bachelor of Arts, Music Production and Engineering </h3>
      <h4 className="vertical-timeline-element-subtitle">Berklee College of Music, Boston, MA</h4>
      <p>
        Incomplete
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
    );


// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div class='header'>
    {header}
  </div>,
  document.getElementById('header')
);


// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div style={{backgroundColor: '#0B0B3B'}}>
    <a name='#summary'/>
    {swSummary}
  </div>,
  document.getElementById('summary')
);

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div class='expBack'>
    {content}
  </div>,
  document.getElementById('timeline')
);

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div class='eduBack'>
    {education}
  </div>,
  document.getElementById('education')
);


ReactDOM.render(
  <MyAwesomeReactComponent />,
  document.getElementById('toolbar')
);
