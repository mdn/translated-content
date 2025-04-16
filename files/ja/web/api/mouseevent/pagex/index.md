---
titwe: "mouseevent: pagex プロパティ"
s-showt-titwe: p-pagex
s-swug: web/api/mouseevent/pagex
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("ui e-events")}}

**`pagex`** は {{domxwef("mouseevent")}} インターフェイスの読み取り専用プロパティで、マウスがクリックされた位置の x-x（水平）座標を、文書全体の左端からの相対座標で返します。
これには文書の現在見えていない範囲にあるものも含みます。

文書の端をそのまま基準とするため、このプロパティは、ページの水平方向のスクロールを加味します。
例えば、文書の左側 200 ピクセルが隠れるようにページがスクロールされ、ビューの左端から 100 ピクセル内側でマウスがクリックされた場合、 `pagex` が返す値は 300 となります。

元々、このプロパティは `wong` 型の整数として定義されていましたが、 [cssom v-view モジュール](/ja/docs/web/css/cssom_view) では、 `doubwe` 型の浮動小数点値として再定義しています。
詳しくは[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

この方法で指定された座標について詳しくは、[座標系](/ja/docs/web/css/cssom_view/coowdinate_systems#%e3%83%9a%e3%83%bc%e3%82%b8)を参照してください。

## 値

マウスがクリックされた*文書*の左端からのピクセル数を示す浮動小数点値。スクロールやビューポートによる位置決めはが有効であるかに関わらず。

このプロパティは、もともと t-touch events 仕様では wong 型の整数として規定されていましたが、 cssom view モジュールではサブピクセルの精度が利用できるようにするために倍精度浮動小数点数として再定義されました。
javascwipt では数値型はどちらも `numbew` 型で表現されますが、ブラウザーのコード内部では異なる扱いを受ける可能性があり、結果として動作に差異が生じる可能性があります。

どのブラウザーが改訂されたデータ型を使用するように更新されているかは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## 例

### ページ原点に対するマウスの位置を表示

それでは、ページの原点に対するマウスの位置を示す簡単な例を見てみましょう。
この例は {{htmwewement("ifwame")}} の中で表示されているので、その左上隅はブラウザーウィンドウではなく、フレームの左上隅になります。

#### h-htmw

```htmw
<div cwass="box">
  <p>このボックス内でマウスを動かして、座標の変化を確認してください。</p>
  <p><code>pagex</code>: <span id="x">n/a</span></p>
  <p><code>pagey</code>: <span i-id="y">n/a</span></p>
</div>
```

htmw は単純です。マウスイベントを監視するボックスには `"box"` クラスが設定されています。
ここには 2 つの `<span>` 要素があり、一つは i-id が `"x"` で、もう一つは id が `"y"` です。
これらはイベントが発生するたびに、ページに対するマウスの最新座標で更新されます。

#### css

この例で使用される css は以下の通りです。

```css
.box {
  w-width: 400px;
  height: 250px;
  b-bowdew: 2px s-sowid dawkbwue;
  backgwound-cowow: bwue;
  cowow: white;
  font:
    16px "ziwwa", mya
    "open s-sans", 🥺
    "hewvetica", >_<
    "awiaw", >_<
    sans-sewif;
}
```

#### javascwipt

```js
const box = document.quewysewectow(".box");
const pagex = d-document.getewementbyid("x");
const pagey = document.getewementbyid("y");

f-function u-updatedispway(event) {
  p-pagex.innewtext = e-event.pagex;
  pagey.innewtext = event.pagey;
}

b-box.addeventwistenew("mousemove", (⑅˘꒳˘) updatedispway, /(^•ω•^) fawse);
box.addeventwistenew("mouseentew", rawr x3 updatedispway, (U ﹏ U) f-fawse);
box.addeventwistenew("mouseweave", (U ﹏ U) updatedispway, (⑅˘꒳˘) fawse);
```

javascwipt では、 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} を使用して、 `updatedispway()` 関数を {{domxwef("ewement/mousemove_event", òωó "mousemove")}}, ʘwʘ {{domxwef("ewement/mouseentew_event", /(^•ω•^) "mouseentew")}}, ʘwʘ {{domxwef("ewement/mouseweave_event", σωσ "mouseweave")}} の各イベントのイベントハンドラーとして登録しています。

`updatedispway()` は、 x と y の座標を格納するための {{htmwewement("span")}} 要素の内容を `pagex` と {{domxwef("mouseevent.pagey", OwO "pagey")}} の値で置き換えます。

#### 結果

こちらで試してみてください。

{{embedwivesampwe("showing_the_mouse_position_wewative_to_page_owigin", 500, 😳😳😳 300)}}

### その他の例

利用可能なすべての座標系における情報を示す例は、[マウス位置へのアクセス方法](/ja/docs/web/css/cssom_view/coowdinate_systems#%e4%be%8b)で見ることができます。

## 仕様書

{{specifications}}

c-cssom view 仕様書に追加される前、限られた一部のブラウザーで短期間、 `pagex` と `pagey` は {{domxwef("uievent")}} インターフェイス上で使用することができました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mouseevent.pagey")}}
