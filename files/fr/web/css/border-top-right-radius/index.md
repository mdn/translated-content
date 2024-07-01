---
title: border-top-right-radius
slug: Web/CSS/border-top-right-radius
---

{{CSSRef}}

La propriété **`border-top-right-radius`** définit le rayon de courbure de la bordure pour le coin en haut à droite de la boîte. L'arrondi peut être un fragment de cercle ou d'ellipse. Si une des valeurs vaut `0`, aucun arrondi n'a lieu et le coin est un angle droit.

{{EmbedInteractiveExample("pages/css/border-top-right-radius.html")}}

Un arrière-plan (que ce soit une couleur ou une image) sera rogné selon la bordure même si celle-ci est arrondie. L'endroit du rognage est défini selon la valeur de {{cssxref("background-clip")}}.

> **Note :** Si la valeur de cette propriété n'est pas définie par la propriété raccourcie {{cssxref("border-radius")}} et que cette dernière est appliquée après `border-top-radius-radius`, cela aura pour effet de réinitialiser la valeur avec la valeur initiale de [la propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties).

## Syntaxe

```css
/* Le coin est un quart de cercle         */
/* La valeur indique le rayon de courbure */
border-top-right-radius: 3px;

/* Le coin est un quart d'ellipse         */
/* La première valeur indique le demi-axe */
/* horizontal et la seconde le demi-axe   */
/* vertical                               */
border-top-right-radius: 0.5em 1em;

border-top-right-radius: inherit;
```

Cette propriété peut prendre deux formes :

- Une première avec une longueur (`<length>`) ou un pourcentage (`<percentage>`) qui indique le rayon de courbure pour ce coin
- Une seconde avec deux valeurs

  - La première est une longueur (`<length>`) ou un pourcentage (`<percentage>`) qui indique le rayon de courbure de l'axe horizontal de l'ellipse pour ce coin
  - La seconde est une longueur (`<length>`) ou un pourcentage (`<percentage>`) qui indique le rayon de courbure de l'axe vertical de l'ellipse pour ce coin

### Valeurs

- `<length-percentage>`
  - : La mesure du rayon ou de l'un des demi-axes de l'ellipse. Une valeur absolue peut être exprimée dans n'importe quelle unité autorisée pour le type {{cssxref("&lt;length&gt;")}}. Les valeurs exprimées en pourcentage font référence à la hauteur de la boîte pour les valeurs verticales et à la largeur de la boîte pour les valeurs horizontales. Les valeurs négatives ne sont pas autorisées`.`

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 130px;
}

.arc_cercle {
  border-top-right-radius: 40px 40px;
}

.arc_ellipse {
  border-top-right-radius: 40px 20px;
}

.pourcentage {
  border-top-right-radius: 40%;
}

.rognage {
  border: black 10px double;
  border-top-right-radius: 40%;
  background-color: rgb(250,20,70);
  background-clip: content-box; // essayez margin-box...
}
```

### HTML

```html
<div class="arc_cercle"></div>
<div class="arc_ellipse"></div>
<div class="pourcentage"></div>
<div class="rognage"></div>
```

### Résultat

{{EmbedLiveSample("Exemples","200","540")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{cssxref("border-radius")}}
- Les propriétés pour les autres coins :

  - {{cssxref("border-top-left-radius")}},
  - {{cssxref("border-bottom-right-radius")}},
  - {{cssxref("border-bottom-left-radius")}}.
