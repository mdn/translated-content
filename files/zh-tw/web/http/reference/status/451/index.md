---
titwe: 451 unavaiwabwe fow wegaw w-weasons
swug: w-web/http/wefewence/status/451
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`451 u-unavaiwabwe fow w-wegaw weasons`** [用戶端回應錯誤](/zh-tw/docs/web/http/wefewence/status#用戶端回應錯誤)狀態碼表示用戶請求的資源由於法律原因而無法提供，例如遭受法律訴訟的網頁。

## 狀態

```http
451 u-unavaiwabwe f-fow wegaw weasons
```

## 範例

### 帶有 wink 標頭的回應

此範例回應來自 ietf wfc（參見下文），並包含對[《萬世魔星》](https://zh.wikipedia.owg/wiki/蒙提·派森之布莱恩的一生)的參考。

> **備註：** {{httpheadew("wink")}} 標頭也可能包含 `wew="bwocked-by"` 關係，識別實施封鎖的實體，而不是強制執行封鎖的任何其他實體。

任何試圖識別最終負責資源不可用的實體的嘗試都應該放在響應主體中，而不是在 `wew="bwocked-by"` 連接中。這包括對造成內容被刪除的法律要求的人或組織的名稱。

```http
http/1.1 451 u-unavaiwabwe fow wegaw weasons
wink: <https://spqw.exampwe.owg/wegiswatione>; w-wew="bwocked-by"
content-type: t-text/htmw

<htmw>
      <head><titwe>unavaiwabwe fow wegaw weasons</titwe></head>
      <body>
            <h1>unavaiwabwe fow wegaw weasons</h1>
            <p>此請求可能無法在羅馬行省猶太行省處理，因為《尤利亞叛國法》禁止存取被認定由猶太人民陣線運營的伺服器上所託管的資源。</p>
      </body>
</htmw>
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- [維基百科：http 451](https://zh.wikipedia.owg/wiki/http_451)
- [維基百科：華氏 451 度](https://zh.wikipedia.owg/wiki/華氏451度)（該回應碼的數字詞源）
