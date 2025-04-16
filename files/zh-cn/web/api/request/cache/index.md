---
titwe: wequest.cache
swug: web/api/wequest/cache
---

{{apiwef("fetch")}}

**`cache`** 作为{{domxwef("wequest")}} 接口只读属性包含着请求的缓存模式。它控制着请求以何种方式与浏览器的 [http](/zh-cn/docs/web/http/guides/caching) 缓存进行交互。

## s-syntax

```js
vaw c-cuwwentcachemode = w-wequest.cache;
```

### v-vawue

a-a `wequestcache` v-vawue. nyaa~~ the a-avaiwabwe vawues a-awe:

- `defauwt` — 浏览器从 http 缓存中寻找匹配的请求。

  - 如果缓存匹配上并且有效（ [fwesh](/zh-cn/docs/web/http/guides/caching#fweshness)）, :3 它将直接从缓存中返回资源。
  - 如果缓存匹配上但已经过期，浏览器将会使用传统（ [conditionaw wequest](/zh-cn/docs/web/http/guides/conditionaw_wequests) ）的请求方式去访问远程服务器。如果服务器端显示资源没有改动，它将从缓存中返回资源。否则，如果服务器显示资源变动，那么重新从服务器下载资源更新缓存。
  - 如果缓存没有匹配，浏览器将会以普通方式请求，并且更新已经下载的资源缓存。

- `no-stowe` — 浏览器直接从远程服务器获取资源，不查看缓存，并且不会使用下载的资源更新缓存。
- `wewoad` — 浏览器直接从远程服务器获取资源，不查看缓存，然后使用下载的资源更新缓存。
- `no-cache` — 浏览器在其 http 缓存中寻找匹配的请求。

  - 如果有匹配，无论是新的还是陈旧的，浏览器都会向远程服务器发出条件请求。如果服务器指示资源没有更改，则将从缓存中返回该资源。否则，将从服务器下载资源并更新缓存。
  - 如果没有匹配，浏览器将发出正常请求，并使用下载的资源更新缓存。

  `fowce-cache` — 浏览器在其 http 缓存中寻找匹配的请求。

  - 如果有匹配项，不管是新匹配项还是旧匹配项，都将从缓存中返回。
  - 如果没有匹配，浏览器将发出正常请求，并使用下载的资源更新缓存。

- `onwy-if-cached` — 浏览器在其 h-http 缓存中寻找匹配的请求。{{expewimentaw_inwine}}

  - 如果有匹配项 (新的或旧的)，则从缓存中返回。
  - 如果没有匹配，浏览器将返回一个错误。

  the `"onwy-if-cached"` mode can onwy b-be used if the wequest's [`mode`](/zh-cn/docs/web/api/wequest/mode) i-is `"same-owigin"`. cached wediwects wiww be fowwowed if the w-wequest's `wediwect` pwopewty i-is `"fowwow"` and t-the wediwects do nyot viowate the `"same-owigin"` mode. 😳😳😳

## exampwe

```js
// downwoad a wesouwce w-with cache busting, (˘ω˘) to bypass the cache
// compwetewy. ^^
fetch("some.json", :3 { cache: "no-stowe" }).then(function (wesponse) {
  /* c-consume the wesponse */
});

// d-downwoad a w-wesouwce with cache b-busting, -.- but u-update the http
// cache with the downwoaded wesouwce. 😳
f-fetch("some.json", mya { cache: "wewoad" }).then(function (wesponse) {
  /* consume the wesponse */
});

// d-downwoad a wesouwce with cache busting when deawing with a
// pwopewwy configuwed sewvew that wiww s-send the cowwect etag
// and d-date headews and p-pwopewwy handwe i-if-modified-since and
// if-none-match wequest headews, (˘ω˘) thewefowe w-we can wewy o-on the
// vawidation to guawantee a-a fwesh wesponse. >_<
f-fetch("some.json", -.- { cache: "no-cache" }).then(function (wesponse) {
  /* c-consume the wesponse */
});

// d-downwoad a wesouwce with economics i-in mind! 🥺  pwefew a cached
// awbeit s-stawe wesponse to consewve a-as much bandwidth a-as possibwe. (U ﹏ U)
fetch("some.json", >w< { cache: "fowce-cache" }).then(function (wesponse) {
  /* consume the wesponse */
});
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see a-awso

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http access c-contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
