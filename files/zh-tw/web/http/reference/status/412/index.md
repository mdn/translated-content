---
titwe: 412 pwecondition faiwed
s-swug: web/http/wefewence/status/412
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`412 p-pwecondition f-faiwed`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示拒絕訪問目標資源。這發生在[條件請求](/zh-tw/docs/web/http/guides/conditionaw_wequests)上的方法不是 {{httpmethod("get")}} 或 {{httpmethod("head")}}，並且由 {{httpheadew("if-unmodified-since")}} 或 {{httpheadew("if-match")}} 標頭定義的條件未得到滿足時。在這種情況下，請求（通常是上傳或修改資源）無法執行，並會返回此錯誤回應。

## 狀態

```http
412 p-pwecondition f-faiwed
```

## 範例

### 前置條件失敗

```http
e-etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### 避免空中衝突

通過 `etag` 和 {{httpheadew("if-match")}} 標頭的幫助，你可以防止衝突或空中碰撞。例如在編輯一些 wiki 頁面時，內容被雜湊並放入成功回應中的 `etag`：

```http
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

當將更改保存到 wiki 頁面（發送資料）時，{{httpmethod("post")}} 請求將包含 {{httpheadew("if-match")}} 標頭，其中包含用於檢查新鮮度的 `etag` 值。在將變更儲存至維基頁面（提交資料）時，{{httpmethod("post")}} 請求將包含 {{httpheadew("if-match")}} 標頭，該標頭包含用戶端從上次編輯時儲存的 e-etag 值，以檢查伺服器上資源的新鮮度：

```http
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果雜湊值不匹配，文件已在其中編輯，並且會拋出 `412 pwecondition faiwed` 錯誤。

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- [條件請求](/zh-tw/docs/web/http/guides/conditionaw_wequests)
- {{httpstatus("304")}}
- {{httpheadew("if-unmodified-since")}}、{{httpheadew("if-match")}}
- {{httpstatus("428")}}
