---
title: device-width
slug: Web/CSS/@media/device-width
tags:
  - CSS
  - Caractéristique média
  - Déprécié
  - Reference
translation_of: Web/CSS/@media/device-width
---
{{CSSRef}}{{deprecated_header}}

**`device-width`** est une caractéristique média dépréciée dont la valeur représente la largeur de la surface de rendu de l'appareil d'affichage.

## Syntaxe

`device-width` est définie comme une longueur (type {{cssxref("&lt;length&gt;")}}). C'est une caractéristique d'intervalle et les variantes préfixées **`min-device-width`** et **`max-device-width`** peuvent être utilisées pour manipuler un minimum ou un maximum.

## Exemples

Ce code HTML applique une feuille de style pour pour les appareils plus étroits que 800 pixels.

```html
<link rel="stylesheet" media="screen and (max-device-width: 799px)" href="http://toto.truc.com/narrow-styles.css" />
```

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                            |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| {{SpecName('CSS4 Media Queries', '#device-width', 'device-width')}} | {{Spec2('CSS4 Media Queries')}} | Dépréciation dans la spécification de niveau 4 pour les requêtes média. |
| {{SpecName('CSS3 Media Queries', '#device-width', 'device-width')}} | {{Spec2('CSS3 Media Queries')}} | Définition initiale.                                                    |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.device-width")}}
