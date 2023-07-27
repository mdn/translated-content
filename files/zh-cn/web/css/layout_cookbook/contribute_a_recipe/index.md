---
title: Contribute a recipe
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
---

{{CSSRef}}

如果您愿意为 Layout Cookbook 贡献示例文件，那么本页将通过阐释步骤指导您发布示例。

## 好的 recipe 是怎样的？

**任何有用的 web 设计模式的最简版本。**您 CSS 文件中的每一行代码都应该有助于演示该模式，省去无用的部分就是为了能让示例显得完美。这种想法就是，某个人既能将这种模式应用在网站中，又可以保持自己的风格。

## 发布 recipe 的步骤

一份 recipe 包括以下内容：

1. 一个动态的示例，存储在 [CSS Examples GitHub repo](https://github.com/mdn/css-examples) 之上。
2. 这份示例的可供下载版本，同样也存储在 CSS Examples repo 之上。
3. 该网站的某个页面在 [CSS layout cookbook](/zh-CN/docs/Web/CSS/Layout_cookbook) 上应详细说明：

   1. 要求
   2. recipe
   3. 做出的选择
   4. 任何有用的反馈或供选择的方法
   5. 任何无障碍访问问题
   6. 浏览器兼容性
   7. 其他资源

### 1. 建立自己的模式

在将示例转换为 recipe 之前，先将您的模式创建成为一个简单的 HTML 页面。想想看您要展示的是什么，并使这个想法尽可能简单。避免使用特殊的 CSS 约定（例如 BEM），因为并非每个人都熟悉这些约定，反而会使他们将事情做得看起来要比预期中的更复杂。

确保 HTML 和 CSS 有效，并将其在一种以上的浏览器上进行测试。如果您使用的 CSS 属性并非广受支持，那也没关系！您可以在创建页面时包含浏览器支持信息。在某些情况下，创建示例的第二个版本可能会有帮助，其中包括回退支持。

### 2. 创建一个动态示例

The live examples that you can see on cookbook pages and elsewhere on MDN allow visitors to play with the code and change relevant parts without being overwhelmed with all of the code needed. You recipe will be demonstrated by way of one or more examples.

Fork the [CSS Examples repo](https://github.com/mdn/css-examples) and then take a look in the `css-cookbook` folder. There is a [cookbook-template.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template.html) file you can copy as a starting point. Save this in the css-cookbook directory with a name that makes sense for your pattern. The template is commented to help you add the various parts to the right place.

The important parts of this are as follows.

There is a stylesheet for styles for the editor panels, and some basic body styling, and a JavaScript file included for the editor functionality. Leave these files as they are.

There are two style blocks in the head. The first are for things that a visitor to the page does not need to change to play with the example. The second is for any of the items they might want to play with in the live example. We typically add all of our CSS from like example in the first block, then choose which sets of rules we need to move down to the second block. The rules in the second block should be those that are fundamental to the pattern, perhaps those where a user could make a change to a CSS value and see the pattern update.

You need to add the HTML for your component twice. First inside the section with a class of preview, then inside the textarea `playable-html`.

Your editable CSS, from the second block in the head, also needs to be copied into the `playable-css` section.

A simple worked example is [center.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/center.html), which is embedded on the page [Center an element](/zh-CN/docs/user:chrisdavidmills/Layout_Cookbook_Home/Center_an_element). You can use this to see how to add the various bits correctly.

If you have forked the repo and therefore have our CSS and JavaScript files alongside your example, if you open up your live example in the browser you should see everything working exactly as it will when included in a page.

#### Useful tips

1. Do not indent the CSS and HTML inside the textareas; instead bump it up against the start of the lines. This will look better when it is rendered.
2. If you have any required images, pop them into the directory with the examples. Or you are welcome to use any already there.
3. You can adjust the height of the textareas by changing the height in the inline styles.

### 3. 创建一份可供下载的版本

As the examples include all of our live example code, we want to offer visitors a simple example without all of that included. Make a copy of your live example with --download appended. For example, center.html, has a download version named `center--download.html`. This file will be similar to your initial example. It should be a basic version of your pattern as a single HTML page. It can be handy to include the body CSS rules that are in our included stylesheet, if you take a look at [cookbook-template--download.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template--download.html), these are included as a starting point.

### 4. 用您的示例发起 Pull 请求

Make a PR on the [CSS Examples repo](https://github.com/mdn/css-examples). This way we can help you with any changes to the example that may be needed before you create your page, plus the example will need to be live to be included some it makes sense to create it first. Include in your PR an explanation of the pattern and what you are demonstrating.

### 5. 创建您的页面

Once your example is merged you can create your page. You will need an MDN account to do so with [page creation permissions](/zh-CN/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#新建一个页面), and you can then create the page as a subpage of the CSS Cookbook page. [There is a template for Cookbook pages here](/zh-CN/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template).

The template explains what should be part of each section, and you can refer to other cookbook examples for more help. If you click to edit any of those pages then you will be able to see things such as the macros used to embed compat data, and live examples.

If you need general guidance on using the MDN wiki, see the help pages available here.

If you need to ask any questions, or want someone to take a look at your page then the [MDN Discourse forum](https://discourse.mozilla.org/c/mdn) is a good place to do this, or [chat with us on Matrix](/zh-CN/docs/MDN/Community/Conversations#Synchronous_chat).

## See also

- [Cookbook page template](/zh-CN/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples repo](https://github.com/mdn/css-examples)
