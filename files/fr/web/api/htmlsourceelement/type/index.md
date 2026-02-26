---
title: "HTMLSourceElement : propriété type"
short-title: type
slug: Web/API/HTMLSourceElement/type
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La propriété **`type`** de l'interface {{DOMxRef("HTMLSourceElement")}} est une chaîne de caractères représentant le {{Glossary("MIME type", "type MIME")}} de la ressource média.

Elle reflète l'attribut `type` de l'élément HTML {{HTMLElement("source")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<video>
  <source
    id="el"
    src="large.webp"
    type="video/webp"
    media="screen and (width >= 600px)" />
</video>
```

```js
const el = document.getElementById("el");
console.log(el.type); // Affiche : "video/webp"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La prorpiété {{DOMxRef("HTMLSourceElement.src")}}
- La prorpiété {{DOMxRef("HTMLSourceElement.srcset")}}
- La prorpiété {{DOMxRef("HTMLSourceElement.media")}}
- La prorpiété {{DOMxRef("HTMLSourceElement.sizes")}}
- L'élément HTML {{HTMLElement("source")}}
- L'élément HTML {{HTMLElement("picture")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
- [Types de média trouvés sur le web](/fr/docs/Web/Media/Guides/Formats)
- [Types MIME importants pour les développeur·euse·s web](/fr/docs/Web/HTTP/Guides/MIME_types#important_mime_types_for_web_developers)
- [L'API Media Capabilities](/fr/docs/Web/API/Media_Capabilities_API)
