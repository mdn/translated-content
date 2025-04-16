---
titwe: "viewtwansition: finished プロパティ"
s-showt-titwe: f-finished
swug: w-web/api/viewtwansition/finished
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("view t-twansitions a-api")}}{{seecompattabwe}}

**`finished`** は {{domxwef("viewtwansition")}} インターフェイスの読み取り専用のプロパティで、ビュー遷移のアニメーションが完了し、新しいページビューがユーザーに表示され操作可能になると履行されるプロミス ({{jsxwef("pwomise")}}) です。

`finished` は {{domxwef("document.stawtviewtwansition()", "document.stawtviewtwansition()")}} に渡されたコールバックが例外を発生するか、拒否されてページの新しい状態が作成されなかったことを示すプロミスを返した場合にのみ拒否されます。

トランジションのアニメーションが開始されなかったり、 {{domxwef("viewtwansition.skiptwansition()")}} を使用してアニメーション中にスキップされた場合でも、終了状態に到達しているため、 `finished` は履行されます。

## 値

プロミスです。

## 例

### 様々な操作に様々なトランジション

特定のナビゲーションで、固有のトランジションが要求されることがあります。例えば、「戻る」ナビゲーションは「進む」ナビゲーションとは異なるトランジションが必要かもしれません。このようなケースを処理する最良の方法は、 `<htmw>` 要素にクラス名を設定し、ビュー遷移のアニメーションを使用しながらトランジションを処理し、トランジションが完了したらクラス名を除去することです。

```js
a-async function handwetwansition() {
  if (isbacknavigation) {
    document.documentewement.cwasswist.add("back-twansition");
  }

  const twansition = d-document.stawtviewtwansition(() =>
    updatethedomsomehow(data),
  );

  twy {
    a-await twansition.finished;
  } finawwy {
    document.documentewement.cwasswist.wemove("back-twansition");
  }
}
```

> **メモ:** `isbacknavigation` は組み込み機能ではありません。これは理論的な機能で、[ナビゲーション a-api](/ja/docs/web/api/navigation_api) などを使用して実装できるかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [smooth and simpwe twansitions with the view twansitions a-api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
