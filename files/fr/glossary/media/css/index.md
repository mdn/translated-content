---
title: Média (CSS)
slug: Glossary/Media/CSS
---

{{GlossarySidebar}}

Dans le contexte de {{Glossary("CSS")}} (Cascading Style Sheets), le terme **_média_** fait référence à la destination vers laquelle le document doit être dessiné par le {{Glossary("rendering engine")}}. Il s'agit généralement d'un écran—mais il peut également s'agir d'une imprimante, d'un synthétiseur vocal, d'un afficheur Braille ou d'un autre type de périphérique.

CSS offre plusieurs fonctionnalités qui vous permettent d'ajuster les styles de votre document—ou même d'offrir différents styles—en fonction du **type** de support (tel que l'écran ou impression, pour n'en nommer que deux) ou des **capacités** de support (telles que la largeur, la résolution ou d'autres valeurs) de l'appareil du spectateur.

## Apprendre plus

### Culture générale

- [Utilisation des requêtes multimédias](/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries)

### Référence technique

- [Requêtes médias](/fr/docs/Web/CSS/CSS_media_queries)
  - : Définissez un ensemble de caractéristiques ou de paramètres requis pour appliquer les styles CSS qui sont spécifiés entre les accolades de la requête multimédia; par exemple: appliquer uniquement certains styles CSS pour les appareils inférieurs à 768 pixels.
- {{cssxref("@media")}} [at-rule](/fr/docs/Web/CSS/At-rule)
  - : Appliquez conditionnellement une partie d'une [feuille de style](/fr/docs/Learn/CSS/First_steps/How_CSS_works#how_to_apply_your_css_to_your_html), en fonction du résultat d'une requête multimédia.
- {{domxref("Window.matchMedia()")}}
  - : Testez le périphérique de visualisation par rapport à une requête multimédia.
