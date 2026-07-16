---
title: Propriété CSS `writing-mode`
short-title: writing-mode
slug: Web/CSS/Reference/Properties/writing-mode
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`writing-mode`** définit si les lignes d'un texte sont écrites horizontalement ou verticalement et la direction selon laquelle le bloc grandit. Lorsque cette propriété est définie pour un document entier, elle devrait être appliquée à la racine (soit l'élément `html` pour les documents HTML).

{{InteractiveExample("Démonstration CSS&nbsp;: writing-mode")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: sideways-rl;
```

```css interactive-example-choice
writing-mode: sideways-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
}
```

La propriété définit la _direction du flux du bloc_, c'est-à-dire la direction dans laquelle les conteneurs de niveau bloc sont empilés, et la direction dans laquelle le contenu de niveau en ligne s'écoule à l'intérieur d'un conteneur de bloc. Ainsi, elle détermine également l'ordre du contenu de niveau bloc.

## Syntaxe

```css
/* Avec un mot-clé */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;
writing-mode: sideways-rl;
writing-mode: sideways-lr;

/* Valeurs globales */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: revert-layer;
writing-mode: unset;
```

La propriété `writing-mode` est définie comme l'une des valeurs listées ci-dessous. La direction du flux dans les systèmes d'écritures horizontaux est également affectée par la [directionnalité de ce système <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-scripts.en), soit de gauche à droite (`ltr`, comme le français et la plupart des autres langues) ou de droite à gauche (`rtl`, comme l'hébreu ou l'arabe).

### Valeurs

- `horizontal-tb`
  - : Pour les systèmes d'écritures `ltr`, le contenu s'écoule horizontalement de gauche à droite. Pour les systèmes d'écritures `rtl`, le contenu s'écoule horizontalement de droite à gauche. La ligne horizontale suivante est positionnée sous la ligne précédente.
- `vertical-rl`
  - : Pour les systèmes d'écritures `ltr`, le contenu s'écoule verticalement de haut en bas, et la ligne verticale suivante est positionnée à gauche de la ligne précédente. Pour les systèmes d'écritures `rtl`, le contenu s'écoule verticalement de bas en haut, et la ligne verticale suivante est positionnée à gauche de la ligne précédente.
- `vertical-lr`
  - : Pour les systèmes d'écritures `ltr`, le contenu s'écoule verticalement de haut en bas, et la ligne verticale suivante est positionnée à droite de la ligne précédente. Pour les systèmes d'écritures `rtl`, le contenu s'écoule verticalement de bas en haut, et la ligne verticale suivante est positionnée à droite de la ligne précédente.
- `sideways-rl`
  - : Pour les systèmes d'écritures `ltr`, le contenu s'écoule verticalement de haut en bas. Pour les systèmes d'écritures `rtl`, le contenu s'écoule verticalement de bas en haut. Tous les glyphes, même ceux des systèmes d'écritures verticaux, sont orientés de côté vers la droite.
- `sideways-lr`
  - : Pour les systèmes d'écritures `ltr`, le contenu s'écoule verticalement de bas en haut. Pour les systèmes d'écritures `rtl`, le contenu s'écoule verticalement de haut en bas. Tous les glyphes, même ceux des systèmes d'écritures verticaux, sont orientés de côté vers la gauche.
- `lr` {{Deprecated_Inline}}
  - : Valeur dépréciée, sauf pour les documents SVG1. Pour CSS, il faut utiliser `horizontal-tb`.
- `lr-tb` {{Deprecated_Inline}}
  - : Valeur dépréciée, sauf pour les documents SVG1. Pour CSS, il faut utiliser `horizontal-tb`.
- `rl` {{Deprecated_Inline}}
  - : Valeur dépréciée, sauf pour les documents SVG1. Pour CSS, il faut utiliser `horizontal-tb`.
- `tb` {{Deprecated_Inline}}
  - : Valeur dépréciée, sauf pour les documents SVG1. Pour CSS, il faut utiliser `vertical-rl`.
- `tb-lr` {{Deprecated_Inline}}
  - : Valeur dépréciée, sauf pour les documents SVG1. Pour CSS, il faut utiliser `vertical-lr`.
- `tb-rl` {{Deprecated_Inline}}
  - : Valeur dépréciée, sauf pour les documents SVG1. Pour CSS, il faut utiliser `vertical-rl`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Utiliser plusieurs modes d'écriture

Cet exemple démontre tous les modes d'écriture, en montrant chacun avec du texte dans différentes langues.

#### HTML

Ce fragment de code HTML contient un tableau ({{HTMLElement("table")}}) dont chaque ligne indique le mode d'écriture et des exemples de scripts utilisés.

```html
<table>
  <caption>
    Utiliser plusieurs modes d'écriture
  </caption>
  <thead>
    <tr>
      <th>Valeur</th>
      <th>Système d'écriture vertical</th>
      <th>Système d'écriture horizontal</th>
      <th>Système d'écriture hybride</th>
      <th>Système d'écriture mixte</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text1">
      <th>horizontal-tb</th>
      <td>我家没有电脑。</td>
      <td>Texte d'exemple</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text2">
      <th>vertical-lr</th>
      <td>我家没有电脑。</td>
      <td>Texte d'exemple</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text3">
      <th>vertical-rl</th>
      <td>我家没有电脑。</td>
      <td>Texte d'exemple</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text4">
      <th>sideways-lr</th>
      <td>我家没有电脑。</td>
      <td>Texte d'exemple</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text5">
      <th>sideways-rl</th>
      <td>我家没有电脑。</td>
      <td>Texte d'exemple</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
  </tbody>
</table>
<p class="notice">
  Votre navigateur ne prend pas en charge les valeurs<code>sideways-lr</code> ou
  <code>sideways-rl</code>.
</p>
```

#### CSS

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}

.experimental {
  display: none;
}

.notice {
  display: table-row;
  font-weight: bold;
  text-align: center;
}

@supports (writing-mode: sideways-lr) {
  .experimental {
    display: table-row;
  }
  .notice {
    display: none;
  }
}
```

Ensuite, on ajoute la direction du contenu pour chaque cellule du tableau&nbsp;:

```css
.text1 td {
  writing-mode: horizontal-tb;
}

.text2 td {
  writing-mode: vertical-lr;
}

.text3 td {
  writing-mode: vertical-rl;
}

.text4 td {
  writing-mode: sideways-lr;
}

.text5 td {
  writing-mode: sideways-rl;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser plusieurs modes d'écriture", 400, 700)}}

### Utiliser `writing-mode` avec des transformations

Si votre navigateur ne prend pas en charge `sideways-lr`, une solution consiste à utiliser {{CSSxRef("transform")}} pour obtenir un effet similaire en fonction de la direction du système d'écriture.
L'effet de `vertical-rl` est le même que celui de `sideways-lr`, donc aucune transformation n'est nécessaire pour les systèmes d'écriture de gauche à droite.
Dans certains cas, faire pivoter le texte de 180 degrés suffit pour obtenir l'effet de `sideways-lr`, mais les glyphes de la police peuvent ne pas être conçus pour être pivotés, ce qui peut produire un positionnement ou un rendu inattendu.

#### HTML

```html
<table>
  <caption>
    Utiliser le mode d'écriture avec des transformations
  </caption>
  <thead>
    <tr>
      <th>Mode vertical de gauche à droite</th>
      <th>Mode vertical de gauche à droite avec transformation</th>
      <th>Mode horizontal de gauche à droite</th>
      <th>Rotation seule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="vertical-lr">我家没有电脑。</span>
        <span class="vertical-lr">Texte d'exemple</span>
      </td>
      <td>
        <span class="vertical-lr rotated">我家没有电脑。</span>
        <span class="vertical-lr rotated">Texte d'exemple</span>
      </td>
      <td>
        <span class="sideways-lr">我家没有电脑。</span>
        <span class="sideways-lr">Texte d'exemple</span>
      </td>
      <td>
        <span class="only-rotate">我家没有电脑。</span>
        <span class="only-rotate">Texte d'exemple</span>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.vertical-lr {
  writing-mode: vertical-lr;
}

.rotated {
  transform: rotate(180deg);
}

.sideways-lr {
  writing-mode: sideways-lr;
}

.only-rotate {
  inline-size: fit-content;
  transform: rotate(-90deg);
}
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}
span {
  display: inline-block;
  width: 1.5em;
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `writing-mode` avec des transformations", 400, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("direction")}}
- La propriété {{CSSxRef("unicode-bidi")}}
- La propriété {{CSSxRef("text-orientation")}}
- La propriété {{CSSxRef("text-combine-upright")}}
- [Les propriété logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Le module [des modes d'écriture CSS](/fr/docs/Web/CSS/Guides/Writing_modes)
- L'attribut SVG {{SVGAttr("writing-mode")}}
- [Créer des contrôles de formulaire verticaux](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Gérer différentes directions de texte](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Mettre en forme le texte vertical (chinois, japonais, coréen et mongol) <sup>(angl.)</sup>](https://www.w3.org/International/articles/vertical-text/) sur W3.org (2022)
