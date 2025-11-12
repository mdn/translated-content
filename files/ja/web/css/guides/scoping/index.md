---
title: CSS スコープ
slug: Web/CSS/Guides/Scoping
original_slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: 5ca83d829b875709ef9bf0b5ae5cefef911c9c1a
---

**CSS スコープ**モジュールは、[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) の[スコープ](https://css.oddbird.net/scope/)機構を中心に、 CSS のスコープとカプセル化の機構を定義します。

CSS スタイルには、グローバルスコープと、{{Glossary("shadow tree", "シャドウツリー")}}のスコープがあります。グローバルスコープのスタイルは、セレクターに一致するノードツリー内のすべての要素に適用され、そのツリー内のカスタム要素も含まれますが、各カスタム要素を構成するシャドウツリーには適用されません。セレクターとそれに関連するスタイル定義は、スコープ間で滲み出ることはありません。

シャドウツリーの CSS 内では、セレクターはツリーの外にある要素、つまりグローバルスコープ内や他のシャドウツリー内の要素を選択することはありません。各カスタム要素は自分自身でシャドウツリーを持っており、そのシャドウツリーにはカスタム要素を構成するすべての部品が格納されています（カスタム要素、つまり「ホスト」そのものは格納されていません）。

シャドウツリーコンテキストの内部からホストのスタイル設定ができると有益なことがあります。CSS スコープモジュールは、これを可能にするセレクターを定義します。

- シャドウツリーがそのホストをスタイル設定できるようにします。
- 外部 CSS でシャドウ DOM 内の要素にスタイルを設定できるようにします（ただし、関連するカスタム要素が外部スタイルを受け入れるように設定されている場合に限ります）。

## リファレンス

### セレクター

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## ガイド

- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
  - : 再利用可能なウェブコンポーネント（他のコードから機能をカプセル化したカスタム要素）を作成するために使用するさまざまな技術を紹介します。

- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
  - : 要素へのシャドウ DOM の適用、シャドウ DOM ツリーへの追加、スタイル設定など、シャドウ DOM の基礎を記載します。

- [テンプレートとスロットの使用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)
  - : {{htmlelement("template")}} と {{htmlelement("slot")}} 要素を用いて再利用可能な HTML 構造を定義し、ウェブコンポーネントの内部でその構造を使用します。

- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
  - : 機能をカプセル化するカスタム要素を作成するために使用する JavaScript API、Custom Elements API の紹介です。

## 関連概念

- CSS {{CSSXref(":defined")}} 擬似クラス
- CSS {{CSSXref("::part")}} 擬似要素

- HTML {{HTMLElement("template")}} 要素
- HTML {{HTMLElement("slot")}} 要素
- HTML [`slot`](/ja/docs/Web/HTML/Reference/Global_attributes/slot) 属性

- {{Glossary("Shadow tree", "シャドウツリー")}} （用語集の用語）
- {{Glossary("DOM")}} （用語集の用語）
- [複合セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector)（用語）
- [セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)（用語）

- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)インターフェイス、プロパティ、メソッド
  - {{DOMxRef("CustomElementRegistry")}} インターフェイス
  - {{DOMxRef("Element")}} API
    - {{DOMxRef("Element.slot")}} プロパティ
    - {{DOMxRef("Element.assignedSlot")}} プロパティ
    - {{DOMxRef("Element.attachShadow()")}} メソッド
  - {{DOMxRef("HTMLSlotElement")}} インターフェイス
  - {{DOMxRef("HTMLTemplateElement")}} インターフェイス
  - {{DOMxRef("ShadowRoot")}} インターフェイス

> [!NOTE]
> セレクターが一致する参照点（またはスコープ）となる要素を表す {{CSSXref(":scope")}} 擬似クラスは、名前とは裏腹に、[セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュールで定義されています。これは CSS スコープモジュールとは無関係で、シャドウ DOM のスコープ機構に関連するスコープに焦点を当てています。

## 仕様書

{{Specifications}}

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [CSS 名前空間](/ja/docs/Web/CSS/Guides/Namespaces)モジュール
- [CSS シャドウパーツ](/ja/docs/Web/CSS/Guides/Shadow_parts)モジュール
- [Template, slot, and shadow](https://web.dev/learn/html/template/) (web.dev, 2023)
- [Custom element best practices](https://web.dev/articles/custom-elements-best-practices) (web.dev, 2019)
