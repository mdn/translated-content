---
title: translate
slug: Web/CSS/Reference/Properties/translate
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`translate`** permet de définir des opérations de décalage, individuellement et indépendamment de la propriété {{CSSxRef("transform")}}. Cela peut être utile pour la construction d'une interface utilisateur et évite d'avoir à se souvenir de l'ordre exact des fonctions de transformations à définir pour `transform`.

{{InteractiveExample("Démonstration CSS&nbsp;: translate")}}

```css interactive-example-choice
translate: none;
```

```css interactive-example-choice
translate: 40px;
```

```css interactive-example-choice
translate: 50% -40%;
```

```css interactive-example-choice
translate: 20px 4rem;
```

```css interactive-example-choice
translate: 20px 4rem 150px;
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

## Syntaxe

```css
/* Valeurs avec un mot-clé */
translate: none;

/* Valeurs uniques */
translate: 100px;
translate: 50%;

/* Deux valeurs */
translate: 100px 200px;
translate: 50% 105px;

/* Trois valeurs */
translate: 50% 105px 5rem;

/* Valeurs globales */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### Valeurs

- Une seule valeur de longueur/pourcentage ({{CSSxRef("&lt;length-percentage&gt;")}})
  - : Une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) qui définit une translation en deux dimensions. La translation est la même pour l'axe X et l'axe Y. Cela est équivalent à la fonction `translate()` (translation en deux dimensions) avec une seule valeur.
- Deux valeurs de longueur/pourcentage ({{CSSxRef("&lt;length-percentage&gt;")}})
  - : Deux longueurs ({{CSSxRef("&lt;length&gt;")}}) ou pourcentages ({{CSSxRef("&lt;percentage&gt;")}}) qui définissent respectivement les composantes horizontale et verticale d'une translation en deux dimensions. Cela est équivalent à la fonction `translate()` appelée avec ces deux arguments.
- Trois valeurs
  - : Deux valeurs de longueur/pourcentage ({{CSSxRef("&lt;length-percentage&gt;")}}) et une longueur ({{CSSxRef("&lt;length&gt;")}}) qui définissent respectivement les composantes horizontale, verticale et en profondeur de la translation en trois dimensions. Cela est équivalent à la fonction `translate3d()` appelée avec ces trois arguments.
- `none`
  - : Cette valeur indique qu'aucune translation ne devrait être appliquée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Déplacer un élément au survol

Cet exemple montre comment utiliser la propriété `translate` pour déplacer un élément selon trois axes.
La première boîte est déplacée le long de l'axe X et la deuxième boîte est déplacée le long des axes X et Y.
La troisième boîte est déplacée le long des axes X, Y et Z et donne l'impression de se rapprocher du lecteur grâce à l'ajout de {{CSSxRef('perspective')}} à l'élément parent.

#### HTML

```html
<div class="englobement">
  <div id="boite1">translate X</div>
  <div id="boite2">translate X,Y</div>
  <div id="boite3">translate X,Y,Z</div>
</div>
```

#### CSS

```css
.englobement {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.englobement > div {
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#boite1:hover {
  translate: 20px;
}

#boite2:hover {
  translate: 20px 20px;
}

#boite3:hover {
  translate: 5px 5px 30px;
}
```

#### Résultat

{{EmbedLiveSample("Déplacer un élément au survol", "100%", 175)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("scale")}}
- La propriété {{CSSxRef("rotate")}}
- La propriété {{CSSxRef("transform")}}

Note&nbsp;: skew n'est pas une valeur de transformation indépendante
