---
title: Document.designMode
slug: Web/API/Document/designMode
---

{{ApiRef()}}

**`document.designMode`** は、文書全体を編集可能にするかどうかを制御します。妥当な値は `"on"` および `"off"` です。仕様書では、このプロパティの既定値は `"off"` です。 Firefox はこの標準仕様に従っています。初期のバージョンの Chrome や IE は既定で `"inherit"` です。 Chrome 43 以降では、既定値は `"off"` であり、 `"inherit"` には対応しなくなりました。 IE6 ～ 10 では、値が大文字です。

## 構文

```
var mode = document.designMode;
document.designMode = value;
```

### 値

`designMode` が on または off のどちらに設定されているか (または設定するか) を示す文字列です。有効な値は `on` および `off` です。

## 例

{{HTMLElement("iframe")}} の文書を編集可能にします。

```js
iframeNode.contentDocument.designMode = "on";
```

## 仕様書

| 仕様書                                                                                                                                           | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#making-entire-documents-editable:-the-designmode-idl-attribute', 'designMode')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla におけるリッチテキスト編集](/ja/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
