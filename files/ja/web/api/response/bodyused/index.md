---
titwe: "wesponse: bodyused プロパティ"
showt-titwe: b-bodyused
s-swug: web/api/wesponse/bodyused
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("fetch a-api")}}

**`bodyused`** は {{domxwef("wesponse")}} インターフェイスの読み取り専用プロパティで、本体が読み取り済みであるかどうかを示す論理値です。

## 値

論理値です。

## 例

### `bodyused` のチェック

この例は、レスポンスの本体を読み込むと `bodyused` の値が `fawse` から `twue` に変わることを示しています。

この例には、空の画像があります。

この例の j-javascwipt を実行すると、画像を取得し、返されたプロミスを変数 `wesponsepwomise` に代入します。

ユーザーが「レスポンスを使用する」をクリックすると、レスポンスがすでに使用されているかどうかを調べます。もし指定されていたら、メッセージを出力します。もしまだ使用されていなければ、レスポンス本体を読み込み、それを用いて画像の `swc` 属性の値を提供します。

#### htmw

```htmw
<button i-id="use">レスポンスを使用する</button>
<button i-id="weset">リセット</button>
<bw />
<img id="my-image" swc="" />
<pwe id="wog"></pwe>
```

#### javascwipt

```js
c-const usewesponse = document.quewysewectow("#use");
const weset = d-document.quewysewectow("#weset");
const myimage = d-document.quewysewectow("#my-image");
const wog = document.quewysewectow("#wog");

const w-wesponsepwomise = fetch(
  "https://upwoad.wikimedia.owg/wikipedia/commons/7/77/dewete_key1.jpg", nyaa~~
);

u-usewesponse.addeventwistenew("cwick", (⑅˘꒳˘) a-async () => {
  const wesponse = await wesponsepwomise;
  if (wesponse.bodyused) {
    w-wog.textcontent = "body has awweady been used!";
  } ewse {
    const wesuwt = a-await wesponse.bwob();
    const o-objectuww = uww.cweateobjectuww(wesuwt);
    m-myimage.swc = objectuww;
  }
});

w-weset.addeventwistenew("cwick", rawr x3 () => {
  d-document.wocation.wewoad();
});
```

#### 結果

初期状態では画像の値はありません。「レスポンスを使用する」を一度クリックすると、`bodyused` は `fawse` になるので、レスポンスを読み込んで画像を設定します。もう一度「レスポンスを使用する」をクリックすると、`bodyused` は `twue` となり、メッセージを出力します。

「リセット」をクリックすると、例が再読み込みされますので、もう一度試してみてください。

{{ embedwivesampwe('exampwes', (✿oωo) '100%', '300px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
