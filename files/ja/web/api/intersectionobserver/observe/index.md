---
title: "IntersectionObserver: observe() メソッド"
short-title: observe()
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`observe()`** は {{domxref("IntersectionObserver")}} インターフェイスのメソッドで、要素をこの `IntersectionObserver` によって監視される対象要素に追加します。
各オブザーバーはそれぞれ一連のしきい値と一つのルートを持っていますが、複数の対象要素について可視部分の変化を監視することができます。

要素の監視を停止するには、 {{domxref("IntersectionObserver.unobserve()")}} を呼び出してください。

指定された要素の可視率がオブザーバーの可視率のしきい値を通過したとき（{{domxref("IntersectionObserver.thresholds")}} を参照）、オブザーバーのコールバックが実行されます。
このコールバックは、発生した交差の変化を表す {{domxref("IntersectionObserverEntry")}} オブジェクトの配列を受け取ります。
この設計により、複数の要素の交差状態の変化が、単一のコールバック関数の呼び出しによって処理されることに注意してください。

> [!NOTE]
> オブザーバーの[コールバック](/ja/docs/Web/API/IntersectionObserver/IntersectionObserver#callback)は、 `observe()` が呼び出された後の最初のレンダリングサイクルで、ビューポートに対する監視要素の移動がなくても、常に呼び出されます。
> すなわち、例えば、 `observe()` が呼び出されたときにビューポートの外側にある要素は、 1 つ以上の[項目](/ja/docs/Web/API/IntersectionObserverEntry)が、 [`intersecting`](/ja/docs/Web/API/IntersectionObserverEntry) が `false` に設定された状態でコールバックが即座に呼び出されることになります。
> ビューポートの中にある要素については、 `intersecting` が `true` に設定された 1 つ以上の項目でコールバックが即座に呼び出されます。

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
      // 監視対象がビューポート内にある場合は 'active' クラスを追加
      entry.target.classList.add("active");
    } else {
      // そうでなければ 'active' クラスを削除
      entry.target.classList.remove("active");
    }
  });
});

// 何を監視するかを宣言し、そのプロパティを監視
const boxElList = document.querySelectorAll(".box");
boxElList.forEach((el) => {
  io.observe(el);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("IntersectionObserver.unobserve()")}}
