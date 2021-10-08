---
title: Console.dir()
slug: Web/API/Console/dir
tags:
  - API
  - DOM
  - Développement
  - Méthodes
  - Web
  - console
  - débogage
translation_of: Web/API/Console/dir
---
{{APIRef("Console API")}}

Affiche une liste interactive des propriétés de l'objet Javascript spécifié. La sortie est présenté comme un listing hiérarchique avec des triangles qui permettent l'affichage du contenu des objets-enfants.

En d'autres termes, console.dir est le moyen de voir toutes les propriétés de l'objet JavaScript spécifié dans la console, par lequel le développeur peut facilement obtenir les propriétés de l'objet.

{{AvailableInWorkers}}

![](console-dir.png)

## Syntaxe

    console.dir(object);

## Paramètres

- `object`
  - : Un objet Javascript qui contient les propriétés qui doivent être affichées.

## Spécification

| Spécification                                                        | Statut                           | Commentaire          |
| -------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("Console API", "#dir", "console.dir()")}} | {{Spec2("Console API")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Console.dir")}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Console API reference](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject)
