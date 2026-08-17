---
title: Propriété CSS `will-change`
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

La propriété [CSS](/fr/docs/Web/CSS) **`will-change`** permet d'optimiser les animations en fournissant un indice au navigateur sur la manière dont un élément est censé changer.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
will-change: auto;
will-change: scroll-position;
will-change: contents;

/* Valeurs de type <custom-ident> */
will-change: transform;
will-change: opacity;

/* Plusieurs valeurs */
will-change: left, top;

/* Valeurs globales */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Valeurs

La valeur est soit `auto`, soit une ou plusieurs valeurs `<animatable-feature>` séparées par des virgules&nbsp;:

- `auto`
  - : Indique que le navigateur applique les heuristiques et les optimisations qu'il utilise habituellement. Il s'agit de la valeur par défaut.

- `<animatable-feature>`
  - : Représente l'une des valeurs suivantes&nbsp;:
    - `scroll-position`
      - : Définit que la position de défilement de l'élément est susceptible de changer prochainement, ce qui indique que le navigateur peut optimiser le rendu du contenu débordant.

    - `contents`
      - : Définit que le contenu de l'élément, y compris tous les éléments de son sous-arbre, est susceptible de changer prochainement, ce qui indique que le navigateur peut mettre l'élément en cache de façon moins agressive.

    - {{CSSxRef("custom-ident", "&lt;custom-ident&gt;")}}
      - : Définit le nom d'une propriété CSS, comme {{CSSxRef("ident")}}, dont la valeur est animée ou est autrement susceptible de changer prochainement. Si l'identifiant (`<ident>`) défini représente une propriété raccourcie, tous ses composants détaillés sont appliqués. La valeur ne peut pas être `will-change`, `none`, `all`, `auto`, `scroll-position` ou `contents`.

## Description

La propriété `will-change` fournit au navigateur une indication de rendu qui précise quelles propriétés sont susceptibles d'être animées ou autrement modifiées. Cela permet aux navigateurs de créer les optimisations de rendu nécessaires pour obtenir des changements plus fluides et éviter la {{Glossary("jank", "saccade")}}.

La propriété `will-change` vise à améliorer les performances du rendu. Cette propriété peut améliorer les performances des éléments qui font fréquemment l'objet de repeints et de redistributions, ou de ceux qui utilisent des propriétés telles que {{CSSxRef("box-shadow")}} et {{CSSxRef("clip-path")}} pour créer des effets visuels complexes.

Appliquer la propriété à un élément applique la valeur à l'ensemble du sous-arbre de l'élément, ce qui indique que n'importe lequel de ses descendants peut changer. Pour cette raison, appliquer une valeur autre que `auto` à une grande section, telle que {{HTMLElement("body")}}, peut en réalité nuire aux performances d'une page. Limitez plutôt l'utilisation de cette propriété aux éléments profondément imbriqués, qui contiennent une aussi petite partie du document que possible.

> [!WARNING]
> `will-change` est conçu pour être utilisé en dernier recours afin d'aider à la résolution de problèmes de performance existants. Il ne doit pas être utilisé partout de façon purement préventive.

Il est parfois difficile de bien utiliser cette propriété&nbsp;:

- _Il ne faut pas appliquer `will-change` à de trop nombreux éléments._ Le navigateur essaie déjà d'optimiser de nombreuses choses. Certaines de ces optimisations sont fortement couplées avec `will-change` pour utiliser les ressources de l'ordinateur. Aussi, si `will-change` est «&nbsp;trop&nbsp;» utilisé, cela peut ralentir la page et consommer intensivement les ressources.
- _À utiliser avec parcimonie._ Normalement, le navigateur essaie d'appliquer les optimisations dès que possible afin de revenir au plus vite dans un état normal. En revanche, en utilisant `will-change` dans la feuille de style, on indique que les éléments ciblés vont bientôt changer et le navigateur conserve les optimisations en cours beaucoup plus longtemps si la propriété est maintenue. Il est donc conseillé d'activer et de désactiver `will-change` de façon pertinente grâce à du script avant et après le changement concerné.
- _Ne pas «&nbsp;sur-optimiser&nbsp;» avec `will-change`_. Si votre page fonctionne correctement, n'ajoutez pas la propriété `will-change` sur certains éléments uniquement pour gagner un peu de vitesse. `will-change` est conçu pour être utilisé en dernier ressort afin de régler les problèmes de performances existants. En utilisant `will-change` trop souvent, cela consomme plus de mémoire, complexifie le rendu de la page pour le navigateur (qui se prépare au changement). En bref, cela réduit les performances de la page.
- _Laisser le temps à `will-change` pour qu'il fonctionne._ Cette propriété est conçue pour permettre aux auteur·ice·s d'indiquer à l'agent utilisateur les propriétés qui vont probablement changer afin que le navigateur puisse optimiser en avance de phase. Il est donc important de laisser le temps au navigateur d'appliquer ces opérations pour que l'effet obtenu soit bénéfique. Pour cela, mieux vaut donc prévoir légèrement avant le changement que celui-ci a lieu et alors modifier `will-change` en prévision.
- _Sachez que `will-change`_ _peut modifier l'apparence des éléments_ lorsqu'il est utilisé avec des propriétés qui créent [des contextes d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) (par exemple `will-change: opacity`), car le contexte d'empilement est créé au préalable.

### Animations

Si vous appliquez `will-change` pour améliorer les animations, ajoutez la propriété avant le début de l'animation, et non dans les définitions d'animation {{CSSxRef("@keyframes")}}. Les propriétés animées sont déjà incluses dans `will-change`, il n'est donc pas nécessaire de les y ajouter.

### Par une feuille de style

Il peut être approprié d'inclure `will-change` dans votre feuille de style pour une application qui effectue des changements de pages lors de la pression de touches, comme un album ou une présentation de diapositives où les pages sont grandes et complexes. Cela permet au navigateur de préparer la transition à l'avance et de permettre des transitions rapides entre les pages dès que la touche est pressée. Mais utilisez cette propriété avec prudence directement dans les feuilles de style. Elle peut amener le navigateur à conserver l'optimisation en mémoire beaucoup plus longtemps que nécessaire.

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

### Exemple simple

Cet exemple démontre l'application de base de la propriété CSS `will-change`.

#### CSS

Nous utilisons CSS pour appliquer la propriété `will-change` à `#element`, fournissant un indice au navigateur que les valeurs des propriétés {{CSSxRef("transform")}} et {{CSSxRef("opacity")}} sont animées ou autrement modifiées dans un avenir proche.

```css
#element {
  will-change: transform, opacity;
}
```

### Par un script

Cet exemple montre comment appliquer la propriété `will-change` lorsque cela est nécessaire et supprimer les optimisations une fois terminé en utilisant JavaScript, ce qui est généralement la manière dont `will-change` doit être appliquée.

#### JavaScript

Nous utilisons JavaScript pour ajouter la propriété `will-change` à `#element` lorsque l'élément est survolé en utilisant l'évènement {{DOMxRef("Element/mouseenter_event", "mouseenter")}}. Définir `will-change` sur `transform, opacity` indique au navigateur d'optimiser les changements des propriétés {{CSSxRef("transform")}} et {{CSSxRef("opacity")}}. Lorsque l'évènement {{DOMxRef("Element/animationend_event", "animationend")}} se produit, notre script définit la valeur sur `auto`.

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
- Propriétés de transformation individuelles&nbsp;:{{CSSxRef("translate")}}, {{CSSxRef("scale")}}, {{CSSxRef("rotate")}}
- La propriété {{CSSxRef("animation")}}
- Le module [des éléments qui vont changer en CSS](/fr/docs/Web/CSS/Guides/Will_change)
