---
title: Stacking context example 1
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1
---

{{CSSRef}}

« [CSS](/zh-TW/CSS) « [理解 CSS 的 z-index](/zh-TW/CSS/Understanding_z-index)

### 堆疊環境範例 1

讓我們先從一個基本的例子。根堆疊情況下，我們有兩個 div（DIV＃1 和＃DIV 3），兩種相對定位的，但是如果沒有的 z-index 屬性。裡面 DIV＃1 有一個絕對定位的 div＃2，而在 DIV＃3 有一個絕對定位的 div＃4，雙方沒有的 z-index 屬性。

唯一的堆疊上下文是根上下文。如果沒有 Z-指標，要素依次層疊的發生。

![堆疊環境範例1](understanding_zindex_05a.png)

如果 DIV＃2 被分配一個正的（非零和非自動）z 索引值，它是上述所有其他的 DIV 呈現。

![堆疊環境範例1](understanding_zindex_05b.png)

然後，如果 DIV＃4 也被分配比 DIV＃2 的 Z 指數正 z 指數越大，它上面的所有其他的 DIV DIV，包括 2＃呈現。

![堆疊環境範例1](understanding_zindex_05c.png)

在最後的例子，你可以看到，DIV＃2 和＃DIV 4 不兄弟姐妹，因為它們屬於不同的家長在 HTML 元素的層次結構。即便如此，DIV＃4 堆疊相的 DIV＃2 可以通過 z 索引來控制。碰巧的是，由於 DIV＃1 和＃DIV 3 不指定任何的 z-index 值，他們不創造一個堆疊環境。這意味著，所有的內容，包括 DIV＃2 和 DIV＃4 屬於相同根堆疊環境。

在堆疊上下文而言，DIV＃1 和 DIV＃3 簡單地同化到根元素，將得到的層次結構如下：

- 根堆疊環境

  - DIV＃2（Z-指數 1）
  - DIV＃4（Z-指數 2）

> **備註：** DIV＃1 和＃DIV 3 不適透亮。重要的是要記住，分配的不透明度小於 1 到定位的元素隱式創建一個疊加的背景下，就像一個加入的 z-index 值是非常重要的。這個例子顯示，當父元素不會創建一個堆疊環境會發生什麼。

### 示例源代碼

```html
<！DOCTYPE HTML PUBLIC“ -  // W3C // DTD XHTML 1.0過渡// EN”
“http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<HTML>
<HEAD> <風格類型=“文本/ CSS”>

DIV {字體：12px的宋體; }

span.bold {字體重量：大膽的; }

＃DIV1，＃{DIV3
   高度：80px;
   位置：親屬;
   邊界：1px的虛線＃669966;
   背景色：#ccffcc;
   填充左：5px的;
}

＃{DIV2
   不透明度：0.8;
   的z-index：1;
   位置：絕對的;
   寬度：150像素;
   高度：200像素;
   頂：20像素;
   左：170px;
   邊界：1px的虛線＃990000;
   背景色：#ffdddd;
   文本對齊：中心;
}

＃{DIV4
   不透明度：0.8;
   的z-index：2;
   位置：絕對的;
   寬度：200像素;
   高度：70px;
   頂部：65px;
   左：50像素;
   邊界：1px的虛線＃000099;
   背景色：#ddddff;
   文本對齊：左;
   填充左：10px的;
}


</風格> </ HEAD>

<BODY>

<br />

<DIV ID =“DIV1”>
<br />的<span class =“黑體”> DIV＃1 </ SPAN>
<br />位置：親屬;
   <DIV ID =“DIV2”>
   <br />的<span class =“黑體”> DIV＃2 </ SPAN>
   <br />位置：絕對的;
   <br />的z-index：1;
   </ DIV>
</ DIV>

<br />

<DIV ID =“DIV3”>
<br />的<span class =“黑體”> DIV＃3 </ SPAN>
<br />位置：親屬;
   <DIV ID =“DIV4”>
   <br />的<span class =“黑體”> DIV＃4 </ SPAN>
   <br />位置：絕對的;
   <br />的z-index：2;
   </ DIV>
</ DIV>

</ BODY> </ HTML>
```

### 另請參見

- [無堆疊的 z-index](/zh-TW/CSS/Understanding_z-index/Stacking_without_z-index) ：默認規則疊加
- [堆疊和浮動](/zh-TW/CSS/Understanding_z-index/Stacking_and_float) ：如何浮動元素的處理方式
- [添加的 z-index](/zh-TW/CSS/Understanding_z-index/Adding_z-index) ：使用的 z-index 來改變默認的堆疊
- [堆疊背景](/zh-TW/CSS/Understanding_z-index/The_stacking_context) ：在堆疊環境票據
- [堆疊環境例子 2](/zh-TW/CSS/Understanding_z-index/Stacking_context_example_2) ：在所有層面上 2 級 HTML 層次，Z 指數
- [堆疊上下文例 3](/zh-TW/CSS/Understanding_z-index/Stacking_context_example_3) ：3 級的 HTML 等級，在第二級上的 z 索引
