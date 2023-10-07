---
title: WebVTT
slug: Web/API/WebVTT_API
---

WebVTT 是一種 UTF-8 編碼的文字檔案格式，可藉由 {{ HTMLElement("track") }} 元素顯示加註時間資訊之文字軌，其主要設計目的是為 {{ HTMLElement("video") }} 顯示字幕。

WebVTT 當中可以採用空白或分隔字元（tab）。

WebVTT 的 MIME Type 為 `text/vtt`。

## WebVTT 文本

WebVTT 檔的結構中，有兩項必備資訊、四項選用資訊。

- 選用：byte order mark (BOM)
- 字串 `WEBVTT`
- 選用：於 `WEBVTT` 右側可加上文字標題

  - 在 `WEBVTT` 之後至少要有一個空白字元
  - 可以藉此為檔案加上描述
  - 除了換行字元及`「-->`」字串外，可以是任何文字

- 一個空白行，由兩個連續的換行字元構成。
- 選用：一個以上的時間節點（cue）或註解
- 選用：一個以上的空白行

##### 範例 1 - 最簡單的 WEBVTT 檔

```plain
  WEBVTT
```

##### 範例 2 - 很簡單的 WebVTT 檔

```plain
  WEBVTT - 這個檔案沒有時間節點
```

##### 範例 3 - 常見的 WebVTT 例子

```plain
  WEBVTT - 這個檔案有時間節點

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

## WebVTT 註解

Comments are an optional component that can be used to add information to a WebVTT file. Comments are intended for those reading the file and are not seen by users. Comments may contain newlines but it cannot contain a blank line, which is equivalent to two consecutive newlines. A blank line signifies the end of a comment.

註解中不能包含「`-->」字串、「`&」符號或「<」符號。如欲使用後兩者，可採跳脫字串「\&amp;」或「\&lt;」。此外雖規格上允許使用「>」字元，仍然建議跳脫為「\&gt;」以避免混淆。

註解由三個部分組成：

- 字串 `NOTE`
- 一個空白字元或換行字元
- 選用：一個以上的字元，除了前面提到的禁用字元外皆可使用

##### 範例 4 - 常見 WebVTT 範例

```plain
  NOTE 這行是註解
```

##### 範例 5 - 多行註解

```plain
  NOTE
  這也是註解，
  只是拆成多行。

  NOTE 當然也可以像這樣
  來分行寫註解。
```

##### 範例 6 - 常見註解使用方式

```plain
  WEBVTT - 翻譯我喜歡的影片字幕

  NOTE
  本字幕由 Kyle 翻譯，
  希望可以讓我的朋友跟家人一同觀賞。

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
  -Ta en kopp.
```

## WebVTT 時間節點

時間節點（cue）是具備單一開始時間、結束時間、文字內容的字幕區段。 Example 6 consists of the header, a blank line, and then five cues separated by blank lines. 時間節點由五個部分組成：

- 選用：時間節點 ID，後接著一個換行字元
- 時間資訊
- 選用：時間節點設定，每個設定值以空白字元分隔，第一個設定值前也要加個空白字元
- 一個以上的換行字元
- 文字內容

##### 範例 7 - Example of a cue

```plain
1 - Title Crawl
00:00:5.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
Some time ago in a place rather distant....
```

### 節點 ID

此 ID 代表時間節點的名稱，可以用以在腳本語言中參照某段特定時間節點。ID 中禁用換行字元，也不可以包括「`-->」字串。`ID 最後必須以一個換行字元作為結束。

雖然通常都用數字（1, 2, 3...）作為 ID，但規格上並不要求每個 ID 都是為一值。

##### 範例 8 - 範例 7 中的時間節點 ID

```plain
1 - Title Crawl
```

##### 範例 9 - ID 常見用法

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

### 時間資訊

時間資訊標注了此段節點的出現時機，其中包括開始時間與結束時間。結束時間必須比開始時間晚，而開始時間必須比先前所有的開始時間晚，或至少是同一時間。

不同時間節點可以設定為同時顯示，但若 WebVTT 檔案是用在 chapters（{{ HTMLElement("track") }} 的 [`kind`](/zh-TW/docs/Web/HTML/Global_attributes#kind) 設定為 `chapters`），則不允許兩段節點同時出現。

每項時間資訊都由五個部分組成：

- 開始時間
- 一個以上的空白字元
- 「`-->」字串`
- 一個以上的空白字元
- 結束時間

  - 必須比開始時間晚

時間的表示方式，可以是以下兩種：

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

其中的各元素說明如下：

- `hh` - 小時

  - 至少要有兩個數字，不小於 01
  - 可以超過兩個數字（例如 9999:00:00.000）

- `mm` - 分

  - 從 00 到 59

- `ss` - 秒

  - 從 00 到 59

- `ttt` - 毫秒

  - 從 000 到 999

##### Example 10 - Basic cue timing examples

```plain
00:22.230 --> 00:24.606
00:30.739 --> 00:00:34.074
00:00:34.159 --> 00:35.743
00:00:35.827 --> 00:00:40.122
```

##### Example 11 - Overlapping cue timing examples

```plain
00:00:00.000 --> 00:00:10.000
00:00:05.000 --> 00:01:00.000
00:00:30.000 --> 00:00:50.000
```

##### Example 12 - Non-overlapping cue timing examples

```plain
00:00:00.000 --> 00:00:10.000
00:00:10.000 --> 00:01:00.581
00:01:00.581 --> 00:02:00.100
00:02:01.000 --> 00:02:01.000
```

### Cue Settings

Cue settings are optional components used to position where the cue payload text will be displayed over the video. This includes whether the text is displayed horizontally or vertically. There can be zero or more of them, and they can be used in any order so long as each setting is used no more than once.

The cue settings are added to the right of the cue timings. There must be one or more spaces between the cue timing and the first setting and between each setting. A setting's name and value are separated by a colon. The settings are case sensitive so use lower case as shown. There are five cue settings:

- **vertical**

  - 水平方向

  <table style="margin-left: 30px">
    <thead>
      <tr>
        <th colspan="2">Table 1 - vertical values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><code>vertical:rl</code></th>
        <td>文字方向由右至左</td>
      </tr>
      <tr>
        <th><code>vertical:lr</code></th>
        <td>文字方向由左至右</td>
      </tr>
    </tbody>
  </table>

- **line**

  - Specifies where text appears vertically. If vertical is set, line specifies where text appears horizontally.
  - Value can be a line number

    - The line height is the height of the first line of the cue as it appears on the video
    - Positive numbers indicate top down
    - Negative numbers indicate bottom up

  - Or value can be a percentage

    - Must be an integer (i.e. no decimals) between 0 and 100 inclusive
    - Must be followed by a percent sign (%)

  <table style="margin-left: 30px">
    <thead>
      <tr>
        <th colspan="4">Table 2 - line examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> 省略時</th>
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
  - Value is a percentage
  - Must be an integer (no decimals) between 0 and 100 inclusive
  - Must be followed by a percent sign (%)

  <table style="margin-left: 30px">
    <thead>
      <tr>
        <th colspan="4">Table 3 - position examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> 省略時</th>
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
  - Value is a percentage
  - Must be an integer (i.e. no decimals) between 0 and 100 inclusive
  - Must be followed by a percent sign (%)

  <table style="margin-left: 30px">
    <thead>
      <tr>
        <th colspan="4">Table 4 - size examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> 省略時</th>
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

  <table style="margin-left: 30px">
    <thead>
      <tr>
        <th colspan="4">Table 5 - align values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th><code>vertical</code> 省略時</th>
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

```plain
00:00:5.000 --> 00:00:10.000
00:00:5.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:5.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:5.000 --> 00:00:10.000 vertical:rt line:-1 align:end
```

### 文字內容

The payload is where the main information or content is located. In normal usage the payload contains the subtitles to be displayed. The payload text may contain newlines but it cannot contain a blank line, which is equivalent to two consecutive newlines. A blank line signifies the end of a cue.

文字內容中不能包含「`-->」字串、「`&」符號或「<」符號。如欲使用後兩者，可採跳脫字串「\&amp;」或「\&lt;」。此外雖規格上允許使用「>」字元，仍然建議跳脫為「\&gt;」以避免混淆。若您使用 WebVTT 檔作為後設資料，則可不管這些限制。

除了上述的三個跳脫字串外，還有其他四種跳脫字串，分列如下

<table>
  <thead>
    <tr>
      <th colspan="3">Table 6 - 跳脫字串</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>名稱</th>
      <th>字元</th>
      <th>跳脫字串</th>
    </tr>
    <tr>
      <td>「與」</td>
      <td>&#x26;</td>
      <td><code>&#x26;amp;</code></td>
    </tr>
    <tr>
      <td>小於</td>
      <td>&#x3C;</td>
      <td><code>&#x26;lt;</code></td>
    </tr>
    <tr>
      <td>大於</td>
      <td>></td>
      <td><code>&#x26;gt;</code></td>
    </tr>
    <tr>
      <td>左到右標記</td>
      <td></td>
      <td><code>&#x26;lrm;</code></td>
    </tr>
    <tr>
      <td>右到左標記</td>
      <td></td>
      <td><code>&#x26;rlm;</code></td>
    </tr>
    <tr>
      <td>不斷行空白</td>
      <td><code></code></td>
      <td><code>&#x26;nbsp;</code></td>
    </tr>
  </tbody>
</table>

### 文字內容中的標籤

有很多標籤（例如 `<bold>`）可以用在文字內容中，但若 {{ HTMLElement("track") }} 的 [`kind`](/zh-TW/docs/Web/HTML/Global_attributes#kind) 設定為 `chapters` 時，其中所用的 WebVTT 檔案裡就不能使用標籤。

- **時間標籤**
  - : 時間標籤中的時間，必須比該節點的開始時間晚、比同節點先前之其他時間標籤晚，並且早於該節點的結束時間。_當前文字（active text）_ 代表此時間標籤到下個時間標籤（或文字內容的結尾）之間的文字，其他同節點中，比*當前文字* 早的文字都稱為*先前文字（previous text）* ，而晚於*當前文字* 的便稱為*未來文字（future text）* 。如此便可做出卡拉 OK 字幕效果

##### Example 12 - Karaoke style text

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

以下則需要開頭標籤與結束標籤（例如 `<b>text</b>`）。

- **Class 標籤**（`<c></c>`）
  - : 以 CSS 類別為該段文字設定樣式

##### Example 14 - Class tag

```plain
<c.classname>text</c>
```

- **Italics tag** (`<i></i>`)
  - : Italicize the contained text.

##### Example 15 - Italics tag

```plain
<i>text</i>
```

- **Bold tag** (`<b></b>`)
  - : Bold the contained text.

##### Example 16 - Bold tag

```plain
<b>text</b>
```

- **Underline tag** (`<u></u>`)
  - : Underline the contained text.

##### Example 17 - Underline tag

```plain
<u>text</u>
```

- **Ruby tag** (`<ruby></ruby>`)
  - : Used with ruby text tags to display [ruby characters](http://en.wikipedia.org/wiki/Ruby_character) (i.e. small annotative characters above other characters).

##### Example 18 - Ruby tag

```plain
<ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
```

- **Ruby text tag** (`<rt></rt>`)
  - : Used with ruby tags to display [ruby characters](http://en.wikipedia.org/wiki/Ruby_character) (i.e. small annotative characters above other characters).

##### Example 19 - Ruby text tag

```plain
<ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
```

- **Voice tag** (`<v></v>`)
  - : Similar to class tag, also used to style the contained text using CSS.

##### Example 20 - Voice tag

```plain
<v Bob>text</v>
```

## 瀏覽器支援

{{Compat}}

## 規格

- <http://dev.w3.org/html5/webvtt/>
