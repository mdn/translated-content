---
title: clip
slug: Web/CSS/clip
tags:
  - CSS
  - Déprécié
  - Propriété
  - Reference
translation_of: Web/CSS/clip
---
{{CSSRef}}{{deprecated_header}}

La propriété **`clip`** permet de définir la zone d'un élément qui est visible. La propriété `clip` s'applique uniquement aux éléments positionnés de façon absolue (autrement dit, ceux avec {{cssxref("position","position:absolute")}} ou {{cssxref("position","position:fixed")}}).

```css
/* Valeur avec un mot-clé */
clip: auto;

/* Valeurs de forme */
/* Type <shape>     */
clip: rect(1px 10em 3rem 2ch);
clip: rect(1px, 10em, 3rem, 2ch);

/* Valeurs globales */
clip: inherit;
clip: initial;
clip: unset;
```

> **Attention :** Cette propriété est dépréciée et ne doit plus être utilisée. La propriété {{cssxref("clip-path")}} peut être utilisée à la place.

{{cssinfo}}

## Syntaxe

### Valeurs

- `<shape>`
  - : Une forme rectangulaire indiquée avec `rect(<haut>, <droite>, <bas>, <gauche>)` ou avec `rect(<haut> <droite> <bas> <gauche>)`. `<haut>` et `<bas>` indiquent les décalages à partir du haut de la boîte de bordure, `<gauche>` et `<droite>` indiquent les décalages à partir du bord gauche de la boîte de bordure.`<haut>`, `<droite>`, `<bas>` et `<gauche>` peuvent avoir une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) ou `auto`. Si un des côtés vaut `auto`, l'élément est rogné sur ce côté avec le bord intérieur de la boîte de bordure.
- `auto`
  - : L'élément n'est pas rogné (la valeur par défaut). Attention, l'effet obtenu n'est pas le même que `rect(auto, auto, auto, auto)`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 536px;
  height: 350px;
}

#top-left, #middle, #bottom-right {
  position: absolute;
  top: 0px;
}

#top-left {
  left: 360px;
  clip: rect(0px, 175px, 113px, 0px);
}


#middle {
  left: 280px;
  clip: rect(119px, 255px, 229px, 80px);
  /* standard syntax, unsupported by Internet Explorer 4-7 */
}

#bottom-right {
  left: 200px;
  clip: rect(235px 335px 345px 160px);
  /* non-standard syntax, but supported by all major browsers*/
}
```

### HTML

```html
<p class="dotted-border">
  <img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Original graphic">
  <img id="top-left" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to upper left">
  <img id="middle" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped towards middle">
  <img id="bottom-right" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to bottom right">
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', '689px', '410px')}}

## Spécifications

| Spécification                                                                    | État                                     | Commentaires                                                                                                |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Masks', '#clip-property', 'clip')}}             | {{Spec2('CSS Masks')}}             | Dépréciation de la propriété `clip` et proposition de  {{cssxref("clip-path")}} comme remplacement. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'clip')}} | {{Spec2('CSS3 Transitions')}} | `clip` peut être animée.                                                                                    |
| {{SpecName('CSS2.1', 'visufx.html#clipping', 'clip')}}         | {{Spec2('CSS2.1')}}                 | Définition initiale.                                                                                        |

## Compatibilité des navigateurs

{{Compat("css.properties.clip")}}

## Voir aussi

- La propriété {{cssxref("clip-path")}} qui doit être utilisée à la place
- {{cssxref("text-overflow")}}
- {{cssxref("white-space")}}
- {{cssxref("overflow-x")}}
- {{cssxref("overflow-y")}}
- {{cssxref("overflow")}}
- {{cssxref("display")}}
- {{cssxref("position")}}
