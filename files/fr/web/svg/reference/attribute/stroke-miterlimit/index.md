---
title: stroke-miterlimit
slug: Web/SVG/Reference/Attribute/stroke-miterlimit
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`stroke-miterlimit`** est un attribut de présentation qui définit une limite au rapport entre la longueur du coin et la valeur de {{SVGAttr("stroke-width")}} utilisée pour dessiner une jonction en pointe (_miter_). Lorsque la limite est dépassée, la jonction passe du type _miter_ (pointu) au type _bevel_ (biseauté).

> [!NOTE]
> En tant qu'attribut de présentation, `stroke-miterlimit` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke-miterlimit")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
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
<svg viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg">
  <!-- Impact de la limite par défaut -->
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

  <!-- Impact de la plus petite limite (1) -->
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

  <!-- Impact d'une limite élevée (8) -->
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

  <!-- Les lignes roses suivantes mettent en évidence la position du chemin pour chaque trait -->
  <path
    stroke="pink"
    fill="none"
    stroke-width="0.05"
    d="M1, 9 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
      M1,29 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 400)}}

Lorsque deux segments de ligne se rencontrent selon un angle aigu et que des jonctions `miter` ont été indiquées pour {{SVGAttr("stroke-linejoin")}}, il est possible que la pointe s'étende bien au-delà de l'épaisseur du trait qui dessine le chemin. Le rapport `stroke-miterlimit` sert à définir à partir de quand cette limite est dépassée&nbsp;; le cas échéant, la jonction est convertie de _miter_ en _bevel_.

Le rapport entre la longueur du coin (la distance entre la pointe extérieure et le coin intérieur de la jonction) et {{SVGAttr("stroke-width")}} est directement lié à l'angle (thêta) entre les segments dans l'espace utilisateur, selon la formule&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mstyle displaystyle="true"><mi>stroke-miterlimit</mi><mo>=</mo><mfrac><mrow><mi>miterLength</mi></mrow><mrow><mi>stroke-width</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mrow><mi>sin</mi><mrow><mo>(</mo><mfrac><mrow><mo>θ</mo></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle><annotation encoding="TeX">\text{stroke-miterlimit} = \frac{\text{miterLength}}{\text{stroke-width}} = \frac{1}{\sin\left(\frac{\theta}{2}\right)}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Ainsi, une limite de 1.414 convertit les jonctions _miter_ en _bevel_ pour un angle thêta inférieur à 90 degrés, une limite de 4.0 les convertit pour un angle inférieur à environ 29 degrés, et une limite de 10.0 les convertit pour un angle inférieur à environ 11,5 degrés.

## Contexte d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/fr/docs/Web/SVG/Guides/Content_type#nombre"
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

## Voir aussi

- La propriété CSS {{cssxref("stroke-miterlimit")}}
