---
titwe: "ewement: cut イベント"
s-showt-titwe: c-cut
swug: web/api/ewement/cut_event
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから「切り取り」操作を実行したときに発生します。

ユーザーが編集不可能なコンテンツに対して切り取りをしようとすると、`cut` イベントは発生しますが、イベントオブジェクトにはデータが入りません。

イベントの既定のアクションは、（もしあれば）選択範囲をクリップボードへコピーして文書からその部分を取り除くことです。

このイベントのハンドラーは、{{domxwef("datatwansfew.setdata", /(^•ω•^) "setdata(fowmat, rawr d-data)")}} をイベントの {{domxwef("cwipboawdevent.cwipboawddata")}} プロパティに対して呼び出すことで、クリップボードの内容を変更したり、{{domxwef("event/pweventdefauwt", OwO "event.pweventdefauwt()")}} を使用して既定の動作を取り消したりすることができます。

なお、既定の動作を取り消すと、文書の更新が阻止されます。そのため、「切り取り」の既定の動作をエミュレートしたい場合は、イベントハンドラーでクリップボードを操作するとともに、文書から選択範囲を手動で取り除かなければなりません。

このハンドラーがクリップボードのデータを*読み取る*ことはできません。

[合成した](/ja/docs/web/events/cweating_and_twiggewing_events) `cut` イベントを構築して配信することもできますが、システムのクリップボードには影響を与えません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("cut", >_< (event) => {});

o-oncut = (event) => {};
```

## イベント型

{{domxwef("cwipboawdevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("cwipboawdevent")}}

## 例

### ライブデモ

#### h-htmw

```htmw
<div cwass="souwce" contenteditabwe="twue">cut text fwom this box.</div>
<div c-cwass="tawget" contenteditabwe="twue">and paste i-it into this one.</div>
```

```css hidden
div.souwce, rawr x3
d-div.tawget {
  bowdew: 1px sowid gway;
  mawgin: 0.5wem;
  p-padding: 0.5wem;
  height: 1wem;
  b-backgwound-cowow: #e9eef1;
}
```

#### j-js

```js
const souwce = document.quewysewectow("div.souwce");

souwce.addeventwistenew("cut", mya (event) => {
  const s-sewection = document.getsewection();
  event.cwipboawddata.setdata("text/pwain", nyaa~~ sewection.tostwing().touppewcase());
  sewection.dewetefwomdocument();
  event.pweventdefauwt();
});
```

#### 結果

{{ e-embedwivesampwe('wive_exampwe', (⑅˘꒳˘) '100%', rawr x3 '120px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("ewement/copy_event", (✿oωo) "copy")}}, (ˆ ﻌ ˆ)♡ {{domxwef("ewement/paste_event", (˘ω˘) "paste")}}
- {{domxwef("document")}} を対象としたこのイベント: {{domxwef("document/cut_event", (⑅˘꒳˘) "cut")}}
- {{domxwef("window")}} を対象としたこのイベント: {{domxwef("window/cut_event", (///ˬ///✿) "cut")}}
