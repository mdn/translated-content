---
title: font-smooth
slug: Web/CSS/Reference/Properties/font-smooth
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}

La propriété [CSS](/fr/docs/Web/CSS) **`font-smooth`** permet de contrôler l'application d'algorithmes anti-crénelage (<i lang="en">anti-aliasing</i> en anglais) sur le rendu des fontes de caractères.

## Syntaxe

```css
/* Valeurs avec mot-clé */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* Valeurs de type <length> */
font-smooth: 2em;

/* Valeurs globales */
font-smooth: inherit;
font-smooth: initial;
font-smooth: revert;
font-smooth: revert-layer;
font-smooth: unset;
```

> [!NOTE]
> WebKit implémente une propriété similaire, mais avec des valeurs différentes&nbsp;: **`-webkit-font-smoothing`**. Elle ne fonctionne que sur macOS.
>
> - `auto` — c'est le navigateur qui décide la meilleure approche (Utilise l'anti-crénelage par sous-pixels lorsque disponible&nbsp;; c'est la valeur par défaut).
> - `none` — l'anti-crénelage est désactivé.
> - `antialiased` — lisse les caractères au niveau du pixel (et non par sous-échantillonnage). Pour des textes clairs sur fonds sombres, cette méthode fait paraître le texte plus clair.
> - `subpixel-antialiased` — sur la plupart des affichages non-Retina, cela donnera le texte le plus lisse.

> [!NOTE]
> Firefox implémente une propriété similaire, mais avec des valeurs différentes&nbsp;: **`-moz-osx-font-smoothing`**. Elle ne fonctionne que sur macOS.
>
> - `auto` — le choix est laissé au navigateur. Cela correspond généralement à `grayscale`.
> - `grayscale` — On applique un anti-crénelage par niveau de gris (et non par sous-échantillonnage). Pour des textes clairs sur fonds sombres, cette méthode fait paraître le texte plus clair.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <length>`)}}

## Exemples

### Exemple d'utilisation simple

L'exemple suivant montre les équivalents Safari/Chromium et Firefox qui activent le lissage des fontes sur macOS. Dans les deux cas, la fonte lissée devrait paraître légèrement plus fine.

Pour celles et ceux qui ne sont pas sur macOS, voici une capture d'écran (la version interactive apparaît plus bas)&nbsp;:

![Deux exemples de textes, l'un avec la propriété font-smooth et l'autre sans](smoothing.png)

#### HTML

```html
<p>Sans lissage des fontes</p>

<p class="smoothed">Avec lissage des fontes</p>
```

#### CSS

```css
html {
  background-color: black;
  color: white;
  font-size: 3rem;
}

p {
  text-align: center;
}

.smoothed {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### Résultat

{{EmbedLiveSample("Exemple d'utilisation simple", "100%", 260)}}

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Il faut arrêter de vouloir «&nbsp;réparer&nbsp;» le lissage des fontes <sup>(angl.)</sup>](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/) par Dmitry Fadeyev (2012)
- [Laissez-faire sur le lissage des fontes et l'anti-crénelage <sup>(angl.)</sup>](https://www.zachleat.com/web/font-smooth/) par Zach Leatherman (2017)
- [Améliorer le rendu du texte (Une remise à zéro moderne de CSS) <sup>(angl.)</sup>](https://www.joshwcomeau.com/css/custom-css-reset/#five-improve-text-rendering-6) par Josh W. Comeau (2021)
- [Que se passe-t-il avec le lissage des fontes WebKit&nbsp;? <sup>(angl.)</sup>](https://dbushell.com/2024/11/05/webkit-font-smoothing/) par David Bushell (2024)
