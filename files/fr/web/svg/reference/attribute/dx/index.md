---
title: dx
slug: Web/SVG/Reference/Attribute/dx
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

L'attribut **`dx`** indique un décalage le long de l'axe x sur la position d'un élément ou de son contenu.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('feDropShadow')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('text')}}
- {{SVGElement('tspan')}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lignes matérialisant la position des glyphes -->
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Un texte de référence -->
  <text x="10%" y="50%" fill="grey">SVG</text>

  <!-- Le même texte, décalé le long de l'axe x -->
  <text dx="50%" x="10%" y="50%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample("Exemple", '100%', 200)}}

## feDropShadow

Pour {{SVGElement('feDropShadow')}}, `dx` définit le décalage en x de l'ombre portée. L'unité utilisée pour résoudre la valeur de l'attribut est déterminée par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre">&#x3C;number></a></strong
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

Pour {{SVGElement('feOffset')}}, `dx` définit le décalage en x du graphique d'entrée du filtre. L'unité utilisée pour résoudre la valeur de l'attribut est déterminée par l'attribut {{SVGAttr('primitiveUnits')}} de l'élément {{SVGElement('filter')}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre">&#x3C;number></a></strong
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

Pour {{SVGElement('text')}}, s'il contient une seule valeur, `dx` définit un décalage le long de l'axe x pour tous les glyphes.

S'il y a plusieurs valeurs, `dx` définit un décalage le long de l'axe x pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs que de glyphes, les glyphes restants utilisent la valeur `0`. S'il y a plus de valeurs que de glyphes, les valeurs superflues sont ignorées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        Liste de (<strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#longueur"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#pourcentage"
            >&#x3C;percentage></a
          ></strong
        >)
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
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lignes matérialisant la position des glyphes -->
  <line x1="0" x2="100%" y1="25%" y2="25%" />
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="0" x2="100%" y1="75%" y2="75%" />

  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="30%" x2="30%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Le comportement change selon le nombre
       de valeurs de l'attribut -->
  <text dx="20%" x="10%" y="25%">SVG</text>
  <text dx="0 10%" x="10%" y="50%">SVG</text>
  <text dx="0 10% 20%" x="10%" y="75%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample('text', '100%', 100)}}

## tspan

Pour {{SVGElement('tspan')}}, s'il contient une seule valeur, `dx` définit un décalage le long de l'axe x pour tous les glyphes de substitution.

S'il y a plusieurs valeurs, `dx` définit un décalage le long de l'axe x pour chaque glyphe, relativement au glyphe précédent. S'il y a moins de valeurs que de glyphes, les glyphes restants utilisent la valeur `0`. S'il y a plus de valeurs que de glyphes, les valeurs superflues sont ignorées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        Liste de (<strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#longueur"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#pourcentage"
            >&#x3C;percentage></a
          ></strong
        >)
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

{{Specifications}}
