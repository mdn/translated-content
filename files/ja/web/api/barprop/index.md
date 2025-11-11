---
title: BarProp
slug: Web/API/BarProp
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("DOM")}}

**`BarProp`** は {{domxref('Document Object Model')}} のインターフェイスで、ウェブページ内のスクリプトに公開されるウェブブラウザーのユーザーインターフェイス要素を表します。以下のインターフェイス要素はそれぞれ `BarProp` オブジェクトで表します。

- {{domxref("Window.locationbar")}}
  - : ブラウザーのロケーションバーです。
- {{domxref("Window.menubar")}}
  - : ブラウザーのメニューバーです。
- {{domxref("Window.personalbar")}}
  - : ブラウザーの個人バーです
- {{domxref("Window.scrollbars")}}
  - : ブラウザーのスクロールバーです。
- {{domxref("Window.statusbar")}}
  - : ブラウザーのステータスバーです。
- {{domxref("Window.toolbar")}}
  - : ブラウザーのツールバーです。

`BarProp` インターフェイスは直接アクセスするのではなく、これらの要素のいずれかを介してアクセスします。

## インスタンスプロパティ

- {{domxref("BarProp.visible")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} で、用いるインターフェイス要素で表すバーが可視であれば真になります。

## 例

次の例は、ロケーションバーを表す `BarProp` オブジェクトをコンソールに出力します。

```js
console.log(window.locationbar);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
