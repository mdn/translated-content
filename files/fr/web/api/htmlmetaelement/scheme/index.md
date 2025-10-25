---
title: "HTMLMetaElement : propriété scheme"
short-title: scheme
slug: Web/API/HTMLMetaElement/scheme
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`scheme`** de l'interface {{DOMxRef("HTMLMetaElement")}} définit le schéma de la valeur dans l'attribut {{DOMxRef("HTMLMetaElement.content")}}.
La propriété `scheme` a été créée pour permettre de fournir des informations supplémentaires afin d'interpréter la valeur de la propriété `content`. La propriété `scheme` prend comme valeur un format de schéma (par exemple, `YYYY-MM-DD`) ou un nom de format de schéma (par exemple, `ISBN`), ou un URI fournissant plus d'informations sur le format du schéma. Le schéma définit le format de la valeur de l'attribut `content`.
Le contenu de `scheme` est interprété comme une extension de {{DOMxRef("HTMLMetaElement.name")}} si un navigateur ou un agent utilisateur reconnaît le schéma.

Cette propriété est obsolète et ne doit pas être utilisée sur de nouvelles pages web.

## Valeur

Une chaîne de caractères.

## Exemples

L'exemple suivant interroge un élément `<meta>` qui contient un attribut `name` avec la valeur `identifier`.
La valeur de `scheme` est affichée dans la console pour présenter le schéma du contenu de la métadonnée&nbsp;:

```js
// avec <meta name="identifier" content="1580081754" scheme="ISBN">
const meta = document.querySelector("meta[name='identifier']");
console.log(meta.scheme);
// "ISBN"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meta")}}
