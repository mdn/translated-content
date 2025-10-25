---
title: "HTMLMetaElement : propriété httpEquiv"
short-title: httpEquiv
slug: Web/API/HTMLMetaElement/httpEquiv
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{APIRef("HTML DOM")}}

La propriété **`httpEquiv`** de l'interface {{DOMxRef("HTMLMetaElement")}} permet d'obtenir ou de définir la directive pragma ou le nom d'un en-tête de réponse HTTP pour l'attribut {{DOMxRef("HTMLMetaElement.content")}}.
Pour plus de détails sur les valeurs possibles, voir l'attribut [http-equiv](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Valeur

Une chaîne de caractères.

## Exemples

### Lecture de la valeur `http-equiv` d'un élément meta

L'exemple suivant interroge un élément `<meta>` avec un attribut `http-equiv`.
L'attribut `http-equiv` est affiché dans la console, montrant une [directive pragma](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv) `refresh` qui indique au navigateur d'actualiser la page après un nombre de secondes défini par l'attribut `content`&nbsp;:

```js
// avec <meta http-equiv="refresh" content="10" />
const meta = document.querySelector("meta[http-equiv]");
console.log(meta.httpEquiv);
// refresh
console.log(meta.content);
// 10
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meta")}}
