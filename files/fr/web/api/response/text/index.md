---
title: "Response : méthode text()"
short-title: text()
slug: Web/API/Response/text
l10n:
  sourceCommit: 2845a346b971d6d0415bf24e53084cd4d7aab1e0
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`text()`** de l'interface {{DOMxRef("Response")}} prend un flux de {{DOMxRef("Response", "réponse", "", 1)}} et le lit jusqu'à la fin.
Elle retourne une promesse qui se résout avec une chaîne de caractères ({{JSxRef("String")}}).
La réponse est _toujours_ décodée en UTF-8.

## Syntaxe

```js-nolint
text()
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse qui se résout avec une chaîne de caractères ({{JSxRef("String")}}).

### Exceptions

- `AbortError` {{DOMxRef("DOMException")}}
  - : La requête a été [annulée](/fr/docs/Web/API/Fetch_API/Using_Fetch#annuler_une_requête).
- {{JSxRef("TypeError")}}
  - : Levée pour l'une des raisons suivantes&nbsp;:
    - Le corps de la réponse est [perturbé ou verrouillé](/fr/docs/Web/API/Fetch_API/Using_Fetch#flux_verrouillés_et_perturbés).
    - Une erreur s'est produite lors du décodage du contenu du corps (par exemple, parce que l'en-tête HTTP {{HTTPHeader("Content-Encoding")}} est incorrect).

## Exemples

Dans notre [exemple fetch text <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-text) (voir [exécution en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/fetch/fetch-text/)), nous avons un élément HTML {{HTMLElement("article")}} et trois liens (stockés dans le tableau `myLinks`).
Tout d'abord, nous parcourons ces liens et donnons à chacun un gestionnaire d'évènement `onclick` afin que la fonction `getData()` soit exécutée — avec l'identifiant `data-page` du lien passé en argument — lorsqu'un des liens est cliqué.

Lorsque `getData()` est exécutée, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request","Request()")}}, puis l'utilisons pour récupérer un fichier `.txt` spécifique.
Lorsque la récupération réussit, nous lisons une chaîne de caractères à partir de la réponse avec `text()`, puis nous affectons la valeur à la propriété {{DOMxRef("HTMLElement.innerText","innerText")}} de l'élément HTML {{HTMLElement("article")}}.

```js
const monArticle = document.querySelector("article");
const mesLiens = document.querySelectorAll("ul a");

for (const lien of mesLiens) {
  lien.onclick = (e) => {
    e.preventDefault();
    const lienData = e.target.getAttribute("data-page");
    getData(lienData);
  };
}

function getData(pageId) {
  console.log(pageId);
  const maRequete = new Request(`${pageId}.txt`);
  fetch(maRequete)
    .then((reponse) => {
      if (!reponse.ok) {
        throw new Error(`Erreur HTTP, statut = ${reponse.status}`);
      }
      return reponse.text();
    })
    .then((texte) => {
      monArticle.innerText = texte;
    })
    .catch((erreur) => {
      monArticle.innerText = `Erreur : ${erreur.message}`;
    });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
