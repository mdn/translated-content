# HTML to Markdown 转换指南

## 概述

目前，在我们的代码存储库中存在着大量的 HTML 文件。这是由于 MDN 之前采用 [kuma](https://github.com/mdn/kuma) 作为文档的构建平台，并且使用基于 WYSIWYG（所见即所得）的编辑器进行工作。它们对 HTML 的编辑支持都非常友好。自 2020 年 12 月以来，MDN 将文档托管在 Github 上，并且使用 [yari](https://github.com/mdn/yari) 作为构建平台。Markdown 格式更容易编写和维护。于是，我们需要将原有的 HTML 文档转换为 Markdown 文档。这篇文档将介绍如何做到这一点。

## 准备

1. 安装 [Git](https://git-scm.com/)、[Node.js](https://nodejs.org/) （>= 16.0.0 & <17.0.0）和 [Yarn 1](https://classic.yarnpkg.com/en/docs/install)。

2. 使用 GitHub 上的 Fork 按钮将 [mdn/content](https://github.com/mdn/content)、[mdn/translated-content](https://github.com/mdn/translated-content)、[mdn/yari](https://github.com/mdn/yari) Fork 至你的仓库。并且使用 `git clone` 命令将它们 clone 到本地，它们最好在同一父目录下。

3. 安装 Yari 的依赖：

   ```shell
   cd yari
   yarn install
   ```

4. 为了让 Yari 顺利在本地构建文档，需要设置环境变量 `.env`，`.env-dist` 文件已经提供了部分示例，所以我们运行：

   ```shell
   cp .env-dist .env
   ```

5. 如果三个仓库在同一父目录下，只需要取消文件 `.env` 中 `CONTENT_TRANSLATED_ROOT` 的注释，我们就已经设置好了基本的环境。如果需要设置更多环境变量以满足其他需求，请参考[环境变量设置说明](https://github.com/mdn/yari/blob/main/docs/envvars.md)。

6. 使用 `yarn dev` 或者 `yarn start` 命令启动项目，并在本地的浏览器中访问 `localhost:3000`，即可看到项目的界面了。

## 转换工作

我们使用 [h2m](https://github.com/mdn/markdown) 来完成转换工作，在 Yari 的目录下，运行以下格式的命令：

```markdown
yarn md h2m *your_path* --locale=*your_locale* --mode=*your_mode*
```

### 参数说明

- `your_path`：指 HTML 文件所存放的文件夹的相对路径，相对于  `files/locale` 。例如你需要转换[这个文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)，参数值即为 `web/css/_colon_focus` 。这个参数只能是文件夹的路径，会转换该文件夹及其子文件夹下的所有 HTML 文件。

- `your_locale`：即语言代号，参数值有：

  ```
  de、en-US、es、fr、ja、ko、pl、pt-BR、ru、zh-CN、zh-TW、all
  ```

  转换时根据你的情况选择即可。

- `your_mode`：主要是 `dry` 和 `replace`。
  - `dry`：检测是否有不能转换的元素，并将不能转换的信息列在 Yari 目录下生成的 Markdown 报告文件中。如所有文件都可以转换则不生成任何文件。
  - `replace`：将 HTML 文件重命名为 Markdown 文件，并将其内容更新为 Markdown 格式。

### 转换流程

仍以[这个文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus)为例，首先在 Yari 目录下运行：

```shell
yarn md h2m web/css/_colon_focus --locale=zh-CN --mode=dry
```

可能会得到类似的以下提示：

```
Could not automatically convert 2 elements. Saving report to md-conversion-problems-report-xxxx.md
```

在 translated-content 目录下新建一个 Git 分支，在 Yari 目录下打开提示的 Markdown 文件，根据提示修改相关 HTML 文件，直至符合要求。

> 注意：并不是所有不能转换的元素都需要处理，特别是“属性表”（参见 [MDN 的 Markdown 关于属性表的说明](https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Markdown_in_MDN#何时使用_html_表格)）。是否需要处理应根据 `content` 仓库的原文决定。如确实不需要处理，可以忽略，直接开始下面的操作。

运行：

```shell
yarn md h2m web/css/_colon_focus --locale=zh-CN --mode=replace
```

你将在对应的目录下得到转换后的 Markdown 文件。本次转换会产生两次 commit 记录，第一次是重命名，第二次是内容更新。**请不要使用类似于 `git rebase` 这样的命令合并两次提交**，文档准备就绪后直接提交 Pull Request 即可。

### HTML 元素修改指南

如上所述，h2m 工具可能不能够转换某些元素，我们需要对它们进行一些修改再进行转换。你不需要在转换之前检查这个列表，因为在 `dry` 模式下，会给出不能转换的信息，根据信息处理即可。这里列出只是为了告诉你怎样处理。

- 移除所有的 `<notranslate>`、`<cite>`、`<sub>`、`<sup>` 标签。
- 除了 `<pre>` 标签和卡片以外，所有标签的 `class` 属性都应被移除。
- 移除所有的 `style`、`blockIndicator` 属性。
- `id` 属性只能出现在标题标签里。
- `<a>` 标签的 `title` 属性应被移除。
- 非 ASCII 编码的 Unicode 空格会影响转换，需要将它们替换为 ASCII 编码的空格。
- 没有提到的情况请参照原仓库修改，也欢迎和维护者一起讨论，并将其加入到本文档。
- 由于元数据的限制，我们的卡片只能使用这些样式和文字：

```html
<div class="note">
  <p><strong>备注：</strong> ...</p>
</div>
```

```html
<div class="warning">
  <p><strong>警告：</strong> ...</p>
</div>
```

请注意：备注框和警告框的 `</strong>` 闭合标签后需要紧跟一个**空格**。

```html
<div class="callout">
  <p>...</p>
</div>
```

### 你可能需要的其他内容

- [为什么需要转换为 Markdown 格式，规则细节是怎样的](https://github.com/mdn/content/issues/3350)
- [MDN Web 文档写作规范](https://developer.mozilla.org/zh-CN/docs/MDN/Guidelines/Writing_style_guide)
- [MDN 的 Markdown](https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Markdown_in_MDN)
- [MDN Web 文档简体中文翻译指南](https://github.com/mdn/translated-content/blob/main/docs/zh-cn/translation-guide.md)
