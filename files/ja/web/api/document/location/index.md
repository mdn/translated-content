---
title: Document.location
slug: Web/API/Document/location
---

{{APIRef("DOM")}}

**`Document.location`** は読み取り専用のプロパティで、この文書の URL に関する情報を持った {{domxref("Location")}} オブジェクトを返します。これはその URL を変更したり他の URL を読み込んだりするためのメソッドも提供しています。

`Document.location` は*読み取り専用*の `Location` オブジェクトですが、 {{domxref("DOMString")}} を代入することができます。つまり、 document.location が文字列であるかのように扱うことができます。 `document.location = 'http://www.example.com'` は `document.location.href = 'http://www.example.com'` の別名です。

URL を文字列として受け取るだけであれば、読み取り専用の {{domxref("document.URL")}} プロパティも利用することができます。

現在の文書が閲覧コンテキスト内にない場合、返値は `null` となります。

## 構文

s

```
locationObj = document.location
document.location = 'http://www.mozilla.org' // Equivalent to document.location.href = 'http://www.mozilla.org'
```

## 例

```js
console.log(document.location);
// Location オブジェクトをコンソールへ表示
```

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#the-location-interface", "Document.location")}} | {{Spec2('HTML WHATWG')}} | {{SpecName("HTML5 W3C")}} から変更なし |
| {{SpecName('HTML5 W3C', "browsers.html#the-location-interface", "Document.location")}} | {{Spec2('HTML5 W3C')}}     | 初回定義                                      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 返値のインターフェイスである {{domxref("Location")}}
- 同様の情報で{{Glossary("browsing context", "閲覧コンテキスト")}}に結びつけられている {{domxref("Window.location")}}
