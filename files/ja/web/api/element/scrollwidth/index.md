---
title: "Element: scrollWidth プロパティ"
short-title: scrollWidth
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Element.scrollWidth`** は読み取り専用のプロパティで、あふれたために画面に表示されない部分を含めた、要素の中身の幅の寸法です。

`scrollWidth` の値は、水平スクロールバーを使用せずにすべてのコンテンツをビューポート内に合わせるために要素が必要とする最小幅に等しくなります。幅は {{domxref("Element.clientWidth", "clientWidth")}} と同じ方法で定めます。要素のパディングは含みますが、境界線、マージン、 (もしあれば) 垂直スクロールバーは含みません。これには {{cssxref("::before")}} または {{cssxref("::after")}} のような疑似要素の幅を含むことがあります。要素の内容が水平スクロールバーが必要なく合うのであれば、 `scrollWidth` は {{domxref("Element.clientWidth", "clientWidth")}} と等しくなります。

> **メモ:** このプロパティは値を整数値に丸めます。小数値が必要であれば、 {{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 値

文字列です。

## 例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Example</title>
    <style>
      div {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #aDiv {
        width: 100px;
      }

      button {
        margin-bottom: 2em;
      }
    </style>
  </head>

  <body>
    <div id="aDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="aButton">Check for overflow</button>

    <div id="anotherDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="anotherButton">Check for overflow</button>
  </body>
  <script>
    const buttonOne = document.getElementById("aButton");
    const buttonTwo = document.getElementById("anotherButton");
    const divOne = document.getElementById("aDiv");
    const divTwo = document.getElementById("anotherDiv");

    //check to determine if an overflow is happening
    function isOverflowing(element) {
      return element.scrollWidth > element.offsetWidth;
    }

    function alertOverflow(element) {
      if (isOverflowing(element)) {
        alert("Contents are overflowing the container.");
      } else {
        alert("No overflows!");
      }
    }

    buttonOne.addEventListener("click", () => {
      alertOverflow(divOne);
    });

    buttonTwo.addEventListener("click", () => {
      alertOverflow(divTwo);
    });
  </script>
</html>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
