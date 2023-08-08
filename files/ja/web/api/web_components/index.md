---
title: ウェブコンポーネント
slug: Web/API/Web_components
---

{{DefaultAPISidebar("Web Components")}}

ウェブコンポーネントは、再利用可能なカスタム要素を作成し、ウェブアプリの中で利用するための、一連のテクノロジーです。コードの他の部分から独立した、カプセル化された機能を使って実現します。

## 概念と使用法

開発者ならご存知でしょうが、可能な限りコードを再利用することは良い考えです。しかしこれは、以前から、カスタムのマークアップ構造にとって、それほど簡単なことではありませんでした。複雑な HTML (と一連のスタイルやスクリプト) を考えてみて下さい。ときに、カスタム UI の制御をレンダリングするために、コードを書かなければなりません。それに、注意していないと、それらの制御をどう使い回すかで、ページが複雑なものになってしまいます。

ウェブコンポーネントは、上記の問題の解決を目指しています。 ウェブコンポーネントは、3 つの主要な技術からなり、それらを組み合わせて、多目的なカスタム要素を作成します。カプセル化された機能を使うことで、コードの重複を恐れることなく、どこでも再利用することができます。

- **カスタム要素**: カスタム要素とその動作を定義するための、一連の JavaScript API です。以降、ユーザーインターフェイスの中で好きなだけ使用することができます。
- **シャドウ DOM**: カプセル化された「シャドウ」 DOM ツリーを要素に紐付け、関連する機能を制御するための、一連の JavaScript API です。シャドウ DOM ツリーは、メイン文書の DOM とは別にレンダリングされます。こうして、要素の機能を公開せずに済み、文書の他の部分との重複を恐れることなく、スクリプト化やスタイル化できます。
- **HTML テンプレート**: {{HTMLElement("template")}} と {{HTMLElement("slot")}} 要素によって、レンダリングされたページ内に表示されないマークアップのテンプレートを書くことができます。カスタム要素の構造体の基礎として、それらを何度も再利用できます。

ウェブコンポーネントを実装する基本的な流れは、以下に挙げてある通りです。

1. ウェブコンポーネントの機能を明示したクラスもしくは関数を作成します。クラスを使用するなら、ECMAScript 2015 のクラス構文に従ってください。 (詳細は[クラス](/ja/docs/Web/JavaScript/Reference/Classes)を参照してください。)
2. 新しく作成したカスタム要素を登録します。{{domxref("CustomElementRegistry.define()")}} メソッドに、要素の名前、機能が明示されているクラスもしくは関数、またオプションでどの要素を継承するかを渡して下さい。
3. 必要なら {{domxref("Element.attachShadow()")}} メソッドを使って、シャドウ DOM をカスタム要素に紐付けます。通常の DOM メソッドを使って、子要素やイベントリスナーなどをシャドウ DOM に追加して下さい。
4. 必要なら {{htmlelement("template")}} と {{htmlelement("slot")}} を使って、HTML テンプレートを定義します。通常の DOM メソッドを再度使って、テンプレートをクローンし、シャドウ DOM に紐付けてください。
5. ページ内のお好きな場所で、通常の HTML 要素のように、カスタム要素を使って下さい。

## チュートリアル

- [カスタム要素の使用](/ja/docs/Web/Web_Components/Using_custom_elements)
  - : 単純なウェブコンポーネントを作成するために、カスタム要素の機能の使い方を紹介したガイドです。それ以外にも、ライフサイクルコールバックやその他の高度な機能の中を覗いていきます。
- [シャドウ DOM の使用](/ja/docs/Web/Web_Components/Using_shadow_DOM)
  - : シャドウ DOM の基礎を眺めるガイドです。シャドウ DOM を要素にどう紐付けるか、シャドウ DOM ツリーにどう追加するか、どうスタイル付けするかなどを紹介しています。
- [テンプレートとスロットの使用](/ja/docs/Web/Web_Components/Using_templates_and_slots)
  - : {{htmlelement("template")}} と {{htmlelement("slot")}} 要素を使って、再利用可能な HTML 構造体の定義と使用方法を紹介したガイドです。

## リファレンス

### カスタム要素

- {{domxref("CustomElementRegistry")}}
  - : カスタム要素に関わる機能が含まれています。中でも注目すべきは、 {{domxref("CustomElementRegistry.define()")}} メソッドで、新しいカスタム要素を登録するために用います。それにより、カスタム要素を文書内で使用できるようになります。
- {{domxref("Window.customElements")}}
  - : `CustomElementRegistry` オブジェクトへの参照を返します。
- [ライフサイクルコールバック](/ja/docs/Web/Web_Components/Using_custom_elements#ライフサイクルコールバックの使用)

  - : カスタム要素のクラス定義の中で定義された特別なコールバック関数で、挙動に影響を与えます。

    - `connectedCallback`: カスタム要素が文書の DOM に初めて接続したときに呼び出されます。
    - `disconnectedCallback`: カスタム要素が文書の DOM から切断されたときに呼び出されます。
    - `adoptedCallback`: カスタム要素が新しい文書に移動したときに呼び出されます。
    - `attributeChangedCallback`: カスタム要素の属性のひとつが追加、削除、もしくは変更されたときに呼び出されます。

- カスタム組み込み要素を作成するための拡張機能

  - : 以下の拡張機能が定義されています。

    - [`is`](/ja/docs/Web/HTML/Global_attributes#is) グローバル HTML 属性: 標準の HTML 要素が、カスタム組み込み要素のように振る舞うべきかを指定できます。
    - {{domxref("Document.createElement()")}} メソッドの "is" オプション: カスタム組み込み要素のように振る舞う標準の HTML 要素のインスタンスを作成できます。

- CSS の擬似クラス

  - : カスタム要素に関連する擬似クラスです。

    - {{cssxref(":defined")}}: 組み込み要素と `CustomElementRegistry.define()` で定義されるカスタム要素を含む、あらゆる定義済みの要素に一致します。
    - {{cssxref(":host")}}: 使われている CSS を含む、[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) のシャドウホストを選択します。
    - {{cssxref(":host()")}}: 使われている CSS を含む、[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) のシャドウホストを選択します。 (シャドウ DOM の内側からカスタム要素を選択することができます。) ただし、関数の引数として渡されるセレクターがシャドウホストに一致している場合に限ります。
    - {{cssxref(":host-context()")}}: 使われている CSS を含む、[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) のシャドウホストを選択します。 (シャドウ DOM の内側からカスタム要素を選択することができます。) ただし、関数の引数として渡されるセレクターが DOM 階層内のシャドウホストの先祖要素に一致している場合に限ります。

- CSS 擬似要素

  - : カスタム要素に関連する擬似要素です。

    - {{cssxref("::part")}}: [シャドウツリー](/ja/docs/Web/Web_Components/Using_shadow_DOM)内にある要素で、一致する [`part`](/ja/docs/Web/HTML/Global_attributes#part) 属性を持つものを表します。

### シャドウ DOM

- {{domxref("ShadowRoot")}}
  - : シャドウ DOM サブツリーのルートノードを表します。
- {{domxref("Element")}} の拡張

  - : シャドウ DOM に関する `Element` インターフェイスの拡張です。

    - {{domxref("Element.attachShadow()")}} メソッドは、シャドウ DOM ツリーを指定された要素に取り付けます。
    - {{domxref("Element.shadowRoot")}} プロパティは、指定された要素に取り付けられたシャドウルートを返します。取り付けられているシャドウルートがない場合は `null` を返します。

- 関連する {{domxref("Node")}} への追加

  - : シャドウ DOM に関する `Node` インターフェイスへの追加事項です。

    - {{domxref("Node.getRootNode()")}} メソッドは、そのコンテキストオブジェクトのルートを返します。存在する場合はシャドウルートを含みます。
    - {{domxref("Node.isConnected")}} プロパティは論理値を返し、そのノードがそのコンテキストオブジェクト（通常の DOM であれば {{domxref("Document")}} オブジェクト、シャドウ DOM であれば {{domxref("ShadowRoot")}}）に接続されているかどうかを示します。

- {{domxref("Event")}} の拡張

  - : シャドウ DOM に関する `Event` インターフェイスの拡張です。

    - {{domxref("Event.composed")}}: このイベントがシャドウ DOM 境界を超えて標準 DOM にまで伝播する場合は `true`、そうでなければ `false` を返します。
    - {{domxref("Event.composedPath")}}: イベントのパス（リスナーが呼び出されたオブジェクト）を返します。 {{domxref("ShadowRoot.mode")}} が closed でシャドウルートが生成された場合、シャドウツリー内のノードは含まれません。

### HTML テンプレート

- {{htmlelement("template")}}
  - : HTML の断片を含みますが、最初に文書を読み込んだときにはレンダリングされず、実行時に　JavaScript を使って表示することができます。関連する DOM インターフェイスは {{domxref("HTMLTemplateElement")}} です。
- {{htmlelement("slot")}}
  - : ウェブコンポーネント内のプレースホルダーで、独自のマークアップで埋めることができます。これにより、別の DOM ツリーを生成し、それらを一緒に表示することができます。関連する DOM インターフェイスは {{domxref("HTMLSlotElement")}} です。
- [`slot`](/ja/docs/Web/HTML/Global_attributes/slot) グローバル HTML 属性
  - : シャドウ DOM のシャドウツリーにあるスロットを要素に割り当てます。
- {{domxref("Element.assignedSlot")}}
  - : 読み取り専用の属性で、この要素が挿入される {{htmlelement("slot")}} の参照を返します。
- {{domxref("Text.assignedSlot")}}
  - : 読み取り専用の属性で、このテキストノードが挿入される {{htmlelement("slot")}} の参照を返します。
- {{domxref("Element")}} の拡張

  - : スロットに関する `Element` インターフェイスの拡張です。

    - {{domxref("Element.slot")}}: この要素に取り付けられたシャドウ DOM スロットの名前を返します。

- CSS 擬似要素

  - : スロットに特化した擬似要素です。

    - {{cssxref("::slotted")}}: スロットに挿入されたコンテンツに一致します。

- {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} イベント
  - : {{domxref("HTMLSlotElement")}} のインスタンス ({{htmlelement("slot")}} 要素) において、そのスロットに含まれるノードが変化したときに発行されます。

## 例

[web-components-examples](https://github.com/mdn/web-components-examples) の GitHub リポジトリーに、いくつかの例を用意してあります。時間とともに、より多くの例が追加されることでしょう。

## 仕様書

### `template` 要素とカスタム要素

{{Specifications("html.elements.template")}}

### シャドウ DOM

{{Specifications("api.ShadowRoot")}}

## ブラウザーの互換性

一般に、

- ウェブコンポーネントは、Firefox (バージョン 63)、Chrome、Opera、Edge (バージョン 79) が既定で対応しています。
- Safari では、いくつかのウェブコンポーネントの機能に対応していますが、上記のブラウザーよりも限定的です。

特定の機能についてのブラウザーの対応状況は、上記のページを調べて下さい。

## 関連情報

- [Open Web Components](https://open-wc.org/) — Guides, tools and libraries for developing web components.
- [DataFormsJS](https://www.dataformsjs.com/) — Open source web components library — Set of Web Components that can be used to build Single Page Apps (SPA), Display JSON data from API's and Web Services, and bind data to different elements on screen. All Web Components are plain JavaScript and require no build process.
- [FAST](https://fast.design/) is a web component library built by Microsoft which offers several packages to leverage depending on your project needs. [Fast Element](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-element) is a lightweight means to easily build performant, memory-efficient, standards-compliant Web Components. [Fast Foundation](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-foundation) is a library of Web Component classes, templates, and other utilities built on fast-element intended to be composed into registered Web Components.
- [Hybrids](https://github.com/hybridsjs/hybrids) — Open source web components library, which favors plain objects and pure functions over `class` and `this` syntax. It provides a simple and functional API for creating custom elements.
- [Lit](https://lit.dev/) — Google's web components library, the core of which is a component base class designed to reduce boilerplate while providing reactive state, scoped styles, and a declarative template system.
- [Snuggsi](https://github.com/devpunks/snuggsi#readme) — Easy Web Components in \~1kB _Including polyfill_ — All you need is a browser and basic understanding of HTML, CSS, and JavaScript classes to be productive.
- [Slim.js](https://github.com/slimjs/slim.js) — Open source web components library — a high-performant library for rapid and easy component authoring; extensible and pluggable and cross-framework compatible.
- [Stencil](https://stenciljs.com/) — Toolchain for building reusable, scalable design systems in web components.
