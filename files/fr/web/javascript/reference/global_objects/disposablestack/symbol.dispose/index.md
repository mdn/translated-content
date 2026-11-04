---
title: "DisposableStack : méthode [Symbol.dispose]()"
short-title: "[Symbol.dispose]()"
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`[Symbol.dispose]()`** des instances de {{JSxRef("DisposableStack")}} implémente le _protocole de libération_ et permet de la libérer lorsqu'elle est utilisée avec {{JSxRef("Statements/using", "using")}} ou {{JSxRef("Statements/await_using", "await using")}}. C'est un alias de la méthode {{JSxRef("DisposableStack/dispose", "dispose()")}}.

## Syntaxe

```js-nolint
disposableStack[Symbol.dispose]()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Déclarer une pile avec `using`

La méthode `Symbol.dispose` est conçue pour être appelée automatiquement dans une déclaration `using`.

```js
{
  using disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // La pile est libérée ici juste avant la sortie de la fonction ce qui
  // entraîne la libération de la ressource
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `DisposableStack.prototype[Symbol.dispose]` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet natif {{JSxRef("DisposableStack")}}
- La méthode {{JSxRef("DisposableStack.prototype.dispose()")}}
