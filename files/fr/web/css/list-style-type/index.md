---
title: list-style-type
slug: Web/CSS/list-style-type
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/list-style-type
---
{{CSSRef}}

La propriété** `list-style-type`** permet de définir l'apparence de la puce d'un élément de liste (un cercle, un caractère, un compteur spécifique, etc.).

{{EmbedInteractiveExample("pages/css/list-style-type.html")}}La [couleur](/fr/docs/Web/CSS/color_value) de la puce utilisée sera la même que la couleur calculée de l'élément sur lequel elle s'applique.

Cette propriété s'applique aux éléments d'une liste (c'est-à-dire les éléments pour lesquels on a {{cssxref("display")}}`: list-item;`. Cela inclut par défaut les éléments {{HTMLElement("li")}} et {{HTMLElement("summary")}}. Il est possible de l'utiliser pour d'autres éléments si on utilise `display: list-item` sur ceux-ci. Cette propriété est héritée et on peut donc l'appliquer aux éléments parents (généralement {{HTMLElement("ol")}} ou {{HTMLElement("ul")}}) afin qu'elle s'applique à l'ensemble des éléments fils.

## Syntaxe

```css
/* Liste partielle des mots-clés utilisables */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: cjk-ideographic;
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
list-style-type: unset;
```

La propriété `list-style-type` peut être définie grâce à :

- une valeur [`<custom-ident>`](#custom-ident)
- une valeur [`symbols()`](#symbol)
- une valeur [`<string>`](#str)
- au mot-clé [`none`](#none*)

### Valeurs

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Un identifiant correspondant à la valeur d'un {{cssxref("@counter-style")}} ou à un style prédéfini :
- {{cssxref("symbols()")}}
  - : Définit un style de puce utilisé.
- `none`
  - : Aucun marqueur n'est affiché.
- {{cssxref("&lt;string&gt;")}}
  - : La chaîne de caractères indiquée sera utilisée comme puce
- `disc`
  - : Un disque plein (la valeur par défaut)
- `circle`
  - : Un cercle vide
- `square`
  - : Un carré plein
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
  - : La numérotation bengali.
- `cambodian`/`khmer`
  - : La numérotation cambodgienne/khmer.
- `cjk-earthly-branch`, `-moz-cjk-earthly-branch`
  - : Des nombres ordinaux Han de la « branche terrestre ».
- `cjk-heavenly-stem`, `-moz-cjk-heavenly-stem`
  - : Des nombres ordinaux Han de la « souche céleste ».
- `cjk-ideographic`{{experimental_inline}}
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
  - : La numérotation hébraïque traditionnelle
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
  - : Un symbole indiquant qu'un contrôle de révélation (tel qu'un élément {{HTMLElement("details")}}) est déplié/révélé.
- `disclosure-closed` {{experimental_inline}}
  - : Un symbole indiquant qu'un contrôle de révélation (tel qu'un élément {{HTMLElement("details")}}) est replié/masqué.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

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

### HTML

```html
<ol class="normal">Liste 1
  <li>Coucou</li>
  <li>Monde</li>
  <li>Comment ça va ?</li>
</ol>

<ol class="shortcut">Liste 2
  <li>On a</li>
  <li>le</li>
  <li>même</li>
  <li>résultat</li>
</ol>
```

### Résultat

{{EmbedLiveSample("Exemples","200","300")}}

## Accessibilité

Le lecteur d'écran [VoiceOver](https://help.apple.com/voiceover/info/guide/) n'annonce pas, incorrectement, les listes non ordonnées lorsque `list-style-type:none` leur est appliqué. Pour pallier ce problème, on peut ajouter un [espace sans chasse](https://fr.wikipedia.org/wiki/Espace_sans_chasse) comme [pseudo-contenu](/fr/docs/Web/CSS/content) avant chaque élément de liste afin que la liste soit correctement annoncée.

```css
ul {
  list-style-type: none;
}

ul li::before {
  content: "\200B";
}
```

- [VoiceOver et `list-style-type: none` – Unfettered Thoughts (en anglais)](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- _[Understanding Success Criterion 1.3.1, W3C Understanding WCAG 2.0 ](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)_[(en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Notes

- Pour certains types, il est nécessaire d'avoir une police correspondante installée pour que l'affichage fonctionne.
- Pour des raisons historiques, `cjk-ideographic` est synonyme de `trad-chinese-informal`.

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaires</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('CSS3 Counter Styles', '#extending-css2', 'list-style-type')}}
      </td>
      <td>{{Spec2("CSS3 Counter Styles")}}</td>
      <td>
        Les compteurs CSS2.1 sont redéfinis.<br />La syntaxe est étendue pour
        prendre en charge les règles
        <code>@counter-style</code>.<br />Définition des types :
        <code>hebrew</code>, <code>cjk-ideographic</code>,
        <code>hiragana</code>, <code>hiragana-iroha</code>,
        <code>katakana</code>, <code>katakana-iroha</code>,
        <code>japanese-formal</code>, <code>japanese-informal</code>,
        <code>simp-chinese-formal</code>, <code>trad-chinese-formal</code>,
        <code>simp-chinese-formal</code>,
        <code>trad-chinese-formal</code>,<code>korean-hangul-formal</code>,
        <code>korean-hanja-informal</code>, <code>korean-hanja-formal</code>,
        <code>cjk-decimal</code>, <code>ethiopic-numeric</code>,
        <code>disclosure-open</code> et
        <code>disclosure-closed</code>.<br /><code>&#x3C;counter-style></code>
        est étendu avec la notation fonctionnelle <code>symbols()</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS3 Lists', '#propdef-list-style-type', 'list-style-type')}}
      </td>
      <td>{{Spec2('CSS3 Lists')}}</td>
      <td>
        La syntaxe est modifiée pour prendre en charge les identifiants utilisés
        avec les règles <code>@counter-style</code>.<br />Prise en charge du
        type <code>&#x3C;string></code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS2.1', 'generate.html#propdef-list-style-type', 'list-style-type')}}
      </td>
      <td>{{Spec2('CSS2.1')}}</td>
      <td><p>Définition initiale.</p></td>
    </tr>
  </tbody>
</table>

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.list-style-type")}}

## Voir aussi

- {{cssxref("list-style")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-position")}}
