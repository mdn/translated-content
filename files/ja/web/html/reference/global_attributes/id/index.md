---
title: HTML id グローバル属性
short-title: id
slug: Web/HTML/Reference/Global_attributes/id
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`id`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は、文書全体で一意でなければならない識別子 (ID) を定義します。

{{InteractiveExample("HTML デモ: id", "tabbed-shorter")}}

```html-nolint interactive-example
<p>通常の、退屈な段落です。眠くならないように気をつけてください。</p>

<p id="exciting">このページの中で最も期待に満ちた段落です。他に類を見ない、唯一無二の存在です。</p>
```

```css interactive-example
#exciting {
  background: linear-gradient(to bottom, #ffe8d4, #f69d3c);
  border: 1px solid #696969;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px black;
}

#exciting::before {
  content: "ℹ️";
  margin-right: 5px;
}
```

## 構文

`id` の値に{{glossary("whitespace", "ホワイトスペース")}}文字 (空白やタブなど) を含めてはいけません。ブラウザーはホワイトスペース文字を含む不適合な ID を、ホワイトスペース文字が ID の一部であるかのように扱います。空白区切りで並べた値を受け入れる [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性とは対照的に、要素は ID の値をひとつだけ持つことができます。

技術的には、`id` 属性の値には{{glossary("whitespace", "ホワイトスペース")}}文字を除いて、どんな文字でも入れることができます。ただし、{{domxref("Document.querySelector()")}} のような API を使用して JavaScript から、あるいは CSS スタイルシート内で CSS セレクターとして使用する場合、 ID 属性値は [CSS 識別子](/ja/docs/Web/CSS/Reference/Values/ident)として有効でなければなりません。これは、 ID 属性値が有効な CSS 識別子でない場合 （例えば、 `my?id` や `1234`）である場合、セレクターで使用する前に、 {{domxref("CSS.escape_static", "CSS.escape()")}} メソッドまたは [手動](/ja/docs/Web/CSS/Reference/Values/ident#escaping_characters) を使用してエスケープする必要があります。

このため、開発者は、エスケープを必要としない、CSS の識別子として有効な値を ID 属性に選べます。

また、すべての有効な ID 属性値が JavaScript 識別子として有効であるとは限りません。例えば、`1234` は有効な属性値ですが、JavaScript 識別子としては有効ではありません。これは、この値が有効な変数名ではないことを意味します。したがって、`window.1234` などのコードを使用して要素にアクセスすることはできません。ただし、`window["1234"]` を使用するとアクセスできます。

## 解説

ID 属性の目的は、リンク（[フラグメント識別子](/ja/docs/Web/URI/Reference/Fragment)を使用）、スクリプト、またはスタイル設定（{{glossary("CSS")}} を使用）の際に、単一の要素を識別することです。

ID 属性を持つ要素には、`window` オブジェクトのグローバルプロパティとしてアクセスできます。この場合、プロパティ名は ID 値、プロパティ値は対応する要素になります。例えば、次のマークアップが指定された場合

```html
<p id="preamble"></p>
```

次のコードを使用することで、JavaScript でこの段落要素にアクセスすることができます。

```js
const content = window.preamble.textContent;
```

> [!WARNING]
> `window["id-value"]` や `window.idValue` というパターンに頼ることは、ブラウザーの既存または将来の API との予期せぬ競合を引き起こす可能性があるため、危険であり、推奨されません。
> 例えば、将来、ブラウザーが `preamble` という組み込みのグローバルプロパティを導入した場合、コードは HTML 要素にアクセスできなくなる可能性があります。
> このような競合を避けるため、要素に ID を使用してアクセスするには、常に {{domxref("Document.getElementById()")}} または {{domxref("Document.querySelector()")}} メソッドを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("Element.id")}} はこの属性を反映します
- {{domxref("Document.getElementById")}} メソッド
- CSS の [ID セレクター](/ja/docs/Web/CSS/Reference/Selectors/ID_selectors)
