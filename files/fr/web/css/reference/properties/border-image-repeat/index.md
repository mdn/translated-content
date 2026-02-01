---
title: border-image-repeat
slug: Web/CSS/Reference/Properties/border-image-repeat
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-image-repeat`** définit comment les images pour les côtés et la partie centrale de [l'image de bordure](/fr/docs/Web/CSS/Reference/Properties/border-image) sont mises à l'échelle et disposées en mosaïque. La région centrale peut être affichée en utilisant le mot-clé «&nbsp;fill&nbsp;» dans la propriété {{CSSxRef("border-image-slice")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-image-repeat")}}

```css interactive-example-choice
border-image-repeat: stretch;
```

```css interactive-example-choice
border-image-repeat: repeat;
```

```css interactive-example-choice
border-image-repeat: round;
```

```css interactive-example-choice
border-image-repeat: space;
```

```css interactive-example-choice
border-image-repeat: round stretch;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Ceci est une boîte entourée d'une bordure.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-image-repeat: stretch;
border-image-repeat: repeat;
border-image-repeat: round;
border-image-repeat: space;

/* côtés horizontaux | verticaux */
border-image-repeat: round stretch;

/* Valeurs globales */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: revert;
border-image-repeat: revert-layer;
border-image-repeat: unset;
```

La propriété `border-image-repeat` peut être définie à l'aide d'une ou deux valeurs parmi la liste qui suit.

- Avec **une** valeur indiquée, celle-ci s'applique **aux quatre côtés**.
- Avec **deux** valeurs indiquées, la première s'applique aux côtés **haut et bas**, la seconde s'applique aux côtés **gauche et droite**.

### Valeurs

- `stretch`
  - : Les régions de bord de l'image source sont étirées pour remplir l'espace entre chaque bordure.
- `repeat`
  - : Les régions de bord de l'image source sont disposées en mosaïque (répétées) pour remplir l'espace entre chaque bordure. Les motifs peuvent être rognés pour s'ajuster correctement.
- `round`
  - : Les régions de bord de l'image source sont disposées en mosaïque (répétées) pour remplir l'espace entre chaque bordure. Les motifs peuvent être étirés pour s'ajuster correctement.
- `space`
  - : Les régions de bord de l'image source sont disposées en mosaïque (répétées) pour remplir l'espace entre chaque bordure. L'espace supplémentaire sera réparti entre les motifs pour s'ajuster correctement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Répéter l'image de bordure

#### CSS

```css
#bordered {
  width: 12rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 40px solid;
  border-image: url("border.png") 27;
  border-image-repeat: stretch; /* Peut être changé avec la liste déroulante */
}
```

```html hidden
<div id="bordered">Vous pouvez essayer différentes valeurs !</div>

<select id="repetition">
  <option value="stretch">stretch</option>
  <option value="repeat">repeat</option>
  <option value="round">round</option>
  <option value="space">space</option>
  <option value="stretch repeat">stretch repeat</option>
  <option value="space round">space round</option>
</select>
```

```js hidden
const repetition = document.getElementById("repetition");
repetition.addEventListener("change", (evt) => {
  document.getElementById("bordered").style.borderImageRepeat =
    evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Répéter l'image de bordure", "auto", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les arrière-plans et bordures](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Apprendre le CSS&nbsp;: les arrière-plans et les bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Images de bordure dans CSS&nbsp;: un domaine clé pour l'Interop 2023](/fr/blog/border-images-interop-2023/) sur le blog MDN (2023)
