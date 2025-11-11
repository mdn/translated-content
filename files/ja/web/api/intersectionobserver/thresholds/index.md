---
title: "IntersectionObserver: thresholds プロパティ"
short-title: thresholds
slug: Web/API/IntersectionObserver/thresholds
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`thresholds`** は {{domxref("IntersectionObserver")}} インターフェイスの読み取り専用プロパティで、このオブザーバーを {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} でインスタンス化したときに指定された交差量のしきい値の一覧を返すものです。

オブジェクトのインスタンス化時に指定されたしきい値の比率が 1 つだけの場合、これはその単一の値を含む配列になります。

しきい値がどのように作用するかについては、[しきい値](/ja/docs/Web/API/Intersection_Observer_API#しきい値)を参照してください。

## 値

オブザーバーをインスタンス化する際に `threshold` プロパティを使用して元々指定されていた、交差量のしきい値の配列です。
配列にせずにしきい値を 1 つだけ指定した場合、この値はそのしきい値を含む 1 項目の配列となります。
元の `threshold` 配列の順序に関係なく、この値は常に数値の昇順に並べ替えられます。

`threshold` オプションを指定せずに `IntersectionObserver()` でオブザーバーをインスタンス化した場合、 `thresholds` の値は `[0]` となります。

> [!NOTE]
> {{domxref("IntersectionObserver/IntersectionObserver","IntersectionObserver()")}} コンストラクターで指定できる `options` オブジェクトには `threshold` というフィールドがありますが、このプロパティは `thresholds` と呼ばれています。
> もし `options` のフィールド名として誤って `thresholds` を使用してしまうと、 `thresholds` の配列は `[0.0]` になってしまい、おそらく期待したものとは異なるものになってしまいます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
