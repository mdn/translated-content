---
title: "HTMLAnchorElement : propriété port"
short-title: port
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

La propriété **`port`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères contenant le numéro de port du `href` de l'élément HTML `<a>`. Si le port est celui par défaut pour le protocole (`80` pour `ws:` et `http:`&nbsp;; `443` pour `wss:` et `https:`&nbsp;; `21` pour `ftp:`), cette propriété contient une chaîne de caractères vide (`""`).

Cette propriété peut être modifiée pour changer le port de l'URL. Si l'URL ne possède pas de {{domxref("HTMLAnchorElement.host", "host")}} ou si son schéma est `file:`, la modification n'a aucun effet. Les numéros de port invalides sont ignorés sans message d'erreur.

Voir {{domxref("URL.port")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Obtenir le port à partir d'un lien d'ancre

```js
// Un élément <a id="myAnchor" href="https://developer.mozilla.org:443/fr/docs/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.port; // retourne ''
```

```js
// Un autre élément <a id="myAnchor" href="https://developer.mozilla.org:8888/fr/docs/HTMLAnchorElement"> est dans le document
const anchor = document.getElementById("myAnchor");
anchor.port; // retourne '8888'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
