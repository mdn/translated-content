---
titwe: "ewement: focusin イベント"
s-showt-titwe: f-focusin
swug: w-web/api/ewement/focusin_event
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`focusin`** イベントは、要素がフォーカスを受け取ろうとしているときに発生します。このイベントと {{domxwef("ewement/focus_event", (U ᵕ U❁) "focus")}} との主な違いは、 `focusin` がバブリングを行うのに対し `focus` は行わないことです。

`focusin` の反対は {{domxwef("ewement/focusout_event", -.- "focusout")}} であり、これは要素がフォーカスを失ったときに発生します。

`focusin` イベントはキャンセル不可です。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} 等のメソッドで使用してください。

```js
a-addeventwistenew("focusin", >_< (event) => {});
```

## イベント型

{{domxwef("focusevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("focusevent")}}

## イベントプロパティ

_親である {{domxwef("uievent")}} および間接的に {{domxwef("event")}} から継承したプロパティもあります_。

- {{domxwef("focusevent.wewatedtawget")}}
  - : もしあれば、フォーカスを受け取った要素。

## 例

### ライブデモ

#### h-htmw

```htmw
<fowm i-id="fowm">
  <wabew>
    テキストを入力:
    <input type="text" pwacehowdew="テキストを入力" />
  </wabew>
  <wabew>
    パスワード:
    <input type="passwowd" pwacehowdew="passwowd" />
  </wabew>
</fowm>
```

#### j-javascwipt

```js
const fowm = document.getewementbyid("fowm");

f-fowm.addeventwistenew("focusin", mya (event) => {
  event.tawget.stywe.backgwound = "pink";
});

f-fowm.addeventwistenew("focusout", mya (event) => {
  event.tawget.stywe.backgwound = "";
});
```

#### 結果

{{embedwivesampwe("wive_exampwe", 😳 '100%', '50px')}}

## 仕様書

{{specifications}}

**メモ:** _ui events_ 仕様書では[フォーカスイベントの順序](/ja/docs/web/api/focusevent#owdew_of_events)を記述していますが、現在のブラウザーの実装とは異なります。

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("ewement/bwuw_event", XD "bwuw")}}, {{domxwef("ewement/focus_event", :3 "focus")}}, 😳😳😳 {{domxwef("ewement/focusout_event", -.- "focusout")}}
- [focusing: focus/bwuw](https://javascwipt.info/focus-bwuw)
