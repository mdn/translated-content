---
title: font-weight
slug: Web/CSS/font-weight
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-weight
---
{{CSSRef}}

La propriété CSS **`font-weight`** permet de définir la graisse utilisée pour le texte. Les niveaux de graisse disponibles dépendent de la police (cf. {{cssxref("font-family")}}). Certaines fontes n'existent qu'avec les niveaux de graisses `normal` et `bold`.

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-weight: normal;
font-weight: bold;

/* Valeurs relatives à l'élément parent */
font-weight: lighter;
font-weight: bolder;

/* Valeurs numériques */
font-weight: 1;
font-weight: 100;
font-weight: 100.6;
font-weight: 123;
font-weight: 200;
font-weight: 300;
font-weight: 321;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;
font-weight: 1000;

/* Valeurs globales */
font-weight: inherit;
font-weight: initial;
font-weight: unset;
```

La propriété `font-weight` peut être définie grâce à l'une des valeurs suivantes.

### Valeurs

- `normal`
  - : Le niveau de graisse normal pour la fonte. Équivalent à la valeur `400`.
- `bold`
  - : Le texte est en gras. Équivalent à la valeur `700`.
- `lighter`
  - : On diminue la graisse d'un niveau par rapport à l'élément parent (selon les fontes / graisses disponibles pour la police utilisée). Le texte paraît plus fin.
- `bolder`
  - : On augmente la graisse d'un niveau par rapport à l'élément parent (selon les fontes / graisses disponibles pour la police utilisée). Le texte est plus gras.
- `<number>`
  - : Une valeur numérique (type {{cssxref("&lt;number&gt;")}}) comprise entre 1 et 1000. Plus la valeur est grande, plus le niveau de graisse est élevé. Ces valeurs permettent de couvrir un éventail de valeurs plus larges qu'avec `normal` et `bold`.

Pour d'anciennes versions de la spécification, `font-weight` n'acceptait que les mots-clés et les valeurs numériques 100, 200, 300, 400, 500, 600, 700, 800 et 900. Les polices non-variables ne peuvent utiliser que ces valeurs (les valeurs plus fines seront converties cf. ci-après).

Le module de spécification _CSS Fonts_ de niveau 4 a étendu la syntaxe afin de pouvoir utiliser n'importe quel nombre entre 1 et 1000. Cela permet aux polices variables d'avoir une meilleur précision quant aux tailles utilisables. On notera que cette fonctionnalité n'est pas encore prise en charge (à date de juin 2018) par tous les navigateurs.

### Conversion des valeurs

Si une fonte avec la graisse demandée n'est pas disponible, le moteur suit la méthode suivante pour déterminer la fonte qui sera affichée :

- Si un niveau supérieur à `500` est utilisé, c'est la graisse la plus sombre et la plus proche qui sera utilisée (la plus proche s'il n'y a pas de graisse plus forte)
- Si un niveau inférieur à `400` est utilisé, c'est la graisse la plus claire la plus proche qui est utilisée (la plus proche s'il n'y a pas de graisse plus claire)
- Si un niveau égal à `400` est utilisé, `500` sera utilisé. Si `500` n'est pas disponible, on utilisera la méthode de calcul sur un niveau inférieur à 400.
- Si un niveau égal à `500` est utilisé, `400` sera utilisé. Si `400` n'est pas disponible, on utilisera la méthode de calcul sur un niveau inférieur à `400`.

Autrement dit, pour les fontes dont les niveaux de graisse sont uniquement `normal` et `bold`, `100`-`500` seront considérés équivalents à `normal` et `600`-`900` à `bold`.

### Signification des poids relatifs

Lorsqu'on utilise les valeurs `lighter` ou `bolder`, on peut utiliser le tableau suivant pour calculer le poids absolu de l'élément :

<table class="standard-table">
  <thead>
    <tr>
      <th>Valeur héritée</th>
      <th><code>bolder</code></th>
      <th><code>lighter</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tr>
    <tr>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tr>
  </tbody>
</table>

### Correspondance entre les valeurs numériques et les noms communément utilisés

Les valeurs allant de 100 à 900 correspondent environ aux noms suivants, communément utilisés pour désigner les variantes de fonte, selon la graisse, d'une même police (_NdT : les noms sont laissés en anglais car généralement utilisés tels quels_) :

| Valeur | Nom communément utilisé     |
| ------ | --------------------------- |
| 100    | _Thin (Hairline)_           |
| 200    | _Extra Light (Ultra Light)_ |
| 300    | _Light_                     |
| 400    | _Normal_                    |
| 500    | _Medium_                    |
| 600    | _Semi Bold (Demi Bold)_     |
| 700    | _Bold_                      |
| 800    | _Extra Bold (Ultra Bold)_   |
| 900    | _Black (Heavy)_             |

### Interpolation

Une valeur `font-weight` est interpolée de façon discrète (par multiple de 100). L'interpolation se produit sur des valeurs réelles puis la valeur est convertie au multiple de 100 le plus proche. Les valeurs à égale distance entre deux multiples de 100 sont arrondies à la valeur supérieure.

### Polices variables

La plupart des polices possèdent des niveaux de graisses qui correspondent aux [niveaux communément utilisés](#communs). Toutefois, certaines polices, appelées « polices variables » prennent en charge un intervalle de niveaux avec plus ou moins de détail, ce qui permet à l'éditeur du document de mieux contrôler la graisse utilisée.

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `wght` qui est utilisé afin d'implémenter les variations de largeur.

Pour que l'exemple suivant fonctionne, il est nécessaire d'utiliser un navigateur qui prend en charge la spécification _CSS Fonts_ de niveau 4.

{{EmbedLiveSample("Polices_variables", 1200, 180, "", "", "example-outcome-frame")}}

#### HTML

```html
<header>
    <input type="range" id="weight" name="weight" min="1" max="1000" />
    <label for="weight">Weight</label>
</header>
<div class="container">
    <p class="sample">...it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.</p>
</div>
```

#### CSS

```css
/*
Mutator Sans is created by LettError (https://github.com/LettError/mutatorSans)
and is used here under the terms of its license:
https://github.com/LettError/mutatorSans/blob/master/LICENSE
*/

@font-face {
  src: url('https://mdn.mozillademos.org/files/16011/MutatorSans.ttf');
  font-family:'MutatorSans';
  font-style: normal;
}

label {
  font: 1rem monospace;
  white-space: nowrap;
}

.container {
  max-height: 150px;
  overflow-y: auto;
}

.sample {
  text-transform: uppercase;
  font: 1.5rem 'MutatorSans', sans-serif;
}
```

```css hidden
html, body {
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}

body {
  display: flex;
  flex-direction: column;
}

header {
  margin-bottom: 1.5rem;
}

.container {
  flex-grow: 1;
}

.container > p {
  margin-top: 0;
  margin-bottom: 0;
}
```

#### JavaScript

```js
let weightLabel = document.querySelector('label[for="weight"]');
let weightInput = document.querySelector('#weight');
let sampleText = document.querySelector('.sample');

function update() {
  weightLabel.textContent = `font-weight: ${weightInput.value};`;
  sampleText.style.fontWeight = weightInput.value;
}

weightInput.addEventListener('input', update);

update();
```

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the
  bank, and of having nothing to do: once or twice she had peeped into the
  book her sister was reading, but it had no pictures or conversations in
  it, 'and what is the use of a book,' thought Alice 'without pictures or
  conversations?'
</p>

<div>I'm heavy<br/>
  <span>I'm lighter</span>
</div>
```

### CSS

```css
/* Le texte du paragraphe est gras. */
p {
  font-weight: bold;
}

/* Le texte du div est deux niveaux plus sombres
   mais moins gras qu'une graisse normale. */
div {
 font-weight: 600;
}

/* Le texte dans le span est un niveau plus
   clair que le parent. */
span {
  font-weight: lighter;
}
```

### Résultat

{{EmbedLiveSample("Exemples","400","300")}}

## Accessibilité

Pour les personnes ayant une vision faible, il peut être extrêmement difficile de lire un texte avec `font-weight` qui vaut `100` ou `200`, notamment [si le contraste entre le texte et l'arrière-plan est faible](/fr/docs/Web/CSS/color#accessibilité).

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.8 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Fonts', '#font-weight-prop', 'font-weight')}}             | {{Spec2('CSS4 Fonts')}}         | Définition de `font-weight` qui précise que la propriété peut utiliser des valeurs comprises entre `1` et `1000`. |
| {{SpecName('CSS3 Fonts', '#font-weight-prop', 'font-weight')}}             | {{Spec2('CSS3 Fonts')}}         | Aucun changement.                                                                                                 |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'font-weight')}}         | {{Spec2('CSS3 Transitions')}} | `font-weight` peut désormais être animée.                                                                         |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-weight', 'font-weight')}} | {{Spec2('CSS2.1')}}                 | Aucun changement.                                                                                                 |
| {{SpecName('CSS1', '#font-weight', 'font-weight')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-weight")}}
