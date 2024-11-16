---
title: animation-duration
slug: Web/CSS/animation-duration
---

{{CSSRef}}

La propriété **`animation-duration`** définit la durée d'une animation pour parcourir un cycle.

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

La valeur par défaut est `0s`, ce qui indique qu'aucune animation ne doit avoir lieu.

Généralement, on passera par la propriété raccourcie {{cssxref("animation")}} afin de définir, en une seule déclaration, les différentes propriétés liées aux animations.

## Syntaxe

```css
animation-duration: 6s;
animation-duration: 120ms;
animation-duration: 1s, 15s;
animation-duration: 10s, 30s, 230ms;
```

### Valeurs

- `<time>`
  - : La durée d'un cycle pour l'animation. Cette valeur peut être indiquée en secondes (`s` comme suffixe pour l'unité) ou en millisecondes (`ms` comme suffixe pour l'unité). Si aucune unité n'est définie, la déclaration sera considérée comme invalide.

> [!NOTE]
> Les valeurs négatives sont considérées comme invalides. Certaines implémentations, préfixées, considèrent parfois que ces valeurs sont synonymes de `0s`.

> [!NOTE]
> Lorsqu'on utiliser plusieurs valeurs, séparées par des virgules, pour une propriété `animation-*`, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer [les valeurs des propriétés pour plusieurs animations](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
p {
  animation-duration: 15s;
  animation-name: glissement;
  animation-iteration-count: infinite;
}
@keyframes glissement {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### HTML

```html
<p>
  La Chenille et Alice se considérèrent un instant en silence. Enfin la Chenille
  sortit le houka de sa bouche, et lui adressa la parole d’une voix endormie et
  traînante.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
