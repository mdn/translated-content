---
title: '<dir>: ディレクトリー要素'
slug: Web/HTML/Element/dir
tags:
  - Directory
  - 要素
  - HTML
  - HTML Lists
  - 非推奨
  - リファレンス
  - ウェブ
  - dir
  - lists
browser-compat: html.elements.dir
translation_of: Web/HTML/Element/dir
---

{{HTMLRef}}{{deprecated_header}}

**`<dir>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{Glossary("user agent","ユーザーエージェント")}}が適用するスタイルやアイコンを用いて表示する、ファイルやフォルダーのディレクトリーのコンテナとして使われます。この要素は廃止されたので使わないで下さい。代わりに、ファイル一覧を含め、一覧には {{HTMLElement("ul")}} 要素を使用してください。

> **Warning:** この要素は使用しないでください。この要素は HTML の初期の仕様で定義されていましたが、 HTML 4 で非推奨要素に指定され、完全に廃止されました。**この要素に対応している主要なブラウザーはありません。**

## DOM インターフェイス

この要素は {{domxref("HTMLDirectoryElement")}} インターフェイスを実装しています。

## 属性

他のすべての HTML 要素と同様、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。

- {{htmlattrdef("compact")}}
  - : これは論理属性で、コンパクトなスタイルでディレクトリー一覧をレンダリングするようヒントを与えるものです。この属性の解釈はユーザーエージェントに委ねられ、また全てのブラウザーで動作するものでもありません。

## 仕様書

現在の仕様書には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のリストに関する HTML 要素: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- `<dir>` 要素を整形するのに特に有用な CSS プロパティ:

  - {{cssxref('list-style')}} は行頭記号の表示方法を選択するのに便利です。
  - [CSS カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)は、複雑な入れ子リストの扱いに便利です。
  - {{Cssxref('line-height')}} プロパティは、非推奨の {{htmlattrxref("compact", "dir")}} 属性の代替になります。
  - {{cssxref('margin')}} プロパティは、リストのインデントを制御するのに便利です。
