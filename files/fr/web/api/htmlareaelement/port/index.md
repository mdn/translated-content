---
title: "HTMLAreaElement : propriété port"
short-title: port
slug: Web/API/HTMLAreaElement/port
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`port`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères contenant le numéro de port du `href` de l'élément `<area>`. Si le port est celui par défaut pour le protocole (`80` pour `ws:` et `http:`, `443` pour `wss:` et `https:`, et `21` pour `ftp:`), cette propriété contient une chaîne vide, `""`.

Cette propriété peut être définie pour modifier le port de l'URL. Si l'URL ne possède pas de {{DOMxRef("HTMLAnchorElement.host", "host")}} ou si son schéma est `file:`, alors la modification de cette propriété n'a aucun effet. Les numéros de port invalides sont également ignorés sans message d'erreur.

Voir {{DOMxRef("URL.port")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Obtenir le port depuis un lien `area`

```js
// Un élément <area id="myArea" href="https://developer.mozilla.org:443/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.port; // Retourne ''
```

```js
// Un autre élément <area id="myArea" href="https://developer.mozilla.org:8888/fr/docs/Web/API/HTMLAreaElement"> est dans le document
const area = document.getElementById("myArea");
area.port; // Retourne '8888'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
