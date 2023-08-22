---
title: ":read-write"
slug: Web/CSS/:read-write
---

{{CSSRef}}

**`:read-write`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、ユーザーが編集できる要素 (`input` や `textarea` など) を表します。

```css
input:read-write,
textarea:read-write {
  background-color: #bbf;
}

p:read-write {
  background-color: #bbf;
}
```

## 構文

```
:read-write
```

## 例

### 読み取り専用/読み書きコントロールによるフォーム情報の確認

`readonly` のフォームコントロールの使用方法の一つは、ユーザーが以前のフォームに入力した情報 (例えば、配送方法の詳細など) をチェックして確認しながら、フォームの残りの部分と一緒に情報を送信することができるようにすることです。以下の例では、これを実現しています。

`:read-only` 擬似クラスは、入力欄をクリック可能なフィールドのように見せるスタイル付けをすべて削除するために使用されており、読み取り専用の段落のように見えます。一方、 `:read-write` 擬似クラスは、編集可能な `<textarea>` により良いスタイル付けを行うために使用されています。

```css
input:-moz-read-only,
textarea:-moz-read-only,
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:-moz-read-write,
textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

完全なソースコードは [readonly-confirmation.html](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/readonly-confirmation.html) にあります。以下のように表示されます。

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

### フォーム以外の読み書き用コントロールのスタイル付け

このセレクターは {{htmlElement("input")}}/{{htmlElement("textarea")}} 要素に [`readonly`](/ja/docs/Web/HTML/Element/input#readonly) が設定されているものだけを選択するのではありません。ユーザーが編集できる*あらゆる*要素、例えば {{htmlelement("p")}} 要素に [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) が設定されたものを選択します。

```html
<p contenteditable>この段落は編集可能です。読み書き可です。</p>

<p>この段落は編集できません。読み取り専用です。</p>
```

```css
p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

{{EmbedLiveSample('Styling_read-write_non-form_controls', '100%', 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":read-only")}}
- HTML の [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) 属性
