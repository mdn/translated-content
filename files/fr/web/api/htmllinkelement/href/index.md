---
title: "HTMLLinkElement : propriété href"
short-title: href
slug: Web/API/HTMLLinkElement/href
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`href`** de l'interface {{domxref("HTMLLinkElement")}} contient une chaîne de caractères correspondant à l'URL associée au lien.

Elle reflète l'attribut `href` de l'élément HTML {{HTMLElement("link")}}. Si l'élément ne possède pas d'attribut `href`, la valeur de cette propriété est la chaîne de caractères vide (`""`).

> [!NOTE]
> Chaque élément `<link>` doit contenir soit l'attribut `href`, soit [`imagesrcset`](/fr/docs/Web/HTML/Reference/Elements/link#imagesrcset), ou les deux. Cela signifie que, pour chaque `<link>` valide, soit cette propriété, soit {{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}} ne sera pas vide.

## Valeur

Une chaîne de caractères contenant une URL, ou la chaîne de caractères vide (`""`) s'il n'y a pas d'attribut `href`.

## Exemples

```html
<link rel="stylesheet" href="exemple.css" />
```

```js
const link = document.getElementsByTag("link")[0];
console.log(link.href); // 'exemple.css'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLLinkElement.imageSrcset")}}
- La propriété {{domxref("HTMLAnchorElement.href")}}
