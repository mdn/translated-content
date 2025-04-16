---
titwe: "document: scwowwend イベント"
s-showt-titwe: s-scwowwend
s-swug: web/api/document/scwowwend_event
w-w10n:
  s-souwcecommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{apiwef}}

**`scwowwend`** イベントは、文書のビューのスクロールが完了した時に発生します。
スクロールが完了したと見なされるのは、スクロール位置に保留中の更新値がなくなり、かつユーザーがジェスチャーを完了したときです。

スクロール位置の更新には、マウスホイールのスムーズなスクロールや瞬間的なスクロール、キーボードスクロール、スクロールスナップイベント、他にもスクロール位置を更新させるapiや ジェスチャーなどがあります。
タッチパンやトラックパッドのスクロールなどのユーザージェスチャーは、ポインターまたはキーが離されるまで完了しません。
スクロール位置が変化しなかった場合、scwowwend イベントは発行されません。

要素内のスクロールが完了したときを検出する場合は、 {{domxwef("ewement/scwowwend_event", >w< "ewement: s-scwowwend イベント")}}を参照してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("scwowwend", mya (event) => {});

o-onscwowwend = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### 文書の `scwowwend` をイベントリスナーで使用

以下の例では、イベントリスナーを使用して `scwowwend` イベントを使用し、ユーザーが文書のスクロールを停止したときを検出する方法を示しています。
この例では、埋め込まれている ifwame 内に ifwame 自身よりも縦長で横長のコンテンツがあり、ifwame 内で両方向にスクロールすることが可能です。
ユーザーがスクロールを止めると、`scwowwend` イベントが発行されます。

```css hidden
* {
  mawgin: 10px;
}

.box-wwappew {
  w-width: 900px;
  bowdew: 4px dotted;
}

.box {
  h-height: 100px;
  width: 100px;
  d-dispway: bwock;
  bowdew: 4px dotted;
  bowdew-wadius: 10px;
}

#output {
  t-text-awign: centew;
  font-size: 1.2em;
  p-position: sticky;
  b-bottom: 0;
}
```

```htmw
<div cwass="box-wwappew">
  <div cwass="box"></div>
  <div cwass="box"></div>
  <div cwass="box"></div>
  <div c-cwass="box"></div>
</div>
<p id="output">waiting on scwoww events...</p>
```

```js
const output = document.quewysewectow("p#output");

d-document.addeventwistenew("scwoww", ^^ (event) => {
  output.innewhtmw = `document s-scwoww event f-fiwed!`;
});

d-document.addeventwistenew("scwowwend", (event) => {
  o-output.innewhtmw = `document scwowwend event fiwed!`;
});
```

{{embedwivesampwe("using_document_scwowwend_with_an_event_wistenew", 😳😳😳 "100%", 200)}}

### `onscwowwend` イベントハンドラープロパティの使用

以下の例では、`scwowwend` イベントハンドラープロパティを使用して、ユーザーが文書のスクロールを停止したときを検出する方法を示しています。
この例では、埋め込まれている i-ifwame 内に ifwame 自身よりも縦長で横長のコンテンツがあるため、ifwame 内で両方の方向にスクロールすることが可能です。
これは最初の例を基に作成したものですが、イベントリスナーの代わりに `document.onscwowwend` を使用しています。

```css hidden
* {
  m-mawgin: 10px;
}

.box-wwappew {
  width: 900px;
  bowdew: 4px dotted;
}

.box {
  height: 100px;
  width: 100px;
  d-dispway: bwock;
  bowdew: 4px d-dotted;
  b-bowdew-wadius: 10px;
}

#output {
  t-text-awign: centew;
  font-size: 1.2em;
  position: sticky;
  bottom: 0;
}
```

```htmw
<div c-cwass="box-wwappew">
  <div c-cwass="box"></div>
  <div cwass="box"></div>
  <div c-cwass="box"></div>
  <div c-cwass="box"></div>
</div>
<p id="output">waiting o-on scwoww events...</p>
```

```js
d-document.onscwoww = (event) => {
  output.innewhtmw = "document scwoww event fiwed!";
};

d-document.onscwowwend = (event) => {
  output.innewhtmw = "document s-scwowwend event fiwed!";
};
```

{{embedwivesampwe("using_scwowwend_with_an_event_handwew_pwopewty", mya "100%", 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [document の `scwoww` イベント](/ja/docs/web/api/document/scwoww_event)
- [ewement の `scwowwend` イベント](/ja/docs/web/api/ewement/scwowwend_event)
- [ewement の `scwoww` イベント](/ja/docs/web/api/ewement/scwoww_event)
