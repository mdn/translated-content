---
title: Document.alinkColor
slug: Web/API/Document/alinkColor
tags:
  - API
  - HTML DOM
  - Obsolete
  - Propriété
  - Reference
translation_of: Web/API/Document/alinkColor
---
{{APIRef("DOM")}}{{Deprecated_header}}

Retourne ou définit la couleur d'un lien actif dans le corps du document. Un lien hypertexte est actif durant le temps entre les événements `mousedown` et `mouseup`.

## Syntaxe

    var color = document.alinkColor;
    document.alinkColor = color;

*color* est un echaîne de caractère contenant le nom de la couleur en anglais(exemple., `blue` pour bleu, `darkblue` pour bleu foncé, etc.) ou la valeur hexadécimal de la couleur (exemple, `#0000FF`)

## Notes

La valeur par défaut pour cette propriété est rouge (`#ee000` en hexadécimal) sur Mozilla Firefox.

`document.alinkColor` est obsolète dans [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) (lien en anglais). Une alternative est le sélecteur CSS {{Cssxref(":active")}}.

Une autre alternative est `document.body.aLink`, même si elle est [obsolète dans HTML 4.01](http://www.w3.org/TR/html401/struct/global.html#adef-alink) (lien en anglais) en faveur de l'alternative CSS ci-dessus.

[Gecko](/fr/docs/Glossary/Gecko) supporte `alinkColor`/`:active` et [`:focus`](/fr/docs/Web/CSS/:focus). Internet Explorer 6 et 7 supportent `alinkColor`/`:active` seulement pour la [balise HTML des liens (`<a>`)](/fr/docs/Web/HTML/Element/a) et le comportement est le même que `:focus` sur Gecko. Il n'y a pas de support pour `:focus` dans IE.

## Compatibilité des navigateurs

{{Compat("api.Document.alinkColor")}}
