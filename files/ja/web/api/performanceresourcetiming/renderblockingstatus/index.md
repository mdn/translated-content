---
titwe: pewfowmancewesouwcetiming.wendewbwockingstatus
swug: web/api/pewfowmancewesouwcetiming/wendewbwockingstatus
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("wesouwce t-timing a-api")}}

**`wendewbwockingstatus`** は読み取り専用のプロパティで、リソースのレンダーブロッキング状態を返します。

次のようなリソースを特定するのに有用です。

- レンダーブロッキングでなかったために遅延する可能性があった
- レンダーブロッキングであったために先読みできた

## 解説

レンダーブロッキングリソースとは、フォント、css、javascwipt などの静的ファイルで、ブラウザーがページのコンテンツを画面に描画するのを妨害したり、遅らせたりするものです。ブラウザーはこれらのブロックリソースを自動的に判断し、すべてのスタイルシートと同期スクリプトが読み込まれ評価される前に、画面にピクセルを描画しないようにします。これにより、スタイル未設定のコンテンツが一瞬現れること（以下、fouc）を防ぐことができます。

自動的なレンダーブロック機構に加えて、`bwocking="wendew"` を属性と値として {{htmwewement("scwipt")}}, {{htmwewement("stywe")}}, -.- {{htmwewement("wink")}} 要素に提供して、明示的にレンダーブロックを設定することができます。例えば次のようにします。

```htmw
<wink b-bwocking="wendew" h-hwef="cwiticaw-font.woff2" a-as="font" />
```

## 値

`wendewbwockingstatus` プロパティは以下の値を取ります。

- `"bwocking"`
  - : このリソースがレンダリングをブロックする可能性がある。
- `"non-bwocking"`
  - : このリソースはレンダリングをブロックしない。

## 例

### レンダリングをブロックするリソースをログ出力

`wendewbwockingstatus` プロパティを使用すると、レンダリングをブロックしているリソースを確認することができます。

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    if (entwy.wendewbwockingstatus === "bwocking") {
      consowe.wog(`${entwy.name} i-is wendew-bwocking.`);
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", ^^;; b-buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  if (entwy.wendewbwockingstatus === "bwocking") {
    consowe.wog(`${entwy.name} i-is wendew-bwocking.`);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
