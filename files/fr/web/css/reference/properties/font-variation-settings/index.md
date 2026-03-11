---
title: font-variation-settings
slug: Web/CSS/Reference/Properties/font-variation-settings
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variation-settings`** permet de contrôler de façon fine les caractéristiques des [polices variables](/fr/docs/Web/CSS/Guides/Fonts/Variable_fonts) en définissant les noms d'axes à quatre lettres des caractéristiques à faire varier ainsi que leurs valeurs.

{{InteractiveExample("Démonstration CSS&nbsp;: font-variation-settings")}}

```css interactive-example-choice
font-variation-settings: "wght" 50;
```

```css interactive-example-choice
font-variation-settings: "wght" 850;
```

```css interactive-example-choice
font-variation-settings: "wdth" 25;
```

```css interactive-example-choice
font-variation-settings: "wdth" 75;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    ...il ne serait pas merveilleux de croiser un Mégalosaure, long d'une
    douzaine de mètres, se dandinant comme un lézard éléphantesque sur Holborn
    Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

p {
  font-size: 1.5rem;
  font-family: "Amstelvar", serif;
}
```

## Syntaxe

```css
/* Valeur pour les réglages par défaut */
font-variation-settings: normal;

/* Utilisation des valeurs pour les axes OpenType */
font-variation-settings: "XHGT" 0.7;

/* Valeurs globales */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: revert-layer;
font-variation-settings: unset;
```

### Valeurs

- `normal`
  - : Le texte est disposé avec les caractéristiques par défaut.
- `<string> <number>`
  - : Lors de l'affichage du texte, les axes OpenType sont passés au moteur graphique afin d'activer ou de désactiver certaines fonctionnalités de la police. Chaque valeur est une chaîne de caractères ({{CSSxRef("&lt;string&gt;")}}) avec quatre caractères ASCII, suivie par un nombre ({{CSSxRef("number")}}) qui indique la valeur pour l'axe correspondant. Si la chaîne de caractères `<string>` a plus ou moins de 4 caractères et contient des caractères en dehors de l'intervalle U+20 - U+7E, la propriété sera considérée comme invalide. La valeur numérique `<number>` n'est pas nécessairement entière et positive, ce peut être un nombre décimal ou un nombre négatif.

## Description

Cette propriété est un mécanisme de bas niveau conçu pour définir des fonctionnalités de polices variables lorsqu'il n'existe aucun autre moyen d'activer ou d'accéder à ces fonctionnalités. Vous ne devez l'utiliser que lorsqu'aucune propriété de base n'existe pour définir ces fonctionnalités (par exemple, {{CSSxRef("font-weight")}}, {{CSSxRef("font-style")}}).

Les caractéristiques de police définies avec `font-variation-settings` prévaudront toujours sur celles définies avec les propriétés de police de base correspondantes, par exemple `font-weight`, peu importe leur place dans la cascade. Dans certains navigateurs, cela n'est actuellement vrai que lorsque la déclaration {{CSSxRef("@font-face")}} inclut un intervalle {{CSSxRef("@font-face/font-weight", "font-weight")}}.

### Axes enregistrés et axes spécifiques

Les axes des polices variables sont rangés selon deux catégories&nbsp;: les axes **enregistrés** et les axes **spécifiques**.

Les axes enregistrés représentent les variations les plus fréquemment utilisées. Si ces axes sont suffisamment fréquents pour avoir été standardisés, cela ne signifie pas qu'un créateur de police doive tous les gérer pour créer une police.

Voici la liste des axes enregistrés et les propriétés CSS correspondantes, qui permettent de jouer sur ces axes&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Étiquette pour l'axe</th>
      <th scope="col">Propriété</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{CSSxRef("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{CSSxRef("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (slant)</td>
      <td>{{CSSxRef("font-style")}}: <code>oblique + angle</code></td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{CSSxRef("font-style")}}: <code>italic</code></td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{CSSxRef("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

Les axes spécifiques peuvent correspondre à n'importe quel axe que le concepteur de la police souhaite faire varier (ce peut par exemple être la hauteur des hampes et des jambages, la taille des empattements ou tout autre chose). N'importe quel axe peut être utilisé tant qu'il a une étiquette unique sur quatre caractères. Il est possible que, si des axes spécifiques deviennent majoritairement présents, ils soient intégrés parmi les axes enregistrés.

> [!NOTE]
> Les étiquettes des axes enregistrés sont écrits en minuscules et les axes spécifiques doivent être écrits en majuscules. On notera que rien n'oblige à suivre cette règle et qu'il est tout à fait possible que des concepteurs de polices donnent des étiquettes en minuscules à des axes spécifiques. Quoiqu'il en soit, on retiendra que les étiquettes des axes sont sensibles à la casse.

Pour utiliser les polices variables sur votre système d'exploitation, vous devez vous assurer qu'il est à jour. Par exemple, les systèmes Linux nécessitent la dernière version de Linux FreeType, et macOS avant 10.13 ne prend pas en charge les polices variables. Si votre système d'exploitation n'est pas à jour, vous ne pourrez pas utiliser les polices variables dans les pages web ou les outils de développement de Firefox.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Vous pouvez trouver d'autres exemples de polices variables dans notre [guide sur les polices variables](/fr/docs/Web/CSS/Guides/Fonts/Variable_fonts).

### Contrôler la graisse variable de la police (`wght`)

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour éditer l'exemple dans le MDN Playground. Modifiez le CSS pour tester différentes valeurs de graisse. Observez ce qui se passe si vous indiquez une valeur hors de l'intervalle autorisé.

```html hidden live-sample___variable-fonts-weight-example
<div>
  <p class="p1">Graisse</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p class="p2">Graisse</p>
  <span>(font-variation-settings: "wght" 625)</span>
</div>
<div class="adjustable">
  <p class="p3">Graisse</p>
  (font-variation-settings: "wght" <span id="angle-text">625</span>)<br />
  <label for="text-axis">Ajuster la graisse&nbsp;: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="300"
    max="900"
    value="625" />
</div>
```

```css hidden live-sample___variable-fonts-weight-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    "Georgia",
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 625;
}
```

```css live-sample___variable-fonts-weight-example
/* plage de graisse de 300 à 900 */
.p1 {
  font-weight: 625;
}

/* plage de graisse de 300 à 900 */
.p2 {
  font-variation-settings: "wght" 625;
}

/* Ajuster avec le curseur et la propriété personnalisée */
.p3 {
  font-variation-settings: "wght" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-weight-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-weight-example", "", 450)}}

### Contrôler l'inclinaison variable de la police (`slnt`)

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour éditer l'exemple dans le MDN Playground. Modifiez le CSS pour tester différentes valeurs d'inclinaison ou d'oblique.

```html hidden live-sample___variable-fonts-slant-example
<div>
  <p class="p1">Inclinaison</p>
  <span>(font-style: oblique 14deg)</span>
</div>
<div>
  <p class="p2">Inclinaison</p>
  <span>(font-variation-settings: 'slnt' 12)</span>
</div>
<div class="adjustable">
  <p class="p3">Inclinaison</p>
  (font-variation-settings: 'slnt' <span id="angle-text">5</span>)<br />
  <label for="text-axis">Ajuster l'inclinaison&nbsp;: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="0"
    max="12"
    value="5" />
</div>
```

```css hidden live-sample___variable-fonts-slant-example
@font-face {
  font-family: "Roboto VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/Roboto-VF.woff2")
    format("woff2-variations");
  font-weight: 100 900;
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-display: swap;
}

p {
  font:
    1.2em "Roboto VF",
    "Helvetica",
    sans-serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 5;
}
```

```css live-sample___variable-fonts-slant-example
/* plage d'inclinaison de 0deg à 12deg */
.p1 {
  font-style: oblique 14deg;
}

/* plage d'inclinaison de 0 à 12 */
.p2 {
  font-variation-settings: "slnt" 12;
}

/* Ajuster avec le curseur et la propriété personnalisée */
.p3 {
  font-variation-settings: "slnt" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-slant-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-slant-example", "", 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur les polices variables](/fr/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Présentation des variations de polices OpenType <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview) sur microsoft.com
- [Registre des axes de variation OpenType <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg) sur microsoft.com
- [Polices variables OpenType <sup>(angl.)</sup>](https://www.axis-praxis.org/) sur axis-praxis.org
- [Polices variables <sup>(angl.)</sup>](https://v-fonts.com/) sur v-fonts.com
