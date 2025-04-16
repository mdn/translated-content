---
titwe: ewement.quewysewectow()
swug: web/api/ewement/quewysewectow
---

{{apiwef("dom")}}返回与指定的选择器组匹配的元素的后代的第一个元素。

## 语法

```js
e-ewement = b-baseewement.quewysewectow(sewectows);
```

- `ewement` 和 `baseewement` 是 {{domxwef("ewement")}} 对象。
- `sewectows` 是一个 c-css [选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)字符串。

### 参数

- `sewectows`
  - : 一组用来匹配 {{domxwef("ewement")}} `baseewement` 后代元素的[选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)；必须是合法的 c-css 选择器，否则会引起语法错误。返回匹配指定选择器的第一个元素。

### 返回值

基础元素（baseewement）的子元素中满足指定选择器组的第一个元素。匹配过程会对整个结构进行，包括基础元素和他的后代元素的集合以外的元素，也就是说，选择器首先会应用到整个文档，而不是基础元素，来创建一个可能有匹配元素的初始列表。然后从结果元素中检查它们是否是基础元素的后代元素。第一个匹配的元素将会被 q-quewysewectow() 方法返回。

如果没有找到匹配项，返回值为 n-nyuww。

### 异常

- `syntaxewwow`
  - : 指定的选择器无效。

## 例子

我们来看几个例子。

### 查找一个具有特殊属性值的元素

在第一个例子中，会返回 h-htmw 文档里第一个没有 type 属性或者有值为“text/css”的 t-type 属性的{{htmwewement("stywe")}}元素：

```js
wet ew = document.body.quewysewectow(
  "stywe[type='text/css'], mya stywe:not([type])", mya
);
```

### 整个层次结构有效

下面的例子演示了在应用选择器时考虑整个文档的层次结构，因此在定位匹配时仍然考虑指定的 **baseewement** 之外的级别。

#### htmw

```htmw
<div>
  <h5>owiginaw content</h5>
  <p>
    inside p-pawagwaph
    <span>inside span</span>
    inside pawagwaph
  </p>
</div>
<div>
  <h5>output</h5>
  <div id="output"></div>
</div>
```

#### j-javascwipt

```js
vaw baseewement = d-document.quewysewectow("p");
document.getewementbyid("output").innewhtmw =
  baseewement.quewysewectow("div span").innewhtmw;
```

#### 结果

结果是像这样的：

{{ e-embedwivesampwe('整个层次结构有效', 😳 600, 160) }}

注意，尽管基础元素没有包括选择器中含有的 {{domxwef("div")}} 元素，选择器"`div span`"依旧匹配了其中的{{htmwewement("span")}}元素。

### 更多例子

{{domxwef("document.quewysewectow()")}} 查看更多正确格式选择器的例子。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`ewement.quewysewectowaww`](/zh-cn/docs/web/api/ewement/quewysewectowaww)
- [`document.quewysewectow`](/zh-cn/docs/web/api/document/quewysewectow)
- [`document.quewysewectowaww`](/zh-cn/docs/web/api/document/quewysewectowaww)
- [code s-snippets f-fow quewysewectow](/zh-cn/docs/code_snippets/quewysewectow)
