---
title: Premier rendu de contenu (FCP)
slug: Glossary/First_contentful_paint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

Le **premier rendu de contenu** (<abbr lang="en">FCP</abbr> pour <i lang="en">First Contentful Paint</i> en anglais) est une mesure du moment où le navigateur restitue son premier contenu du DOM, fournissant un premier retour à l'internaute que la page est en cours de chargement. La réponse à la question «&nbsp;Est-ce que quelque chose se passe&nbsp;?&nbsp;» devient «&nbsp;oui&nbsp;» lorsque le premier {{Glossary("Contentful paint", "rendu de contenu")}} est terminé.

L'horodatage <i lang="en">First Contentful Paint</i> indique le moment où le navigateur a rendu pour la première fois un texte, une image (y compris les images d'arrière-plan), une vidéo, un canevas dans lequel quelque chose a été dessiné, ou un SVG non vide. Cela exclut tout contenu d'iframe, mais inclut le texte avec des polices web en attente de chargement. C'est la première fois que les utilisateur·ice·s peuvent commencer à consulter le contenu de la page.

## Voir aussi

- L'interface API {{DOMxRef("PerformancePaintTiming")}}
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Contentful paint", "Rendu de contenu")}}
  - {{Glossary("First Paint", "Premier rendu")}}
  - {{Glossary("Largest Contentful Paint", "Plus grand rendu de contenu")}}
  - {{Glossary("First Meaningful Paint", "Premier rendu significatif")}}
- [First Contentful Paint <sup>(angl.)</sup>](https://web.dev/articles/fcp) sur web.dev (2023)
