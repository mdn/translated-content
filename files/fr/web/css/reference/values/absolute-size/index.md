---
title: <absolute-size>
slug: Web/CSS/Reference/Values/absolute-size
original_slug: Web/CSS/absolute-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<absolute-size>`** décrit les mots-clés de taille absolue. Ce type de donnée est utilisé dans les propriétés abrégées {{CSSxRef("font")}} et {{CSSxRef("font-size")}}.

Les mots-clés de taille de police correspondent à l'attribut HTML obsolète `size`. Voir la section [Attribut HTML size](#attribut_html_size) ci-dessous.

## Syntaxe

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### Valeurs

Le type de donnée `<absolute-size>` est défini à l'aide d'un mot-clé choisi dans la liste ci-dessous.

- `xx-small`
  - : Une taille absolue équivalente à 60&nbsp;% de `medium`. Correspond à l'attribut obsolète `size="1"`.

- `x-small`
  - : Une taille absolue équivalente à 75&nbsp;% de `medium`.

- `small`
  - : Une taille absolue équivalente à 89&nbsp;% de `medium`. Correspond à l'attribut obsolète `size="2"`.

- `medium`
  - : Taille de police préférée de l'utilisateur·ice. Cette valeur sert de référence centrale. Correspond à `size="3"`.

- `large`
  - : Une taille absolue 20&nbsp;% plus grande que `medium`. Correspond à l'attribut obsolète `size="4"`.

- `x-large`
  - : Une taille absolue 50&nbsp;% plus grande que `medium`. Correspond à l'attribut obsolète `size="5"`.

- `xx-large`
  - : Une taille absolue deux fois plus grande que `medium`. Correspond à l'attribut obsolète `size="6"`.

- `xxx-large`
  - : Une taille absolue trois fois plus grande que `medium`. Correspond à l'attribut obsolète `size="7"`.

## Description

Chaque mot-clé `<absolute-size>` est dimensionné par rapport à la taille `medium` et aux caractéristiques propres à chaque appareil, comme la résolution. Les agents utilisateurs maintiennent une table de tailles de police pour chaque police, les mots-clés `<absolute-size>` servant d'index.

Dans CSS1 (1996), le facteur d'échelle entre deux mots-clés adjacents était de 1,5, ce qui était trop élevé. Dans CSS2 (1998), ce facteur était de 1,2, ce qui posait problème pour les petites valeurs. Comme un ratio fixe entre les mots-clés de taille absolue s'est révélé problématique, il n'y a plus de recommandation de ratio fixe. La seule recommandation pour préserver la lisibilité est que la plus petite taille de police ne doit pas être inférieure à `9px`.

Pour chaque mot-clé `<absolute-size>`, le tableau suivant indique le facteur d'échelle, la correspondance avec les titres [`<h1>` à `<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) et la correspondance avec l'attribut HTML [size](#attribut_html_size) obsolète.

| `<absolute-size>`    | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| -------------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| facteur d'échelle    | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| Titres HTML          | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| Attribut HTML `size` | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### Attribut HTML size

L'attribut `size` permettant de définir la taille de police en HTML est obsolète. Sa valeur était soit un entier entre `1` et `7`, soit une valeur relative. Les valeurs relatives étaient un entier précédé de `+` ou `-` pour augmenter ou diminuer la taille de la police. Une valeur de `+1` augmentait la taille d'un cran, `-2` la diminuait de deux crans, la valeur calculée étant limitée à un minimum de `1` et un maximum de `7`.

## Exemples

### Comparaison des mots-clés

```html
<ul>
  <li class="xx-small">font-size: xx-small;</li>
  <li class="x-small">font-size: x-small;</li>
  <li class="small">font-size: small;</li>
  <li class="medium">font-size: medium;</li>
  <li class="large">font-size: large;</li>
  <li class="x-large">font-size: x-large;</li>
  <li class="xx-large">font-size: xx-large;</li>
  <li class="xxx-large">font-size: xxx-large;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.xx-small {
  font-size: xx-small;
}
.x-small {
  font-size: x-small;
}
.small {
  font-size: small;
}
.medium {
  font-size: medium;
}
.large {
  font-size: large;
}
.x-large {
  font-size: x-large;
}
.xx-large {
  font-size: xx-large;
}
.xxx-large {
  font-size: xxx-large;
}
```

#### Résultat

{{EmbedLiveSample('comparaison_des_mots-clés', '100%', 400)}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le type de donnée CSS {{CSSxRef("relative-size")}}
- Les propriétés CSS {{CSSxRef("font")}} et {{CSSxRef("font-size")}}
- [Le module CSS fonts](/fr/docs/Web/CSS/Guides/Fonts)
