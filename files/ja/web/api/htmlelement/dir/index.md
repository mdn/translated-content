---
title: HTMLElement.dir
slug: Web/API/HTMLElement/dir
tags:
  - API
  - HTML DOM
  - HTMLElement
  - プロパティ
  - リファレンス
browser-compat: api.HTMLElement.dir
translation_of: Web/API/HTMLElement/dir
---
{{ApiRef("HTML DOM")}}

**`HTMLElement.dir`** プロパティは、現在の要素のコンテンツのテキストを書く書字方向を取得または設定します。

要素のテキストを書く書字方向（text writing directionality）は、テキストが向かう方向です (異なる言語体系のサポートのため)。 アラビア語とヘブライ語は、 RTL 書字方向を使用する典型的な言語です。

画像の `dir` プロパティを "`rtl`" に設定できます。 この場合、 HTML 属性の `title` と `alt` は、 "`rtl`" としてフォーマットされ、定義されます。

表の `dir` が "`rtl`" に設定されている場合、列の順序は右から左に配置されます。

要素の `dir` が "`auto`" に設定されている場合、要素の方向は、最初の強い書字方向文字 (strong directionality character)、または既定では親要素の書字方向に基づいて決定されます。

> **Note:** ブラウザーは、コンテンツの作成を支援するために、ユーザーが {{ HTMLElement("input") }} と {{ HTMLElement("textarea") }} の書字方向を変更することを許可する場合があります。 Chrome と Safari は入力フィールドのコンテキストメニューで書字方向のオプションを提供しており、 Internet Explorer と Edge は <kbd>Ctrl</kbd> + <kbd>左 Shift</kbd> と <kbd>Ctrl</kbd> + <kbd>右 Shift</kbd> のキーバインドを使用しています。 Firefox は <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> を使用しますが、 **`dir`** 属性の値は更新しません。

## 値

以下のうちの何れかです。

- `ltr`: 左書き（左から右へ）
- `rtl`: 右書き（右から左へ）
- `auto`: 要素の内容に基づいて方向を決定しなければならないことを指定するためのものです。

## 例

```js
var parg = document.getElementById("para1");
parg.dir = "rtl";
// "para1" として識別される段落のテキストの方向を変更します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.dir")}}
- HTML の [`dir`](/ja/docs/Web/HTML/Global_attributes/dir) グローバル属性
- CSS の {{cssxref("direction")}} プロパティ
- CSS の {{cssxref(":dir")}} 擬似クラス
