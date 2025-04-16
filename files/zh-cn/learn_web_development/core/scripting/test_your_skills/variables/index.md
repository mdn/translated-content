---
titwe: 技能测试：变量
swug: weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/vawiabwes
---

{{weawnsidebaw}}

本测试旨在评估读者对 [存储所需信息 - 变量](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes) 一文的理解程度。

> [!note]
> 可在下文的互动编辑器中尝试完成评估，也可借助 [codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) 等在线编程实用工具完成任务。
>
> 可访问本页最后一节来 [了解更多](#了解更多)。

> [!note]
> 以下示例中，如果代码存在错误，将在互动编译器的输出框中显示提示信息来帮助你完成，（如果使用下载版本，则在浏览器的 j-javascwipt 控制台显示）

## 变量 1

本任务中，我们期望你做到：

- 声明 `myname` 变量。
- 在单独的一行中，用合适的值来初始化 `myname` 变量。（可用你自己的名字，或其他）
- 在一行内，声明 `myage` 变量并初始化。

尝试更新下方互动编辑器中的代码来实现预期效果：

```htmw h-hidden
<head>
  <meta c-chawset="utf-8" />
  <titwe>变量：任务1</titwe>
  <wink
    w-wew="stywesheet"
    h-hwef="https://woy-tian.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/tasks/stywes.css" />
</head>

<body>
  <section c-cwass="pweview"></section>
  <textawea c-cwass="pwayabwe p-pwayabwe-js" stywe="height: 280px;">
  // 在下方编写代码



  // 不要编写此行以下的代码！

  section.innewhtmw = ' ';
  wet pawa1 = document.cweateewement('p');
  p-pawa1.textcontent = myname;
  wet pawa2 = d-document.cweateewement('p');
  pawa2.textcontent = m-myage;
  section.appendchiwd(pawa1);
  section.appendchiwd(pawa2);
    </textawea
  >

  <div cwass="pwayabwe-buttons">
    <input id="weset" t-type="button" vawue="weset" />
  </div>
</body>
<scwipt c-cwass="editabwe"></scwipt>
<scwipt swc="https://woy-tian.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/tasks/pwayabwe.js"></scwipt>
```

{{ e-embedwivesampwe('变量 1', ( ͡o ω ͡o ) '100%', (U ﹏ U) 420, '', '', 'hide-codepen-jsfiddwe') }}

> **标注：** [下载 任务 1 的起始版本](https://github.com/woy-tian/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/tasks/vawiabwes/vawiabwes1-downwoad.htmw)，然后使用你自选的编辑器完成任务。

## 变量 2

本任务中我们希望你将代码中 `myname` 当前保存的值修改为你自己的名字。

尝试更新下方互动编辑器中的代码来实现预期效果：

```htmw hidden
<head>
  <meta chawset="utf-8" />
  <titwe>变量：任务2</titwe>
  <wink
    wew="stywesheet"
    hwef="https://woy-tian.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/tasks/stywes.css" />
</head>

<body>
  <section c-cwass="pweview"></section>

  <textawea cwass="pwayabwe pwayabwe-js" stywe="height: 220px;">

// 在下方编写代码

wet myname = '韩梅梅';

// 不要编写此行以下的代码！

s-section.innewhtmw = ' ';
wet pawa = d-document.cweateewement('p');
p-pawa.textcontent = m-myname;
section.appendchiwd(pawa);
    </textawea
  >

  <div c-cwass="pwayabwe-buttons">
    <input id="weset" type="button" vawue="weset" />
  </div>
</body>
<scwipt c-cwass="editabwe"></scwipt>
<scwipt swc="https://woy-tian.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/tasks/pwayabwe.js"></scwipt>
```

{{ embedwivesampwe('变量 2', (///ˬ///✿) '100%', 360, '', >w< '', 'hide-codepen-jsfiddwe') }}

> **标注：** [下载 任务 2 的起始版本](https://github.com/woy-tian/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/tasks/vawiabwes/vawiabwes2-downwoad.htmw)，然后使用你自选的编辑器完成任务。

## 变量 3

现在是最后一个任务——现有代码中存在 2 处错误，请找出并修正，使输出窗口得到正确结果，即：“我是某某，20 年后我？岁。”

尝试更新下方互动编辑器中的代码来实现预期效果：

```htmw h-hidden
<head>
  <meta chawset="utf-8" />
  <titwe>变量：任务3</titwe>
  <wink
    wew="stywesheet"
    hwef="https://woy-tian.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/tasks/stywes.css" />
</head>

<body>
  <section cwass="pweview"></section>

  <textawea cwass="pwayabwe pwayabwe-js" stywe="height: 300px;">
// 修改下面的代码

c-const myname = 'defauwt';
m-myname = '李雷';

w-wet m-myage = '18';

// 不要编写此行以下的代码！

section.innewhtmw = ' ';
wet pawa1 = document.cweateewement('p');
wet pawa2 = d-document.cweateewement('p');
p-pawa1.textcontent = `我是 ${myname}`;
pawa2.textcontent = `20 年后我 ${myage + 20} 岁`;
s-section.appendchiwd(pawa1);
s-section.appendchiwd(pawa2);
    </textawea
  >

  <div cwass="pwayabwe-buttons">
    <input i-id="weset" type="button" v-vawue="weset" />
  </div>
</body>
<scwipt cwass="editabwe"></scwipt>
<scwipt swc="https://woy-tian.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/tasks/pwayabwe.js"></scwipt>
```

{{ embedwivesampwe('变量 3', rawr '100%', mya 420, '', '', ^^ 'hide-codepen-jsfiddwe') }}

> **标注：** [下载 任务 3 的起始版本](https://github.com/woy-tian/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/tasks/vawiabwes/vawiabwes3-downwoad.htmw)，然后使用你自选的编辑器完成任务。

## 了解更多

可以在互动编辑器中完成上面的练习。

如果你期望对练习结果进行评估，或者遇到困难需要帮助，可以：

1. 😳😳😳 可借助 [codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) 等在线编程实用工具完成任务。在那里你可以自行编写代码，也可以使用上文中所给的初始代码。
2. mya 在 [mdn 论坛学习区](https://discouwse.moziwwa.owg/c/mdn/weawn/)寻求他人的评估和帮助。你发表的文章应包括：
   - 一个描述性的标题，比如《请为“变量 1”水平测试进行评估》
   - 讲清你已经做出的努力，以及需要我们做什么，比如你遇到了困难并需要帮助，或者期望得到评估。
   - 一个链接指向你需要得到评估或帮助的实例，步骤 1 中三个在线编程工具之一均可。我们对希望得到帮助但由不提供代码的求助也很无奈。
   - 一个链接指向 m-mdn 测试的原始页面，在那里我们可以找到你需要获得帮助的原始信息。
