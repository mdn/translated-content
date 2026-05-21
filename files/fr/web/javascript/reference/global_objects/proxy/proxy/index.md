---
title: Gestionnaire de Proxy (handler)
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
---

{{JSRef}}

L'objet gestionnaire d'un proxy est un objet qui contient les trappes de captures (_traps_) pour le {{jsxref("Proxy", "proxy", "", 1)}}.

## Méthodes

Toutes ces trappes sont optionnelles. Si une trappe n'a pas été définie, le comportement par défaut sera de transmettre l'opération à la cible.

- {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : Une trappe pour {{jsxref("Object.getPrototypeOf")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Une trappe pour {{jsxref("Object.setPrototypeOf")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : Une trappe pour {{jsxref("Object.isExtensible")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
  - : Une trappe pour {{jsxref("Object.preventExtensions")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : Une trappe pour {{jsxref("Object.getOwnPropertyDescriptor")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : Une trappe pour {{jsxref("Object.defineProperty")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/has", "handler.has()")}}
  - : Une trappe pour l'opérateur {{jsxref("Operators/in", "in")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/get", "handler.get()")}}
  - : Une trappe pour l'accès aux valeurs des propriétés.
- {{jsxref("Global_Objects/Proxy/Proxy/set", "handler.set()")}}
  - : Une trappe pour la définition des valeurs des propriétés.
- {{jsxref("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : Une trappe pour l'opérateur {{jsxref("Operators/delete", "delete")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : Une trappe pour {{jsxref("Object.getOwnPropertyNames")}} et {{jsxref("Object.getOwnPropertySymbols")}}.
- {{jsxref("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}
  - : Une trappe pour l'appel d'une fonction.
- {{jsxref("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}
  - : Une trappe pour l'opérateur {{jsxref("Operators/new", "new")}}.

Certaines trappes non standards sont désormais [obsolètes et ont été supprimées](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#proxy).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
