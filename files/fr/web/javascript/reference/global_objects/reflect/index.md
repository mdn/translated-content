---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect
original_slug: Web/JavaScript/Reference/Objets_globaux/Reflect
---
{{JSRef}}

**`Reflect`** est un objet natif qui fournit des méthodes pour les opérations qui peuvent être interceptées en JavaScript (via les proxies). Les méthodes de cet objet sont les mêmes que celles des [gestionnaires de proxy](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/handler). `Reflect` n'est pas une fonction (y compris pour construire un objet).

## Description

Contrairement à la plupart des objets globaux, `Reflect` n'est pas un constructeur. Il ne peut pas être utilisé avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new","new")}} ou être invoqué comme une fonction. Les propriétés et méthodes de `Reflect` sont statiques (comme pour celles de l'objet {{jsxref("Math")}}).

## Méthodes

L'objet `Reflect` fournit des fonctions statiques qui ont les mêmes noms que les méthodes des [gestionnaires de proxy](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy/handler) et dont certaines correspondent, [avec quelques différences](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Reflect/Comparing_Reflect_and_Object_methods), à celles d'{{jsxref("Object")}} :

- {{jsxref("Reflect.apply()")}}
  - : Appelle une fonction cible avec les arguments définis par le paramètres `args`. Voir aussi {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - :  L'opérateur {{jsxref("Opérateurs/L_opérateur_new","new")}} comme fonction. C'est équivalent à `new cible(...args)`. Cette méthode permet également d'indiquer un prototype différent.
- {{jsxref("Reflect.defineProperty()")}}
  - : Semblable à {{jsxref("Object.defineProperty()")}}. Renvoie un {{jsxref("Boolean")}}.
- {{jsxref("Reflect.deleteProperty()")}}
  - : L'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}} comme fonction. C'est équivalent à `delete cible[nom]`.
- {{jsxref("Reflect.get()")}}
  - : Une fonction qui renvoie la valeur d'une propriété.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Semblable à {{jsxref("Object.getOwnPropertyDescriptor()")}}. Renvoie un descripteur de propriété si la propriété existe sur l'objet, {{jsxref("undefined")}} sinon.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Identique à {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : L'opérateur {{jsxref("Opérateurs/L_opérateur_in","in")}} comme fonction. Renvoie un booléen qui indique si une telle propriété existe pour l'objet (qu'elle soit directement rattachée ou héritée).
- {{jsxref("Reflect.isExtensible()")}}
  - : La même fonction que {{jsxref("Object.isExtensible()")}}.
- {{jsxref("Reflect.ownKeys()")}}
  - : Renvoie un tableau de chaînes de caractères qui correspondent aux noms des propriétés propres (celles qui ne sont pas héritées) de l'objet.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Semblable à {{jsxref("Object.preventExtensions()")}}. Renvoie un {{jsxref("Boolean")}}.
- {{jsxref("Reflect.set()")}}
  - : Une fonction qui affecte des valeurs à des propriétés. Renvoie un {{jsxref("Boolean")}} qui vaut `true` si la mise à jour a bien été effectuée.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : Une fonction qui permet de définir le prototype d'un objet.

## Spécifications

| Spécification                                                                | État                         | Commentaires                   |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ES2015', '#sec-reflect-object', 'Reflect')}} | {{Spec2('ES2015')}}     | Définition initiale.           |
| {{SpecName('ESDraft', '#sec-reflect-object', 'Reflect')}} | {{Spec2('ESDraft')}} | Retrait de `Reflect.enumerate` |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Reflect")}}

## Voir aussi

- L'objet global {{jsxref("Proxy")}}.
- L'objet {{jsxref("Proxy.handler", "handler")}}.
