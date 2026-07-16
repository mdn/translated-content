---
title: Contexte d'application
slug: Glossary/Application_context
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **contexte d'application** désigne le {{Glossary("browsing context", "contexte de navigation")}} de plus haut niveau d'une [application web](/fr/docs/Web/Progressive_web_apps).
Il détermine comment le contexte de navigation d'une application, tel qu'un onglet ou une fenêtre, est présenté et se comporte.

Les développeur·euse·s web définissent le contexte d'application dans le [fichier manifeste de l'application web](/fr/docs/Web/Progressive_web_apps/Manifest).
En utilisant le membre [`scope`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/scope) du manifeste pour définir l'ensemble des URL considérées comme faisant partie du contexte d'application et auxquelles le manifeste s'applique.

Le manifeste est appliqué après la création du contexte d'application mais avant le début de la navigation vers une URL de démarrage ou un lien profond.
Une **URL de démarrage** est la page initiale de l'application web.
Un **lien profond** est une URL qui dirige l'utilisateur·ice vers une page spécifique de l'application web, en contournant la page d'accueil.
Le contexte d'application garantit que le comportement et la présentation définis de l'application sont maintenus dans son périmètre.

Lorsqu'un contexte d'application est créé, les navigateurs doivent immédiatement naviguer vers une URL de démarrage ou un lien profond.
Cette navigation remplace l'entrée actuelle dans l'historique de navigation.
Si le contexte d'application est créé pour naviguer vers un lien profond, le navigateur y accède directement&nbsp;; sinon, il accède à l'URL de démarrage.

Notez que l'URL de démarrage n'est pas nécessairement la valeur du membre [`start_url`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) du manifeste. Les navigateurs peuvent ignorer un `start_url` défini ou permettre aux utilisateur·ice·s de modifier sa valeur lors de l'ajout de l'application web à l'écran d'accueil de leur appareil ou lors de son ajout aux favoris.

## Voir aussi

- Le membre de manifeste [`scope`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/scope)
- [Manifeste d'application web](/fr/docs/Web/Progressive_web_apps/Manifest)
- [Applications web progressives (PWA)](/fr/docs/Web/Progressive_web_apps)
