---
title: ARIA
slug: Web/Accessibility/ARIA
translation_of: Web/Accessibility/ARIA
original_slug: Web/Barrierefreiheit/ARIA
---
Accessible Rich Internet Applications **(ARIA)** ermöglichen Webentwicklern Webinhalte und Web-Applikationen (insbesondere solche mit Ajax und JavaScript) besser zugänglich für Menschen mit Behinderungen und anderen Einschränkungen zu machen. Zum Beispiel lassen sich mit ARIA Navigations-Landmarken, JavaScript-Widgets, Formular-Hinweise und Fehlermeldungen hinzufügen und Live-Content-Aktualisierungen barrierefrei gestalten.

ARIA ist ein Satz von speziellen Attributen, die beliebigem Markup-Content hinzugefügt werden können, wurde jedoch vorwiegend für HTML entwickelt. Das Attribut `role` definiert, um welche Art von Element es sich bei einem Objekt handelt (z. B. article, alert, oder slider). Andere ARIA-Attribute erweitern den Inhalt einer Website um nützliche Hilfsfunktionen, wie z. B. Formularbeschreibungen und Anzeigen für den aktuellen Wert bei Fortschrittsanzeigen.

ARIA ist bei den meisten Browsern und Screen-Readern implementiert. Die Implementierungen weichen jedoch teilweise voneinander ab. Bei älterer Technologie ist die Unterstützung oft nicht vollständig (oder gar nicht vorhanden), daher sollte am besten "sicheres" ARIA eingesetzt werden, das bei schlechter Unterstützung keine Probleme verursacht, oder der Benutzer aufgefordert werden, neuere Technologie zu benutzen.

Bitte helfen Sie uns, ARIA zu verbessern! Falls sie nicht genügend Zeit haben, fügen sie ihre Vorschläge einfach auf der [Diskussionsseite](/Talk:en/ARIA "https://developer.mozilla.org/Talk:en/ARIA") hinzu.

### Einführung in ARIA

- [Einführung in ARIA](/de/docs/Barrierefreiheit/An_overview_of_accessible_web_applications_and_widgets "An overview of accessible web applications and widgets")
  - : Eine schnelle Einführung, die beschreibt, wie dynamische Inhalte mit ARIA barrierefrei gestaltet werden können. Lesen Sie auch die klassische [Einführung von Gez Lemon](http://dev.opera.com/articles/view/introduction-to-wai-aria/) von 2008.
- [Web-Applikationen und ARIA-FAQ](/de/docs/Accessibility/ARIA/Web_applications_and_ARIA_FAQ "https://developer.mozilla.org/en-US/docs/Accessibility/Web_applications_and_ARIA_FAQ")
  - : Antworten für die häufigsten Fragen rund um WAI-ARIA und warum es nötig ist, Web-Applikationen barrierefrei zu gestalten.
- [Videos von Screen-Readern mit ARIA](http://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : Schauen sie sich vereinfachte Beispiele und Praxisbeispiele zu ARIA an. Auch "davor und danach"-Beispiele sind hier zu finden.
- [Benutzung von ARIA mit HTML](http://dvcs.w3.org/hg/aria-unofficial/raw-file/tip/index.html)
  - : Hier finden Sie praxisorientierte Empfehlungen für Entwickler. Zum Beispiel welche Attribute mit welchen HTML-Elementen eingesetzt werden sollten.

### Einfache Verbesserungen mit ARIA

- [Enhancing Page Navigation with ARIA Landmarks](http://www.paciellogroup.com/blog/2010/10/using-wai-aria-landmark-roles/)
  - : Eine Einführung zur Verbesserung der Seitennavigation für Benutzer von Screen Readern mit ARIA-Landmarken. [Lesen Sie auch den Artikel zur Impelemtierung von ARIA-Landmarken](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) und schauen Sie sich bereits existierende Websites mit ARIA-Landmarken an (letze Aktualisierung: Juli 2011).
- [Verbesserung der Zugänglichkeit von Formularen](/de/docs/ARIA/forms)
  - : ARIA ist nicht nur für dynamische Inhalte! Lernen Sie, wie die Zugänglichkeit von HTML-Formularen mit Hilfe von ARIA-Attributen verbessert werden kann.
- [Live-Regions (work-in-progress)](/de/docs/Accessibility/ARIA/ARIA_Live_Regions "Live Regions")
  - : Live-Regionen liefern Screen Readern Hinweise über den Umgang mit Inhaltsänderungen bei Webseiten.
- [Using ARIA Live Regions to Announce Content Changes](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : Eine kurze Übersicht über Live-Regionen von den Machern der Screen-Reader Software JAWS. Live Regions werden auch von NVDA in Firefox und VoiceOver bei Safari unterstüzt (ab OS X Lion und iOS 5).

### ARIA für JavaScript-Widgets

- [Tastaturgesteuerte JavaScript-Komponenten](/de/docs/Web/Barrierefreiheit/Tastaturgesteuerte_JavaScript_Komponenten "en-US/docs/Accessibility/Keyboard-navigable_JavaScript_widgets")
  - : Der erste Schritt bei der Erstellung eines berrierefreien JavaScript-Widget ist, es mit der Tastatur navigierbar zu machen. Deiser Artikel zeigt die Arbeitsschritte auf, die hierfür nötig sind. Der [Artikel von Yahoo! zum Focus Management](http://www.yuiblog.com/blog/2009/02/23/managing-focus/) liefert ebenfalls eine gute Beschreibung.
- [Style-Guide für die Tastaturnavigation](http://access.aol.com/dhtml-style-guide-working-group/)
  - : Es stellt eine Herausforderung bei ARIA dar, Entwickler zur konsistenten Implementierung zu bringen, was für die Benutzer natürlich am besten wäre. Dieser Style-Guide beschreibt die Tastaturfunktionen bei bekannten Widgets.

### Weitere Informationen zu ARIA

- [Widget-Techniken, Tutorials und Beispiele](/de/docs/Accessibility/ARIA/widgets/overview "en-US/docs/aria/widgets/overview")
  - : Benötigen sie einen Slider, ein Menü oder eine andere Art von Widget? Hier finden Sie weiterführende Informationen.
- [ARIA-erweiterte JavaScript UI-Libraries](http://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)
  - : Falls Sie ein neues Projekt starten, setzen Sie eine UI-Widget-Llibrary mit ARIA-Unterstützung ein! Achtung: Der Artikel ist von 2009 - der Inhalt sollte auf eine MDN-Seite kopiert werden, damit er aktualisiert werden kann.
- [Barrierefreiheit von HTML5 und Rich Internet Applications - CSUN 2012 Workshop Materialen](http://dl.dropbox.com/u/573324/CSUN2012/index.html)
  - : Beinhaltet auch Präsentationen und Beispiele.

### Mailing-Liste

- [Free ARIA Google Group](https://groups.google.com/forum/#!forum/free-aria)
  - : Hier können Fragen zu ARIA gestellt und Vorschläge gemacht werden, um diese ARIA-Dokumentation zu verbessern.

### Blogs

ARIA-Information von Blogs sind meist schnell veraltet. Dennoch gibt es einige hilfreiche Informationen von anderen Entwicklern, die mit ARIA arbeiten.

[Paciello Group](http://www.paciellogroup.com/blog/category/wai-aria/)

[Accessible Culture](http://www.accessibleculture.org/tag/wai-aria/)

[Yahoo! Accessibility](http://yaccessibilityblog.com/library/category/code/aria)

### Fehler melden

[Schreiben Sie ARIA-Fehlerberichte zu Browsern, Screen-Readern und JavaScript-Libraries](/en/Accessibility/ARIA/How_to_file_ARIA-related_bugs "https://developer.mozilla.org/en/ARIA/How_to_file_ARIA-related_bugs").

### Beispiele

- [Verzeichnis für ARIA-Beispiele](/de/docs/Accessibility/ARIA/ARIA_Test_Cases "en-US/docs/ARIA/examples")
  - : Einige Beispieldateien mit Grundstruktur von denen man lernen kann.
- Beispiele für zugängliche JS-Widget-Libraries
  - : [Dojo](http://dojotoolkit.org/widgets), [jQuery](http://hanshillen.github.com/jqtest/), [Fluid](http://wiki.fluidproject.org/display/fluid/Components), [YUI](http://yuilibrary.com/gallery/)

- [Yahoo! Mail](http://mail.yahoo.com)
  - : Yahoo! hat bei Yahoo! Mail sehr gute Arbeit geleistet. Einer Web-App, die beinahe wie eine native App aussieht und sehr gut funktioniert, wie ein [Review über Yahoo! Mail](http://www.marcozehe.de/2011/09/21/review-the-all-new-yahoo-mail-web-application/) des Screen-Reader-Benutzers Marco Zehe zeigt. Sein Kommentar: "Keep up the good work!".

- [Yahoo! Search](http://search.yahoo.com)
  - : Yahoo! hat hier ebenfalls sehr gute Arbeit geleistet, die Möglichkeiten mit ARIA voll ausgeschöpft und die [Technik ausführlich dokumentiert](http://ycorpblog.com/2011/03/23/searchdirect/). Bei Yahoo! Search kommt eine Kombination von ARIA-Landmarken, Live-Regionen und Widgets zum Einsatz.

### Bemühungen zur Standardisierung

- [Übersicht zu den WAI-ARIA Aktivitäten des W3C](http://www.w3.org/WAI/intro/aria.php)
  - : Übersicht zu den Bemühungen für die Standardisierung von AI-ARIA der Web Accessibility Initiative (WAI).
- [WAI-ARIA Spezifikation](http://www.w3.org/TR/wai-aria/)
  - : Die Spezifikation des W3C ist als Referenz sehr nützlich. In diesem Stadium unbedingt Kompatibilitätstest durchgeführt werden, da die Implematierungen noch immer voneinader abweichen.
- [WAI-ARIA Authoring Practices](http://www.w3.org/WAI/PF/aria-practices/)

  - : Wie bei der WAI-ARIA-Spezifikation des W3C stellen die offiziellen best-practices ein Ideal für die Zukunft dar - den Zeitpunkt, an dem davon ausgegangen werden kann, dass die ARIA-Überstützung bei allen Browsern und Screen-Readern konsistent implemetiert ist. Die W3C-Dokumente erlauben die tiefgehende Einsicht in die Struktur von ARIA.

    Für jetzt gilt, dass Webentwickler, die ARIA implementieren, die Kompatibiliät maximieren sollten und hierfür auf die Dokumentation von Best-Practices und Beispielen zurückgreifen.

- [Open AJAX Accessibility Task Force](http://www.openajax.org/member/wiki/Accessibility)
  - : Die Open AJAX Effort Centers zu Themen wie Entwicklerwerkzeugen, Beispieldateien und automatisierte Tests für ARIA.
- [In der Entwicklung: WCAG 2.0 ARIA Techniken](/de/docs/Accessibility/ARIA/ARIA_Techniques "ARIA Techniques")
  - : Die Community benötigt einen kompletten Satz von WCAG-Techniken für WAI-ARIA + HTML, damit Organisationen davon ausgehen können, dass ihre ARIA-erweiterten Inhalte WCAG-konform sind. Das ist vor allem dann wichtig, wenn Regulierungen und Vorschriften auf WCAG basieren.

### Verwandte Themen

[Accessibility](/de/docs/Accessibility "en-US/docs/Accessibility"), [AJAX](/de/docs/AJAX "en-US/docs/AJAX"), [JavaScript](/de/docs/JavaScript "en-US/docs/JavaScript")
