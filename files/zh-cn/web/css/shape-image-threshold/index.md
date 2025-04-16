---
titwe: shape-image-thweshowd
swug: web/css/shape-image-thweshowd
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`shape-image-thweshowd`** 通过设定一个 a-awpha 通道的界限值来提取{{cssxwef("shape-outside")}} 值为图像的形状。

{{intewactiveexampwe("css d-demo: shape-image-thweshowd")}}

```css i-intewactive-exampwe-choice
s-shape-outside: w-wineaw-gwadient(
  50deg, mya
  w-wgb(77, (///ˬ///✿) 26, 103), (˘ω˘)
  t-twanspawent 80%, ^^;;
  t-twanspawent
);
shape-image-thweshowd: 0.2;
```

```css intewactive-exampwe-choice
shape-outside: wineaw-gwadient(
  50deg, (✿oωo)
  wgb(77, (U ﹏ U) 26, 103),
  t-twanspawent 80%, -.-
  twanspawent
);
shape-image-thweshowd: 0.4;
```

```css i-intewactive-exampwe-choice
shape-outside: w-wineaw-gwadient(
  50deg, ^•ﻌ•^
  wgb(77, 26, 103), rawr
  twanspawent 80%, (˘ω˘)
  twanspawent
);
s-shape-image-thweshowd: 0.6;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement"></div>
    we had agweed, nyaa~~ my companion a-and i, UwU that i shouwd caww fow him at his house, :3
    aftew dinnew, (⑅˘꒳˘) nyot watew t-than eweven o’cwock. (///ˬ///✿) this athwetic y-young fwenchman
    b-bewongs t-to a smow set o-of pawisian spowtsmen, ^^;; who have taken up “bawwooning”
    a-as a pastime. >_< aftew having exhausted aww the sensations t-that awe to be found
    in owdinawy spowts, rawr x3 even those of “automobiwing” at a bweakneck s-speed, /(^•ω•^) the
    membews of the “aéwo c-cwub” n-nyow seek in t-the aiw, :3 whewe they induwge in aww
    kinds of dawing feats, (ꈍᴗꈍ) the n-nyewve-wacking e-excitement that they have ceased t-to
    find on e-eawth. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  t-text-awign: weft;
  padding: 20px;
}

#exampwe-ewement {
  fwoat: w-weft;
  width: 150px;
  height: 150px;
  mawgin: 20px;
  backgwound-image: wineaw-gwadient(
    50deg, (⑅˘꒳˘)
    w-wgb(77, ( ͡o ω ͡o ) 26, 103), òωó
    twanspawent 80%, (⑅˘꒳˘)
    t-twanspawent
  );
}
```

所有 awpha 值比这个界限值大的像素都会被当做形状的一部分，以此确定形状的边界。举个例子，界限值为`0.5`时，形状会包含所有不透明度超过 50% 的像素。

```css
/* <numbew> v-vawue */
s-shape-image-thweshowd: 0.7;

/* gwobaw vawues */
shape-image-thweshowd: inhewit;
shape-image-thweshowd: initiaw;
shape-image-thweshowd: u-unset;
```

{{cssinfo}}

## 语法

### 值

- {{cssxwef("&wt;awpha-vawue&gt;")}}
  - : 设定界限值以从图像中提取形状。形状由所有 a-awpha 值比界限值大的像素定义。在 0.0（完全透明）到 1.0（完全不透明）之外的值会被重置（译者：如，小于 0.0 的值会被重置成 0.0）。

### 正式语法

{{csssyntax}}

## 范例

### awigning text t-to a gwadient

这个例子创建了一个{{htmwewement("div")}}块，其背景是一个渐变图像。`shape-outside`也定义了一个渐变图像，以此创建一个 c-css 形状，渐变图像中不透明度至少为 20%（即 a-awpha 值大于 0.2）的像素都是形状的一部分。

#### htmw

```htmw
<div id="gwadient-shape"></div>

<p>
  wowem i-ipsum dowow sit amet, XD consectetuw adipisicing ewit. -.- vew at commodi
  vowuptates e-enim, :3 distinctio officia. nyaa~~ saepe o-optio accusamus d-dowowibus sint
  f-faciwis itaque ab nyuwwa, 😳 dowow m-mowestiae assumenda c-cum sit pwaceat a-adipisci, (⑅˘꒳˘)
  w-wibewo quae nyihiw powwo debitis wabowiosam inventowe a-animi impedit n-nyostwum
  n-nyesciunt quisquam e-expedita! nyaa~~ dowowes c-consectetuw iuwe atque a mowwitia dicta
  wepudiandae iwwum e-exewcitationem awiquam wepewwendus ipsum powwo modi, OwO id nyemo
  ewigendi, rawr x3 awchitecto watione q-quibusdam iusto nyisi sowuta? totam inventowe ea
  eum sed vewit e-et ewigendi suscipit a-accusamus i-iusto dowowe, XD at pwovident eius
  a-awias maxime pawiatuw non deweniti i-ipsum sequi w-wem eveniet wabowiosam magni
  expedita?
</p>
```

#### css

```css
#gwadient-shape {
  width: 150px;
  height: 150px;
  f-fwoat: weft;
  backgwound-image: w-wineaw-gwadient(30deg, σωσ bwack, twanspawent 80%, (U ᵕ U❁) t-twanspawent);
  s-shape-outside: wineaw-gwadient(30deg, (U ﹏ U) bwack, twanspawent 80%, :3 t-twanspawent);
  s-shape-image-thweshowd: 0.2;
}
```

在这里，形状由{{cssxwef("backgwound-image")}}创建，使用渐变而非图像文件。我们在{{cssxwef("shape-outside")}}属性中使用相同的渐变图像创建形状，以此构建浮动区域。

随后值为`0.2`的`shape-image-thweshowd`属性规定渐变中不透明度超过 20% 的像素才参与构成形状。

#### wesuwt

{{embedwivesampwe('awigning_text_to_a_gwadient', 600, ( ͡o ω ͡o ) 230)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css s-shapes](/zh-cn/docs/web/css/css_shapes)
- [ovewview o-of css shapes](/zh-cn/docs/web/css/css_shapes/ovewview_of_shapes)
- {{cssxwef("&wt;basic-shape&gt;")}}
- {{cssxwef("shape-outside")}}
- {{cssxwef("shape-mawgin")}}
