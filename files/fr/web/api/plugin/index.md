---
title: Plugin
slug: Web/API/Plugin
---

{{ApiRef("HTML DOM")}}

L'interface `Plugin` fournit des informations à propos d'un [plugin](/fr/docs/Mozilla/Add-ons/Plugins) du navigateur.

> **Note :** Les propriétés propres des objets `Plugin` ne sont plus énumérables dans les dernières versions des navigateurs.

## Propriétés

- {{domxref("Plugin.description")}} {{readonlyinline}}
  - : Une description lisible du plugin.
- {{domxref("Plugin.filename")}} {{readonlyinline}}
  - : Le nom de fichier du fichier plugin.
- {{domxref("Plugin.name")}} {{readonlyinline}}
  - : Le nom du plugin.
- {{domxref("Plugin.version")}} {{readonlyinline}}
  - : Le numéro de version du plugin, en chaîne de caractères.

## Méthodes

- {{domxref("Plugin.item")}}
  - : Renvoie le type MIME d'un type de contenu pris en charge, en fonction de l'index dans une liste de types pris en charge.
- {{domxref("Plugin.namedItem")}}
  - : Renvoie le type MIME d'un élément pris en charge.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
