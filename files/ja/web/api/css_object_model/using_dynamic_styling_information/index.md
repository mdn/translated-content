---
title: 動的なスタイル情報の利用
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{DefaultAPISidebar("CSSOM")}}

DOM の一部である CSS Object Model (CSSOM) では、 CSS に関する様々な情報を操作するインターフェイスを公開しています。これらは _DOM Level 2 Style_ 勧告で定義されたのち、現在ではそれを置き換える _CSS Object Model (CSSOM)_ で規格化されています。

多くの場面で、可能であれば {{ domxref("element.className", "className") }} プロパティを使ってクラスを操作することが推奨されます。最終的なスタイルをひとつのスタイルシートで制御できる上、JavaScript コードはスタイルの詳細を気にすることなく、正確な詳細はスタイルシートに任せたまま、作成・操作する各セクションの全体的な意味づけに注目できます。しかしながら（スタイルシート全体もしくはある要素についての）個々のルールを操作する方が便利なこともあり、以下でさらに詳しく説明します。なおスタイルシートを操作するといっても物理的な文書を操作するわけではなく、要素の DOM スタイルのような内部表現を操作しているだけということに注意してください。

基本となる `style` オブジェクトは {{domxref("Stylesheet")}} インターフェイスと {{domxref("CSSStylesheet")}} インターフェイスを公開しています。これらのインターフェイスが備える `insertRule`, `selectorText`, `parentStyleSheet` などのメンバーを使うことで、CSS スタイルシートを構成する個々のスタイルにアクセス・操作できます。

`document` から `style` オブジェクトの集合を取得するには {{domxref("document.styleSheets")}} プロパティを使い、インデックスを付けることで個々のオブジェクトにアクセスできます (ドキュメント内の最初のスタイルシートなら `document.styleSheets[0]` といった具合に)。

## CSSOM を使ってスタイルシートを変更する

```html
<html lang="en">
  <head>
    <title>Modifying a stylesheet rule with CSSOM</title>
    <style>
      body {
        background-color: red;
      }
    </style>
    <script>
      const stylesheet = document.styleSheets[0];
      stylesheet.cssRules[0].style.backgroundColor = "aqua";
    </script>
  </head>
  <body>
    body の背景色に対するスタイルシートを JavaScript で変更しています。
  </body>
</html>
```

### 結果

{{EmbedGHLiveSample("css-examples/cssom/modify-rule.html", '100%', 120)}}

DOM の `style` プロパティで利用可能なプロパティの一覧は [DOM CSS プロパティリスト](/ja/docs/Web/CSS/Reference) に載っています。

CSS の構文を使って文書のスタイルを変更したい場合は、ルールを追加するか、`innerHTML` に CSS を設定した {{HTMLElement("style")}} を挿入してください。

## 要素のスタイルを変更する

要素の {{domxref("HTMLElement.style", "style")}} プロパティ（後述する "DOM Style オブジェクト" も参照）を使って個々の要素のスタイルを取得または設定することもできます。ただしこのプロパティはインラインに指定された style 属性しか考慮しません。つまり `<td style="background-color: lightblue">` であれば "`background-color:lightblue`" という文字列、もしくは `element.style.propertyName` を通してこのスタイルにアクセスできますが、スタイルシートで定義された他のスタイルの存在は考慮されません。

また要素のこのプロパティの設定値は、よそでこの要素に定義されたスタイルよりも優先されます。 例えばここで `border` プロパティを設定した場合、 その要素に対して head 部や外部のスタイルシートで定義されていた `border` プロパティの指定を上書きすることになります。しかし、その要素に適用される他のプロパティ、 padding や margin や font などには影響を与えません。

具体的な要素のスタイルを変更するには、スタイル設定したい要素に対して以下の例を適用します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>simple style example</title>

    <script>
      function alterStyle(elem) {
        elem.style.background = "green";
      }

      function resetStyle(elemId) {
        const elem = document.getElementById(elemId);
        elem.style.background = "white";
      }
    </script>
    <style>
      #p1 {
        border: solid blue 2px;
      }
    </style>
  </head>

  <body>
    <!-- スタイルを変える要素のオブジェクトとして 'this' を渡す -->
    <p id="p1" onclick="alterStyle(this);">クリックして背景色を変更</p>

    <!-- スタイルを変える要素の ID 'p1' を渡す -->
    <button onclick="resetStyle('p1');">背景色をリセット</button>
  </body>
</html>
```

{{ EmbedLiveSample('Modify_an_elements_style') }}

`document.defaultView` オブジェクトの {{domxref("window.getComputedStyle", "getComputedStyle()")}} メソッドは、その要素に対して計算された全てのスタイルを返します。

## DOM スタイルオブジェクト

`style` オブジェクトは、個々のスタイル設定を表します。スタイルオブジェクトは `document` からも、そのスタイルが適用される要素からもアクセスすることができます。これは、具体的な要素の*インライン*スタイルを表します。
オブジェクトは独立したスタイル指定です。

### style プロパティの設定

この記事で例示した CSS プロパティに限らず、 `style` オブジェクトを通して要素のスタイルを個別に操作できるという点が重要です。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Style Property Example</title>
    <link rel="StyleSheet" href="example.css" />
    <script>
      function setStyle() {
        document.getElementById("d").style.color = "orange";
      }
      function resetStyle() {
        document.getElementById("d").style.color = "black";
      }
    </script>
  </head>

  <body>
    <div id="d" class="thunder">Thunder</div>
    <button onclick="setStyle()">テキストの色を変える</button>
    <button onclick="resetStyle()">テキストの色を元に戻す</button>
  </body>
</html>
```

{{ EmbedLiveSample('Setting_style_properties') }}

スタイルの **media** や **type** は存在しないこともあります。

### setAttribute メソッドの利用

なお、要素のスタイルを変更するには、その要素の参照を取得し、その要素の [`setAttribute`](/ja/docs/Web/API/Element/setAttribute) メソッドを使用してCSSプロパティとその値を指定することも可能です。

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

`setAttribute` を使うと要素の `style` オブジェクトで定義されていた既存の `style` プロパティの指定は全て失われることに注意が必要です。もし上の例に使った `some-element` 要素の `style` 属性がインラインで `style="font-size: 18px"` のように指定されていた場合、この指定は `setAttribute` を使うことで失われます。
