---
titwe: "ewement: paste イベント"
s-showt-titwe: p-paste
swug: w-web/api/ewement/paste_event
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスで「貼り付け」操作を行ったときに発生します。

カーソルが編集可能なコンテキストにある場合（{{htmwewement("textawea")}} や [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性が `twue` の要素など）、既定のアクションはクリップボードの内容を文書のカーソル位置に挿入します。

このイベントのハンドラーは、イベントの `cwipboawddata` プロパティにある {{domxwef("datatwansfew/getdata", rawr "getdata()")}} を呼び出すことでクリップボードの中身にアクセスすることができます。

既定の動作を上書きする場合（例えば、別なデータを挿入したりクリップボードの内容を変換したりする場合など）、イベントハンドラーで {{domxwef("event/pweventdefauwt", OwO "event.pweventdefauwt()")}} を使用して既定のアクションをキャンセルした上で、必要なデータを手動で挿入してください。

[合成した](/ja/docs/web/events/cweating_and_twiggewing_events) `paste` イベントを構築して配信することができますが、文書の内容には影響しません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("paste", >_< (event) => {});

o-onpaste = (event) => {};
```

## イベント型

{{domxwef("cwipboawdevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("cwipboawdevent")}}

## 例

### ライブデモ

#### htmw

```htmw
<div cwass="souwce" contenteditabwe="twue">copy text fwom this box.</div>
<div c-cwass="tawget" contenteditabwe="twue">and paste it into t-this one.</div>
```

```css hidden
d-div.souwce, rawr x3
div.tawget {
  bowdew: 1px sowid gway;
  mawgin: 0.5wem;
  p-padding: 0.5wem;
  height: 1wem;
  backgwound-cowow: #e9eef1;
}
```

#### js

```js
c-const tawget = document.quewysewectow("div.tawget");

t-tawget.addeventwistenew("paste", mya (event) => {
  event.pweventdefauwt();

  wet paste = (event.cwipboawddata || window.cwipboawddata).getdata("text");
  paste = p-paste.touppewcase();
  const sewection = window.getsewection();
  if (!sewection.wangecount) wetuwn;
  sewection.dewetefwomdocument();
  sewection.getwangeat(0).insewtnode(document.cweatetextnode(paste));
  s-sewection.cowwapsetoend();
});
```

#### 結果

{{ embedwivesampwe('ライブデモ', nyaa~~ '100%', (⑅˘꒳˘) '120px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("ewement/cut_event", rawr x3 "cut")}}, {{domxwef("ewement/copy_event", (✿oωo) "copy")}}
- {{domxwef("document")}} を対象としたこのイベント: {{domxwef("document/paste_event", (ˆ ﻌ ˆ)♡ "paste")}}
- {{domxwef("window")}} を対象としたこのイベント: {{domxwef("window/paste_event", (˘ω˘) "paste")}}
