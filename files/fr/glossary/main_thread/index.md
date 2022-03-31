---
title: Fil d'exécution principal
slug: Glossary/Main_thread
translation_of: Glossary/Main_thread
---
Le **fil d'exécution principal** (<i lang="en">Main Thread</i> en anglais) correspond à l'étape où le navigateur traite les évènements et la peinture demandée par l'internaute. Par défaut, le navigateur utilise un fil d'exécution unique pour lancer tout le JavaScript de la page, ainsi que pour créer la mise en page, le [<i lang="en">reflow</i>](/fr/docs/Glossary/Reflow), et la [gestion de la mémoire](/fr/docs/Web/JavaScript/Memory_Management). Cela signifie que les fonctions JavaScript exécutées sur le long terme peuvent bloquer le fil d'exécution, ce qui conduit à un affichage peu réactif et donc a une mauvaise expérience utilisateur.

À moins d'utiliser volontairement un [<i lang="en">web worker</i>](/fr/docs/Web/API/Web_Workers_API/Using_web_workers) tel qu'un [<i lang="en">service worker</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers), JavaScript se lance sur le fil d'exécution principal. Il est donc courant de voir des scripts retarder le traitement des évènements et de la peinture de la page. Moins il y a de travail à réaliser sur le fil d'exécution principal, mieux ce fil pourra réagir aux évènements générés par l'internaute, et plus la page apparaitra comme étant réactive pour les internautes.

## Voir aussi

- [JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous)
- [API Web worker](/fr/docs/Web/API/Web_Workers_API)
- [API Service worker](/fr/docs/Web/API/Service_Worker_API)
- [Fil d'exécution (entrée du glossaire)](/fr/docs/Glossary/Thread)
