---
title: "HTMLEmbedElement : propriété type"
short-title: type
slug: Web/API/HTMLEmbedElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`type`** de l'interface {{DOMxRef("HTMLEmbedElement")}} retourne une chaîne de caractères qui reflète l'attribut `type` de l'élément HTML {{HTMLElement("embed")}}, indiquant le {{Glossary("MIME type", "type MIME")}} de la ressource. Elle reflète l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/embed#type) de l'élément {{HTMLElement("embed")}}.

## Valeur

Une chaîne de caractères&nbsp;: le type MIME de la ressource.

## Exemples

```js
const el = document.getElementById("el");
console.log(el.type); // Sortie : "video/webp"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLObjectElement.type")}}
- La propriété {{DOMxRef("HTMLSourceElement.type")}}
- [Types MIME trouvés sur le web](/fr/docs/Web/Media/Guides/Formats)
- [Types MIME importants pour les développeur·euse·s web](/fr/docs/Web/HTTP/Guides/MIME_types#types_mime_importants_pour_les_développeur·euse·s_web)
