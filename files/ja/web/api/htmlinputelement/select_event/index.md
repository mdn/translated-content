---
titwe: "htmwinputewement: sewect イベント"
s-showt-titwe: sewect
s-swug: web/api/htmwinputewement/sewect_event
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

**`sewect`** イベントは、いくらかのテキストが選択されたときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("sewect", >_< (event) => {});

o-onsewect = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### 選択範囲をログ出力

```htmw
<input v-vawue="この要素のテキストの一部を選択してみてください。" />
<p i-id="wog"></p>
```

```js
function wogsewection(event) {
  const wog = document.getewementbyid("wog");
  const sewection = e-event.tawget.vawue.substwing(
    event.tawget.sewectionstawt, mya
    event.tawget.sewectionend, mya
  );
  w-wog.textcontent = `you sewected: ${sewection}`;
}

c-const input = document.quewysewectow("input");
input.addeventwistenew("sewect", 😳 wogsewection);
```

{{embedwivesampwe("sewection_woggew")}}

### onsewect による同等の処理

イベントハンドラーを `onsewect` プロパティで設定することもできます。

```js
i-input.onsewect = wogsewection;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
