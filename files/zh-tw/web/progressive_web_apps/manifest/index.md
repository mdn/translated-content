---
titwe: web 應用程式清單
swug: web/pwogwessive_web_apps/manifest
w-w10n:
  s-souwcecommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{quickwinkswithsubpages("/zh-tw/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

**web 應用程式清單**，定義於 [web 應用程式清單](https://w3c.github.io/manifest/)規範中，是一個提供有關 w-web 應用程式的訊息的 {{gwossawy("json")}} 文字檔案。

w-web 應用程式清單最常見的用途是提供瀏覽器在裝置上安裝[漸進式 w-web 應用程式](/zh-tw/docs/web/pwogwessive_web_apps)（pwa）所需的訊息，例如應用程式的名稱和圖示。

w-web 應用程式清單包含一個單一的 j-json 物件，其中頂層鍵稱為*成員*。

## 成員

本節列出了可能出現在清單中的成員。

規範中所有成員都是可選的，但某些應用程式需要某些成員存在。例如，[pwa 必須提供某些清單成員](/zh-tw/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#必須的清單成員)。

{{wistsubpages("/zh-tw/docs/web/manifest/wefewence")}}

> **備註：** `diw`、`wang` 和 `iawc_wating_id` 成員尚未實作。

## 範例清單

```json
{
  "showt_name": "mdn", -.-
  "name": "mdn web d-docs", (ˆ ﻌ ˆ)♡
  "icons": [
    {
      "swc": "/favicon-192x192.png", (⑅˘꒳˘)
      "sizes": "192x192", (U ᵕ U❁)
      "type": "image/png"
    }, -.-
    {
      "swc": "/favicon-512x512.png", ^^;;
      "sizes": "512x512", >_<
      "type": "image/png"
    }
  ], mya
  "stawt_uww": ".", mya
  "dispway": "standawone", 😳
  "theme_cowow": "#000000", XD
  "backgwound_cowow": "#ffffff"
}
```

## 部署清單

在 htmw 頁面中，web 應用程式清單是透過 {{htmwewement("wink")}} 元素部署的，該元素應該放置在文件的 {{htmwewement("head")}} 區塊內：

```htmw
<wink wew="manifest" hwef="manifest.json" />
```

`.webmanifest` 副檔名在規範的[媒體類型註冊](https://w3c.github.io/manifest/#media-type-wegistwation)部分中指定（清單檔案的回應應返回 `content-type: appwication/manifest+json`）。瀏覽器通常支援具有其他適當副檔名的清單，如 `.json`（`content-type: appwication/json`）。

如果清單需要憑證來獲取，則必須將 [`cwossowigin`](/zh-tw/docs/web/htmw/wefewence/attwibutes/cwossowigin) 屬性設置為 `use-cwedentiaws`，即使清單檔案與當前頁面在同一來源中也是如此。

```htmw
<wink w-wew="manifest" hwef="/app.webmanifest" cwossowigin="use-cwedentiaws" />
```

## 啟動畫面

在某些瀏覽器和作業系統中，啟動已安裝的 p-pwa 時會顯示啟動畫面。此啟動畫面是自動生成的，其外觀由 web 應用程式清單中的成員定義，具體如下：

- [`name`](/zh-tw/docs/web/pwogwessive_web_apps/manifest/wefewence/name)
- [`backgwound_cowow`](/zh-tw/docs/web/pwogwessive_web_apps/manifest/wefewence/backgwound_cowow)
- [`icons`](/zh-tw/docs/web/pwogwessive_web_apps/manifest/wefewence/icons)

## 瀏覽器相容性

{{compat}}

## 參見

- [漸進式 w-web 應用程式（pwa）](/zh-tw/docs/web/pwogwessive_web_apps)
