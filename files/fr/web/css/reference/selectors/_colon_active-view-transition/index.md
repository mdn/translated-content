---
title: Pseudo-classe CSS `:active-view-transition`
short-title: :active-view-transition
slug: Web/CSS/Reference/Selectors/:active-view-transition
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:active-view-transition`** correspond à l'élément racine d'un document lorsqu'une [transition de vue](/fr/docs/Web/API/View_Transition_API#concepts_et_utilisation) est en cours (_active_) et cesse de correspondre une fois la transition terminée.

## Syntaxe

```css
:root:active-view-transition ... {
  /* … */
}
```

## Exemples

### Mettre en forme une transition de vue active

Cet exemple s'appuie sur l'exemple de [transition de vue dans le même document](/fr/docs/Web/API/Document/startViewTransition#utilisation_simple) de la page `startViewTransition`.

```html
<main>
  <section class="couleur">
    <h2>La couleur change&nbsp;!</h2>
  </section>
  <button id="changer-couleur">Changer la couleur</button>
</main>
```

Un élément `<h2>` a initialement un style `display: none`, et c'est écrasé à l'aide de la pseudo-classe `:active-view-transition` en définissant le style `<h2>` sur `display: block`.
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
const couleurs = ["darkred", "darkslateblue", "darkgreen"];
const blocCouleur = document.querySelector(".couleur");
let compte = 0;
const actualiserCouleur = () => {
  blocCouleur.style = `--bg: ${couleurs[compte]}`;
  compte = compte !== couleurs.length - 1 ? ++compte : 0;
};
const changerCouleur = () => {
  if (!document.startViewTransition) {
    actualiserCouleur();
    return;
  }
  const transition = document.startViewTransition(() => {
    actualiserCouleur();
  });
};
const boutonChangerCouleur = document.querySelector("#changer-couleur");
boutonChangerCouleur.addEventListener("click", changerCouleur);
boutonChangerCouleur.addEventListener("keypress", changerCouleur);
```

{{EmbedLiveSample("Mettre en forme une transition de vue active", "100%", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":active-view-transition-type()")}}
- La méthode API {{DOMxRef("Document.startViewTransition", "startViewTransition")}}
