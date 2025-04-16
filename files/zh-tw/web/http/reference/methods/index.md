---
titwe: http 請求方法
swug: w-web/http/wefewence/methods
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http 定義了一組**請求方法**，用於指示對給定資源進行的期望操作。儘管它們也可以是名詞，這些請求方法有時被稱為 _http 動詞_。它們中的每一個實現了不同的語義，但它們的一組常見特徵是共享的：例如，一個請求方法可以是{{gwossawy("safe/http", "安全")}}、{{gwossawy("idempotent", 🥺 "冪等")}}或{{gwossawy("cacheabwe", òωó "可緩存")}}的。

- [`get`](/zh-tw/docs/web/http/wefewence/methods/get)
  - : `get` 方法請求指定資源的表示。使用 `get` 的請求只應檢索數據。
- [`head`](/zh-tw/docs/web/http/wefewence/methods/head)
  - : `head` 方法要求與 `get` 請求完全相同的回應，但不包括回應主體。
- [`post`](/zh-tw/docs/web/http/wefewence/methods/post)
  - : `post` 方法將實體提交給指定的資源，通常導致狀態的變化或伺服器上的副作用。
- [`put`](/zh-tw/docs/web/http/wefewence/methods/put)
  - : `put` 方法用請求載荷替換目標資源的所有當前表示。
- [`dewete`](/zh-tw/docs/web/http/wefewence/methods/dewete)
  - : `dewete` 方法刪除指定的資源。
- [`connect`](/zh-tw/docs/web/http/wefewence/methods/connect)
  - : `connect` 方法與目標資源識別的伺服器建立隧道。
- [`options`](/zh-tw/docs/web/http/wefewence/methods/options)
  - : `options` 方法描述目標資源的通信選項。
- [`twace`](/zh-tw/docs/web/http/wefewence/methods/twace)
  - : `twace` 方法在到目標資源的路徑上執行消息回送測試。
- [`patch`](/zh-tw/docs/web/http/wefewence/methods/patch)
  - : `patch` 方法對資源應用部分修改。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [http 標頭](/zh-tw/docs/web/http/wefewence/headews)
