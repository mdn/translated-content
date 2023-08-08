---
title: "<frameset> : l'élément contenant des frames"
slug: Web/HTML/Element/frameset
---

{{HTMLSidebar}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la prendre en charge, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<frameset>`** est utilisé pour contenir les éléments [`<frame>`](/fr/docs/Web/HTML/Element/frame).

> **Note :** L'utilisation de cadres étant désormais déconseillée au profit de l'utilisation de [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), cet élément n'est généralement pas utilisé par les sites web modernes.

## Attributs

Comme tous les autres éléments HTML, cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `cols`
  - : Cet attribut définit le nombre et la taille des espaces horizontaux dans un `<frameset>`.
- `rows`
  - : Cet attribut définit le nombre et la taille des espaces verticaux dans un `<frameset>`.

## Exemple

```html
<frameset cols="50%,50%">
  <frame
    src="https://developer.mozilla.org/fr/docs/Web/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/fr/docs/Web/HTML/Element/frame" />
</frameset>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<frame>`](/fr/docs/Web/HTML/Element/frame)
- L'élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)
