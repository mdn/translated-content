---
title: "HTML 属性: dirname"
slug: Web/HTML/Attributes/dirname
l10n:
  sourceCommit: 62b2885cf645395c39081f8ffa8f6023d7d1bc0b
---

{{HTMLSidebar}}

**`dirname`** 属性は {{htmlelement("textarea")}} および {{htmlelement("input")}} 要素で用いることができ、フォームの送信時に要素のテキストの内容の向きを表します。
ブラウザーは、この属性の値をユーザーが入力したテキストが左から右に読むのか、右から左に読むのかを識別するのに用います。
使用された場合、要素のテキストの方向の値がフォームの送信データに含まれ、そのフィールド名は `dirname` 属性の値になります。

## 使用法のメモ

`dirname` 属性はすべての {{htmlelement("textarea")}} 要素、および種類が {{htmlelement("input/text", "text")}}、{{htmlelement("input/search", "search")}}、{{htmlelement("input/tel", "tel")}}、{{htmlelement("input/url", "url")}}、{{htmlelement("input/email", "email")}} のいずれかであるすべての {{htmlelement("input")}} 要素で用いることができます。

送信されるデータの形式は `{dirname_value}={direction}` です。`{dirname_value}` は `dirname` 属性の値に、`{direction}` はテキストの方向になります。
たとえば、ユーザーが属性 `name="comment"` および `dirname="comment-direction"` を持つ要素に「Hello」を入力した場合、`GET` リクエストでフォームを送信する際の URL エンコードされたデータは `comment=Hello&comment-direction=ltr` となるでしょう。

方向は、以下のいずれかです。

- `rtl`
  - : ユーザーが入力したテキストを書く方向は右から左です。
- `ltr`
  - : ユーザーが入力したテキストを書く方向は左から右です。

テキストの方向が指定されていない場合は、ユーザーエージェントはフォームが入っている親要素のテキストの方向を用います。それも指定されていない場合は、ユーザーエージェントのデフォルトのテキストの方向を用います。

## 例

### textarea 要素の方向

この例では、textarea 要素に `dir="auto"` 属性を指定することで、ユーザーが入力したテキストに基づいてテキストの方向を自動で識別できるようにしています。

```html
<form method="get" action="https://www.example.com/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">挨拶を送信</button>
</form>
```

ユーザーがフォームを送信するとき、ユーザーエージェントは名前が `comment`、値が「سيب」のフィールドと、名前が `comment-direction`、値が「rtl」のフィールドの 2 個のフィールドを含めます。
送信用に URL エンコードされたボディは以下のようになります。

```url
https://www.example.com/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### input 要素の方向

この例では、input 要素に `dir="auto"` 属性を指定することで、ユーザーが入力したテキストに基づいてテキストの方向を自動で識別できるようにしています。

```html
<form method="get" action="https://www.example.com/submit">
  <input
    type="text"
    name="comment-input"
    dir="auto"
    dirname="comment-direction"
    value="Hello" />
  <button type="submit">挨拶を送信</button>
</form>
```

ユーザーがフォームを送信するとき、ユーザーエージェントは名前が `comment-input`、値が「Hello」のフィールドと、名前が `comment-direction`、値が「ltr」のフィールドの 2 個のフィールドを含めます。

```url
https://www.example.com/submit?comment-input=Hello&comment-direction=ltr
```

### 方向の継承

以下の `<input>` 要素と `<textarea>` 要素には `dir` 属性が無いので、親要素から明示的に指定されたテキストの方向 `rtl` を継承します。

```html
<div dir="rtl">
  <form method="get" action="https://www.example.com/submit">
    <input
      type="text"
      name="user"
      dirname="user-direction"
      value="LTR Username" />
    <textarea name="comment" dirname="comment-direction">LTR Comment</textarea>
    <button type="submit">コメントを投稿</button>
  </form>
</div>
```

送信用に URL エンコードされたボディは以下のようになります。

```url
https://www.example.com/submit?user=LTR+Username&user-direction=rtl&comment=LTR+Comment&comment-direction=rtl
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`dir` 属性](/ja/docs/Web/HTML/Global_attributes/dir)
- {{htmlelement("input")}}
- {{htmlelement("textarea")}}
