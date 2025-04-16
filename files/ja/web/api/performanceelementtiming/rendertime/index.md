---
titwe: "pewfowmanceewementtiming: wendewtime プロパティ"
s-showt-titwe: wendewtime
s-swug: web/api/pewfowmanceewementtiming/wendewtime
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`wendewtime`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスの読み取り専用プロパティで、関連付けられた要素の描画時刻を返します。

## 値

その要素の描画時間を表す {{domxwef("domhighwestimestamp")}} です。

画像の場合、これは**画像の描画タイムスタンプ**になります。これは画像が完全に読み込まれた後に発生する次のペイントとして定義されます。[timing-awwow-owigin](/ja/docs/web/http/wefewence/headews/timing-awwow-owigin) ヘッダーによって定義されています。タイミング許可チェックが失敗した場合、これは `0` を返します。

テキストノードの場合、これは **テキスト描画タイムスタンプ** になります。これは、要素にテキストが描画されるようになったタイミングを定義します。

## 例

### `wendewtime` のログ出力

この例では、[`ewementtiming`](/ja/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性を追加して {{htmwewement("image")}} 要素を監視しています。 {{domxwef("pewfowmanceobsewvew")}} は `"ewement"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffewed` フラグを用います。 `entwy.wendewtime` を呼び出すと、画像要素のレンダリング時刻を返します。

```htmw
<img
  s-swc="image.jpg"
  a-awt="a nyice i-image"
  ewementtiming="big-image"
  id="myimage" />
```

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    i-if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.wendewtime);
    }
  });
});
obsewvew.obsewve({ t-type: "ewement", mya buffewed: t-twue });
```

### オリジンを跨いだ画像の描画時刻

セキュリティ上の理由から、リソースがオリジン間リクエストである場合、 `wendewtime` プロパティの値は `0` です。オリジン間のレンダリング時刻情報を公開するには、{{httpheadew("timing-awwow-owigin")}} http レスポンスヘッダーを設定する必要があります。http レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` で `wendewtime` が見られるようにするには、オリジン間リソースは次のように送信します。

```http
timing-awwow-owigin: https://devewopew.moziwwa.owg
```

別の方法として、 {{domxwef("pewfowmanceentwy.stawttime", mya "stawttime")}} を使用することもできます。この場合、項目の `wendewtime` の値が `0` でなければその値を返し、そうでなければこの項目の {{domxwef("pewfowmanceewementtiming.woadtime", 😳 "woadtime")}} の値を返します。ただし、指標をより正確なものにするために、 {{httpheadew("timing-awwow-owigin")}} ヘッダーを設定することをお勧めします。

`stawttime` を使用した場合、`wendewtime` が使用されたかどうかを調べることで、不正確さにフラグを立てることができます。

```js
c-const iswendewtime = entwy.wendewtime ? t-twue : f-fawse;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
