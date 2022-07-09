---
title: list-style-type
slug: Web/CSS/list-style-type
translation_of: Web/CSS/list-style-type
browser-compat: css.properties.list-style-type
---
{{CSSRef}}

La propriété **`list-style-type`** permet de définir l'apparence de la puce d'un élément de liste (un cercle, un caractère, un compteur spécifique, etc.).

{{EmbedInteractiveExample("pages/css/list-style-type.html")}}

La [couleur](/fr/docs/Web/CSS/color_value) de la puce utilisée sera la même que la couleur calculée de l'élément sur lequel elle s'applique.

Cette propriété s'applique aux éléments d'une liste (c'est-à-dire les éléments pour lesquels on a `display: list-item;`). Cela inclut par défaut les éléments [`li`](/fr/docs/Web/HTML/Element/li) et [`summary`](/fr/docs/Web/HTML/Element/summary). Il est possible de l'utiliser pour d'autres éléments si on utilise `display: list-item` sur ceux-ci. Cette propriété est héritée et on peut donc l'appliquer aux éléments parents (généralement [`ol`](/fr/docs/Web/HTML/Element/ol) ou [`ul`](/fr/docs/Web/HTML/Element/ul)) afin qu'elle s'applique à l'ensemble des éléments fils.

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

/* Une chaîne de caractères */
/* Type <string>            */
list-style-type: '-';

/* Un identifiant correspondant à */
/* une règle @counter-style       */
list-style-type: custom-counter-style;

/* Valeur avec un mot-clé */
list-style-type: none;

/* Valeurs globales */
list-style-type: inherit;
list-style-type: initial;
list-style-type: revert;
list-style-type: unset;
```

La propriété `list-style-type` peut être définie grâce à&nbsp;:

- une valeur `<custom-ident>`
- une valeur `symbols()`
- une valeur `<string>`
- le mot-clé `none`.

À noter que&nbsp;:

- Pour certains types, il est nécessaire d'avoir une police correspondante installée pour que l'affichage fonctionne.
- Pour des raisons historiques, `cjk-ideographic` est synonyme de `trad-chinese-informal`.

### Valeurs

- [`<custom-ident>`](/fr/docs/Web/CSS/custom-ident)
  - : Un identifiant correspondant à la valeur d'un [`@counter-style`](/fr/docs/Web/CSS/@counter-style) ou à un style prédéfini&nbsp;:
- [`symbols()`](/fr/docs/Web/CSS/symbols())
  - : Définit un style de puce utilisé.
- [`<string>`](/fr/docs/Web/CSS/string)
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
- `cjk-decimal` {{experimental_inline}}
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
  - : Des lettres ASCII en minuscules.
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
- `cjk-ideographic` {{experimental_inline}}
  - : Identique à `trad-chinese-informal`.
- `devanagari`, `-moz-devanagari`
  - : La numérotation devanagari.
- `ethiopic-numeric` {{experimental_inline}}
  - : La numérotation éthiopienne.
- `georgian`
  - : La numérotation géorgienne traditionnelle.
- `gujarati`, `-moz-gujarati`
  - : La numérotation gujarati.
- `gurmukhi`, `-moz-gurmukhi`
  - : La numérotation gurmukhi.
- `hebrew` {{experimental_inline}}
  - : La numérotation hébraïque traditionnelle.
- `hiragana` {{experimental_inline}}
  - : Le lettrage lexicographique hiragana.
- `hiragana-iroha` {{experimental_inline}}
  - : Le lettrage {{interwiki('wikipedia', 'Iroha', 'Iroha-order')}} hiragana.
- `japanese-formal` {{experimental_inline}}
  - : La numérotation japonaise formelle utilisée pour les documents financiers ou légaux. Les kanjis sont conçus afin de ne pas pouvoir être modifié pour ressembler à un autre.
- `japanese-informal` {{experimental_inline}}
  - : La numérotation japonaise informelle.
- `kannada`, `-moz-kannada`
  - : La numérotation kannada.
- `katakana` {{experimental_inline}}
  - : Le lettrage lexicographique katakana.
- `katakana-iroha` {{experimental_inline}}
  - : Le lettrage {{interwiki('wikipedia', 'Iroha', 'Iroha-order')}} katakana.
- `korean-hangul-formal` {{experimental_inline}}
  - : La numérotation coréenne hangul.
- `korean-hanja-formal` {{experimental_inline}}
  - : La numérotation formelle coréenne Han.
- `korean-hanja-informal` {{experimental_inline}}
  - : La numérotation coréenne hanja.
- `lao`, `-moz-lao`
  - : La numérotation laotienne.
- `lower-armenian` {{experimental_inline}}\*
  - : La numérotation arménienne en minuscules.
- `malayalam`, `-moz-malayalam`
  - : La numérotation Malayalam.
- `mongolian` {{experimental_inline}}
  - : La numérotation mongolienne.
- `myanmar`, `-moz-myanmar`
  - : La numérotation birmane.
- `oriya`, `-moz-oriya`
  - : La numérotation Oriya.
- `persian` {{experimental_inline}}, `-moz-persian`
  - : La numérotation perse.
- `simp-chinese-formal` {{experimental_inline}}
  - : La numérotation formelle en chinois simplifié.
- `simp-chinese-informal` {{experimental_inline}}
  - : La numérotation informelle en chinois simplifié.
- `tamil` {{experimental_inline}}, `-moz-tamil`
  - : La numérotation tamoule.
- `telugu`, `-moz-telugu`
  - : La numérotation Telugu.
- `thai`, `-moz-thai`
  - : La numérotation thaïlandaise.
- `tibetan` {{experimental_inline}}\*
  - : La numérotation tibétaine.
- `trad-chinese-formal` {{experimental_inline}}
  - : La numérotation formelle en chinois traditionnel.
- `trad-chinese-informal` {{experimental_inline}}
  - : La numérotation informelle en chinois traditionnel.
- `upper-armenian` {{experimental_inline}}\*
  - : La numérotation arménienne traditionnelle en majuscules.
- `disclosure-open` {{experimental_inline}}
  - : Un symbole indiquant qu'un contrôle de révélation (tel qu'un élément [`<details>`](/fr/docs/Web/HTML/Element/details)) est déplié/révélé.
- `disclosure-closed` {{experimental_inline}}
  - : Un symbole indiquant qu'un contrôle de révélation (tel qu'un élément [`<details>`](/fr/docs/Web/HTML/Element/details)) est replié/masqué.

### Extensions non-standards

Mozilla (Firefox), Blink (Chrome et Opera) et WebKit (Safari) fournissent certains types prédéfinis afin d'assurer la prise en charge de types de liste dans d'autres langues. Consultez le tableau de compatibilité pour l'extension à utiliser selon le navigateur.

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `ethiopic-halehame-ti-er`, `-moz-ethiopic-halehame-ti-er`
- `ethiopic-halehame-ti-et`, `-moz-ethiopic-halehame-ti-et`
- `hangul`, `-moz-hangul`
- `hangul-consonant`, `-moz-hangul-consonant`
- `urdu`, `-moz-urdu`

## Accessibilité

Le lecteur d'écran [VoiceOver](https://help.apple.com/voiceover/info/guide/) n'annonce pas, incorrectement, les listes non ordonnées lorsque `list-style-type: none` leur est appliqué. Pour pallier ce problème, on peut ajouter un [espace sans chasse](https://fr.wikipedia.org/wiki/Espace_sans_chasse) comme [pseudo-contenu](/fr/docs/Web/CSS/content) avant chaque élément de liste afin que la liste soit correctement annoncée.

```css
ul {
  list-style-type: none;
}

ul li::before {
  content: "\200B";
}
```

- [_VoiceOver and_ `list-style-type: none` – _Unfettered Thoughts_ (en anglais)](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [MDN Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [_Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

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

{{EmbedLiveSample('',"200","300")}}

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

<h2>Choisissez un style de liste :</h2>

<div class="container">

  <label for="disc">
    <input type="radio" id="disc" name="type" value="disc">disc
  </label>

  <label for="circle">
    <input type="radio" id="circle" name="type" value="circle">circle
  </label>

  <label for="square">
    <input type="radio" id="square" name="type" value="square">square
  </label>

  <label for="decimal">
    <input type="radio" id="decimal" name="type" value="decimal">decimal
  </label>

  <label for="cjk-decimal">
    <input type="radio" id="cjk-decimal" name="type" value="cjk-decimal">cjk-decimal
  </label>

  <label for="decimal-leading-zero">
    <input type="radio" id="decimal-leading-zero" name="type" value="decimal-leading-zero">decimal-leading-zero
  </label>

  <label for="lower-roman">
    <input type="radio" id="lower-roman" name="type" value="lower-roman">lower-roman
  </label>

  <label for="upper-roman">
    <input type="radio" id="upper-roman" name="type" value="upper-roman">upper-roman
  </label>

  <label for="lower-greek">
    <input type="radio" id="lower-greek" name="type" value="lower-greek">lower-greek
  </label>

  <label for="lower-alpha">
    <input type="radio" id="lower-alpha" name="type" value="lower-alpha">lower-alpha, lower-latin
  </label>

  <label for="upper-alpha">
    <input type="radio" id="upper-alpha" name="type" value="upper-alpha">upper-alpha, upper-latin
  </label>

  <label for="arabic-indic">
    <input type="radio" id="arabic-indic" name="type" value="arabic-indic">arabic-indic
  </label>

  <label for="armenian">
    <input type="radio" id="armenian" name="type" value="armenian">armenian
  </label>

  <label for="bengali">
    <input type="radio" id="bengali" name="type" value="bengali">bengali
  </label>

  <label for="cambodian">
    <input type="radio" id="cambodian" name="type" value="cambodian">cambodian
  </label>

  <label for="cjk-earthly-branch">
    <input type="radio" id="cjk-earthly-branch" name="type" value="cjk-earthly-branch">cjk-earthly-branch
  </label>

  <label for="cjk-heavenly-stem">
    <input type="radio" id="cjk-heavenly-stem" name="type" value="cjk-heavenly-stem">cjk-heavenly-stem
  </label>

  <label for="cjk-ideographic">
    <input type="radio" id="cjk-ideographic" name="type" value="cjk-ideographic">cjk-ideographic
  </label>

  <label for="devanagari">
    <input type="radio" id="devanagari" name="type" value="devanagari">devanagari
  </label>

  <label for="ethiopic-numeric">
    <input type="radio" id="ethiopic-numeric" name="type" value="ethiopic-numeric">ethiopic-numeric
  </label>

  <label for="georgian">
    <input type="radio" id="georgian" name="type" value="georgian">georgian
  </label>

  <label for="gujarati">
    <input type="radio" id="gujarati" name="type" value="gujarati">gujarati
  </label>

  <label for="gurmukhi">
    <input type="radio" id="gurmukhi" name="type" value="gurmukhi">gurmukhi
  </label>

  <label for="hebrew">
    <input type="radio" id="hebrew" name="type" value="hebrew">hebrew
  </label>

  <label for="hiragana">
    <input type="radio" id="hiragana" name="type" value="hiragana">hiragana
  </label>

  <label for="hiragana-iroha">
    <input type="radio" id="hiragana-iroha" name="type" value="hiragana-iroha">hiragana-iroha
  </label>

  <label for="japanese-formal">
    <input type="radio" id="japanese-formal" name="type" value="japanese-formal">japanese-formal
  </label>

  <label for="japanese-informal">
    <input type="radio" id="japanese-informal" name="type" value="japanese-informal">japanese-informal
  </label>

  <label for="kannada">
    <input type="radio" id="kannada" name="type" value="kannada">kannada
  </label>

  <label for="katakana">
    <input type="radio" id="katakana" name="type" value="katakana">katakana
  </label>

  <label for="katakana-iroha">
    <input type="radio" id="katakana-iroha" name="type" value="katakana-iroha">katakana-iroha
  </label>

  <label for="khmer">
    <input type="radio" id="khmer" name="type" value="khmer">khmer
  </label>

  <label for="korean-hangul-formal">
    <input type="radio" id="korean-hangul-formal" name="type" value="korean-hangul-formal">korean-hangul-formal
  </label>

  <label for="korean-hanja-formal">
    <input type="radio" id="korean-hanja-formal" name="type" value="korean-hanja-formal">korean-hanja-formal
  </label>

  <label for="korean-hanja-informal">
    <input type="radio" id="korean-hanja-informal" name="type" value="korean-hanja-informal">korean-hanja-informal
  </label>

  <label for="lao">
    <input type="radio" id="lao" name="type" value="lao">lao
  </label>

  <label for="lower-armenian">
    <input type="radio" id="lower-armenian" name="type" value="lower-armenian">lower-armenian
  </label>

  <label for="malayalam">
    <input type="radio" id="malayalam" name="type" value="malayalam">malayalam
  </label>

  <label for="mongolian">
    <input type="radio" id="mongolian" name="type" value="mongolian">mongolian
  </label>

  <label for="myanmar">
    <input type="radio" id="myanmar" name="type" value="myanmar">myanmar
  </label>

  <label for="oriya">
    <input type="radio" id="oriya" name="type" value="oriya">oriya
  </label>

  <label for="persian">
    <input type="radio" id="persian" name="type" value="persian">persian
  </label>

  <label for="simp-chinese-formal">
    <input type="radio" id="simp-chinese-formal" name="type" value="simp-chinese-formal">simp-chinese-formal
  </label>

  <label for="simp-chinese-informal">
    <input type="radio" id="simp-chinese-informal" name="type" value="simp-chinese-informal">simp-chinese-informal
  </label>

  <label for="tamil">
    <input type="radio" id="tamil" name="type" value="tamil">tamil
  </label>

  <label for="telegu">
    <input type="radio" id="telegu" name="type" value="telegu">telegu
  </label>

  <label for="thai">
    <input type="radio" id="thai" name="type" value="thai">thai
  </label>

  <label for="tibetan">
    <input type="radio" id="tibetan" name="type" value="tibetan">tibetan
  </label>

  <label for="trad-chinese-formal">
    <input type="radio" id="trad-chinese-formal" name="type" value="trad-chinese-formal">trad-chinese-formal
  </label>

  <label for="trad-chinese-informal">
    <input type="radio" id="trad-chinese-informal" name="type" value="trad-chinese-informal">trad-chinese-informal
  </label>

  <label for="upper-armenian">
    <input type="radio" id="upper-armenian" name="type" value="upper-armenian">upper-armenian
  </label>

  <label for="disclosure-open">
    <input type="radio" id="disclosure-open" name="type" value="disclosure-open">disclosure-open
  </label>

  <label for="disclosure-closed">
    <input type="radio" id="disclosure-closed" name="type" value="disclosure-closed">disclosure-closed
  </label>

  <label for="-moz-ethiopic-halehame">
    <input type="radio" id="-moz-ethiopic-halehame" name="type" value="-moz-ethiopic-halehame">-moz-ethiopic-halehame
  </label>

  <label for="-moz-ethiopic-halehame-am">
    <input type="radio" id="-moz-ethiopic-halehame-am" name="type" value="-moz-ethiopic-halehame-am">-moz-ethiopic-halehame-am
  </label>

  <label for="ethiopic-halehame-ti-er">
    <input type="radio" id="ethiopic-halehame-ti-er" name="type" value="ethiopic-halehame-ti-er">ethiopic-halehame-ti-er
  </label>

  <label for="ethiopic-halehame-ti-et">
    <input type="radio" id="ethiopic-halehame-ti-et" name="type" value="ethiopic-halehame-ti-et">ethiopic-halehame-ti-et
  </label>

  <label for="hangul">
    <input type="radio" id="hangul" name="type" value="hangul">hangul
  </label>

  <label for="hangul-consonant">
    <input type="radio" id="hangul-consonant" name="type" value="hangul-consonant">hangul-consonant
  </label>

  <label for="urdu">
    <input type="radio" id="urdu" name="type" value="urdu">urdu
  </label>

  <label for="-moz-ethiopic-halehame-ti-er">
    <input type="radio" id="-moz-ethiopic-halehame-ti-er" name="type" value="-moz-ethiopic-halehame-ti-er">-moz-ethiopic-halehame-ti-er
  </label>

  <label for="-moz-ethiopic-halehame-ti-et">
    <input type="radio" id="-moz-ethiopic-halehame-ti-et" name="type" value="-moz-ethiopic-halehame-ti-et">-moz-ethiopic-halehame-ti-et
  </label>

  <label for="-moz-hangul">
    <input type="radio" id="-moz-hangul" name="type" value="-moz-hangul">-moz-hangul
  </label>

  <label for="-moz-hangul-consonant">
    <input type="radio" id="-moz-hangul-consonant" name="type" value="-moz-hangul-consonant">-moz-hangul-consonant
  </label>

  <label for="-moz-urdu">
    <input type="radio" id="-moz-urdu" name="type" value="-moz-urdu">-moz-urdu
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
  margin: .4rem;
}
```

#### JavaScript

```js
const container = document.querySelector(".container");
container.addEventListener("change", event => {
  const list = document.querySelector("ol");
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
});
```

#### Résultat

{{EmbedLiveSample("", "600", "850")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`list-style`](/fr/docs/Web/CSS/list-style)
- [`list-style-image`](/fr/docs/Web/CSS/list-style-image)
- [`list-style-position`](/fr/docs/Web/CSS/list-style-position)
