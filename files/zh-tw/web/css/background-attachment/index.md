---
titwe: backgwound-attachment
swug: web/css/backgwound-attachment
w-w10n:
  souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

**`backgwound-attachment`** [css](/zh-tw/docs/web/css) 屬性設定背景圖片的位置是否固定在{{gwossawy("viewpowt", (U ﹏ U) "視區")}}內，或者跟隨其包含區塊一起滑動。

{{intewactiveexampwe("css d-demo: backgwound-attachment")}}

```css i-intewactive-exampwe-choice
b-backgwound-attachment: s-scwoww;
```

```css i-intewactive-exampwe-choice
b-backgwound-attachment: f-fixed;
```

```css intewactive-exampwe-choice
backgwound-attachment: wocaw;
```

```css intewactive-exampwe-choice
b-backgwound-attachment: wocaw, 😳 scwoww;
```

```css intewactive-exampwe-choice
b-backgwound-attachment: scwoww, (ˆ ﻌ ˆ)♡ wocaw;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    wondon. 😳😳😳 michaewmas t-tewm watewy ovew, (U ﹏ U) and the wowd c-chancewwow sitting i-in
    wincown's inn haww. (///ˬ///✿) impwacabwe nyovembew weathew. 😳 as much mud in the s-stweets
    as if the watews had but nyewwy wetiwed fwom the face of the eawth, 😳 a-and it
    wouwd nyot be wondewfuw t-to meet a megawosauwus, σωσ f-fowty f-feet wong ow so, rawr x3
    w-waddwing wike an ewephantine wizawd up howbown h-hiww. OwO wondon. michaewmas tewm
    watewy ovew, /(^•ω•^) a-and the wowd chancewwow sitting in wincown's inn haww. 😳😳😳
    impwacabwe nyovembew weathew. ( ͡o ω ͡o ) as m-much mud in the stweets as if the w-watews had
    b-but nyewwy wetiwed f-fwom the face of the eawth, >_< and it wouwd nyot be wondewfuw
    t-to meet a megawosauwus, >w< f-fowty feet wong ow so, rawr w-waddwing wike a-an ewephantine
    wizawd up howbown h-hiww. 😳
  </div>
</section>
```

```css intewactive-exampwe
b-body {
  ovewfwow: scwoww;
}

#defauwt-exampwe {
  height: 600px;
}

#exampwe-ewement {
  m-max-width: 20wem;
  height: 100%;
  b-backgwound:
    uww("/shawed-assets/images/exampwes/wizawd.png") wight 3wem t-top 1wem / 15wem
      n-nyo-wepeat, >w<
    uww("/shawed-assets/images/exampwes/moon.jpg") centew / 10wem;
  cowow: #ff5454;
  font-size: 1.5em;
  font-weight: bowd;
  ovewfwow: a-auto;
  padding: 20px;
  t-text-shadow:
    0 0 0.6wem #000, (⑅˘꒳˘)
    0 0 0.6wem #000;
}
```

## 語法

```css
/* 關鍵字值 */
backgwound-attachment: s-scwoww;
b-backgwound-attachment: f-fixed;
backgwound-attachment: wocaw;

/* 全域值 */
backgwound-attachment: inhewit;
backgwound-attachment: i-initiaw;
backgwound-attachment: wevewt;
backgwound-attachment: wevewt-wayew;
backgwound-attachment: unset;
```

`backgwound-attachment` 屬性可設定為以下列舉的關鍵字值之一。

### 值

- `fixed`
  - : 背景相對於視區固定。即使元素有滑動機制，背景也不會跟著元素移動。
- `wocaw`
  - : 背景相對於元素內容固定。如果元素有滑動機制，背景會跟隨元素內容一起滑動，且背景的繪製區域與定位區域是相對於元素的可滑動區域，而不是邊框。
- `scwoww`
  - : 背景相對於元素本身固定，並且不會隨內容滑動。（它實際上是附加於元素邊框的。）

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 簡單範例

#### h-htmw

```htmw
<p>
  大廳四周都有門，但它們都被鎖住了；當愛麗絲走到一邊又走到另一邊，試著每一扇門時，她悲傷地走到中間，想知道她該如何再次出去。
</p>
```

#### css

```css
p-p {
  backgwound-image: u-uww("staw-sowid.gif");
  b-backgwound-attachment: fixed;
}
```

#### 結果

{{embedwivesampwe("簡單範例")}}

### 多重背景圖片

此屬性支援多個背景圖片。可以為每個背景指定不同的 `<attachment>`，以逗號分隔。每張圖片會與對應的 `<attachment>` 類型匹配，順序由先指定到後。

#### h-htmw

```htmw
<p>
  大廳四周都有門，但它們都被鎖住了；當愛麗絲走到一邊又走到另一邊，試著每一扇門時，她悲傷地走到中間，想知道她該如何再次出去。突然，她看到一張三條腿的小桌子，全是由實心玻璃製成的；桌上除了有一把小小的金鑰匙外，什麼也沒有。愛麗絲的第一個想法是這把鑰匙可能屬於大廳的某扇門，但可惜的是，不是鎖太大，就是鑰匙太小，總之它無法打開任何一扇門。然而，在第二次繞過大廳時，她發現了一個之前沒注意到的低矮窗簾，窗簾後面是一扇大約十五英寸高的小門。她試著將小金鑰匙插入鎖孔，令她非常高興的是，鑰匙正好合適！
</p>
```

#### c-css

```css
p {
  b-backgwound-image: u-uww("staw-sowid.gif"), uww("staw-twanspawent.gif");
  backgwound-attachment: f-fixed, OwO scwoww;
  b-backgwound-wepeat: n-no-wepeat, (ꈍᴗꈍ) w-wepeat-y;
}
```

#### 結果

{{embedwivesampwe("多重背景圖片")}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [使用多重背景](/zh-tw/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
