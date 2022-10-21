---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
---

{{APIRef("Fullscreen API")}}

**`Element.requestFullscreen()`** メソッドは、要素を全画面表示するための非同期的な要求を発行します。

要素が全画面モードに移行することは保証されていません。全画面モードに移行する許可が与えられている場合は、返される {{jsxref("Promise")}} が解決され、文書が全画面モードになったことを知ることができる {{event("fullscreenchange")}} イベントを受け取るようになります。権限が拒否された場合は、代わりに {{event('fullscreenerror')}} イベントを受け取ります。

このメソッドはユーザーの操作又は機器の方向の変更によって呼び出す必要があり、そうでなければ失敗します。

> **メモ:** 全画面で表示することができる要素は、 HTML 名前空間にあり (つまり、標準の HTML の要素であり)、加えて {{HTMLElement("svg")}} 要素や {{HTMLElement("math")}} 要素、文書の最上位にある要素、又は {{htmlattrxref("allowfullscreen", "iframe")}} 属性を持つ {{HTMLElement('iframe')}} だけです。すなわち、 {{HTMLElement('frame')}} や {{HTMLElement('object')}} の内部にある要素は全画面で表示できません。

## 構文

```
var Promise = Element.requestFullscreen();
```

### 引数

なし。

### 返値

全画面への移行が完了した場合は、 `undefined` の値で解決した {{jsxref("Promise")}}。

### 例外

全画面のリクエストが失敗した場合は、 Promise が例外で拒否されるかもしれません。発生しうる例外は以下の通りです。

- 要素の文書が、全画面への移行ができる状態にない (つまり、 `defaultView` がない)。
- 要素が HTML, SVG, Math の要素ではない
- 全画面が許可されていない (例えば、ユーザーの操作ではない) 又は対応していない。

<!---->

- `{{jsxref("TypeError")}}`
  - : 以下の状況の一つが発生する可能性あります。

## 例

`requestFullscreen()` を呼び出す前に、 {{event("fullscreenchange")}} 及び {{event("fullscreenerror")}} イベントのハンドラーを設定してください。そうすれば、いつ全画面モードに切り替えることに成功したか (又は権限がなくて拒否されたか) を知ることができます。

tbd

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("Fullscreen", "#dom-element-requestfullscreen", "Element.requestFullscreen()")}} | {{Spec2("Fullscreen")}} | 初回定義 |

## ブラウザーの対応

{{Compat}}

## 関連情報

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}
- {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
