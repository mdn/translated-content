---
title: Accessibilité et motifs spatiaux
short-title: Motifs spatiaux
slug: Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

Ce document décrit des motifs visuels pouvant provoquer des symptômes physiques chez les personnes atteintes d'épilepsie photosensible, de troubles vestibulaires ou d'autres troubles perceptifs.

## Localisation spatiale

La NASA a mené des recherches sur la perception des couleurs et a constaté que le contraste de luminance joue un rôle majeur dans la façon dont les couleurs sont perçues. Les deux images ci-dessous proviennent de ces recherches, en particulier de l'article [«&nbsp;Designing With Blue&nbsp;» <sup>(angl.)</sup>](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php).

![Comparaison de la stabilité de la localisation spatiale du jaune et du rouge. Les deux sont à peu près isoluminants avec leur fond. Le décalage et l'écart entre les barres chromatiques et les barres noires sont physiquement identiques pour le jaune et le rouge, mais beaucoup moins visibles pour le jaune.](yellow_edge_3.gif) ![Comparaison de la stabilité de la localisation spatiale du jaune et du rouge. Les deux sont à peu près isoluminants avec leur fond. Le décalage et l'écart entre les barres chromatiques et les barres noires sont physiquement identiques pour le jaune et le rouge, mais beaucoup moins visibles pour le jaune.](yellow_edge_4.gif)

> **Localisation spatiale.** Les symboles ayant la même luminance que leur fond sont perçus comme moins bien localisés dans l'espace et dans le temps que les symboles avec un contraste de luminance élevé. Ils ont tendance à «&nbsp;flotter&nbsp;» visuellement ou à être «&nbsp;capturés&nbsp;» par des symboles adjacents à fort contraste de luminance. Ce phénomène est particulièrement problématique pour les combinaisons symbole/fond qui ne diffèrent que dans le canal bleu.

## Distance entre les bandes

Les crises photosensibles peuvent être déclenchées par des images statiques aussi bien que par des animations. Le mécanisme est mal compris, mais il serait lié à des «&nbsp;oscillations gamma&nbsp;» dans le cerveau, différentes des autres réponses neurologiques impliquées dans les crises photosensibles.

Les bandes et motifs sont typiques des images problématiques, et les bandes ont été particulièrement étudiées. Il existe un risque si l'image comporte plus de cinq paires clair/foncé, quelle que soit leur orientation (parallèles, radiales, courbes ou droites, ou formées par des éléments répétés).

En 2005, Arnold Wilkins, John Emmett et Graham Harding ont évalué les recommandations pour caractériser les images à motifs susceptibles de provoquer des crises. Ils ont simplifié ces recommandations à l'essentiel et proposé un [test <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x) simple mais efficace, publié dans l'article **[Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)**.

> [!NOTE]
> Les étapes pour évaluer un contenu se résument ainsi&nbsp;:
>
> Regardez l'écran&nbsp;:
>
> - Y a-t-il plus de cinq bandes&nbsp;?
> - Si oui, durent-elles plus de 0,5 seconde&nbsp;?
> - Si oui, la luminosité dépasse-t-elle la limite indiquée&nbsp;?
> - Si oui, catégorisez le mouvement du motif.
> - Les recommandations sont-elles enfreintes&nbsp;?
>
> Si oui, réduisez la luminosité.

## Texte et espacement

Les normes WCAG pour la perception du contraste ne prennent pas en compte l'effet de l'espacement. Par exemple, un texte bleu sur fond gris est plus lisible s'il est entouré localement de noir plutôt que de blanc. Il existe une adaptation «&nbsp;locale&nbsp;» aux couleurs. En résumé&nbsp;: l'espacement compte.

## Mathématiques

Le raisonnement spatial influence l'apprentissage des mathématiques&nbsp;; la façon dont les relations spatiales sont présentées a donc un impact sur la cognition. Le·La développeur·euse web peut agir sur la manière d'afficher les mathématiques. L'animation joue un rôle important&nbsp;: par exemple, la façon dont un objet apparaît lorsqu'il est tourné, vu sous différents angles, découpé, ou en relation avec d'autres objets dans l'espace, influence la compréhension spatiale des mathématiques.

## Braille

La technologie moderne permet à des non-spécialistes d'imprimer du braille. Par exemple, Adobe Illustrator permet de composer du braille ADA pour l'impression.

La capacité à représenter fidèlement les motifs spatiaux pour les personnes aveugles est essentielle à l'accessibilité. Par exemple, connaître le braille ne suffit pas&nbsp;: les points doivent être suffisamment espacés pour être lisibles de façon «&nbsp;humaine&nbsp;». Le toucher humain distingue facilement des points trop proches ou trop éloignés.

Il doit y avoir de l'espace autour du caractère braille. Un·e utilisateur·ice de braille ne pose pas son doigt «&nbsp;sur&nbsp;» un caractère, il·elle doit faire glisser son doigt dessus, comme une personne voyante fait glisser ses yeux sur un texte.

La notion d'espace peut varier selon le type MIME utilisé et sa version. Par exemple, les bordures SVG peuvent s'étendre vers l'intérieur et l'extérieur de ses dimensions, ou, dans les versions récentes, uniquement vers l'extérieur, ce qui réduit l'espace autour du SVG pour permettre la perception.

## Voir aussi

### MDN

- [Accessibilité&nbsp;: ce que les utilisateur·ice·s peuvent faire pour naviguer plus en sécurité](/fr/docs/Web/Accessibility/Guides/Browsing_safely)
- [Accessibilité web pour les crises et réactions physiques](/fr/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Accessibilité web&nbsp;: comprendre les couleurs et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)

### Braille

- [Partie 3&nbsp;: Guide étape par étape pour composer correctement du braille ADA dans Adobe Illustrator <sup>(angl.)</sup>](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Maths spatiales dans BrailleBlaster (4 sur 5) <sup>(angl.)</sup>](https://www.youtube.com/watch?v=yz9vefDsj1g)

### Mathématiques

- [Raisonnement spatial&nbsp;: pourquoi parler de maths, c'est plus que des chiffres <sup>(angl.)</sup>](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### Littérature scientifique

- [La constance des couleurs en contexte&nbsp;: rôles de l'adaptation locale et des niveaux de référence <sup>(angl.)</sup>](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Oscillations gamma et épilepsie photosensible <sup>(angl.)</sup>](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Caractérisation des images à motifs qui déclenchent des crises et optimisation des recommandations pour les prévenir <sup>(angl.)</sup>](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) de Arnold Wilkins, John Emmett et Graham Harding
