---
title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

{{SeeCompatTable}}

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@function`** permet de définir des [fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions). Une fois définie, une fonction personnalisée peut être appelée en utilisant la syntaxe {{CSSxRef("&lt;dashed-function&gt;")}} (par exemple, `--ma-fonction(30px, 3)`) dans n'importe quelle valeur de propriété.

## Syntaxe

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Les différentes parties de la syntaxe `@function` sont les suivantes&nbsp;:

- `--function-name`
  - : Le nom identifiant de la fonction, un [`<dashed-ident>`](/fr/docs/Web/CSS/Reference/Values/dashed-ident) qui commence par `--` et est suivi d'un identifiant défini par l'utilisateur·ice. Il est sensible à la casse.
- `<function-parameter>#?` {{Optional_Inline}}
  - : Zéro ou plusieurs définitions de paramètres de fonction. Plusieurs définitions de paramètres sont séparées par des virgules. Chaque paramètre se compose de&nbsp;:
    - `--param-name`
      - : Un nom de [propriété personnalisée CSS](/fr/docs/Web/CSS/Reference/Properties/--*) pour identifier le paramètre, un [`<dashed-ident>`](/fr/docs/Web/CSS/Reference/Values/dashed-ident) qui commence par `--` et est suivi d'un identifiant défini par l'utilisateur·ice. Il est sensible à la casse. Les paramètres de fonction peuvent être considérés comme des propriétés personnalisées localement portées au corps de la fonction.
    - `<css-type>` {{Optional_Inline}}
      - : Un type de données CSS ou une fonction {{CSSxRef("type()")}} qui définit le ou les types de données acceptés pour le paramètre. Si ce n'est pas défini, tout type de données sera valide pour le paramètre (équivalent à `type(*)`).
    - `<default-value>` {{Optional_Inline}}
      - : Une valeur CSS qui définit la valeur par défaut à attribuer au paramètre si elle n'est pas définie lors de l'appel de la fonction. Cette valeur doit être valide selon le `<css-type>` si défini. La valeur par défaut est séparée des autres parties de la définition du paramètre par un deux-points (`:`).
- `[returns <css-type>]?` {{Optional_Inline}}
  - : Un type de données CSS ou une fonction {{CSSxRef("type()")}}, précédée du mot-clé `returns`, qui définit le ou les types de retour acceptés pour le paramètre. Si ce n'est pas défini, tout type de données sera valide pour le paramètre (équivalent à `returns type(*)`), mais la fonction sera invalide si le type de retour ne correspond pas au type produit par le descripteur `result`.
- `<declaration-rule-list>`
  - : Une ou plusieurs déclarations CSS ou règles @ qui définissent le corps de la fonction, contenant sa logique. Les déclarations incluses peuvent inclure&nbsp;:
    - Propriétés personnalisées CSS, localement portées au corps de la fonction.
    - Le descripteur `result`, soit directement dans la règle @function, soit dans une règle imbriquée.

### Descripteurs

- `result`
  - : Une valeur de propriété valide qui définit le résultat retourné par la fonction personnalisée CSS. L'expression contenue dans la valeur est évaluée et le résultat est retourné.

## Description

Les fonctions personnalisées CSS permettent de définir des sections réutilisables de logique qui retournent différentes valeurs selon les paramètres reçus en entrée et la logique définie dans le corps de la fonction.

Une fonction CSS typique ressemble à ceci&nbsp;:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

La fonction porte le nom `--transparent` et prend deux propriétés personnalisées comme paramètres, `--color` et `--alpha`, qui peuvent être utilisées localement dans le corps de la fonction. Le corps contient une seule ligne, qui est un descripteur `result` définissant la valeur retournée par la fonction. La valeur du descripteur `result` utilise la [syntaxe de couleur relative CSS](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors) pour convertir la valeur d'entrée `--color` en une couleur [`oklch()`](/fr/docs/Web/CSS/Reference/Values/color_value/oklch) avec la valeur du canal alpha spécifiée dans la valeur d'entrée `--alpha`.

Vous pouvez ensuite appeler cette fonction partout où vous souhaitez produire une version semi-transparente d'une couleur existante, par exemple&nbsp;:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

La fonction est appelée en utilisant la syntaxe {{CSSxRef("&lt;dashed-function&gt;")}}, c'est-à-dire le nom de la fonction suivi de parenthèses. Les valeurs d'arguments souhaitées sont spécifiées à l'intérieur des parenthèses.

> [!NOTE]
> Si plusieurs fonctions CSS portent le même nom, la fonction dans la cascade la plus forte {{CSSxRef("@layer")}} l'emporte. Si toutes sont dans la même couche, la fonction définie en dernier dans l'ordre source l'emporte.

### Définition des types de données

Il est possible de définir des types de données pour les paramètres et les types de retour de la fonction. Par exemple&nbsp;:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

La fonction ne produit une valeur valide que si les arguments d'entrée sont respectivement un {{CSSxRef("&lt;color&gt;")}} et un {{CSSxRef("&lt;number&gt;")}}, et que le `result` est un {{CSSxRef("&lt;color&gt;")}}. Sinon, par exemple&nbsp;:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

la valeur devient invalide au moment du calcul (car l'argument `--alpha` défini est un `<percentage>` et non un `<number>` comme attendu) et la propriété `background-color` sera finalement définie sur `transparent`.

Vous pouvez définir plusieurs types de données acceptés en utilisant la fonction {{CSSxRef("type()")}} avec le symbole `|` comme séparateur, par exemple&nbsp;:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Avec cet ajustement, l'appel de fonction `--transparent(var(--base-color), 50%)` est maintenant valide.

### Définition de valeurs par défaut

Vous pouvez aussi définir des valeurs par défaut pour les paramètres, après un deux-points à la fin de leur définition. Par exemple&nbsp;:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

La valeur par défaut du paramètre `--alpha` est maintenant `0.8`. Si vous souhaitez utiliser cette valeur, vous pouvez omettre le second argument lors de l'appel de la fonction&nbsp;:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Si une valeur invalide est passée en argument de fonction et qu'une valeur par défaut est définie dans la définition de ce paramètre, la valeur invalide sera ignorée et la valeur par défaut sera utilisée à la place.

### Passage de valeurs contenant des virgules comme arguments

Dans l'exemple suivant, la fonction `--max-plus-x()` attend une liste de longueurs séparées par des virgules et une seule longueur comme arguments. Elle utilise la fonction CSS {{CSSxRef("max()")}} pour déterminer laquelle des longueurs de la liste est la plus grande, l'ajoute à la longueur unique, puis retourne le résultat.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Le premier argument doit être une liste séparée par des virgules, qui pourrait être interprétée comme trois arguments distincts. Pour contourner ce problème, vous pouvez entourer la valeur d'accolades lors de l'appel de la fonction&nbsp;:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Inclusion de propriétés personnalisées dans les fonctions

Comme nous l'avons déjà vu, les paramètres de fonction sont définis comme des propriétés personnalisées, qui sont alors disponibles dans le corps de la fonction.

Vous pouvez aussi définir des propriétés personnalisées dans le corps de la fonction qui agiront comme des constantes localement portées. Dans l'exemple suivant, nous définissons une fonction appelée `--anim-1s()`, qui retourne une valeur raccourcie {{CSSxRef("animation")}} où la durée et la courbe d'accélération sont toujours les mêmes, et seuls le nom de l'animation et le nombre sont variables.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Ce type d'utilisation permet d'écrire une syntaxe plus simple et expressive pour les animations, à condition de savoir que la durée et la courbe d'accélération seront toujours identiques&nbsp;:

```css
animation: --anim-1s(bounce, 2);
```

Il est aussi possible d'appeler une fonction personnalisée depuis une autre. Dans ce cas, une fonction personnalisée peut accéder aux variables locales et aux paramètres de fonction des fonctions plus haut dans la pile d'appels. Ici, le paramètre et la propriété personnalisée locale de la fonction externe seront disponibles dans la portée de la fonction interne&nbsp;:

```css
@function --outer(--outer-arg) {
  --outer-local: 2;
  result: --inner();
}

@function --inner() returns <number> {
  result: calc(var(--outer-arg) + var(--outer-local));
}

div {
  z-index: --outer(1); /* 3 */
}
```

De plus, les propriétés personnalisées définies sur le même élément où la fonction personnalisée est appelée seront disponibles pour celle-ci&nbsp;:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Lorsqu'une propriété personnalisée du même nom est définie à plusieurs endroits, les paramètres de fonction remplacent les propriétés personnalisées définies sur le même élément, et les propriétés personnalisées locales définies dans le corps de la fonction remplacent les deux. Dans l'exemple suivant, la fonction `--add-a-b-c()` utilise la propriété `--a` de la règle personnalisée du `div`, la propriété `--b` du paramètre de fonction, et la propriété personnalisée locale `--c`.

```css
@function --add-a-b-c(--b, --c) {
  --c: 300;
  result: calc(var(--a) + var(--b) + var(--c));
}

div {
  --a: 1;
  --b: 2;
  --c: 3;
  z-index: --add-a-b-c(20, 30); /* 321 */
}
```

### Inclusion d'une logique complexe

Vous pouvez inclure une logique plus complexe dans les fonctions en utilisant des constructions telles que les règles @ {{CSSxRef("@media")}} et les fonctions {{CSSxRef("if()")}}. Par exemple, la fonction suivante prend deux arguments, un pour une mise en page à écran étroit et un pour une mise en page à écran large. Elle retourne la seconde par défaut, mais retourne la première lorsque la largeur de la zone d'affichage est inférieure à `700px`, comme détecté par une requête média.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Vous pouvez inclure plusieurs descripteurs `result` pour exprimer différents résultats selon les cas de logique.

> [!NOTE]
> Les fonctions CSS se comportent comme le reste de CSS concernant la résolution des conflits — la dernière dans l'ordre source l'emporte. Ainsi, dans la fonction ci-dessus, le `result` est `var(--wide)` sauf si le test de la requête média retourne vrai, auquel cas il est remplacé par `var(--narrow)`.
>
> Il n'y a pas de retour anticipé dans les fonctions CSS comme en JavaScript. Dans la fonction ci-dessus, si la requête média était écrite en premier, avant la ligne `result`, le `result` serait toujours `var(--wide)` car il remplacerait `var(--narrow)` dans les cas où le test de la requête média retourne vrai.

On pourrait réécrire la fonction personnalisée CSS pour utiliser une fonction `if()` à la place&nbsp;:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Pour plus d'exemples, consultez le guide [Utiliser les fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions).

### Utilisation basique de `@function`

Cet exemple montre une fonction basique qui double la valeur passée en argument.

#### HTML

Le balisage comporte un élément {{HTMLElement("p")}} contenant du texte&nbsp;:

```html live-sample___basic-example
<p>Du contenu</p>
```

#### CSS

Dans nos styles, nous définissons d'abord la fonction personnalisée CSS. La fonction s'appelle `--double` et accepte un seul paramètre de n'importe quel type, nommé `--value`. Dans le corps de la fonction, nous incluons un descripteur `result` qui utilise la fonction {{CSSxRef("calc()")}} pour doubler l'argument passé&nbsp;:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Ensuite, nous définissons une propriété personnalisée `--base-spacing` avec la valeur `10px`. Nous assignons cette propriété à la valeur de {{CSSxRef("border-radius")}}, puis nous la doublons pour la valeur de {{CSSxRef("padding")}} en utilisant la fonction personnalisée `--double()`.

```css hidden live-sample___basic-example
html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  font-family: system-ui;
}
```

```css live-sample___basic-example
p {
  --base-spacing: 10px;
  border-radius: var(--base-spacing);
  padding: --double(var(--base-spacing));
  width: 50%;
  background-color: wheat;
}
```

#### Résultat

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*)
- Le type de données {{CSSxRef("&lt;dashed-function&gt;")}}
- La fonction [`type()`](/fr/docs/Web/CSS/Reference/Values/type)
- [Utiliser les fonctions personnalisées CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- Le module des [Fonctions et mixins personnalisés CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins)
