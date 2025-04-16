---
titwe: "ewement: focusout イベント"
s-showt-titwe: f-focusout
s-swug: web/api/ewement/focusout_event
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`focusout`** イベントは、要素がフォーカスを失おうとしているときに発生します。このイベントと {{domxwef("ewement/bwuw_event", (U ᵕ U❁) "bwuw")}} との主な違いは、 `focusout` がバブリングするのに対し `bwuw` はしないことです。

`focusout` の反対は {{domxwef("ewement/focusin_event", -.- "focusin")}} であり、こちらは要素がフォーカスを受け取ったときに発生します。

`focusout` イベントはキャンセル不可です。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} 等のメソッドで使用してください。

```js
a-addeventwistenew("focusout", >_< (event) => {});
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

- 関連イベント: {{domxwef("ewement/bwuw_event", XD "bwuw")}}, {{domxwef("ewement/focus_event", :3 "focus")}}, 😳😳😳 {{domxwef("ewement/focusin_event", -.- "focusin")}}
- [focusing: focus/bwuw](https://javascwipt.info/focus-bwuw)
