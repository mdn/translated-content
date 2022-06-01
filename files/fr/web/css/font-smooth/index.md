---
title: font-smooth
slug: Web/CSS/font-smooth
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/font-smooth
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`font-smooth`** permet de contrôler l'application d'algorithmes anti-crénelage (_anti-aliasing_) sur le rendu des fontes de caractères.

## Syntaxe

```css
/* Valeurs avec mot-clé */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* Valeurs de type <length> */
font-smooth: 2em;
```

> **Note :** Webkit implémente **`-webkit-font-smoothing`** avec d'autres valeurs, **là aussi c'est une propriété non-standard qui ne devrait pas être utilisée**.
>
> - `auto` : c'est le navigateur qui décide la meilleure approche
> - `none` - l'anti-crénelage est désactivé.
> - `antialiased` - lisse les caractères au niveau du pixel (et non par sous-échantillonnage). Pour des textes clairs sur fonds sombres, cette méthode fait paraître le texte plus clair.
> - `subpixel-antialiased` - sur la plupart des affichages non-Retina, cela donnera le texte le plus lisse.

> **Note :** Firefox implémente **`-moz-osx-font-smoothing`** avec d'autres valeurs, **là aussi c'est une propriété non-standard qui ne devrait pas être utilisée**.
>
> - `auto` - le choix est laissé au navigateur. Cela correspond généralement à `grayscale`.
> - `grayscale` - On applique un anti-crénelage par niveau de gris (et non par sous-échantillonnage). Pour des textes clairs sur fonds sombres, cette méthode fait paraître le texte plus clair.

## Spécifications

Bien que mentionnée dans les premiers brouillons pour [CSS3 Fonts](https://www.w3.org/TR/WD-font/#font-smooth), `font-smooth` a été retirée de cette spécification et ne fait plus partie du standard.



- Valeur initiale : `auto`
- S'applique à tous les éléments et au contenu généré
- Héritée : oui
- Valeurs relatives : par rapport à la taille de police utilisée sur l'élément parent
- Type de média : Visuel
- Valeur calculée : comme la valeur définie



## Compatibilité des navigateurs

{{Compat("css.properties.font-smooth")}}

## Voir aussi

- [Il faut arrêter de vouloir « réparer » le lissage des fontes – UsabilityPost (en anglais)](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
