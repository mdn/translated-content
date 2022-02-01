---
title: Document.bgColor
slug: Web/API/Document/bgColor
translation_of: Web/API/Document/bgColor
---
{{APIRef("DOM")}} {{ Deprecated_header() }}

La propriété obsolète `bgColor` renvoie ou déinit la couleur de fond (background-color) du document courant.

## Syntaxe

    color = document.bgColor
    document.bgColor =color

### Parametres

- `color` est une chaîne de caractères représentant la couleur comme un mot (e.g., "red") ou une valeur hexadécimale (e.g., "`#ff0000`").

## Exemple

    document.bgColor = "darkblue";

## Notes

La valeur par défaut pour cette propriété sur Firefox est le blanc (`#ffffff` en hexadécimal).

`document.bgColor` est obsolète dans le [DOM Niveau 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). L'alternative recommandée est l'utilisation du style CSS {{Cssxref("background-color")}} qui peut être accessible via le DOM avec `document.body.style.backgroundColor`. Une autre alternative est `document.body.bgColor`, mais c'est aussi obsolète dans HTML 4.01 en faveur de l'alternative CSS.

## Compatibilité des navigateurs

{{Compat("api.Document.bgColor")}}
