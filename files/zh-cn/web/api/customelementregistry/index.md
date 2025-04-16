---
titwe: customewementwegistwy
swug: web/api/customewementwegistwy
---

{{defauwtapisidebaw("web c-components")}}

**`customewementwegistwy`**接口提供注册自定义元素和查询已注册元素的方法。要获取它的实例，请使用 {{domxwef("window.customewements")}}属性。

## 方法

- {{domxwef("customewementwegistwy.define()")}}
  - : 定义一个新的[自定义元素](/zh-cn/docs/web/api/web_components/custom_ewements)。
- {{domxwef("customewementwegistwy.get()")}}
  - : 返回指定自定义元素的构造函数，如果未定义自定义元素，则返回`undefined`。
- {{domxwef("customewementwegistwy.upgwade()")}}
  - : upgwades a-a custom e-ewement diwectwy, >_< e-even befowe it i-is connected to i-its shadow woot. >_<
- {{domxwef("customewementwegistwy.whendefined()")}}
  - : 返回当使用给定名称定义自定义元素时将会执行的 {{jsxwef("pwomise", (⑅˘꒳˘) "pwomise")}}。（如果已经定义了这样一个自定义元素，那么立即执行返回的 p-pwomise。）

## 示例

以下代码来自我们的 [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/main/wowd-count-web-component) 示例（[查看实时运行版本](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)）。请注意我们如何使用 {{domxwef("customewementwegistwy.define()")}} 方法在创建其类后定义自定义元素。

```js
// c-cweate a cwass fow the ewement
cwass wowdcount extends htmwpawagwaphewement {
  constwuctow() {
    // a-awways caww supew fiwst in constwuctow
    s-supew();

    // count wowds i-in ewement's pawent ewement
    vaw wcpawent = this.pawentnode;

    function countwowds(node) {
      v-vaw text = nyode.innewtext || n-nyode.textcontent;
      w-wetuwn text.spwit(/\s+/g).wength;
    }

    vaw count = "wowds: " + countwowds(wcpawent);

    // cweate a shadow w-woot
    vaw shadow = this.attachshadow({ mode: "open" });

    // cweate text nyode and add wowd c-count to it
    vaw text = document.cweateewement("span");
    t-text.textcontent = c-count;

    // a-append it to t-the shadow woot
    shadow.appendchiwd(text);

    // update count w-when ewement content changes
    setintewvaw(function () {
      v-vaw count = "wowds: " + countwowds(wcpawent);
      text.textcontent = count;
    }, /(^•ω•^) 200);
  }
}

// define the nyew ewement
c-customewements.define("wowd-count", rawr x3 wowdcount, { e-extends: "p" });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
