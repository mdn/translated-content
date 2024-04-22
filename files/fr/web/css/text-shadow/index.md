---
title: text-shadow
slug: Web/CSS/text-shadow
---

{{CSSRef}}

La propriété **`text-shadow`** ajoute des ombres au texte. Elle accepte une liste d'ombres à appliquer au texte et aux [décorations](/fr/docs/Web/CSS/text-decoration) de l'élément. Chaque ombre est décrite par une certaine combinaison de décalages X et Y de l'élément, de rayon de flou et de couleur.

{{EmbedInteractiveExample("pages/css/text-shadow.html")}}

## Syntaxe

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Utiliser les défauts pour la couleur et le rayon de flou */
text-shadow: 5px 10px;

/* Valeurs globales */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

Cette propriété est spécifiée comme une liste d'ombres séparées par des virgules.

Chaque ombre est spécifiée par deux ou trois valeurs `<length>`, suivies d'une valeur `<color>`. Les deux premières valeurs `<length>` sont les valeurs `<decalage-x>` et `<decalage-y>`. La troisième valeur `<length>`, facultative, est le `<rayon-de-flou>`. La valeur `<color>` est la couleur de l'ombre.

Lorsque plus d'une ombre est indiquée, les ombres sont appliquées d'avant en arrière, avec la première ombre spécifiée sur le dessus.

Cette propriété s'applique aux deux [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-éléments) {{cssxref("::first-line")}} et {{cssxref("::first-letter")}}.

### Valeurs

- {{cssxref("&lt;color&gt;")}}
  - : Optionnelle. La couleur de l'ombre. Elle peut être spécifiée avant ou après les valeurs de décalage. Si non spécifiée, la valeur de la couleur est laissée à l'agent utilisateur, donc quand une cohérence entre les navigateurs est désirée, vous devriez la définir explicitement.
- \<decalage-x> \<decalage-y>
  - : Obligatoires. Ces valeurs {{cssxref("&lt;length&gt;")}} définissent la distance de l'ombre par rapport au texte. `<decalage-x>` définit la distance horizontale ; une valeur négative place l'ombre à gauche du texte. `<decalage-y>` définit la distance verticale ; une valeur négative place l'ombre au-dessus du texte. Si les deux valeurs sont à `0`, l'ombre sera placée exactement derrière le texte, bien qu'elle puisse être partiellement visible du fait de l'effet du `<rayon-de-flou>`).
- \<rayon-de-flou>
  - : Optionnel. C'est une valeur {{cssxref("&lt;length&gt;")}}). Plus la valeur sera élevée, plus le flou sera important ; l'ombre deviendra plus large et plus légère. Si non utilisée, elle a pour défaut `0`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ombre simple

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample('Ombre_simple', '660px', '90px')}}

### Ombres multiples

```css
.white-text-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
    serif;
}
```

```html
<p class="white-text-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore.
</p>
```

{{EmbedLiveSample('Ombres_multiples', '660px', '170px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Text Shadow Generator](https://cssgenerator.org/text-shadow-css-generator.html) - Un générateur CSS d'ombre de texte interactif
- {{cssxref("box-shadow")}}
- Le type de données {{cssxref("&lt;color&gt;")}} (pour spécifier la couleur d'ombre)
- [Appliquer des couleurs sur des éléments HTML](/fr/docs/Web/HTML/Applying_color)
