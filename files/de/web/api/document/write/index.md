---
title: Document.write()
slug: Web/API/Document/write
tags:
  - API
  - DOM
  - Document
  - Méthode
  - Referenz
translation_of: Web/API/Document/write
---
{{ ApiRef("DOM") }}

Schreibt eine Zeichenfolge in einen Dokument-Stream, der zuvor mittels [document.open()](/de/docs/Web/API/document.open) geöffnet wurde.

> **Note:** Hinweis: da `document.write` in einen Dokument-**Stream** schreibt, wird beim Aufruf von `document.write` auf ein geschlossenes (fertig geladenes) Dokument dieses automatisch wieder mittels `document.open` geöffnet, [wodurch das Dokument geleert wird](/de/docs/Web/API/document.open#Notes).

## Syntax

```js
document.write(markup);
```

### Parameter

- `markup`
  - : Ein String, der in das Dokument geschrieben wird.

### Beispiel

```html
<html>

<head>
  <title>write example</title>

  <script>
    function newContent() {
      alert("load new content");
      document.open();
      document.write("<h1>Raus mit dem Alten - rein mit dem Neuen!</h1>");
      document.close();
    }
  </script>
</head>

<body onload="newContent();">
  <p>originaler Dokumenten-Inhalt</p>
</body>

</html>
```

## Hinweise

Wird die Ausgabe auf ein Dokument angewendet, das zuvor nicht mittels [`document.open()`](/de/docs/Web/API/document.open) geöffnet wurde, löst dies ein implizites `document.open` aus. Sobald Sie den Schreibvorgang beendet haben, empfiehlt es sich [`document.close()`](/de/docs/Web/API/document.close) aufzurufen, um dem Browser mitzuteilen, dass das Dokument vollständig geladen werden kann. Der geschriebene Text wird in das Strukturmodell des Dokuments eingelesen. Im vorherigen Beispiel wird das `h1`-Element automatisch in einen Knoten im Dokument umgewandelt.

Wird der `document.write()` Aufruf in ein im HTML eingeschlossenes `<script>` Tag eingebunden, wird `document.open()` nicht aufgerufen. Zum Beispiel:

```html
<script>
  document.write("<h1>Main title</h1>")
</script>
```

> **Note:** **Hinweis:** `document.write` und `document.writeln` [funktionieren nicht in XHTML Documenten](/de/docs/Archive/Web/Writing_JavaScript_for_HTML) (Sie erhalten einen "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] Fehler in der Fehlerkonsole). Dies tritt auf, sobald Sie eine lokale Datei mit der Erweiterung .xhtml laden oder eine Datei öffnen, die mit dem `application/xhtml+xml`-[MIME-Typ](/de/docs/Glossary/MIME_type) vom Server gesendet wurde. Weitere Informationen erhalten Sie in der [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **Note:** **Hinweis:** `document.write` in [verzögert geladenen](/de/docs/Web/HTML/Element/script#attr-defer) oder [asynchronen](/de/docs/Web/HTML/Element/script#attr-async) Scripten wird ignoriert und Sie erhalten eine Nachricht ähnlich dieser in der Fehlerkonsole: "A call to `document.write()` from an asynchronously-loaded external script was ignored".

> **Note:** **Hinweis** (Nur Microsoft Edge): ein wiederholter Aufruf von`document.write` in einem `<iframe>` erzeugt den Fehler "SCRIPT70: Permission denied".

> **Note:** **Hinweis** (Chrome Version 55+): per `document.write()` injizierte `<script>`-Elemente werden bei einer 2G Verbindung nach einem HTTP Cache Miss nicht ausgeführt.

## Spezifikationen

- [DOM Level 2 HTML: `write()` Methode](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75233634)
- [Dynamische Markup-Einfügung in HTML](http://www.w3.org/TR/2011/WD-html5-author-20110705/apis-in-html-documents.html#dynamic-markup-insertion)

## Siehe auch

- {{ domxref("element.innerHTML") }}
- {{ domxref("document.createElement()") }}
