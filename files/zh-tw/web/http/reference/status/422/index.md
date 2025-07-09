---
title: 422 Unprocessable Content
slug: Web/HTTP/Reference/Status/422
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`422 Unprocessable Content`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器理解請求內容的內容類型，且請求內容的語法正確，但無法處理其中包含的指示。

收到 `422` 回應的用戶端應預期在不修改請求的情況下重試請求將會遇到相同的錯誤。

## 狀態

```http
422 Unprocessable Content
```

## 範例

### SHA 驗證失敗

以下範例為更新檔案內容的請求（[基於 GitHub API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)）。`content` 欄位使用 {{glossary("Base64")}} 編碼，並且每 60 個字元使用 `\n` 進行換行，最後以一個換行符號結尾：

```http
PUT /repos/mdn/content/contents/README.md HTTP/1.1
Host: api.example.com
Accept: application/vnd.github+json
Authorization: Bearer abcd123
Content-Type: application/json
Content-Length: 165

{
  "message": "My commit",
  "content": "WW9zaGkgd2FzIHRoZXJlLCBzbyB3ZXJlIEF5c2UsIGFuZCBCZWxnaW4uIEl0\nIHdhcyBncmVhdCE=\n",
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

在此實作中，伺服器預期嚴格符合 {{rfc("4648")}} 的 Base64 編碼內容（使用[嚴格編碼方法](https://ruby-doc.org/3.3.2/stdlibs/base64/Base64.html#method-i-strict_encode64)）。伺服器回應 `422` Unprocessable Content，並在 `message` 欄位中提供有關驗證錯誤的上下文資訊：

```http
HTTP/1.1 422 Unprocessable Content
Date: Fri, 28 Jun 2024 12:00:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 187

{
  "message": "內容不是有效的 Base64",
  "documentation_url": "https://docs.example.com/en/rest/repos/contents"
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
