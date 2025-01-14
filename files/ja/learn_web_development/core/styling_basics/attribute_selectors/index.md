---
title: 属性セレクター
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

HTML の学習で学んだように、要素はマークアップについてさらに詳細な情報を提供する属性を持つことがあります。 CSS では、属性セレクターを使用して、ある種類の属性のある要素を対象に指定できます。このレッスンでは、これらのとても便利なセレクターの使い方を紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）、<a href="/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">基本的な CSS セレクター<a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>属性セレクターの基本概念。</li>
          <li>存在や値の属性セレクター。</li>
          <li>属性セレクターにおける部分文字列の照合。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 存在や値のセレクター

これらのセレクターにより、要素を属性が存在するか（`href` など）、または属性の値に対して様々な方法で一致させて選択できるようになります。

| セレクター           | 例                              | 説明                                                                                                                  |
| -------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `[*attr*]`           | `a[title]`                      | _attr_ という属性名を持つ要素に一致します（値を角括弧の中に入れます）。                                               |
| `[*attr*=*value*]`   | `a[href="https://example.com"]` | _attr_ という属性名で値が _value_ （引用符の中の文字列）と完全一致する要素に一致します。                              |
| `[*attr*~=*value*]`  | `p[class~="special"]`           | _attr_ 属性の値が正確に _value_ である、または（空白区切りの）値のリストの中に _value_ を含んでいる要素に一致します。 |
| `[*attr*\|=*value*]` | `div[lang\|="zh"]`              | _attr_ 属性の値が正確に _value_ である、または _value_ の直後にハイフンが入ったもので始まる値を持つ要素に一致します。 |

以下の例では、これらのセレクターが使用されていることがわかります。

- `li[class]` を使用することで、 class 属性を持つ任意のセレクターに一致させることができます。これは、最初のものを除いたすべてのリストアイテムに一致します。
- `li[class="a"]` は、a のクラスを持つセレクターには一致しますが、別のスペースで区切られたクラスを値の一部として持つ a のクラスを持つセレクターには一致しません。2 番目のリストアイテムを選択します。
- `li[class~="a"]`は、 `a` のクラスを持つセレクターに一致しますが、空白で区切られたリストの一部に `a` のクラスを含む値にも一致します。2 番目と 3 番目のリストアイテムを選択します。

```html live-sample___attribute
<h1>属性の存在や値のセレクター</h1>
<ul>
  <li>アイテム 1</li>
  <li class="a">アイテム 2</li>
  <li class="a b">アイテム 3</li>
  <li class="ab">アイテム 4</li>
</ul>
```

```css live-sample___attribute
body {
  font-family: sans-serif;
}
li[class] {
  font-size: 120%;
}

li[class="a"] {
  background-color: yellow;
}

li[class~="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute", "", "200px")}}

## 部分文字列照合セレクター

これらのセレクターは、属性の値の中の部分文字列をより高度に照合させることができます。例えば、 `box-warning` と `box-error` のクラスがあり、文字列 "box-" で始まるものを全て一致させたい場合、 `[class^="box-"]` を使用して両方を選択することができます（上記の通り、 `[class|="box"]` でもできます）。

| セレクター      | 例                  | 説明                                                                   |
| --------------- | ------------------- | ---------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | _attr_ 属性の値が _value_ で始まる要素に一致します。                   |
| `[attr$=value]` | `li[class$="-box"]` | _attr_ 属性の値が _value_ で終わる要素に一致します。                   |
| `[attr*=value]` | `li[class*="box"]`  | _attr_ 属性の文字列内のどこかに _value_ を含むを持つ要素に一致します。 |

（参考: 長い間 `^` と `$` は正規表現において、それぞれ _先頭_ と _末尾_ を意味する _アンカー_ として使用されてきたことに注意すると有用かもしれません。）

次の例は、これらのセレクターの使用法を示しています。

- `li[class^="a"]` は `a` で始まる属性値に一致するので、最初の 2 つのリストアイテムに一致します。
- `li[class$="a"]` は `a` で終わる属性値に一致するので、最初と 3 番目のリストアイテムに一致します。
- `li[class*="a"]`は、`a` が文字列のどこかに現れる属性値に一致します。

```html live-sample___attribute-substring
<h1>属性の部分文字列照合セレクター</h1>
<ul>
  <li class="a">アイテム 1</li>
  <li class="ab">アイテム 2</li>
  <li class="bca">アイテム 3</li>
  <li class="bcabc">アイテム 4</li>
</ul>
```

```css live-sample___attribute-substring
body {
  font-family: sans-serif;
}
li[class^="a"] {
  font-size: 120%;
}

li[class$="a"] {
  background-color: yellow;
}

li[class*="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute-substring", "", "200px")}}

## まとめ

これで属性セレクターについては終了です。次の記事では続いて、擬似クラスと擬似要素セレクターについて説明します。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
