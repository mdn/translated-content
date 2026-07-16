---
title: Propriété CSS `dynamic-range-limit`
short-title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: 468c261821b7443db6fdb748f733f21186597501
---

La propriété [CSS](/fr/docs/Web/CSS) **`dynamic-range-limit`** définit la luminance maximale autorisée pour le contenu <abbr>HDR</abbr> pour <i lang="en">High Dynamic Range</i>, signifiant Grande Plage Dynamique.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
dynamic-range-limit: standard;
dynamic-range-limit: no-limit;
dynamic-range-limit: constrained;

/* Valeurs de la fonction dynamic-range-limit-mix() */
dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);

/* Valeurs globales */
dynamic-range-limit: inherit;
dynamic-range-limit: initial;
dynamic-range-limit: revert;
dynamic-range-limit: revert-layer;
dynamic-range-limit: unset;
```

### Valeurs

- `standard`
  - : Définit la luminance maximale comme le blanc de référence à Haute Plage Dynamique (<abbr>HDR</abbr>), qui correspond à la couleur CSS `white`.
- `no-limit`
  - : Définit la luminance maximale comme bien supérieure à celle du blanc de référence HDR. Le niveau exact n'est pas précisé. C'est la valeur initiale.
- `constrained`
  - : Définit la luminance maximale comme légèrement supérieure à celle du blanc de référence HDR, afin qu'un mélange de contenu SDR (plage dynamique standard) et HDR puisse être affiché confortablement ensemble. Le niveau exact n'est pas précisé.
- {{CSSxRef("dynamic-range-limit-mix()")}}
  - : Définit une luminance maximale personnalisée, en combinant différentes valeurs selon les pourcentages indiqués. Elle prend deux paires ou plus, chacune composée d'un mot-clé `dynamic-range-limit` (ou d'une fonction `dynamic-range-limit-mix()` imbriquée) et d'un pourcentage.

## Description

La propriété `dynamic-range-limit` définit la luminance maximale autorisée sur les écrans capables d'afficher des couleurs à haute plage dynamique. Une **plage dynamique** est la différence de luminance (luminosité) entre les parties les plus claires et les plus sombres d'un contenu. Elle se mesure en stops photographiques, où une augmentation d'un stop représente un doublement de la luminance.

### SDR, HDR et marge de manœuvre

Le contenu web traditionnel utilise **<i lang="en">Standard Dynamic Range</i> (<abbr>SDR</abbr>)**, où la couleur la plus lumineuse équivaut à la couleur CSS `white` (`#ffffff` en hexadécimal). La luminosité dans **High Dynamic Range (HDR)** peut dépasser ce blanc standard. En terminologie HDR, le CSS `white` standard est aussi appelé blanc de référence HDR.

La luminance maximale à laquelle le contenu peut être affiché dépend du contenu, du matériel d'affichage disponible et des préférences de l'utilisateur·ice. L'écart par lequel la luminance maximale du blanc peut dépasser le blanc de référence HDR est appelé **marge HDR** et s'exprime généralement en stops photographiques.

Le contenu SDR a toujours une marge HDR de `0`, car son blanc le plus lumineux _est_ le blanc de référence HDR. Les anciens moniteurs ont aussi une marge HDR de `0`, car ils ne peuvent pas afficher de couleurs plus lumineuses. Les moniteurs plus récents peuvent avoir une marge HDR supérieure à `0`, ce qui leur permet d'afficher les couleurs plus lumineuses disponibles dans le contenu HDR.

### Cas d'usage de `dynamic-range-limit`

La luminosité du contenu HDR peut être agressive pour l'utilisateur·ice. Cela se remarque particulièrement dans les applications où un mélange de contenu HDR et SDR est affiché, ce qui entraîne une incohérence de la luminosité.

La propriété `dynamic-range-limit` permet de contrôler la luminosité du contenu HDR. Par exemple, vous pouvez vouloir limiter la luminosité maximale de toutes les vignettes d'une galerie photo ou vidéo au blanc de référence HDR (c'est ce que fait la valeur de mot-clé `standard`), ou à une luminosité légèrement supérieure au blanc de référence HDR (en utilisant la valeur de mot-clé `constrained` ou une limite personnalisée créée avec {{CSSxRef("dynamic-range-limit-mix()")}}). Lorsqu'un·e utilisateur·ice consulte une image HDR seule, ou s'il·elle choisit une préférence pour l'activer, vous pouvez alors définir la propriété `dynamic-range-limit` de l'image sur `no-limit`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `dynamic-range-limit`

Cet exemple démontre l'utilisation de base de la propriété `dynamic-range-limit` et la différence entre les images HDR et SDR.

#### HTML

Dans le balisage, nous intégrons une image HDR avec un élément {{HTMLElement("img")}}. Nous ajoutons une valeur [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) de `0` pour rendre l'image sélectionnable au clavier.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/ultra-hdr.jpg"
  alt="Une station de métro, avec des bandes lumineuses blanches
       éclairant le quai et des affiches publicitaires en arrière-plan"
  tabindex="0" />
```

#### CSS

Nous limitons la luminosité de l'image à celle du SDR en définissant la propriété `dynamic-range-limit` sur `standard`, ce qui fait que l'image n'est pas plus lumineuse que le blanc de référence HDR. Nous définissons également une propriété {{CSSxRef("transition")}} afin que la valeur de `dynamic-range-limit` de l'élément `<img>` évolue sur `0,6` seconde lors d'un changement d'état.

```css
img {
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Au survol ou à la sélection, nous changeons la valeur de la propriété `dynamic-range-limit` de l'élément `<img>` à `no-limit` pour qu'il s'affiche aussi lumineux que le navigateur et l'écran le permettent.

```css
img:hover,
img:focus {
  dynamic-range-limit: no-limit;
}
```

```css hidden
img {
  max-height: 100vh;
}
@media not (dynamic-range: high) {
  body::before {
    content: "Votre appareil peut ne pas afficher l'image à pleine luminosité.";
    background-color: wheat;
    display: block;
    text-align: center;
  }
}
@supports not (dynamic-range-limit: standard) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété dynamic-range-limit.";
    background-color: wheat;
    display: block;
    text-align: center;
  }
}
```

#### Résultats

{{EmbedLiveSample("Exemples", 300, 400)}}

L'image est ultra HDR mais est limitée à la luminosité SDR par défaut. Survolez ou sélectionnez l'image. Remarquez comment elle passe à des couleurs HDR vives sur les écrans compatibles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`dynamic-range`](/fr/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) et les fonctionnalités de média [`video-dynamic-range`](/fr/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range)
