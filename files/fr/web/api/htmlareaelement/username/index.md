---
title: "HTMLAreaElement : propriété username"
short-title: username
slug: Web/API/HTMLAreaElement/username
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`username`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères contenant la partie nom d'utilisateur du `href` de l'élément `<area>`. Si l'URL ne possède pas de nom d'utilisateur, cette propriété contient une chaîne vide, `""`.

Cette propriété peut être définie pour modifier le nom d'utilisateur de l'URL. Si l'URL ne possède pas de {{DOMxRef("HTMLAreaElement.host", "host")}} ou si son schéma est `file:`, alors la modification de cette propriété n'a aucun effet.

Le nom d'utilisateur est {{Glossary("Percent-encoding", "encodé en pourcentage")}} lors de l'écriture, mais n'est pas décodé lors de la lecture.

Voir {{DOMxRef("URL.username")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Obtenir le nom d'utilisateur depuis un lien `area`

```js
// Un élément <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.username; // retourne 'anonymous'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
