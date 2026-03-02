---
title: translateZ()
slug: Web/CSS/Reference/Values/transform-function/translateZ
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`translateZ()`** repositionne un élément le long de l'axe z dans l'espace 3D, c'est-à-dire plus près ou plus loin de l'utilisateur·ice. Son résultat est de type {{CSSxRef("&lt;transform-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: translateZ()")}}

```css interactive-example-choice
transform: translateZ(0);
```

```css interactive-example-choice
transform: translateZ(42px);
```

```css interactive-example-choice
transform: translateZ(-9.7rem);
```

```css interactive-example-choice
transform: translateZ(-3ch);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

Cette transformation est définie par une {{CSSxRef("&lt;length&gt;")}} qui précise de combien l'élément ou les éléments se déplacent vers l'intérieur ou l'extérieur.

Dans les exemples interactifs ci-dessus, [`perspective: 550px;`](/fr/docs/Web/CSS/Reference/Properties/perspective) (pour créer un espace 3D) et [`transform-style: preserve-3d;`](/fr/docs/Web/CSS/Reference/Properties/transform-style) (pour que les enfants, les 6 faces du cube, soient aussi positionnés dans l'espace 3D) sont appliqués au cube.

> [!NOTE]
> `translateZ(tz)` est équivalent à
> `translate3d(0, 0, tz)`.

## Syntaxe

```css
translateZ(tz)
```

### Valeurs

- `tz`
  - : Une longueur ({{CSSxRef("&lt;length&gt;")}}) représentant la composante z du vecteur de déplacement [0, 0, tz]. Dans le [système de coordonnées cartésiennes](/fr/docs/Web/CSS/Reference/Values/transform-function#le_système_de_coordonnées_cartésiennes), cela représente le déplacement le long de l'axe z. Une valeur positive rapproche l'élément de l'utilisateur·ice, une valeur négative l'éloigne.

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
      <td colspan="2">
        Cette transformation s'applique à l'espace 3D et ne peut pas être représentée sur le plan.
      </td>
      <td>
        Un déplacement n'est pas une transformation linéaire dans ℝ^3 et ne peut pas être représenté par une matrice de coordonnées cartésiennes.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & t \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, deux boîtes sont créées. L'une est positionnée normalement sur la page, sans aucune translation. La seconde est modifiée en appliquant une perspective pour créer un espace 3D, puis déplacée vers l'utilisateur·ice.

### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

Ce qui importe vraiment ici est la classe «&nbsp;moved&nbsp;»&nbsp;; voyons ce qu'elle fait. D'abord, la fonction {{CSSxRef("transform-function/perspective", "perspective()")}} positionne l'utilisateur·ice par rapport au plan qui se trouve où z=0 (en essence, la surface de l'écran). Une valeur de `500px` signifie que l'utilisateur·ice est à 500 pixels «&nbsp;devant&nbsp;» l'image située à z=0.

Ensuite, la fonction `translateZ()` déplace l'élément de 200 pixels «&nbsp;vers l'extérieur&nbsp;» de l'écran, vers l'utilisateur·ice.
Cela a pour effet de faire apparaître l'élément plus grand lorsqu'il est vu sur un affichage 2D, ou plus proche lorsqu'il est vu avec un casque VR
ou un autre dispositif d'affichage 3D.

Notez que si la valeur de `perspective()` est inférieure à celle de `translateZ()`, comme `transform: perspective(200px) translateZ(300px);` l'élément transformé ne sera pas visible car il est plus éloigné que la fenêtre de l'utilisateur·ice. Plus la différence entre les valeurs de perspective et de translateZ est faible, plus l'utilisateur·ice est proche de l'élément et plus l'élément déplacé semblera grand.

> [!NOTE]
> Comme la composition des transformations n'est pas commutative, l'ordre dans lequel vous écrivez les différentes fonctions est important. En général, il est préférable de placer `perspective()` avant `translateZ()`.

### Résultat

{{EmbedLiveSample("Exemples", 250, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- Le type de donnée {{CSSxRef("&lt;transform-function&gt;")}}
- La propriété {{CSSxRef("translate")}}
