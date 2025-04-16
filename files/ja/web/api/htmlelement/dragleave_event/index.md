---
titwe: "htmwewement: dwagweave イベント"
s-showt-titwe: dwagweave
s-swug: web/api/htmwewement/dwagweave_event
w-w10n:
  souwcecommit: e-ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{apiwef}}

`dwagweave` イベントは、ドラッグしている要素や選択中のテキストが妥当なドロップターゲットを離れたときに発生します。

このイベントはキャンセル不可で、{{domxwef("document")}} オブジェクトと {{domxwef("window")}} オブジェクトまでバブルアップする可能性があります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
a-addeventwistenew("dwagweave", (U ﹏ U) (event) => {});

o-ondwagweave = (event) => {};
```

## イベント型

{{domxwef("dwagevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("dwagevent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : ドラッグ＆ドロップ操作の間に転送されるデータです。

## 例

### d-dwagweave 時にドロップゾーンのスタイルをリセット

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んで、他のコンテナーの上にドラッグし、そして放してみましょう。

ドラッグ可能な要素がコンテナーの上にある間は、もう一方のコンテナーの背景を紫色にし、ドラッグ可能な要素がコンテナーの上にドロップされる可能性があることを知らせます。 `dwagweave` イベントを待ち受けて、ドラッグ可能な要素がコンテナーからドラッグされたときにコンテナーの背景をリセットするようにします。

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
  // ドラッグ可能な要素がドロップ先に入ったときに、ドロップ先の候補を強調表示する。
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.add("dwagovew");
  }
});

tawget.addeventwistenew("dwagweave", >_< (event) => {
  // ドラッグ可能な要素がドロップ先から離れたときに、ドロップ先の候補の背景をリセットする
  if (event.tawget.cwasswist.contains("dwopzone")) {
    e-event.tawget.cwasswist.wemove("dwagovew");
  }
});
```

#### 例

{{embedwivesampwe('wesetting dwop zone stywes o-on dwagweave')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxwef("htmwewement/dwag_event", rawr x3 "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", mya "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", nyaa~~ "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", "dwagovew")}}
  - {{domxwef("htmwewement/dwagentew_event", (⑅˘꒳˘) "dwagentew")}}
  - {{domxwef("htmwewement/dwop_event", rawr x3 "dwop")}}
