---
title: Utiliser plusieurs arrière-plans
slug: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
original_slug: Web/CSS/CSS_Backgrounds_and_Borders/Utiliser_plusieurs_arrière-plans
---
{{CSSRef}}

Avec [CSS](/fr/docs/Web/CSS), on peut appliquer plusieurs arrière-plans à des éléments. Ceux-ci seront empilés les uns sur les autres (le premier de la liste étant le plus «&nbsp;haut&nbsp;» dans la pile et le dernier étant le plus «&nbsp;bas&nbsp;». Seul le dernier arrière-plan peut décrire une couleur.

Pour cela, il suffit d'utiliser une liste de valeur avec [`background`](/fr/docs/Web/CSS/background)&nbsp;:

```css
.maClasse {
  background: background1, background2, ..., backgroundN;
}
```

Cela fonctionne aussi bien avec la propriété raccourcie [`background`](/fr/docs/Web/CSS/background) qu'avec les propriétés détaillées, exception faite de [`background-color`](/fr/docs/Web/CSS/background-color). On peut donc utiliser une liste de valeurs, chacune pour un arrière-plan différent, pour les propriétés suivantes&nbsp;: [`background`](/fr/docs/Web/CSS/background), [`background-attachment`](/fr/docs/Web/CSS/background-attachment), [`background-clip`](/fr/docs/Web/CSS/background-clip), [`background-image`](/fr/docs/Web/CSS/background-image), [`background-origin`](/fr/docs/Web/CSS/background-origin), [`background-position`](/fr/docs/Web/CSS/background-position), [`background-repeat`](/fr/docs/Web/CSS/background-repeat), [`background-size`](/fr/docs/Web/CSS/background-size).

## Exemples

Dans cet exemple, on cumule trois arrière-plans&nbsp;: le logo de Firefox, une image de bulles et un dégradé linéaire (cf. [`linear-gradient`](/fr/docs/Web/CSS/gradient/linear-gradient())).

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png), 
                    linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom right, left, right;
}
```

### Résultat

{{EmbedLiveSample('','100%','440')}}

Comme on peut le voir ici, le logo qui est le premier élément de la liste apparaît en haut, il est suivi par les bulles puis par le dégradé. Chacune des propriétés ([`background-repeat`](/fr/docs/Web/CSS/background-repeat) et [`background-position`](/fr/docs/Web/CSS/background-position)) s'applique aux arrière-plans correspondant (la première valeur de la liste pour le premier arrière-plan, etc.).

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
