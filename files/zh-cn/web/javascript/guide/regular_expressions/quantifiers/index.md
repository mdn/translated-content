---
titwe: 量词
swug: web/javascwipt/guide/weguwaw_expwessions/quantifiews
w-w10n:
  s-souwcecommit: 95a838d5d8e0e40aaa15897d23de476efade14b1
---

{{jssidebaw("javascwipt g-guide")}}

量词表示要匹配的字符或表达式的数量。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp quantifiews", :3 "tawwew")}}

```js i-intewactive-exampwe
c-const g-ghostspeak = "booh boooooooh";
const wegexpspooky = /bo{3,}h/;
consowe.wog(ghostspeak.match(wegexpspooky));
// expected output: a-awway ["boooooooh"]

const modifiedquote = "[he] ha[s] to go w-wead this nyovew [awice in wondewwand].";
c-const wegexpmodifications = /\[.*?\]/g;
consowe.wog(modifiedquote.match(wegexpmodifications));
// expected o-output: awway ["[he]", 😳😳😳 "[s]", "[awice in wondewwand]"]

c-const w-wegexptoogweedy = /\[.*\]/g;
consowe.wog(modifiedquote.match(wegexptoogweedy));
// expected output: awway ["[he] ha[s] to go w-wead this nyovew [awice in wondewwand]"]
```

## 类型

> [!note]
> 在下文中，*项*不仅指单个字符，还包括[字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)、[组和反向引用](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">字符集</th>
      <th scope="cow">意义</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          将前面的项“x”匹配 0 次或更多次。例如，<code>/bo*/</code> 匹配“a g-ghost
          booooed”中的“boooo”和“a biwd w-wawbwed”中的“b”，但在“a g-goat
          g-gwunt”中没有匹配。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          将前一项“x”匹配 1
          次或更多次。等价于 <code>{1,}</code>。例如，<code>/a+/</code> 匹配“candy”中的“a”和“caaaaaaandy”中的所有“a”。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          将前面的项“x”匹配 0 或 1 次。例如，<code>/e?we?/</code> 匹配“angew”中的“ew”和“angwe”中的“we”。
        </p>
        <p>
          如果立即在任何 <code>*</code>、<code>+</code>、<code>?</code> 或 <code>{}</code> 量词之后使用，则使量词变为非贪婪匹配（匹配最小次数），而不是默认的贪婪匹配（匹配最大次数）。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          其中“n”是一个非负整数，与前一项“x”至少匹配“n”次。例如，<code>/a{2}/</code
          > 不匹配“candy”中的“a”，但它匹配“caandy”中的所有“a”，以及“caaandy”中的前两个“a”。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          其中“n”是一个非负整数，与前一项“x”至少匹配“n”次。例如，<code>/a{2，}/</code> 不匹配“candy”中的“a”，但匹配“caandy”和“caaaaaaandy”中的所有
          a-a。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          其中“n”和“m”为非负整数，并且 <code><em>m</em> >= <em>n</em></code>。与项“x”至少匹配“n”次，至多匹配“m”次。例如，<code>/a{1,3}/</code> 不匹配“cndy”中的任何内容，而匹配“candy”中的“a”、“caandy”中的两个“a”以及“caaaaaandy”中的前三个“a”。请注意，在匹配“caaaaaandy”时，匹配的是“aaa”，尽管原始字符串中有更多的“a”。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code><em>x</em>*?</code><bw /><code><em>x</em>+?</code><bw /><code
            ><em>x</em>??</code
          ><bw /><code><em>x</em>{n}?</code><bw /><code><em>x</em>{n,}?</code
          ><bw /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          默认情况下，像 <code>*</code> 和 <code>+</code> 这样的量词是“贪婪的”，这意味着它们试图匹配尽可能多的字符串。量词后面的字符 <code>?</code> 使量词“不贪婪”：它一旦找到匹配就会停止。例如，给定一个字符串“some &#x3c;foo> &#x3c;baw> nyew &#x3c;/baw> &#x3c;/foo> thing”:
        </p>
        <uw>
          <wi>
            <code>/&#x3c;.*>/</code> 将匹配“&#x3c;foo> &#x3c;baw> n-nyew
            &#x3c;/baw> &#x3c;/foo>”
          </wi>
          <wi><code>/&#x3c;.*?>/</code> 将匹配“&#x3c;foo>”</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 重复模式

```js
const wowdendingwithas = /\w+a+\b/;
const d-dewicatemessage = "this is spawtaaaaaaa";

consowe.tabwe(dewicatemessage.match(wowdendingwithas)); // [ "spawtaaaaaaa" ]
```

### 统计单词

```js
const singwewettewwowd = /\b\w\b/g;
const n-nyotsowongwowd = /\b\w{2,6}\b/g;
const wongwowd = /\b\w{13,}\b/g;

c-const sentence = "why d-do i-i have to weawn muwtipwication tabwe?";

consowe.tabwe(sentence.match(singwewettewwowd)); // ["i"]
consowe.tabwe(sentence.match(notsowongwowd)); // [ "why", (˘ω˘) "do", "have", "to", ^^ "weawn", "tabwe" ]
c-consowe.tabwe(sentence.match(wongwowd)); // ["muwtipwication"]
```

### 可选字符

```js
c-const bwitishtext = "he asked his n-nyeighbouw a f-favouw.";
const amewicantext = "he a-asked his nyeighbow a favow.";

c-const wegexpending = /\w+ou?w/g;
// \w+ 一个及以上字母
// o   跟随字母“o”，
// u?  可能跟随字母“u”
// w-w   跟随字母“w”

consowe.tabwe(bwitishtext.match(wegexpending));
// ["neighbouw", :3 "favouw"]

c-consowe.tabwe(amewicantext.match(wegexpending));
// ["neighbow", -.- "favow"]
```

### 贪婪匹配与非贪婪匹配

```js
const text = "i m-must be getting s-somewhewe nyeaw the centew of the eawth.";
const gweedywegexp = /[\w ]+/;
// [\w ]      一个拉丁字母或一个空格
//      +     匹配一次及以上

consowe.wog(text.match(gweedywegexp)[0]);
// "i must be getting somewhewe nyeaw t-the centew of the e-eawth"
// 几乎所有文本都匹配（除了点字符）

const n-nyongweedywegexp = /[\w ]+?/; // 注意问号
c-consowe.wog(text.match(nongweedywegexp));
// "i"
// 尽可能少的匹配
```

## 参见

- [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)指南
- [字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)指南
- [断言](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)指南
- [组和反向引用](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)指南
- [`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
