---
title: font
slug: Web/CSS/Reference/Properties/font
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
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
  <p id="example-element">
    Londres. Le trimestre de la Saint-Michel vient de se terminer, et le Lord
    Chancelier siège dans le Lincoln's Inn Hall. Un temps de novembre
    implacable. Autant de boue dans les rues que si les eaux venaient tout juste
    de se retirer de la surface de la terre, et il ne serait pas étonnant de
    croiser un Mégalosaure, long d'une quarantaine de pieds, se dandinant comme
    un lézard éléphantesque sur Holborn Hill.
  </p>
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
- {{CSSxRef("font-stretch")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-variant")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("line-height")}}

## Syntaxe

```css-nolint
/* font-size font-family */
font: 1.2em "Fira Sans", sans-serif;

/* font-size/line-height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em "Fira Sans", sans-serif;

/* style | variant | weight | stretch | size/line-height | family */
font: italic small-caps bolder condensed 16px/3 cursive;

/* font-stretch font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em "Fira Sans", sans-serif;

/* Polices système */
font: caption;
```

La propriété `font` peut être définie avec un seul mot-clé (qui sélectionnera la police système à utiliser) ou comme propriété raccourcie pour paramétrer les différentes propriétés relatives aux polices.

Si `font` est définie grâce à un mot-clé, ce mot-clé doit être&nbsp;: `caption`, `icon`, `menu`, `message-box`, `small-caption` ou `status-bar`.

Si `font` est définie comme une propriété raccourcie&nbsp;:

- La déclaration devra inclure des valeurs pour&nbsp;:
  - {{CSSxRef("&lt;font-size&gt;")}}
  - {{CSSxRef("&lt;font-family&gt;")}}

- La déclaration pourra éventuellement inclure des valeurs pour&nbsp;:
  - {{CSSxRef("&lt;font-style&gt;")}}
  - {{CSSxRef("&lt;font-variant&gt;")}}
  - {{CSSxRef("&lt;font-weight&gt;")}}
  - {{CSSxRef("&lt;font-stretch&gt;")}}
  - {{CSSxRef("&lt;line-height&gt;")}}

- Les valeurs pour `font-style`, `font-variant` et `font-weight` doivent précéder la valeur pour `font-size`
- La valeur de `font-variant` ne peut utiliser que les valeurs définies en CSS 2.1 : `normal` et `small-caps`
- La valeur de `font-stretch` ne peut être qu'un mot-clé.
- La valeur pour `line-height` doit immédiatement suivre la valeur pour `font-size`, séparée par une barre oblique (par exemple "`16px/3`")
- La valeur pour `font-family` doit être la dernière fournie.

### Valeurs

- `<'font-style'>`
  - : Voir la propriété {{CSSxRef("font-style")}}.
- `<'font-variant'>`
  - : Voir la propriété {{CSSxRef("font-variant")}}.
- `<'font-weight'>`
  - : Voir la propriété {{CSSxRef("font-weight")}}.
- `<'font-stretch'>`
  - : Voir la propriété {{CSSxRef("font-stretch")}}.
- `<'font-size'>`
  - : Voir la propriété {{CSSxRef("font-size")}}.
- `<'line-height'>`
  - : Voir la propriété {{CSSxRef("line-height")}}.
- `<'font-family'>`
  - : Voir la propriété {{CSSxRef("font-family")}}.

#### Valeurs de police système

- `caption`
  - : La police système utilisée pour les libellés des contrôles (par exemple, boutons, listes déroulantes, etc.).
- `icon`
  - : La police système utilisée pour les textes accompagnant les icônes.
- `menu`
  - : La police système utilisée pour les menus (par exemple, menus déroulants et listes de menus).
- `message-box`
  - : La police système utilisée dans les boîtes de dialogue.
- `small-caption`
  - : La police système utilisée pour les libellés des petits contrôles.
- `status-bar`
  - : La police système utilisée dans les barres de statut de la fenêtre.
- Mots-clés de police système préfixés
  - : Les navigateurs implémentent souvent plusieurs mots-clés préfixés supplémentaires&nbsp;: Gecko implémente `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` et `-moz-field`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les propriétés de police

```css
/* La corps de la police sera 12px */
/* La hauteur de ligne 14px et la   */
/* famille de polices sans-serif    */
p {
  font: 12px/14px sans-serif;
}
/* La taille de la police mesurera   */
/* 80% de celle de l'élément parent  */
/* ou la valeur par défaut et la     */
/* famille de police sera sans-serif */
p {
  font: 80% sans-serif;
}

/* La graisse est activée, le style    */
/* est italique, la taille est grande  */
/* et la famille est serif.            */
p {
  font: bold italic large serif;
}

/* On utilise la même police que pour */
/* la barre de statut de la fenêtre.  */
p {
  font: status-bar;
}
```

### Exemple interactif

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
      <label for="font-style-none">none</label><br />
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
      <label for="font-variant-none">none</label><br />
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
      <label for="font-weight-none">none</label><br />
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
      <label for="line-height-none">none</label><br />
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
    <div class="propInputCont tar">font :</div>
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

<div class="fontShortHand">Ceci est un texte d'exemple.</div>
<br /><br /><br /><br /><br /><br />
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

{{EmbedLiveSample("Exemple interactif 2", "100%", 440)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-style")}}
- La propriété {{CSSxRef("font-weight")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
