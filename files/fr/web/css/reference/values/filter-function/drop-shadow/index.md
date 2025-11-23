---
title: drop-shadow()
slug: Web/CSS/Reference/Values/filter-function/drop-shadow
original_slug: Web/CSS/filter-function/drop-shadow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`drop-shadow()`** permet d'appliquer une ombre portée sur une image. Le résultat de cette fonction est une valeur {{CSSxRef("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: drop-shadow()")}}

```css interactive-example-choice
filter: drop-shadow(30px 10px 4px #4444dd);
```

```css interactive-example-choice
filter: drop-shadow(0 -6mm 4mm rgb(160, 0, 210));
```

```css interactive-example-choice
filter: drop-shadow(0 0 0.75rem crimson);
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

En pratique, une ombre portée correspond à une version floutée et décalée du masque alpha de l'image, dessiné avec une couleur donnée et fusionné sous l'image.

> [!NOTE]
> Cette fonction s'apparente à la propriété {{CSSxRef("box-shadow")}}. La propriété `box-shadow` permet de créer une ombre rectangulaire sous _la boîte entière_ d'un élément. En revanche, la fonction `drop-shadow()` permet de créer un ombre qui épouse la forme (le canal alpha) de _l'image même_.

## Syntaxe

```css
/* Deux valeurs de longueur */
/* drop-shadow( <length> <length> ) */
drop-shadow(5px 5px)

/* Trois valeurs de longueur */
/* drop-shadow( <length> <length> <length> ) */
drop-shadow(5px 5px 15px)

/* Deux valeurs de longueur et une couleur */
/* drop-shadow( <length> <length> <color> ) */
drop-shadow(5px 5px red)

/* Trois valeurs de longueur et une couleur */
/* drop-shadow( <length> <length> <length> <color> ) */
drop-shadow(5px 5px 15px red)

/* L'ordre des valeurs couleur et longueur peut être inversé */
/* drop-shadow( <color> <length> <length> <length> ) */
drop-shadow(#ee2233 0.5rem 0.5rem 1rem)

/* Empiler plusieurs ombres en passant plusieurs drop-shadow en tant que
   filtre */
drop-shadow(10px 10px red) drop-shadow(-5px -5px yellow)
```

La fonction `drop-shadow()` accepte un paramètre de type `<shadow>` (tel que défini dans la documentation de {{CSSxRef("box-shadow")}}), mais pour lequel le mot-clé `inset` et le paramètre `spread` ne sont pas acceptés.

### Paramètres

- `<color>` {{Optional_Inline}}
  - : Définit la couleur de l'ombre. Si elle n'est pas précisée, la valeur de la propriété {{CSSxRef("color")}} définie sur l'élément parent est utilisée.

- `<length>`
  - : Définit la longueur de décalage de l'ombre. Ce paramètre accepte deux ou trois valeurs. Si deux valeurs sont précisées, elles correspondent à `<offset-x>` (décalage horizontal) et `<offset-y>` (décalage vertical). Une valeur négative pour `<offset-x>` place l'ombre à gauche de l'élément. Une valeur négative pour `<offset-y>` place l'ombre au-dessus de l'élément. Si une valeur n'est pas précisée, `0` est utilisé par défaut. Si une troisième valeur est précisée, elle correspond à `<standard-deviation>`, c'est-à-dire l'écart type utilisé pour la fonction de [flou gaussien](https://fr.wikipedia.org/wiki/Flou_gaussien). Plus la valeur de `<standard-deviation>` est grande, plus l'ombre sera grande et floue. Les valeurs négatives pour `<standard-deviation>` ne sont pas autorisées.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une ombre portée

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
<div>drop-shadow(-16px -16px red)</div>
<div>
  drop-shadow(1px 1px red) drop-shadow(1px -1px red) drop-shadow(-1px 1px red)
  drop-shadow(-1px -1px red)
</div>
```

```css
div {
  display: inline-block;
  margin: 0 0.5rem 2rem 1rem;
  padding: 0.5rem;
  height: 100px;
  width: 190px;
  vertical-align: top;
  background-color: #222222;

  color: lime;
}

div:nth-child(1) {
  filter: drop-shadow(16px 16px);
}

div:nth-child(2) {
  filter: drop-shadow(16px 16px red);
}

div:nth-child(3) {
  filter: drop-shadow(red 1rem 1rem 10px);
}

div:nth-child(4) {
  filter: drop-shadow(-16px -16px red);
}

div:nth-child(5) {
  filter: drop-shadow(1px 1px red) drop-shadow(1px -1px red)
    drop-shadow(-1px 1px red) drop-shadow(-1px -1px red);
}
```

{{EmbedLiveSample("Définir une ombre portée", "100%", "300px")}}

En l'absence de valeur `<color>` dans la fonction `drop-shadow()` du premier bloc, l'ombre utilise la valeur de la propriété `color` de l'élément (`lime`). Les deuxième et troisième ombres illustrent que l'ordre des valeurs de longueur et de couleur peut être inversé. La troisième ombre montre l'effet de flou lorsqu'une troisième valeur `<length>` est précisée. La quatrième ombre utilise des décalages négatifs, ce qui déplace l'ombre vers la gauche et le haut. Le cinquième exemple montre comment appliquer plusieurs ombres portées à un même élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les fonctions {{CSSxRef("&lt;filter-function&gt;")}}&nbsp;:
  - {{CSSxRef("filter-function/blur", "blur()")}}
  - {{CSSxRef("filter-function/brightness", "brightness()")}}
  - {{CSSxRef("filter-function/contrast", "contrast()")}}
  - {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - {{CSSxRef("filter-function/invert", "invert()")}}
  - {{CSSxRef("filter-function/opacity", "opacity()")}}
  - {{CSSxRef("filter-function/saturate", "saturate()")}}
  - {{CSSxRef("filter-function/sepia", "sepia()")}}
- La propriété {{CSSxRef("filter")}}
- La propriété {{CSSxRef("backdrop-filter")}}
- La propriété {{CSSxRef("box-shadow")}}
- La propriété {{CSSxRef("text-shadow")}}
- [Introduction aux ombres portées sur le texte](/fr/docs/Web/CSS/CSS_text_decoration/Text_shadows)
- Le module des [effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
