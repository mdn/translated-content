---
title: ExtendableEvent.ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
---

{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

Le contructeur **`ExtendableEvent()`** crée un nouvel objet {{domxref("ExtendableEvent")}}.

## Syntaxe

```js
var myExtendableEvent = new ExtendableEvent(type, init);
```

### Paramètres

- _type_
  - : Une chaîne de caractères avec le nom de l'évènement, sensible à la casse.
- _init_ {{optional_inline}}
  - : Un objet d'options contenant n'importe quelle configuration personnalisée que vous voulez appeler à un objet d'évènement. Pour le moment, il n'existe pas d'option dans la spécification, mais il a été défini pour une compatibilité future pour les différents évènements dérivés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation des Service Workers](/fr/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Exemple simple de service workers](https://github.com/mdn/sw-test)
- [Les ServiceWorker sont-ils prêts?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Utilisation performante des web workers](/fr/docs/Web/Guide/Performance/Using_web_workers)
