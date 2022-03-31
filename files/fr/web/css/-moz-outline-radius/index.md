---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-outline-radius
---
{{Non-standard_header}}{{CSSRef}}

Dans les applications Mozilla (ex. Firefox), la propriété **`-moz-outline-radius`** peut être utilisée afin que le contour dessiné autour d'un élément ait des angles arrondis. Le contour ({{cssxref("outline")}}) est dessiné autour des éléments pour les faire ressortir.

```css
/* Une seule valeur */
-moz-outline-radius: 25px;

/* Deux valeurs */
-moz-outline-radius: 25px 1em;

/* Trois valeurs */
-moz-outline-radius: 25px 1em 12%;

/* Quatre valeurs */
-moz-outline-radius: 25px 1em 12% 4mm;

/* Valeurs globales */
-moz-outline-radius: inherit;
-moz-outline-radius: initial;
-moz-outline-radius: unset;
```

La propriété `-moz-outline-radius` est une propriété raccourcie qui permet de définir les quatre propriétés destinées à chacun des angles {{cssxref("-moz-outline-radius-topleft")}}, {{cssxref("-moz-outline-radius-topright")}}, {{cssxref("-moz-outline-radius-bottomright")}} et {{cssxref("-moz-outline-radius-bottomleft")}}.

## Syntaxe

### Valeurs

> **Note :** Les valeurs pour les coefficients elliptiques et les valeurs de type `<percentage>` respectent la même syntaxe que pour {{cssxref("border-radius")}}.

Une, deux, trois ou quatre valeurs `<outline-radius>` dont chacune peut être de type :

- `<length>`
  - : Voir {{cssxref("&lt;length&gt;")}} pour les valeurs possibles.
- `<percentage>`
  - : Voir {{cssxref("&lt;percentage&gt;")}}, voir {{cssxref("border-radius")}} pour plus de détails sur la proportionnalité des pourcentages.

### Gestion des valeurs multiples :

- Si une seule valeur est définie, celle-ci s'applique pour les 4 angles.
- Si deux valeurs sont fournies, la première s'applique aux angles en haut à gauche et en bas à droite et la seconde s'applique aux angles en haut à droite et en bas à gauche.
- Si trois valeurs sont fournies, la première s'applique à l'angle en haut à gauche, la deuxième aux angles en haut à droite et en bas à gauche et la troisième s'applique à l'angle en bas à droite.
- Si quatre valeurs sont fournies, la première s'applique à l'angle en haut à gauche, la deuxième en haut à droite, la troisième en bas à droite et la quatrième en bas à gauche.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple1 {
  border: 1px solid black;
  outline: dotted red;
  -moz-outline-radius: 12% 1em 25px;
}

.exemple2 {
  border: 1px solid black;
  outline: dotted red;
  -moz-outline-radius-topleft: 12%;
  -moz-outline-radius-topright: 1em;
  -moz-outline-radius-bottomright: 35px;
  -moz-outline-radius-bottomleft: 1em;
}
```

### HTML

```html
<p class="exemple1">
  La propriété outline-style en utilisant -moz-outline-radius
</p>
<p class="exemple2">
  Un exemple légèrement plus compliqué avec -moz-outline-radius-xxx
</p>
```

### **Résultat**

{{EmbedLiveSample('Exemples', '200', '200')}}

> **Note :** Cette propriété étant spécifique à Firefox, l'exemple ci-avant ne fonctionnera pas dans un autre navigateur.

## Notes

- Les coins pour lesquels on utilise la valeur `dotted` ou `dashed` sont affichés avec des lignes pleines (cf. {{bug("382721")}}) jusqu'à Firefox 50.
- Cette propriété sera vraisemblablement abandonnée dans les prochaines versions de Gecko (cf. {{bug("593717")}}).

## Spécifications

Cette propriété est une propriété propriétaire liée à Mozilla/Gecko et ne fait partie d'aucune spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-moz-outline-radius")}}
