---
title: HTML forms
slug: Learn/Forms
tags:
  - Anleitung
  - Beginner
  - Formular
  - HTML
  - Lernen
  - Web
translation_of: Learn/Forms
original_slug: Learn/HTML/Forms
---
{{LearnSidebar}}

Dieser Abschnitt bietet eine Reihe von Artikeln, die Dir helfen werden, HTML-Formulare zu meistern. HTML-Formulare sind sehr mächtige Werkzeuge, um mit Nutzern zu interagieren — am häufigsten werden sie benutzt, um Daten von Nutzern zu erheben oder um ihnen zu erlauben, eine Benutzerschnittstelle zu bedienen. Auch ist klar, dass wegen historischen und technischen Gründen es nicht immer offensichtlich ist, wie man diese volkommen effektiv nutzt. In dieser Anleitung werden wir alle Aspekte der HTML-Formulare abdecken, einschließlich das Auszeichnen ihrer HTML-Struktur, das Styling von Formelementen, das Validieren von Formulardaten und das Senden von Daten an den Server.

## Voraussetzungen

Vor dem Beginnen dieses Abschnitts, solltest du dich zumindest durch unsere [Einführung in HTML](/de/docs/Learn/HTML/Einf%C3%BChrung_in_HTML) durchgearbeitet haben. Zu diesem Zeitpunkt solltest die Grundleitfäden einfach zu verstehen finden und dazu fähig sein ,Gebrauch von unserer [Nativen-Formular-Komponenten-Anleitung](/de/docs/Learn/HTML/Forms/The_native_form_widgets) zu machen.

Das Meistern von Formularen benötigt allerdings mehr als nur HTML-Kenntnisse — Du wirst auch einige spezielle Techniken zum Stylen von Formular-Komponenten lernen müssen. Daneben ist ein wenig Scripting-Wissen erforderliche, um Dinge wie Validierung und das erstellen eigener Formular-Komponenten zu erledigen. Daher würden wir empfehlen, dass du diese Seite zunächst verlässt, um ein wenig [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) zu erlernen und danndie anderen Abschnitte durchliest.

Der obenstehende Text ist ein guter Indikator, warum wir Web-Formulare in ein eigenständiges Modul gepackt haben anstatt Teile davon in die HTML, CSS, und JavaScript Themengebiete zu legen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente und benötigen dazu eine enge Verbindung von CSS- und JavaScript-Techniken, um das meiste aus ihnen herauszuholen.

> **Note:** **Notiz**: Wenn du auf einem Computer/Tablet/anderem Gerät arbeitest, wo du nicht die Möglichkeit hast, eigene Dateien zu erstellen, kannst du (die meisten) Code-Beispiele in einem Online-Coding-Programm, wie [JSBin](http://jsbin.com/) oder [Glitch](https://glitch.com/) nutzen.

## Grundlagen

- [Dein erstes HTML-Formular](/de/docs/Learn/HTML/Forms/Your_first_HTML_form)
  - : Der erste Artikel in unserer Reihe bietet Dir deine erste Erfarung, ein HTML-Formular zu erstellen, was das einfache Designen eines Formulars, Einbinden mit den richtigen HTML-Element, dezentes Styling mit CSS und Weitergabe der Daten zu einem Server mit einschließt.
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
  - : Nach dem Abhandeln der Grundlagen, können wir jetzt mehr detalliert in die Elemente, die Struktur bieten, hereingucken und die Bedeutung verschiedener Teile des Formulars verstehen.

## Die verschiedenen Formular-Komponeneten

- [Die nativen Formular-Komponenten](/de/docs/Learn/HTML/Forms/The_native_form_widgets)
  - : Wir gucken jetzt auf die Funktionalität der verschiedenen {{htmlelement("input")}} Formular-Komponenten im Detail - Welche Optionen verfügbar sind, um verschiedene Dateitypen zu sammeln.
- [Die HTML5 Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
  - : Hier setzen wir unsere Vertiefung in das `<input>`-Element fort, schauen auf die verschiedenen zusätzlichen input-Typen, die mit der Veröffentlichung von HTML5 bereitgestellt wurden und die verschiedenen UI-Komponenten und die Verbesserung der Datenerhebung, welche sie ermöglichen. Zusätzlich schauen wir uns das {{htmlelement('output')}}-Element an.
- [Andere Formular-Komponentent](/de/docs/Learn/Forms/Other_form_controls)
  - : Next we take a look at all the non-`<input>` form controls and associated tools, such as {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}}, and {{htmlelement('progress')}}.

## Form styling guides

- [Stylen von Web-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
  - : Dieser Artikel stellt eine Einführung in das Stylen von Formularen mit CSS bereit. Er beinhaltet Grundlagen, die Du vielleicht für einfache Styling-Aufgaben benötigen wirst.
- [Fortgeschrittenes Stylen von Formularen](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Hier schauen wir uns einige fortgeschrittene Techniken zum Stylen von Formularen an, die benötigt werden, sobald einige der schwieriger zu stylende Formular-Elemente gehandhabt werden sollen.
- [UI pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI pseudo-Klassen, die ermöglichen, dass HTML Formular-Komponenten auf Basis ihres aktuellen Status anvisiert werden können.

## Prüfen und Abschicken von Daten

- [Clientseitige Formulardaten-Validation](/de/docs/Learn/HTML/Forms/Form_validation)
  - : Das Senden von Daten ist noch nicht genug - wir müssen auch prüfen, ob die Daten, die der Nutzer eingegeben hat, im korrektem Format sind, um sie erfolgreich verarbeiten zu können und diese unserer Anwendung nicht zerstören. Wir möchten dem Nutzer beim Ausfüllen der Daten helfen, und ihn nicht frustrieren, wenn er versucht unsere Anwendung zu nutzen. Formular-Validation hilft uns, diiese Ziele zu erreichen - Dieser Artikel erklärt Dir alles, was du wissen musst.
- [Das Senden von Daten](/de/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel zeigt, was passiert, wenn ein Benutzer ein Formular abschickt — wohin gehen die Daten und wie werden diese genutzt, wenn diese dort angekommen sind? Wir gucken ebenfalls auf ein paar Sicherheitsbedenken, die mit dem Senden von Daten verbunden sind.

## Weiterführende Anleitungen

Die nachfolgenden Artikel sind nicht zwingend notwendig für den Lernpfad, aber sie erweisen sich als interessant und nützlich, wenn Du die obenstehenden Techniken gemeistert hast und mehr lernen möchtest.

- [Wie man eigene Formular-Komponenten baut](/de/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
  - : Du wirst über ein paar Fälle stoßen, wo die nativen Formuar-Komponenten nicht das bieten, was Du brauchst, wie zum Beispiel aus Styling-Gründen oder Funktionalität. In diesen Fällen musst Du eventuell Deine eigenen Formular-Komponenten aus purem HTML bauen. Dieser Artikel erklärt, wie Du dies tun kannst und welchen Überlegungen Du Dir im Klaren sein musst - mit einem praktischen Fall-Beispiel.
- [Senden von Formularen mit JavaScript](/de/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel betrachtet Möglichkeiten, wie ein Formular genutzt werden kann, um eine HTTP-Anfrage zu erstellen und diese mit JavaScript versandt werden kann statt dem üblichen Formularversand. Es schaut auch auf die Gründe, warum Du dies machen wolltest und die Folgen davon. (Siehe auch Using FormData objects.)
- [HTML-Formulare in veralteten Browsern](/de/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
  - : Dieser Artikel beinhaltet das Erkennen von Features usw. Er sollte zum Artikel über das Testen von plattformunabhängigen Features umleiten, da der selbe Inhalt dort besser erklärt wird.

## Siehe auch

- [HTML forms element reference](/de/docs/Web/HTML/Element#Forms)
- [HTML \<input> types reference](/de/docs/Web/HTML/Element/input)
