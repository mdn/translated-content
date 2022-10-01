---
title: '<cite>: 引用元要素'
slug: Web/HTML/Element/cite
---

{{HTMLRef}}

**HTML の引用元要素** (**`<cite>`**) は、引用された創作物の参照を表し、作品のタイトルを含む必要があります。参照は、引用メタデータに関する利用場面に合わせた慣習に応じて省略形が用いられることがあります。

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
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

注目すべきこととして、 W3C の仕様書では、 `<cite>` 要素に含められる創作物の参照には、作者名を含めてよいとしています。しかし、 WHATWG における `<cite>` の仕様では逆に、どのような場合でも人名を含めてはならないとしています。

{{HTMLElement("blockquote")}} 要素や {{HTMLElement("q")}} 要素によって引用された素材の情報源の出典を記述するには、これらの要素の {{htmlattrxref("cite", "blockquote")}} 属性を使用してください。

通常、ブラウザーは既定で `<cite>` に斜体を適用します。これを防ぐには、要素で既定のイタリックスタイルが使用されるのを避けるには、 `<cite>` 要素に CSS の {{cssxref("font-style")}} プロパティを適用してください。

## 例

```html
より詳しい情報については <cite>[ISO-0000]</cite> に記載されています。
```

以下のように出力されます。

{{EmbedLiveSample("Example", 640, 60)}}

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-cite-element', '&lt;cite&gt;')}}             | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-cite-element', '&lt;cite&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;cite&gt;')}}                         | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.cite")}}

## 関連情報

- {{HTMLElement("blockquote")}} 要素は長い引用に使用します。
- {{HTMLElement("q")}} 要素は行内の引用に使用します。
