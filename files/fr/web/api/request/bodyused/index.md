---
title: "Request : propriété bodyUsed"
short-title: bodyUsed
slug: Web/API/Request/bodyUsed
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`bodyUsed`** de l'interface {{DOMxRef("Request")}} est une valeur booléenne qui indique si le corps de la requête a déjà été lu.

## Valeur

Une valeur booléenne.

## Exemples

```js
const requete = new Request("/monPointDeTerminaison", {
  method: "POST",
  body: "Bonjour le monde",
});

requete.bodyUsed; // false

requete.text().then((corpsEnTexte) => {
  console.log(requete.bodyUsed); // true
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Request.body")}}
