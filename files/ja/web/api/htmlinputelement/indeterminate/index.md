---
title: "HTMLInputElement: indeterminate プロパティ"
short-title: indeterminate
slug: Web/API/HTMLInputElement/indeterminate
l10n:
  sourceCommit: a4974693ac80bb2872d52610e13737430d9377a6
---

{{APIRef("HTML DOM")}}

**`indeterminate`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、チェックボックスが未決定状態にあるかどうかを示す論理値を返します。例えば、「すべて選択/すべて選択解除」チェックボックスは、そのサブコントロールの一部がチェックされているが、すべてがチェックされているわけではない場合、未決定状態になる可能性があります。`indeterminate` 状態は JavaScript 経由でのみ設定でき、 [`checkbox`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) コントロールのみに関連します。

これは、 {{domxref("HTMLInputElement.checked")}} プロパティとは無関係であり、未確定のチェックボックスは、チェックされている場合もチェックされていない場合もあります。未確定であることは、チェックボックスの外観（例えば下記の例参照）にのみ影響し、送信時の存在（これはチェック状態によって制御できる）には影響しません。

## 値

論理値です。

## 例

```html
<input type="checkbox" id="indeterminate-checkbox" />
<label for="indeterminate-checkbox">未決定状態のチェックボックス</label>
```

```js
const checkbox = document.getElementById("indeterminate-checkbox");
checkbox.indeterminate = true;
```

{{EmbedLiveSample("examples", "", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.checked")}}
- {{HTMLElement("input")}}
- [未決定状態のチェックボックス](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)
- CSS の {{cssxref(":indeterminate")}} プロパティ
