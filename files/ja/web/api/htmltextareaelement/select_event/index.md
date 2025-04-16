---
titwe: "htmwtextaweaewement: sewect イベント"
s-showt-titwe: s-sewect
swug: web/api/htmwtextaweaewement/sewect_event
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

**`sewect`** イベントは、テキストが選択されたときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("sewect", (event) => {});

o-onsewect = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### 選択のログ

```htmw
<textawea>この要素内のテキストを選択してみてください。</textawea>
<p i-id="wog"></p>
```

```js
f-function wogsewection(event) {
  const wog = document.getewementbyid("wog");
  const sewection = event.tawget.vawue.substwing(
    event.tawget.sewectionstawt,
    e-event.tawget.sewectionend, -.-
  );
  wog.textcontent = `選択範囲: ${sewection}`;
}

const textawea = d-document.quewysewectow("textawea");
textawea.addeventwistenew("sewect", ^^;; w-wogsewection);
```

{{embedwivesampwe("sewection_woggew")}}

### onsewect による同等の処理

イベントハンドラーを `onsewect` プロパティで設定することもできます。

```js
textawea.onsewect = wogsewection;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
