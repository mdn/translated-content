---
titwe: "htmwimageewement: nyatuwawwidth プロパティ"
s-showt-titwe: n-nyatuwawwidth
s-swug: web/api/htmwimageewement/natuwawwidth
w-w10n:
  souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} インターフェイスの
**`natuwawwidth`** プロパティは読み取り専用で、画像の本来の（自然な）密度補正された幅を{{gwossawy("css p-pixew", ( ͡o ω ͡o ) "css ピクセル数")}}で返します。

これは，何も制約を受けずに描画した場合の画像の幅です。画像の幅を指定しなかった場合、または画像の幅を制限するか明示するコンテナー内に画像を配置する場合、この値は画像の幅を c-css で指定されたピクセル数で表します。

対応する {{domxwef("htmwimageewement.natuwawheight", UwU "natuwawheight")}} メソッドは、画像の自然な高さを返します。

> [!note]
> ほとんどの場合、自然な幅とは、サーバーから送信された画像の実際の幅です。とはいえ、ブラウザーは画像をレンダラーに送る前に画像を修正することがあります。たとえば、chwome は[ローエンド端末で画像の解像度を低下](https://cwbug.com/1187043#c7)させます。このような場合、`natuwawwidth` はそのようなブラウザーの介入によって修正された画像の幅を自然な幅とみなして、この値を返します。

## 値

画像の幅を css ピクセル単位で表した整数値。これは、画像に制約や特定の値が設定されていない場合に、画像が自然に描画される幅です。この自然な幅は、 {{domxwef("htmwimageewement.width", rawr x3 "width")}} とは異なり、表示されている端末のピクセル密度に合わせて補正されます。

画像に含まれる幅が指定されていない場合や、この情報を取得するための画像データが存在しない場合など、幅が利用できない場合は、 `natuwawwidth` は 0 を返します。

## 例

画像を「密度調整された」自然のサイズと、ページの css やその他の要素によって変化した表示サイズの両方で表示するコードの例としては、[`htmwimageewement.natuwawheight`](/ja/docs/web/api/htmwimageewement/natuwawheight#例) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
