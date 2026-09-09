---
title: Utiliser les fonctions CSS personnalisées
slug: Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Les fonctions CSS personnalisées permettent de créer des blocs de code CSS réutilisables pouvant accepter des arguments, contenir une logique complexe (définie à l'aide de fonctionnalités telles que les fonctions CSS {{CSSxRef("if()")}} et les règles {{CSSxRef("@media")}}) et de retourner des valeurs basées sur cette logique. Elles fonctionnent de manière similaire aux [propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*), mais offrent plus de flexibilité.

Dans cet article, nous vous montrons comment les utiliser et présentons quelques exemples concrets.

## Fondamentaux des fonctions

Une définition de fonction CSS personnalisée simple ressemble à ceci&nbsp;:

```css
@function --demi-opacite() {
  result: 0.5;
}
```

Après la syntaxe `@function`, nous définissons un nom pour la fonction&nbsp;: `--demi-opacite`. Il doit s'agir d'un type {{CSSxRef("&lt;dashed-ident&gt;")}} — il doit commencer par un double tiret et est sensible à la casse. Le nom de la fonction est immédiatement suivi d'un ensemble de parenthèses (`()`) et d'un ensemble d'accolades (`{}`).

> [!NOTE]
> Si plusieurs fonctions CSS portent le même nom, la fonction dans la cascade {{CSSxRef("@layer")}} la plus forte l'emporte. Si toutes se trouvent dans le même calque, la fonction définie en dernier dans l'ordre source l'emporte.

À l'intérieur des accolades se trouve le **corps** de la fonction, où la logique de la fonction est définie. Cela peut contenir plusieurs déclarations, y compris des propriétés personnalisées (qui sont localement limitées au corps de la fonction), des règles telles que {{CSSxRef("@media")}} et le descripteur [`result`](/fr/docs/Web/CSS/Reference/At-rules/@function#result_2). La valeur du descripteur `result` est évaluée pour déterminer la valeur retournée par la fonction.

Ici, nous définissons `result` à la valeur `0.5`&nbsp;: la fonction `--demi-opacite()` retourne toujours `0.5`.

### Pourquoi « result » et pas « return » ?

Le descripteur `result` est similaire en fonctionnalité à l'instruction JavaScript [`return`](/fr/docs/Web/JavaScript/Reference/Statements/return). Cependant, `return` n'est pas utilisé dans les fonctions CSS. En effet, contrairement aux instructions `return` en JavaScript, les fonctions CSS ne retournent pas une valeur dès qu'une déclaration `result` est atteinte.

Le corps d'une fonction CSS est évalué du début à la fin. S'il y a plusieurs déclarations `result` dans le corps, la dernière dans l'ordre de la source remplace les précédentes.

### Appeler une fonction CSS

Une fonction CSS peut être appelée à la place de toute valeur de propriété appropriée en utilisant la syntaxe {{CSSxRef("&lt;dashed-function&gt;")}}, qui consiste en le nom de la fonction suivi de parenthèses contenant les arguments à passer à la fonction, le cas échéant. Par exemple, nous pouvons appeler notre fonction `--demi-opacite()` comme ceci&nbsp;:

```css
h2 {
  opacity: --demi-opacite();
}
```

Puisque cette fonction retourne toujours la valeur `0.5`, la déclaration précédente est équivalente à `opacity: 0.5`. Ce n'est pas très utile. Vous pouvez tout aussi bien utiliser une propriété personnalisée ou la valeur littérale `0.5`.

Passons maintenant à l'examen de la manière dont nous pouvons utiliser les fonctions CSS.

## Détecter les fonctionnalités des fonctions CSS

Une utilisation pratique des fonctions CSS sans paramètres est la détection des fonctionnalités. Dans tous les [exemples que nous examinons <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/css-custom-functions) dans cet article, nous définissons une fonction `--supports()` qui ressemble à ceci&nbsp;:

```css
@function --supports() {
  result: none;
}
```

Vous pouvez ensuite définir une bannière «&nbsp;la fonctionnalité n'est pas prise en charge&nbsp;» et définir sa propriété {{CSSxRef("display")}} sur `--supports()`&nbsp;:

```html
<p class="support">
  ⚠️ Votre navigateur ne prend pas encore en charge les fonctions CSS
  personnalisées.
</p>
```

```css
.support {
  /* ... */
  display: --supports();
}
```

Dans les navigateurs qui prennent en charge les fonctions personnalisées, `display` est défini sur `none`, et la bannière de support est masquée. Dans les navigateurs qui ne prennent pas en charge cette fonctionnalité, la déclaration `display: --supports()` est invalide et donc ignorée&nbsp;; par conséquent, la bannière est affichée.

## Définir les paramètres d'une fonction

Les paramètres d'une fonction CSS sont définis sous forme de propriétés personnalisées séparées par des virgules à l'intérieur des parenthèses suivant le nom de la fonction. Par exemple&nbsp;:

```css
@function --transparent(--couleur, --alpha) {
  result: oklch(from var(--couleur) l c h / var(--alpha));
}
```

Cette fonction a pour nom `--transparent` et prend deux propriétés personnalisées comme paramètres, `--couleur` et `--alpha`, qui peuvent être utilisées localement à l'intérieur du corps de la fonction. Le corps contient un descripteur `result`, qui utilise la [syntaxe de couleur relative CSS](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors) pour convertir la valeur d'entrée `--couleur` en une couleur {{CSSxRef("color_value/oklch", "oklch()")}} avec une valeur de canal alpha définie dans la valeur d'entrée `--alpha`.

Vous pouvez ensuite appeler cette fonction n'importe où pour produire une version semi-transparente d'une couleur existante.

Par exemple&nbsp;:

```css
section {
  --couleur-base: #faa6ff;
  background-color: --transparent(var(--couleur-base), 0.8);
}
```

## Définir les types de données

Il est possible de définir les types de données autorisés pour les paramètres de la fonction et la valeur de retour. Lorsque vous ne définissez pas ces types, la fonction accepte n'importe quel type pour ces valeurs.

Modifions notre fonction précédente pour fournir des types de données&nbsp;:

```css
@function --transparent(--couleur type(<color>), --alpha type(<number>)) returns
  type(<color>) {
  result: oklch(from var(--couleur) l c h / var(--alpha));
}
```

Le type de données de chaque paramètre est défini après le nom du paramètre, et le type de données du `result` est défini juste avant l'accolade ouvrante, précédé du mot-clé `returns`. La fonction {{CSSxRef("type()")}} est utilisée pour définir un type de données.

Notez que, dans les cas où vous ne définissez qu'un seul type de données, vous pouvez omettre la syntaxe `type()` et simplement écrire le type en tant que raccourci&nbsp;:

```css
@function --transparent(--couleur <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--couleur) l c h / var(--alpha));
}
```

Maintenant, la fonction ne produit une valeur valide que si les arguments d'entrée sont un {{CSSxRef("&lt;color&gt;")}} et un {{CSSxRef("&lt;number&gt;")}}, respectivement, et que le `result` est un {{CSSxRef("&lt;color&gt;")}}. Sinon, par exemple&nbsp;:

```css
section {
  --couleur-base: #faa6ff;
  background-color: --transparent(var(--couleur-base), 50%);
}
```

alors la valeur devient invalide au moment du calcul de la valeur (puisque `50%` n'est pas un nombre (`<number>`) mais un pourcentage (`<percentage>`)) et la couleur d'arrière-plan (`background-color`) est finalement définie sur `transparent`.

### Définir plusieurs types autorisés

Vous pouvez définir plusieurs types de données acceptés en utilisant le symbole `|` comme séparateur, par exemple&nbsp;:

```css
@function --transparent(
    --couleur <color>,
    --alpha type(<number> | <percentage>)
  )
  returns <color> {
  result: oklch(from var(--couleur) l c h / var(--alpha));
}
```

Dans ce cas, la syntaxe complète de `type()` doit être utilisée.

Avec cet ajustement, l'appel de fonction `--transparent(var(--couleur-base), 50%)` est maintenant valide.

## Définir des valeurs par défaut

Vous pouvez également définir des valeurs par défaut pour les paramètres, après un deux-points à la fin de leur définition. Par exemple&nbsp;:

```css
@function --transparent(--couleur <color>, --alpha <number>: 0.8) returns
  <color> {
  result: oklch(from var(--couleur) l c h / var(--alpha));
}
```

Le paramètre `--alpha` a maintenant pour valeur par défaut `0.8`. Si vous souhaitez utiliser cette valeur, vous pouvez omettre le deuxième argument lors de l'appel de la fonction&nbsp;:

```css
section {
  --couleur-base: #faa6ff;
  background-color: --transparent(var(--couleur-base));
}
```

> [!NOTE]
> Si une valeur invalide est passée en tant qu'argument de fonction et qu'une valeur par défaut est définie dans cette définition de paramètre, la valeur invalide est ignorée et la valeur par défaut est utilisée à la place.

### Exemple de fonctions d'ajustement de couleur

Vous pouvez voir la fonction `--transparent()` en action dans notre exemple [color-adjust-functions <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/css-custom-functions/color-adjust-functions/) (voir le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/color-adjust-functions)).

Cet exemple inclut également des fonctions appelées `--plus-clair()` et `--plus-fonce()` qui fonctionnent de manière similaire à `--transparent()`, mais retournent respectivement des variantes plus claires et plus foncées d'une couleur&nbsp;:

```css
@function --transparent(--couleur <color>, --alpha <number>: 0.8) returns
  <color> {
  result: oklch(from var(--couleur) l c h / var(--alpha));
}

@function --plus-clair(--couleur <color>, --ajustement-luminosite <number>: 0.2)
  returns <color> {
  result: oklch(from var(--couleur) calc(l + var(--ajustement-luminosite)) c h);
}

@function --plus-fonce(--couleur <color>, --ajustement-luminosite <number>: 0.2)
  returns <color> {
  result: oklch(from var(--couleur) calc(l - var(--ajustement-luminosite)) c h);
}
```

Une bibliothèque de fonctions comme celles-ci peut devenir très utile pour définir des schémas de couleurs basés sur une seule couleur&nbsp;:

```css
:root {
  --couleur-base: #faa6ff;
}

section {
  background-color: --transparent(var(--couleur-base));
  border: 3px solid --plus-clair(var(--couleur-base), 0.1);
  color: --plus-fonce(var(--couleur-base), 0.55);
}
```

## Inclure une logique complexe

Vous pouvez inclure de la logique plus complexe dans des fonctions en utilisant des règles {{CSSxRef("@media")}} et des fonctions {{CSSxRef("if()")}}.

Notre exemple [responsive-narrow-wide <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/css-custom-functions/responsive-narrow-wide/) (voir le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/responsive-narrow-wide)) présente une fonction appelée `--etroit-large()`, qui peut être utilisée pour fournir deux options de valeur pour n'importe quelle propriété. L'une est définie si la fenêtre est en dessous d'un certain point de rupture, et l'autre est définie si elle est au-dessus.

La fonction `--etroit-large()` accepte deux paramètres, `--etroit` et `--large`. La valeur retournée est la propriété `--large`, sauf si la fenêtre est inférieure à `700px` de large, auquel cas `--etroit` est retournée.

```css
@function --etroit-large(--etroit, --large) {
  result: var(--large);
  @media (width < 700px) {
    result: var(--etroit);
  }
}
```

Cette fonction peut être utilisée pour fournir des options de valeur réactives dans plusieurs contextes&nbsp;:

```css
body {
  display: grid;
  grid-template-columns: repeat(--etroit-large(1, 3), 1fr);
  gap: --etroit-large(0, 20px);
  padding: 0 20px;
}

h2 {
  font-size: --etroit-large(2.5rem, 2rem);
}

p {
  font-size: --etroit-large(1.4rem, 1rem);
  line-height: 1.5;
}
```

### Utiliser une fonction `if()`

Nous pouvons réécrire la fonction `--etroit-large()` pour utiliser une fonction `if()` à la place&nbsp;:

```css
@function --etroit-large(--etroit, --large) {
  result: if(media(width < 700px): var(--etroit) ; else: var(--large));
}
```

## Écrire une syntaxe complexe une fois, puis la réutiliser

Un cas d'utilisation clé des fonctions CSS est de définir une section complexe de syntaxe une fois, et de pouvoir la réutiliser plusieurs fois avec un appel de fonction beaucoup plus simple.

Notre exemple [gradient-function <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/css-custom-functions/gradient-function/) (voir le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/css-custom-functions/gradient-function)) fournit un exemple de cela. Il présente une fonction appelée `--motif-shippo()` qui accepte des arguments de longueur et de couleur, et retourne une valeur {{CSSxRef("background")}} complexe comportant plusieurs arrière-plans {{CSSxRef("radial-gradient()")}}&nbsp;:

```css
@function --motif-shippo(--taille <length>, --teinte <color>) {
  result:
    radial-gradient(closest-side, transparent 98%, rgb(0 0 0 / 0.3) 99%) 0 0 /
      var(--taille) var(--taille),
    radial-gradient(closest-side, transparent 98%, rgb(0 0 0 / 0.3) 99%)
      calc(var(--taille) / 2) calc(var(--taille) / 2) / var(--taille)
      var(--taille) var(--teinte);
}
```

Avec cette fonction définie, nous pouvons maintenant créer des variantes de cette valeur de fond avec différentes teintes de couleur et tailles de cercle&nbsp;:

```css
#un {
  background: --motif-shippo(100px, #ddeeff);
}

#deux {
  background: --motif-shippo(3.5rem, lime);
}

#trois {
  background: --motif-shippo(10vw, purple);
}
```

## Voir aussi

- [Les propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*)
- Le module [des fonctions et mixins personnalisés CSS](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins)
- [Fonctions personnalisées CSS dans le navigateur <sup>(angl.)</sup>](https://www.oddbird.net/2025/04/11/custom-functions/) par Miriam Suzanne (2025)
- [`@function` CSS + `if()` CSS <sup>(angl.)</sup>](https://www.bram.us/2025/02/18/css-at-function-and-css-if/) par Bramus (2025)
- [5 fonctions CSS utiles utilisant la nouvelle règle `@function` <sup>(angl.)</sup>](https://una.im/5-css-functions/) par Una Kravets (2025)
