---
title: Fonction CSS `clamp()`
short-title: clamp()
slug: Web/CSS/Reference/Values/clamp
l10n:
  sourceCommit: 3b8d8c8243e43b9fa9e60c3db35782e149ea0b30
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`clamp()`** permet de ramener (d'écrêter) une valeur entre deux bornes inférieure et supérieure. La fonction utilise trois paramètres&nbsp;: une valeur minimale, une valeur préférée et une valeur maximale autorisée.

{{InteractiveExample("Démonstration CSS&nbsp;: clamp()")}}

```css interactive-example-choice
font-size: clamp(1rem, 2.5vw, 2rem);
```

```css interactive-example-choice
font-size: clamp(1.5rem, 2.5vw, 4rem);
```

```css interactive-example-choice
font-size: clamp(1rem, 10vw, 2rem);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    La taille de la police de ce texte varie en fonction de la taille de la
    police de base de la page, et de la taille de la fenêtre.
  </div>
</section>
```

Notez que l'utilisation de `clamp()` pour les tailles de police, comme dans ces exemples, permet de définir une taille de police qui augmente avec la taille de la fenêtre, mais qui ne descend pas en dessous d'une taille de police minimale ni ne dépasse une taille de police maximale. Cela a le même effet que le code dans [la typographie fluide <sup>(angl.)</sup>](https://css-tricks.com/snippets/css/fluid-typography/) mais en une seule ligne, et sans utiliser de media queries.

## Syntaxe

```css
/* Valeurs statiques */
width: clamp(200px, 40%, 400px);
width: clamp(20rem, 30vw, 70rem);
width: clamp(10vw, 20em, 100vw);

/* Valeurs calculées */
width: clamp(min(10vw, 20rem), 300px, max(90vw, 55rem));
width: clamp(100px, calc(30% / 2rem + 10px), 900px);
```

### Paramètres

La fonction `clamp(min, val, max)` accepte trois expressions séparées par des virgules comme paramètres.

- `min`
  - : La valeur minimale est la plus petite (la plus négative) valeur. Il s'agit de la limite inférieure dans la plage des valeurs autorisées. Si la valeur préférée est inférieure à cette valeur, la valeur minimale est utilisée.

- `val`
  - : La valeur préférée est l'expression dont la valeur est utilisée tant que le résultat se situe entre les valeurs minimale et maximale.

- `max`
  - : La valeur maximale est la plus grande (la plus positive) expression à laquelle la valeur de la propriété est attribuée si la valeur préférée est supérieure à cette limite supérieure.

Les expressions peuvent être des fonctions mathématiques (voir {{CSSxRef("calc()")}} pour plus d'informations), des valeurs littérales, d'autres expressions qui évaluent à un type d'argument valide (comme {{CSSxRef("&lt;length&gt;")}}), ou des fonctions {{CSSxRef("min()")}} et {{CSSxRef("max()")}} imbriquées. Pour les expressions mathématiques, vous pouvez utiliser l'addition, la soustraction, la multiplication et la division sans utiliser la fonction `calc()` elle-même. Vous pouvez également utiliser des parenthèses pour établir l'ordre des calculs si nécessaire.

Vous pouvez utiliser différentes unités pour chaque valeur dans vos expressions et différentes unités dans toute fonction mathématique composant l'un des arguments.

Gardez à l'esprit les aspects suivants lors de l'utilisation de la fonction&nbsp;:

- Les expressions impliquant des pourcentages pour les largeurs et hauteurs des colonnes de tableau, des groupes de colonnes de tableau, des lignes de tableau, des groupes de lignes de tableau et des cellules de tableau dans des tableaux à disposition automatique et fixe _peuvent_ être traitées comme si `auto` avait été défini.
- Il est permis d'imbriquer les fonctions `max()` et `min()` en tant que valeurs d'expression, auquel cas les fonctions internes sont traitées comme des parenthèses de base. Les expressions sont des expressions mathématiques complètes, vous pouvez donc utiliser l'addition, la soustraction, la multiplication et la division directement sans utiliser la fonction `calc()` elle-même.
- L'expression peut être des valeurs combinant les opérateurs d'addition ( `+` ), de soustraction ( `-` ), de multiplication ( `*` ) et de division ( `/` ), en utilisant les règles de priorité des opérateurs standard. Assurez-vous de mettre un espace de chaque côté des opérandes `+` et `-`. Les opérandes de l'expression peuvent être n'importe quelle valeur de syntaxe {{CSSxRef("&lt;length&gt;")}}. Vous pouvez utiliser différentes unités pour chaque valeur dans votre expression. Vous pouvez également utiliser des parenthèses pour établir l'ordre des calculs si nécessaire.
- Souvent, vous voulez utiliser {{CSSxRef("min()")}} et {{CSSxRef("max()")}} dans une fonction `clamp()`.

### Valeur de retour

`clamp(MIN, VAL, MAX)` est résolu comme `max(MIN, min(VAL, MAX))`.

En fonction des paramètres fournis, la fonction retourne {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;integer&gt;")}}.

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Lorsque `clamp()` est utilisé pour contrôler la taille du texte, assurez-vous que la valeur maximale autorisée est une [unité de longueur relative](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives) qui n'est pas inférieure à deux fois la valeur minimale autorisée, par exemple&nbsp;

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

Cela permet de s'assurer que la taille du texte peut augmenter d'au moins 200 % si la page est zoomée.

- [Comprendre le WCAG sur MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.4&nbsp;: Redimensionner le texte | WAI | W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

## Exemples

### Comparer `min()`, `max()` et `clamp()`

Dans cet exemple, nous avons une page web qui utilise {{CSSxRef("min()")}}, {{CSSxRef("max()")}}, et `clamp()` pour définir des tailles de manière réactive.

L'exemple ajuste les tailles des éléments de la page de trois manières&nbsp;:

- la longueur des lignes de texte
- la taille de la police des paragraphes
- la taille de la police des titres

Dans les trois cas, la page utilise une combinaison d'unités relatives à la fenêtre ([`vw`](/fr/docs/Web/CSS/Reference/Values/length#vw) et {{CSSxRef("&lt;percentage&gt;")}}), pour définir une taille qui varie en fonction de la largeur de la fenêtre, et d'une valeur qui n'est pas relative à la fenêtre ([`rem`](/fr/docs/Web/CSS/Reference/Values/length#rem) et [`px`](/fr/docs/Web/CSS/Reference/Values/length#px)) pour mettre en œuvre des tailles minimales et/ou maximales.

L'exemple est disponible à l'adresse <https://mdn.github.io/css-examples/min-max-clamp/>. Ouvrez-le dans une nouvelle fenêtre et essayez d'ajuster la largeur de la fenêtre.

La **longueur des lignes** (contrôlée par la {{CSSxRef("width")}} de l'élément HTML {{HTMLElement("body")}}) augmente à mesure que la largeur de la fenêtre augmente, mais seulement jusqu'à un certain point (`1000px`), et au-delà de ce point, elle n'augmente plus. Nous utilisons `min()` pour définir une **longueur de ligne maximale**&nbsp;: elle peut être inférieure à `1000px`, mais ne dépasse pas cette valeur. Cela est utile car les lignes longues sont plus difficiles à lire, donc nous voulons souvent limiter la longueur d'une ligne. Pour y parvenir, nous utilisons `min(1000px, calc(70% + 100px))`&nbsp;: lorsque le résultat du calcul basé sur le pourcentage dépasse `1000px`, nous passons à la valeur fixe de `1000px`.

La **taille de la police des paragraphes** (contrôlée par la {{CSSxRef("font-size")}} de l'élément HTML {{HTMLElement("p")}}) diminue à mesure que la fenêtre se rétrécit, mais seulement jusqu'à un certain point, et au-delà de ce point (le point où `1.2vw` est inférieur à `1.2rem`), elle ne diminue plus&nbsp;: elle reste à `1.2rem`. Nous utilisons `max()` pour définir une **taille de police minimale**&nbsp;: la police peut dépasser `1.2rem` mais ne descend jamais en dessous. Cela est utile car un texte vraiment petit est difficile à lire. Pour y parvenir, nous utilisons `max(1.2rem, 1.2vw)`. Cela signifie que la `font-size` est définie à `1.2rem`, sauf si la valeur calculée de `1.2vw` est supérieure à celle de `1.2rem`, auquel cas elle est définie à `1.2vw`.

La **taille de la police des titres** (contrôlée par la {{CSSxRef("font-size")}} de l'élément HTML `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`) a une valeur relative à la fenêtre avec à la fois un seuil maximum et un seuil minimum. Pour y parvenir, nous utilisons `clamp(1.8rem, 2.5vw, 2.8rem)`. La valeur relative à la fenêtre est `2.5vw`, mais elle est limitée entre `1.8rem` et `2.8rem`, donc&nbsp;:

- si la valeur calculée de `2.5vw` est inférieure à `1.8rem`, alors `1.8rem` est utilisée
- si la valeur calculée de `2.5vw` est supérieure à `2.8rem`, alors `2.8rem` est utilisée

Cela empêche le texte des titres de devenir trop petit dans une fenêtre très étroite, ou trop grand dans une fenêtre très large.

#### HTML

```html
<h1>Test basique réactif</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci,
  eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat
  eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula.
  Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis,
  libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis
  lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id
  risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac
  imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit.
  Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec
  vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum.
  Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget
  nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.
</p>

<p>
  Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu
  facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra
  quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu
  ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis
  quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem.
</p>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: min(1000px, calc(70% + 100px));
}

h1 {
  letter-spacing: 2px;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}

p {
  line-height: 1.5;
  font-size: max(1.2rem, 1.2vw);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("calc()")}}
- La fonction {{CSSxRef("max()")}}
- La fonction {{CSSxRef("min()")}}
- [Apprendre&nbsp;: Valeurs et unités CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
