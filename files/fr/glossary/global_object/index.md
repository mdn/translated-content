---
title: Objet global
slug: Glossary/Global_object
tags:
  - Encodage
  - Glossaire
  - Objets
translation_of: Glossary/Global_object
original_slug: Glossaire/Objet_global
---
Un objet global est un {{glossary("Object","objet")}} qui existe toujours dans la {{glossary("Global scope","portée globale")}}.

En JavaScript, un objet global est toujours défini. Dans un navigateur web, quand les scripts créent des variables globales, elles sont créées comme membres de l'objet global (dans {{Glossary("Node.js")}} ce n'est pas le cas). L'objet global {{Glossary("Interface")}} dépend du contexte d'exécution dans lequel le script s'exécute. Par exemple :

- Dans un navigateur web, le code que le script n'a pas spécifiquement lancé comme tâche d'arrière-plan a pour objet global {{domxref("Window")}}. C'est la grande majorité du code JavaScript sur le Web.
- L'exécution du code dans un {{domxref("Worker")}} a pour objet global {{domxref("WorkerGlobalScope")}} .
- Les scripts exécutés sous {{Glossary("Node.js")}} ont un objet appelé [`global`](https://nodejs.org/api/globals.html#globals_global) pour objet global.
