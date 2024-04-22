---
title: "<cite>: 引用元要素"
slug: Web/HTML/Element/cite
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<cite>`** は [HTML](/ja/docs/Web/HTML) の要素で、引用された創作物のタイトルをマークアップするために使用します。この参照は、引用メタデータに関する利用場面に合わせた慣習に応じて省略形が用いられることがあります。

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみを持ちます。

## 使用上の注意

`<cite>` 要素の文脈では、例えば以下のような創作物のうちの一つを引用することができます。

- 書籍
- 研究論文
- エッセイ
- 詩
- 楽譜
- 歌
- 演劇や映画の台本
- 映画
- テレビ番組
- ゲーム
- 彫刻
- 絵画
- 舞台作品
- 演劇
- オペラ
- ミュージカル
- 展示
- 事件報告書
- コンピュータープログラム
- ウェブサイト
- ウェブページ
- ブログ投稿やコメント
- フォーラム投稿やコメント
- ツイート
- Facebook 投稿
- 記述された、または口頭の声明
- その他

{{HTMLElement("blockquote")}} 要素や {{HTMLElement("q")}} 要素によって引用された素材の情報源の出典を記述するには、これらの要素の [`cite`](/ja/docs/Web/HTML/Element/blockquote#cite) 属性を使用してください。

通常、ブラウザーは既定で `<cite>` にイタリック体を適用します。これを防ぐには、CSS の {{cssxref("font-style")}} プロパティを `<cite>` 要素に適用してください。

## 例

```html
<p>より詳しい情報については <cite>[ISO-0000]</cite> に記載されています。</p>
```

### 結果

{{EmbedLiveSample("Example", 640, 80)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
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
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>
        {{domxref("HTMLElement")}}。Gecko 1.9.2 (Firefox 4)
        以前では、この要素には {{domxref("HTMLSpanElement")}}
        インターフェイスが実装されています。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("blockquote")}} 要素は長い引用に使用します。
- {{HTMLElement("q")}} 要素と [`cite`](/ja/docs/Web/HTML/Element/q#cite) 属性はインラインの引用に使用します。
