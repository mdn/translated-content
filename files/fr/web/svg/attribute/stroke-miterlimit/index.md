---
title: stroke-miterlimit
slug: Web/SVG/Attribute/stroke-miterlimit
---

{{SVGRef}}

L'attribut **`stroke-miterlimit`** définit la limite du rapport entre la longueur du coin et la valeur de {{ SVGAttr("stroke-width") }} utilisée pour dessiner la [liaison entre deux segments de ligne](/fr/docs/Web/SVG/Attribute/stroke-linejoin). Quand la limite est dépassée, la liaison passe du type _miter_ (pointu) au type _bevel_ (biseauté).

> **Note :** L'attribut `stroke-miterlimit` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

Cet attribut peut être appliqué à n'importe quel élément, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg">
  <!-- Impact du miterlimit par défaut -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    id="p1"
    d="M1,9 l7   ,-3 l7   ,3
           m2,0 l3.5 ,-3 l3.5 ,3
           m2,0 l2   ,-3 l2   ,3
           m2,0 l0.75,-3 l0.75,3
           m2,0 l0.5 ,-3 l0.5 ,3" />

  <!-- Impact du miterlimit le plus petit (1) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="1"
    id="p2"
    d="M1,19 l7   ,-3 l7   ,3
           m2, 0 l3.5 ,-3 l3.5 ,3
           m2, 0 l2   ,-3 l2   ,3
           m2, 0 l0.75,-3 l0.75,3
           m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- Impact d'un large miterlimit (8) -->
  <path
    stroke="black"
    fill="none"
    stroke-linejoin="miter"
    stroke-miterlimit="8"
    id="p3"
    d="M1,29 l7   ,-3 l7   ,3
           m2, 0 l3.5 ,-3 l3.5 ,3
           m2, 0 l2   ,-3 l2   ,3
           m2, 0 l0.75,-3 l0.75,3
           m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- Les lignes roses suivantes indiquent la position du chemin pour chaque trait -->
  <path
    stroke="pink"
    fill="none"
    stroke-width="0.05"
    d="M1, 9 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
           M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
           M1,29 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 400)}}

Quand deux segments de ligne se recontrent en angle aigu, et la liaison définit par {{ SVGAttr("stroke-linejoin") }} vaut `miter`, il est possible que le coin s'étende bien au-delà de l'épaisseur de la ligne du contour. Le ratio `stroke-miterlimit` est utilisé pour définir une limite à partir de laquelle la liaison est convertie de _miter_ à _bevel_.

Le rapport entre la longueur du coin (distance entre le côté intérieur et le côté externe du coin) et {{ SVGAttr("stroke-width") }} est directement lié à l'angle (θ) entre les segments, tel que décrit par cette formule:

<math><mstyle displaystyle="true"><mi><code>stroke-miterlimit</code></mi> <mo>=</mo> <mfrac><mrow><mi>miterLength</mi> </mrow><mrow><mi><code>stroke-width</code></mi> </mrow></mfrac><mo>=</mo> <mfrac><mrow><mn>1</mn> </mrow><mrow><mrow><mi>sin</mi> <mrow><mo>(</mo> <mfrac><mrow><mo>θ</mo> </mrow><mrow><mn>2</mn> </mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle></math>

Par exemple, une limite de 1.414 convertit une liaison _miter_ en _bevel_ pour les angles de moins de 90 degrés, une limite de 4.0 pour les angles de moins de 29 degrés, et une limite de 10.0 pour les angles de moins de 11.5 degrés environ.

## Contexte d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a
            href="/fr/SVG/Content_type#Number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

La valeur de `stroke-miterlimit` doit être supérieure ou égale à 1.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
