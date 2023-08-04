---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

La propriété **`text-align`** définit l'alignement horizontal d'un élément de bloc ou de la boîte d'une cellule de tableau. Cette propriété fonctionne donc de façon analogue à {{cssxref("vertical-align")}} mais dans le sens horizontal.

{{EmbedInteractiveExample("pages/css/text-align.html")}}Syntaxe

```css
/* Valeurs avec un mot-clé */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Dans une cellule de tableau, caractère sur lequel */
/* doit être aligné le contenu de la cellule         */
text-align: ".";
text-align: "." center;

/* Alignement de bloc (non standard) */
text-align: -moz-center;
text-align: -webkit-center;

/* Valeurs globales */
text-align: inherit;
text-align: initial;
text-align: unset;
```

La propriété `text-align` peut être définie grâce à l'un des mots-clés de la liste qui suit.

### Valeurs

- `start` {{experimental_inline}}
  - : Cette valeur a le même effet que la valeur `left` si la direction du texte va de gauche à droite ou le même effet que `right` si la direction du texte va de droite à gauche.
- `end` {{experimental_inline}}
  - : Cette valeur a le même effet que la valeur `right` si la direction du texte va de gauche à droite ou le même effet que `left` si la direction du texte va de droite à gauche.
- `left`
  - : Les contenus en ligne (_inline_) sont alignés sur le bord gauche de la boîte contenant la ligne.
- `right`
  - : Les contenus en ligne (_inline_) sont alignés sur le bord droit de la boîte contenant la ligne.
- `center`
  - : Les contenus en ligne (_inline_) sont horizontalement centrés par rapport à la boîte contenant la ligne.
- `justify`
  - : Le texte est justifié. Les bords gauche et droit du texte sont alignés avec les bord gauche et droit du paragraphe.
- `justify-all`{{experimental_inline}}
  - : Comportement analogue à `justify` mais avec la dernière ligne nécessairement justifiée.
- `match-parent` {{experimental_inline}}
  - : Semblable à `inherit` mais les valeurs `start` et `end` sont calculées selon la valeur de {{cssxref("direction")}} pour le parent et sont remplacées par `left` ou `right` selon ce qui est adéquat.
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : Lorsque cette valeur est appliquée sur une cellule de tableau, elle indique le caractère sur lequel doit être aligné le contenu de la cellule.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Alignement à gauche

#### HTML

```html
<p class="exemple">
  Il y avait en Vestphalie, dans le château de M. le baron de
  Thunder-ten-tronckh, un jeune garçon à qui la nature avait donné les moeurs
  les plus douces. Sa physionomie annonçait son âme. Il avait le jugement assez
  droit, avec l’esprit le plus simple ; c’est, je crois, pour cette raison qu’on
  le nommait Candide.
</p>
```

#### CSS

```css
.exemple {
  text-align: left;
  border: solid;
}
```

#### Résultat

{{EmbedLiveSample("Alignement_à_gauche","100%","100%")}}

### Texte centré

#### HTML

```html
<p class="exemple">
  Il y avait en Vestphalie, dans le château de M. le baron de
  Thunder-ten-tronckh, un jeune garçon à qui la nature avait donné les moeurs
  les plus douces. Sa physionomie annonçait son âme. Il avait le jugement assez
  droit, avec l’esprit le plus simple ; c’est, je crois, pour cette raison qu’on
  le nommait Candide.
</p>
```

#### CSS

```css
.exemple {
  text-align: center;
  border: solid;
}
```

#### Résultat

{{EmbedLiveSample("Texte_centré","100%","100%")}}

### Justification

#### HTML

```html
<p class="exemple">
  Il y avait en Vestphalie, dans le château de M. le baron de
  Thunder-ten-tronckh, un jeune garçon à qui la nature avait donné les moeurs
  les plus douces. Sa physionomie annonçait son âme. Il avait le jugement assez
  droit, avec l’esprit le plus simple ; c’est, je crois, pour cette raison qu’on
  le nommait Candide.
</p>
```

#### CSS

```css
.exemple {
  text-align: justify;
  border: solid;
}
```

#### Résultat

{{EmbedLiveSample("Justification","100%","100%")}}

### Notes

La méthode la plus générique pour centrer un bloc plutot que de centrer son contenu est d'utiliser la propriété {{cssxref("margin")}} avec les valeurs `left` et `right` à `auto`, e.g. :

```css
.classe {
  margin: auto;
}
```

```css
.classe {
  margin: 0 auto;
}
```

```css
.classe {
  margin-left: auto;
  margin-right: auto;
}
```

## Accessibilité

L'espacement créé entre les mots par la justification du texte peut rendre la lecture difficile pour les personnes dyslexiques ou souffrant de troubles cognitifs.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("margin","margin:auto")}}
- {{cssxref("margin-left","margin-left:auto")}}
- {{cssxref("vertical-align")}}
