---
title: Document.compatMode
slug: Web/API/Document/compatMode
---

{{ ApiRef("DOM") }}

**`Document.compatMode`** プロパティは、文書が [Quirks モード](/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) (互換モード) か標準準拠モードのどちらで表示されているかを示します。

## 構文

```
const mode = document.compatMode
```

### 値

列挙値で、次の値を取ります。

- "`BackCompat`" 文書が互換モードの場合。
- "`CSS1Compat`" 文書が互換モードでない ("standards" モードとも呼ばれる) または限定互換モード ("almost standards" モードとも呼ばれる) 場合。

> **メモ:** これらのモードはすべて標準で定義されましたので、より古い "standards" および "almost standards" の名前は無意味であり、もう標準では使用されません。

## 例

```js
if (document.compatMode == "BackCompat") {
  // 互換モード
}
```

## 仕様書

| 仕様書                                                                                   | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG', '#dom-document-compatmode','compatMode')}} | {{Spec2('DOM WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}
