---
title: padding-block
slug: Web/CSS/padding-block
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/padding-block
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`padding-block`** définit l'espace de remplissage (_padding_) pour le début et la fin de l'axe de bloc de l'élément. Cette propriété logique peut correspondre à différentes propriétés physiques selon le mode d'écriture de l'élément, sa direction et l'orientation du texte. Autrement dit, cette propriété peut correspondre aux propriétés {{cssxref("padding-top")}} et  {{cssxref("padding-bottom")}} ou à {{cssxref("padding-right")}} et {{cssxref("padding-left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de longueur */
/* Type <length> */
padding-block: 10px 20px;  /* Des longueurs absolues */
padding-block: 1em 2em;    /* Des longueurs relatives à la taille du texte */
padding-block: 5% 2%;      /* Des longueurs relatives à la taille du bloc englobant */
padding-block: 10px;       /* Une seule valeur définit le remplissage des deux côtés */

/* Valeurs avec un mot-clé */
padding-block: auto;

/* Valeurs globales */
padding-block: inherit;
padding-block: initial;
padding-block: unset;
```

Ces valeurs peuvent être définies individuellement grâce aux propriétés détaillées {{cssxref("padding-block-start")}} et {{cssxref("padding-block-end")}}. Pour définir le remplissage sur l'axe en ligne, on pourra utiliser la propriété logique raccourcie {{cssxref("padding-inline")}} qui définit {{cssxref("padding-inline-start")}} et {{cssxref("padding-inline-end")}}.

## Syntaxe

### Valeur

La propriété `padding-block` peut prendre les mêmes valeurs que la propriété {{cssxref("padding-left")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.texteExemple {
  writing-mode: vertical-rl;
  padding-block: 20px 40px;
  background-color: #c8c800;
}
```

### HTML

```html
<div>
  <p class="texteExemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                                | État                                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-padding-block", "padding-block")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-block")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("padding-top")}},
  - {{cssxref("padding-right")}},
  - {{cssxref("padding-bottom")}},
  - {{cssxref("padding-left")}}

- Les propriétés influençant les propriétés logiques :

  - {{cssxref("writing-mode")}},
  - {{cssxref("direction")}},
  - {{cssxref("text-orientation")}}
