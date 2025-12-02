---
title: font-weight
slug: Web/CSS/Reference/At-rules/@font-face/font-weight
original_slug: Web/CSS/@font-face/font-weight
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`font-weight`** permet aux auteur·ice·s d'indiquer les graisses pour les polices fournies dans une [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@font-face")}}. La propriété {{cssxref("font-weight")}} peut être utilisée séparément pour indiquer la graisse des caractères d'un texte (c'est-à-dire s'ils sont en gras, normaux ou plus fins).

En général, un·e développeur·euse souhaite utiliser des polices d'une même famille avec différentes graisses. Avec les polices traditionnelles ou _statiques_, un fichier de police contient les caractères d'une famille dans une graisse et un style précis&nbsp;: par exemple, «&nbsp;Helvetica bold italic&nbsp;». Pour permettre l'affichage de polices fines, normales, grasses ou extra-grasses lorsque la propriété `font-weight` demande une graisse spécifique, vous pouvez définir plusieurs règles {{cssxref("@font-face")}} pour la même famille (toutes avec la même valeur de descripteur {{cssxref("@font-face/font-family", "font-family")}}), une pour chaque graisse ou plage de graisses.

Pour déclarer la police à utiliser pour une plage de graisses, indiquez une paire de valeurs de graisse séparées par un espace comme valeur du descripteur `font-weight`. Lorsque les règles CSS définissent une graisse via la propriété {{cssxref("font-weight")}} ou la propriété raccourcie {{cssxref("font")}}, la police appropriée sera alors utilisée.

Par exemple, si le descripteur est `font-weight: 400 600;`, lorsque la propriété est `font-weight: 450` ou `font-weight: 550`, cette police sera utilisée pour cette famille de polices.
Que la police soit statique ou une [police variable](/fr/docs/Web/CSS/Guides/Fonts/Variable_fonts), la police correspondant à la plage sera utilisée. Dans ce cas, si la police est statique, `450` et `550` apparaîtront identiques. Si la police est variable, la seconde sera plus grasse.

Le descripteur est le même pour toutes les polices, mais la plage que vous définirez pour une police variable sera généralement plus large, parfois même `1 1000` pour utiliser la même police pour toutes les valeurs de la propriété font-weight.

## Syntaxe

```css
/* Valeurs simples */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* Valeurs multiples */
font-weight: normal bold;
font-weight: 300 500;
```

### Valeurs

Le descripteur `font-weight` accepte l'une des formes suivantes&nbsp;:

- Le mot-clé `auto`.
- Une seule valeur `<font-weight-absolute>`.
- Une paire de valeurs `<font-weight-absolute>`, séparées par un espace.

Chaque `<font-weight-absolute>` peut être l'une des valeurs suivantes&nbsp;:

- `normal`
  - : Graisse normale. Équivalent à `400`.
- `bold`
  - : Graisse grasse. Équivalent à `700`.
- `<number>`
  - : Une valeur {{cssxref("&lt;number&gt;")}} comprise entre 1 et 1000 inclus. Les nombres plus élevés représentent des graisses plus épaisses (ou aussi épaisses) que les nombres plus faibles. Certaines valeurs courantes correspondent à des noms de graisses communs, comme décrit dans la section [Correspondance entre les noms et les valeurs numériques](#correspondance_entre_les_noms_et_les_valeurs_numériques) ci-dessous.

### Correspondance entre les noms et les valeurs numériques

Les valeurs numériques entre `100` et `900` correspondent (approximativement) à ces noms communément utilisés&nbsp;:

| Valeur | Nom commun                |
| ------ | ------------------------- |
| 100    | Thin (Hairline)           |
| 200    | Extra Light (Ultra Light) |
| 300    | Light                     |
| 400    | Normal                    |
| 500    | Medium                    |
| 600    | Semi Bold (Demi Bold)     |
| 700    | Bold                      |
| 800    | Extra Bold (Ultra Bold)   |
| 900    | Black (Heavy)             |

### Polices variables

La plupart des polices se déclinent en fontes avec des niveaux de graisses distincts. Toutefois, certaines polices, appelées polices variables, permettent d'utiliser des niveaux de graisse intermédiaires plus ou moins finement. On peut ainsi obtenir une fonte d'un niveau de graisse plus précis.

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `"wght"` qui est utilisé afin d'implémenter ces largeurs variables.

## Définition formelle

{{cssinfo}}

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Sélectionner les polices normales et grasses

Dans cet exemple, nous incluons deux polices, une de graisse normale et une de graisse grasse, de la famille de polices [«&nbsp;Fira Sans&nbsp;»](https://fonts.google.com/specimen/Fira+Sans) en utilisant deux règles `@font-face`. Nous définissons les descripteurs `font-weight` pour correspondre à la graisse des polices.

Ensuite, les règles CSS peuvent sélectionner la police normale ou la police grasse pour la famille «&nbsp;Fira Sans&nbsp;» simplement en définissant la propriété {{cssxref("font-weight")}}. Notez que l'élément HTML {{htmlelement("strong")}} sélectionne également la police grasse, car par défaut les éléments `<strong>` ont une valeur de propriété CSS `font-weight` à `bold`.

#### HTML

```html
<p class="one">Fira Sans, paragraphe de graisse `normal`</p>
<p class="two">Fira Sans, paragraphe de graisse `bold`</p>
<p><strong>Fira Sans, élément &lt;strong&gt; (`bold`)</strong></p>
```

#### CSS

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: bold;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: normal;
}

p.two {
  font-weight: bold;
}
```

#### Résultat

{{EmbedLiveSample("sélectionner_les_polices_normales_et_grasses", "", 300)}}

### Définir des plages de font-weight

Cet exemple montre comment inclure plusieurs polices pour différentes graisses (et styles), en incluant plusieurs déclarations `@font-face` avec la même valeur de `font-family`. En définissant les descripteurs `font-weight` avec des plages de 1 à 1000, dans le reste de vos feuilles de style, vous pouvez déclarer une valeur de `font-weight` (ou de `font-style`), et être assuré·e que la police appropriée sera utilisée.

#### HTML

```html
<p class="one">Cette police a une graisse de 100</p>
<p class="three">Cette police a une graisse de 300</p>
<p class="four">Cette police a une graisse de 400</p>
<p class="five">Cette police a une graisse de 500</p>
<p class="seven">Cette police a une graisse de 700</p>
<p class="nine">Cette police a une graisse de 900</p>
```

#### CSS

Nous incluons quatre déclarations `@font-face` pour quatre polices différentes de la famille `Fira Sans`, comme dans l'exemple précédent. Chaque déclaration est associée à une plage différente de valeurs de font-weight, mais toutes utilisent le même nom de police.

La première déclaration utilise `FiraSans-Regular` et sa plage de font-weight couvre toute la plage possible.

Les trois autres déclarations utilisent les versions light, bold et extra-bold de la police, et leurs plages de font-weight définissent des sous-ensembles de la plage comme suit&nbsp;:

- la police light est associée à la plage 1-300
- la police bold à la plage 500-700
- la police extra-bold à la plage 700-1000

La [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) CSS garantit que les trois dernières déclarations remplacent les parties de la plage définies dans la déclaration `FiraSans-Regular`.

```css
@font-face {
  font-family: "Fira Sans";
  font-weight: 1 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Regular.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 1 300;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Light.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 500 700;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2");
}

@font-face {
  font-family: "Fira Sans";
  font-weight: 700 1000;
  src: url("https://mdn.github.io/shared-assets/fonts/FiraSans-ExtraBold.woff2");
}

body {
  font-family: "Fira Sans", serif;
  font-size: 2rem;
}

p.one {
  font-weight: 100;
}

p.three {
  font-weight: 300;
}

p.four {
  font-weight: 400;
}

p.five {
  font-weight: 500;
}

p.seven {
  font-weight: 700;
}

p.nine {
  font-weight: 900;
}
```

#### Résultat

{{EmbedLiveSample("définir_des_plages_de_font-weight", "", 500)}}

Le paragraphe `seven` utilise la police extra-bold. Bien que `font-weight: 700` corresponde aux déclarations `FiraSans-Bold` et `FiraSans-ExtraBold`, comme `FiraSans-ExtraBold` est déclarée plus tard, elle remplace `FiraSans-Bold` pour cette valeur.

De même, les valeurs `100` et `300` utilisent la police light&nbsp;; bien que `FiraSans-Regular` et `FiraSans-Light` incluent `300` dans leurs plages, `FiraSans-Light` est déclarée plus tard. On pourrait aussi déclarer `FiraSans-Regular` après `FiraSans-Light`, mais il faudrait alors modifier la plage du descripteur font-weight.

### Définir une plage pour une police variable

Dans cet exemple, nous utilisons le descripteur `font-weight` pour restreindre la plage de graisses utilisables avec une police variable.

Nous incluons une police variable, [«&nbsp;League Mono&nbsp;»](https://www.theleagueofmoveabletype.com/league-mono), via une seule règle `@font-face`. Nous utilisons la valeur `font-weight: 300 700` pour limiter effectivement la plage de graisses disponibles. Si une règle CSS utilise notre police «&nbsp;League Mono&nbsp;», alors si elle spécifie une graisse hors de cette plage, la valeur sera ramenée dans la plage.

#### HTML

Nous incluons un paragraphe avec `<output>` initialisé à `400`, valeur par défaut pour le texte non stylisé. Ce paragraphe est placé entre deux autres, pour comparer le rendu des graisses.

Nous incluons un {{htmlelement("input/range")}} de type `range`, dans un {{htmlelement("label")}}, avec un `step` à `50`.

```html
<p>LeagueMono, font-weight: 300 (comparaison)</p>
<p id="example">LeagueMono, font-weight: <output>400</output> (exemple)</p>
<p>LeagueMono, font-weight: 700 (comparaison)</p>
<label
  >Changer la graisse&nbsp;:
  <input type="range" min="50" max="1000" step="50" value="400" />
</label>
```

#### CSS

Nous définissons la plage du descripteur `font-weight` à `300 700`, ce qui limite la police variable à cette plage.

```css
@font-face {
  font-family: LeagueMono;
  src: url("https://mdn.github.io/shared-assets/fonts/LeagueMono-VF.ttf");
  font-weight: 300 700;
}

p {
  font-family: LeagueMono, serif;
  font-size: 1.5rem;
}

p:first-of-type {
  font-weight: 300;
}

p:last-of-type {
  font-weight: 700;
}
```

#### JavaScript

Nous incluons un gestionnaire d'événement qui met à jour la propriété `font-weight` du paragraphe et le texte affiché&nbsp;:

```js
const text = document.querySelector("#example");
const log = document.querySelector("output");
const range = document.querySelector("input");

range.addEventListener("change", () => {
  text.style.fontWeight = range.value;
  log.innerText = range.value;
});
```

#### Résultat

{{EmbedLiveSample("définir_une_plage_pour_une_police_variable", "", "400")}}

Changez la graisse du paragraphe via le curseur.
Notez que le paragraphe exemple n'est pas plus fin que le paragraphe `300` au-dessus ni plus gras que le paragraphe `700` en dessous&nbsp;: la graisse est limitée à la plage définie par le descripteur `font-weight`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- Le descripteur {{cssxref("@font-face/unicode-range", "unicode-range")}}
