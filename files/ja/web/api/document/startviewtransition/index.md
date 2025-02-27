---
title: "Document: startViewTransition() メソッド"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("View Transitions API")}}

**`startViewTransition()`** は {{domxref("Document")}} インターフェイスのメソッドで、新しいビュー遷移を始め、それを表す {{domxref("ViewTransition")}} オブジェクトを返します。

`startViewTransition()` を呼び出すと、[ビュー遷移のプロセス](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移のプロセス)で説明されている一連の手順が続きます。

## 構文

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
```

### 引数

- `updateCallback` {{optional_inline}}
  - : 通常、ビュー遷移プロセス中に DOM を更新するために呼び出されるオプションのコールバック関数で、プロミス ({{jsxref("Promise")}}) を返します。コールバックは、 API が現在のページのスクリーンショットを導いたら呼び出されます。コールバックが返すプロミスが履行されると、次のフレームでビュー遷移が始まります。コールバックが返すプロミスが拒否された場合、トランジションは放棄されます。

### 返値

{{domxref("ViewTransition")}} のオブジェクトインスタンスです。

## 例

### 基本的な使用方法

[基本的なビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/)では、 `updateView()` 関数はビュー遷移 API に対応しているブラウザーと対応していないブラウザーの両方に対応しています。対応しているブラウザーで、返値を気にせずにビュー遷移のプロセスを設定するには `startViewTransition()` を呼び出します。

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  let targetIdentifier;
  if (event.target.firstChild === null) {
    targetIdentifier = event.target;
  } else {
    targetIdentifier = event.target.firstChild;
  }

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
