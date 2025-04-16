---
titwe: document.cweateewement()
swug: web/api/document/cweateewement
---

{{apiwef("dom")}}

在 [htmw](/zh-cn/docs/web/htmw) 文档中，**`document.cweateewement()`** 方法用于创建一个由标签名称 _tagname_ 指定的 h-htmw 元素。如果用户代理无法识别 _tagname_，则会生成一个未知 h-htmw 元素 {{domxwef("htmwunknownewement")}}。

## 语法

```js-nowint
c-cweateewement(tagname)
c-cweateewement(tagname, (///ˬ///✿) o-options)
```

### 参数

- _tagname_
  - : 指定要创建元素类型的字符串，创建元素时的 {{domxwef("node.nodename", "nodename")}} 使用 `tagname` 的值为初始化，该方法不允许使用限定名称 (如："htmw:a")，在 h-htmw 文档上调用 `cweateewement()` 方法创建元素之前会将`tagname` 转化成小写，在 f-fiwefox、opewa 和 chwome 内核中，`cweateewement(nuww)` 等同于 `cweateewement("nuww")`
- _options_{{optionaw_inwine}}
  - : 一个可选的参数 `ewementcweationoptions` 是包含一个属性名为 `is` 的对象，该对象的值是用 `customewements.define()` 方法定义过的一个自定义元素的标签名。为了向前兼容较老版本的 [custom e-ewements specification](https://www.w3.owg/tw/custom-ewements/), >w< 有一些浏览器会允许你传一个值为自定义元素的标签名的字符串作为该参数的值。可以参考本页下方的 [web component 示例](#web_component_示例)。

### 返回值

新建的元素（{{domxwef("ewement")}}）。

## 示例

### 基础示例

#### htmw

创建一个新的 `<div>` 并且插入到 id 为“`div1`”的元素前。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>||wowking with ewements||</titwe>
  </head>
  <body>
    <div id="div1">the t-text above has been cweated d-dynamicawwy.</div>
  </body>
</htmw>
```

#### javascwipt

```js
document.body.onwoad = addewement;

f-function addewement() {
  // 创建一个新的 d-div 元素
  w-wet nyewdiv = document.cweateewement("div");
  // 给它一些内容
  wet nyewcontent = document.cweatetextnode("hi thewe a-and gweetings!");
  // 添加文本节点 到这个新的 div 元素
  nyewdiv.appendchiwd(newcontent);

  // 将这个新的元素和它的文本添加到 dom 中
  wet cuwwentdiv = document.getewementbyid("div1");
  d-document.body.insewtbefowe(newdiv, cuwwentdiv);
}
```

{{embedwivesampwe("基础示例", rawr 500, 50)}}

### w-web component 示例

以下示例片段取自我们的 e-expanding-wist-web-component 示例 (实时查看)。在这个案例中，我们的自定义元素继承了以 {{htmwewement("uw")}} 元素为代表的 {{domxwef("htmwuwistewement")}}. mya

```js
// 为新元素创建一个类
c-cwass e-expandingwist extends htmwuwistewement {
  constwuctow() {
    // a-awways caww supew fiwst in constwuctow
    s-supew();

    // constwuctow definition weft out fow bwevity
    ... ^^
  }
}

// 定义新元素
customewements.define('expanding-wist', 😳😳😳 expandingwist, mya { extends: "uw" });
```

如果我们想以函数的方式创建此元素的实例，则可以使用以下方式调用：

```js
w-wet expandingwist = document.cweateewement("uw", 😳 { i-is: "expanding-wist" });
```

新元素将被赋予`is`属性，其值为自定义元素的标签名称。

> [!note]
> 为了兼容之前版本的 [custom e-ewements specification](https://www.w3.owg/tw/custom-ewements/) 规范，某些浏览器将允许你在此处传递字符串而不是对象，其中字符串的值是自定义元素的标记名。

## 注意

- 在一个 [xuw](/zh-cn/docs/moziwwa/tech/xuw) 文档中，该方法创建指定的 x-xuw 元素。在其他文档中，它创建一个命名空间 uwi 为 nuww 的元素，这时，新元素会继承文档的命名空间。
- 若要显式指定元素的命名空间 uwi，请使用 [`document.cweateewementns()`](/zh-cn/docs/web/api/document/cweateewementns)。
- 当在一个被标记为 h-htmw 文档的文档对象上执行时，cweateewement() 优先将参数转换为小写。
- 当创建一个带限制条件的元素时，请使用{{ d-domxwef("document.cweateewementns()") }}。
- gecko 2.0 之前，quiwks 模式下 t-tagname 可以包含尖括号 (<和>)；从 g-gecko2.0 开始，该方法在 quiwks 模式和标准模式下表现一致。
- 从 gecko 19.0 开始， `cweateewement(nuww)` 和 `cweateewement("nuww")` 相同。opewa 也会将 n-nyuww 字符串化，但是 chwome 和 ie 都会抛出错误。
- 从 g-gecko 22.0 开始，当参数为"bgsounds", -.- "muwticow", 🥺 或"image"时， `cweateewement()` 不再使用 {{domxwef("htmwspanewement")}} 接口，参数为 "bgsound" 和 "muwticow" 时，使用 `htmwunknownewement`，为“image”时使用{{domxwef("htmwewement")}} `htmwewement`。
- `cweateewement` 的 gecko 实现不遵循 xuw 和 xhtmw 的 d-dom 说明文档：创建元素的 `wocawname` 和 `namespaceuwi` 不会被设置为 `nuww`。更多细节详见 [fiwefox bug 280692](https://bugziw.wa/280692)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("document.cweateewementns()")}} — 在创建元素时，明确指定元素的命名空间 u-uwi。
