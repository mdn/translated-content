---
title: title
slug: Web/HTML/Global_attributes/title
---

{{HTMLSidebar("Global_attributes")}}

**`title`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素に関するアドバイザリー情報を表すテキストを含みます。

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

典型的な用途は以下の通りです。

- {{HTMLElement("iframe")}} 要素の支援技術のためのラベル付け
- プログラム的に関連付けれた{{HTMLElement("input")}} 要素のためのラベルを、実際の {{HTMLElement("label")}} の代替として提供
- [データ表](/ja/docs/Web/HTML/Element/table)内のコントロールのラベル付け

`title` 属性は {{HTMLElement("link")}}, {{HTMLElement("abbr")}}, {{HTMLElement("input")}}, {{HTMLElement("menuitem")}} の各要素において、追加の意味を持ちます。

## 複数行のタイトル

`title` 属性は複数の行を含むことができます。それぞれの `U+000A LINE FEED` (`LF`) 文字が改行を表します。いくつか注意しなければならないのは、これが次のように二行にわたって描画されることです。

### HTML

```html
<p>Newlines in <code>title</code> should be taken into account,
like <abbr title="This is a
multiline title">example</abbr>.</p>
```

### 結果

{{EmbedLiveSample('Multiline_titles')}}

## title 属性の継承

要素に `title` 属性がない場合、属性値は親ノードから継承され、さらにそれはその親ノードから継承されるというようになります。

この属性が空文字列に設定されると、その祖先の `title` が関係なく、この要素のツールチップとして使用するべきではないことを意味します。

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show “CoolTip”.</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### 結果

{{EmbedLiveSample('Title_attribute_inheritance')}}

## アクセシビリティの考慮

`title` 属性を使用することは、次のような人々にとって大きな問題になります。

- タッチのみの機器を使用している人々
- キーボードで操作している人々
- 読み上げソフトや拡大鏡などの支援技術で操作している人々
- 細かい運動制御障碍を経験している人々
- 認知障碍のある人

これは、ブラウザーが表示するページを追加支援技術が解釈することによる複合性について、ブラウザーの互換性に一貫性がないためです。ツールチップ効果が必要であれば、上記の閲覧方法でもアクセスできる[もっとアクセシブルな技術を使用する](https://inclusive-components.design/tooltips-toggletips/)方が効果的です。

- [3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents](https://www.w3.org/TR/html/dom.html#the-title-attribute)
- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [The Trials and Tribulations of the Title Attribute - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## 仕様書

| 仕様書                                                                                       | 状態                             | 備考                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-title-attribute", "title")}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。                                                                                                                                                                                                                                  |
| {{SpecName('HTML5.1', "dom.html#the-title-attribute", "title")}}         | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}} のスナップショットであり、{{SpecName('HTML5 W3C')}} から変更なし。                                                                                                                                                                                                |
| {{SpecName('HTML5 W3C', "dom.html#the-title-attribute", "title")}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName('HTML WHATWG')}} のスナップショット。 {{SpecName("HTML4.01")}} から、真にグローバルな属性になりました。                                                                                                                                                                           |
| {{SpecName('HTML4.01', 'struct/global.html#adef-title', 'title')}}     | {{Spec2('HTML4.01')}}     | {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("title")}} を除くすべての要素で対応。 |

## ブラウザーの互換性

{{Compat("html.global_attributes.title")}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- {{domxref("HTMLElement.title")}} は、この属性を反映します。
