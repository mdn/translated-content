---
title: Caractéristique média CSS `prefers-reduced-data`
short-title: prefers-reduced-data
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-data
l10n:
  sourceCommit: 294f2e4cedd4de0d99948f3bf9b451454387fe35
---

{{SeeCompatTable}}

> [!WARNING]
> Cette fonctionnalité n'est prise en charge par aucun agent utilisateur et ses spécificités sont susceptibles d'évoluer.

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`prefers-reduced-data`** permet de détecter si un·e utilisateur·ice a demandé à ce que le contenu web consomme moins de données internet.

Le navigateur obtient généralement cette information en interrogeant les préférences du système d'exploitation sous-jacent pour la réduction des données.

## Syntaxe

- `no-preference`
  - : Indique qu'aucune préférence n'a été exprimée par l'utilisateur·ice dans le système. Ce mot-clé est évalué à faux dans un contexte booléen.
- `reduce`
  - : Indique que l'utilisateur·ice a exprimé une préférence pour un contenu alternatif allégé.

## Exemples

### Utilisation simple

Dans cet exemple, le fichier de police `montserrat-regular.woff2` n'est ni préchargé ni téléchargé si l'utilisateur·ice préfère réduire la consommation de données&nbsp;; dans ce cas, la [«&nbsp;pile de polices système&nbsp;» <sup>(angl.)</sup>](https://css-tricks.com/snippets/css/system-font-stack/) sert de police de secours&nbsp;:

#### HTML

```html
<head>
  <link
    rel="preload"
    href="fonts/montserrat-regular.woff2"
    as="font"
    media="(prefers-reduced-data: no-preference)"
    crossorigin />
  <link rel="stylesheet" href="style.css" />
</head>
```

#### CSS

```css
@media (prefers-reduced-data: no-preference) {
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    /* latin */
    src:
      local("Montserrat Regular"),
      local("Montserrat-Regular"),
      url("fonts/montserrat-regular.woff2") format("woff2");
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
}

body {
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    "Microsoft YaHei",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entête HTTP {{HTTPHeader("Save-Data")}}
