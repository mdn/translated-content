---
title: 'Aufgabe: Probleme bei der Zugänglichkeit beheben'
slug: Learn/Accessibility/Accessibility_troubleshooting
tags:
  - Anfänger
  - Aufgabe
  - Barrierefreiheit
  - CSS
  - CodingSc
  - HTML
  - JavaScript
  - Lernen
  - WAI-ARIA
translation_of: Learn/Accessibility/Accessibility_troubleshooting
---
{{LearnSidebar}}{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

In der Aufgabe dieses Moduls müssen Sie Probleme hinsichtlich Barrierefreiheit und Zugänglichkeit einer Beispielwebsite erkennen und beheben.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzung:</th>
      <td>
        Basic computer literacy, a basic understanding of HTML, CSS, and
        JavaScript, an understanding of the
        <a href="/en-US/docs/Learn/Accessibility"
          >previous articles in the course</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>To test basic knowledge of accessibility fundamentals.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit der Aufgabe zu beginnen, laden Sie den [ZIP-Ordner mit den Beispieldateien](https://github.com/mdn/learning-area/blob/master/accessibility/assessment-start/assessment-files.zip?raw=true) herunter. Extrahieren Sie die Inhalte in ein neues Verzeichnis auf Ihrem Computer.

Die fertige Beispielseite sollte so aussehen:

![](https://mdn.mozillademos.org/files/14555/assessment-site-finished.png)

Sie werden einige Unterschiede / Probleme bei der Anzeige des Ausgangszustands der Aufgabe bemerken - dies ist hauptsächlich auf die Unterschiede im Markup zurückzuführen, die wiederum einige Stilprobleme verursachen, da das CSS nicht ordnungsgemäß angewendet wird. Keine Sorge - Sie werden diese Probleme in den nächsten Abschnitten beheben!

## Projektbeschreibung

Für dieses Projekt wird Ihnen eine fiktive Naturseite präsentiert, die einen "sachlichen" Artikel über Bären enthält. Gegenwärtig gibt es eine Reihe von Problemen mit der Barrierefreiheit. Ihre Aufgabe ist es, die vorhandene Website zu erkunden und sie nach besten Kräften zu beheben, indem Sie die unten stehenden Fragen beantworten.

### Farben

Aufgrund des momentanen Farbschemas ist der Text der Webseite schwierig zu lesen. Können Sie den momentanen Farbkontrast (Text/Hintergrund) testen und die Farben so ändern, um das Problem mit dem Farbkontrast zu lösen?

### Semantisches HTML

1. Der Inhalt der Website ist momentan nicht besonders zugänglich. Probieren Sie aus was passiert, wenn Sie durch die Website navigieren.
2. Können Sie den Text des Artikels so ändern, um einfacher mit einem Screenreader navigieren zu können?
3. Das Navigationsmenü der Website (eingebunden in `<div class="nav"></div>`) könnte zugänglicher werden, indem man es in das geignete semantische HTML5-Element einbettet.

> **Hinweis:** **Sie müssen die CSS-Regelselektoren aktualisieren, die die Tags so formatieren, dass sie den semantischen Überschriften entsprechen. Sobald Sie Absatzelemente hinzufügen, werden Sie feststellen, dass das Styling besser aussieht.**

### Die Bilder

Die Bilder sind momenten nicht zugänglich für Benutzer von Screenreadern. Können Sie dies beheben?

### Der Musikplayer

1. The `<audio>` player isn't accessible to hearing impaired (deaf) people — can you add some kind of accessible alternative for these users?
2. The `<audio>` player isn't accessible to those using older browsers that don't support HTML5 audio. How can you allow them to still access the audio?

### Die Formulare

1. The `<input>` element in the search form at the top could do with a label, but we don't want to add a visible text label that would potentially spoil the design and isn't really needed by sighted users. How can you add a label that is only accessible to screenreaders?
2. The two `<input>` elements in the comment form have visible text labels, but they are not unambiguously associated with their labels — how do you achieve this? Note that you'll need to update some of the CSS rule as well.

### Schaltfläche zum Ein- und Ausblenden von Kommentaren

Die Schaltfläche für das Ein- und Ausblenden der Kommentare ist momentan nicht zugänglich für die Benutzung mit der Tastatur. Können Sie die Schaltfläche so ändern, damit sie für die Benutzung mit der Tastatur zugänglich wird - hinsichtlich Fokussieren mit der Tabulator-Taste und Aktivieren mit der Return-Taste.

### Die Tabelle

Im momentanen Zustand ist die Datentabelle nicht sehr zugänglich. Es ist schwer für den Benutzer eines Screenreaders Datenreihen und Datenspalten miteinander zu verknüpen. Außerdem besitzt die Tabelle keine Zusammenfassung. Können Sie das HTML so erweitern, damit das Problem gelöst werden kann?

### Weitere Überlegungen

Fallen Ihnen noch 2 weitere Verbesserungen für diese Seite ein um die Zugänglichkeit der Website zu verbessern?

## Einschätzung

Falls Sie diesen Test im Rahmen eines organisierten Kurses absolvieren, sollten Sie Ihre Arbeit Ihrem/r Mentor\*in/Lehrkraft zur Bewertung überreichen können. Falls Sie selbstständig lernen, können Sie die Bewertungskriterien sehr einfach erhalten, indem Sie im [Diskussionsthread für diese Übung](https://discourse.mozilla.org/t/accessibility-troubleshooting-assessment/24691), nachfragen oder im [#mdn](irc://irc.mozilla.org/mdn) IRC Channel auf [Mozilla IRC](https://wiki.mozilla.org/IRC). Versuchen Sie es zunächst selbst -- mit Mogeleien ist nichts gewonnen!

{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

## In diesem Modul

- [What is accessibility?](/de/docs/Learn/Accessibility/What_is_accessibility)
- [HTML: A good basis for accessibility](/de/docs/Learn/Accessibility/HTML)
- [CSS and JavaScript accessibility best practices](/de/docs/Learn/Accessibility/CSS_and_JavaScript)
- [WAI-ARIA basics](/de/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Accessible multimedia](/de/docs/Learn/Accessibility/Multimedia)
- [Mobile accessibility](/de/docs/Learn/Accessibility/Mobile)
- [Accessibility troubleshooting](/de/docs/Learn/Accessibility/Accessibility_troubleshooting)
