---
title: offset-distance
slug: Web/CSS/offset-distance
tags:
  - CSS
  - Propriété
  - Reference
  - motion-offset
  - offset-distance
translation_of: Web/CSS/offset-distance
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`offset-distance`** définit une position le long d'un chemin {{CSSxRef("offset-path")}}.

## Syntaxe

```css
/* Valeur par défaut */
offset-distance: 0;

/* La position à la moitié de offset-path */
offset-distance: 50%;

/* Une position absolue le long du chemin */
offset-distance: 40px;
```

- `{{cssxref('&lt;length-percentage&gt;')}}`
  - : Une longueur qui définit l'emplacement de l'élément le long du chemin (défini par {{cssxref('offset-path')}}). La valeur 100% représente la longueur totale du chemin (lorsque `offset-path` est défini par une forme simple ou grâce à la fonction `path()`).

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Animation

La notion de mouvement contenue dans _CSS Motion Path_ vient principalement de la propriété `offset-distance`. Si on souhaite animer un élément le long du chemin, on définira un chemin avec {{cssxref('offset-path')}} et on utilisera une animation qui fera évoluer `offset-distance` de `0%` à `100%`.

#### HTML

```html
<div id="motion-demo"></div>
```

#### CSS

```css
#motion-demo {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Résultat

{{EmbedLiveSample('Animation')}}

## Spécifications

| Spécification                                                                                                    | État                                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Motion Path Level 1', '#offset-distance-property', 'offset-distance')}} | {{Spec2('Motion Path Level 1')}} | Définition initiale. |

{{CSSInfo}}

> **Note :** Dans les versions antérieures de la spécification, cette propriété était intitulée `motion-offset`.

## Compatibilité des navigateurs

{{Compat("css.properties.offset-distance")}}
