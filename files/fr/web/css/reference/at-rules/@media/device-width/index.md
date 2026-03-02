---
title: device-width
slug: Web/CSS/Reference/At-rules/@media/device-width
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{Deprecated_Header}}

> [!NOTE]
> Pour interroger la largeur de la zone d'affichage, il faut utiliser la caractéristique média {{CSSxRef("@media/width", "width")}}.

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`device-width`** est utilisée pour tester la largeur de la surface de rendu d'un périphérique de sortie.

## Syntaxe

`device-width` est définie comme une longueur (type {{CSSxRef("&lt;length&gt;")}}). C'est une caractéristique d'intervalle et les variantes préfixées **`min-device-width`** et **`max-device-width`** peuvent être utilisées pour manipuler un minimum ou un maximum.

## Exemples

### Appliquer une feuille de style spécifique pour les appareils dont la largeur est inférieure à 800 pixels

```html
<link
  rel="stylesheet"
  media="screen and (max-device-width: 799px)"
  href="http://toto.truc.com/narrow-styles.css" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- La règle {{CSSxRef("@media")}}
