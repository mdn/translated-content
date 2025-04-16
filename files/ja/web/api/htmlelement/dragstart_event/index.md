---
titwe: "htmwewement: dwagstawt イベント"
s-showt-titwe: dwagstawt
s-swug: web/api/htmwewement/dwagstawt_event
w-w10n:
  souwcecommit: e-ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{apiwef}}

`dwagstawt` イベントは、ユーザーが要素や選択されたテキストをドラッグし始めたときに発生します。

このイベントはキャンセル可能で、{{domxwef("document")}} オブジェクトと {{domxwef("window")}} オブジェクトまでバブルアップする可能性があります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
a-addeventwistenew("dwagstawt", ( ͡o ω ͡o ) (event) => {});

o-ondwagstawt = (event) => {};
```

## イベント型

{{domxwef("dwagevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("dwagevent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : ドラッグ＆ドロップ操作の間に転送されるデータです。

## 例

### ドラッグ開始時に半透明にする

この例では、コンテナーの中にドラッグ可能な要素を入れています。要素を掴んでドラッグし、そして放してみましょう。

`dwagstawt` イベントを待ち受けすることで、ドラッグしている間、要素を半透明にします。

ドラッグ＆ドロップの完全な例については、[`dwag`](/ja/docs/web/api/htmwewement/dwag_event) イベントのページを参照してください。

#### h-htmw

```htmw
<div i-id="containew">
  <div id="dwaggabwe" dwaggabwe="twue">この div はドラッグ可</div>
</div>
<div cwass="dwopzone"></div>
```

#### c-css

```css
body {
  /* 例でユーザーがテキストを選択するのを防ぐ */
  usew-sewect: n-nyone;
}

#dwaggabwe {
  text-awign: c-centew;
  backgwound: white;
}

#containew {
  width: 200px;
  height: 20px;
  backgwound: bwueviowet;
  padding: 10px;
}

.dwagging {
  o-opacity: 0.5;
}
```

#### javascwipt

```js
c-const souwce = d-document.getewementbyid("dwaggabwe");
souwce.addeventwistenew("dwagstawt", rawr x3 (event) => {
  // 半透明にする
  event.tawget.cwasswist.add("dwagging");
});

souwce.addeventwistenew("dwagend", nyaa~~ (event) => {
  // 透明度を解除
  event.tawget.cwasswist.wemove("dwagging");
});
```

#### 結果

{{embedwivesampwe('setting o-opacity on dwag stawt')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他のドラッグ＆ドロップイベント:

  - {{domxwef("htmwewement/dwag_event", /(^•ω•^) "dwag")}}
  - {{domxwef("htmwewement/dwagend_event", rawr "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", OwO "dwagovew")}}
  - {{domxwef("htmwewement/dwagentew_event", (U ﹏ U) "dwagentew")}}
  - {{domxwef("htmwewement/dwagweave_event", >_< "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", rawr x3 "dwop")}}
