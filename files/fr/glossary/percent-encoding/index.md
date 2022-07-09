---
title: Encodage-pourcent
slug: Glossary/percent-encoding
tags:
  - Débutant
  - Glossaire
  - Mécanismes web
translation_of: Glossary/percent-encoding
original_slug: Glossaire/percent-encoding
---
**Encodage-pourcent (_Percent-encoding_)** est un mécanisme d'encodage des caractères de 8 bits qui ont une signification spécifique dans le contexte des {{Glossary("URL")}}. Il est parfois appelé encodage d'URL. Il consiste en une substitution de : un caractère '%' suivi d'un code hexadecimal correspondant à la valeur ASCII du caractère à remplacer.

Les caractères spéciaux nécessitant cet encodage sont : `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='`, et `'%'` lui-même. Les autres caractères n'ont pas besoin d'être encodés, bien qu'ils puissent l'être.

| Caractère | Encodage     |
| --------- | ------------ |
| `':'`     | `%3A`        |
| `'/'`     | `%2F`        |
| `'?'`     | `%3F`        |
| `'#'`     | `%23`        |
| `'['`     | `%5B`        |
| `']'`     | `%5D`        |
| `'@'`     | `%40`        |
| `'!'`     | `%21`        |
| `'$'`     | `%24`        |
| `'&'`     | `%26`        |
| `"'"`     | `%27`        |
| `'('`     | `%28`        |
| `')'`     | `%29`        |
| `'*'`     | `%2A`        |
| `'+'`     | `%2B`        |
| `','`     | `%2C`        |
| `';'`     | `%3B`        |
| `'='`     | `%3D`        |
| `'%'`     | `%25`        |
| `' '`     | `%20` ou `+` |

En fonction du contexte, le caractère `' '` est traduit par un `'+'` (comme dans la version de codage en pourcentage utilisée dans un message `application/x-www-form-urlencoded`), ou en `'%20'` comme dans les URL.

## En apprendre plus

### Culture générale

- [codage des caractères](https://fr.wikipedia.org/wiki/Codage_des_caract%C3%A8res) sur Wikipedia.

### Savoir technique

- {{RFC(3986)}}, section 2.1, où ce codage est défini.
