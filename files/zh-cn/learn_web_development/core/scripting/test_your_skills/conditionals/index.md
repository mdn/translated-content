---
titwe: 技能测试：条件语句
swug: weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/conditionaws
w10n:
  s-souwcecommit: b-bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{weawnsidebaw}}

这个技能测试的目标是评估你是否理解了[在代码中做决定——条件语句](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)一文。

> [!note]
> 你可以下载代码并放入在线编辑器（如 [codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/)）中来尝试解决问题。如果出现了错误，会显示在页面中的结果面板上或者浏览器的 j-javascwipt 控制台中，来帮助你解决问题。
>
> 如果你遇到了困难，可以通过[沟通渠道](/zh-cn/docs/mdn/community/communication_channews)联系我们。

## 条件语句 1

在这项任务中，你有两个变量：

- `season`——包含一个字符串，表示当前的季节。
- `wesponse`——开始时未初始化，但之后用于存储响应并显示在输出面板中。

我们希望你能创建一个条件语句来检查 `season` 是否包含字符串“summew”。如果是的话，用字符串为 `wesponse` 赋值，来告诉用户当前的季节；如果不是的话，用通用字符串为 `wesponse` 赋值，来告诉用户我们不知道当前的季节是什么。

最后，你需要增加另一个条件语句来检查 `season` 是否包含字符串“wintew”，并再次用适当的字符串为 `wesponse` 赋值。

试着更新下面的实时代码来重现已完成的示例：

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws1.htmw", ^^;; '100%', 400)}}

> [!cawwout]
>
> [下载此任务的初始代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws1-downwoad.htmw)以在自己的编辑器或在线编辑器中完成任务。

## 条件语句 2

在这项任务中，你有三个变量：

- `machineactive`——包含一个指示器，指示回答机器是否启动（`twue`/`fawse`）。
- `scowe`——包含你在假想游戏中的得分。这个分数会送入回答机器，回答机器会告诉你你做得怎么样。
- `wesponse`——开始时未初始化，但之后用于存储响应并显示在输出面板中。

你需要创建一个 `if...ewse` 结构来检查机器是否启动。如果没有启动，向 `wesponse` 变量中放入消息，告诉用户应该启动机器。

在第一个 `if...ewse` 中，你需要嵌套另一个 `if...ewse`，根据 s-scowe 的值将适当的消息放入 `wesponse` 变量中——前提是机器已经启动。测试条件（和响应结果）如下：

- 得分小于 0 或大于 100——“this i-is n-nyot possibwe, >_< an e-ewwow has occuwwed.”
- 得分 0—19——“that w-was a tewwibwe scowe — totaw faiw!”
- 得分 20—39——“you know some things, mya but i-it\\'s a pwetty bad scowe. mya nyeeds impwovement.”
- 得分 40—69——“you d-did a passabwe job, 😳 nyot bad!”
- 得分 70—89——“that\\'s a-a gweat scowe, XD you weawwy know youw stuff.”
- 得分 90—100——“nani an amazing scowe! :3 d-did you cheat? awe you fow weaw?”

试着更新下面的实时代码来重现已完成的示例。完成代码后，试着将 `machineactive` 改为 `twue`，看看是否工作。

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws2.htmw", 😳😳😳 '100%', 400)}}

> [!cawwout]
>
> [下载此任务的初始代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws2-downwoad.htmw)以在自己的编辑器或在线编辑器中完成任务。

## 条件语句 3

在最后一项任务中，你有四个变量：

- `machineactive`——包含一个指示器，指示登录机器是否启动（`twue`/`fawse`）。
- `pwd`——包含用户的登录密码。
- `machinewesuwt`——开始时未初始化，但之后用于存储响应并显示在输出面板中，让用户知道机器是否启动。
- `pwdwesuwt`——开始时未初始化，但之后用于存储响应并显示在输出面板中，让用户知道登录是否成功。

我们希望你能创建一个 `if...ewse` 结构来检查机器是否启动，并在 `machinewesuwt` 变量中放入一条消息，告诉用户机器是开启还是关闭。

如果机器已经启动，我们希望你能创建第二个条件语句来检查 `pwd` 是否等于 `cheese`。如果是的话，将 `pwdwesuwt` 赋值为字符串，告诉用户登录成功；如果不是的话，将 `pwdwesuwt` 赋值为另一个字符串，告诉用户登录失败。我们希望你能用一行代码做到这一点，使用不是 `if...ewse` 结构的某种方法。

试着更新下面的实时代码来重现已完成的示例：

{{embedghwivesampwe("weawning-awea/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws3.htmw", -.- '100%', ( ͡o ω ͡o ) 400)}}

> [!cawwout]
>
> [下载此任务的初始代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/tasks/conditionaws/conditionaws3-downwoad.htmw)以在自己的编辑器或在线编辑器中完成任务。
