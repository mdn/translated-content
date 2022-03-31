---
title: border
slug: Web/CSS/border
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border
---
{{CSSRef("CSS Borders")}}

La propriété CSS **`border`** est [une propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) qui permet de définir les propriétés liées à la bordure. `border` peut être utilisée pour définir les valeurs de {{cssxref("border-width")}}, {{cssxref("border-style")}} et {{cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/border.html")}}

Comme pour toutes les propriétés raccourcie, si une valeur est absente pour la propriété détaillée correspondante, cette dernière sera réinitialisée avec sa valeur initiale. On notera également que {{cssxref("border-image")}} ne peut pas être définie via cette propriété raccourcie mais elle sera quand même réinitialisée (sa valeur initiale est `none`). Ainsi, `border` peut être utilisée pour réinitialiser n'importe quelle propriété liée à la bordure définie plus haut dans la cascade.

> **Note :** Bien que les propriétés raccourcies {{cssxref("border-width")}}, {{cssxref("border-style")}} et {{cssxref("border-color")}} acceptent jusqu'à quatre valeurs pour les différents côtés, cette propriété (`border`) n'accepte qu'une seule valeur pour chaque propriété détaillée. Le résultat obtenu sera donc homogène sur les quatre côtés.

### Différences entre les bordures et les contours (_outlines_)

Les bordures et [contours](/fr/docs/Web/CSS/outline) sont similaires mais quelques différences les distinguent :

- Les contours n'occupent pas d'espace sur l'élément : ils sont dessinés en dehors du contenu de l'élément
- Selon la spécification, les contours ne sont pas nécessairement rectangulaires.

## Syntaxe

```css
/* style */
border: solid;

/* largeur | style */
border: 2px dotted;

/* style | couleur */
border: outset #f33;

/* largeur | style | couleur */
border: medium dashed green;

/* Valeurs globales */
border: inherit;
border: initial;
border: unset;
```

La propriété `border` peut être définie grâce à une ou plusieurs valeurs [`<line-width>`](#br-width), [`<line-style>`](#br-style) ou [`<color>`](#color).

> **Note :** La bordure pourra être invisible si son style n'est pas défini. En effet, sa valeur par défaut est `none`.

### Valeurs

- `<line-width>`
  - : Voir {{cssxref("border-width")}} (la valeur par défaut est `medium`).
- `<line-style>`
  - : Voir {{cssxref("border-style")}} (la valeur par défaut est `none`).
- `<color>`
  - : Voir {{cssxref("border-color")}}. Une valeur de type {{cssxref("&lt;color&gt;")}} qui indique la couleur de la bordure. La valeur par défaut qui sera utilisée sera la valeur de la propriété {{cssxref("color")}} de l'élément (qui est la couleur du texte de l'élément, pas de son arrière-plan).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.brd {
  border: 1px solid black;
}
style {
  border: 1px dashed black;
  display:block;
}
```

### HTML

```html
<div class="brd">Oh des bordures</div>
<p>
  N'hésitez pas à éditer le CSS qui suit pour voir
  l'effet des valeurs.
</p>
<style contenteditable>
  .brd {
    border: 1px solid black;
  }
</style>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-shorthands', 'border')}}     | {{Spec2('CSS3 Backgrounds')}} | La prise en charge du mot-clé `transparent` est retirée car celui-ci est désormais intégré au type {{cssxref("&lt;color&gt;")}}. En pratique, cela n'a pas d'impact. Bien que {{cssxref("border-image")}} ne puisse être définie via `border`, cette dernière la réinitialise quand même avec sa valeur initiale (`none`). |
| {{SpecName('CSS2.1', 'box.html#border-shorthand-properties', 'border')}} | {{Spec2('CSS2.1')}}                 | Le mot-clé `inherit` peut être utilisé et `transparent` est considéré comme une couleur valide.                                                                                                                                                                                                                                             |
| {{SpecName('CSS1', '#border', 'border')}}                                         | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                                                                                                                                                                                                                                        |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border")}}

## Voir aussi

- {{cssxref("border-top-left-radius")}},
- {{cssxref("border-top-right-radius")}},
- {{cssxref("border-bottom-right-radius")}},
- {{cssxref("border-bottom-left-radius")}}
