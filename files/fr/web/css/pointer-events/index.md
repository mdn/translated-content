---
title: pointer-events
slug: Web/CSS/pointer-events
tags:
  - CSS
  - Propriété
  - Reference
  - SVG
translation_of: Web/CSS/pointer-events
---
{{CSSRef}}

La propriété CSS** `pointer-events`** permet aux auteurs de contrôler les circonstances dans lesquelles un élément graphique peut être [une cible](/fr/docs/Web/API/Event/target), c'est-à-dire recevoir des événements de la souris, du pointeur ou du doigt.

{{EmbedInteractiveExample("pages/css/pointer-events.html")}}

Lorsque cette propriété n'est pas définie,  pour le contenu SVG, on aura le même effet qu'avec la valeur `visiblePainted`. Lorsqu'on utilise la valeur `none`, cela indique que l'élément ne peut pas recevoir d'événement de pointeur mais cela indique également qu'on peut passer « au travers » de l'élément pour atteindre des contrôles qui pourraient être en-dessous/derrière.

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
pointer-events: unset;
```

La propriété `pointer-events` est définie grâce à un mot-clé parmi ceux de la liste suivante.

### Valeurs

- `auto`
  - : L'élément se comporte comme si la propriété `pointer-events` n'était pas spécifiée. Pour le contenu SVG, cette valeur et la valeur `visiblePainted` ont le même effet.
- `none`
  - : L'élément ne sera jamais [la cible](/fr/docs/Web/API/Event/target) d'événements de pointeur. Toutefois, les événements peuvent atteindre les éléments qui sont des descendants si ceux-ci ont une autre valeur pour `pointer-events`. Sous ces circonstances, les événements déclencheront les gestionnaires d'événement sur l'élément parent jusqu'à/depuis l'élément descendant lors de la phase de capture/[bouillonnement](/fr/docs/Web/API/Event/bubbles) de l'événement.

#### Valeurs uniquement utilisables avec SVG

- `visiblePainted`
  - : L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur est au-dessus de l'intérieur de l'élément et que la valeur de la propriété `fill` n'est pas `none` ou lorsque le pointeur de la souris est au-dessus du contour de l'élément et que la valeur de la propriété `stroke` n'est pas `none`.
- `visibleFill`
  - : L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur est au-dessus de l'intérieur de l'élément. La valeur de la propriété `fill` n'a pas d'impact sur le traitement des événements.
- `visibleStroke`
  - : L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur de la souris est au-dessus du contour de l'élément. La valeur de la propriété `stroke` n'a pas d'impact sur le traitement des événements.
- `visible`
  - : L'élément ne peut être la cible d'un événement de pointeur que si la propriété `visibility` vaut `visible` et lorsque le pointeur est au-dessus de l'intérieur de l'élément ou lorsque le pointeur de la souris est au-dessus du contour de l'élément. Les valeurs de `fill` et `stroke` n'ont pas d'impact sur le traitement des événements.
- `painted`
  - : L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus de l'intérieur de l'élément et que la valeur de la propriété `fill` n'est pas `none` ou lorsque le pointeur de la souris est au-dessus du contour de l'élément et que la valeur de la propriété `stroke` n'est pas `none`. La valeur de `visibility` n'a pas d'impact sur le traitement des événements.
- `fill`
  - : L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus de l'intérieur de l'élément. Les valeurs de `fill` et de `visibility` n'ont pas d'impact sur le traitement des événements.
- `stroke`
  - : L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus du contour de l'élément. Les valeurs de `stroke` et de `visibility` n'ont pas d'impact sur le traitement des événements.
- `all`
  - : L'élément ne peut être la cible d'un événement de pointeur que lorsque le pointeur est au-dessus de l'intérieur de l'élément ou lorsque le pointeur de la souris est au-dessus du contour de l'élément. Les valeurs de `fill`, `stroke` et de `visibility` n'ont pas d'impact sur le traitement des événements.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans l'exemple qui suit, on rend le lien http\://exemple.com inactif.

### HTML

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://exemple.com">exemple.com</a></li>
</ul>
```

### CSS

```css
a[href="http://exemple.com"] {
  pointer-events: none;
}
```

### Résultat

{{EmbedLiveSample('Exemples', "500", "100")}}

## Notes

L'utilisation de `pointer-events` peut empêcher que des événements soient directement déclenchés sur l'élément avec les pointeurs. Cela ne signifie en aucun cas que les gestionnaires d'événement de cet élément ne pourront pas être déclenchés ! Si l'un des éléments descendants possède une valeur explicite de `pointer-events` qui lui permet de recevoir des événements de pointeur, les événements qui parcourent les ancêtres pourront déclencher les gestionnaires d'événements associés. Bien entendu, tout pointage, qui a lieu sur un endroit de l'écran qui est couvert par le parent mais pas par l'élément descendant, ne déclenchera d'événement. L'événement passera au travers du parent et ciblera le contenu qui est en-dessous.

Les éléments avec `pointer-events: none` continueront de recevoir le focus via la navigation au clavier avec la touche <kbd>Tab</kbd>.

## Spécifications

| Spécification                                                                                            | État                     | Commentaires |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | ------------ |
| {{SpecName('SVG1.1', 'interact.html#PointerEventsProperty', 'pointer-events')}} | {{Spec2('SVG1.1')}} |              |
| {{SpecName('SVG2', 'interact.html#PointerEventsProperty', 'pointer-events')}} | {{Spec2('SVG2')}} |              |

L'extension de cette propriété aux éléments HTML, bien qu'elle fut présente dans les premiers brouillons de la spécification _CSS Basic User Interface Module Level 3_, a été remise à la spécification de [niveau 4](https://wiki.csswg.org/spec/css4-ui#pointer-events).

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.pointer-events")}}

## Voir aussi

- L'attribut SVG {{SVGAttr("pointer-events")}}
- L'attribut SVG {{SVGAttr("visibility")}}
- La propriété {{cssxref("user-select")}} qui contrôle lorsque l'utilisateur peut sélectionner du texte
- [« Spécification » WebKit pour étendre la propriété pointer-events](https://webkit.org/specs/PointerEventsProperty.html) au contenu (X)HTML
- [Un défilement à 60fps en utilisant `pointer-events: none` (en anglais)](http://www.thecssninja.com/javascript/pointer-events-60fps)
