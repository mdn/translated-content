---
title: PlayCanvas 基础演示搭建
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

**PlayCanvas** 是一个流行的 3D WebGL 游戏引擎，最初由 Will Eastcott 和 Dave Evans 创建。它已[在 GitHub 上开源](https://github.com/playcanvas/engine)，并提供了在线[编辑器](https://developer.playcanvas.com/user-manual/editor/)和完善的[文档](https://developer.playcanvas.com)。在线编辑器为公开项目免费开放并支持最多两名团队开发者，如果你想开发一个多名开发者同时参与的商用私有项目，也可以选择相应的[付费方案](https://playcanvas.com/plans)。

![PlayCanvas 网站。](playcanvas-cover.png)

## 游戏与演示

PlayCanvas 发布了一些知名的演示，展示了其强大功能。

- [Tanx](https://tanx.io/) 是一款多人坦克游戏，你可以驾驶坦克在场地中移动并射击其他玩家。
- [Swooop](https://playcanv.as/p/JtL2iqIH) 是一款飞行游戏，你可以驾驶飞机在魔法岛屿上飞行，收集宝石和燃料。
- 像 [Star Lord](https://playcanv.as/b/FQbBsJTd) 和 [BMW i8](https://playcanv.as/p/RqJJ9oU9) 这样的可视化演示也充分利用了该引擎，展示了更多可能性。

![PlayCanvas 演示列表：Tanx、Swooop、Star Lord、BMW i8。](playcanvas-demos.png)

> [!NOTE]
> 查看[精选演示列表](https://playcanvas.com/explore)以获取更多示例。

## 引擎与编辑器

PlayCanvas 引擎本身可以作为标准库直接通过 JavaScript 文件引入 HTML 中，这样你可以立即开始编写代码；此外，PlayCanvas 工具集还带有一个在线编辑器，你可以用它将组件拖放到场景中——如果你更偏向设计而不是编程，这是一种很好的创建游戏和其他需要场景的应用的方式。这两种方式各有不同，但都能很好地实现目标。

## PlayCanvas 引擎

PlayCanvas 针对现代浏览器打造，是一个功能齐全的 3D 游戏引擎，具备资源加载、实体与组件系统、高级图形处理、碰撞与物理引擎（基于 [ammo.js](https://github.com/kripken/ammo.js/)）、音频以及对多种设备（包括手柄）的输入控制支持。功能非常丰富——想了解实际效果，请参见[使用 PlayCanvas 引擎搭建基础演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine)。

## PlayCanvas 编辑器

你也可以选择不从零开始编程，而是使用在线编辑器。如果你不喜欢编程，这会是一个更愉快的工作环境。详情请参见[使用 PlayCanvas 编辑器搭建基础演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor)。

## 总结

当然，这取决于你的工作方式——设计师可能更喜欢在线编辑器，而程序员则更倾向于完全控制变成环境，通常会使用引擎的源文件。你可以根据自己的需求自行选择最合适的方式和工具进行开发。
