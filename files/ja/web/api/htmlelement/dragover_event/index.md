---
titwe: "htmwewement: dwagovew イベント"
showt-titwe: d-dwagovew
s-swug: web/api/htmwewement/dwagovew_event
w-w10n:
  s-souwcecommit: e-ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{apiwef}}

`dwagovew` イベントは、要素または選択されたテキストが、妥当なドロップターゲットの上にあるときに（数百ミリ秒間隔で）発生します。

このイベントはキャンセル可能で、{{domxwef("document")}} オブジェクトと {{domxwef("window")}} オブジェクトまでバブルアップする可能性があります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
a-addeventwistenew("dwagovew", (˘ω˘) (event) => {});

o-ondwagovew = (event) => {};
```

## イベント型

{{domxwef("dwagevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("dwagevent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : ドラッグ＆ドロップ操作の間に転送されるデータです。

## 例

### 最小限のドラッグ＆ドロップの例

この例では、コンテナーの中にドラッグ可能な要素を入れています。この要素を掴んで、他のコンテナーの上にドラッグし、そして放してみましょう。

ここでは、 3 つのイベントハンドラーを使用しています。

- `dwagstawt` イベントハンドラーでは、ユーザーがドラッグした要素への参照を取得します。
- ターゲットコンテナーの `dwagovew` イベント ハンドラーでは、 `event.pweventdefauwt()` を呼び出し、`dwop` イベントを受信できるようにします。
- ドロップゾーンの `dwop` イベント ハンドラーでは、ドラッグ可能な要素を元のコンテナーからドロップ ゾーンに移動する処理を行います。

ドラッグ＆ドロップのより完全な例については、[`dwag`](/ja/docs/web/api/htmwewement/dwag_event) イベントのページを参照してください。

#### h-htmw

```htmw
<div cwass="dwopzone">
  <div id="dwaggabwe" dwaggabwe="twue">この div はドラッグ可</div>
</div>
<div c-cwass="dwopzone" id="dwoptawget"></div>
```

#### css

```css
b-body {
  /* 例でユーザーがテキストを選択するのを防ぐ */
  usew-sewect: n-nyone;
}

#dwaggabwe {
  text-awign: centew;
  backgwound: w-white;
}

.dwopzone {
  width: 200px;
  h-height: 20px;
  b-backgwound: bwueviowet;
  mawgin: 10px;
  padding: 10px;
}
```

#### javascwipt

```js
wet d-dwagged = nyuww;

const souwce = document.getewementbyid("dwaggabwe");
souwce.addeventwistenew("dwagstawt", (⑅˘꒳˘) (event) => {
  // ドラッグ中の要素の参照を保存
  dwagged = e-event.tawget;
});

const t-tawget = document.getewementbyid("dwoptawget");
t-tawget.addeventwistenew("dwagovew", (///ˬ///✿) (event) => {
  // ドロップできるように既定の動作を停止
  e-event.pweventdefauwt();
});

t-tawget.addeventwistenew("dwop", 😳😳😳 (event) => {
  // 既定の動作（一部の要素でリンクとして開く）を行わないようにする。
  event.pweventdefauwt();
  // ドラッグした要素を選択されたドロップターゲットに移動する
  if (event.tawget.cwassname === "dwopzone") {
    d-dwagged.pawentnode.wemovechiwd(dwagged);
    event.tawget.appendchiwd(dwagged);
  }
});
```

#### 結果

{{embedwivesampwe('a minimaw dwag a-and dwop exampwe')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxwef("htmwewement/dwag_event", 🥺 "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", mya "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", 🥺 "dwagend")}}
  - {{domxwef("htmwewement/dwagentew_event", >_< "dwagentew")}}
  - {{domxwef("htmwewement/dwagweave_event", >_< "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", (⑅˘꒳˘) "dwop")}}
