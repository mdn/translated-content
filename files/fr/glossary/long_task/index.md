---
title: Longue tâche
slug: Glossary/Long_task
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

Une **longue tâche** est une tâche qui prend plus de 50ms à s'exécuter.

Il s'agit d'une période ininterrompue où la {{Glossary("main thread", "file d'exécution principale")}} est occupée pendant 50ms ou plus. Des exemples courants incluent des gestionnaires d'évènements longs, des {{Glossary("reflow", "re-calculs de mise en page")}} coûteux et d'autres re-rendus, ainsi que le travail effectué par le navigateur entre différents tours de la boucle d'évènements qui dépasse 50ms.

## Voir aussi

- [L'API Long Tasks](/fr/docs/Web/API/PerformanceLongTaskTiming)
- [L'API Long Animation Frames](/fr/docs/Web/API/Performance_API/Long_animation_frame_timing)
