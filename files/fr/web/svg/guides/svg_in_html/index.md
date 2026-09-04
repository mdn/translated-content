---
title: Introduire du SVG dans HTML
slug: Web/SVG/Guides/SVG_in_HTML
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Cet article et son exemple associé montrent comment utiliser du [SVG](/fr/docs/Web/SVG) en ligne.

## Exemple simple

Pour inclure un SVG en ligne dans un fichier HTML, collez l'intégralité du fichier SVG dans le fichier HTML.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Démonstration SVG</title>
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" role="img">
      <title>Un dégradé</title>
      <linearGradient id="gradient">
        <stop class="begin" offset="0%" stop-color="red" />
        <stop class="end" offset="100%" stop-color="black" />
      </linearGradient>
      <rect x="0" y="0" width="100" height="100" fill="url(#gradient)" />
      <circle cx="50" cy="50" r="30" fill="url(#gradient)" />
    </svg>
  </body>
</html>
```

## Discussion

La page est composée de HTML et CSS classiques avec un seul SVG. La seule partie intéressante est l'élément `<svg>` qu'elle contient. Cet élément et ses enfants sont déclarés dans l'espace de nommage SVG. L'élément contient un dégradé et deux formes remplies avec ce dégradé. Les bornes de couleur du dégradé sont définies par CSS.

Il y a trois attributs et un élément imbriqué à noter&nbsp;:

1. L'attribut {{SVGAttr("viewBox")}} établit un système de coordonnées logiques auquel les coordonnées de l'image SVG sont relatives. Dans ce cas, notre image s'étend dans une zone d'affichage de 100 sur 100.

2. L'attribut {{SVGAttr("preserveAspectRatio")}} indique que le {{Glossary("aspect ratio", "rapport d'aspect")}} doit être préservé en centrant l'image dans l'espace disponible, en ajustant la hauteur ou la largeur au maximum, puis en coupant tout débordement.

3. L'ajout de [`role="img"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) garantit que les technologies d'assistance traitent le SVG comme une image.

4. Un {{SVGElement("title")}} dans un SVG fournit une description accessible et courte du graphique. Le texte du titre n'est pas affiché, mais les navigateurs peuvent l'afficher comme info-bulle lors du survol du SVG. Le `<title>` doit être le premier élément après la balise d'ouverture `<svg>`.

## Bonnes pratiques

Lorsqu'un SVG est inclus via un élément {{HTMLElement('img')}}, l'attribut `alt` fournit un texte alternatif rendant l'image accessible. Le SVG en ligne ne prend pas en charge l'attribut `alt`, mais il propose d'autres moyens de le rendre accessible. Avec les SVG en ligne, le code source est disponible dans le DOM, ce qui signifie que toute la structure du SVG est accessible au modèle d'accessibilité (AOM). L'ajout de l'élément `<title>` fournit ce texte alternatif.

Si l'image transmet plus qu'un court titre, ajoutez une description plus longue avec l'élément {{SVGElement("desc")}}. L'élément `<desc>` fournit une description accessible et longue. Comme pour `<title>`, le texte de `<desc>` n'est pas affiché à l'écran.

Si le SVG peut être étiqueté par un texte visible, référencez ce texte avec l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Vous pouvez aussi inclure l'attribut `aria-labelledby` avec l'[`id`](/fr/docs/Web/SVG/Reference/Attribute/id) du `<title>`.

```html
<svg viewBox="0 0 100 125" role="img" aria-labelledby="svgTitle svgDescription">
  <title id="svgTitle">Manuel</title>
  <desc id="svgDescription">
    Un livret anonyme de douze pages ouvert à la page du milieu
  </desc>
  <defs>
    <style>
      rect {
        fill: #cccccc;
        stroke: #666666;
        transform-origin: top;
      }
    </style>
  </defs>

  <rect width="36" height="60" x="13" y="18" ry="2" transform="skewy(24deg)" />
  <rect width="39" height="60" x="11" y="20" ry="2" transform="skewY(18deg)" />
  <rect width="42" height="90" x="8" y="22" ry="2" transform="skewY(12deg)" />
  <rect width="36" height="60" x="50" y="18" ry="2" transform="skewY(-24deg)" />
  <rect width="39" height="60" x="50" y="20" ry="2" transform="skewY(-18deg)" />
  <rect width="42" height="90" x="50" y="22" ry="2" transform="skewY(-12deg)" />
</svg>
```

Si le SVG peut être décrit par un texte visible, ce texte peut être référencé avec l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby). Si `aria-describedby` est utilisé, il prendra le dessus sur `<desc>`.

Dans notre exemple, nous avons inclus à la fois la description et le titre dans l'attribut `aria-labelledby`, car il offre un meilleur support pour les technologies d'assistance que `aria-describedby`.

## Voir aussi

- [Premiers pas avec SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started)
