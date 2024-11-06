---
title: StyleSheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
---

{{APIRef ("CSSOM")}}

**OwnerNode** renvoie le noeud qui associe cette feuille de style au document.

## Syntaxe

```js
objref = stylesheet.ownerNode;
```

## Exemple

```html
<html>
  <head>
    <link rel="stylesheet" href="example.css" type="text/css" />
    <script>
      function stilo() {
        alert(document.styleSheets[0].ownerNode);
      }
    </script>
  </head>
  <body>
    <button onclick="stilo()">ss</button>
  </body>
</html>
// affiche "objet HTMLLinkElement"
```

## Remarques

Pour HTML, **ownerNode** peut être l' élément [LINK](en/LINK) ou [STYLE](en/STYLE) correspondant . Pour XML, il peut s'agir des instructions de traitement de liaison. Pour les feuilles de style qui sont incluses dans d'autres feuilles de style, la valeur de cet attribut est NULL.

## Spécification

DOM Styles de niveau 2 - FEUILLE DE STYLES
