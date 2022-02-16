---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/revocable
---
{{JSRef}}

La méthode **`Proxy.revocable()`** est utilisée afin de créer un objet {{jsxref("Proxy")}} révocable.

## Syntaxe

    Proxy.revocable(cible, gestionnaire);

### Paramètres

{{Page("/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy", "Paramètres")}}

### Valeur de retour

Un nouvel objet `Proxy` révocable est renvoyé par la méthode.

## Description

Un `Proxy` révocable est un objet qui possède les propriétés suivantes : `{proxy: proxy, revoke: revoke}`.

- `proxy`
  - : Un proxy crée avec un appel à `new Proxy(cible, gestionnaire)`.
- `revoke`
  - : Une fonction sans argument qui permet de désactiver le proxy.

Si la fonction `revoke()` est appelée, le proxy devient inutilisable et toutes les trappes définies via un gestionnaire lèveront une exception {{jsxref("TypeError")}}. Une fois que le proxy est révoqué, il conserve cet état et peut être traité par le ramasse-miettes. D'éventuels appels suivants à `revoke()` n'auront aucun effet.

## Exemples

```js
var révocable = Proxy.revocable({}, {
  get: function(cible, nom) {
    return "[[" + nom + "]]";
  }
});
var proxy = révocable.proxy;
console.log(proxy.toto); // "[[toto]]"

révocable.revoke();

console.log(proxy.toto); // TypeError est levée
proxy.toto = 1           // TypeError à nouveau
delete proxy.toto        // TypeError toujours
typeof proxy             // "object", typeof ne déclenche aucune trappe
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy.revocable', 'Proxy Revocation Functions')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy.revocable', 'Proxy Revocation Functions')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.revocable")}}

## Voir aussi

- {{jsxref("Proxy")}}
