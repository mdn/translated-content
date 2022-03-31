---
title: object-position
slug: Web/CSS/object-position
translation_of: Web/CSS/object-position
browser-compat: css.properties.object-position
---
{{CSSRef}}

La propriété **`object-position`** détermine l'alignement d'un [élément remplacé](/fr/docs/Web/CSS/Replaced_element) au sein de sa boîte. Les zones de la boîte qui ne sont pas recouvertes par le contenu de l'élément remplacé montreront l'arrière-plan de l'élément.

> **Note :** Il est possible d'ajuster la taille de l'élément remplacé au sein de la boîte de l'élément grâce à la propriété [`object-fit`](/fr/docs/Web/CSS/object-fit).

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## Syntaxe

```css
/* Valeurs de positionnement */
/* Type <position>           */
object-position: center top;
object-position: 100px 50px;

/* Valeurs globales */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: unset;
```

### Valeurs

- `<position>`
  - : Une valeur de type [`<position>`](/fr/docs/Web/CSS/position_value), c'est-à-dire une à quatre valeurs permettant de définir une position en deux dimensions par rapport aux limites de la boîte dans laquelle est placé l'élément. On peut donner des décalages absolus ou relatifs. On notera que la position peut être définie en dehors de la boîte de l'élément.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

Dans ce fragment HTML, on a deux éléments [`<img>`](/fr/docs/Web/HTML/Element/img), chacun affichant le logo de MDN.

```html
<img id="object-position-1" src="mdn.svg" alt="Logo MDN"/>
<img id="object-position-2" src="mdn.svg" alt="Logo MDN"/>
```

### CSS

Le code CSS implique la mise en forme par défaut pour les éléments `<img>` et des styles différents pour les deux images.

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

La première image est positionnée avec son bord gauche situé à 10 pixels du bord gauche de la boîte de l'élément. La seconde image est positionnée avec son bord droit poussé sur le bord droit de la boîte de l'élément et est située vers le bas de 10% de la hauteur de la boîte de l'élément.

### Résultat

{{EmbedLiveSample('', '100%','600px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS liées aux images&nbsp;:

  - [`object-fit`](/fr/docs/Web/CSS/object-fit)
  - [`image-orientation`](/fr/docs/Web/CSS/image-orientation)
  - [`image-rendering`](/fr/docs/Web/CSS/image-rendering)
  - [`image-resolution`](/fr/docs/Web/CSS/image-resolution)
