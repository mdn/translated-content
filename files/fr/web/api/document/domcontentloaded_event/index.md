---
title: "Document : évènement DOMContentLoaded"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

L'évènement **`DOMContentLoaded`** se déclenche lorsque le document HTML a été entièrement analysé, et que tous les scripts différés ([`<script defer src="…">`](/fr/docs/Web/HTML/Reference/Elements/script#defer) et [`<script type="module">`](/fr/docs/Web/HTML/Reference/Elements/script#module)) ont été téléchargés et exécutés. Il n'attend pas que d'autres éléments comme les images, les sous-cadres et les scripts asynchrones aient fini de charger.

`DOMContentLoaded` does not wait for stylesheets to load, cependant les scripts différés _font_ attendre les feuilles de style, et l'évènement `DOMContentLoaded` est mis en file d'attente après les scripts différés. De plus, les scripts qui ne sont ni différés ni asynchrones (par exemple, `<script>`) attendent le chargement des feuilles de style déjà analysées.

Un autre évènement, {{DOMxRef("Window/load_event", "load")}}, doit être utilisé uniquement pour détecter une page entièrement chargée. Il est courant de se tromper en utilisant `load` là où `DOMContentLoaded` serait plus approprié.

Habituellement, pour éviter d'exécuter un script avant que le DOM qu'il manipule soit entièrement construit, vous pouvez simplement placer le script à la fin du corps du document, juste avant la balise de fermeture `</body>`, sans l'encapsuler dans un écouteur d'évènement.

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}.

```js-nolint
addEventListener("DOMContentLoaded", (event) => { })
```

> [!NOTE]
> Il n'existe pas de propriété de gestionnaire d'évènement `onDOMContentLoaded` pour cet évènement.

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Utilisation simple

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM entièrement chargé et analysé");
});
```

### Retarder `DOMContentLoaded`

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
  });

  for (let i = 0; i < 1_000_000_000; i++);
  // Ce script synchrone va retarder l'analyse du DOM,
  // donc l'évènement DOMContentLoaded sera déclenché plus tard.
</script>
```

### Vérifier que le contenu est déjà chargé

Parfois, votre script peut s'exécuter après que l'évènement `DOMContentLoaded` ait déjà été déclenché. Cela se produit généralement lorsque le script s'exécute de façon asynchrone. Les cas courants incluent&nbsp;:

- Un module qui est importé dynamiquement après que le document soit déjà chargé.
- Un script inclus via `<script async>`.
- Un script injecté dynamiquement dans la page.
- Du code qui reprend après une opération asynchrone, comme `await fetch(...)`, y compris après un await de haut niveau dans un module.

Dans ces cas, vous devez vérifier la propriété `readyState` du document avant d'ajouter un écouteur `DOMContentLoaded`, sinon votre logique d'initialisation risque de ne pas s'exécuter du tout. Pour les scripts synchrones (sans `async`) déjà présents dans le balisage initial, cette situation ne se produit pas. Le document attend que le script s'exécute avant de déclencher `DOMContentLoaded`, vous êtes donc certain·e que la logique d'initialisation dans l'écouteur sera exécutée.

Considérez le fichier de script suivant isolément&nbsp;:

```js
function faireQuelqueChose() {
  console.info("DOM chargé");
}

if (document.readyState === "loading") {
  // Le chargement n'est pas encore terminé
  document.addEventListener("DOMContentLoaded", faireQuelqueChose);
} else {
  // `DOMContentLoaded` a déjà été déclenché
  faireQuelqueChose();
}
```

### Exemple intéractif

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Recharger</button>
</div>

<div class="event-log">
  <label>Journal des événements&nbsp;:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += "DOMContentLoaded\n";
});
```

#### Résultat

{{EmbedLiveSample("Exemple intéractif", "100%", 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;: {{DOMxRef("Window/load_event", "load")}}, {{DOMxRef("Document/readystatechange_event", "readystatechange")}}, {{DOMxRef("Window/beforeunload_event", "beforeunload")}}, {{DOMxRef("Window/unload_event", "unload")}}
