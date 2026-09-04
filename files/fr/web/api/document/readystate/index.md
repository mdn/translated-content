---
title: "Document : propriété readyState"
short-title: readyState
slug: Web/API/Document/readyState
l10n:
  sourceCommit: e32d6804e733d48e5a0917bc3ae45aee4798613d
---

{{APIRef("DOM")}}

La propriété **`readyState`** de l'interface {{DOMxRef("Document")}} décrit l'état de chargement du document.
Lorsque la valeur de cette propriété change, un évènement {{DOMxRef("Document/readystatechange_event", "readystatechange")}} est déclenché sur l'objet {{DOMxRef("document")}}.

## Valeur

L'état `readyState` d'un document peut être l'un des suivants&nbsp;:

- `loading`
  - : Le {{DOMxRef("document")}} est encore en cours de chargement (c'est-à-dire que l'analyseur HTML est encore en train de travailler).
- `interactive`
  - : Le document a été analysé, mais les sous-ressources telles que les scripts {{DOMxRef("HTMLScriptElement/defer", "différés", "", 1)}} et les scripts de [module](/fr/docs/Web/JavaScript/Guide/Modules), les images, les feuilles de style et les cadres sont encore en cours de chargement. Une fois dans cet état, et après l'exécution des scripts différés et des modules, l'évènement {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}} est déclenché.
- `complete`
  - : Le document et toutes les sous-ressources ont été chargés. L'état indique que l'évènement {{DOMxRef("Window/load_event", "load")}} est sur le point de se déclencher.

## Exemples

### Différents états de chargement

```js
switch (document.readyState) {
  case "loading":
    // Encore en chargement.
    break;
  case "interactive": {
    // Le document a fini de se charger et nous pouvons accéder aux éléments DOM.
    // Les sous-ressources telles que les scripts, les images, les feuilles de style et les cadres sont encore en cours de chargement.
    const span = document.createElement("span");
    span.textContent = "Un élément <span>.";
    document.body.appendChild(span);
    break;
  }
  case "complete":
    // La page est pleinement chargée.
    console.log(
      `La première règle CSS est : ${document.styleSheets[0].cssRules[0].cssText}`,
    );
    break;
}
```

### `readystatechange` comme alternative à `DOMContentLoaded`

```js
// alternative à DOMContentLoaded
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### `readystatechange` comme alternative à `load`

```js
// alternative à load
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### `readystatechange` comme écouteur d'évènement pour insérer ou modifier le DOM avant `DOMContentLoaded`

```js
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    initLoader();
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les évènements associés&nbsp;:
  - {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{DOMxRef("Window/load_event", "load")}}
