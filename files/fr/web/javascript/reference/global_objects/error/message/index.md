---
title: "Error : propriété message"
short-title: message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété **`message`** d'une instance de {{JSxRef("Error")}} est une description de l'erreur, écrite pour être lue par un·e humain·e.

## Valeur

Une chaîne de caractères correspondant à la valeur transmise au constructeur [`Error()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) comme premier argument.

{{js_property_attributes(1, 0, 1)}}

## Description

Cette propriété contient une brève description de l'erreur si elle est accessible, ou si elle a été définie. La propriété `message`, combinée à la propriété {{JSxRef("Error/name", "name")}}, est utilisée par la méthode {{JSxRef("Error.prototype.toString()")}} pour créer une représentation de l'erreur sous la forme d'une chaîne de caractères.

Par défaut, la propriété `message` est une chaîne de caractères vide, mais ce comportement peut être remplacé pour une instance, en renseignant un message comme premier argument du constructeur {{JSxRef("Error/Error", "Error")}}.

## Exemples

### Déclencher une erreur personnalisée

```js
const e = new Error("Impossible de lire la donnée");
// e.message est "Impossible de lire la donnée"
throw e;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.name")}}
- La méthode {{JSxRef("Error.prototype.toString()")}}
