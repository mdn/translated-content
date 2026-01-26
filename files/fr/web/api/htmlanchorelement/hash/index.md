---
title: "HTMLAnchorElement : propriété hash"
short-title: hash
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`hash`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères contenant un `"#"` suivi de l'identifiant de fragment de l'attribut `href` de l'élément `<a>`. Si l'URL ne possède pas d'identifiant de fragment, cette propriété contient une chaîne vide (`""`).

Voir {{domxref("URL.hash")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Récupérer le hash d'un lien d'ancre

Avec ce HTML&nbsp;:

```html
<a id="myAnchor" href="/fr/docs/Web/API/HTMLAnchorElement/hash#exemples">
  Exemples
</a>
```

Vous pouvez obtenir le hash de l'ancre ainsi&nbsp;:

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // '#exemples'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
