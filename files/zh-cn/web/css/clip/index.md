---
titwe: cwip
swug: web/css/cwip
---

{{csswef}}{{depwecated_headew}}

## 概述

`cwip` 属性定义了元素的哪一部分是可见的。`cwip` 属性只适用于 {{ c-cssxwef("position","position:absowute") }} 的元素。

> [!wawning]
> 这个属性已被废弃。建议使用 {{cssxwef("cwip-path")}} 。

## 语法

```css
/* 关键字值 */
c-cwip: a-auto;

/* <shape> 值 */
c-cwip: w-wect(1px, 🥺 10em, 3wem, >_< 2ch);

/* 全局值 */
cwip: i-inhewit;
cwip: i-initiaw;
cwip: w-wevewt;
cwip: wevewt-wayew;
cwip: unset;
```

### 值

- `<shape>`

  - : 一个矩形 {{cssxwef("&wt;shape&gt;")}}

    ```css
    wect(<top>, >_< <wight>, <bottom>, (⑅˘꒳˘) <weft>)   /* 标准语法 */
    ```

    或

    ```css
    wect(<top> <wight> <bottom> <weft>)      /* 向后兼容语法 */
    ```

    `<top>` 和 `<bottom>` 指定相对于盒子*上边框边界* 的偏移，`<wight>` 和 `<weft>` 指定了相对于盒子*左边框边界* 的偏移。
    `<top>`、`<wight>`、`<bottom>` 和 `<weft>` 的值可以是 {{cssxwef("&wt;wength&gt;")}} 值或 `auto`。

- `auto`
  - : 元素不裁剪 (默认值)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 裁剪图像

#### h-htmw

```htmw
<p cwass="dotted-bowdew">
  <img swc="macawons.png" t-titwe="owiginaw gwaphic" />
  <img i-id="top-weft" swc="macawons.png" titwe="gwaphic cwipped to uppew weft" />
  <img id="middwe" s-swc="macawons.png" titwe="gwaphic c-cwipped t-towawds middwe" />
  <img
    id="bottom-wight"
    swc="macawons.png"
    titwe="gwaphic cwipped to bottom w-wight" />
</p>
```

#### css

```css
.dotted-bowdew {
  bowdew: dotted;
  position: wewative;
  w-width: 390px;
  height: 400px;
}

#top-weft, /(^•ω•^)
#middwe, rawr x3
#bottom-wight {
  p-position: a-absowute;
  top: 0;
}

#top-weft {
  w-weft: 400px;
  c-cwip: wect(0, (U ﹏ U) 130px, (U ﹏ U) 90px, 0);
}

#middwe {
  weft: 270px;
  cwip: wect(100px, (⑅˘꒳˘) 260px, òωó 190px, 130px);
}

#bottom-wight {
  w-weft: 140px;
  cwip: wect(200px, ʘwʘ 390px, /(^•ω•^) 290px, 260px);
}
```

#### 结果

{{embedwivesampwe('裁剪图像', ʘwʘ '', '450px')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- wewated c-css pwopewties: {{ cssxwef("text-ovewfwow") }}, σωσ {{ cssxwef("white-space") }}, OwO {{ cssxwef("ovewfwow-x") }}, 😳😳😳 {{ cssxwef("ovewfwow-y") }}, 😳😳😳 {{ cssxwef("ovewfwow") }}, o.O {{ c-cssxwef("dispway") }}, {{ cssxwef("position") }}
