---
title: Fonction CSS `type()`
short-title: type()
slug: Web/CSS/Reference/Values/type
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`type()`** permet de définir un type de données particulier et est utilisée par les fonctionnalités CSS suivantes&nbsp;:

- La fonction {{CSSxRef("attr()")}}, pour définir le type de données dans lequel une valeur d'attribut doit être analysée.
- La règle {{CSSxRef("@function")}}, pour définir les types de données autorisés pour les paramètres et les résultats des [fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions).

> [!NOTE]
> La règle {{CSSxRef("@property")}} {{CSSxRef("@property/syntax", "syntax")}} utilise la même syntaxe (`<syntax>`) pour définir les types de données autorisés pour les [propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*), cependant, cela prend toujours la forme d'une chaîne de caractères.

## Syntaxe

```css
/* Une seule valeur */
type(<color>)
type(auto)

/* Le combinateur "|" pour plusieurs types */
type(<length> | <percentage>)

/* Liste de valeurs séparées par des espaces */
type(<color>+)

/* Liste de valeurs séparées par des virgules */
type(<length>#)

/* Plusieurs mots-clés */
type(red | blue | green)

/* Combinaison de type de données et de mot-clé */
type(<percentage> | auto)

/* Valeur de syntaxe universelle */
type(*)
```

### Paramètres

La syntaxe de la fonction `type()` est la suivante&nbsp;:

```plain
type(<syntax>)
```

Le paramètre `<syntax>` est une expression définissant le type de données. Cela peut prendre les formes suivantes&nbsp;:

- `<ident>`
  - : Une valeur de mot-clé CSS, écrite sans chevrons.

- `<syntax-type>`
  - : Un nom de type, écrit entre chevrons, représentant un type de données CSS. Les types de données suivants sont pris en charge&nbsp;:
    - `<angle>`
      - : Accepte toute valeur d'angle ({{CSSxRef("angle")}}) valide.
    - `<color>`
      - : Accepte toute valeur de couleur ({{CSSxRef("&lt;color&gt;")}}) valide.
    - `<custom-ident>`
      - : Accepte toute valeur d'identifiant personnalisé ({{CSSxRef("&lt;custom-ident&gt;")}}) valide.
    - `<image>`
      - : Accepte toute valeur d'image ({{CSSxRef("image")}}) valide.
    - `<integer>`
      - : Accepte toute valeur d'entier ({{CSSxRef("&lt;integer&gt;")}}) valide.
    - `<length>`
      - : Accepte toute valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) valide.
    - `<length-percentage>`
      - : Accepte toute valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou de pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) valide et toute expression {{CSSxRef("calc()")}} combinant des valeurs de `<length>` et `<percentage>`.
    - `<number>`
      - : Accepte toute valeur de nombre ({{CSSxRef("&lt;number&gt;")}}) valide.
    - `<percentage>`
      - : Accepte toute valeur de pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) valide.
    - `<resolution>`
      - : Accepte toute valeur de résolution ({{CSSxRef("resolution")}}) valide.
    - `<string>`
      - : Accepte toute valeur de chaîne de caractères ({{CSSxRef("&lt;string&gt;")}}) valide.
    - `<time>`
      - : Accepte toute valeur de temps ({{CSSxRef("&lt;time&gt;")}}) valide.
    - `<transform-function>`
      - : Accepte toute valeur de fonction de transformation ({{CSSxRef("&lt;transform-function&gt;")}}) valide.
    - `<transform-list>`
      - : Accepte une liste de valeurs de fonction de transformation ({{CSSxRef("&lt;transform-function&gt;")}}) valides. Cela équivaut à `"<transform-function>+"`, et ne peut pas être suivi d'un jeton `+` ou `#`.
    - `<url>`
      - : Accepte toute valeur d'URL ({{CSSxRef("url_value", "&lt;url&gt;")}}) valide.

- `*`
  - : La syntaxe universelle.

Vous pouvez combiner les valeurs `<syntax-type>` en utilisant les jetons suivants&nbsp;:

- `+`
  - : Une liste de valeurs séparées par des espaces est attendue.
- `#`
  - : Une liste de valeurs séparées par des virgules est attendue.

De plus, le jeton `|` peut être utilisé comme séparateur lors de la spécification de plusieurs valeurs ou de la combinaison de valeurs `<ident>` et `<syntax-type>` pour la syntaxe attendue.

### Valeur de retour

Une définition de type de données.

## Description

La fonction `type()` est utilisée lorsque vous devez définir un type de donnée. Elle peut être considérée comme un sous-ensemble de la syntaxe de définition de valeur globale utilisée pour définir l'ensemble des valeurs valides pour chaque propriété et fonction CSS.

Le plus souvent, vous pouvez voir `type()` utilisé pour définir un seul type de donnée. L'exemple suivant utilise la fonction {{CSSxRef("attr()")}} pour définir la propriété {{CSSxRef("background-color")}} égale à la valeur d'une fonction `data-background` définie par l'utilisateur·ice. Le type de donnée requis pour la valeur a été défini comme une couleur ({{CSSxRef("&lt;color&gt;")}}).

```css
background-color: attr(data-background type(<color>), red);
```

Vous pouvez également définir une exigence de mot-clé exact (par exemple, `type(blue)`), mais cela serait trop restrictif.

La spécification de `type(*)` permet toute valeur CSS valide. Il s'agit de la syntaxe universelle, qui ne peut pas être multipliée ou combinée avec d'autres composants de syntaxe.

### Spécification de plusieurs types autorisés

Vous pouvez utiliser le jeton `|` comme séparateur lors de la spécification d'une plage de types de données autorisés, de mots-clés ou d'une combinaison des deux. Par exemple&nbsp;:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

L'exemple suivant montre comment une règle `@function` peut être utilisée pour définir une [fonction personnalisée](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) qui prend deux paramètres de couleur et renvoie le premier sauf si la largeur de la fenêtre est inférieure à `700px`, auquel cas elle renvoie le second. Le premier peut être `red` ou `green`, tandis que le second doit être `blue`.

```css
@function --choix-couleur(--couleur1 type(red | green), --couleur2 blue) {
  result: var(--couleur1);
  @media (width < 700px) {
    result: var(--couleur2);
  }
}
```

> [!NOTE]
> Dans le cas des types de données `@function`, vous pouvez omettre la fonction `type()` et inclure simplement la valeur dans les cas où un seul type de donnée ou mot-clé est défini. C'est le cas avec la définition du type `blue` dans la fonction personnalisée précédente. Cela ne fonctionne pas avec la fonction `attr()`.

### Spécification de listes de types

Les jetons `+` et `#` peuvent être ajoutés à un `<syntax-type>` pour indiquer que vous attendez respectivement une liste séparée par des espaces ou une liste séparée par des virgules. Par exemple&nbsp;:

- Un paramètre `<color>+` attend une liste de valeurs `<color>` séparées par des espaces, par exemple `red blue #a60000 rgb(234 45 100)`.
- Un paramètre `<length>#` attend une liste de valeurs `<length>` séparées par des virgules, par exemple `30px, 1em, 15vw`.

Vous pouvez combiner plusieurs jetons en utilisant `|` comme séparateur. Par exemple, `<color># | <integer>#` attendrait une liste de valeurs `<color>` séparées par des virgules ou une liste de valeurs `<integer>` séparées par des virgules.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver plusieurs autres exemples dans la documentation de {{CSSxRef("attr()")}} et {{CSSxRef("@function")}}.

### Définir un type de donnée simple avec `@function`

Cet exemple définit une fonction CSS personnalisée qui combine plusieurs chaînes de caractères.

#### HTML

Le HTML contient un seul élément HTML {{HTMLElement("section")}} avec du contenu textuel.

```html live-sample___basic-data-type
<section>Qu'est-ce que vous allez dire&nbsp;?</section>
```

#### CSS

Dans le CSS, on commence par définir une `@function` nommée `--combine-strings`. Celle-ci prend un paramètre appelé `--strings`, dont le type de données est défini comme une ou plusieurs valeurs de type `<string>` séparées par des espaces. Elle retourne les valeurs de chaîne de caractères auxquelles sont ajoutés, à la fin, un espace et un emoji en forme de cœur.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

Nous définissons ensuite quelques styles de base pour l'élément HTML `<section>` et utilisons la fonction `--combine-strings()` pour définir la valeur de sa propriété {{CSSxRef("content")}}, en lui passant comme argument deux chaînes de caractères séparées par un espace.

```css live-sample___basic-data-type
section {
  font-family: system-ui;
  background-color: lime;
  padding: 20px;
}

section::after {
  content: --combine-strings("bonjour" "au revoir");
}
```

#### Résultat

{{EmbedLiveSample("basic-data-type", "100%", 70)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@function")}}
- La fonction {{CSSxRef("attr()")}}
- [Utiliser les fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
