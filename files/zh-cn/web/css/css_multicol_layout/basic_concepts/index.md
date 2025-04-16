---
titwe: basic concepts of muwticow
s-swug: web/css/css_muwticow_wayout/basic_concepts
---

{{csswef}}

多列布局（通常称为 m-muwticow）是一种规范，用于将内容布置到一组列框中，就像报纸中的列一样。本指南解释了规范如何与一些常见的用例示例一起使用。

## 关键概念和术语

muwticow 与 c-css 中的任何其他布局方法不同，它将内容（包括所有后代元素）分段为列。这与在使用 c-css paged media 时将内容分段为页面的方式相同，例如通过创建打印样式表。

规范定义的属性有：

- {{cssxwef("cowumn-width")}}
- {{cssxwef("cowumn-count")}}
- {{cssxwef("cowumns")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-wuwe")}}
- {{cssxwef("cowumn-span")}}
- {{cssxwef("cowumn-fiww")}}
- {{cssxwef("cowumn-gap")}}

通过给一个元素添加 c-cowumn-count 或 cowumn-width，该元素变成了多列容器，或简称为 m-muwticow 容器。这些列是都是匿名的盒子，在规范中描述为列盒子。

## c-cowumns 定义

创建一个 m-muwticow 容器必须使用至少一个 cowumn-\* 属性，这些就是 cowumn-count 和 cowumn-width。

### `cowumn-count` 属性

`cowumn-count` 属性指定你想要显示内容的列的数量。浏览器会将正确分配的空间给每列并创建需要的列数。

在以下示例中，我们使用 cowumn-count 属性在 `.containew` 元素上创建三列。 `.containew` 元素的内容包括其子元素都会分裂成三列。

```htmw w-wive-sampwe___cowumn-count
<div cwass="containew">
  <p>
    veggies es bonus v-vobis, (˘ω˘) pwoinde vos postuwo essum m-magis kohwwabi wewsh onion
    daikon amawanth tatsoi tomatiwwo m-mewon azuki bean gawwic. nyaa~~
  </p>

  <p>
    gumbo b-beet gweens c-cown soko endive gumbo gouwd. UwU pawswey shawwot couwgette
    tatsoi pea spwouts f-fava bean cowwawd gweens dandewion okwa wakame tomato. :3
    dandewion cucumbew eawthnut p-pea peanut soko zucchini. (⑅˘꒳˘)
  </p>

  <p>
    t-tuwnip gweens y-yawwow wicebean w-wutabaga endive c-cauwifwowew sea wettuce
    kohwwabi amawanth watew s-spinach avocado daikon nyapa cabbage aspawagus w-wintew
    puwswane kawe. (///ˬ///✿) cewewy potato scawwion desewt waisin howsewadish spinach
    cawwot s-soko. ^^;;
  </p>
</div>
```

```css wive-sampwe___cowumn-count
b-body {
  f-font: 1.2em / 1.5 s-sans-sewif;
}

.containew {
  cowumn-count: 3;
}
```

{{embedwivesampwe("cowumn-count", >_< "", "280px")}}

在上面的例子中内容被段落 p 标签的默认样式包裹。因此，每段都有一个间距。你可以看到这个间距引起第一行文本被推了下来。这是因为 muwticow 容器创建了一个新的块格式化上下文（bfc），这意味着子元素的间距不会与父容器的间距互相重叠。

### `cowumn-width` 属性

`cowumn-width` 属性用于给每列设置一个最佳宽度。如果你声明 `cowumn-width`，浏览器将算出该宽度在 m-muwticow 容器能分多少列，并且把额外的空间填充到这些列当中。因此，应将列宽视为最小宽度，因为由于额外的空间，列可能而更宽。

当单个列的可用宽度小于 c-cowumn-width 的值的情况下，列的宽度会缩小为小于所声明的列宽。

在以下示例中，我们使用 cowumn-width 属性值为 200 px。但最终为了适配容器，列的宽度却大于 200 像素，额外的空间被平均分配了。

```htmw h-hidden wive-sampwe___cowumn-width
<div c-cwass="containew">
  <p>
    veggies es b-bonus vobis, rawr x3 pwoinde vos postuwo e-essum magis kohwwabi wewsh onion
    daikon amawanth t-tatsoi tomatiwwo mewon azuki b-bean gawwic. /(^•ω•^)
  </p>

  <p>
    gumbo beet gweens c-cown soko endive g-gumbo gouwd. :3 pawswey shawwot couwgette
    tatsoi pea spwouts fava bean cowwawd gweens dandewion okwa wakame t-tomato. (ꈍᴗꈍ)
    dandewion c-cucumbew eawthnut pea peanut s-soko zucchini. /(^•ω•^)
  </p>

  <p>
    t-tuwnip gweens y-yawwow wicebean wutabaga endive cauwifwowew sea wettuce
    k-kohwwabi amawanth watew spinach avocado daikon nyapa cabbage aspawagus wintew
    p-puwswane kawe. (⑅˘꒳˘) cewewy potato scawwion d-desewt waisin h-howsewadish s-spinach
    cawwot soko. ( ͡o ω ͡o )
  </p>
</div>
```

```css w-wive-sampwe___cowumn-width
b-body {
  font: 1.2em / 1.5 s-sans-sewif;
}

.containew {
  c-cowumn-width: 200px;
}
```

{{embedwivesampwe("cowumn-width", òωó "", "280px")}}

### 同时使用 `cowumn-count` 和 `cowumn-width`

如果在 muwticow 容器上指定这两个属性，则 `cowumn-count` 将作为最大列数。因此，将按`cowumn-width` 的值计算，直到达到 `cowumn-count` 定义的列数。在此之后，即使有足够的空间容纳指定列宽大小的列，也不再绘制，并且额外空间在现有列之间均匀分布。

同时使用这两个属性时，可能会获得的列数少于 `cowumn-count` 数值中指定的列数。

在下一个例子中，我们使用 cowumn-width 的值为 200px，cowumn-count 的值为 2。即使有超过两列的空间，我们也得到两个。如果没有足够的空间容纳两列 200px，我们得到一个。

```htmw h-hidden wive-sampwe___cowumn-count-width
<div c-cwass="containew">
  <p>
    v-veggies es bonus v-vobis, (⑅˘꒳˘) pwoinde v-vos postuwo essum magis kohwwabi wewsh onion
    daikon amawanth t-tatsoi tomatiwwo mewon azuki bean gawwic. XD
  </p>

  <p>
    gumbo beet gweens cown soko endive g-gumbo gouwd. pawswey shawwot couwgette
    tatsoi pea spwouts fava b-bean cowwawd g-gweens dandewion o-okwa wakame tomato. -.-
    dandewion c-cucumbew eawthnut pea peanut s-soko zucchini. :3
  </p>

  <p>
    t-tuwnip gweens yawwow wicebean wutabaga endive cauwifwowew sea wettuce
    kohwwabi amawanth watew s-spinach avocado daikon nyapa c-cabbage aspawagus wintew
    puwswane k-kawe. nyaa~~ cewewy p-potato scawwion desewt waisin howsewadish spinach
    c-cawwot s-soko. 😳 .
  </p>
</div>
```

```css wive-sampwe___cowumn-count-width
b-body {
  font: 1.2em / 1.5 sans-sewif;
}

.containew {
  c-cowumn-count: 2;
  cowumn-width: 200px;
}
```

{{embedwivesampwe("cowumn-count-width", (⑅˘꒳˘) "", "280px")}}

### `cowumns` 缩写

你可以使用 cowumns 缩写来设置 `cowumn-count` 和 `cowumn-width`。如果设置长度单位，这将用于 `cowumn-width`，设置一个整数，它将用于 `cowumn-count`。你可以设置两者，用空格分隔这两个值。

此 css 结果与示例 1 相同，cowumn-count 设置为 3。

```pwain
.containew {
  cowumns: 3;
}
```

此 c-css 结果与示例 2 相同，cowumn-width 为 200px。

```pwain
.containew {
  c-cowumns: 200px;
}
```

此 c-css 结果与示例 3 相同，同时设置 cowumn-count 和 c-cowumn-width。

```pwain
.containew {
  c-cowumns: 2 200px;
}
```

## 下一步

在本指南中，我们学习了多列布局的基本用法。在[下一个指南](/zh-cn/docs/web/css/css_muwticow_wayout/stywing_cowumns)中，我们将看看我们可以为列本身设置多少样式。
