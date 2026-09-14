---
title: "HTMLAnchorElement : propriété username"
short-title: username
slug: Web/API/HTMLAnchorElement/username
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

La propriété **`username`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères contenant la partie «&nbsp;nom d'utilisateur&nbsp;» de l'attribut `href` de l'élément HTML `<a>`. Si l'URL ne contient pas de nom d'utilisateur, cette propriété contient une chaîne vide (`""`).

Cette propriété peut être définie pour modifier le nom d'utilisateur de l'URL. Si l'URL ne possède pas de {{domxref("HTMLAnchorElement.host", "host")}} ou si son schéma est `file:`, alors la modification de cette propriété n'a aucun effet.

Le nom d'utilisateur est {{Glossary("Percent-encoding", "encodé en pourcentage")}} lors de l'écriture, mais n'est pas décodé lors de la lecture.

Voir {{domxref("URL.username")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Récupérer le nom d'utilisateur depuis un lien d'ancre

```js
// Un élément <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/fr/docs/HTMLAnchorElement"> est présent dans le document
const anchor = document.getElementById("myAnchor");
anchor.username; // retourne 'anonymous'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle cette propriété appartient.
