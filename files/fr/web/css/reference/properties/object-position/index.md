---
title: object-position
slug: Web/CSS/Reference/Properties/object-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`object-position`** définit l'alignement du contenu d'un {{Glossary("replaced elements", "élément remplacé")}} au sein de la boîte de l'élément. Les zones de la boîte qui ne sont pas couvertes par l'objet de l'élément remplacé afficheront l'arrière-plan de l'élément.

Il est possible de modifier la taille intrinsèque de l'objet de l'élément remplacé (c'est-à-dire sa taille naturelle) pour l'adapter à la boîte de l'élément en utilisant la propriété {{CSSxRef("object-fit")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: object-position")}}

```css interactive-example-choice
object-position: 50% 50%;
```

```css interactive-example-choice
object-position: right top;
```

```css interactive-example-choice
object-position: left bottom;
```

```css interactive-example-choice
object-position: 250px 125px;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/moon.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: 250px;
  width: 250px;
  object-fit: none;
  border: 1px solid red;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
object-position: top;
object-position: bottom;
object-position: left;
object-position: right;
object-position: center;

/* Valeurs de type <percentage> */
object-position: 25% 75%;

/* Valeurs de type <length> */
object-position: 0 0;
object-position: 1cm 2cm;
object-position: 10ch 8em;

/* Valeurs de décalage par rapport aux bords */
object-position: bottom 10px right 20px;
object-position: right 3em bottom 10px;
object-position: top 0 right 10px;

/* Valeurs globales */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: revert-layer;
object-position: unset;
```

### Valeurs

- {{CSSxRef("&lt;position&gt;")}}
  - : De une à quatre valeurs qui définissent la position en 2D de l'élément. Des décalages relatifs ou absolus peuvent être utilisés.

> [!NOTE]
> La position peut être définie de manière à ce que l'élément remplacé soit dessiné en dehors de sa boîte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionner le contenu d'une image

#### HTML

Dans ce fragment HTML, on a deux éléments HTML {{HTMLElement("img")}}, chacun affichant le logo de MDN.

```html
<img id="object-position-1" src="mdn.svg" alt="Logo MDN" />
<img id="object-position-2" src="mdn.svg" alt="Logo MDN" />
```

#### CSS

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

#### Résultat

{{EmbedLiveSample("Positionner le contenu d'une image", "100%", 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS associées aux images&nbsp;: {{CSSxRef("object-fit")}}, {{CSSxRef("image-orientation")}}, {{CSSxRef("image-rendering")}}, {{CSSxRef("image-resolution")}}.
