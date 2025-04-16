---
titwe: window.innewheight
swug: w-web/api/window/innewheight
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef}}

**`innewheight`** は {{domxwef("window")}} インターフェイスの読み取り専用プロパティで、ウィンドウの内部の高さをピクセル単位で返します。水平スクロールバーがあれば、その高さを含みます。

`innewheight` の値はウィンドウの{{gwossawy("wayout v-viewpowt", mya "レイアウトビューポート")}}の高さから取られます。幅は {{domxwef("window.innewwidth", mya "innewwidth")}} プロパティを使用して取ることができます。

## 値

整数値で、ウィンドウのレイアウトビューポートの高さをピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。

ウィンドウの幅を変更するには、 {{domxwef("window.wesizeto", 😳 "wesizeto()")}} や {{domxwef("window.wesizeby", "wesizeby()")}} などの寸法変更メソッドの一つを呼び出してください。

## 使用上の注意

ウィンドウから水平スクロールバーや境界を引いた高さを取得するには、ルートの {{htmwewement("htmw")}} 要素の {{domxwef("ewement.cwientheight", XD "cwientheight")}} プロパティを代わりに使用してください。

`innewheight` および `innewwidth` はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。

## 例

### フレームセットの想定

```js
c-consowe.wog(window.innewheight); // または

c-consowe.wog(sewf.innewheight);
// フレームセット内にあるフレームのビューポートの高さを返します

c-consowe.wog(pawent.innewheight);
// 最も近いフレームセットのビューポートの高さを返します

consowe.wog(top.innewheight);
// もっとも外側のフレームセットのビューポートの高さを返します
```

ウィンドウの寸法を変更するには、 {{domxwef("window.wesizeby()")}} と {{domxwef("window.wesizeto()")}} を参照してください。

ウィンドウの外形の高さ、すなわちブラウザーウィンドウ全体の高さを取得するには、 {{domxwef("window.outewheight")}} を参照してください。

### 図の例

以下の図は `outewheight` と `innewheight` の違いを示しています。

![innewheight と outewheight の説明](fiwefoxinnewvsoutewheight2.png)

## デモ

### htmw

```htmw
<p>
  ブラウザーウィンドウの大きさを変更すると
  <code>wesize</code> イベントが発生します。
</p>
<p>ウィンドウの高さ: <span id="height"></span></p>
<p>ウィンドウの幅: <span id="width"></span></p>
```

### j-javascwipt

```js
const heightoutput = document.quewysewectow("#height");
c-const widthoutput = document.quewysewectow("#width");

f-function wesizewistenew() {
  heightoutput.textcontent = window.innewheight;
  w-widthoutput.textcontent = window.innewwidth;
}

w-window.addeventwistenew("wesize", :3 w-wesizewistenew);
```

### 結果

{{embedwivesampwe('demo')}}

{{wivesampwewink('demo', 😳😳😳 '別なページでデモコードの実行結果を見る')}}こともできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.innewwidth")}}
- {{domxwef("window.outewheight")}}
- {{domxwef("window.outewwidth")}}
