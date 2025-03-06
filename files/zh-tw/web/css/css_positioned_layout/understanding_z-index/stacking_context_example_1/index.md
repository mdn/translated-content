---
title: Stacking context example 1
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
---

{{CSSRef}}

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

> [!NOTE]
> DIV＃1 和＃DIV 3 不適透亮。重要的是要記住，分配的不透明度小於 1 到定位的元素隱式創建一個疊加的背景下，就像一個加入的 z-index 值是非常重要的。這個例子顯示，當父元素不會創建一個堆疊環境會發生什麼。

## 範例

### HTML

```html
<div id="div1">
  <br /><span class="bold">DIV #1</span> <br />position: relative;
  <div id="div2">
    <br /><span class="bold">DIV #2</span> <br />position: absolute;
    <br />z-index: 1;
  </div>
</div>

<br />

<div id="div3">
  <br /><span class="bold">DIV #3</span> <br />position: relative;
  <div id="div4">
    <br /><span class="bold">DIV #4</span> <br />position: absolute;
    <br />z-index: 2;
  </div>
</div>
```

### CSS

```css
.bold {
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
}

#div1,
#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}

#div4 {
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 80px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}
```

## 結果

{{ EmbedLiveSample('範例', '', '300') }}

### 參見

- [無堆疊的 z-index](/zh-TW/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index)：默認規則疊加
- [堆疊和浮動](/zh-TW/docs/CSS/Understanding_z-index/Stacking_floating_elements)：如何浮動元素的處理方式
- [添加 z-index](/zh-TW/docs/CSS/Understanding_z-index/Using_z-index)：使用的 z-index 來改變默認的堆疊
- [堆疊背景](/zh-TW/docs/CSS/Understanding_z-index/Stacking_context)：在堆疊環境票據
- [堆疊環境例子 2](/zh-TW/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2)：在所有層面上 2 級 HTML 層次，Z 指數
- [堆疊上下文例 3](/zh-TW/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3)：3 級的 HTML 等級，在第二級上的 z 索引
