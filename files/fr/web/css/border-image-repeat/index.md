---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
browser-compat: css.properties.border-image-repeat
translation_of: Web/CSS/border-image-repeat
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`border-image-repeat`** définit la façon dont les zones de l'image de bordure sont utilisées pour s'étendre sur chacun des côtés de la bordure.

{{EmbedInteractiveExample("pages/css/border-image-repeat.html")}}

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
border-image-repeat: unset;
```

La propriété `border-image-repeat` peut être définie à l'aide d'une ou deux valeurs parmi la liste qui suit.

- Avec **une** valeur indiquée, celle-ci s'applique **aux quatre côtés**.
- Avec **deux** valeurs indiquées, la première s'applique aux côtés **haut et bas**, la seconde s'applique aux côtés **gauche et droite**.

### Valeurs

- `stretch`
  - : Un mot-clé qui indique que la zone de l'image doit être étirée pour remplir l'espace entre les deux bordures.
- `repeat`
  - : Un mot-clé qui indique que la zone de l'image doit être répétée jusqu'à remplir l'espace entre les deux bordures. Les portions répétées peuvent être rognées si nécessaire.
- `round`
  - : Un mot-clé qui indique que la zone de l'image doit être répétée jusqu'à remplir l'espace entre les deux bordures. Si on ne peut pas remplir cet espace avec un nombre entier de motifs, ceux-ci seront étirés pour qu'il y ait une répétition entière et que l'espace soit parfaitement rempli.
- `space`
  - : Un mot-clé qui indique que la zone de l'image est répétée afin de remplir la zone entre les deux bordures. Si on ne peut pas remplir exactement la zone avec un nombre entier de motifs, l'espace restant sera réparti entre ces motifs.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

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
  border-image-repeat: stretch;  /* Peut être changé avec la liste déroulante */
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
var repetition = document.getElementById("repetition");
repetition.addEventListener("change", function (evt) {
  document.getElementById("bordered").style.borderImageRepeat = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample('', '480', '250')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les arrière-plans et bordures](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [Apprendre le CSS&nbsp;: les arrière-plans et les bordures](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
