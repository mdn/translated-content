---
title: DOM を使用したウェブと XML の開発の例
slug: Web/API/Document_Object_Model/Examples
---

{{DefaultAPISidebar("DOM")}}

この章では、DOM を利用したウェブと XML 開発のより長い例をいくつか紹介します。可能な限りこれらの例ではドキュメントオブジェクトを操作する上でよく用いられる API や技法や JavaScript のパターンを利用しています。

## 例 1: 高さと幅

以下の例は、様々な寸法の画像について、`height` と `width` プロパティを使用しています。

```html
<!doctype html>
<html lang="en">
  <head>
    <title>width/height example</title>
    <script>
      function init() {
        var arrImages = new Array(3);

        arrImages[0] = document.getElementById("image1");
        arrImages[1] = document.getElementById("image2");
        arrImages[2] = document.getElementById("image3");

        var objOutput = document.getElementById("output");
        var strHtml = "<ul>";

        for (var i = 0; i < arrImages.length; i++) {
          strHtml +=
            "<li>image" +
            (i + 1) +
            ": height=" +
            arrImages[i].height +
            ", width=" +
            arrImages[i].width +
            ", style.height=" +
            arrImages[i].style.height +
            ", style.width=" +
            arrImages[i].style.width +
            "<\/li>";
        }

        strHtml += "<\/ul>";

        objOutput.innerHTML = strHtml;
      }
    </script>
  </head>
  <body onload="init();">
    <p>
      Image 1: no height, width, or style
      <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif" />
    </p>

    <p>
      Image 2: height="50", width="500", but no style
      <img
        id="image2"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        height="50"
        width="500" />
    </p>

    <p>
      Image 3: no height, width, but style="height: 50px; width: 500px;"
      <img
        id="image3"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        style="height: 50px; width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</html>
```

## 例 2: 画像の属性

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Modifying an image border</title>

    <script>
      function setBorderWidth(width) {
        document.getElementById("img1").style.borderWidth = width + "px";
      }
    </script>
  </head>

  <body>
    <p>
      <img
        id="img1"
        src="image1.gif"
        style="border: 5px solid green;"
        width="100"
        height="100"
        alt="border test" />
    </p>

    <form name="FormName">
      <input
        type="button"
        value="Make border 20px-wide"
        onclick="setBorderWidth(20);" />
      <input
        type="button"
        value="Make border 5px-wide"
        onclick="setBorderWidth(5);" />
    </form>
  </body>
</html>
```

## 例 3: スタイルの操作

この簡単な例では、HTML の段落要素のいくつかの基本的なスタイルプロパティに、要素上のスタイルオブジェクトと、DOM から取得したり設定したりできるそのオブジェクトの CSS スタイルプロパティを使ってアクセスしています。この例では、個々のスタイルを直接操作しています。次の例 (例 4 参照) では、スタイルシートとそのルールを使って、文書全体のスタイルを変更することができます。

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Changing color and font-size example</title>

    <script>
      function changeText() {
        var p = document.getElementById("pid");

        p.style.color = "blue";
        p.style.fontSize = "18pt";
      }
    </script>
  </head>
  <body>
    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">
      linker
    </p>

    <form>
      <p><input value="rec" type="button" onclick="changeText();" /></p>
    </form>
  </body>
</html>
```

## 例 4: スタイルシートの使用

{{domxref("document")}} オブジェクト上の {{domxref("document.styleSheets", "styleSheets")}} プロパティは、その文書に読み込まれたスタイルシートの一覧を返します。このページの例に示されているように、stylesheet、style、{{domxref("CSSRule")}} オブジェクトを利用して、これらのスタイルシートとその規則に個別にアクセスが可能です。そしてこの例では、すべてのスタイル規則のセレクターがコンソールへ表示されます。

```js
var ss = document.styleSheets;

for (var i = 0; i < ss.length; i++) {
  for (var j = 0; j < ss[i].cssRules.length; j++) {
    dump(ss[i].cssRules[j].selectorText + "\n");
  }
}
```

以下の 3 つの規則が定義される単一のスタイルシートが附属されているドキュメント用に対して、

```css
body {
  background-color: darkblue;
}
p {
  font-face: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

このスクリプトは以下の項目を表示します。

```
BODY
P
#LUMPY
```

## 例 5: イベント伝播 (propagation)

この例は DOM でイベントが発生したときの対処方法を、ごく単純化して紹介します。下記の HTML 文書の BODY が読み込まれる時、イベントリスナーが TABLE の第 1 行を使って登録されます。イベントリスナーは関数 stopEvent を実行することでイベントを処理します。この関数は、table の一番下のセルの値を変更します。

しかし、stopEvent はまたイベントオブジェクトのメソッド {{domxref("event.stopPropagation")}} を呼び出します。このメソッドはイベントが発生してこれ以上 DOM に入り込むのを防止します。テーブル自体は、クリックされた時、メッセージを表示する必要のある {{domxref("GlobalEventHandlers.onclick","onclick")}} イベントハンドラーを備えています。しかし stopEvent メソッドは伝播を停止していますので、テーブル内のデータが更新された後では、イベントは効率的に終了し、これを確認するための警告ダイアログが表示されます。

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Event Propagation</title>

    <style>
      #t-daddy {
        border: 1px solid red;
      }
      #c1 {
        background-color: pink;
      }
    </style>

    <script>
      function stopEvent(ev) {
        c2 = document.getElementById("c2");
        c2.innerHTML = "hello";

        // this ought to keep t-daddy from getting the click.
        ev.stopPropagation();
        alert("event propagation halted.");
      }

      function load() {
        elem = document.getElementById("tbl1");
        elem.addEventListener("click", stopEvent, false);
      }
    </script>
  </head>

  <body onload="load();">
    <table id="t-daddy" onclick="alert('hi');">
      <tr id="tbl1">
        <td id="c1">one</td>
      </tr>
      <tr>
        <td id="c2">two</td>
      </tr>
    </table>
  </body>
</html>
```

## 例 6: getComputedStyle

この例は、{{domxref("window.getComputedStyle")}} メソッドを使用して要素の `style` 属性あるいは JavaScript (例: `elt.style.backgroundColor="rgb(173, 216, 230)"`) で設定されていないスタイルを取得する方法を示します。後者の種類のスタイルは、もっと直接的な {{domxref("HTMLElement.style", "elt.style")}} プロパティを使って取得でき、そのプロパティは [DOM CSS プロパティ一覧](/ja/docs/Web/CSS/Reference)に挙げられています。

`getComputedStyle()` は {{domxref("CSSStyleDeclaration")}} オブジェクトを返し、下記のサンプルにあるように、このオブジェクトの {{domxref("CSSStyleDeclaration.getPropertyValue()", "getPropertyValue()")}} メソッドによって個々のスタイルプロパティを参照できます。

```html
<!doctype html>
<html lang="en">
  <head>
    <title>getComputedStyle example</title>

    <script>
      function cStyles() {
        var RefDiv = document.getElementById("d1");
        var txtHeight = document.getElementById("t1");
        var h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");

        txtHeight.value = h_style;

        var txtWidth = document.getElementById("t2");
        var w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");

        txtWidth.value = w_style;

        var txtBackgroundColor = document.getElementById("t3");
        var b_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("background-color");

        txtBackgroundColor.value = b_style;
      }
    </script>

    <style>
      #d1 {
        margin-left: 10px;
        background-color: rgb(173, 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </style>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <form action="">
      <p>
        <button type="button" onclick="cStyles();">getComputedStyle</button>
        height<input id="t1" type="text" value="1" /> max-width<input
          id="t2"
          type="text"
          value="2" />
        bg-color<input id="t3" type="text" value="3" />
      </p>
    </form>
  </body>
</html>
```

## 例 7: イベントオブジェクトのプロパティの表示

この例では、DOM メソッドを使って、 {{domxref("GlobalEventHandlers.onload")}} [イベント](/ja/docs/Web/API/Event)オブジェクトのプロパティとそれらの値をすべて表として表示しています。また、オブジェクトのプロパティを反復し、それらの値を取得するために、for...in ループを使った役に立つテクニックをお見せします。

イベントオブジェクトのプロパティはブラウザーによって大きく異なります。 [WHATWG DOM Standard](https://dom.spec.whatwg.org) に標準のプロパティが載っていますが、多くのブラウザーはこれらを大幅に拡張しています。

以下のコードをテキストファイルとして保存し、様々なブラウザーで読み込ませてみてください。プロパティの数や名称が異なることに驚かれることでしょう。ページにいくつか要素を追加して、異なるイベントハンドラーからこの関数を呼び出してみるのも良いでしょう。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Show Event properties</title>

    <style>
      table {
        border-collapse: collapse;
      }
      thead {
        font-weight: bold;
      }
      td {
        padding: 2px 10px 2px 10px;
      }

      .odd {
        background-color: #efdfef;
      }
      .even {
        background-color: #ffffff;
      }
    </style>

    <script>
      function showEventProperties(e) {
        function addCell(row, text) {
          var cell = row.insertCell(-1);
          cell.appendChild(document.createTextNode(text));
        }

        var e = e || window.event;
        document.getElementById("eventType").innerHTML = e.type;

        var table = document.createElement("table");
        var thead = table.createTHead();
        var row = thead.insertRow(-1);
        var labelList = ["#", "Property", "Value"];
        var len = labelList.length;

        for (var i = 0; i < len; i++) {
          addCell(row, labelList[i]);
        }

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (var p in e) {
          row = tbody.insertRow(-1);
          row.className = row.rowIndex % 2 ? "odd" : "even";
          addCell(row, row.rowIndex);
          addCell(row, p);
          addCell(row, e[p]);
        }

        document.body.appendChild(table);
      }

      window.onload = function (event) {
        showEventProperties(event);
      };
    </script>
  </head>

  <body>
    <h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
  </body>
</html>
```

## 例 8: DOM のテーブルインタフェースの使用

DOM の {{domxref("HTMLTableElement")}} インタフェースで、テーブルを生成、操作するための便利なメソッドがいくつか提供されています。よく利用される 2 つのメソッドは {{domxref("HTMLTableElement.insertRow")}} と {{domxref("HTMLTableRowElement.insertCell")}} です。

以下の例では、既存のテーブルに行といくつかのセルを追加しています。

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>

<script>
  var table = document.getElementById("table0");
  var row = table.insertRow(-1);
  var cell, text;

  for (var i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Row " + row.rowIndex + " Cell " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

### メモ

- テーブルの {{domxref("element.innerHTML","innerHTML")}} プロパティは、テーブル全体あるいはセルの内容を記述するために使うことはできますが、テーブルを操作するために使うべきではありません。
- DOM Core メソッドの {{domxref("document.createElement")}} と {{domxref("Node.appendChild")}} を使って行とセルを生成する場合、他のブラウザーでは table 要素に直接追加できる (行は最後の {{HTMLElement("tbody")}} 要素に追加される) のに対して、IE ではそれらを `<tbody>` 要素に対して追加する必要があります。
- [`HTMLTableElement` インターフェイス](/ja/docs/Web/API/HTMLTableElement#methods)には、この他にも、テーブルを生成したり操作するのに利用できる多くの便利なメソッドがあります。
