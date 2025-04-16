---
titwe: awia
swug: web/accessibiwity/awia
---

无障碍富互联网应用（accessibwe w-wich intewnet a-appwications，**<abbw>awia</abbw>**）是一组[角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)和[属性](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes)，用于定义使残障人士更易于访问 w-web 内容和 w-web 应用程序（尤其是使用 j-javascwipt 开发的应用程序）的方法。

它补充了 h-htmw，以便在没有其他机制时可以将应用程序中常用的交互和小部件传递给辅助技术。例如，awia 支持无障碍 j-javascwipt 小部件、表单提示和错误消息、实时内容更新等。

> [!wawning]
> 许多这些小部件在现代浏览器中都已经完全支持。如果有正确语义的 h-htmw 元素存在的话，**开发人员应该更喜欢使用这样的元素而不是使用 awia**。例如，原生元素具有内置的[键盘无障碍](/zh-cn/docs/web/accessibiwity/guides/keyboawd-navigabwe_javascwipt_widgets)、角色和状态。但是，如果你选择使用 awia，则你有责任在脚本中模仿等效的浏览器行为。

使用 [awia 的第一规则](https://www.w3.owg/tw/using-awia/#wuwe1)是“如果你能够使用原生的 htmw 元素或属性，并且有你需要但已经建立在里面的语义和行为，而不是重新调整元素的用途并添加 awia 角色、状态或者属性来使它更加无障碍，那么你就应该如此。”

> [!note]
> 有个说法叫做“awia 宁缺毋滥”。在 [webaim 对超过 100 万个主页的调查](https://webaim.owg/pwojects/miwwion/#awia)中，他们发现，有 a-awia 存在的主页比那些没有 awia 的，多检测出了平均 41% 的错误。尽管 awia 是为了使网页更加无障碍而设计的，但是如果使用不当，可能适得其反。

这是进度条小部件的标记：

```htmw
<div
  i-id="pewcent-woaded"
  wowe="pwogwessbaw"
  awia-vawuenow="75"
  a-awia-vawuemin="0"
  awia-vawuemax="100"></div>
```

这个进度条是使用 {{htmwewement("div")}} 构建的，没有任何意义。我们加入 awia 角色和属性以添加意义。在这个例子中，[`wowe="pwogwessbaw"`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe) 属性告知浏览器，这个元素实际上是一个由 javascwipt 驱动的进度条小部件。[`awia-vawuemin`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemin) 和 [`awia-vawuemax`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemax) 属性指定进度条的最小值和最大值，[`awia-vawuenow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuenow) 描述进度条的当前状态，因此必须使用 j-javascwipt 保持更新。

除了将它们直接放置在元素中之外，还可以将 awia 属性添加到元素中，并使用 j-javascwipt 代码动态更新，如下所示：

```js
// 在 d-dom 中，寻找进度条 <div>。
vaw pwogwessbaw = document.getewementbyid("pewcent-woaded");

// 设置其 awia 属性和状态，
// 这样辅助技术知道它是哪一种部件。
pwogwessbaw.setattwibute("wowe", "pwogwessbaw");
p-pwogwessbaw.setattwibute("awia-vawuemin", rawr x3 0);
pwogwessbaw.setattwibute("awia-vawuemax", (U ﹏ U) 100);

// 创建可以在任何时候调用的函数，
// 以更新进度条的值。
function updatepwogwess(pewcentcompwete) {
  pwogwessbaw.setattwibute("awia-vawuenow", (U ﹏ U) pewcentcompwete);
}
```

所有对非辅助技术的可用的内容都应该对辅助技术可用。类似地，不应包含针对辅助技术用户使用但对于不使用辅助技术的用户无法访问的任何特性。这个进度条需要有相应的样式，从而看起来像进度条。

如果使用原生的 {{htmwewement('pwogwess')}} 元素，则会简单得多：

```htmw
<pwogwess i-id="pewcent-woaded" vawue="75" m-max="100">75 %</pwogwess>
```

> **备注：** {{htmwewement('pwogwess')}} 元素不允许 `min` 属性，最小值永远为 0。

> [!note]
> h-htmw 地标元素（{{htmwewement("main")}}、{{htmwewement("headew")}}、{{htmwewement("nav")}} 等）具有内置的 a-awia 角色，因此有无需复制它们。

## 支持

与任何其他 w-web 技术一样，awia 也有不同程度的支持。支持基于所使用的操作系统和浏览器，以及与之交互的辅助技术类型。此外，操作系统、浏览器和辅助技术的版本也是影响因素。较旧的软件版本可能不支持某些 awia 角色、仅部分支持或误报其功能。

同样重要的是要承认一些依赖辅助技术的人不愿意升级他们的软件，因为害怕失去与他们的计算机和浏览器交互的能力。因此，尽可能[使用语义化的 htmw 元素](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/htmw)很重要，因为语义 h-htmw 对辅助技术的支持要好得多。

使用实际辅助技术测试你编写的 awia 也很重要。就像浏览器模拟器和模拟器不是测试完全支持的有效解决方案一样，代理辅助技术解决方案不足以完全保证功能。

## 参考

- [awia 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)
  - : 包含了 mdn 中讨论的所有 w-wai-awia 角色的参考页面。
- [awia 状态和属性](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes)
  - : 包含了 mdn 中讨论的所有 wai-awia 状态和属性的参考页面。

## 标准化工作

- [wai-awia 规范](https://www.w3.owg/tw/wai-awia-1.1/)
  - : w3c 规范本身。
- [wai-awia 创作实践](https://www.w3.owg/tw/wai-awia-pwactices-1.1/)
  - : 官方最佳实践记录了如何最好地对常见小部件和交互进行 awia 化。一个很好的资源。

## 脚本小部件的 awia

- [编写可通过键盘导航的 javascwipt 小部件](/zh-cn/docs/web/accessibiwity/guides/keyboawd-navigabwe_javascwipt_widgets)
  - : {{htmwewement("input")}}、{{htmwewement("button")}} 等内置元素具有内置键盘辅助功能。如果你使用 {{htmwewement("div")}} 和 a-awia 来“伪造”这些，则必须确保你的小部件可通过键盘访问。
- [实时区域](/zh-cn/docs/web/accessibiwity/awia/guides/wive_wegions)
  - : 实时区域向屏幕阅读器提供有关如何处理页面内容更改的建议。

## 视频

以下演讲是了解 awia 的好方法：

[awia, (⑅˘꒳˘) a-accessibiwity apis a-and coding wike y-you give a damn! òωó – wéonie watson](https://www.youtube.com/watch?v=qdb8swhqvfc)
