---
title: CSS `<line-width>` データ型
short-title: <line-width>
slug: Web/CSS/Reference/Values/line-width
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

**`<line-width>`** {{glossary("enumerated", "列挙")}}値型は、線の幅、あるいは線がない状態を定義する長さまたはキーワード値を表します。`<line-width>` のキーワード値は、以下の個別指定プロパティおよび一括指定プロパティで使用されています。

- {{cssxref("border")}}, {{cssxref("border-width")}}
- {{cssxref("border-block")}}, {{cssxref("border-block-width")}}
- {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}
- {{cssxref("border-bottom")}}, {{cssxref("border-bottom-width")}}
- {{cssxref("border-inline")}}, {{cssxref("border-inline-width")}}
- {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}
- {{cssxref("border-left")}}, {{cssxref("border-left-width")}}
- {{cssxref("border-right")}}, {{cssxref("border-right-width")}}
- {{cssxref("border-top")}}, {{cssxref("border-top-width")}}
- {{cssxref("column-rule")}}, {{cssxref("column-rule-width")}}
- {{cssxref("row-rule")}}, {{cssxref("row-rule-width")}}
- {{cssxref("rule")}}, {{cssxref("rule-width")}}
- {{cssxref("outline")}}, {{cssxref("outline-width")}}

## 構文

### 値

`<line-width>` 型は、`<length>` またはキーワードのいずれかを使用して指定します。

- `<length>`
  - : 負ではない {{cssxref("&lt;length&gt;")}} です。
- `hairline`
  - : `1px` 以下で、「かろうじて見える」線を表します。
- `thin`
  - : `1px` と同じです。
- `medium`
  - : `3px` と同じです。
- `thick`
  - : `5px` と同じです。

## 形式文法

{{CSSSyntaxRaw(`<line-width> = <length [0,∞]> | hairline | thin | medium | thick`)}}

## 例

### 線の太さを定義

この例では、すべての `<line-width>` キーワード値と、`<length>` 値を併せて示しています。

#### HTML

{{htmlelement("section")}} 要素の中に 5 つのボックスを設置しました。

```html
<section>
  <div data-width="hairline">hairline</div>
  <div data-width="thin">thin</div>
  <div data-width="medium">medium</div>
  <div data-width="thick">thick</div>
  <div data-width="10px">10px</div>
</section>
```

#### CSS

すべての要素のスタイルを統一した後、要素の `data-width` 属性に基づいて {{cssxref("border-width")}} を設定します。

```css
section {
  display: flex;
  gap: 10px;
}
div {
  flex: 0 0 15%;
  border-style: solid;
  border-color: purple;
  text-align: center;
}
[data-width="hairline"] {
  border-width: hairline;
}

[data-width="thin"] {
  border-width: thin;
}

[data-width="medium"] {
  border-width: medium;
}

[data-width="thick"] {
  border-width: thick;
}

[data-width="10px"] {
  border-width: 10px;
}
```

```css hidden
@supports not (border-width: hairline) {
  body::before {
    content: "このブラウザーは 'hairline' 値に対応していません。";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### 結果

{{ EmbedLiveSample('Defining a line width') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("line-style")}} データ型
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュール
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
