---
title: WindowOrWorkerGlobalScope.origin
slug: Web/API/origin
original_slug: Web/API/WindowOrWorkerGlobalScope/origin
---

{{APIRef()}}{{SeeCompatTable}}

{{domxref("WindowOrWorkerGlobalScope")}} インターフェイスの読み取り専用プロパティ **`origin`** は、グローバルスコープの文字列としてシリアライズされた origin を返します。

## 構文

```
var myOrigin = self.origin; // or just origin
```

### 値

{{domxref("USVString")}}.

## 例

worker script 内から実行される以下のスニペットは、メッセージを受け取る度にワーカーのグローバルスコープの origin をコンソールに記録します。

```js
onmessage = function() {
  console.log(self.origin);
};
```

もし origin が scheme/host/port tuple 出ない場合 (あなたがローカルで実行しようとしている、言い換えると `file://` という URL の場合)、 `origin` は `"null"` という文字列を返すでしょう。

## 仕様

| 仕様                                                                                                                         | ステータス                       | コメント   |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-origin', 'WindowOrWorkerGlobalScope.origin')}} | {{Spec2('HTML WHATWG')}} | 初期定義。 |

## ブラウザ互換性

{{Compat("api.WindowOrWorkerGlobalScope.origin")}}
