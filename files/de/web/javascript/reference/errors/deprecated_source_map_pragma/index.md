---
title: >-
  SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //#
  instead
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
tags:
  - Errors
  - JavaScript
  - Source maps
translation_of: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
original_slug: Web/JavaScript/Reference/Fehler/Deprecated_source_map_pragma
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

    Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead

## Fehlertyp

Eine Warnung die als {{jsxref("SyntaxError")}} auftritt. Die Ausführung von JavaScript wird nicht unterbrochen.

## Was ist falsch gelaufen?

Es gibt eine veraltete Source-Map-Syntax im JavaScript Code.

JavaScript Code wird oft zusammengefügt und minimiert, um die Auslieferung durch einen Server effizienter zu machen. Mit [Source-Maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) kann beim Debuggen der ausgeführte Code auf die Original Codedateien übertragen werden.

Die Source-Map Spezifikation änderte die Syntax wegen eines Konflikts mit dem IE immer wenn die Seite nach `//@cc_on` war, interpretierte dieser es als bedingte Kompilierung in der IE JScript Umgebung. Der [bedingte Kompilations Kommentar](https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx) im IE ist eine relativ unbekannte Funktion, aber dieses machte Source-Maps von [jQuery](https://bugs.jquery.com/ticket/13274) und anderen Bibliotheken kaputt.

## Beispiele

### Veraltete Syntax

Syntax mit dem veralteten "@" Zeichen.

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### Standard Syntax

Benutzt stattdessen ein "#" Zeichen.

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Alternativ kann ein {{HTTPHeader("SourceMap")}} Header zu der JavaScript Datei gesetzt werden, um einen solchen Kommentar zu vermeiden:

```js example-good
SourceMap: /path/to/file.js.map
```

## Siehe auch

- [Wie man eine Source-Map einsetzt – Firefox Werkzeug Dokumentation](/de/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Einführung in Source-Maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
- {{HTTPHeader("SourceMap")}}
