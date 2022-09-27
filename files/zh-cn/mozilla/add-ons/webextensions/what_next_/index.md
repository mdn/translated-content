---
title: What next?
slug: Mozilla/Add-ons/WebExtensions/What_next_
---

{{AddonSidebar}}

You will now be ready to start turning your idea for a browser extension into reality. Before you start that journey, it's worth being aware of a few things that will help to make it a smooth one.

## 你的开发环境

你不需要任何特殊的开发或构建环境工具来创建浏览器扩展：只需要一个简单的文本编辑器就可以创建出很好的浏览器扩展。当然，你可能一直在做 web 开发有一套你想去配置的开发工具和环境。如果是这样，你需要意识到一些事情。

如果你使用了打包压缩工具来交付你最终的代码，你需要提交你的源码到 [AMO](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/What_next_$translate?tolocale=zh-CN#The_review_process) 审查。此外，用于压缩、混淆、构建的工具需要是开源的 (或提供无限的免费使用), 并且可以在审阅者的计算机（Windows、Mac 或 Linux）上运行。主要是，我们的审阅者无法使用商业或基于 Web 的工具。

[学习更多关于构建工具](/zh-CN/Add-ons/Source_Code_Submission#About_build_tools)

## Third-party libraries

Third-party libraries are a great way to add complex features or functionality to your browser extensions quickly. When you submit an extension to the [AMO review process](#The_review_processv), the process will also consider any third-party libraries used. To streamline the review, make sure you always download third-party libraries from their official website or repository, and if the library is minified provide a link to the source code. Please note that third-party libraries cannot be modified in any way.

[Learn more about submitting source code](/zh-CN/Add-ons/Source_Code_Submission)

## The Firefox Add-on Distribution Agreement

Browser extensions need to be signed to install into the release or beta versions of Firefox. Signing takes place in addons.mozilla.org (AMO) and is subject to the terms and conditions of the Firefox Add-on Distribution Agreement. The goal of the agreement is to ensure Firefox users get access to well supported, quality add-ons that enhance the Firefox experience.

[Read the agreement](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Learn more about signing](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## The review process

When a browser extension is submitted for signing, it's subject to automated review. It may also be subject to a manual review, when the automated review determines that a manual review is needed. Your browser extension won't be signed until it’s passed the automated review and may have its signing revoked if it fails to pass the manual review. The review process follows a strict set of guidelines, so it’s easy to check and avoid any likely review problems.

[Check out the review policy and guidelines](/zh-CN/Add-ons/AMO/Policy/Reviews)

## AMO featured browser extensions

If you choose to list your browser extension on AMO, your extension could be featured on the AMO website, in the Firefox browser’s add-on manager, or elsewhere on a Mozilla website. We've compiled a list of guidelines about how extensions are selected for featuring, by following these guidelines you give your extension the best chance of being featured.

[Learn more about getting your add-ons featured](/zh-CN/Add-ons/AMO/Policy/Featured)

## Continue your learning experience

Now you know what lies ahead, it's time to dive into more details about browser extension development. In the sections that follow, you’ll discover:

- More about the fundamental concepts behind browser extensions, starting with details on how to [use the JavaScript APIs](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Using_the_JavaScript_APIs).
- A guide to the [user interface components](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface) available to your browser extensions.
- A collection of how-to guides on achieving key tasks in your extensions or making use of the JavaScript APIs.
- Information on how to port other browser extensions to Firefox.
- Details about the Firefox specific workflows you can use to develop browser extensions.
- A full reference guide to the JavaScript APIs.
- A full reference guide to the Manifest keys.
