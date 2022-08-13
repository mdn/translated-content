---
title: Serverseitige Webseitenprogrammierung
slug: Learn/Server-side
tags:
  - Anfänger
  - Beginner
  - CodingScripting
  - Intro
  - Landing
  - Learn
  - Server
  - Server-side programming
  - Topic
  - serverseitiges Programmieren
translation_of: Learn/Server-side
---
{{LearnSidebar}}

Der Themenbereich **_Dynamische Webseiten_ **–_ **Serverseitige Programmierung**_ beinhaltet eine Reihe von Modulen, die erläutern, wie man dynamische Webseiten erstellt. Dynamische Webseiten sind Seiten, die individualisierte Inhalte als Antwort auf HTTP-Anfragen ausliefern. Die Module bieten eine allgemeine Einführung in die serverseitige Programmierung, wie auch spezifische Anfänger-Leitfäden zur Benutzung der Django (Python) und Express (Node.js/JavaScript) Web-Frameworks zum Erstellen von einfachen Anwendungen.

Die meisten großen Webseiten nutzten irgendeine Art serverseitiger Technologie zur dynamischen Anzeige von verschiedenen Daten, je nach Bedarf. Stellen Sie sich zum Beispiel einmal vor, wie viele Produkte es auf Amazon gibt und wie viele Posts auf Facebook geschrieben wurden. All diese darzustellen, indem man komplett statische Seiten nutzt, wäre völlig ineffizient. Deshalb laden solche Seiten stattdessen erst statische Vorlagen (erstellt mit [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript)), dann aktualisieren sie die Daten in diesen Vorlagen dynamisch, wenn sie benötigt werden, z.B. wenn Sie sich ein anderes Produkt auf Amazon ansehen wollen.

In der modernen Welt der Webentwicklung ist es sehr empfehlenswert, etwas über serverseitige Entwicklung zu lernen.

## Ihr Lernweg

Mit dem serverseitigen Programmieren zu beginnen, ist in der Regel leichter als mit der clientseitigen, weil dynamische Webseiten dazu neigen, viele ähnliche Arbeitsabläufe auszuführen (Daten aus einer Datenbank laden und auf der Webseite darstellen, Benutzereingaben validieren und in einer Datenbank speichern, Berechtigungen von Nutzern prüfen und einloggen von Benutzern, etc.) und mit Web-Frameworks konstruiert werden, die diese und andere häufige Webserver-Aufgaben erleichtern.

Grundlegende Kenntnisse von Konzepten der Programmierung (oder einer bestimmten Programmiersprache) sind hilfreich, aber nicht unbedingt notwendig. Genauso sind Kenntnisse in der clientseitigen Programmierung keine Vorraussetzung, aber ein grundlegendes Verständnis wird Ihnen helfen, besser mit den Entwicklern zusammen zu arbeiten, die Ihre Webseite clientseitig im "Front-end" entwickeln.

Sie werden verstehen müssen, "wie das Internet funktioniert". Wir empfehlen, dass Sie zuerst die folgenden Themen lesen:

- [What is a web server](/de/docs/Learn/Common_questions/What_is_a_web_server)
- [What software do I need to build a website?](/de/docs/Learn/Common_questions/What_software_do_I_need)
- [How do you upload files to a web server?](/de/docs/Learn/Common_questions/Upload_files_to_a_web_server)

Mit diesem grundlegenden Verständnis sind Sie bereit, sich durch die Module in diesem Abschnitt zu arbeiten.

## Module

Dieses Thema enthält die folgenden Module. Sie sollten mit dem ersten Modul beginnen, dann eines der nachfolgenden Module auswählen, die Ihnen zeigen, wie man mit zwei sehr verbreiteten serverseitigen Sprachen arbeitet, indem man das entsprechende Web-Framework verwendet.

- [Server-side website programming first steps](/de/docs/Learn/Server-side/First_steps)
  - : Dieses Modul bietet Server-Technologie-agnostische Informationen über serverseitiges Programmieren von Webseiten, einschließlich der Antworten auf die fundamentalen Fragen des serverseitigen Programmierens — "Was ist es?", "Wie unterscheidet es sich vom clientseitigen Programmieren?" und "Warum ist es so nützlich", einen Überblick über einige der verbreiteteren serverseitigen Web-Frameworks und einen Ratgeber darüber, wie Sie das am besten für Ihre Seite passende auswählen. Zuletzt geben wir noch eine Einführung in die Sicherheit von Webservern.
- [Django Web Framework (Python)](/de/docs/Learn/Server-side/Django)
  - : Django ist ein extrem beliebtes und vollwertiges Web-Framework, geschrieben in Python. Das Modul erklärt, warum Django so ein gutes Server-Framework ist, wie man eine Entwicklnugsumgebung einrichtet und wie man häufige Aufgaben damit erledigt.
- [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn/Server-side/Express_Nodejs)
  - : Express ist ein beliebtes Web-Framework, geschrieben in JavaScript und gehostet in der node.js Laufzeitumgebung. Das Modul erklärt einige der Hauptvorteile dieses Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie man damit häufige Entwicklungs- und Bereitstellungsaufgaben umsetzt.

## Siehe auch

- [Node server without framework](/de/docs/Learn/Server-side/Node_server_without_framework)
  - : Dieser Artikel liefert einen einfachen statischen Dateiserver, der mit Node.js erstellt wurde, für diejenigen, die das Framework nicht verwenden möchten.
