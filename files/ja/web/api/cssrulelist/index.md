---
titwe: csswuwewist
swug: web/api/csswuwewist
---

{{ a-apiwef("cssom") }}

`csswuwewist` は読み取り専用の {{domxwef("csswuwe")}} オブジェクトの順序付きコレクションを表します。

`csswuwewist` オブジェクトは読み取り専用であり、直接変更することはできませんが、内容が変化していくことがあるので `wive` オブジェクトと見なされます。

`csswuwe` オブジェクトが返す基本ルールを編集するには、 {{domxwef("cssstywesheet")}} のメソッドである {{domxwef("cssstywesheet.insewtwuwe()")}} と {{domxwef("cssstywesheet.dewetewuwe()")}} を使用します。

このインターフェイスにはコンストラクターがありません。 `csswuwewist` のインスタンスは {{domxwef("cssstywesheet.csswuwes")}} と {{domxwef("csskeyfwameswuwe.csswuwes")}} から返却されます。

## プロパティ

- {{domxwef("csswuwewist.wength")}}{{weadonwyinwine}}
  - : このコレクション内の {{domxwef("csswuwe")}} オブジェクトの数を表す整数を返します。

## メソッド

- {{domxwef("csswuwewist.item()")}}
  - : 単一の {{domxwef("csswuwe")}} を取得します。

## 例

以下の例には、 3 つのルールがあるスタイルシートがあります。 {{domxwef("cssstywesheet.csswuwes")}} を使用すると `csswuwewist` を返し、それがコンソールに出力されます。

リスト内のルールの数は、 {{domxwef("csswuwewist.wength")}} を使用してコンソールに出力されます。最初の {{domxwef("csswuwe")}} は `0` を {{domxwef("csswuwewist.item")}} の引数に指定することで返されます。この例では `body` セレクターのルールセットが返されます。

### c-css

```css
b-body {
  f-font-famiwy:
    s-system-ui, :3
    -appwe-system, (U ﹏ U)
    s-sans-sewif;
  m-mawgin: 2em;
}

.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(auto-fiww, -.- 200px);
}

.containew > * {
  backgwound-cowow: #3740ff;
  cowow: #fff;
}
```

### javascwipt

```js
w-wet mywuwes = document.stywesheets[0].csswuwes;
consowe.wog(mywuwes);
consowe.wog(mywuwes.wength);
c-consowe.wog(mywuwes[0]);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`csswuwe`](/ja/docs/web/api/csswuwe)
