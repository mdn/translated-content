---
title: scale()
slug: Web/CSS/Reference/Values/transform-function/scale
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`scale()`** définit une transformation qui redimensionne un élément dans le plan 2D. Comme la quantité de mise à l'échelle est définie par un vecteur [sx, sy], elle peut redimensionner les dimensions horizontale et verticale à des échelles différentes. Son résultat est un type de donnée {{CSSxRef("&lt;transform-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: scale()")}}

```css interactive-example-choice
transform: scale(1);
```

```css interactive-example-choice
transform: scale(0.7);
```

```css interactive-example-choice
transform: scale(1.3, 0.4);
```

```css interactive-example-choice
transform: scale(-0.5, 1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

Cette transformation de mise à l'échelle est caractérisée par un vecteur bidimensionnel. Ses coordonnées définissent l'ampleur de la mise à l'échelle dans chaque direction. Si les deux coordonnées sont égales, la mise à l'échelle est uniforme (_isotrope_) et le rapport d'aspect de l'élément est préservé (il s'agit d'une [transformation homothétique](https://fr.wikipedia.org/wiki/Homoth%C3%A9tie)).

Lorsqu'une valeur de coordonnée est en dehors de l'intervalle \[-1, 1], l'élément grandit selon cette dimension&nbsp;; lorsqu'elle est à l'intérieur, il rétrécit. Une valeur négative entraîne une [symétrie centrale](https://fr.wikipedia.org/wiki/Sym%C3%A9trie_centrale) selon cette dimension. La valeur `1` n'a aucun effet.

> [!NOTE]
> La fonction `scale()` ne met à l'échelle qu'en 2D. Pour une mise à l'échelle en 3D, utilisez plutôt [`scale3d()`](/fr/docs/Web/CSS/Reference/Values/transform-function/scale3d).

## Syntaxe

```css
scale(sx)

scale(sx, sy)
```

### Valeurs

- `sx`
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) ou {{CSSxRef("&lt;percentage&gt;")}} représentant l'abscisse (composante horizontale, x) du vecteur d'échelle.
- `sy` {{Optional_Inline}}
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) ou {{CSSxRef("&lt;percentage&gt;")}} représentant l'ordonnée (composante verticale, y) du vecteur d'échelle. Si elle n'est pas définie, sa valeur par défaut est `sx`, ce qui donne une mise à l'échelle uniforme qui préserve le {{Glossary("aspect ratio", "rapport d'aspect")}} de l'élément.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/fr/docs/Web/CSS/Reference/Values/transform-function#le_système_de_coordonnées_cartésiennes">Coordonnées cartésiennes</a> sur <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2 <sup>(angl.)</sup></a></th>
      <th scope="col"><a href="https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_homog%C3%A8nes">Coordonnées homogènes</a> sur <a href="https://fr.wikipedia.org/wiki/Plan_projectif_r%C3%A9el">ℝℙ^2</a></th>
      <th scope="col">Coordonnées cartésiennes sur <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3 <sup>(angl.)</sup></a></th>
      <th scope="col">Coordonnées homogènes sur <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3 <sup>(angl.)</sup></a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} sx & 0 \\ 0 & sy \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Les animations de mise à l'échelle ou de zoom posent des problèmes d'accessibilité, car elles déclenchent fréquemment certains types de migraines. Si vous devez inclure de telles animations sur votre site, vous devriez fournir un contrôle permettant aux utilisateur·ices de les désactiver, de préférence à l'échelle du site.

Pensez aussi à utiliser la fonctionnalité média {{CSSxRef("@media/prefers-reduced-motion", "prefers-reduced-motion")}} — servez-vous-en pour écrire une [requête média](/fr/docs/Web/CSS/Guides/Media_queries) qui désactivera les animations si l'utilisateur·ice a activé la réduction des animations dans ses préférences système.

Pour en savoir plus&nbsp;:

- [MDN Comprendre le WCAG, explications de la directive 2.3](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.3_—_crises_et_réactions_physiques_ne_concevez_pas_de_contenu_susceptible_de_provoquer_des_crises_ou_des_réactions_physiques)
- [Comprendre le critère de succès 2.3.3&nbsp;| W3C Understanding WCAG 2.1 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Exemples

### Mise à l'échelle conjointe des dimensions X et Y

#### HTML

```html
<div>Normal</div>
<div class="scaled">Mis à l'échelle</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(0.7); /* Équivaut à scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Mise à l'échelle conjointe des dimensions X et Y", "200", "200")}}

### Mise à l'échelle séparée des dimensions X et Y, et déplacement de l'origine

#### HTML

```html
<div>Normal</div>
<div class="scaled">Mis à l'échelle</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(2, 0.5); /* Équivaut à scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Mise à l'échelle séparée des dimensions X et Y, et déplacement de l'origine", "200", "200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- La propriété {{CSSxRef("scale")}}
- La propriété {{CSSxRef("zoom")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
- {{CSSxRef("transform-function/scale3d")}}
- Autres transformations individuelles&nbsp;: {{CSSxRef("translate")}} et {{CSSxRef("rotate")}}
