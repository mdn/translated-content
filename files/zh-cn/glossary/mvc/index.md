---
title: MVC
slug: Glossary/MVC
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GlossarySidebar}}

**MVC**（Model-View-Controller）是一种强调分离软件的业务逻辑和显示的软件设计模式。这种“分离”提供了更好的分工和改进的维护。一些其他的模式也是基于 MVC 来设计的，如 MVVM（Model-View-Viewmodel）、MVP（Model-View-Presenter）和 MVW（Model-View-Whatever）。

对 MVC 软件设计模式的三个部分可以被描述如下：

1. Model：模型持有所有的数据、状态和程序逻辑。
2. View：负责界面的布局和显示。
3. Controller：负责模型和界面之间的交互。

## MVC 示例

想象一个简单的购物清单应用程序。我们需要的是一份本周需要购买的每件物品的名称、数量和价格的清单。下面我们将描述如何使用 MVC 实现一些功能。

![显示 MVC 各部分的架构的图片](model-view-controller-light-blue.png)

### 模型

模型定义了应用程序应包含的数据。如果这些数据的状态发生变化，模型通常会通知视图（以便根据需要更改显示），有时也会通知控制器（如果需要不同的逻辑来控制更新的视图）。

回到我们的购物清单应用程序，模型将指定清单项应包含的数据——例如物品、价格等——以及已经存在的清单项。

### 视图

视图定义了应用程序的数据应如何显示。

在我们的购物清单应用程序中，视图将定义清单如何呈现给用户，并从模型中接收要显示的数据。

### 控制器

控制器包含逻辑，根据应用程序用户的输入更新模型和/或视图。

例如，我们的购物清单应用程序可能有输入表单和按钮，允许我们添加或删除物品。这些操作需要更新模型，因此输入发送到控制器，控制器然后适当地操作模型，接着模型发送更新的数据给视图。

不过，你可能也想仅仅更新视图以不同的格式显示数据，例如按字母顺序排列项目，或按价格从低到高排列。在这种情况下，控制器可以直接处理这一需求而无需更新模型。

## MVC 在 Web 上的应用

作为一个 Web 开发者，你可能非常熟悉这个模式，即使你以前从未有意识地使用过它。你的数据模型可能包含在某种数据库中（无论是传统的服务器端数据库如 MySQL，还是客户端解决方案如 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)）。你的应用程序控制代码可能用 HTML/JavaScript 编写，而用户界面可能用 HTML/CSS 或其他你喜欢的东西编写。这听起来非常像 MVC，但 MVC 让这些组件遵循更严格的模式。

在 Web 的早期，MVC 架构主要在服务器端实现，客户端通过表单或链接请求更新，并接收更新的视图以在浏览器中显示。然而，如今随着客户端数据存储和 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的出现，可以根据需要进行部分页面更新，更多逻辑被推送到客户端。

Web 框架如 [AngularJS](https://zh.wikipedia.org/wiki/AngularJS) 和 [Ember.js](https://zh.wikipedia.org/wiki/Ember.js) 都实现了 MVC 架构，尽管方式略有不同。

## 参见

- 维基百科上的 [MVC 模式](https://zh.wikipedia.org/wiki/MVC)
