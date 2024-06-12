---
title: "<var>: 変数要素"
slug: Web/HTML/Element/var
l10n:
  sourceCommit: 4de810dd8ec0d4a2a62f63991a6897fb5f5ac3e3
---

{{HTMLSidebar}}

**`<var>`** は [HTML](/ja/docs/Web/HTML) の要素で、数式やプログラムコード内の変数の名前を表します。挙動はブラウザーに依存しますが、通常は現在のフォントのイタリック体を使って表示されます。

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

### 関連する要素

`<var>` がよく使われる文脈でよく使われる他の要素には、次のようなものがあります。

- {{HTMLElement("code")}}: HTML コード要素
- {{HTMLElement("kbd")}}: HTML キーボード入力要素
- {{HTMLElement("samp")}}: HTML サンプル出力要素

もし、意味的な目的ではなく装飾目的で `<var>` が誤って使用されているのを見かけた場合は、{{HTMLElement("span")}} と適切な CSS を使用するか、次のような適切な意味の要素を使用するかしてください。

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### 既定のスタイル

多くのブラウザーは `<var>` の表示時に {{cssxref("font-style")}} に `"italic"` を適用します。これは次のように CSS で上書きできます。

```css
var {
  font-style: normal;
}
```

## 例

### 基本的な例

これは、 `<var>` を使用して数式の変数名を記述した単純な例です。

```html
<p>単純な数式: <var>x</var> = <var>y</var> + 2</p>
```

#### 結果

{{EmbedLiveSample("Basic_example", 650,80)}}

### 既定のスタイルの上書き

CSS を使用して、 `<var>` 要素の既定のスタイルを上書きすることができます。この例では、 Courier フォントがあれば、それを使って太字で表示し、なければ既定の等幅フォントに代替されます。

#### CSS

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```html-nolint
<p>
  <var>minSpeed</var> と <var>maxSpeed</var> 変数は、端末の最低速度と最高速度を分当たりの回転数 (RPM) で制御します。
</p>
```

この HTML では、2 つの変数名を `<var>` を使用して囲んでいます。

#### 結果

{{EmbedLiveSample("Overriding_the_default_style", 650, 140)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
