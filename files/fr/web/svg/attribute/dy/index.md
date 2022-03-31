---
title: dy
slug: Web/SVG/Attribute/dy
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/dy
---
{{SVGRef}}

L'attribut **`dy`** indique un décalage sur l'axe y de la position d'un élément ou de son contenu.

Sept éléments utilisent cet attribut: {{SVGElement('altGlyph')}}, {{SVGElement('feDropShadow')}}, {{SVGElement('feOffset')}}, {{SVGElement('glyphRef')}}, {{SVGElement('text')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lignes indiquant la position des glyphes -->
  <line x1="10%" x2="10%"  y1="0"   y2="100%" />
  <line x1="0"   x2="100%" y1="30%" y2="30%"  />
  <line x1="0"   x2="100%" y1="80%" y2="80%"  />

  <!-- Un texte de référence -->
  <text x="10%" y="30%" fill="grey">SVG</text>

  <!-- Le même texte avec un décalage sur l'axe y -->
  <text dy="50%" x="10%" y="30%">SVG</text>
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

> **Attention :** Depuis {{SVGElement('altGlyph')}} est déprécié et ne devrait pas être utilisé.

Pour {{SVGElement('altGlyph')}}, s'il ne contient qu'une seule valeur, `dy` définit un décalge sur l'axe y pour tous les glyphes.

S'il a plusieurs valeurs, `dy` définit un décalage sur l'axe y individuellement pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs qu'il n'y a de glyphes, les glyphes restants utilisent la valeur `0`. S'il y a plus de valeurs qu'il n'y a de glyphes, les valeurs restantes sont ignorées.

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

Pour {{SVGElement('feDropShadow')}}, `dy` définit le décalage x de l'ombre portée. L'unité utilisée pour résoudre la valeur est définie par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.

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

Pour {{SVGElement('feOffset')}}, `dy` définit le décalage x de l'élément source du filtre. L'unité utilisée pour résoudre la valeur est définie par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.

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

Pour {{SVGElement('glyphRef')}}, `dy` définit le décalage x du glyphe, dans le système métrique de la police.

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
<svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lignes horizontales -->
  <line x1="0" x2="100%" y1="30" y2="30" />
  <line x1="0" x2="100%" y1="40" y2="40" />
  <line x1="0" x2="100%" y1="50" y2="50" />
  <line x1="0" x2="100%" y1="60" y2="60" />

  <!-- Lignes verticales -->
  <line x1="10" x2="10" y1="0" y2="100%" />
  <line x1="50" x2="50" y1="0" y2="100%" />
  <line x1="90" x2="90" y1="0" y2="100%" />

  <!-- Le comportement change en fonction du nombre de valeurs de l'attribut -->
  <text dy="20"      x="10" y="30">SVG</text>
  <text dy="0 10"    x="50" y="30">SVG</text>
  <text dy="0 10 20" x="90" y="30">SVG</text>
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
| {{ SpecName('Filters 1.0', '#element-attrdef-fedropshadow-dy', 'dy') }} | {{Spec2('Filters 1.0')}} | Définition initiale pour `<feDropShadow>`      |
| {{ SpecName('Filters 1.0', '#element-attrdef-feoffset-dy', 'dy') }}         | {{Spec2('Filters 1.0')}} | Définition pour `<feOffset>`                   |
| {{SpecName("SVG2", "text.html#TextElementDYAttribute", "dy")}}             | {{Spec2("SVG2")}}         | Définition pour `<text>` et `<tspan>`          |
| {{SpecName("SVG1.1", "filters.html#feOffsetDyAttribute", "dy")}}             | {{Spec2("SVG1.1")}}         | Définition initiale pour `<feOffset>`          |
| {{SpecName("SVG1.1", "text.html#AltGlyphElementDYAttribute", "dy")}}     | {{Spec2("SVG1.1")}}         | Définition initiale pour `<altGlyph>`          |
| {{SpecName("SVG1.1", "text.html#GlyphRefElementDYAttribute", "dy")}}     | {{Spec2("SVG1.1")}}         | Définition initiale pour `<glyphRef>`          |
| {{SpecName("SVG1.1", "text.html#TextElementDYAttribute", "dy")}}             | {{Spec2("SVG1.1")}}         | Définition initiale pour `<text>`              |
| {{SpecName("SVG1.1", "text.html#TSpanElementDYAttribute", "dy")}}         | {{Spec2("SVG1.1")}}         | Définition initiale pour `<tref>` et `<tspan>` |
