---
title: 兼容性表格
slug: MDN/Writing_guidelines/Page_structures
tags:
  - MDN Meta
  - 兼容性表格
  - 指南
  - 浏览器兼容性
translation_of: MDN/Structures/Compatibility_tables
original_slug: MDN/Structures/Compatibility_tables
---
{{MDNSidebar}}

MDN 为我们的开放网页文档提供了兼容性表格的标准格式; 它是对比所有浏览器之间，包含 DOM，HTML，CSS，JavaScript，SVG 等技术的文档。本文将介绍如何使用我们的功能将兼容性数据添加到 MDN 页面。

> **警告：** _数据的生成方式已经发生了变更_。过去，我们的表格直接嵌入在页面中，而且数据是手动填写的。这样效率很低，难以维护，而且使得数据不够灵活，不便更新。所以我们正在把我们的兼容性表格迁移到一个数据 repo 中（<https://github.com/mdn/browser-compat-data>）并且改为使用程序化的方式生成它。
>
> 本指南中，我们撰写了关于如何向 MDN 添加新的兼容性数据的文档，但是我们仍然保留了旧的方法来保证旧文档的兼容性表格可用：正如你所见，手动输入的表格依然存在于 MDN 上。如果你有必要使用旧方法的话，可以参考这篇文章：[Old compatibility tables](/en-US/docs/MDN/Contribute/Structures/Old_compatibility_tables)。

> **备注：** 如果您需要本指南任何步骤的帮助，欢迎您在[MDN 论坛](https://discourse.mozilla-community.org/c/mdn)上与我们联系。

## 如何访问 data repo

数据存储在一个 GitHub repo 中，到 <https://github.com/mdn/browser-compat-data> 查看。想要访问它，你必须拥有一个 GitHub 账号，fork 浏览器兼容数据仓库到你自己的账户，然后克隆你的 fork 到你的本地机器。

## 选择要贡献的数据类型

首先，确定一下你想为何种 Web 技术贡献兼容性数据。可以是一个 HTML 元素、CSS 属性、JS 语法或者 JS API 接口。我们鼓励您贡献 API 接口的数据，因为已经有人在贡献 HTML、JS 和 CSS 的数据了。你可以在表格 [Browser Compat Data migration](https://docs.google.com/spreadsheets/d/1ivgyPBr9Lj3Wvj5kyndT1rgGbX-pGggrxuMtrgcOmjM/edit#gid=926663640) 中查看各个需要添加兼容性数据的 Web 技术的数据状态。

电子表格的使用步骤如下：

1.  直接挑选一个还未开始或者还未完成数据录入的功能点，在“Who”一栏中填入你的名字，最好能够和你的 MDN 用户名保持一致，以便我们在需要联系你的时候能够查找到你的邮件地址。
2.  如果该功能点不在表格上，那么你可以参照现有的格式在合适的位置上加一行。注意要使用同等的粒度（例如，HTML 以标签元素为单位、CSS 以选择器或者属性值为单位、JS 以对象为单位、JS API 以特定的接口为单位）
3.  当你已经开始录入数据的时候，把对应状态栏的下拉选项置于“In progress”（进行中）状态。
4.  一旦添加完数据，并且向主仓库提交了一个拉取请求（pull request），那么把对应状态栏的下拉选项置于“PR done”状态。
5.  当你的数据已经成功合并到主分支，或者已经添加到 npm 包里面的时候，请尽量更新对应的状态栏到相应的状态。
6.  当你更新了你的功能文档页面，并且使用新的脚步命令使其可以在每一个页面都可以动态的生成合适的数据表格的时候，你就需要在电子表格中修改对应功能的状态为“Article updated”（文章已更新）。这意味着你已经完成了这一功能的所有数据录入工作。

## 准备添加数据

在添加新数据之前，你应该保证您的 fork 是主 repo 的最新版本（它们应包含相同的内容）。在您的 fork 里添加一个包含您的更改的分支，然后把它 pull 到您本地的仓库，这样你就可以开始贡献了：

下面是更新您的分支的一个简单方法：

### 将浏览器兼容信息的主 repo 添加到远端服务器列表中

在您的终端或命令行中进入您的 fork 的本地仓库，用以下命令将（服务器上的）主 repo 添加到远端服务器列表中（您只需执行以下命令一次）：

```bash
git remote add upstream https://github.com/mdn/browser-compat-data.git
```

如果您不确定自己是否做到了这一点，您可以检查您仓库已经在用的远端服务器列表：

```bash
git remote -v
```

### 让您的分支与服务器上的内容同步

现在，只要您想更新您的分支，您就可以这样做：

1.  确定您已切换到在主分支：

    ```bash
    git checkout master
    ```

2.  使用以下命令来获取服务器上最新的内容：

    ```bash
    git fetch upstream
    ```

3.  用 rebase 将主仓库的内容合并到您的 master 分支中：

    ```bash
    git rebase upstream/master
    ```

4.  将来自主 repo 的更新 push 回您自己的 repo 中：

    ```bash
    git push -f
    ```

### 创建您用来工作的分支：

接下来，打开您在服务器上的 fork（它的地址可能是`https://github.com/your-username/browser-compat-data`）并且创建一个新分支来存储您的改动。步骤如下：

1.  点击"Branch: Master"按钮；
2.  在"Find or create a branch..."文本输入框中输入一个新的分支名；
3.  点击下方出现的"Create branch _name-of-branch_ from Master"按钮。

举个例子，如果您想补充 WebVR API 的信息，您可以创建一个名为“webvr”的分支。

### 切换到新分支

此时，回到您的终端或命令行，用以下命令将您的新分支同步到您本地的 fork 中：

```bash
git pull
```

现在用以下命令切换到您的新分支

```bash
git checkout -b name-of-branch
```

现在您可以开始进行您对浏览器兼容信息的补充和修改了。

## 添加数据

为添加新的数据，您需要新建文件以存储您的兼容性数据。对于不同技术的数据，您需要创建的文件也有所不同：

- [HTML](/zh-CN/docs/Web/HTML/)：被包含在 [browser-compat-data/html/elements](https://github.com/mdn/browser-compat-data/tree/master/html/elements) 中，每个 HTML 元素对应一个文件。文件需要以元素的小写的名称命名，例如`div.json`。
- [CSS](/zh-CN/docs/CSS)：每个 CSS 属性或选择器对应一个文件。它们被包含在对应的目录中（请参考 [browser-compat-data/css](https://github.com/mdn/browser-compat-data/tree/master/css)）。文件需要以 CSS 特性的小写的名称命名，如`background-color.json`或者`hover.json`。
- [JS](/zh-CN/docs/JavaScript)：被包含在 [browser-compat-data/javascript/builtins](https://github.com/mdn/browser-compat-data/tree/master/javascript/builtins) 中，每个 JavaScript 对象对应一个文件。文件要以 JavaScript 对象的准确名称命名，保留其大小写，如 `Date.json` 或 `InternalError.json`。
- [API](/zh-CN/docs/Web/API)：API 中的每个接口对应一个文件。它们在 [browser-compat-data/api](https://github.com/mdn/browser-compat-data/tree/master/api) 中。每个文件要以接口的准确名称命名，保留其大小写，例如 WebVR API 的文件为`VRDisplay.json`，`VRDisplayCapabilities.json`，等等。

> **备注：** 您会留意到，该仓库还包含了[浏览器拓展](/en-US/Add-ons/WebExtensions)和[HTTP](/en-US/docs/Web/HTTP)**的数据。**These data sets are basically finished as they stand, but more features may need to be added in the future.

你创建的每个文件都需要跟随定义在我们 repo 的 schema 中的这些模板的规定。你可以参考[详细的模板描述](https://github.com/mdn/browser-compat-data/blob/master/compat-data-schema.md)。

### 基本的兼容性数据的结构

让我们来看一下如下例子。一个 CSS 属性 JSON 文件需要以下的结构：

```json
{
  "css": {
    "properties": {
      "border-width": {
        "__compat": {
          ...
        }
      }
    }
  }
}
```

首先有一个`css`对象，其中包含了一个`properties`对象。每个您要设定兼容性数据的特性都对应一个`properties`对象中的成员。而每一个这些成员都有一个`__compat`成员，`__compat`成员中则是实际的数据。

以上的数据能在 [browser-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json) 文件中找到——可将这与 [MDN 上渲染后的浏览器兼容性](/zh-CN/docs/Web/CSS/border-width#Browser_compatibility) 相比较。

对于其他类型特性，写法是类似的，但对象的名称不同：

- 对于 CSS 选择器，它与 CSS 属性的写法基本相同，不同之处在于顶级对象结构是是 `css.selectors` 而不是`css.properties`. 请以 [cue.json](https://github.com/mdn/browser-compat-data/blob/master/css/selectors/cue.json) 作为参考示例。
- 对于 HTML 数据，它的写法基本相同，不同之处在于顶级对象结构是`html.elements`。请以`article.json`作为参考示例。
- JS 内置对象对应的顶级结构是`javascript.builtins`；请以 [Array.json](https://github.com/mdn/browser-compat-data/blob/master/javascript/builtins/Array.json) 作为参考示例。

在一个 HTML、CSS 和 JS 页面中，通常您只需要有一个特性。API 则有些不同——它们总是包含多个子特性（参见下边的 [子特性](#子特性)）。

### 一个特性中的基础结构

在一个特性的`__compat`成员中，您需要包含以下成员：

- `mdn_url`: MDN 上这个特性的页面的 URL。注意，这个 URL 不可以带上本地化文件夹名称，例如：是 `/docs/...` 而不是 `/docs/en-US/...` （或者其他）。本地化文件夹名称会在页面加载时被添加。
- `support`: 所有不同浏览器对这个特性的浏览器支持的信息。
- `status`: Contains members reporting the standards track status of this feature.

浏览器成员名称在架构里被定义（参见 [浏览器标识符](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#browser-identifiers)）。你应该使用现有定义的标识符的完整列表。如果你希望添加其他浏览器，请先联系我们，因为这可能会产生广泛的影响，不应该在未经认真考虑就这么做。

在一个基本的浏览器兼容数据文件中，你只需要在浏览器标识符成员仲包含"version_added" （以下我们会说到[高级场景](#添加数据：高级场景)）。其他你可能使用的值还包括：

- 一个版本号：如果你知道一个浏览器开始支持这个特性的准确版本，用一个字符串表述版本号，例如“47”。
- `true`: 如果一个浏览器支持这个特性，但你不知道准确的版本号，取值用`true`。
- `false`: 如果一个浏览器支持这个特性，取值用 `false`。
- `null`: 如果一个浏览器支持这个特性，取值用 `null`。

在 `status` 成员中，包含三个子成员：

- `"experimental"`: 如果这个特性是[试验性](/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)的，取值为 `true` ，否则为 `false` 。
- `"standard_track"`: 如果这个特性是个在某些规范里的标准的属性（最常见的是 W3C/WHATWG，但有其他规范如 Khronos 或 TC39 等），取值为`true` ，否则为 `false` 。
- `"deprecated"`: 如果这个特性已经[过时](/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete)，取值为`true` ，否则为 `false` 。

作为例子，以下是 [border-width](/en-US/docs/Web/CSS/border-width#Browser_compatibility) 特性的数据 (参见 [border-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json)) ：

```json
"__compat": {
  "mdn_url": "https://developer.mozilla.org/docs/Web/CSS/border-width",
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

There is a fourth, optional, member that can go inside the \_\_compat member — `description`. This can be used to include a human-readable description of the feature. You should only include this if it is hard to see what the feature is from glancing at the data. For example, it might not be that obvious what a constructor is from looking at the data structure, so you can include a description like so:

```json
{
  "api": {
    "AbortController": {
      "__compat": {
        ...
      },
      "AbortController": {
        "__compat": {
          "mdn_url": "https://developer.mozilla.org/docs/Web/API/AbortController/AbortController",
          "description": "<code>AbortController()</code> constructor",
          "support": {
            ...
          }
        }
      }

      ... etc.
    }
  }
}
```

### 子特性

In a page where the compat table has more than one row, you'll need multiple subfeatures inside each feature to define the information for each row. This can happen, for example, when you've got the basic support for a feature stored in one row, but then the feature also has a new property or value type that was addded much later in the specification's life and is only supported in a couple of browsers.

As an example, see the [compat data](https://github.com/mdn/browser-compat-data/blob/master/css/properties/background-color.json) and [corresponding MDN page](/en-US/docs/Web/CSS/background-color) for the `background-color` property. The basic support exists inside the `__compat` object as explained above, then you have an additional row for browsers' support for "alpha channel for hex values", which contains its own `__compat` object.

```json
{
  "css": {
    "properties": {
      "background-color": {
        "__compat": {
          ...
        },
        "alpha_ch_for_hex": {
          "__compat": {
            ...
          },
        }
      }
    }
  }
}
```

For an API, you've got the top two levels defined as `api.name-of-the-interface`, then a top-level `__compat` section to define the overall browser compatibility of the interface, then a sub-feature for each of the methods, properties, and constructors contained inside the interface. The basic structure looks like this:

```json
{
  "api": {
    "VRDisplay": {
      "__compat": {
        ...
      },
      "cancelAnimationFrame": {
        "__compat": {
          ...
        }
      },
      "capabilities": {
        "__compat": {
          ...
        }
      },

      ... etc.

    }
  }
}
```

See [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json) for a full example.

## 添加数据：高级场景

There are some advanced features that you'll want to include in browser compat data. The aim of this section is to list the most common ones, providing an example of each to show how you can implement them in your own compat data.

### Including a footnote

Often compat tables will include footnotes related to certain entries that explain useful details or strange behavior that developers will find useful. As an example, the Chrome Android entry for {{domxref("VRDisplay.capabilities")}} (see also [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json)) (at the time of writing) had a footnote "Currently supported only by Google Daydream." To include this in the capabilities data, we added a "notes" submember inside the relevant "chrome_android" submember; it would look like this:

```json
"chrome_android": {
  "version_added": true,
  "notes": "Currently supported only by Google Daydream."
}
```

### 包含浏览器厂商的前缀

If a feature is supported behind a vendor prefix in one or more browsers, you'll want to make that clear in the browser compat data. 例如您可能有一个特性在 Firefox 浏览器中要用`-moz-`前缀才被支持，要在兼容性数据中指明这一点，您需在对应的"firefox"子成员中增加一个"prefix"子成员。它看起来是这样的：

```json
"firefox": {
  "version_added": true,
  "prefix": "-moz-"
}
```

### Including browser preferences or flags

Some features may be supported in a browser, but they are experimental and turned off by default. If a user wants to play with this feature they need to turn it on using a preference/flag.

To represent this in the compat data, you need to add the "flags" submember inside the relevant browser identifier submember. The value of "flags" is an array of objects each of which contains of three members:

- "type": The type of flag or pref this is. The most common value is "preference", which is set inside the browser (for example, using `about:config` in Firefox, or `chrome://flags` in Chrome), but you might also sometimes use a value of "compile_flag", which is a preference set when the browser build is compiled.
- "name": This is a string representing the name of the preference that needs to have a value set on it. For example, "Enable Experimental Web Platform Features" is a preference that exists in Chrome, found in `chrome://flags`.
- "value_to_set": This is a string representing the value that needs to be set on the preference, for example "true".

So to add a preference/flag to the Chrome support for a feature, you'd do something like this:

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

If a feature is behind two or more flags, you can add additional objects to the "flags" array, like in this case, for example:

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

有时一个特性在浏览器的某个版本被加进去，然后又因为该特性过时而被被移除掉。这可以在"version_removed"子成员中体现。该子成员是一个代表特性被移除的版本的字符串。例如：

```json
"firefox": {
  "version_added": "35",
  "version_removed": "47",
},
```

### Including multiple support points for the same browser entry

Sometimes you'll want to add multiple support data points for the same browser inside the same feature.

As an example, the {{cssxref("text-align-last")}} property (see also [text-align-last.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/text-align-last.json)) was added to Chrome in version 35, supported behind a pref.

The support mentioned above was then removed in version 47; also in version 47, support was added for `text-align-last` enabled by default.

To include both of these data points, you can make the value of the "chrome" submember an array containing two support information objects, rather than just a single support information object:

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

> **备注：** You should put the most current or important support point first in the array — this makes the data easier to read for people who just want to scan it for the latest info.

### 包含一个可选的名字

Occasionally browsers will support a feature under a different name to the name defined in its specification. This might be for example because a browser added experimental support for a feature early, and then the name changed before the spec stabilized.

To include such a case in the browser compat data, you can include a support information point that specifies the alternative name inside an "alternative_name" member.

> **备注：** The alternative name might not be an exact alias — it might have differing behaviour to the standard version.

Let's look at an example. The {{cssxref("border-top-right-radius")}} property (see also [border-top-right-radius.json](https://github.com/mdn/browser-compat-data/blob/2a0cc3f6bb17aa4345441bed47a059dffd847793/css/properties/border-top-right-radius.json)) was supported in Firefox:

- From version 4 onwards with the standard name `border-top-right-radius`.
- From version 49 onwards with a `-webkit-` prefix, for browser compatibility purposes.
- From version 1 onwards with the alternative name `-moz-border-radius-topright`. Support for this alias was removed in version 12.

To represent this in the data, we used the following JSON:

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

在您添加完您的兼容性数据之后，您应该先用以下命令测试一下：

- `npm run lint` — 测试所有兼容性数据以确保 JSON 的格式和书写风格正确，例如正确的缩进和没有遗漏逗号等等。该命令会打印出一个很长的文件名和测试结果的列表；if an error is found, the linter will throw an error on the file it is found in, giving you useful debugging info like line number, error message, etc.
- `npm run show-errors` — validates the JSON against the data schema, and highlights errors such as invalid browser version numbers being used.
- `npm run render 'dotted.path.to.feature'` — allows you to preview the markup for the compat table for a data file in the repo. As an example, `npm run render 'css.properties.background'` shows the table markup for the {{cssxref("background")}} property.

If it is looking OK, you then need to commit it and push it back up to your remote fork on GitHub. You can do this easily with terminal commands like this:

```bash
git add .
git commit -m 'adding compat data for name-of-feature'
git push
```

Now go to your remote fork (i.e. `https://github.com/your-username/browser-compat-data`) and you should see information about your push at the top of the files list (under "Your recently pushed branches"). You can create a pull request (starting the process of pushing this to the main repo) by pressing the "Compare & pull request" button, then following the simple prompts on the subsequent screen.

At this point, you just need to wait. A reviewer will review your pull request, and merge it with the main repo, OR request that you make changes. If changes are needed, make the changes and submit again until the PR is accepted.

## 将数据插入 MDN 页

Once your new data has been included in the main repo, you can start dynamically generating browser compat tables based on that data on MDN pages using the \\{{Compat}} macro. This takes a single parameter, the dot notation required to walk down the JSON data and find the object representing the feature you want to generate the compat table for.

Above the macro call, to help other contributors finding their way, you should add a hidden text that is only visible in MDN contributors in edit mode:

```html
<div class="hidden">
<p>此页面上的兼容性表格由结构化数据生成。如果你想贡献数据，可以看看 <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>并向我们发送 pull request.</p>
</div>
```

As an example, on the {{httpheader("Accept-Charset")}} HTTP header page, the macro call looks like this: \\{{Compat("http.headers.Accept-Charset")}}. If you look at the [accept-charset.json](https://github.com/mdn/browser-compat-data/blob/master/http/headers/accept-charset.json) file in the repo, you'll see how this is reflected in the JSON data.

As another example, The compat table for the {{domxref("VRDisplay.capabilities")}} property is generated using \\{{Compat("api.VRDisplay.capabilities")}}. The macro call generates the following table (and corresponding set of notes):

{{Compat("api.VRDisplay.capabilities")}}

> **备注：** 文件名通常与给予 JSON 结构内的接口的标签相匹配，但事实并非总是如此。当宏调用生成表时，他们遍历所有文件，直到找到相关的 JSON 使用，所以文件名不是关键。说到这一点，你应该始终尽可能直观地命名它们。
