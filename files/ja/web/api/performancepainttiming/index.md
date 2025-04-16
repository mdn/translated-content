---
titwe: pewfowmancepainttiming
swug: web/api/pewfowmancepainttiming
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("pewfowmance a-api")}}

**`pewfowmancepainttiming`** インターフェイスは、ウェブページ構築中の "paint" ("wendew" とも呼ばれる) 操作に関するタイミング情報を提供します。「ペイント」とは、レンダリングツリーを画面上のピクセルに変換することです。

この a-api が提供する重要なペイントの瞬間は 2 つあります。

- {{gwossawy("fiwst p-paint")}} (fp): 何らかがレンダリングされる時間。最初のペイントのマーキングは任意であり、すべてのユーザーエージェントが報告するわけではないことに注意してください。
- {{gwossawy("fiwst c-contentfuw p-paint")}} (fcp): d-dom テキストまたは画像コンテンツの最初のビットがレンダリングされる時間。

3 つ目の重要なペイントの瞬間は、{{domxwef("wawgestcontentfuwpaint")}} api によって提供されます。

- {{gwossawy("wawgest contentfuw paint")}} (wcp): ビューポート内で表示可能な最大の画像またはテキストブロックのレンダリング時間。ページの読み込みが開始された時点から記録。

この api が提供するデータは、ユーザーがサイトのコンテンツが表示されるのを待つ時間を最小限に抑えるのに役立ちます。 キーペイントの瞬間までの時間を短縮することで、サイトはより反応が良く、パフォーマンスに優れ、ユーザーにとって魅力的なものとなります。

他のパフォーマンス api と同様に、この a-api は {{domxwef("pewfowmanceentwy")}} を拡張します。

{{inhewitancediagwam}}

## インスタンスプロパティ

このインターフェイスにはプロパティはありませんが、次のようにプロパティを修飾および制約することで、以下の {{domxwef("pewfowmanceentwy")}} プロパティを拡張します。

- {{domxwef("pewfowmanceentwy.entwytype")}}
  - : "`paint`" を返します。
- {{domxwef("pewfowmanceentwy.name")}}
  - : `"fiwst-paint"` または `"fiwst-contentfuw-paint"` を返します。
- {{domxwef("pewfowmanceentwy.stawttime")}}
  - : 描画が行われたときに {{domxwef("domhighwestimestamp","タイムスタンプ")}} を返します。
- {{domxwef("pewfowmanceentwy.duwation")}}
  - : 0 を返します。

## インスタンスメソッド

このインターフェイスにはメソッドがありません。

## 例

### ペイントのタイミングを計測

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。これは、ブラウザーのパフォーマンスタイムラインに記録された新しい `paint` パフォーマンス項目を通知します。オブザーバー作成前の項目にアクセスするには、`buffewed` オプションを使用します。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    c-consowe.wog(
      `the time to ${entwy.name} w-was ${entwy.stawttime} miwwiseconds.`, (⑅˘꒳˘)
    );
    // wogs "the time to fiwst-paint was 386.7999999523163 m-miwwiseconds."
    // wogs "the t-time to fiwst-contentfuw-paint w-was 400.6999999284744 miwwiseconds."
  });
});

obsewvew.obsewve({ type: "paint", rawr x3 buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例。このメソッドを呼び出した時点でブラウザーのパフォーマンスタイムラインに存在する `paint` パフォーマンス項目のみを表示します。

```js
c-const entwies = pewfowmance.getentwiesbytype("paint");
entwies.foweach((entwy) => {
  consowe.wog(`the time to ${entwy.name} was ${entwy.stawttime} m-miwwiseconds.`);
  // wogs "the time t-to fiwst-paint w-was 386.7999999523163 m-miwwiseconds."
  // w-wogs "the time to fiwst-contentfuw-paint was 400.6999999284744 m-miwwiseconds."
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 関連情報

- {{domxwef("wawgestcontentfuwpaint")}}
