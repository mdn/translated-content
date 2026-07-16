---
title: Fonction CSS `calc()`
short-title: calc()
slug: Web/CSS/Reference/Values/calc
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`calc()`** permet d'effectuer des calculs lors de la définition des valeurs des propriétés CSS. Elle peut être utilisée avec les valeurs {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;integer&gt;")}} et {{CSSxRef("color_value", "&lt;color-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: calc()")}}

```css interactive-example-choice
width: calc(10px + 100px);
```

```css interactive-example-choice
width: calc(100% - 30px);
```

```css interactive-example-choice
width: calc(2em * 5);
```

```css interactive-example-choice
width: calc(var(--variable-width) + 20px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Changez ma largeur.</div>
</section>
```

```css interactive-example
:root {
  --variable-width: 100px;
}

#example-element {
  border: 10px solid black;
  padding: 10px;
}
```

## Syntaxe

```css
/* calc(expression) */
calc(100% - 80px)

/* Argument avec une fonction CSS */
calc(100px * sin(pi / 2))

/* Argument contenant une variable */
calc(var(--hue) + 180)

/* Argument contenant des canaux de couleur dans des couleurs relatives */
lch(from aquamarine l c calc(h + 180))
```

La fonction `calc()` prend un seul argument comme paramètre, et le résultat de l'expression est utilisé comme valeur pour une propriété CSS. Dans cet argument, les {{Glossary("operand", "opérandes")}} peuvent être combinés en utilisant les {{Glossary("operator", "opérateurs")}} listés ci-dessous. Lorsque l'expression contient plusieurs opérandes, `calc()` utilise les règles standard de [priorité des opérateurs](/fr/docs/Learn_web_development/Core/Scripting/Math#priorité_des_opérateurs_précédence)&nbsp;:

- `+`
  - : Additionne les opérandes définies.
- `-`
  - : Soustrait le deuxième opérande du premier opérande.
- `*`
  - : Multiplie les opérandes définies.
- `/`
  - : Divise l'opérande de gauche (dividende) par l'opérande de droite (diviseur).

Tous les opérandes, à l'exception de ceux de type {{CSSxRef("&lt;number&gt;")}}, doivent être suivis d'une unité appropriée, telle que `px`, `em` ou `%`. Vous pouvez utiliser une unité différente pour chaque opérande dans votre expression. Vous pouvez également utiliser des parenthèses pour établir l'ordre des calculs si nécessaire.

## Description

Il y a quelques points à noter concernant `calc()`, qui sont détaillés dans les sections ci-dessous.

### Valeurs résultantes

La fonction `calc()` doit se substituer à une valeur CSS complète de l'un des types suivants&nbsp;:

- {{CSSxRef("&lt;length&gt;")}}
- {{CSSxRef("&lt;frequency&gt;")}}
- {{CSSxRef("&lt;angle&gt;")}}
- {{CSSxRef("&lt;time&gt;")}}
- {{CSSxRef("flex_value", "&lt;flex&gt;")}}
- {{CSSxRef("&lt;resolution&gt;")}}
- {{CSSxRef("&lt;percentage&gt;")}}
- {{CSSxRef("&lt;number&gt;")}}
- {{CSSxRef("&lt;integer&gt;")}}
- Un des types mixtes comme {{CSSxRef("&lt;length-percentage&gt;")}}

`calc()` ne peut pas seulement remplacer la partie numérique des valeurs en pourcentage, des valeurs de longueur, etc., sans également remplacer l'unité qui suit. Par exemple, `calc(100 / 4)%` est invalide, tandis que `calc(100% / 4)` est valide.

La valeur résultante de `calc()` doit être compatible avec le contexte dans lequel elle est utilisée. Par exemple, `margin: calc(1px + 2px)` est valide, mais `margin: calc(1 + 2)` ne l'est pas&nbsp;: cela équivaut à définir `margin: 3`, ce qui ignore la propriété.

Lorsque qu'un entier ({{CSSxRef("&lt;integer&gt;")}}) est attendu, l'expression `calc()` peut également évaluer un nombre (`<number>`), qui est arrondi à l'entier le plus proche. Ainsi, `calc(1.4)` donne une valeur de `1`. Si la partie fractionnaire de la valeur est exactement `0.5`, la valeur est arrondie vers l'infini positif. Par exemple, `calc(1.5)` donne une valeur de `2`, tandis que `calc(-1.5)` est arrondi à `-1`.

`calc()` effectue des calculs en virgule flottante selon la norme IEEE-754, ce qui entraîne certaines considérations concernant les valeurs `infinity` et `NaN`. Pour plus de détails sur la façon dont les constantes sont sérialisées, consultez la page {{CSSxRef("calc-keyword")}}.

### Considérations relatives à la saisie

- `calc()` ne peut pas effectuer de calculs sur des [valeurs de taille intrinsèque](/fr/docs/Glossary/Intrinsic_Size) telles que {{CSSxRef("width#auto", "auto")}} et {{CSSxRef("fit-content")}}. Utilisez plutôt la fonction {{CSSxRef("calc-size()")}}.
- Les opérateurs `*` et `/` ne nécessitent pas d'espaces, mais il est recommandé d'en ajouter pour des raisons de cohérence.
- Il est permis d'imbriquer des fonctions `calc()`, auquel cas les fonctions internes sont traitées comme de simples parenthèses.
- Les expressions mathématiques impliquant des pourcentages pour les largeurs et hauteurs des colonnes de tableau, des groupes de colonnes de tableau, des lignes de tableau, des groupes de lignes de tableau et des cellules de tableau dans les tableaux à disposition automatique et fixe _peuvent_ être traitées comme si `auto` était défini.
- Voir {{CSSxRef("&lt;calc-sum&gt;")}} pour plus d'informations sur la syntaxe des expressions `+` et `-`.

### Arithmétique typée CSS

Lors de l'utilisation de `calc()` pour multiplier des valeurs, en utilisant l'opérateur `*`, une seule valeur peut contenir une unité. Les calculs comme `200px * 4px` ne sont pas pris en charge, car 800px<sup>2</sup> n'a pas de sens en CSS.

Inversement, `200px / 4px` se résout à `50`, ce qui a du sens en CSS. Par conséquent, lors de l'utilisation de la fonction `calc()` pour diviser des nombres, en utilisant l'opérateur `/`, [les navigateurs compatibles](#compatibilité_des_navigateurs) permettent des unités des deux côtés de l'opérande, à condition qu'elles soient du même type de données. Par exemple, `100vw / 1px` est valide et donne une valeur sans unité.

Le quotient peut ensuite être utilisé dans les valeurs des propriétés ou des fonctions qui acceptent un nombre ({{CSSxRef("&lt;number&gt;")}}) comme valeur ou paramètre, ou converti en un type de données différent en le multipliant par une valeur typée.

Pour une explication complète de l'arithmétique typée en CSS, ainsi que des exemples, consultez [Utilisation de l'arithmétique typée CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic).

### Prise en charge du calcul des canaux de couleur dans les couleurs relatives

La fonction `calc()` peut être utilisée pour manipuler directement les canaux de couleur dans le contexte des [couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors). Cela permet des ajustements dynamiques des canaux de couleur dans des modèles de couleur tels que {{CSSxRef("color_value/rgb", "rgb()")}}, {{CSSxRef("color_value/hsl", "hsl()")}} et {{CSSxRef("color_value/lch", "lch()")}}.

La syntaxe des couleurs relatives définit plusieurs mots-clés de canal de couleur, chacun représentant la valeur du canal de couleur en tant que nombre ({{CSSxRef("&lt;number&gt;")}}) (voir [Les valeurs des canaux se résolvent en valeurs `<number>`](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors#valeurs_des_canaux_converties_en_valeurs_number) pour plus d'informations). La fonction `calc()` peut utiliser ces mots-clés de canal de couleur pour effectuer des ajustements dynamiques sur les canaux de couleur, par exemple, `calc(r + 10)`.

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Lorsque `calc()` est utilisé pour contrôler la taille du texte, assurez-vous qu'une des valeurs inclut une [unité de longueur relative](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives), par exemple&nbsp;:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Cela garantit que la taille du texte s'adaptera si la page est zoomée.

- [Comprendre le WCAG sur MDN, Explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.4&nbsp;: Redimensionner le texte | WAI | W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Exemples

### Positionner un objet sur l'écran avec une marge

`calc()` rend le positionnement des objets facile en définissant une marge. Dans cet exemple, le CSS crée une bannière qui s'étend sur toute la fenêtre, avec un espace de 40 pixels entre chaque bout de la bannière et les bords de la fenêtre&nbsp;:

```css
.banniere {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banniere">C'est une bannière&nbsp;!</div>
```

{{EmbedLiveSample("Positionner un objet sur l'écran avec une marge", "100%", 60)}}

### Dimensionner automatiquement les champs d'un formulaire pour s'ajuster au conteneur

Un autre cas d'utilisation de `calc()` est d'aider à s'assurer que les champs d'un formulaire s'adaptent à l'espace disponible, sans s'étendre au-delà de la bordure du conteneur, tout en conservant une marge appropriée.

Regardons un peu le CSS&nbsp;:

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#boite-formulaire {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

Dans ce cas, le formulaire est lui-même défini pour utiliser un sixième de la taille disponible de la fenêtre. Ensuite, pour s'assurer que les champs gardent une taille appropriée, nous utilisons `calc()` pour définir qu'ils doivent être de la largeur de leur conteneur moins 1em. Enfin, le HTML suivant utilise le CSS défini&nbsp;:

```html
<form>
  <div id="boite-formulaire">
    <label for="misc">Tapez quelque chose&nbsp;:</label>
    <input type="text" id="misc" name="misc" />
  </div>
</form>
```

{{EmbedLiveSample("Dimensionner automatiquement les champs d'un formulaire pour s'ajuster au conteneur", "100%", 80)}}

### Imbriquer plusieurs `calc()` grâce aux variables CSS

Prenons la feuille de style suivante&nbsp;:

```css
.toto {
  --largeurA: 100px;
  --largeurB: calc(var(--largeurA) / 2);
  --largeurC: calc(var(--largeurB) / 2);
  width: var(--largeurC);
}
```

Une fois que toutes les variables sont développées, `--largeurC` a la valeur `calc(calc(100px / 2) / 2)`. Lorsqu'elle est affectée à la propriété `width` de `.toto`, toutes les fonctions `calc()` imbriquées (peu importe leur profondeur) sont aplaties en simples parenthèses. Par conséquent, la valeur de la propriété `width` est finalement `calc((100px / 2) / 2)`, ce qui équivaut à `25px`. En résumé, un `calc()` à l'intérieur d'un autre `calc()` est identique à l'utilisation de parenthèses.

### Ajuster les canaux de couleur dans les couleurs relatives

La fonction `calc()` peut être utilisée pour ajuster les canaux de couleur individuels dans les [couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors) sans avoir besoin de stocker les valeurs des canaux de couleur en tant que variables.

Dans l'exemple ci-dessous, le premier paragraphe utilise une couleur nommée ({{CSSxRef("&lt;named-color&gt;")}}).
Dans les paragraphes qui suivent, `calc()` est utilisé avec les fonctions {{CSSxRef("color_value/rgb", "rgb()")}} et {{CSSxRef("color_value/hsl", "hsl()")}} pour ajuster les valeurs de chaque canal de couleur par rapport à la couleur nommée d'origine.

```html
<p class="originale">Couleur originale du texte en rebeccapurple</p>
<p class="teinte-augmentee">Teinte augmentée de 80</p>
<p class="luminosite-augmentee">Luminosité augmentée de 20</p>
<p class="luminosite-diminuee">Luminosité diminuée de 10</p>
```

```css hidden
p {
  font-family: monospace;
  font-size: 16px;
}
```

```css
.originale {
  color: rebeccapurple;
}

.teinte-augmentee {
  color: lch(from rebeccapurple l c calc(h + 80));
}

.luminosite-augmentee {
  color: lch(from rebeccapurple calc(l + 20) c h);
}

.luminosite-diminuee {
  color: lch(from rebeccapurple calc(l - 10) c h);
}
```

{{EmbedLiveSample("Ajuster les canaux de couleur dans les couleurs relatives", 700, 300)}}

Pour un autre exemple d'utilisation de la fonction `calc()` pour dériver des couleurs relatives, voir la section [Utiliser les fonctions mathématiques](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors#utiliser_les_fonctions_mathématiques) de la page _Utiliser les couleurs relatives_.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;calc-sum&gt;")}}
- Le type de donnée {{CSSxRef("&lt;calc-keyword&gt;")}}
- [Les fonctions CSS](/fr/docs/Web/CSS/Reference/Values/Functions)
- [Un guide complet sur `calc()` en CSS <sup>(angl.)</sup>](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
