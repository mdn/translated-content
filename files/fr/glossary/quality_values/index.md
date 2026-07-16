---
title: Valeurs de qualité (Quality values)
slug: Glossary/Quality_values
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les **valeurs de qualité** (<i lang="en">Quality values</i> en anglais), ou _q-values_ et _q-factors_, sont utilisés pour décrire l'ordre de priorité des valeurs séparées par une virgule dans une liste. C'est une syntaxe spéciale autorisée dans quelques [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) et en HTML.

L'importance d'une valeur est marquée par le suffixe `';q='` immédiatement suivi par une valeur comprise entre `0` et `1` inclus, avec jusqu'à trois décimales, la valeur la plus élevée indiquant la priorité la plus haute. Quand le paramètre n'est pas déclaré, la valeur par défaut est `1`.

## Exemples

La syntaxe suivante&nbsp;:

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

indique l'ordre de priorité&nbsp;:

| Valeur                                 | Priorité |
| -------------------------------------- | -------- |
| `text/html` et `application/xhtml+xml` | `1.0`    |
| `application/xml`                      | `0.9`    |
| `*/*`                                  | `0.8`    |

S'il n'y a pas de priorité définie pour les deux premières valeurs, l'ordre dans la liste est sans importance. Néanmoins, avec la même qualité, des valeurs plus spécifiques ont la priorité sur celles qui le sont moins&nbsp;:

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Valeur      | Priorité                       |
| ----------- | ------------------------------ |
| `text/html` | `0.8` (totalement spécifié)    |
| `text/*`    | `0.8` (partiellement spécifié) |
| `*/*`       | `0.8` (non spécifié)           |

Quelques syntaxes, comme celle de {{HTTPHeader("Accept")}}, autorisent des spécificateurs supplémentaires comme `text/html;level=1`. Ceux-ci augmentent la spécificité de la valeur. Leur utilisation est extrêmement rare.

## Voir aussi

- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) utilisant des _q-values_ dans leur syntaxe&nbsp;: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}
- [Définitions des champs d'en-tête <sup>(angl.)</sup>](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
