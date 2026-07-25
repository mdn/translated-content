---
title: Propriété CSS `font`
short-title: font
slug: Web/CSS/Reference/Properties/font
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`font`** permet de définir toutes les différentes propriétés de la police d'un élément. Elle permet aussi d'attribuer à un élément une police système.

{{InteractiveExample("Démonstration CSS&nbsp;: font")}}

```css interactive-example-choice
font:
  1.2rem "Fira Sans",
  sans-serif;
```

```css interactive-example-choice
font:
  italic 1.2rem "Fira Sans",
  serif;
```

```css interactive-example-choice
font: italic small-caps bold 16px/2 cursive;
```

```css interactive-example-choice
font: small-caps bold 24px/1 sans-serif;
```

```css interactive-example-choice
font: caption;
```

```html interactive-example
<section id="default-example">
  <q id="example-element">
    Comme chacun sait, les préjugés sont particulièrement difficiles à éradiquer
    d'un cœur dont le sol n'a jamais été ameubli ni fertilisé par
    l'éducation&nbsp;: ils y poussent, tenaces comme des mauvaises herbes parmi
    les pierres.
  </q>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Italic"),
    url("/shared-assets/fonts/FiraSans-Italic.woff2") format("woff2");
  font-weight: normal;
  font-style: italic;
}

section {
  margin-top: 10px;
  font-size: 1.1em;
}
```

Comme pour les autres propriétés CSS, les valeurs qui ne sont pas définies avec la propriété raccourcie sont définies avec leur valeur initiale, ce qui peut surcharger les valeurs définies précédemment avec les propriétés «&nbsp;détaillées&nbsp;». Bien qu'elles ne puissent pas directement être paramétrées avec `font`, les propriétés détaillées, {{CSSxRef("font-size-adjust")}}, et {{CSSxRef("font-kerning")}} sont également réinitialisées avec leurs valeurs initiales.

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("font-family")}}
- {{CSSxRef("font-size")}}
- {{CSSxRef("font-width")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-variant")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("line-height")}}

## Syntaxe

```css-nolint
/* font-size font-family */
font: 1.2em sans-serif;

/* font-size/line-height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em monospace;

/* font-width font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em Montserrat, Helvetica, sans-serif;

/* Polices système */
font: caption;
```

### Valeurs

La valeur est soit une propriété raccourcie définissant les différentes propriétés liées aux polices, soit un seul mot-clé `<system-font-family-name>`&nbsp;:

- `<'font-style'>` {{Optional_Inline}}
  - : Voir la propriété CSS {{CSSxRef("font-style")}}. Par défaut, `normal`.
- `<font-variant-css2>` {{Optional_Inline}}
  - : Soit la valeur `normal`, soit la valeur `small-caps` de la propriété CSS {{CSSxRef("font-variant")}}. Par défaut, `normal`.
- `<'font-weight'>` {{Optional_Inline}}
  - : Voir la propriété CSS {{CSSxRef("font-weight")}}. Par défaut, `normal`.
- `<font-width-css3>` {{Optional_Inline}}
  - : Les mots-clés pris en charge par la propriété CSS {{CSSxRef("font-width")}}. Par défaut, `normal`.
- `<'font-size'>`
  - : Voir la propriété CSS {{CSSxRef("font-size")}}.
- `<'line-height'>` {{Optional_Inline}}
  - : Voir la propriété CSS {{CSSxRef("line-height")}}. Par défaut, `normal`.
- `<'font-family'>`
  - : Voir la propriété CSS {{CSSxRef("font-family")}}. Doit être la dernière valeur.

- `<system-font-family-name>`
  - : Un mot-clé unique représentant une police système, y compris&nbsp;:
    - `caption`
      - : La police système utilisée pour les contrôles avec légende (boutons, menus déroulants, etc.).
    - `icon`
      - : La police système utilisée pour étiqueter les icônes.
    - `menu`
      - : La police système utilisée dans les menus (par exemple, les menus déroulants et les listes de menus).
    - `message-box`
      - : La police système utilisée dans les boîtes de dialogue.
    - `small-caption`
      - : La police système utilisée pour étiqueter les petits contrôles.
    - `status-bar`
      - : La police système utilisée dans les barres d'état des fenêtres.

    Il existe plusieurs valeurs non standard implémentées avec des préfixes.

## Description

La valeur de la propriété `font` est soit un mot-clé unique représentant un `system-font-family-name`, soit plusieurs valeurs de propriétés individuelles utilisées pour définir toutes les différentes propriétés de la police d'un élément.

### Déclarations de polices système

Si `font` est défini comme un mot-clé `<system-font-family-name>`, la valeur complète de la propriété doit être définie sur ce mot-clé unique, insensible à la casse. Les valeurs valides incluent `caption`, `icon`, `menu`, `message-box`, `small-caption` ou `status-bar`.

Les navigateurs prennent également en charge des valeurs non standard avec des préfixes.

- Chromium implémente `-webkit-control`, `-webkit-small-control` et `-webkit-mini-control`.
- Webkit inclut les valeurs de Chromium, et ajoute `-webkit-body`, `-webkit-pictograph` et `-webkit-ruby-text`, ainsi que plusieurs noms de polices système préfixés par `-apple-system-*`.
- Gecko implémente `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` et `-moz-field`.

La police système, ou `<system-font-family-name>`, ne peut être définie qu'avec la propriété `font`. La définition d'une seule valeur de mot-clé, telle que `font: icon`, définit la famille, la taille, le poids, le style, etc., de la police sur les valeurs que le navigateur définit pour la police système nommée. Toutes ces valeurs peuvent être modifiées avec des déclarations en propriété longue placées _après_ la déclaration `font`.

Inclure des composants en propriété longue `font` après le mot-clé `<system-font-family-name>` dans une valeur de propriété `font` invalide la déclaration. Par exemple, `font: icon small` est invalide.

Si un mot-clé `<system-font-family-name>` apparaît n'importe où dans la valeur autre que comme premier composant, le mot-clé est traité comme un {{CSSxRef("ident")}} représentant un nom de `font-family` standard. Par exemple, la déclaration `font: small icon` définit la `font-family` sur une police nommée `icon`, une police non système qui peut ou non exister. Cette déclaration définit également la `font-size` sur `small` et réinitialise toutes les autres propriétés de composant en propriété longue à leurs valeurs initiales.

### Déclarations raccourcies de polices

Si `font` est défini comme une déclaration raccourcie pour plusieurs propriétés liées aux polices, alors&nbsp;:

- elle doit inclure des valeurs pour&nbsp;:
  - {{CSSxRef("font-size")}}
  - {{CSSxRef("font-family")}}

- elle peut facultativement inclure des valeurs pour&nbsp;:
  - {{CSSxRef("font-style")}}
  - {{CSSxRef("font-variant")}}
  - {{CSSxRef("font-weight")}}
  - {{CSSxRef("font-width")}}
  - {{CSSxRef("line-height")}}

Comme pour toute propriété raccourcie, toutes les propriétés détaillées non définies sont définies à leurs valeurs initiales, ce qui peut éventuellement remplacer les valeurs précédemment définies à l'aide de propriétés non raccourcies. De plus, la propriété raccourcie réinitialise les propriétés suivantes à leurs valeurs initiales. La propriété raccourcie ne peut pas les définir explicitement&nbsp;:

- {{CSSxRef("font-feature-settings")}}
- {{CSSxRef("font-kerning")}}
- {{CSSxRef("font-language-override")}}
- {{CSSxRef("font-optical-sizing")}}
- {{CSSxRef("font-size-adjust")}}
- {{CSSxRef("font-variant-alternates")}}
- {{CSSxRef("font-variant-caps")}}
- {{CSSxRef("font-variant-east-asian")}}
- {{CSSxRef("font-variant-emoji")}}
- {{CSSxRef("font-variant-ligatures")}}
- {{CSSxRef("font-variant-numeric")}}
- {{CSSxRef("font-variant-position")}}
- {{CSSxRef("font-variation-settings")}}

### Ordre de la propriété raccourcie

L'ordre de certaines des valeurs détaillées au sein de la déclaration raccourcie `font` doit suivre quelques règles&nbsp;:

- Les composants `font-size` et `font-family` sont obligatoires (sauf pour les [déclarations de police système](#system_font_declarations)).
- Les composants `font-style`, `font-variant` et `font-weight` doivent précéder la valeur `font-size`.
- Une `line-height` ne peut être incluse que si `font-size` est incluse. Si elle est présente, la `line-height` doit suivre immédiatement le `font-size`, les deux valeurs étant séparées par une barre oblique (`/`), par exemple&nbsp;: `16px / 3`.
- La `font-family` doit être la dernière valeur définie.

### Composants avec des valeurs limitées

Pour des raisons de compatibilité, les valeurs valides des composants `font-variant` et `font-width` n'incluent pas toutes les valeurs valides ni les équivalents détaillés.

Les valeurs valides pour le composant `font-variant` sont limitées à `normal` ou `small-caps`. Bien qu'aucune autre valeur ne soit prise en charge, la déclaration raccourcie `font` réinitialise toutes les propriétés détaillées `font-variant-*` à `normal`, y compris {{CSSxRef("font-variation-settings")}}, {{CSSxRef("font-variant-position")}}, {{CSSxRef("font-variant-emoji")}}, {{CSSxRef("font-variant-caps")}}, {{CSSxRef("font-variant-ligatures")}}, {{CSSxRef("font-variant-numeric")}}, {{CSSxRef("font-variant-east-asian")}} et {{CSSxRef("font-variant-alternates")}}.

Les valeurs valides pour le composant `font-width` sont limitées aux mots-clés&nbsp;: `normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`. La propriété détaillée {{CSSxRef("font-width")}} prend également en charge les valeurs {{CSSxRef("&lt;percentage&gt;")}}, mais elles ne sont pas valides dans la déclaration raccourcie.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple définit la police (`font`) pour tous les éléments HTML {{HTMLElement("p")}}. Nous définissons la taille de police (`font-size`) à `12px` et la hauteur de ligne (`line-height`) à `14px`, en les séparant par une barre oblique (`/`). La déclaration définit également la famille de police (`font-family`) à `sans-serif`.

```css
p {
  font: 12px / 14px sans-serif;
}
```

```html hidden
<p>
  Ceci est un paragraphe de texte sans-serif. La taille de la police est petite,
  à seulement 12px. Si ce texte se renvoie à la ligne, la hauteur de ligne est
  assez serrée à 14px, donc cela peut être difficile à lire.
</p>
```

{{EmbedLiveSample("Utilisation simple", "100%", 100)}}

### Propriétés multiples

Dans cet exemple, nous définissons le `font-weight` à `bold`, le `font-style` à `italic`, le `font-size` à `large`, le `line-height` à `1.6` et le `font-family` à `serif`.

```css
p {
  font: bold italic large / 1.6 serif;
}
```

```html hidden
<p>
  Dans cet exemple, nous définissons le poids de la police à gras, le style de
  la police à italique, la taille de la police à grande, la hauteur de ligne à
  1,6 et la famille de polices à serif.
</p>
```

{{EmbedLiveSample("Propriétés multiples", "100%", 100)}}

### Police système

Cet exemple montre comment utiliser la propriété `font` pour définir une police système.

#### CSS

Nous définissons la police du paragraphe pour qu'elle ait la même `font-family`, `line-height`, `font-size`, etc., que la barre d'état de la fenêtre, puis nous définissons le `line-height` à `1.6`.

```css
p {
  font: status-bar;
  line-height: 1.6;
}
```

#### HTML

Notre HTML inclut un paragraphe ({{HTMLElement("p")}}) contenant un lien ({{HTMLElement("a")}}) avec une valeur d'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) compliquée. Lorsque vous survolez ou sélectionnez le lien rendu, la barre d'état de votre navigateur doit afficher la valeur de l'attribut `href`.

```html
<p>
  <a
    href="/%20The%20font%20should%20be%20the%20same%20
family%20and%20size%20and%20the%20text%20in%20the%20example."
    >Survolez ou sélectionnez ce texte. La police doit être de la même famille
    et de la même taille que le texte dans votre barre d'état.</a
  >
</p>
```

#### JavaScript

Comme l'URL dans notre lien HTML n'est pas une bonne pratique, nous incluons un script qui empêche le document de rediriger vers une page inexistante lorsque le lien est cliqué.

```js
const aElem = document.querySelector("a");
aElem.addEventListener("click", (e) => {
  e.preventDefault();
  return false;
});
```

#### Résultat

{{EmbedLiveSample("Police système", "100%", 100)}}

Survolez ou sélectionnez le lien. La police doit être de la même famille et de la même taille que le texte dans votre barre d'état en bas de la fenêtre de votre navigateur.

### Générateur de déclaration abrégée

Dans cette démonstration en direct, vous pouvez sélectionner différents boutons radio pour générer différentes valeurs abrégées, tout en visualisant les effets des déclarations abrégées que vous créez.

```html hidden
<p>
  Changez les boutons radio ci-dessous pour voir le raccourci généré et son
  effet.
</p>
<form action="createShortHand()">
  <div class="cf">
    <div class="setPropCont">
      font-style<br />
      <input
        type="radio"
        id="font-style-none"
        name="font_style"
        checked
        value="" />
      <label for="font-style-none">omettre la valeur</label><br />
      <input
        type="radio"
        id="font-style-normal"
        name="font_style"
        value="normal" />
      <label for="font-style-normal">normal</label><br />
      <input
        type="radio"
        id="font-style-italic"
        name="font_style"
        value="italic" />
      <label for="font-style-italic">italic</label><br />
      <input
        type="radio"
        id="font-style-oblique"
        name="font_style"
        value="oblique" />
      <label for="font-style-oblique">oblique</label>
    </div>

    <div class="setPropCont">
      font-variant<br />
      <input
        type="radio"
        id="font-variant-none"
        name="font_variant"
        checked
        value=" " />
      <label for="font-variant-none">omettre la valeur</label><br />
      <input
        type="radio"
        id="font-variant-normal"
        name="font_variant"
        value="normal" />
      <label for="font-variant-normal">normal</label><br />
      <input
        type="radio"
        id="font-variant-small-caps"
        name="font_variant"
        value="small-caps" />
      <label for="font-variant-small-caps">small-caps</label>
    </div>

    <div class="setPropCont">
      font-weight<br />
      <input type="radio" id="font-weight-none" name="font_weight" value="" />
      <label for="font-weight-none">omettre la valeur</label><br />
      <input
        type="radio"
        id="font-weight-normal"
        checked
        name="font_weight"
        value="400" />
      <label for="font-weight-normal">normal</label><br />
      <input
        type="radio"
        id="font-weight-bold"
        name="font_weight"
        value="700" />
      <label for="font-weight-bold">bold</label>
    </div>

    <div class="setPropCont">
      font-size<br />
      <input type="radio" id="font-size-12px" name="font_size" value="12px" />
      <label for="font-size-12px">12px</label><br />
      <input
        type="radio"
        id="font-size-16px"
        name="font_size"
        value="16px"
        checked />
      <label for="font-size-16px">16px</label><br />
      <input type="radio" id="font-size-24px" name="font_size" value="24px" />
      <label for="font-size-24px">24px</label>
    </div>

    <div class="setPropCont">
      line-height<br />
      <input
        type="radio"
        id="line-height-none"
        name="line_height"
        checked
        value="" />
      <label for="line-height-none">omettre la valeur</label><br />
      <input
        type="radio"
        id="line-height-1-2"
        name="line_height"
        value="/1.2" />
      <label for="line-height-1-2">1.2</label><br />
      <input type="radio" id="line-height-3" name="line_height" value="/3" />
      <label for="line-height-3">3</label>
    </div>
    <br />

    <div class="setPropCont fontfamily">
      font-family<br />
      <input
        type="radio"
        id="font-family-courier"
        name="font_family"
        checked
        value="courier" />
      <label for="font-family-courier">courier</label><br />
      <input
        type="radio"
        id="font-family-serif"
        name="font_family"
        value="serif" />
      <label for="font-family-serif">serif</label><br />
      <input
        type="radio"
        id="font-family-sans-serif"
        name="font_family"
        value="sans-serif" />
      <label for="font-family-sans-serif">sans-serif</label><br />
      <input
        type="radio"
        id="font-family-arial"
        name="font_family"
        value="arial" />
      <label for="font-family-arial">Arial</label><br />
      <input
        type="radio"
        id="font-family-monospace"
        name="font_family"
        value="monospace" />
      <label for="font-family-monospace">monospace</label><br />
      <input
        type="radio"
        id="font-family-cursive"
        name="font_family"
        value="cursive" />
      <label for="font-family-cursive">cursive</label><br />
      <input
        type="radio"
        id="font-family-fantasy"
        name="font_family"
        value="fantasy" />
      <label for="font-family-fantasy">fantasy</label><br />
      <input
        type="radio"
        id="font-family-system-ui"
        name="font_family"
        value="system-ui" />
      <label for="font-family-system-ui">system-ui</label><br />
    </div>
  </div>

  <div class="cf propInputs">
    <div class="propInputCont tar">font:</div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_style" /><br />
      font-style <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_variant" /> <br />
      font-variant <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_weight" /> <br />
      font-weight <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_size" /> <br />
      font-size <br />
      mandatory
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_line_height" /> <br />
      line-height <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_family" />
      <br />
      font-family <br />
      mandatory
    </div>
  </div>
</form>

<div class="fontShortHand">
  Ceci est un texte d'exemple.<br />
  Ceci est un autre texte d'exemple.
</div>
```

```css hidden
body,
input {
  font: 14px "Arial";
  overflow: hidden;
}

.propInputCont {
  float: left;
  text-align: center;
  margin-right: 5px;
  width: 80px;
}

.setPropCont {
  float: left;
  margin-right: 5px;
  width: 120px;
}

.propInputs,
.setPropCont {
  margin-bottom: 1em;
}

.curCss {
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  width: 80px;
}

.mandatory {
  border-bottom-color: red;
}

.cf::before,
.cf::after {
  content: " ";
  display: table;
}

.cf::after {
  clear: both;
}

.tar {
  width: 40px;
  text-align: right;
}
.fontfamily {
  display: inline-block;
}
```

```js hidden
const textAreas = document.getElementsByClassName("curCss");

function getProperties() {
  return (
    `${getCheckedValue("font_style")} ` +
    `${getCheckedValue("font_variant")} ` +
    `${getCheckedValue("font_weight")} ` +
    `${getCheckedValue("font_size")}` +
    `${getCheckedValue("line_height")} ` +
    `${getCheckedValue("font_family")}`
  );
}

function getCheckedValue(radioName) {
  const radios = document.forms[0].elements[radioName];
  for (const radio of radios) {
    if (radio.checked) {
      const curElemName = `input_${radioName}`;
      const curElem = document.getElementById(curElemName);
      curElem.value = radio.value;

      return radio.value;
    }
  }
}

function setCss() {
  injectCss(getProperties());
}

function injectCss(cssFragment) {
  const old = document.body.getElementsByTagName("style");
  if (old.length > 1) {
    old[1].parentElement.removeChild(old[1]);
  }
  css = document.createElement("style");
  css.textContent = `.fontShortHand{font: ${cssFragment}}`;
  document.body.appendChild(css);
}

setCss();

document.querySelectorAll("input[type='radio']").forEach((el) => {
  el.addEventListener("change", setCss);
});
```

{{EmbedLiveSample("Générateur de déclaration abrégée", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-style")}}
- La propriété {{CSSxRef("font-weight")}}
- [Pile de polices système <sup>(angl.)</sup>](https://css-tricks.com/snippets/css/system-font-stack/) sur CSS-Tricks (2017)
