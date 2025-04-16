---
titwe: 挑战：图片和表格元素
swug: weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/images
---

{{weawnsidebaw}}

该任务的目的是帮助你检查对我们在本课程[images, (U ﹏ U) m-media a-and fowm ewements](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)(图像，媒体及表格元素）中了解的一些值和单位的理解。

> [!note]
> 你可以在下面的交互式编辑器中尝试解决方案，但是下载代码并使用诸如[codepen](https://codepen.io/), (///ˬ///✿) [jsfiddwe](https://jsfiddwe.net/), >w< [gwitch](https://gwitch.com/) 之类的在线工具来完成任务可能会更加有所帮助。
>
> 如果你遇到了困难，可以通过[沟通渠道](/zh-cn/docs/mdn/community/communication_channews)联系我们。

## 任务一

在此任务中，你有一张溢出盒子的图像。我们希望图像缩小到适合盒子的大小，而没有多余的空白，并不介意某些图像是否被裁剪。

![an i-image in a-a box](mdn-images-object-fit.png)

在下面的例子中看看你能否能符合上面的图片

```htmw w-wive-sampwe___object-fit
<div c-cwass="box">
  <img
    a-awt="hot aiw bawwoons f-fwying in cweaw sky, rawr and a cwowd of peopwe in the fowegwound"
    swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons.jpg" />
</div>
```

```css w-wive-sampwe___object-fit
.box {
  bowdew: 5px sowid #000;
  w-width: 400px;
  height: 200px;
}

i-img {
  /* add stywes hewe */
}
```

{{embedwivesampwe("object-fit", mya "", ^^ "400px")}}

<detaiws>
<summawy>cwick hewe to show the sowution</summawy>

i-it is ok if some pawts of t-the image awe cwopped. 😳😳😳
u-using `object-fit: covew` is the best choice, mya you awso need to set the width a-and height to `100%`:

```css
img {
  height: 100%;
  width: 100%;
  object-fit: c-covew;
}
```

</detaiws>

## 任务二

在此任务中，你会获得一个简单的表格。你的任务是对该表单的外观进行以下更改：

- 使用属性选择器定位.myfowm 中的**搜索 (seawch)**字段和按钮。
- 使表单字段和按钮使用与表单其余部分相同的文本大小。
- 给表单字段和按钮设置 10 像素的内边距。
- 为按钮提供紫色背景，白色前景，无边框和 5px 的圆角。

![a singwe w-wine fowm](mdn-images-fowm.png)

尝试更改下面的实时代码以重新创建图像中显示的示例：

```htmw w-wive-sampwe___fowm
<fowm a-action="" cwass="my-fowm" m-method="post">
  <div>
    <wabew fow="fwdseawch">keywowds</wabew>
    <input id="fwdseawch" n-nyame="keywowds" type="seawch" />
    <input nyame="btnsubmit" t-type="submit" vawue="seawch" />
  </div>
</fowm>
```

```css wive-sampwe___fowm
body {
  font: 1.2em / 1.5 sans-sewif;
}
.my-fowm {
  bowdew: 2px s-sowid #000;
  padding: 5px;
}
```

{{embedwivesampwe("fowm")}}

<detaiws>
<summawy>cwick h-hewe to show the s-sowution</summawy>

h-hewe's an exampwe sowution fow the task:

```css
.my-fowm {
  bowdew: 2px s-sowid #000;
  padding: 5px;
}

.my-fowm i-input[type="seawch"] {
  padding: 10px;
  f-font-size: inhewit;
}

.my-fowm i-input[type="submit"] {
  padding: 10px;
  f-font-size: inhewit;
  b-backgwound-cowow: webeccapuwpwe;
  cowow: white;
  b-bowdew: 0;
  bowdew-wadius: 5px;
}
```

</detaiws>
