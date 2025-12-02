---
title: :fullscreen
slug: Web/CSS/Reference/Selectors/:fullscreen
original_slug: Web/CSS/:fullscreen
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:fullscreen`** permet de cibler tout élément qui est en mode plein écran. Si plusieurs éléments ont été mis en plein écran, tous ces éléments seront ciblés.

## Syntaxe

```css
:fullscreen {
  /* ... */
}
```

## Notes d'utilisation

La pseudo-classe `:fullscreen` permet de configurer la taille, le style ou la disposition du contenu lorsque les éléments passent de l'état plein écran à l'état normal et vice versa.

## Exemples

### Mise en forme d'un élément en plein écran

Cet exemple applique une couleur d'arrière-plan différente à un élément {{htmlelement('div')}}, selon qu'il est ou non en mode plein écran. Il comprend un élément {{htmlelement('button')}} permettant d'activer ou de désactiver le mode plein écran.

```html
<div class="element">
  <h1>Démonstration du MDN Web Docs : la pseudo-classe :fullscreen</h1>

  <p>
    Cette démonstration utilise la pseudo-classe <code>:fullscreen</code> pour
    changer automatiquement le style d'un bouton utilisé pour activer et
    désactiver le mode plein écran, entièrement en utilisant CSS.
  </p>

  <button class="toggle">Activer/Désactiver le plein écran</button>
</div>
```

La pseudo-classe `:fullscreen` est utilisée pour remplacer la [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color) de l'élément `<div>` lorsqu'il est en mode plein écran.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

Le JavaScript suivant fournit une fonction de gestion d'événement qui active ou désactive le mode plein écran lorsque l'utilisateur·ice clique sur le bouton `<button>`.

```js
document.querySelector(".toggle").addEventListener("click", (event) => {
  if (document.fullscreenElement) {
    // Si un élément est en plein écran, quitter le plein écran.
    document.exitFullscreen();
    return;
  }
  // Mettre l'élément .element en plein écran.
  document.querySelector(".element").requestFullscreen();
});
```

```css hidden
.element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  padding: 1.2em;
}
```

{{EmbedLiveSample("Styling a fullscreen element", "", "300", "", "", "", "fullscreen")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Le guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref("::backdrop")}}
- Les API DOM :
  - {{domxref("Element.requestFullscreen()")}},
  - {{domxref("Document.exitFullscreen()")}},
  - {{domxref("Document.fullscreenElement")}}

- L'attribut [`allowfullscreen`](/fr/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
