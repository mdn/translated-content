---
title: Optimizing your pages for speculative parsing
slug: Glossary/Speculative_parsing
---

Traditionally in browsers the HTML parser has run on the main thread and has blocked after a `</script>` tag until the script has been retrieved from the network and executed. The HTML parser in Firefox 4 and later supports speculative parsing off the main thread. It parses ahead while scripts are being downloaded and executed. As in Firefox 3.5 and 3.6, the HTML parser starts speculative loads for scripts, style sheets and images it finds ahead in the stream. However, in Firefox 4 and later the HTML parser also runs the HTML tree construction algorithm speculatively. The upside is that when a speculation succeeds, there's no need to reparse the part of the incoming file that was already scanned for scripts, style sheets and images. The downside is that there's more work lost when the speculation fails.

This document helps you avoid the kind of things that make speculation fail and slow down the loading of your page.

## Making speculative loads succeed

There's only one rule for making speculative loads of linked scripts, style sheets and images succeed:

- If you use a `<base>` element to override the base URI of your page, put the element in the non-scripted part of the document. Don't add it via `document.write()` or `document.createElement()`.

## Avoiding losing tree builder output

Speculative tree building fails when `document.write()` changes the tree builder state such that the speculative state after the `</script>` tag no longer holds when all the content inserted by `document.write()` has been parsed. However, only unusual uses of `document.write()` cause trouble. Here are the things to avoid:

- Don't write unbalanced trees. `<script>document.write("<div>");</script>` is bad. `<script>document.write("<div></div>");</script>` is OK.
- Don't write an unfinished token. `<script>document.write("<div></div");</script>` is bad.
- Don't finish your writing with a carriage return. `<script>document.write("Hello World!\r");</script>` is bad. `<script>document.write("Hello World!\n");</script>` is OK.
- Note that writing balanced tags may cause other tags to be inferred in a way that makes the write unbalanced. E.g. `<script>document.write("<div></div>");</script>` inside the `head` element will be interpreted as `<script>document.write("</head><body><div></div>");</script>` which is unbalanced.
- Don't let the semicolon of a named character reference be the last thing that is written. Due to a [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=535530) in Firefox 4 though 10 (fixed in Firefox 11), `<script>document.write("foo&nbsp;");</script>` causes a speculation failure. However, `<script>document.write("&nbsp;foo");</script>` is OK.
- Don't format part of a table. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` is bad. However, `<script>document.write("<table><tr><td>Hello World!</td></tr></table>");</script>` is OK.
- TODO: document.write inside other formatting elements.
