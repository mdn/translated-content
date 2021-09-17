---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Référence(2)
translation_of: Web/HTTP/Status/416
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`416`\*\***` Range Not Satisfiable`\*\* indique que le serveur ne peut pas servir les plages demandées. L'explication la plus probable est que le document ne contient pas de telles plages, ou que la valeur de l'en-tête {{HTTPHeader("Range")}} n'a aucun sens bien que sa syntaxe soit correcte.

Le message de réponse  `416` contient un en-tête {{HTTPHeader("Content-Range")}} qui indique une plage qui n'est pas satisfaite (représentée par `'*'`) suivie par `'/'` puis la ressource courante (par exemple `Content-Range: */12777`).

Lorsqu'ils rencontrent cette erreur, les navigateurs abandonnent généralement l'opération en cours (un téléchargement ne pourra pas être repris par exemple) ou ils redemandent le document dans son intégralité.

## Statut

    416 Range Not Satisfiable

## Spécifications

| Spécification                                                            | Titre                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------ |
| {{RFC("7233", "416 Request Not Satisfiable" , "4.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilité des navigateurs

{{Compat("http/status", "416")}}

## Voir aussi

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
