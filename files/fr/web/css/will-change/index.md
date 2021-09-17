---
title: will-change
slug: Web/CSS/will-change
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/will-change
---
{{CSSRef}}

La propriété **`will-change`** fournit une indication au navigateur sur la propension d'un élément à changer (afin que le navigateur puisse mettre en place les optimisations nécessaires avant que l'élément change vraiment). Ce type d'optimisation permet d'augmenter la réactivité de la page en effectuant des calculs (éventuellement coûteux) en prévision du changement.

> **Attention :** `will-change` est conçu pour être utilisé en dernier recours afin d'aider à la résolutions de problèmes de performance existants. Il ne doit pas être utilisé partout de façon purement préventive.

```css
/* Avec un mot-clé */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform;        /* Exemple de <custom-ident> */
will-change: opacity;          /* Exemple de <custom-ident> */
will-change: left, top;        /* Exemple de deux <animateable-feature> */

/* Valeurs globales */
will-change: inherit;
will-change: initial;
will-change: unset;
```

Il est parfois difficile de bien utiliser cette propriété :

- _Il ne faut pas appliquer `will-change` à de trop nombreux éléments._ Le navigateur essaie déjà d'optimiser de nombreuses choses. Certaines de ces optimisations sont fortement couplées avec `will-change` pour utiliser les ressources de l'ordinateur. Aussi, si `will-change` est « trop » utilisé, cela peut ralentir la page et consommer intensivement les ressources.
- _À utiliser avec parcimonie._ Normalement, le navigateur essaie d'appliquer les optimisations dès que possible afin de revenir au plus vite dans un état normal. En revanche, en utilisant `will-change` dans la feuille de style, on indique que les éléments ciblés vont bientôt changer et le navigateur conservera les optimisations en cours beaucoup plus longtemps si la propriété est maintenue. Il est donc conseillé d'activer et de désactiver `will-change` de façon pertinente grâce à du script avant et après le changement concerné.
- _Ne pas « sur-optimiser » avec `will-change`_. Si votre page fonctionne correctement, n'ajoutez pas la propriété `will-change` sur certains éléments uniquement pour gagner un peu de vitesse. `will-change` est conçu pour être utilisé en dernier ressort afin de régler les problèmes de performances existants. En utilisant `will-change` trop souvent, cela consommera plus de mémoire, complexifiera le rendu de la page pour le navigateur (qui se préparera au changement). En bref, cela réduira les performances de la page.
- _Laisser le temps à `will-change` pour qu'il fonctionne._ Cette propriété est conçue pour permettre aux auteurs d'indiquer à l'agent-utilisateur les propriétés qui vont probablement changer afin que le navigateur puisse optimiser en avance de phase. Il est donc important de laisser le temps au navigateur d'appliquer ces opérations pour que l'effet obtenu soit bénéfique. Pour cela, mieux vaut donc prévoir légèrement avant le changement que celui-ci aura lieu et alors modifier `will-change` en prévision.
- _Sachez que `will-change`_ _peut modifier l'apparence des éléments_ lorsqu'il est utilisé avec des propriétés qui créent [des contextes d'empilement](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) (par exemple `will-change: opacity`) car le contexte d'empilement est créé au préalable.

## Syntaxe

### Valeurs

- `auto`
  - : Ce mot-clé ne traduit pas d'intention particulière. Dans ce cas, l'agent utilisateur applique les méthodes d'optimisations et heuristiques normales.

Un valeur de type `<animateable-feature>` peut être :

- `scroll-position`
  - : L'auteur indique que le défilement de l'élément va prochainement être animé et/ou modifié.
- `contents`
  - : L'auteur indique que le contenu de l'élément va prochainement être modifié ou animé.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Ce type permet d'indiquer que la propriété donnée va prochainement être modifiée ou animée. Si la propriété fournie est un raccourci, on s'attendra à ce que toutes les propriétés détaillées correspondantes soient animées ou changées. Une valeur de ce type ne peut pas être `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position`, ou `contents`. La spécification ne définit pas le comportement d'une valeur spécifique mais généralement, lorsqu'on utilise `transform`, cela indique que les couches qui composent la page vont évoluer. [Chrome prend deux mesures](https://github.com/operasoftware/devopera/pull/330) selon les propriétés utilisées ici : il établit une nouvelle composition des couches de rendu ou crée un nouveau contexte d'empilement.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.sidebar {
  will-change: transform;
}
```

Dans l'exemple précédent, on applique la propriété `will-change` à même la feuille de style. Dans ce cas, le navigateur conservera l'optimisation en mémoire beaucoup plus longtemps que nécessaire. Nous avons vu précédemment que cela devait être évité et voici donc un deuxième exemple qui illustre comment appliquer la propriété `will-change` grâce à JavaScript (et qui correspond donc à la méthode qui devrait être utilisée la plupart du temps) :

```js
var el = document.getElementById('element');

// On applique will-change quand la souris/curseur
// pointeur/stylet passe au-dessus de l'élément
el.addEventListener('mouseenter', hintBrowser);
el.addEventListener('animationEnd', removeHint);

function hintBrowser() {
  // On liste les propriétés sujettes au changement
  // lors de l'animation
  this.style.willChange = 'transform, opacity';
}

function removeHint() {
  this.style.willChange = 'auto';
}
```

Cela peut toutefois être pertinent d'inclure `will-change` dans la feuille de style d'une application qui gère des changements de pages ou des diapositives parmi lesquelles on navigue lorsque les pages sont complexes. Cela permettra au navigateur de préparer la transition en avance de phase et de mieux réagir au changement de page (ou de diapositive) lorsque le bouton associé sera utilisé.

```css
.slide {
  will-change: transform;
}
```

## Spécifications

| Spécification                                                                        | État                                 | Commentaires         |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('CSS Will Change', '#will-change', 'will-change')}} | {{Spec2('CSS Will Change')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.will-change")}}
