---
title: <menu>
slug: Web/HTML/Element/menu
---

{{HTMLSidebar}}{{SeeCompatTable}}

**HTML の `<menu>` 要素**は、ユーザーが実行またはアクティブ化できるコマンドのグループを表します。これは画面の上部に現れるリストメニューと、ボタンを押したときにその下部付近に現れるような[コンテキストメニュー](/ja/docs/Web/HTML/Element/menu#context_menu)の両方を含みます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <p>
          <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
            >フローコンテンツ</a
          >。この要素の子に 1 個以上の {{HTMLElement("li")}}
          要素がある場合は<a
            href="/ja/docs/Web/Guide/HTML/Content_categories#知覚可能コンテンツ"
            >知覚可能コンテンツ</a
          >。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <p>
          要素が<em>リストメニュー</em>状態である場合:
          <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
            >フローコンテンツ</a
          >または 0 個以上の {{HTMLElement("li")}},
          {{HTMLElement("script")}},
          {{HTMLElement("template")}}。
          (<em>リストメニュー</em>は、親要素が<em>コンテキストメニュー</em>状態の
          {{HTMLElement("menu")}} でない場合の既定の状態です。)
        </p>
        <p>
          要素が<em>コンテキストメニュー</em>状態である場合: 任意の順序で、 0
          個以上の {{HTMLElement("menu")}}
          (コンテキストメニュー状態に限る),
          {{HTMLElement("menuitem")}}, {{HTMLElement("hr")}},
          {{HTMLElement("script")}},
          {{HTMLElement("template")}}。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{No_Tag_Omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/directory_role">directory</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role"
            >listbox</a
          ></code
        >, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menu_role">menu</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menubar_role">menubar</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role">radiogroup</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/tablist_role">tablist</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/toolbar_role">toolbar</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/tree_role">tree</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{HTMLAttrDef("label")}} {{Deprecated_inline}}
  - : ユーザーに対して表示されるメニューの名称です。入れ子のメニューの中で、サブメニューへアクセスするためのラベルを提供するために使用されます。親要素が {{HTMLElement("menu")}} で*コンテキストメニュー*状態である場合に限り、指定する必要があります。
- {{HTMLAttrDef("type")}}

  - : この属性は定義済みのメニューの種類を示すものであり、以下 2 つの値のいずれかを指定します。

    - `context` {{Deprecated_inline}} : 他の要素を介して起動されるコマンドのグループを表す*ポップアップメニュー*状態を表します。これは {{HTMLElement("button")}} 要素の {{HTMLAttrxRef("menu", "button")}} 属性で参照されるボタンメニューや、 [`contextmenu`](/ja/docs/Web/HTML/Global_attributes#attr-contextmenu) 属性のある要素のコンテキストメニューである可能性があります。この値はこの属性がなく、その親要素も `<menu>` であった場合の既定値です。
    - `toolbar`: *ツールバー*状態であり、ユーザーと対話するための一連のコマンドから成るツールバーを表します。これは {{HTMLElement("li")}} の番号なしリストの形か、子要素に `<li>` を含まない場合は、利用できるコマンドを記述した[フローコンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ)です。この値はこの属性が指定されていない場合の既定値です。

## 使用上の注意

{{HTMLElement("menu")}} 要素と {{HTMLElement("ul")}} 要素はともに順序なしリストの項目を表すものです。主な違いは、 {{HTMLElement("ul")}} は主に項目の表示を目的とするのに対し、 {{HTMLElement("menu")}} 要素は操作を行うための対話型の項目のためのものです。

HTML メニューは、コンテキストメニュー (一般的に、別の要素を右クリックすると表示される) またはツールバーを作成するために使用することができます。

**[コンテキストメニュー](#context_menu)**は、 `<menu>` 要素の中にメニューで選択可能な項目を表す {{HTMLElement("menuitem")}} 要素、メニュー内のサブメニューを表す `<menu>` 要素、メニューの内容をセクションに分けるセパレーター行を表す {{HTMLElement("hr")}} 要素が含まれたもので構成されます。 コンテキストメニューは、関連付ける要素の {{HTMLAttrxRef("contextmenu")}} 属性、または[ボタンでアクティブにするメニュー](#button_menu)であれば {{HTMLElement("button")}} 要素の {{HTMLAttrxRef("menu", "button")}} 属性を使用して、メニューをアクティブ化する要素に紐づけます。

**[ツールバーメニュー](#toolbar)** は、 `<menu>` 要素の中身が 2 通りのうちの一方で記述されたもので構成されます。 {{HTMLElement("li")}} 要素で表した項目の順不同リスト (それぞれの項目が、ユーザーが利用できるコマンドやオプションを表す) または、 (`<li>` 要素がない場合) 使用なコマンドやオプションを表す[フローコンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ)のどちらかです。

この要素は HTML4 で非推奨になりましたが、 HTML5.1 および HTML living standard で再導入されました。本ドキュメントは、現行の Firefox の実装について説明します。 HTML 5.1 によれば、 type 属性の 'list' が 'toolbar' に変わったようです。

## 例

### コンテキストメニュー

{{Deprecated_header}}

#### HTML

```html
<!-- A <div> element with a context menu -->
<div contextmenu="popup-menu">
  Right-click to see the adjusted context menu
</div>

<menu type="context" id="popup-menu">
  <menuitem>Action</menuitem>
  <menuitem>Another action</menuitem>
  <hr/>
  <menuitem>Separated action</menuitem>
</menu>
```

#### CSS

```css
div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
```

#### 結果

{{EmbedLiveSample("Context_menu", "100%", 80)}}

### メニューボタン

> **警告:** メニューボタンを実装しているブラウザーはまだ知られていません。 `<menu>` 要素の {{HTMLAttrxRef("type", "menu")}} 属性は廃止されました。

> **警告:** {{HTMLElement("menuitem")}} 要素は廃止されました。

#### HTML

```html
<!-- A button, which displays a menu when clicked. -->
<button type="menu" menu="popup-menu">
  Dropdown
</button>

<menu type="context" id="popup-menu">
  <menuitem>Action</menuitem>
  <menuitem>Another action</menuitem>
  <hr/>
  <menuitem>Separated action</menuitem>
</menu>
```

#### 結果

{{EmbedLiveSample("Menu_button", "100%", 50)}}

### ツールバー

> **警告:** ツールバーメニューを実装しているブラウザーはまだ知られていません。

#### HTML

```html
<!-- A context menu for a simple editor,
   - containing two menu buttons. -->
<menu type="toolbar">
  <li>
    <button type="menu" menu="file-menu">File</button>
    <menu type="context" id="file-menu">
      <menuitem label="New..." onclick="newFile()">
      <menuitem label="Save..." onclick="saveFile()">
    </menu>
  </li>
  <li>
    <button type="menu" menu="edit-menu">Edit</button>
    <menu type="context" id="edit-menu">
      <menuitem label="Cut..." onclick="cutEdit()">
      <menuitem label="Copy..." onclick="copyEdit()">
      <menuitem label="Paste..." onclick="pasteEdit()">
    </menu>
  </li>
</menu>
```

#### 結果

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.menu")}}

## 関連情報

- 他のリスト関連 HTML 要素: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("hr")}} および廃止済の {{HTMLElement("dir")}}
- [`contextmenu`](/ja/docs/Web/HTML/Global_attributes#attr-contextmenu) [グローバル属性](/ja/docs/Web/HTML/Global_attributes): {{HTMLAttrxRef("type", "menu", 'type="context"')}} がついた `menu` の `id` を参照するために使用することができる
