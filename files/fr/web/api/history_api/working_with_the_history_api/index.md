---
title: Travailler avec l'API History
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: d8ecbd3de36a098b1f83f935e581993e9600a916
---

{{DefaultAPISidebar("History API")}}

L'API History permet à un site web d'interagir avec l'historique de session du navigateur&nbsp;: il s'agit de la liste des pages que l'utilisateur·ice a consultées dans une fenêtre donnée. Lorsque l'utilisateur·ice consulte de nouvelles pages, par exemple en cliquant sur des liens, ces nouvelles pages sont ajoutées à l'historique de session. L'utilisateur·ice peut également parcourir l'historique dans les deux sens à l'aide des boutons «&nbsp;Précédent&nbsp;» et «&nbsp;Suivant&nbsp;» du navigateur.

L'interface principale définie dans l'API History est l'interface {{DOMxRef("History")}}, qui définit deux ensembles de méthodes bien distincts&nbsp;:

1. Les méthodes pour naviguer vers une page de l'historique de session&nbsp;:
   - {{DOMxRef("History.back()")}}
   - {{DOMxRef("History.forward()")}}
   - {{DOMxRef("History.go()")}}

2. Les méthodes pour modifier l'historique de session&nbsp;:
   - {{DOMxRef("History.pushState()")}}
   - {{DOMxRef("History.replaceState()")}}

Ce guide couvre uniquement le second ensemble de méthodes.

La méthode `pushState()` ajoute une nouvelle entrée à l'historique de session, tandis que la méthode `replaceState()` met à jour l'entrée de l'historique de session correspondant à la page actuelle. Ces deux méthodes prennent un paramètre `state` qui peut contenir n'importe quel {{Glossary("Serializable_object", "objet qui peut être sérialisé")}}. Lorsque le navigateur navigue vers cette entrée de l'historique, il déclenche un évènement {{DOMxRef("Window.popstate_event", "popstate")}} qui contient l'objet d'état associé à cette entrée.

L'objectif principal de ces API est de prendre en charge les sites web tels que {{Glossary("SPA", "les applications à page unique")}}, qui utilisent des API JavaScript comme {{DOMxRef("Window/fetch", "fetch()")}} pour mettre à jour la page avec un nouveau contenu au lieu de charger une nouvelle page entière.

## Applications à page unique et historique de session

De manière traditionnelle, les sites web sont implémentés sous la forme d'un ensemble de pages. Lorsque les utilisateur·ice·s naviguent vers différentes parties du site en cliquant sur des liens, le navigateur charge une nouvelle page entière à chaque fois.

Cette approche convient à de nombreux sites, mais elle présente quelques inconvénients&nbsp;:

- Le chargement d'une page entière à chaque fois peut être inefficace lorsque seule une partie de la page doit être mise à jour.
- Il est difficile de conserver l'état de l'application lors d'une navigation entre les pages.

Pour ces raisons, un modèle courant pour les applications web est {{Glossary("SPA", "une application à page unique")}} (SPA). Lorsqu'un utilisateur·ice clique sur un lien, l'application à page unique effectue les étapes suivantes&nbsp;:

1. Empêche le comportement par défaut qui consiste à charger une nouvelle page.
2. {{DOMxRef("Window/fetch", "Récupère", "", "nocode")}} un nouveau contenu à afficher.
3. Met à jour la page avec le nouveau contenu.

Par exemple&nbsp;:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    // Empêche le chargement d'une nouvelle page
    event.preventDefault();
    try {
      // Récupère le nouveau contenu
      const reponse = await fetch(`creatures/${creature}.json`);
      const resultat = await reponse.json();
      // Met à jour la page avec le nouveau contenu
      afficherContenu(resultat);
    } catch (erreur) {
      console.error(erreur);
    }
  }
});
```

Dans ce gestionnaire de clic, si le lien contient un attribut de données `"data-creature"`, nous utilisons la valeur de cet attribut pour récupérer un fichier JSON contenant le nouveau contenu de la page.

Le fichier JSON peut se présenter comme ceci&nbsp;:

```json
{
  "description": "Les pygargues à tête blanche ne sont pas réellement chauves.",
  "image": {
    "source": "images/eagle.jpg",
    "texteAlternatif": "Un pygargue à tête blanche"
  },
  "nom": "Pygargue"
}
```

Notre fonction `afficherContenu()` met à jour la page avec le fichier JSON&nbsp;:

```js
// Mettre à jour la page avec le nouveau contenu
function afficherContenu(contenu) {
  document.title = `Créatures : ${contenu.nom}`;

  const description = document.querySelector("#description");
  description.textContent = contenu.description;

  const photo = document.querySelector("#photo");
  photo.setAttribute("src", contenu.image.source);
  photo.setAttribute("alt", contenu.image.texteAlternatif);
}
```

Le problème est que cela rompt le comportement attendu des boutons «&nbsp;Précédent&nbsp;» et «&nbsp;Suivant&nbsp;» du navigateur.

Du point de vue de l'utilisateur·ice, un clic sur un lien met à jour la page, si bien qu'elle ressemble à une nouvelle page. Si l'utilisateur·ice appuie ensuite sur le bouton «&nbsp;Précédent&nbsp;» du navigateur, il s'attend à revenir à l'état précédant le clic sur le lien.

Mais pour le navigateur, le dernier lien n'a pas chargé de nouvelle page, si bien que le bouton «&nbsp;Précédent&nbsp;» ramène le navigateur à la page chargée avant l'ouverture de l'application à page unique.

C'est essentiellement le problème que résolvent `pushState()`, `replaceState()` et l'évènement `popstate`. Ils permettent de synthétiser des entrées d'historique et d'être averti·e lorsque l'entrée actuelle de l'historique de session devient l'une de ces entrées, par exemple parce que l'utilisateur·ice a appuyé sur les boutons «&nbsp;Précédent&nbsp;» ou «&nbsp;Suivant&nbsp;».

## Utiliser `pushState()`

Nous pouvons ajouter une entrée d'historique au gestionnaire de clic ci-dessus comme suit&nbsp;:

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const reponse = await fetch(`creatures/${creature}.json`);
      const resultat = await reponse.json();
      afficherContenu(resultat);
      // Ajoute une nouvelle entrée à l'historique.
      // Simule le chargement d'une nouvelle page.
      history.pushState(resultat, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

Ici, nous appelons `pushState()` avec trois arguments&nbsp;:

- `resultat`&nbsp;: Il s'agit du contenu que nous venons de récupérer. Il est stocké avec l'entrée de l'historique, puis inclus en tant que propriété {{DOMxRef("PopStateEvent.state", "état")}} de l'argument transmis au gestionnaire d'évènement `popstate`.
- `""`&nbsp;: Cette valeur est nécessaire pour assurer la rétrocompatibilité avec les sites existants et doit toujours être une valeur vide.
- `creature`&nbsp;: Cette valeur est utilisée comme URL de l'entrée. Elle apparaît dans la barre d'adresse du navigateur et sert de valeur à l'en-tête {{HTTPHeader("Referer")}} dans toutes les requêtes HTTP effectuées par la page. Notez qu'elle doit être de {{Glossary("Same-origin policy", "même origine")}} que la page.

## Utiliser l'évènement `popstate`

Supposons que l'utilisateur·ice effectue les étapes suivantes&nbsp;:

1. Clique sur un lien de notre application à page unique, si bien que nous mettons à jour la page et ajoutons l'entrée d'historique A avec `pushState()`.
2. Clique sur un autre lien de notre application à page unique, si bien que nous mettons à jour la page et ajoutons l'entrée d'historique B avec `pushState()`.
3. Appuie sur le bouton «&nbsp;Précédent&nbsp;».

La nouvelle entrée actuelle de l'historique est alors A, si bien que le navigateur déclenche l'évènement `popstate`, dont l'argument du gestionnaire contient le fichier JSON que nous avons transmis à `pushState()` lors de la navigation vers A. Nous pouvons donc restaurer le contenu correct avec un gestionnaire d'évènement comme celui-ci&nbsp;:

```js
// Gère les boutons « Précédent » et « Suivant »
window.addEventListener("popstate", (event) => {
  // Si un état a été fourni, nous avons une page « simulée »
  // et nous mettons à jour la page actuelle.
  if (event.state) {
    // Simuler le chargement de la page précédente
    afficherContenu(event.state);
  }
});
```

## Utiliser `replaceState()`

Il reste un élément à ajouter. Lorsque l'utilisateur·ice charge l'application à page unique, le navigateur ajoute une entrée d'historique. Comme il s'agit d'un chargement réel de page, aucune donnée d'état n'est associée à l'entrée. Supposons donc que l'utilisateur·ice effectue les étapes suivantes&nbsp;:

1. Charge l'application à page unique, si bien que le navigateur ajoute une entrée d'historique.
2. Clique sur un lien dans l'application à page unique, si bien que le gestionnaire de clic met à jour la page et ajoute une entrée d'historique avec `pushState()`.
3. Appuie sur le bouton «&nbsp;Précédent&nbsp;».

Nous voulons alors revenir à l'état initial de l'application à page unique, mais comme il s'agit d'une navigation dans le même document, la page n'est pas rechargée. De plus, comme l'entrée d'historique de la page initiale ne contient aucun état, nous ne pouvons pas utiliser `popstate` pour la restaurer.

La solution consiste à utiliser `replaceState()` pour définir l'objet d'état de la page initiale. Par exemple&nbsp;:

```js
// Créer l'état lors du chargement de la page et remplacer l'historique actuel par cet état
const image = document.querySelector("#photo");
const etatInitial = {
  description: document.querySelector("#description").textContent,
  image: {
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt"),
  },
  name: "Accueil",
};
history.replaceState(etatInitial, "", document.location.href);
```

Lors du chargement de la page, nous rassemblons toutes les parties de la page dont nous avons besoin pour la restaurer lorsque l'utilisateur·ice revient au point de départ de l'application à page unique. Cet objet a la même structure que le fichier JSON que nous récupérons lors de la gestion des autres navigations. Nous transmettons cet objet `etatInitial` à `replaceState()`, ce qui ajoute effectivement l'objet d'état à l'entrée actuelle de l'historique.

Lorsque l'utilisateur·ice revient à notre point de départ, l'évènement `popstate` contient cet état initial et nous pouvons utiliser notre fonction `displayContent()` pour mettre à jour la page.

## Exemple complet de l'API History

Vous trouvez cet exemple complet à l'adresse <https://github.com/mdn/dom-examples/tree/main/history-api>, et vous pouvez voir la démonstration en direct à l'adresse <https://mdn.github.io/dom-examples/history-api/>.

## Voir aussi

- [L'API History](/fr/docs/Web/API/History_API)
- L'objet global {{DOMxRef("window.history", "history")}}
