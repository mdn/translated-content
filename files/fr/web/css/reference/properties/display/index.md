---
title: display
slug: Web/CSS/Reference/Properties/display
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`display`** définit si un élément est traité comme une [boîte de bloc ou en ligne](/fr/docs/Web/CSS/Guides/Display/Flow_layout) et le mode de disposition utilisé pour ses enfants, comme la [mise en flux](/fr/docs/Web/CSS/Guides/Display/Flow_layout), la disposition [grille](/fr/docs/Web/CSS/Guides/Grid_layout) ou la disposition [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout).

Formellement, la propriété **`display`** définit les types d'affichage interne et externe d'un élément. Le type externe détermine la participation de l'élément à la [mise en flux](/fr/docs/Web/CSS/Guides/Display/Flow_layout)&nbsp;; le type interne définit la disposition des enfants. Certaines valeurs de `display` sont entièrement définies dans leurs propres spécifications&nbsp;; par exemple, le détail de ce qui se passe lorsque `display: flex` est déclaré est défini dans la spécification du modèle de boîte flexible CSS.

{{InteractiveExample("Démonstration CSS&nbsp;: display")}}

```css interactive-example-choice
display: block;
```

```css interactive-example-choice
display: inline-block;
```

```css interactive-example-choice
display: none;
```

```css interactive-example-choice
display: flex;
```

```css interactive-example-choice
display: grid;
```

```html interactive-example
<p>
  Appliquez différentes valeurs de <code>display</code> sur la
  <code>div</code> encadrée en pointillés oranges, qui contient trois éléments
  enfants.
</p>
<section class="default-example" id="default-example">
  <div class="example-container">
    Le texte A.
    <div id="example-element">
      <div class="child">Enfant 1</div>
      <div class="child">Enfant 2</div>
      <div class="child">Enfant 3</div>
    </div>
    Le texte B.
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 100%;
  height: 100%;
}

code {
  background: #88888888;
}

#example-element {
  border: 3px dashed orange;
}

.child {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #ccccff;
  border: 1px solid #ababab;
  color: black;
}
```

## Syntaxe

```css
/* Valeurs précomposées */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* Suppression de boîte */
display: none;
display: contents;

/* Syntaxe à mots-clés multiples */
display: block flex;
display: block flow;
display: block flow-root;
display: block grid;
display: inline flex;
display: inline flow;
display: inline flow-root;
display: inline grid;

/* Autres valeurs */
display: table;
display: table-row; /* Tous les éléments de tableau ont une valeur CSS display équivalente */
display: list-item;

/* Valeurs globales */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

La propriété CSS `display` se définit à l'aide de valeurs de mots-clés.

## Groupes des valeurs

Les valeurs de mots-clés peuvent être regroupées en six catégories de valeurs.

### Extérieur

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Ces mots-clés définissent le type d'affichage extérieur de l'élément, c'est-à-dire son rôle dans la mise en flux&nbsp;:
    - `block`
      - : L'élément génère une boîte de bloc, créant des retours à la ligne avant et après l'élément dans le flux normal.
    - `inline`
      - : L'élément génère une ou plusieurs boîtes en ligne qui ne créent pas de retour à la ligne avant ou après elles-mêmes. En flux normal, l'élément suivant sera sur la même ligne s'il y a de la place.

> [!NOTE]
> Lorsque les navigateurs qui prennent en charge la syntaxe à plusieurs mots-clés rencontrent une propriété d'affichage qui ne possède qu'une valeur **extérieure** (par exemple, `display: block` ou `display: inline`), la valeur intérieure est définie sur `flow` (par exemple, `display: block flow` et `display: inline flow`).

> [!NOTE]
> Pour garantir le bon fonctionnement des mises en page sur les anciens navigateurs, vous pouvez utiliser la syntaxe a valeur unique, par exemple `display: inline flex` peut avoir la solution de repli suivante
>
> ```css
> .container {
>   display: inline-flex;
>   display: inline flex;
> }
> ```
>
> Voir [Utiliser la syntaxe a mots-cles multiples avec display en CSS](/fr/docs/Web/CSS/Guides/Display/Multi-keyword_syntax) pour plus d'informations.

### Intérieur

- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Ces mots-clés définissent le type d'affichage intérieur de l'élément, ce qui définit le type de contexte de formatage dans lequel son contenu est disposé (en supposant qu'il s'agit d'un élément non remplacé). Lorsqu'un de ces mots-clés est utilisé seul comme valeur unique, le type d'affichage extérieur de l'élément est par défaut `block` (à l'exception de `ruby`, qui est par défaut `inline`).
    - `flow`
      - : L'élément dispose son contenu en utilisant la mise en flux (mise en page bloc et en ligne).

        Si son type d'affichage extérieur est `inline` et qu'il participe à un contexte de formatage bloc ou en ligne, il génère alors une boîte en ligne. Sinon, il génère une boîte de bloc.

        Selon la valeur d'autres propriétés (comme {{CSSxRef("position")}}, {{CSSxRef("float")}} ou {{CSSxRef("overflow")}}) et selon qu'il participe lui-même à un contexte de formatage bloc ou en ligne, il établit soit un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) pour son contenu, soit il intègre son contenu dans le contexte de formatage parent.

    - `flow-root`
      - : L'élément génère une boîte de bloc qui établit un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context), définissant où se trouve la racine du formatage.
    - `table`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("table")}}. Cela définit une boîte de niveau bloc.
    - `flex`
      - : L'élément se comporte comme un élément de niveau bloc et dispose son contenu selon le [modèle flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout).
    - `grid`
      - : L'élément se comporte comme un élément de niveau bloc et dispose son contenu selon le [modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts).
    - `ruby`
      - : L'élément se comporte comme un élément de niveau en ligne et dispose son contenu selon le modèle de formatage ruby. Il se comporte comme les éléments HTML {{HTMLElement("ruby")}} correspondants.

> [!NOTE]
> Lorsque les navigateurs qui prennent en charge la syntaxe à mots-clés multiples rencontrent une propriété d'affichage qui ne possède qu'une valeur **intérieure** (par exemple, `display: flex` ou `display: grid`), la valeur extérieure est définie sur `block` (par exemple, `display: block flex` et `display: block grid`).

### Élément de liste

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : L'élément génère une boîte de bloc pour le contenu et une boîte en ligne distincte pour l'élément de liste.

Une valeur unique de `list-item` fera que l'élément se comportera comme un élément de liste.
Cela peut être utilisé avec {{CSSxRef("list-style-type")}} et {{CSSxRef("list-style-position")}}.

`list-item` peut aussi être combiné avec n'importe quel mot-clé {{CSSxRef("&lt;display-outside&gt;")}} et le mot-clé `flow` ou `flow-root` {{CSSxRef("&lt;display-inside&gt;")}}.

> [!NOTE]
> Dans les navigateurs qui prennent en charge la syntaxe à mots-clés multiples, si aucune valeur intérieure n'est définie, elle sera par défaut `flow`.
> Si aucune valeur extérieure n'est définie, la boîte principale aura un type d'affichage extérieur `block`.

### Interne

- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Certains modèles de disposition comme `table` et `ruby` ont une structure interne complexe, avec plusieurs rôles différents que leurs enfants et descendants peuvent remplir.
    Cette section définit ces valeurs d'affichage «&nbsp;internes&nbsp;», qui n'ont de sens que dans ce mode de disposition particulier.
    - `table-row-group`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("tbody")}}.
    - `table-header-group`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("thead")}}.
    - `table-footer-group`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("tfoot")}}.
    - `table-row`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("tr")}}.
    - `table-cell`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("td")}}.
    - `table-column-group`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("colgroup")}}.
    - `table-column`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("col")}}.
    - `table-caption`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("caption")}}.
    - `ruby-base`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("rb")}}.
    - `ruby-text`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("rt")}}.
    - `ruby-base-container`
      - : Ces éléments sont générés comme des boîtes anonymes.
    - `ruby-text-container`
      - : Ces éléments se comportent comme les éléments HTML {{HTMLElement("rtc")}}.

### Boîte

- {{CSSxRef("&lt;display-box&gt;")}}
  - : Ces valeurs définissent si un élément génère ou non des boîtes d'affichage.
    - `contents`
      - : Ces éléments ne produisent pas de boîte spécifique par eux-mêmes. Ils sont remplacés par leur pseudo-boîte et les boîtes de leurs enfants. Veuillez noter que la spécification <i lang="en">CSS Display Level 3</i> définit comment la valeur `contents` doit affecter les «&nbsp;éléments inhabituels&nbsp;» — des éléments qui ne sont pas rendus uniquement par les concepts de boîte CSS, comme les éléments remplacés. Voir [Annexe B&nbsp;: Effets de display&nbsp;: contents sur les éléments inhabituels <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#unbox) pour plus de détails.

    - `none`
      - : Désactive l'affichage d'un élément afin qu'il n'ait aucun effet sur la mise en page (le document est rendu comme si l'élément n'existait pas). Tous les éléments descendants ont également leur affichage désactivé.
        Pour qu'un élément occupe l'espace qu'il prendrait normalement, mais sans rien afficher, utilisez plutôt la propriété {{CSSxRef("visibility")}}.

### Précomposées

- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 utilise une syntaxe précomposée à mot-clé unique pour la propriété `display`, nécessitant des mots-clés distincts pour les variantes de mode de disposition de niveau bloc et de niveau en ligne.
    - `inline-block`
      - : L'élément génère une boîte de bloc qui s'écoule avec le contenu environnant comme s'il s'agissait d'une seule boîte en ligne (se comportant comme le ferait un élément remplacé).

        Cela équivaut à `inline flow-root`.

    - `inline-table`
      - : La valeur `inline-table` n'a pas de correspondance directe en HTML. Elle se comporte comme un élément HTML {{HTMLElement("table")}}, mais comme une boîte en ligne, plutôt qu'une boîte de niveau bloc. À l'intérieur de la boîte de table se trouve un contexte de niveau bloc.

        Cela équivaut à `inline table`.

    - `inline-flex`
      - : L'élément se comporte comme un élément de niveau en ligne et dispose son contenu selon le modèle flexbox.

        Cela équivaut à `inline flex`.

    - `inline-grid`
      - : L'élément se comporte comme un élément de niveau en ligne et dispose son contenu selon le modèle de grille.

        Cela équivaut à `inline grid`.

### Quelle syntaxe utiliser ?

Le [module d'affichage CSS](/fr/docs/Web/CSS/Guides/Display) décrit une syntaxe à mots-clés multiples pour les valeurs que vous pouvez utiliser avec la propriété `display` afin de définir explicitement l'affichage **extérieur** et **intérieur**.
Les valeurs à mot-clé unique (valeurs précomposées `<display-legacy>`) sont prises en charge pour la rétrocompatibilité.

Par exemple, en utilisant deux valeurs, vous pouvez définir un conteneur flex en ligne comme suit&nbsp;:

```css
.container {
  display: inline flex;
}
```

Cela peut aussi être défini en utilisant la valeur unique héritée&nbsp;:

```css
.container {
  display: inline-flex;
}
```

Pour plus d'informations sur ces changements, consultez le guide [Utiliser la syntaxe à mots-clés multiples avec `display` en CSS](/fr/docs/Web/CSS/Guides/Display/Multi-keyword_syntax).

## Description

Les pages individuelles pour les différents types de valeurs que la propriété `display` peut recevoir présentent plusieurs exemples de ces valeurs en action — consultez la section [Syntaxe](#syntaxe). Vous pouvez également consulter les ressources suivantes, qui détaillent en profondeur les différentes valeurs d'affichage.

### Valeurs à mots-clés multiples

- [Utiliser la syntaxe à mots-clés multiples avec display en CSS](/fr/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### Mise en flux CSS (display: block, display: inline)

- [Disposition en bloc et en ligne dans un flux normal](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Disposition en flux et débordement](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
- [Disposition en flux et modes d'écriture](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Introduction aux contextes de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Dans le flux et hors du flux](/fr/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)

### `display: flex`

- [Concepts de base du modèle flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Aligner les éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Contrôler les ratios des éléments flexibles sur l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Maîtriser le retour à la ligne des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Relation du modèle flexible avec les autres méthodes de disposition](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Cas d'utilisation typiques du modèle flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### `display: grid`

- [Concepts de base du modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Relation avec les autres méthodes de disposition](/fr/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Placement basé sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Zones de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Disposition avec des lignes de grille nommées](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Placement automatique dans le modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [Aligner les éléments dans le modèle de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Grilles, valeurs logiques et modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [Disposition de grille CSS et accessibilité](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Réaliser des dispositions courantes avec les grilles](/fr/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)

### Animer l'affichage

Les [navigateurs compatibles](#compatibilité_des_navigateurs) animent la propriété `display` avec un [type d'animation discrète](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète). Cela signifie généralement que la propriété bascule entre deux valeurs à 50% de la durée de l'animation.

Il existe une exception, lors de l'animation vers ou depuis `display: none`. Dans ce cas, le navigateur bascule entre les deux valeurs de sorte que le contenu animé soit affiché pendant toute la durée de l'animation. Par exemple&nbsp;:

- Lorsqu'on anime la propriété `display` de `none` vers `block` (ou une autre valeur visible), la valeur passe à `block` à `0%` de la durée de l'animation pour qu'elle soit visible tout du long.
- Lorsqu'on anime la propriété `display` de `block` (ou une autre valeur visible) vers `none`, la valeur passe à `none` à `100%` de la durée de l'animation pour qu'elle soit visible tout du long.

Ce comportement est utile pour créer des animations d'entrée/sortie où vous souhaitez, par exemple, retirer un conteneur du DOM avec `display: none`, mais le faire disparaître progressivement avec {{CSSxRef("opacity")}} au lieu de le faire disparaître instantanément.

Lorsque vous animez la propriété `display` avec [les animations CSS](/fr/docs/Web/CSS/Guides/Animations), vous devez fournir la valeur initiale de `display` dans une image clé explicite (par exemple en utilisant `0%` ou `from`). Consultez [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) pour un exemple.

Lorsque vous animez la propriété `display` avec [les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions), deux fonctionnalités supplémentaires sont nécessaires&nbsp;:

- {{CSSxRef("@starting-style")}} permet de définir les valeurs de départ des propriétés que vous souhaitez faire évoluer lors de la première apparition de l'élément animé. Cela permet d'éviter des comportements inattendus. Par défaut, les transitions CSS ne sont pas déclenchées lors de la première mise à jour du style d'un élément ou lorsque le type d'affichage passe de `none` à un autre type.
- [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior) doit être défini sur la déclaration {{CSSxRef("transition-property")}} (ou sur le raccourci {{CSSxRef("transition")}}) pour activer les transitions de la propriété `display`.

Pour des exemples de transition de la propriété `display`, consultez les pages [`@starting-style`](/fr/docs/Web/CSS/Reference/At-rules/@starting-style#exemples) et [`transition-behavior`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior#exemples).

## Accessibilité

### `display: none;`

Utiliser la propriété `display` avec la valeur `none` sur un élément entraînera son retrait de l'[arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Cet élément ainsi que ses descendants ne seront plus annoncés par les lecteurs d'écrans.

Si vous souhaitez masquer un élément visuellement, une alternative plus accessible consiste à utiliser [une combinaison de propriétés <sup>(angl.)</sup>](https://webaim.org/techniques/css/invisiblecontent/) afin de le retirer de l'écran mais de le conserver lisible pour les technologies d'assistance.

Bien que `display: none` masque le contenu de l'arbre d'accessibilité, les éléments masqués qui sont référencés par les attributs `aria-describedby` ou `aria-labelledby` d'éléments visibles restent accessibles aux technologies d'assistance.

### `display: contents;`

Tout élément ciblé avec `display: contents` sera retiré de [l'arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#api_daccessibilité) par la plupart des navigateurs. Ainsi, l'élément et ses descendants ne seront plus annoncés par les outils d'assistance tels que les lecteurs d'écran. Ce comportement est incorrect selon [la spécification CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-display/#valdef-display-content).

- [Obtenir un balisage plus accessible grâce à `display: contents`, par Hidde de Vries <sup>(angl.)</sup>](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [`display: contents` n'est pas un outil de réinitialisation CSS, par Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Les tableaux

Modifier la valeur de `display` pour un élément HTML {{HTMLElement("table")}} afin d'utiliser la valeur `block`, `grid` ou `flex` modifiera sa représentation au sein de [l'arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#api_daccessibilité). Aussi, le tableau ne sera plus correctement annoncé par les technologies d'assistance.

- [Une rapide note sur l'impact de la propriété CSS `display` sur la sémantique des tableaux — The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Du contenu masqué avec une meilleure accessibilité - Go Make Things <sup>(angl.)</sup>](https://gomakethings.com/hidden-content-for-better-a11y/)
- [Explications sur la règle 1.3 de WCAG sur MDN](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.3_—_créer_du_contenu_pouvant_être_présenté_de_différentes_façons)
- [Comprendre le critère de succès 1.3.1, W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer les valeurs de `display`

Dans cet exemple, vous avez deux éléments conteneurs de niveau bloc, chacun contenant trois enfants en ligne. En dessous, un menu déroulant vous permet d'appliquer différentes valeurs de `display` aux conteneurs, afin de comparer et de contraster la façon dont les différentes valeurs affectent la disposition de l'élément et celle de leurs enfants.

Nous avons ajouté {{CSSxRef("padding")}} et {{CSSxRef("background-color")}} sur les conteneurs et leurs enfants, afin qu'il soit plus facile de voir l'effet des valeurs d'affichage.

#### HTML

```html
<article class="container">
  <span>Premier</span>
  <span>Second</span>
  <span>Troisième</span>
</article>

<article class="container">
  <span>Premier</span>
  <span>Second</span>
  <span>Troisième</span>
</article>

<div>
  <label for="display">Choisissez une valeur d'affichage&nbsp;:</label>
  <select id="display">
    <option selected>block</option>
    <option>block flow</option>
    <option>inline</option>
    <option>inline flow</option>
    <option>flow</option>
    <option>flow-root</option>
    <option>block flow-root</option>
    <option>table</option>
    <option>block table</option>
    <option>flex</option>
    <option>block flex</option>
    <option>grid</option>
    <option>block grid</option>
    <option>list-item</option>
    <option>block flow list-item</option>
    <option>inline flow list-item</option>
    <option>block flow-root list-item</option>
    <option>inline flow-root list-item</option>
    <option>contents</option>
    <option>none</option>
    <option>inline-block</option>
    <option>inline flow-root</option>
    <option>inline-table</option>
    <option>inline table</option>
    <option>inline-flex</option>
    <option>inline flex</option>
    <option>inline-grid</option>
    <option>inline grid</option>
  </select>
</div>
```

#### CSS

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
  letter-spacing: 1px;
  padding-top: 10px;
}

article {
  background-color: red;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article,
div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll(".container");
const select = document.querySelector("select");

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener("change", updateDisplay);

updateDisplay();
```

#### Résultat

{{EmbedLiveSample("Comparer les valeurs de `display`", "100%", 440)}}

Notez que certaines valeurs à mots-clés multiples sont ajoutées à titre d'illustration et ont les équivalences suivantes&nbsp;:

- `block` = `block flow`
- `inline` = `inline flow`
- `flow` = `block flow`
- `flow-root` = `block flow-root`
- `table` = `block table`
- `flex` = `block flex`
- `grid` = `block grid`
- `list-item` = `block flow list-item`
- `inline-block` = `inline flow-root`
- `inline-table` = `inline table`
- `inline-flex` = `inline flex`
- `inline-grid` = `inline grid`

Vous pouvez trouver plus d'exemples dans les pages pour chaque type d'affichage séparé dans la section [Groupes des valeurs](#groupes_des_valeurs).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- Les propriétés {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
- L'attribut SVG {{SVGAttr("display")}}
- [Explications sur les contextes de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Les dispositions de bloc et en ligne dans un flux normal](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
