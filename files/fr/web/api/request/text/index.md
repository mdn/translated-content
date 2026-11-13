---
title: "Request : méthode text()"
short-title: text()
slug: Web/API/Request/text
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`text()`** de l'interface {{DOMxRef("Request")}} lit le corps de la requête et le retourne sous la forme d'une promesse qui produit une chaîne de caractères ({{JSxRef("String")}}). La réponse est _toujours_ décodée en UTF-8.

## Syntaxe

```js-nolint
text()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse qui produit une chaîne de caractères ({{JSxRef("String")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la requête est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, parce que l'en-tête HTTP {{HTTPHeader("Content-Encoding")}} est incorrect).

## Exemples

```js
const texte = "Bonjour le monde";

const requete = new Request("/monPointDeTerminaison", {
  method: "POST",
  body: texte,
});

requete.text().then((texte) => {
  // faire quelque chose avec le texte envoyé dans la requête
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Response.text()")}}
