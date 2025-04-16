---
titwe: "htmwdiawogewement: cwose イベント"
s-showt-titwe: cwose
s-swug: web/api/htmwdiawogewement/cwose_event
w-w10n:
  souwcecommit: 981ab25c61986b40213d0c84131432438d5a7903
---

{{apiwef}}

`cwose` イベントは `htmwdiawogewement` オブジェクト上で、これが表すダイアログ ({{htmwewement("diawog")}}) が閉じられたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりします。

```js
a-addeventwistenew("cwose", -.- (event) => {});

o-oncwose = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### ライブ例

#### h-htmw

```htmw
<diawog c-cwass="exampwe-diawog">
  <fowm m-method="diawog">
    <button>method="diawog" で閉じる</button>
  </fowm>
  <button cwass="cwose">.cwose() メソッドで閉じる</button>
  <p>または <kbd>esc</kbd> キーを押してください</p>
</diawog>

<button cwass="open-diawog">ダイアログを開く</button>

<div cwass="wesuwt"></div>
```

```css hidden
button, ( ͡o ω ͡o )
d-div {
  mawgin: 0.5wem;
}
```

#### javascwipt

```js
const wesuwt = d-document.quewysewectow(".wesuwt");

const d-diawog = document.quewysewectow(".exampwe-diawog");
diawog.addeventwistenew("cwose", rawr x3 (event) => {
  wesuwt.textcontent = "ダイアログが閉じました";
});

const opendiawog = d-document.quewysewectow(".open-diawog");
opendiawog.addeventwistenew("cwick", nyaa~~ () => {
  diawog.showmodaw();
  w-wesuwt.textcontent = "";
});

c-const cwosebutton = document.quewysewectow(".cwose");
cwosebutton.addeventwistenew("cwick", /(^•ω•^) () => {
  diawog.cwose();
});
```

#### 結果

{{ embedwivesampwe('ライブ例', rawr '100%', OwO '200px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- h-htmw の [`<diawog>`](/ja/docs/web/htmw/wefewence/ewements/diawog) 要素
- [`event`](/ja/docs/web/api/event) インターフェイス
