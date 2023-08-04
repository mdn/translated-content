---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
---

{{AddonSidebar}}

Permet aux extensions du navigateur de mettre à jour le thème du navigateur.

Pour utiliser cette API, une extension doit demander la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "theme" dans son fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json).

> **Note :** quand on met un thème en arrière plan, on doit déclarer la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) 'theme' et on ne peut pas utiliser la fonction [theme](/fr/Add-ons/WebExtensions/manifest.json/theme) du manifest, puisque ce n'est pas compatible.

## Types

- {{WebExtAPIRef("theme.Theme")}}
  - : Représente le contenu d'un thème.

## Fonctions

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : Retourne le thème actuel du navigateur.
- {{WebExtAPIRef("theme.update()")}}
  - : Met à jour à le thème du navigateur.
- {{WebExtAPIRef("theme.reset()")}}
  - : Supprime les mises à jour de thèmes effectuées lors d'un appel à {{WebExtAPIRef("theme.update()")}}.

## Evénements

- {{WebExtAPIRef("theme.onUpdated")}}
  - : Emis quand le thème du navigateur change.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}
