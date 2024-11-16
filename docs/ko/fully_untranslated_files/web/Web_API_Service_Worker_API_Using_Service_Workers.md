---
title: Using Service Workers
slug: Web/API/Service_Worker_API/Using_Service_Workers
---

{{DefaultAPISidebar("Service Workers API")}}

{{ SeeCompatTable() }}

본 문서에서는 서비스 워커를 시작하기 위한 기본적인 아키텍처, 서비스 워커 등록, 새로운 서비스 워커의 설치와 활성화 과정, 서비스 워커 업데이트, 캐시 제어 및 사용자 정의 응답에 대한 정보를 오프라인 기능을 갖춘 간단한 예제를 통해 제공합니다.

## 서비스 워커에 앞서서

웹 사용자들이 몇 년 동안 겪었던 가장 중요한 문제 중 하나는 인터넷 연결이 끊어지면 작동하지 않는겁니다. 세계 최고의 웹 앱조차 연결이 없을 때는 끔찍한 사용자 경험을 제공합니다. 우리의 [오프라인](/en-US/Apps/Build/Offline) 페이지가 보여주듯이, 이 문제를 해결하기 위한 기술을 개발하기 위한 여러가지 시도가 있었고, 일부 문제는 해결되었습니다. 그러나 가장 중요한 문제는 리소스 캐싱과 커스텀 네트워크(예를 들어 WebSocket등을 이용한 리소스 로드) 통신 제어 메커니즘이 여전히 좋지 않다는 점입니다.

직전의 시도였던 [AppCache](/ko/docs/Web/HTML/Using_the_application_cache) 는 캐싱할 리소스를 쉽게 지정할 수 있었기 때문에 좋은 생각이였던것 처럼 보였지만, 당신이 지정한 동작에 대한 가정을 앱이 정확하게 따르지 않을 경우 앱이 끔찍하게 망가집니다. 자세히 알고 싶으면 Jake Archibald의 [Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag) 을 참고하세요.

> **참고:** Firefox 44에서 [AppCache](/ko/docs/Web/HTML/Using_the_application_cache) 를 사용해서 페이지의 오프라인 지원을 제공할 경우 콘솔에 [서비스 워커](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers) 를 대신 사용하는것에 대한 제안이 경고로 표시됩니다. ([Firefox bug 1204581](https://bugzil.la/1204581))

서비스 워커는 최종적으로 이러한 문제를 해결해야 합니다. 서비스 워커 구문은 [AppCache](/ko/docs/Web/HTML/Using_the_application_cache) 보다 복잡하지만, JavaScript를 사용해서 세밀하게 [AppCache](/ko/docs/Web/HTML/Using_the_application_cache) 의 암묵적인 동작들을 제어할 수 있으므로 이 문제 그 이상을 처리 할 수 있습니다. 서비스 워커를 사용하면 먼저 캐싱된 리소스를 사용하도록 앱을 설정해서 오프라인일 경우에도 일관적인 경험을 제공한다음 네트워크 연결이 돌아올 때 더 많은 데이터를 불러오게 할 수 있습니다. (보통 [오프라인 우선](http://offlinefirst.org/) 이라고 함) 이 기능은 네이티브 앱에서는 이미 널리 사용되는 구현법이며, 이는 네이티브 앱이 웹 앱 대신 선택되는 주된 이유 중 하나입니다.

## 서비스워커 개발을 위한 환경 설정

서비스워커가 지원되는 최신 브라우저에서 많은 서비스 워커 기능들이 활성화되어 있습니다. 만약 현재 사용하시는 브라우저에서 데모 코드가 돌아가지 않으면, 아래와 같이 환경을 설정해주세요.

- **Firefox Nightly**: `about:config` 로 가서 `dom.serviceWorkers.enabled` 값을 true 로 변경하고, 브라우저 재시작
- **Chrome Canary**: `chrome://flags` 로 가서 `experimental-web-platform-features` 을 키고, 브라우저 재시작 (몇몇 기능은 크롬에서도 활성화되어 있습니다)
- **Opera**: `opera://flags` 로 가서 `Support for ServiceWorker` 를 활성화 하고, 브라우저 재시작

애플리케이션을 HTTPS 에서 실행시키세요 - 서비스워커는 보안상의 이유로 HTTPS 에서만 동작합니다. Github 은 HTTPS 를 지원하기 때문에 서비스워커를 시험해보기 좋은 사이트입니다. 이외에 localhost 도 https 로 간주되니 로컬 개발환경도 활용해보세요.

## 기본 구조

다음의 단계들은 서비스 워커의 기본적인 설정법입니다:

1. {{domxref("serviceWorkerContainer.register()")}}을 통해서 서비스 워커 URL을 가져오고, 등록합니다.
2. 등록에 성공하면, {{domxref("ServiceWorkerGlobalScope") }} 범위에서 서비스 워커가 실행됩니다. 이는 (메인 스크립트 실행 쓰레드를 running off하면서) 기본적으로 DOM 접근이 없는 작업 문맥을 갖습니다.
3. 이제 서비스 워커는 이벤트를 처리할 준비가 되었습니다.
4. 서비스 워커가 제어하는 페이지들에 연속적으로 접근하게 될 때 서비스 워커 설치를 시도하게 됩니다. 서비스 워커는 항상 처음으로 설치 이벤트를 받습니다.(설치 이벤트는 IndexedDB를 생성하고, 사이트 assets을 캐싱하는 처리를 시작할 때 사용될 수 있습니다.) 설치 이벤트는 모든 것을 오프라인에서 사용할 수 있게 하는, 네이티브 또는 Firefox OS 앱을 설치하는 프로시저와 같은 종류입니다.
5. `oninstall` 핸들러가 완료되면, 서비스 워커가 설치되었다고 할 수 있습니다.
6. 다음은 활성(activation) 이벤트입니다. 서비스 워커가 설치되면, 활성 이벤트를 받게 됩니다. `onactivate` 는 이전 버전의 서비스 워커 스크립트에서 사용된 리소스들을 삭제하는 용도로서 주로 사용됩니다.
7. 이제 서비스 워커가 페이지들을 제어하게 될 것이지만, 오직 `register()` 가 성공적으로 수행된 후에 페이지들이 열리게 될 것입니다. 즉, 문서는 서비스 워커와 함께, 또는 없이도 라이프를 시작하고 유지합니다. 따라서 문서는 실제로 서비스 워커에 제어되기 위해서 재시작 되어야 할 것입니다.

![](sw-lifecycle.png)

The below graphic shows a summary of the available service worker events:

![install, activate, message, fetch, sync, push](sw-events.png)

### Promises

[Promises](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) are a great mechanism for running async operations, with success dependant on one another. This is central to the way service workers work.

Promises can do a great many things, but for now, all you need to know is that if something returns a promise, you can attach `.then()` to the end and include callbacks inside it for success, failure, etc., or you can insert `.catch()` on the end if you want to include a failure callback.

Let's compare a traditional synchronous callback structure to its asynchronous promise equivalent.

#### sync

```js
try {
  var value = myFunction();
  console.log(value);
} catch (err) {
  console.log(err);
}
```

#### async

```js
myFunction()
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
```

In the first example, we have to wait for `myFunction()` to run and return `value` before any more of the code can execute. In the second example, `myFunction()` returns a promise for `value`, then the rest of the code can carry on running. When the promise resolves, the code inside `then` will be run, asynchronously.

Now for a real example — what if we wanted to load images dynamically, but we wanted to make sure the images were loaded before we tried to display them? This is a standard thing to want to do, but it can be a bit of a pain. We can use `.onload` to only display the image after it's loaded, but what about events that start happening before we start listening to them? We could try to work around this using `.complete`, but it's still not foolproof, and what about multiple images? And, ummm, it's still synchronous, so blocks the main thread.

Instead, we could build our own promise to handle this kind of case. (See our [Promises test](https://github.com/mdn/promises-test) example for the source code, or [look at it running live](https://mdn.github.io/promises-test/).)

> **Note:** A real service worker implementation would use caching and onfetch rather than the deprecated XMLHttpRequest API. Those features are not used here so that you can focus on understanding Promises.

```js
function imgLoad(url) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "blob";

    request.onload = function () {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(
          Error(
            "Image didn't load successfully; error code:" + request.statusText,
          ),
        );
      }
    };

    request.onerror = function () {
      reject(Error("There was a network error."));
    };

    request.send();
  });
}
```

We return a new promise using the `Promise()` constructor, which takes as an argument a callback function with `resolve` and `reject` parameters. Somewhere in the function, we need to define what happens for the promise to resolve successfully or be rejected — in this case return a 200 OK status or not — and then call `resolve` on success, or `reject` on failure. The rest of the contents of this function is fairly standard XHR stuff, so we won't worry about that for now.

When we come to call the `imgLoad()` function, we call it with the url to the image we want to load, as we might expect, but the rest of the code is a little different:

```js
var body = document.querySelector("body");
var myImage = new Image();

imgLoad("myLittleVader.jpg").then(
  function (response) {
    var imageURL = window.URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
  },
  function (Error) {
    console.log(Error);
  },
);
```

On to the end of the function call, we chain the promise `then()` method, which contains two functions — the first one is executed when the promise successfully resolves, and the second is called when the promise is rejected. In the resolved case, we display the image inside `myImage` and append it to the body (it's argument is the `request.response` contained inside the promise's `resolve` method); in the rejected case we return an error to the console.

This all happens asynchronously.

> **참고:** You can also chain promise calls together, for example:
> `myPromise().then(success, failure).then(success).catch(failure);`

> **참고:** You can find a lot more out about promises by reading Jake Archibald's excellent [JavaScript Promises: there and back again](http://www.html5rocks.com/en/tutorials/es6/promises/).

## Service workers demo

To demonstrate just the very basics of registering and installing a service worker, we have created a simple demo called [sw-test](https://github.com/mdn/sw-test), which is a simple Star wars Lego image gallery. It uses a promise-powered function to read image data from a JSON object and load the images using Ajax, before displaying the images in a line down the page. We've kept things static and simple for now. It also registers, installs, and activates a service worker, and when more of the spec is supported by browsers it will cache all the files required so it will work offline!

![](demo-screenshot.png)

You can see the [source code on GitHub](https://github.com/mdn/sw-test/), and [view the example live](https://mdn.github.io/sw-test/). The one bit we'll call out here is the promise (see [app.js lines 22-47](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L22-L47)), which is a modified version of what you read about above, in the [Promises test demo](https://github.com/mdn/promises-test). It is different in the following ways:

1. In the original, we only passed in a URL to an image we wanted to load. In this version, we pass in a JSON fragment containing all the data for a single image (see what they look like in [image-list.js](https://github.com/mdn/sw-test/blob/gh-pages/image-list.js)). This is because all the data for each promise resolve has to be passed in with the promise, as it is asynchronous. If you just passed in the url, and then tried to access the other items in the JSON separately when the `for()` loop is being iterated through later on, it wouldn't work, as the promise wouldn't resolve at the same time as the iterations are being done (that is a synchronous process.)
2. We actually resolve the promise with an array, as we want to make the loaded image blob available to the resolving function later on in the code, but also the image name, credits and alt text (see [app.js lines 31-34](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L31-L34)). Promises will only resolve with a single argument, so if you want to resolve with multiple values, you need to use an array/object.
3. To access the resolved promise values, we then access this function as you'd then expect (see [app.js lines 60-64](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L60-L64)). This may seem a bit odd at first, but this is the way promises work.

## Enter service workers

Now let's get on to service workers!

### Registering your worker

The first block of code in our app's JavaScript file — `app.js` — is as follows. This is our entry point into using service workers.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw-test/sw.js", { scope: "/sw-test/" })
    .then(function (reg) {
      // registration worked
      console.log("Registration succeeded. Scope is " + reg.scope);
    })
    .catch(function (error) {
      // registration failed
      console.log("Registration failed with " + error);
    });
}
```

1. The outer block performs a feature detection test to make sure service workers are supported before trying to register one.
2. Next, we use the {{domxref("ServiceWorkerContainer.register()") }} function to register the service worker for this site, which is just a JavaScript file residing inside our app (note this is the file's URL relative to the origin, not the JS file that references it.)
3. The `scope` parameter is optional, and can be used to specify the subset of your content that you want the service worker to control. In this case, we have specified '`/sw-test/'`, which means all content under the app's origin. If you leave it out, it will default to this value anyway, but we specified it here for illustration purposes.
4. The `.then()` promise function is used to chain a success case onto our promise structure. When the promise resolves successfully, the code inside it executes.
5. Finally, we chain a `.catch()` function onto the end that will run if the promise is rejected.

This registers a service worker, which runs in a worker context, and therefore has no DOM access. You then run code in the service worker outside of your normal pages to control their loading.

A single service worker can control many pages. Each time a page within your scope is loaded, the service worker is installed against that page and operates on it. Bear in mind therefore that you need to be careful with global variables in the service worker script: each page doesn't get its own unique worker.

> **참고:** Your service worker functions like a proxy server, allowing you to modify requests and responses, replace them with items from its own cache, and more.

> **참고:** One great thing about service workers is that if you use feature detection like we've shown above, browsers that don't support service workers can just use your app online in the normal expected fashion. Furthermore, if you use AppCache and SW on a page, browsers that don't support SW but do support AppCache will use that, and browsers that support both will ignore the AppCache and let SW take over.

#### Why is my service worker failing to register?

This could be for the following reasons:

1. You are not running your application through HTTPS.
2. The path to your service worker file is not written correctly — it needs to be written relative to the origin, not your app's root directory. In our example, the worker is at `https://mdn.github.io/sw-test/sw.js`, and the app's root is `https://mdn.github.io/sw-test/`. But the path needs to be written as `/sw-test/sw.js`, not `/sw.js`.
3. The service worker being pointed to is on a different origin to that of your app. This is also not allowed.

![](important-notes.png)

Also note:

- The service worker will only catch requests from clients under the service worker's scope.
- The max scope for a service worker is the location of the worker.
- If your server worker is active on a client being served with the `Service-Worker-Allowed` header, you can specify a list of max scopes for that worker.
- In Firefox, Service Worker APIs are hidden and cannot be used when the user is in [private browsing mode](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history).

### Install and activate: populating your cache

After your service worker is registered, the browser will attempt to install then activate the service worker for your page/site.

The install event is fired when an install is successfully completed. The install event is generally used to populate your browser's offline caching capabilities with the assets you need to run your app offline. To do this, we use Service Worker's brand new storage API — {{domxref("cache")}} — a global on the service worker that allows us to store assets delivered by responses, and keyed by their requests. This API works in a similar way to the browser's standard cache, but it is specific to your domain. It persists until you tell it not to — again, you have full control.

> **참고:** The Cache API is not supported in every browser. (See the [Browser support](#browser_support) section for more information.) If you want to use this now, you could consider using a polyfill like the one available in [Google's Topeka demo](https://github.com/Polymer/topeka/blob/master/sw.js), or perhaps store your assets in [IndexedDB](/ko/docs/Web/API/IndexedDB_API).

Let's start this section by looking at a code sample — this is the [first block you'll find in our service worker](https://github.com/mdn/sw-test/blob/gh-pages/sw.js#L1-L18):

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
        "/sw-test/",
        "/sw-test/index.html",
        "/sw-test/style.css",
        "/sw-test/app.js",
        "/sw-test/image-list.js",
        "/sw-test/star-wars-logo.jpg",
        "/sw-test/gallery/",
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg",
      ]);
    }),
  );
});
```

1. Here we add an `install` event listener to the service worker (hence `this`), and then chain a {{domxref("ExtendableEvent.waitUntil()") }} method onto the event — this ensures that the service worker will not install until the code inside `waitUntil()` has successfully occurred.
2. Inside `waitUntil()` we use the [`caches.open()`](/ko/docs/Web/API/CacheStorage/open) method to create a new cache called `v1`, which will be version 1 of our site resources cache. This returns a promise for a created cache; once resolved, we then call a function that calls `addAll()` on the created cache, which for its parameter takes an array of origin-relative URLs to all the resources you want to cache.
3. If the promise is rejected, the install fails, and the worker won't do anything. This is ok, as you can fix your code and then try again the next time registration occurs.
4. After a successful installation, the service worker activates. This doesn't have much of a distinct use the first time your service worker is installed/activated, but it means more when the service worker is updated (see the [Updating your service worker](#updating_your_service_worker) section later on.)

> **참고:** [localStorage](/ko/docs/Web/Guide/API/DOM/Storage) works in a similar way to service worker cache, but it is synchronous, so not allowed in service workers.

> **참고:** [IndexedDB](/ko/docs/Web/API/IndexedDB_API) can be used inside a service worker for data storage if you require it.

### Custom responses to requests

Now you've got your site assets cached, you need to tell service workers to do something with the cached content. This is easily done with the `fetch` event.

![](sw-fetch.png)

A `fetch` event fires every time any resource controlled by a service worker is fetched, which includes the documents inside the specified scope, and any resources referenced in those documents (for example if `index.html` makes a cross origin request to embed an image, that still goes through its service worker.)

You can attach a `fetch` event listener to the service worker, then call the `respondWith()` method on the event to hijack our HTTP responses and update them with your own magic.

```js
this.addEventListener("fetch", function (event) {
  event
    .respondWith
    // magic goes here
    ();
});
```

We could start by simply responding with the resource whose url matches that of the network request, in each case:

```js
this.addEventListener("fetch", function (event) {
  event.respondWith(caches.match(event.request));
});
```

`caches.match(event.request)` allows us to match each resource requested from the network with the equivalent resource available in the cache, if there is a matching one available. The matching is done via url and vary headers, just like with normal HTTP requests.

Let's look at a few other options we have when defining our magic (see our [Fetch API documentation](/ko/docs/Web/API/Fetch_API) for more information about {{domxref("Request")}} and {{domxref("Response")}} objects.)

1. The `{{domxref("Response.Response","Response()")}}` constructor allows you to create a custom response. In this case, we are just returning a simple text string:

   ```js
   new Response("Hello from your friendly neighbourhood service worker!");
   ```

2. This more complex `Response` below shows that you can optionally pass a set of headers in with your response, emulating standard HTTP response headers. Here we are just telling the browser what the content type of our synthetic response is:

   ```js
   new Response(
     "<p>Hello from your friendly neighbourhood service worker!</p>",
     {
       headers: { "Content-Type": "text/html" },
     },
   );
   ```

3. If a match wasn't found in the cache, you could tell the browser to simply {{domxref("GlobalFetch.fetch","fetch")}} the default network request for that resource, to get the new resource from the network if it is available:

   ```js
   fetch(event.request);
   ```

4. If a match wasn't found in the cache, and the network isn't available, you could just match the request with some kind of default fallback page as a response using {{domxref("CacheStorage.match","match()")}}, like this:

   ```js
   caches.match("/fallback.html");
   ```

5. You can retrieve a lot of information about each request by calling parameters of the {{domxref("Request")}} object returned by the {{domxref("FetchEvent")}}:

   ```js
   event.request.url;
   event.request.method;
   event.request.headers;
   event.request.body;
   ```

## Recovering failed requests

So `caches.match(event.request)` is great when there is a match in the service worker cache, but what about cases when there isn't a match? If we didn't provide any kind of failure handling, our promise would resolve with `undefined` and we wouldn't get anything returned.

Fortunately service workers' promise-based structure makes it trivial to provide further options towards success. We could do this:

```js
this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});
```

If the resources isn't in the cache, it is requested from the network.

If we were being really clever, we would not only request the resource from the network; we would also save it into the cache so that later requests for that resource could be retrieved offline too! This would mean that if extra images were added to the Star Wars gallery, our app could automatically grab them and cache them. The following would do the trick:

```js
this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (resp) {
      return (
        resp ||
        fetch(event.request).then(function (response) {
          return caches.open("v1").then(function (cache) {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});
```

Here we return the default network request with `return fetch(event.request)`, which returns a promise. When this promise is resolved, we respond by running a function that grabs our cache using `caches.open('v1')`; this also returns a promise. When that promise resolves, `cache.put()` is used to add the resource to the cache. The resource is grabbed from `event.request`, and the response is then cloned with `response.clone()` and added to the cache. The clone is put in the cache, and the original response is returned to the browser to be given to the page that called it.

Cloning the response is necessary because request and response streams can only be read once. In order to return the response to the browser and put it in the cache we have to clone it. So the original gets returned to the browser and the clone gets sent to the cache. They are each read once.

The only trouble we have now is that if the request doesn't match anything in the cache, and the network is not available, our request will still fail. Let's provide a default fallback so that whatever happens, the user will at least get something:

```js
this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (resp) {
        return (
          resp ||
          fetch(event.request).then(function (response) {
            caches.open("v1").then(function (cache) {
              cache.put(event.request, response.clone());
            });
            return response;
          })
        );
      })
      .catch(function () {
        return caches.match("/sw-test/gallery/myLittleVader.jpg");
      }),
  );
});
```

We have opted for this fallback image because the only updates that are likely to fail are new images, as everything else is depended on for installation in the `install` event listener we saw earlier.

## <a id="Updating your service worker" name="Updating your service worker">Updating your service worker</a>

If your service worker has previously been installed, but then a new version of the worker is available on refresh or page load, the new version is installed in the background, but not yet activated. It is only activated when there are no longer any pages loaded that are still using the old service worker. As soon as there are no more such pages still loaded, the new service worker activates.

You'll want to update your `install` event listener in the new service worker to something like this (notice the new version number):

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',

        …

        // include other new resources for the new version...
      ]);
    })
  );
});
```

While this happens, the previous version is still responsible for fetches. The new version is installing in the background. We are calling the new cache `v2`, so the previous `v1` cache isn't disturbed.

When no pages are using the current version, the new worker activates and becomes responsible for fetches.

### Deleting old caches

You also get an `activate` event. This is a generally used to do stuff that would have broken the previous version while it was still running, for example getting rid of old caches. This is also useful for removing data that is no longer needed to avoid filling up too much disk space — each browser has a hard limit on the amount of cache storage that a given service worker can use. The browser does its best to manage disk space, but it may delete the Cache storage for an origin. The browser will generally delete all of the data for an origin or none of the data for an origin.

Promises passed into `waitUntil()` will block other events until completion, so you can rest assured that your clean-up operation will have completed by the time you get your first `fetch` event on the new cache.

```js
this.addEventListener("activate", function (event) {
  var cacheWhitelist = ["v2"];

  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
```

## Developer tools

Chrome has `chrome://inspect/#service-workers`, which shows current service worker activity and storage on a device, and `chrome://serviceworker-internals`, which shows more detail and allows you to start/stop/debug the worker process. In the future they will have throttling/offline modes to simulate bad or non-existent connections, which will be a really good thing.

Firefox has also started to implement some useful tools related to service workers:

- You can navigate to [`about:debugging`](/ko/docs/Tools/about:debugging) to see what SWs are registered and update/remove them.
- When testing you can get around the HTTPS restriction by checking the "Enable Service Workers over HTTP (when toolbox is open)" option in the [Firefox Developer Tools settings](/ko/docs/Tools/Settings).

> **참고:** You may serve your app from `http://localhost` (e.g. using `me@localhost:/my/app$ python -m SimpleHTTPServer`) for local development. See [Security considerations](https://www.w3.org/TR/service-workers/#security-considerations)

## 명세서

{{Specifications}}

## See also

- [The Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- Download the [Service Workers 101 cheatsheet](sw101.png).
- [Promises](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/ko/docs/Web/Guide/Performance/Using_web_workers)
