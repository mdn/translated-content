---
title: 兼容性表格和浏览器兼容性数据仓库（BCD）
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
---

{{MDNSidebar}}

MDN 为我们的开放 web 文档提供了兼容性表格的标准格式；它是对比所有浏览器之间，包含 DOM、HTML、CSS、JavaScript、SVG 等技术的文档。本文将介绍如何添加和维护生成兼容性表格的数据库，以及如何将表格添加到文章中。

有关更高级的文档，以及最新的用于表示数据的流程和 JSON 格式的更改，请参考数据仓库的 [contributor guide](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) 和 [data guidelines guide](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md)。

如果你有疑问或是发现了问题，欢迎[与我们联系](/zh-CN/docs/MDN/Community/Contributing/Getting_started#第四步：寻求帮助)。

## 如何访问数据仓库

数据存储在一个 GitHub 仓库中，请查看 <https://github.com/mdn/browser-compat-data>。想要访问它，你必须拥有一个 GitHub 账号，fork 浏览器兼容性数据仓库到你自己的账户，然后克隆你的 fork 到你的本地机器。

## 为添加数据做好准备

在添加新数据之前，你应该保证你的 fork 已与主仓库同步（它们应包含相同的内容），在你的 fork 里创建一个包含你的更改的分支，再将这个分支 pull 到你本地的仓库。现在，这样你就可以开始贡献了：

让我们来看一下一个简单的确保你的 fork 与主仓库同步的方法：

### 将浏览器兼容性数据的主仓库添加到远端服务器列表中

通过终端或命令行进入你本地克隆的 fork 仓库，并添加一个连接到主（upstream）仓库的远程，就像这样（你只需要做一次）：

```bash
git remote add upstream https://github.com/mdn/browser-compat-data.git
```

如果你不确定你是否完成了这一步，你可以通过命令确认你的仓库在用的远端服务器列表：

```bash
git remote -v
```

### 使用服务器上的内容更新你的 fork

现在，你可以通过以下步骤更新你的 fork：

1. 确保你在主分支中：

    ```bash
    git checkout main
    ```

2. 使用以下命令拉取最新的仓库内容：

    ```bash
    git fetch upstream
    ```

3. 使用 rebase 将官方仓库的内容合并到你的主分支：

    ```bash
    git rebase upstream/main
    ```

4. 将更新推送回你在服务器上的 fork 仓库：

    ```bash
    git push
    ```

### 创建你用于工作的分支

接下来，打开你在服务器上的 fork（它的地址可能是 `https://github.com/your-username/browser-compat-data`）并且创建一个新分支来存储你的改动。步骤如下：

1. 点击“Branch: Main”按钮；
2. 在“Find or create a branch…”文本输入框中输入一个新的分支名；
3. 点击下方出现的“Create branch _name-of-branch_ from Main”按钮。

举个例子，如果你想补充 WebVR API 的信息，你可以创建一个名为“webvr”的分支。

### 切换到新分支

此时，回到你的终端或命令行，用以下命令将你的新分支同步到你本地的 fork 中：

```bash
git pull
```

现在用以下命令切换到你的新分支：

```bash
git checkout name-of-branch
```

现在你可以开始进行你对浏览器兼容信息的补充和修改了。

## 添加数据

为添加新的数据，你需要新建文件以存储你的兼容性数据。对于不同技术的数据，你需要创建的文件也有所不同：

- **[HTML](/zh-CN/docs/Web/HTML/)**：被包含在 [browser-compat-data/html/elements](https://github.com/mdn/browser-compat-data/tree/main/html/elements) 中。每个 HTML 元素对应一个文件。文件需要以元素的小写的名称命名，例如 `div.json`。
- **[CSS](/zh-CN/docs/CSS)**：每个 CSS 属性或选择器对应一个文件。它们被包含在对应的目录中（请参考 [browser-compat-data/css](https://github.com/mdn/browser-compat-data/tree/main/css)）。文件需要以 CSS 特性的小写的名称命名，如 `background-color.json` 或者 `hover.json`。
- **[JS](/zh-CN/docs/JavaScript)**：被包含在 [browser-compat-data/javascript/builtins](https://github.com/mdn/browser-compat-data/tree/main/javascript/builtins) 中，每个 JavaScript 对象对应一个文件。文件要以 JavaScript 对象的准确名称命名，保留其大小写，如 `Date.json` 或 `InternalError.json`。
- **[API](/zh-CN/docs/Web/API)**：API 中的每个接口对应一个文件。它们在 [browser-compat-data/api](https://github.com/mdn/browser-compat-data/tree/main/api) 中。每个文件要以接口的准确名称命名，保留其大小写，例如 WebVR API 的文件为 `VRDisplay.json`、`VRDisplayCapabilities.json`，等等。

你创建的每一个文件都必循遵循我们存储库架构中定义的模式；你可以参考[详细的模式描述](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md)。

### 基本的兼容性数据的结构

让我们来看一下如下的例子。一个 CSS 属性 JSON 文件需要以下的基础结构：

```json
{
  "css": {
    "properties": {
      "border-width": {
        "__compat": {
          // …
        }
      }
    }
  }
}
```

首先有一个 `css` 对象，其中包含了一个 `properties` 对象。每个你要设定兼容性数据的特性都对应一个 `properties` 对象中的成员。而每一个这些成员都有一个 `__compat` 成员，`__compat` 成员中则是实际的数据。

以上的数据能在 [browser-width.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/border-width.json) 文件中找到——可将这与 [MDN 上渲染后的浏览器兼容性表格](/zh-CN/docs/Web/CSS/border-width#浏览器兼容性)相比较。

对于其它特性类型，写法是类似的，但对象的名称不同：

- 对于 CSS 选择器，它与 CSS 属性的写法基本相同，不同之处在于顶级对象结构是是 `css.selectors` 而不是`css.properties`。请以 [cue.json](https://github.com/mdn/browser-compat-data/blob/main/css/selectors/cue.json) 作为参考示例。
- 对于 HTML 数据，它的写法基本相同，不同之处在于顶级对象结构是 `html.elements`。请以 [article.json](https://github.com/mdn/browser-compat-data/blob/main/html/elements/article.json) 作为参考示例。
- JS 内置对象对应的顶级结构是 `javascript.builtins`；请以 [Array.json](https://github.com/mdn/browser-compat-data/blob/main/javascript/builtins/Array.json) 作为参考示例。

在一个 HTML、CSS 和 JS 页面中，通常你只需要有一个特性。API 则有些不同——它们总是包含多个子特性（参见下边的[子特性](#子特性)）。

### 一个特性中的基础结构

在一个特性的 `__compat` 成员中，你需要包含以下成员：

- `mdn_url`：MDN 上这个特性的页面的 URL。注意，这个 URL 不可以带上本地化文件夹名称，例如：是 `/docs/…` 而不是 `/en-US/docs/…`。本地化文件夹名称会在页面加载时被添加。
- `spec_url`：指向定义该特性的规范的 URL 或 URL 数组。
- `support`：所有不同浏览器对这个特性的浏览器支持的信息。
- `status`：报告了此特性的标准跟踪状态。

模式中定义了浏览器成员的名称（参见[浏览器标识符](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#browser-identifiers)）。你应该使用现有定义的标识符的完整列表。如果你希望添加其它浏览器，请先联系我们，因为这可能会产生广泛的影响，不应该在未经认真考虑的情况下就这么做。

在一个基本的浏览器兼容数据文件中，你只需要在浏览器标识符成员中包含“version_added”（以下我们会说到[高级场景](#添加数据：高级场景)）。其它你可能使用的值还包括：

- 一个版本号：如果你知道一个浏览器开始支持这个特性的准确版本，用一个字符串表述版本号，例如 `"47"`。
- `true`：如果一个浏览器支持这个特性，但你不知道准确的版本号，取值用 `true`。
- `false`：如果一个浏览器不支持这个特性，取值用 `false`。
- `null`：如果你不知道某个浏览器是否支持这个特性，取值用 `null`。

在 `status` 成员中，你需要包含三个子成员：

- `experimental`：如果这个特性是[实验性](/zh-CN/docs/MDN/Guidelines/Conventions_definitions#experimental)的，取值为 `true` ，否则为 `false` 。
- `standard_track`：如果这个特性是个在某些规范里的标准的属性（最常见的是 W3C/WHATWG，但有其它规范如 Khronos 或 TC39 等），取值为`true` ，否则为 `false` 。
- `deprecated`：如果这个特性已经[废弃](/zh-CN/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)，取值为 `true`，否则为 `false`。

作为例子，以下是 [border-width](/zh-CN/docs/Web/CSS/border-width#浏览器兼容性) 特性的数据（参见 [border-width.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/border-width.json)）：

```json
"__compat": {
  "mdn_url": "https://developer.mozilla.org/docs/Web/CSS/border-width",
  "spec_url": "https://drafts.csswg.org/css-backgrounds/#the-border-width",
  "support": {
    "chrome": {
      "version_added": "1"
    },
    "webview_android": {
      "version_added": "2"
    },
    "edge": {
      "version_added": true
    },
    "edge_mobile": {
      "version_added": true
    },
    "firefox": {
      "version_added": "1"
    },
    "firefox_android": {
      "version_added": "1"
    },
    "ie": {
      "version_added": "4"
    },
    "ie_mobile": {
      "version_added": "6"
    },
    "opera": {
      "version_added": "3.5"
    },
    "opera_android": {
      "version_added": "11"
    },
    "safari": {
      "version_added": "1"
    },
    "safari_ios": {
      "version_added": "3"
    }
  },
  "status": {
    "experimental": false,
    "standard_track": true,
    "deprecated": false
  }
}
```

#### 添加描述说明

这是第四个、可选的 `__compat` 成员——`description`。可用于包含该特性人类可读的描述。仅当通过浏览数据很难看出该特性是什么时，才应该包含此内容。例如，通过查看数据结构可能不太明白构造函数是什么，因此，你可以像这样包含描述：

```json
{
  "api": {
    "AbortController": {
      "__compat": {
        // …
      },
      "AbortController": {
        "__compat": {
          "mdn_url": "https://developer.mozilla.org/docs/Web/API/AbortController/AbortController",
          "description": "<code>AbortController()</code> constructor",
          "support": {
            …
          }
        }
      }

      // …
    }
  }
}
```

### 子特性

在兼容性表格包含多行内容时，你需要在每个特性中使用多个子特性来定义每一行的内容。例如，当你获得了对存储在一行中的特性的基本支持而这一特性还有在规范快要确定时才添加的、仅被部分浏览器支持的新的属性或值时，可能会发生这种情况。

作为例子，参见 `background-color` 属性的[兼容性数据](https://github.com/mdn/browser-compat-data/blob/main/css/properties/background-color.json)和[对应的 MDN 页面](/zh-CN/docs/Web/CSS/background-color)。正如上面解释的，该属性的基本支持存在于 `__compat` 对象内，而其中还有附加的用于浏览器对“alpha 通道对十六进制值”的支持的一行内容。

```json
{
  "css": {
    "properties": {
      "background-color": {
        "__compat": {
          // …
        },
        "alpha_ch_for_hex": {
          "__compat": {
            // …
          },
        }
      }
    }
  }
}
```

对于一个 API，你需要将顶层的两个层级定义为 `api.name-of-the-interface`，然后是定义该接口的浏览器兼容性的顶层的 `__compat` 部分，然后是接口中包含的每个方法、属性和构造函数这些子特性。基本的结构如下所示：

```json
{
  "api": {
    "VRDisplay": {
      "__compat": {
        // …
      },
      "cancelAnimationFrame": {
        "__compat": {
          // …
        }
      },
      "capabilities": {
        "__compat": {
          // …
        }
      },

      // …

    }
  }
}
```

参见 [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) 以获取完整示例。

## 添加数据：高级场景

本节列出了你可能会在浏览器兼容性数据中使用的一些高级功能。这里列出的是最常见的高级功能，并提供了如何在兼容性数据中实现它们的示例。

### 包含一个脚注

通常，兼容性表格会包含某些于条目相关的脚注，这些脚注解释了一些有用的信息或者特性的一些奇怪的行为，这对开发人员会非常有用。例如，{{domxref("VRDisplay.capabilities")}} 的 Chrome Android 条目（参见 [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json)）（在撰写本文时）有一个脚注“Currently supported only by Google Daydream.”为了将其包含在兼容性数据中，我们需要在“chrome_android”子成员中添加一个“notes”子成员，就像这样：

```json
"chrome_android": {
  "version_added": true,
  "notes": "Currently supported only by Google Daydream."
}
```

### 包含浏览器厂商的前缀

如果某个特性需要在添加浏览器厂商的前缀后才被支持，你需要在浏览器兼容性数据中明确说明。例如你可能有一个特性在 Firefox 浏览器中要用 `-moz-` 前缀才被支持，要在兼容性数据中指明这一点，你需在对应的“firefox”子成员中增加一个“prefix”子成员。就像这样：

```json
"firefox": {
  "version_added": true,
  "prefix": "-moz-"
}
```

### 包含浏览器首选项或实验性标志

有些特性虽然被某些浏览器所支持，但其是实验性的且默认处于关闭状态。如果用户想要使用此特性，它们需要使用首选项或实验性标志（flags）来启用它。

为了在兼容性数据中表示这一点，需要在相关的浏览器标识子成员中添加“flags”子成员。“flags”的值是一个对象数组，其中的每个对象包含三个成员：

- `type`：标志或首选项的类型。最常见的值是“preference”，表示它是在浏览器内部设置的（例如：Firefox 的 `about:config` 和 Chrome 的 `chrome://flags`），但有时会使用“compile_flag”，这是在编译浏览器时设置的首选项。
- `name`：一个表示设置的首选项的名称。例如，“Enable Experimental Web Platform Features”是 Chrome 的 `chrome://flags` 中存在的一个首选项。
- `value_to_set`：一个表示需要在首选项中设置的值的字符串，例如“true”。

因此，若要为 Chrome 支持的某个特性添加首选项或实验性标志，你可以这样编写：

```json
"chrome": {
  "version_added": "50",
  "flags": [
    {
      "type": "preference",
      "name": "Enable Experimental Web Platform Features",
      "value_to_set": "true"
    }
  ]
},
```

如果某个特性的开启需要设定多个实验性标志，你可以在“flags”数组中添加额外的对象，就像这样：

```json
"firefox": {
  "version_added": "57",
  "flags": [
    {
      "type": "preference",
      "name": "dom.streams.enabled",
      "value_to_set": "true"
    },
    {
      "type": "preference",
      "name": "javascript.options.streams",
      "value_to_set": "true"
    }
  ]
},
```

### 包含特性不再被支持的版本

有时一个特性在浏览器的某个版本被加进去，然后又因为该特性被弃用而被移除掉。这可以在“version_removed”子成员中体现。该子成员是一个代表特性被移除的版本的字符串。例如：

```json
"firefox": {
  "version_added": "35",
  "version_removed": "47",
},
```

### 包含同一浏览器条目的多个支持数据点

有时，我们需要为同一特性中的一个浏览器条目添加多个支持的数据点。

以 {{cssxref("text-align-last")}} 属性（参见 [text-align-last.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/text-align-last.json)）为例，其中添加了 Chrome 在 35 版本中添加了需要通过首选项开启的对该特性的支持。

而上述支持在 47 版本中被移除，但同时添加了对 `text-align-last` 的默认支持。

要包含这两个数据点，你需要将“chrome”子成员的值设置为包含两个支持信息对象的数组，而不是一个单独的支持信息对象：

```json
"chrome": [
  {
    "version_added": "47"
  },
  {
    "version_added": "35",
    "version_removed": "47",
    "flags": [
      {
        "type": "preference",
        "name": "Enable Experimental Web Platform Features",
        "value_to_set": "true"
      }
    ]
  }
],
```

> **备注：** 你应该将最新或最重要的支持数据点放在数组的最前面——这将帮助只想要了解最新信息的人更容易地阅读这些数据。

### 包含一个代替名称

有时，浏览器会以与规范中不同的名称支持某个特性。例如，浏览器很早就添加了对某个特性的实验性支持，但规范在确定之前使用了一个不同的名称。

要在浏览器兼容性数据中包含这类特殊的情况，你可以在“alternative_name”成员中添加一个有关代替名称的支持数据点。

> **备注：** 代替名称不一定是别名——这意味着它的行为可能与标准定义的行为不同。

让我们看一个示例。Firefox 支持的 {{cssxref("border-top-right-radius")}} 属性（参见 [border-top-right-radius.json](https://github.com/mdn/browser-compat-data/blob/2a0cc3f6bb17aa4345441bed47a059dffd847793/css/properties/border-top-right-radius.json)）：

- 从 4 版本开始，使用标准的名称 `border-top-right-radius`.
- 从 49 版本开始，使用带有 `-webkit-` 前缀的名称，处于浏览器兼容性目的。
- 从 1 版本开始，使用代替名称 `-moz-border-radius-topright`。该别名的支持在 12 版本中被移除。

要在数据中表示这些内容，我们需要使用以下的 JSON：

```json
"firefox": [
  {
    "version_added": "4",
    "notes": "Prior to Firefox 50.0, border styles of rounded corners were always rendered as if <code>border-style</code> was solid. This has been fixed in Firefox 50.0."
  },
  {
    "prefix": "-webkit-",
    "version_added": "49",
    "notes": "From Firefox 44 to 48, the <code>-webkit-</code> prefix was available with the <code>layout.css.prefixes.webkit</code> preference. Starting with Firefox 49, the preference defaults to <code>true</code>."
  },
  {
    "alternative_name": "-moz-border-radius-topright",
    "version_added": "1",
    "version_removed": "12"
  }
],
```

## 将变更推送回主仓库

在你添加完你的兼容性数据之后，你应该先用以下命令测试一下：

- `npm run lint`——测试所有兼容性数据以确保 JSON 的格式和书写风格正确，例如正确的缩进和没有遗漏逗号等等。该命令会打印出一个很长的文件名和测试结果的列表；如果发现了一个错误，代码错误检查工具会抛出文件中的错误，并提供有用的调试信息（如：行号、错误信息，等等）。
- `npm run show-errors`——根据数据模式验证 JSON 是否正确，并突出显示存在的错误，例如：使用的浏览器版本号无效。

如果没有发现问题，那么你需要提交它，并将其推送回你在 GitHub 上的远程分支。你可以使用以下终端命令完成这一操作：

```bash
git add .
git commit -m 'adding compat data for name-of-feature'
git push
```

现在，转到你的远程分支（例如 `https://github.com/your-username/browser-compat-data`），你应该会在文件列表的顶部（在“Your recently pushed branches”下）看到有关你的推送的信息。你可以按下“Compare & pull request”按钮以创建拉取请求（pull request）（开始将其推送到主仓库的流程），然后按照屏幕上的提示进行后续的操作。

现在，你只需要等待。审查员会审查你的拉取请求，然后将其合并到主仓库或要求你作出一些修改。如果需要修改，请进行相应的修改并再次提交，直至拉取请求被接受。

## 将数据插入 MDN 页面

一旦你创建的兼容性数据被包含在 [browser-compat-data](https://github.com/mdn/browser-compat-data) 主仓库中，你就可以开始根据 MDN 页面上的数据动态生成浏览器兼容性表格和规范表格。

首先，你需要确定你希望包含的相关兼容性数据的查询字符串。可以通过检查其源文件来确定。例如：

- {{domxref("AbortController")}} 的兼容性数据在 [AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) 中定义，可以使用 `api.AbortController` 来引用它。
- {{HTTPHeader("Content-Type")}} HTTP 标头的兼容性数据在 [content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/content-type.json) 中定义，可以使用 `http.headers.Content-Type` 来引用它。
- {{domxref("VRDisplay.capabilities")}} 属性的兼容性数据在 [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) 中定义，可以使用 `api.VRDisplay.capabilities` 来引用它。

兼容性数据的查询字符串应在页面的元数据（front-matter）中使用 `browser-compat` 这个键来指定。例如，对于 {{domxref("AbortController")}}，应该这样添加：

```plain
---
title: AbortController
slug: Web/API/AbortController

…

browser-compat: api.AbortController
---

```

然后源码中的 `\{{Compat}}` 和 `\{{Specifications}}` 宏将会被自动渲染为与元数据对应的兼容性表格和规范表格。

你还可以将宏的第一个参数指定为需要的 API，就像这样：`\{{Compat("api.AbortController")}}`。如果需要在同一页面中插入多个兼容性表格，这会非常有用。

宏的调用会生成以下的表格（以及对应的备注）：

#### 兼容性表格示例

{{Compat}}

#### 规范表格示例

{{Specifications}}
