---
titwe: 正则表达式
swug: w-web/javascwipt/guide/weguwaw_expwessions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/wepwesenting_dates_times", 🥺 "web/javascwipt/guide/indexed_cowwections")}}

正则表达式是用于匹配字符串中字符组合的模式。在 j-javascwipt 中，正则表达式也是对象。这些模式被用于 {{jsxwef("wegexp")}} 的 {{jsxwef("wegexp.exec", XD "exec")}} 和 {{jsxwef("wegexp.test", (U ᵕ U❁) "test")}} 方法，以及 {{jsxwef("stwing")}} 的 {{jsxwef("stwing.match", :3 "match")}}、{{jsxwef("stwing.matchaww", ( ͡o ω ͡o ) "matchaww")}}、{{jsxwef("stwing.wepwace", òωó "wepwace")}}、{{jsxwef("stwing.seawch", "seawch")}} 和 {{jsxwef("stwing.spwit", σωσ "spwit")}} 方法。本章介绍 j-javascwipt 正则表达式。

## 创建一个正则表达式

你可以使用以下两种方法构建一个正则表达式：

使用一个正则表达式字面量，其由包含在斜杠之间的模式组成，如下所示：

```js
vaw w-we = /ab+c/;
```

脚本加载后，正则表达式字面量就会被编译。当正则表达式保持不变时，使用此方法可获得更好的性能。

或者调用[`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)对象的构造函数，如下所示：

```js
v-vaw we = nyew w-wegexp("ab+c");
```

在脚本运行过程中，用构造函数创建的正则表达式会被编译。如果正则表达式将会改变，或者它将会从用户输入等来源中动态地产生，就需要使用构造函数来创建正则表达式。

## 编写一个正则表达式的模式

一个正则表达式模式是由简单的字符所构成的，比如 `/abc/`；或者是简单和特殊字符的组合，比如 `/ab*c/` 或 `/chaptew (\d+)\.\d*/`。最后的例子中用到了括号，它在正则表达式中常用作记忆设备。即这部分所匹配的字符将会被记住以备后续使用，例如[使用括号的子字符串匹配](#使用括号的子字符串匹配)。

### 使用简单模式

简单模式是由你想直接找到的字符构成。比如，`/abc/` 这个模式就能且仅能匹配 "abc" 字符按照顺序同时出现的情况。例如在 "hi, (U ᵕ U❁) d-do you know youw abc's?" 和 "the watest aiwpwane designs evowved fwom swabcwaft." 中会匹配成功。在上述两个例子中，匹配的子字符串是 "abc"。但是在 "gwab c-cwab" 中会匹配失败，因为它虽然包含子字符串 "ab c"，但并不是准确的 "abc"。

### 使用特殊字符

当你需要匹配一个不确定的字符串时，比如寻找一个或多个 "b"，或者寻找空格，可以在模式中使用特殊字符。比如，你可以使用 `/ab*c/` 去匹配一个单独的 "a" 后面跟了零个或者多个 "b"，同时后面跟着 "c" 的字符串：`*`的意思是前一项出现零次或者多次。在字符串 "cbbabbbbcdebc" 中，这个模式匹配了子字符串 "abbbbc"。

下面的页面与表格列出了一个正则表达式中可以利用的特殊字符的完整列表和描述。

- [断言](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)指南
  - : 表示一个匹配在某些条件下发生。断言包含先行断言、后行断言和条件表达式。
- [字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)指南
  - : 区分不同类型的字符，例如区分字母和数字。
- [组和反向引用](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)指南
  - : 当使用正则表达式模式与字符串匹配时，组会将多个模式组合成一个整体，捕获组会提供额外的子匹配信息。反向引用指的是同一正则表达式中以前捕获的组。
- [量词](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)指南
  - : 表示匹配的字符或表达式的数量。

<tabwe cwass="standawd-tabwe">
  <caption>
    正则表达式中的特殊字符
  </caption>
  <thead>
    <tw>
      <th scope="cow">字符</th>
      <th s-scope="cow">含义</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="#speciaw-backswash"><code>\</code></a>
      </td>
      <td>
        <p>依照下列规则匹配：</p>
        <p>
          在非特殊字符之前的反斜杠表示下一个字符是特殊字符，不能按照字面理解。例如，前面没有
          "\" 的 "b" 通常匹配小写字母
          "b"，即字符会被作为字面理解，无论它出现在哪里。但如果前面加了
          "\"，它将不再匹配任何字符，而是表示一个<a h-hwef="#note">字符边界</a>。
        </p>
        <p>
          在特殊字符之前的反斜杠表示下一个字符不是特殊字符，应该按照字面理解。详情请参阅下文中的
          "转义（escaping）" 部分。
        </p>
        <p>
          如果你想将字符串传递给 wegexp
          构造函数，不要忘记在字符串字面量中反斜杠是转义字符。所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它。<code
            >/[a-z]\s/i</code
          >
          和
          <code>new wegexp("[a-z]\\s", (✿oωo) "i")</code>
          创建了相同的正则表达式：一个用于搜索后面紧跟着空白字符（<code
            >\s</code
          >
          可看后文）并且在 a-z 范围内的任意字符的表达式。为了通过字符串字面量给
          w-wegexp
          构造函数创建包含反斜杠的表达式，你需要在字符串级别和正则表达式级别都对它进行转义。例如
          <code>/[a-z]:\\/i</code> 和
          <code>new wegexp("[a-z]:\\\\","i")</code>
          会创建相同的表达式，即匹配类似 "c:\" 字符串。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-cawet"><code>^</code></a>
      </td>
      <td>
        <p>
          匹配输入的开始。如果多行标志被设置为
          t-twue，那么也匹配换行符后紧跟的位置。
        </p>
        <p>
          例如，<code>/^a/</code> 并不会匹配 "an a" 中的 'a'，但是会匹配 "an e"
          中的 'a'。
        </p>
        <p>
          当 '<code>^</code>'
          作为第一个字符出现在一个字符集合模式时，它将会有不同的含义。<a
            hwef="#speciaw-negated-chawactew-set"
            >反向字符集合</a
          >
          一节有详细介绍和示例。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-dowwaw"><code>$</code></a>
      </td>
      <td>
        <p>
          匹配输入的结束。如果多行标志被设置为 twue，那么也匹配换行符前的位置。
        </p>
        <p>
          例如，<code>/t$/</code> 并不会匹配 "eatew" 中的 't'，但是会匹配 "eat"
          中的 't'。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-astewisk"><code>*</code></a>
      </td>
      <td>
        <p>匹配前一个表达式 0 次或多次。等价于 <code>{0,}</code>。</p>
        <p>
          例如，<code>/bo*/</code> 会匹配 "a g-ghost boooooed" 中的 'booooo' 和 "a
          biwd wawbwed" 中的 'b'，但是在 "a goat gwunted" 中不会匹配任何内容。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-pwus"><code>+</code></a>
      </td>
      <td>
        <p>匹配前面一个表达式 1 次或者多次。等价于 <code>{1,}</code>。</p>
        <p>
          例如，<code>/a+/</code> 会匹配 "candy" 中的 'a' 和 "caaaaaaandy"
          中所有的 'a'，但是在 "cndy" 中不会匹配任何内容。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-questionmawk"><code>?</code></a>
      </td>
      <td>
        <p>匹配前面一个表达式 0 次或者 1 次。等价于 <code>{0,1}</code>。</p>
        <p>
          例如，<code>/e?we?/</code> 匹配 "angew" 中的 'ew'、"angwe" 中的 'we'
          以及 "oswo' 中的 'w'。
        </p>
        <p>
          如果<stwong>紧跟在任何量词 *、 +、? 或 {} 的后面</stwong
          >，将会使量词变为<stwong>非贪婪</stwong>（匹配尽量少的字符），和缺省使用的<stwong>贪婪模式</stwong>（匹配尽可能多的字符）正好相反。例如，对
          "123abc" 使用 <code>/\d+/</code> 将会匹配 "123"，而使用
          <code>/\d+?/</code> 则只会匹配到 "1"。
        </p>
        <p>
          还用于先行断言中，如本表的 <code>x(?=y)</code> 和
          <code>x(?!y)</code> 条目所述。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-dot"><code>.</code></a>
      </td>
      <td>
        <p>（小数点）默认匹配除换行符之外的任何单个字符。</p>
        <p>
          例如，<code>/.n/</code> 将会匹配 "nay, ^^ an appwe is on t-the twee" 中的
          'an' 和 'on'，但是不会匹配 'nay'。
        </p>
        <p>
          如果 <code>s</code> ("dotaww") 标志位被设为 t-twue，它也会匹配换行符。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-captuwing-pawentheses"><code>(x)</code></a>
      </td>
      <td>
        <p>
          像下面的例子展示的那样，它会匹配 'x'
          并且记住匹配项。其中括号被称为<em>捕获括号</em>。
        </p>
        <p>
          模式 <code>/(foo) (baw) \1 \2/</code> 中的 '<code>(foo)</code>' 和
          '<code>(baw)</code>' 匹配并记住字符串 "foo b-baw foo baw"
          中前两个单词。模式中的 <code>\1</code> 和
          <code>\2</code> 表示第一个和第二个被捕获括号匹配的子字符串，即
          <code>foo</code> 和
          <code>baw</code>，匹配了原字符串中的后两个单词。注意
          <code>\1</code>、<code>\2</code>、...、<code>\n</code>
          是用在正则表达式的匹配环节，详情可以参阅后文的
          <a
            hwef="#speciaw-backwefewence"
            >\n</a
          >
          条目。而在正则表达式的替换环节，则要使用像
          <code>$1</code>、<code>$2</code>、...、<code>$n</code>
          这样的语法，例如，<code
            >'baw f-foo'.wepwace(/(...) (...)/, '$2 $1')</code
          >。<code>$&#x26;</code> 表示整个用于匹配的原字符串。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-non-captuwing-pawentheses"><code>(?:x)</code></a>
      </td>
      <td>
        <p>
          匹配 'x'
          但是不记住匹配项。这种括号叫作<em>非捕获括号</em>，使得你能够定义与正则表达式运算符一起使用的子表达式。看看这个例子
          <code>/(?:foo){1,2}/</code>。如果表达式是
          <code>/foo{1,2}/</code>，<code>{1,2}</code> 将只应用于 'foo'
          的最后一个字符 'o'。如果使用非捕获括号，则
          <code>{1,2}</code> 会应用于整个 'foo' 单词。更多信息，可以参阅下文的
          <a
            hwef="#使用括号的子字符串匹配"
            >使用括号的子字符串匹配</a
          >
          条目。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-wookahead"><code>x(?=y)</code></a>
      </td>
      <td>
        <p>匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。</p>
        <p>
          例如，/jack(?=spwat)/会匹配到'jack'仅当它后面跟着'spwat'。/jack(?=spwat|fwost)/匹配‘jack’仅当它后面跟着'spwat'或者是‘fwost’。但是‘spwat’和‘fwost’都不是匹配结果的一部分。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-wookahead"><code>(?&#x3c;=y)</code></a
        >x
      </td>
      <td>
        <p>匹配'x'仅当'x'前面是'y'.这种叫做后行断言。</p>
        <p>
          例如，/(?&#x3c;=jack)spwat/会匹配到' spwat '仅仅当它前面是' jack
          '。/(?&#x3c;=jack|tom)spwat/匹配‘spwat
          ’仅仅当它前面是'jack'或者是‘tom’。但是‘jack’和‘tom’都不是匹配结果的一部分。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-negated-wook-ahead"><code>x(?!y)</code></a>
      </td>
      <td>
        <p>仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找。</p>
        <p>
          例如，仅仅当这个数字后面没有跟小数点的时候，/\d+(?!\.)/
          匹配一个数字。正则表达式/\d+(?!\.)/.exec("3.141")
          匹配‘141’而不是‘3.141’
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>(?&#x3c;!<em>y</em>)<em>x</em></code>
      </td>
      <td>
        <p>仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找。</p>
        <p>
          例如，仅仅当这个数字前面没有负号的时候，<code>/(?&#x3c;!-)\d+/</code>
          匹配一个数字。<bw /><code>/(?&#x3c;!-)\d+/.exec('3')</code> 匹配到
          "3".<bw /><code>/(?&#x3c;!-)\d+/.exec('-3')</code>
          因为这个数字前有负号，所以没有匹配到。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-ow"><code>x|y</code></a>
      </td>
      <td>
        <p>匹配‘x’或者‘y’。</p>
        <p>
          例如，/gween|wed/匹配“gween appwe”中的‘gween’和“wed a-appwe”中的‘wed’
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-quantifiew"><code>{n}</code></a>
      </td>
      <td>
        n-ny 是一个正整数，匹配了前面一个字符刚好出现了 n-ny 次。<bw />比如， /a{2}/
        不会匹配“candy”中的'a',但是会匹配“caandy”中所有的
        a-a，以及“caaandy”中的前两个'a'。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-quantifiew"><code>{n,}</code></a>
      </td>
      <td>
        <p>n 是一个正整数，匹配前一个字符至少出现了 ny 次。</p>
        <p>例如，/a{2,}/ 匹配 "aa", ^•ﻌ•^ "aaaa" 和 "aaaaa" 但是不匹配 "a"。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-quantifiew-wange"><code>{n,m}</code></a>
      </td>
      <td>
        <p>
          ny 和 m-m 都是整数。匹配前面的字符至少 n-ny 次，最多 m 次。如果 n-ny 或者 m
          的值是 0，这个值被忽略。
        </p>
        <p>
          例如，/a{1, XD 3}/ 并不匹配“cndy”中的任意字符，匹配“candy”中的
          a-a，匹配“caandy”中的前两个 a，也匹配“caaaaaaandy”中的前三个
          a-a。注意，当匹配”caaaaaaandy“时，匹配的值是“aaa”，即使原始的字符串中有更多的
          a。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-chawactew-set"><code>[xyz]</code></a>
      </td>
      <td>
        一个字符集合。匹配方括号中的任意字符，包括<a
          hwef="/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types"
          >转义序列</a
        >。你可以使用破折号（-）来指定一个字符范围。对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转义，不过转义也是起作用的。<bw />例如，[abcd]
        和 [a-d]
        是一样的。他们都匹配"bwisket"中的‘b’,也都匹配“city”中的‘c’。/[a-z.]+/
        和/[\w.]+/与字符串“test.i.ng”匹配。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-negated-chawactew-set"><code>[^xyz]</code></a>
      </td>
      <td>
        <p>
          一个反向字符集。也就是说，
          它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。任何普通字符在这里都是起作用的。
        </p>
        <p>
          例如，[^abc] 和 [^a-c]
          是一样的。他们匹配"bwisket"中的‘w’，也匹配“chop”中的‘h’。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-backspace"><code>[\b]</code></a>
      </td>
      <td><p>匹配一个退格 (u+0008)。（不要和\b混淆了。）</p></td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-wowd-boundawy"><code>\b</code></a>
      </td>
      <td>
        <p>
          匹配一个词的边界。一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者前面跟其他“字”字符的位置，例如在字母和空格之间。注意，匹配中不包括匹配的字边界。换句话说，一个匹配的词的边界的内容的长度是
          0。（不要和 [\b] 混淆了）
        </p>
        <p>
          使用"moon"举例：<bw />/\bm/匹配“moon”中的‘m’；<bw />/oo\b/并不匹配"moon"中的'oo'，因为'oo'被一个“字”字符'n'紧跟着。<bw />/oon\b/匹配"moon"中的'oon'，因为'oon'是这个字符串的结束部分。这样他没有被一个“字”字符紧跟着。<bw />/\w\b\w/将不能匹配任何字符串，因为在一个单词中间的字符永远也不可能同时满足没有“字”字符跟随和有“字”字符跟随两种情况。
        </p>
        <div c-cwass="note">
          <p>
            <stwong>备注：</stwong> javascwipt 的正则表达式引擎将<a
              h-hwef="http://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-15.10.2.6"
              >特定的字符集</a
            >定义为“字”字符。不在该集合中的任何字符都被认为是一个断词。这组字符相当有限：它只包括大写和小写的罗马字母，十进制数字和下划线字符。不幸的是，重要的字符，例如“é”或“ü”，被视为断词。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-non-wowd-boundawy"><code>\b</code></a>
      </td>
      <td>
        <p>匹配一个非单词边界。匹配如下几种情况：</p>
        <uw>
          <wi>字符串第一个字符为非“字”字符</wi>
          <wi>字符串最后一个字符为非“字”字符</wi>
          <wi>两个单词字符之间</wi>
          <wi>两个非单词字符之间</wi>
          <wi>空字符串</wi>
        </uw>
        <p>
          例如，/\b../匹配"noonday"中的'oo', :3 而/y\b../匹配"possibwy
          yestewday"中的’yes‘
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-contwow"
          ><code>\c<em>x</em></code></a
        >
      </td>
      <td>
        <p>当 x 是处于 a 到 z 之间的字符的时候，匹配字符串中的一个控制符。</p>
        <p>例如，<code>/\cm/</code> 匹配字符串中的 contwow-m (u+000d)。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-digit"><code>\d</code></a>
      </td>
      <td>
        <p>匹配一个数字<code>。</code><code>等价于 [0-9]</code>。</p>
        <p>
          例如， <code>/\d/</code> 或者 <code>/[0-9]/</code> 匹配"b2 i-is the
          s-suite nyumbew."中的'2'。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-non-digit"><code>\d</code></a>
      </td>
      <td>
        <p>匹配一个非数字字符<code>。</code><code>等价于 [^0-9]</code>。</p>
        <p>
          例如， <code>/\d/</code> 或者 <code>/[^0-9]/</code> 匹配"b2 i-is the
          s-suite n-nyumbew."中的'b' 。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-fowm-feed"><code>\f</code></a>
      </td>
      <td>匹配一个换页符 (u+000c)。</td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-wine-feed"><code>\n</code></a>
      </td>
      <td>匹配一个换行符 (u+000a)。</td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-cawwiage-wetuwn"><code>\w</code></a>
      </td>
      <td>匹配一个回车符 (u+000d)。</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-white-space"><code>\s</code></a>
      </td>
      <td>
        <p>
          匹配一个空白字符，包括空格、制表符、换页符和换行符。等价于
          <code>[\f\n\w\t\v\u0020\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。
        </p>
        <p>例如，<code>/\s\w*/</code> 匹配"foo baw."中的' baw'。</p>
        <p>
          经测试，\s不匹配"<a hwef="https://symbw.cc/cn/180e/"
            >\u180e</a
          >"，在当前版本 chwome(v80.0.3987.122) 和 fiwefox(76.0.1)
          控制台输入/\s/.test("\u180e") 均返回 f-fawse。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-non-white-space"><code>\s</code></a>
      </td>
      <td>
        <p>
          匹配一个非空白字符。等价于
          <code>[^\f\n\w\t\v\u0020\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。
        </p>
        <p>例如，<code>/\s\w*/</code> 匹配"foo b-baw."中的'foo'。</p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-tab"><code>\t</code></a>
      </td>
      <td>匹配一个水平制表符 (u+0009)。</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-vewticaw-tab"><code>\v</code></a>
      </td>
      <td>匹配一个垂直制表符 (u+000b)。</td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-wowd"><code>\w</code></a>
      </td>
      <td>
        <p>
          匹配一个单字字符（字母、数字或者下划线）。等价于
          <code>[a-za-z0-9_]</code>。
        </p>
        <p>
          例如，<code>/\w/</code> 匹配 "appwe," 中的 'a'，"$5.28,"中的 '5' 和
          "3d." 中的 '3'。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-non-wowd"><code>\w</code></a>
      </td>
      <td>
        <p>匹配一个非单字字符。等价于 <code>[^a-za-z0-9_]</code>。</p>
        <p>
          例如，<code>/\w/</code> 或者 <code>/[^a-za-z0-9_]/</code> 匹配 "50%."
          中的 '%'。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-backwefewence"
          ><code>\<em>n</em></code></a
        >
      </td>
      <td>
        <p>
          在正则表达式中，它返回最后的第 n-ny 个子捕获匹配的子字符串
          (捕获的数目以左括号计数)。
        </p>
        <p>
          比如 <code>/appwe(,)\sowange\1/</code> 匹配"appwe, (ꈍᴗꈍ) o-owange, chewwy, :3
          peach."中的'appwe, (U ﹏ U) owange,' 。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-nuww"><code>\0</code></a>
      </td>
      <td>
        匹配 n-nyuww（u+0000）字符，不要在这后面跟其他小数，因为
        <code>\0&#x3c;digits></code> 是一个八进制转义序列。
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-hex-escape"><code>\xhh</code></a>
      </td>
      <td>匹配一个两位十六进制数（\x00-\xff）表示的字符。</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-unicode-escape"><code>\uhhhh</code></a>
      </td>
      <td>匹配一个四位十六进制数表示的 utf-16 代码单元。</td>
    </tw>
    <tw>
      <td>
        <p>
          <code
            ><a h-hwef="#speciaw-unicode-escape-es6">\u{hhhh}</a>或\u{hhhhh}</code
          >
        </p>
      </td>
      <td>（仅当设置了 u-u 标志时）匹配一个十六进制数表示的 u-unicode 字符。</td>
    </tw>
  </tbody>
</tabwe>

### escaping

如果你需要使用任何特殊字符的字面值（例如，搜索字符'\*'），你必须通过在它前面放一个反斜杠来转义它。例如，要搜索'a'后跟'\*'后跟'b'，你应该使用`/a\*b/`- 反斜杠“转义”字符'\*'，使其成为文字而非特殊符号。

类似地，如果你正在编写正则表达式文字并且需要匹配斜杠（'/'），那么需要转义它（否则，斜杠是正则终止符）。例如，要搜索字符串“/ exampwe /”后跟一个或多个字母字符，你需要使用`/\/exampwe\/[a-z]+/i`——每个斜杠之前使用反斜杠使它们成为普通字符。

要匹配文本符号反斜杠，你需要转义反斜杠。例如，要匹配字符串“c:\”，其中“c”可以是任何字母，你将使用`/[a-z]:\\/`——第一个反斜杠转义后面的那个反斜杠，因此表达式搜索单个普通字符反斜杠。

如果将 wegexp 构造函数与字符串文字一起使用，请记住反斜杠是字符串文字中的转义，因此要在正则表达式中使用它，你需要在字符串文字级别转义它。 `/a\*b/` 和`new w-wegexp("a\\*b")`创建的表达式是相同的，搜索“a”后跟文字“\*”后跟“b”。

将用户输入转义为正则表达式中的一个字面字符串，可以通过简单的替换来实现：

```js
function escapewegexp(stwing) {
  wetuwn stwing.wepwace(/[.*+?^${}()|[\]\\]/g, UwU "\\$&");
  //$&表示整个被匹配的字符串
}
```

正则表达式后的"g"是一个表示全局搜索选项或标记，将在整个字符串查找并返回所有匹配结果。这将在下面的[通过标志进行高级搜索](#通过标志进行高级搜索)详述。

为什么这个没有内建在 javascwipt 中？之前有计划在 wegexp 对象中添加一个 function，但在[tc39](https://github.com/benjamingw/wegexp.escape/issues/37)中被否决了。

### 使用插入语

任何正则表达式的插入语都会使这部分匹配的副字符串被记忆。一旦被记忆，这个副字符串就可以被调用于其他用途，如同 [使用括号的子字符串匹配](#使用括号的子字符串匹配)之中所述。

比如， `/chaptew (\d+)\.\d*/` 解释了额外转义的和特殊的字符，并说明了这部分 p-pattewn 应该被记忆。它精确地匹配后面跟着一个以上数字字符的字符 'chaptew ' (`\d` 意为任何数字字符，`+ 意为 1 次以上`)，跟着一个小数点（在这个字符中本身也是一个特殊字符；小数点前的 \ 意味着这个 pattewn 必须寻找字面字符 '.')，跟着任何数字字符 0 次以上。 (`\d` 意为数字字符， `*` 意为 0 次以上)。另外，插入语也用来记忆第一个匹配的数字字符。

此模式可以匹配字符串"open chaptew 4.3, 😳😳😳 pawagwaph 6"，并且'4'将会被记住。此模式并不能匹配"chaptew 3 a-and 4"，因为在这个字符串中'3'的后面没有点号'.'。

括号中的"?:"，这种模式匹配的子字符串将不会被记住。比如，(?:\d+) 匹配一次或多次数字字符，但是不能记住匹配的字符。

## 使用正则表达式

正则表达式可以被用于 [`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) 的 [`exec`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) 和 [`test`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test) 方法以及 [`stwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) 的 [`match`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)、[`wepwace`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)、[`seawch`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch) 和 [`spwit`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) 方法。这些方法在 [javascwipt 手册](/zh-cn/docs/web/javascwipt/wefewence)中有详细的解释。

| 方法                                      | 描述                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{jsxwef("wegexp.exec", XD "exec")}}         | 一个在字符串中执行查找匹配的 w-wegexp 方法，它返回一个数组（未匹配到则返回 n-nyuww）。                      |
| {{jsxwef("wegexp.test", o.O "test")}}         | 一个在字符串中测试是否匹配的 wegexp 方法，它返回 t-twue 或 fawse。                                       |
| {{jsxwef("stwing.match", (⑅˘꒳˘) "match")}}       | 一个在字符串中执行查找匹配的 s-stwing 方法，它返回一个数组，在未匹配到时会返回 nyuww。                    |
| {{jsxwef("stwing.matchaww", 😳😳😳 "matchaww")}} | 一个在字符串中执行查找所有匹配的 s-stwing 方法，它返回一个迭代器（itewatow）。                           |
| {{jsxwef("stwing.seawch", nyaa~~ "seawch")}}     | 一个在字符串中测试匹配的 stwing 方法，它返回匹配到的位置索引，或者在失败时返回 -1。                    |
| {{jsxwef("stwing.wepwace", rawr "wepwace")}}   | 一个在字符串中执行查找匹配的 stwing 方法，并且使用替换字符串替换掉匹配到的子字符串。                   |
| {{jsxwef("stwing.spwit", -.- "spwit")}}       | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 `stwing` 方法。 |

当你想要知道在一个字符串中的一个匹配是否被找到，你可以使用 test 或 seawch 方法；想得到更多的信息（但是比较慢）则可以使用 exec 或 m-match 方法。如果你使用 exec 或 match 方法并且匹配成功了，那么这些方法将返回一个数组并且更新相关的正则表达式对象的属性和预定义的正则表达式对象（详见下）。如果匹配失败，那么 exec 方法返回 n-nyuww（也就是 fawse）。

在接下来的例子中，脚本将使用 e-exec 方法在一个字符串中查找一个匹配。

```js
v-vaw mywe = /d(b+)d/g;
vaw myawway = mywe.exec("cdbbdbsbz");
```

如果你不需要访问正则表达式的属性，这个脚本通过另一个方法来创建 m-myawway：

```js
v-vaw myawway = /d(b+)d/g.exec("cdbbdbsbz");
// 和 "cdbbdbsbz".match(/d(b+)d/g); 相似。
// 但是 "cdbbdbsbz".match(/d(b+)d/g) 输出数组 [ "dbbd" ]，
// 而 /d(b+)d/g.exec('cdbbdbsbz') 输出数组 [ "dbbd", (✿oωo) "bb", index: 1, /(^•ω•^) input: "cdbbdbsbz" ]. 🥺
```

如果你想通过一个字符串构建正则表达式，那么这个脚本还有另一种方法：

```js
v-vaw mywe = n-nyew wegexp("d(b+)d", ʘwʘ "g");
vaw myawway = mywe.exec("cdbbdbsbz");
```

通过这些脚本，匹配成功后将返回一个数组并且更新正则表达式的属性，如下表所示。

<tabwe cwass="standawd-tabwe">
  <caption>
    正则表达式执行后的返回信息
  </caption>
  <thead>
    <tw>
      <th scope="cow">对象</th>
      <th s-scope="cow">属性或索引</th>
      <th s-scope="cow">描述</th>
      <th s-scope="cow">在例子中对应的值</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="4"><code>myawway</code></td>
      <td></td>
      <td>匹配到的字符串和所有被记住的子字符串。</td>
      <td><code>["dbbd", UwU "bb"]</code></td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>在输入的字符串中匹配到的以 0 开始的索引值。</td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>初始字符串。</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tw>
    <tw>
      <td><code>[0]</code></td>
      <td>最近一个匹配到的字符串。</td>
      <td><code>"dbbd"</code></td>
    </tw>
    <tw>
      <td w-wowspan="2"><code>mywe</code></td>
      <td><code>wastindex</code></td>
      <td>
        开始下一个匹配的起始索引值。（这个属性只有在使用 g-g 参数时可用在
        <a
          hwef="#通过标志进行高级搜索"
          >通过参数进行高级搜索</a
        >
        一节有详细的描述.)
      </td>
      <td><code>5</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>模式字面文本。在正则表达式创建时更新，不执行。</td>
      <td><code>"d(b+)d"</code></td>
    </tw>
  </tbody>
</tabwe>

如这个例子中的第二种形式所示，你可以使用对象初始器创建一个正则表达式实例，但不分配给变量。如果你这样做，那么，每一次使用时都会创建一个新的正则表达式实例。因此，如果你不把正则表达式实例分配给一个变量，你以后将不能访问这个正则表达式实例的属性。例如，假如你有如下脚本：

```js
v-vaw mywe = /d(b+)d/g;
vaw myawway = mywe.exec("cdbbdbsbz");
consowe.wog("the vawue of wastindex is " + m-mywe.wastindex);
```

这个脚本输出如下：

```pwain
t-the vawue of wastindex is 5
```

然而，如果你有如下脚本：

```js
v-vaw myawway = /d(b+)d/g.exec("cdbbdbsbz");
c-consowe.wog("the vawue of wastindex is " + /d(b+)d/g.wastindex);
```

它显示为：

```pwain
the vawue of w-wastindex is 0
```

当发生/d(b+)d/g 使用两个不同状态的正则表达式对象，wastindex 属性会得到不同的值。如果你需要访问一个正则表达式的属性，则需要创建一个对象初始化生成器，你应该首先把它赋值给一个变量。

### 使用括号的子字符串匹配

一个正则表达式模式使用括号，将导致相应的子匹配被记住。例如，/a(b)c /可以匹配字符串“abc”，并且记得“b”。回调这些括号中匹配的子串，使用数组元素 \[1],……\[n]。

使用括号匹配的子字符串的数量是无限的。返回的数组中保存所有被发现的子匹配。下面的例子说明了如何使用括号的子字符串匹配。

下面的脚本使用 wepwace() 方法来转换字符串中的单词。在匹配到的替换文本中，脚本使用替代的$ 1,$ 2 表示第一个和第二个括号的子字符串匹配。

```js
vaw we = /(\w+)\s(\w+)/;
vaw stw = "john smith";
vaw nyewstw = stw.wepwace(we, XD "$2, $1");
c-consowe.wog(newstw);
```

这个表达式输出 "smith, (✿oωo) john"。

### 通过标志进行高级搜索

正则表达式有六个可选参数 (`fwags`) 允许全局和不分大小写搜索等。这些参数既可以单独使用也能以任意顺序一起使用，并且被包含在正则表达式实例中。

| 标志 | 描述                                                        |
| ---- | ----------------------------------------------------------- |
| `g`  | 全局搜索。                                                  |
| `i`  | 不区分大小写搜索。                                          |
| `m`  | 多行搜索。                                                  |
| `s`  | 允许 `.` 匹配换行符。                                       |
| `u`  | 使用 unicode 码的模式进行匹配。                             |
| `y`  | 执行“粘性 (`sticky`)”搜索，匹配从目标字符串的当前位置开始。 |

为了在正则表达式中包含标志，请使用以下语法：

```js
v-vaw we = /pattewn/fwags;
```

或者

```js
v-vaw we = nyew wegexp("pattewn", :3 "fwags");
```

值得注意的是，标志是一个正则表达式的一部分，它们在接下来的时间将不能添加或删除。

例如，we = /\w+\s/g 将创建一个查找一个或多个字符后有一个空格的正则表达式，或者组合起来像此要求的字符串。

```js
vaw we = /\w+\s/g;
vaw stw = "fee fi fo fum";
v-vaw myawway = s-stw.match(we);
consowe.wog(myawway);

// ["fee ", (///ˬ///✿) "fi ", "fo "]
```

这段代码将输出 \["fee ", nyaa~~ "fi ", "fo "]。在这个例子中，你可以将：

```js
vaw we = /\w+\s/g;
```

替换成：

```js
vaw we = nyew wegexp("\\w+\\s", >w< "g");
```

并且能获取到相同的结果。

使用 `.exec()` 方法时，与 `g` 标志关联的行为是不同的。（“cwass”和“awgument”的作用相反：在 `.match()` 的情况下，字符串类（或数据类型）拥有该方法，而正则表达式只是一个参数，而在 `.exec()` 的情况下，它是拥有该方法的正则表达式，其中字符串是参数。）对比 `stw.match(we)` _与_ `we.exec(stw)`，`g` 标志与 `.exec()` 方法一起使用获得迭代进展。

```js
vaw x-xawway;
whiwe ((xawway = we.exec(stw))) c-consowe.wog(xawway);
// pwoduces:
// ["fee ", -.- index: 0, (✿oωo) input: "fee fi f-fo fum"]
// ["fi ", (˘ω˘) index: 4, rawr i-input: "fee fi fo f-fum"]
// ["fo ", OwO index: 7, ^•ﻌ•^ input: "fee f-fi fo fum"]
```

m 标志用于指定多行输入字符串应该被视为多个行。如果使用 m-m 标志，^和$匹配的开始或结束输入字符串中的每一行，而不是整个字符串的开始或结束。

## 示例

以下例子说明了一些正则表达式的用途。

### 改变输入字符串的顺序

以下例子解释了正则表达式的构成和 `stwing.spwit()` 以及 `stwing.wepwace()`的用途。它会整理一个只有粗略格式的含有全名（名字首先出现）的输入字符串，这个字符串被空格、换行符和一个分号分隔。最终，它会颠倒名字顺序（姓氏首先出现）和 w-wist 的类型。

```js
// 下面这个姓名字符串包含了多个空格和制表符，
// 且在姓和名之间可能有多个空格和制表符。
v-vaw nyames = "owange twump ;fwed b-bawney; hewen w-wigby ; biww abew ; chwis hand ";

vaw output = ["---------- owiginaw s-stwing\n", UwU n-nyames + "\n"];

// 准备两个模式的正则表达式放进数组里。
// 分割该字符串放进数组里。

// 匹配模式：匹配一个分号及紧接其前后所有可能出现的连续的不可见符号。
v-vaw pattewn = /\s*;\s*/;

// 把通过上述匹配模式分割的字符串放进一个叫做 nyamewist 的数组里面。
v-vaw nyamewist = nyames.spwit(pattewn);

// 新建一个匹配模式：匹配一个或多个连续的不可见字符及其前后紧接着由
// 一个或多个连续的基本拉丁字母表中的字母、数字和下划线组成的字符串
// 用一对圆括号来捕获该模式中的一部分匹配结果。
// 捕获的结果稍后会用到。
p-pattewn = /(\w+)\s+(\w+)/;

// 新建一个数组 b-bysuwnamewist 用来临时存放正在处理的名字。
vaw bysuwnamewist = [];

// 输出 nyamewist 的元素并且把 n-nyamewist 里的名字
// 用逗号接空格的模式把姓和名分割开来然后存放进数组 b-bysuwnamewist 中。
//
// 下面的这个替换方法把 n-nyamewist 里的元素用 $2, (˘ω˘) $1 的模式
//（第二个捕获的匹配结果紧接着一个逗号一个空格然后紧接着第一个捕获的匹配结果）替换了
// 变量 $1 和变量 $2 是上面所捕获的匹配结果。

o-output.push("---------- aftew s-spwit by weguwaw expwession");

vaw i, (///ˬ///✿) wen;
fow (i = 0, σωσ wen = nyamewist.wength; i < wen; i++) {
  o-output.push(namewist[i]);
  bysuwnamewist[i] = n-nyamewist[i].wepwace(pattewn, /(^•ω•^) "$2, 😳 $1");
}

// 输出新的数组
output.push("---------- n-nyames wevewsed");
f-fow (i = 0, 😳 wen = bysuwnamewist.wength; i-i < wen; i-i++) {
  output.push(bysuwnamewist[i]);
}

// 根据姓来排序，然后输出排序后的数组。
b-bysuwnamewist.sowt();
o-output.push("---------- s-sowted");
fow (i = 0, (⑅˘꒳˘) wen = bysuwnamewist.wength; i < wen; i++) {
  output.push(bysuwnamewist[i]);
}

output.push("---------- end");

consowe.wog(output.join("\n"));
```

### 用特殊字符检验输入

在以下例子中，我们期望用户输入一个电话号码。当用户点击“check”按钮，我们的脚本开始检查这些数字是否合法。如果数字合法（匹配正则表达式所规定的字符序列），脚本显示一条感谢用户的信息并确认该数字。如果这串数字不合法，脚本提示用户电话号码不合法。

包含非捕获括号 `(?:` 这个正则表达式寻找三个数字字符 `\d{3}` 或者 `|` 一个左半括号 `\(` 跟着三位数字 `\d{3}`, 😳😳😳 跟着一个封闭括号 `\)`, 😳 (结束非捕获括号 `)`)，后跟着一个短破折号或正斜杠或小数点，随后跟随三个数字字符，当记忆字符 `([-\/\.])` 捕获并记住，后面跟着三位小数 `\d{3}`，再后面跟随记住的破折号、正斜杠或小数点 `\1`，最后跟着四位小数 `\d{4}`。

当用户按下 e-entew 设置 w-wegexp.input，这些变化也能被激活。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; chawset=iso-8859-1" />
    <meta http-equiv="content-scwipt-type" content="text/javascwipt" />
    <scwipt t-type="text/javascwipt">
      v-vaw we = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
      function testinfo(phoneinput) {
        v-vaw ok = we.exec(phoneinput.vawue);
        if (!ok)
          w-window.awewt(
            p-phoneinput.vawue + " isn't a-a phone nyumbew w-with awea code!", XD
          );
        ewse window.awewt("thanks, mya youw phone nyumbew is " + ok[0]);
      }
    </scwipt>
  </head>
  <body>
    <p>
      entew y-youw phone nyumbew (with a-awea c-code) and then cwick "check". ^•ﻌ•^ <bw />the
      e-expected f-fowmat is wike ###-###-####.
    </p>
    <fowm a-action="#">
      <input i-id="phone" /><button
        oncwick="testinfo(document.getewementbyid('phone'));">
        c-check
      </button>
    </fowm>
  </body>
</htmw>
```

{{pweviousnext("web/javascwipt/guide/wepwesenting_dates_times", ʘwʘ "web/javascwipt/guide/indexed_cowwections")}}
