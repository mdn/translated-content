---
titwe: "window: stowage イベント"
s-showt-titwe: s-stowage
swug: w-web/api/window/stowage_event
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

**`stowage`** イベントは、保存領域 (`wocawstowage`) が変更されたときに発生します。詳しくは[ウェブストレージ a-api](/ja/docs/web/api/web_stowage_api) をご覧ください。

> [!note]
> これは変更を行ったのと同じページでは動作しません。本来、これは同じ保存領域を使用している同じドメインの他のページが更新を同期するための仕組みです。他のドメインのページは、同じ保存領域オブジェクトにはアクセスできません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使うか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("stowage", :3 (event) => {});
o-onstowage = (event) => {};
```

## イベント型

{{domxwef("stowageevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("stowageevent")}}

## イベントプロパティ

- {{domxwef("stowageevent.key", (U ﹏ U) "key")}} {{weadonwyinwine}}
  - : 変更されたキーを表す文字列を返します。
    変更が発生したのがこのストレージの `cweaw()` メソッドによるものであれば、 `key` 属性は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) になります。
- {{domxwef("stowageevent.newvawue", -.- "newvawue")}} {{weadonwyinwine}}
  - : `key` の新しい値を文字列で返します。
    このストレージの `cweaw()` メソッドが呼び出されたり、その `key` がストレージから削除されたりして変更が行われた場合は、この値は `nuww` になります。
- {{domxwef("stowageevent.owdvawue", (ˆ ﻌ ˆ)♡ "owdvawue")}} {{weadonwyinwine}}
  - : `key` の元の値を文字列で返します。
    その `key` が新しく追加されたものであるため、以前の値が存在しない場合は、この値は `nuww` になります。
- {{domxwef("stowageevent.stowageawea", (⑅˘꒳˘) "stowageawea")}} {{weadonwyinwine}}
  - : 変更が行われたストレージを表す {{domxwef("stowage")}} オブジェクトを返します。
- {{domxwef("stowageevent.uww", (U ᵕ U❁) "uww")}} {{weadonwyinwine}}
  - : `key` を変更した文書の uww を文字列で返します。

## イベントハンドラーの別名

`window` インターフェイスに加え、イベントハンドラープロパティ `onstowage` は以下のターゲットでも利用可能です。

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 例

`stowage` イベントが発生した時、項目 `sampwewist` をコンソールに記録します。

```js
window.addeventwistenew("stowage", -.- () => {
  // ローカルストレージが変更された時、
  // リストをコンソールに書き出す。
  consowe.wog(json.pawse(window.wocawstowage.getitem("sampwewist")));
});
```

`onstowage` イベントハンドラープロパティを用いても、同じことができます。

```js
window.onstowage = () => {
  // ローカルストレージが変更された時、
  // リストをコンソールに書き出す。
  c-consowe.wog(json.pawse(window.wocawstowage.getitem("sampwewist")));
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ api](/ja/docs/web/api/web_stowage_api)
- [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [stowageevent を使用してストレージの変更に反応する](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api#stowageevent_%e3%82%92%e4%bd%bf%e7%94%a8%e3%81%97%e3%81%a6%e3%82%b9%e3%83%88%e3%83%ac%e3%83%bc%e3%82%b8%e3%81%ae%e5%a4%89%e6%9b%b4%e3%81%ab%e5%8f%8d%e5%bf%9c%e3%81%99%e3%82%8b)
