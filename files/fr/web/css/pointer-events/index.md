---
title: pointer-events
slug: Web/CSS/pointer-events
translation_of: Web/CSS/pointer-events
browser-compat: css.properties.pointer-events
---
{{CSSRef}}

La propriété [CSS](fr/docs/Web/CSS) **`pointer-events`** permet de contrôler les circonstances dans lesquelles un élément graphique peut être [une cible](/fr/docs/Web/API/Event/target), c'est-à-dire recevoir des évènements de la souris, du pointeur ou du doigt.

{{EmbedInteractiveExample("pages/css/pointer-events.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted; /* SVG uniquement */
pointer-events: visibleFill;    /* SVG uniquement */
pointer-events: visibleStroke;  /* SVG uniquement */
pointer-events: visible;        /* SVG uniquement */
pointer-events: painted;        /* SVG uniquement */
pointer-events: fill;           /* SVG uniquement */
pointer-events: stroke;         /* SVG uniquement */
pointer-events: all;            /* SVG uniquement */

/* Valeurs globales */
pointer-events: inherit;
pointer-events: initial;
pointer-events: revert;
pointer-events: unset;
```

La propriété `pointer-events` est définie grâce à un mot-clé parmi ceux de la liste suivante.

### Valeurs

- `auto`
  - : L'élément se comporte comme si la propriété `pointer-events` n'était pas spécifiée. Pour le contenu SVG, cette valeur et la valeur `visiblePainted` ont le même effet.
- `none`
  - : L'élément ne sera jamais [la cible](/fr/docs/Web/API/Event/target) d'événements de pointeur. Toutefois, les événements peuvent atteindre les éléments qui sont des descendants si ceux-ci ont une autre valeur pour `pointer-events`. Sous ces circonstances, les événements déclencheront les gestionnaires d'événement sur l'élément parent jusqu'à/depuis l'élément descendant lors de la phase de capture/[bouillonnement](/fr/docs/Web/API/Event/bubbles) de l'événement.

#### Valeurs uniquement utilisables avec SVG (expérimentales en HTML)

- `visiblePainted`
  - : SVG uniquement (expérimental en HTML). L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur est au-dessus de l'intérieur de l'élément et que la valeur de la propriété `fill` n'est pas `none` ou lorsque le pointeur de la souris est au-dessus du contour de l'élément et que la valeur de la propriété `stroke` n'est pas `none`.
- `visibleFill`
  - : SVG uniquement. L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur est au-dessus de l'intérieur de l'élément. La valeur de la propriété `fill` n'a pas d'impact sur le traitement des événements.
- `visibleStroke`
  - : SVG uniquement. L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur de la souris est au-dessus du contour de l'élément. La valeur de la propriété `stroke` n'a pas d'impact sur le traitement des événements.
- `visible`
  - : SVG uniquement (expérimental en HTML). L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur est au-dessus de l'intérieur ou du contour de l'élément. Les valeurs de `fill` et `stroke` n'ont pas d'impact sur le traitement des événements.
- `painted`
  - : SVG uniquement (expérimental en HTML). L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus de l'intérieur de l'élément et que la valeur de la propriété `fill` n'est pas `none` ou lorsque le pointeur de la souris est au-dessus du contour de l'élément et que la valeur de la propriété `stroke` n'est pas `none`. La valeur de `visibility` n'a pas d'impact sur le traitement des événements.
- `fill`
  - : SVG uniquement. L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus de l'intérieur de l'élément. Les valeurs de `fill` et de `visibility` n'ont pas d'impact sur le traitement des événements.
- `stroke`
  - : SVG uniquement. L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus du contour de l'élément. Les valeurs de `stroke` et de `visibility` n'ont pas d'impact sur le traitement des événements.
- `all`
  - : SVG uniquement (expérimental en HTML). L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus de l'intérieur ou du contour de l'élément. Les valeurs de `fill`, de `stroke` et de `visibility` n'ont pas d'impact sur le traitement des événements.

## Description

Lorsque cette propriété n'est pas définie pour le contenu SVG, on aura le même effet qu'avec la valeur `visiblePainted`. 

Lorsqu'on utilise la valeur `none`, cela indique que l'élément ne peut pas recevoir d'événement de pointeur mais également qu'on peut passer «&nbsp;au travers&nbsp;» de l'élément pour atteindre des contrôles qui pourraient être «&nbsp;en dessous/derrière&nbsp;».

L'utilisation de `pointer-events` peut empêcher que des événements soient directement déclenchés sur l'élément avec les pointeurs. Cela *ne signifie en aucun cas* que les gestionnaires d'événement de cet élément ne pourront pas être déclenchés&nbsp;! Si l'un des éléments descendants possède une valeur explicite de `pointer-events` qui lui *permet* de recevoir des événements de pointeur, les événements qui parcourent les ancêtres pourront déclencher les gestionnaires d'événements associés. Bien entendu, tout pointage qui a lieu sur un endroit de l'écran qui est couvert par le parent, mais pas par l'élément descendant, ne déclenchera pas d'événement. L'événement passera «&nbsp;au travers&nbsp;» du parent et ciblera le contenu qui est en dessous.

Les éléments avec `pointer-events: none` continueront de recevoir le focus via la navigation au clavier avec la touche <kbd>Tab</kbd>.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Désactiver les événements de pointeur pour toutes les images

Dans l'exemple qui suit, on désactive les événements de pointeur (cliquer, glisser, survoler, etc.) pour toutes les images.

```css
img {
  pointer-events: none;
}
```

### Désactiver les événements de pointeur pour un lien

Dans l'exemple qui suit, on désactive les événements de pointeur pour le lien http\://example.com.

#### HTML

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

#### CSS

```css
a[href="http://example.com"] {
  pointer-events: none;
}
```

#### Résultat

{{EmbedLiveSample('', "500", "100")}}

## Spécifications

{{Specifications}}

Bien que l'extension de `pointer-events` au contenu HTML soit incluse dans les premières ébauches du niveau 3 du module <i lang="en">CSS Basic User Interface</i>, elle a été reportée à la spécification de niveau 4.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG [`pointer-events`](/fr/docs/Web/SVG/Attribute/pointer-events)
- L'attribut SVG [`visibility`](/fr/docs/Web/SVG/Attribute/visibility)
- [Spécification WebKit pour étendre la propriété `pointer-events` (en anglais)](https://webkit.org/specs/PointerEventsProperty.html) au contenu (X)HTML
- La propriété [`user-select`](/fr/docs/Web/CSS/user-select) qui contrôle lorsque l'utilisateur peut sélectionner du texte
- [La page du wiki de Mozilla pour recenser les cas d'usage nécessitant l'extension des valeurs implémentées pour HTML](https://wiki.mozilla.org/SVG:pointer-events)

