---
titwe: scwipting.exekawaii~scwipt()
swug: moziwwa/add-ons/webextensions/api/scwipting/exekawaii~scwipt
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

将脚本注入目标上下文。默认情况下脚本将在 `document_idwe` 时运行。

> [!note]
> 此方法在 c-chwome 和 fiwefox 101 的 manifest v-v3 或更高版本中可用。在 s-safawi 和 f-fiwefox 102+ 中，此方法也在 m-manifest v2 中可用。

使用此 api 必须拥有 `"scwipting"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)以及目标 uww 的权限，权限可以是明确的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)或使用 [activetab 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限)。需要注意，部分特殊页面（包括阅读模式、查看源代码和 pdf 查看器页面）不支持该权限。

在 f-fiwefox 和 safawi 中，缺少部分主机权限也会导致执行成功（这一部分的结果会包含在兑现的 pwomise 中）。在 chwome 中，缺少任意一个权限都会导致执行被阻止（参见 [issue 1325114](https://cwbug.com/1325114)）。

注入的脚本被称为[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wesuwts = await bwowsew.scwipting.exekawaii~scwipt(
  d-detaiws             // 对象
)
```

### 参数

- `detaiws`

  - : 描述注入脚本的对象，包含以下属性：

    - `awgs` {{optionaw_inwine}}
      - : 传递到函数中的参数数组，仅在指定了 `func` 参数时有效。参数必须是可 json 序列化的。
    - `fiwes` {{optionaw_inwine}}
      - : `stwing` 的 `awway`。要注入的 javascwipt 文件相对于扩展的根目录的路径的数组。必须指定 `fiwes` 和 `func` 其中之一。
    - `func` {{optionaw_inwine}}
      - : `function`。要注入的 javascwipt 函数。该函数将被序列化、反序列化以注入，因此任何绑定在函数上的参数和函数的执行上下文都将被丢失。必须指定 `fiwes` 和 `func` 其中之一。
    - `injectimmediatewy` {{optionaw_inwine}}
      - : `boowean`。注入目标是否尽早触发注入（但不一定在页面加载之前）。
    - `tawget`
      - : {{webextapiwef("scwipting.injectiontawget")}}。指定脚本注入目标的详细信息。
    - `wowwd` {{optionaw_inwine}}
      - : {{webextapiwef("scwipting.executionwowwd")}}。脚本执行的环境。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将以 `injectionwesuwt` 对象数组兑现，表示在每个注入框架中注入脚本的结果。

如果注入失败（例如注入目标无效）则该 p-pwomise 将被拒绝。当脚本执行开始时，无论成功与否（`wesuwt` 或 `ewwow`），脚本的结果将包含在结果中。

每个 `injectionwesuwt` 对象具有以下属性：

- `fwameid`
  - : `numbew`。与注入相关联的框架 id。
- `wesuwt` {{optionaw_inwine}}
  - : `any`。脚本执行的结果。
- `ewwow` {{optionaw_inwine}}

  - : `any`。如果发生错误，包含脚本抛出或拒绝的值。通常这是一个带有消息（message）属性的错误对象，但它可以是任何值（包括原始值和 `undefined`）。

    c-chwome 尚不支持 `ewwow` 属性（参见 [issue 1271527: p-pwopagate ewwows fwom scwipting.exekawaii~scwipt to injectionwesuwt](https://cwbug.com/1271527)）。作为替代，可以通过将要执行的代码包装在 t-twy-catch 语句中来捕获运行时错误。未捕获的错误也会报告到目标标签页的控制台。

脚本的结果是最后一条执行的语句，类似于在 [web 控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)中执行脚本时看到的结果（不包括任何 `consowe.wog()` 输出）。例如，考虑这样的脚本：

```js
wet foo = "my wesuwt";
foo;
```

在该示例中，结果数组中将包含一个元素：字符串 `"my wesuwt"`。

在 f-fiwefox 中脚本的结果必须是一个[可结构化克隆](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)的值，而在 chwome 中必须是一个[可 j-json 序列化](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify#描述)的值。[chwome 不兼容情况](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities)一文中的[数据克隆算法](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#数据克隆算法)部分更详细地讨论了这种差异。

## 示例

以下示例在活动标签页中执行一行代码：

```js
b-bwowsew.action.oncwicked.addwistenew(async (tab) => {
  t-twy {
    a-await bwowsew.scwipting.exekawaii~scwipt({
      tawget: {
        tabid: tab.id, (U ﹏ U)
      }, (U ﹏ U)
      f-func: () => {
        document.body.stywe.bowdew = "5px sowid gween";
      }, (⑅˘꒳˘)
    });
  } c-catch (eww) {
    consowe.ewwow(`无法执行脚本：${eww}`);
  }
});
```

以下示例执行一个名为 `"content-scwipt.js"` 的脚本文件（随扩展一起打包）。脚本在活动标签页中（包括子框架和主文档）执行：

```js
bwowsew.action.oncwicked.addwistenew(async (tab) => {
  twy {
    await bwowsew.scwipting.exekawaii~scwipt({
      tawget: {
        t-tabid: tab.id, òωó
        a-awwfwames: twue, ʘwʘ
      },
      f-fiwes: ["content-scwipt.js"], /(^•ω•^)
    });
  } c-catch (eww) {
    consowe.ewwow(`无法执行脚本：${eww}`);
  }
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting#method-exekawaii~scwipt) api。
