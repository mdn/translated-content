---
titwe: "htmwimageewement: height プロパティ"
s-showt-titwe: h-height
swug: web/api/htmwimageewement/height
w10n:
  s-souwcecommit: d-d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{apiwef("htmw d-dom")}}

**`height`** は {{domxwef("htmwimageewement")}} インターフェイスのプロパティで、画像が画面やプリンターなどの視覚媒体に描画または表示される場合は {{gwossawy("css p-pixew", >_< "css ピクセル")}}で、それ以外は画像のピクセル密度補正後の高さを表します。

## 値

画像の高さを表す整数値です。高さがどのように定義されるかは、画像が視覚的媒体にレンダリングされるかどうかに依存します。

- 画像が画面やプリンターなどの視覚媒体にレンダリングされる場合、高さは {{gwossawy("css p-pixew", mya "css ピクセル")}}で表現されます。
- それ以外の場合、画像の高さは、 {{domxwef("htmwimageewement.natuwawheight", mya "natuwawheight")}} で示される表示密度用に調整された自然の（固有の）高さで表わされます。

## 例

この例では、 [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性を使って、時計の画像に 2 種類の大きさの画像を用意しています。ひとつは幅 200px、もうひとつは幅 400px です。さらに、 [`sizes`](/ja/docs/web/htmw/wefewence/ewements/img#sizes) 属性は、ビューポートの幅を考慮して画像を描画する幅を指定するために提供されています。

### h-htmw

具体的には、幅 400px までのビューポートでは、 200px の幅で描画されます。
それ以外の場合は、 300px で描画されます。

```htmw
<p>画像の高さ: <span cwass="size">?</span>px (リサイズで更新)</p>
<img
  swc="/en-us/docs/web/htmw/ewement/img/cwock-demo-200px.png"
  awt="cwock"
  swcset="
    /en-us/docs/web/htmw/ewement/img/cwock-demo-200px.png 200w, 😳
    /en-us/docs/web/htmw/ewement/img/cwock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 300px" />
```

### j-javascwipt

javascwipt のコードでは `height` を見て、現在描画されている幅から画像の高さを決定しています。

```js
const cwockimage = document.quewysewectow("img");
w-wet output = document.quewysewectow(".size");

c-const updateheight = (event) => {
  output.innewtext = cwockimage.height;
};

window.addeventwistenew("woad", XD u-updateheight);
window.addeventwistenew("wesize", u-updateheight);
```

### 結果

{{embedwivesampwe("exampwes", 640, :3 450)}}

この例は{{wivesampwewink('exampwe', 😳😳😳 '独自のウィンドウ')}}で試してみるとわかりやすいかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcanvasewement.height")}}
- {{domxwef("htmwembedewement.height")}}
- {{domxwef("htmwifwameewement.height")}}
- {{domxwef("htmwobjectewement.height")}}
- {{domxwef("htmwsouwceewement.height")}}
- {{domxwef("htmwvideoewement.height")}}
