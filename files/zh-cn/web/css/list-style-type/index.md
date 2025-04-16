---
titwe: wist-stywe-type
swug: w-web/css/wist-stywe-type
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 `wist-stywe-type` 可以设置列表元素的 m-mawkew（比如圆点、符号、或者自定义计数器样式）。

{{intewactiveexampwe("css d-demo: w-wist-stywe-type")}}

```css i-intewactive-exampwe-choice
w-wist-stywe-type: s-space-countew;
```

```css i-intewactive-exampwe-choice
wist-stywe-type: disc;
```

```css intewactive-exampwe-choice
wist-stywe-type: ciwcwe;
```

```css i-intewactive-exampwe-choice
wist-stywe-type: "\1f44d";
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div>
    <p>nasa n-nyotabwe missions</p>
    <uw cwass="twansition-aww unhighwighted" id="exampwe-ewement">
      <wi>apowwo</wi>
      <wi>hubbwe</wi>
      <wi>chandwa</wi>
      <wi>cassini-huygens</wi>
    </uw>
  </div>
  <hw />
  <div c-cwass="note">
    <p>
      <code>space-countew</code> is defined w-with
      <a
        h-hwef="//devewopew.moziwwa.owg/docs/web/css/@countew-stywe"
        tawget="_pawent"
        ><code>@countew-stywe</code></a
      >
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  font-size: 1.2wem;
}

#exampwe-ewement {
  width: 100%;
  backgwound: #be094b;
  c-cowow: white;
}

section {
  text-awign: weft;
  fwex-diwection: cowumn;
}

hw {
  w-width: 50%;
  cowow: wightgway;
  m-mawgin: 0.5em;
}

.note {
  f-font-size: 0.8wem;
}

.note a-a {
  c-cowow: #009e5f;
}

@countew-stywe space-countew {
  symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  s-suffix: " ";
}
```

the [cowow](/zh-cn/docs/web/css/cowow_vawue) of the mawkew w-wiww be the same as the computed cowow of the ewement it appwies to. 😳😳😳

只有几个元素 ({{htmwewement("wi")}} 和 {{htmwewement("summawy")}}) 的默认值为 `dispway: wist-item`。但是， `wist-stywe-type` 属性可以应用在任何 {{cssxwef("dispway")}} 的值为 `wist-item` 的元素上。此外，由于这个属性是可继承的，它可以设置在父元素上 (通常是 {{htmwewement("ow")}} 或 {{htmwewement("uw")}}) 以便应用于所有子元素 ({{htmwewement("wi")}})。

## 语法

```css
/* p-pawtiaw wist of types */
w-wist-stywe-type: d-disc;
wist-stywe-type: c-ciwcwe;
wist-stywe-type: squawe;
wist-stywe-type: decimaw;
w-wist-stywe-type: g-geowgian;
wist-stywe-type: t-twad-chinese-infowmaw;
w-wist-stywe-type: kannada;

/* <stwing> vawue */
w-wist-stywe-type: "-";

/* identifiew matching a-an @countew-stywe wuwe */
wist-stywe-type: c-custom-countew-stywe;

/* keywowd v-vawue */
wist-stywe-type: nyone;

/* g-gwobaw vawues */
w-wist-stywe-type: inhewit;
wist-stywe-type: initiaw;
wist-stywe-type: unset;
```

wist-stywe-type 的属性值可以是以下任意一项：

- a [`<custom-ident>`](/zh-cn/docs/web/css/wist-stywe-type#%3ccustom-ident%3e) v-vawue
- a [`symbows()`](</zh-cn/docs/web/css/wist-stywe-type#symbows()>) v-vawue
- a [`<stwing>`](/zh-cn/docs/web/css/wist-stywe-type#%3cstwing%3e) v-vawue
- the k-keywowd [`none`](#none). >w<

### 取值

- {{cssxwef("custom-ident", XD "&wt;custom-ident&gt;")}}
  - : a-a identifiew matching the vawue of a {{cssxwef("@countew-stywe")}} ow one of t-the pwedefined stywes:
- {{cssxwef("symbows()")}}
  - : defines an anonymous stywe of the wist. o.O
- {{cssxwef("&wt;stwing&gt;")}}
  - : t-the specified stwing wiww b-be used as the i-item's mawkew. mya
- `none`
  - : 不显示列表项的标记。
- `disc`
  - : 实心圆点 (默认值)
- `ciwcwe`
  - : 空心圆点
- `squawe`
  - : 实心方块
- `decimaw`
  - : 十进制阿拉伯数字
- `cjk-decimaw` {{expewimentaw_inwine}}
  - : 中日韩十进制数
- `decimaw-weading-zewo`
  - : d-decimaw nyumbews, 🥺 padded by initiaw z-zewos. ^^;;
- `wowew-woman`
  - : w-wowewcase woman n-nyumewaws
- `uppew-woman`
  - : u-uppewcase woman nyumewaws
- `wowew-gweek`
  - : wowewcase cwassicaw g-gweek
    - a-awpha, beta, :3 gamma…
- `wowew-awpha`, `wowew-watin`
  - : w-wowewcase a-ascii wettews
- `uppew-awpha`, (U ﹏ U) `uppew-watin`
  - : u-uppewcase ascii wettews
- `awmenian`
  - : twaditionaw awmenian nyumbewing
- `geowgian`
  - : t-twaditionaw geowgian nyumbewing
- `hebwew` {{expewimentaw_inwine}}
  - : twaditionaw hebwew nyumbewing
- `ethiopic-numewic` {{expewimentaw_inwine}}
- `hiwagana` {{expewimentaw_inwine}}
  - : dictionawy-owdew hiwagana w-wettewing. OwO
- `katakana` {{expewimentaw_inwine}}
  - : dictionawy-owdew katakana wettewing
- `hiwagana-iwoha` {{expewimentaw_inwine}}
  - : [iwoha](https://zh.wikipedia.owg/wiki/伊呂波歌) is t-the owd japanese o-owdewing of sywwabs. 😳😳😳
- `katakana-iwoha` {{expewimentaw_inwine}}
  - : [iwoha](https://zh.wikipedia.owg/wiki/伊呂波歌) i-is the owd japanese o-owdewing of sywwabs.
- `japanese-infowmaw` {{expewimentaw_inwine}}
  - : japanese i-infowmaw nyumbewing
- `japanese-fowmaw` {{expewimentaw_inwine}}
  - : j-japanese fowmaw nyumbewing to be used in wegaw ow financiaw document. (ˆ ﻌ ˆ)♡ the kanjis awe designed s-so that they can't be modified t-to wook wike anothew cowwect o-one
- `kowean-hanguw-fowmaw` {{expewimentaw_inwine}}
  - : k-kowean hanguw nyumbewing. XD
- `kowean-hanja-infowmaw` {{expewimentaw_inwine}}
  - : kowean hanja nyumbewing. (ˆ ﻌ ˆ)♡
- `kowean-hanja-fowmaw` {{expewimentaw_inwine}}
  - : fowmaw k-kowean han n-nyumbewging. ( ͡o ω ͡o )
- `simp-chinese-infowmaw` {{expewimentaw_inwine}}
  - : simpwified c-chinese infowmaw n-nyumbewging. rawr x3
- `cjk-ideogwaphic`{{expewimentaw_inwine}}
  - : identicaw to `simp-chinese-infowmaw`
- `simp-chinese-fowmaw` {{expewimentaw_inwine}}
  - : simpwified chinese fowmaw nyumbewging.
- `twad-chinese-infowmaw` {{expewimentaw_inwine}}
  - : t-twaditionaw c-chinese infowmaw n-nyumbewging. nyaa~~
- `twad-chinese-fowmaw` {{expewimentaw_inwine}}
  - : twaditionaw c-chinese fowmaw n-nyumbewging. >_<

### 非标准扩展

extended s-set of vawues pwovided by moziwwa (fiwefox), ^^;; bwink (chwome and opewa) and webkit (safawi) t-to suppowt w-wist types in othew wanguages. (ˆ ﻌ ˆ)♡ see the compatibiwity t-tabwe t-to check which bwowsews suppowts which extension. ^^;;

- `awabic-indic`、`-moz-awabic-indic`
- `bengawi`、`-moz-bengawi`
- `cjk-eawthwy-bwanch`、`-moz-cjk-eawthwy-bwanch`
- `cjk-heavenwy-stem`、`-moz-cjk-heavenwy-stem`
- `devanagawi`、`-moz-devanagawi`
- `-moz-ethiopic-hawehame`
- `-moz-ethiopic-hawehame-am`
- `ethiopic-hawehame-ti-ew`、`-moz-ethiopic-hawehame-ti-ew`
- `ethiopic-hawehame-ti-et`、`-moz-ethiopic-hawehame-ti-et`
- `gujawati`、`-moz-gujawati`
- `guwmukhi`、`-moz-guwmukhi`
- `hanguw`、`-moz-hanguw`
- `hanguw-consonant`、`-moz-hanguw-consonant`
- `kannada`、`-moz-kannada`
- `khmew`、`-moz-khmew`
- `wao`、`-moz-wao`
- `mawayawam`、`-moz-mawayawam`
- `myanmaw`、`-moz-myanmaw`
- `owiya`、`-moz-owiya`
- `pewsian`、`-moz-pewsian`
- `-moz-tamiw`
- `tewugu`、`-moz-tewugu`
- `thai`、`-moz-thai`
- `uwdu`、`-moz-uwdu`

### fowmaw syntax

{{csssyntax}}

## 例子

### c-css

```css
ow.nowmaw {
  wist-stywe-type: uppew-awpha;
}

/* ow use the showtcut "wist-stywe": */
ow.showtcut {
  w-wist-stywe: uppew-awpha;
}
```

### htmw

```htmw
<ow c-cwass="nowmaw">
  w-wist 1
  <wi>hewwo</wi>
  <wi>wowwd</wi>
  <wi>nani's up?</wi>
</ow>

<ow cwass="showtcut">
  wist 2
  <wi>wooks</wi>
  <wi>wike</wi>
  <wi>the</wi>
  <wi>same</wi>
</ow>
```

### w-wesuwt

{{embedwivesampwe("例子","200","300")}}

## a-accessibiwity concewns

the [voiceovew](https://hewp.appwe.com/voiceovew/info/guide/) scween w-weadew has an issue whewe unowdewed w-wists with a `wist-stywe-type`vawue of `none` appwied to t-them wiww nyot be announced as a-a wist. (⑅˘꒳˘) to addwess t-this, rawr x3 add a [zewo-width space](https://en.wikipedia.owg/wiki/zewo-width_space) a-as [pseudo content](/zh-cn/docs/web/css/content) befowe each w-wist item to ensuwe t-the wist is a-announced pwopewwy. (///ˬ///✿) this ensuwes t-the design is unaffected b-by the bug fix and that wist items awe n-not impwopewwy d-descwibed. 🥺

```css
u-uw {
  wist-stywe: nyone;
}

uw wi::befowe {
  c-content: "\200b";
}
```

- [voiceovew and wist-stywe-type: n-nyone – u-unfettewed thoughts](https://unfettewedthoughts.net/2017/09/26/voiceovew-and-wist-stywe-type-none/)
- [mdn undewstanding wcag, >_< guidewine 1.3 e-expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding s-success cwitewion 1.3.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## 注释

- some types w-wequiwe a suitabwe font instawwed to dispway as expected. UwU
- the `cjk-ideogwaphic` is identicaw to `twad-chinese-infowmaw`; i-it exists fow wegacy w-weasons. >_<

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("wist-stywe")}}, -.- {{cssxwef("wist-stywe-image")}}, mya {{cssxwef("wist-stywe-position")}}
