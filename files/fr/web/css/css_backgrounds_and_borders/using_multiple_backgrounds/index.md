---
title: Utiliser plusieurs arrière-plans
slug: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
original_slug: Web/CSS/CSS_Backgrounds_and_Borders/Utiliser_plusieurs_arrière-plans
---
{{CSSRef}}

Avec [CSS](/fr/docs/Web/CSS), on peut appliquer plusieurs arrière-plans à des éléments. Ceux-ci seront empilés les uns sur les autres (le premier de la liste étant le plus « haut » dans la pile et le dernier étant le plus « bas ». Seul le dernier arrière-plan peut décrire une couleur.

Pour cela, il suffit simplement d'utiliser une liste de valeur avec {{cssxref("background")}} :

```css
.maClasse {
  background: background1, background2, ..., backgroundN;
}
```

Cela fonctionne aussi bien avec la propriété raccourcie {{cssxref("background")}} qu'avec les propriétés détaillées, exception faite de {{cssxref("background-color")}}. On peut donc utiliser une liste de valeurs, chacune pour un arrière-plan différent, pour les propriétés suivantes : {{cssxref("background")}}, {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Exemples

Dans cet exemple, on cumule trois arrière-plans : le logo de Firefox, un dégradé linéaire (cf. {{cssxref("linear-gradient")}}) et une image de bulles.

### CSS

```css
.exemple_multi_ar {
  width: 100%;
  height: 400px;
  background-image: url(https://mdn.mozillademos.org/files/11305/firefox.png), url(https://mdn.mozillademos.org/files/11307/bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom right, left, right;
}
```

### HTML

```html
<div class="exemple_multi_ar"></div>
```

### Résultat

{{EmbedLiveSample('Exemples','100%','400')}}

Comme on peut le voir ici, le logo qui est le premier élément de la liste apparaît en dessus, il est suivi par le dégradé puis par les bulles. Chacune des propriétés ({{cssxref("background-repeat")}} et {{cssxref("background-position")}}) s'applique aux arrière-plans correspondant (la première valeur de la liste pour le premier arrière-plan, etc.).

> **Note :** Si l'image n'apparaît pas sous CodePen, cliquez sur le bouton _Tidy_ de la section CSS.

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Utilisation_de_dégradés_CSS)
