---
title: '-moz-device-pixel-ratio'
slug: Web/CSS/@media/-moz-device-pixel-ratio
tags:
  - '@media'
  - CSS
  - Caractéristique média
  - Déprécié
  - Non-standard
translation_of: Web/CSS/@media/-moz-device-pixel-ratio
---
{{cssref}} {{Non-standard_header}} {{Deprecated_header}}{{h3_gecko_minversion("-moz-device-pixel-ratio", "2.0")}} {{deprecated_inline("16")}}

La [caractéristique média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries#ciblfer_des_caract%c3%a9ristiques_m%c3%a9dia) **`-moz-device-pixel-ratio`**, associée à [`@media`](/fr/docs/Web/CSS/@media "The @media CSS at-rule lets you specify declarations that depend on the condition of a media query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule."), est une caractéristique propre à Gecko et peut être utilisée pour appliquer certains styles en fonctions du nombres de pixels physiques par pixel CSS.

> **Attention :** Ne pas utiliser cette fonctionnalité ! La caractéristique [`resolution`](/fr/docs/Web/CSS/@media/resolution) et l'unité `dppx` permettent d'obtenir le même mécanisme.
>
> `-moz-device-pixel-ratio` peut être utilisée si besoin d'être compatible avec des versions de Firefox antérieures à la version 16 et `-webkit-device-pixel-ratio` peut être utilisée avec les navigateurs WebKit qui ne prennent pas en charge `dppx`. Par exemple :
>
> ```css
> @media (-webkit-min-device-pixel-ratio: 2), /* Navigateurs basés sur Webkit */
>        (min--moz-device-pixel-ratio: 2),    /* Anciens Firefox (avant Firefox 16) */
>        (min-resolution: 2dppx),             /* La méthode standard */
>        (min-resolution: 192dpi)             /* Utilisée si dppx n'est pas gérée */
> ```
>
> Voir [cet article du CSSWG](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) pour les bonnes pratiques quant à la compatibilité de `resolution` et `dppx`.

> **Note :** Cette caractéristique est également implémentée par Webkit et [IE 11 pour Windows Phone 8.1](<https://msdn.microsoft.com/en-us/library/ie/dn760733(v=vs.85).aspx>) sous le nom `-webkit-device-pixel-ratio`. Les versions préfixées pour les seuils minimal / maximal sont intitulées `min--moz-device-pixel-ratio` et `max--moz-device-pixel-ratio` sous Gecko, tandis que sous Webkit, elles sont intitulées  `-webkit-min-device-pixel-ratio` et `-webkit-max-device-pixel-ratio`.

## Syntaxe

- {{cssxref("&lt;number&gt;")}}
  - : Le nombre de pixels physiques pour un pixel CSS.

**Média :** {{cssxref("Media/Visual")}}
**Gestion des préfixes min/max :** Oui

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.-moz-device-pixel-ratio")}}
