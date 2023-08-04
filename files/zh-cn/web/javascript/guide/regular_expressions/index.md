---
title: 正则表达式
slug: Web/JavaScript/Guide/Regular_expressions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript 中，正则表达式也是对象。这些模式被用于 {{jsxref("RegExp")}} 的 {{jsxref("RegExp.exec", "exec")}} 和 {{jsxref("RegExp.test", "test")}} 方法，以及 {{jsxref("String")}} 的 {{jsxref("String.match", "match")}}、{{jsxref("String.matchAll", "matchAll")}}、{{jsxref("String.replace", "replace")}}、{{jsxref("String.search", "search")}} 和 {{jsxref("String.split", "split")}} 方法。本章介绍 JavaScript 正则表达式。

## 创建一个正则表达式

你可以使用以下两种方法构建一个正则表达式：

使用一个正则表达式字面量，其由包含在斜杠之间的模式组成，如下所示：

```js
var re = /ab+c/;
```

脚本加载后，正则表达式字面量就会被编译。当正则表达式保持不变时，使用此方法可获得更好的性能。

或者调用[`RegExp`](/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp)对象的构造函数，如下所示：

```js
var re = new RegExp("ab+c");
```

在脚本运行过程中，用构造函数创建的正则表达式会被编译。如果正则表达式将会改变，或者它将会从用户输入等来源中动态地产生，就需要使用构造函数来创建正则表达式。

## 编写一个正则表达式的模式

一个正则表达式模式是由简单的字符所构成的，比如 `/abc/`；或者是简单和特殊字符的组合，比如 `/ab*c/` 或 `/Chapter (\d+)\.\d*/`。最后的例子中用到了括号，它在正则表达式中常用作记忆设备。即这部分所匹配的字符将会被记住以备后续使用，例如[使用括号的子字符串匹配](#使用括号的子字符串匹配)。

### 使用简单模式

简单模式是由你想直接找到的字符构成。比如，`/abc/` 这个模式就能且仅能匹配 "abc" 字符按照顺序同时出现的情况。例如在 "Hi, do you know your abc's?" 和 "The latest airplane designs evolved from slabcraft." 中会匹配成功。在上述两个例子中，匹配的子字符串是 "abc"。但是在 "Grab crab" 中会匹配失败，因为它虽然包含子字符串 "ab c"，但并不是准确的 "abc"。

### 使用特殊字符

当你需要匹配一个不确定的字符串时，比如寻找一个或多个 "b"，或者寻找空格，可以在模式中使用特殊字符。比如，你可以使用 `/ab*c/` 去匹配一个单独的 "a" 后面跟了零个或者多个 "b"，同时后面跟着 "c" 的字符串：`*`的意思是前一项出现零次或者多次。在字符串 "cbbabbbbcdebc" 中，这个模式匹配了子字符串 "abbbbc"。

下面的页面与表格列出了一个正则表达式中可以利用的特殊字符的完整列表和描述。

- [断言（Assertions）](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
  - : 表示一个匹配在某些条件下发生。断言包含先行断言、后行断言和条件表达式。
- [字符类（Character Classes）](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
  - : 区分不同类型的字符，例如区分字母和数字。
- [组和范围（Groups and Ranges）](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_Ranges)
  - : 表示表达式字符的分组和范围。
- [量词（Quantifiers）](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
  - : 表示匹配的字符或表达式的数量。
- [Unicode 属性转义（Unicode Property Escapes）](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : 基于 unicode 字符属性区分字符。例如大写和小写字母、数学符号和标点。

<table class="standard-table">
  <caption>
    正则表达式中的特殊字符
  </caption>
  <thead>
    <tr>
      <th scope="col">字符</th>
      <th scope="col">含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="#special-backslash"><code>\</code></a>
      </td>
      <td>
        <p>依照下列规则匹配：</p>
        <p>
          在非特殊字符之前的反斜杠表示下一个字符是特殊字符，不能按照字面理解。例如，前面没有
          "\" 的 "b" 通常匹配小写字母
          "b"，即字符会被作为字面理解，无论它出现在哪里。但如果前面加了
          "\"，它将不再匹配任何字符，而是表示一个<a href="#note">字符边界</a>。
        </p>
        <p>
          在特殊字符之前的反斜杠表示下一个字符不是特殊字符，应该按照字面理解。详情请参阅下文中的
          "转义（Escaping）" 部分。
        </p>
        <p>
          如果你想将字符串传递给 RegExp
          构造函数，不要忘记在字符串字面量中反斜杠是转义字符。所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它。<code
            >/[a-z]\s/i</code
          >
          和
          <code>new RegExp("[a-z]\\s", "i")</code>
          创建了相同的正则表达式：一个用于搜索后面紧跟着空白字符（<code
            >\s</code
          >
          可看后文）并且在 a-z 范围内的任意字符的表达式。为了通过字符串字面量给
          RegExp
          构造函数创建包含反斜杠的表达式，你需要在字符串级别和正则表达式级别都对它进行转义。例如
          <code>/[a-z]:\\/i</code> 和
          <code>new RegExp("[a-z]:\\\\","i")</code>
          会创建相同的表达式，即匹配类似 "C:\" 字符串。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-caret"><code>^</code></a>
      </td>
      <td>
        <p>
          匹配输入的开始。如果多行标志被设置为
          true，那么也匹配换行符后紧跟的位置。
        </p>
        <p>
          例如，<code>/^A/</code> 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E"
          中的 'A'。
        </p>
        <p>
          当 '<code>^</code>'
          作为第一个字符出现在一个字符集合模式时，它将会有不同的含义。<a
            href="#special-negated-character-set"
            >反向字符集合</a
          >
          一节有详细介绍和示例。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-dollar"><code>$</code></a>
      </td>
      <td>
        <p>
          匹配输入的结束。如果多行标志被设置为 true，那么也匹配换行符前的位置。
        </p>
        <p>
          例如，<code>/t$/</code> 并不会匹配 "eater" 中的 't'，但是会匹配 "eat"
          中的 't'。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-asterisk"><code>*</code></a>
      </td>
      <td>
        <p>匹配前一个表达式 0 次或多次。等价于 <code>{0,}</code>。</p>
        <p>
          例如，<code>/bo*/</code> 会匹配 "A ghost boooooed" 中的 'booooo' 和 "A
          bird warbled" 中的 'b'，但是在 "A goat grunted" 中不会匹配任何内容。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-plus"><code>+</code></a>
      </td>
      <td>
        <p>匹配前面一个表达式 1 次或者多次。等价于 <code>{1,}</code>。</p>
        <p>
          例如，<code>/a+/</code> 会匹配 "candy" 中的 'a' 和 "caaaaaaandy"
          中所有的 'a'，但是在 "cndy" 中不会匹配任何内容。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-questionmark"><code>?</code></a>
      </td>
      <td>
        <p>匹配前面一个表达式 0 次或者 1 次。等价于 <code>{0,1}</code>。</p>
        <p>
          例如，<code>/e?le?/</code> 匹配 "angel" 中的 'el'、"angle" 中的 'le'
          以及 "oslo' 中的 'l'。
        </p>
        <p>
          如果<strong>紧跟在任何量词 *、 +、? 或 {} 的后面</strong
          >，将会使量词变为<strong>非贪婪</strong>（匹配尽量少的字符），和缺省使用的<strong>贪婪模式</strong>（匹配尽可能多的字符）正好相反。例如，对
          "123abc" 使用 <code>/\d+/</code> 将会匹配 "123"，而使用
          <code>/\d+?/</code> 则只会匹配到 "1"。
        </p>
        <p>
          还用于先行断言中，如本表的 <code>x(?=y)</code> 和
          <code>x(?!y)</code> 条目所述。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-dot"><code>.</code></a>
      </td>
      <td>
        <p>（小数点）默认匹配除换行符之外的任何单个字符。</p>
        <p>
          例如，<code>/.n/</code> 将会匹配 "nay, an apple is on the tree" 中的
          'an' 和 'on'，但是不会匹配 'nay'。
        </p>
        <p>
          如果 <code>s</code> ("dotAll") 标志位被设为 true，它也会匹配换行符。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-capturing-parentheses"><code>(x)</code></a>
      </td>
      <td>
        <p>
          像下面的例子展示的那样，它会匹配 'x'
          并且记住匹配项。其中括号被称为<em>捕获括号</em>。
        </p>
        <p>
          模式 <code>/(foo) (bar) \1 \2/</code> 中的 '<code>(foo)</code>' 和
          '<code>(bar)</code>' 匹配并记住字符串 "foo bar foo bar"
          中前两个单词。模式中的 <code>\1</code> 和
          <code>\2</code> 表示第一个和第二个被捕获括号匹配的子字符串，即
          <code>foo</code> 和
          <code>bar</code>，匹配了原字符串中的后两个单词。注意
          <code>\1</code>、<code>\2</code>、...、<code>\n</code>
          是用在正则表达式的匹配环节，详情可以参阅后文的
          <a
            href="#special-backreference"
            >\n</a
          >
          条目。而在正则表达式的替换环节，则要使用像
          <code>$1</code>、<code>$2</code>、...、<code>$n</code>
          这样的语法，例如，<code
            >'bar foo'.replace(/(...) (...)/, '$2 $1')</code
          >。<code>$&#x26;</code> 表示整个用于匹配的原字符串。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-non-capturing-parentheses"><code>(?:x)</code></a>
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
            href="#使用括号的子字符串匹配"
            >使用括号的子字符串匹配</a
          >
          条目。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-lookahead"><code>x(?=y)</code></a>
      </td>
      <td>
        <p>匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。</p>
        <p>
          例如，/Jack(?=Sprat)/会匹配到'Jack'仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅当它后面跟着'Sprat'或者是‘Frost’。但是‘Sprat’和‘Frost’都不是匹配结果的一部分。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-lookahead"><code>(?&#x3C;=y)</code></a
        >x
      </td>
      <td>
        <p>匹配'x'仅当'x'前面是'y'.这种叫做后行断言。</p>
        <p>
          例如，/(?&#x3C;=Jack)Sprat/会匹配到' Sprat '仅仅当它前面是' Jack
          '。/(?&#x3C;=Jack|Tom)Sprat/匹配‘Sprat
          ’仅仅当它前面是'Jack'或者是‘Tom’。但是‘Jack’和‘Tom’都不是匹配结果的一部分。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-negated-look-ahead"><code>x(?!y)</code></a>
      </td>
      <td>
        <p>仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找。</p>
        <p>
          例如，仅仅当这个数字后面没有跟小数点的时候，/\d+(?!\.)/
          匹配一个数字。正则表达式/\d+(?!\.)/.exec("3.141")
          匹配‘141’而不是‘3.141’
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>(?&#x3C;!<em>y</em>)<em>x</em></code>
      </td>
      <td>
        <p>仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找。</p>
        <p>
          例如，仅仅当这个数字前面没有负号的时候，<code>/(?&#x3C;!-)\d+/</code>
          匹配一个数字。<br /><code>/(?&#x3C;!-)\d+/.exec('3')</code> 匹配到
          "3".<br /><code>/(?&#x3C;!-)\d+/.exec('-3')</code>
          因为这个数字前有负号，所以没有匹配到。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-or"><code>x|y</code></a>
      </td>
      <td>
        <p>匹配‘x’或者‘y’。</p>
        <p>
          例如，/green|red/匹配“green apple”中的‘green’和“red apple”中的‘red’
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-quantifier"><code>{n}</code></a>
      </td>
      <td>
        n 是一个正整数，匹配了前面一个字符刚好出现了 n 次。<br />比如， /a{2}/
        不会匹配“candy”中的'a',但是会匹配“caandy”中所有的
        a，以及“caaandy”中的前两个'a'。
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-quantifier"><code>{n,}</code></a>
      </td>
      <td>
        <p>n 是一个正整数，匹配前一个字符至少出现了 n 次。</p>
        <p>例如，/a{2,}/ 匹配 "aa", "aaaa" 和 "aaaaa" 但是不匹配 "a"。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-quantifier-range"><code>{n,m}</code></a>
      </td>
      <td>
        <p>
          n 和 m 都是整数。匹配前面的字符至少 n 次，最多 m 次。如果 n 或者 m
          的值是 0，这个值被忽略。
        </p>
        <p>
          例如，/a{1, 3}/ 并不匹配“cndy”中的任意字符，匹配“candy”中的
          a，匹配“caandy”中的前两个 a，也匹配“caaaaaaandy”中的前三个
          a。注意，当匹配”caaaaaaandy“时，匹配的值是“aaa”，即使原始的字符串中有更多的
          a。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-character-set"><code>[xyz]</code></a>
      </td>
      <td>
        一个字符集合。匹配方括号中的任意字符，包括<a
          href="/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types"
          >转义序列</a
        >。你可以使用破折号（-）来指定一个字符范围。对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转义，不过转义也是起作用的。<br />例如，[abcd]
        和 [a-d]
        是一样的。他们都匹配"brisket"中的‘b’,也都匹配“city”中的‘c’。/[a-z.]+/
        和/[\w.]+/与字符串“test.i.ng”匹配。
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-negated-character-set"><code>[^xyz]</code></a>
      </td>
      <td>
        <p>
          一个反向字符集。也就是说，
          它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。任何普通字符在这里都是起作用的。
        </p>
        <p>
          例如，[^abc] 和 [^a-c]
          是一样的。他们匹配"brisket"中的‘r’，也匹配“chop”中的‘h’。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-backspace"><code>[\b]</code></a>
      </td>
      <td><p>匹配一个退格 (U+0008)。（不要和\b混淆了。）</p></td>
    </tr>
    <tr>
      <td>
        <a href="#special-word-boundary"><code>\b</code></a>
      </td>
      <td>
        <p>
          匹配一个词的边界。一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者前面跟其他“字”字符的位置，例如在字母和空格之间。注意，匹配中不包括匹配的字边界。换句话说，一个匹配的词的边界的内容的长度是
          0。（不要和 [\b] 混淆了）
        </p>
        <p>
          使用"moon"举例：<br />/\bm/匹配“moon”中的‘m’；<br />/oo\b/并不匹配"moon"中的'oo'，因为'oo'被一个“字”字符'n'紧跟着。<br />/oon\b/匹配"moon"中的'oon'，因为'oon'是这个字符串的结束部分。这样他没有被一个“字”字符紧跟着。<br />/\w\b\w/将不能匹配任何字符串，因为在一个单词中间的字符永远也不可能同时满足没有“字”字符跟随和有“字”字符跟随两种情况。
        </p>
        <div class="note">
          <p>
            <strong>备注：</strong> JavaScript 的正则表达式引擎将<a
              href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6"
              >特定的字符集</a
            >定义为“字”字符。不在该集合中的任何字符都被认为是一个断词。这组字符相当有限：它只包括大写和小写的罗马字母，十进制数字和下划线字符。不幸的是，重要的字符，例如“é”或“ü”，被视为断词。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-non-word-boundary"><code>\B</code></a>
      </td>
      <td>
        <p>匹配一个非单词边界。匹配如下几种情况：</p>
        <ul>
          <li>字符串第一个字符为非“字”字符</li>
          <li>字符串最后一个字符为非“字”字符</li>
          <li>两个单词字符之间</li>
          <li>两个非单词字符之间</li>
          <li>空字符串</li>
        </ul>
        <p>
          例如，/\B../匹配"noonday"中的'oo', 而/y\B../匹配"possibly
          yesterday"中的’yes‘
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-control"
          ><code>\c<em>X</em></code></a
        >
      </td>
      <td>
        <p>当 X 是处于 A 到 Z 之间的字符的时候，匹配字符串中的一个控制符。</p>
        <p>例如，<code>/\cM/</code> 匹配字符串中的 control-M (U+000D)。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-digit"><code>\d</code></a>
      </td>
      <td>
        <p>匹配一个数字<code>。</code><code>等价于 [0-9]</code>。</p>
        <p>
          例如， <code>/\d/</code> 或者 <code>/[0-9]/</code> 匹配"B2 is the
          suite number."中的'2'。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-non-digit"><code>\D</code></a>
      </td>
      <td>
        <p>匹配一个非数字字符<code>。</code><code>等价于 [^0-9]</code>。</p>
        <p>
          例如， <code>/\D/</code> 或者 <code>/[^0-9]/</code> 匹配"B2 is the
          suite number."中的'B' 。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-form-feed"><code>\f</code></a>
      </td>
      <td>匹配一个换页符 (U+000C)。</td>
    </tr>
    <tr>
      <td>
        <a href="#special-line-feed"><code>\n</code></a>
      </td>
      <td>匹配一个换行符 (U+000A)。</td>
    </tr>
    <tr>
      <td>
        <a href="#special-carriage-return"><code>\r</code></a>
      </td>
      <td>匹配一个回车符 (U+000D)。</td>
    </tr>
    <tr>
      <td>
        <a href="#special-white-space"><code>\s</code></a>
      </td>
      <td>
        <p>
          匹配一个空白字符，包括空格、制表符、换页符和换行符。等价于
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。
        </p>
        <p>例如，<code>/\s\w*/</code> 匹配"foo bar."中的' bar'。</p>
        <p>
          经测试，\s不匹配"<a href="https://unicode-table.com/cn/180E/"
            >\u180e</a
          >"，在当前版本 Chrome(v80.0.3987.122) 和 Firefox(76.0.1)
          控制台输入/\s/.test("\u180e") 均返回 false。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-non-white-space"><code>\S</code></a>
      </td>
      <td>
        <p>
          匹配一个非空白字符。等价于
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。
        </p>
        <p>例如，<code>/\S\w*/</code> 匹配"foo bar."中的'foo'。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-tab"><code>\t</code></a>
      </td>
      <td>匹配一个水平制表符 (U+0009)。</td>
    </tr>
    <tr>
      <td>
        <a href="#special-vertical-tab"><code>\v</code></a>
      </td>
      <td>匹配一个垂直制表符 (U+000B)。</td>
    </tr>
    <tr>
      <td>
        <a href="#special-word"><code>\w</code></a>
      </td>
      <td>
        <p>
          匹配一个单字字符（字母、数字或者下划线）。等价于
          <code>[A-Za-z0-9_]</code>。
        </p>
        <p>
          例如，<code>/\w/</code> 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和
          "3D." 中的 '3'。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-non-word"><code>\W</code></a>
      </td>
      <td>
        <p>匹配一个非单字字符。等价于 <code>[^A-Za-z0-9_]</code>。</p>
        <p>
          例如，<code>/\W/</code> 或者 <code>/[^A-Za-z0-9_]/</code> 匹配 "50%."
          中的 '%'。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-backreference"
          ><code>\<em>n</em></code></a
        >
      </td>
      <td>
        <p>
          在正则表达式中，它返回最后的第 n 个子捕获匹配的子字符串
          (捕获的数目以左括号计数)。
        </p>
        <p>
          比如 <code>/apple(,)\sorange\1/</code> 匹配"apple, orange, cherry,
          peach."中的'apple, orange,' 。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-null"><code>\0</code></a>
      </td>
      <td>
        匹配 NULL（U+0000）字符，不要在这后面跟其他小数，因为
        <code>\0&#x3C;digits></code> 是一个八进制转义序列。
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-hex-escape"><code>\xhh</code></a>
      </td>
      <td>匹配一个两位十六进制数（\x00-\xFF）表示的字符。</td>
    </tr>
    <tr>
      <td>
        <a href="#special-unicode-escape"><code>\uhhhh</code></a>
      </td>
      <td>匹配一个四位十六进制数表示的 UTF-16 代码单元。</td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            ><a href="#special-unicode-escape-es6">\u{hhhh}</a>或\u{hhhhh}</code
          >
        </p>
      </td>
      <td>（仅当设置了 u 标志时）匹配一个十六进制数表示的 Unicode 字符。</td>
    </tr>
  </tbody>
</table>

### Escaping

如果你需要使用任何特殊字符的字面值（例如，搜索字符'\*'），你必须通过在它前面放一个反斜杠来转义它。例如，要搜索'a'后跟'\*'后跟'b'，你应该使用`/a\*b/`- 反斜杠“转义”字符'\*'，使其成为文字而非特殊符号。

类似地，如果您正在编写正则表达式文字并且需要匹配斜杠（'/'），那么需要转义它（否则，斜杠是正则终止符）。例如，要搜索字符串“/ example /”后跟一个或多个字母字符，您需要使用`/\/example\/[a-z]+/i`——每个斜杠之前使用反斜杠使它们成为普通字符。

要匹配文本符号反斜杠，您需要转义反斜杠。例如，要匹配字符串“C:\”，其中“C”可以是任何字母，您将使用`/[A-Z]:\\/` —— 第一个反斜杠转义后面的那个反斜杠，因此表达式搜索单个普通字符反斜杠。

如果将 RegExp 构造函数与字符串文字一起使用，请记住反斜杠是字符串文字中的转义，因此要在正则表达式中使用它，您需要在字符串文字级别转义它。 `/a\*b/` 和`new RegExp("a\\*b")`创建的表达式是相同的，搜索“a”后跟文字“\*”后跟“b”。

将用户输入转义为正则表达式中的一个字面字符串，可以通过简单的替换来实现：

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  //$&表示整个被匹配的字符串
}
```

正则表达式后的"g"是一个表示全局搜索选项或标记，将在整个字符串查找并返回所有匹配结果。这将在下面的[通过标志进行高级搜索](#通过标志进行高级搜索)详述。

为什么这个没有内建在 JavaScript 中？之前有计划在 RegExp 对象中添加一个 Function，但在[TC39](https://github.com/benjamingr/RegExp.escape/issues/37)中被否决了。

### 使用插入语

任何正则表达式的插入语都会使这部分匹配的副字符串被记忆。一旦被记忆，这个副字符串就可以被调用于其他用途，如同 [使用括号的子字符串匹配](#使用括号的子字符串匹配)之中所述。

比如， `/Chapter (\d+)\.\d*/` 解释了额外转义的和特殊的字符，并说明了这部分 pattern 应该被记忆。它精确地匹配后面跟着一个以上数字字符的字符 'Chapter ' (`\d` 意为任何数字字符，`+ 意为 1 次以上`)，跟着一个小数点（在这个字符中本身也是一个特殊字符；小数点前的 \ 意味着这个 pattern 必须寻找字面字符 '.')，跟着任何数字字符 0 次以上。 (`\d` 意为数字字符， `*` 意为 0 次以上)。另外，插入语也用来记忆第一个匹配的数字字符。

此模式可以匹配字符串"Open Chapter 4.3, paragraph 6"，并且'4'将会被记住。此模式并不能匹配"Chapter 3 and 4"，因为在这个字符串中'3'的后面没有点号'.'。

括号中的"?:"，这种模式匹配的子字符串将不会被记住。比如，(?:\d+) 匹配一次或多次数字字符，但是不能记住匹配的字符。

## 使用正则表达式

正则表达式可以被用于 [`RegExp`](/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp) 的 [`exec`](/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp/exec) 和 [`test`](/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp/test) 方法以及 [`String`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String) 的 [`match`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String/match)、[`replace`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String/replace)、[`search`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String/search) 和 [`split`](/zh-CN/docs/JavaScript/Reference/Global_Objects/String/split) 方法。这些方法在 [JavaScript 手册](/zh-CN/docs/JavaScript/Reference)中有详细的解释。

| 方法                                      | 描述                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp.exec", "exec")}}         | 一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）。                      |
| {{jsxref("RegExp.test", "test")}}         | 一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false。                                       |
| {{jsxref("String.match", "match")}}       | 一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null。                    |
| {{jsxref("String.matchAll", "matchAll")}} | 一个在字符串中执行查找所有匹配的 String 方法，它返回一个迭代器（iterator）。                           |
| {{jsxref("String.search", "search")}}     | 一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回 -1。                    |
| {{jsxref("String.replace", "replace")}}   | 一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串。                   |
| {{jsxref("String.split", "split")}}       | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 `String` 方法。 |

当你想要知道在一个字符串中的一个匹配是否被找到，你可以使用 test 或 search 方法；想得到更多的信息（但是比较慢）则可以使用 exec 或 match 方法。如果你使用 exec 或 match 方法并且匹配成功了，那么这些方法将返回一个数组并且更新相关的正则表达式对象的属性和预定义的正则表达式对象（详见下）。如果匹配失败，那么 exec 方法返回 null（也就是 false）。

在接下来的例子中，脚本将使用 exec 方法在一个字符串中查找一个匹配。

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

如果你不需要访问正则表达式的属性，这个脚本通过另一个方法来创建 myArray：

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
// 和 "cdbbdbsbz".match(/d(b+)d/g); 相似。
// 但是 "cdbbdbsbz".match(/d(b+)d/g) 输出数组 [ "dbbd" ]，
// 而 /d(b+)d/g.exec('cdbbdbsbz') 输出数组 [ "dbbd", "bb", index: 1, input: "cdbbdbsbz" ].
```

如果你想通过一个字符串构建正则表达式，那么这个脚本还有另一种方法：

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

通过这些脚本，匹配成功后将返回一个数组并且更新正则表达式的属性，如下表所示。

<table class="standard-table">
  <caption>
    正则表达式执行后的返回信息
  </caption>
  <thead>
    <tr>
      <th scope="col">对象</th>
      <th scope="col">属性或索引</th>
      <th scope="col">描述</th>
      <th scope="col">在例子中对应的值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>匹配到的字符串和所有被记住的子字符串。</td>
      <td><code>["dbbd", "bb"]</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>在输入的字符串中匹配到的以 0 开始的索引值。</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>初始字符串。</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>最近一个匹配到的字符串。</td>
      <td><code>"dbbd"</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        开始下一个匹配的起始索引值。（这个属性只有在使用 g 参数时可用在
        <a
          href="#通过标志进行高级搜索"
          >通过参数进行高级搜索</a
        >
        一节有详细的描述.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>模式字面文本。在正则表达式创建时更新，不执行。</td>
      <td><code>"d(b+)d"</code></td>
    </tr>
  </tbody>
</table>

如这个例子中的第二种形式所示，你可以使用对象初始器创建一个正则表达式实例，但不分配给变量。如果你这样做，那么，每一次使用时都会创建一个新的正则表达式实例。因此，如果你不把正则表达式实例分配给一个变量，你以后将不能访问这个正则表达式实例的属性。例如，假如你有如下脚本：

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + myRe.lastIndex);
```

这个脚本输出如下：

```plain
The value of lastIndex is 5
```

然而，如果你有如下脚本：

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);
```

它显示为：

```plain
The value of lastIndex is 0
```

当发生/d(b+)d/g 使用两个不同状态的正则表达式对象，lastIndex 属性会得到不同的值。如果你需要访问一个正则表达式的属性，则需要创建一个对象初始化生成器，你应该首先把它赋值给一个变量。

### 使用括号的子字符串匹配

一个正则表达式模式使用括号，将导致相应的子匹配被记住。例如，/a(b)c /可以匹配字符串“abc”，并且记得“b”。回调这些括号中匹配的子串，使用数组元素 \[1],……\[n]。

使用括号匹配的子字符串的数量是无限的。返回的数组中保存所有被发现的子匹配。下面的例子说明了如何使用括号的子字符串匹配。

下面的脚本使用 replace() 方法来转换字符串中的单词。在匹配到的替换文本中，脚本使用替代的$ 1,$ 2 表示第一个和第二个括号的子字符串匹配。

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

这个表达式输出 "Smith, John"。

### 通过标志进行高级搜索

正则表达式有六个可选参数 (`flags`) 允许全局和不分大小写搜索等。这些参数既可以单独使用也能以任意顺序一起使用，并且被包含在正则表达式实例中。

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
var re = /pattern/flags;
```

或者

```js
var re = new RegExp("pattern", "flags");
```

值得注意的是，标志是一个正则表达式的一部分，它们在接下来的时间将不能添加或删除。

例如，re = /\w+\s/g 将创建一个查找一个或多个字符后有一个空格的正则表达式，或者组合起来像此要求的字符串。

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

这段代码将输出 \["fee ", "fi ", "fo "]。在这个例子中，你可以将：

```js
var re = /\w+\s/g;
```

替换成：

```js
var re = new RegExp("\\w+\\s", "g");
```

并且能获取到相同的结果。

使用`.exec()`方法时，与'`g`'标志关联的行为是不同的。（“class”和“argument”的作用相反：在`.match()`的情况下，字符串类（或数据类型）拥有该方法，而正则表达式只是一个参数，而在`.exec()`的情况下，它是拥有该方法的正则表达式，其中字符串是参数。对比*`str.match(re)`*与*`re.exec(str)`* ), '`g`'标志与`.exec()`方法一起使用获得迭代进展。

```js
var xArray;
while ((xArray = re.exec(str))) console.log(xArray);
// produces:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```

m 标志用于指定多行输入字符串应该被视为多个行。如果使用 m 标志，^和$匹配的开始或结束输入字符串中的每一行，而不是整个字符串的开始或结束。

## 示例

以下例子说明了一些正则表达式的用途。

### 改变输入字符串的顺序

以下例子解释了正则表达式的构成和 `string.split()` 以及 `string.replace()`的用途。它会整理一个只有粗略格式的含有全名（名字首先出现）的输入字符串，这个字符串被空格、换行符和一个分号分隔。最终，它会颠倒名字顺序（姓氏首先出现）和 list 的类型。

```js
// 下面这个姓名字符串包含了多个空格和制表符，
// 且在姓和名之间可能有多个空格和制表符。
var names = "Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// 准备两个模式的正则表达式放进数组里。
// 分割该字符串放进数组里。

// 匹配模式：匹配一个分号及紧接其前后所有可能出现的连续的不可见符号。
var pattern = /\s*;\s*/;

// 把通过上述匹配模式分割的字符串放进一个叫做 nameList 的数组里面。
var nameList = names.split(pattern);

// 新建一个匹配模式：匹配一个或多个连续的不可见字符及其前后紧接着由
// 一个或多个连续的基本拉丁字母表中的字母、数字和下划线组成的字符串
// 用一对圆括号来捕获该模式中的一部分匹配结果。
// 捕获的结果稍后会用到。
pattern = /(\w+)\s+(\w+)/;

// 新建一个数组 bySurnameList 用来临时存放正在处理的名字。
var bySurnameList = [];

// 输出 nameList 的元素并且把 nameList 里的名字
// 用逗号接空格的模式把姓和名分割开来然后存放进数组 bySurnameList 中。
//
// 下面的这个替换方法把 nameList 里的元素用 $2, $1 的模式
//（第二个捕获的匹配结果紧接着一个逗号一个空格然后紧接着第一个捕获的匹配结果）替换了
// 变量 $1 和变量 $2 是上面所捕获的匹配结果。

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// 输出新的数组
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

// 根据姓来排序，然后输出排序后的数组。
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
```

### 用特殊字符检验输入

在以下例子中，我们期望用户输入一个电话号码。当用户点击“Check”按钮，我们的脚本开始检查这些数字是否合法。如果数字合法（匹配正则表达式所规定的字符序列），脚本显示一条感谢用户的信息并确认该数字。如果这串数字不合法，脚本提示用户电话号码不合法。.

包含非捕获括号 `(?:` 这个正则表达式寻找三个数字字符 `\d{3}` 或者 `|` 一个左半括号 `\(` 跟着三位数字 `\d{3}`, 跟着一个封闭括号 `\)`, (结束非捕获括号 `)`)，后跟着一个短破折号或正斜杠或小数点，随后跟随三个数字字符，当记忆字符 `([-\/\.])` 捕获并记住，后面跟着三位小数 `\d{3}`，再后面跟随记住的破折号、正斜杠或小数点 `\1`，最后跟着四位小数 `\d{4}`。

当用户按下 Enter 设置 RegExp.input，这些变化也能被激活。

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <script type="text/javascript">
      var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
      function testInfo(phoneInput) {
        var OK = re.exec(phoneInput.value);
        if (!OK)
          window.alert(
            phoneInput.value + " isn't a phone number with area code!",
          );
        else window.alert("Thanks, your phone number is " + OK[0]);
      }
    </script>
  </head>
  <body>
    <p>
      Enter your phone number (with area code) and then click "Check". <br />The
      expected format is like ###-###-####.
    </p>
    <form action="#">
      <input id="phone" /><button
        onclick="testInfo(document.getElementById('phone'));">
        Check
      </button>
    </form>
  </body>
</html>
```

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
