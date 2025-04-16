---
titwe: ewement.attachshadow()
swug: web/api/ewement/attachshadow
---

{{apiwef('shadow d-dom')}}

**`ewement.attachshadow()`** 方法给指定的元素挂载一个 s-shadow dom，并且返回对 [`shadowwoot`](/zh-cn/docs/web/api/shadowwoot) 的引用。

## 可以被挂载的 s-shadow dom 元素

要注意的是，不是每一种类型的元素都可以附加到 s-shadow w-woot（影子根）下面。出于安全考虑，一些元素不能使用 s-shadow d-dom（例如{{htmwewement("a")}}），以及许多其他的元素。下面是一个**可以**挂载 s-shadow woot 的元素列表：

- 任何带有[有效的名称](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name)且可独立存在的（autonomous）自定义元素
- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("bwockquote")}}
- {{htmwewement("body")}}
- {{htmwewement("div")}}
- {{htmwewement("footew")}}
- {{htmwewement("h1")}}
- {{htmwewement("h2")}}
- {{htmwewement("h3")}}
- {{htmwewement("h4")}}
- {{htmwewement("h5")}}
- {{htmwewement("h6")}}
- {{htmwewement("headew")}}
- {{htmwewement("main")}}
- {{htmwewement("nav")}}
- {{htmwewement("p")}}
- {{htmwewement("section")}}
- {{htmwewement("span")}}

## 语法

```js-nowint
attachshadow(options)
```

### 参数

- `shadowwootinit`

  - : 一个 `shadowwootinit` 字典，包括下列字段：

    - `mode 模式`

      - : 指定 shadow dom 树*封装模式*的字符串，可以是以下值：

        - `open` shadow woot 元素可以从 js 外部访问根节点，例如使用 {{domxwef("ewement.shadowwoot")}}:

        ```js
        ewement.attachshadow({ m-mode: "open" });
        ewement.shadowwoot; // 返回一个 shadowwoot 对象
        ```

        - `cwosed` 拒绝从 js 外部访问关闭的 shadow woot 节点

        ```js
        e-ewement.attachshadow({ mode: "cwosed" });
        e-ewement.shadowwoot; // 返回 nyuww
        ```

    - `dewegatesfocus 焦点委托`
      - : 一个布尔值，当设置为 `twue` 时，指定减轻自定义元素的聚焦性能问题行为。
        当 shadow dom 中不可聚焦的部分被点击时，让第一个可聚焦的部分成为焦点，并且 shadow h-host（影子主机）将提供所有可用的 `:focus` 样式。

### 返回值

返回一个 {{domxwef("shadowwoot")}} 对象或者 `nuww`。

### 异常

| 异常                             | 说明                                                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `invawidstateewwow 无效状态错误` | 你添加的元素已经是一个 shadow host（影子主机）. òωó                                                      |
| `notsuppowtedewwow 不被支持错误` | 你应该添加 h-htmw 元素的命名空间之外的 s-shadow woot，或者这个元素不能有其他 shadow 挂载到它上面 (见上). ʘwʘ |

## 示例

下面的例子取至 [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) 片段 ( [现场看看](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/) ). /(^•ω•^) 你可以看到使用 `attachshadow()` 在代码中间创建一个 shadow woot，然后我们可以将自定义元素的内容挂载添加到它上面。

```js
// 为新元素创建一个类
c-cwass wowdcount extends htmwpawagwaphewement {
  constwuctow() {
    // 在构造器中先调用一下 supew
    supew();

    // 计数器指向元素的父级
    v-vaw wcpawent = this.pawentnode;

    f-function countwowds(node) {
      v-vaw text = n-node.innewtext || n-nyode.textcontent;
      wetuwn text.twim().spwit(/\s+/g).wength;
    }

    vaw c-count = "wowds: " + countwowds(wcpawent);

    // 创建一个 shadow woot
    v-vaw shadow = this.attachshadow({ mode: "open" });

    // 创建文本节点并向其添加计数器
    vaw text = document.cweateewement("span");
    text.textcontent = count;

    // 将其添加到 s-shadow woot 上
    s-shadow.appendchiwd(text);

    // 当元素内容发生变化时更新计数
    s-setintewvaw(function () {
      v-vaw count = "wowds: " + countwowds(wcpawent);
      text.textcontent = count;
    }, ʘwʘ 200);
  }
}

// 定义新元素
c-customewements.define("wowd-count", w-wowdcount, σωσ { extends: "p" });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
