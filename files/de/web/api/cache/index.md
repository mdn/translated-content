---
title: Cache
slug: Web/API/Cache
tags:
  - API
  - Cache
  - Draft
  - Experimental
  - Interface
  - NeedsTranslation
  - Offline
  - Reference
  - Service Workers
  - Storage
  - TopicStub
translation_of: Web/API/Cache
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`Cache`** interface provides a storage mechanism for [`Request`](http://fetch.spec.whatwg.org/#request) / [`Response`](http://fetch.spec.whatwg.org/#response) object pairs that are cached, for example as part of the {{domxref("ServiceWorker")}} life cycle. Note that the `Cache` interface is exposed to windowed scopes as well as workers. You don't have to use it in conjunction with service workers, even though it is defined in the service worker spec.

An origin can have multiple, named `Cache` objects. You are responsible for implementing how your script (e.g. in a {{domxref("ServiceWorker")}}) handles `Cache` updates. Items in a `Cache` do not get updated unless explicitly requested; they don’t expire unless deleted. Use {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} to open a specific named `Cache` object and then call any of the `Cache` methods to maintain the `Cache`.

You are also responsible for periodically purging cache entries. Each browser has a hard limit on the amount of cache storage that a given origin can use. The browser does its best to manage disk space, but it may delete the Cache storage for an origin. The browser will generally delete all of the data for an origin or none of the data for an origin. Make sure to version caches by name and use the caches only from the version of the script that they can safely operate on. See [Deleting old caches](/de/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Deleting_old_caches) for more information.

> **Note:** {{domxref("Cache.put")}}, {{domxref("Cache.add")}}, and {{domxref("Cache.addAll")}} only allow `GET` requests to be stored in the cache.

> **Note:** Initial Cache implementations (in both Blink and Gecko) resolve {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, and {{domxref("Cache.put")}} promises when the response body is fully written to storage. More recent spec versions have newer language stating that the browser can resolve the promise as soon as the entry is recorded in the database even if the response body is still streaming in.

> **Note:** As of Chrome 46, the Cache API will only store requests from secure origins, meaning those served over HTTPS.

> **Note:** The key matching algorithm depends on the [VARY header](https://www.fastly.com/blog/best-practices-for-using-the-vary-header) in the value. So matching a new key requires looking at both key and value for entries in the Cache.

> **Note:** The caching API doesn't honor HTTP caching headers.

## Methods

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : Returns a {{jsxref("Promise")}} that resolves to the response associated with the first matching request in the {{domxref("Cache")}} object.
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an array of all matching requests in the {{domxref("Cache")}} object.
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : Takes a URL, retrieves it and adds the resulting response object to the given cache. This is fuctionally equivalent to calling fetch(), then using Cache.put() to add the results to the cache.
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : Takes an array of URLs, retrieves them, and adds the resulting response objects to the given cache.
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : Takes both a request and its response and adds it to the given cache.
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : Finds the {{domxref("Cache")}} entry whose key is the request, and if found, deletes the {{domxref("Cache")}} entry and returns a {{jsxref("Promise")}} that resolves to `true`. If no {{domxref("Cache")}} entry is found, it returns `false`.
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an array of {{domxref("Cache")}} keys.

## Examples

This code snippet is from the [service worker selective caching sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (see [selective caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) The code uses {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} to open any {{domxref("Cache")}} objects with a Content-Type header that starts with `font/`.

The code then uses {{domxref("Cache.match", "Cache.match(request, options)")}} to see if there's already a matching font in the cache, and if so, returns it. If there isn't a matching font, the code fetches the font from the network and uses {{domxref("Cache.put","Cache.put(request, response)")}} to cache the fetched resource.

The code handles exceptions thrown from the {{domxref("Globalfetch.fetch","fetch()")}} operation. Note that a HTTP error response (e.g., 404) will not trigger an exception. It will return a normal response object that has the appropriate error code set.

The code snippet also shows a best practice for versioning caches used by the service worker. Though there's only one cache in this example, the same approach can be used for multiple caches. It maps a shorthand identifier for a cache to a specific, versioned cache name. The code also deletes all caches that aren't named in `CURRENT_CACHES`.

> **Note:** In Chrome, visit chrome://inspect/#service-workers and click on the "inspect" link below the registered service worker to view logging statements for the various actions the [service-worker.js](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) script is performing.

```js
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  // Active worker won't be treated as activated until promise resolves successfully.
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log('Deleting out of date cache:', cacheName);

            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(

    // Opens Cache objects that start with 'font'.
    caches.open(CURRENT_CACHES['font']).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        if (response) {
          console.log(' Found response in cache:', response);

          return response;
        }
      }).catch(function(error) {

        // Handles exceptions that arise from match() or fetch().
        console.error('  Error in fetch handler:', error);

        throw error;
      });
    })
  );
});
```

## Specifications

| Specification                                                        | Status                               | Comment             |
| -------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#cache', 'Cache')}} | {{Spec2('Service Workers')}} | Initial definition. |

## Browser compatibility

{{Compat}}

\[1] Service workers (and [Push](/de/docs/Web/API/Push_API)) have been disabled in the [Firefox 45 Extended Support Release](https://www.mozilla.org/en-US/firefox/organizations/) (ESR.)

## See also

- [Using Service Workers](/de/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/de/docs/Web/Guide/Performance/Using_web_workers)
