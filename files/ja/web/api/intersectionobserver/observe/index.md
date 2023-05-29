---
title: IntersectionObserver.observe()
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("Intersection Observer API")}}
{{domxref("IntersectionObserver")}} の **`observe()`** メソッドは、要素を `IntersectionObserver` によって監視される対象要素に追加します。各オブザーバーはそれぞれ個別の閾値とルートを持っていますが、複数の対象要素について可視部分の変化を監視できます。

要素の監視を停止するには、 {{domxref("IntersectionObserver.unobserve()")}} を呼び出してください。

指定された要素の可視部分がオブザーバーの可視率の閾値を通過したとき ({{domxref("IntersectionObserver.thresholds")}} を参照)、オブザーバーのコールバックが実行されます。このコールバックは、発生した交差の変化を表す {{domxref("IntersectionObserverEntry")}} オブジェクトの配列を受け取ります。この構成によって、１回のコールバック呼び出しにつき複数の要素の交差状態の変化を処理することができます。

## 構文

```js-nolint
observe(targetElement)
```

### 引数

- `targetElement`
  - : 可視部分がルート内に収まっているかどうかが監視される{{domxref("element", "要素")}}。この要素はルート要素の子要素でなければなりません (ルートが文書のビューポートである場合、要素が現在の文書内に含まれている必要があります)。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// IntersectionObserver を登録
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // Add 'active' class if observation target is inside viewport
      entry.target.classList.add('active');
    } else {
      // Remove 'active' class otherwise
      entry.target.classList.remove('active');
    }
  })
})

// 何を監視するかを宣言し、そのプロパティを監視する
const boxElList = document.querySelectorAll('.box');
boxElList.forEach((el) => {
  io.observe(el);
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("IntersectionObserver.unobserve()")}}
