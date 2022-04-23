---
title: WorkerGlobalScope.navigator
slug: Web/API/WorkerGlobalScope/navigator
translation_of: Web/API/WorkerGlobalScope/navigator
---
{{APIRef("Web Workers API")}}

La propriété en lecture seule **`navigator`** de l'interface {{domxref("WorkerGlobalScope")}} retourne le {{domxref("WorkerNavigator")}} associé au worker. C'est un objet navigator spécifique, essentiellement un sous-ensemble de {{domxref("Navigator")}} pour les contextes de navigation, mais adapté aux workers.

## Syntaxe

```js
var navigatorObj = self.navigator;
```

### Valeur de retour

Un objet  {{domxref("WorkerNavigator")}}.

## Exemple

Si vous appelez

```js
console.log(navigator);
```

à l'intérieur d'un worker (ce qui équivaut à `self.console.log(self.navigator);`, puisqu'il est appelé dans le contexte du worker qui peut être référencé par {{domxref("WorkerGlobalScope.self")}}), la console vous retournera un objet {{domxref("WorkerNavigator")}} — comme ce qui suit :

```js
Object {onLine: true, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) Ap…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36", product: "Gecko", platform: "MacIntel", appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKi…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"…}
    appCodeName: "Mozilla"
    appName: "Netscape"
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    hardwareConcurrency: 4
    onLine: true
    platform: "MacIntel"
    product: "Gecko"
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    __proto__: Object
```

Vous pouvez utiliser l'objet navigator pour récupérer des informations supplémentaires sur l'environnement d'exécution, comme vous pourriez le faire avec un objet {{domxref("Navigator")}} normal.

> **Note :** Firefox rencontre un bogue avec l'utilisation de `console.log` à l'intérieur des workers partagés/service (voir {{Bug("1058644")}}), ce qui peut occasionner d'étranges résultats, mais cela devrait être bientôt corrigé.

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', '#dom-worker-navigator', 'navigator')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.navigator")}}

## Voir aussi

{{domxref("WorkerNavigator")}}
