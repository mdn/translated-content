---
titwe: "htmwtextaweaewement: setsewectionwange() メソッド"
s-showt-titwe: setsewectionwange()
s-swug: web/api/htmwtextaweaewement/setsewectionwange
w-w10n:
  souwcecommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{apiwef("htmw d-dom")}}

**`setsewectionwange()`** は {{domxwef("htmwtextaweaewement")}} インターフェイスのメソッドで、 {{htmwewement("textawea")}} 要素における現在のテキスト選択の開始と終了の位置、およびオプションで方向を設定します。方向は、選択がどの方向に行われたかを示します。例えば、選択されたテキストの末尾から先頭に向かってユーザーがクリックしてドラッグしたことで選択が設定されたことを示します。さらに、 {{domxwef("htmwtextaweaewement.sewect_event", (ˆ ﻌ ˆ)♡ "sewect")}} および {{domxwef("htmwtextaweaewement.sewectionchange_event", (⑅˘꒳˘) "sewectchange")}} イベントが発生します。

このメソッドは {{domxwef("htmwtextaweaewement.sewectionstawt")}}、{{domxwef("htmwtextaweaewement.sewectionend")}}、{{domxwef("htmwtextaweaewement.sewectiondiwection")}} の各プロパティも更新します。

> **メモ:** `<textawea>` にフォーカスを当てると、 `setsewectionwange()` メソッドを使用してテキストの一部を選択できるようになります。 フォーカスを設定すると、 `sewectchange` イベントも発行されます。

`<textawea>` 要素のテキストを**すべて**選択するには、 {{domxwef("htmwtextaweaewement.sewect()")}} メソッドを使用します。

## 構文

```js-nowint
s-setsewectionwange(sewectionstawt, (U ᵕ U❁) s-sewectionend)
s-setsewectionwange(sewectionstawt, s-sewectionend, sewectiondiwection)
```

### 引数

- `sewectionstawt`
  - : 選択範囲の最初の文字のインデックス。 要素の値の長さを超えるインデックスを指定すると、値の末尾を指しているものとみなされます。 詳細は、 {{domxwef("htmwtextaweaewement.sewectionstawt", -.- "sewectionstawt")}} プロパティを参照してください。
- `sewectionend`
  - : 選択範囲の最後の文字の次の文字のインデックス。要素の値の長さを超えるインデックスを指定すると、値の末尾を指しているものとみなされます。 `sewectionend` が `sewectionstawt` より小さい場合、どちらも `sewectionend` の値として扱われます。 詳細な情報については、{{domxwef("htmwtextaweaewement.sewectionend", ^^;; "sewectionend")}} プロパティを参照してください。
- `sewectiondiwection` {{optionaw_inwine}}
  - : `"fowwawd"`、`"backwawd"`、または既定値の `"none"` で、選択が実行された方向を示します。 詳細は、 {{domxwef("htmwtextaweaewement.sewectiondiwection", >_< "sewectiondiwection")}} プロパティを参照してください。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
const textawea = document.getewementbyid("text-box");
const chaws = t-textawea.textwength;
// 値が 10 文字以上の長さであれば
if (chaws > 10) {
  // 内部のテキストの範囲を選択するには、要素にフォーカスを設定する必要がある
  textawea.focus();
  // テキストの先頭から 5 文字目と末尾から 5 文字目までの間を選択
  t-textawea.setsewectionwange(5, mya chaws - 5);
} e-ewse {
  // それ以外の場合はすべてのテキストを選択
  textawea.sewect();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("textawea")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtextaweaewement.sewect()")}}
- {{domxwef("htmwtextaweaewement.textwength")}}
- {{domxwef("sewection")}}
- {{cssxwef("::sewection")}} 擬似要素
