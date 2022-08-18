---
title: Web 视频文本轨格式（WebVTT）
slug: Web/API/WebVTT_API
---
{{DefaultAPISidebar("WebVTT")}}

**Web 视频文本跟踪格式** (**WebVTT**) 是一种使用{{HTMLElement("track")}}元素显示定时文本轨道（如字幕或标题）的格式。 WebVTT 文件的主要用途是将文本叠加添加到{{HTMLElement("video")}}。 WebVTT 是一种基于文本的格式，必须使用{{Glossary("UTF-8")}}进行编码。 在可以使用空格的地方，您也可以使用制表符。 还有一个小的 API 可用于表示和管理这些轨道以及在正确的时间执行文本回放所需的数据。

## WebVTT 文件

WebVTT 文件的 MIME 类型为 `text/vtt`。

一个 WebVTT 文件（`.vtt`）包含任意条**带时间的提示性内容**（**cue**）（可理解为一条或多条字幕），可以是单行或多行，如下所示：

```
WEBVTT

00:01.000 --> 00:04.000
Never drink liquid nitrogen. 别喝液氮。

00:05.000 --> 00:09.000
- 它会刺穿你的胃。
- It will perforate your stomach.
- 你可能会因此挂掉。
- You could die.
```

## WebVTT 文件内容

一个 WebVTT 文件的内容由以下部分组成，其中一些是可选的，依次为：

- 一个可选的字节顺序标记（BOM）。
- 字符串 "`WEBVTT`"。
- An optional text header to the right of `WEBVTT.`

  - There must be at least one space after `WEBVTT.`
  - You could use this to add a description to the file.
  - You may use anything in the text header except newlines or the string "`-->`".

- A blank line, which is equivalent to two consecutive newlines.
- 任意数量的 cue 或备注。
- 任意数量的空行。

##### 例子 1 - 最简形式的 WEBVTT 文件

```
WEBVTT
```

##### 例子 2 - 仅有 text header 的 WebVTT 文件

```
WEBVTT - This file has no cues.
```

##### 例子 3 - 拥有 header 和 cue 的 WebVTT 文件示例

```
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

### 一个 WebVTT 文件的内部结构

让我们重新检查前面的一个示例，并更详细地研究线索结构。

```
WEBVTT

00:01.000 --> 00:04.000
- Never drink liquid nitrogen.

00:05.000 --> 00:09.000
- It will perforate your stomach.
- You could die.

NOTE This is the last line in the file
```

In the case of each cue:

- 第一行以时间开始，时间是显示下面出现的文本的开始时间。
- 在同一行，我们有一个字符串`-->`。
- 我们用第二次结束第一行，这是显示关联文本的结束时间。
- 然后，我们可以有一个或多个以连字符 (-) 开头的行，每个行包含要显示的文本跟踪的一部分。

我们还可以在.vtt 文件中放置注释，以帮助我们记住关于文件各部分的重要信息。这些应该在单独的行上，从字符串 NOTE 开始。您将在下一节中找到更多关于这些的信息。

重要的是不要在提示中使用“额外的”空白行，例如在计时行和提示有效负载之间。WebVTT 是基于行;空白行将关闭提示。

## WebVTT 注释

Comments are an optional component that can be used to add information to a WebVTT file. Comments are intended for those reading the file and are not seen by users. Comments may contain newlines but cannot contain a blank line, which is equivalent to two consecutive newlines. A blank line signifies the end of a comment.

A comment cannot contain the string "`-->",` the ampersand character (&), or the less-than sign (<). If you wish to use such characters, you need to escape them using for example `&amp;` for ampersand and `&lt;` for less-than. It is also recommended that you use the greater-than escape sequence (`&gt;`) instead of the greater-than character (`>`) to avoid confusion with tags.

A comment consists of three parts:

- The string `NOTE.`
- A space or a newline.
- Zero or more characters other than those noted above.

##### Example 4 - 单行 WebVTT 注释

```
NOTE This is a comment
```

##### Example 5 - 多行注释

```
NOTE
Another comment that is spanning
more than one line.

NOTE You can also make a comment
across more than one line this way.
```

##### Example 6 - 普通注释

```
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

## Styling WebVTT cues

You can style WebVTT cues by looking for elements which match the {{cssxref("::cue")}} pseudo-element.

### Within site CSS

```css
video::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}

video::cue(b) {
  color: peachpuff;
}
```

Here, all video elements are styled to use a gray linear gradient as their backgrounds, with a foreground color of `"papayawhip"`. In addition, text boldfaced using the {{HTMLElement("b")}} element are colored `"peachpuff"`.

The HTML snippet below actually handles displaying the media itself.

```html
<video controls autoplay src="video.webm">
 <track default src="track.vtt">
</video>
```

### Within the WebVTT file itself

You can also define the style directly in the WebVTT file. In this case, you insert your CSS rules into the file with each rule preceded by the string `"STYLE"` all by itelf on a line of text, as shown below:

```
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

We can also use identifiers inside WebVTT file, which can be used for defining a new style for some particular cues in the file. The example where we wanted the transcription text to be red highlighted and the other part to remain normal, we can define it as follows using CSS. Where it must be noted that the CSS uses escape sequences the way they are used in HTML pages:

```
WEBVTT

1
00:00.000 --> 00:02.000
That’s an, an, that’s an L!

crédit de transcription
00:04.000 --> 00:05.000
Transcrit par Célestes™
```

```css
::cue(#\31) { color: lime; }
::cue(#crédit\ de\ transcription) { color: red; }
```

Positioning of text tracks is also supported, by including positioning information after the timings in a cue, as seen below (see [Cue settings](#cue_settings) for more information):

```
WEBVTT

00:00:00.000 --> 00:00:04.000 position:10%,line-left align:left size:35%
Where did he go?

00:00:03.000 --> 00:00:06.500 position:90% align:right size:35%
I think he went down this lane.

00:00:04.000 --> 00:00:06.500 position:45%,line-right align:center size:35%
What are you waiting for?
```

## WebVTT cues

A cue is a single subtitle block that has a single start time, end time, and textual payload. Example 6 consists of the header, a blank line, and then five cues separated by blank lines. A cue consists of five components:

- An optional cue identifier followed by a newline.
- Cue timings.
- Optional cue settings with at least one space before the first and between each setting.
- One or more newlines.
- The cue payload text.

##### Example 7 - Example of a cue

```
1 - Title Crawl
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
Some time ago in a place rather distant....
```

### Cue identifier

The identifier is a name that identifies the cue. It can be used to reference the cue from a script. It must not contain a newline and cannot contain the string "`-->"`. It must end with a single newline. They do not have to be unique, although it is common to number them (e.g., 1, 2, 3, ...).

##### Example 8 - Cue identifier from Example 7

```
1 - Title Crawl
```

##### Example 9 - Common usage of identifiers

```
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

### Cue timings

A cue timing indicates when the cue is shown. It has a start and end time which are represented by timestamps. The end time must be greater than the start time, and the start time must be greater than or equal to all previous start times. Cues may have overlapping timings.

If the WebVTT file is being used for chapters ({{HTMLElement("track")}} {{htmlattrxref("kind")}} is `chapters`) then the file cannot have overlapping timings.

Each cue timing contains five components:

- Timestamp for start time.
- At least one space.
- The string "`-->".`
- At least one space.
- Timestamp for end time.

  - Which must be greater than the start time.

The timestamps must be in one of two formats:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Where the components are defined as follows:

- `hh` is hours.

  - Must be at least two digits.
  - Hours can be greater than two digits (e.g., 9999:00:00.000).

- `mm` is minutes.

  - Must be between 00 and 59 inclusive.

- `ss` is seconds.

  - Must be between 00 and 59 inclusive.

- `ttt` is miliseconds.

  - Must be between 000 and 999 inclusive.

##### Example 10 - Basic cue timing examples

```
00:22.230 --> 00:24.606
00:30.739 --> 00:00:34.074
00:00:34.159 --> 00:35.743
00:00:35.827 --> 00:00:40.122
```

##### Example 11 - Overlapping cue timing examples

```
00:00:00.000 --> 00:00:10.000
00:00:05.000 --> 00:01:00.000
00:00:30.000 --> 00:00:50.000
```

##### Example 12 - Non-overlapping cue timing examples

```
00:00:00.000 --> 00:00:10.000
00:00:10.000 --> 00:01:00.581
00:01:00.581 --> 00:02:00.100
00:02:01.000 --> 00:02:01.000
```

### Cue settings

Cue settings are optional components used to position where the cue payload text will be displayed over the video. This includes whether the text is displayed horizontally or vertically. There can be zero or more of them, and they can be used in any order so long as each setting is used no more than once.

The cue settings are added to the right of the cue timings. There must be one or more spaces between the cue timing and the first setting and between each setting. A setting's name and value are separated by a colon. The settings are case sensitive so use lower case as shown. There are five cue settings:

- **vertical**

  - Indicates that the text will be displayed vertically rather than horizontally, such as in some Asian languages.

  <table>
    <thead>
      <tr>
        <th colspan="2">Table 1 - vertical values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><code>vertical:rl</code></th>
        <td>writing direction is right to left</td>
      </tr>
      <tr>
        <th><code>vertical:lr</code></th>
        <td>writing direction is left to right</td>
      </tr>
    </tbody>
  </table>

- **line**

  - Specifies where text appears vertically. If vertical is set, line specifies where text appears horizontally.
  - Value can be a line number.

    - The line height is the height of the first line of the cue as it appears on the video.
    - Positive numbers indicate top down.
    - Negative numbers indicate bottom up.

  - Or value can be a percentage.

    - Must be an integer (i.e., no decimals) between 0 and 100 inclusive.
    - Must be followed by a percent sign (%).

  <table>
    <thead>
      <tr>
        <th colspan="4">Table 2 - line examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omitted</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>line:0</code></th>
        <td>top</td>
        <td>right</td>
        <td>left</td>
      </tr>
      <tr>
        <th><code>line:-1</code></th>
        <td>bottom</td>
        <td>left</td>
        <td>right</td>
      </tr>
      <tr>
        <th><code>line:0%</code></th>
        <td>top</td>
        <td>right</td>
        <td>left</td>
      </tr>
      <tr>
        <th><code>line:100%</code></th>
        <td>bottom</td>
        <td>left</td>
        <td>right</td>
      </tr>
    </tbody>
  </table>

- **position**

  - Specifies where the text will appear horizontally. If vertical is set, position specifies where the text will appear vertically.
  - Value is a percentage.
  - Must be an integer (no decimals) between 0 and 100 inclusive.
  - Must be followed by a percent sign (%).

  <table>
    <thead>
      <tr>
        <th colspan="4">Table 3 - position examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omitted</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>position:0%</code></th>
        <td>left</td>
        <td>top</td>
        <td>top</td>
      </tr>
      <tr>
        <th><code>position:100%</code></th>
        <td>right</td>
        <td>bottom</td>
        <td>bottom</td>
      </tr>
    </tbody>
  </table>

- **size**

  - Specifies the width of the text area. If vertical is set, size specifies the height of the text area.
  - Value is a percentage.
  - Must be an integer (i.e., no decimals) between 0 and 100 inclusive.
  - Must be followed by a percent sign (%).

  <table>
    <thead>
      <tr>
        <th colspan="4">Table 4 - size examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omitted</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>size:100%</code></th>
        <td>full width</td>
        <td>full height</td>
        <td>full height</td>
      </tr>
      <tr>
        <th><code>size:50%</code></th>
        <td>half width</td>
        <td>half height</td>
        <td>half height</td>
      </tr>
    </tbody>
  </table>

- **align**

  - Specifies the alignment of the text. Text is aligned within the space given by the size cue setting if it is set.

  <table>
    <thead>
      <tr>
        <th colspan="4">Table 5 - align values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> omitted</th>
        <th><code>vertical:rl</code></th>
        <th><code>vertical:lr</code></th>
      </tr>
      <tr>
        <th><code>align:start</code></th>
        <td>left</td>
        <td>top</td>
        <td>top</td>
      </tr>
      <tr>
        <th><code>align:middle</code></th>
        <td>centred horizontally</td>
        <td>centred vertically</td>
        <td>centred vertically</td>
      </tr>
      <tr>
        <th><code>align:end</code></th>
        <td>right</td>
        <td>bottom</td>
        <td>bottom</td>
      </tr>
    </tbody>
  </table>

##### Example 13 - Cue setting examples

The first line demonstrates no settings. The second line might be used to overlay text on a sign or label. The third line might be used for a title. The last line might be used for an Asian language.

```
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
```

### Cue payload

The payload is where the main information or content is located. In normal usage the payload contains the subtitles to be displayed. The payload text may contain newlines but it cannot contain a blank line, which is equivalent to two consecutive newlines. A blank line signifies the end of a cue.

A cue text payload cannot contain the string "`-->"`, the ampersand character (&), or the less-than sign (<). Instead use the escape sequence "\&amp;" for ampersand and "\&lt;" for less-than. It is also recommended that you use the greater-than escape sequence "\&gt;" instead of the greater-than character (>) to avoid confusion with tags. If you are using the WebVTT file for metadata these restrictions do not apply.

In addition to the three escape sequences mentioned above, there are fours others. They are listed in the table below.

<table>
  <thead>
    <tr>
      <th colspan="3">Table 6 - Escape sequences</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Character</th>
      <th>Escape Sequence</th>
    </tr>
    <tr>
      <td>Ampersand</td>
      <td>&#x26;</td>
      <td><code>&#x26;amp;</code></td>
    </tr>
    <tr>
      <td>Less-than</td>
      <td>&#x3C;</td>
      <td><code>&#x26;lt;</code></td>
    </tr>
    <tr>
      <td>Greater-than</td>
      <td>></td>
      <td><code>&#x26;gt;</code></td>
    </tr>
    <tr>
      <td>Left-to-right mark</td>
      <td></td>
      <td><code>&#x26;lrm;</code></td>
    </tr>
    <tr>
      <td>Right-to-left mark</td>
      <td></td>
      <td><code>&#x26;rlm;</code></td>
    </tr>
    <tr>
      <td>Non-breaking space</td>
      <td><code></code></td>
      <td><code>&#x26;nbsp;</code></td>
    </tr>
  </tbody>
</table>

### Cue payload text tags

There are a number of tags, such as `<bold>`, that can be used. However, if the WebVTT file is used in a {{HTMLElement("track")}} element where the attribute {{htmlattrxref("kind")}} is `chapters` then you cannot use tags.

- **Timestamp tag**

  - The timestamp must be greater that the cue's start timestamp, greater than any previous timestamp in the cue payload, and less than the cue's end timestamp. The _active text_ is the text between the timestamp and the next timestamp or to the end of the payload if there is not another timestamp in the payload. Any text before the _active text_ in the payload is _previous text_ . Any text beyond the _active text_ is _future text_ . This enables karaoke style captions.

  ##### Example 12 - Karaoke style text

  ```
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

The following tags are the HTML tags allowed in a cue and require opening and closing tags (e.g., `<b>text</b>`).

- **Class tag** (`<c></c>`)

  - Style the contained text using a CSS class.

  ##### Example 14 - Class tag

  ```
  <c.classname>text</c>
  ```

- **Italics tag** (`<i></i>`)

  - Italicize the contained text.

  ##### Example 15 - Italics tag

  ```
  <i>text</i>
  ```

- **Bold tag** (`<b></b>`)

  - Bold the contained text.

  ##### Example 16 - Bold tag

  ```
  <b>text</b>
  ```

- **Underline tag** (`<u></u>`)

  - Underline the contained text.

  ##### Example 17 - Underline tag

  ```
  <u>text</u>
  ```

- **Ruby tag** (`<ruby></ruby>`)

  - Used with ruby text tags to display [ruby characters](http://en.wikipedia.org/wiki/Ruby_character) (i.e., small annotative characters above other characters).

  ##### Example 18 - Ruby tag

  ```
  <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
  ```

- **Ruby text tag** (`<rt></rt>`)

  - Used with ruby tags to display [ruby characters](http://en.wikipedia.org/wiki/Ruby_character) (i.e., small annotative characters above other characters).

  ##### Example 19 - Ruby text tag

  ```
  <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
  ```

- **Voice tag** (`<v></v>`)

  - Similar to class tag, also used to style the contained text using CSS.

  ##### Example 20 - Voice tag

  ```
  <v Bob>text</v>
  ```

## Interfaces

There are two interfaces or APIs used in WebVTT which are:

### VTTCue interface

It is used for providing an interface in Document Object Model API, where different attributes supported by it can be used to prepare and alter the cues in number of ways.

Constructor is the first point for starting the Cue which is defined using the default constructor VTTCue(startTime, endTime, text) where starting time, ending time and text for cue can be adjusted. After that we can set the region for that particular cue to which this cue belongs using cue.region. Vertical, horizontal, line, lineAlign, Position, positionAlign, text, size and Align can be used to alter the cue and its formation, just like we can alter the objects form, shape and visibility in HTML using CSS. But the VTTCue interface is within the WebVTT provides the vast range of adjustment variables which can be used directly to alter the Cue. Following interface can be used to expose WebVTT cues in DOM API:

```
enum AutoKeyword { "auto" };
enum DirectionSetting { "" /* horizontal */, "rl", "lr" };
enum LineAlignSetting { "start", "center", "end" };
enum PositionAlignSetting { "line-left", "center", "line-right", "auto" };
enum AlignSetting { "start", "center", "end", "left", "right" };
[Constructor(double startTime, double endTime, DOMString text)]
interface VTTCue : TextTrackCue {
  attribute VTTRegion? region;
  attribute DirectionSetting vertical;
  attribute boolean snapToLines;
  attribute (double or AutoKeyword) line;
  attribute LineAlignSetting lineAlign;
  attribute (double or AutoKeyword) position;
  attribute PositionAlignSetting positionAlign;
  attribute double size;
  attribute AlignSetting align;
  attribute DOMString text;
  DocumentFragment getCueAsHTML();
};
```

### VTT Region interface

This is the second interface in WebVTT API.

The new keyword can be used for defining a new VTTRegion object which can then be used for containing the multiple cues. There are several properties of VTTRegion which are width, lines, regionAnchorX, RegionAnchorY, viewportAnchorX, viewportAnchorY and scroll that can be used to specify the look and feel of this VTT region. The interface code is given below which can be used to expose the WebVTT regions in DOM API:

```
enum ScrollSetting { "" /* none */, "up" };
[Constructor]
interface VTTRegion {
  attribute double width;
  attribute long lines;
  attribute double regionAnchorX;
  attribute double regionAnchorY;
  attribute double viewportAnchorX;
  attribute double viewportAnchorY;
  attribute ScrollSetting scroll;
};
```

## Methods and properties

The methods used in WebVTT are those which are used to alter the cue or region as the attributes for both interfaces are different. We can categorize them for better understanding relating to each interface in WebVTT:

### VTTCue

- The methods which are available in this interface are:

  - GetCueAsHTML to get the HTML of that Cue.
  - VTT Constructor for creating new objects of Cues.
  - Autokeyword.
  - DirectionSetting: to set the direction of caption or text in a file.
  - LineAlignment: to adjust the line alignment.
  - PositionAlignSetting: to adjust the position of text.

### VTTRegion

- The methods used for region are listed below along with description of their functionality:

  - ScrollSetting: For adjusting the scrolling setting of all nodes present in given region.
  - VTT Region Constructor: for construction of new VTT Regions.

## Tutorial on how to write a WebVTT file

There are few steps that can be followed to write a simple webVTT file. Before start, it must be noted that you can make use of a notepad and then save the file as ‘.vtt’ file. Steps are given below:

1. Open a notepad.
2. The first line of WebVTT is standardized similar in the way some other languages require you to put headers as the file starts to indicate the file type. One the very first line you have to write.

```
WEBVTT
```

3\. Leave the second line blank, and on the third line the time for first cue is to be specified. For example, for a first cue starting at time 1 second and ending at 5 seconds, it is written as:

```
00:01.000 --> 00:05.000
```

1. On the next line you can write the caption for this cue which will run from 1st second to the 5th second, inclusive.
2. Following the similar steps, a complete WebVTT file for specific video or audio file can be made.

## CSS pseudo-classes

CSS pseudo classes allow us to classify the type of object which we want to differentiate from other types of objects. It works in similar manner in WebVTT files as it works in HTML file.

It is one of the good features supported by WebVTT is the localization and use of class elements which can be used in same way they are used in HTML and CSS to classify the style for particular type of objects, but here these are used for styling and classifying the Cues as shown below:

```
WEBVTT

04:02.500 --> 04:05.000
J’ai commencé le basket à l'âge de 13, 14 ans

04:05.001 --> 04:07.800
Sur les <i.foreignphrase><lang en>playground</lang></i>, ici à Montpellier
```

In the above example it can be observed that we can use the identifier and pseudo class name for defining the language of caption, where `<i>` tag is for italics.

The type of pseudo class is determined by the selector it is using and working is similar in nature as it works in HTML. Following CSS pseudo classes can be used:

- Lang (Lanugage): e.g., p:lang(it).
- Link: e.g., a:link.
- Nth-last-child: e.g., p:nth-last-child(2).
- Nth-child(n): e.g., p:nth-child(2).

Where p and a are the tags which are used in HTML for paragraph and link, respectively and they can be replaced by identifiers which are used for Cues in WebVTT file.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 备注

Prior to Firefox 50, the `AlignSetting` enum (representing possible values for {{domxref("VTTCue.align")}}) incorrectly included the value `"middle"` instead of `"center"`. This has been corrected.

WebVTT was implemented in Firefox 24 behind the preference `media.webvtt.enabled`, which is disabled by default; you can enable it by setting this preference to `true`. WebVTT is enabled by default starting in Firefox 31 and can be disabled by setting the preference to `false`.

Prior to Firefox 58, the `REGION` keyword was creating {{domxref("VTTRegion")}} objects, but they were not being used. Firefox 58 now fully supports `VTTRegion` and its use; however, this feature is disabled by default behind the preference `media.webvtt.regions.enabled`; set it to `true` to enable region support in Firefox 58. Regions are enabled by default starting in Firefox 59 (see bugs {{bug(1338030)}} and {{bug(1415805)}}).
