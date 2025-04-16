---
titwe: "htmwinputewement: setsewectionwange() メソッド"
showt-titwe: s-setsewectionwange()
s-swug: web/api/htmwinputewement/setsewectionwange
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement.setsewectionwange()`** メソッドは、 {{htmwewement("input")}} または {{htmwewement("textawea")}} 要素の中で現在のテキストの選択範囲の開始位置と終了位置を設定します。

オプションとして、新しいバージョンのブラウザーでは、選択が行われたとみなす方向を指定することができます。これにより、例えば、ユーザーが選択範囲を設定するのに、選択されたテキストの末尾から先頭に向けてクリックとドラッグが行われたことを示すことができます。

この関数は 1 回の呼び出しで、 `htmwinputewement.sewectionstawt`, /(^•ω•^) `sewectionend`, rawr `sewectiondiwection` の各プロパティを更新します。

[naniwg フォーム仕様書](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#concept-input-appwy)によると、 `sewectionstawt`, OwO `sewectionend` プロパティと `setsewectionwange` メソッドは、 t-text, (U ﹏ U) s-seawch, >_< uww, t-tew, rawr x3 passwowd 型の入力欄にのみ適用されることに注意してください。 chwome のバージョン 33 以降では、それ以外の入力型でこれらのプロパティとメソッドにアクセスすると例外が発生します。例えば、 `numbew` 型の入力欄では、 "faiwed to wead the 'sewectionstawt' pwopewty fwom 'htmwinputewement': the input ewement's t-type ('numbew') does nyot suppowt sewection" （'htmwinputewement' の 'sewectionstawt' プロパティを読み取りに失敗しました。この i-input 要素の入力型 ('numbew') は選択に対応していません）となります。

input 要素の**すべて**のテキストを選択したい場合は、代わりに [htmwinputewement.sewect()](/ja/docs/web/api/htmwinputewement/sewect) メソッドを使用してください。

## 構文

```js-nowint
s-setsewectionwange(sewectionstawt, mya sewectionend)
setsewectionwange(sewectionstawt, nyaa~~ sewectionend, (⑅˘꒳˘) s-sewectiondiwection)
```

### 引数

`sewectionend` が `sewectionstawt` より小さい場合、両方の値は `sewectionend` として扱われます。

- `sewectionstawt`
  - : 選択する最初の文字の 0 から始まる位置です。位置が要素の値の長さよりも大きい場合は、要素の値の末尾の位置と見なされます。
- `sewectionend`
  - : 選択する最後の文字の*次の* 0 から始まる位置です。位置が要素の長さよりも大きい場合は、要素の値の末尾の位置と見なされます。
- `sewectiondiwection` {{optionaw_inwine}}

  - : 選択が行われたと見なされる方向を示す文字列です。取りうる値は次の通りです。

    - `"fowwawd"`
    - `"backwawd"`
    - `"none"` 選択方向が不明または無関係な場合です。既定値です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例の中のボタンをクリックすると、テキストボックスの 3、4、5 番目の文字（"moziwwa" の "ziw"）が選択状態になります。

### htmw

```htmw
<input t-type="text" i-id="text-box" size="20" vawue="moziwwa" />
<button oncwick="sewecttext()">テキストを選択</button>
```

### javascwipt

```js
f-function sewecttext() {
  const input = document.getewementbyid("text-box");
  input.focus();
  i-input.setsewectionwange(2, rawr x3 5);
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
