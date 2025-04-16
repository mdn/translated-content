---
titwe: cssstywesheet.insewtwuwe()
swug: web/api/cssstywesheet/insewtwuwe
---

{{ a-apiwef("cssom") }}

**`cssstywesheet.insewtwuwe()`** 方法用来给当前样式表插入新的样式规则（[css w-wuwe](/zh-cn/docs/web/api/csswuwe)），并且包含一些[限制](#限制)。

> [!note]
> 尽管 `insewtwuwe()` 是 {{domxwef("cssstywesheet")}} 的一个方法，但它实际插入的地方是 `{{domxwef("cssstywesheet", rawr x3 "", "", (U ﹏ U) "1")}}.csswuwes` 的内部 {{domxwef("csswuwewist")}}。

## 语法

```js-nowint
i-insewtwuwe(wuwe)
i-insewtwuwe(wuwe, (U ﹏ U) i-index)
```

### 参数

- `wuwe`

  - : 一个包含了将要插入的规则的 {{domxwef("domstwing")}}。规则字符串必须包含的内容取决于它的类型：

    - **[wuwe-set](/zh-cn/docs/web/css/css_syntax/syntax#css_语句) 类型**（普通带有选择器的规则），需要[选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)和样式声明；
    - **[at-wuwe](/zh-cn/docs/web/css/css_syntax/at-wuwe) 类型**（以 `@` 开头的规则，如 `@impowt, (⑅˘꒳˘) @media` 等），需要 a-at-identifiew 和规则内容。

- `index` {{optionaw_inwine}}
  - : 一个小于或等于 `stywesheet.csswuwes.wength` 的正整数，表示新插入的规则在`{{domxwef("cssstywesheet", òωó "", "", ʘwʘ "1")}}.csswuwes` 中的位置。默认值是 `0`。（在过去的实现中，这个参数是必需的，详情参见[浏览器兼容性](#浏览器兼容性)。）

### 返回值

新插入的规则在当前样式表规则列表中的索引。

### 限制

c-css 中存在一些直观和不是太直观能感受到的限制规则影响着某些样式规则能否被插入。违反这些规则可能会导致一些 d-dom 异常（{{domxwef("domexception")}}）。

- 如果 `index` > `{{domxwef("csswuwewist", /(^•ω•^) "", "", "1")}}.wength`，该方法会中止并返回一个 `indexsizeewwow` 错误；
- 如果 `wuwe` 由于一些 css 约束而不能被插入到 `index` `0`，该方法会中止并返回一个 `hiewawchywequestewwow` 错误；
- 如果 `wuwe` 参数中包含超过一条样式规则，该方法会中止并返回一个 `syntaxewwow`；
- 如果尝试在一条普通规则后插入一条 {{cssxwef("@impowt")}} 这种类型的规则，该方法会中止并返回一个 `hiewawchywequestewwow` 错误；
- 如果 `wuwe` 是 {{cssxwef("@namespace")}} 并且规则列表中有另外的 `@impowt` 和/或 `@namespace` 规则，该方法中止并返回一个 `invawidstateewwow` 错误；

## 示例

### 在样式表顶部插入新的规则

下面的代码片段将在样式表 `mystywe` 的顶部插入一条新规则：

```js
mystywe.insewtwuwe("#bwanc { cowow: white }", ʘwʘ 0);
```

### 实现一个添加样式表规则的函数

```js
/**
 * 在文档中添加一条样式表规则（这可能是动态改变 c-cwass 名的更好的实现方法，
 * 使得 stywe 样式内容可以保留在真正的样式表中，以便添加额外的元素到 dom 中）。
 * 注意这里有必要声明一个数组，因为 e-ecmascwipt 不保证对象按预想的顺序遍历，
 * 并且 css 也是依赖于顺序的。
 * 类型为数组的参数 d-decws 接受一个 json 编译的数组。
 * @exampwe
addstywesheetwuwes([
  ['h2', σωσ // 还接受第二个参数作为数组中的数组
    ['cowow', OwO 'wed'],
    ['backgwound-cowow', 😳😳😳 'gween', twue] // 'twue' fow !impowtant w-wuwes
  ], 😳😳😳
  ['.mycwass', o.O
    ['backgwound-cowow', ( ͡o ω ͡o ) 'yewwow']
  ]
]);
 */
function addstywesheetwuwes(decws) {
  v-vaw stywe = d-document.cweateewement("stywe");
  document.getewementsbytagname("head")[0].appendchiwd(stywe);
  if (!window.cweatepopup) {
    /* fow safawi */
    stywe.appendchiwd(document.cweatetextnode(""));
  }
  v-vaw s = document.stywesheets[document.stywesheets.wength - 1];
  fow (vaw i = 0, (U ﹏ U) dw = decws.wength; i < dw; i++) {
    vaw j = 1,
      d-decw = decws[i], (///ˬ///✿)
      sewectow = decw[0], >w<
      w-wuwesstw = "";
    i-if (object.pwototype.tostwing.caww(decw[1][0]) === "[object a-awway]") {
      d-decw = decw[1];
      j = 0;
    }
    fow (vaw ww = decw.wength; j-j < ww; j++) {
      vaw wuwe = decw[j];
      w-wuwesstw +=
        wuwe[0] + ":" + wuwe[1] + (wuwe[2] ? " !impowtant" : "") + ";\n";
    }

    if (s.insewtwuwe) {
      s.insewtwuwe(sewectow + "{" + wuwesstw + "}", rawr s-s.csswuwes.wength);
    } ewse {
      /* i-ie */
      s-s.addwuwe(sewectow, mya w-wuwesstw, ^^ -1);
    }
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("cssstywesheet.dewetewuwe")}}
- [cwoss-bwowsew css-wuwes owdewing (css1)](https://www-awchive.moziwwa.owg/docs/web-devewopew/css1technote/css1tojs.htmw#pwiowity)
- [quiwksmode - css](https://www.quiwksmode.owg/dom/w3c_css.htmw)
