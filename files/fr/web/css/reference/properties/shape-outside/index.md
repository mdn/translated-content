---
title: shape-outside
slug: Web/CSS/Reference/Properties/shape-outside
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

La propriété [CSS](/fr/docs/Web/CSS) **`shape-outside`** définit une forme — qui peut ne pas être rectangulaire — autour de laquelle le contenu en ligne adjacent doit «&nbsp;s'écouler&nbsp;». Par défaut, le contenu en ligne s'écoule autour de la boîte de marge de l'élément&nbsp;; `shape-outside` permet de personnaliser cet écoulement, rendant possible l'enveloppement du texte autour d'objets complexes plutôt que de simples rectangles.

{{InteractiveExample("Démonstration CSS&nbsp;: shape-outside")}}

```css interactive-example-choice
shape-outside: circle(50%);
```

```css interactive-example-choice
shape-outside: ellipse(130px 140px at 20% 20%);
```

```css interactive-example-choice
shape-outside: url("/shared-assets/images/examples/round-balloon.png");
```

```css interactive-example-choice
shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      class="transition-all"
      id="example-element"
      src="/shared-assets/images/examples/round-balloon.png"
      width="150" />
    Nous avions convenu, mon compagnon et moi, que je devrais passer le voir
    chez lui, après le dîner, pas plus tard que onze heures. Ce jeune Français
    athlétique appartient à un petit groupe de sportifs parisiens, qui se sont
    adonnés au «&nbsp;ballon&nbsp;» comme passe-temps. Après avoir épuisé toutes
    les sensations que l'on peut trouver dans les sports ordinaires, même celles
    de «&nbsp;l'automobile&nbsp;» à toute vitesse, les membres de «&nbsp;l'Aéro
    Club&nbsp;» recherchent maintenant dans les airs, où ils se livrent à toutes
    sortes d'exploits audacieux, l'excitation nerveuse qu'ils ont cessé de
    trouver sur terre.
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  margin: 20px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Valeurs utilisant une fonction */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);

/* Boîte de forme avec une forme de base */
shape-outside: circle() border-box;
shape-outside: margin-box ellipse();

/* Valeurs de type <url> */
shape-outside: url("image.png");

/* Valeurs de type <gradient> */
shape-outside: linear-gradient(45deg, white 150px, red 150px);

/* Valeurs globales */
shape-outside: inherit;
shape-outside: initial;
shape-outside: revert;
shape-outside: revert-layer;
shape-outside: unset;
```

La propriété `shape-outside` est définie en utilisant les valeurs de la liste ci-dessous, qui définissent la _zone de flottement_ pour les _éléments flottants_. La zone de flottement détermine la forme autour de laquelle le contenu en ligne (éléments flottants) s'enroule.

### Valeurs

- `none`
  - : La zone de flottement n'est pas affectée. Le contenu en ligne s'enroule autour de la boîte de marge de l'élément, comme d'habitude.
- `<shape-box>`
  - : La zone de flottement est calculée en fonction de la forme des bords de l'élément flottant (comme défini par le [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)). Cela peut être `margin-box`, `border-box`, `padding-box` ou `content-box`. La forme inclut toute courbure créée par la propriété {{CSSxRef("border-radius")}} (comportement similaire à {{CSSxRef("background-clip")}}).
    - `margin-box`
      - : Définit la forme entourée par le bord extérieur de la marge. Les rayons des coins de cette forme sont déterminés par les valeurs correspondantes de {{CSSxRef("border-radius")}} et {{CSSxRef("margin")}}. Si le ratio `border-radius / margin` est `1` ou plus, alors le rayon du coin de la boîte de marge est `border-radius + margin`. Si le ratio est inférieur à `1`, alors le rayon du coin de la boîte de marge est `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Définit la forme entourée par le bord extérieur de la bordure. La forme suit les règles normales de courbure des coins pour l'extérieur de la bordure.
    - `padding-box`
      - : Définit la forme entourée par le bord extérieur du remplissage. La forme suit les règles normales de courbure des coins pour l'intérieur de la bordure.
    - `content-box`
      - : Définit la forme entourée par le bord extérieur du contenu. Chaque rayon de coin de cette boîte est le plus grand de `0` ou `border-radius - border-width - padding`.

- {{CSSxRef("basic-shape")}}
  - : La zone de flottement est calculée en fonction de la forme créée par une fonction {{CSSxRef("basic-shape/inset","inset()")}}, {{CSSxRef("basic-shape/circle","circle()")}}, {{CSSxRef("basic-shape/ellipse","ellipse()")}}, ou {{CSSxRef("basic-shape/polygon","polygon()")}}&nbsp;; les autres fonctions `<basic-shape>` sont invalides. Si une `<shape-box>` est également fournie, elle définit la boîte de référence pour la fonction `<basic-shape>`. Sinon, la boîte de référence par défaut est `margin-box`.
- {{CSSxRef("image")}}
  - : La zone de flottement est extraite et calculée en fonction du canal alpha de l'{{CSSxRef("image")}} défini, comme défini par {{CSSxRef("shape-image-threshold")}}.

> [!NOTE]
> Si l'image est invalide, l'effet est comme si le mot-clé `none` avait été défini. De plus, l'image doit être servie avec des en-têtes {{Glossary("CORS")}} permettant son utilisation.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Texte en entonnoir

#### HTML

```html
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    Parfois, le contenu textuel d'une page web semble canaliser votre attention
    vers un point précis de la page pour vous inciter à suivre un lien
    particulier. Parfois, vous ne le remarquez pas.
  </p>
</div>
```

#### CSS

```css
.main {
  width: 530px;
}

.left,
.right {
  background-color: lightgray;
  height: 12ex;
  width: 40%;
}

.left {
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Texte en entonnoir", "100%", 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Un aperçu des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
- La propriété {{CSSxRef("shape-margin")}}
- La propriété {{CSSxRef("shape-image-threshold")}}
