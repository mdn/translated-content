---
title: max-block-size
slug: Web/CSS/max-block-size
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/max-block-size
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`max-block-size`** définit la taille maximale horizontale ou verticale d'un élément selon l'axe perpendiculaire (l'axe de bloc) au sens d'écriture indiqué par {{cssxref("writing-mode")}}. Elle correspond à la propriété {{cssxref("max-width")}} ou {{cssxref("max-height")}} selon la valeur utilisée pour {{cssxref("writing-mode")}}. Si le mode d'écriture est orienté verticalement, `max-block-size` fait référence à la hauteur maximale de l'élément, sinon elle fait référence à la largeur maximale de l'élément.

La propriété {{cssxref("max-inline-size")}} peut être utilisée pour l'effet analogue selon l'axe en ligne (c'est-à-dire l'axe qui suit le sens d'écriture).

Cette propriété est une propriété _logique_ qui doit remplacer les propriétés _physiques_ correspondantes (`max-height` ou `max-width`) si on souhaite que la disposition tienne compte du mode d'écriture de la page (que celui-ci soit horizontal ou vertical). Vous pouvez consulter [ces exemples](/fr/docs/Web/CSS/writing-mode#Exemple) pour en savoir plus.

{{EmbedInteractiveExample("pages/css/max-block-size.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
max-block-size: 300px;
max-block-size: 25em;

/* Valeurs proportionnelles */
/* Type <percentage> */
max-block-size: 75%;

/* Valeurs avec un mot-clé */
max-block-size: none;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content;
max-block-size: fill-available;

/* Valeurs globales */
max-block-size: inherit;
max-block-size: initial;
max-block-size: unset;
```

### Valeurs

La propriété `max-block-size` peut prendre les mêmes valeurs que les propriétés {{cssxref("max-width")}} ou {{cssxref("max-height")}}.

{{page("/fr/docs/Web/CSS/max-width", "Valeurs")}}

### Relation avec les propriétés physiques

La valeur de `writing-mode` détermine la propriété physique correspondant à `max-block-size` :

| Valeur pour `writing-mode`                                                                                                                                                                            | Propriété physique équivalente à `max-block-size` |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `horizontal-tb`, `lr` {{deprecated_inline}}, `lr-tb` {{deprecated_inline}}, `rl` {{deprecated_inline}}, `rb` {{deprecated_inline}}, `rb-rl` {{deprecated_inline}}  | {{cssxref("max-height")}}                  |
| `vertical-rl`, `vertical-lr`, `sideways-rl` {{experimental_inline}}, `sideways-lr` {{experimental_inline}}, `tb` {{deprecated_inline}}, `tb-rl` {{deprecated_inline}} | {{cssxref("max-width")}}                  |

> **Note :** Les valeurs `sideways-lr` et `sideways-rl` pour `writing-mode` ont été retirées de la spécification CSS Writing Modes Level 3 en fin de processus et pourraient être réintroduites dans la spécification Level 4.

> **Note :** Les modes d'écriture `lr`, `lr-tb`, `rl`, `rb` et `rb-tl` ne sont plus autorisés pour les contextes {{Glossary("HTML")}} et peuvent uniquement être utilisés dans des contextes {{Glossary("SVG")}} 1.x.

### Syntaxe formelle

{{csssyntax}}

## Exemple

### CSS

```css
.exemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-block-size: 200px;
}
```

### HTML

```html
<p class="exemple">Texte d'exemple</p>
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Spécifications

| Spécifications                                                                                                   | État                                             | Commentaires        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-max-block-size", "max-block-size")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.max-block-size")}}

## Voir aussi

- Les propriétés physiques correspondantes : {{cssxref("max-width")}} et {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}
