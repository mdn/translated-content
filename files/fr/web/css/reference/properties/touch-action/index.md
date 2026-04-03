---
title: touch-action
slug: Web/CSS/Reference/Properties/touch-action
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`touch-action`** définit comment la zone d'un élément peut être manipulée par un·e utilisateur·ice d'écran tactile (par exemple, en utilisant les fonctionnalités de zoom intégrées au navigateur).

Par défaut, les gestes de panoramique (défilement) et de pincement sont gérés exclusivement par le navigateur. Une application utilisant {{DOMxRef("Pointer_events", "les évènements de pointeur", "", 1)}}, recevra un évènement {{DOMxRef("Element/pointercancel_event", "pointercancel")}} lorsque le navigateur commencera à gérer un geste tactile. En définissant explicitement quels gestes doivent être gérés par le navigateur, une application peut fournir son propre comportement dans les écouteurs {{DOMxRef("Element/pointermove_event", "pointermove")}} et {{DOMxRef("Element/pointerup_event", "pointerup")}} pour les gestes restants. Les applications utilisant {{DOMxRef("Touch_events", "les évènements tactiles", "", 1)}} désactivent la gestion des gestes par le navigateur en appelant {{DOMxRef("Event.preventDefault","preventDefault()")}}, mais elles doivent également utiliser `touch-action` pour s'assurer que le navigateur connaît l'intention de l'application avant que les écouteurs d'évènements ne soient invoqués.

Lorsque qu'un geste est initié, le navigateur croise les valeurs de `touch-action` de l'élément touché et de ses ancêtres, jusqu'à celui qui implémente le geste (en d'autres termes, le premier élément contenant un défilement). Cela signifie qu'en pratique, `touch-action` est généralement appliqué uniquement aux éléments de niveau supérieur qui ont un comportement personnalisé, sans avoir besoin de définir `touch-action` explicitement sur les descendants de cet élément.

> [!NOTE]
> Après le début d'un geste, les modifications apportées à `touch-action` n'auront aucun impact sur le comportement du geste en cours.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
touch-action: auto;
touch-action: none;
touch-action: pan-x;
touch-action: pan-left;
touch-action: pan-right;
touch-action: pan-y;
touch-action: pan-up;
touch-action: pan-down;
touch-action: pinch-zoom;
touch-action: manipulation;

/* Valeurs globales */
touch-action: inherit;
touch-action: initial;
touch-action: revert;
touch-action: revert-layer;
touch-action: unset;
```

La propriété `touch-action` peut être définie grâce à&nbsp;:

- l'un des mots-clés parmi [`auto`](#auto), [`none`](#none), [`manipulation`](#manipulation) _ou_
- un mot-clé parmi [`pan-x`](#pan-x), [`pan-left`](#pan-keywords), [`pan-right`](#pan-keywords), et/ou un mot-clé parmi [`pan-y`](#pan-y), [`pan-up`](#pan-keywords), [`pan-down`](#pan-keywords) et éventuellement le mot-clé [`pinch-zoom`](#).

### Valeurs

- `auto`
  - : Activer la gestion par le navigateur de tous les gestes de panoramique et de zoom.
- `none`
  - : Désactiver la gestion par le navigateur de tous les gestes de panoramique et de zoom.
- `pan-x`
  - : Activer les gestes de panoramique horizontal à un doigt. Peut être combiné avec **`pan-y`**, **`pan-up`**, **`pan-down`** et/ou **`pinch-zoom`**.
- `pan-y`
  - : Activer les gestes de panoramique vertical à un doigt. Peut être combiné avec **`pan-x`**, **`pan-left`**, **`pan-right`** et/ou **`pinch-zoom`**.
- `manipulation`
  - : Activer les gestes de panoramique et de zoom, mais désactiver les gestes non standard supplémentaires tels que le double-tap pour zoomer. La désactivation du double-tap pour zoomer supprime la nécessité pour les navigateurs de retarder la génération des évènements **de clic** lorsque l'utilisateur·ice tape sur l'écran. Il s'agit d'un alias pour «&nbsp;**`pan-x pan-y pinch-zoom`**&nbsp;» (qui, pour des raisons de compatibilité, est lui-même encore valide).
- `pan-left`, `pan-right`, `pan-up`, `pan-down`
  - : Activer les gestes à un doigt qui commencent par un défilement dans la ou les direction(s) donnée(s). Une fois le défilement commencé, la direction peut encore être inversée. Notez que défiler «&nbsp;vers le haut&nbsp;» (**pan-up**) signifie que l'utilisateur·ice fait glisser son doigt vers le bas sur la surface de l'écran, et de même **pan-left** signifie que l'utilisateur·ice fait glisser son doigt vers la droite. Plusieurs directions peuvent être combinées sauf lorsqu'il existe une représentation plus simple (par exemple, «&nbsp;**`pan-left pan-right`**&nbsp;» est invalide puisque «&nbsp;**`pan-x`**&nbsp;» est plus simple, mais «&nbsp;**`pan-left pan-down`**&nbsp;» est valide).
- `pinch-zoom`
  - : Activer le panoramique et le zoom à plusieurs doigts sur la page. Cela peut être combiné avec n'importe laquelle des valeurs **`pan-`**.

## Accessibilité

Une déclaration `touch action: none;` empêchera le navigateur de zoomer. Cela peut empêcher les personnes à faible vision de lire et de comprendre le contenu de la page.

- [Comprendre le WCAG sur le MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.4 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver tous les gestes

L'utilisation la plus courante consiste à désactiver tous les gestes sur un élément (et ses descendants non défilables) qui fournit son propre comportement de glissement et de zoom — comme une carte ou une surface de jeu.

#### HTML

```html
<div id="map"></div>
```

#### CSS

```css
#map {
  height: 150vh;
  width: 70vw;
  background: linear-gradient(blue, green);
  touch-action: none;
}
```

#### Résultat

{{EmbedLiveSample("Désactiver tous les gestes")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("pointer-events")}}
- [Les évènements de pointage](/fr/docs/Web/API/Pointer_events)
- Un billet du blog WebKit : [une gestion plus responsive du toucher sur iOS <sup>(angl.)</sup>](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Rendre le défilement tactile rapide, par défaut <sup>(angl.)</sup>](https://developer.chrome.com/blog/scrolling-intervention/)
- [L'accroche au défilement](/fr/docs/Web/CSS/Guides/Scroll_snap)
