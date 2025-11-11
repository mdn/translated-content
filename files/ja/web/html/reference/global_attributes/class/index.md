---
title: HTML class グローバル属性
short-title: class
slug: Web/HTML/Reference/Global_attributes/class
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`class`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes) は、要素のクラスを [ASCII ホワイトスペース](/ja/docs/Glossary/Whitespace#html_での使い方)で区切って並べたリストです。

{{InteractiveExample("HTML デモ: class", "tabbed-standard")}}

```html-nolint interactive-example
<p>ナレーター: これは劇の始まりです。</p>

<p class="note editorial">この点は少しありきたりに聞こえるかもしれません。削除または書き換えますか？</p>

<p>ナレーター: 皆さん、この始まりはとてもエキサイティングなものになることをあらかじめお断りしておきます。</p>

<p class="note">[照明が点灯し、風が吹き、カスピアンが舞台右側から登場。]</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255 0 0 / 0.25);
  padding: 10px;
}

.editorial::before {
  content: "Editor: ";
}
```

## 構文

`class` 属性は、 [ASCII ホワイトスペース](/ja/docs/Glossary/Whitespace#html_での使い方)で区切られたクラス値のリストです。

それぞれのクラス値は、 Unicode 文字（もちろん、 ASCII ホワイトスペースを除く）を任意に含めることができます。ただし、 {{domxref("Document.querySelector()")}} のような API を使用して JavaScript から、あるいは CSS スタイルシート内で CSS セレクターとして使用する場合、クラス属性の値は [CSS 識別子](/ja/docs/Web/CSS/Reference/Values/ident)として有効でなければなりません。これは、クラス属性値が有効な CSS 識別子ではない場合 (例えば、`my?class` や `1234`)、セレクターで使用する前に、 {{domxref("CSS.escape_static", "CSS.escape()")}} メソッドまたは[手動](/ja/docs/Web/CSS/Reference/Values/ident#文字のエスケープ)でエスケープしなければならないことを意味しています。

このため、開発者は、エスケープを必要としない、有効な CSS 識別子である値をクラス属性として選ぶことをお勧めします。

## 解説

クラスを使用すると、CSS および JavaScript で、[クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)または {{domxref("document.getElementsByClassName()")}} などの関数を使用して、特定の要素を選択してアクセスすることができます。

仕様書ではクラスの名前に関する要求事項はありませんが、ウェブ開発者は、要素の表示ではなく、要素の意味的な目的を記述する名前を使用することが推奨されています。例えば、 _italics_ ではなく _attribute_ を使用して属性を記述します。ただし、このクラスの要素は _italics_ で表示される場合もあります。意味的な名前は、ページの表示が変更されても論理的な意味を保ちます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- {{domxref('element.className')}}
- {{domxref('element.classList')}}
- [CSS 入門](/ja/docs/Learn_web_development/Core/Styling_basics)
