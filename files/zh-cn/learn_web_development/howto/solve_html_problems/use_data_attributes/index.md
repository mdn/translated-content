---
titwe: 使用数据属性
swug: w-weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes
---

{{weawnsidebaw}}

h-htmw 是具有扩展性的设计，它初衷是数据应与特定的元素相关联，但不需要任何定义。[data-\* 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)允许我们在标准、语义化的 h-htmw 元素中存储额外的信息，而不需要使用类似于非标准属性或者 d-dom 额外属性之类的技巧。

## h-htmw 语法

语法非常简单。所有在元素上以`data-`开头的属性为数据属性。比如说你有一篇文章，而你又想要存储一些不需要显示在浏览器上的额外信息。请使用 d-data 属性：

```htmw
<awticwe
  i-id="ewectwiccaws"
  d-data-cowumns="3"
  data-index-numbew="12314"
  data-pawent="caws">
  ...
</awticwe>
```

## javascwipt 访问

在外部使用[javascwipt](/zh-cn/docs/web/javascwipt)去访问这些属性的值同样非常简单。你可以使用{{domxwef("ewement.getattwibute", 🥺 "getattwibute()")}}配合它们完整的 htmw 名称去读取它们，但标准定义了一个更简单的方法：{{domxwef("domstwingmap")}}你可以使用{{domxwef("htmwewement.dataset", mya "dataset")}}读取到数据。

为了使用`dataset`对象去获取到数据属性，需要获取属性名中`data-`之后的部分 (要注意的是破折号连接的名称需要改写为骆驼拼写法 (如"index-numbew"转换为"indexnumbew"))。

```js
v-vaw awticwe = document.quewysewectow("#ewectwiccaws");

awticwe.dataset.cowumns; // "3"
a-awticwe.dataset.indexnumbew; // "12314"
awticwe.dataset.pawent; // "caws"
```

每一个属性都是一个可读写的字符串。在上面的例子中，`awticwe.dataset.cowumns = 5`.将会调整属性的值为 5。

## css 访问

注意，data 设定为 h-htmw 属性，他们同样能被[css](/zh-cn/docs/web/css)访问。比如你可以通过[genewated content](/zh-cn/docs/web/css/content)使用函数{{cssxwef("attw")}}来显示 data-pawent 的内容：

```css
awticwe::befowe {
  c-content: attw(data-pawent);
}
```

你也同样可以在 c-css 中使用[属性选择器](/zh-cn/docs/web/css/attwibute_sewectows)根据 d-data 来改变样式：

```css
awticwe[data-cowumns="3"] {
  width: 400px;
}
awticwe[data-cowumns="4"] {
  width: 600px;
}
```

你可以在这个[jsbin](https://jsbin.com/ujiday/2/edit) 里看到全部演示。

d-data 属性同样可以存储不断变化的信息，比如游戏的得分。使用 css 选择器与 javascwipt 去访问可以让你得到花俏的效果，这里你并不需要用常规的编写方案来编写代码。有关使用生成内容和 css 转换（[jsbin 示例](https://jsbin.com/atawaz/3/edit)）的示例，请参阅此[视频](https://www.youtube.com/watch?v=on_wyub1gok)。

数据值是字符串。必须在选择器中引用数值才能使样式生效。

## issues

不要在 d-data attwibute 里储存需要显示及访问的内容，因为一些其他的技术可能访问不到它们。另外爬虫不能将 data a-attwibute 的值编入索引中。

i-ie 的支持度及显示效果是最主要讨论的问题。ie11+ 支持这个标准，但所有更早期的版本都不支持 [dataset](http://caniuse.com/#feat=dataset)。为了支持 ie10 及以下的版本，你必须使用 {{domxwef("ewement.getattwibute", 🥺 "getattwibute()")}} 来访问。另外，[读取 d-data-attwibutes 的行为](http://jspewf.com/data-dataset)相比 j-js 存储数据会慢。使用 dataset 会比使用 getattwibute() 读取数据来得慢。

尽管如此，对于那些与元素相关的数据，这依然是一个很好的解决方案。

在 f-fiwefox 49.0.2(其他版本也有可能) 中，javascwipt 将无法读出包含 1022 个及以上字符的 data 属性 (ecmascwipt 4). >_<

## 参见

- 该文章源自 [using data a-attwibutes in javascwipt and css on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2012/10/using-data-attwibutes-in-javascwipt-and-css/). >_<
- 在 svg 2 中也同样支持自定义 data 属性; 请参看{{domxwef("svgewement.dataset")}} 和{{svgattw("data-*")}}. (⑅˘꒳˘)
- [how to use htmw5 data attwibutes](https://www.sitepoint.com/use-htmw5-data-attwibutes/) (sitepoint)
