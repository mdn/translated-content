---
title: XHTML
slug: Glossary/XHTML
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**XHTML** est un terme historiquement utilisé pour décrire des documents [HTML](/fr/docs/Web/HTML) écrits selon les règles de syntaxe de {{Glossary("XML")}}.

L'exemple suivant montre un document HTML et un document «&nbsp;XHTML&nbsp;» correspondant, ainsi que les en-têtes {{Glossary("HTTP")}} {{HTTPHeader("Content-Type")}} qui doivent les accompagner lors de la diffusion.

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>Je suis un document HTML</p>
  </body>
</html>
```

```xml
<!-- Content-Type: application/xhtml+xml -->

<?xml version="1.0" encoding="UTF-8"?>
<html xml:lang="fr" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>Je suis un document XHTML</p>
  </body>
</html>
```

En pratique, très peu de documents «&nbsp;XHTML&nbsp;» sont diffusés sur le Web avec un en-tête `Content-Type: application/xhtml+xml`. À la place, même si les documents respectent la syntaxe XML, ils sont envoyés avec un en-tête `Content-Type: text/html` — ainsi, les navigateurs analysent ces documents avec des analyseurs HTML plutôt qu'avec des analyseurs XML.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("HTML")}}
  - {{Glossary("HTML5")}}
  - {{Glossary("SVG")}}
  - {{Glossary("MathML")}}
  - {{Glossary("XML")}}
