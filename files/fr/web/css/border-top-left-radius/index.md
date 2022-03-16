---
title: border-top-left-radius
slug: Web/CSS/border-top-left-radius
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-top-left-radius
---
{{CSSRef}}

La propriété **`border-top-left-radius`** définit le rayon de courbure de la bordure pour le coin en haut à gauche de la boîte. L'arrondi peut être un fragment de cercle ou d'ellipse. Si une des valeurs vaut `0`, aucun arrondi n'a lieu et le coin est un angle droit.Un arrière-plan (que ce soit une couleur ou une image) sera rogné selon la bordure même si celle-ci est arrondie. L'endroit du rognage est défini selon la valeur de {{cssxref("background-clip")}}.

{{EmbedInteractiveExample("pages/css/border-top-left-radius.html")}}

> **Note :** Si la valeur de cette propriété n'est pas définie par la propriété raccourcie {{cssxref("border-radius")}} et que cette dernière est appliquée après `border-top-left-radius`, cela aura pour effet de réinitialiser la valeur avec la valeur initiale de [la propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties).

## Syntaxe

```css
/* Le coin est un quart de cercle         */
/* La valeur indique le rayon de courbure */
border-top-left-radius: 3px;

/* Le coin est un quart d'ellipse         */
/* La première valeur indique le demi-axe */
/* horizontal et la seconde le demi-axe   */
/* vertical                               */
border-top-left-radius: 0.5em 1em;

border-top-left-radius: inherit;
```

Cette propriété peut prendre deux formes :

- Une première avec une longueur (`<length>`) ou un pourcentage (`<percentage>`) qui indique le rayon de courbure pour ce coin
- Une seconde avec deux valeurs

  - La première est une longueur (`<length>`) ou un pourcentage (`<percentage>`) qui indique le rayon de courbure de l'axe horizontal de l'ellipse pour ce coin
  - La seconde est une longueur (`<length>`) ou un pourcentage (`<percentage>`) qui indique le rayon de courbure de l'axe vertical de l'ellipse pour ce coin

### Valeurs

- `<length-percentage>`
  - : La mesure du rayon ou de l'un des demi-axes de l'ellipse. Une valeur absolue peut être exprimée dans n'importe quelle unité autorisée pour le type {{cssxref("&lt;length&gt;")}}. Les valeurs exprimées en pourcentage font référence à la hauteur de la boîte pour les valeurs verticales et à la largeur de la boîte pour les valeurs horizontales. Les valeurs négatives ne sont pas autorisées.

### Syntaxe formelle

{{csssyntax}}

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
  border-top-left-radius: 40px 40px;
}

.arc_ellipse {
  border-top-left-radius: 40px 20px;
}

.pourcentage {
  border-top-left-radius: 40%;
}

.rognage {
  border: black 10px double;
  border-top-left-radius: 40%;
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

| Spécification                                                                                                | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-radius', 'border-top-left-radius')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-top-left-radius")}}

## Voir aussi

- La propriété raccourcie {{cssxref("border-radius")}}
- Les propriétés pour les autres coins :

  - {{cssxref("border-top-right-radius")}},
  - {{cssxref("border-bottom-right-radius")}},
  - {{cssxref("border-bottom-left-radius")}}.
