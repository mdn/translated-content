---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
tags:
  - API
  - Méthode
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - ServicerWorkerContainer
  - register
translation_of: Web/API/ServiceWorkerContainer/register
---
{{APIRef("Service Workers API")}}

La méthode **`register()`** de l'interface {{domxref("ServiceWorkerContainer")}} crée ou met à jour un {{domxref("ServiceWorkerRegistration")}} pour la `scriptURL` donnée.

En cas de succès, un `ServiceWorkerRegistration` attache la `scriptURL` fournie à une portée, qui sera utilisé ensuite pour la correspondance de navigation. Vous pouvez appeler cette méthode en toutes circonstances depuis la page contrôlée. C'est-à-dire, vous n'avez pas besoin de vérifier si un enregistrement existe déjà.

Il y a une confusion fréquente autour de la signification et de l'utilisation de la portée. Puisque qu'un `ServiceWorker` ne peut pas avoir une portée plus large que son propre emplacement, utilisez uniquement l'option de la portée lorsque vous avez besoin d'une portée plus étroite que la valeur par défaut.

## Syntaxe

    serviceWorkerContainer.register(scriptURL, options)
      .then(function(serviceWorkerRegistration) { ... })

### Paramètres

- `scriptURL`
  - : L' URL du script contenant le `ServiceWorker`. Le fichier qui a enregistré le `ServiceWorker` doit avoir un [JavaScript MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types) valide.
- `options` {{optional_inline}}

  - : Un objet contenant les options d'enregistrement. Les options sont:

    - `scope`: Un {{domxref("USVString")}} représentant une URL qui définit la portée d'enregistrement d'un `ServiceWorker`; c'est-à-dire quelle plage d'URL un `ServiceWorker` peut contrôler. Il s'agit généralement d'une URL relative. Elle est relative à l'URL de base de l'application. Par défaut, la valeur de la portée de l'enregistrement d'un `ServiceWorker` est limité au répertoire qui contient le script du `ServiceWorker`. Consultez la section [Exemples](#Exemples) pour plus d'informations sur son fonctionnement.
    - {{non-standard_inline}} `type`: Un {{domxref("WorkerType")}}, il prend les valeurs "classic" ou "module". Par défaut, la valeur est fixé à "classic".
    - {{non-standard_inline}} `updateViaCache`: Un {{domxref("ServiceWorkerUpdateViaCache")}}, il prend les valeurs "imports" ou "all" ou "none". Par défaut, la valeur est fixé à "imports".

### Valeur de retour

Une {{jsxref("Promise")}} qui se résout avec un objet {{domxref("ServiceWorkerRegistration")}}.

## Exemples

Les exemples décrits ici doivent être pris ensemble pour obtenir une meilleure compréhension de comment la portée des `ServiceWorker` s'applique à une page.

L'exemple suivant utilise la valeur par défaut de la portée (en l'omettant). Le code du `ServiceWorker` dans ce cas, s'il est inclus dans `example.com/index.html`, contrôlera `example.com/index.html`, ainsi que les pages en dessous, comme `example.com/product/description.html`.

```js
if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('/sw.js').then(
    (registration) => {
      console.log('Service worker registration succeeded:', registration)
    },
    /*catch*/ (error) => {
      console.log('Service worker registration failed:', error)
    }
  )
} else {
  console.log('Service workers are not supported.')
}
```

Le code suivant, s'il est inclus dans `example.com/index.html`, à la racine d'un site, s'appliquerait exactement aux mêmes pages que l'exemple ci-dessus. N'oubliez pas que la portée, lorsqu'elle est incluse, utilise l'emplacement de la page comme base.

Sinon, si ce code était inclus dans une page à `example.com/product/description.html`, avec le fichier Javascript résidant à `example.com/product/sw.js`, alors le service worker ne s'appliquerait qu'aux ressources sous `example.com /product`.

```js
if ('serviceWorker' in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register('/sw.js', { scope: './' }).then(
    (registration) => {
      console.log('Service worker registration succeeded:', registration)
    },
    /*catch*/ (error) => {
      console.log('Service worker registration failed:', error)
    }
  )
} else {
  console.log('Service workers are not supported.')
}
```

Il y a une confusion fréquente autour de la signification et de l'utilisation de la portée. Puisque qu'un `ServiceWorker` ne peut pas avoir une portée plus large que son propre emplacement, utilisez uniquement l'option de la portée lorsque vous avez besoin d'une portée plus étroite que la valeur par défaut.

Le code suivant, s'il est inclus dans `example.com/index.html`, à la racine d'un site, ne s'appliquerait qu'aux ressources sous `example.com/product`.

```js
if ('serviceWorker' in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register('/sw.js', { scope: '/product/' }).then(
    (registration) => {
      console.log('Service worker registration succeeded:', registration)
    },
    /*catch*/ (error) => {
      console.log('Service worker registration failed:', error)
    }
  )
} else {
  console.log('Service workers are not supported.')
}
```

Toutefois, les serveurs peuvent supprimer cette restriction en définissant un en-tête [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed) sur le script du `ServiceWorker`, et alors vous pouvez spécifier une portée maximale pour ce `ServiceWorker` au-dessus de l'emplacement du `ServiceWorker`.

## Spécifications

| Specification                                                                                                                                    | Status                               | Comment              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-serviceworkercontainer-register', 'ServiceWorkerContainer: register')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.ServiceWorkerContainer.register")}}

## Voir également

- [W3.org ServiceWorker Register](https://www.w3.org/TR/service-workers/#navigator-service-worker-register)
- [W3c.github.io ServiceWorker Register](https://w3c.github.io/ServiceWorker/#dom-serviceworkercontainer-register)
- [W3.org option update via cache](https://www.w3.org/TR/service-workers/#enumdef-serviceworkerupdateviacache)
- [WHATWG.org Worker Type](https://html.spec.whatwg.org/multipage/workers.html#workertype)
