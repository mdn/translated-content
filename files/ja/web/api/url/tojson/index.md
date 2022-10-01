---
title: URL.toJSON()
slug: Web/API/URL/toJSON
---

{{APIRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`toJSON()`** メソッドは、URL のシリアル化されたバージョンを含む {{domxref("USVString")}} を返しますが、実際には {{domxref("URL.toString()")}} と同じ効果があるようです。

（訳注：このメソッドは、{{jsxref("JSON.stringify()")}} メソッドが、このメソッドを持つオブジェクトを JSON 文字列に変換するために使います。）

{{AvailableInWorkers}}

## 構文

```
json = url.toJSON();
```

### パラメーター

なし。

### 戻り値

{{domxref("USVString")}}。

## 例

```
const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toJSON()
```

## 仕様

| 仕様                                                                 | 状態                 | コメント |
| -------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-tojson', 'toJSON()')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.toJSON")}}
