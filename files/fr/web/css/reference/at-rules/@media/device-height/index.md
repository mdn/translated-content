---
title: device-height
slug: Web/CSS/Reference/At-rules/@media/device-height
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{Deprecated_Header}}

> [!NOTE]
> Pour interroger la hauteur de la zone d'affichage, il faut utiliser la caractéristique média {{CSSxRef("@media/height", "height")}}.

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`device-height`** peut être utilisée pour tester la hauteur de la surface de rendu d'un périphérique de sortie.

## Syntaxe

La caractéristique `device-height` est définie comme une longueur (type {{CSSxRef("&lt;length&gt;")}}). C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-device-height`** et **`max-device-height`** afin d'utiliser des critères de minimum et maximum.

## Exemples

### Appliquer une feuille de style spécifique pour les appareils dont la hauteur est inférieure à 800 pixels

```html
<link
  rel="stylesheet"
  media="screen and (max-device-height: 799px)"
  href="http://toto.truc.com/short-styles.css" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- La règle {{CSSxRef("@media")}}
