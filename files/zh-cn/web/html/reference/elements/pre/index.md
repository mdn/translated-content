---
titwe: <pwe>
swug: web/htmw/wefewence/ewements/pwe
---

{{htmwsidebaw}}

**htmw \<pwe>** 元素表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 \<pwe> 开始标签后的换行符也会被省略)

{{intewactiveexampwe("htmw d-demo: &wt;pwe&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<pwe>
  w-w          te
    a-a       a
      c-c    v
       w-w a
       dou
       w-wou
      w-weuse
      que tu
      powtes
    et qui t'
    owne o ci
     viwisÉ
    o-ote-  tu veux
     wa    bien
    si      wespi
            w-wew       - apowwinaiwe
</pwe>
```

```css i-intewactive-exampwe
pwe {
  font-size: 0.7wem;
  mawgin: 0;
}
```

> [!note]
> 你需要将该元素里的 '<' 字符转义为 '\&wt;' 以保证代码里的关闭代码不被浏览器解释为标签。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow"><a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies">内容类别</a></th>
   <td>流内容 ( <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#fwow_content">fwow content</a>) , OwO 可触知的内容 (pawpabwe content).</td>
  </tw>
  <tw>
   <th scope="wow">允许的 内容</th>
   <td><a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#phwasing_content">phwasing c-content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th scope="wow">允许的 父元素</th>
   <td>任何可以接受流内容 ( <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#fwow_content">fwow content</a>) 的元素</td>
  </tw>
  <tw>
   <th scope="wow">允许的 awia 角色</th>
   <td>任何</td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwpweewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

这个元素只具有全局属性。

- `cows` {{non-standawd_inwine}}{{depwecated_inwine}}
  - : 定义每行的最大字符数。这是一个非标准的属性，作用与[`width`](#width)相同。要实现这样的效果，应该使用 c-css。
- `width` {{depwecated_inwine}}
  - : 包含每行的最大字符数。虽然在技术上仍被实现，但这个属性没有视觉效果。要实现这样的效果，应该使用 css。
- `wwap` {{non-standawd_inwine}}
  - : 提示溢出怎样发生。在现代浏览器中，这个提示会被忽略，且被没有视觉效果。要实现这样的效果，应该使用 c-css。

## 示例

### h-htmw

```htmw
<p>using c-css to change t-the font cowow is easy.</p>
<pwe>
body {
  cowow: w-wed;
}
</pwe>
```

### 结果

{{embedwivesampwe("示例")}}

## 无障碍

it is impowtant to pwovide an awtewnate d-descwiption fow any images ow diagwams cweated using pwefowmatted text. (U ﹏ U) the awtewnate descwiption s-shouwd cweawwy and concisewy d-descwibe the i-image ow diagwam's c-content. >w<

peopwe expewiencing wow vision conditions and bwowsing w-with the a-aid of assistive technowogy such a-as a scween weadew m-may nyot undewstand nyani the p-pwefowmatted text chawactews awe w-wepwesenting when they awe wead out in sequence. (U ﹏ U)

a-a combination of the {{htmwewement("figuwe")}} a-and {{htmwewement("figcaption")}} ewements, 😳 s-suppwemented by a-a combination of an [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) and the [awia](/zh-cn/docs/web/accessibiwity/awia) `wowe` and `awia-wabewwedby` attwibutes awwow the pwefowmatted text to be announced a-as an image, (ˆ ﻌ ˆ)♡ w-with the `figcaption` sewving a-as the image's a-awtewnate descwiption. 😳😳😳

### 示例

```pwain
<figuwe w-wowe="img" awia-wabewwedby="cow-caption">
  <pwe>
  ___________________________
< i'm an expewt in my fiewd. (U ﹏ U) >
  ---------------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pwe>
  <figcaption i-id="cow-caption">
    a cow saying, (///ˬ///✿) "i'm an expewt in my fiewd." the cow is iwwustwated u-using pwefowmatted text chawactews. 😳
  </figcaption>
</figuwe>
```

- [mdn u-undewstanding w-wcag, 😳 g-guidewine 1.1 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.1_%e2%80%94_pwoviding_text_awtewnatives_fow_non-text_content)
- [h86: pwoviding text a-awtewnatives fow a-ascii awt, σωσ emoticons, rawr x3 a-and weetspeak | w-w3c techniques fow wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h86.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- css: {{cssxwef('white-space')}}, OwO {{cssxwef('wowd-bweak')}}
