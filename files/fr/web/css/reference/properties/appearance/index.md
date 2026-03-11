---
title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: a1c041f5d15330c7bcd85e9bf93d88f759174cf5
---

La propriété [CSS](/fr/docs/Web/CSS) **`appearance`** définit l'apparence rendue des éléments de module d'interface utilisateur remplacés, tels que les contrôles de formulaire. Le plus souvent, ces éléments reçoivent une mise en forme native, spécifique à la plateforme, basée sur le thème du système d'exploitation, ou une apparence primitive avec des styles pouvant être remplacés à l'aide de CSS.

{{InteractiveExample("Démonstration CSS&nbsp;: appearance")}}

```css interactive-example-choice
appearance: auto;
```

```css interactive-example-choice
appearance: none;
```

```css interactive-example-choice
appearance: textfield;
```

```html interactive-example
<section id="default-example">
  <div class="background" id="example-element">
    <input type="search" value="search" aria-label="unlabeled search" />
    <input type="checkbox" aria-label="unlabeled checkbox" />
    <input type="radio" aria-label="unlabeled radio button" />
    <button>Button</button>
  </div>
</section>
```

```css interactive-example
input,
button {
  appearance: inherit;
}
```

## Syntaxe

```css
/* Valeurs CSS Basic User Interface de niveau 4 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;
appearance: base-select;

/* Valeurs globales */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* Valeurs <compat-auto> qui ont le même effet que 'auto' */
appearance: button;
appearance: checkbox;
```

### Valeurs

La propriété `appearance` peut être appliquée à tous les éléments et pseudo-éléments, mais l'effet de la valeur définie, s'il y en a un, dépend de l'élément auquel elle est appliquée.

- `none`
  - : Donne au module une apparence _primitive_, le rendant personnalisable avec CSS, tout en conservant la fonctionnalité native du module. Cette valeur n'affecte pas les éléments qui ne sont pas des modules.

- `auto`
  - : Définit les modules interactifs pour qu'ils s'affichent avec leur apparence _native du système d'exploitation_. Se comporte comme `none` sur les éléments sans mise en forme native du système d'exploitation.

- `base-select` {{Experimental_Inline}}
  - : Ne concerne que l'élément HTML {{HTMLElement("select")}} et le pseudo-élément {{CSSxRef("::picker()", "::picker(select)")}}, permettant leur mise en forme.

- `<compat-special>`
  - : A un effet similaire à `auto` sur certains éléments.
    - `textfield`
      - : Fait en sorte que l'apparence de certains types de `<input>` [corresponde à celle du type `text`](#exemple_interactif).
    - `menulist-button`
      - : Lorsqu'il est appliqué à l'élément `<select>`, le style du sélecteur déroulant [correspond à son état par défaut](#setting_the_appearance_of_a_select).

- `<compat-auto>`
  - : Inclus pour la rétrocompatibilité&nbsp;; les valeurs possibles incluent `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` et `textarea`. Toutes ces valeurs se comportent comme `auto`&nbsp;: utilisez plutôt `auto`.

> [!NOTE]
> La spécification définit également une valeur `base`. Celle-ci n'est pas encore prise en charge par les navigateurs.

#### Valeurs non standard

Certaines valeurs non standard sont également prises en charge dans certains navigateurs&nbsp;:

- `slider-vertical` {{Non-standard_Inline}}
  - : Rend le curseur vertical lorsqu'il est appliqué aux éléments `<input type="range">`. Pour [créer un curseur vertical](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls), il faut plutôt définir {{CSSxRef("writing-mode")}} à `vertical-lr` et {{CSSxRef("direction")}} à `rtl`.

- `-apple-pay-button` {{Non-standard_Inline}}
  - : Affiche le logo Apple Pay lorsqu'il est appliqué à un élément HTML {{HTMLElement("button")}}, {{HTMLElement("a")}} ou {{HTMLElement("input")}} de type `button` ou `reset`.

## Description

La propriété `appearance` permet d'afficher les éléments avec leur style natif du système d'exploitation selon le thème de ce dernier, ainsi que de supprimer toute mise en forme native de la plateforme avec la valeur `none`. Définir `appearance: none`, ou modifier l'apparence des modules d'interface utilisateur, ne change pas la fonctionnalité de l'élément.

Alors que la plupart des éléments d'un document peuvent être entièrement mis en forme avec CSS, les contrôles d'interface (_modules_) sont généralement rendus par le navigateur en utilisant les styles natifs du système d'exploitation. Cette apparence _native_ varie selon les systèmes d'exploitation et les navigateurs. Dans cet état par défaut, les modules offrent peu, voire aucune, possibilité de mise en forme via CSS. Les éléments qui possèdent cette apparence native sont définis dans HTML.

La propriété `appearance` offre un certain contrôle sur l'apparence des modules HTML qui, par défaut, ressemblent à des contrôles natifs du système d'exploitation. Notamment, la valeur `none` supprime une partie de l'apparence native d'un module. Cela donne un aspect _primitif_ qui peut être mis en forme avec CSS tout en conservant la fonctionnalité et les interactions utilisateur natives.

Certains modules disparaissent complètement lorsque `appearance: none` est appliqué. Les contrôles masqués restent cependant interactifs. Par exemple, cliquer sur un {{HTMLElement("label")}} associé à une case à cocher `appearance: none` activera ou désactivera l'état coché de la case.

Comme `none` peut rendre un module invisible, la valeur `base` a été ajoutée pour fournir une apparence de base aux modules. Lorsqu'elle est prise en charge, la valeur `base` garantit que les modules conservent leur apparence native tout en permettant d'utiliser CSS pour modifier les styles qui ne sont pas modifiables par défaut. Contrairement à `none`, qui peut faire disparaître les boutons radio et les cases à cocher, `base` donne au module une apparence primitive avec des styles natifs par défaut utilisables et interopérables, tout en permettant un bon degré de personnalisation via CSS. Bien que cette valeur `base` ne soit pas encore prise en charge, les nombreuses valeurs `<compat-auto>` offrent une fonctionnalité similaire mais sont spécifiques à chaque type et non globales.

La valeur `base-select`, qui concerne uniquement l'élément {{HTMLElement("select")}} et le pseudo-élément {{CSSxRef("::picker()", "::picker(select)")}}, permet [de mettre en forme les éléments `<select>` et le sélecteur](#définir_lapparence_dun_sélecteur) (qui contient les éléments `<option>`). Le sélecteur est affiché dans le calque supérieur, comme une fenêtre contextuelle. Lorsque `base-select` est défini, le sélecteur peut être positionné par rapport à la liste déroulante (ou à d'autres éléments) en utilisant les fonctionnalités de [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). De plus, la valeur `base-select` fait que le `<select>` n'est pas affiché en dehors de la fenêtre du navigateur ou ne déclenche pas de composants intégrés du système d'exploitation mobile. Il n'est aussi plus dimensionné en fonction de la largeur de l'élément `<option>` le plus large.

### Valeurs non standard préfixées

Avant la standardisation, les propriétés préfixées **`-moz-appearance`** et **`-webkit-appearance`** permettaient d'afficher les éléments comme des modules d'interface utilisateur tels que des boutons ou des cases à cocher. Les valeurs non standard suivantes peuvent être rencontrées dans des feuilles de style héritées, le plus souvent comme valeurs de composant d'arbre d'ombre pour les [pseudo-éléments préfixés](/fr/docs/Web/CSS/Reference/Webkit_extensions#pseudo-éléments).

<details>
<summary>Valeurs non standard</summary>

- `attachment`
- `borderless-attachment`
- `button-bevel`
- `caps-lock-indicator`
- `caret`
- `checkbox-container`
- `checkbox-label`
- `checkmenuitem`
- `color-well`
- `continuous-capacity-level-indicator`
- `default-button`
- `discrete-capacity-level-indicator`
- `inner-spin-button`
- `image-controls-button`
- `list-button`
- `listitem`
- `media-enter-fullscreen-button`
- `media-exit-fullscreen-button`
- `media-fullscreen-volume-slider`
- `media-fullscreen-volume-slider-thumb`
- `media-mute-button`
- `media-play-button`
- `media-overlay-play-button`
- `media-return-to-realtime-button`
- `media-rewind-button`
- `media-seek-back-button`
- `media-seek-forward-button`
- `media-toggle-closed-captions-button`
- `media-slider`
- `media-sliderthumb`
- `media-volume-slider-container`
- `media-volume-slider-mute-button`
- `media-volume-slider`
- `media-volume-sliderthumb`
- `media-controls-background`
- `media-controls-dark-bar-background`
- `media-controls-fullscreen-background`
- `media-controls-light-bar-background`
- `media-current-time-display`
- `media-time-remaining-display`
- `menulist-text`
- `menulist-textfield`
- `meterbar`
- `number-input`
- `progress-bar-value`
- `progressbar`
- `progressbar-vertical`
- `range`
- `range-thumb`
- `rating-level-indicator`
- `relevancy-level-indicator`
- `scale-horizontal`
- `scalethumbend`
- `scalethumb-horizontal`
- `scalethumbstart`
- `scalethumbtick`
- `scalethumb-vertical`
- `scale-vertical`
- `scrollbarthumb-horizontal`
- `scrollbarthumb-vertical`
- `scrollbartrack-horizontal`
- `scrollbartrack-vertical`
- `searchfield-decoration`
- `searchfield-results-decoration`
- `searchfield-results-button`
- `searchfield-cancel-button`
- `snapshotted-plugin-overlay`
- `sheet`
- `sliderthumb-horizontal`
- `sliderthumb-vertical`
- `textfield-multiline`

</details>

Les auteur·ice·s sont encouragé·e·s à utiliser uniquement des mots-clés standard.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Cet exemple montre l'utilisation basique de la propriété `appearance`, modifiant l'apparence d'un élément HTML {{HTMLElement("input")}} dans certains navigateurs.

#### HTML

On inclut deux contrôles de formulaire de type `number` avec leurs libellés.

```html
<p>
  <label
    >Entrer un nombre&nbsp;: <input type="number" min="0" max="10"
  /></label>
</p>
<p>
  <label
    >Entrer un nombre&nbsp;: <input type="number" min="0" max="10" class="text"
  /></label>
</p>
```

#### CSS

On définit l'élément avec la classe `text` pour qu'il ressemble à un champ de texte.

```css
.text {
  appearance: textfield;
}
```

#### Résultats

{{EmbedLiveSample("Exemple simple", 600, 100)}}

Selon le navigateur, le curseur de sélection peut être visuellement supprimé lorsque le contrôle est configuré pour ressembler à un champ de texte. La propriété `appearance` n'a aucun effet sur la fonctionnalité&nbsp;: par exemple, même s'il n'y a plus de curseur à cliquer, les touches fléchées haut et bas permettent toujours d'incrémenter et de décrémenter la valeur.

### Apparence définie sur `none`

L'exemple suivant montre comment supprimer la mise en forme par défaut d'une case à cocher, d'un bouton radio et d'un élément HTML {{HTMLElement("select")}}, puis appliquer une mise en forme personnalisée.

#### HTML

On inclut des paires de cases à cocher, de boutons radio et d'éléments `<select>`, ainsi que leurs libellés associés&nbsp;:

```html
<label><input type="checkbox" /> Non cochée par défaut </label>
<label><input type="checkbox" checked /> Cochée par défaut </label>

<hr />

<label><input type="radio" name="radio" /> Non cochée par défaut </label>
<label><input type="radio" name="radio" checked /> Cochée par défaut </label>

<hr />

<label
  >Sélecteur sans mise en forme
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>

<label
  >Sélecteur avec mise en forme
  <select class="none">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>
```

#### CSS

```css hidden
label {
  display: block;
  margin: 0.5em 0;
}
```

On applique des styles aux éléments HTML {{HTMLElement("input")}} de type `checkbox`&nbsp;; ces styles créent un carré rouge si l'élément est stylable. On définit `appearance: none` sur l'état d'interface utilisateur {{CSSxRef(":checked")}} pour tous les inputs (`checkbox` et `radio`), ainsi que pour les éléments avec la classe `.none`. Cela supprime toute la mise en forme du bouton radio et de la case à cocher, à l'exception des marges, et permet d'appliquer tous les styles définis. Aucun style alternatif n'est fourni pour les boutons radio ou les éléments `<select>` lorsque `none` est défini.

```css
[type="checkbox"] {
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked,
.none {
  appearance: none;
}
```

#### Résultat

{{EmbedLiveSample("Apparence définie sur `none`", 600, 220)}}

Définir `appearance: none` permet d'appliquer une mise en forme aux éléments d'interface utilisateur, mais cela comporte aussi le risque de masquer le module. La case à cocher non cochée, avec sa propriété `appearance` par défaut à `auto`, ressemble à une case à cocher. Définir `appearance: none` dans l'état `:checked` permet d'appliquer une mise en forme.

Comme la case à cocher non cochée, le bouton radio non coché ressemble au module natif, car il l'est. Lorsqu'il est coché, avec `appearance: none` appliqué, le bouton radio disparaît&nbsp;; sa fonctionnalité est conservée, et seules ses marges affectent le rendu de la page.

### Définir l'apparence d'un sélecteur

Vous pouvez utiliser la propriété `appearance` pour activer une fonctionnalité personnalisée de sélecteur, permettant la mise en forme de l'élément `<select>` et de son sélecteur, qui représente la partie du contrôle de formulaire qui s'affiche devant tout.

#### HTML

On inclut trois éléments `<select>`, avec les mêmes enfants {{HTMLElement("option")}}. Comme pour chaque `<select>`, on inclut aussi les éléments HTML {{HTMLElement("label")}} associés. La troisième option contient plus de texte pour illustrer l'effet de `base-select` sur la largeur du `<select>`&nbsp;:

```html
<label for="creme-glacee1"
  >Saveur par défaut&nbsp;:
  <select id="creme-glacee1">
    <option>Asperge</option>
    <option>Dulce de leche</option>
    <option>Pistache, rhum-raisin et café</option>
  </select>
</label>
<label for="creme-glacee2"
  >Saveur select de base&nbsp;:
  <select id="creme-glacee2" class="baseSelect">
    <option>Asperge</option>
    <option>Dulce de leche</option>
    <option>Pistache, rhum-raisin et café</option>
  </select>
</label>
<label for="creme-glacee3"
  >Saveur menulist button&nbsp;:
  <select id="creme-glacee3" class="menulistButton">
    <option>Asperge</option>
    <option>Dulce de leche</option>
    <option>Pistache, rhum-raisin et café</option>
  </select>
</label>
```

#### CSS

On cible les sélecteurs de tous les éléments `<select>` en utilisant le pseudo-élément {{CSSxRef("::picker()")}} avec le paramètre `select`. On définit la valeur `appearance` de tous les sélecteurs et d'un élément `<select>` à `base-select`. On définit le dernier `<select>` à `menulist-button`. Le premier `<select>` reste à l'état `auto` par défaut&nbsp;:

```css
.baseSelect,
::picker(select) {
  appearance: base-select;
}
.menulistButton {
  appearance: menulist-button;
}
```

```css
label {
  display: block;
}
```

On définit des valeurs pour les propriétés {{CSSxRef("background-color")}} et {{CSSxRef("border")}} des `<select>` et de leurs sélecteurs pour illustrer les effets des valeurs de `appearance`&nbsp;:

```css
select {
  border: 1px solid red;
  background-color: orange;
}

::picker(select) {
  background-color: yellow;
  border: none;
}
```

#### Résultats

{{EmbedLiveSample("Définir l'apparence d'un sélecteur", 1050, 80)}}

Bien que les styles {{CSSxRef("background-color")}} et {{CSSxRef("border")}} soient définis sur tous les éléments `<select>` et leurs sélecteurs, les styles `::picker(select)` n'affectent le sélecteur que lorsque le select et le sélecteur ont la propriété `appearance` définie à `base-select`. Le premier et le troisième select ont le même aspect car `menulist-button` est un mot-clé de compatibilité.

Notez que, par défaut, la taille en ligne du `<select>` correspond généralement à celle de l'`<option>` ayant le plus de texte, et que le sélecteur déroulant apparaît au-dessus de la page affichée lorsqu'il est ouvert, ce qui fait qu'il n'est pas contraint par la page environnante et donc entièrement visible. Ces affirmations ne sont plus vraies lorsque `base-select` est défini.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La caractéristique média [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
