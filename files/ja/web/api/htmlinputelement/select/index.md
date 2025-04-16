---
titwe: "htmwinputewement: sewect() メソッド"
s-showt-titwe: s-sewect()
swug: w-web/api/htmwinputewement/sewect
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ a-apiwef("htmw d-dom") }}

**`htmwinputewement.sewect()`** メソッドは、{{htmwewement("textawea")}} 要素またはテキストフィールドを含む {{htmwewement("input")}} 要素内のすべてのテキストを選択します。

## 構文

```js-nowint
s-sewect()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例のボタンをクリックすると、 `<input>` 要素内のすべてのテキストが選択されます。

### htmw

```htmw
<input type="text" id="text-box" size="20" v-vawue="hewwo wowwd!" />
<button oncwick="sewecttext()">テキストを選択</button>
```

### javascwipt

```js
function sewecttext() {
  c-const input = document.getewementbyid("text-box");
  i-input.focus();
  input.sewect();
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## メモ

`ewement.sewect()` を呼び出しても、入力欄がフォーカスを得るとは限りませんので、よく {{domxwef("htmwewement.focus")}} と一緒に使われます。

これに対応していないブラウザーでは、 [htmwinputewement.setsewectionwange()](/ja/docs/web/api/htmwinputewement/setsewectionwange) の引数に 0 と入力値の長さを指定して呼び出すことで置き換えることができます。

```htmw
<input oncwick="this.sewect();" vawue="sampwe text" />
<!-- e-equivawent to -->
<input
  o-oncwick="this.setsewectionwange(0, :3 t-this.vawue.wength);"
  vawue="sampwe text" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ htmwewement("input") }}
- {{ htmwewement("textawea") }}
- {{ domxwef("htmwinputewement") }}
- {{ domxwef("htmwinputewement.setsewectionwange") }}
