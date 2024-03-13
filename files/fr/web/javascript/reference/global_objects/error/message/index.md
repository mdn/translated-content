---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
---

{{JSRef}}

La propriété **`message`** est une description de l'erreur, écrite pour être lue par un humain.

## Description

La propriété contient une brève description de l'erreur si elle est accessible, ou si elle a été définie. [SpiderMonkey](/fr/docs/SpiderMonkey) utilise intensivement la propriété `message` pour les erreurs d'exécution. La propriété `message`, combinée à la propriété {{jsxref("Error.name", "name")}}, est utilisée par la méthode {{jsxref("Error.prototype.toString()")}} pour créer une représentation de l'erreur sous la forme d'une chaine de caractères.

Par défaut, la propriété `message` est une chaine de caractères vide, mais ce comportement peut être remplacé pour une instance, en renseignant un message comme premier argument du constructeur {{jsxref("Error")}}.

## Exemples

### Déclencher une erreur personnalisée

```js
var e = new Error("Impossible de lire la donnée");
// e.message est "Impossible de lire la donnée"
throw e;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
