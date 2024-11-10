---
title: ":hover"
slug: Web/CSS/:hover
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:hover`** permet de spécifier l'apparence d'un élément au moment où l'utilisateur le survole avec le pointeur, sans nécessairement l'activer.

```css
/* Cible n'importe quel élément <a> lorsque  */
/* celui-ci est survolé */
a:hover {
  background-color: gold;
}
```

La mise en forme ciblée par cette pseudo-classe peut être surchargée par d'autres pseudo-classes relatives aux liens hypertextes comme {{cssxref(":link")}}, {{cssxref(":visited")}}, et {{cssxref(":active")}}, apparaissant dans des règles subséquentes. Pour décorer les liens sans effet de bord problématique, on placera la règle `:hover` après les règles `:link` et `:visited` mais avant la règle `:active` (l'ordre est `:link` — `:visited` — `:hover` — `:active` – un moyen mnémotechnique est de se souvenir des initiales LVHA) tandis que l'ordre de la règle {{cssxref(":focus")}} est indifférent.

La pseudo-classe `:hover` peut être appliquée à n'importe quel [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements). {{experimental_inline}}

> [!NOTE]
> Sur les écrans tactiles, `:hover` est problématique voire impossible. La pseudo-classe `:hover` n'est jamais valide, ou seulement pendant un très court instant après avoir touché l'élément. Puisque les appareils à écrans tactiles sont très courants, il est important que les développeurs web ne placent pas de contenu accessible seulement lors du survol, puisque ce contenu sera caché pour les utilisateurs de tels appareils.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
a:hover {
  background-color: gold;
}
```

### HTML

```html
<p>
  <a href="#">Ce lien sera écrit sur un fond doré lors du survol.</a>
</p>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

> [!NOTE]
> On peut utiliser la pseudo-classe `:checked` dans une galerie d'images afin d'afficher une version agrandie de l'image lorsqu'on survole la vignette.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Bogue Chromium #370155 : Don't make :hover sticky on tap on sites that set a mobile viewport](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Bogue Chromium #306581 : Immediately show hover and active states on touch when page isn't scrollable](https://code.google.com/p/chromium/issues/detail?id=306581)
