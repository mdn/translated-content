---
title: Créer et déclencher des évènements
slug: Web/Events/Creating_and_triggering_events
---

Dans cet article, nous allons voir comment créer et diffuser des évènements dans le DOM. Ce type d'évènements ainsi créés sont appelés des **évènements synthétiques**, en opposition aux évènements déclenchés par le navigateur.

## Créer des évènements spécifiques

Les évènements peuvent être créés avec le constructeur [`Event`](/fr/docs/Web/API/Event), comme ceci&nbsp;:

```js
const event = new Event("build");

// On écoute l'évènement
elem.addEventListener(
  "build",
  function (e) {
    /* … */
  },
  false,
);

// On diffuse l'évènement
elem.dispatchEvent(event);
```

Dans l'exemple précédent, on utilise la méthode [`EventTarget.dispatchEvent()`](/fr/docs/Web/API/EventTarget/dispatchEvent).

Le constructeur est pris en charge par la plupart des navigateurs modernes (Internet Explorer étant l'exception). Pour une approche plus verbeuse (mais qui fonctionne pour Internet Explorer), voir [l'ancienne méthode](#lancienne_méthode) ci-après.

### Ajouter des données spécifiques avec `CustomEvent()`

Afin d'ajouter des données supplémentaires à l'objet représentant l'évènement, on peut utiliser l'interface [`CustomEvent`](/fr/docs/Web/API/CustomEvent) et la propriété **`detail`** afin de passer des données supplémentaires. On peut ainsi créer un évènement avec des données complémentaires de la façon suivante&nbsp;:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Ces données seront alors accessibles lors de la gestion de l'évènement&nbsp;:

```js
function eventHandler(e) {
  console.log("The time is: " + e.detail);
}
```

### L'ancienne méthode

Cette ancienne approche pour créer des évènements utilise des API inspirées de Java. Dans l'exemple qui suit, on utilise [`document.createEvent()`](/fr/docs/Web/API/Document/createEvent)&nbsp;:

```js
// On crée l'évènement
const event = document.createEvent("Event");

// On définit son nom à 'build'.
event.initEvent("build", true, true);

// On écoute l'évènement
elem.addEventListener(
  "build",
  function (e) {
    // e.target === elem
  },
  false,
);

// On diffuse l'évènement sur un élément ou
// tout autre objet EventTarget.
elem.dispatchEvent(event);
```

### Bouillonnement des évènements

Généralement, un évènement sera déclenché depuis un élément enfant et remontera jusqu'à ce qu'un élément ancêtre l'intercepte (éventuellement en gérant les données supplémentaires)&nbsp;:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// On crée un nouvel évènement en permettant le bouillonnement
// et on fournit d'éventuelles données supplémentaires avec la
// propriété "detail"
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// L'élément de formulaire écoute cet évènement spécifique et affiche
// dans la console le résultat de la méthode text() qui a été passée
// avec detail
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// Lorsque la personne tape dans le champ, on déclenche l'évènement
// sur le même élément qui a généré l'évènement input
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### Créer et diffuser des évènements dynamiquement

Les éléments peuvent écouter des évènements qui n'ont pas encore été créés&nbsp;:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // On crée et on diffuse/déclenche un évènement à la volée
  // Note : on a également utilisé une expression de fonction
  // plutôt qu'une fonction fléchée et "this" représentera donc
  // l'élément
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Déclencher des évènements natifs

Cet exemple illustre la simulation d'un clic (ce qui revient à générer l'évènement d'un clic depuis le programme) sur une case à cocher grâce aux méthodes du DOM. [Voir l'exemple en action.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // Un gestionnaire a appelé preventDefault.
    console.log("annulé");
  } else {
    // Aucun des gestionnaires n'a appelé preventDefault.
    console.log("pas annulé");
  }
}
```

## Voir aussi

- [`CustomEvent()`](/fr/docs/Web/API/CustomEvent/CustomEvent)
- [`document.createEvent()`](/fr/docs/Web/API/Document/createEvent)
- [`Event.initEvent()`](/fr/docs/Web/API/Event/initEvent)
- [`EventTarget.dispatchEvent()`](/fr/docs/Web/API/EventTarget/dispatchEvent)
- [`EventTarget.addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener)

<section id="Quick_links">
  <ol>
    <li><a href="/fr/docs/Learn/JavaScript/Building_blocks/Events">Introduction aux évènements</a></li>
    <li><a href="/fr/docs/Web/Events/Event_handlers">Gestionnaires d'évènements (aperçu)</a></li>
    <li><a href="/fr/docs/Web/Events">Référence des évènements</a></li>
  </ol>
</section>
