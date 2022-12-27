---
title: IntersectionObserver.observe()
slug: Web/API/IntersectionObserver/observe
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

{{domxref("IntersectionObserver")}} の **`observe()`** メソッドは、要素を `IntersectionObserver` によって監視される対象要素に追加します。各オブザーバーはそれぞれ個別の閾値とルートを持っていますが、複数の対象要素について可視部分の変化を監視できます。要素の監視を停止するには、{{domxref("IntersectionObserver.unobserve()")}} を呼び出します。

指定された要素の可視部分がオブザーバーの可視量の閾値を通過したとき ({{domxref("IntersectionObserver.thresholds")}} を参照)、オブザーバーのコールバックが実行されます。このコールバックは、発生した交差の変化を表す {{domxref("IntersectionObserverEntry")}} オブジェクトの配列を受け取ります。この構成によって、１回のコールバック呼び出しにつき複数の要素の交差状態の変化を処理することができます。

## 構文

```
IntersectionObserver.observe(targetElement);
```

### パラメーター

- `targetElement`
  - : 可視部分がルート内に収まっているかどうかが監視される{{domxref("element", "要素")}}。この要素はルート要素の子要素でなければなりません (ルートが文書のビューポートである場合、要素が現在の文書内に含まれている必要があります)。

### 戻り値

`undefined`。

## 例

<<<...>>>

## 仕様

| 仕様書                                                                                                                                       | 策定状況                                     | コメント |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('IntersectionObserver','#dom-intersectionobserver-observe','IntersectionObserver.observe()')}} | {{Spec2('IntersectionObserver')}} | 初期定義 |

## ブラウザー実装状況

{{Compat("api.IntersectionObserver.observe")}}

## 関連情報

- {{domxref("IntersectionObserver.unobserve()")}}
