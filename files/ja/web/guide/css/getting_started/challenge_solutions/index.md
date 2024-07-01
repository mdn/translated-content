---
title: Challenge solutions
slug: Web/Guide/CSS/Getting_started/Challenge_solutions
---

このページは、 [CSS Getting Started](/ja/CSS/Getting_Started) チュートリアルにあるチャレンジの解答例です。これ以外の解答も考えられます。以下の章名はチュートリアルページのタイトルと一致します。

## CSS をなぜ用いるか

### Colors

- Challenge
  - : Without looking up a reference, find five more color names that work in your stylesheet.
- Solution
  - : CSS supports common color names like `orange`, `yellow`, `blue`, `green`, or `black`. It also supports some more exotic color names like `chartreuse`, `fuschia`, or `burlywood`. See [CSS Color value](/ja/CSS/color_value) for a complete list as well as other ways of specifying colors.

## どのように CSS は動作するのか

### DOM inspector

- Challenge
  - : In DOMi, click on a STRONG node. Use DOMi's right-hand pane to find out where the node's color is set to red, and where its appearance is made bolder than normal text.
- Solution
  - : In the menu above the right-hand pane, choose **CSS Rules**. You see two items listed, one that references an internal resource and one that references your stylesheet file. The internal resource defines the **font-weight** property as `bolder`; your stylesheet defines the **color** property as `red`.

## 接続と継承

### Inherited styles

- Challenge
  - : Change your stylesheet so that only the red letters are underlined.
- Solution

  - : Move the declaration for underlining from the rule for {{ HTMLElement("p") }} to the one for {{ HTMLElement("strong") }}. The resulting file looks like this:

    ```css
    p {
      color: blue;
    }
    strong {
      color: orange;
      text-decoration: underline;
    }
    ```

Later sections of this tutorial describe style rules and declarations in greater detail.

## セレクター

### Second paragraph blue

- Challenge
  - : Without changing your HTML file, add a single rule to your CSS file that keeps all the initial letters the same color as they are now, but makes all the other text in the second paragraph blue.
- Solution

  - : Add a rule with an ID selector of `#second` and a declaration `color: blue;`, as shown below:

    ```css
    #second {
      color: blue;
    }
    ```

    A more specific selector, `p#second` also works.

### Both paragraphs blue

- Challenge
  - : Now change the rule you have just added (without changing anything else), to make the first paragraph blue too.
- Solution

  - : Change the selector of the new rule to be a tag selector using `p`:

    ```css
    p {
      color: blue;
    }
    ```

The rules for the other colors all have more specific selectors, so they override the blue of the paragraph.

## 読みやすい CSS

### Commenting out a rule

- Challenge
  - : Comment out part of your stylesheet, without changing anything else, to make the very first letter of your document red.
- Solution

  - : One way to do this is to put comment delimiters around the rule for `.carrot`:

    ```css
    /*
    .carrot {
      color: orange;
    }
    */
    ```

## 文章のスタイル

### Big initial letters

- Challenge
  - : Without changing anything else, make all six initial letters twice the size in the browser's default serif font.
- Solution

  - : Add the following style declaration to the `strong` rule:

    ```css
    font: 200% serif;
    ```

    If you use separate declarations for `font-size` and `font-family`, then the `font-style` setting on the first paragraph is _not_ overridden.

## 色

### Three-digit color codes

- Challenge
  - : In your CSS file, change all the color names to 3-digit color codes without affecting the result.
- Solution

  - : The following values are reasonable approximations of the named colors:

    ```css
    strong {
      color: #f00; /* red */
      background-color: #ddf; /* pale blue */
      font: 200% serif;
    }

    .carrot {
      color: #fa0; /* orange */
    }

    .spinach {
      color: #080; /* dark green */
    }

    p {
      color: #00f; /* blue */
    }
    ```

## コンテンツ

### 画像の追加

- チャレンジ
  - : 各行の初めに画像を表示するように、スタイルシートに一つルールを追加してください。
- 解答

  - : 次のルールをスタイルシートに追加します:

    ```css
    p:before {
      content: url("yellow-pin.png");
    }
    ```

## リスト

### 小文字のローマ数字

- チャレンジ
  - : スタイルシートに一つルールを追加して、リスト項目に i から v のローマ数字で番号をつけてください。
- 解答

  - : `lower-roman` のリストスタイルを使って、リスト項目に一つルールを定義します:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### 大文字

- チャレンジ
  - : 見出しを括弧内の大文字のアルファベットで識別するように、スタイルシートを変更してください。
- 解答

  - : body 要素（見出しの親要素）にはカウンターをリセットするルールを、見出しにはカウンターを表示し増加させるルールを追加します:

    ```css
    /* numbered headings */
    body {
      counter-reset: headnum;
    }
    h3:before {
      content: "(" counter(headnum, upper-latin) ") ";
      counter-increment: headnum;
    }
    ```

## ボックス

### 海の境界線

- チャレンジ
  - : スタイルシートに一つルールを追加して、リスト項目全体を囲むような広い枠を作り、海を連想するような色にしてください。
- 解答

  - : 次のルールでこの効果を出せます:

    ```css
    ul {
      border: 10px solid lightblue;
    }
    ```

## レイアウト

### デフォルトの画像位置

- チャレンジ
  - : サンプル文書 `doc2.html` を編集し、次のタグを文書の末尾近く、`</BODY>` のすぐ前に追加します: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">` 画像がどこに現れるか、推測してみてください。それからブラウザを更新して、正しかったかどうかを確認してください。
- 解答
  - : 画像は 2 番めのリストの右側に現れます。
    ![pin_placement.png](pin_placement.png)

### 画像位置の固定化

- チャレンジ
  - : スタイルシートにルールを追加して、文書の右上に画像を置くようにしてください。
- 解答

  - : 次のルールでできます:

    ```
    #fixed-pin  {
      position:fixed;
      top: 3px;
      right: 3px;
    }
    ```

## 表

### Borders on data cells only

- Challenge
  - : Change the stylesheet to make the table have a green border around only the data cells.
- Solution

  - : The following rule puts borders around only {{ HTMLElement("td") }} elements that are inside the {{ HTMLElement("tbody") }} element of the table with `id=demo-table`:

    ```
    #demo-table tbody td {
      border:1px solid #7a7;
    }
    ```

## メディア

### Separate print style file

- Challenge
  - : Move the print-specific style rules to a separate CSS file and import them into your `style4.css` stylesheet.
- Solution

  - : Cut and paste the lines between `/* print only */` and `/* end print only */` into a file named `style4_print.css`. In style4.css, add the following line at the beginning of the file:

    ```
    @import url("style4_print.css") print;
    ```

### Heading hover color

- Challenge
  - : Make the headings turn blue when the mouse pointer is over them.
- Solution

  - : The following rule achieves the desired result:

    ```
    h1:hover {
      color: blue;
    }
    ```

## JavaScript

### Move box to the right

- Challenge
  - : Change the script so that the square jumps to the right by 20 em when its color changes, and jumps back afterwards.
- Solution

  - : Add lines to modify the `margin-left` property. Be sure to specify it as `marginLeft` in JavaScript. The following script achieves the desired result:

    ```css
    // JavaScript demonstration
    function doDemo (button) {
      var square = document.getElementById("square");
      square.style.backgroundColor = "#fa4";
      square.style.marginLeft = "20em";
      button.setAttribute("disabled", "true");
      setTimeout(clearDemo, 2000, button);
    }

    function clearDemo (button) {
      var square = document.getElementById("square");
      square.style.backgroundColor = "transparent";
      square.style.marginLeft = "0em";
      button.removeAttribute("disabled");
    }
    ```
