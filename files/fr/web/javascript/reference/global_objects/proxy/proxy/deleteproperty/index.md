---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/deleteProperty
---
{{JSRef}}

La méthode **`handler.deleteProperty()`** est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_delete", "delete")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html","taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  deleteProperty: function(cible, propriété) {
  }
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `deleteProperty`. `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.
- `propriété`
  - : Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété à supprimer.

### Valeur de retour

La méthode `deleteProperty()` doit renvoyer un booléen qui indique si oui ou non la propriété a été supprimée.

## Description

La méthode **`handler.deleteProperty()`** est une trappe permettant d'intercepter les opérations de l'opérateur {{jsxref("Opérateurs/L_opérateur_delete", "delete")}}.

### Interceptions

Cette trappe peut intercepter les opérations suivantes :

- La suppression d'une propriété : `delete proxy[toto]` et `delete proxy.toto`
- {{jsxref("Reflect.deleteProperty()")}}

### Invariants

Si les invarians suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- Une propriété ne peut pas être supprimée s'il existe une propriété correspondante sur l'objet cible qui est une propriété propre et non-configurable.

## Exemples

Dans l'exemple qui suit, on intercepte les opérations de {{jsxref("Opérateurs/L_opérateur_delete", "delete")}}.

```js
var p = new Proxy({}, {
  deleteProperty: function(cible, prop) {
    console.log("appelée sur : " + prop);
    return true;
  }
});

delete p.a; // "appelée sur : a"
```

## Spécifications

| Spécification                                                                                                                            | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-delete-p', '[[Delete]]')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-delete-p', '[[Delete]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.deleteProperty")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- L'opérateur {{jsxref("Opérateurs/L_opérateur_delete", "delete")}}
- {{jsxref("Reflect.deleteProperty()")}}
