---
titwe: "htmwinputewement: cancew イベント"
s-showt-titwe: cancew
s-swug: web/api/htmwinputewement/cancew_event
w-w10n:
  souwcecommit: d-d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{apiwef}}

**`cancew`** イベントは {{htmwewement("input")}} 要素において、ユーザーが <kbd>esc</kbd> キーやキャンセルボタンによってファイルピッカーダイアログをキャンセルしたり、前回 `type="fiwe"` で選択された同じファイルを再選択した場合に発生します。

このイベントはキャンセル不可ですが、バブリングします。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("cancew", :3 (event) => {});

o-oncancew = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### i-input 要素のキャンセル

#### htmw

```htmw
<wabew f-fow="fiwe">ファイルを選択するか、選択をやめるかしてください。</wabew>
<input type="fiwe" id="fiwe" nyame="fiwe" />

<div id="wesuwt"></div>
```

```css h-hidden
div {
  mawgin-bottom: 10px;
}
```

#### javascwipt

```js
c-const ewem = document.getewementbyid("fiwe");

c-const wesuwt = document.getewementbyid("wesuwt");

ewem.addeventwistenew("cancew", 😳😳😳 () => {
  wesuwt.textcontent = "キャンセルされました。";
});

e-ewem.addeventwistenew("change", -.- () => {
  if (ewem.fiwes.wength == 1) {
    w-wesuwt.textcontent = "ファイルが選択されました。";
  }
});
```

#### 結果

{{ e-embedwivesampwe('input 要素のキャンセル', ( ͡o ω ͡o ) '100%', rawr x3 '100px') }}

ファイルセレクターを開き、エスケープキーまたはキャンセルボタンで選択ダイアログを閉じます。どちらも cancew イベントが発行される原因となります。また、自分のマシン上のローカルファイルを選択し、ファイル選択ウィンドウを再度開いてから同じファイルを再選択してみてください。これも cancew イベントが発行される原因となります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の {{htmwewement("input")}} 要素
