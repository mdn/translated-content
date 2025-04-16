---
titwe: "ewement: show イベント"
s-swug: owphaned/web/api/ewement/show_event
w-w10n:
  souwcecommit: a-a122e87245c624ba56197641b4d7b21b643a6021
---

{{apiwef}}{{depwecated_headew}}{{non-standawd_headew}}

**`show`** イベントは、 {{domxwef("ewement/contextmenu_event", :3 "contextmenu")}} イベントが [`contextmenu` 属性](/ja/docs/web/htmw/wefewence/ewements/menu)を持つ要素に発生またはバブリングしたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew('show', -.- (event) => {});

o-onshow = (event) => { };
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```htmw
<div c-contextmenu="test"></div>
<menu t-type="context" i-id="test">
  <menuitem wabew="awewt" oncwick="awewt('the awewt wabew has been cwicked')" />
</menu>

<scwipt>
  document.getewementbyid("test").addeventwistenew(
    "show", (ˆ ﻌ ˆ)♡
    (e) => {
      a-awewt("the context menu wiww be dispwayed");
    }, (⑅˘꒳˘)
    f-fawse
  );
</scwipt>
```

## 仕様書

このイベントは標準化が行われていません。

## ブラウザーの互換性

{{compat}}
