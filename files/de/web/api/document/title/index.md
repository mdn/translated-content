---
title: Document.title
slug: Web/API/Document/title
translation_of: Web/API/Document/title
---
{{APIRef("DOM")}}

Die Eigenschaft **`document.title`** holt oder setzt den aktuellen [Titel](/de/docs/Web/HTML/Element/title) des Dokuments.

## Syntax

    var docTitle = document.title;

_docTitle_ ist eine Zeichenfolge, die den Titel des Dokuments enthält. Wenn der Titel durch das Setzen von `document.title` überschrieben wurde, enthält er diesen Wert. Andernfalls enthält er den im Markup angegebenen Titel (siehe [Anmerkungen](#anmerkungen) unten).

    document.title = newTitle;

`newTitle` ist der neue Titel des Dokuments. Die Zuweisung beeinflusst den Rückgabewert von `document.title`, den für das Dokument angezeigten Titel (z.B. in der Titelleiste des Fensters oder Tabs), und sie beeinflusst auch das DOM des Dokuments (z.B. den Inhalt des Elements `<title>` in einem HTML-Dokument).

## Beispiel

```js
<!DOCTYPE html>
<html>
<head>
  <title>Hallo Welt!</title>
</head>
<body>

  <script>
    alert(document.title); // zeigt "Hallo Welt!"
    document.title = "Tschüss Welt!";
    alert(document.title); // zeigt "Tschüss Welt!"
  </script>

</body>
</html>
```

## Anmerkungen

Diese Eigenschaft gilt für HTML-, SVG-, XUL- und andere Dokumente in Gecko.

Bei HTML-Dokumenten ist der Anfangswert von `document.title` der Textinhalt des Elements `<title>`. Bei XUL ist es der Wert des {{XULAttr("title")}} Attributs des {{XULElem("window")}} oder eines anderen XUL-Elements der obersten Ebene.

In XUL hat der Zugriff auf `document.title`, bevor das Dokument vollständig geladen ist, ein undefiniertes Verhalten: `document.title` gibt möglicherweise eine leere Zeichenfolge zurück, und das Setzen von `document.title` hat möglicherweise keine Wirkung.

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar |
| ------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG','#document.title','document.title')}} | {{Spec2('HTML WHATWG')}} |           |

## Browser-Kompatibilität

{{Compat("api.Document.title")}}
