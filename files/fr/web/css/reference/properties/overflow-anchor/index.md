---
title: Propriété CSS `overflow-anchor`
short-title: overflow-anchor
slug: Web/CSS/Reference/Properties/overflow-anchor
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-anchor`** permet de désactiver le comportement d'ancrage du défilement du navigateur, qui ajuste la position de défilement pour minimiser les déplacements de contenu.

Le comportement d'ancrage du défilement est activé par défaut dans tous les navigateurs qui le prennent en charge. Par conséquent, il est généralement nécessaire de modifier la valeur de cette propriété uniquement si vous rencontrez des problèmes d'ancrage du défilement dans un document ou une partie d'un document et que vous devez désactiver ce comportement.

{{InteractiveExample("Démonstration CSS&nbsp;: overflow-anchor")}}

```css interactive-example-choice
overflow-anchor: auto;
```

```css interactive-example-choice
overflow-anchor: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <button id="playback" type="button">Démarrer la loterie</button>
    <p>Les numéros magiques pour aujourd'hui sont&nbsp;:</p>
    <div id="example-element"></div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#example-element {
  height: 100%;
  border: 2px dashed dodgerblue;
  padding: 0.75em;
  text-align: left;
  overflow: scroll;
}

#playback {
  font-size: 1em;
  width: 10em;
  height: 4em;
  font-weight: bold;
  margin: 1em auto;
  background-color: aliceblue;
  border: solid 2px dodgerblue;
  border-radius: 5px;
}

#playback:hover {
  border-color: lightseagreen;
}

#playback:active {
  filter: brightness(0.9);
}
```

```js interactive-example
const example = document.getElementById("example-element");
const button = document.getElementById("playback");
let intervalId;

function setInitialState() {
  example.innerHTML = "";
  Array.from({ length: 10 }, (_, i) => i).forEach(addContent);
  example.scrollTop = example.scrollHeight;
}

function addContent() {
  console.log("adding content");
  const magicNumber = Math.floor(Math.random() * 10000);
  example.insertAdjacentHTML(
    "afterbegin",
    `<div class="new-content-container">Nouveau numéro magique : ${magicNumber}</div>`,
  );
}

button.addEventListener("click", () => {
  if (example.classList.contains("running")) {
    example.classList.remove("running");
    button.textContent = "Démarrer la loterie";
    clearInterval(intervalId);
  } else {
    example.classList.add("running");
    button.textContent = "Arrêter la loterie";
    setInitialState();
    intervalId = setInterval(addContent, 1000);
  }
});
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-anchor: auto;
overflow-anchor: none;

/* Valeurs globales */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### Valeurs

- `auto`
  - : L'élément peut devenir une ancre lorsque la position de défilement est ajustée.
- `none`
  - : L'élément ne sera pas sélectionné comme ancre.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Empêcher l'ancrage du défilement

Pour empêcher l'ancrage du défilement dans un document, utilisez la propriété `overflow-anchor`.

```css
body {
  overflow-anchor: none;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu de l'ancrage du défilement](/fr/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
- Le module [d'ancrage du défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_anchoring)
