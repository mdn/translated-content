---
title: 'Warning: -file- is being assigned a //# sourceMappingURL, but already has one'
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
tags:
  - Error
  - JavaScript
  - Source maps
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Already_has_pragma
original_slug: Web/JavaScript/Reference/Fehler/Already_has_pragma
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: -file- is being assigned a //# sourceMappingURL, but already has one.

## Fehlertyp

Warnung. Die Ausführung von JavaScript wird nicht unterbrochen.

## Was ist falsch gelaufen?

Eine Source Map wurde mehrere Male für eine JavaScript Quelle spezifiziert.

JavaScript Quellen sind oft kombiniert und minimiert, um diesen auf einem Server effizienter zu gestalten. Mit [Source Maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) ist es möglich den Quelltext, beim Debuggen, zu den originalen Quelldateien zu verfolgen. Es gibt zwei Möglichkeiten Source Maps zuzuweisen, einerseits mit einem Kommentar und andererseits mit dem setzen eines Headers in der JavaScriptdatei.

## Beispiele

Setzen einer Source Map mit einem Kommentar in einer Datei:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Oder alternativ mit dem setzen eines Headers in einer JavaScriptdatei:

```js example-good
X-SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Use a source map – Firefox Tools Dokumentation](/de/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Introduction to JavaScript Source Maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
