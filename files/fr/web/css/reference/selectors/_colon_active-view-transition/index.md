---
title: :active-view-transition
slug: Web/CSS/Reference/Selectors/:active-view-transition
original_slug: Web/CSS/:active-view-transition
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:active-view-transition`** correspond à l'élément racine d'un document lorsqu'une [transition de vue](/fr/docs/Web/API/View_Transition_API#concepts_et_utilisation) est en cours (_active_) et cesse de correspondre une fois la transition terminée.

## Syntaxe

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Exemples

### Mettre en forme une transition de vue active

Cet exemple s'appuie sur l'exemple de [transition de vue dans le même document](/fr/docs/Web/API/Document/startViewTransition#using_a_same-document_view_transition) de la page `startViewTransition`.

```html
<main>
  <section class="color">
    <h2>La couleur change !</h2>
  </section>
  <button id="change-color">Changer la couleur</button>
</main>
```

Un élément `<h2>` a initialement un style `display: none`, et cela est écrasé à l'aide de la pseudo-classe `:active-view-transition` en définissant le style `<h2>` sur `display: block`.
Le bouton est masqué à l'aide de `visibility: hidden`, lorsque la transition de vue est en cours&nbsp;:

```css hidden
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```css
h2 {
  display: none;
  color: white;
}
:root:active-view-transition h2 {
  display: block;
}
:root:active-view-transition button {
  visibility: hidden;
}
```

```js hidden
const colors = ["darkred", "darkslateblue", "darkgreen"];
const colBlock = document.querySelector(".color");
let count = 0;
const updateColour = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  if (!document.startViewTransition) {
    updateColour();
    return;
  }
  const transition = document.startViewTransition(() => {
    updateColour();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

{{EmbedLiveSample('showing_view_transition_is_running', '100%', '120')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSXRef(":active-view-transition-type", ":active-view-transition-type()")}}
- La méthode [`startViewTransition`](/fr/docs/Web/API/Document/startViewTransition)
