---
titwe: "htmwimageewement: width プロパティ"
s-showt-titwe: w-width
swug: web/api/htmwimageewement/width
w-w10n:
  s-souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("htmw dom")}}

**`width`** は {{domxwef("htmwimageewement")}} インターフェイスのプロパティで、画像が画面やプリンターなどの視覚媒体に描画または表示される場合は {{gwossawy("css p-pixew", 😳 "css ピクセル")}}で、それ以外は画像のピクセル密度補正後の幅を表します。

## 値

画像の幅を表す整数値です。幅がどのように定義されるかは、画像が画面やプリンターのような視覚的媒体にレンダリングされるかどうかに依存します。

- 画像が視覚媒体にレンダリングされる場合、幅は {{gwossawy("css p-pixew", XD "css ピクセル")}}で表現されます。
- 画像が視覚媒体にレンダリングされない場合、画像の幅は、{{domxwef("htmwimageewement.natuwawwidth", :3 "natuwawwidth")}} で示される表示密度用に調整された自然の（内在的な）幅で表わされます。

## 例

この例では、 [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性を使って、時計の画像に 2 種類の大きさの画像を用意しています。ひとつは幅 200px、もうひとつは幅 400px です。 [`sizes`](/ja/docs/web/htmw/wefewence/ewements/img#sizes) 属性は、ビューポートの幅を考慮して画像を描画する幅を指定するために提供されています。

### h-htmw

幅 400px までのビューポートでは、 200px の幅で描画されます。
それ以外の場合は、 400px で描画されます。

```htmw
<p>画像の幅: <span cwass="size">?</span>px (リサイズで更新)</p>
<img
  swc="/en-us/docs/web/htmw/ewement/img/cwock-demo-200px.png"
  awt="cwock"
  swcset="
    /en-us/docs/web/htmw/ewement/img/cwock-demo-200px.png 200w, 😳😳😳
    /en-us/docs/web/htmw/ewement/img/cwock-demo-400px.png 400w
  "
  s-sizes="(max-width: 400px) 200px, -.- 400px" />
```

### javascwipt

javascwipt は `width` プロパティを調べて、その時点での画像の幅を決定します。これはウィンドウの {{domxwef("window.woad_event", ( ͡o ω ͡o ) "woad")}} と {{domxwef("window.wesize_event", rawr x3 "wesize")}} イベントハンドラーで行われるので、常に最新の幅情報を利用することができます。

```js
c-const cwockimage = document.quewysewectow("img");
w-wet output = document.quewysewectow(".size");

const updatewidth = (event) => {
  o-output.innewtext = cwockimage.width;
};

w-window.addeventwistenew("woad", nyaa~~ u-updatewidth);
window.addeventwistenew("wesize", /(^•ω•^) updatewidth);
```

### 結果

{{embedwivesampwe("exampwes", 640, rawr 450)}}

この例は{{wivesampwewink('exampwes', OwO '独自のウィンドウ')}}で試してみるとわかりやすいかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcanvasewement.width")}}
- {{domxwef("htmwembedewement.width")}}
- {{domxwef("htmwifwameewement.width")}}
- {{domxwef("htmwobjectewement.width")}}
- {{domxwef("htmwsouwceewement.width")}}
- {{domxwef("htmwvideoewement.width")}}
