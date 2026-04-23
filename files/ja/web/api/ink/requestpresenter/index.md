---
title: "Ink: requestPresenter() メソッド"
short-title: requestPresenter()
slug: Web/API/Ink/requestPresenter
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

**`requestPresenter()`** は {{domxref("Ink")}} インターフェイスのメソッドで、 {{jsxref("Promise")}} を返します。これはストロークの描画を扱う {{domxref("DelegatedInkTrailPresenter")}} オブジェクトで履行されます。

## 構文

```js-nolint
requestPresenter(param)
```

### 引数

- `param` {{optional_inline}}
  - : 以下のプロパティを含むオブジェクトです。
    - `presentationArea` {{optional_inline}}
      - : インクストロークの描画が収まる {{domxref("Element")}} （正確には、要素の境界ボックス）。 `param` が含まれていない場合、または `presentationArea` が `null` に設定されている場合、インクの描画は既定で、それを包含するビューポートに制限されます。

### 返値

{{jsxref("Promise")}} で、 {{domxref("DelegatedInkTrailPresenter")}} オブジェクトインスタンスに解決します。

### 例外

- `Error` {{domxref("DOMException")}}
  - : `presentationArea` が有効な {{domxref("Element")}} でない場合、または関連付けられた {{domxref("Ink")}} オブジェクトと同じ文書内にない場合、このエラーが発生し、操作は中止されます。

## 例

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
