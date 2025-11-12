---
title: Utiliser plusieurs arrière-plans
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
original_slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

Avec [CSS](/fr/docs/Web/CSS), on peut appliquer plusieurs arrière-plans à des éléments. Ceux-ci seront empilés les uns sur les autres (le premier de la liste étant le plus «&nbsp;haut&nbsp;» dans la pile et le dernier étant le plus «&nbsp;bas&nbsp;». Seul le dernier arrière-plan peut décrire une couleur.

Pour cela, il suffit d'utiliser une liste de valeur avec [`background`](/fr/docs/Web/CSS/Reference/Properties/background)&nbsp;:

```css
.maClasse {
  background: background1, background2, ..., backgroundN;
}
```

Cela fonctionne aussi bien avec la propriété raccourcie [`background`](/fr/docs/Web/CSS/Reference/Properties/background) qu'avec les propriétés détaillées, exception faite de [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color). On peut donc utiliser une liste de valeurs, chacune pour un arrière-plan différent, pour les propriétés suivantes&nbsp;: [`background`](/fr/docs/Web/CSS/Reference/Properties/background), [`background-attachment`](/fr/docs/Web/CSS/Reference/Properties/background-attachment), [`background-clip`](/fr/docs/Web/CSS/Reference/Properties/background-clip), [`background-image`](/fr/docs/Web/CSS/Reference/Properties/background-image), [`background-origin`](/fr/docs/Web/CSS/Reference/Properties/background-origin), [`background-position`](/fr/docs/Web/CSS/Reference/Properties/background-position), [`background-repeat`](/fr/docs/Web/CSS/Reference/Properties/background-repeat), [`background-size`](/fr/docs/Web/CSS/Reference/Properties/background-size).

## Exemples

Dans cet exemple, on cumule trois arrière-plans&nbsp;: le logo de Firefox, une image de bulles et un dégradé linéaire (cf. [`linear-gradient`](/fr/docs/Web/CSS/Reference/Values/gradient/linear-gradient)).

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image:
    url(firefox.png), url(bubbles.png),
    linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### Résultat

{{EmbedLiveSample('','100%','440')}}

Comme on peut le voir ici, le logo qui est le premier élément de la liste apparaît en haut, il est suivi par les bulles puis par le dégradé. Chacune des propriétés ([`background-repeat`](/fr/docs/Web/CSS/Reference/Properties/background-repeat) et [`background-position`](/fr/docs/Web/CSS/Reference/Properties/background-position)) s'applique aux arrière-plans correspondant (la première valeur de la liste pour le premier arrière-plan, etc.).

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
