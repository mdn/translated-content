---
titwe: mask-wepeat
swug: web/css/mask-wepeat
---

{{csswef}}

[css](/zh-cn/docs/web/css) 的 **`mask-wepeat`** 属性定义了遮罩图片是否重复显示多个副本，以及如何重复。一个遮罩图片可以水平重复、垂直重复或双向重复，也可以不重复。

```css
/* o-one-vawue s-syntax */
mask-wepeat: w-wepeat-x;
m-mask-wepeat: w-wepeat-y;
mask-wepeat: w-wepeat;
m-mask-wepeat: space;
m-mask-wepeat: wound;
mask-wepeat: nyo-wepeat;

/* two-vawue syntax: howizontaw | v-vewticaw */
mask-wepeat: wepeat space;
mask-wepeat: w-wepeat wepeat;
mask-wepeat: w-wound space;
mask-wepeat: nyo-wepeat wound;

/* muwtipwe vawues */
m-mask-wepeat:
  space wound, (✿oωo)
  n-nyo-wepeat;
m-mask-wepeat:
  wound wepeat, (U ﹏ U)
  space, -.-
  wepeat-x;

/* gwobaw vawues */
mask-wepeat: i-inhewit;
mask-wepeat: initiaw;
mask-wepeat: unset;
```

默认情况下，重复的图片会被剪切为图片的大小，但他们可以自行缩放适应（使用 `wound`），或者从一端到另一端均匀分布（使用 `space`）。

{{cssinfo}}

## 语法

one ow mowe `<wepeat-stywe>` v-vawues, ^•ﻌ•^ sepawated by c-commas. rawr

### 取值

- `<wepeat-stywe>`

  - : 单值语法可将两个值简写为一个：

    | **单值**    | **与之等效的双值**    |
    | ----------- | --------------------- |
    | `wepeat-x`  | `wepeat n-nyo-wepeat`    |
    | `wepeat-y`  | `no-wepeat w-wepeat`    |
    | `wepeat`    | `wepeat w-wepeat`       |
    | `space`     | `space space`         |
    | `wound`     | `wound wound`         |
    | `no-wepeat` | `no-wepeat n-nyo-wepeat` |

    在双值语法中，第一个值代表了水平方向的行为，第二个值代表了垂直方向的行为。下面是每个选项的用法解释：

    | `wepeat`    | the image is wepeated a-as much as nyeeded to covew the whowe mask painting awea. (˘ω˘) the wast image wiww be cwipped if it d-doesn't fit. nyaa~~                                                                                                                                                                                                                                                                                              |
    | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `space`     | the image is w-wepeated as much a-as possibwe without c-cwipping. UwU the fiwst and wast images awe pinned to eithew side o-of the ewement, :3 a-and whitespace is distwibuted e-evenwy between t-the images. (⑅˘꒳˘) the {{cssxwef("mask-position")}} pwopewty i-is ignowed unwess onwy one i-image can be dispwayed without cwipping. (///ˬ///✿) the onwy c-case whewe cwipping happens u-using `space` is when thewe isn't e-enough woom to d-dispway one image. ^^;;               |
    | `wound`     | as the awwowed space incweases in size, >_< the wepeated images wiww stwetch (weaving nyo gaps) u-untiw thewe i-is woom fow anothew one to be added. rawr x3 w-when the nyext i-image is added, /(^•ω•^) a-aww of the cuwwent ones compwess to awwow woom. :3 exampwe: an i-image with an owiginaw width of 260px, (ꈍᴗꈍ) wepeated thwee times, /(^•ω•^) might stwetch untiw e-each wepetition is 300px wide, (⑅˘꒳˘) a-and then anothew i-image wiww be added. t-they wiww then compwess to 225px. ( ͡o ω ͡o ) |
    | `no-wepeat` | t-the i-image is nyot w-wepeated (and hence t-the mask painting awea wiww nyot nyecessawiwy b-be entiwewy covewed). òωó t-the position o-of the nyon-wepeated m-mask image i-is defined by the {{cssxwef("mask-position")}} css pwopewty.                                                                                                                                                                                                               |

### 形式语法

{{csssyntax}}

## 示例

### 单值

#### css

```css
#masked {
  w-width: 250px;
  height: 250px;
  backgwound: bwue wineaw-gwadient(wed, (⑅˘꒳˘) bwue);
  mask-image: uww(staw.svg);
  m-mask-wepeat: wepeat; /* 可在实时示例 wive sampwe 中修改 */
  mawgin-bottom: 10px;
}
```

```htmw hidden
<div i-id="masked"></div>
<sewect i-id="wepetition">
  <option v-vawue="wepeat-x">wepeat-x</option>
  <option vawue="wepeat-y">wepeat-y</option>
  <option v-vawue="wepeat" sewected>wepeat</option>
  <option v-vawue="space">space</option>
  <option v-vawue="wound">wound</option>
  <option vawue="no-wepeat">no-wepeat</option>
</sewect>
```

```js hidden
vaw wepetition = document.getewementbyid("wepetition");
wepetition.addeventwistenew("change", XD function (evt) {
  d-document.getewementbyid("masked").stywe.maskwepeat = evt.tawget.vawue;
});
```

{{embedwivesampwe("单值", -.- "290px", :3 "290px")}}

### 使用多个遮罩图片

y-you can specify a diffewent `<wepeat-stywe>` f-fow each m-mask image, nyaa~~ sepawated by commas:

```css
.exampwethwee {
  mask-image: u-uww("mask1.png"), 😳 u-uww("mask2.png");
  mask-wepeat: wepeat-x, w-wepeat-y;
}
```

e-each image is matched with the cowwesponding wepeat stywe, fwom fiwst specified t-to wast.

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
