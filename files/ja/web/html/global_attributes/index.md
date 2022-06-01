---
title: グローバル属性
slug: Web/HTML/Global_attributes
tags:
  - Attribute
  - HTML
  - リファレンス
  - ウェブ
translation_of: Web/HTML/Global_attributes
---
{{HTMLSidebar("Global_attributes")}}

**グローバル属性**は、すべての HTML 要素で共通の属性です。すべての要素で使用できますが、要素によっては効果がないこともあります。

グローバル属性は、_標準仕様で定義されていない要素を含む_、すべての [HTML 要素](/ja/docs/Web/HTML/Element)で指定することができます。つまり、その要素を使用することで文書が HTML5 に準拠しなくなるような標準外の要素であっても、これらの属性は受け入れなければなりません。例えば、 `<foo hidden>...</foo>` とマークアップされたコンテンツは、 `<foo>` が妥当な HTML 要素ではなくても、 HTML5 準拠のブラウザーは非表示にします。

基本的な HTML グローバル属性に加えて、以下のグローバル属性も存在します。

- {{HTMLAttrDef("xml:lang")}} と {{HTMLAttrDef("xml:base")}}。これらは XHTML 仕様から継承したもので非推奨ですが、互換性のために残されています。
- アクセシビリティを向上するために使用する、複数の **[`aria-*`](/ja/docs/Web/Accessibility/ARIA)** 属性。
- [イベントハンドラー](/ja/docs/Web/Events/Event_handlers)属性: **`onabort`**, **`onautocomplete`**, **`onautocompleteerror`**, **`onblur`**, **`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncontextmenu`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onsort`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**

## グローバル属性の一覧

- [{{HTMLAttrDef("accesskey")}}](/ja/docs/Web/HTML/Global_attributes/accesskey)
  - : 現在の要素に対するキーボードショートカットを生成するヒントを与えます。この属性の値は、空白区切りの文字のリストです。ブラウザーは、この文字リストの中から、コンピューターのキーボードレイアウトに存在する最初の文字を使用します。
- [{{HTMLAttrDef("autocapitalize")}}](/ja/docs/Web/HTML/Global_attributes/autocapitalize)

  - : ユーザーが入力／編集したとき、入力文字列の大文字化を自動的に行うか、どこを大文字化するかを制御します。以下の値を指定することができます。

    - `off` または `none`: 自動的な大文字化は行いません (すべての文字は小文字のままです)。
    - `on` または `sentences`: 各文の最初の文字を大文字にします。それ以外の文字は小文字のままです。
    - `words`:各単語の最初の文字を大文字にします。それ以外の文字は小文字のままです。
    - `characters`: すべての文字を大文字にします。

- [{{HTMLAttrDef("autofocus")}}](/ja/docs/Web/HTML/Global_attributes/autofocus)
  - : ページの読み込み時、またはその一部である {{HTMLElement("dialog")}} が表示された時点で、その要素がフォーカスされるようにすることを示す。この属性は論理値で、初期値は false です。
- [{{HTMLAttrDef("class")}}](/ja/docs/Web/HTML/Global_attributes/class)
  - : 要素のクラスの空白区切りリストです。 CSS の [クラスセレクター](/ja/docs/Web/CSS/Class_selectors) や JavaScript の {{DOMxRef("Document.getElementsByClassName()")}} メソッドのような関数を使えば、特定の要素を選択したりアクセスしたりすることができます。
- [{{HTMLAttrDef("contenteditable")}}](/ja/docs/Web/HTML/Global_attributes/contenteditable)

  - : ユーザーによる要素の編集が可能かどうかを示す列挙型属性です。編集可能な場合、ブラウザーはその要素を編集可能なものに変更します。この属性の値は、以下のどちらかでなければなりません。

    - `true` または _空文字列_: 要素が編集可能であることを示す
    - `false`: 要素は編集不可であることを示す

- [{{HTMLAttrDef("contextmenu")}}](/ja/docs/Web/HTML/Global_attributes/contextmenu) {{deprecated_inline}}
  - : その要素のコンテキストメニューとして使用する {{HTMLElement("menu")}} の [**`id`**](#attr-id) を指定します。
- [{{HTMLAttrDef("data-*")}}](/ja/docs/Web/HTML/Global_attributes/data-*)
  - : これらの属性はカスタムデータ属性と呼ばれており、 [HTML](/ja/docs/Web/HTML) とその {{glossary("DOM")}} 表現との間で、固有の情報を交換できるようにします。すべてのカスタムデータは、その属性を設定した要素の {{DOMxRef("HTMLElement")}} インターフェイスを通して使用することができます。 {{DOMxRef("HTMLElement.dataset")}} プロパティでカスタムデータにアクセスできます。
- [{{HTMLAttrDef("dir")}}](/ja/docs/Web/HTML/Global_attributes/dir)

  - : 要素のテキストの書字方向を示す、列挙型属性です。以下の値を使用することができます。

    - `ltr`: _left to right_ を表し、左書きの言語 (日本語、英語など) に対して使用します。
    - `rtl`: _right to left_ を表し、右書きの言語 (アラビア語など) に対して使用します。
    - `auto`: ユーザーエージェントに決定させます。要素の中の文字を、書字方向を強く決定する文字が見つかるまで解析し、その方向を要素全体に適用する基本的なアルゴリズムを使用します。

- [{{HTMLAttrDef("draggable")}}](/ja/docs/Web/HTML/Global_attributes/draggable)

  - : [Drag and Drop API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) を使用して要素をドラッグすることができるかを示す列挙型属性です。以下の値を使用することができます。

    - `true`: 要素がドラッグ可能であることを示す
    - `false`: 要素がドラッグ不可であることを示す

- [{{HTMLAttrDef("enterkeyhint")}}](/ja/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : 仮想キーボードの Enter キーにどのようなアクションラベル（またはアイコン）を表示するかを指示します。
- [{{HTMLAttrDef("exportparts")}}](/ja/docs/Web/HTML/Global_attributes/exportparts) {{Experimental_Inline}}
  - : シャドウ部品を入れ子になったシャドウツリーから軽いツリーへ変換しながらエクスポートするために使用します。
- [{{HTMLAttrDef("hidden")}}](/ja/docs/Web/HTML/Global_attributes/hidden)
  - : 要素はまだ、あるいはもはや関連性がないことを示す、論理属性です。例えば、ログイン処理が完了するまで使えない要素を隠すために使用できます。ブラウザーはこの要素を表示しません。この属性は、表示することが正当なコンテンツを隠すために使用してはいけません。
- [{{HTMLAttrDef("id")}}](/ja/docs/Web/HTML/Global_attributes/id)
  - : 文書全体で一意でなければならない識別子 (ID) を定義します。(フラグメント識別子を使った) リンク、スクリプト、 (CSS での) スタイルづけなど要素を特定するために使用されます。
- [{{HTMLAttrDef("inputmode")}}](/ja/docs/Web/HTML/Global_attributes/inputmode)
  - : この要素やその内容を編集する時に使用する仮想キーボードの種類の構成に関するヒントをブラウザーに与えます。主に {{HTMLElement("input")}} 要素で使用されますが、 {{HTMLAttrxRef("contenteditable")}} モードにあるすべての要素で使用することができます。
- [{{HTMLAttrDef("is")}}](/ja/docs/Web/HTML/Global_attributes/is)
  - : 標準の HTML 要素が、登録したカスタム組み込み要素のようにふるまうように指定することができます（詳しくは[カスタム要素の使用](/ja/docs/Web/Web_Components/Using_custom_elements)を参照）。

> **Note:** `item*` 属性は、 [WHATWG HTML Microdata feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata) の一部です。

- [{{HTMLAttrDef("itemid")}}](/ja/docs/Web/HTML/Global_attributes/itemid)
  - : 項目の一意でグローバルな識別子です。
- [{{HTMLAttrDef("itemprop")}}](/ja/docs/Web/HTML/Global_attributes/itemprop)
  - : 項目にプロパティを追加するために使用します。すべての HTML 要素で `itemprop` 属性を指定することができ、この `itemprop` は名前と値の組で構成されます。
- [{{HTMLAttrDef("itemref")}}](/ja/docs/Web/HTML/Global_attributes/itemref)
  - : `itemscope` 属性を持つ要素の子孫以外のプロパティは、 `itemref` を使用して項目に関連付けることができます。文書中の他の場所で追加のプロパティがある要素の id (`itemid` ではない) の一覧を提供します。
- [{{HTMLAttrDef("itemscope")}}](/ja/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` は (通常) {{htmlattrxref("itemtype")}} とともに、ブロックに含まれている HTML が特定の項目に関するものであることを指定します。 `itemscope` は項目を作成し、それに関連付けられる `itemtype` のスコープを定義します。 `itemtype` は、項目やそのプロパティの文脈を説明する語彙 ([schema.org](https://schema.org/) など) の有効な URL です。
- [{{HTMLAttrDef("itemtype")}}](/ja/docs/Web/HTML/Global_attributes/itemtype)
  - : データ構造内の `itemprop` （項目のプロパティ）を定義するために使う、語彙の URL を指定します。 {{HTMLAttrxRef("itemscope")}} は、 `itemtype` で設定した語彙がデータ構造内でアクティブになるスコープを設定するために使用します。
- [{{HTMLAttrDef("lang")}}](/ja/docs/Web/HTML/Global_attributes/lang)
  - : 要素の言語を定義します。編集不可能な要素を記述している言語、または編集可能な要素に記述されるべき言語を定義します。この属性の値は、 {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} で定義された形式の「言語タグ」（ハイフン区切りの「言語サブタグ」列）です。[**xml:lang**](#attr-xml:lang) はこの要素より優先します。
- [{{HTMLAttrDef("nonce")}}](/ja/docs/Web/HTML/Global_attributes/nonce)
  - : 暗号化ノンス ("number user once") で、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)が取得を許可するかどうかを決定するために使用することがあります。
- [{{HTMLAttrDef("part")}}](/ja/docs/Web/HTML/Global_attributes/part)
  - : 要素のパート名の空白区切りによるリストです。パート名を利用すると、 CSS がシャドウツリー内にある特定の要素を {{CSSxRef("::part")}} 擬似要素を使用することで選択し、スタイル付けすることができます。
- [{{HTMLAttrDef("slot")}}](/ja/docs/Web/HTML/Global_attributes/slot)
  - : [shadow DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) のシャドウツリー内のスロットを、要素に割り当てます。`slot` 属性を持つ要素は、`slot` 属性の値と一致する {{htmlattrxref("name", "slot")}} 属性の値を持つ {{HTMLElement("slot")}} 要素が生成したスロットに割り当てられます。
- [{{HTMLAttrDef("spellcheck")}}](/ja/docs/Web/HTML/Global_attributes/spellcheck)

  - : 列挙型属性で、要素でスペルチェックを行うかどうかを定義します。以下の値が利用できます。

    - `true`: 可能であればその要素でスペルチェックを行うことを示す
    - `false`: その要素でスペルチェックを行わないことを示す

- [{{HTMLAttrDef("style")}}](/ja/docs/Web/HTML/Global_attributes/style)
  - : 要素に適用する [CSS](/ja/docs/Web/CSS) スタイル宣言を設定します。なお、スタイルは別のファイルで定義することが推奨されます。この属性と {{HTMLElement("style")}} 要素の主な用途は、例えばテストのために、すばやくスタイルを適用することです。
- [{{HTMLAttrDef("tabindex")}}](/ja/docs/Web/HTML/Global_attributes/tabindex)

  - : 要素が入力フォーカスを受け付ける (_focusable_ の) 場合に、順番的なキーボードナビゲーションに参加するかどうか、参加するならばどの位置に入るかを示す、整数値属性です。いくつかの値を取ることができます。

    - _負の数_: 要素はフォーカスを受け付けますが、順番的なキーボードナビゲーションでは到達できません。
    - `0`: 要素はフォーカスを受け付けて、順番的なキーボードナビゲーションで到達できます。その順番はプラットフォームの慣習に従って定義されます。
    - _正の数_: 要素はフォーカスを受け付けて、順番的なキーボードナビゲーションで到達できることを表します。その相対的な順序は属性の値で定義され、 [**tabindex**](#attr-tabindex) の数値の昇順にフォーカスを移します。複数の要素が同じ tabindex の値を持っている場合は、文書内における要素の相対的な位置に従います。

- [{{HTMLAttrDef("title")}}](/ja/docs/Web/HTML/Global_attributes/title)
  - : 要素に関するアドバイザリー情報を表すテキストを設定します。この情報は通常、ツールチップとしてユーザーに表示されますが、必ず表示されるとは限りません。
- [{{HTMLAttrDef("translate")}}](/ja/docs/Web/HTML/Global_attributes/translate) {{Experimental_Inline}}

  - : 列挙型属性で、要素の属性値や子孫 {{DOMxRef("Text")}} ノードの値が、ページをローカライズするときに翻訳対象となるか、あるいは変更せずにおくかを指定します。以下の値を使用することができます。

    - 空文字列または `yes`: 要素が翻訳対象になることを示します。
    - `no`: 要素が翻訳対象にならないことを示します。

## 仕様書

| Specification                                                                  |
| ------------------------------------------------------------------------------ |
| {{SpecName("HTML WHATWG", "dom.html#global-attributes", "Global attributes")}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element")}} および {{DOMxRef("GlobalEventHandlers")}} インターフェイスで、ほとんどのグローバル属性を調べることができます。
