---
title: First Meaningful Paint (FMP)
slug: Glossary/First_meaningful_paint
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

L'indicateur **<i lang="en">First Meaningful Paint</i>** (FMP) correspond à la peinture (<i lang="en">paint</i> en anglais) intervenant après laquelle le plus grand changement de mise en page situé au-dessus de la ligne de flottaison s'est produit et après le chargement des polices. C'est lorsque la réponse à la question «&nbsp;La page est elle utilisable&nbsp;?&nbsp;» devient «&nbsp;oui&nbsp;», lors de la première finition significative de la peinture.

FMP est très sensible aux petites différences lors du chargement de la page. Cela peut conduire à des résultats incohérents (bimodaux). La définition de cette métrique dépend de détails d'implémentation propres à chaque navigateur, ce qui signifie qu'elle ne peut pas être standardisée et n'est pas implémentée dans tous les navigateurs web.

> [!WARNING]
> First Meaningful Paint (FMP) est obsolète dans Lighthouse 6.0. À l'avenir, il est recommandé d'utiliser plutôt l'[API LargestContentfulPaint <sup>(angl.)</sup>](https://wicg.github.io/largest-contentful-paint/).

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("First Contentful Paint", "Premier rendu de contenu")}}
  - {{Glossary("Largest Contentful Paint", "Plus grand rendu de contenu")}}
