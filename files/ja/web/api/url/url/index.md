---
title: URL()
slug: Web/API/URL/URL
---

{{APIRef("URL API")}}

**`URL()`** コンストラクターは、パラメーターによって定義された URL を表す、新しく生成された {{domxref("URL")}} オブジェクトを返します。

与えられたベース URL または結果の URL が有効な URL でない場合、JavaScript の {{jsxref("TypeError")}} 例外がスローされます。

{{AvailableInWorkers}}

## 構文

```
url = new URL(url, [base])
```

### パラメーター

- `url`
  - : 絶対 URL または相対 URL を表す {{domxref("USVString")}}。`url` が相対 URL の場合、`base` は必須であり、ベース URL として使用されます。`url` が絶対 URL の場合、指定された `base` は無視されます。
- `base`\_ \_{{optional_inline}}
  - : `url` が相対 URL の場合に使用するベース URL を表す {{domxref("USVString")}}。 指定しない場合のデフォルトは `''` です。

> **メモ:** 既存の {{domxref("URL")}} オブジェクトを `base` に使用することも可能で、オブジェクトの {{domxref("URL.href","href")}} プロパティにそれ自体を文字列化します。

### 例外

| 例外                             | 説明                                                                                            |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | `url` (絶対 URL の場合) または `base` + `url` (相対 URL の場合) が、有効な URL ではありません。 |

## 例

```js
// ベース URL
var m = 'https://developer.mozilla.org';
var a = new URL("/", m);                                // => 'https://developer.mozilla.org/'
var b = new URL(m);                                     // => 'https://developer.mozilla.org/'

        new URL('en-US/docs', b);                      // => 'https://developer.mozilla.org/en-US/docs'
var d = new URL('/en-US/docs', b);                     // => 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', d);                     // => 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', a);                     // => 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
                                                       // => 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', '');                    // '' は有効な URL ではないため、TypeError 例外が発生します
        new URL('/en-US/docs');                        // '/en-US/docs' は有効な URL ではないため、TypeError 例外が発生します
        new URL('http://www.example.com', );           // => 'http://www.example.com/'
        new URL('http://www.example.com', b);          // => 'http://www.example.com/'

        new URL("//foo.com", "https://example.com")    // => 'https://foo.com' (相対 URL を参照)
```

## 仕様

| 仕様                                                             | 状態                 | コメント |
| ---------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#constructors', 'URL.URL()')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.URL")}}

## 関連項目

- 所属しているインターフェース: {{domxref("URL")}}。
