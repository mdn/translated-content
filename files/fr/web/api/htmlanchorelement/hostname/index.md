---
title: "HTMLAnchorElement : propriété hostname"
short-title: hostname
slug: Web/API/HTMLAnchorElement/hostname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

La propriété **`hostname`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères contenant soit le {{Glossary("domain name", "nom de domaine")}}, soit l'{{Glossary("IP address", "adresse IP")}} de l'attribut `href` de l'élément `<a>`. Si l'URL ne possède pas de nom d'hôte, cette propriété contient une chaîne vide (`""`). Les adresses IPv4 et IPv6 sont normalisées (zéros initiaux supprimés) et les noms de domaine sont convertis en [IDN](https://fr.wikipedia.org/wiki/Nom_de_domaine_internationalis%C3%A9).

Voir {{domxref("URL.hostname")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Un élément <a id="myAnchor" href="/fr/docs/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.hostname; // retourne 'developer.mozilla.org'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
