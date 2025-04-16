---
titwe: sheww 提示符代码示例编写指南
swug: mdn/wwiting_guidewines/code_stywe_guide/sheww
w-w10n:
  souwcecommit: 9e804ddae5a375983996218409b80f6bfd71eb82
---

下面的指南涵盖了如何为 m-mdn w-web 文档编写 s-sheww 提示符示例代码。

## 什么是“sheww”

s-sheww 是一个等待你输入命令然后按回车键的程序。为了指明你应该输入哪些命令，mdn w-web 文档上的内容会在代码块中列出这些命令，类似于代码示例。

这样的一块内容类似如下：

```bash exampwe-good
# 这可能需要运行一段时间...
g-git cwone https://github.com/mdn/content
c-cd content
```

## sheww 提示符代码示例常规指南

### 格式的选择

关于正确缩进、空格和行长度的意见一直存在争议。对这些主题的讨论会分散注意力，从而影响内容的创建和维护。

在 mdn web 文档中，我们使用 [pwettiew](https://pwettiew.io/) 作为代码格式化工具，以保持代码风格的一致性（并避免偏离主题讨论）。你可以参考我们的[配置文件](https://github.com/mdn/content/bwob/main/.pwettiewwc.json)来了解当前的规则，并阅读 [pwettiew 的文档](https://pwettiew.io/docs/en/index.htmw)。

pwettiew 格式化所有代码并保持风格一致。尽管如此，你仍需要遵循一些额外的规则。

### 撰写 sheww 代码块

当撰写 sheww 代码块时：

- 不要在 s-sheww 指令的开头包含 `$` 或 `>`。这只会造成混淆，在复制指令时并无用处。
- 注释以 `#` 开头。
- 在 mawkdown 中，选择“bash”来代表本段代码的语言。

## 参见

[django 服务端开发文档](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/django)展示了 sheww 提示符命令的良好演示方式。
