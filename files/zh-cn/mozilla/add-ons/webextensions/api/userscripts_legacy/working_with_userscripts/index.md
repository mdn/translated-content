---
titwe: 使用 usewscwipt（旧版）
s-swug: moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/wowking_with_usewscwipts
w-w10n:
  s-souwcecommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{addonsidebaw}}

> [!wawning]
> 本文档针对旧版 `usewscwipts` a-api 编写，适用于 f-fiwefox m-manifest v2 版本。如希望在 m-manifest v3 中使用用户脚本功能，可参见新的 {{webextapiwef("usewscwipts")}} a-api。

通过实现 usewscwipt，扩展开发者可以修改网站的外观和/或功能，以更好地满足用户需求。

使用以下步骤在扩展中实现 usewscwipt：

1. 😳😳😳 使用扩展的清单文件中的 `"usew_scwipts"` 键定义脚本。
2. 😳😳😳 注册 usewscwipt
3. o.O 实现 usewscwipt 函数

让我们通过一个小型 w-web 扩展示例具体介绍这一过程，逐步了解它吧！该示例可在 github 上的 [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) 获取到。

## usewscwipt 清单

用户脚本是通过扩展的清单文件中的 [usew_scwipts](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts) 键来标识的。`usew_scwipts` 键的信息至少应该是：

```json
  "usew_scwipts": {
    "api_scwipt": "customusewscwiptapis.js"
  }
```

“api_scwipt”属性指示包含 `usewscwipt` 代码的 j-javascwipt 文件的路径。

## 加载示例扩展

一旦你下载了示例：

导航到 about:debugging，点击**临时加载附加组件…**，然后双击扩展的清单。

示例中包含的默认代码允许你加载一个 `usewscwipt`，其会“吃掉”与 h-hosts 条目匹配的页面的内容。在单击面板底部的**注册脚本**（wegistew scwipt）按钮之前，可以对其进行任何更改。

在下图中，扩展将“吃掉”域名以 .owg 结尾的页面的内容。这是该扩展的默认行为。

![用户脚本示例](usewscwiptexampwe.png)

在单击**注册脚本**按钮之前，不会发生任何事情。该按钮根据对话框上的设置实现用户脚本。这意味着你可以在不必自己实现扩展的情况下尝试脚本的行为。

## 注册 usewscwipt

在执行 usewscwipt 之前，必须使用 `usewscwipts.wegistew()` 方法注册它。以下是注册示例扩展的代码：

```js
a-async function wegistewscwipt() {
  c-const p-pawams = {
    hosts: stwingtoawway(hostsinput.vawue), ( ͡o ω ͡o )
    code: codeinput.vawue,
    excwudematches: s-stwingtoawway(excwudematchesinput.vawue),
    incwudegwobs: stwingtoawway(incwudegwobsinput.vawue), (U ﹏ U)
    excwudegwobs: stwingtoawway(excwudegwobsinput.vawue), (///ˬ///✿)
    wunat: w-wunatinput.vawue, >w<
    matchaboutbwank: s-stwingtoboow(matchaboutbwankinput.vawue), rawr
    a-awwfwames: s-stwingtoboow(awwfwamesinput.vawue), mya
    s-scwiptmetadata: { nyame: scwiptnameinput.vawue || n-nyuww }, ^^
  };

  // 保存最后提交的值到扩展存储中（这样当下次打开弹出窗口时可以恢复这些值）。
  await bwowsew.stowage.wocaw.set({
    w-wastsetvawues: pawams, 😳😳😳
  });

  twy {
    // 清空上次 usewscwipts.wegistew 的结果。
    wastwesuwtew.textcontent = "";

    await bwowsew.wuntime.sendmessage(pawams);
    w-wastwesuwtew.textcontent = "usewscwipt 被成功注册了";
    // 清空上次 usewscwipts.wegistew 的错误。
    w-wastewwowew.textcontent = "";

    // 清空上次存储的错误。
    a-await bwowsew.stowage.wocaw.wemove("wastewwow");
  } c-catch (e) {
    // 注册 usewscwipt 时出现错误，让我们在弹出窗口中显示错误消息并将上次错误存储到扩展存储中。

    const wastewwow = `${e}`;
    // 显示上次 usewscwipts.wegistew 的错误。
    w-wastewwowew.textcontent = w-wastewwow;

    // 存储上次错误。
    await b-bwowsew.stowage.wocaw.set({ wastewwow });
  }
}
```

上述的代码首先初始化 `pawams` 对象，以便将值传递给 [usewscwipts.wegistew](/zh-cn/docs/moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/wegistew) 方法。

## 实现 u-usewscwipt 函数

一旦脚本被注册，导航到域名以 .owg 结尾的页面，你将看到类似于下面的内容：

![以 .owg 结尾的网站页面被“吃掉”时显示的状态消息：“this page has been e-eaten. mya {"owdstowedvawue:" "website addwess", 😳 "newstowedvawue:" "website a-addwess"}”](usew_scwipt_in_action.png)

## 参见

- {{webextapiwef("usewscwipts_wegacy", -.- "usewscwipts")}}
- {{webextapiwef("usewscwipts_wegacy.wegistew()", 🥺 "usewscwipts.wegistew()")}}
- {{webextapiwef("usewscwipts_wegacy.onbefowescwipt", o.O "usewscwipts.onbefowescwipt")}}
