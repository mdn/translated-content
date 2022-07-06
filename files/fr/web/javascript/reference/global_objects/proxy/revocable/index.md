---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/revocable
browser-compat: javascript.builtins.Proxy.revocable
---
{{JSRef}}

La méthode **`Proxy.revocable()`** est utilisée afin de créer un objet [`Proxy`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy) révocable.

## Syntaxe

```js
Proxy.revocable(cible, gestionnaire);
```

### Paramètres

- `cible`
  - : Un objet cible devant lequel on veut placer un intermédiaire. Ça peut être n'importe quelle sorte d'objet&nbsp;: un tableau, une fonction, voire un autre proxy.
- `gestionnaire`
  - : Un objet dont les propriétés sont des fonctions qui définissent les opérations interceptées par le proxy par rapport à l'objet cible.

### Valeur de retour

Un nouvel objet `Proxy` révocable est renvoyé par la méthode.

## Description

Un `Proxy` révocable est un objet qui possède les propriétés suivantes&nbsp;: `{proxy: proxy, revoke: revoke}`.

- `proxy`
  - : Un proxy créé avec un appel à `new Proxy(cible, gestionnaire)`.
- `revoke`
  - : Une fonction sans argument qui permet de désactiver le proxy.

Si la fonction `revoke()` est appelée, le proxy devient inutilisable et toutes les trappes définies via un gestionnaire lèveront une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError). Une fois que le proxy est révoqué, il conserve cet état et peut être traité par le ramasse-miettes. D'éventuels appels suivants à `revoke()` n'auront aucun effet.

## Exemples

### Utiliser `Proxy.revocable()`

```js
let revocable = Proxy.revocable({}, {
  get: function(cible, nom) {
    return "[[" + nom + "]]";
  }
});
let proxy = revocable.proxy;
console.log(proxy.toto); // "[[toto]]"

revocable.revoke();

console.log(proxy.toto); // TypeError est levée
proxy.toto = 1;          // TypeError à nouveau
delete proxy.toto;       // TypeError toujours
typeof proxy;            // "object", typeof ne déclenche aucune trappe
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Proxy`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
