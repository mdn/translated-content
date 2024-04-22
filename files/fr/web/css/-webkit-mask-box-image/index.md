---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
---

{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-mask-box-image`** permet de définir l'image de masque utilisée pour la boîte de bordure d'un élément.

- Valeur initiale : `none`
- Applicabilité : à tous les éléments
- Héritée : non
- Type de média : visuel
- Valeur calculée : comme la valeur définie

## Syntaxe

```
-webkit-mask-box-image: <mask-box-image> [<top> <right> <bottom> <left> <x-repeat> <y-repeat>]
```

Où :

- `<mask-box-image>`
  - : `{{cssxref("&lt;uri&gt;")}} | <gradient> | none`
- `<top>` `<right>` `<bottom>` `<left>`
  - : `<length> | <percentage>`
- `<x-repeat>` `<y-repeat>`
  - : `repeat | stretch | round`

### Valeurs

- `<uri>`
  - : L'emplacement de la ressource qui doit être utilisée comme image de masque.
- `<gradient>`
  - : Une fonction `-webkit-gradient` utilisée pour générer l'image de masque.
- `none`
  - : Ce mot-clé indique que la boîte de bordure n'a pas de masque.

<!---->

- `<length>`
  - : Le décalage à appliquer à l'image de masque (cf. {{cssxref("&lt;length&gt;")}} pour les unités possibles).
- `<percentage>`
  - : Le décalage de l'image exprimé en pourcentages relatifs à la dimension de la boîte de bordure de l'élément (la largeur ou la hauteur selon l'axe).
- `repeat`
  - : L'image est répétée autant de fois que nécessaire pour remplir la boîte de bordure. On pourra avoir des morceaux d'image si les dimensions de celle-ci ne permettent pas d'en copier un nombre entier sur la boîte.
- `stretch`
  - : L'image de masque est étirée pour être contenue exactement dans la boîte de bordure.
- `round`
  - : L'image de masque est étirée et répétée de telle façon à ce qu'il n'y ait pas de morceaux d'image vers la fin de la boîte de bordure.

## Exemples

```css
.exempleUn {
  -webkit-mask-box-image: url("mask.png");
}

.exempleDeux {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("-webkit-mask")}}
- {{cssxref("-webkit-mask-origin")}}
- {{cssxref("-webkit-mask-attachment")}}
- {{cssxref("-webkit-mask-clip")}}
- {{cssxref("-webkit-mask-image")}}
- {{cssxref("-webkit-mask-composite")}}
- {{cssxref("-webkit-mask-repeat")}}
