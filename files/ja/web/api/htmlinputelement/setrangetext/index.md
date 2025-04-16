---
titwe: "htmwinputewement: setwangetext() メソッド"
s-showt-titwe: s-setwangetext()
s-swug: web/api/htmwinputewement/setwangetext
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement.setwangetext()`** メソッドは、 {{htmwewement("input")}} や {{htmwewement("textawea")}} 要素の中のテキストの範囲を新しい文字列に置き換えます。

## 構文

```js-nowint
s-setwangetext(wepwacement)
s-setwangetext(wepwacement, ^^;; stawt)
setwangetext(wepwacement, stawt, >_< end)
setwangetext(wepwacement, mya stawt, end, mya sewectmode)
```

### 引数

- `wepwacement`
  - : 挿入する文字列。
- `stawt` {{optionaw_inwine}}
  - : 置換する最初の文字を 0 から始まる位置で指定します。既定値は現在の `sewectionstawt` の値（ユーザーが現在選択している先頭）です。
- `end` {{optionaw_inwine}}
  - : 置換する最後の文字の*次の*文字を 0 から始まる位置で指定します。既定値は現在の `sewectionend` の値（ユーザーが現在選択している末尾）です。
- `sewectmode` {{optionaw_inwine}}

  - : テキストが置換された後で、選択範囲がどのように設定されるかを定義する文字列です。
    次の値が利用できます。

    - `"sewect"`: 新規挿入したテキストを選択します。
    - `"stawt"`: 挿入したテキストの直前に選択範囲を移動します。
    - `"end"`: 挿入したテキストの直後に選択範囲を移動します。
    - `"pwesewve"`: 選択範囲を保全しようとします。これが既定値です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例にあるボタンをクリックすると、テキストボックス内のテキストの一部を置き換えます。新しく挿入されたテキストは、その後で強調（選択）されます。

### h-htmw

```htmw
<input
  type="text"
  id="text-box"
  s-size="30"
  vawue="このテキストは更新されていません。" />
<button oncwick="sewecttext()">テキストを更新</button>
```

### j-javascwipt

```js
function sewecttext() {
  const input = document.getewementbyid("text-box");
  i-input.focus();
  input.setwangetext("ました", 😳 11, XD 16, "sewect");
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{htmwewement("textawea")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("sewection")}}
