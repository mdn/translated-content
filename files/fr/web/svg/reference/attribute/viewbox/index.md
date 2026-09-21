---
title: viewBox
slug: Web/SVG/Reference/Attribute/viewBox
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

L'attribut **`viewBox`** définit la position et les dimensions, dans l'espace utilisateur, d'une zone d'affichage SVG.

La valeur de l'attribut `viewBox` est une liste de quatre nombres séparés par des espaces et/ou une virgule&nbsp;: `min-x`, `min-y`, `width` et `height`. `min-x` et `min-y` représentent les plus petites coordonnées X et Y que la `viewBox` puisse avoir (les coordonnées de son origine), tandis que `width` et `height` en indiquent la taille. La `viewBox` obtenue est un rectangle de l'espace utilisateur, projeté sur les limites de la zone d'affichage d'un élément SVG (et non sur la [zone d'affichage du navigateur](/fr/docs/Glossary/Viewport)).
Lorsqu'un SVG comporte un attribut `viewBox` (souvent en combinaison avec un attribut [`preserveAspectRatio`](/fr/docs/Web/SVG/Reference/Attribute/preserveAspectRatio)), une transformation étire ou redimensionne la zone d'affichage SVG afin de l'ajuster à un élément conteneur donné.

## Éléments

Cet attribut peut être utilisé avec les éléments SVG décrits dans les sections ci-dessous.

### `<marker>`

Pour {{SVGElement('marker')}}, `viewBox` définit la position et les dimensions du contenu de l'élément `<marker>`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
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

### `<pattern>`

Pour {{SVGElement('pattern')}}, `viewBox` définit la position et les dimensions du contenu de la tuile du motif.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
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

### `<svg>`

Pour {{SVGElement('svg')}}, `viewBox` définit la position et les dimensions du contenu de l'élément `<svg>`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
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

### `<symbol>`

Pour {{SVGElement('symbol')}}, `viewBox` définit la position et les dimensions du contenu de l'élément `<symbol>`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
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

### `<view>`

Pour {{SVGElement('view')}}, `viewBox` définit la position et les dimensions du contenu de l'élément `<view>`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
            >&#x3C;number></a
          ></strong
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

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
  vertical-align: top;
}
svg:not(:root) {
  display: inline-block;
}
```

L'extrait de code ci-dessous contient trois éléments {{SVGElement("svg")}} dont les valeurs de `viewBox` diffèrent, alors que leurs descendants {{SVGElement("rect")}} et {{SVGElement("circle")}} sont identiques&nbsp;: les résultats sont pourtant très différents. La taille du `<rect>` est définie avec des unités relatives, la taille visuelle du carré obtenu paraît donc inchangée quelle que soit la valeur de `viewBox`. L'attribut de rayon {{SVGAttr("r")}} du `<circle>` est le même dans les trois cas, mais cette valeur en unités utilisateur est résolue par rapport à la taille définie par la `viewBox`, ce qui produit un résultat différent à chaque fois.

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>
```

{{EmbedLiveSample("Exemples", '100%', 200)}}

Les unités utilisateur de `r="4"` sont résolues par rapport aux dimensions de la `viewBox`, ce qui donne des cercles de tailles radicalement différentes. L'effet exact de l'attribut `viewBox` dépend également de l'attribut {{SVGAttr("preserveAspectRatio")}}.

> [!NOTE]
> Une valeur de `width` ou de `height` inférieure ou égale à `0` désactive le rendu de l'élément.

## Spécifications

{{Specifications}}
