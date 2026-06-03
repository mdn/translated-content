---
title: Propriété CSS `pointer-events`
short-title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`pointer-events`** permet de contrôler les circonstances (le cas échéant) dans lesquelles un élément graphique peut être [une cible](/fr/docs/Web/API/Event/target), c'est-à-dire recevoir des évènements de la souris, du pointeur ou du doigt.

{{InteractiveExample("Démonstration CSS&nbsp;: pointer-events")}}

```css interactive-example-choice
pointer-events: auto;
```

```css interactive-example-choice
pointer-events: none;
```

```css interactive-example-choice
pointer-events: stroke; /* SVG uniquement */
```

```css interactive-example-choice
pointer-events: fill; /* SVG uniquement */
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element">
    <p>
      <a href="#">exemple de lien</a>
    </p>
    <p>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <a xlink:href="#">
          <circle
            cx="50"
            cy="50"
            fill="#3E6E84"
            r="40"
            stroke="#ffb500"
            stroke-width="5"></circle>
          <text fill="white" text-anchor="middle" x="50" y="55">SVG</text>
        </a>
      </svg>
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-weight: bold;
}

#example-element a {
  color: #009e5f;
}

#example-element svg {
  width: 10em;
  height: 10em;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
pointer-events: auto;
pointer-events: none;

/* Valeurs utilisées dans les SVG */
pointer-events: visiblePainted;
pointer-events: visibleFill;
pointer-events: visibleStroke;
pointer-events: visible;
pointer-events: painted;
pointer-events: fill;
pointer-events: stroke;
pointer-events: bounding-box;
pointer-events: all;

/* Valeurs globales */
pointer-events: inherit;
pointer-events: initial;
pointer-events: revert;
pointer-events: revert-layer;
pointer-events: unset;
```

La propriété `pointer-events` est définie grâce à un mot-clé parmi ceux de la liste suivante.

### Valeurs

- `auto`
  - : L'élément se comporte comme si la propriété `pointer-events` n'était pas définie. Pour le contenu SVG, cette valeur et la valeur `visiblePainted` ont le même effet.
- `none`
  - : L'élément, à lui seul, n'est jamais la [cible](/fr/docs/Web/API/Event/target) des évènements de pointeur. Cependant, son sous-arbre peut rester ciblable en définissant `pointer-events` sur une autre valeur. Dans ces circonstances, les évènements de pointeur déclencheront les gestionnaires d'évènements sur cet élément parent comme approprié, lors de leur cheminement vers ou depuis le descendant pendant la phase de capture et la phase de [bouillonnement](/fr/docs/Web/API/Event/bubbles).

    > [!NOTE]
    > Les évènements `pointerenter` et `pointerleave` sont déclenchés lorsqu'un dispositif de pointage est déplacé dans un élément ou l'un de ses descendants. Ainsi, même si `pointer-events: none` est défini sur le parent et non sur les enfants, les évènements sont déclenchés sur le parent après que le pointeur est entré ou sorti d'un descendant.

#### Valeurs uniquement utilisables avec SVG (expérimentales en HTML)

- `visiblePainted`
  - : SVG seulement (expérimental en HTML). L'élément ne peut être la cible d'un évènement de pointeur que lorsque la propriété `visibility` est définie sur `visible` et, par exemple, lorsqu'un curseur de souris est sur l'intérieur (c'est-à-dire le «&nbsp;remplissage&nbsp;») de l'élément et que la propriété `fill` est définie sur une valeur autre que `none`, ou lorsqu'un curseur de souris est sur le périmètre (c'est-à-dire le «&nbsp;contour&nbsp;») de l'élément et que la propriété `stroke` est définie sur une valeur autre que `none`.
- `visibleFill`
  - : SVG seulement. L'élément ne peut être la cible d'un évènement de pointeur que lorsque la propriété `visibility` est définie sur `visible` et, par exemple, lorsqu'un curseur de souris est sur l'intérieur (c'est-à-dire le remplissage) de l'élément. La valeur de la propriété `fill` n'affecte pas le traitement des évènements.
- `visibleStroke`
  - : SVG seulement. L'élément ne peut être la cible d'un évènement de pointeur que lorsque la propriété `visibility` est définie sur `visible` et, par exemple, lorsqu'un curseur de souris est sur le périmètre (c'est-à-dire le contour) de l'élément. La valeur de la propriété `stroke` n'affecte pas le traitement des évènements.
- `visible`
  - : SVG seulement (expérimental en HTML). L'élément ne peut être la cible d'un évènement de pointeur que lorsque la propriété `visibility` est définie sur `visible` et, par exemple, lorsqu'un curseur de souris est sur l'intérieur (c'est-à-dire le remplissage) ou le périmètre (c'est-à-dire le contour) de l'élément. Les valeurs des propriétés `fill` et `stroke` n'affectent pas le traitement des évènements.
- `painted`
  - : SVG seulement (expérimental en HTML). L'élément ne peut être la cible d'un évènement de pointeur que lorsque, par exemple, un curseur de souris est sur l'intérieur (c'est-à-dire le «&nbsp;remplissage&nbsp;») de l'élément et que la propriété `fill` est définie sur une valeur autre que `none`, ou lorsque le curseur de souris est sur le périmètre (c'est-à-dire le «&nbsp;contour&nbsp;») de l'élément et que la propriété `stroke` est définie sur une valeur autre que `none`. La valeur de la propriété `visibility` n'affecte pas le traitement des évènements.
- `fill`
  - : SVG seulement. L'élément ne peut être la cible d'un évènement de pointeur que lorsque le curseur est sur l'intérieur (c'est-à-dire le remplissage) de l'élément. Les valeurs des propriétés `fill` et `visibility` n'affectent pas le traitement des évènements.
- `stroke`
  - : SVG seulement. L'élément ne peut être la cible d'un évènement de pointeur que lorsque le curseur est sur le périmètre (c'est-à-dire le contour) de l'élément. Les valeurs des propriétés `stroke` et `visibility` n'affectent pas le traitement des évènements.
- `bounding-box`
  - : SVG seulement. L'élément ne peut être la cible d'un évènement de pointeur que lorsque le curseur est sur la {{Glossary("Bounding box", "boîte englobante")}} de l'élément.
- `all`
  - : SVG seulement (expérimental en HTML). L'élément ne peut être la cible d'un évènement de pointeur que lorsque le curseur est sur l'intérieur (c'est-à-dire le remplissage) ou le périmètre (c'est-à-dire le contour) de l'élément. Les valeurs des propriétés `fill`, `stroke` et `visibility` n'affectent pas le traitement des évènements.

## Description

Lorsque cette propriété n'est pas définie pour le contenu SVG, on aura le même effet qu'avec la valeur `visiblePainted`.

Lorsqu'on utilise la valeur `none`, cela indique que l'élément ne peut pas recevoir d'évènement de pointeur mais également qu'on peut passer «&nbsp;au travers&nbsp;» de l'élément pour atteindre des contrôles qui pourraient être «&nbsp;en dessous/derrière&nbsp;».

L'utilisation de `pointer-events` peut empêcher que des évènements soient directement déclenchés sur l'élément avec les pointeurs. Cela _ne signifie en aucun cas_ que les gestionnaires d'évènement de cet élément ne pourront pas être déclenchés&nbsp;! Si l'un des éléments descendants possède une valeur explicite de `pointer-events` qui lui _permet_ de recevoir des évènements de pointeur, les évènements qui parcourent les ancêtres pourront déclencher les gestionnaires d'évènements associés. Bien entendu, tout pointage qui a lieu sur un endroit de l'écran qui est couvert par le parent, mais pas par l'élément descendant, ne déclenchera pas d'évènement. L'évènement passera «&nbsp;au travers&nbsp;» du parent et ciblera le contenu qui est en dessous.

Les éléments avec `pointer-events: none` continueront de recevoir le focus via la navigation au clavier avec la touche <kbd>Tab</kbd>.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver les évènements de pointeur pour toutes les images

Dans l'exemple qui suit, on désactive les évènements de pointeur (cliquer, glisser, survoler, etc.) pour toutes les images.

```css
img {
  pointer-events: none;
}
```

### Désactiver les évènements de pointeur pour un lien

Dans l'exemple qui suit, on désactive les évènements de pointeur pour le lien `http://exemple.com`.

#### HTML

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://exemple.com">exemple.com</a></li>
</ul>
```

#### CSS

```css
a[href="http://exemple.com"] {
  pointer-events: none;
}
```

#### Résultat

{{EmbedLiveSample("Désactiver les évènements de pointeur pour un lien", 500, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("user-select")}}
- L'attribut SVG {{SVGAttr("pointer-events")}}
- L'attribut SVG {{SVGAttr("visibility")}}
- L'interface API {{DOMxRef("PointerEvent")}}
