---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:fullscreen`** permet de cibler tout élément qui est en mode plein écran. Si plusieurs éléments ont été mis en plein écran, tous ces éléments seront ciblés.

## Syntaxe

{{csssyntax}}

## Notes d'utilisation

La pseudo-classe `:fullscreen` permet de configurer la taille, le style ou la disposition du contenu lorsque les éléments passent de l'état plein écran à l'état normal et vice versa.

## Exemples

Dans cet exemple, on change la couleur d'un bouton selon que le document est en plein écran ou non. On n'utilise pas JavaScript pour changer les styles.

### CSS

On utilise deux règles. La première qui permet de définir la couleur d'arrière plan pour le bouton « Passer en mode plein écran » lorsque l'élément n'est pas en plein écran. Pour distinguer ce cas, on utilise `:not(:fullscreen)`, qui permet de cibler les éléments qui n'ont pas la pseudo-classe `:fullscreen`.

```css
#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}
```

Lorsque le document est en mode plein écran, on utilise cette fois-ci la pseudo-classe `:fullscreen` et on définit une autre couleur (ici un rouge pâle).

```css
#fs-toggle:fullscreen {
  background-color: #faa;
}
```

### HTML

```html
<h1>MDN Web Docs Demo: :fullscreen pseudo-class</h1>

<p>
  This demo uses the <code>:fullscreen</code> pseudo-class to automatically
  change the style of a button used to toggle full-screen mode on and off,
  entirely using CSS.
</p>

<button id="fs-toggle">Toggle Fullscreen</button>
```

Dans ce fragment de code HTML, c'est l'élément {{HTMLElement("button")}} avec l'identifiant `"fs-toggle"` qui changera d'une couleur à une autre selon que le document est en plein écran ou non.

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

- L'attribut [`allowfullscreen`](/fr/docs/Web/HTML/Element/iframe#allowfullscreen)
