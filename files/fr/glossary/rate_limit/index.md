---
title: Limitation de débit
slug: Glossary/Rate_limit
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En informatique, en particulier dans le domaine des réseaux, la **limitation de débit** (<i lang="en">rate limit</i> en anglais) consiste à contrôler combien d'opérations peuvent être effectuées dans un laps de temps donné, généralement pour éviter de surcharger le système et provoquer une dégradation des performances. Par exemple, un serveur peut limiter le nombre de requêtes qu'il acceptera d'un même client sur une période donnée, ce qui optimise non seulement les performances globales du serveur, mais atténue aussi les attaques comme les {{Glossary("Denial of Service", "attaques DoS")}}.

La limitation de débit est généralement synonyme de {{Glossary("throttle", "régulation")}}, bien que l'{{Glossary("debounce", "anti-rebond")}} soit une autre stratégie possible qui offre de meilleures sémantiques et une meilleure expérience utilisateur dans certains cas.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Debounce", "Anti-rebond")}}
  - {{Glossary("Throttle", "Régulation")}}
- L'état HTTP {{HTTPStatus("429", "429 Too Many Requests")}}
- [Qu'est-ce que la limitation de débit&nbsp;? | Limitation de débit et robots <sup>(angl.)</sup>](https://www.cloudflare.com/en-gb/learning/bots/what-is-rate-limiting/) sur cloudflare.com
