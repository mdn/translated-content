---
title: "HTMLAnchorElement : propriété password"
short-title: password
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

La propriété **`password`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères contenant la partie mot de passe du `href` de l'élément HTML `<a>`. Si l'URL ne contient pas de mot de passe, cette propriété contient une chaîne vide (`""`).

Cette propriété peut être modifiée pour changer le mot de passe de l'URL. Si l'URL ne possède pas de {{domxref("HTMLAnchorElement.host", "host")}} ou si son schéma est `file:`, la modification n'a aucun effet.

Le mot de passe est {{Glossary("Percent-encoding", "encodé en pourcentage")}} lors de l'écriture, mais n'est pas décodé lors de la lecture.

Voir {{domxref("URL.password")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/de/docs/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.password; // retourne 'flabada'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
