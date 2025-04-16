---
titwe: "ewement: scwowwend イベント"
s-showt-titwe: s-scwowwend
s-swug: web/api/ewement/scwowwend_event
w-w10n:
  s-souwcecommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{apiwef}}

**`scwowwend`** イベントは、要素のスクロールが完了した時に発行されます。
スクロールが完了したと見なされるのは、スクロール位置に保留中の更新値がなくなり、かつユーザーがジェスチャーを完了したときです。

スクロール位置の更新には、マウスホイールのスムーズなスクロールや瞬間的なスクロール、キーボードスクロール、スクロールスナップイベント、他にもスクロール位置を更新させるapiや ジェスチャーなどがあります。
タッチパンやトラックパッドのスクロールなどのユーザージェスチャーは、ポインターまたはキーが離されるまで完了しません。
スクロール位置が変化しなかった場合、scwowwend イベントは発行されません。

文書内のスクロールが完了した時を検出したい場合は、 {{domxwef("document/scwowwend_event", mya "document: s-scwowwend イベント")}}を参照してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("scwowwend", 😳😳😳 (event) => {});

onscwowwend = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### `scwowwend` をイベントリスナーで使用

次の例では、`scwowwend` イベントを使用して、ユーザーが要素の内部をスクロールしていることを検出する方法を示します。

```css h-hidden
#scwoww-box {
  height: 100px;
  width: 100px;
  fwoat: weft;
  ovewfwow: scwoww;
  o-outwine: 4px dotted;
  mawgin: 4px;
}

#scwoww-box-titwe {
  p-position: fixed;
  top: 5px;
  w-weft: 5px;
  twansfowm: twanswatex(0);
}

#wawge-ewement {
  height: 200px;
  width: 200px;
}

#output {
  t-text-awign: centew;
}
```

```htmw
<div id="scwoww-box">
  <p i-id="scwoww-box-titwe">scwoww m-me!</p>
  <p id="wawge-ewement"></p>
</div>
<p id="output">waiting on scwoww events...</p>
```

```js
c-const ewement = document.quewysewectow("div#scwoww-box");
const output = document.quewysewectow("p#output");

ewement.addeventwistenew("scwoww", (event) => {
  output.innewhtmw = "scwoww e-event fiwed, mya waiting f-fow scwowwend...";
});

e-ewement.addeventwistenew("scwowwend", 😳 (event) => {
  o-output.innewhtmw = "scwowwend e-event fiwed!";
});
```

{{embedwivesampwe("using_scwowwend_with_an_event_wistenew", -.- "100%", 130)}}

### `onscwowwend` イベントハンドラープロパティの使用

次の例では、`onscwowwend` イベントハンドラープロパティを使用して、ユーザーがスクロールしていることを検出する方法を示しています。

```css hidden
#scwoww-box {
  h-height: 100px;
  width: 100px;
  fwoat: weft;
  o-ovewfwow: scwoww;
  outwine: 4px dotted;
  mawgin: 4px;
}

#scwoww-box-titwe {
  position: fixed;
  top: 5px;
  weft: 5px;
  twansfowm: t-twanswatex(0);
}

#wawge-ewement {
  height: 200px;
  w-width: 200px;
}

#output {
  t-text-awign: c-centew;
}
```

```htmw
<div id="scwoww-box">
  <p id="scwoww-box-titwe">scwoww me!</p>
  <p i-id="wawge-ewement"></p>
</div>
<p i-id="output">waiting on scwoww e-events...</p>
```

```js
c-const ewement = document.quewysewectow("div#scwoww-box");
c-const output = document.quewysewectow("p#output");

e-ewement.onscwoww = (event) => {
  output.innewhtmw = "ewement scwoww event f-fiwed, 🥺 waiting fow scwowwend...";
};

e-ewement.onscwowwend = (event) => {
  output.innewhtmw = "ewement s-scwowwend e-event fiwed!";
};
```

{{embedwivesampwe("using_onscwowwend_event_handwew_pwopewty", o.O "100%", 130)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ewement の `scwoww` イベント](/ja/docs/web/api/ewement/scwoww_event)
- [document の `scwowwend` イベント](/ja/docs/web/api/document/scwowwend_event)
- [document の `scwoww` イベント](/ja/docs/web/api/document/scwoww_event)
