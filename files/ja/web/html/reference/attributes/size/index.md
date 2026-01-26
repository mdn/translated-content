---
title: "HTML 属性: size"
short-title: size
slug: Web/HTML/Reference/Attributes/size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`size`** 属性は、 {{htmlelement('input')}} 要素の幅と {{htmlelement('select')}} 要素の高さを定義します。 `input` については、 `type` 属性が {{HTMLElement("input/text", "text")}} または {{HTMLElement("input/password", "password")}} の場合は文字数です。これは 0 以上の整数でなければなりません。

`size` が指定されていないか、無効な値が指定された場合、入力欄にサイズが宣言されず、そのフォームコントロールはユーザーエージェントに基づいた既定の幅になります。 CSS が幅に影響を与えるプロパティで要素を対象としている場合は、 CSS が優先されます。

`size` 属性は制約検証には影響しません。

{{InteractiveExample("HTML デモ: size", "tabbed-standard")}}

```html interactive-example
<label for="firstName">名前:</label>
<input id="firstName" name="firstName" type="text" size="10" />

<label for="lastName">苗字:</label>
<input id="lastName" name="lastName" type="text" size="20" />

<label for="fruit">好きな果物:</label>
<select id="fruit" name="fruit" size="2">
  <option>オレンジ</option>
  <option>バナナ</option>
  <option>りんご</option>
</select>
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}
```

## 例

一部の入力型で `size` を指定すると、入力欄の幅を制御することができます。 select に size を追加すると、閉じた状態のときにいくつの選択肢が見えるかを定義します。

```html
<label for="fruit">果物を入力してください</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">野菜を入力してください</label>
<input type="text" id="vegetable" />

<select name="fruits" size="5">
  <option>バナナ</option>
  <option>さくらんぼ</option>
  <option>いちご</option>
  <option>ドリアン</option>
  <option>ブルーベリー</option>
</select>

<select name="vegetables" size="5">
  <option>にんじん</option>
  <option>きゅうり</option>
  <option>カリフラワー</option>
  <option>セロリ</option>
  <option>ケール</option>
</select>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`maxlength`](/ja/docs/Web/HTML/Reference/Attributes/maxlength)
- [`minlength`](/ja/docs/Web/HTML/Reference/Attributes/minlength)
- [`pattern`](/ja/docs/Web/HTML/Reference/Attributes/pattern)
