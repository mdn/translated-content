---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---

{{JSRef}}

La méthode **`Date.UTC()`** accepte des paramètres similaires à ceux du constructeur {{jsxref("Date")}} et renvoie le nombre de millièmes de seconde depuis le 1er janvier 1970, 00:00:00, temps universel. Autrement dit, elle renvoie la date en UTC.

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

## Syntaxe

```js
Date.UTC(année[,mois[,jour[,heures[,minutes[,secondes[,ms]]]]]])
```

## Paramètres

- `année`
  - : Une année sur deux chiffres pour une année après 1900 (ex. 98 pour 1998) ou bien une année sur quatre chiffres (2018).
- `mois`{{optional_inline}}

  - : Un entier entre 0 (janvier) et 11 (décembre) représentant le mois.

    > [!NOTE]
    > Cet argument est optionnel depuis ECMAScript 2017.

- `jour`{{optional_inline}}
  - : Un entier entre 1 et 31 représentant le jour du mois. La valeur par défaut vaut 1.
- `heures`{{optional_inline}}
  - : Paramètre optionnel, un entier entre 0 et 23 représentant les heures. La valeur par défaut vaut 0.
- `minutes`{{optional_inline}}
  - : Paramètre optionnel, un entier entre 0 et 59 représentant les minutes. La valeur par défaut vaut 0.
- `secondes`{{optional_inline}}
  - : Paramètre optionnel, un entier entre 0 et 59 représentant les secondes. La valeur par défaut vaut 0.
- `ms`{{optional_inline}}
  - : Paramètre optionnel, un entier entre 0 et 999 représentant les millièmes de seconde. La valeur par défaut vaut 0.

### Valeur de retour

Un nombre représentant le nombre de millisecondes écoulées entre la date indiquée et le premier janvier 1970 à minuit UTC.

## Description

La méthode `UTC` prend des paramètres de date et d'heure séparés par des virgules et renvoie le nombre de millièmes de seconde entre le 1er janvier 1970, 00:00:00, temps universel et la date et l'heure spécifiées.

Il faut spécifier l'année entière pour le premier paramètre&nbsp;; par exemple 1998. Si l'année spécifiée est entre 0 et 99, la méthode la convertira en une année du XXe siècle (1900 + année)&nbsp;; par exemple si vous indiquez 95, l'année 1995 sera utilisée.

La méthode `UTC` diffère du constructeur {{jsxref("Date")}} pour deux raisons :

- `Date.UTC` utilise le temps universel plutôt que l'heure locale.
- `Date.UTC` renvoie une valeur temporelle sous la forme d'un nombre plutôt que de créer un objet `Date`.

Si un paramètre spécifié est en dehors des limites attendues, la méthode `UTC` met à jour les autres paramètres pour s'adapter à ce nombre. Par exemple, si vous utilisez 15 pour le mois, l'année sera incrémentée d'une unité (année + 1), et la valeur 3 (avril) sera utilisée pour le mois.

Comme `UTC` est une méthode statique de `Date`, on l'utilise toujours sous la forme `Date.UTC()` plutôt que comme une méthode d'un objet `Date` que vous auriez créé.

## Exemples

### Utiliser `Date.UTC()`

L'instruction qui suit crée un objet `Date` en utilisant l'heure UTC plutôt que l'heure locale&nbsp;:

```js
var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.parse()")}}
