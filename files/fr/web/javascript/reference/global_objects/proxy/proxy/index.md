---
title: Gestionnaire de Proxy (handler)
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
---

{{JSRef}}

L'objet gestionnaire d'un proxy est un objet qui contient les trappes de captures (_traps_) pour le {{jsxref("Proxy", "proxy", "", 1)}}.

## Méthodes

Toutes ces trappes sont optionnelles. Si une trappe n'a pas été définie, le comportement par défaut sera de transmettre l'opération à la cible.

- {{jsxref("Objets_globaux/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : Une trappe pour {{jsxref("Object.getPrototypeOf")}}.
- {{jsxref("Objets_globaux/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Une trappe pour {{jsxref("Object.setPrototypeOf")}}.
- {{jsxref("Objets_globaux/Proxy/handler/isExtensible", "handler.isExtensible()")}}
  - : Une trappe pour {{jsxref("Object.isExtensible")}}.
- {{jsxref("Objets_globaux/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
  - : Une trappe pour {{jsxref("Object.preventExtensions")}}.
- {{jsxref("Objets_globaux/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : Une trappe pour {{jsxref("Object.getOwnPropertyDescriptor")}}.
- {{jsxref("Objets_globaux/Proxy/handler/defineProperty", "handler.defineProperty()")}}
  - : Une trappe pour {{jsxref("Object.defineProperty")}}.
- {{jsxref("Objets_globaux/Proxy/handler/has", "handler.has()")}}
  - : Une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}.
- {{jsxref("Objets_globaux/Proxy/handler/get", "handler.get()")}}
  - : Une trappe pour l'accès aux valeurs des propriétés.
- {{jsxref("Objets_globaux/Proxy/handler/set", "handler.set()")}}
  - : Une trappe pour la définition des valeurs des propriétés.
- {{jsxref("Objets_globaux/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
  - : Une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_delete", "delete")}}.
- {{jsxref("Objets_globaux/Proxy/handler/ownKeys", "handler.ownKeys()")}}
  - : Une trappe pour {{jsxref("Object.getOwnPropertyNames")}} et {{jsxref("Object.getOwnPropertySymbols")}}.
- {{jsxref("Objets_globaux/Proxy/handler/apply", "handler.apply()")}}
  - : Une trappe pour l'appel d'une fonction.
- {{jsxref("Objets_globaux/Proxy/handler/construct", "handler.construct()")}}
  - : Une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}.

Certaines trappes non standards sont désormais [obsolètes et ont été supprimées](/fr/docs/JavaScript/Reference/Annexes/Fonctionnalités_dépréciées#Proxy).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
