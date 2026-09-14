---
title: "HTMLDialogElement: closedBy プロパティ"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{ APIRef("HTML DOM") }}

**`closedBy`** は {{domxref("HTMLDialogElement")}} インターフェイスのプロパティで、関連付けられた {{htmlelement("dialog")}} 要素を閉じるために使用できるユーザー操作の種類を示します。これはダイアログの [`closedby`](/ja/docs/Web/HTML/Reference/Elements/dialog#closedby) 属性値を設定したり返したりします。

## 値

文字列です。設定可能な値は次の通りです。

- `any`
  - : ダイアログは、簡単に閉じるユーザー操作、プラットフォーム特有のユーザー操作、または開発者が指定した仕組みで閉じることができます。
- `closerequest`
  - : ダイアログは、プラットフォーム特有のユーザー操作、または開発者が指定した仕組みで閉じることができます。
- `none`
  - : ダイアログは、開発者が指定した仕組みでのみ閉じることができます。

## 例

### 基本的な `closedBy` の使い方

```html-nolint
<dialog open closedby="any">
  <h2>ダイアログ</h2>
  <p>
    Esc キーを使用するか、ダイアログの外側をクリックすると閉じます。「簡単に閉じる」動作です。
  </p>
</dialog>
```

```js
const dialogElem = document.querySelector("dialog");

// コンソールに "any" をログ出力
console.log(dialogElem.closedBy);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ HTMLElement("dialog") }}
