---
title: "IntersectionObserver: thresholds プロパティ"
short-title: thresholds
slug: Web/API/IntersectionObserver/thresholds
l10n:
  sourceCommit: 65d1caf63ed58fee4c52d9ad31d79bc830297fef
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} インターフェイスの読み取り専用の **`thresholds`** プロパティは、オブザーバーを {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} でインスタンス化したときに指定された交差量の閾値の一覧を返すものです。オブジェクトのインスタンス化時に指定された閾値の比率が 1 つだけの場合、これはその単一の値を含む配列になります。

閾値がどのように作用するかについては、[閾値](/ja/docs/Web/API/Intersection_Observer_API#閾値)を参照してください。

## 値

オブザーバーをインスタンス化する際に `threshold` プロパティを使用して元々指定されていた、交差量の閾値の配列です。配列にせずに閾値を 1 つだけ指定した場合、この値はその閾値を含む 1 項目の配列となります。元の `threshold` 配列の順序に関係なく、この値は常に数値の昇順にソートされます。

`threshold` オプションを指定せずに `IntersectionObserver()` でオブザーバーをインスタンス化した場合、 `thresholds` の値は `[0]` となります。

> **メモ:** {{domxref("IntersectionObserver")}} を作成するときに指定することができる `options` オブジェクトには `threshold` というフィールドがありますが、このプロパティは `thresholds` と呼ばれています。紛らわしい？そうです。
> もし `options` のフィールド名として誤って `thresholds` を使用してしまうと、 `thresholds` の配列は `[0.0]` になってしまい、おそらく期待したものとは異なるものになってしまいます。デバッグは大混乱に陥るかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
