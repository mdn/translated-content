---
title: "<samp>: サンプル出力要素"
slug: Web/HTML/Element/samp
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<samp>`** は [HTML](/ja/docs/Web/HTML) の要素で、コンピュータープログラムからのサンプル出力を表すインラインのテキストを収めるために使用されます。内容は普通、ブラウザーの既定の等幅フォント（[Courier](https://ja.wikipedia.org/wiki/Courier_(書体)) や Lucida Console など）を使用して表示されます。

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 使用上のメモ

CSS ルールを定義することで、`<samp>` 要素におけるブラウザーの既定フォントを上書きすることができますが、ブラウザーの設定が指定した CSS よりも優先されることもあります。

CSS で既定のフォントを上書きするには、次のようにします。

```css
samp {
  font-family: "Courier";
}
```

> **メモ:** ウェブサイトや JavaScript コードによって生成された出力を含めるコンテナーとして提供する要素が必要な場合は、代わりに {{HTMLElement("output")}} 要素を使用してください。

## 例

### 基本的な例

この単純な例では、段落にプログラムの出力の例を含めます。

```html
<p>
  When the process is complete, the utility will output the text
  <samp>Scan complete. Found <em>N</em> results.</samp> You can then proceed to
  the next step.
</p>
```

結果の出力は次のようになります。

{{EmbedLiveSample("Basic_example", 650, 100)}}

### ユーザー入力を含むサンプル出力

{{HTMLElement("kbd")}} 要素を `<samp>` ブロックの中で使用することで、ユーザーが入力した文字列を含んだ例を表現することができます。例えば、Linux （または macOS）のコンソールセッションを表現したこのテキストを考えてみてください。

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

なお、{{HTMLElement("span")}} を使用して、シェルのプロンプトやカーソルのような、サンプル文字列の中にある特定の部分の表示ができるようにしています。また、`<kbd>` を使用して、サンプル文字列の中のプロンプトでユーザーが入力したコマンドを表現しています。

#### CSS

実現したい表示を達成するための CSS は次の通りです。

```css
.prompt {
  color: #b00;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #00b;
}
```

これはプロンプトとカーソルにわずかに着色し、サンプル文字列の中のキー入力を太字にしています。

#### 結果

結果の出力は次のようになります。

{{EmbedLiveSample("Sample_output_including_user_input", 650, 120)}}

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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連要素: {{HTMLElement("kbd")}}, {{HTMLElement("code")}}, {{HTMLElement("pre")}}
- {{HTMLElement("output")}} 要素: スクリプトが生成した出力のためのコンテナー
