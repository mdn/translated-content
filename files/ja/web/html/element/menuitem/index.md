---
title: <menuitem>
slug: Web/HTML/Element/menuitem
---

{{HTMLRef}}{{Deprecated_Header("HTML5.2")}}

**HTML の `<menuitem>` 要素**は、ユーザーがポップアップメニューから実行できるコマンドをあらわします。メニューボタンに割り当てるメニューはもちろん、コンテキストメニューも含みます。

コマンドはテキストのラベルと任意で外観を表すアイコン、あるいは代わりに別の要素で動作を定義する*インダイレクトコマンド*で明示的に定義できます。また、任意でコマンドにチェックボックスを含めたり、ラジオボタンを共有するグループにすることができます (インダイレクトコマンドのメニュー項目を `<input type="checkbox">` および `<input type="radio">` 要素に対して定義するとき、チェックボックスまたはラジオボタンを持ちます)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>なし。</td>
    </tr>
    <tr>
      <th scope="row"><dfn>許可されている内容</dfn></th>
      <td>なし。これは{{Glossary("空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row"><dfn>タグの省略</dfn></th>
      <td>開始タグが必須で、終了タグはあってはいけません。</td>
    </tr>
    <tr>
      <th scope="row"><dfn>許可されている親要素</dfn></th>
      <td>
        <em>ポップアップメニュー</em>状態である {{HTMLElement("menu")}}
        要素。({{HTMLElement("menu")}} 要素の
        <code>type</code> 属性を指定する場合は
        <code>popup</code> にしなければなりません。属性がない場合は
        {{HTMLElement("menu")}}
        の親要素自体が<em>ポップアップメニュー</em>状態の
        {{HTMLElement("menu")}} であることが必要です。)
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLMenuItemElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。特に `title` 属性はコマンドの説明やヒントを出すのに使われます。

- {{HTMLAttrDef("checked")}}
  - : コマンドが選択されているか否かを示す論理属性。`type` 属性が `checkbox` または `radio` のときのみ使われます。
- {{HTMLAttrDef("command")}}
  - : 別の要素の ID を指定して、間接的に実行するコマンドを示します。 `checked`, `disabled`, `icon`, `label`, `radiogroup`, `type` 属性も含むメニューアイテムで使用してはいけません。
- {{HTMLAttrDef("default")}}
  - : この論理属性は、メニューのサブジェクト要素 (`button` や `input` など) と同じコマンドを使用することを示します。
- {{HTMLAttrDef("disabled")}}
  - : 現在の状態ではコマンドを使用できないことを示す論理属性です。`disabled` は `hidden` とは異なりますので注意してください。`disabled` 属性は、状態の変化によってコマンドが妥当になる状況で適切です。
- {{HTMLAttrDef("icon")}}
  - : コマンドを表す画像を提供するために、画像の URL を指定します。
- {{HTMLAttrDef("label")}}
  - : ユーザーに表示する、コマンドの名前です。`command` 属性を提供しない場合は必須です。
- {{HTMLAttrDef("radiogroup")}}
  - : この属性は、選択されたときにラジオボタンを切り替えるコマンドのグループの名前を指定します。`type` 属性が `radio` である場合に限り使用できます。
- {{HTMLAttrDef("type")}}

  - : この属性は、コマンドの種類を以下の 3 つの値のいずれかで示すことができます。

    - `command`: 関連付けられたアクションを持つ、通常のコマンド。値がない場合の既定値です。
    - `checkbox`: 2 つの異なる状態を切り替えできるコマンドを表します。
    - `radio`: ラジオボタンで切り替え可能なコマンドのグループから 1 つを選択します。

## 例

### HTML

```html
<!-- A <div> element with a context menu -->
<div contextmenu="popup-menu">
  Right-click to see the adjusted context menu
</div>

<menu type="context" id="popup-menu">
  <menuitem type="checkbox" checked>Checkbox</menuitem>
  <hr>
  <menuitem type="command" label="This command does nothing" icon="https://developer.mozilla.org/static/img/favicon144.png">
    Commands don't render their contents.
  </menuitem>
  <menuitem type="command" label="This command has javascript" onclick="alert('command clicked')">
    Commands don't render their contents.
  </menuitem>
  <hr>
  <menuitem type="radio" radiogroup="group1">Radio Button 1</menuitem>
  <menuitem type="radio" radiogroup="group1">Radio Button 2</menuitem>
</menu>
```

### CSS

```css
div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
```

### 表示結果

{{EmbedLiveSample("Example", '100%', 80)}}

## 仕様書

| 仕様書                                                                                                                       | 状態                         | 備考                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------- |
| {{SpecName("HTML5.2", "obsolete.html#elementdef-menuitem", "&lt;menuitem&gt;")}}                 | {{Spec2("HTML5.2")}} | {{SpecName("HTML WHATWG")}} のスナップショット、廃止になった |
| {{SpecName("HTML5.1", "interactive-elements.html#the-menuitem-element", "&lt;menuitem&gt;")}} | {{Spec2("HTML5.1")}} | {{SpecName("HTML WHATWG")}} のスナップショット、初回定義     |

## ブラウザーの互換性

{{Compat("html.elements.menuitem")}}

## 関連情報

- [HTML5 context menus in Firefox (Screencast and Code)](https://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/)
