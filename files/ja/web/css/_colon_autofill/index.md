---
title: ":autofill"
slug: Web/CSS/:autofill
---

{{CSSRef}}

**`:autofill`** は CSS の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 {{HTMLElement("input")}} 要素の値がブラウザーによって自動補完された時に一致します。このクラスはユーザーがフィールドを編集すると一致しなくなります。

> **メモ:** 多くのブラウザーのユーザーエージェントスタイルシートでは、 `:-webkit-autofill` スタイル定義に `!important` を使用しており、 JavaScript によるハックで解決しない限り、ウェブページから上書きすることができません。例えば、 Chrome では内部スタイルシートで次のようになっています。
>
> ```css
> background-color: rgb(232, 240, 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> これは、 {{cssxref('background-color')}}, {{cssxref('background-image')}}, {{cssxref('color')}} に独自のルールを設定できないことを意味します。

## 構文

```
:autofill
```

## 例

次の例は、 `:autofill` 擬似クラスを使用して、ブラウザーによって自動補完されたテキストフィールドの境界線を変更することを示しています。ブラウザーの互換性を保つために、 `:-webkit-autofill` と `:autofill` の両方を使用してください。

```css
input {
  border: 3px solid grey;
  border-radius: 3px;
}

input:-webkit-autofill {
  border: 3px solid blue;
}
input:autofill {
  border: 3px solid blue;
}
```

```html
<form method="post" action="">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Chromium issue 46543: Auto-filled input text box yellow background highlight cannot be turned off!](https://code.google.com/p/chromium/issues/detail?id=46543)
- [WebKit bug 66032: Allow site authors to override autofilled fields' colors.](https://bugs.webkit.org/show_bug.cgi?id=66032)
- [Mozilla bug 740979: implement `:-moz-autofill` pseudo-class on input elements with an autofilled value](https://bugzilla.mozilla.org/show_bug.cgi?id=740979)
- [new css4-ui features - more selectors](https://wiki.csswg.org/spec/css4-ui#more-selectors)
