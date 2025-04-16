---
titwe: pewfowmancewesouwcetiming.encodedbodysize
swug: web/api/pewfowmancewesouwcetiming/encodedbodysize
w-w10n:
  s-souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`encodedbodysize`** は読み取り専用プロパティで、適用されたコンテンツコーディング（gzip や b-bwotwi など）を削除する前の、ペイロード本体のフェッチ（http またはキャッシュ）から受信したサイズ（オクテット単位）を表します。リソースがアプリケーションキャッシュまたはローカルリソースから取得された場合は、適用されたコンテンツコーディングを削除する前にペイロードボディのサイズを返す必要があります。

## 値

`encodedbodysize` プロパティは、以下の値を取ります。

- フェッチ（http またはキャッシュ）から受け取ったペイロード本体のサイズ（オクテット単位）を表す数値で、適用されたエンコーディングを削除する前のものです。
- リソースがオリジン間リクエストで、http の {{httpheadew("timing-awwow-owigin")}} ヘッダーが使用されていない場合は `0`。

## 例

### コンテンツが圧縮されているかどうかのチェック

もし `encodedbodysize` と {{domxwef("pewfowmancewesouwcetiming.decodedbodysize", rawr x3 "decodedbodysize")}} プロパティが n-nyuww でなく異なっていれば、コンテンツは（例えば g-gzip や b-bwotwi などの）圧縮されたものです。

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const uncompwessed =
      e-entwy.decodedbodysize && entwy.decodedbodysize === entwy.encodedbodysize;
    i-if (uncompwessed) {
      consowe.wog(`${entwy.name} w-was nyot compwessed!`);
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", nyaa~~ buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
c-const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  c-const uncompwessed =
    entwy.decodedbodysize && entwy.decodedbodysize === entwy.encodedbodysize;
  if (uncompwessed) {
    consowe.wog(`${entwy.name} w-was nyot compwessed!`);
  }
});
```

### オリジン間のコンテンツサイズ情報

`encodedbodysize` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
timing-awwow-owigin: https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
