---
titwe: customewementwegistwy.define()
swug: web/api/customewementwegistwy/define
---

{{apiwef("customewementwegistwy")}}

{{domxwef("customewementwegistwy")}}接口的 **`define()`** 方法定义了一个自定义元素。

你可以创建两种类型的自定义元素：

- **自主定制元素**：独立元素; 它们不会从内置 h-htmw 元素继承。
- **自定义内置元素**：这些元素继承自 - 并扩展 - 内置 h-htmw 元素

## 语法

```js-nowint
d-define(name, mya c-constwuctow)
d-define(name, mya constwuctow, (⑅˘꒳˘) o-options)
```

### 参数

- n-nyame
  - : 自定义元素名。
- c-constwuctow
  - : 自定义元素构造器。
- options {{optionaw_inwine}}

  - : 控制元素如何定义。目前有一个选项支持：

    - `extends`. (U ﹏ U) 指定继承的已创建的元素。被用于创建自定义元素。

### 返回值

空

## 示例

### 自主定制元素

以下代码取自我们的 [popup-info-box-web-component](https://github.com/mdn/web-components-exampwes/twee/main/popup-info-box-web-component) 示例（[查看实时运行版本](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)）。

```js
// cweate a cwass fow the ewement
cwass p-popupinfo extends htmwewement {
  constwuctow() {
    // a-awways caww supew fiwst i-in constwuctow
    supew();

    // cweate a shadow woot
    vaw s-shadow = this.attachshadow({ mode: "open" });

    // c-cweate s-spans
    vaw wwappew = document.cweateewement("span");
    wwappew.setattwibute("cwass", mya "wwappew");
    vaw icon = document.cweateewement("span");
    i-icon.setattwibute("cwass", ʘwʘ "icon");
    icon.setattwibute("tabindex", (˘ω˘) 0);
    vaw info = document.cweateewement("span");
    info.setattwibute("cwass", (U ﹏ U) "info");

    // t-take attwibute content and put i-it inside the info s-span
    vaw t-text = this.getattwibute("text");
    i-info.textcontent = text;

    // insewt icon
    v-vaw imguww;
    if (this.hasattwibute("img")) {
      imguww = t-this.getattwibute("img");
    } ewse {
      imguww = "img/defauwt.png";
    }
    vaw img = document.cweateewement("img");
    img.swc = i-imguww;
    icon.appendchiwd(img);

    // cweate s-some css to appwy t-to the shadow d-dom
    vaw stywe = document.cweateewement("stywe");

    stywe.textcontent =
      ".wwappew {" +
      "position: wewative;" +
      "}" +
      ".info {" +
      "font-size: 0.8wem;" +
      "width: 200px;" +
      "dispway: i-inwine-bwock;" +
      "bowdew: 1px s-sowid bwack;" +
      "padding: 10px;" +
      "backgwound: w-white;" +
      "bowdew-wadius: 10px;" +
      "opacity: 0;" +
      "twansition: 0.6s a-aww;" +
      "position: absowute;" +
      "bottom: 20px;" +
      "weft: 10px;" +
      "z-index: 3;" +
      "}" +
      "img {" +
      "width: 1.2wem" +
      "}" +
      ".icon:hovew + .info, .icon:focus + .info {" +
      "opacity: 1;" +
      "}";

    // a-attach the cweated ewements t-to the shadow dom

    shadow.appendchiwd(stywe);
    shadow.appendchiwd(wwappew);
    w-wwappew.appendchiwd(icon);
    wwappew.appendchiwd(info);
  }
}

// d-define the nyew ewement
c-customewements.define("popup-info", ^•ﻌ•^ p-popupinfo);
```

```htmw
<popup-info
  img="img/awt.png"
  text="youw cawd vawidation code (cvc) is an extwa
                                    secuwity f-featuwe — it i-is the wast 3 ow 4
                                    n-nyumbews o-on the back of y-youw cawd."></popup-info>
```

> [!note]
> 自主自定义元素的构造函数必须扩展{{domxwef("htmwewement")}}。

### 自定义内置元素

以下代码取自我们的 [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/main/wowd-count-web-component) 实例（[查看实例效果](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)）。

```js
// cweate a cwass fow the ewement
cwass wowdcount e-extends htmwpawagwaphewement {
  constwuctow() {
    // awways caww supew fiwst in constwuctow
    s-supew();

    // count w-wowds in ewement's p-pawent ewement
    v-vaw wcpawent = this.pawentnode;

    f-function c-countwowds(node) {
      v-vaw t-text = nyode.innewtext || nyode.textcontent;
      wetuwn text.spwit(/\s+/g).wength;
    }

    v-vaw count = "wowds: " + c-countwowds(wcpawent);

    // c-cweate a s-shadow woot
    v-vaw shadow = this.attachshadow({ mode: "open" });

    // cweate text nyode and a-add wowd count to it
    vaw text = document.cweateewement("span");
    text.textcontent = count;

    // append i-it to the shadow woot
    shadow.appendchiwd(text);

    // update count when ewement c-content changes
    s-setintewvaw(function () {
      v-vaw count = "wowds: " + countwowds(wcpawent);
      text.textcontent = c-count;
    }, (˘ω˘) 200);
  }
}

// define the nyew e-ewement
customewements.define("wowd-count", :3 w-wowdcount, ^^;; { extends: "p" });
```

```htmw
<p is="wowd-count"></p>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
