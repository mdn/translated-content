---
title: Fil d'exécution principal
slug: Glossary/Main_thread
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **fil d'exécution principal** (<i lang="en">Main Thread</i> en anglais) est l'endroit où le navigateur traite les évènements utilisateur·ice·s et effectue la peinture. Par défaut, le navigateur utilise un seul processus pour exécuter tout le JavaScript de votre page, ainsi que pour réaliser la mise en page, les recalculs et la collecte des déchets. Cela signifie que des fonctions JavaScript longues à s'exécuter peuvent bloquer le processus, rendant la page non réactive et dégradant l'expérience utilisateur·ice.

À moins d'utiliser volontairement un [<i lang="en">web worker</i>](/fr/docs/Web/API/Web_Workers_API/Using_web_workers) tel qu'un [<i lang="en">service worker</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers), JavaScript se lance sur le fil d'exécution principal. Il est donc courant de voir des scripts retarder le traitement des évènements et de la peinture de la page. Moins il y a de travail à réaliser sur le fil d'exécution principal, mieux ce fil pourra réagir aux évènements générés par l'internaute, et plus la page apparaitra comme étant réactive pour les utilisateur·ice·s.

## Voir aussi

- [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS)
- [API Web worker](/fr/docs/Web/API/Web_Workers_API)
- [API Service worker](/fr/docs/Web/API/Service_Worker_API)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Thread", "Fil d'exécution")}}
