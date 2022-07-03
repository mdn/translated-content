---
title: ':is() (:matches(), :any())'
slug: Web/CSS/:is
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
  - Web
translation_of: Web/CSS/:is
---
{{CSSRef}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:is()`** prend comme argument une liste de sélecteurs, et cible tous les éléments sélectionnés par chaque sélecteur de cette liste. Cela permet d'écrire des sélecteurs expansifs de façon plus concise.

La plupart des navigateurs prennent encore en charge cette fonctionnalité via `:matches()`, ou via la pseudo-classe préfixée — `:any()` (anciennes versions de Chrome, Firefox et Safari). `:any()` fonctionne exactement comme `:matches()` et `:is()` mais nécessite l'utilisation de préfixes et ne prend pas en charge [les sélecteurs complexes](/en-US/docs/Learn/CSS/Building_blocks/Selectors).

> **Note :** `:matches()` a été renommé en `is()` d'après [l'_issue_ 3258 du CSSWG](https://github.com/w3c/csswg-drafts/issues/3258).

```css
/* Sélectionne n'importe quel paragraphe survolé
   qui se trouve au sein d'un header, main, ou
   footer */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* La notation précédente est équivalente à */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}


/* La version rétro-compatible avec :-*-any()  */
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-webkit-any(header, main, footer) p:hover{
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

### Exemple fonctionnant pour les différents navigateurs

#### HTML

```html
<header>
  <p>Voici un paragraphe dans un en-tête.</p>
</header>

<main>
  <ul>
    <li><p>Mon premier élément de</p><p>liste</p></li>
    <li><p>Mon deuxième élément de</p><p>liste</p></li>
  </ul>
</main>

<footer>
  <p>Et un paragraphe de pied de page</p>
</footer>
```

#### CSS

```css
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

#### JavaScript

```js
let matchedItems;

try {
  matchedItems = document.querySelectorAll(':is(header, main, footer) p');
} catch(e) {
  try {
    matchedItems = document.querySelectorAll(':matches(header, main, footer) p');
  } catch(e) {
    try {
      matchedItems = document.querySelectorAll(':-webkit-any(header, main, footer) p');
    } catch(e) {
      try {
        matchedItems = document.querySelectorAll(':-moz-any(header, main, footer) p');
      } catch(e) {
        console.log('Votre navigateur ne prend pas en charge :is(), :matches() ou :any()');
      }
    }
  }
}

for(let i = 0; i < matchedItems.length; i++) {
  applyHandler(matchedItems[i]);
}

function applyHandler(elem) {
  elem.addEventListener('click', function(e) {
    alert('Ce paragraphe est à l\'intérieur d\'un élément ' + e.target.parentNode.nodeName);
  });
}
```

{{EmbedLiveSample('Exemple_fonctionnant_pour_les_différents_navigateurs', '100%', '300')}}

### Simplifier les listes de sélecteurs

La pseudo-classe `:matches()` permet de simplifier largement les sélecteurs CSS. Ainsi, la règle suivante :

```css
/* les listes non ordonnées sur 3 niveaux ou plus */
/* utilisent un carré comme puce */
ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,
ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,
ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,
ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,
ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,
ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,
menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,
menu ol menu, menu ul menu, menu menu menu, menu dir menu,
menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,
dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,
dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,
dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {
  list-style-type: square;
}
```

pourra être remplacée par :

```css
/* les listes non ordonnées sur 3 niveaux ou plus */
/* utilisent un carré comme puce */
:matches(ol, ul, menu, dir) :matches(ol, ul, menu, dir) ul,
:matches(ol, ul, menu, dir) :matches(ol, ul, menu, dir) menu,
:matches(ol, ul, menu, dir) :matches(ol, ul, menu, dir) dir {
  list-style-type: square;
}
```

En revanche, le modèle d'usage suivant n'est pas recommandée (cf. [la section qui suit sur les performances](#issues_with_performance_and_specificity)) :

```css
:matches(ol, ul, menu, dir) :matches(ol, ul, menu, dir) :matches(ul, menu, dir) {
  list-style-type: square;
}
```

### Simplifier les sélecteurs de section

La pseudo-classe `:matches` est particulièrement utile lorsqu'on manipule les [sections et en-têtes](/en-US/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document") HTML5. {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}} et {{HTMLElement("nav")}} étant souvent imbriqués les uns dans les autres, les mettre en forme (sans `:matches()`) s'avèrerait plutôt compliqué.

Par exemple, pour mettre en forme les éléments {{HTMLElement("h1")}} à différents niveaux sans utiliser `:matches()`, on obtient ces règles plutôt compliquées :

```css
/* Niveau 0 */
h1 {
  font-size: 30px;
}
/* Niveau 1 */
section h1, article h1, aside h1, nav h1 {
  font-size: 25px;
}
/* Niveau 2 */
section section h1, section article h1, section aside h1, section nav h1,
article section h1, article article h1, article aside h1, article nav h1,
aside section h1, aside article h1, aside aside h1, aside nav h1,
nav section h1, nav article h1, nav aside h1, nav nav h1 {
  font-size: 20px;
}
/* Niveau 3 */
/* … j'ai abandonné */
```

Avec `:is()`, c'est plus simple :

```css
/* Niveau 0 */
h1 {
  font-size: 30px;
}
/* Niveau 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Niveau 2 */
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Niveau 3 */
:is(section, article, aside, nav)
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 15px;
}
```

### Éviter l'invalidation d'une liste de sélecteur

À la différence des listes de sélecteurs, la pseudo-classe `:is()` ne devient pas invalide lorsqu'un des sélecteurs passés en argument n'est pas pris en charge par le navigateur.

```css
:is(:valid, :incompatible) {
  ...
}
```

Le sélecteur ci-dessus sera analysé sans problème et permettra de cibler `:valid` même si les navigateurs ne prennent pas en charge le sélecteur `:incompatible`. En revanche :

```css
:valid, :incompatible {
  ...
}
```

L'exemple ci-dessus ne sera pas appliqué par les navigateurs qui ne prennent pas en charge `:incompatible`, même si `:valid` est bien pris en charge.

## Notes

### Problèmes de performances avec `any():` et la spécificité

{{Bug(561154)}} suit un problème de spécificité relatif à `:-moz-any()`. L'implémentation place `:-moz-any()` dans la catégorie des règles universelles, ce qui signifie que si on l'utilise comme sélecteur le plus à droite, ce sera plus lent que d'utiliser un sélecteur d'identifiant, de classe ou de balise comme premier sélecteur.

Ainsi :

```css
.a > :-moz-any(.b, .c)
```

sera plus lent que

```css
.a > .b, .a > .c
```

et cette dernière version sera plus rapide :

```css
:-moz-any(.a, .d) > .b, :-moz-any(.a, .d) > .c
```

`:is()` doit permettre de corriger de tels problèmes.

## Spécifications

| Spécification                                                                | État                                 | Commentaires         |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS4 Selectors", "#matches-pseudo", ":is()")}} | {{Spec2('CSS4 Selectors')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.is")}}

## Voir aussi

- {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} - se comporte comme `is()`, avec une spécificité nulle
- [Les composants web](/fr/docs/Web/Web_Components)
