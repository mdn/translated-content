---
title: Mise à jour des modules complémentaires pour Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_plug-ins
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Plusieurs changements ont été apportés dans Gecko 1.9.2 qui peuvent avoir un impact particulier sur les développeur·euse·s de modules complémentaires. Cet article fournit une liste de ces changements.

## Changements de l'interface

La méthode `nsIPluginInstance` `destroy()` a été supprimée, car elle ne faisait rien de toute façon.

## Changements spécifiques à Mac OS X

### Les modules complémentaires CFM ne sont plus pris en charge

À partir de Gecko 1.9.2, les binaires CFM (Code Fragment Manager) de style ancien ne sont plus pris en charge pour les modules complémentaires. Les modules CFM sont obsolètes depuis août 2008.

### `main()` n'est plus un point d'entrée pris en charge

En août 2008, les développeur·euse·s de modules complémentaires ont été informé·e·s que `main()` n'était plus pris en charge comme point d'entrée. Ce changement a été mis en œuvre dans Gecko 1.9.2. Les modules complémentaires doivent être mis à jour pour utiliser `NPN_GetEntryPoints()` à la place.

## Voir aussi

- [Firefox 3.6 pour les développeuses et les développeurs](/fr/docs/Mozilla/Firefox/Releases/3.6)
