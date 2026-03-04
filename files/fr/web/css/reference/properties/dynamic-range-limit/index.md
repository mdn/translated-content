---
title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
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

La propriété `dynamic-range-limit` se définit avec l'une des valeurs suivantes ou avec un appel à la fonction {{CSSxRef("dynamic-range-limit-mix()")}}.

Les valeurs suivantes peuvent être utilisées&nbsp;:

- `standard`
  - : Définit la luminance maximale comme le **blanc de référence HDR**, qui correspond à la couleur CSS `white`.
- `no-limit`
  - : Définit la luminance maximale comme bien supérieure à celle du blanc de référence HDR. Le niveau exact n'est pas précisé.
- `constrained`
  - : Définit la luminance maximale comme légèrement supérieure à celle du blanc de référence HDR, afin qu'un mélange de contenu SDR (plage dynamique standard) et HDR puisse être affiché confortablement ensemble. Le niveau exact n'est pas précisé.

La fonction {{CSSxRef("dynamic-range-limit-mix()")}} permet de définir une luminance maximale personnalisée, en combinant différentes valeurs selon les pourcentages indiqués. Elle prend deux paires ou plus, chacune composée d'un mot-clé `dynamic-range-limit` (ou d'une fonction `dynamic-range-limit-mix()` imbriquée) et d'un pourcentage.

## Description

La plage dynamique correspond à la différence de luminance (luminosité) entre les parties les plus claires et les plus sombres d'un contenu. Elle se mesure en stops photographiques, où une augmentation d'un stop représente un doublement de la luminance.

### SDR, HDR et marge de manœuvre

Le contenu web traditionnel utilise **<i lang="en">Standard Dynamic Range</i> (<abbr>SDR</abbr>)**, où la couleur la plus lumineuse équivaut à la couleur CSS `white` (`#ffffff` in hexadecimal). La luminosité dans **High Dynamic Range (HDR)** peut dépasser ce blanc standard. En terminologie HDR, le CSS `white` standard est aussi appelé blanc de référence HDR.

La luminance maximale à laquelle le contenu peut être affiché dépend du contenu, du matériel d'affichage disponible et des préférences de l'utilisateur·ice. L'écart par lequel la luminance maximale du blanc peut dépasser le blanc de référence HDR est appelé **marge HDR** et s'exprime généralement en stops photographiques.

Le contenu SDR a toujours une marge HDR de `0` car son blanc le plus lumineux _est_ le blanc de référence HDR. Les anciens moniteurs ont aussi une marge HDR de `0` car ils ne peuvent pas afficher de couleurs plus lumineuses. Les moniteurs plus récents peuvent avoir une marge HDR supérieure à `0`, ce qui leur permet d'afficher les couleurs plus lumineuses disponibles dans le contenu HDR.

### Cas d'usage de `dynamic-range-limit`

La luminosité du contenu HDR peut être agressive pour l'utilisateur·ice. Cela se remarque particulièrement dans les applications où un mélange de contenu HDR et SDR est affiché, ce qui entraîne une incohérence de la luminosité.

La propriété `dynamic-range-limit` permet de contrôler la luminosité du contenu HDR. Par exemple, vous pouvez vouloir limiter la luminosité maximale de toutes les vignettes d'une galerie photo ou vidéo au blanc de référence HDR (c'est ce que fait la valeur de mot-clé `standard`), ou à une luminosité légèrement supérieure au blanc de référence HDR (en utilisant la valeur de mot-clé `constrained` ou une limite personnalisée créée avec {{CSSxRef("dynamic-range-limit-mix()")}}). Lorsqu'un·e utilisateur·ice consulte une image HDR seule, ou s'il·elle choisit une préférence pour l'activer, vous pouvez alors définir la propriété `dynamic-range-limit` de l'image sur `no-limit`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `dynamic-range-limit`

Dans notre [démonstration de la propriété `dynamic-range-limit` <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit), nous incluons une image HDR qui peut être survolée et sélectionnée pour faire évoluer la valeur de `dynamic-range-limit`. [Voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/dynamic-range-limit/) sur un écran capable d'afficher des couleurs HDR, et essayez-le. Le code est expliqué ci-dessous.

#### HTML

Dans le balisage, nous intégrons une image HDR avec un élément {{HTMLElement("img")}}. Nous ajoutons une valeur [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) de `0` pour rendre l'image sélectionnable au clavier.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="Une station de métro, avec des bandes lumineuses blanches éclairant le quai et des affiches publicitaires en arrière-plan"
  tabindex="0" />
```

#### CSS

Nous appliquons quelques styles de base à notre élément `<img>`, puis nous définissons sa propriété `dynamic-range-limit` sur `standard`, ce qui signifie qu'il ne sera pas affiché plus lumineux que le blanc de référence HDR. Nous ajoutons également la propriété {{CSSxRef("transition")}} pour que la valeur de `dynamic-range-limit` de l'élément `<img>` évolue sur `0,6` seconde lors d'un changement d'état.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

Au survol ou à la sélection, nous changeons la valeur de la propriété `dynamic-range-limit` de l'élément `<img>` à `no-limit` pour qu'il soit affiché aussi lumineux que le navigateur et l'écran le permettent.

```css
img:hover,
img:focus {
  dynamic-range-limit: no-limit;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

[`dynamic-range`](/fr/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) et [`video-dynamic-range`](/fr/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range) fonctionnalités de média
