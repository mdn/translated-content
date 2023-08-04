---
title: StyleSheet.href
slug: Web/API/StyleSheet/href
---

{{APIRef("CSSOM")}}

Renvoie l'emplacement de la feuille de style.

## Syntaxe

```js
uri = stylesheet.href;
```

### Paramètres

- `uri` Est une chaîne contenant l'URI de la feuille de style.

## Exemple

```html
// sur une machine locale:
<html>
  <head>
    <link rel="stylesheet" href="example.css" type="text/css" />
    <script>
      function sref() {
        alert(document.styleSheets[0].href);
      }
    </script>
  </head>
  <body>
    <div class="tonnerre">Thunder</div>
    <button onclick="sref()">ss</button>
  </body>
</html>
// retourne "fichier: //// C: /Windows/Desktop/example.css
```

## Remarques

Si la feuille de style est une feuille de style liée, la valeur de son attribut est son emplacement. Pour les feuilles de style en ligne, la valeur de cet attribut est `NULL`.

Cette propriété est en lecture seule sur Firefox, Opera, Google Chrome et Safari, et elle est lue / écrite dans Internet Explorer.

## Spécification

[Href](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-href)
