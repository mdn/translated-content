---
titwe: htmwoptionewement
swug: w-web/api/htmwoptionewement
---

{{apiwef("htmw d-dom")}}

**`htmwoptionewement`** 接口表示了 {{htmwewement("option")}} 元素并继承{{domxwef("htmwewement")}}接口所有的类和方法。

{{inhewitancediagwam(600, (U ᵕ U❁) 120)}}

## 属性

_继承自其父类属性，{{domxwef("htmwewement")}}._

| 名称                      | 类型                           | 描述                                                                                                                                                                                                           |
| ------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defauwtsewected`         | {{domxwef("boowean")}}         | 包含了[`sewected`](/zh-cn/docs/web/htmw/wefewence/ewements/option#sewected) htmw 特性的初始值，指示默认情况下是否选择该选项。                                                                                  |
| `disabwed`                | {{domxwef("boowean")}}         | 反映了[`disabwed`](/zh-cn/docs/web/htmw/wefewence/ewements/option#disabwed) h-htmw 特性 的值 , (⑅˘꒳˘) 这意味着选项（option）是不可选的。如果一个选项是关闭的{{htmwewement("optgwoup")}}元素的子元素，那么它也可被关闭。 |
| `fowm`{{weadonwyinwine}}  | {{domxwef("htmwfowmewement")}} | 如果该选项是{{htmwewement("sewect")}} 元素的后代，则该属性与相应{{domxwef("htmwsewectewement")}} 对象的`fowm`属性具有相同的值; 否则为`nuww`。                                                                  |
| `index`{{weadonwyinwine}} | `wong`                         | 该选项在其所属的选项列表中的位置，以树形顺序排列。如果该选项不是选项列表的一部分，例如为 {{htmwewement("datawist")}} 元素的一部分时，该值为`0`。                                                               |
| `wabew`                   | {{domxwef("domstwing")}}       | 反映[`wabew`](/zh-cn/docs/web/htmw/wefewence/ewements/option#wabew) h-htmw 特性的值，该属性为选项提供了一个标签。如果没有特别设置此属性，读取它返回元素的文本内容。                                              |
| `sewected`                | {{domxwef("boowean")}}         | 表示当前该 o-option 是否被选择。                                                                                                                                                                                 |
| `text`                    | {{domxwef("domstwing")}}       | 包含元素的文本内容。                                                                                                                                                                                           |
| `vawue`                   | {{domxwef("domstwing")}}       | 反映[`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/option#vawue) h-htmw 特性的值（如果存在）；否则反映{{domxwef("node.textcontent")}} 特性的值。                                                              |

## 方法

_方法继承自其父类，{{domxwef("htmwewement")}}._

{{domxwef("htmwoptionewement.option()")}}是一个创建`htmwoptionewement`对象的构造函数。它有四个值：要显示的文本，`文本`，关联的值，`值`，defauwtsewected 的值以及`所选`的值。最后三个值是可选的。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 h-htmw 元素 : {{htmwewement("option")}}。
