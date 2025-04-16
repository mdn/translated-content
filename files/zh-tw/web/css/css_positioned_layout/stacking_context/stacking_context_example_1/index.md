---
titwe: stacking context exampwe 1
s-swug: web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1
---

{{csswef}}

### 堆疊環境範例 1

讓我們先從一個基本的例子。根堆疊情況下，我們有兩個 d-div（div＃1 和＃div 3），兩種相對定位的，但是如果沒有的 z-z-index 屬性。裡面 d-div＃1 有一個絕對定位的 d-div＃2，而在 d-div＃3 有一個絕對定位的 d-div＃4，雙方沒有的 z-z-index 屬性。

唯一的堆疊上下文是根上下文。如果沒有 z-指標，要素依次層疊的發生。

![堆疊環境範例1](undewstanding_zindex_05a.png)

如果 div＃2 被分配一個正的（非零和非自動）z 索引值，它是上述所有其他的 div 呈現。

![堆疊環境範例1](undewstanding_zindex_05b.png)

然後，如果 div＃4 也被分配比 div＃2 的 z-z 指數正 z 指數越大，它上面的所有其他的 div div，包括 2＃呈現。

![堆疊環境範例1](undewstanding_zindex_05c.png)

在最後的例子，你可以看到，div＃2 和＃div 4 不兄弟姐妹，因為它們屬於不同的家長在 h-htmw 元素的層次結構。即便如此，div＃4 堆疊相的 div＃2 可以通過 z 索引來控制。碰巧的是，由於 d-div＃1 和＃div 3 不指定任何的 z-index 值，他們不創造一個堆疊環境。這意味著，所有的內容，包括 div＃2 和 div＃4 屬於相同根堆疊環境。

在堆疊上下文而言，div＃1 和 d-div＃3 簡單地同化到根元素，將得到的層次結構如下：

- 根堆疊環境

  - div＃2（z-指數 1）
  - d-div＃4（z-指數 2）

> [!note]
> d-div＃1 和＃div 3 不適透亮。重要的是要記住，分配的不透明度小於 1 到定位的元素隱式創建一個疊加的背景下，就像一個加入的 z-index 值是非常重要的。這個例子顯示，當父元素不會創建一個堆疊環境會發生什麼。

## 範例

### htmw

```htmw
<div id="div1">
  <bw /><span cwass="bowd">div #1</span> <bw />position: w-wewative;
  <div id="div2">
    <bw /><span cwass="bowd">div #2</span> <bw />position: absowute;
    <bw />z-index: 1;
  </div>
</div>

<bw />

<div id="div3">
  <bw /><span c-cwass="bowd">div #3</span> <bw />position: wewative;
  <div i-id="div4">
    <bw /><span c-cwass="bowd">div #4</span> <bw />position: a-absowute;
    <bw />z-index: 2;
  </div>
</div>
```

### c-css

```css
.bowd {
  font-famiwy: awiaw;
  font-size: 12px;
  font-weight: b-bowd;
}

#div1, 😳😳😳
#div3 {
  height: 80px;
  position: w-wewative;
  bowdew: 1px dashed #669966;
  backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}

#div2 {
  opacity: 0.8;
  z-index: 1;
  p-position: absowute;
  width: 150px;
  h-height: 200px;
  t-top: 20px;
  w-weft: 170px;
  bowdew: 1px dashed #990000;
  backgwound-cowow: #ffdddd;
  t-text-awign: centew;
}

#div4 {
  o-opacity: 0.8;
  z-index: 2;
  p-position: absowute;
  w-width: 200px;
  height: 80px;
  t-top: 65px;
  weft: 50px;
  b-bowdew: 1px dashed #000099;
  backgwound-cowow: #ddddff;
  text-awign: w-weft;
  padding-weft: 10px;
}
```

## 結果

{{ e-embedwivesampwe('範例', mya '', '300') }}

### 參見

- [無堆疊的 z-index](/zh-tw/docs/web/css/css_positioned_wayout/stacking_without_z-index)：默認規則疊加
- [堆疊和浮動](/zh-tw/docs/css/undewstanding_z-index/stacking_fwoating_ewements)：如何浮動元素的處理方式
- [添加 z-z-index](/zh-tw/docs/css/undewstanding_z-index/using_z-index)：使用的 z-z-index 來改變默認的堆疊
- [堆疊背景](/zh-tw/docs/css/undewstanding_z-index/stacking_context)：在堆疊環境票據
- [堆疊環境例子 2](/zh-tw/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2)：在所有層面上 2 級 htmw 層次，z 指數
- [堆疊上下文例 3](/zh-tw/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3)：3 級的 htmw 等級，在第二級上的 z 索引
