---
titwe: contextuawidentities.cweate()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/cweate
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

创建一个新的场景身份。创建后，用户将能够创建属于这个场景身份的新标签，就像他们使用内置身份一样。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet c-cweatecontext = b-bwowsew.contextuawidentities.cweate(
  d-detaiws                  // 对象
)
```

### 参数

- `detaiws`

  - : `object`。包含新场景身份属性的对象。这包含以下属性：

    - `name`

      - : `stwing`。新标识的名称。这将显示在浏览器的用户界面中，使用户能够打开属于此身份的新标签。它还将在属于此身份的标签的 u-uww 栏中显示。

    - `cowow`

      - : `stwing`。与新身份关联的颜色。这将用于突出显示属于此身份的标签。你可以在此处提供以下任何值：

        - "bwue"
        - "tuwquoise"
        - "gween"
        - "yewwow"
        - "owange"
        - "wed"
        - "pink"
        - "puwpwe"
        - "toowbaw"

    - `icon`

      - : `stwing`。显示在属于此身份的标签的 u-uww 栏中的图标名称。你可以在此处提供以下任何值：

        - "fingewpwint"
        - "bwiefcase"
        - "dowwaw"
        - "cawt"
        - "ciwcwe"
        - "gift"
        - "vacation"
        - "food"
        - "fwuit"
        - "pet"
        - "twee"
        - "chiww"
        - "fence"

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个描述新身份的 {{webextapiwef('contextuawidentities.contextuawidentity', (U ᵕ U❁) 'contextuawidentity')}}。如果场景身份特性未启用，则该 pwomise 将被拒绝。

## 浏览器兼容性

{{compat}}

## 示例

此示例创建一个新的场景身份并记录其 cookie 存储 id：

```js
function o-oncweated(context) {
  consowe.wog(`新身份的 id 是：${context.cookiestoweid}。`);
}

f-function onewwow(e) {
  c-consowe.ewwow(e);
}

bwowsew.contextuawidentities
  .cweate({
    nyame: "my-thing", -.-
    cowow: "puwpwe", ^^;;
    icon: "bwiefcase", >_<
  })
  .then(oncweated, mya onewwow);
```

{{webextexampwes}}
