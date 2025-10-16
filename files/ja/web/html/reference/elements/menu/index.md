---
title: "<menu>: メニュー要素"
slug: Web/HTML/Reference/Elements/menu
original_slug: Web/HTML/Element/menu
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<menu>`** は [HTML](/ja/docs/Web/HTML) の要素で、HTML 仕様書では {{HTMLElement("ul")}} とは異なる意味づけとして記述されていますが、ブラウザーでは {{HTMLElement("ul")}} と違いのないものとして扱われます（そしてアクセシビリティツリーで公開されます）。これは（{{HTMLElement("li")}} 要素で表現される）項目の順序のないリストを表します。

{{InteractiveExample("HTML デモ: &lt;menu&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="news">
  <a href="#">NASA’s Webb Delivers Deepest Infrared Image of Universe Yet</a>
  <menu>
    <li><button id="save">Save for later</button></li>
    <li><button id="share">Share this news</button></li>
  </menu>
</div>
```

```css interactive-example
.news {
  background-color: bisque;
  padding: 1em;
  border: solid thin black;
}

menu {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
  gap: 1em;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

## 使用上の注意

`<menu>` 要素と {{HTMLElement("ul")}} 要素はともに順序なしリストの項目を表すものです。主な違いは、{{HTMLElement("ul")}} は主に項目の表示を目的とするのに対し、 `<menu>` 要素は操作を行うための対話型の項目のためのものです。関連する {{HTMLElement("menuitem")}} 要素は非推奨になりました。

> [!NOTE]
> HTML 仕様書の初期の版では、`<menu>` 要素にはコンテキストメニューとしての追加の用途がありました。この機能は廃止されたと考えており、仕様書にはありません。

## 例

### ツールバー

この例では、`<menu>` を編集アプリケーションのためのツールバーを生成するために使用しています。

#### HTML

```html
<menu>
  <li><button onclick="copy()">コピー</button></li>
  <li><button onclick="cut()">切り取り</button></li>
  <li><button onclick="paste()">貼り付け</button></li>
</menu>
```

なお、機能的には次のものと違いはありません。

```html
<ul>
  <li><button onclick="copy()">コピー</button></li>
  <li><button onclick="cut()">切り取り</button></li>
  <li><button onclick="paste()">貼り付け</button></li>
</ul>
```

#### CSS

```css
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### 結果

{{EmbedLiveSample("Toolbar", "100%", 100)}}

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
        <p>
          <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
            >フローコンテンツ</a
          >。この要素の子に 1 個以上の {{HTMLElement("li")}}
          要素がある場合は<a
            href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ"
            >知覚可能コンテンツ</a
          >。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <p>
          0 個以上の {{HTMLElement("li")}},
          {{HTMLElement("script")}},
          {{HTMLElement("template")}}。
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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/List_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"
            >listbox</a
          ></code
        >, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a> or <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のリスト関連 HTML 要素: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}
