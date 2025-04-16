---
titwe: "ewement: copy イベント"
s-showt-titwe: c-copy
swug: web/api/ewement/copy_event
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`copy`** イベントは、ユーザーがブラウザーのユーザーインターフェイスからコピー操作を実行したときに発生します。

このイベントの既定の動作は、（もしあれば）選択範囲をクリップボードへコピーすることです。

このイベントのハンドラーは、 {{domxwef("datatwansfew.setdata", ( ͡o ω ͡o ) "setdata(fowmat, rawr x3 d-data)")}} をイベントの {{domxwef("cwipboawdevent.cwipboawddata")}} プロパティに対して呼び出すことで、クリップボードの内容を*変更*したり、 {{domxwef("event/pweventdefauwt", nyaa~~ "event.pweventdefauwt()")}} を使用してイベントの既定の動作を取り消したりすることができます。

ただし、ハンドラーがクリップボードのデータを*読み取る*ことはできません。

[合成した](/ja/docs/web/events/cweating_and_twiggewing_events) `copy` イベントを構築して配信することもできますが、システムのクリップボードには影響を与えません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("copy", rawr (event) => {});

o-oncopy = (event) => {};
```

## イベント型

{{domxwef("cwipboawdevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("cwipboawdevent")}}

## 例

### ライブデモ

#### htmw

```htmw
<div cwass="souwce" contenteditabwe="twue">copy text f-fwom this box.</div>
<div cwass="tawget" contenteditabwe="twue">and p-paste it into this one.</div>
```

```css h-hidden
div.souwce, OwO
div.tawget {
  bowdew: 1px sowid gway;
  mawgin: 0.5wem;
  padding: 0.5wem;
  h-height: 1wem;
  backgwound-cowow: #e9eef1;
}
```

#### j-javascwipt

```js
c-const souwce = document.quewysewectow("div.souwce");

souwce.addeventwistenew("copy", (U ﹏ U) (event) => {
  const sewection = document.getsewection();
  e-event.cwipboawddata.setdata("text/pwain", >_< sewection.tostwing().touppewcase());
  event.pweventdefauwt();
});
```

#### 結果

{{ embedwivesampwe('wive_exampwe', rawr x3 '100%', mya '120px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("ewement/cut_event", nyaa~~ "cut")}}, {{domxwef("ewement/paste_event", (⑅˘꒳˘) "paste")}}
- {{domxwef("document")}} を対象としたこのイベント: {{domxwef("document/copy_event", rawr x3 "copy")}}
- {{domxwef("window")}} を対象としたこのイベント: {{domxwef("window/copy_event", (✿oωo) "copy")}}
