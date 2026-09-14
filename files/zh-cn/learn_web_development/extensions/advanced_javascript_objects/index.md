---
title: JavaScript 对象入门
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects
---

在 JavaScript 中，大多数事物都是对象，从作为核心功能的字符串和数组，到建立在 JavaScript 之上的浏览器 {{Glossary("API", "API")}} 。你甚至可以自己创建对象，将相关的函数和变量高效地封装打包成便捷的数据容器。对于进一步学习 JavaScript 语言知识而言，理解这种面向对象（object-oriented, OO）的特性是必不可少的，所以，我们提供了这个模块来帮助你了解这一切。这里我们会先详细介绍对象的理论和语法，再介绍如何创建对象。

## 预备知识

开始这个模块之前，你应当已经对 HTML 和 CSS 有所了解。我们建议你通读 [HTML 入门](/zh-CN/docs/Learn_web_development/Core/Structuring_content)和 [CSS 入门](/zh-CN/docs/Learn_web_development/Core/Styling_basics)模块，再开始了解 JavaScript。

详细了解 JavaScript 对象之前，你应当已经对 JavaScript 基础有所熟悉。尝试这个模块之前，请通读 [JavaScript 第一步](/zh-CN/docs/Learn_web_development/Core/Scripting) 和 [JavaScript 基础要件](/zh-CN/docs/Learn_web_development/Core/Scripting)

> [!NOTE]
> 如果你无法在当前使用的电脑/平板/其他设备上创建自己的文件，可以使用在线编程网站如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/)，来试验文章中的（大多数）代码。

## 指南

- [对象基础](/zh-CN/docs/Learn_web_development/Core/Scripting/Object_basics)
  - : 在了解 JavaScript 对象的第一篇文章中，我们将介绍 JavaScript 对象的语法，并回顾先前课程中讲过的某些 JavaScript 功能。你会发现，你已经在使用的很多功能本质上都是对象。
- [适合初学者的面向对象 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
  - : 了解基础后，我们将关注面向对象 JavaScript (OOJS)。本文将介绍面向对象编程 (OOP) 的基本理论，然后讲解 JavaScript 如何通过构造器 (constructor) 函数模拟对象类别 (class)、如何创建对象实例 (instance)。
- [对象原型](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
  - : 通过原型 (prototype) 这种机制，JavaScript 中的对象从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言不同。本文将探讨这些差别，解释原型链如何工作，并了解如何通过 `prototype` 属性向已有的构造器添加方法。
- [JavaScript 中的继承](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
  - : 了解了 OOJS 的大多数细节之后，本文将介绍如何创建“子”对象类别（构造器）并从“父”类别中继承功能。此外，我们还会针对何时何处使用 OOJS 给出建议。
- [使用 JSON 数据](/zh-CN/docs/Learn_web_development/Core/Scripting/JSON)
  - : JavaScript Object Notation (JSON) 是一种将结构化数据表达为 JavaScript 对象的标准格式，其常用于在网站上表达或传输数据（比如：从服务器向客户端发送数据，使之显示在网页上）。你会经常遇到它，因此本文将告诉你如何在 JavaScript 中使用 JSON 数据，包括访问 JSON 对象中的数据条目、编写自己的 JSON 数据等等。
- [构建对象实战](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice)
  - : 在前面的文章中我们了解了 JavaScript 对象基本理论和语法，为你打下坚实的基础。本文中你需要进行实战练习，通过构建自定义 JavaScript 对象的实践过程，编写一个有趣而又多彩的程序——“彩色弹跳球”。

## 学习评估

- [向“弹跳球”演示程序添加新功能](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features)
  - : 在这个评估中，你需要以上一篇文章中的“弹跳球”演示为起点，向这个演示程序新增一些有趣的功能。
