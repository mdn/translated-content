---
title: "HTMLIFrameElement : propriété privateToken"
short-title: privateToken
slug: Web/API/HTMLIFrameElement/privateToken
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La propriété **`privateToken`** de l'interface {{DOMxRef("HTMLIFrameElement")}} retourne une représentation sous forme de chaîne de caractères d'un objet d'options représentant une opération de [jeton d'état privé](/fr/docs/Web/API/Private_State_Token_API/Using)&nbsp;; cet objet a la même structure que la propriété [`privateToken`](/fr/docs/Web/API/RequestInit#privatetoken) du dictionnaire `RequestInit`.

Cet attribut reflète le contenu de l'attribut [`privateToken`](/fr/docs/Web/HTML/Reference/Elements/iframe#privatetoken) de l'élément HTML `<iframe>` associé.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<iframe id="el" privateToken="{version: 1,operation: 'token-request'}">
</iframe>
```

```js
const el = document.getElementById("el");
console.log(el.privateToken);
// Affiche "{version: 1,operation: 'token-request'}"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
