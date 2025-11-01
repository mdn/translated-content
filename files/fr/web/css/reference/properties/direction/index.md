---
title: direction
slug: Web/CSS/Reference/Properties/direction
original_slug: Web/CSS/direction
---

{{CSSRef}}

La propriété **`direction`** doit être paramétrée afin de correspondre à la direction du texte: `rtl` (_Right To Left_ pour droite à gauche) pour les textes en hébreu ou en arabe et `ltr` (_Left To Right_ pour gauche à droite) pour les autres. Cela doit normalement être fait dans le document (par exemple, en utilisant [l'attribut `dir` en HTML](/fr/docs/Web/HTML/Reference/Global_attributes/dir)) plutôt qu'avec une feuille de style CSS.

{{InteractiveExample("CSS Demo: direction")}}

```css interactive-example-choice
direction: ltr;
```

```css interactive-example-choice
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}
```

La propriété définit la direction principale du texte des éléments de type bloc et celle des éléments incorporés créés par la propriété {{cssxref("unicode-bidi")}}. Elle définit également l'alignement par défaut du texte et des éléments de type bloc, ainsi que le sens de progression des cellules dans une ligne de tableau.

Contrairement à l'attribut HTML `dir`, la propriété `direction` n'est pas héritée pour les cellules depuis les colonnes d'un tableau car l'héritage CSS suit l'arborescence du document et les cellules sont à l'intérieur des lignes et non à l'intérieur des colonnes.

Les propriétés `direction` et {{cssxref("unicode-bidi")}} sont les deux seuls propriétés qui ne sont pas affectés par la propriété raccourcie {{cssxref("all")}}.

## Syntaxe

```css
direction: ltr;
direction: rtl;

/* Valeurs globales */
direction: inherit;
direction: initial;
direction: unset;
```

### Valeurs

- `ltr`
  - : La valeur par défaut qui correspond à une disposition de la gauche vers la droite pour le texte et les autres éléments.
- `rtl`
  - : Le texte et les autres éléments vont de la droite vers la gauche.

Afin que la propriété `direction` ait un effet sur les éléments en ligne, il faut que la valeur de la propriété {{cssxref("unicode-bidi")}} soit `embed` ou `override`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
blockquote {
  direction: rtl;
}
```

### HTML

```html
<blockquote>
  Du reste, depuis son bain dans la mare aux larmes, tout était changé&nbsp;: la
  salle, la table de verre, et la petite porte avaient complétement disparu.
</blockquote>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("unicode-bidi")}}
- {{cssxref("writing-mode")}}
