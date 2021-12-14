---
title: Constantes
slug: Glossary/Plugin
tags:
  - Code
  - Erreur
  - Plugin
translation_of: Plugins/Guide/Constants
translation_of_original: NPAPI/Constants
original_slug: Plugins/Guide/Constants
---
Cette section est une référence au définitions utilisées par l'API Plug-in. Toutes les définitions proviennent de npapi.h.

### Codes Erreur

| Code                                 | Valeur | Description                                                          |
| ------------------------------------ | ------ | -------------------------------------------------------------------- |
| **NPERR_NO_ERROR**                   | 0      | Aucune erreur n'est survenue                                         |
| **NPERR_GENERIC_ERROR**              | 1      | Une erreur sans code attribué est survenue                           |
| **NPERR_INVALID_INSTANCE_ERROR**     | 2      | L'instance transmise au plugin est invalide                          |
| **NPERR_INVALID_FUNCTABLE_ERROR**    | 3      | Table de fonctions invalide                                          |
| **NPERR_MODULE_LOAD_FAILED_ERROR**   | 4      | Le chargement du plugin a échoué                                     |
| **NPERR_OUT_OF_MEMORY_ERROR**        | 5      | L'allocation de mémoire a échoué                                     |
| **NPERR_INVALID_PLUGIN_ERROR**       | 6      | Plugin manquant ou invalide                                          |
| **NPERR_INVALID_PLUGIN_DIR_ERROR**   | 7      | Répertoire du plugin manquant ou invalide                            |
| **NPERR_INCOMPATIBLE_VERSION_ERROR** | 8      | les versions du plugin et de  Communicator ne correspondent pas      |
| **NPERR_INVALID_PARAM**              | 9      | Paramètre manquant ou invalide                                       |
| **NPERR_INVALID_URL**                | 10     | URL manquante ou invalide                                            |
| **NPERR_FILE_NOT_FOUND**             | 11     | Fichier manquant ou invalide                                         |
| **NPERR_NO_DATA**                    | 12     | Le flux ne contient pas de données                                   |
| **NPERR_STREAM_NOT_SEEKABLE**        | 13     | Flux trouvable attendu. (trad à vérifier : Seekable stream expected) |
