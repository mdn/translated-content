---
title: Einführung in HTML
slug: Learn/HTML/Introduction_to_HTML
tags:
  - Einführung in HTML
  - HTML
  - Kopf
  - LandingPage
  - Lernen
  - Links
  - Struktur
  - Textformatierung
  - head
translation_of: Learn/HTML/Introduction_to_HTML
original_slug: Learn/HTML/Einführung_in_HTML
---
{{LearnSidebar}}

{{glossary("HTML")}} ist eine relativ einfache Sprache, die aus [Elementen](/de/docs/Glossary/Element) aufgebaut ist. Diese Elemente können auf verschiedene Textstücke angewandt werden, um ihnen verschiedene Bedeutungen zuzuschreiben (Ist es ein Absatz, eine Liste oder Teil einer Tabelle?), um ein Dokument sinnvoll zu strukturieren (Gibt es eine Kopfzeile? Ist der Inhalt in drei Spalten gegliedert? Gibt es ein Navigationsmenü?) und um Inhalte, wie Videos und Bilder einzubetten. Dieses Modul wird sich mit den ersten Beiden dieser Punkte beschäftigen und die fundamentalen Konzepte und Syntax einführen, die Sie zum Verständnis von HTML kennen müssen.

## Voraussetzungen

Sie benötigen für dieses Modul keine HTML Kenntnisse, allerdings sollten Sie grundsätzlich mit Computern umgehen können und das Internet passiv nutzen (d.h. im Internet surfen und Inhalte konsumieren). Sie sollten sich bereits eine einfache Arbeitsumgebung eingerichtet haben, wie in [Notwendige Software installieren](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) beschrieben; und wissen wie Sie Ihre Dateien erstellen und ordnen, wie in [Dateien nutzen](/de/docs/Learn/Getting_started_with_the_web/dateien_nutzen) erklärt. Beide Artikel sind Teil unserer Artikelserie [Lerne das Internet kennen](/de/docs/Learn/Getting_started_with_the_web), welche das Grundwissen abdeckt, welches in diesem Modul vorrausgesetzt wird.

> **Note:** **Hinweis**: Wenn Sie an einem Computer/Tablet/Gerät arbeiten, auf dem Sie nicht die Möglichkeit haben, eigene Dateien zu erstellen, können Sie die meisten Code-Beispiele in einem Online-Editor wie [JSBin](http://jsbin.com/) oder [Thimble ](https://thimble.mozilla.org/)ausprobieren.

## Lerneinheiten

Dieses Modul enthält die folgenden Lerneinheiten, die Ihnen HTML in Theorie und Praxis näher bringen. Es werden viele Möglichkeiten geboten, in denen Sie Ihre neu erworbenen Fähigkeiten ausprobieren können.

- [Lernen Sie HTML kennen](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
  - : Hier lernen Sie die absoluten Grundlagen von HTML. Für den Anfang werden wir Begriffe, wie "Elemente", "Attribute" und andere wichtige Begriffe definieren und deren Einordung in die Sprache vornehmen. Wir zeigen Ihnen, wie eine HTML-Webseite typischerweise aufgebaut ist, wie eine HTML-Elemente strukturiert sind und erklären weitere grundlegende Sprachfunktionen. Sie können zwischendurch immer wieder mit HTML-Code spielen, damit sie ein Gefühl für die Zusammenhänge bekommen.
- [Was gehört in den Kopf der HTML-Datei?](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
  - : Der Kopf ([Head](/de/docs/Glossary/Head)) eines HTML Dokuments ist der Teil, der **nicht** im Browser angezeigt wird, wenn dieses geladen wird. Im Kopf sind Zusatzinformationen zur Webseite enthalten, zum Beispiel das {{htmlelement("title")}}-Element, das den Titel der Webseite enthält, Links zu {{glossary("CSS")}}-Dateien (mit welchen die Webseite gestaltet wird) und Metadaten (z. B. wer der Autor der Webseite ist und Schlagwörter, welche Suchmaschinen helfen Ihre Webseite einzuordnen).
- [Einfache Textformatierung in HTML](/de/docs/Learn/HTML/Einf%C3%BChrung_in_HTML/Einfache_Textformatierung_in_HTML)
  - : Eine der Hauptaufgaben von HTML ist es, jedem Textteil Informationen zu seiner Bedeutung im Kontext zukommen zu lassen (auch [Semantics](/de/docs/Glossary/Semantics) genannt), damit der Browser weiß, wie der Textteil darzustellen ist. In diesem Artikel lernen Sie, wie man mit HTML einen Textblock in Überschriften und Absätze strukturiert, Hervorhebungen und Gewicht zu Wörtern hinzufügt, Listen erstellt und vieles mehr.
- [Erstellen von Hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
  - : Hyperlinks sind sehr wichtig, denn erst Sie machen das Internet zu einem Netzwerk. Dieser Artikel behandelt die Syntax eines Links und bespricht allgemeine Richtlinien zu Links.
- [Fortgeschrittene Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
  - : Es gibt, neben den im Artikel [Einfache Textformatierung in HTML](/de/docs/Learn/HTML/Einf%C3%BChrung_in_HTML/Einfache_Textformatierung_in_HTML) erläuterten, viele weitere HTML-Elemente, mit denen man Texte formatieren kann. Diese HTML-Elemente sind nicht ganz so bekannt, aber es ist dennoch hilfreich, sie zu kennen. Hier lernen Sie, wie man Zitate einbindet, Description Lists (dt. etwa: beschreibende Listen) erstellt, Computer-Code und ähnlichen Text darstellt, Hoch- und Tiefstellung erreicht, Kontaktinformationen anordnet und einiges mehr.
- [Struktur in die Webseite bringen](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
  - : Sie können mit HTML sowohl individuelle Teile der Webseite (wie "einen Absatz" oder "ein Bild"), aber auch ganze Abschnitte der Seite formatieren (wie "die Kopfzeile", "das Naviagtionsmenü" oder "die Hauptinhaltsspalte"). In diesem Artikel geht es um das planen einer grundlegenden Webseitenstruktur und die anschließende Umsetzung dieser Struktur in HTML.
- [Fehlersuche in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
  - : HTML schreiben zu können ist gut, aber was können Sie tun, wenn etwas nicht funktioniert und Sie den Fehler im Code nicht finden? Dieser Artikel stellt ein paar Werkzeuge vor, die Ihnen bei der Fehlersuche helfen können.

## Aufgaben

Die folgenden Übungsaufgaben überprüfen Ihr Verständnis der in den obigen Lerneinheiten behandelten HTML-Grundlagen.

- [Formatieren Sie einen Brief](/de/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
  - : Wir lernen früher oder später alle, einen formalen Brief zu schreiben. Darüber hinaus ist es auch ein schönes Beispiel um den Wissenstand im Bereich der Textformatierung unter Beweis zu stellen. In dieser Aufgabe sollen Sie einen vorgegebenen Brief mit HTML formatieren.
- [Strukturieren Sie eine Webseite](/de/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
  - : In dieser Übungsaufgabe wird Ihre Fähigkeit getestet, mit HTML eine einfache Webseite zu strukturieren. Diese enthält eine Kopfzeile, eine Fußzeile, ein Navigationsmenü, eine Hauptspalte und eine Randspalte.

## Siehe auch

- [Webgrundlagen Basiskurs 1 (Englisch)](https://teach.mozilla.org/activities/web-lit-basics/)
  - : Ein exzellenter Kurs der Mozilla Foundation, der viele Inhalte des _Einführung in HTML_ Moduls, anwendet und festigt. Die Lernenden machen sich in diesem sechsteiligen Modul mit dem Lesen, Schreiben und Teilnehmen im Internet vertraut. Entdecken Sie die Fundamente des Internets durch Erschaffen und Zusammenarbeit.
