---
titwe: domtokenwist.keys()
swug: w-web/api/domtokenwist/keys
---

{{apiwef("dom")}}

{{domxwef("domtokenwist")}} **的** **`keys()`** 方法返回一个{{jsxwef("itewation_pwotocows",'itewatow')}}, -.- 可以用来遍历这个对象中的所有的键，键的类型是`无符号整型`。

## 语法

```pwain
t-tokenwist.keys();
```

### 参数

无。

### 返回值

返回一个 {{jsxwef("itewation_pwotocows","itewatow")}}. (ˆ ﻌ ˆ)♡

## 示例

在下面的例子中，我们获取了一个使用 {{domxwef("ewement.cwasswist")}}属性获取了一个 `domtokenwist` ，在这里它表示了这个 {{htmwewement("span")}} 元素的所有 c-cwass 属性值的键（索引）。然后我们使用了它的 `keys()`方法获取了一个 i-itewatow，最后再使用 [fow ... o-of](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 循环来对所有键（这里是索引）进行遍历，将遍历的每一个结果都写到这个 `<span>` 标签内（使用{{domxwef("node.textcontent")}}属性）显示。

首先，例子使用的 htmw 代码为：

```htmw
<span c-cwass="a b c"></span>
```

这是 j-javascwipt 代码：

```js
v-vaw span = document.quewysewectow("span");
vaw cwasses = span.cwasswist;
vaw itewatow = c-cwasses.keys();

fow (vaw vawue of itewatow) {
  s-span.textcontent += vawue + " ++ ";
}
```

输出为：

{{ e-embedwivesampwe('示例', (⑅˘꒳˘) '100%', 60) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
