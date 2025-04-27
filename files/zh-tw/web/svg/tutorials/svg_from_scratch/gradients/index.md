---
title: 漸層
slug: Web/SVG/Tutorials/SVG_from_scratch/Gradients
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}

除了基本的 fill 和 stroke 之外，我們還有一個更令人興奮的功能：給邊框和填充設置漸層。

漸層的類型有兩種，線形漸層和放射形漸層。線形漸層沿直線變化，在 defs 元素裡創建一個 {{SVGElement('linearGradient')}} 元素，就創建了一個線形漸層。漸變**必須**有一個 `id` 屬性，否則它不能被其他元素引用，等於白做了。

## 線形漸層

Linear gradients change along a straight line. To insert one, you create a {{SVGElement('linearGradient')}} node inside the definitions section of your SVG file.

### 基本範例

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop class="stop1" offset="0%" />
      <stop class="stop2" offset="50%" />
      <stop class="stop3" offset="100%" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <style>
      <![CDATA[
              #rect1 { fill: url(#Gradient1); }
              .stop1 { stop-color: red; }
              .stop2 { stop-color: black; stop-opacity: 0; }
              .stop3 { stop-color: blue; }
            ]]>
    </style>
  </defs>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient2)" />
</svg>
```

{{ EmbedLiveSample('線形漸層','120','280') }}

在上面的例子裡，一個線形漸層被用在`<rect>`元素上，線形漸層內部有若干 {{SVGElement('stop')}} 節點，它們用來指定漸變應該在什麼位置形成什麼顏色，其中兩個屬性分別是：定義偏移位置的`offset`屬性和定義顏色的`stop-color`屬性。另外，它們可以直接設置，或通過 CSS 設置。上面的例子裡混合使用了這兩種形式。比如，這個例子的漸變是從紅色開始，到中間漸變成黑色，最後漸變到藍色。你可以按照自己的想法設置各種`stop-color`，但是它們的 offset 必須是從 0%逐漸提高到 100%。（如果不加%，就是 0-1）。如果有重複的值，不會被分配到 xml 樹的最後。另外像 fill 和 stroke 一樣，你也可以設置一個`stop-opacity`屬性表示透明度。 （ff3 裡這裡也可以用 rgba 值）

```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

使用漸變時，我們需要在對象的 fill 或 stroke 屬性裡引用它。就像在 CSS 里通過`url`來引用其他元素一樣，在這裡，url 引用的是我們給漸變設置的 id，所以只需要將 fill 屬性設置成`url(#Gradient)`，我們的對象就可以呈現出五彩斑斕的效果。另外你也可以給 stroke 進行同樣的設置。

`<linearGradient>`元素還可以設置其他一些屬性，用來定義尺寸和样 式。比如漸變的方向是由兩個點控制的，它們用`x1`， `x2`，`y1`，`y2`四個屬性控制，形成一條直線，漸變就沿這條直線變化。漸變默認的方向是水平方向，使用這些屬性就可以改變方向。上面例子裡的 Gradient2 就是一個垂直的漸變。

```xml
 <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
```

> [!NOTE]
> 你也可以在漸變中使用`xlink:href`屬性，它可以將一個漸變的屬性和 stop 節點，引入到另一個漸變中。在下面的例子裡，我們就不需要在 Gradient2 裡重新創建許多 stop 節點。
>
> ```xml
>  <linearGradient id="Gradient1">
>    <stop id="stop1" offset="0%"/>
>    <stop id="stop2" offset="50%"/>
>    <stop id="stop3" offset="100%"/>
>  </linearGradient>
>  <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"
>     xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Gradient1"/>
> ```
>
> 這裡我直接在元素裡定義了 xlink 的命名空間，通常我們會在文檔的頂部定義它。在 [talk about images](/zh-TW/docs/Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG) 有更多相關內容。

## 放射形漸層

放射形漸層很類似線形漸層，只不過是從一個點向外發散漸變。在文檔的 defs 段落裡增加一個 {{SVGElement('radialGradient')}} 元素，就可以創建放射形漸層。

### 基本範例

```html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="RadialGradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient2)" />
</svg>
```

{{ EmbedLiveSample('基本範例_2','120','280') }}

這個例子的里，放射形漸層中的 stop 節點在用法上和前面的線形漸層一樣，但是這裡的圖形對像是中間呈紅色，然後向各個方向發散漸變，直到邊緣漸變到藍色。放射形漸層`<radialGradient>`也有若干用來定義位置和方向的屬性，不過與線形漸層不同，這裡的設置會稍微複雜一點。放射形漸層裡也可以設置兩個點，用來確定它的範圍。第一個點用來定義一個環，限定漸變的範圍。該點包括坐標屬性`cx`和`cy`，以及半徑屬性`r`。定義這三個屬性，就可以改變漸變的位置和大小，就像上面例子裡的第二個漸變效果。

第二個點被稱為焦點，通過坐標屬性`fx`和`fy`來確定。第一個點決定的是漸變所處的範圍，而焦點則決定漸變的中心。看例子更好理解：

### 中心和焦點

```html
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ EmbedLiveSample('中心和焦點','120','160') }}

如果焦點被移動到漸變範圍之外，漸變不可能被正確渲染，所以會被重定義到範圍的邊緣。如果不定義焦點，則默認與漸變範圍的中點是同一點。

兩種漸變都可以通過一些屬性，定義諸如變形等樣式。在這裡僅提其中一個：`spreadMethod`屬性。當漸變已經到達範圍邊緣，但圖形對像還沒被完全填充時，這一屬性 將決定接下來會發生什麼。它有三個可用值，"pad", "reflect", 以及 "repeat"。 "pad"的效果你已經看到過了，當漸變到達範圍邊緣，最後一個顏色將用來填充圖形剩下的區域。 "reflect"是繼續漸變，但是會從 100%處的顏色漸變會 0%的位置，然後再翻過來繼續。 "Repeat"也是讓漸變繼續，不過是跳過返回的過程，直接回到起始狀態，然後重新漸變。

### spreadMethod

```html
<?xml version="1.0" standalone="no"?>

<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="GradientPad"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="pad">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientRepeat"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="repeat">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientReflect"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="reflect">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientPad)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientRepeat)" />
  <rect
    x="120"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientReflect)" />

  <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">
    Pad
  </text>
  <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Repeat
  </text>
  <text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Reflect
  </text>
</svg>
```

{{ EmbedLiveSample('spreadMethod','220','260') }}

另外，兩個漸變都有一個名為`gradientUnits`的屬性，它用來決定漸變的單位。它有兩個可用值：`userSpaceOnUse` or `objectBoundingBox`。 `objectBoundingBox`是默認值，表示漸變會使用圖形對象的單位，所以你定義坐標時使用的是 0 到 1，它們會自動計算成你的圖形對象使用的尺寸。 `userSpaceOnUse`表示要用絕對單位，所以你必須知道你的圖形對象的位置，然後將漸變的位置放在那兒。於是放射形漸層可以這樣寫：

```html
<radialGradient
  id="Gradient"
  cx="60"
  cy="60"
  r="50"
  fx="35"
  fy="35"
  gradientUnits="userSpaceOnUse"></radialGradient>
```

你還可以使用`gradientTransform`屬性創建其他類型的變換，但現在我們還沒說到[introduced transforms](/zh-TW/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations)，所以這些內容會留到後面再講。

當圖形對象的不是方形時，還有一個需要注意的處理方式：`gradientUnits="objectBoundingBox"`。但是它太複雜了，需要其他專家來講解。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes", "Web/SVG/Tutorials/SVG_from_scratch/Patterns") }}
