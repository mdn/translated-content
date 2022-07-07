---
title: '<blink> : l''élément de texte clignotant'
slug: Web/HTML/Element/blink
tags:
  - Blink
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
translation_of: Web/HTML/Element/blink
browser-compat: html.elements.blink
---
{{HTMLRef}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<blink>`** (N.D.T le verbe _blink_ signifie « clignoter ») est un élément non-standard faisant clignoter le texte qu'il contient.

> **Attention :** Ne pas utiliser cet élément qui n'est pas standard et qui est obsolète. Le clignotement de texte est contraire à la plupart des standards d'accessibilité, la spécification CSS permet donc aux navigateurs d'ignorer la valeur `blink`.

## Interface DOM

Cet élément n'est pas pris en charge et implémente donc l'interface [`HTMLUnknownElement`](/fr/docs/Web/API/HTMLUnknownElement).

## Exemple

```html
<blink>Why would somebody use this?</blink>
```

### Résultat (atténué !)

![](htmlblinkelement.gif)

## Spécifications

Cet élément est non-standard et n'appartient à aucune spécification. Pour vérifier, [voir la spécification HTML](https://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#non-conforming-features).

## Prothèse CSS (_polyfill_)

Si vous avez réellement besoin de cette fonctionnalité, vous pouvez utiliser le code CSS suivant qui fonctionne à partir d'IE10.

```css
blink {
  -webkit-animation: 2s linear infinite condemed_blink_effect; // pour Safari 4.0-8.0
  animation: 2s linear infinite condemed_blink_effect;
}
@-webkit-keyframes condemed_blink_effect { // pour Safari 4.0-8.0
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
@keyframes condemed_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Histoire autour de la création de l'élément `<blink>`](http://www.montulli.org/theoriginofthe%3Cblink%3Etag)
- [`text-decoration`](/fr/docs/Web/CSS/text-decoration) qui possède une valeur pour le clignotement, bien que les navigateurs ne soient pas obligés de restituer cet effet
- [`<marquee>`](/fr/docs/Web/HTML/Element/marquee), un autre élément non-standard similaire
- [Les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations) sont la meilleure façon d'obtenir un tel effet
