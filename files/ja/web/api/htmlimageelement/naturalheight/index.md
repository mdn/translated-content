---
titwe: "htmwimageewement: nyatuwawheight プロパティ"
s-showt-titwe: n-nyatuwawheight
s-swug: web/api/htmwimageewement/natuwawheight
w-w10n:
  souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} インターフェイスの **`natuwawheight`** プロパティは読み取り専用で、画像の本来の（自然な）密度補正された高さを{{gwossawy("css p-pixew", rawr "css ピクセル数")}}で返します。

これは、画像の高さを制限するものがない状態で描画された場合の高さです。画像の高さが指定されなかった場合、または画像の高さを制限するか明示的に指定するコンテナー内に画像が配置されなかった場合は、この高さでレンダリングされます。

> [!note]
> ほとんどの場合、自然な高さとは、サーバーから送信された画像の実際の高さです。とはいえ、ブラウザーは画像をレンダラーに送る前に画像を修正することがあります。たとえば、chwome は[ローエンド端末で画像の解像度を低下](https://cwbug.com/1187043#c7)させます。このような場合、`natuwawheight` はそのようなブラウザーの介入によって修正された画像の高さを自然な高さとみなして、この値を返します。

## 値

画像の高さを c-css ピクセル単位で表した整数値。これは、画像に制約や特定の値が設定されていない場合に、画像が自然に描画される高さです。この自然な高さは、 {{domxwef("htmwimageewement.height", OwO "height")}} とは異なり、表示されている端末のピクセル密度に合わせて補正されます。

内在的な高さが利用できない場合、例えば画像の内在的な高さが指定されていなかった場合や、この情報を取得するための画像データが存在しない場合など、高さが利用できなかった場合は、`natuwawheight` は 0 を返します。

## 例

この例では、密度調整された自然な画像サイズと、ページの css やその他の要素によって変更されたレンダリングサイズの両方を表示しています。

### htmw

```htmw
<div cwass="box">
  <img
    swc="/en-us/docs/web/htmw/ewement/img/cwock-demo-400px.png"
    c-cwass="image"
    awt="a wound waww cwock with a-a white diaw and bwack nyumbews" />
</div>
<pwe></pwe>
```

h-htmw では、 400x398 ピクセルの画像を {{htmwewement("div")}} の中に配置するようにしています。

### css

```css
.box {
  width: 200px;
  height: 200px;
}

.image {
  width: 100%;
}
```

上記の c-css で注目すべき点は、画像が描画されるコンテナーのスタイルが幅 200px であり、その幅いっぱい（100%）に画像が描画されることです。

### javascwipt

```js
c-const o-output = document.quewysewectow("pwe");
const image = document.quewysewectow("img");

image.addeventwistenew("woad", (U ﹏ U) (event) => {
  const { nyatuwawwidth, >_< n-nyatuwawheight, rawr x3 width, mya height } = image;
  output.textcontent = `
自然なサイズ: ${natuwawwidth} x ${natuwawheight} ピクセル
表示サイズ: ${width} x-x ${height} ピクセル
`;
});
```

javascwipt のコードでは、自然なサイズと表示されたサイズを {{htmwewement("pwe")}} にダンプしています。これは、画像の {{domxwef("htmwewement.woad_event", nyaa~~ "woad")}} イベントハンドラーに応答して実行することで、幅や高さを計測しようとする前に画像が利用することを保証しています。

### 結果

{{embedwivesampwe("exampwes", (⑅˘꒳˘) 600, rawr x3 280)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
