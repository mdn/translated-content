---
title: Time to interactive
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Le **Time to Interactive** (TTI) est une métrique non standardisée des performances web indiquant la «&nbsp;progression&nbsp;» du chargement. Elle correspond au moment où la dernière [tâche longue](/fr/docs/Web/API/PerformanceLongTaskTiming) s'est terminée et a été suivie de 5 secondes d'inactivité du réseau et du fil de chargement principal.

Proposé par le <i lang="en">Web Incubator Community Group</i> en 2018, le **TTI** est destiné à fournir une métrique qui décrit quand une page ou une application contient un contenu utile et que le fil de chargement principal est inactif et libre de répondre aux interactions des internautes, y compris l'enregistrement des gestionnaires d'événements.

## Mise en garde

TTI est calculé en exploitant les informations de l'API [<i lang="en">Long Tasks</i>](/fr/docs/Web/API/PerformanceLongTaskTiming). Bien que disponible dans certains outils de surveillance des performances, TTI ne fait partie d'aucune spécification web officielle au moment de la rédaction de cette entrée du glossaire.

## Voir aussi

- [Définition du TTI <sup>(angl.)</sup>](https://github.com/WICG/time-to-interactive) par le Web Incubator Community Group
- [Time to Interactive — se concentrer sur des métriques centrées sur l'humain <sup>(angl.)</sup>](https://calibreapp.com/blog/time-to-interactive) par Radimir Bitsov
- {{Glossary("Time_to_first_byte", "Time to first byte (TTFB)")}}
