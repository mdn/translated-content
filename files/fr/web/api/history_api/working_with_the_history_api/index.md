---
title: Utiliser l'API History
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{DefaultAPISidebar("History API")}}

L'API <i lang="en">History</i> permet à un site web d'interagir avec l'historique de la session du navigateur, c'est-à-dire la liste des pages que la personne a visitées sur une période donnée. Lorsqu'une personne visite de nouvelles pages, par exemple en cliquant sur des liens, ces nouvelles pages sont ajoutées à l'historique de la session. La personne peut alors se déplacer dans cet historique en utilisant les boutons «&nbsp;Précédent&nbsp;» et «&nbsp;Suivant&nbsp;» du navigateur.

L'interface principale de cette API est l'interface [`History`](/fr/docs/Web/API/History) qui définit deux ensembles de méthodes&nbsp;:

- Les méthodes pour naviguer vers une page de l'historique&nbsp;:

  - [`History.back()`](/fr/docs/Web/API/History/back)
  - [`History.forward()`](/fr/docs/Web/API/History/forward)
  - [`History.go()`](/fr/docs/Web/API/History/go)

- Les méthodes pour modifier l'historique de la session&nbsp;:

  - [`History.pushState()`](/fr/docs/Web/API/History/pushState)
  - [`History.replaceState()`](/fr/docs/Web/API/History/replaceState)

Dans ce guide, nous nous intéresserons surtout au deuxième groupe, dont le comportement peut être plus complexe.

La méthode `pushState()` permet d'ajouter une nouvelle entrée dans l'historique. La méthode `replaceState()` met à jour l'historique de la session pour la page courante. Ces deux méthodes prennent un paramètre `state` qui peut contenir n'importe quel [objet sérialisable](/fr/docs/Glossary/Serializable_object). Lorsqu'on utilise le navigateur pour accéder à cette entrée d'historique, il déclenchera un évènement [`popstate`](/fr/docs/Web/API/Window/popstate_event) qui contient l'objet d'état associé à cette entrée.

L'objectif principal de cette API est d'assister les [SPA (<i lang="en">single-page applications</i>)](/fr/docs/Glossary/SPA) qui utilisent les API comme [`fetch()`](/fr/docs/Web/API/Window/fetch) pour mettre à jour la page avec du nouveau contenu plutôt que de charger une nouvelle page complète.

## SPA et historique de session

Historiquement, les sites web étaient implémentés comme des ensembles de pages. Lorsqu'une personne naviguait vers un autre endroit d'un site en cliquant sur un lien, le navigateur chargeait une nouvelle page à chaque fois.

Si cette approche peut très bien convenir pour de nombreux sites, elle possède quelques inconvénients&nbsp;:

- Il peut être inefficace de charger toute une page à chaque fois, alors que seule une partie de la page doit être mise à jour.
- Il est difficile de maintenir l'état de l'application lorsqu'on navigue entre différentes pages.

C'est pour ces raisons que certains sites sont désormais implémentés sous la forme de [SPA (<i lang="en">single-page applications</i>)](/fr/docs/Glossary/SPA), où le site est en réalité une seule page, et où lorsqu'une personne clique sur un lien, la page&nbsp;:

1. Empêche l'action par défaut du navigateur consistant à charger une nouvelle page
2. Récupère avec [`fetch()`](/fr/docs/Web/API/Window/fetch) le nouveau contenu à afficher
3. Met à jour la page avec le nouveau contenu

Par exemple&nbsp;:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    // Empêche le chargement d'une nouvelle page
    event.preventDefault();
    try {
      // Récupère le nouveau contenu
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      // Met à jour la page avec le nouveau contenu
      displayContent(json);
    } catch (err) {
      console.error(err);
    }
  }
});
```

Dans le gestionnaire d'évènement pour le clic, si le lien contient un attribut de données `"data-creature"`, on utilise la valeur de cet attribut pour récupérer un fichier JSON qui contient les nouvelles informations à afficher sur la page.

Le fichier JSON en question pourra ressembler à&nbsp;:

```json
{
  "description": "Bald eagles are not actually bald.",
  "image": {
    "src": "images/eagle.jpg",
    "alt": "A bald eagle"
  },
  "name": "Eagle"
}
```

Notre fonction `displayContent()` met à jour la page avec le contenu du fichier JSON&nbsp;:

```js
// Mettre à jour la page avec le nouveau contenu
function displayContent(content) {
  document.title = `Creatures: ${content.name}`;

  const description = document.querySelector("#description");
  description.textContent = content.description;

  const photo = document.querySelector("#photo");
  photo.setAttribute("src", content.image.src);
  photo.setAttribute("alt", content.image.alt);
}
```

Le problème est que cela interfère avec le comportement normal du navigateur pour les boutons «&nbsp;Précédent&nbsp;» et «&nbsp;Suivant&nbsp;».

Du point de vue de la personne, elle a cliqué et la page a été mise à jour et cela ressemble donc à une nouvelle page. Si la personne clique sur le bouton «&nbsp;Précédent&nbsp;», elle s'attend à revenir à l'état tel qu'il était avant de cliquer sur le lien.

Mais pour le navigateur, le dernier lien n'a pas chargé de nouvelle page (et donc créé de nouvelle entrée dans l'historique), et le bouton «&nbsp;Précédent&nbsp;» ramènera la personne sur la page qui était chargée avant l'ouverture de la SPA.

C'est pour résoudre ce problème que nous avons les méthodes `pushState()`, `replaceState()`, et l'évènement `popstate`. Ils nous permettent de synchroniser les éléments d'historique et d'être notifié·e quand l'entrée courante de l'historique arrive sur une telle page (par exemple, parce que la personne a utilisé les boutons «&nbsp;Précédent&nbsp;» ou «&nbsp;Suivant&nbsp;»).

## Utiliser `pushState()`

On peut ajouter une entrée dans l'historique grâce à notre gestionnaire d'évènement pour le clic&nbsp;:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      displayContent(json);
      // On ajoute une nouvelle entrée à l'historique.
      // Cela simule le chargement d'une nouvelle page.
      history.pushState(json, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

Dans cet exemple, nous appelons `pushState()` avec trois arguments&nbsp;:

- `json`
  - : Il s'agit du contenu qui vient d'être récupéré. Il sera stocké avec l'entrée de l'historique et inclus plus tard dans la propriété [`state`](/fr/docs/Web/API/PopStateEvent/state) de l'argument passé au gestionnaire d'évènements `popstate`.
- `""`
  - : Cet argument est nécessaire pour la rétrocompatibilité avec les anciens sites et devrait toujours être une chaîne de caractères vide.
- `creature`
  - : Cette valeur sera utilisée comme URL pour l'entrée d'historique. Elle sera affichée dans la barre d'URL du navigateur et utilisée comme valeur pour l'en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) des requêtes HTTP effectuées par la page. Cette valeur doit avoir la [même origine](/fr/docs/Glossary/Same-origin_policy) que la page.

## Utiliser l'évènement `popstate`

Prenons le scénario suivant&nbsp;:

1. La personne clique sur un lien dans notre SPA, et nous mettons à jour la page en ajoutant une entrée d'historique A grâce à `pushState()`
2. Elle clique ensuite sur un autre lien, et nous mettons à jour la page en ajoutant une entrée d'historique B avec `pushState()`
3. Elle clique sur le bouton «&nbsp;Précédent&nbsp;»

L'entrée actuelle est A, et le navigateur déclenche l'évènement `popstate`. L'argument passé au gestionnaire d'évènement contient le JSON passé `pushState()` lors de la navigation vers A. Cela signifie que nous pouvons restaurer le contenu correct avec un gestionnaire d'évènement comme celui-ci&nbsp;:

```js
// Gestion des boutons précédent/suivant
window.addEventListener("popstate", (event) => {
  // Si un état a été fourni, nous avons une page "simulée"
  // et nous mettons à jour la page courante.
  if (event.state) {
    // On simule le chargement de la page précédente
    displayContent(event.state);
  }
});
```

## Utiliser `replaceState()`

Il nous reste une brique à ajouter. Lorsqu'on charge la SPA, le navigateur ajoute une entrée d'historique. Comme il s'agit d'un chargement de page classique, l'entrée dans l'historique ne possède pas d'état associé. Prenons maintenant le scénario suivant&nbsp;:

1. On charge la SPA&nbsp;: le navigateur ajoute une entrée d'historique
2. On clique sur un lien dans la SPA&nbsp;: le gestionnaire de clic met à jour la page et rajoute une entrée dans l'historique à l'aide de la méthode `pushState()`
3. On clique sur le bouton «&nbsp;Précédent&nbsp;»

Nous voudrions que cela restaure l'état initial de la SPA. Mais comme il s'agit d'une navigation vers le même document, la page n'est pas rechargée, et comme l'entrée d'historique ne possède pas d'état pour la page initiale, nous ne pouvons pas utiliser `popstate` pour le restaurer.

La solution consiste à utiliser `replaceState()` pour définir l'objet d'état pour la page initiale. Par exemple&nbsp;:

```js
// On crée l'état au chargement de la page et on remplace l'entrée courante
// de l'historique avec cet état
const image = document.querySelector("#photo");
const initialState = {
  description: document.querySelector("#description").textContent,
  image: {
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt"),
  },
  name: "Home",
};
history.replaceState(initialState, "", document.location.href);
```

Au chargement de la page, on collecte tous les endroits de la page qui doivent être restaurés quand on reviendra à l'emplacement initial de la SPA. On utilise ici la même structure que le JSON qui est récupéré lors des autres navigations. Les données sont assemblées dans un objet `initialState` qui est passé à `replaceState()`, ce qui permet d'associer ces données à l'entrée courante de l'historique.

Désormais, lorsqu'on reviendra au point de départ, l'évènement `popstate` contiendra les informations de l'état initial et on pourra utiliser la fonction `displayContent()` afin de mettre à jour la page.

## Un exemple complet

Vous pouvez trouver cet exemple dans son intégralité à l'URL <https://github.com/mdn/dom-examples/tree/main/history-api>, et voir la démo correspondante à l'adresse <https://mdn.github.io/dom-examples/history-api/>.

## Voir aussi

- [L'API <i lang="en">History</i>](/fr/docs/Web/API/History_API)
- L'objet global [`history`](/fr/docs/Web/API/Window/history)
