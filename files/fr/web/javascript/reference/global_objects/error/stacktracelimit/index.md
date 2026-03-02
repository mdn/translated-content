---
title: "Error : propriété statique stackTraceLimit"
short-title: stackTraceLimit
slug: Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

> [!NOTE]
> Cette fonctionnalité fait partie de [l'API de trace de pile <sup>(angl.)</sup>](https://v8.dev/docs/stack-trace-api) actuellement non standard de V8. Cependant, pour des raisons de compatibilité, elle est aussi implémentée par JavaScriptCore.

La propriété de donnée statique **`stackTraceLimit`** d'une instance de {{JSxRef("Error")}} indique le nombre maximal de trames de pile capturées par la trace de pile d'une erreur. Elle peut être définie par le code utilisateur pour modifier le comportement du moteur.

En général, _lire_ cette propriété n'est pas très utile, mais vous pouvez _la définir_ à une nouvelle valeur. L'augmenter peut être utile pour le débogage, car cela permet de voir une plus grande partie de la pile d'appels. La diminuer peut améliorer les performances car cela réduit la quantité de pile capturée.

## Valeur

Un entier représentant le nombre maximal de trames de pile capturées par la trace de pile d'une erreur.

{{js_property_attributes(1, 1, 1)}}

## Description

Comme `stackTraceLimit` est une propriété statique de `Error`, vous l'utilisez toujours comme `Error.stackTraceLimit`, et non comme une propriété d'un objet `Error` que vous avez créé. Si vous souhaitez personnaliser la trace de pile pour une seule erreur, vous devrez peut-être définir la propriété, créer l'erreur, puis réinitialiser la propriété à sa valeur d'origine.

## Exemples

### Définir la propriété `stackTraceLimit`

Ce code peut être exécuté sans risque même dans des environnements qui ne prennent pas en charge `Error.stackTraceLimit`, car il ne lit pas la propriété, il ne fait que la définir, et les moteurs qui ne la prennent pas en charge ignoreront ce réglage.

```js
Error.stackTraceLimit = 2;
const a = () => b();
const b = () => c();
const c = () => d();
const d = () => e();
const e = () => {
  throw new Error("Mon erreur");
};
try {
  a();
} catch (e) {
  console.log(e.stack);
}
// Seulement deux trames dans les moteurs qui le prennent en charge ;
// toutes les trames dans les autres
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.stack")}}
- La méthode {{JSxRef("Error.captureStackTrace()")}}
- [L'API de trace de pile <sup>(angl.)</sup>](https://v8.dev/docs/stack-trace-api) dans la documentation V8
