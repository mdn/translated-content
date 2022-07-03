---
title: theme-color
slug: Web/HTML/Element/meta/name/theme-color
translation_of: Web/HTML/Element/meta/name/theme-color
browser-compat: html.elements.meta.name.theme-color
---
{{HTMLRef}}

La valeur de **`theme-color`** comme attribut [`name`](/fr/docs/Web/HTML/Element/meta#attr-name) de l'élément [`<meta>`](/fr/docs/Web/HTML/Element/meta), indique une suggestion de couleur que les agents utilisateur devraient utiliser pour personnaliser l'affichage de la page ou l'interface utilisateur environnante. Si elle est utilisée, l'attribut [`content`](http://localhost:5042/fr/docs/Web/HTML/Element/meta#attr-content) devra avoir une valeur CSS de type [`<color>`](/fr/docs/Web/CSS/color_value).

## Exemple

```html
<meta name="theme-color" content="#4285f4">
```

L'image qui suit illustre l'effet de l'élément [`<meta>`](/fr/docs/Web/HTML/Element/meta) avec `theme-color` pour un document affiché dans Chrome sur Android.

![Image illustrant l'effet de `theme-color`](theme-color.png)

_Crédits image&nbsp;: [Couleurs des icônes et du navigateur](https://web.dev/icons-and-browser-colors/), créée et partagée par Google et utilisée selon la [licence Creative Commons 4.0 avec attribution](https://creativecommons.org/licenses/by/4.0/)._

Il est possible de fournir un type de média ou une requête média avec l'attribut [`media`](/fr/docs/Web/HTML/Element/meta#attr-media) afin que la couleur soit utilisée pour une condition donnée. Par exemple&nbsp;:

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="white">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black">
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
