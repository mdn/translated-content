---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト装飾
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-emphasis-position
translation_of: Web/CSS/text-emphasis-position
---
{{CSSRef}}

**`text-emphasis-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、圏点が描かれる位置を設定します。ルビのテキストと同様、圏点のために十分な空間がない場合は、行の高さが広げられます。

```css
/* 初期値 */
text-emphasis-position: over right;

/* キーワード値 */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* グローバル値 */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-postition: revert;
text-emphasis-position: unset;
```

## 構文

### 値

- `over`
  - : 横書きモードでテキストの上に圏点を描きます。
- `under`
  - : 横書きモードでテキストの下に圏点を描きます。
- `right`
  - : 縦書きモードでテキストの右に圏点を描きます。
- `left`
  - : 縦書きモードでテキストの左に圏点を描きます。

## Description

圏点の望ましい位置は言語に依存します。例えば日本語では、望ましい位置は `over right` です。一方、中国語では、望ましい位置は `under right` となります。下記の情報の表は、日本語、モンゴル語、中国語における望ましい圏点の位置をまとめたものです。

<table>
  <caption>
    望ましい圏点とルビの位置
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">言語</th>
      <th colspan="2" scope="col">望ましい位置</th>
      <th colspan="2" rowspan="2" scope="col">図</th>
    </tr>
    <tr>
      <th>横書き</th>
      <th>縦書き</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>日本語</td>
      <td rowspan="3">over</td>
      <td rowspan="3">right</td>
      <td rowspan="3">
        <img
          alt="日本語の横書きテキストでは、圏点は強調される各文字の上に表示されます。"
          src="text-emphasis-ja.png"
          title="日本語のテキストの上に適用された圏点 (分かりやすいよう青で表示)"
        />
      </td>
      <td rowspan="4">
        <img
          alt="日本語の縦書きテキストでは、圏点が強調される各文字の右に表示されます。"
          src="text-emphasis-v.gif"
          title="日本語のテキストの右に適用された圏点"
        />
      </td>
    </tr>
    <tr>
      <td>韓国語</td>
    </tr>
    <tr>
      <td>モンゴル語</td>
    </tr>
    <tr>
      <td>中国語</td>
      <td>under</td>
      <td>right</td>
      <td>
        <img
          alt="中国語簡体字の横書きテキストでは、圏点は強調される各文字の下に表示されます。"
          src="text-emphasis-zh.gif"
          title="中国語のテキストの下に適用された圏点 (分かりやすいよう青で表示)"
        />
      </td>
    </tr>
  </tbody>
</table>

> **Note:** {{cssxref("text-emphasis")}} 一括指定プロパティを使用して、 `text-emphasis-position` を設定することはできず、また初期化されることもありません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## Examples

### ルビを圏点より優先させる場合

編集者によっては、ルビと競合する場合に圏点を隠すことを好みます。 HTML では、これは次のスタイル規則で実現できます。

```css
ruby {
  -webkit-text-emphasis: none;
  text-emphasis: none;
}
```

### 圏点よりルビを優先させる場合

編集者によっては、圏点と競合する場合にルビを隠すことを好みます。 HTML では、これは次のパターンで実現できます。

```css
em {
  -webkit-text-emphasis: dot;
  text-emphasis: dot; /* text-emphasis を <em> 要素に設定 */
}

em rt {
  display: none; /* <em> 要素内のルビを隠す */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 個別指定プロパティ {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} および対応する一括指定プロパティ {{cssxref("text-emphasis")}}
