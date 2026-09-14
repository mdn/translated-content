---
title: HTML `<noscript>` スクリプト無し要素
short-title: <noscript>
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<noscript>`** は [HTML](/ja/docs/Web/HTML) の要素で、ブラウザーがこのページ上のスクリプトの種類に対応していない場合や、スクリプトの実行が無効にされている場合に表示する HTML の部分を定義します。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 例

```html
<noscript>
  <!-- 外部ファイルにリンクするアンカー -->
  <a href="https://www.mozilla.org/">外部リンク</a>
</noscript>
<p>ロック！！</p>
```

### スクリプトが有効になっている場合の表示例

ロック！！

### スクリプトが無効になっている場合の表示例

[外部リンク](https://www.mozilla.org/)

ロック！！

## 使用上のメモ

`<noscript>` 要素は、スクリプトが有効かどうかに応じて、その子要素の表示方法を変更します。

- スクリプトが無効になっている場合、`<noscript>` 要素は、その子要素を [HTML コンテンツ](/ja/docs/Web/API/HTMLElement)として表します。
- スクリプトが有効になっている場合、`<noscript>` 要素は、その子要素を[テキスト](/ja/docs/Web/API/Text)として表します。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        スクリプトの実行が無効かつ {{HTMLElement("head")}} 要素の子孫である場合:
        任意の順序で、0 個以上の {{HTMLElement("link")}} 要素、0 個以上の{{HTMLElement("style")}} 要素、0 個以上の {{HTMLElement("meta")}} 要素。<br />
        スクリプトの実行が無効かつ {{HTMLElement("head")}} 要素の子孫ではない場合:
        任意の<a href="/ja/docs/Web/HTML/Guides/Content_categories#透過的コンテンツ">透過的コンテンツ</a>、ただし <code>&#x3C;noscript></code> 要素を入れ子にしてはならない。<br />
        上記以外の場合: フローコンテンツ、記述コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        祖先に <code>&#x3C;noscript></code> 要素が存在しない場合、または、{{HTMLElement("head")}} 要素（ただし HTML 文書に限る）の中の場合、こちらも祖先に <code>&#x3C;noscript></code> 要素が存在しない場合は、<a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
