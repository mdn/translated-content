---
title: video-dynamic-range
slug: Web/CSS/Reference/At-rules/@media/video-dynamic-range
original_slug: Web/CSS/@media/video-dynamic-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`video-dynamic-range`** permet de tester la combinaison de la luminosité, du rapport de contraste et de la profondeur de couleur pris en charge par le plan vidéo de l'{{glossary("user agent", "agent utilisateur")}} et le périphérique de sortie.

Certains agents utilisateur, notamment de nombreux téléviseurs, affichent la vidéo et les graphismes sur deux plans distincts (bi-plan) avec des caractéristiques d'écran différentes. La caractéristique `video-dynamic-range` permet de tester les caractéristiques du plan vidéo.

## Syntaxe

La caractéristique `video-dynamic-range` se définit à l'aide d'une valeur-clé choisie parmi la liste ci-dessous&nbsp;:

- `standard`
  - : Cette valeur correspond à tout périphérique visuel et exclut les appareils dépourvus de capacités visuelles. Un agent utilisateur ou un périphérique de sortie qui correspond à `high` correspondra aussi à la valeur `standard`.
- `high`
  - : Cette valeur correspond aux agents utilisateur et aux périphériques de sortie qui prennent en charge une forte luminosité de crête, un rapport de contraste élevé et une profondeur de couleur supérieure à 24&nbsp;bits ou 8&nbsp;bits par composant couleur du RVB. **Luminosité de crête** désigne la luminosité maximale qu'un appareil émetteur de lumière, comme un écran LCD, peut produire. Pour un appareil réfléchissant la lumière, comme du papier ou de l'encre électronique, la luminosité de crête correspond au point qui absorbe le moins de lumière. **Rapport de contraste** désigne le rapport entre la luminance de la couleur la plus claire et celle de la plus sombre que le système peut produire. Actuellement, il n'existe pas de méthode précise pour mesurer la luminosité de crête et le rapport de contraste, et la définition de ce qui est considéré comme élevé dépend de l'agent utilisateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
