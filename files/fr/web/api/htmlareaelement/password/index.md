---
title: "HTMLAreaElement : propriété password"
short-title: password
slug: Web/API/HTMLAreaElement/password
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`password`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères contenant la partie mot de passe du `href` de l'élément `<area>`. Si l'URL ne contient pas de mot de passe, cette propriété contient une chaîne vide, `""`.

Cette propriété peut être définie pour modifier le mot de passe de l'URL. Si l'URL ne possède pas de {{DOMxRef("HTMLAreaElement.host", "host")}} ou si son schéma est `file:`, alors la modification de cette propriété n'a aucun effet.

Le mot de passe est {{Glossary("Percent-encoding", "encodé en pourcentage")}} lors de l'écriture, mais n'est pas décodé lors de la lecture.

Voir {{DOMxRef("URL.password")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.password; // retourne 'flabada'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
