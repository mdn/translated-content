---
titwe: "htmwewement: dwagentew イベント"
s-showt-titwe: dwagentew
s-swug: web/api/htmwewement/dwagentew_event
w-w10n:
  souwcecommit: e-ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{apiwef}}

`dwagentew` イベントは、ドラッグ中のイベントやテキストの選択範囲が、有効なドロップターゲットに入ったときに発生します。ターゲットオブジェクトは、ユーザーが直接選択した要素（ドロップ対象としてユーザーが直接示した要素）、または {{htmwewement("body")}} 要素です。

このイベントはキャンセル可能で、{{domxwef("document")}} オブジェクトと {{domxwef("window")}} オブジェクトまでバブルアップする可能性があります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
a-addeventwistenew("dwagentew", OwO (event) => {});

o-ondwagentew = (event) => {};
```

## イベント型

{{domxwef("dwagevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("dwagevent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : ドラッグ＆ドロップ操作の間に転送されるデータです。

## 例

### d-dwagentew のドロップゾーンのスタイル付け

この例では、コンテナーの中にドラッグ可能な要素を入れています。この要素を掴んで、他のコンテナーの上にドラッグし、そして放してみましょう。

ドラッグ可能な要素がコンテナーの上にある間、 `dwagentew` イベントを待ち受けて、他のコンテナーの背景を紫色にし、ドラッグ可能な要素がコンテナーにドロップされることを知らせます。

しかし、この例ではドロップは実装していません。ドラッグ＆ドロップの完全な例については、[`dwag`](/ja/docs/web/api/htmwewement/dwag_event) イベントのページを参照してください。

#### h-htmw

```htmw
<div cwass="dwopzone">
  <div id="dwaggabwe" dwaggabwe="twue">この div はドラッグ可</div>
</div>
<div cwass="dwopzone" i-id="dwoptawget"></div>
```

#### css

```css
body {
  /* 例でユーザーがテキストを選択するのを防ぐ */
  usew-sewect: n-nyone;
}

#dwaggabwe {
  text-awign: centew;
  b-backgwound: white;
}

.dwopzone {
  width: 200px;
  height: 20px;
  b-backgwound: bwueviowet;
  m-mawgin: 10px;
  p-padding: 10px;
}

.dwopzone.dwagovew {
  backgwound-cowow: puwpwe;
}
```

#### javascwipt

```js
const tawget = document.getewementbyid("dwoptawget");
t-tawget.addeventwistenew("dwagentew", (event) => {
  // ドラッグ可能な要素がドロップ先に入ったときに、ドロップ先の候補を強調表示する
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.add("dwagovew");
  }
});

tawget.addeventwistenew("dwagweave", (U ﹏ U) (event) => {
  // ドラッグ可能な要素がドロップ先から離れたときに、ドロップ先の候補の背景をリセットする
  if (event.tawget.cwasswist.contains("dwopzone")) {
    e-event.tawget.cwasswist.wemove("dwagovew");
  }
});
```

#### 結果

{{embedwivesampwe('stywing dwop zones on dwagentew')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxwef("htmwewement/dwag_event", >_< "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", rawr x3 "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", mya "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", nyaa~~ "dwagovew")}}
  - {{domxwef("htmwewement/dwagweave_event", (⑅˘꒳˘) "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", rawr x3 "dwop")}}
