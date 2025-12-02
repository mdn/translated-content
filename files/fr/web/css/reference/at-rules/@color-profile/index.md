---
title: "@color-profile"
slug: Web/CSS/Reference/At-rules/@color-profile
original_slug: Web/CSS/@color-profile
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@color-profile`** définit et nomme un profil de couleur qui peut être utilisé ensuite avec la fonction {{cssxref("color_value/color", "color()")}} afin d'indiquer une couleur.

## Syntaxe

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
```

### Paramètres

- nom du profil
  - : Soit un {{cssxref("&lt;dashed-ident&gt;")}} ou l'identifiant `device-cmyk`.

### Descripteurs

- `src`
  - : Indique l'URL où sont situées les informations sur le profil de couleur.
- `rendering-intent`
  - : Si le profil de couleur contient plusieurs indications de rendu, ce descripteur permet de sélectionner celui à utiliser pour définir la correspondance de la couleur sur {{Glossary("Gamut", "les gamuts")}} plus petits pour lesquels ce profil est défini.

    Si ce descripteur est utilisé, sa valeur doit être l'un des mots-clés suivants&nbsp;:
    - `relative-colorimetric`
      - : La colorimétrie relative au média implique de garder inchangées les couleurs sources qui sont présentes dans le {{glossary("gamut")}} du médium cible, relativement aux points blancs respectifs du média. Les couleurs sources situées en dehors du gamut du medium cible sont ramenées aux couleurs des bords du gamut en utilisant différentes méthodes.
    - `absolute-colorimetric`
      - : La colorimétrie absolue ICC implique de garder inchangées les couleurs sources qui sont présentes dans le {{glossary("gamut")}} du médium cible, relativement au blanc adopté (un diffuseur parfaitement réfléchissant). Les couleurs sources situées en dehors du gamut du medium cible sont ramenées aux couleurs des bords du gamut en utilisant différentes méthodes.
    - `perceptual`
      - : Cette méthode est souvent le choix préféré pour les images, notamment lorsqu'il y a des différences conséquentes entre la source et la destination (par exemple une image sur un écran, reproduite sur une impression réfléchissante). Elle prend les couleurs de l'image source et optimise l'apparence pour le medium de destination en utilisant des méthodes propriétaires.
    - `saturation`
      - : Cette option vise à préserver la saturation relative (chroma) de l'original et à conserver les couleurs unies pures. Toutefois, certains problèmes d'interopérabilité existent comme avec l'indication `perceptual`.

## Syntaxe formelle

{{csssyntax}}

## Exemples

Cet exemple démontre l'utilisation de l'impression offset selon la norme ISO 12647-2:2004 en utilisant les données de caractérisation CGATS/SWOP TR005 2007 sur du papier de grade 5 avec une limite d'encre de 300 % de couverture totale, et un remplacement de composant gris moyen (GCR). Cet exemple est tiré de la spécification.

Le descripteur `src` spécifie l'URL à partir de laquelle récupérer les informations sur le profil de couleur.

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--swop5c 0% 70% 20% 0%);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
