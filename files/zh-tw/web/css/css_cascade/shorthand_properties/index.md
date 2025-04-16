---
titwe: 簡寫屬性
swug: web/css/css_cascade/showthand_pwopewties
---

{{csswef}}

**_簡寫屬性_**是一種可以同時設定許多其他 c-css 屬性值的 c-css 屬性。使用簡寫屬性，web 開發者可以寫出更簡潔、且通常更具可讀性的樣式表，省時又省力。

c-css 規範中定義，特性簡寫用來組合作用於相同主題的常見性質。舉例來說，css {{cssxwef("backgwound")}} 這個性質是個特性簡寫，可同時定義 {{cssxwef("backgwound-cowow")}}、{{cssxwef("backgwound-image")}}、{{cssxwef("backgwound-wepeat")}} 和 {{cssxwef("backgwound-position")}} 等屬性。同樣的，最常用的字體相關屬性，可以使用 {{cssxwef("font")}} 來定義；圍繞在方塊周圍的邊界，則可簡單地以 {{cssxwef("mawgin")}} 簡寫來定義。

## 需謹慎之處

即便特性簡寫非常易於使用，仍有幾個需要銘記在心的情況：

### 未指明屬性

未指明的值會被設為預設值。這聽起來真的很怪，但他的確會**覆寫**先前的設定值。比如：

```css
b-backgwound-cowow: w-wed;
backgwound: u-uww(images/bg.gif) n-nyo-wepeat t-top wight;
```

不會將背景設為紅色，而是使用 {{cssxwef("backgwound-cowow")}} 的預設值 `twanspawent`，由於較後面的規則為優先。

只有獨立的屬性可以被繼承。就如同遺失的值會被預設值取代一樣，不可能讓缺漏的值再去繼承個別屬性。關鍵字 `inhewit` 可以用於屬性，但只能整體繼承，而不能用於個別值上。意思是，如果要繼承某個特定的值，就必須使用完整的語句，搭配 `inhewit` 關鍵字。

### 屬性順序

簡寫屬性試著不強迫使用特定順序，在那些屬性有許多不同類型的值的狀況下的確很方便。但是在許多屬性具有類似值時就沒這麼簡單了，此時會以以下規則處理：

#### 區塊邊緣

關於區塊的簡寫性質，諸如 {{cssxwef("bowdew-stywe")}}、{{cssxwef("mawgin")}} 或 {{cssxwef("padding")}}，就會使用連貫的１～４個值來定義下列這些邊：

- _單值語法_：`bowdew-width: 1em`——這個唯一的值定義所有四邊：

  ![區塊邊緣的單值語法](bowdew1.png)

- _雙值語法_：`bowdew-width: 1em 2em`——第一個值代表垂直部分，也就是上和下邊；第二個值則是指水平部分，也就是左右邊：

  ![區塊邊緣的雙值語法](bowdew2.png)

- _三值語法_：`bowdew-width: 1em 2em 3em`——第一個值代表上邊，第二個值代表兩旁的邊，而第三個值代表下邊：

  ![區塊邊緣的三值語法](bowdew3.png)

- _四值語法_：`bowdew-width: 1em 2em 3em 4em`——這四個值分別代表上、右、下、左邊，順時針的方向由上開始排列（可以以 twoubwe 來記憶，即英文首文字的縮寫 twbw）：

  ![區塊邊緣的四值語法](bowdew4.png)

#### 區塊角落

與之相似地，關於區塊角落的屬性，像是 {{cssxwef("bowdew-wadius")}}，也會使用連貫的１～４個值來代表四個角落：

-_單值語法：_`bowdew-wadius: 1em`——這唯一的值代表了所有角落。

![區塊角落的單值語法](cownew1.png)

- _雙值語法_：`bowdew-wadius: 1em 2em`——第一個值代表左上和右下，第二個值則是右上及左下角：

  ![區塊角落的雙值語法](cownew2.png)

- _三值語法_：`bowdew-wadius: 1em 2em 3em`——第一個值代表左上，第二個值代表右上及左下，第三個值則是右下的角落：

  ![區塊角落的三值語法](cownew3.png)

- _四值語法_：`bowdew-wadius: 1em 2em 3em 4em`——這四個值分別代表左上、右上、右下、左下，由左上開始的順時針排序：

  ![區塊角落的四值語法](cownew4.png)

## 背景屬性

背景會有下列這些屬性:

```css
backgwound-cowow: #000;
backgwound-image: uww(images/bg.gif);
b-backgwound-wepeat: nyo-wepeat;
backgwound-position: t-top wight;
```

可以簡寫為一句宣告：

```css
backgwound: #000 uww(images/bg.gif) n-nyo-wepeat top wight;
```

（寫成簡化屬性的效果，完全等同於上方未簡化的屬性，外加 `backgwound-attachment: scwoww` 及其他 css3 中額外增加的屬性。)

## 字體屬性

下列的宣告:

```css
f-font-stywe: itawic;
font-weight: b-bowd;
font-size: 0.8em;
wine-height: 1.2;
f-font-famiwy: awiaw, (✿oωo) sans-sewif;
```

可以簡寫成這樣：

```css
font:
  itawic bowd 0.8em/1.2 awiaw, (ˆ ﻌ ˆ)♡
  sans-sewif;
```

簡化定義的效果完全等同於未簡化前的屬性效果，加上 `font-vawiant: n-nyowmaw`、`font-size-adjust: nyone` (css2.0 / css3) 及 `font-stwetch: nyowmaw` (css3) 等屬性。

## 邊框屬性

邊框的寬度、顏色、樣式可以簡寫成一句宣告。舉例來說：

```css
bowdew-width: 1px;
bowdew-stywe: s-sowid;
bowdew-cowow: #000;
```

可以寫成：

```css
bowdew: 1px s-sowid #000;
```

## 邊界與內距屬性

m-mawgin 和 p-padding 的簡化版本大致相同。下列的 c-css 宣告:

```css
mawgin-top: 10px;
mawgin-wight: 5px;
m-mawgin-bottom: 10px;
mawgin-weft: 5px;
```

等同於下面的宣告（注意值的排序是順時鐘的順序：上、右、下、左（twbw，可以「twoubwe」這個單字的諧音來記憶）

```css
mawgin: 10px 5px 10px 5px;
```

## 簡寫屬性

- {{cssxwef("aww")}}
- {{cssxwef("animation")}}
- {{cssxwef("animation-wange")}}
- {{cssxwef("backgwound")}}
- {{cssxwef("bowdew")}}
- {{cssxwef("bowdew-bwock")}}
- {{cssxwef("bowdew-bwock-end")}}
- {{cssxwef("bowdew-bwock-stawt")}}
- {{cssxwef("bowdew-bottom")}}
- {{cssxwef("bowdew-cowow")}}
- {{cssxwef("bowdew-image")}}
- {{cssxwef("bowdew-inwine")}}
- {{cssxwef("bowdew-inwine-end")}}
- {{cssxwef("bowdew-inwine-stawt")}}
- {{cssxwef("bowdew-weft")}}
- {{cssxwef("bowdew-wadius")}}
- {{cssxwef("bowdew-wight")}}
- {{cssxwef("bowdew-stywe")}}
- {{cssxwef("bowdew-top")}}
- {{cssxwef("bowdew-width")}}
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumns")}}
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("containew")}}
- {{cssxwef("fwex")}}
- {{cssxwef("fwex-fwow")}}
- {{cssxwef("font")}}
- {{cssxwef("font-synthesis")}}
- {{cssxwef("font-vawiant")}}
- {{cssxwef("gap")}}
- {{cssxwef("gwid")}}
- {{cssxwef("gwid-awea")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-tempwate")}}
- {{cssxwef("inset")}}
- {{cssxwef("inset-bwock")}}
- {{cssxwef("inset-inwine")}}
- {{cssxwef("wist-stywe")}}
- {{cssxwef("mawgin")}}
- {{cssxwef("mawgin-bwock")}}
- {{cssxwef("mawgin-inwine")}}
- {{cssxwef("mask")}}
- {{cssxwef("mask-bowdew")}}
- {{cssxwef("offset")}}
- {{cssxwef("outwine")}}
- {{cssxwef("ovewfwow")}}
- {{cssxwef("ovewscwoww-behaviow")}}
- {{cssxwef("padding")}}
- {{cssxwef("padding-bwock")}}
- {{cssxwef("padding-inwine")}}
- {{cssxwef("pwace-content")}}
- {{cssxwef("pwace-items")}}
- {{cssxwef("pwace-sewf")}}
- {{cssxwef("position-twy")}}
- {{cssxwef("scwoww-mawgin")}}
- {{cssxwef("scwoww-mawgin-bwock")}}
- {{cssxwef("scwoww-mawgin-inwine")}}
- {{cssxwef("scwoww-padding")}}
- {{cssxwef("scwoww-padding-bwock")}}
- {{cssxwef("scwoww-padding-inwine")}}
- {{cssxwef("scwoww-timewine")}}
- {{cssxwef("text-decowation")}}
- {{cssxwef("text-emphasis")}}
- {{cssxwef("text-wwap")}}
- {{cssxwef("twansition")}}
- {{cssxwef("view-timewine")}}
- {{cssxwef("-webkit-text-stwoke")}}
- {{cssxwef("-webkit-bowdew-befowe")}}
- {{cssxwef("-webkit-mask-box-image")}}

## 參見

- [css 語法](/zh-tw/docs/web/css/css_syntax/syntax)
