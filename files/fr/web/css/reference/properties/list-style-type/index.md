---
title: list-style-type
slug: Web/CSS/Reference/Properties/list-style-type
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`list-style-type`** permet de définir l'apparence de la puce d'un élément de liste (un cercle, un caractère, un compteur spécifique, etc.).

{{InteractiveExample("Démonstration CSS&nbsp;: list-style-type")}}

```css interactive-example-choice
list-style-type: space-counter;
```

```css interactive-example-choice
list-style-type: disc;
```

```css interactive-example-choice
list-style-type: circle;
```

```css interactive-example-choice
list-style-type: "\1F44D";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>Missions remarquables de la NASA</p>
    <ul class="transition-all unhighlighted" id="example-element">
      <li>Apollo</li>
      <li>Hubble</li>
      <li>Chandra</li>
      <li>Cassini-Huygens</li>
    </ul>
  </div>
  <hr />
  <div class="note">
    <p>
      <code>space-counter</code> est défini avec
      <a
        href="//developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@counter-style"
        target="_parent"
        ><code>@counter-style</code></a
      >
    </p>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

Le marqueur utilisera [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor), c'est-à-dire la même [couleur](/fr/docs/Web/CSS/Reference/Values/color_value) calculée que l'élément auquel il s'applique.

Seuls quelques éléments HTML ({{HTMLElement("li")}} et {{HTMLElement("summary")}}) ont une valeur par défaut de `display: list-item`. Cependant, la propriété `list-style-type` peut être appliquée à tout élément dont la valeur de {{CSSxRef("display")}} est définie à `list-item`. De plus, comme cette propriété est héritée, elle peut être définie sur un élément parent (généralement {{HTMLElement("ol")}} ou {{HTMLElement("ul")}}) pour l'appliquer à tous les éléments de liste.

## Syntaxe

```css
/* Liste partielle des mots-clés utilisables */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* Valeurs de type <string> */
list-style-type: "-";

/* Un identifiant correspondant à une règle @counter-style */
list-style-type: custom-counter-style;

/* Valeur avec un mot-clé */
list-style-type: none;

/* Valeurs globales */
list-style-type: inherit;
list-style-type: initial;
list-style-type: revert;
list-style-type: revert-layer;
list-style-type: unset;
```

La propriété `list-style-type` peut être définie grâce à&nbsp;:

- une valeur `<custom-ident>`.
- une valeur `symbols()`.
- une valeur `<string>`.
- le mot-clé `none`.

À noter que&nbsp;:

- Pour certains types, il est nécessaire d'avoir une police correspondante installée pour que l'affichage fonctionne.
- Pour des raisons historiques, `cjk-ideographic` est synonyme de `trad-chinese-informal`.

### Valeurs

- {{CSSxRef("&lt;custom-ident&gt;")}}
  - : Un identifiant correspondant à la valeur d'un {{CSSxRef("@counter-style")}} ou à un style prédéfini&nbsp;:
- {{CSSxRef("symbols()")}}
  - : Définit un style de puce utilisé.
- {{CSSxRef("&lt;string&gt;")}}
  - : La chaîne de caractères indiquée sera utilisée comme puce.
- `none`
  - : Aucun marqueur n'est affiché.
- `disc`
  - : Un disque plein (la valeur par défaut).
- `circle`
  - : Un cercle vide.
- `square`
  - : Un carré plein.
- `decimal`
  - : Des nombres décimaux, commençant par 1.
- `cjk-decimal`
  - : Des nombres décimaux Han.
- `decimal-leading-zero`
  - : Des nombres décimaux complétés par des 0.
- `lower-roman`
  - : Des chiffres romains en minuscules.
- `upper-roman`
  - : Des chiffres romains en majuscules.
- `lower-greek`
  - : Des lettres grecques en minuscules.
- `lower-alpha`, `lower-latin`
  - : Des lettres {{Glossary("ASCII")}} en minuscules.
- `upper-alpha`, `upper-latin`
  - : Des lettres ASCII en majuscules.
- `arabic-indic`, `-moz-arabic-indic`
  - : Des nombres arabo-indiens.
- `armenian`
  - : La numérotation arménienne traditionnelle.
- `bengali`, `-moz-bengali`
  - : La numérotation bengalie.
- `cambodian`/`khmer`
  - : La numérotation cambodgienne/khmer.
- `cjk-earthly-branch`, `-moz-cjk-earthly-branch`
  - : Des nombres ordinaux Han de la «&nbsp;branche terrestre&nbsp;».
- `cjk-heavenly-stem`, `-moz-cjk-heavenly-stem`
  - : Des nombres ordinaux Han de la «&nbsp;souche céleste&nbsp;».
- `cjk-ideographic`
  - : Identique à `trad-chinese-informal`.
- `devanagari`, `-moz-devanagari`
  - : La numérotation devanagari.
- `ethiopic-numeric`
  - : La numérotation éthiopienne.
- `georgian`
  - : La numérotation géorgienne traditionnelle.
- `gujarati`, `-moz-gujarati`
  - : La numérotation gujarati.
- `gurmukhi`, `-moz-gurmukhi`
  - : La numérotation gurmukhi.
- `hebrew`
  - : La numérotation hébraïque traditionnelle.
- `hiragana`
  - : Le lettrage lexicographique hiragana.
- `hiragana-iroha`
  - : Le lettrage [iroha](https://fr.wikipedia.org/wiki/Iroha) hiragana.
- `japanese-formal`
  - : La numérotation japonaise formelle utilisée pour les documents financiers ou légaux. Les kanjis sont conçus afin de ne pas pouvoir être modifié pour ressembler à un autre.
- `japanese-informal`
  - : La numérotation japonaise informelle.
- `kannada`, `-moz-kannada`
  - : La numérotation kannada.
- `katakana`
  - : Le lettrage lexicographique katakana.
- `katakana-iroha`
  - : Le lettrage [iroha](https://fr.wikipedia.org/wiki/Iroha) katakana.
- `korean-hangul-formal`
  - : La numérotation coréenne hangul.
- `korean-hanja-formal`
  - : La numérotation formelle coréenne Han.
- `korean-hanja-informal`
  - : La numérotation coréenne hanja.
- `lao`, `-moz-lao`
  - : La numérotation laotienne.
- `lower-armenian`
  - : La numérotation arménienne en minuscules.
- `malayalam`, `-moz-malayalam`
  - : La numérotation Malayalam.
- `mongolian`
  - : La numérotation mongolienne.
- `myanmar`, `-moz-myanmar`
  - : La numérotation birmane.
- `oriya`, `-moz-oriya`
  - : La numérotation Oriya.
- `persian`, `-moz-persian`
  - : La numérotation perse.
- `simp-chinese-formal`
  - : La numérotation formelle en chinois simplifié.
- `simp-chinese-informal`
  - : La numérotation informelle en chinois simplifié.
- `tamil`, `-moz-tamil`
  - : La numérotation tamoule.
- `telugu`, `-moz-telugu`
  - : La numérotation Telugu.
- `thai`, `-moz-thai`
  - : La numérotation thaïlandaise.
- `tibetan`
  - : La numérotation tibétaine.
- `trad-chinese-formal`
  - : La numérotation formelle en chinois traditionnel.
- `trad-chinese-informal`
  - : La numérotation informelle en chinois traditionnel.
- `upper-armenian`
  - : La numérotation arménienne traditionnelle en majuscules.
- `disclosure-open`
  - : Un symbole indiquant qu'un contrôle de révélation (tel qu'un élément {{HTMLElement("details")}}) est déplié/révélé.
- `disclosure-closed`
  - : Un symbole indiquant qu'un contrôle de révélation (tel qu'un élément {{HTMLElement("details")}}) est replié/masqué.

Reportez-vous à l'exemple [Tous les styles de liste](#tous_les_styles_de_liste) pour voir les valeurs ci-dessus en action. Les détails de tous les styles de compteurs disponibles utilisés par différentes cultures à travers le monde se trouvent dans [Styles de compteurs prêts à l'emploi <sup>(angl.)</sup>](https://w3c.github.io/predefined-counter-styles/).

### Extensions non-standards

Quelques types prédéfinis sont pris en charge par Mozilla (Firefox) avec le préfixe `-moz-`.

- `ethiopic-halehame`&nbsp;: `-moz-ethiopic-halehame`
- `ethiopic-halehame-am`&nbsp;: `-moz-ethiopic-halehame-am`
- `ethiopic-halehame-ti-er`&nbsp;: `-moz-ethiopic-halehame-ti-er`
- `ethiopic-halehame-ti-et`&nbsp;: `-moz-ethiopic-halehame-ti-et`
- `ethiopic-numeric`&nbsp;: `-moz-ethiopic-numeric`
- `hangul`&nbsp;: `-moz-hangul`
- `hangul-consonant`&nbsp;: `-moz-hangul-consonant`
- `urdu`&nbsp;: `-moz-urdu`

Voir le [tableau de compatibilité](#compatibilité_des_navigateurs) pour savoir quels navigateurs prennent en charge quelle extension.

## Accessibilité

Safari ne reconnaitra pas une liste ordonnée ou non ordonnée comme une liste dans l'arbre d'accessibilité si elle a une valeur `list-style-type` de `none`. Cela peut être résolu en ajoutant `role="list"` à la balise d'ouverture de la liste. Pour en savoir plus sur ce point et sur les solutions possibles, voir [`list-style`](/fr/docs/Web/CSS/Reference/Properties/list-style#accessibilité).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définition de l'apparence des puces

#### HTML

```html
Liste 1
<ol class="normal">
  <li>Coucou</li>
  <li>Monde</li>
  <li>Comment ça va ?</li>
</ol>

Liste 2
<ol class="shortcut">
  <li>On a</li>
  <li>le</li>
  <li>même</li>
  <li>résultat</li>
</ol>
```

#### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* on peut aussi utiliser la propriété raccourcie */
/* "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}
```

#### Résultat

{{EmbedLiveSample("Définition de l'apparence des puces", 200, 300)}}

### Tous les styles de liste

#### HTML

```html
<ol>
  <li>Apollo</li>
  <li>Hubble</li>
  <li>Chandra</li>
  <li>Cassini-Huygens</li>
  <li>Spitzer</li>
</ol>

<h2>Choisissez un style de liste&nbsp;:</h2>

<div class="container">
  <label for="disc">
    <input type="radio" id="disc" name="type" value="disc" />disc
  </label>

  <label for="circle">
    <input type="radio" id="circle" name="type" value="circle" />circle
  </label>

  <label for="square">
    <input type="radio" id="square" name="type" value="square" />square
  </label>

  <label for="decimal">
    <input type="radio" id="decimal" name="type" value="decimal" />decimal
  </label>

  <label for="cjk-decimal">
    <input
      type="radio"
      id="cjk-decimal"
      name="type"
      value="cjk-decimal" />cjk-decimal
  </label>

  <label for="decimal-leading-zero">
    <input
      type="radio"
      id="decimal-leading-zero"
      name="type"
      value="decimal-leading-zero" />decimal-leading-zero
  </label>

  <label for="lower-roman">
    <input
      type="radio"
      id="lower-roman"
      name="type"
      value="lower-roman" />lower-roman
  </label>

  <label for="upper-roman">
    <input
      type="radio"
      id="upper-roman"
      name="type"
      value="upper-roman" />upper-roman
  </label>

  <label for="lower-greek">
    <input
      type="radio"
      id="lower-greek"
      name="type"
      value="lower-greek" />lower-greek
  </label>

  <label for="lower-alpha">
    <input
      type="radio"
      id="lower-alpha"
      name="type"
      value="lower-alpha" />lower-alpha, lower-latin
  </label>

  <label for="upper-alpha">
    <input
      type="radio"
      id="upper-alpha"
      name="type"
      value="upper-alpha" />upper-alpha, upper-latin
  </label>

  <label for="arabic-indic">
    <input
      type="radio"
      id="arabic-indic"
      name="type"
      value="arabic-indic" />arabic-indic
  </label>

  <label for="armenian">
    <input type="radio" id="armenian" name="type" value="armenian" />armenian
  </label>

  <label for="bengali">
    <input type="radio" id="bengali" name="type" value="bengali" />bengali
  </label>

  <label for="cambodian">
    <input type="radio" id="cambodian" name="type" value="cambodian" />cambodian
  </label>

  <label for="cjk-earthly-branch">
    <input
      type="radio"
      id="cjk-earthly-branch"
      name="type"
      value="cjk-earthly-branch" />cjk-earthly-branch
  </label>

  <label for="cjk-heavenly-stem">
    <input
      type="radio"
      id="cjk-heavenly-stem"
      name="type"
      value="cjk-heavenly-stem" />cjk-heavenly-stem
  </label>

  <label for="cjk-ideographic">
    <input
      type="radio"
      id="cjk-ideographic"
      name="type"
      value="cjk-ideographic" />cjk-ideographic
  </label>

  <label for="devanagari">
    <input
      type="radio"
      id="devanagari"
      name="type"
      value="devanagari" />devanagari
  </label>

  <label for="ethiopic-numeric">
    <input
      type="radio"
      id="ethiopic-numeric"
      name="type"
      value="ethiopic-numeric" />ethiopic-numeric
  </label>

  <label for="georgian">
    <input type="radio" id="georgian" name="type" value="georgian" />georgian
  </label>

  <label for="gujarati">
    <input type="radio" id="gujarati" name="type" value="gujarati" />gujarati
  </label>

  <label for="gurmukhi">
    <input type="radio" id="gurmukhi" name="type" value="gurmukhi" />gurmukhi
  </label>

  <label for="hebrew">
    <input type="radio" id="hebrew" name="type" value="hebrew" />hebrew
  </label>

  <label for="hiragana">
    <input type="radio" id="hiragana" name="type" value="hiragana" />hiragana
  </label>

  <label for="hiragana-iroha">
    <input
      type="radio"
      id="hiragana-iroha"
      name="type"
      value="hiragana-iroha" />hiragana-iroha
  </label>

  <label for="japanese-formal">
    <input
      type="radio"
      id="japanese-formal"
      name="type"
      value="japanese-formal" />japanese-formal
  </label>

  <label for="japanese-informal">
    <input
      type="radio"
      id="japanese-informal"
      name="type"
      value="japanese-informal" />japanese-informal
  </label>

  <label for="kannada">
    <input type="radio" id="kannada" name="type" value="kannada" />kannada
  </label>

  <label for="katakana">
    <input type="radio" id="katakana" name="type" value="katakana" />katakana
  </label>

  <label for="katakana-iroha">
    <input
      type="radio"
      id="katakana-iroha"
      name="type"
      value="katakana-iroha" />katakana-iroha
  </label>

  <label for="khmer">
    <input type="radio" id="khmer" name="type" value="khmer" />khmer
  </label>

  <label for="korean-hangul-formal">
    <input
      type="radio"
      id="korean-hangul-formal"
      name="type"
      value="korean-hangul-formal" />korean-hangul-formal
  </label>

  <label for="korean-hanja-formal">
    <input
      type="radio"
      id="korean-hanja-formal"
      name="type"
      value="korean-hanja-formal" />korean-hanja-formal
  </label>

  <label for="korean-hanja-informal">
    <input
      type="radio"
      id="korean-hanja-informal"
      name="type"
      value="korean-hanja-informal" />korean-hanja-informal
  </label>

  <label for="lao">
    <input type="radio" id="lao" name="type" value="lao" />lao
  </label>

  <label for="lower-armenian">
    <input
      type="radio"
      id="lower-armenian"
      name="type"
      value="lower-armenian" />lower-armenian
  </label>

  <label for="malayalam">
    <input type="radio" id="malayalam" name="type" value="malayalam" />malayalam
  </label>

  <label for="mongolian">
    <input type="radio" id="mongolian" name="type" value="mongolian" />mongolian
  </label>

  <label for="myanmar">
    <input type="radio" id="myanmar" name="type" value="myanmar" />myanmar
  </label>

  <label for="oriya">
    <input type="radio" id="oriya" name="type" value="oriya" />oriya
  </label>

  <label for="persian">
    <input type="radio" id="persian" name="type" value="persian" />persian
  </label>

  <label for="simp-chinese-formal">
    <input
      type="radio"
      id="simp-chinese-formal"
      name="type"
      value="simp-chinese-formal" />simp-chinese-formal
  </label>

  <label for="simp-chinese-informal">
    <input
      type="radio"
      id="simp-chinese-informal"
      name="type"
      value="simp-chinese-informal" />simp-chinese-informal
  </label>

  <label for="tamil">
    <input type="radio" id="tamil" name="type" value="tamil" />tamil
  </label>

  <label for="telegu">
    <input type="radio" id="telegu" name="type" value="telegu" />telegu
  </label>

  <label for="thai">
    <input type="radio" id="thai" name="type" value="thai" />thai
  </label>

  <label for="tibetan">
    <input type="radio" id="tibetan" name="type" value="tibetan" />tibetan
  </label>

  <label for="trad-chinese-formal">
    <input
      type="radio"
      id="trad-chinese-formal"
      name="type"
      value="trad-chinese-formal" />trad-chinese-formal
  </label>

  <label for="trad-chinese-informal">
    <input
      type="radio"
      id="trad-chinese-informal"
      name="type"
      value="trad-chinese-informal" />trad-chinese-informal
  </label>

  <label for="upper-armenian">
    <input
      type="radio"
      id="upper-armenian"
      name="type"
      value="upper-armenian" />upper-armenian
  </label>

  <label for="disclosure-open">
    <input
      type="radio"
      id="disclosure-open"
      name="type"
      value="disclosure-open" />disclosure-open
  </label>

  <label for="disclosure-closed">
    <input
      type="radio"
      id="disclosure-closed"
      name="type"
      value="disclosure-closed" />disclosure-closed
  </label>

  <label for="-moz-ethiopic-halehame">
    <input
      type="radio"
      id="-moz-ethiopic-halehame"
      name="type"
      value="-moz-ethiopic-halehame" />-moz-ethiopic-halehame
  </label>

  <label for="-moz-ethiopic-halehame-am">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-am"
      name="type"
      value="-moz-ethiopic-halehame-am" />-moz-ethiopic-halehame-am
  </label>

  <label for="ethiopic-halehame-ti-er">
    <input
      type="radio"
      id="ethiopic-halehame-ti-er"
      name="type"
      value="ethiopic-halehame-ti-er" />ethiopic-halehame-ti-er
  </label>

  <label for="ethiopic-halehame-ti-et">
    <input
      type="radio"
      id="ethiopic-halehame-ti-et"
      name="type"
      value="ethiopic-halehame-ti-et" />ethiopic-halehame-ti-et
  </label>

  <label for="hangul">
    <input type="radio" id="hangul" name="type" value="hangul" />hangul
  </label>

  <label for="hangul-consonant">
    <input
      type="radio"
      id="hangul-consonant"
      name="type"
      value="hangul-consonant" />hangul-consonant
  </label>

  <label for="urdu">
    <input type="radio" id="urdu" name="type" value="urdu" />urdu
  </label>

  <label for="-moz-ethiopic-halehame-ti-er">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-ti-er"
      name="type"
      value="-moz-ethiopic-halehame-ti-er" />-moz-ethiopic-halehame-ti-er
  </label>

  <label for="-moz-ethiopic-halehame-ti-et">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-ti-et"
      name="type"
      value="-moz-ethiopic-halehame-ti-et" />-moz-ethiopic-halehame-ti-et
  </label>

  <label for="-moz-hangul">
    <input
      type="radio"
      id="-moz-hangul"
      name="type"
      value="-moz-hangul" />-moz-hangul
  </label>

  <label for="-moz-hangul-consonant">
    <input
      type="radio"
      id="-moz-hangul-consonant"
      name="type"
      value="-moz-hangul-consonant" />-moz-hangul-consonant
  </label>

  <label for="-moz-urdu">
    <input type="radio" id="-moz-urdu" name="type" value="-moz-urdu" />-moz-urdu
  </label>
</div>
```

#### CSS

```css
ol {
  font-size: 1.2rem;
}

.container {
  column-count: 3;
}

label {
  display: block;
}

input {
  margin: 0.4rem;
}
```

#### JavaScript

```js
const container = document.querySelector(".container");
const list = document.querySelector("ol");

container.addEventListener("change", (event) => {
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
});
```

#### Résultat

{{EmbedLiveSample("Tous les styles de liste", 600, 800)}}

Nous ne sommes pas limité·e·s aux types de styles de liste définis sur cette page ou dans la spécification. La règle {{CSSxRef("@counter-style")}} permet de créer des [compteurs avec n'importe quel alphabet <sup>(angl.)</sup>](https://r12a.github.io/app-counters/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("list-style")}}
- La propriété {{CSSxRef("list-style-image")}}
- La propriété {{CSSxRef("list-style-position")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
