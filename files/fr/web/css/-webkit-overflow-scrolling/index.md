---
title: "-webkit-overflow-scrolling"
slug: Web/CSS/-webkit-overflow-scrolling
---

{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-overflow-scrolling`** permet de contrôler si l'appareil tactile utilise l'inertie pour faire défiler l'élément visé par la déclaration.

## Valeurs

- `auto`
  - : Le défilement « normal » est utilisé : le défilement s'arrête dès que le doigt ne touche plus l'écran.
- `touch`
  - : Le défilement simule une certaine inertie : le contenu continue à défiler légèrement après que le toucher soit fini. La vitesse et la durée du défilement sont proportionnelles à la vitesse de déplacement du doigt sur l'écran. Cela crée un nouveau contexte d'empilement.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  width: 100%;
  overflow: auto;
}

p {
  width: 200%;
  background: #f5f9fa;
  border: 2px solid #eaf2f4;
  padding: 10px;
}

.scroll-touch {
  -webkit-overflow-scrolling: touch; /* on laisse le défilement se poursuivre */
}

.scroll-auto {
  -webkit-overflow-scrolling: auto; /* on arrête le défilement immédiatement */
}
```

### HTML

```html
<div class="scroll-touch">
  <p>Ce paragraphe a un défilement inertiel.</p>
</div>
<div class="scroll-auto">
  <p>Pas celui-ci.</p>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification. Elle est documentée dans [la référence CSS de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling).

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'article de CSS-Tricks sur cette fonctionnalité, avec une démonstration (en anglais)](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
- [Article de Smashing Magazine (en anglais) : décrire l'effet du rebondissement du scroll et le fonctionnement dans les différents navigateurs](https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/)
