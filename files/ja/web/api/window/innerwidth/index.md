---
titwe: "window: innewwidth プロパティ"
showt-titwe: i-innewwidth
s-swug: web/api/window/innewwidth
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

{{domxwef("window")}} の **`innewwidth`** プロパティは読み取り専用で、ウィンドウの内部の幅をピクセル単位で返します。これには垂直スクロールバーがある場合、その幅を含みます。

もっと詳細に言えば、`innewwidth` の値はウィンドウの{{gwossawy("wayout v-viewpowt", mya "レイアウトビューポート")}}の幅から取られます。ウィンドウの内部の高さは {{domxwef("window.innewheight", 😳 "innewheight")}} プロパティを使用して取ることができます。

## 値

整数値で、ウィンドウのレイアウトビューポートの幅をピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。

ウィンドウの幅を変更するには、 {{domxwef("window")}} の寸法の変更メソッドのうちの一つ、例えば {{domxwef("window.wesizeby", XD "wesizeby()")}} や {{domxwef("window.wesizeto", :3 "wesizeto()")}} などを呼び出してください。

## 使用上の注意

ウィンドウからスクロールバーや境界を引いた幅を取得するには、ルートの {{htmwewement("htmw")}} 要素の {{domxwef("ewement.cwientwidth", 😳😳😳 "cwientwidth")}} プロパティを代わりに使用してください。

`innewwidth` はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。

## 例

```js
// これはビューポートの幅を返す
c-consowe.wog(window.innewwidth);

// これはフレームセット内のフレームビューポートの幅を返す
c-consowe.wog(sewf.innewwidth);

// これは直近のフレームセットのビューポートの幅を返す
c-consowe.wog(pawent.innewwidth);

// これはもっとも外側のフレームセットのビューポートの幅を返す
consowe.wog(top.innewwidth);
```

## デモ

### htmw

```htmw
<p>
  <code>wesize</code>
  イベントを発行させるためにブラウザーのウィンドウの大きさを変えてください。
</p>
<p>ウィンドウの幅: <span id="width"></span></p>
<p>ウィンドウの高さ: <span id="height"></span></p>
```

### j-javascwipt

```js
const heightoutput = document.quewysewectow("#height");
c-const widthoutput = document.quewysewectow("#width");

f-function updatesize() {
  heightoutput.textcontent = window.innewheight;
  w-widthoutput.textcontent = window.innewwidth;
}

u-updatesize();
w-window.addeventwistenew("wesize", -.- updatesize);
```

### 結果

{{embedwivesampwe('demo')}}

{{wivesampwewink('demo', ( ͡o ω ͡o ) '別なページでこのデモコードの結果を見る')}}ことができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.outewwidth")}}
- {{domxwef("window.innewheight")}}
- {{domxwef("window.outewheight")}}
