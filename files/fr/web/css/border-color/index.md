---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/border-color
---
{{CSSRef}}

La propriété CSS **`border-color`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de définir la couleur de la bordure sur les quatre côtés de la boîte de bordure d'un élément.

{{EmbedInteractiveExample("pages/css/border-color.html")}}

Chaque côté peut être paramétré individuellement grâce aux propriétés {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} et {{cssxref("border-left-color")}} ou, si on utilise les propriétés logiques : {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}} et {{cssxref("border-inline-end-color")}}.

## Syntaxe

```css
/* border-color : Une valeur        */
/* Une valeur pour les quatre côtés */
border-color: red;

/* border-color : Deux valeurs         */
/* Première valeur : côtés horizontaux */
/* Seconde valeur : côtés verticaux    */
border-color: red #f015ca;

/* border-color : Trois valeurs        */
/* Première valeur : côté haut         */
/* Deuxième valeur : côtés verticaux */
/* Troisième valeur : côté bas         */
border-color: red yellow green;

/* border-color : Quatre valeurs  */
/* Première valeur : côté haut    */
/* Deuxième valeur : côté droit   */
/* Troisième valeur : côté bas    */
/* Quatrième valeur : côté gauche */
border-color: red yellow green blue;

/* Valeurs globales */
border-color: inherit;
```

### Valeurs

- `<color>`
  - : Une valeur de type {{cssxref("&lt;color&gt;")}} qui indique la couleur qu'on souhaite appliquer sur un ou plusieurs côtés de la boîte de bordure.
- `inherit`
  - : Un mot-clé qui indique que les quatre valeurs sont héritées depuis la valeur calculée de la propriété pour l'élément parent.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#unevaleur {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#hauthoribas {
  border-color: red cyan gold;
}

#hdbg {
  border-color: red cyan black gold;
}

/* Set width and style for all divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

### HTML

```html
<div id="unevaleur">
  <p><code>border-color: red;</code> équivalent à</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> équivalent à</p>
  <ul><li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="hauthoribas">
  <p><code>border-color: red cyan gold;</code> équivalent à</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="hdbg">
  <p><code>border-color: red cyan black gold;</code> équivalent à</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples', 600, 300)}}

## Spécifications

| Spécification                                                                                        | État                                             | Commentaires                                                                                         |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS Logical Properties", "#logical-shorthand-keyword")}}         | {{Spec2("CSS Logical Properties")}} | Ajout du mot-clé `logical`.                                                                          |
| {{SpecName("CSS3 Backgrounds", "#border-color", "border-color")}}             | {{Spec2('CSS3 Backgrounds')}}         | Le mot-clé `transparent` a été retiré pour être ajouté au type {{cssxref("&lt;color&gt;")}}. |
| {{SpecName("CSS2.1", "box.html#border-color-properties", "border-color")}} | {{Spec2('CSS2.1')}}                         | Cette propriété est désormais une propriété raccourcie.                                              |
| {{SpecName("CSS1", "#border-color", "border-color")}}                             | {{Spec2('CSS1')}}                         | Définition initiale.                                                                                 |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-color")}}

## Voir aussi

- Les propriétés liées à la couleur de la bordure

  - {{cssxref("border")}},
  - {{cssxref("border-top-color")}},
  - {{cssxref("border-right-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-left-color")}},

- Les autres propriétés raccourcies liées à la bordure :

  - {{cssxref("border-width")}},
  - {{cssxref("border-style")}}.

- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
- Le type de données {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}.
