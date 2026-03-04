---
title: font-size-adjust
slug: Web/CSS/Reference/Properties/font-size-adjust
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-size-adjust`** permet de modifier la taille des lettres minuscules par rapport à celle des lettres majuscules, ce qui définit la {{CSSxRef("font-size")}} globale. Cette propriété est utile lorsque la fonte de repli peut être utilisée.

La lisibilité peut devenir un problème lorsque la première {{CSSxRef("font-family")}} n'est pas disponible et que la fonte de repli qui la remplace possède une valeur d'aspect très différente (hauteur des lettres minuscules divisée par la taille de la fonte). La lisibilité des fontes, en particulier pour les petites tailles, dépend davantage de la taille des lettres minuscules que de celle des lettres majuscules. La propriété `font-size-adjust` est utile pour ajuster la taille de la fonte de repli afin de conserver une valeur d'aspect cohérente entre les fontes, garantissant ainsi une apparence similaire du texte quel que soit la fonte utilisée.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-size-adjust: none;

/* Une valeur : <number> ou from-font */
font-size-adjust: 0.5;
font-size-adjust: from-font;

/* Deux valeurs */
font-size-adjust: ex-height 0.5;
font-size-adjust: ch-width from-font;

/* Valeurs globales */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: revert;
font-size-adjust: revert-layer;
font-size-adjust: unset;
```

### Valeurs

La propriété `font-size-adjust` accepte comme valeur le mot-clé `none`, une valeur (`<number>` ou `from-font`), ou deux valeurs (`<font-metric>` et soit `<number>` soit `from-font`).

- `none`
  - : Aucun ajustement n'est appliqué à la valeur de `font-size` pour la fonte de repli.
- `<font-metric>` {{Optional_Inline}}
  - : Définit la métrique de fonte principale à utiliser pour ajuster la taille de la fonte de repli. Ce paramètre accepte l'un des mots-clés listés ci-dessous. Il s'agit d'un paramètre optionnel, et `ex-height` est utilisé si aucun `<font-metric>` n'est défini.
    - `ex-height`
      - : Utilise le ratio de la hauteur d'x (hauteur de la lettre minuscule «&nbsp;x&nbsp;» dans une fonte) à la taille de la fonte (valeur d'aspect) pour ajuster la taille de la fonte de repli. Cette valeur de mot-clé est utilisée pour normaliser les lettres minuscules entre les fontes.
    - `cap-height`
      - : Utilise le ratio de la hauteur des capitales (hauteur des lettres majuscules) par rapport à la taille de la fonte pour ajuster la taille de la fonte de repli. Cette valeur de mot-clé sert à normaliser les lettres majuscules entre les fontes.
    - `ch-width`
      - : Utilise le ratio de la largeur d'approche (espace horizontal occupé par un caractère dans une fonte) du caractère «&nbsp;0&nbsp;» (ZÉRO, U+0030) par rapport à la taille de la fonte. Cette valeur de mot-clé sert à normaliser la chasse étroite horizontale des fontes.
    - `ic-width`
      - : Utilise le ratio de la largeur d'approche du caractère «&nbsp;水&nbsp;» (idéogramme d'eau CJC, U+6C34) par rapport à la taille de la fonte. Cette valeur de mot-clé sert à normaliser la chasse large horizontale des fontes, en particulier celles qui incluent des caractères CJC (chinois, japonais, coréen).
    - `ic-height`
      - : Utilise le ratio de la hauteur d'approche (espace vertical occupé par un caractère dans une fonte) du caractère «&nbsp;水&nbsp;» (idéogramme d'eau CJC, U+6C34) par rapport à la taille de la fonte. Cette valeur de mot-clé sert à normaliser la chasse large verticale des fontes, en particulier celles qui incluent des caractères CJC.

- {{CSSxRef("&lt;number&gt;")}}
  - : Ajuste la taille de la fonte utilisée selon le `<font-metric>` défini. Lorsqu'aucun `<font-metric>` n'est défini (dans ce cas, la valeur par défaut `ex-height` est utilisée), la valeur `<number>` ajuste la taille de la fonte de repli afin que la hauteur d'x soit le multiple indiqué de la taille de la fonte. Cette valeur doit généralement correspondre à la valeur d'aspect (ratio de la hauteur d'x à la taille de la fonte) de la première fonte choisie. Cela signifie que la première fonte, lorsqu'elle est disponible, s'affichera de façon cohérente dans tous les navigateurs, qu'ils prennent en charge ou non `font-size-adjust`.

    Lorsqu'une valeur `<font-metric>` est définie, la valeur `<number>` ajuste la taille de la fonte selon le `<font-metric>` choisi afin de conserver une apparence cohérente pour la métrique de fonte spécifiée entre différentes fontes.

    La valeur `<number>` accepte tout nombre de `0` à l'infini. `0` donne un texte de hauteur nulle (c'est-à-dire que le texte est caché). Les valeurs négatives sont invalides.

- `from-font`
  - : Utilise la valeur `<number>` pour le `<font-metric>` défini à partir de la première fonte disponible.

## Description

Pour garantir la compatibilité avec les navigateurs qui ne prennent pas en charge `font-size-adjust`, cette propriété est définie comme un multiplicateur numérique de la propriété {{CSSxRef("font-size")}}. Ce nombre doit généralement correspondre à la valeur d'aspect de la première fonte choisie.

> [!NOTE]
> Si le `<font-metric>` défini a été redéfini dans {{CSSxRef("@font-face")}}, par exemple en utilisant le descripteur [`size-adjust`](/fr/docs/Web/CSS/Reference/At-rules/@font-face/size-adjust), alors la métrique redéfinie sera utilisée dans le calcul de `font-size-adjust`. Cela signifie que lorsque `font-size-adjust` et `size-adjust` sont appliqués ensemble, `size-adjust` n'a aucun effet.

La taille de fonte ajustée est calculée à l'aide de la formule `u  =  ( m / m′ ) s`, où&nbsp;:

- `m` est le ratio du `<font-metric>` défini à la taille de la première fonte choisie.

- `m′` est le ratio du `<font-metric>` correspondant à la taille de la fonte de repli.

- `s` est la valeur de la propriété `font-size`.

- `u` est la nouvelle taille de fonte ajustée pour la fonte de repli.

Prenons cet exemple pour voir comment la taille de fonte ajustée est calculée. Une première fonte choisie a une `font-size` de `12px` (`s`), et le ratio de `cap-height` à la taille de la fonte est de `0.20` (`m`). Le ratio de `cap-height` à la taille de la fonte dans la fonte de repli est de `0.15` (`m′`). La valeur de `font-size-adjust` a été définie à `cap-height 0.20`. Si la fonte principale n'est pas disponible, la taille de fonte ajustée de la fonte de repli sera calculée à `16px` (`(0.20 / 0.15) * 12`). Cela garantit que la `cap-height` de la fonte de repli est similaire à celle de la première fonte choisie lors de l'affichage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Normaliser la taille de la fonte par les lettres minuscules et majuscules

Cet exemple montre comment la propriété `font-size-adjust` peut être utilisée pour conserver la même valeur d'aspect entre les fontes. La fonte Verdana possède une valeur d'aspect relativement élevée de `0.545`, ce qui signifie que les lettres minuscules sont relativement hautes par rapport aux lettres majuscules. Cela rend le texte lisible même avec de petites tailles de fonte. Cependant, la fonte Times a une valeur d'aspect plus faible de `0.447`, donc le texte est moins lisible en petite taille. Si Verdana est la première fonte choisie et Times la fonte de repli, définir la propriété `font-size-adjust` permet de conserver la même valeur d'aspect dans Times. Ainsi, si la fonte de repli est Times, le texte gardera un niveau de lisibilité similaire à celui qu'il aurait avec Verdana.

De même, le ratio de la hauteur des majuscules à la taille de la fonte dans Verdana est de `0.73` et dans Times de `0.66`. Lorsque la propriété `font-size-adjust` est appliquée à Times pour ajuster la hauteur des majuscules afin de correspondre au ratio de Verdana, la fonte Times s'affiche avec une taille ajustée ((0.73 / 0.66) \* 14) `15.48px`.

```html
<p class="verdana">
  A&nbsp;: Ce texte utilise la fonte Verdana (14px), qui possède des lettres
  minuscules relativement grandes.
</p>
<p class="times">
  B&nbsp;: Ce texte utilise la fonte Times (14px), qui est difficile à lire en
  petite taille.
</p>
<p class="times adj-times-ex-height">
  C&nbsp;: Ce texte en Times 14px est ajusté pour avoir la même valeur d'aspect
  que la fonte Verdana, ainsi les lettres minuscules sont normalisées entre les
  deux fontes.
</p>
<p class="times adj-times-cap-height">
  D&nbsp;: Ce texte en Times 14px est ajusté pour avoir le même ratio de hauteur
  des majuscules à la taille de la fonte que Verdana, ainsi les lettres
  majuscules sont normalisées entre les deux fontes.
</p>
```

```css
.times {
  font-family: "Times", serif;
  font-size: 14px;
}

.verdana {
  font-family: "Verdana", sans-serif;
  font-size: 14px;
}

.adj-times-ex-height {
  font-size-adjust: 0.545;
}

.adj-times-cap-height {
  font-size-adjust: cap-height 0.73;
}
```

{{EmbedLiveSample("Normaliser la taille de la fonte par les lettres minuscules et majuscules", 500, 200)}}

Sans `font-size-adjust` dans `B`, le passage de la fonte Verdana à la fonte Times peut entraîner une baisse notable de la lisibilité en raison de sa valeur d'aspect plus faible.
Dans `C`, remarquez qu'une seule valeur est définie pour la propriété `font-size-adjust`, donc la valeur par défaut `<font-metric>` `ex-height` est utilisée. `D` montre à quoi ressemblerait la fonte par rapport à `A` si la hauteur des lettres majuscules était ajustée.

### Déterminer la valeur d'aspect d'une fonte

Pour une fonte donnée, le même contenu dans deux éléments HTML {{HTMLElement("span")}} côte à côte peut être utilisé pour déterminer la valeur d'aspect de la fonte. Si la même taille de fonte est utilisée pour le contenu des deux spans, les spans seront alignés lorsque la valeur de `font-size-adjust` dans l'un des spans est correcte pour la fonte donnée.

Dans l'exemple ci-dessous, il y a trois paires d'éléments `<span>` côte à côte, chacun contenant la lettre «&nbsp;b&nbsp;». L'objectif est d'ajuster la propriété `font-size-adjust` pour le `<span>` de droite dans chaque paire jusqu'à ce que les bordures autour des deux lettres soient alignées. La valeur de `font-size-adjust` obtenue peut être considérée comme la valeur d'aspect de la fonte.

En commençant à `0.6` dans la première paire et en ajustant à `0.5` dans la seconde, on continue d'ajuster la valeur de la propriété `font-size-adjust` jusqu'à ce que les bordures autour des lettres «&nbsp;b&nbsp;» soient parfaitement alignées dans la troisième paire. Dans cet exemple, la valeur d'aspect est déterminée à `0.482`.

```html
<div>
  <p><span>b</span><span class="adjust1">b</span></p>
  0.6
</div>

<div>
  <p><span>b</span><span class="adjust2">b</span></p>
  0.5
</div>

<div>
  <p><span>b</span><span class="adjust3">b</span></p>
  0.482
</div>
```

```css hidden
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  margin: 0 30px 10px 30px;
}
```

```css
body {
  display: flex;
}

div {
  text-align: center;
}

p {
  font-family: "Futura", sans-serif;
  font-size: 50px;
}

span {
  border: solid 1px red;
}

.adjust1 {
  font-size-adjust: 0.6;
}

.adjust2 {
  font-size-adjust: 0.5;
}

.adjust3 {
  font-size-adjust: 0.482;
}
```

{{EmbedLiveSample("Déterminer la valeur d'aspect d'une fonte", 500, 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-size")}}
- La propriété {{CSSxRef("font-weight")}}
- Le descripteur {{CSSxRef("@font-face/size-adjust", "size-adjust")}} de la règle `@font-face`
- L'attribut SVG {{SVGAttr("font-size-adjust")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
