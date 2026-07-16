---
title: Propriété CSS `text-transform`
short-title: text-transform
slug: Web/CSS/Reference/Properties/text-transform
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-transform`** définit la façon de mettre en majuscule le texte d'un élément. Elle peut être utilisée pour afficher le texte en majuscules, en minuscules ou avec chaque mot en majuscule. Elle peut également aider à améliorer la lisibilité pour les annotations ruby.

{{InteractiveExample("Démonstration CSS&nbsp;: text-transform")}}

```css interactive-example-choice
text-transform: capitalize;
```

```css interactive-example-choice
text-transform: uppercase;
```

```css interactive-example-choice
text-transform: lowercase;
```

```css interactive-example-choice
text-transform: none;
```

```css interactive-example-choice
text-transform: full-width;
```

```css interactive-example-choice
text-transform: full-size-kana;
```

```css interactive-example-choice
text-transform: math-auto;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <p>
      LONDRES. La session de Michaelmas étant récemment terminée, et le Lord
      Chancelier siégeant dans la salle de Lincoln's Inn.
    </p>
    <p lang="el">
      Σ est une lettre grecque et apparaît dans ΟΔΥΣΣΕΥΣ. Θα πάμε στο "Θεϊκό
      φαΐ" ή στη "Νεράιδα"
    </p>
    <p lang="ja">ァィゥェ ォヵㇰヶ</p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2em;
}
```

La propriété `text-transform` prend en compte les règles de mappage des majuscules et minuscules spécifiques à chaque langue, telles que les suivantes&nbsp;:

- Dans les langues turques, telles que le turc (`tr`), l'azéri (`az`), le tatar de Crimée (`crh`), le tatar de la Volga (`tt`) et le bachkir (`ba`), il existe deux types de `i`, avec et sans point, ainsi que deux paires de majuscules et minuscules&nbsp;: `i`/`İ` et `ı`/`I`.
- En allemand (`de`), le `ß` devient `SS` en majuscule.
- En néerlandais (`nl`), le digramme `ij` devient `IJ`, même avec `text-transform: capitalize`, qui ne met en majuscule que la première lettre d'un mot.
- En grec (`el`), les voyelles perdent leur accent lorsque le mot entier est en majuscules (`ά`/`Α`), à l'exception de l'êta disjonctif (`ή`/`Ή`). De plus, les diphtongues dont la première voyelle est accentuée perdent l'accent et reçoivent un tréma sur la deuxième voyelle (`άι`/`ΑΪ`).
- En grec (`el`), le sigma minuscule a deux formes&nbsp;: `σ` et `ς`. `ς` n'est utilisé que lorsque le sigma termine un mot. Lorsqu'on applique `text-transform: lowercase` à un sigma majuscule (`Σ`), le navigateur doit choisir la bonne forme minuscule en fonction du contexte.
- En irlandais (`ga`), certaines lettres préfixées restent en minuscules lorsque la consonne initiale est en majuscule, ainsi, par exemple, `text-transform: uppercase` transformera `ar aon tslí` en `AR AON tSLÍ` et non, comme on pourrait s'y attendre, en `AR AON TSLÍ` (Firefox uniquement). Dans certains cas, un trait d'union est également supprimé lors de la conversion en majuscules&nbsp;: `an t-uisce` se transforme en `AN tUISCE` (et le trait d'union est correctement réinséré par `text-transform: lowercase`).

La langue est définie par l'attribut HTML [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) ou l'attribut XML [`xml:lang`](/fr/docs/Web/SVG/Reference/Attribute/xml:lang).

> [!NOTE]
> Le support de ces différents cas peut varier d'un navigateur à un autre. Pour plus de détails, [voir le tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs).

## Syntaxe

```css
/* Avec un mot-clé */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;
text-transform: math-auto;

/* Valeurs globales */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

### Valeurs

- `capitalize`
  - : Est un mot-clé qui convertit la première _lettre_ de chaque mot en majuscule. Les autres caractères restent inchangés (ils conservent leur casse originale telle qu'écrite dans le texte de l'élément). Une lettre est définie comme un caractère faisant partie des catégories générales Lettre ou Nombre de l'Unicode ; ainsi, toute ponctuation ou symbole au début d'un mot est ignoré.

    > [!WARNING]
    > Dans de nombreuses langues, il est considéré comme incorrect de mettre en majuscule chaque mot d'une phrase, même dans les titres et les noms. Si vous ne connaissez pas la langue du texte auquel le style sera appliqué, vous devriez éviter d'utiliser `capitalize`. De plus, `capitalize` ne crée pas de capitalisation de titre, car il n'applique pas les règles spécifiques à la langue, comme l'omission des articles en anglais.

    > [!NOTE]
    > Le mot-clé `capitalize` était mal défini dans CSS 1 et CSS 2.1. Cela a entraîné des différences entre les navigateurs dans la manière dont la première lettre était calculée (Firefox considérait `-` et `_` comme des lettres, mais les autres navigateurs ne le faisaient pas. WebKit et Gecko considéraient incorrectement les symboles basés sur les lettres comme `ⓐ` comme de vraies lettres.) En définissant précisément le comportement correct, CSS Text Level 3 a corrigé ce désordre. La ligne `capitalize` dans le tableau de compatibilité des navigateurs contient la version à partir de laquelle les différents moteurs ont commencé à prendre en charge ce comportement désormais précisément défini.

- `uppercase`
  - : Est un mot-clé qui convertit tous les caractères en majuscules.
- `lowercase`
  - : Est un mot-clé qui convertit tous les caractères en minuscules.
- `none`
  - : Est un mot-clé qui empêche la modification de la casse de tous les caractères.
- `full-width`
  - : Est un mot-clé qui force l'écriture d'un caractère — principalement des idéogrammes et des scripts latins — à l'intérieur d'un carré, permettant leur alignement dans les scripts est-asiatiques habituels (comme le chinois ou le japonais).
- `full-size-kana`
  - : Utilisé généralement pour le texte d'annotation {{HTMLElement("ruby")}}, le mot-clé convertit tous les petits caractères Kana en Kana de taille complète équivalente, pour compenser les problèmes de lisibilité aux petites tailles de police généralement utilisées dans les ruby.
- `math-auto`
  - : Utilisé pour rendre automatiquement le texte en italique mathématique lorsque cela est approprié. Il transforme les lettres latines et grecques, ainsi que quelques autres symboles liés aux mathématiques, en [symboles mathématiques italiques <sup>(angl.)</sup>](https://www.unicode.org/charts/PDF/U1D400.pdf) mais uniquement si cela est appliqué à un nœud de texte contenant un seul caractère. Par exemple, «&nbsp;x&nbsp;» deviendra «&nbsp;𝑥&nbsp;» (U+1D465), mais «&nbsp;exp&nbsp;» restera «&nbsp;exp&nbsp;».
    Il est principalement utilisé pour définir le comportement des éléments {{MathMLElement("mi")}} dans MathML. Vous devriez généralement utiliser le balisage MathML qui applique automatiquement le style correct.

## Accessibilité

De grandes portions de texte utilisant `text-transform` avec la valeur `uppercase` peuvent être difficilement lisibles par les personnes dyslexiques ou souffrant de problèmes cognitifs.

- [Comprendre le WCAG sur le MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le WCAG 2.2 du W3C](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple avec `"none"`

```html
<p>
  Châine de caractères initiale
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: none
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

Ça démontre qu'aucune transformation de texte n'est appliquée.

{{EmbedLiveSample("Exemple avec `\"none\"`", "100%", 100)}}

### Exemple avec `"capitalize"` (général)

```html
<p>
  Chaîne de caractères initiale
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Cela démontre la capitalisation du texte.

{{EmbedLiveSample("Exemple avec `\"capitalize\"` (général)", "100%", 100)}}

### Exemple avec `"capitalize"` (ponctuation)

```html
<p>
  Chaîne de caractères initiale
  <strong
    >(ceci) "est" [un] —court— -test- «pour» *la* ¿capitalisation? _css_ ~de~
    ?¡transform!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(ceci) "est" [un] —court— -test- «pour» *la* ¿capitalisation? _css_ ~de~
      ?¡transform!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Ça démontre comment les ponctuations initiales d'un mot sont ignorées. Le mot-clé cible la première lettre, c'est-à-dire le premier caractère Unicode faisant partie de la catégorie générale Lettre ou Nombre.

{{EmbedLiveSample("Exemple avec `\"capitalize\"` (ponctuation)", "100%", 100)}}

### Exemple avec `"capitalize"` (Symboles)

```html
<p>
  Chaîne de caractères initiale
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Ça démontre comment les symboles initiaux sont ignorés. Le mot-clé cible la première lettre, c'est-à-dire le premier caractère Unicode faisant partie de la catégorie générale Lettre ou Nombre.

{{EmbedLiveSample("Exemple avec `\"capitalize\"` (Symboles)", "100%", 100)}}

### Exemple avec `"capitalize"` (digraphe néerlandais ij)

```html
<p>
  Chaîne de caractères initiale
  <strong lang="nl">
    Le mot néerlandais&nbsp;: "ijsland" commence par un digraphe.
  </strong>
</p>
<p>
  text-transform: capitalize
  <strong>
    <span lang="nl">
      Le mot néerlandais&nbsp;: "ijsland" commence par un digraphe.
    </span>
  </strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Ça démontre comment le digraphe néerlandais _ij_ doit être traité comme une seule lettre.

{{EmbedLiveSample("Exemple avec `\"capitalize\"` (digraphe néerlandais ij)", "100%", 100)}}

### Exemple avec `"uppercase"` (général)

```html
<p>
  Chaîne de caractères initiale
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Cela démontre la transformation du texte en majuscules.

{{EmbedLiveSample("Exemple avec `\"uppercase\"` (général)", "100%", 100)}}

### Exemple avec `"uppercase"` (voyelles grecques)

```html
<p>
  Chaîne de caractères initiale
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span lang="el">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Ça démontre comment les voyelles grecques, à l'exception de l'_eta_ disjonctive, ne doivent pas avoir d'accent, et l'accent sur la première voyelle d'une paire de voyelles devient un tréma sur la deuxième voyelle.

{{EmbedLiveSample("Exemple avec `\"uppercase\"` (voyelles grecques)", "100%", 100)}}

### Exemple avec `"lowercase"` (général)

```html
<p>
  Chaîne de caractères initiale
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Ça démontre la transformation du texte en minuscules.

{{EmbedLiveSample("Exemple avec `\"lowercase\"` (général)", "100%", 100)}}

### Exemple avec `"lowercase"` (Σ grec)

```html
<p>
  Chaîne de caractères initiale
  <strong
    >Σ EST UNE LETTRE grecque qui apparaît PLUSIEURS FOIS DANS ΟΔΥΣΣΕΥΣ.</strong
  >
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ EST UNE LETTRE grecque qui apparaît PLUSIEURS FOIS DANS ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Ça démontre comment le caractère grec sigma (`Σ`) est transformé en sigma minuscule régulier (`σ`) ou en variante finale de mot (`ς`), selon le contexte.

{{EmbedLiveSample("Exemple avec `\"lowercase\"` (Σ grec)", "100%", 100)}}

### Exemple avec `"lowercase"` (lituanien)

```html
<p>
  Chaîne de caractères initiale
  <strong>Ĩ est une LETTRE lituanienne tout comme J́</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span lang="lt">Ĩ est une LETTRE lituanienne tout comme J́</span></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Ça démontre comment les lettres lituaniennes `Ĩ` et `J́` conservent leur point lorsqu'elles sont transformées en minuscules.

{{EmbedLiveSample("Exemple avec `\"lowercase\"` (lituanien)", "100%", 100)}}

### Exemple avec `"full-width"` (général)

```html
<p>
  Chaîne de caractères initiale
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;&lt;=&gt;?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;&lt;=&gt;?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Certains caractères existent en deux formats&nbsp;: largeur normale et pleine largeur, avec des points de code Unicode différents. La version pleine largeur est utilisée pour les mélanger harmonieusement avec les caractères idéographiques asiatiques.

{{EmbedLiveSample("Exemple avec `\"full-width\"` (général)", "100%", 175)}}

### Exemple avec `"full-width"` (katakana demi-largeur japonais)

```html
<p>
  Chaîne de caractères initiale
  <strong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</strong>
</p>
<p>
  text-transform: full-width
  <strong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></strong>
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Le katakana japonais demi-largeur était utilisé pour représenter le katakana dans des codes de caractères 8 bits. Contrairement aux caractères katakana réguliers (pleine largeur), une lettre avec dakuten (marque de son voisé) est représentée par deux points de code, le corps de la lettre et le dakuten. Le `full-width` combine ces deux éléments en un seul point de code lors de la conversion de ces caractères en pleine largeur.

{{EmbedLiveSample("Exemple avec `\"full-width\"` (katakana demi-largeur japonais)", "100%", 175)}}

### Exemple avec `"full-size-kana"`

```html
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
```

```css
p:nth-of-type(2) {
  text-transform: full-size-kana;
}
```

{{EmbedLiveSample("Exemple avec `\"full-size-kana\"`", "100%", 175)}}

### Exemple avec `"math-auto"`

Dans cet exemple, nous utilisons du balisage HTML pur pour créer une formule mathématique&nbsp;:

```html
<div>
  (<span class="math-id">sin</span>&#8198;<span class="math-id">x</span>)<sup
    >2</sup
  >
  + (<span class="math-id">cos</span>&#8198;<span class="math-id">x</span>)<sup
    >2</sup
  >
  = 1
</div>
```

Nous donnons à chaque élément `.math-id` la propriété `text-transform: math-auto`. Cependant, notez que seuls les caractères `x` deviennent italiques, tandis que `sin` et `cos` restent inchangés.

```css
.math-id {
  text-transform: math-auto;
}
```

{{EmbedLiveSample("Exemple avec `\"math-auto\"`", "", 100)}}

Cependant, il est recommandé d'utiliser [MathML](/fr/docs/Web/MathML) pour les formules mathématiques, car il fournit un moyen plus robuste et accessible de représenter le contenu mathématique. Voici la même formule utilisant MathML&nbsp;:

```xml
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <semantics>
    <mrow>
      <mo stretchy="false">(</mo>
      <mo lspace="0em" rspace="0em">sin</mo>
      <mspace width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo stretchy="false">)</mo>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mo stretchy="false">(</mo>
      <mo lspace="0em" rspace="0em">cos</mo>
      <mspace width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo stretchy="false">)</mo>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <annotation encoding="TeX">(\sin\,x)^2+(\cos\,x)^2=1</annotation>
  </semantics>
</math>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-variant")}}
