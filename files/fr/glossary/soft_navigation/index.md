---
title: Navigation douce
slug: Glossary/Soft_navigation
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

Une navigation douce est une navigation côté client utilisée par les {{Glossary("SPA", "applications à page unique (SPA)")}} pour charger de nouveaux contenus.

En général, cliquer sur un lien sur une page web charge une nouvelle page complète (une «&nbsp;navigation dure&nbsp;»), ce qui peut entraîner un travail inutile considérable et une perte d'état lors de la navigation entre des pages similaires sur un site.

Les cadriciels (<i lang="en">frameworks</i> en anglais) JavaScript modernes utilisent le routage côté client pour intercepter les clics sur les liens, mettre à jour le contenu de la page actuelle (peut-être après avoir effectué des appels [de récupération](/fr/docs/Web/API/Fetch_API)), puis mettre à jour l'URL dans la barre d'adresse tout en ajoutant une entrée d'état d'historique pour la navigation résultante.

L'effet net semble être une navigation pour l'utilisateur·ice (mais espérons-le plus rapide qu'une navigation dure), que le navigateur considère comme la même page.

Les API {{DOMxRef("PerformanceSoftNavigation")}} et {{DOMxRef("InteractionContentfulPaint")}} permettent de mesurer les navigations douces en dehors d'un framework pour les métriques de performance.

## Voir aussi

- [Applications à page unique <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Single-page_application) (Wikipedia)
- [Comprendre les cadriciels JavaScript côté client](/fr/docs/Learn_web_development/Core/Frameworks_libraries)
- Termes de glossaire associés&nbsp;:
  - {{Glossary("SPA")}}
- Cadriciels SPA populaires&nbsp;:
  - [React <sup>(angl.)</sup>](https://react.dev/)
  - [Angular <sup>(angl.)</sup>](https://angular.dev/)
  - [Vue.JS <sup>(angl.)</sup>](https://vuejs.org/)
