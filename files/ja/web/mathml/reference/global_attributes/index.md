---
title: MathML のグローバル属性
short-title: グローバル属性
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

**グローバル属性**は、すべての MathML 要素で共通の属性です。これらはすべての要素に使用することができますが、一部の要素には効果がないことがあります。

グローバル属性はすべての [MathML 要素](/ja/docs/Web/MathML/Reference/Element)に指定することができます。すなわち、たとえそれらの要素を使用することが、その文書が MathML に準拠しなくなったとしても、標準外の要素はこれらの属性を許可しなければなりません。

基本的な MathML のグローバル属性に加え、以下のグローバル属性も存在します。

- [イベントハンドラー](/ja/docs/Web/API/Document_Object_Model/Events#イベントハンドラーの登録)属性、例えば **`onclick`**、**`onfocus`**、など。
- [`href`](/ja/docs/Web/MathML/Global_attributes/href) 属性、 MathML 要素をハイパーリンクにします。

## グローバル属性の一覧

- [`autofocus`](/ja/docs/Web/MathML/Reference/Global_attributes/autofocus)
  - : 論理属性で、この要素がページ読み込み時にフォーカスされるべきであることを示します。
- [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class)
  - : 要素のクラスの空白区切りのリスト。クラスによって、CSS や JavaScript は[クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)や、 {{DOMxRef("Document.getElementsByClassName()")}} メソッドのような関数を通して、特定の要素を選択してアクセスすることができます。
- [`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : [MathML](/ja/docs/Web/MathML) と {{glossary("DOM")}} 表現との間でスクリプトが使用する独自の情報を交換することができるようにする、カスタムデータ属性と呼ばれる属性のクラスを形成します。このようなカスタムデータはすべて、属性が設定されている要素の {{DOMxRef("MathMLElement")}} インターフェイスを通して利用できます。 {{DOMxRef("HTMLElement.dataset")}}プロパティは、それらにアクセスします。
- [`dir`](/ja/docs/Web/MathML/Global_attributes/dir)
  - : MathML 要素の書字方向を示す[列挙](/ja/docs/Glossary/Enumerated)属性。取ることができるのは以下の値です。
    - `ltr` は _left to right_ を意味しており、左から右へ数式を表示するために使用します（例：イギリスやモロッコスタイル）
    - `rtl` は _right to left_ を意味しており、右から左に数式を表示するために使用します（例：マグレブやマッハレックスタイル）
- [`displaystyle`](/ja/docs/Web/MathML/Global_attributes/displaystyle):
  - : 論理値で、要素の [math-style](/ja/docs/Web/CSS/Reference/Properties/math-style) を設定します。
    - `true`: `normal` を意味します。
    - `false`: `compact` を意味します。
- [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id)
  - : 文書内で固有の識別子 (ID) を定義します。その目的は、（フラグメント識別子を使用して）リンクしたり、スクリプトを実行したり、（CSS を使用して）スタイル設定したりするときに要素を識別することです。
- [`mathbackground`](/ja/docs/Web/MathML/Global_attributes/mathbackground)
  - : 要素の[背景色](/ja/docs/Web/CSS/Reference/Properties/background-color)です。
- [`mathcolor`](/ja/docs/Web/MathML/Global_attributes/mathcolor)
  - : 要素の[色](/ja/docs/Web/CSS/Reference/Properties/color)です。
- [`mathsize`](/ja/docs/Web/MathML/Global_attributes/mathsize)
  - : 要素の [font-size](/ja/docs/Web/CSS/Reference/Properties/font-size) として使用される [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) です。
- [`nonce`](/ja/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : [コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)が指定されたフェッチを許可するかどうかを決定するために使用できる暗号化ノンス（「一度だけ使用する番号」）です。
- [`scriptlevel`](/ja/docs/Web/MathML/Global_attributes/scriptlevel)
  - : 要素の [math-depth](/ja/docs/Web/CSS/Reference/Properties/math-depth) を指定します。受け入れられる値と地図は [scriptlevel ページ](/ja/docs/Web/MathML/Global_attributes/scriptlevel#values)を参照してください。
- [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style)
  - : 要素に適用する[CSS](/ja/docs/Web/CSS)スタイル設定を格納します。スタイルは別個のファイルで定義することを推奨します。この属性と {{MathMLElement("style")}} 要素の主な目的は、例えばテストのため、すばやくスタイル設定ができるようにすることです。
- [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : 要素が入力フォーカスを受け取ることができるかどうか（_focusable_ であるかどうか）、順次キーボードナビゲーションに参加するかどうか、参加する場合はどの位置かを示す整数属性です。いくつかの値を取ることができます。
    - _負の値_ は、その要素がフォーカス可能であるべきであるが、キーボードナビゲーションによって順次到達可能であってはならないことを意味しています。
    - `0` はその要素がフォーカス可能で、キーボードナビゲーションで順次到達可能であることを意味しますが、その相対的な順序はプラットフォームの規約によって定義されます。
    - _正の値_ は、要素がフォーカス可能で、順次キーボードナビゲーションで到達可能であることを意味します。要素がフォーカスされる順序は、 [**tabindex**](#tabindex) の増加値です。複数の要素が同じ tabindex を共有する場合、それらの相対順序は文書内の相対位置に従います。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element")}} インターフェイスで、ほとんどのグローバル属性を問い合わせることができます。
