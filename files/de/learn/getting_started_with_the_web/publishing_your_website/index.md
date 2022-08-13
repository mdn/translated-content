---
title: Ihre Webseite veröffentlichen
slug: Learn/Getting_started_with_the_web/Publishing_your_website
tags:
  - Anfänger
  - FTP
  - GitHub
  - Lernen
  - Web
  - WebServer
  - Webseite
  - veröffentlichen
translation_of: Learn/Getting_started_with_the_web/Publishing_your_website
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

Wenn Sie Ihre Webseite fertig haben, den ganzen Code geschrieben und die Dateien organisiert haben, dann ist es Zeit Ihre Webseite online zu stellen. In diesem Artikel lernen Sie, wie Sie Ihre neue Webseite, die Sie in den letzten Artikeln erstellt haben, online für alle zugänglich machen.

## Was sind Ihre Optionen?

Eine Webseite online zu stellen, das ist kein einfaches Thema, hauptsächlich deswegen, da es viele verschiedene Wege gibt dies zu tun. In diesem Artikel werden wir nicht alle Möglichkeiten vorstellen. Wir werden drei Strategien vorstellen und die Vorteile und Nachteile jeder dieser Wege erläutern und für unsere Beispielwebseite einen Weg genau beschreiben, dem jeder Anfänger folgen kann.

### Hosting und eine eigene Domain

Wenn Sie die volle Kontrolle über Ihre veröffentlichte Webseite haben wollen, werden Sie ein wenig Geld in die Hand nehmen müssen, um folgendes zu kaufen:

- Hosting — man mietet Datenplatz auf dem [Webserver](/de/Learn/What_is_a_web_server) einer Hosting-Firma. Sie laden Ihre Dateien auf den Webserver und dieser bringt die Webseite weiter zu den Benutzern, die auf die Webseite zugreifen möchten.
- Eine [Domain](/de/Learn/Understanding_domain_names) — dies ist die einzigartige Adresse, unter welcher Ihre Webseite findbar ist, wie `http://www.mozilla.org`, oder `http://www.tagesschau.de`. Sie mieten die Domain für so und soviel Jahre von einem Domainregister.

Viele professionelle Webseiten nutzen diesen Weg, um online zu gehen.

Zusätzlich benötigen Sie ein {{Glossary("FTP", "File Transfer Protocol (FTP)")}} Programm, um ihre Dateien von ihrem Rechner auf den Webserver zu übertragen. FTP Programme unterscheiden sich in ihrer Funktionalität, aber normalerweise müssen Sie sich mit den Daten des Webservers einloggen, welche Sie von der Hosting-Firma bekommen (Username, Passwort, Hostname, etc.). Das Programm zeigt ihnen in einem Fenster die Dateien auf ihrem lokalen Computer und in einem zweiten die Dateien auf dem Webserver und Sie können Dateien hin und her schieben:

![](https://mdn.mozillademos.org/files/9469/ftp.jpg)

#### Tipps um Hosting und Domain zu finden

- Wir promoten hier keine bestimmten, kommerziellen Hosting-Firmen oder Domainregisterstellen, es gibt sehr zahlreiche Anbieter. Suchen Sie einfach nach "web hosting" und "Domain registrieren". Sie werden immer erst kontrollieren können, ob die gewünschte Domain frei ist oder ob sie schon von jemand anderem registriert wurde.
- Es gibt einige kostenlose Angebote, zum Beispiel [lima-city.de](https://www.lima-city.de/), [Neocities](https://neocities.org/), [Blogger](https://www.blogger.com) und [WordPress](https://wordpress.com/). Oft ist es so das kleine Webseiten, mit wenigen Besuchern, kostenlos gehostet werden können, wenn sie aber größere Projekte haben, gibt es Zusatzkosten. Einige dieser Anbieter funktionieren ohne FTP-Programme und sind sehr einsteigerfreundlich.
- Oft bieten Hosting-Anbieter auch einen Domain-Service an.

### Mit GitHub oder Google App Engine

Es gibt Tools mit denen Sie Webseiten veröffentlichen können:

- [GitHub](https://github.com/)ist eine Seite, auf der man zusammen mit anderen an Code arbeiten kann. Es erlaubt das Hochladen von Projektarchiven, um diese in dem [Git](http://git-scm.com/) **Versionskontrollsystem** zu speichern. Diese Projektarchive sind online von anderen einsehbar und können bearbeitet werden. Das System ist Open-Source, das heißt, jeder in der Welt kann in Ihre Projektarchive auf GitHub schauen, Ihren Code finden, diesen Benutzen, von Ihrem Code lernen und ihn verbessern. GitHub hat eine Funktion namens [GitHub Pages](https://pages.github.com/), mit der man Webseiten-Code live ins Web schalten kann.
- [Google App Engine](https://cloud.google.com/appengine/ "App Engine - Build Scalable Web & Mobile Backends in Any Language  |  Google Cloud Platform") ist eine mächtige Plattform mit Google's Infrastruktur, auf der Sie Apps erstellen und laufen lassen können. Ob Sie eine große Web Applikation aufbauen wollen oder eine statische Webseite hosten möchten. Mehr dazu finden Sie hier auf Englisch: [How do you host your website on Google App Engine?](/de/docs/Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine)

Im Gegensatz zu anderen Anbietern sind diese Tools meist kostenlos, allerdings auch limitierend.

### Nutzen einer Online-Entwicklungsumgebung

Es gibt einige Webapplikationen, welche eine Webseiten Entwicklungsumgebung simulieren und Ihnen die Möglichkeit geben HTML, CSS und JavaScript in Ihrem Browser einzugeben und direkt das Resultat anzuzeigen. Das ganze funktioniert in nur einem Browsertab. Diese Werkzeuge sind einfach zu nutzen und super, um damit zu lernen. Sie sind kostenlos in ihrer Basisversion und Ihre dort erstellte Webseite wird direkt unter einer Webadresse gehostet. Allerdings haben diese Online Entwicklungsumgebungen auch ihre Nachteile, so können oft keine zusätzlichen Dateien, wie Bilder oder Videos, gehostet werden.

Schauen Sie sich einige dieser Beispiele an und finden Sie heraus was für Sie funktioniert:

- [JSFiddle](https://jsfiddle.net/)
- [Thimble](https://thimble.mozilla.org)
- [JS Bin](http://jsbin.com/)

![](https://mdn.mozillademos.org/files/9471/jsbin-screen.png)

## Veröffentlichen mit GitHub

Wir werden nun gemeinsam Ihre Webseite im Internet veröffentlichen. Hier nutzen wir dafür GitHub Pages.

1. Als erstes, [melden Sie sich bei GitHub](https://github.com/)an und verifizieren Sie Ihe Email Adresse.
2. Als nächstes erstellen Sie ein[repository](https://github.com/new) (Datenarchiv) in welches Ihre Dateien von der Webseite gehen werden.
3. Auf dieser Seite geben Sie in die _Repository name_ Box _username_.github.io ein, wobei _username_ Ihr Username ist. Zum Beispiel würde maxmustermann hier _maxmustermann.github.io_ eingeben.
    Aktivieren Sie auch _Initialize this repository with a README_ und klicken dann auf _Create repository_.![](https://mdn.mozillademos.org/files/9479/github-create-repo.png)
4. Danach können Sie Inhalte einfach mit der Maus in Ihr Datenarchiv ziehen und dann auf _Commit changes_ klicken.

    > **Note:** **Notiz**: Gehen Sie sicher das Ihr Ordner eine _index.html_ Datei hat.

5. Jetzt gehen Sie in einem neuen Fenster in Ihrem Browser _username_.github.io um Ihre Webseite online anzusehen. Als Beispiel können Sie auf folgende GitHub Webseite gehen: [chrisdavidmills.github.io](http://chrisdavidmills.github.io/).

    > **Note:** **Notiz**: Es dauert eventuell ein paar Minuten bis Ihre Webseite live geschaltet ist. Wenn sie diese nicht sofort sehen, warten Sie ein wenig und probieren es nach einiger Zeit noch einmal.

Um mehr zu lernen gehen Sie zu [GitHub Pages Help](https://help.github.com/categories/github-pages-basics/).

## Weiterer Lesestoff (in englisch)

- [What is a web server](/en-US/Learn/What_is_a_web_server)
- [Understanding domain names](/en-US/Learn/Understanding_domain_names)
- [How much does it cost to do something on the web?](/en-US/Learn/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): A nice tutorial from Codecademy that goes a bit further and shows some additional techniques.
- [Cheap or Free Static Website Hosting](http://alignedleft.com/resources/cheap-web-hosting) by Scott Murray has some useful ideas on available services.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}
