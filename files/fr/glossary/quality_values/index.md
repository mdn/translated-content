---
title: Quality values
slug: Glossary/Quality_values
tags:
  - Glossaire
  - Mécanismes web
translation_of: Glossary/Quality_values
original_slug: Glossaire/Quality_values
---
**_Quality values_** (_valeurs de qualité_), ou _q-values_ et _q-factors_, sont utilisés pour décrire l'ordre de priorité des valeurs séparées par une virgule dans une liste. C'est une syntaxe spéciale autorisée dans quelques [en-têtes HTTP](/fr/docs/HTTP/Headers) et en HTML. L'importance d'une valeur est marquée par le suffixe  `';q='` immédiatement suivi par une valeur comprise entre `0` et `1` inclus, avec jusqu'à trois décimales, la valeur la plus élevée indiquant la priorité la plus haute. Quand le paramètre n'est pas déclaré, la valeur par défaut est `1`.

## Exemples

La syntaxe suivante :

    text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8

indique l'ordre de priorité :

| Valeur                                 | Priorité |
| -------------------------------------- | -------- |
| `text/html` et `application/xhtml+xml` | `1.0`    |
| `application/xml`                      | `0.9`    |
| `*/*`                                  | `0.8`    |

S'il n'y a pas de priorité définie pour les deux premières valeurs, l'ordre dans la liste est sans importance. Néanmoins, avec la même qualité, des valeurs plus spécifiques ont la priorité sur celles qui le sont moins :

    text/html;q=0.8,text/*;q=0.8,*/*;q=0.8

| Valeur      | Priorité                       |
| ----------- | ------------------------------ |
| `text/html` | `0.8` (totalement spécifié)    |
| `text/*`    | `0.8` (partiellement spécifié) |
| `*/*`       | `0.8` (non spécifié)           |

Quelques syntaxes, comme celle de {{HTTPHeader("Accept")}}, autorisent des spécificateurs supplémentaires comme `text/html;level=1`. Ceux-ci augmentent la spécificité de la valeur. Leur utilisation est extrêmement rare.

## Information propre aux navigateurs

### Firefox

À partir de Firefox 18, les valeurs du facteur de qualité sont fixées à 2 décimales. Elles étaient limitées à 1 décimale dans les versions antérieures ({{bug(672448)}}).

## Plus d'informations

- [En-têtes HTTP](/fr/docs/HTTP/Headers) utilisant des _q-values_ dans leur syntaxe : {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("TE")}}.
