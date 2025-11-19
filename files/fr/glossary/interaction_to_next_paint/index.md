---
title: Interaction to Next Paint (INP)
slug: Glossary/Interaction_to_next_paint
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La mesure **Interaction to Next Paint** (abrégé <abbr>INP</abbr> pour «&nbsp;interaction vers la prochaine peinture&nbsp;» en français) évalue la réactivité d'un site web aux interactions utilisateur·ice·s (par exemple, lors d'un clic sur un lien, d'une pression sur un bouton ou de l'utilisation d'un contrôle personnalisé alimenté par JavaScript).

INP a été conçu par Google comme l'un des indicateurs [Core Web Vital <sup>(angl.)</sup>](https://web.dev/articles/vitals), remplaçant le {{Glossary("First Input Delay", "délai de première entrée")}} (<abbr>FID</abbr>) en mai 2024. Il existe deux différences majeures entre FID et INP qui rendent INP plus fiable pour mesurer la réactivité d'une page&nbsp;:

- FID mesure uniquement la première interaction utilisateur·ice, tandis que INP prend en compte toutes les interactions.
- FID mesure seulement le délai d'entrée de l'interaction, alors que INP mesure une période plus longue&nbsp;: il commence au délai d'entrée, puis inclut le temps de traitement des gestionnaires d'événements, et le temps de présentation du navigateur jusqu'à ce que la prochaine image soit peinte.

INP mesure la pire durée (hors valeurs aberrantes), en millisecondes, entre l'interaction utilisateur·ice sur une page web et la présentation de la prochaine image après traitement de cette interaction. Le défilement et le zoom ne sont pas inclus dans cette métrique. INP est calculé à l'aide de l'[API Event Timing](/fr/docs/Web/API/PerformanceEventTiming). Les opérations asynchrones comme les requêtes réseau ou la lecture de fichiers ne retardent généralement pas l'INP, car le rendu peut avoir lieu pendant leur traitement.

Toutes les interactions éligibles pendant la durée de vie de la page sont prises en compte. Pour les pages très interactives (50 interactions ou plus), le 98e centile est utilisé pour exclure les valeurs extrêmes qui ne reflètent pas la réactivité globale de la page.

Plus le délai est long, plus l'expérience utilisateur·ice est dégradée. L'[API Long Animation Frames](/fr/docs/Web/API/Performance_API/Long_animation_frame_timing) peut aider à identifier les causes d'un INP élevé.

## Voir aussi

- [Long animation frame timing](/fr/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [PerformanceEventTiming](/fr/docs/Web/API/PerformanceEventTiming)
- [INP <sup>(angl.)</sup>](https://web.dev/articles/inp) sur web.dev (2023)
- [Optimiser Interaction to Next Paint <sup>(angl.)</sup>](https://web.dev/articles/optimize-inp) sur web.dev (2023)
- [Interaction to Next Paint devient officiellement un Core Web Vital <sup>(angl.)</sup>](https://web.dev/blog/inp-cwv-launch) sur web.dev (2024)
