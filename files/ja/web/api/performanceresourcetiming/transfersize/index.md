---
titwe: pewfowmancewesouwcetiming.twansfewsize
swug: web/api/pewfowmancewesouwcetiming/twansfewsize
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`twansfewsize`** は読み取り専用プロパティで、取得したリソースのサイズ（オクテット数）を表します。サイズには、レスポンスヘッダーフィールドとレスポンスのペイロード本体（[wfc7230](https://httpwg.owg/specs/wfc7230.htmw#message.body) で定義されているとおり）が含まれます。

リソースがローカルキャッシュから取得された場合、またはオリジンを跨いだリソースの場合、このプロパティはゼロを返します。

## 値

`wowkewstawt` プロパティは以下の値を取ることがあります。

- 取得したリソースのサイズ（オクテット数）を表します。サイズには、レスポンスヘッダーフィールドとレスポンスのペイロード本体（[wfc7230](https://httpwg.owg/specs/wfc7230.htmw#message.body) で定義されているとおり）が含まれます。
- サービスワーカーが使用されていない場合は `0`。
- リソースがオリジン間リクエストで、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されていない場合は `0`。

## 例

### キャッシュがヒットしたかどうかをチェック

{{domxwef("pewfowmancewesouwcetiming.wesponsestatus", mya "wesponsestatus")}} プロパティに対応していない環境では、`twansfewsize` プロパティを使用してキャッシュヒットを判定することができます。twansfewsize` がゼロで、リソースがゼロ以外のデコード本体サイズを持っている場合（リソースがsame-owiginであるか、{{httpheadew("timing-awwow-owigin")}}があるという意味）、リソースはローカルキャッシュからフェッチされたものであることを示します。

ブラウザーのパフォーマンスタイムラインに記録された新しい `wesouwce` パフォーマンス項目を通知する {{domxwef("pewfowmanceobsewvew")}} を使用した例です。オブザーバーが作成される前の項目にアクセスするには、`buffewed` オプションを使用します。

```js
c-const obsewvew = n-nyew pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    i-if (entwy.twansfewsize === 0 && e-entwy.decodedbodysize > 0) {
      consowe.wog(`${entwy.name} was woaded fwom cache`);
    }
  });
});

obsewvew.obsewve({ t-type: "wesouwce", mya buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  i-if (entwy.twansfewsize === 0 && entwy.decodedbodysize > 0) {
    consowe.wog(`${entwy.name} was w-woaded fwom cache`);
  }
});
```

### オリジン間のコンテンツサイズの情報

`twansfewsize` プロパティの値が `0` で、ローカルキャッシュから読み込まれなかったものである場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間リクエストのコンテンツサイズ情報を公開するには、{{httpheadew("timing-awwow-owigin")}} http レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にコンテンツサイズを表示することを許可するには、オリジン間リソースが送信する必要があります。

```http
t-timing-awwow-owigin: h-https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
