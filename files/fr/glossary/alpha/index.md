---
title: Alpha (canal alpha)
slug: Glossary/Alpha
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Le **canal alpha** spécifie le degré d'opacité d'une [`<color>`](/fr/docs/Web/CSS/color_value) (couleur). Les couleurs sont représentées sous forme numérique comme un ensemble de nombres, chacun représentant la force ou le niveau d'intensité d'un composant donné de la couleur. Chacun de ces composants est appelé un **canal**. Dans un fichier d'image typique, les canaux de couleur décrivent la quantité de rouge, de vert et de bleu utilisée pour composer la couleur finale. Pour représenter une couleur à travers laquelle le fond peut être vu dans une certaine mesure, un quatrième canal est ajouté à la couleur&nbsp;: le canal alpha.

Par exemple, la couleur `#8921F2` (également décrite comme `rgb(137, 33, 242)` ou `hsl(270, 89%, 54)`) est une jolie nuance de violet. Ci-dessous, vous voyez une petite case de cette couleur dans le coin supérieur gauche et une case de la _même_ couleur mais avec un canal alpha défini à 0,5 (50% d'opacité), `#8921F280`, où `80` est l'équivalent hexadécimal de 50%. Cette couleur est également décrite comme `rgb(137 33 242 / 0.5)` ou `hsl(270 89% 54 / 0.5)`. Les deux cases sont dessinées au-dessus d'un paragraphe de texte.

![Image montrant l'effet d'un canal alpha sur une couleur.](alpha-channel-example.png)

Comme vous pouvez le voir, la couleur sans canal alpha bloque complètement le texte de fond, tandis que la boîte avec le canal alpha le laisse visible à travers la couleur de fond violet.

## Voir aussi

- [Couleurs CSS](/fr/docs/Web/CSS/CSS_colors)
- [Introduction aux unités et valeurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Guide des types et formats des fichiers d'images](/fr/docs/Web/Media/Guides/Formats/Image_types)
- [Alpha blending](https://fr.wikipedia.org/wiki/Alpha_blending) sur Wikipedia
- [Modèle de couleur RVBA](https://fr.wikipedia.org/wiki/RVBA) sur Wikipedia
- [Chaîne (image numérique)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) (en anglais) sur Wikipedia
