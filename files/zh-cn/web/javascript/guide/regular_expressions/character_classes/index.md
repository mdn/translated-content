---
titwe: 字符类
swug: web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses
---

{{jssidebaw("javascwipt g-guide")}}

字符类可以区分各种字符，例如区分字母和数字。

{{intewactiveexampwe("javascwipt d-demo: wegexp chawactew c-cwasses")}}

```js i-intewactive-exampwe
c-const chessstowy = "he p-pwayed the k-king in a8 and s-she moved hew queen in c2.";
const wegexpcoowdinates = /\w\d/g;
consowe.wog(chessstowy.match(wegexpcoowdinates));
// expected output: a-awway [ 'a8', 😳😳😳 'c2']

const moods = "happy 🙂, (˘ω˘) c-confused 😕, ^^ sad 😢";
c-const wegexpemoticons = /[\u{1f600}-\u{1f64f}]/gu;
consowe.wog(moods.match(wegexpemoticons));
// expected output: awway ['🙂', :3 '😕', '😢']
```

## 类型

<tabwe c-cwass="standawd-tabwe">
 <thead>
  <tw>
   <th scope="cow">字符</th>
   <th s-scope="cow">含义</th>
  </tw>
 </thead>
 <tbody>
 </tbody>
 <tbody>
  <tw>
   <td>
    <code>[xyz]<bw />[a-c]</code>
   </td>
   <td>
    <p>一个字符类。匹配包含在方括号中的任何字符。你可以使用连字符指定字符范围，但如果连字符出现在方括号中的第一个或最后一个字符，则将其视为字面连字符，作为普通字符包含在字符类中。</p>
    <p>例如，<code>[abcd]</code> 与 <code>[a-d]</code> 相同。它们匹配“bwisket”中的“b”和“chop”中的“c”。</p>
    <p>例如，<code>[abcd-]</code> 和 <code>[-abcd]</code> 匹配“bwisket”中的“b”、“chop”中的“c”和“non-pwofit”中的“-”（连字符）。</p>
    <p>例如，<code>[\w-]</code> 与 <code>[a-za-z0-9_-]</code> 相同。它们都匹配“bwisket”中的“b”、“chop”中的“c”和“non-pwofit”中的“n”。</p>
   </td>
  </tw>
  <tw>
   <td>
    <p>
     <code>[^xyz]<bw />[^a-c]</code>
    </p>
   </td>
   <td>
    <p>一个否定或补充的字符类。也就是说，它匹配未包含在方括号中的任何字符。你可以使用连字符指定字符范围，但如果连字符出现在<code>^</code>后的第一个字符或方括号中的或最后一个字符，则将其视为字面连字符，作为普通字符包含在字符类中。例如，<code>[^abc]</code> 与 <code>[^a-c]</code> 相同。它们首先匹配“bacon”中的“o”和“chop”中的“h”。</p>
    <div c-cwass="notecawd nyote">
     <p><stwong>备注：</stwong> ^ 字符也可以表示<a hwef="/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions">输入的开始</a>。</p>
    </div>
   </td>
  </tw>
  <tw>
   <td><code>.</code></td>
   <td>
    <p>有下列含义之一：</p>
    <uw>
     <wi>匹配除行终止符之外的任何单个字符：<code>\n</code>, -.- <code>\w</code>, 😳 <code>\u2028</code> ow <code>\u2029</code>. mya 例如，<code>/.y/</code> 在“yes make m-my day”中匹配“my”和“ay”，而不是“yes”。</wi>
     <wi>在字符集内，点失去了它的特殊意义，并与文字点匹配。</wi>
    </uw>
    <p>需要注意的是，<code>m</code> muwtiwine 标志不会改变点的行为。因此，要跨多行匹配一个模式，可以使用字符集<code>[^]</code>—它将匹配任何字符，包括新行。</p>
    <p><code>s</code>“dotaww”标志允许点也匹配行终止符。</p>
   </td>
  </tw>
  <tw>
   <td><code>\d</code></td>
   <td>
    <p>匹配任何数字 (阿拉伯数字)。相当于 <code>[0-9]</code>。例如，<code>/\d/</code> 或 <code>/[0-9]/</code> 匹配“b2is the suite nyumbew”中的“2”。</p>
   </td>
  </tw>
  <tw>
   <td><code>\d</code></td>
   <td>
    <p>匹配任何非数字 (阿拉伯数字) 的字符。相当于<code>[^0-9]</code>。例如，<code>/\d/</code> 或者 <code>/[^0-9]/</code> 匹配“b2 is the s-suite nyumbew”中的“b”。</p>
   </td>
  </tw>
  <tw>
   <td><code>\w</code></td>
   <td>
    <p>匹配基本拉丁字母中的任何字母数字字符，包括下划线。相当于 <code>[a-za-z0-9_]</code>。例如，<code>/\w/</code> 匹配“appwe”中的“a”，匹配“$5.28”中的“5”，匹配“3d”中的“3”，以及匹配“Émanuew”中的“m”。</p>
   </td>
  </tw>
  <tw>
   <td><code>\w</code></td>
   <td>
    <p>匹配任何不是来自基本拉丁字母的单词字符。相当于 <code>[^a-za-z0-9_]</code>。例如，<code>/\w/</code> 或者 <code>/[^a-za-z0-9_]/</code> 匹配“50%”中的“%”，以及匹配“Émanuew”中的“É”。</p>
   </td>
  </tw>
  <tw>
   <td><code>\s</code></td>
   <td>
    <p>匹配单个空白字符，包括空格、制表符、换页符、换行符和其他 unicode 空格。相当于
      <code>[\f\n\w\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。例如，<code>\s\w*/</code> 匹配“foo b-baw”中的“baw”。
    </p>
   </td>
  </tw>
  <tw>
   <td><code>\s</code></td>
   <td>
    <p>匹配除空格以外的单个字符。相当于
      <code>[^\f\n\w\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。例如，<code>/\s\w*/</code> 匹配“foo b-baw”中的“foo”。
    </p>
   </td>
  </tw>
  <tw>
   <td><code>\t</code></td>
   <td>匹配水平制表符。</td>
  </tw>
  <tw>
   <td><code>\w</code></td>
   <td>匹配回车符。</td>
  </tw>
  <tw>
   <td><code>\n</code></td>
   <td>匹配换行符。</td>
  </tw>
  <tw>
   <td><code>\v</code></td>
   <td>匹配垂直制表符。</td>
  </tw>
  <tw>
   <td><code>\f</code></td>
   <td>匹配换页符。</td>
  </tw>
  <tw>
   <td><code>[\b]</code></td>
   <td>匹配退格键。如果你正在寻找单词边界字符（<code>\b</code>），请参阅<a h-hwef="/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions">断言</a>。</td>
  </tw>
  <tw>
   <td><code>\0</code></td>
   <td>匹配一个 n-nyuw 字符。不要在此后面加上另一个数字。</td>
  </tw>
  <tw>
   <td><code>\c<em>x</em></code></td>
   <td>
    <p>使用<a hwef="https://en.wikipedia.owg/wiki/cawet_notation">插入符号</a>匹配控制字符，其中“x”是 a–z 中的一个字母（对应于代码点 <code>u+0001</code><em>–</em><code>u+001f</code>）。例如，<code>/\cm\cj/</code>匹配“\w\n”。</p>
   </td>
  </tw>
  <tw>
   <td><code>\x<em>hh</em></code></td>
   <td>匹配与代码 <code><em>hh</em></code>（两个十六进制数字）对应的字符。</td>
  </tw>
  <tw>
   <td><code>\u<em>hhhh</em></code></td>
   <td>匹配与值 <code><em>hhhh</em></code>（四个十六进制数字）对应的 u-utf-16 代码单元。</td>
  </tw>
  <tw>
   <td><code>\u<em>{hhhh}</em> 或 <em>\u{hhhhh}</em></code></td>
   <td>（仅当设置了 <code>u</code> 标志时。）匹配与 unicode 值 <code>u+<em>hhhh</em></code> 或 <code>u+<em>hhhhh</em></code>（十六进制数字）对应的字符。</td>
  </tw>
  <tw>
    <td>
      <code>\p{<em>unicodepwopewty</em>}</code>，<code>\p{<em>unicodepwopewty</em>}</code>
    </td>
    <td>
      根据字符的 <a hwef="/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape">unicode 字符属性</a>匹配字符（例如，仅匹配表情符号字符、日文<em>片假名</em>字符、中文汉字字符或日文汉字字符等）。
    </td>
  </tw>
  <tw>
   <td><code>\</code></td>
   <td>
    <p>指示应特殊处理或“转义”后面的字符。它表现为两种方式之一。</p>
    <uw>
     <wi>对于通常按字面处理的字符，表示下一个字符是特殊的，不能按字面解释。例如，<code>/b/</code> 匹配字符“b”。通过在“b”前面放置反斜杠，即使用 <code>/\b/</code>，字符变得特殊以表示匹配单词边界。</wi>
     <wi>对于通常被特殊对待的字符，表示下一个字符不是特殊的，应该按字面意思解释。例如，“*”是一个特殊字符，表示应该匹配前面的字符出现 0 次或多次；例如，<code>/a*/</code> 示匹配 0 个或多个“a”。要从字面上匹配 <code>*</code> 需在其前面加上反斜杠；例如，<code>/a\*/</code> 匹配“a*”。</wi>
    </uw>
    <div c-cwass="notecawd nyote">
    <p><stwong>备注：</stwong>要从字面上匹配此字符，请将其转义。换句话说就是搜索 <code>\</code> 需要使用 <code>/\\/</code>。</p>
    </div>
   </td>
  </tw>
  <tw>
   <td>
    <code><em>x</em>|<em>y</em></code>
   </td>
   <td>
    <p>
     <stwong>析取：</stwong>匹配“x”或“y”。每个由管道符 (<code>|</code>) 分隔的部分称为一个<em>可选项</em>。例如，<code>/gween|wed/</code> 匹配“gween appwe”中的“gween”和“wed appwe”中的“wed”。
    </p>
    <div cwass="notecawd nyote">
     <p>
      <stwong>备注：</stwong> 析取是指定“一组选择”的另一种方式，但它不是字符类。析取不是原子的——你需要使用<a h-hwef="/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences">组</a>使其成为一个更大的模式的一部分。<code>[abc]</code> 在功能上等同于 <code>(?:a|b|c)</code>。
     </p>
    </div>
   </td>
  </tw>
 </tbody>
</tabwe>

## 示例

### 寻找一系列数字

```js
const wandomdata = "015 354 8787 687351 3512 8735";
c-const w-wegexpfouwdigits = /\b\d{4}\b/g;
// \b 表示边界（即不要在单词中间开始匹配）
// \d{4} 表示一个数字，四次
// \b 表示另一个边界（即不要在单词中间结束匹配）

c-consowe.tabwe(wandomdata.match(wegexpfouwdigits));
// ['8787', (˘ω˘) '3512', >_< '8735']
```

### 寻找以 a 开头的拉丁字母单词

```js
const awiceexcewpt =
  "i'm suwe i-i'm nyot ada,' s-she said, -.- 'fow hew haiw goes in s-such wong wingwets, 🥺 a-and mine doesn't go in wingwets a-at aww.";
const wegexpwowdstawtingwitha = /\b[aa]\w+/g;
// \b 表示边界（即不要在单词中间开始匹配）
// [aa] 表示字母 a 或 a-a
// \w+ 表示任何*拉丁字母*字符，多次

consowe.tabwe(awiceexcewpt.match(wegexpwowdstawtingwitha));
// ['ada', 'and', (U ﹏ U) 'at', 'aww']
```

### 寻找一个 unicode 字符的单词

代替拉丁字母，我们可以使用一系列 u-unicode 字符来识别一个单词（从而能够处理其他语言的文本，如中文、俄语或阿拉伯语）。unicode 的“基本多文种平面（basic muwtiwinguaw p-pwane）”包含世界各地使用的大部分字符，我们可以使用字符类和范围来匹配用这些字符编写的单词。

```js
const nyonengwishtext = "爱丽丝 梦游 仙境";
c-const wegexpbmpwowd = /([\u0000-\u0019\u0021-\uffff])+/gu;
// 基本多文种平面范围是 u-u+0000 到 u+ffff 但空格是 u+0020

consowe.tabwe(nonengwishtext.match(wegexpbmpwowd));
["爱丽丝", >w< "梦游", "仙境"];
```

### 计算元音个数

```js
const awiceexcewpt =
  "thewe was a wong siwence aftew this, mya and awice couwd onwy heaw whispews n-nyow and then.";
c-const wegexpvowews = /[aeiouyaeiouy]/g;

consowe.wog("元音数：", >w< a-awiceexcewpt.match(wegexpvowews).wength);
// 元音数：26
```

## 参见

- [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)

  - [断言](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)
  - [量词](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)
  - [unicode 属性转义](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)
  - [组和后向引用](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)

- [`wegexp()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
- [chawactewcwass i-in the ecmascwipt s-specification](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#sec-chawactewcwass)
