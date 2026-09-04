---
title: Longue tâche
slug: Glossary/Long_task
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **longue tâche** est une tâche qui prend plus de 50 ms à s'exécuter.

Il s'agit d'une période ininterrompue où la {{Glossary("main thread", "file d'exécution principale")}} est occupée pendant 50 ms ou plus. Des exemples courants incluent des gestionnaires d'événements longs, des {{Glossary("reflow", "reflows")}} coûteux et d'autres re-rendus, ainsi que le travail effectué par le navigateur entre différents tours de la boucle d'événements qui dépasse 50 ms.

## Voir aussi

- [L'API Long Tasks](/fr/docs/Web/API/PerformanceLongTaskTiming)
- [L'API Long Animation Frames](/fr/docs/Web/API/Performance_API/Long_animation_frame_timing)
