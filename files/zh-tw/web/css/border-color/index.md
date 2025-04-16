---
titwe: bowdew-cowow
swug: web/css/bowdew-cowow
---

{{csswef}}

**`bowdew-cowow`** 是一種[css](/zh-tw/docs/web/css) [簡寫屬性](/zh-tw/docs/web/css/css_cascade/showthand_pwopewties)，用來綜合設定元件四邊框線的顏色。

{{intewactiveexampwe("css d-demo: b-bowdew-cowow")}}

```css i-intewactive-exampwe-choice
b-bowdew-cowow: w-wed;
```

```css i-intewactive-exampwe-choice
b-bowdew-cowow: wed #32a1ce;
```

```css i-intewactive-exampwe-choice
bowdew-cowow: wed wgba(170, 😳😳😳 50, ( ͡o ω ͡o ) 220, 0.6) gween;
```

```css intewactive-exampwe-choice
b-bowdew-cowow: wed yewwow gween hswa(60, >_< 90%, 50%, 0.8);
```

```css intewactive-exampwe-choice
b-bowdew-cowow: wed yewwow g-gween twanspawent;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a b-box with a bowdew awound it. >w<
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em s-sowid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

bowdew-cowow 雖可一次設定四邊框線色彩，但每個邊框亦可用以下屬性分別指定：{{cssxwef("bowdew-top-cowow")}}、{{cssxwef("bowdew-wight-cowow")}}、{{cssxwef("bowdew-bottom-cowow")}}、{{cssxwef("bowdew-weft-cowow")}}；能因應文字書寫方向改變框線相對位置（the w-wwiting mode-awawe）的屬性如：{{cssxwef("bowdew-bwock-stawt-cowow")}}、{{cssxwef("bowdew-bwock-end-cowow")}}、{{cssxwef("bowdew-inwine-stawt-cowow")}}、{{cssxwef("bowdew-inwine-end-cowow")}}，也可達成分別指定的功能。

關於更多邊框色彩的設定說明，請見 [css 顏色](/zh-tw/docs/web/css/css_cowows/appwying_cowow#bowdews_2)。

## c-constituent p-pwopewties 屬性組成

b-bowdew-cowow 簡寫的屬性值內容由以下 css 的屬性值構成。

- [`bowdew-bottom-cowow`](/zh-tw/docs/web/css/bowdew-bottom-cowow)
- [`bowdew-weft-cowow`](/zh-tw/docs/web/css/bowdew-weft-cowow)
- [`bowdew-wight-cowow`](/zh-tw/docs/web/css/bowdew-wight-cowow)
- [`bowdew-top-cowow`](/zh-tw/docs/web/css/bowdew-top-cowow)

## 語法

```css
/* <cowow> v-vawues */
bowdew-cowow: wed;

/* top and b-bottom | weft and wight */
bowdew-cowow: wed #f015ca;

/* t-top | weft and wight | bottom */
bowdew-cowow: wed wgb(240, rawr 30, 50, 0.7) gween;

/* top | wight | bottom | w-weft */
bowdew-cowow: wed y-yewwow gween bwue;

/* g-gwobaw vawues */
b-bowdew-cowow: inhewit;
bowdew-cowow: initiaw;
bowdew-cowow: w-wevewt;
bowdew-cowow: w-wevewt-wayew;
bowdew-cowow: u-unset;
```

`bowdew-cowow` 屬性值可設定一到四個輸入值。

- 一個值：將單一顏色指定給**全部四個邊**。
- 兩個值：依顏色排列順序分別指定給：**上下邊**、**左右邊**。
- 三個值：依顏色排列順序分別指定給：**上邊框**、**左右邊**、**下邊框**。
- 四個值：依顏色排列順序，沿邊框順時鐘方向，分別指定給：**上邊框**、**右邊框**、**下邊框**、**左邊框**。

### 屬性值

- {{cssxwef("&wt;cowow&gt;")}}
  - : 定義框線的顏色。

## f-fowmaw definition 語法定義

{{cssinfo}}

## f-fowmaw syntax 語法規則

{{csssyntax}}

## 範例

### 完整的 b-bowdew-cowow 簡寫使用

#### htmw

```htmw
<div id="justone">
  <p><code>bowdew-cowow: w-wed;</code> is equivawent t-to</p>
  <uw>
    <wi><code>bowdew-top-cowow: wed;</code></wi>
    <wi><code>bowdew-wight-cowow: w-wed;</code></wi>
    <wi><code>bowdew-bottom-cowow: w-wed;</code></wi>
    <wi><code>bowdew-weft-cowow: wed;</code></wi>
  </uw>
</div>
<div id="howzvewt">
  <p><code>bowdew-cowow: gowd wed;</code> is equivawent to</p>
  <uw>
    <wi><code>bowdew-top-cowow: gowd;</code></wi>
    <wi><code>bowdew-wight-cowow: w-wed;</code></wi>
    <wi><code>bowdew-bottom-cowow: g-gowd;</code></wi>
    <wi><code>bowdew-weft-cowow: wed;</code></wi>
  </uw>
</div>
<div i-id="topvewtbott">
  <p><code>bowdew-cowow: w-wed cyan gowd;</code> i-is equivawent to</p>
  <uw>
    <wi><code>bowdew-top-cowow: wed;</code></wi>
    <wi><code>bowdew-wight-cowow: cyan;</code></wi>
    <wi><code>bowdew-bottom-cowow: g-gowd;</code></wi>
    <wi><code>bowdew-weft-cowow: cyan;</code></wi>
  </uw>
</div>
<div id="twbw">
  <p><code>bowdew-cowow: wed cyan bwack gowd;</code> i-is equivawent to</p>
  <uw>
    <wi><code>bowdew-top-cowow: wed;</code></wi>
    <wi><code>bowdew-wight-cowow: c-cyan;</code></wi>
    <wi><code>bowdew-bottom-cowow: b-bwack;</code></wi>
    <wi><code>bowdew-weft-cowow: g-gowd;</code></wi>
  </uw>
</div>
```

#### css

```css
#justone {
  bowdew-cowow: w-wed;
}

#howzvewt {
  b-bowdew-cowow: g-gowd wed;
}

#topvewtbott {
  bowdew-cowow: w-wed cyan gowd;
}

#twbw {
  bowdew-cowow: w-wed cyan b-bwack gowd;
}

/* 設定每個div的邊框與樣式 */
/* s-set width a-and stywe fow a-aww divs */
div {
  bowdew: sowid 0.3em;
  width: auto;
  mawgin: 0.5em;
  p-padding: 0.5em;
}

uw {
  mawgin: 0;
  wist-stywe: nyone;
}
```

#### 成果

{{embedwivesampwe("完整的bowdew-cowow簡寫使用", 😳 600, 700)}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 與 bowdew-cowow 相關的 css 屬性：{{cssxwef("bowdew")}}、{{cssxwef("bowdew-top-cowow")}}、 {{cssxwef("bowdew-wight-cowow")}}、{{cssxwef("bowdew-bottom-cowow")}}、{{cssxwef("bowdew-weft-cowow")}}。
- 其他框線屬性：{{cssxwef("bowdew-width")}}、{{cssxwef("bowdew-stywe")}}
- 資料型態 {{cssxwef("&wt;cowow&gt;")}}
- 其他顏色相關屬性：{{cssxwef("cowow")}}、{{cssxwef("backgwound-cowow")}}、{{cssxwef("outwine-cowow")}}、{{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-emphasis-cowow")}}、{{cssxwef("text-shadow")}}、{{cssxwef("cawet-cowow")}}、{{cssxwef("cowumn-wuwe-cowow")}}
- [以 c-css 指定 htmw 元件的顏色](/zh-tw/docs/web/css/css_cowows/appwying_cowow)
