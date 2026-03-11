---
title: "Request : méthode json()"
short-title: json()
slug: Web/API/Request/json
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`json()`** de l'interface {{DOMxRef("Request")}}
lit le corps de la requête et le retourne sous forme d'une promesse qui produit le résultat de l'analyse du texte du corps comme {{JSxRef("JSON")}}.

Notez que, bien que la méthode soit nommée `json()`, le résultat n'est pas du JSON mais le résultat de la prise du JSON en entrée et de son analyse pour produire un objet JavaScript.

## Syntaxe

```js-nolint
json()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui produit un objet JavaScript. Cet objet peut être n'importe quoi qui peut être représenté par du JSON — un objet, un tableau, une chaîne de caractères, un nombre…

### Exceptions

- {{JSxRef("TypeError")}}
  - : Produite pour l'une des raisons suivantes&nbsp;:
    - Le corps de la requête est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, parce que l'en-tête {{HTTPHeader("Content-Encoding")}} est incorrect).
- {{JSxRef("SyntaxError")}}
  - : Le corps de la requête ne peut pas être analysé comme JSON.

## Exemples

```js
const obj = { hello: "bonjour" };

const requete = new Request("/monPointDeTerminaison", {
  method: "POST",
  body: JSON.stringify(obj),
});

requete.json().then((donnees) => {
  // faire quelque chose avec les données envoyées dans la requête
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Response.json()")}}
