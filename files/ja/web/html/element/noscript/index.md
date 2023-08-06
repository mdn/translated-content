---
title: "<noscript>: スクリプト無し要素"
slug: Web/HTML/Element/noscript
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<noscript>`** は [HTML](/ja/docs/Web/HTML) の要素で、ブラウザーがこのページ上のスクリプトの種類に対応していない場合や、スクリプトの実行が無効にされている場合に表示する HTML の部分を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        スクリプトの実行が無効かつ {{HTMLElement("head")}}
        要素の子孫である場合: 任意の順序で、0 個以上の
        {{HTMLElement("link")}}
        要素、0 個以上の{{HTMLElement("style")}} 要素、0 個以上の
        {{HTMLElement("meta")}} 要素。<br />スクリプトの実行が無効かつ
        {{HTMLElement("head")}} 要素の子孫ではない場合: 任意の<a
          href="/ja/docs/Web/HTML/Content_categories#透過的コンテンツ"
          >透過的コンテンツ</a
        >、ただし
        <code>&#x3C;noscript></code>
        要素を入れ子にしてはならない。<br />上記以外の場合:
        フローコンテンツ、記述コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        祖先要素に <code>&#x3C;noscript></code> が存在しない場合に、<a
          href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
        を受け入れるすべての要素。または、祖先要素に
        <code>&#x3C;noscript></code>
        が存在しない場合に、{{HTMLElement("head")}} 要素 (HTML
        文書に限る)。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
