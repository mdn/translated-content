---
title: direction
slug: Web/CSS/direction
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/direction
---
{{CSSRef}}

La propriété **`direction`** doit être paramétrée afin de correspondre à la direction du texte: `rtl` (_Right To Left_ pour droite à gauche) pour les textes en hébreu ou en arabe et `ltr` (_Left To Right_ pour gauche à droite) pour les autres. Cela doit normalement être fait dans le document (par exemple, en utilisant [l'attribut `dir` en HTML](/fr/docs/Web/HTML/Attributs_universels/dir)) plutôt qu'avec une feuille de style CSS.

{{EmbedInteractiveExample("pages/css/direction.html")}}

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

### Syntaxe formelle

{{csssyntax}}

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
  Du reste, depuis son bain dans la mare aux larmes,
  tout était changé&nbsp;: la salle, la table de verre, et
  la petite porte avaient complétement disparu.
</blockquote>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                    | État                                     | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Writing Modes', '#direction', 'direction')}} | {{Spec2('CSS3 Writing Modes')}} | Aucune modification. |
| {{SpecName('CSS2.1', 'visuren.html#direction', 'direction')}} | {{Spec2('CSS2.1')}}                 | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.direction")}}

## Voir aussi

- {{cssxref("unicode-bidi")}}
- {{cssxref("writing-mode")}}
