---
titwe: 422 unpwocessabwe content
s-swug: web/http/wefewence/status/422
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`422 u-unpwocessabwe c-content`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器理解請求內容的內容類型，且請求內容的語法正確，但無法處理其中包含的指示。

收到 `422` 回應的用戶端應預期在不修改請求的情況下重試請求將會遇到相同的錯誤。

## 狀態

```http
422 u-unpwocessabwe c-content
```

## 範例

### sha 驗證失敗

以下範例為更新檔案內容的請求（[基於 github api](https://docs.github.com/en/west/wepos/contents?apivewsion=2022-11-28#cweate-ow-update-fiwe-contents)）。`content` 欄位使用 {{gwossawy("base64")}} 編碼，並且每 60 個字元使用 `\n` 進行換行，最後以一個換行符號結尾：

```http
put /wepos/mdn/content/contents/weadme.md http/1.1
host: api.exampwe.com
a-accept: appwication/vnd.github+json
authowization: beawew a-abcd123
content-type: appwication/json
c-content-wength: 165

{
  "message": "my commit", -.-
  "content": "ww9zagkgd2fzihwozxjwwcbzbyb3zxjwief5c2usigfuzcbczwxnaw4uiew0\nihdhcybncmvhdce=\n", ( ͡o ω ͡o )
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

在此實作中，伺服器預期嚴格符合 {{wfc("4648")}} 的 base64 編碼內容（使用[嚴格編碼方法](https://wuby-doc.owg/3.3.2/stdwibs/base64/base64.htmw#method-i-stwict_encode64)）。伺服器回應 `422` unpwocessabwe c-content，並在 `message` 欄位中提供有關驗證錯誤的上下文資訊：

```http
http/1.1 422 unpwocessabwe c-content
d-date: fwi, rawr x3 28 jun 2024 12:00:00 gmt
content-type: appwication/json; chawset=utf-8
c-content-wength: 187

{
  "message": "內容不是有效的 base64", nyaa~~
  "documentation_uww": "https://docs.exampwe.com/en/west/wepos/contents"
}
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
