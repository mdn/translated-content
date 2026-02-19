---
title: "Response : méthode json()"
short-title: json()
slug: Web/API/Response/json
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`json()`** de l'interface {{DOMxRef("Response")}} lit un flux de {{DOMxRef("Response", "réponse", "", 1)}} jusqu'à son terme. Elle retourne une promesse qui est résolue avec le résultat de l'analyse du texte du corps en tant que {{JSxRef("JSON")}}.

Notez que, bien que la méthode s'appelle `json()`, le résultat n'est pas du JSON mais le résultat de l'analyse du JSON en entrée pour produire un objet JavaScript.

## Syntaxe

```js-nolint
json()
```

### Paramètres

Aucun.

### Valeur de retour

Une {{JSxRef("Promise")}} qui se résout en un objet JavaScript. Cet objet peut être tout ce qui peut être représenté par du JSON — un objet, un tableau, une chaîne de caractères, un nombre…

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : La requête a été [annulée](/fr/docs/Web/API/Fetch_API/Using_Fetch#annuler_une_requête).
- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la réponse est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur est survenue lors du décodage du contenu du corps (par exemple parce que l'en-tête HTTP {{HTTPHeader("Content-Encoding")}} est incorrect).
- {{JSxRef("SyntaxError")}}
  - : Le corps de la réponse ne peut pas être analysé comme JSON.

## Exemples

Dans notre [exemple fetch JSON <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json) (voir [l'exécution en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-json/)), nous créons une nouvelle requête avec le constructeur {{DOMxRef("Request.Request", "Request()")}}, puis l'utilisons pour récupérer un fichier `.json`.
Lorsque la récupération réussit, nous lisons et analysons les données avec `json()`, puis lisons les valeurs des objets résultants comme attendu et les insérons dans des éléments de liste pour afficher nos données produit.

```js
const maListe = document.querySelector("ul");
const maRequete = new Request("produits.json");

fetch(maRequete)
  .then((response) => response.json())
  .then((donnees) => {
    for (const produit of donnees.products) {
      const elementListe = document.createElement("li");
      elementListe.appendChild(document.createElement("strong")).textContent =
        produit.Name;
      elementListe.append(` se trouve dans ${produit.Location}. Coût : `);
      elementListe.appendChild(document.createElement("strong")).textContent =
        `${produit.Price} €`;
      maListe.appendChild(elementListe);
    }
  })
  .catch(console.error);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
