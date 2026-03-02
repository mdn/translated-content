---
title: var()
slug: Web/CSS/Reference/Values/var
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`var()`** permet d'insérer la valeur d'une [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) (parfois appelée «&nbsp;variable CSS&nbsp;») à la place de n'importe quelle partie de la valeur d'une autre propriété.

{{InteractiveExample("Démonstration CSS&nbsp;: var()")}}

```css interactive-example-choice
border-color: var(--color-a);
```

```css interactive-example-choice
border-color: var(--color-b);
```

```css interactive-example-choice
border-color: var(--color-c);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    Trois options de couleur ont été définies sur :root utilisez-les pour
    changer la couleur de la bordure.
  </div>
</section>
```

```css interactive-example
:root {
  --color-a: pink;
  --color-b: green;
  --color-c: rebeccapurple;
}

#example-element {
  border: 10px solid black;
  padding: 10px;
}
```

La fonction `var()` ne peut pas être utilisée dans les noms de propriétés, les sélecteurs ou tout autre endroit en dehors des valeurs de propriétés. (Cela produit généralement une syntaxe invalide, ou bien une valeur dont la signification n'a aucun rapport avec la variable.)

## Syntaxe

```css
/* Utilisation simple */
var(--custom-prop);

/* Avec valeur de repli */
var(--custom-prop,);  /* valeur vide comme repli */
var(--custom-prop, initial); /* valeur initiale de la propriété comme repli */
var(--custom-prop, red);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

Le premier argument de la fonction est le nom de la propriété personnalisée à substituer. Un second argument optionnel sert de valeur de repli. Si la propriété personnalisée référencée par le premier argument n'est pas définie ou vaut un [mot-clé global CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#mots-clés_globaux_css), la fonction utilise la seconde valeur.

La syntaxe de la valeur de repli, comme celle des propriétés personnalisées, autorise les virgules. Par exemple, `var(--foo, red, blue)` définit une valeur de repli de `red, blue`&nbsp;; tout ce qui se trouve entre la première virgule et la fin de la fonction est considéré comme valeur de repli.

### Valeurs

- `<custom-property-name>`
  - : Nom d'une propriété personnalisée représenté par un identifiant commençant par deux tirets. Les propriétés personnalisées sont uniquement destinées aux auteur·ice·s et utilisateur·ice·s&nbsp;; CSS ne leur attribuera jamais de signification autre que celle présentée ici.

- `<declaration-value>`
  - : La valeur de repli de la propriété personnalisée, utilisée si la propriété personnalisée n'est pas définie ou vaut un [mot-clé global CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#mots-clés_globaux_css). Cette valeur peut contenir n'importe quel caractère sauf certains caractères avec une signification spéciale comme les retours à la ligne, les crochets fermants non appariés, c'est-à-dire `)`, `]`, ou `}`, les points-virgules de premier niveau, ou les points d'exclamation. La valeur de repli peut elle-même être une propriété personnalisée utilisant la syntaxe `var()`. Si la valeur de repli est omise, et que la propriété personnalisée n'est pas définie, la fonction `var()` donne une [valeur invalide](#valeurs_invalides).

    > [!NOTE]
    > `var(--a,)` est valide, ce qui définit que si la propriété personnalisée `--a` n'est pas définie ou vaut un [mot-clé global CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#mots-clés_globaux_css), la fonction `var()` doit être remplacée par rien.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser une propriété personnalisée définie sur `:root`

#### CSS

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

#### Résultat

{{EmbedLiveSample("Utiliser une propriété personnalisée définie sur `:root`")}}

Ici, la valeur de la propriété `background-color` a été définie via la propriété personnalisée `--main-bg-color`. Ainsi, la couleur de fond du corps HTML sera rose.

### Utiliser une propriété personnalisée avant qu'elle ne soit définie

#### CSS

```css
body {
  background-color: var(--main-bg-color);
}

:root {
  --main-bg-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser une propriété personnalisée avant qu'elle ne soit définie")}}

Dans cet exemple, la couleur de fond du corps HTML sera rose même si la propriété personnalisée est définie plus loin.

### Utiliser une propriété personnalisée définie dans un autre fichier

#### HTML

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="1.css" />
    <link rel="stylesheet" href="2.css" />
  </head>
  <body></body>
</html>
```

#### CSS

```css
/* 1.css */
body {
  background-color: var(--main-bg-color);
}
```

```css
/* 2.css */
:root {
  --main-bg-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser une propriété personnalisée définie dans un autre fichier")}}

La couleur de fond du corps HTML sera rose dans ce cas, même si la propriété personnalisée est déclarée dans un autre fichier.

### Propriétés personnalisées avec valeurs de repli pour le cas où la propriété n'est pas définie

#### HTML

```html
<div class="component">
  <h1 class="header">En-tête</h1>
  <p class="text">Texte</p>
</div>
```

#### CSS

```css
/* Dans le style du composant : */
.component .header {
  /* header-color n'est pas définie, donc reste bleue, la valeur de repli */
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* Dans le style de l'application principale : */
.component {
  --text-color: #008800;
}
```

#### Résultat

{{EmbedLiveSample("Propriétés personnalisées avec valeurs de repli pour le cas où la propriété n'est pas définie")}}

Comme `--header-color` n'est pas définie, le texte «&nbsp;En-tête&nbsp;» sera bleu, la valeur de repli.

### Utiliser une propriété personnalisée comme valeur de repli

#### CSS

```css
:root {
  --backup-bg-color: teal;
}

body {
  background-color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

#### Résultat

{{EmbedLiveSample("Utiliser une propriété personnalisée comme valeur de repli")}}

Comme `--main-bg-color` n'est pas définie, la propriété `background-color` du corps prendra la valeur de repli `--backup-bg-color`, qui est sarcelle.

### Valeurs invalides

Les fonctions `var()` peuvent donner des valeurs invalides si&nbsp;:

- La propriété personnalisée n'est pas définie et aucune valeur de repli n'est fournie.
- La propriété personnalisée est définie mais sa valeur est invalide pour la propriété dans laquelle elle est utilisée.

Dans ce cas, la propriété est traitée comme si elle avait la valeur {{CSSxRef("unset")}}. Les variables ne peuvent pas «&nbsp;échouer tôt&nbsp;» comme d'autres erreurs de syntaxe, donc lorsque l'agent utilisateur réalise qu'une valeur de propriété est invalide, il a déjà ignoré les autres valeurs issues de la cascade.

Par exemple&nbsp;:

#### HTML

```html
<p class="p1">Variable non définie</p>
<p class="p2">Variable invalide</p>
<p class="p3">Couleur littérale invalide</p>
```

#### CSS

```css
p {
  color: red;
}

.p1 {
  color: var(--invalid-color);
}

.p2 {
  --invalid-color: 20px;
  color: var(--invalid-color);
}

.p3 {
  color: 20px;
}
```

#### Résultat

{{EmbedLiveSample("Valeurs invalides")}}

Remarquez que les paragraphes utilisant `var()` sont réinitialisés à la couleur noire par défaut, mais que le paragraphe avec une couleur littérale invalide reste rouge, car la déclaration `color: 20px` est simplement ignorée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("env","env(…)")}} — variables d'environnement en lecture seule contrôlées par l'agent utilisateur.
- [Utiliser les propriétés personnalisées CSS (variables)](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- La règle {{CSSxRef("@property")}}
- Le module des [propriétés personnalisées CSS pour les variables en cascade](/fr/docs/Web/CSS/Guides/Cascading_variables) module
