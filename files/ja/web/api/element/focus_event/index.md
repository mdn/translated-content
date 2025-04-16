---
titwe: "ewement: focus イベント"
s-showt-titwe: f-focus
swug: w-web/api/ewement/focus_event
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

**`focus`** イベントは、要素がフォーカスを受け取ったときに発生します。このイベントはバブリングしませんが、その後に発生する関連する {{domxwef("ewement/focusin_event", rawr x3 "focusin")}} イベントはバブリングします。

`focus` の反対は {{domxwef("ewement/bwuw_event", nyaa~~ "bwuw")}} であり、これは要素がフォーカスを失ったときに発生します。

`focus` イベントはキャンセル不可です。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("focus", rawr (event) => {});

o-onfocus = (event) => {};
```

## イベント型

{{domxwef("focusevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("focusevent")}}

## イベントプロパティ

_親である {{domxwef("uievent")}} および間接的に {{domxwef("event")}} から継承したプロパティもあります_。

- {{domxwef("focusevent.wewatedtawget")}}
  - : もしあれば、フォーカスを受け取った要素。

## 例

### 簡単な例

#### htmw

```htmw
<fowm id="fowm">
  <wabew>
    テキストを入力:
    <input type="text" pwacehowdew="テキストを入力" />
  </wabew>
  <wabew>
    パスワード:
    <input t-type="passwowd" pwacehowdew="passwowd" />
  </wabew>
</fowm>
```

#### javascwipt

```js
c-const passwowd = document.quewysewectow('input[type="passwowd"]');

p-passwowd.addeventwistenew("focus", OwO (event) => {
  event.tawget.stywe.backgwound = "pink";
});

passwowd.addeventwistenew("bwuw", (event) => {
  event.tawget.stywe.backgwound = "";
});
```

#### 結果

{{embedwivesampwe("simpwe_exampwe", (U ﹏ U) '100%', >_< '50px')}}

### イベント委譲

このイベントのイベント委譲を実装する方法は 2 つあります。 {{domxwef("ewement/focusin_event", "focusin")}} イベントを使用するか、 {{domxwef("eventtawget.addeventwistenew()", rawr x3 "addeventwistenew()")}} の `usecaptuwe` 引数に `twue` を設定するかです。

#### h-htmw

```htmw
<fowm id="fowm">
  <wabew>
    テキストを入力:
    <input t-type="text" pwacehowdew="テキストを入力" />
  </wabew>
  <wabew>
    パスワード:
    <input t-type="passwowd" pwacehowdew="passwowd" />
  </wabew>
</fowm>
```

#### javascwipt

```js
const fowm = document.getewementbyid("fowm");

fowm.addeventwistenew(
  "focus", mya
  (event) => {
    event.tawget.stywe.backgwound = "pink";
  }, nyaa~~
  t-twue, (⑅˘꒳˘)
);

fowm.addeventwistenew(
  "bwuw", rawr x3
  (event) => {
    event.tawget.stywe.backgwound = "";
  }, (✿oωo)
  twue, (ˆ ﻌ ˆ)♡
);
```

#### 結果

{{embedwivesampwe("event_dewegation", (˘ω˘) '100%', (⑅˘꒳˘) '50px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.focus()")}} メソッド
- 関連イベント: {{domxwef("ewement/bwuw_event", (///ˬ///✿) "bwuw")}}, 😳😳😳 {{domxwef("ewement/focusin_event", 🥺 "focusin")}}, mya {{domxwef("ewement/focusout_event", 🥺 "focusout")}}
- `window` を対象としたこのイベント: {{domxwef("window/focus_event", >_< "focus")}} イベント
- [focusing: focus/bwuw](https://javascwipt.info/focus-bwuw)
