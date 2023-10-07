---
title: Web 视频文本轨格式（WebVTT）
slug: Web/API/WebVTT_API
---

{{DefaultAPISidebar("WebVTT")}}

**Web 视频文本轨格式**（**WebVTT**）是一种使用 {{HTMLElement("track")}} 元素显示定时文本轨道（例如字幕或者标题）的格式。WebVTT 文件的主要用途是将文本叠加到 {{HTMLElement("video")}} 中。WebVTT 是一种基于文本的格式，必须使用 {{Glossary("UTF-8")}} 进行编码。在可以使用空格的地方，也可以使用制表符。这里也有一个小的 API 可用于表示和管理这些轨道以及在正确时间执行文本回放所需的数据。

## WebVTT 文件

WebVTT 的 MIME 格式是 `text/vtt`。

一个 WebVTT 文件（`.vtt`）包含一行或者多行的时间提示性内容（cue），如下所示：

```plain
WEBVTT

00:01.000 --> 00:04.000
- Never drink liquid nitrogen.

00:05.000 --> 00:09.000
- It will perforate your stomach.
- You could die.
```

## WebVTT 主体内容

WebVTT 的结构由以下部分组成，其中一些是可选的，如下所示：

- 一个可选的字节顺序标记（BOM）。
- 字符串“`WEBVTT`”。
- `WEBVTT` 右侧的可选文本标题。

  - `WEBVTT` 之后必须有一个空格。
  - 你可以通过此方式向文本添加描述。
  - 你可以在文本标题中使用除换行符和“`-->`”字符外的任何内容。

- 空白行，相当于两个连续的换行符。
- 任意数量的 cue 或注释。
- 任意数量的空行。

### 示例

- 最简形式的 WebVTT 文件

  ```plain
  WEBVTT
  ```

- 仅有一个文本标题的 WebVTT

  ```plain
  WEBVTT - This file has no cues.
  ```

- 有着文本标题和 cue 的通用 WebVTT 文件

  ```plain
  WEBVTT - This file has cues.

  14
  00:01:14.815 --> 00:01:18.114
  - What?
  - Where are we now?

  15
  00:01:18.171 --> 00:01:20.991
  - This is big bat country.

  16
  00:01:21.058 --> 00:01:23.868
  - [ Bats Screeching ]
  - They won't get in your hair. They're after the bugs.
  ```

### 一个 WebVTT 文件内部结构

让我们重新检查我们之前的一个示例，并且更仔细的查看 cue 的内部结构。

```plain
WEBVTT

00:01.000 --> 00:04.000
- Never drink liquid nitrogen.

00:05.000 --> 00:09.000
- It will perforate your stomach.
- You could die.
```

每个 cue 的作用如下：

- 第一行是以时间开始，其是显示了字幕出现在下面的开始时间。
- 在同一行，我们有一个字符串“`-->`”。
- 我们使用第二个时间结束第一行，其是显示关联文本结束的时间。
- 然后，我们可以有一个或者多个连字符开头的行（-），每个行都是要显示的字幕轨的一部分。

我们页可以在我们的 `.vtt` 文件放置注释，以帮助我们记住关于文件各部分的重要信息。这些应该在单独的行上，以 `NOTE` 字符串开头。你将在下一部分找到更多关于这些的信息。

重要的是不要在 cue 中使用“额外的”空白行，例如时间行和 cue 其余的行之间。WebVTT 是基于行的；一个空白行将关闭 cue。

## WebVTT 注释

注释是一个可选的部分，其可以用于给 WebVTT 文件增加信息。注释是为那些阅读文件的人准备的，并且用户不能看到。注释可以包含换行符，但是不能包含空白行，这相当于两个连续的换行符。一个空白行标志该注释的结尾。

注释不能包含 `-->` 字符串、和号字符（`&`）或者小于号（`<`）。如果你希望使用这些字符，你需要使用例如 `&amp;` 和 `&lt;`，避免使用和号和小于号字符。这里建议你使用大于转义序列（`&gt;`），而不是大于字符（`>`）去避免与标签混淆。

注释由这三部分组成：

- `NOTE` 字符串。
- 空格或者换行符。
- 除上述字符外任意多的字符。

### 示例

- 通用 WebVTT 示例

  ```plain
  NOTE This is a comment
  ```

- 多行注释

  ```plain
  NOTE
  One comment that is spanning
  more than one line.

  NOTE You can also make a comment
  across more than one line this way.
  ```

- 通用注释用法

  ```plain
  WEBVTT - Translation of that film I like

  NOTE
  This translation was done by Kyle so that
  some friends can watch it with their parents.

  1
  00:02:15.000 --> 00:02:20.000
  - Ta en kopp varmt te.
  - Det är inte varmt.

  2
  00:02:20.000 --> 00:02:25.000
  - Har en kopp te.
  - Det smakar som te.

  NOTE This last line may not translate well.

  3
  00:02:25.000 --> 00:02:30.000
  - Ta en kopp
  ```

## 为 WebVTT cue 添加样式

你可以通过查找与 {{cssxref("::cue")}} 伪元素匹配的元素来为 WebVTT 添加样式。

### 在网页中使用 CSS 定义样式

```css
video::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}

video::cue(b) {
  color: peachpuff;
}
```

在这里，视频元素中的所有字幕风格都使用一个灰色的线性渐变作为它们的背景，并且拥有 `"papayawhip"` 的前景颜色。此外，使用 {{HTMLElement("b")}} 元素加粗的字幕是 `"peachpuff"` 颜色的。

以下的 HTML 片段实际上处理媒体自身的显示。

```html
<video controls autoplay src="video.webm">
  <track default src="track.vtt" />
</video>
```

### 在 WebVTT 文件自身中定义样式

你也可以在 WebVTT 文件中直接定义样式。在这种情况下，你可以插入 CSS 规则到文件中，且每个规则之前，在一行单独的文本上都有 `"STYLE"` 字符串，如下所示：

```plain
WEBVTT

STYLE
::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}
/* Style blocks cannot use blank lines nor "dash dash greater than" */

NOTE comment blocks can be used between style blocks.

STYLE
::cue(b) {
  color: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- Hello <b>world</b>.

NOTE style blocks cannot appear after the first cue.
```

我们也可以在 WebVTT 文件中使用标识符，其可以为文件的某些特殊的 cue 定义新样式。例如，我们希望转录文本以红色高亮显示，且另一部分保持正常，我们可以使用 CSS 定义它，如下所示。需要注意的是，CSS 在 HTML 页面使用时，要使用转义序列的方式：

```plain
WEBVTT

1
00:00.000 --> 00:02.000
That's an, an, that's an L!

crédit de transcription
00:04.000 --> 00:05.000
Transcrit par Célestes™
```

```css
::cue(#\31) {
  color: lime;
}
::cue(#crédit\ de\ transcription) {
  color: red;
}
```

字幕轨的位置也是受支持的，通过在 cue 的时间线后添加位置信息，如下所示（参见 [Cue 设置](#cue_设置)获取更多信息）：

```plain
WEBVTT

00:00:00.000 --> 00:00:04.000 position:10%,line-left align:left size:35%
Where did he go?

00:00:03.000 --> 00:00:06.500 position:90% align:right size:35%
I think he went down this lane.

00:00:04.000 --> 00:00:06.500 position:45%,line-right align:center size:35%
What are you waiting for?
```

## WebVTT cue

一个 cue 就是一个单独的字幕块，它有一个单独的开始、结束和要显示文本。一个 cue 由五部分组成：

- 可选的 cue 标识符，后跟换行符。
- cue 时间线。
- 可选的 cue 设置，在第一个设置之前和每个设置之间至少有一个空格。
- 单独的换行。
- cue 中要显示文本。

这里有一个 cue 的示例：

```plain
1 - Title Crawl
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
Some time ago in a place rather distant....
```

### cue 标识符

标识符是标识 cue 的名称。它可以从一个脚本中引用 cue。其不得包含换行以及不能包含“`-->`”字符串。它必须以一个新行结束。它们不必是唯一的，尽管对它们进行编号很常见（例如，1、2、3）。

这里有一些示例：

- 一个基本的 cue 标识符

  ```plain
  1 - Title Crawl
  ```

- 标识符通常的用法

  ```plain
  WEBVTT

  1
  00:00:22.230 --> 00:00:24.606
  This is the first subtitle.

  2
  00:00:30.739 --> 00:00:34.074
  This is the second.

  3
  00:00:34.159 --> 00:00:35.743
  Third
  ```

### cue 时间线

cue 时间线指示 cue 何时显示。它用时间戳表示开始和结束的时间。结束的时间一定大于开始的时间，并且开始时间必须大于或者等于所有之前开始的时间。cue 可能具有重叠的时间。

如果 webVTT 文件用于 chapters（{{HTMLElement("track")}} 的 [`kind`](/zh-CN/docs/Web/HTML/Global_attributes#kind) 是 `chapters`），那么文件中不能有重叠的时间。

每个 cue 的时间线都包含五个部分：

- 开始的时间戳。
- 至少一个空格
- “`-->`”字符串。
- 至少一个空格。
- 结束的时间戳，必须大于开始的时间。

时间戳必须是以下两种格式之一：

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

其中各部分定义如下：

- `hh`
  - : 表示小时并且必须至少有两个数字。他可以超过两个数字（例如 `9999:00:00.000`）。
- `mm`
  - : 表示分钟并且必须在 00 和 59 之间（包括 00 和 59）。
- `ss`
  - : 表示秒并且必须在 00 和 59 之间（包括 00 和 59）。
- `ttt`
  - : 表示分钟并且必须在 000 和 999 之间（包括 000 和 999）。

这里有一些时间线的示例：

- 基本的 cue 时间线示例

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- 重叠的 cue 时间线示例

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- 未重叠的 cue 时间线示例

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Cue 设置

cue 设置是可选的，其用于设置有效字幕将显示在视频中的具体位置。这包括文本是水平显示还是垂直显示。它们可以是任意的个数，只要每个设置使用不超过一次，它们就可以以任何顺序使用。

cue 设置被增加在 cue 时间线的右侧。在 cue 时间线和第一个设置之间以及每个设置之间必须有一个或者更多的空格。设置的名称和值由冒号分隔。设置区分大小写，因此如下所示，其都是使用小写的。这里有五个 cue 设置：

- `vertical`
  - : 表示文本将垂直的显示而不是水平的显示，例如在一些亚洲语言中。这里有两个可能的值：
    - `rl`
      - : 书写方向从右向左。
    - `lr`
      - : 书写方向从左向右。
- `line`

  - : 如果没有设置垂直方向，那么指定文本垂直方向显示的位置。如果设置了垂直，line 指定文本出现的水平位置。它的值可能是：

    - 数字
      - : 数字表示视频中显示的 cue 第一行的高度。正数表示自上而下，负数表示自下而上。
    - 百分比
      - : 它必须是一个 0 和 100 之间的整数，包括 0 和 100（即不是小数），并且其后必须跟随一个百分比符号（%）。

    | Line        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `line:0`    | top                | right         | left          |
    | `line:-1`   | bottom             | left          | right         |
    | `line:0%`   | top                | right         | left          |
    | `line:100%` | bottom             | left          | right         |

- `position`

  - : 指定字幕水平出现的位置。如果设置了垂直方向，position 指定文本垂直方向出现的位置。当值是一个百分比，其必须是一个 0 到 100 之间的整数，包括 0 和 100（不是小数），并且其后必须跟随一个百分比符号（%）。

    | Position        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | --------------- | ------------------ | ------------- | ------------- |
    | `position:0%`   | left               | top           | top           |
    | `position:100%` | right              | bottom        | bottom        |

- `size`

  - : 指定字幕区域到宽度。如果设置了垂直方向，size 指定了文本区域到高度。当值是一个百分比，其必须是一个 0 到 100 之间的整数，包括 0 和 100（不是小数），并且其后必须跟随一个百分比符号（%）。

    | Size        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `size:100%` | full width         | full height   | full height   |
    | `size:50%`  | half width         | half height   | half height   |

- `align`

  - : 指定文本的对齐方式。如果设置了字幕，则在 cue 设置的 size 给出的空间中对齐。

    | Align          | `vertical` omitted    | `vertical:rl`       | `vertical:lr`       |
    | -------------- | --------------------- | ------------------- | ------------------- |
    | `align:start`  | left                  | top                 | top                 |
    | `align:center` | centered horizontally | centered vertically | centered vertically |
    | `align:end`    | right                 | bottom              | bottom              |

让我们学习 cue 设置的示例。

第一行没有显示任何设置。第二行用于在标记或者标签上叠加文本。第三行可用于标题，最后一行可能是一个亚洲语言。

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
```

### cue 有效内容

有效内容是主要信息或者内容所处的位置。在正常使用中，有效内容包含将被展示的字幕。有效内容中的文本可包含换行符，但是它不能包含一个空行，这等同于两个连续的换行符。一个空白行表示 cue 的结尾。

cue 文本的有效内容不能包含 `-->` 字符串、和号字符（`&`）或者小于号（`<`）。然而，你需要使用例如 `&amp;` 和 `&lt;`，避免使用和号和小于号字符。这里也建议你使用大于转义序列（`&gt;`），而不是大于字符（`>`）去避免与标签混淆。如果你将 WebVTT 文件用于元数据，这些限制不会适用。

除了上面提到的三个转义序列外，这里还有四个。它们在以下列表。

| 名称           | 字符   | 转义序列 |
| -------------- | ------ | -------- |
| 和号           | `&`    | `&amp;`  |
| 小于号         | `<`    | `&lt;`   |
| 大于号         | `>`    | `&gt;`   |
| 从左向右的标志 | _none_ | `&lrm;`  |
| 从右向左的标志 | _none_ | `&rlm;`  |
| 不换行的空格   |        | `&nbsp;` |

### cue 有效内容的文本标签

这里有一些标签，例如 `<b>`。然而，如果 WebVTT 文件在 [`kind`](/zh-CN/docs/Web/HTML/Global_attributes#kind) 属性是 `chapters` 的 {{HTMLElement("track")}} 元素中使用，那么你无法使用这些标签。

- 时间戳标签

  - : 时间戳必须大于 cue 开始的时间戳，大于在 cue 有效内容中任意之前的时间戳，并且小于 cue 结束的时间戳。_活动的文本_（active text）是指当前时间戳和下一个时间戳之间的文本或者如果有效内容中没有其他时间戳，则一直到有效内容末尾的文本。有效内容中*活动的文本*之前的任何文本都是*之前已出现的文本*（previous text）。*活动的文本*之后的文本都是*未来即将出现的文本*（future text）。这启用了 karaoke 风格的字幕。

    ```plain
    1
    00:16.500 --> 00:18.500
    When the moon <00:17.500>hits your eye

    1
    00:00:18.500 --> 00:00:20.500
    Like a <00:19.000>big-a <00:19.500>pizza <00:20.000>pie

    1
    00:00:20.500 --> 00:00:21.500
    That's <00:00:21.000>amore
    ```

以下标签是 cue 中允许的 HTML 标签，并且需要闭合（例如 `<b>text</b>`）。

- 类标签（`<c></c>`）

  - : 使用 CSS 类对包含的文本进行样式设置。

    ```xml
    <c.classname>text</c>
    ```

- 斜体标签（`<i></i>`）

  - : 将包含的文本斜体化。

    ```xml
    <i>text</i>
    ```

- 粗体标签（`<b></b>`）

  - : 将包含的文本粗体化。

    ```xml
    <b>text</b>
    ```

- 下划线标签（`<u></u>`）

  - : 给包含的文本加下划线

    ```xml
    <u>text</u>
    ```

- Ruby 标签（`<ruby></ruby>`）

  - : 使用 ruby 文本标签展示 [ruby 字符](https://en.wikipedia.org/wiki/Ruby_character)（即其他字符上的小的注解字符）。

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby 文本标签（`<rt></rt>`）

  - : 使用 ruby 文本标签展示 [ruby 字符](https://en.wikipedia.org/wiki/Ruby_character)（即其他字符上的小的注解字符）。

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- 声音标签（`<v></v>`）

  - : 与类标签类似，也用于使用 CSS 设置包含文本的样式。

    ```xml
    <v Bob>text</v>
    ```

## 方法和属性

WebVTT 使用的方法是那些用于更改 cue 或者 region 的方法，因为两个接口的属性都不同，我们可以对它们进行分类，以更好地理解关于 WebVTT 中的每个接口：

### VTTCue

{{domxref("VTTCue")}} 接口可用的方法：

- {{domxref("VTTCue.getCueAsHTML", "getCueAsHTML()")}} 获取该 cue 的 HTML。
- 一个构造函数，{{domxref("VTTCue.VTTCue", "VTTCue()")}} 用于创建此接口的新实例。

允许不同的属性去读和设置 cue 的特征，像它的位置、对齐方式或者大小都是可更改的。检查 {{domxref("VTTCue")}} 获取完整性列表。

### VTTRegion

{{domxref("VTTRegion")}} 提供用于以下区域的方法，以及对其功能的描述，特别是它允许去调整整个给定区域中所有节点的滚动设置。

## 如何编写 WebVTT 文件的指导

编写一个简单的 WebVTT 文件可以遵循以下步骤。开始之前，必须注意你可以使用记事本且保存文件作为“.vtt”的格式。步骤如下所示：

- 打开一个记事本。
- WebVTT 的第一行是标准化的，类似于其他一些语言，你需要去文件头部标识文件的类型。在第一行，你得这样写：

  ```plain
  WEBVTT
  ```

- 第二行留空，在第三行指定第一个 cue 的时间。例如，第一个 cue 从第 1 秒开始且第 5 秒结束，他可以这样写：

  ```plain
  00:01.000 --> 00:05.000
  ```

- 在下一行，以可以为这个 cue 写上字幕，它们将在第 1 秒和第 5 秒期间（包括第 1 秒和第 5 秒）显示。
- 按照类似的步骤，可以为指定的视频或音频文件制作完整的 WebVTT 文件。

## CSS 伪类

CSS 伪类允许我们去归类我们想与其他对象类型区别的对象类型。它在 WebVTT 文件的工作方式与在 HTML 文件的工作方式类似。

WebVTT 支持的良好的特征之一是本地化和类元素的使用，它们可以以相同的方式在 HTML 和 CSS 中为特定的对象类型用样式进行归类，但在这里，这些元素用于样式化以及分类 cue，如下所示：

```plain
WEBVTT

04:02.500 --> 04:05.000
J'ai commencé le basket à l'âge de 13, 14 ans

04:05.001 --> 04:07.800
Sur les <i.foreignphrase><lang en>playground</lang></i>, ici à Montpellier
```

在上面的示例中，可以看到我们可以使用标识符和伪类名称定义字幕的语言，其中 `<i>` 标签用于斜体。

伪类的类型由它正在使用的选择器决定，其工作性质与在 HTML 中的选择器类似。以下 CSS 伪类可以被使用：

- `lang`（Language）：例如 `p:lang(it)`。
- `link`：例如 `a:link`。
- `nth-last-child`：例如 `p:nth-last-child(2)`。
- `nth-child(n)`：例如 `p:nth-child(2)`。

其中 p 和 a 标签被用作 HTML 标签中的段落和链接，它们可以替换 WebVTT 文件中用于 cue 的标识符。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 注意

在 Firefox 50 之前，`AlignSetting` 枚举（表示 {{domxref("VTTCue.align")}} 可能的值）错误地包含 `"middle"` 值而不是 `"center"` 值。但这已经得到了纠正。

WebVTT 在 Firefox 24 的首选项 `media.webvtt.enabled` 之后实现，默认是禁止的；你可以设置这个选项为 `true` 以启用它。WebVTT 在 Firefox 31 默认开启并可以通过设置这个选项为 `false` 以禁止它。

在 Firefox 58 之前，`REGION` 关键字由 {{domxref("VTTRegion")}} 对象创建，但是它们没有被使用。Firefox 58 现在完全支持 `VTTRegion` 以及它的使用；然而，这个功能在首选项 `media.webvtt.regions.enabled` 默认是禁用的；将其设置为 `true` 以在 Firefox 58 开启区域支持。在 Firefox 59 中默认是开启的（参见 bug [Firefox bug 1338030](https://bugzil.la/1338030) 和 [Firefox bug 1415805](https://bugzil.la/1415805)）。

## 参见

- CSS 伪类 [`::cue` 和 `::cue()`](/zh-CN/docs/Web/CSS/::cue)
