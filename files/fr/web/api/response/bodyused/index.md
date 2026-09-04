---
title: "Response : propriété bodyUsed"
short-title: bodyUsed
slug: Web/API/Response/bodyUsed
l10n:
  sourceCommit: 77fd649b791632aec695c5c4c7ca5bc726f4d1e9
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`bodyUsed`** de l'interface {{DOMxRef("Response")}} est un booléen qui indique si le corps a déjà été lu.

## Valeur

Une valeur booléenne.

## Exemples

### Vérifier `bodyUsed`

Cet exemple illustre que la lecture du corps d'une réponse fait passer la valeur de `bodyUsed` de `false` à `true`.

L'exemple contient une image vide.

Lorsque le JavaScript de l'exemple s'exécute, nous récupérons une image et assignons la promesse retournée à une variable `promesseReponse`.

Quand l'utilisateur·ice clique sur «&nbsp;Utiliser la réponse&nbsp;», nous vérifions si la réponse a déjà été utilisée. Si c'est le cas, nous affichons un message. Sinon, nous lisons le corps de la réponse et l'utilisons pour fournir une valeur à l'attribut `src` de l'image.

#### HTML

```html
<p>
  <button id="utiliser">Utiliser la réponse</button>
  <button id="reinitialiser">Réinitialiser</button>
</p>
<p><img id="mon-image" src="" width="150" /></p>
<pre id="journal"></pre>
```

#### JavaScript

```js
const utiliserReponse = document.querySelector("#utiliser");
const reinitialiser = document.querySelector("#reinitialiser");
const monImage = document.querySelector("#mon-image");
const journal = document.querySelector("#journal");

const promesseReponse = fetch(
  "/shared-assets/images/examples/firefox-logo.svg",
);

utiliserReponse.addEventListener("click", async () => {
  const reponse = await promesseReponse;
  if (reponse.bodyUsed) {
    journal.textContent = "Le corps a déjà été utilisé !";
  } else {
    const resultat = await reponse.blob();
    const urlObjet = URL.createObjectURL(resultat);
    monImage.src = urlObjet;
  }
});

reinitialiser.addEventListener("click", () => {
  document.location.reload();
});
```

#### Résultat

Au départ, il n'y a pas de valeur pour l'image. Si vous cliquez une fois sur «&nbsp;Utiliser la réponse&nbsp;», alors `bodyUsed` vaut `false`, donc nous lisons la réponse et définissons l'image. Si vous cliquez à nouveau sur «&nbsp;Utiliser la réponse&nbsp;», alors `bodyUsed` vaut `true` et nous affichons le message.

Cliquez sur «&nbsp;Réinitialiser&nbsp;» pour recharger l'exemple et pouvoir réessayer.

{{ EmbedLiveSample("Exemples", "100%", 300) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
