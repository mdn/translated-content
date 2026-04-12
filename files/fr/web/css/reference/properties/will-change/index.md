---
title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`will-change`** fournit une indication au navigateur sur la propension d'un élément à changer (afin que le navigateur puisse mettre en place les optimisations nécessaires avant que l'élément change vraiment). Ce type d'optimisation permet d'augmenter la réactivité de la page en effectuant des calculs (éventuellement coûteux) en prévision du changement.

> [!WARNING]
> `will-change` est conçu pour être utilisé en dernier recours afin d'aider à la résolution de problèmes de performance existants. Il ne doit pas être utilisé partout de façon purement préventive.

Il est parfois difficile de bien utiliser cette propriété&nbsp;:

- _Il ne faut pas appliquer `will-change` à de trop nombreux éléments._ Le navigateur essaie déjà d'optimiser de nombreuses choses. Certaines de ces optimisations sont fortement couplées avec `will-change` pour utiliser les ressources de l'ordinateur. Aussi, si `will-change` est «&nbsp;trop&nbsp;» utilisé, cela peut ralentir la page et consommer intensivement les ressources.
- _À utiliser avec parcimonie._ Normalement, le navigateur essaie d'appliquer les optimisations dès que possible afin de revenir au plus vite dans un état normal. En revanche, en utilisant `will-change` dans la feuille de style, on indique que les éléments ciblés vont bientôt changer et le navigateur conservera les optimisations en cours beaucoup plus longtemps si la propriété est maintenue. Il est donc conseillé d'activer et de désactiver `will-change` de façon pertinente grâce à du script avant et après le changement concerné.
- _Ne pas «&nbsp;sur-optimiser&nbsp;» avec `will-change`_. Si votre page fonctionne correctement, n'ajoutez pas la propriété `will-change` sur certains éléments uniquement pour gagner un peu de vitesse. `will-change` est conçu pour être utilisé en dernier ressort afin de régler les problèmes de performances existants. En utilisant `will-change` trop souvent, cela consommera plus de mémoire, complexifiera le rendu de la page pour le navigateur (qui se préparera au changement). En bref, cela réduira les performances de la page.
- _Laisser le temps à `will-change` pour qu'il fonctionne._ Cette propriété est conçue pour permettre aux auteurs d'indiquer à l'agent-utilisateur les propriétés qui vont probablement changer afin que le navigateur puisse optimiser en avance de phase. Il est donc important de laisser le temps au navigateur d'appliquer ces opérations pour que l'effet obtenu soit bénéfique. Pour cela, mieux vaut donc prévoir légèrement avant le changement que celui-ci aura lieu et alors modifier `will-change` en prévision.
- _Sachez que `will-change`_ _peut modifier l'apparence des éléments_ lorsqu'il est utilisé avec des propriétés qui créent [des contextes d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) (par exemple `will-change: opacity`), car le contexte d'empilement est créé au préalable.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* Exemple de <custom-ident> */
will-change: opacity; /* Exemple de <custom-ident> */
will-change: left, top; /* Exemple de deux <animateable-feature> */

/* Valeurs globales */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Valeurs

- `auto`
  - : Ce mot-clé ne traduit pas d'intention particulière. Dans ce cas, l'agent utilisateur applique les méthodes d'optimisations et heuristiques normales.

Un valeur de type `<animateable-feature>` peut être&nbsp;:

- `scroll-position`
  - : L'auteur·ice indique que le défilement de l'élément va prochainement être animé et/ou modifié.
- `contents`
  - : L'auteur·ice indique que le contenu de l'élément va prochainement être modifié ou animé.
- {{CSSxRef("custom-ident", "&lt;custom-ident&gt;")}}
  - : Ce type permet d'indiquer que la propriété donnée va prochainement être modifiée ou animée. Si la propriété fournie est un raccourci, on s'attendra à ce que toutes les propriétés détaillées correspondantes soient animées ou changées. Une valeur de ce type ne peut pas être `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position` ou `contents`. La spécification ne définit pas le comportement d'une valeur spécifique mais généralement, lorsqu'on utilise `transform`, cela indique que les couches qui composent la page vont évoluer. [Chrome prend deux mesures <sup>(angl.)</sup>](https://github.com/operasoftware/devopera/pull/330) selon les propriétés utilisées ici&nbsp;: il établit une nouvelle composition des couches de rendu ou crée un nouveau {{Glossary("stacking context", "contexte d'empilement")}}.

### Par une feuille de style

Il peut être approprié d'inclure `will-change` dans votre feuille de style pour une application qui effectue des changements de pages lors de la pression de touches, comme un album ou une présentation de diapositives où les pages sont grandes et complexes. Cela permettra au navigateur de préparer la transition à l'avance et de permettre des transitions rapides entre les pages dès que la touche est pressée. Mais utilisez cette propriété avec prudence directement dans les feuilles de style. Elle peut amener le navigateur à conserver l'optimisation en mémoire beaucoup plus longtemps que nécessaire.

```css
.slide {
  will-change: transform;
}
```

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Par un script

Voici un exemple montrant comment appliquer la propriété `will-change` avec un script, ce qui est probablement ce que vous devriez faire dans la plupart des cas.

```js
const el = document.getElementById("element");

// On applique will-change quand la souris/curseur
// pointeur/stylet passe au-dessus de l'élément
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // On liste les propriétés sujettes au changement
  // lors de l'animation
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("transform")}}
- Propriétés de transformation individuelles&nbsp;:
  - {{CSSxRef("translate")}}
  - {{CSSxRef("scale")}}
  - {{CSSxRef("rotate")}}

Note&nbsp;: il n'existe pas de propriété `skew` individuelle
