---
title: "<dl>: 説明リスト要素"
slug: Web/HTML/Reference/Elements/dl
original_slug: Web/HTML/Element/dl
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<dl>`** は [HTML](/ja/docs/Web/HTML) の要素で、説明リストを表します。この要素は、一連の用語（{{HTMLElement("dt")}} 要素を使用して指定）と説明（{{HTMLElement("dd")}} 要素によって提供）をリスト化したものです。一般的な使用例として、用語集の作成やメタデータ（キーと値のペアのリスト）の表示が挙げられます。

{{InteractiveExample("HTML デモ: &lt;dl&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>、<code>&#x3C;dl></code> 要素の子要素が 1 つの名前と値のグループの場合は知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <p>
          1 個以上の {{HTMLElement("dt")}} 要素とそれに続く 1 個以上の {{HTMLElement("dd")}} 要素、任意で {{HTMLElement("script")}} 要素や {{HTMLElement("template")}} 要素が混在するもの。<br>
          または ({{Glossary("WHATWG")}} HTML や {{Glossary("W3C")}} HTML 5.2 以降では) 1 個以上の {{HTMLElement("div")}} 要素、任意で {{HTMLElement("script")}} 要素や {{HTMLElement("template")}} 要素が混在するもの。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/List_role"
            >list</a
          ></code
        >, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDListElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 例

### 一つの定義語に対する一つの定義説明

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### 結果

{{EmbedLiveSample("Single_term_and_description")}}

### 複数の定義語に対する一つの定義説明

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### 結果

{{EmbedLiveSample("Multiple_terms_single_description")}}

### 一つの定義語に対し、複数の定義内容をあてる

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### 結果

{{EmbedLiveSample("Single_term_multiple_descriptions")}}

### 複数の定義語に対し、複数の定義内容をあてる

これまでの例を組み合わせることで、複数の定義語に対し、複数の内容を定義することもできます。

### メタデータ

説明リストは、キーと値のペアのリストであるメタデータの表示にも役立ちます。

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

#### 結果

{{EmbedLiveSample('Metadata')}}

ヒント: CSS でキーと値のセパレーターを定義すると便利でしょう。

```css
dt::after {
  content: ": ";
}
```

### 名前と値のグループを `div` 要素で包む

[WHATWG](/ja/docs/Glossary/WHATWG) HTML では、{{HTMLElement("dl")}} 要素内でそれそれの名前と値のグループを、{{HTMLElement("div")}} 要素でまとめることができます。これは[マイクロデータ](/ja/docs/Web/HTML/Guides/Microdata)を使用するとき、グループ全体に[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)を適用するとき、あるいはスタイルを設定するために役立ちます。

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

#### 結果

{{EmbedLiveSample('Wrapping name-value groups in `div` elements')}}

## メモ

単なる字下げの目的でこの要素（あるいは {{HTMLElement("ul")}} 要素）を使用するのは誤りです。そのように機能しますが、これは悪い慣習であり説明リストの意味を不明瞭にします。

用語の説明のインデントを変更するには、[CSS](/ja/docs/Web/CSS) の {{cssxref("margin")}} プロパティを使用してください。

## アクセシビリティの考慮

スクリーンリーダーによって、`<dl>` コンテンツの合計数、用語/定義のコンテキスト、ナビゲーション方法の公開方法は様々です。これらの違いは、必ずしもバグではありません。
iOS 14 では、VoiceOver は仮想カーソルで操作する際に、 `<dl>` の内容がリストであることをアナウンスします（read-all コマンドを使用しなくても）。VoiceOver は `<dl>` を使ったリストナビゲーションコマンドには対応していません。ARIA の `term` と `definition` のロールを `<dl>` 構造に適用すると、VoiceOver（macOS と iOS）がそのアナウンス方法を調整するので、注意が必要です。

- [VoiceOver on iOS 14 Supports Description Lists](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [Brief Note on Description List Support](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("dt")}}
- {{HTMLElement("dd")}}
