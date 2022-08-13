---
title: Was ist CSS
slug: Learn/CSS/First_steps/How_CSS_works
translation_of: Learn/CSS/First_steps/How_CSS_works
translation_of_original: Web/Guide/CSS/Getting_started/What_is_CSS
original_slug: Web/Guide/CSS/Getting_started/Was_ist_CSS
---
{{LearnSidebar}}

{{previousPage("/en-US/docs/Web/Guide/CSS/Getting_Started", "Einführung")}} Das erste Kapitel von [CSS für Einsteiger](/de/docs/Web/Guide/CSS/Getting_Started "en/CSS/Getting Started") erklärt kurz CSS. Sie werden in den nächsten Kapiteln ein simples Dokument zum Üben erstellen.

## Was ist CSS

Cascading Style Sheets (_CSS_ für "gestufte Gestaltungsbögen") ist eine Sprache, die definiert wie Dokumente dem Benutzer präsentiert werden.

Ein _Dokument_ ist eine Ansammlung von Informationen (Texte, Bilder, …), die mit einer _Auszeichnungssprache_ _(Markup Language)_ strukturiert werden. In der Auszeichnungssprache wird angegeben, dass ein Text beispielsweise als Überschrift oder als Link dargestellt werden soll. Es wird jedoch NICHT angegeben, WIE eine Überschrift oder ein Link dargestellt werden sollen. Das genau macht CSS.

Ein solches Dokument einem Benutzer zu _präsentieren_ bedeutet, es in einer lesbaren Form darzustellen. Browser wie Firefox, Chrome oder Internet Explorer sind dafür entworfen, Dokumente visuell zu präsentieren. Beispielsweise auf einem Computer Monitor, Beamer oder Drucker.

**Beispiele**

- Eine Webseite, wie diese hier, ist ein Dokument.
  Die Information, die Sie auf einer Webseite sehen können, ist normalerweise mit der Auszeichnungssprache HTML (HyperText Markup Language) geschrieben.
- Auch Dialoge in einer Anwendung - auch Dialogfenster genannt - sind oft Dokumente. Solche Dialoge können auch mit einer Auszeichnugssprache, wie XUL (XML User Interface Language für XML Benutzeroberflächensprache), strukturiert sein. XML oder XUL sind also Beispiele für andere Auszeichungssprachen.

In dieser Anleitung gibt es Boxen mit der Beschriftung **Weitere Details**, wie sie unten zu sehen ist. Solche Boxen stellen weiterführende Informationen und Links zu einem Thema bereit. Lesen Sie sie, folgen Sie den Links oder überspringen Sie diese Boxen und lesen Sie sie später.

Weitere Details

Ein Dokument ist nicht dasselbe wie eine Datei. Sie können aber selbstverständlich ein Dokument als Datei abspeichern.

Das Dokument, das Sie gerade lesen, ist nicht als Datei gespeichert. Wenn Ihr Browser diese Seite anfragt, durchsucht der Server eine Datenbank und generiert dieses Dokument indem er Teile daraus aus mehreren, verschiedenen Dateien zusammensetzt.

Sie werden dennoch in diesem Tutorial mit Dokumenten arbeiten, die in Dateien gespeichert sind.

Weiterführende Infromationen über Dokumente und Auszeichnungssprachen finden Sie hier:

| [HTML](/de/docs/Web/HTML) | für Webseiten                         |
| ------------------------- | ------------------------------------- |
| [XML](/de/docs/XML)       | allgemein für strukturierte Dokumente |
| [SVG](/de/docs/Web/SVG)   | für Grafiken                          |
| [XUL](/de/docs/XUL)       | für Userinterfaces in Mozilla         |

Im Teil II dieses Tutorials werden Sie Beispiele für diese Auszeichnungssprachen sehen.

Weitere Details

In korrekter CSS-Terminologie wird das Programm, das ein Dokument darstellt _user agent (UA)_ genannt. Ein Browser ist nur eine Art eines UA. CSS ist nicht nur für Browser oder Präsentationen interessant, aber im Teil I dieses Tutorials werden Sie nur mit CSS in einem Browser arbeiten.

Für korrekte Definitionen der CSS-Terminologie sehen Sie unter [Definitions](http://www.w3.org/TR/CSS21/conform.html#q1) in der CSS Spezifikation des World Wide Web Consortium (W3C) nach. Das ist eine internationale Gemeinschaft, die offene Standards für das Web definiert.

## Action: Ein Dokument erstellen

```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>Sample document</title>
  </head>

  <body>
    <p>
      <strong>C</strong>ascading
      <strong>S</strong>tyle
      <strong>S</strong>heets
    </p>
  </body>
</html>
```

{{ LiveSampleLink('Action_Ein_Dokument_erstellen', 'Schauen Sie sich die Demo an') }}

1.  Erstellen Sie einen neuen Ordner irgendwo auf Ihrem Computer, um die Übungen für dieses Tutorial abzuspeichern.
2.  Öffnen Sie einen Texteditor und erstellen Sie eine neue Textdatei. Diese Datei wird das Dokument für die nächsten Übungen enthalten.
3.  Kopieren Sie den folgenden HTML-Code in Ihre Datei, und speichern Sie diese unter dem Namen `doc1.html`
4.  Öffnen Sie in Ihrem Browser ein neues Fenster oder einen neuen Tab und dann öffnen Sie darin die Datei, die Sie gerade gespeichert haben. Sie sollten dann folgenden Text mit fetten Anfangsbuchstaben sehen:

| **C**ascading **S**tyle **S**heets |
| ---------------------------------- |

Möglicherweise sieht der Text in Ihrem Browser etwas anders aus als hier dargestellt. Das liegt daran, dass manche der Einstellungen in Ihrem Browser anders sein können, als wir sie hier verwendet haben. Das tut aber vorerst nichts zur Sache.

## Was nun?

{{nextPage("/en-US/docs/Web/Guide/CSS/Getting_Started/Why_use_CSS", "Wofür CSS?")}}Ihr Dokument verwendet vorerst noch kein CSS. Im [nächsten Abschnitt](/de/docs/Web/Guide/CSS/Getting_Started/Why_use_CSS) werden Sie CSS verwenden um die Darstellung Ihres Dokumentes zu verändern.
