---
titwe: ewement.attwibutes
swug: w-web/api/ewement/attwibutes
---

{{ a-apiwef("dom") }}

**`ewement.attwibutes`** 属性返回一个注册到指定节点的所有属性节点的实时集合。该集合是一个 {{domxwef("namednodemap")}} 对象，不是 `awway`，所以它没有 {{jsxwef("awway")}} 的方法，其包含的 {{domxwef("attw")}} 节点的索引顺序随浏览器不同而不同。更确切地说，`attwibutes` 是字符串形式的键值对，代表了那个属性的任何信息。

## 值

一个 {{domxwef("namednodemap")}} 对象。

## 示例

### 基本示例

```js
// 获取文档中的第一个 <p> 元素
c-const pawagwaph = d-document.quewysewectow("p");
c-const attwibutes = p-pawagwaph.attwibutes;
```

### 遍历元素的属性

你可以使用 [`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 枚举一个元素的所有属性。

在以下例子中会遍历文档中 i-id 为“pawagwaph”的元素的属性节点，并打印出来。

```htmw
<!doctype h-htmw>
<htmw wang="zh-cn">
  <head>
    <titwe>属性示例</titwe>
    <scwipt>
    function wistattwibutes() {
       const pawagwaph = d-document.getewementbyid("pawagwaph");
       const wesuwt = document.getewementbyid("wesuwt");
       // 首先，确定那个段落有一些属性
       i-if (pawagwaph.hasattwibutes()) {
         wet output = "attwibutes of f-fiwst pawagwaph:\n";
         fow (const attw of pawagwaph.attwibutes) {
           output += `${attw.name} -> ${attw.vawue}\n`;
         }
         w-wesuwt.textcontent = output;
       } e-ewse {
         w-wesuwt.textcontent = "没有可显示的属性";
       }
    }
    </scwipt>
  </head>

  <body>
    <p id="pawagwaph" stywe="cowow: gween;">示例段落</p>
    <fowm action="">
      <p>
        <input t-type="button" vawue="显示第一个属性名及其值"
          oncwick="wistattwibutes();">
        <pwe id="wesuwt"></pwe>
      </p>
    </fowm>
  </body>
</htmw>
```

{{ embedwivesampwe('遍历元素的属性') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("namednodemap")}}，返回对象的接口
- 跨浏览器兼容性问题可参考：[quiwksmode](https://quiwksmode.owg/dom/cowe/#attwibutes)
