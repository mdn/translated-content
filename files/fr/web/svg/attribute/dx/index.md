---
title: dx
slug: Web/SVG/Attribute/dx
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/dx
---
{{SVGRef}}

L'attribut **`dx`** indique un décalage sur l'axe x de la position d'un élément ou de son contenu.

Sept éléments utilisent cet attribut: {{SVGElement('altGlyph')}}, {{SVGElement('feDropShadow')}}, {{SVGElement('feOffset')}}, {{SVGElement('glyphRef')}}, {{SVGElement('text')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lignes indiquant la position des glyphes -->
  <line x1="0"  x2="100%" y1="50%" y2="50%" />
  <line x1="10%" x2="10%" y1="0"   y2="100%" />
  <line x1="60%" x2="60%" y1="0"   y2="100%" />

  <!-- Un texte de référence -->
  <text x="10%" y="50%" fill="grey">SVG</text>

  <!-- Le même texte avec un décalage sur l'axe x -->
  <text dx="50%" x="10%" y="50%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## altGlyph

> **Attention :** Depuis SVG2 {{SVGElement('altGlyph')}} est déprécié et ne devrait pas être utilisé.

Pour {{SVGElement('altGlyph')}}, s'il ne contient qu'une seule valeur, `dx` définit un décalage sur l'axe x pour l'ensemble des glyphes.

S'il a plusieurs valeurs, `dx` définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de `0`. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        Liste de
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## feDropShadow

Pour {{SVGElement('feDropShadow')}}, `dx` définit le décalage x de l'ombre portée. L'unité utilisée pour résoudre la valeur de l'attribut est définie par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## feOffset

Pour {{SVGElement('feOffset')}}, `dx` définit le décalage x de l'élément source du filtre. L'unité utilisée pour résoudre la valeur de l'attribut est définie par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## glyphRef

> **Attention :** Depuis SVG2 {{SVGElement('glyphRef')}} est déprécié et ne devrait pas être utilisé.

Pour {{SVGElement('glyphRef')}}, `dx` définit le décalage x du glyphe, dans le système métrique de la police.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## text

Pour {{SVGElement('text')}}, s'il ne contient qu'une seule valeur, `dx` définit un décalage sur l'axe x pour tous les glyphes.

S'il a plusieurs valeurs, `dx` définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de `0`. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        Liste de
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Linges indiquant la position des glyphes -->
  <line x1="0"  x2="100%" y1="25%" y2="25%" />
  <line x1="0"  x2="100%" y1="50%" y2="50%" />
  <line x1="0"  x2="100%" y1="75%" y2="75%" />

  <line x1="10%" x2="10%" y1="0"   y2="100%" />
  <line x1="30%" x2="30%" y1="0"   y2="100%" />
  <line x1="60%" x2="60%" y1="0"   y2="100%" />

  <!-- Le comportement change en fonction du nombre
       de valeurs de l'attribut -->
  <text dx="20%"       x="10%" y="25%">SVG</text>
  <text dx="0 10%"     x="10%" y="50%">SVG</text>
  <text dx="0 10% 20%" x="10%" y="75%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: .5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample('text', '100%', 100)}}

## tref

> **Attention :** Depuis SVG2 {{SVGElement('tref')}} est déprécié et ne devrait pas être utilisé.

Pour {{SVGElement('tref')}}, s'il ne contient qu'une seule valeur, `dx` définit un décalage sur l'axe x pour tous les glyphes.

S'il a plusieurs valeurs, `dx` définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de `0`. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        Liste de
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## tspan

Pour {{SVGElement('tspan')}}, s'il ne contient qu'une seule valeur, `dx` définit un décalage sur l'axe x pour tous les glyphes.

S'il a plusieurs valeurs, `dx` définit un décalage sur l'axe x individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent une valeur de `0`. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs supplémentaires sont ignorées.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        Liste de
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire                                    |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------- |
| {{ SpecName('Filters 1.0', '#element-attrdef-fedropshadow-dx', 'dx') }} | {{Spec2('Filters 1.0')}} | Définition initiale pour `<feDropShadow>`      |
| {{ SpecName('Filters 1.0', '#element-attrdef-feoffset-dx', 'dx') }}         | {{Spec2('Filters 1.0')}} | Définition pour `<feOffset>`                   |
| {{SpecName("SVG2", "text.html#TextElementDXAttribute", "dx")}}             | {{Spec2("SVG2")}}         | Définition pour `<text>` et `<tspan>`          |
| {{SpecName("SVG1.1", "filters.html#feOffsetDxAttribute", "dx")}}             | {{Spec2("SVG1.1")}}         | Définition initiale pour `<feOffset>`          |
| {{SpecName("SVG1.1", "text.html#AltGlyphElementDXAttribute", "dx")}}     | {{Spec2("SVG1.1")}}         | Définition initiale pour `<altGlyph>`          |
| {{SpecName("SVG1.1", "text.html#GlyphRefElementDXAttribute", "dx")}}     | {{Spec2("SVG1.1")}}         | Définition initiale pour `<glyphRef>`          |
| {{SpecName("SVG1.1", "text.html#TextElementDXAttribute", "dx")}}             | {{Spec2("SVG1.1")}}         | Définition initiale pour `<text>`              |
| {{SpecName("SVG1.1", "text.html#TSpanElementDXAttribute", "dx")}}         | {{Spec2("SVG1.1")}}         | Définition initiale pour `<tref>` et `<tspan>` |
