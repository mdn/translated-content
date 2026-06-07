---
title: Fonction CSS `inset()`
short-title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`inset()`** définit un rectangle aux distances d'encart définies depuis chaque côté de la boîte de référence. C'est une fonction de forme de base utilisée pour définir l'un des [types de données](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: inset()")}}

```css interactive-example-choice
clip-path: inset(30px);
```

```css interactive-example-choice
clip-path: inset(1rem 2rem 3rem 4rem);
```

```css interactive-example-choice
clip-path: inset(20% 30% round 20px);
```

```css interactive-example-choice
clip-path: inset(4rem 20% round 1rem 2rem 3rem 4rem);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntaxe

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Valeurs

- `<length-percentage>{1,4}`
  - : Lorsque les quatre arguments sont fournis, ils représentent les décalages supérieur, droit, inférieur et gauche depuis la boîte de référence vers l'intérieur, définissant les positions des bords du rectangle d'encart. Ces arguments suivent la syntaxe de l'abréviation de marge, ce qui permet de définir tous
    les quatre encarts avec une, deux ou quatre valeurs.

    Si une paire d'encarts pour une dimension dépasse 100% de cette dimension, les deux valeurs sont réduites proportionnellement afin que leur somme soit égale à 100%. Par exemple, la valeur `inset(90% 10% 60% 10%)` a un encart supérieur de `90%` et un encart inférieur de `60%`. Ces valeurs sont réduites proportionnellement à `inset(60% 10% 40% 10%)`. Les formes de ce type, qui n'enferment aucune zone et n'ont pas de {{CSSxRef("shape-margin")}}, n'affectent pas l'enroulement.

- `<border-radius>`
  - : L'argument optionnel [`<border-radius>`](/fr/docs/Web/CSS/Reference/Properties/border-radius) permet de définir des coins arrondis pour le rectangle d'encart en utilisant la syntaxe abrégée de `border-radius`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple de `inset()`

Dans l'exemple ci-dessous, nous avons une forme `inset()` utilisée pour déplacer le contenu au-dessus de l'élément flottant. Modifiez les valeurs des encarts pour voir comment la forme change.

```html
<div class="box">
  <div class="shape"></div>
  <p>
    Une nuit de novembre de l'année 1782, d'après la légende, deux frères
    étaient assis près de leur feu d'hiver dans la petite ville française
    d'Annonay, observant les volutes de fumée grisâtres monter dans la large
    cheminée. Ils s'appelaient Stephen et Joseph Montgolfier, étaient papetiers
    de profession et se distinguaient par leur curiosité scientifique et leur
    goût pour les nouvelles découvertes. Avant cette nuit—qui devait s'avérer
    mémorable—des centaines de millions de personnes avaient vu monter la fumée
    de leurs feux sans y prêter plus d'attention.
  </p>
</div>
```

```css
.box {
  width: 400px;
  margin: 0 auto;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  clip-path: inset(45px 50px 15px 0 round 50px);
  shape-outside: inset(40px 40px 10px 0 round 50px);
  background-color: coral;
  border-radius: 20px;
  margin: 0;
  padding: 20px;
}
```

{{EmbedLiveSample("Exemple simple de `inset()`", "100%", 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;: {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- Le module [des formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
