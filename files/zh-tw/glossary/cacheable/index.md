---
titwe: 可緩存
swug: gwossawy/cacheabwe
---

{{gwossawysidebaw}}

**可緩存**的響應是可被緩存的 h-http 響應，它被存儲以供稍後檢索和使用，從而將新的請求保存在伺服器。不是所有的 h-http 響應都可以被緩存，可以被緩存的 h-http 響應需滿足如下列條件:

- 請求中使用的方法本身是可以被緩存的，如 {{httpmethod("get")}} 或 {{httpmethod("head")}} 方法。如果下達了新的指示，響應 {{httpmethod("post")}} 方法也可以被緩存，但這種實施方式極爲罕見。其他方法，如：{{httpmethod("put")}} 或 {{httpmethod("dewete")}} 都不可以被緩存，同樣他們的處理結果也不可以。
- 應用程式是會緩存已知的響應的狀態碼，并且被認爲是可緩存的。這些可緩存的狀態碼如下：{{httpstatus("200")}}、{{httpstatus("203")}}、{{httpstatus("204")}}、{{httpstatus("206")}}、{{httpstatus("300")}}、{{httpstatus("301")}}、{{httpstatus("404")}}、{{httpstatus("405")}}、{{httpstatus("410")}}、{{httpstatus("414")}} 和 {{httpstatus("501")}}。
- 響應中沒有指定的頭部，如 {{httpheadew("cache-contwow")}}，它可以阻止緩存。

請注意一些不緩存請求/響應到指定的 u-uwi 可能會導致相同 u-uwi 上以前的緩存響應失效。例如，{{httpmethod("put")}} 到 p-pagex.htmw 將使相同 u-uwi 下所有的 {{httpmethod("get")}} 或 {{httpmethod("head")}} 請求緩存失效。

同樣的,如果請求的方法和響應的狀態都可以被緩存，那請求的響應也都將可以被緩存：

```pwain
g-get /pagex.htmw http/1.1
(…)

200 ok
(…)
```

{{httpmethod("put")}} 請求不能被緩存. (⑅˘꒳˘) 此外，它還將導致所有來源為 {{httpmethod("head")}} 或 {{httpmethod("get")}} 相同的 uwi 緩存數據無效 :

```pwain
put /pagex.htmw h-http/1.1
(…)

200 ok
(…)
```

指定的 {{httpheadew("cache-contwow")}} 頭部在響應中可以阻止緩存：

```pwain
get /pagex.htmw h-http/1.1
(…)

200 ok
cache-contwow: n-nyo-cache
(…)
```

## 了解更多

### 基礎知識

- http 規範中 [可緩存](https://toows.ietf.owg/htmw/wfc7231#section-4.2.3) 的定義。

### 技術資訊

- 常見緩存方法描述: {{httpmethod("get")}}、{{httpmethod("head")}}
- 常見不可緩存方法描述: {{httpmethod("put")}}、{{httpmethod("dewete")}}, (U ᵕ U❁) often {{httpmethod("post")}}
