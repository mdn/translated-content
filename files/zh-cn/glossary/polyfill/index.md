---
title: Polyfill
slug: Glossary/Polyfill
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。

例如，Polyfill 可以用于在 IE7 中使用专门的 IE 滤镜模拟 `text-shadow` 的功能，或者使用 JavaScript 动态调整样式以模拟 rem 单位或媒体查询，或者其他任何你需要的功能。

Polyfill 不是唯一的选择的原因是为了更好的功能性和性能。API 的原生实现可以做更多事情，而且比 Polyfill 更快。例如，[Object.create Polyfill](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create#参见) 只包含了在非原生 Object.create 实现中可能的功能。

有时，Polyfill 用于解决浏览器以不同方式实现相同功能的问题。Polyfill 使用某个浏览器中的非标准特性，以便 JavaScript 以符合标准的方式访问该特性。尽管这种 Polyfill 的原因在今天已经很少见，但在 IE6 和 Netscape 时代，这种情况特别普遍，因为每个浏览器都以非常不同的方式实现 JavaScript。[jQuery 的第一个版本](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js)就是 Polyfill 的一个早期示例。它本质上是一个编译了针对特定浏览器的解决方案的集合，为 JavaScript 开发人员提供了一个在所有浏览器中都能工作的单一公共 API。当时，JavaScript 开发人员在尝试让他们的网站在所有设备上运行时遇到了很大的问题，因为各个浏览器之间存在很大的差异，网站可能必须根据用户的浏览器进行根本性的不同编程，并且具有完全不同的用户界面。因此，JavaScript 开发人员只能访问一小部分在所有浏览器中基本一致工作的 JavaScript API。使用 Polyfill 处理特定于浏览器的实现在今天变得不太常见，因为现代浏览器大多根据标准语义实现了广泛的 API 集。

## 参见

- [什么是 polyfill？](https://remysharp.com/2010/10/08/what-is-a-polyfill)（概念的提出者，Remy Sharp 著）
