---
title: Express Web Anwendungsrahmen (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
translation_of: Learn/Server-side/Express_Nodejs
---
{{LearnSidebar}}
Express ist ein beliebter, weitgehend vorgabefreier Anwendungsbausatz (Framework) für das Web, das in Javascript geschrieben und in der Node.js Laufzeitumgebung beheimatet ist. Das Modul beschreibt einige Schlüsselvorteile dieses Anwendungsrahmens, wie eine Anwendungsumgebung aufzusetzen ist und wie allgemeine Entwicklungs- und Bereitstellungsaufgaben durchzuführen sind.

## Voraussetzungen

Bevor Sie dies Modul beginnen sollten Sie verstehen, was serverseitige Web-Anwendungsentwicklung und Web Frameworks sind – idealerweise durch Studium unseres Moduls [Erste Schritte Server-side Website Programmierung](/de/docs/Learn/Server-side/First_steps).
Allgemeine Kenntnisse in Programmierung und Javascript werden vorausgesetzt, sind aber zum Verständnis der grundlegenden Konzepte nicht ausschlaggebend.

> **Hinweis:** Diese Website bietet zahlreiche Quellen zum Lernen von Javascript _im Kontext Client-seitiger Entwicklung_: [Javascript](/de/docs/Web/JavaScript), [Javascript Guide](/de/docs/Web/JavaScript/Guide), [Javascript Basics](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [Javascript](/de/docs/Learn/JavaScript) (Lernen). Der Kern von Javascript und seine Konzepte sind identisch für Server-seitige Entwicklung mit Node.js und dieses Material ist daher relevant.
> Node.js bietet [Schnittstellen/APIs](https://nodejs.org/dist/latest-v6.x/docs/api/) zur Unterstützung von Funktionalitäten, die in einer Umgebung _ohne_ Browser nützlich sind, z.B. um HTTP Server zu bauen oder auf das Dateisystem zuzugreifen, aber es unterstützt keine Javascript APIs zur Interaktion mit Browser oder DOM.Dieser Leitfaden bietet Informationen zum Umgang mit Node.js und Express. Darüber hinaus gibt es ausgezeichnete Informationsquellen im Internet und in Form von Fachbüchern – Links sind u.a. hier zu finden: [How do I get started with Node.js](http://stackoverflow.com/a/5511507/894359) (StackOverflow) und [What are the best resources for learning Node.js?](https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?) (Quora).

## Leitfaden

- [Express/Node Einführung](/de/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : Im ersten Artikel zum Thema Express werden die Fragen beantwortet "Was ist Node?" und "Was ist Express?", außerdem beleuchtet er die Besonderheiten des Express Web Frameworks. Wir werden die wichtigsten Eigenschaften sowie die Grundbausteine einer Express Anwendung kennen lernen (auch wenn wir hier noch keine Entwicklungsumgebung zum Testen aufsetzen werden).
- [Aufsetzen einer Node (Express) Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : Now that you know what Express is for, we'll show you how to set up and test a Node/Express development environment on Windows, Linux (Ubuntu), and Mac OS X. Whatever common operating system you are using, this article should give you what you need to be able to start developing Express apps.
- [Express Tutorial: The Local Library website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : The first article in our practical tutorial series explains what you'll learn and provides an overview of the "local library" example website we'll be working through and evolving in subsequent articles.
- [Express Tutorial Part 2: Creating a skeleton website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : This article shows how you can create a "skeleton" website project, which you can then go on to populate with site-specific routes, templates/views, and databases.
- [Express Tutorial Part 3: Using a Database (with Mongoose)](/de/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : This article briefly introduces databases for Node/Express. It then goes on to show how we can use [Mongoose](http://mongoosejs.com/) to provide database access for the _LocalLibrary_ website. It explains how object schema and models are declared, the main field types, and basic validation. It also briefly shows a few of the main ways you can access model data.
- [Express Tutorial Part 4: Routes and controllers](/de/docs/Learn/Server-side/Express_Nodejs/routes)
  - : In this tutorial we'll set up routes (URL handling code) with "dummy" handler functions for all the resource endpoints that we'll eventually need in the _LocalLibrary_ website. On completion, we'll have a modular structure for our route handling code, that we can extend with real handler functions in the following articles. We'll also have a really good understanding of how to create modular routes using Express.
- [Express Tutorial Part 5: Displaying library data](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : We're now ready to add the pages that display the _LocalLibrary_ website books and other data. The pages will include a home page that shows how many records we have of each model type and list and detail pages for all of our models. Along the way, we'll gain practical experience in getting records from the database and using templates.
- [Express Tutorial Part 6: Working with forms](/de/docs/Learn/Server-side/Express_Nodejs/forms)
  - : In this tutorial we'll show you how to work with [HTML Forms](/de/docs/Web/Guide/HTML/Forms) in Express, using Pug, and in particular how to write forms to create, update, and delete documents from the database.
- [Express Tutorial Part 7: Deploying to production](/de/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Now you've created an awesome _LocalLibrary_ website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the Internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.

## See also

- [Installing LocalLibrary on PWS/Cloud Foundry](/de/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry)
  - : This article provides a practical demonstration of how to install _LocalLibrary_ on the [Pivotal Web Services PaaS cloud](http://run.pivotal.io) — this is a full-featured, open source alternative to Heroku, the PaaS cloud service used in Part 7 of the tutorial, listed above. PWS/Cloud Foundry is definitely worth checking out if you are looking for an alternative to Heroku (or another PaaS cloud service), or simply feel like trying something different.

## Adding more tutorials

That's the end of the tutorial articles (for now). If you would like to extend it, other interesting topics to cover are:

- Using sessions.
- User authentication.
- User authorization and permissions.
- Testing an Express web application.
- Web security for Express web applications.

And of course, it would be excellent to have an assessment task!
