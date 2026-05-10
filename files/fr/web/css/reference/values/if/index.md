---
title: Fonction CSS `if()`
short-title: if()
slug: Web/CSS/Reference/Values/if
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`if()`** permet de définir différentes valeurs pour une propriété en fonction du résultat d'un test conditionnel. Le test peut être basé sur une [requête de style](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#conteneur_de_requêtes_de_style), une [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using) ou une [requête de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

## Syntaxe

```css-nolint
/* Un seul <if-test> */
if(style(--schema: dark): #eeeeee;)
if(media(print): black;)
if(media(width > 700px): 0 auto;)
if(supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);)

/* <if-test> avec else */
if(style(--taille: "2xl"): 1em; else: 0.25em;)
if(media(print): white; else: black;)
if(media(width < 700px): 0 auto; else: 20px auto)
if(
  supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
  else: #03045e;
)
if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
)

/* Multiple <if-test>s */
if(
  style(--schema: glace): linear-gradient(#caf0f8, white, #caf0f8);
  style(--schema: feu): linear-gradient(#ffc971, white, #ffc971);
  else: none;
)

/* <if-test> dans un raccourci */
3px yellow if(
  style(--couleur: green): dashed;
  style(--couleur: yellow): inset;
  else: solid;
)
```

### Paramètres

Le paramètre est une liste de `<if-branch>` séparés par des points-virgules. Chaque `<if-branch>` est un `<if-condition>` suivi d'un deux-points et d'une `<value>`&nbsp;:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : Un test `<if-test>` ou le mot-clé `else`.
    - `<if-test>`
      - : Une [requête de style](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#conteneur_de_requêtes_de_style), une [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using) ou une [requête de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

    - `else`
      - : Un mot-clé représentant une condition `<if-condition>` qui est toujours évaluée à vrai.

- `<value>`
  - : Une valeur de propriété.

### Valeur de retour

Une valeur ou {{Glossary("guaranteed_invalid_value", "une valeur garantie invalide")}}.

## Description

La fonction CSS `if()` fournit une logique conditionnelle aux valeurs des propriétés CSS, et fonctionne de manière similaire aux instructions JavaScript {{JSxRef("Statements/if...else", "if...else")}}.

La fonction `if()` peut être utilisée à l'intérieur de la valeur de n'importe quelle propriété, et peut contenir zéro ou plusieurs `<if-condition>` séparés par des points-virgules. Chaque `<if-condition>` est soit une paire `<if-test> : <value>`, soit une paire `else : <value>`. Le point-virgule après le dernier `<if-condition>` est optionnel.

La valeur de retour est calculée comme suit&nbsp;:

1. Les expressions `<if-condition>` sont évaluées dans l'ordre où elles apparaissent dans la fonction.
2. La première `<if-condition>` qui est évaluée à `true` retourne sa `<value>` associée.
3. Si aucune `<if-condition>` n'est évaluée à `true`, la fonction retourne une `{{Glossary("guaranteed_invalid_value", "&lt;guaranteed-invalid&gt;")}}`. Cela se comporte comme invalide ou `false` si la fonction `if()` est utilisée dans une déclaration de valeur qui a un repli, comme une [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) ou une fonction {{CSSxRef("anchor()")}}.

Par exemple&nbsp;:

```css-nolint
div {
  background-image: if(
    style(--schema: glace): linear-gradient(#caf0f8, white, #caf0f8);
    style(--schema: feu): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

Dans ce cas, nous définissons un {{CSSxRef("linear-gradient()")}} différent comme {{CSSxRef("background-image")}} sur les éléments HTML {{HTMLElement("div")}}, en fonction de la valeur de la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--schema`, qui peut être `glace` ou `feu`. Si `--schema` n'existe pas, ou s'il existe et est défini sur une autre valeur, la valeur `else` est utilisée, et la propriété `background-image` est définie sur `none`.

> [!NOTE]
> Chaque condition doit être séparée de sa valeur associée par deux-points, et chaque paire `<if-condition> : <value>` doit être séparée par un point-virgule. Le point-virgule est optionnel pour la dernière paire `<if-condition> : <value>`.

> [!WARNING]
> Il ne doit y avoir aucun espace entre le `if` et la parenthèse ouvrante (`(`). S'il y en a, toute la déclaration est invalide.

Si une seule `<if-condition>` ou `<value>` est invalide, cela n'invalide pas toute la fonction `if()`&nbsp;; au lieu de cela, le parseur passe à la paire `<if-condition> : <value>` suivante. Si aucune `<if-condition>` ni `<value>` n'est valide, la fonction retourne {{Glossary("guaranteed_invalid_value", "une valeur garantie comme invalide")}}.

### Fréquence et position des paires `else : <value>`

Vous pouvez inclure plusieurs paires `else : <value>` à l'intérieur d'une fonction `if()`, à n'importe quelle position. Cependant, dans la plupart des cas, une seule paire `else : <value>` à la fin de la liste séparée par des points-virgules est utilisée pour fournir la valeur par défaut qui est toujours retournée si aucune des `<if-test>` n'évalue à true.

Si vous incluez une paire `else : <value>` avant toute paire `<if-test> : <value>`, les conditions qui suivent ne sont pas évaluées, car `else` évalue toujours à `true`. La fonction `if()` suivante retourne donc toujours `none`, et les deux paires `<if-test> : <value>` ne sont jamais évaluées&nbsp;:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--schema: glace): linear-gradient(#caf0f8, white, #caf0f8);
    style(--schema: feu): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Le débogage d'une valeur qui ne se comporte pas comme prévu est un cas où vous pourriez vouloir placer une paire `else : <value>` à une position autre que la fin de la liste de valeurs. Dans l'exemple suivant, nous essayons de déterminer si la première paire `<if-test> : <value>` fonctionne correctement. Si ce n'est pas le cas, la paire `else : <value>` retourne une valeur de `url("debug.png")` pour afficher une image indiquant que la première paire `<if-test> : <value>` doit être corrigée. Les deux dernières paires `<if-test> : <value>` ne sont à nouveau jamais évaluées.

```css-nolint
div {
  background-image: if(
    style(--schema: glace): linear-gradient(#caf0f8, white, #caf0f8);
    else: url("debug.png");
    style(--schema: feu): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

Notez qu'une fonction `if()` est toujours valide si elle ne contient qu'une seule paire `else : <value>`, ou rien du tout. Les valeurs de propriété suivantes sont toutes deux valides&nbsp;:

```css
background-color: if(else: yellow);
background-image: if();
```

Ces fonctions ne sont pas utiles. Elles ont été incluses pour démontrer leur validité. Dans ce cas, la valeur de {{CSSxRef("background-color")}} est toujours définie sur `yellow` et l'image de fond est définie sur sa valeur initiale. Il convient de définir directement `background-color` sur `yellow` et `background-image` sur `initial` ou `none`.

### Types de testes `if-tests`

Un `<if-test>` accepte l'un des trois types de requêtes. Cette section examine chacun d'eux en détail.

#### Requêtes de style

Une [requête de style](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#conteneur_de_requêtes_de_style) `<if-test>` vous permet de tester si une valeur de propriété particulière est définie sur un élément, et d'appliquer une valeur à une autre propriété en conséquence. Nous avons parcouru plusieurs exemples de requêtes de style plus tôt&nbsp;; examinons un autre exemple&nbsp;:

```css-nolint
background-image: if(
  style(--schema: glace): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

Si la propriété personnalisée `--schema` est définie sur une valeur de `glace` sur le même élément, la valeur `linear-gradient()` fournie est retournée. Sinon, `none` est retourné.

Utiliser des requêtes de style à l'intérieur des instructions `if()` présente un avantage par rapport aux requêtes {{CSSxRef("@container")}} — vous pouvez cibler un élément avec des styles directement, en fonction de la présence d'une propriété personnalisée, plutôt que de devoir vérifier les styles définis sur un élément parent conteneur.

Vous pouvez également utiliser la logique `and`, `or` ou `not` à l'intérieur des requêtes de style. Par exemple&nbsp;:

```css-nolint
background-color: if(
  style((--schema: dark) or (--schema: very-dark)): black;
);

background-color: if(
  style((--schema: dark) and (--contrast: hi)): black;
);

background-color: if(
  not style(--schema: light): black;
);
```

Une requête `@container` présente cependant certains avantages — vous ne pouvez définir qu'une seule valeur de propriété à la fois avec les requêtes de style `if()`, tandis que les requêtes `@container` peuvent être utilisées pour appliquer conditionnellement des ensembles complets de règles. Les deux approches sont complémentaires et ont des utilisations différentes.

Notez que les requêtes de style de conteneur ne prennent actuellement pas en charge les propriétés CSS régulières, seulement les propriétés personnalisées CSS. Par exemple, ce qui suit ne fonctionne pas&nbsp;:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Requêtes média

Une [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using) `<if-test>` peut être utilisée pour définir une valeur pour une propriété en fonction du résultat d'un test de requête média.

Vous pouvez utiliser des types de média. Par exemple, la paire `<if-test> : <value>` suivante retourne une valeur de `white` sur les médias d'impression, tandis que la clause `else` retourne `#eeeeee` sur les médias qui ne sont pas imprimés.

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

Vous pouvez également utiliser des fonctionnalités de média — ce qui suit retourne une valeur de `0 auto` si la largeur de la fenêtre d'affichage actuelle est inférieure à `700px`, ou `20px auto` si ce n'est pas le cas :

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

Cela est très utile lorsque vous devez varier une seule valeur de propriété en fonction du résultat d'une requête média.

Vous pouvez également utiliser la logique `and`, `or` ou `not` à l'intérieur des requêtes média. Par exemple&nbsp;:

```css-nolint
border-color: if(
  media((width > 700px) and (width < 1000px)): blue;
);

border-color: if(
  media((width < 500px) or (orientation: landscape)): blue;
);

background-color: if(
  not media(width < 500px): blue;
  else: red
);
```

Lorsque vous souhaitez définir plusieurs déclarations ou règles en fonction d'une seule requête média, une construction {{CSSxRef("@media")}} classique est nécessaire. Les deux approches sont complémentaires et ont des utilisations différentes.

#### Requêtes de fonctionnalités

Une [requête de fonctionnalités](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) `<if-test>` peut être utilisée pour définir une valeur pour une propriété en fonction de la prise en charge d'une valeur de propriété particulière par le navigateur.

Par exemple, ce qui suit retourne une couleur {{CSSxRef("color_value/lch()")}} si les couleurs `lch()` sont prises en charge, ou une couleur {{CSSxRef("color_value/rgb()")}} si ce n'est pas le cas&nbsp;:

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

Les requêtes de support de sélecteur fonctionnent également. Ce qui suit retourne une valeur de `1em` si le navigateur prend en charge la pseudo-classe {{CSSxRef(":buffering")}}, ou `initial` si ce n'est pas le cas&nbsp;:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

Vous pouvez également utiliser la logique `and`, `or` ou `not` à l'intérieur des requêtes de fonctionnalités. Par exemple&nbsp;:

```css-nolint
margin-top: if(
  supports((selector(:buffering)) and (color: blue)): 1em;
);

margin-top: if(
  supports((selector(:buffering)) or (color: not-a-color)): 1em;
);

margin-top: if(
  supports(not selector(:buffering)): 1em;
);
```

Les requêtes de fonctionnalités sont très utiles à l'intérieur des instructions `if()` lorsque vous devez varier une seule valeur de propriété en fonction de la prise en charge d'une valeur particulière ou d'une propriété distincte. Lorsque vous souhaitez définir plusieurs déclarations ou règles en fonction d'une seule requête de fonctionnalités, une construction {{CSSxRef("@supports")}} classique est préférable. Les deux approches sont complémentaires et ont des utilisations différentes.

### Fournir des valeurs de repli

L'instruction `if()` ne se dégrade pas de manière élégante&nbsp;; un repli explicite doit être fourni pour les navigateurs qui ne la prennent pas en charge.

Par exemple, dans ce cas, nous fournissons une valeur {{CSSxRef("padding")}} statique pour les navigateurs qui ne prennent pas en charge `if()`. Les navigateurs qui prennent en charge `if()` remplacent la première déclaration par la seconde, qui définit des valeurs de remplissage différentes en fonction de la présence ou non de la propriété personnalisée `--size: "2xl"`.

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> N'oubliez pas d'inclure la condition `else`. Dans les navigateurs prenant en charge `if()`, si aucune valeur `else` n'est incluse et que `--size` n'est pas égal à `"2xl"`, le remplissage est défini sur `initial`.

### Valeurs complètes et partielles

Une fonction `if()` peut être définie comme la valeur de n'importe quelle propriété CSS, mais elle peut également être utilisée pour déterminer des parties des valeurs de propriété. Par exemple, ce qui suit définit une couleur {{CSSxRef("border-color")}} différente à l'intérieur d'une propriété abrégée {{CSSxRef("border")}}, en fonction de la prise en charge des couleurs {{CSSxRef("color_value/lch()")}}&nbsp;:

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

Cependant, nous pourrions utiliser la fonction `if()` pour déterminer uniquement le composant {{CSSxRef("border-color")}}&nbsp;:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### Imbriquer des fonctions `if()`

Parce qu'une fonction `if()` peut remplacer des valeurs de propriété complètes ou des composants individuels, il est possible d'imbriquer des fonctions `if()` à l'intérieur d'autres fonctions `if()`, et à l'intérieur d'autres fonctions telles que {{CSSxRef("calc()")}}.

Par exemple, dans cette déclaration, nous utilisons `if()` pour définir une valeur de propriété `color` en fonction de diverses conditions. Nous avons une fonction `if()` externe qui retourne une valeur particulière en fonction de la présence de la propriété personnalisée `--schema` définie sur `glace` ou `feu` (avec une valeur `else` de `black` qui est retournée si aucune des conditions n'est vraie).

Cependant, les deux `<value>` sont également des fonctions `if()`. Ces fonctions `if()` internes retournent une valeur de couleur claire si l'utilisateur·ice préfère un schéma de couleurs sombre (déterminé à l'aide de la requête média [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)) et une valeur de couleur sombre sinon.

```css-nolint
color: if(
  style(--schema: glace):
    if(
      media(prefers-color-scheme: dark): #caf0f8;
      else: #03045e;
    );
  style(--schema: feu):
    if(
      media(prefers-color-scheme: dark): #ffc971;
      else: #621708;
    );
  else: black
);
```

Dans l'exemple suivant, nous définissons la propriété `width` égale à une fonction `calc()` qui soustrait `50px` d'un pourcentage de la largeur de l'élément parent. Le pourcentage est représenté par une fonction `if()`, qui teste si la propriété personnalisée `--schema: wide` est définie. Si c'est le cas, le pourcentage est de `70%`, donc la fonction externe se résout en `calc(70% - 50px)`. Sinon, le pourcentage est de `50%`, donc la fonction externe se résout en `calc(50% - 50px)`.

```css-nolint
width: calc(if(
    style(--schema: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `if()`

Dans cet exemple, nous allons montrer l'utilisation de base de chacun des trois types de `<if-test>`.

#### HTML

Notre HTML comporte un élément HTML {{HTMLElement("section")}} avec deux éléments HTML {{HTMLElement("article")}} à l'intérieur, contenant des [titres](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`. La `<section>` a une propriété personnalisée définie sur elle à l'intérieur de son attribut [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style) — `--show-apple:true` — que nous utilisons plus tard pour définir conditionnellement une valeur de propriété.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>Premier article</h2></article>
  <article><h2>Deuxième article</h2></article>
</section>
```

#### CSS

Dans notre CSS, nous ciblons d'abord l'élément `<section>`, en le disposant avec [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et en définissant un écart ({{CSSxRef("gap")}}) entre les deux éléments enfants `<article>`. Nous utilisons ensuite une fonction `if()` avec une requête média {{CSSxRef("@media/orientation", "orientation")}} comme `<if-test>` pour définir la valeur de la propriété {{CSSxRef("flex-direction")}} sur `row` si le document est en orientation paysage, ou `column` si il est en orientation portrait. Cela dispose les éléments `article` côte à côte sur les écrans larges, et de haut en bas sur les écrans étroits.

```css hidden live-sample___basic
html {
  height: 100%;
  font-family: sans-serif;
}

body,
section {
  height: inherit;
}

h2 {
  text-align: center;
}

article {
  background-color: cyan;
  border: 3px solid gray;
  flex: 1;
}
```

```css-nolint live-sample___basic
section {
  display: flex;
  gap: 16px;
  flex-direction: if(
    media(orientation: landscape): row;
    else: column;
  )
}
```

Ensuite, nous ciblons le pseudo-élément {{CSSxRef("::before")}} de l'élément `<h2>`, en définissant sa propriété {{CSSxRef("content")}} sur un emoji de pomme, mais uniquement si `--show-apple: true` est défini (nous l'avons fait plus tôt avec un {{HTMLElement("style")}} en ligne dans notre HTML). Nous réalisons cela en utilisant une fonction `if()` avec une [requête de style](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_style_pour_les_propriétés_personnalisées) comme `<if-test>`&nbsp;:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

Enfin, nous ciblons l'élément `<h2>` lui-même. Nous utilisons une requête de fonctionnalité `<if-test>` pour tester si le navigateur prend en charge les couleurs `lch()`, et définissons la propriété {{CSSxRef("color")}} sur une couleur `lch()` si c'est le cas, sinon sur un équivalent hexadécimal.

```css-nolint live-sample___basic
h2 {
  color: if(
    supports(color: lch(29.57% 43.25 344.44)): lch(29.57% 43.25 344.44);
    else: #792359;
  )
}
```

#### Résultat

{{EmbedLiveSample("basic", "100%", 240)}}

Notez comment le style est appliqué. Testez le style conditionnel pour les deux premières requêtes `if()` en modifiant la démonstration rendue à l'aide des outils de développement de votre navigateur&nbsp;:

- Supprimez l'attribut `style` de l'élément `<section>` et notez comment les emojis de pomme ne sont plus rendus.
- Changez l'attribut `height` de l'`<iframe>` intégré à `1200px`. Cela change l'orientation de paysage à portrait. Notez comment la disposition change en conséquence.

### Contrôler un schéma de couleurs avec `if()`

Cette démonstration montre comment vous pouvez commencer à vous amuser avec les fonctions CSS `if()`. Entre autres choses, nous utilisons des fonctions `if()` pour définir conditionnellement les valeurs de certaines propriétés personnalisées, ce qui nous permet de contrôler l'ensemble du schéma de couleurs&nbsp;!

#### HTML

Notre HTML contient un élément HTML {{HTMLElement("article")}} avec du contenu à l'intérieur — un titre de niveau supérieur, quelques éléments HTML {{HTMLElement("p")}} et un élément HTML {{HTMLElement("aside")}}. Nous incluons également un élément HTML {{HTMLElement("form")}} contenant un menu déroulant {{HTMLElement("select")}} qui permet de sélectionner un schéma de couleurs.

```html-nolint live-sample___color-scheme
<article>
  <h1>Titre principal</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipiscing elit.
    Quisque faucibus ex sapien vitae pellentesque sem placerat.
    In id cursus mi pretium tellus duis convallis.
  </p>
  <aside>
    <h2>Une appartée</h2>
    <p>
      Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
      fringilla lacus nec metus bibendum egestas.
    </p>
  </aside>
  <p>
    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
    hendrerit semper vel class aptent taciti sociosqu. Ad litora
    torquent per conubia nostra inceptos himenaeos.
  </p>
</article>
<form>
  <label for="scheme">Choisissez un schéma de couleurs&nbsp;:</label>
  <select id="scheme">
    <option value="">Par défaut</option>
    <option value="glace">Glace</option>
    <option value="feu">Feu</option>
  </select>
</form>
```

### JavaScript

Notre JavaScript ajoute un écouteur d'évènement {{DOMxRef("HTMLElement/change_event", "change")}} à l'élément `<select>`. Lorsqu'une nouvelle valeur est sélectionnée, notre script définit l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) de l'élément `<article>` pour qu'il soit égal à cette valeur.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

Dans notre CSS, nous donnons à l'élément `<body>` une largeur maximale ({{CSSxRef("max-width")}}) de `700px` et le centrons en utilisant des valeurs `auto` pour la marge ({{CSSxRef("margin")}}). Cependant, nous utilisons une fonction `if()` avec une requête média `<if-test>` pour définir la composante {{CSSxRef("margin-top")}} à l'intérieur du raccourci `margin` à `0` si la largeur de la fenêtre est inférieure à `700px`, et à `20px` si elle est plus large. Cela signifie que sur les écrans larges, nous obtenons un peu de marge en haut du contenu, mais cela est supprimé sur les écrans étroits, où cela semble un peu étrange.

```css hidden live-sample___color-scheme
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

p {
  line-height: 1.5;
}

form {
  padding-left: 20px;
  margin-top: 20px;
}

article h2 {
  margin: 0;
  font-size: 1.8rem;
}
```

```css-nolint live-sample___color-scheme
body {
  max-width: 700px;
  margin: if(
    media(width < 700px): 0;
    else: 20px;
  ) auto 0;
}
```

Nous définissons ensuite la propriété personnalisée `--schema` pour qu'elle corresponde au nom de la classe de l'élément `<article>`. La classe est définie par notre JavaScript lorsqu'une nouvelle valeur est sélectionnée dans notre élément `<select>`. Vous voyez l'importance de la valeur de l'élément personnalisé dans le bloc CSS suivant.

```css live-sample___color-scheme
.glace {
  --schema: glace;
}

.feu {
  --schema: feu;
}
```

Nous pouvons voir la véritable puissance des fonctions CSS `if()` lorsque nous les combinons avec des propriétés personnalisées. Ici, nous utilisons des fonctions `if()` pour définir nos propriétés personnalisées `--couleur1` et `--couleur2` à différentes valeurs de couleur en fonction de la valeur de la propriété personnalisée `--schema`. Nous utilisons ensuite les valeurs `--couleur1` et `--couleur2` dans les propriétés {{CSSxRef("color")}}, {{CSSxRef("border")}} et {{CSSxRef("background-image")}} de notre élément `<article>`, ainsi que dans les propriétés `color` et `background-color` de notre élément `<aside>`.

Nous contrôlons l'ensemble de notre schéma de couleurs avec des propriétés personnalisées, avec différentes valeurs définies par des fonctions `if()`.

```css-nolint live-sample___color-scheme
article {
  padding: 20px;
  --couleur1: if(
    style(--schema: glace): #03045e;
    style(--schema: feu): #621708;
    else: black;
  );
  --couleur2: if(
    style(--schema: glace): #caf0f8;
    style(--schema: feu): #ffc971;
    else: white;
  );

  color: var(--couleur1);
  border: 3px solid var(--couleur1);
  background-image: linear-gradient(
    to left,
    var(--couleur2),
    white,
    var(--couleur2)
  );
}

aside {
  color: var(--couleur2);
  background-color: var(--couleur1);
  padding: 20px;
}
```

Enfin, nous utilisons des fonctions `if()` à quelques autres endroits&nbsp;:

- Nous définissons la taille de la police ({{CSSxRef("font-size")}}) de notre élément `<h1>` sur `calc(3rem + 2vw)` si la largeur de la fenêtre est supérieure à `700px`, et sur `3rem` sinon. Cela signifie que la taille de la police se met à jour dynamiquement avec les changements de largeur de la fenêtre sur les écrans larges, mais reste la même sur les écrans étroits.
- Nous définissons un emoji approprié comme contenu ({{CSSxRef("content")}}) de la pseudo-classe {{CSSxRef("::before")}} de notre élément `<h1>`, en fonction de la valeur de la propriété personnalisée `--schema`.

```css-nolint live-sample___color-scheme
h1 {
  margin: 0;
  font-size: if(
    media(width > 700px): calc(3rem + 2vw);
    else: 3rem;
  );
}

h1::before {
  content: if(
    style(--schema: glace): "❄️ ";
    style(--schema: feu): "🔥 ";
    else: "";
  );
}
```

#### Résultat

Cette démonstration s'affiche comme suit&nbsp;:

{{EmbedLiveSample("color-scheme", "100%", 500)}}

Essayez de sélectionner différentes valeurs de schéma de couleurs pour voir l'effet sur l'apparence et la sensation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Requêtes de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#conteneur_de_requêtes_de_style)
- [Requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Requêtes de fonctionnalités](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- Le module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
