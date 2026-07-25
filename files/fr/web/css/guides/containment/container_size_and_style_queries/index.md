---
title: Utiliser les requêtes de taille et de style des conteneurs
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Les [requêtes de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_queries) permettent d'appliquer des styles aux éléments imbriqués dans un conteneur spécifique en fonction des caractéristiques de ce conteneur. La requête retourne vrai ou faux selon que la condition de la requête est vraie pour le conteneur.

Les requêtes de conteneur sont similaires aux [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries). La règle {{CSSxRef("@media")}} permet d'appliquer des styles aux éléments en fonction de la taille de la fenêtre d'affichage ou d'autres caractéristiques de l'appareil. De même, la règle {{CSSxRef("@container")}} permet d'appliquer des styles aux éléments en fonction de la taille ou d'autres caractéristiques d'un élément contenant, plutôt que de la fenêtre d'affichage. Les requêtes de conteneur suivent les mêmes règles de syntaxe et opérateurs logiques que les requêtes média.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Il existe cinq types de requêtes de conteneur&nbsp;:

- **Requêtes de taille de conteneur**
  - : Les requêtes de taille permettent d'appliquer des styles aux éléments en fonction de la [taille](/fr/docs/Web/CSS/Reference/At-rules/@container#descripteurs) actuelle d'un élément contenant, y compris l'orientation et le {{Glossary("aspect ratio", "rapport d'aspect")}}. Les éléments contenant doivent être explicitement déclarés comme _conteneurs de requêtes de taille_.

- **[Requêtes de style de conteneur](/fr/docs/Web/CSS/Reference/At-rules/@container#requêtes_de_style_de_conteneur)**
  - : Les requêtes de style permettent d'appliquer des styles aux éléments en fonction des caractéristiques de style d'un élément contenant, où tout élément non vide peut être un conteneur de requêtes de style. Une caractéristique de style peut être une propriété CSS, une [propriété personnalisée](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) CSS, ou une [déclaration](/fr/docs/Web/CSS/Guides/Syntax/Introduction#déclarations_css) CSS valide.
    Cela permet d'appliquer des styles aux descendants de tout élément conteneur en fonction de ses caractéristiques de style — par exemple, si elle a une déclaration flexible `display: inline` définie, ou la valeur d'une propriété personnalisée.

- **[Requêtes de conteneur uniquement avec un nom](/fr/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)**
  - : Les requêtes de conteneur uniquement avec un nom permettent d'appliquer sélectivement des styles à un élément en fonction de la présence d'un {{CSSxRef("container-name")}} spécifique.

- **[Requêtes de conteneur en fonction de l'état de défilement](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Les requêtes de conteneur en fonction de l'état de défilement permettent d'appliquer sélectivement des règles CSS aux descendants d'un conteneur en fonction des conditions d'état de défilement, telles que si l'élément interrogé est partiellement défilé ou si le conteneur est aligné sur un conteneur de défilement. Les éléments contenant doivent être explicitement déclarés comme _requêtes d'état des conteneurs de défilement_.

- **[Requêtes de conteneur ancrés](/fr/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)**
  - : Les requêtes de conteneur ancrés permettent de vérifier si le conteneur est [positionné par ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning) et dispose d'une [option de repli `position-try`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) appliquée.

Dans ce guide, nous apprenons les bases des requêtes de conteneur en examinant&nbsp;:

1. [Requêtes de taille de conteneur](#container_size_queries_2),
2. [Nommer les conteneurs](#naming_containers) pour limiter leur portée, et
3. Utiliser la notation fonctionnelle `style()` dans la règle `@container` `<container-condition>` pour créer des [requêtes de style avec des propriétés personnalisées](#style_queries_for_custom_properties).

## Requêtes de taille de conteneur

Les requêtes de taille de conteneur sont filtrées par une condition de taille. Les styles associés sont appliqués aux éléments contenus si l'élément conteneur a été déclaré comme conteneur et si la condition de conteneur est vraie pour cet élément. Le conteneur de taille d'un élément est l'ancêtre le plus proche avec un confinement.

Les éléments sont déclarés comme _requêtes de taille de conteneur_ en définissant leur propriété {{CSSxRef("container-type")}} (ou le raccourci {{CSSxRef("container")}}) sur `size` ou `inline-size`.

```css
@container (orientation: landscape) {
  /* styles appliqués aux éléments descendants de ce conteneur de taille */
}

.conteneurTaille {
  container-type: size;
}
```

Déclarer la requête de taille des conteneurs leur confère une [compartimentation](/fr/docs/Web/CSS/Guides/Containment/Using). Il s'agit d'une nécessité en termes de performances — interroger la taille de chaque élément du DOM, à chaque instant, nuit aux performances et à l'expérience utilisateur·ice. De plus, si un style descendant modifie la taille de l'élément conteneur, une boucle infinie peut se produire.

Dans une requête de taille de conteneur, le `<container-condition>` inclut une ou plusieurs `<size-query>`. Chaque requête de taille inclut un nom de fonctionnalité de taille, un opérateur de comparaison et une valeur. Les fonctionnalités de taille pouvant être interrogées sont limitées à `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` et `orientation`. La syntaxe booléenne et la logique combinant une ou plusieurs `<size-query>` sont les mêmes que pour les requêtes de fonctionnalités de taille {{CSSxRef("@media")}}.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Dans cet exemple, le `<container-condition>` contient une seule `<size-query>` — `(10em <= width <= 20em)`. Dans ce cas, tous les éléments HTML {{HTMLElement("form")}} sont des correspondances potentielles pour toute requête de conteneur non nommée. Les styles déclarés dans notre requête de conteneur s'appliquent aux descendants de tous les formulaires dont la largeur est comprise entre `10em` et `20em`, inclusivement.

## Nommer les conteneurs

Un `<container-condition>` peut inclure un {{CSSxRef("container-name")}} optionnel et sensible à la casse. Un nom de conteneur rend la condition de conteneur plus spécifique — elle n'est évaluée que par rapport aux éléments qui ont ce nom défini dans la propriété `container-name`.

La propriété {{CSSxRef("container-name")}} définit une liste de valeurs de `<container-name>` de requête qui peuvent être utilisées dans les règles `@container` pour cibler des conteneurs de requête spécifiques&nbsp;; ce sont des valeurs {{CSSxRef("ident")}} sensibles à la casse. Sans `<container-name>`, la requête ne correspond qu'à l'ancêtre conteneur le plus proche, et sans `<container-query>`, la requête correspond aux éléments ayant un `container-name` de défini sur ces derniers (voir [Requêtes de conteneur uniquement par nom](/fr/docs/Web/CSS/Guides/Containment/Container_queries#requêtes_de_conteneur_avec_seulement_un_nom)).

```css
@container [ <container-name>? <container-query>? ]!# {
  /* <stylesheet> */
}
```

Les styles à l'intérieur des règles `@container` nommées ne sont appliqués qu'aux éléments correspondants à l'intérieur des conteneurs ayant ces noms définis, et qui satisfont les requêtes de conteneur.

```css
@container carte (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: carte;
}
```

Dans l'exemple ci-dessus, les styles à l'intérieur du bloc de requête de conteneur s'appliquent aux descendants de tous les éléments {{HTMLElement("li")}} dont la largeur est supérieure à leur hauteur. Notez que d'autres éléments avec `container-name: carte` appliqué à eux qui correspondent à la requête de taille ont également ces styles appliqués à leurs descendants.

```css
@container large (width >= 20em) {
  /* styles appliqués aux descendants de .conteneurTaille large */
}

@container etroit (width < 20em) {
  /* styles appliqués aux descendants de .conteneurTaille etroit */
}

.conteneurTaille {
  container-type: size;
  container-name: large etroit;
}
```

Dans l'exemple ci-dessus, l'élément a deux noms de conteneur, `large` et `etroit`. Les descendants de tout élément avec `class="conteneurTaille"` reçoivent les styles de la requête `large` ou `etroit`.

La valeur par défaut `container-type: normal` empêche le conteneur d'être un conteneur de taille, mais il peut toujours être un [conteneur de style](#requêtes_de_style_de_conteneur), et il peut toujours être ciblé par une [requête de conteneur avec seulement un nom](/fr/docs/Web/CSS/Guides/Containment/Container_queries#requêtes_de_conteneur_avec_seulement_un_nom). La valeur par défaut `container-name: none` indique que le conteneur n'a pas de nom, mais cela n'empêche pas l'élément de correspondre aux requêtes sans nom.

## Requêtes de style de conteneur

Une _requête de style de conteneur_ est une requête `@container` qui évalue les styles calculés de l'élément conteneur tels que définis dans une ou plusieurs notations fonctionnelles `style()`. La syntaxe booléenne et la logique utilisées pour combiner les fonctionnalités de style dans une requête de style sont les mêmes que dans les [requêtes de fonctionnalités CSS](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). La seule différence est le nom de la fonction — `style()` dans un `<style-feature>` par opposition à `supports()` dans un `<support-condition>`&nbsp;:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Le paramètre de chaque fonction `style()` est un seul **`<style-feature>`**. Selon la spécification CSS sur le containment, un `<style-feature>` peut être une [déclaration CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#déclarations_css) valide, une propriété CSS ou un [`<custom-property-name>`](/fr/docs/Web/CSS/Reference/Values/var#valeurs). La seule fonctionnalité de style actuellement prise en charge est les propriétés personnalisées, avec ou sans valeur. Voir le [tableau de compatibilité des navigateurs pour `@container`](/fr/docs/Web/CSS/Reference/At-rules/@container#compatibilité_des_navigateurs).

Si `<style-feature>` inclut une valeur, la requête de style évalue à vrai si la valeur calculée de la propriété personnalisée (ou, à l'avenir, de la déclaration CSS) passée en argument de `style()` est vraie pour le conteneur interrogé. Sinon, elle retourne faux.
Une fonctionnalité de style sans valeur évalue à vrai si la valeur calculée est différente de la [valeur initiale](#propriétés_enregistrées) pour la propriété donnée.

À l'avenir, nous pourrons écrire des requêtes de style comme suit&nbsp;:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeCouleurFond),
    style(--themeCouleur: blue) or style(--themeCouleur: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

La notation fonctionnelle `style()` est utilisée pour différencier les requêtes de style des requêtes de taille. Bien que non encore prise en charge, nous pourrons éventuellement interroger des déclarations CSS régulières telles que `max-width: 600px`. Interroger `@container (max-width: 600px)` est une requête de taille&nbsp;; la compartimentation avec {{CSSxRef("container-type")}}, ou le raccourci {{CSSxRef("container")}}, est nécessaire. Cette requête retournera vrai si le conteneur fait 600px ou moins. Cela diffère de l'interrogation `@container style(max-width: 600px)`, qui est une requête de style&nbsp;; lorsqu'elle sera prise en charge, cette requête retournera vrai si le conteneur a une valeur {{CSSxRef("max-width")}} de `600px`.

Jusqu'à ce que les requêtes de style pour les déclarations et propriétés CSS régulières soient prises en charge, nous sommes limités à inclure uniquement des propriétés personnalisées comme paramètre de `style()`, avec ou sans valeur&nbsp;:

```css
@container style(--themeCouleurFond),
    style(--themeCouleur: blue) or style(--themeCouleur: purple) {
  /* <stylesheet> */
}
```

Quelques points à noter qui ont déjà été mentionnés mais qui sont importants à retenir&nbsp;:

- Tous les éléments peuvent être des requêtes de style de conteneur&nbsp;; il n'est pas nécessaire de définir un `container-type`. Lorsque les styles descendants n'ont pas d'impact sur les styles calculés d'un ancêtre, la compartimentation n'est pas nécessaire.
- Un `<container-condition>` peut inclure à la fois des fonctionnalités de style et de taille. Si vous incluez des fonctionnalités de taille dans votre requête, assurez-vous que vos éléments conteneurs ont un `container-type` défini sur `size` ou `inline-size`.
- Si vous ne voulez pas qu'un élément soit considéré comme un conteneur, jamais, donnez-lui un `container-name` qui n'est pas utilisé. Définir `container-name: none` supprime tous les noms de requête associés à un conteneur&nbsp;; cela n'empêche pas l'élément d'être un conteneur de style.
- Au moment de la rédaction de cet article (février 2024), les requêtes de style de conteneur ne fonctionnent qu'avec les valeurs des propriétés personnalisées CSS dans la requête `style()`.

Maintenant, plongeons-nous et examinons les différents types de `<style-feature>`.

### Requêtes de style pour les propriétés personnalisées

Les requêtes de style pour les propriétés personnalisées vous permettent d'interroger les [propriétés personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), également appelées «&nbsp;variables CSS&nbsp;», d'un élément parent. Elles sont incluses dans un `<style-query>` de la même manière que vous incluez une propriété CSS régulière dans une requête de fonctionnalité&nbsp;: avec ou sans valeur.

#### Requêtes de propriétés personnalisées autonomes

Le paramètre `<style-query>` de la notation fonctionnelle `style()` peut inclure uniquement le nom d'une variable CSS&nbsp;; une propriété personnalisée sans valeur. Lorsqu'aucune valeur n'est incluse, la requête retourne faux si la valeur est la même que celle du descripteur `initial-value` dans la règle `@property`, s'il y en a une. La requête de style retourne vrai et correspond à tous les éléments ayant une valeur de propriété personnalisée différente de `initial-value` ou à tous les éléments ayant une propriété personnalisée de n'importe quelle valeur si la propriété personnalisée a été déclarée sans être enregistrée.

##### Propriétés personnalisées non enregistrées

Lorsque des variables CSS sont introduites avec une affectation de valeur de propriété personnalisée CSS, les requêtes de propriétés personnalisées sans valeur retournent toujours vrai.

```css
:root {
  --couleur-theme: rebeccapurple;
}

@container style(--couleur-theme) {
  /* <stylesheet> */
}
```

Dans cet exemple, la requête de conteneur correspond à l'élément sur lequel la propriété `--couleur-theme` a été déclarée et à tous ses descendants. Comme la variable CSS `--couleur-theme` a été déclarée sur le {{CSSxRef(":root")}}, la requête de style `style(--couleur-theme)` est vraie pour chaque élément à l'intérieur de ce nœud {{Glossary("DOM")}}.

##### Propriétés enregistrées

Le comportement des propriétés personnalisées enregistrées est différent. Lorsqu'elles sont définies explicitement avec la règle CSS {{CSSxRef("@property")}} ou par JavaScript avec {{DOMxRef("CSS/registerProperty_static", "CSS.registerProperty()")}}, la requête de style `style(--couleur-theme)` ne retourne vrai pour les éléments que si la valeur calculée de l'élément pour `--couleur-theme` est différente de la [`initial-value`](/fr/docs/Web/CSS/Reference/At-rules/@property/initial-value) définie dans la définition originale de cette propriété personnalisée.

```css
@property --couleur-theme {
  initial-value: rebeccapurple;
  inherits: true;
}

:root {
  --couleur-theme: rebeccapurple;
}

main {
  --couleur-theme: blue;
}

@container style(--couleur-theme) {
  /* <stylesheet> */
}
```

Dans cet exemple, l'élément `:root` ne correspond PAS à la requête de style, car la valeur de la propriété personnalisée est la même que la valeur `initial-value`. La valeur de la propriété personnalisée pour l'élément (et tous les éléments héritant de cette valeur) est toujours `rebeccapurple`. Seuls les éléments dont la valeur diffère de la valeur initiale, dans ce cas, le {{HTMLElement("main")}} et ses descendants qui héritent de cette valeur modifiée, correspondent à la requête.

#### Propriété personnalisée avec une valeur

Si une requête de style inclut une valeur pour la propriété personnalisée, la valeur calculée de l'élément pour cette propriété doit correspondre exactement, les valeurs équivalentes ne correspondant que si la propriété personnalisée a été définie avec une règle {{CSSxRef("@property")}} (ou un appel de méthode {{DOMxRef('CSS/registerProperty_static', 'CSS.registerProperty()')}}) contenant un descripteur `syntax`.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Cette requête de style de conteneur correspond à tout élément ayant `blue` comme [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété personnalisée `--accent-color`.

Dans ce cas, d'autres valeurs de couleur équivalentes à `blue` en sRGB (comme le code hexadécimal `#0000ff`) ne correspondent que si la propriété `--accent-color` a été définie comme une couleur avec `@property` ou `CSS.registerProperty()`, par exemple&nbsp;:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

Dans ce cas, si la valeur de `--accent-color` était définie sur `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` ou `rgb(0% 0% 100%)`, cela retourne vrai pour `@container style(--accent-color: blue)`.

##### Exemple

Dans cet exemple, nous avons un {{HTMLElement("fieldset")}} avec quatre boutons radio. La quatrième option inclut un {{HTMLElement("input")}} de type texte pour entrer une couleur personnalisée.

```html
<form>
  <fieldset>
    <legend>Changer la valeur de <code>--theme</code></legend>
    <ol>
      <li>
        <input type="radio" name="selection" value="red" id="red" />
        <label for="red">--theme: red;</label>
      </li>
      <li>
        <input type="radio" name="selection" value="green" id="green" />
        <label for="green">--theme: green</label>
      </li>
      <li>
        <input type="radio" name="selection" value="blue" id="blue" />
        <label for="blue">--theme: blue</label>
      </li>
      <li>
        <input type="radio" name="selection" value="currentColor" id="other" />
        <label for="other">Autre</label>
        <label for="color">color:</label>
        <input
          text="checkbox"
          name="selection-value"
          value="currentColor"
          id="color" />
      </li>
    </ol>
  </fieldset>
  <output>Je change les couleurs</output>
</form>
```

Le JavaScript met à jour la valeur de la variable CSS `--theme` sur l'élément {{HTMLElement("body")}}, qui est un ancêtre des éléments {{HTMLElement("fieldset")}} et {{HTMLElement("output")}}, chaque fois qu'un bouton radio est sélectionné. Lorsque le `<input>` de texte est mis à jour, la {{DOMxRef("HTMLInputElement.value", "value")}} du bouton radio `other` est mise à jour uniquement si le bouton radio `other` est coché, ce qui met à son tour à jour la valeur de `--theme`.

```js
const radios = document.querySelectorAll('input[name="selection"]');
const body = document.querySelector("body");
const other = document.getElementById("other");
const color = document.getElementById("color");

for (const radio of radios) {
  radio.addEventListener("change", (e) => {
    body.style.setProperty("--theme", e.target.value);
  });
}
color.addEventListener("input", (e) => {
  other.style.setProperty("value", e.target.value);
  if (other.checked) {
    body.style.setProperty("--theme", e.target.value);
  }
});
```

Nous utilisons la règle `@property` pour définir une variable CSS `--theme` comme étant une valeur {{CSSxRef("color_value", "&lt;color&gt;")}} et définir la `initial-value` à `red`, garantissant que les couleurs équivalentes correspondent quelle que soit la syntaxe utilisée (par exemple, `red` est égal à `rgb(255 0 0)`, `#ff0000` et `#f00`).

```css
@property --theme {
  syntax: "<color>";
  inherits: true;
  initial-value: red;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

La première requête de fonctionnalité de style est une propriété personnalisée sans valeur. Ce type de requête retourne vrai lorsque la valeur calculée pour la propriété personnalisée est différente de la `initial-value` pour cette propriété. Dans ce cas, elle est vraie lorsque la valeur de `--theme` est une valeur autre que toute valeur syntaxiquement équivalente à `red` (comme `#ff0000`). Lorsque c'est le cas, le {{HTMLElement("output")}} a un contour en pointillés de 5px. La couleur du contour est la valeur actuelle de `--theme`. La couleur du texte par défaut {{CSSxRef("color")}} est gris.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

La deuxième et la troisième requête de style incluent des valeurs pour la propriété personnalisée. Elles correspondent si la valeur de `--theme` du conteneur est une couleur équivalente à la valeur indiquée, même si cette valeur est la même que la `initial-value`. La première requête correspond aux éléments dont la valeur de `--theme` est équivalente à `red`, `blue` ou `green`. Lorsque c'est le cas, la couleur {{CSSxRef("color")}} est la valeur actuelle de `--theme` (dans le cas de `blue` et `green`, remplaçant le gris défini dans la première requête de style).

La deuxième requête de style indique que lorsque `--theme` est équivalent à `red`, le contenu de `<output>` est également en gras. Nous avons fait cela pour mieux démontrer que la requête de conteneur correspond.

```css
@container style(--theme: green) or style(--theme: blue) or style(--theme: red) {
  output {
    color: var(--theme);
  }
}

@container style(--theme: red) {
  output {
    font-weight: bold;
  }
}
```

{{EmbedLiveSample("exemple", "100%", 200)}}

Essayez d'entrer différentes valeurs de couleur dans la zone de texte. Vous pouvez remarquer peut-être que les valeurs qui sont des équivalents sRGB de `red` rendent la sortie (`<output>`) rouge — car elles correspondent à `style(--theme: red)` — tout en supprimant le contour, car `style(--theme)` retourne faux si la valeur de l'élément pour `--theme` est la même que la valeur initiale pour `--theme` définie par la règle `@property`. Toute valeur de couleur sRGB valide non rouge, y compris `currentColor` ou `hsl(180 100% 50%)`, etc., fait que la première requête de style retourne vrai&nbsp;; ce sont des valeurs différentes de la `initial-value`.

Parce que nous avons défini `syntax: "<color>";`, la variable CSS ne peut être assignée qu'à des valeurs `<color>` valides. Les valeurs valides pour la propriété {{CSSxRef("color")}} qui ne sont pas des valeurs `<color>`, comme `unset` ou `inherit`, sont [invalides](/fr/docs/Web/CSS/Guides/Syntax/Error_handling) pour cette propriété personnalisée et sont ignorées.

Si vous entrez `unset` ou `gibberish`, le JavaScript met à jour le `style` sur le {{HTMLElement("body")}} à `--theme: unset` ou `--theme: gibberish`. Aucune de ces valeurs n'est une couleur. Les deux sont invalides et ignorées. Cela signifie que la valeur initiale est héritée et inchangée, avec `style(--theme)` retournant faux et `style(--theme: red)` retournant vrai.

> [!NOTE]
> Lors de la déclaration de propriétés personnalisées, envisagez d'utiliser `@property` avec le descripteur {{CSSxRef("@property/syntax", "syntax")}} afin que le navigateur puisse comparer correctement les valeurs calculées.

### Syntaxe simple contre syntaxe de plage dans les requêtes de style

Lorsque une `<style-feature>` inclut une valeur, vous pouvez exprimer la comparaison de deux manières différentes. Elles se ressemblent mais se comportent très différemment, et choisir la bonne est important.

La **syntaxe simple** utilise deux-points, la même syntaxe utilisée dans une déclaration CSS&nbsp;:

```css
@container style(--n: 3) {
  /* … */
}
```

Cette forme est vraie si la [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété correspond à la valeur à droite. Pour une propriété personnalisée [non enregistrée](#propriétés_personnalisées_non_enregistrées), la valeur calculée est la valeur de la propriété telle qu'écrite&nbsp;: le navigateur n'évalue pas `calc()` ou d'autres expressions à l'intérieur. La correspondance est essentiellement une comparaison des jetons des deux valeurs. Pour correspondre à des valeurs équivalentes (comme `blue` et `#0000ff`), [enregistrez la propriété personnalisée](#propriétés_enregistrées) avec `@property` et un descripteur `syntax`.

La **syntaxe de plage** utilise un opérateur de comparaison (`=`, `<`, `<=`, `>`, ou `>=`)&nbsp;:

```css
@container style(--n = 3) {
  /* … */
}
```

Pour évaluer cette forme, le navigateur&nbsp;:

1. Résout chaque côté (les noms de propriétés personnalisées sont recherchés comme s'ils étaient utilisés avec {{CSSxRef("var()")}}).
2. Analyse chaque côté comme l'un des types {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, ou {{CSSxRef("&lt;resolution&gt;")}}. Si l'un des côtés ne peut pas être analysé comme l'un de ces types, la requête est fausse.
3. Si les deux côtés ont le même type, calcule chaque côté (en évaluant toutes les expressions `calc()`) et effectue la comparaison numérique. Sinon, la requête est fausse.

Considérons l'exemple suivant, où `--n` est défini sur une expression `calc()`&nbsp;:

```css
.box {
  --n: calc(6/2);
}

/* Évalue à FAUX : */
/* la valeur calculée de --n est la chaîne de caractères `calc(6/2)`, qui n'est */
/* pas égale à la chaîne de caractères `3`. */
@container style(--n: 3) {
  /* … */
}

/* Évalue à VRAI : */
/* les deux côtés sont analysés comme des <integer>, calc(6/2) est calculé à 3, */
/* et 3 = 3. */
@container style(--n = 3) {
  /* … */
}
```

La syntaxe de plage prend également en charge une forme à trois valeurs pour tester si une valeur se situe dans un intervalle. Les deux comparateurs doivent pointer dans la même direction&nbsp;:

```css
@container style(0 < --n < 10) {
  /* true lorsque --n est supérieur à 0 et inférieur à 10 */
}

@container style(100px > --width > 50px) {
  /* true lorsque --width est inférieur à 100px et supérieur à 50px */
}
```

La syntaxe de plage est également plus flexible quant à la manière dont chaque côté est écrit. Chaque côté peut être un nom de propriété personnalisée, une référence {{CSSxRef("var()")}}, une valeur littérale ou une expression `calc()`, et les opérandes peuvent apparaître dans n'importe quel ordre. Les exemples suivants sont tous valides&nbsp;:

```css
@container style(3 = --n) {
  /* … */
}
@container style(var(--n) = 3) {
  /* … */
}
@container style(calc(6/2) = var(--n)) {
  /* … */
}
```

La syntaxe simple est plus restrictive&nbsp;: le côté gauche doit être le nom de la propriété personnalisée (sans `var()`), et la valeur va à droite. Les exemples suivants sont tous **invalides**&nbsp;:

```css example-bad
@container style(var(--n): 3) {
  /* … */
}
@container style(3: --n) {
  /* … */
}
```

Parce que la syntaxe de plage nécessite que les deux côtés soient analysés comme l'un des types numériques listés, elle ne peut pas être utilisée pour comparer des valeurs de type mot-clé. Par exemple, étant donné `--s: new`, la requête `style(--s = new)` est fausse (parce que `new` n'est pas un nombre, une longueur, etc.), tandis que `style(--s: new)` est vraie.

En résumé&nbsp;:

- Utilisez **`style(--variable: value)`** pour les correspondances de type mot-clé ou chaîne de caractères, comme `style(--stock: low)` ou `style(--theme: dark)`.
- Utilisez **`style(--variable = value)`** (ou `<`, `<=`, `>`, `>=`) pour les comparaisons numériques, comme `style(--columns >= 3)` ou `style(--gap = 1rem)`.

### Requêtes imbriquées

Les requêtes de conteneur peuvent être imbriquées dans d'autres requêtes de conteneur. Les styles définis à l'intérieur de plusieurs requêtes de conteneur imbriquées sont appliqués lorsque toutes les requêtes de conteneur englobantes sont vraies.

```css
@container style(--theme: red) {
  output {
    outline: 1px dotted;
  }
  @container style(--theme: purple) {
    output {
      outline: 5px dotted;
    }
  }
}
```

Dans ce cas, le `<output>` a une bordure en pointillés de 5px s'il est imbriqué dans un conteneur où `--theme: purple` est défini, et que ce conteneur est lui-même imbriqué dans un conteneur dont la valeur de `--theme` est `red`.

### Déclarations et propriétés CSS des requêtes de style

Elle n'est pas encore prise en charge dans les navigateurs, la notation fonctionnelle `style()` peut inclure des déclarations CSS régulières, y compris des propriétés CSS et des paires de valeurs de propriétés.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Lorsque cette fonctionnalité sera prise en charge, cet exemple de base rendra la couleur de fond de tous les éléments {{HTMLElement("b")}} et {{HTMLElement("strong")}} jaunes lorsque le parent est déjà `bold`.

La correspondance se fait par rapport à la valeur calculée du conteneur parent&nbsp;; si le {{CSSxRef("font-weight")}} calculé du parent est `bold` (et non `bolder` ou `900`), il y a correspondance. Tout comme pour les requêtes de style de propriété personnalisée, nous n'avons pas eu besoin de définir des éléments comme conteneurs de style, car tous les éléments sont des conteneurs de style par défaut. Tant qu'un élément n'a pas de `container-name` défini, s'il a `font-weight: bold` défini ou hérité, il correspond.

Les fonctionnalités de style qui interrogent une propriété abrégée sont vraies si les valeurs calculées correspondent pour chacune de ses propriétés longues, et fausses sinon. Par exemple, `@container style({{CSSxRef("border")}}: 2px solid red)` est vrai si les 12 propriétés longues ({{CSSxRef("border-bottom-style")}}, etc.) qui composent cette propriété abrégée sont définies avec les mêmes valeurs équivalentes.

Les valeurs CSS globales `revert` et `revert-layer` sont invalides en tant que valeurs dans un `<style-feature>` et rendent la requête de style du conteneur fausse.

Ne pas appliquer les styles que vous interrogez dans la requête de style à l'élément que vous mettez en forme avec cette requête, car cela peut provoquer une boucle infinie.

Il est prévu que les requêtes de style acceptent également les propriétés dans un contexte booléen. La requête de style retourne faux si la valeur de la propriété est la valeur initiale de cette propriété (si elle n'a pas été modifiée), et vrai sinon.

```css
@container style(font-weight) {
}
```

L'exemple ci-dessus retourne vrai pour tout élément dont la valeur de `font-weight` diffère de sa valeur initiale. Les feuilles de style des agents utilisateurs définissent `font-weight: bold` pour les éléments {{HTMLElement("heading_elements", "d'en-tête")}} et {{HTMLElement("th")}}, par exemple. Certains navigateurs définissent {{HTMLElement("strong")}} et {{HTMLElement("b")}} sur `bold`, d'autres sur `bolder`. {{HTMLElement("optgroup")}} a également parfois un `font-weight` autre que `normal` défini par l'agent utilisateur. Tant que le `font-weight` de l'élément n'est pas la valeur par défaut pour cet agent utilisateur, la requête de style retourne vrai.

Ces fonctionnalités ne sont pas encore prises en charge dans les navigateurs.

## Voir aussi

- [Les requêtes de média](/fr/docs/Web/CSS/Guides/Media_queries)
- La règle {{CSSxRef("@container")}}
- La propriété {{CSSxRef("contain")}}
- La propriété raccourcie {{CSSxRef("container")}}
- La propriété {{CSSxRef("container-name")}}
- [Utiliser les requêtes d'état de défilement des conteneurs](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Comprendre `aspect-ratio`](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Commencer avec les requêtes de style <sup>(angl.)</sup>](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Requêtes de style <sup>(angl.)</sup>](https://una.im/style-queries/) sur una.im (2022)
