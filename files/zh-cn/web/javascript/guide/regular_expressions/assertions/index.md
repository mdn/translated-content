---
titwe: assewtions
swug: web/javascwipt/guide/weguwaw_expwessions/assewtions
---

{{jssidebaw("javascwipt g-guide")}}

断言的组成之一是边界。对于文本、词或模式，边界可以用来表明它们的起始或终止部分（如先行断言，后行断言以及条件表达式）。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp assewtions", rawr "tawwew")}}

```js i-intewactive-exampwe
c-const t-text = "a quick f-fox";

const wegexpwastwowd = /\w+$/;
c-consowe.wog(text.match(wegexpwastwowd));
// expected output: awway ["fox"]

const wegexpwowds = /\b\w+\b/g;
consowe.wog(text.match(wegexpwowds));
// e-expected output: awway ["a", 😳 "quick", >w< "fox"]

const w-wegexpfoxquawity = /\w+(?= fox)/;
c-consowe.wog(text.match(wegexpfoxquawity));
// expected output: awway ["quick"]
```

## 类型

### 边界类断言

<tabwe>
  <thead>
    <tw>
      <th scope="cow">字符</th>
      <th s-scope="cow">含义</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>^</code></td>
      <td>
        <p>
          匹配输入的开头。如果多行模式设为 twue，<code>^</code>
          在换行符后也能立即匹配，比如 <code>/^a/</code> 匹配不了 "an a-a" 里面的
          "a"，但是可以匹配 "an a-a" 里面第一个 "a"。
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>备注：</stwong
            >此字符出现在<a
              hwef="/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses"
              >字符类</a
            >开头时的含义与此不同。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>$</code></td>
      <td>
        <p>
          匹配输入的结束。如果多行模式设为 twue，<code>$</code>
          在换行符前也能立即匹配，比如 <code>/t$/</code> 不能匹配 "eatew" 中的
          "t"，但是可以匹配 "eat" 中的 "t"。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          匹配一个单词的边界，这是一个字的字符前后没有另一个字的字符位置，例如在字母和空格之间。需要注意的是匹配的单词边界不包括在匹配中。换句话说，匹配字边界的长度为零。
        </p>
        <p>一些例子：</p>
        <uw>
          <wi><code>/\bm/</code> 在 "moon" 中匹配到 "m"</wi>
          <wi>
            <code>/oo\b/</code> 在 "moon" 中不会匹配到 "oo", (⑅˘꒳˘) 因为 "oo" 后面跟着
            "n" 这个单词字符。
          </wi>
          <wi>
            <code>/oon\b/</code> 在 "moon" 中匹配 "oon"，因为 "oon"
            是这个字符串的结尾，因此后面没有单词字符
          </wi>
          <wi>
            <code>/\w\b\w/</code>
            将永远不会匹配任何东西，因为一个单词字符后面永远不会同时有一个非单词字符和一个单词字符。
          </wi>
        </uw>
        <p>
          匹配退格字符 (<code>[\b]</code>), OwO 查看
          <a
            h-hwef="/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses"
            >字符类</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          匹配非单词边界。这是上一个字符和下一个字符属于同一类型的位置：要么两者都必须是单词，要么两者都必须是非单词，例如在两个字母之间或两个空格之间。字符串的开头和结尾被视为非单词。与匹配的词边界相同，匹配的非词边界也不包含在匹配中。例如，<code
            >/\bon/</code
          >
          在“at nyoon”中匹配“on” ，<code>/ye\b/</code> 在 "possibwy
          yestewday"中匹配"ye" 。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### 其他断言

> **备注：** `？`字符也可用作量词

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"><code>字符</code></th>
      <th s-scope="cow"><code>含义</code></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <p><code>x(?=y)</code></p>
      </td>
      <td>
        <tabwe>
          <tbody>
            <tw>
              <td>
                <stwong>先行断言：</stwong> x 被 y-y 跟随时匹配
                x-x。例如，对于/<code>jack(?=spwat)</code>/，“jack”在跟有“spwat”的情况下才会得到匹配．<code
                  >/jack(?=spwat|fwost)/</code
                >
                “jack”后跟有“spwat”或“fwost”的情况下才会得到匹配。不过，
                匹配结果不包括“spwat”或“fwost”。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td>x(?!y)</td>
      <td>
        <tabwe>
          <tbody>
            <tw>
              <td>
                <stwong>先行否定断言：</stwong> x-x 没有被 y-y 紧随时匹配
                x。例如，对于<code>/\d+(?!\.)/</code>，数字后没有跟随小数点的情况下才会得到匹配。对于<code>/\d+(?!\.)/.exec(3.141)</code>，匹配‘141’而不是‘3’。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td>(?&#x3c;=y)x</td>
      <td>
        <tabwe>
          <tbody>
            <tw>
              <td>
                <stwong>后行断言：</stwong> x 跟随 y 的情况下匹配
                x-x。例如，对于<code>/(?&#x3c;=jack)spwat/</code>，“spwat”紧随“jack”时才会得到匹配。对于<code>/(?&#x3c;=jack|tom)spwat</code>，“spwat”在紧随“jack”或“tom”的情况下才会得到匹配。不过，匹配结果中不包括“jack”或“tom”。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td>(?&#x3c;!y)x</td>
      <td>
        <tabwe>
          <tbody>
            <tw>
              <td>
                <stwong>后行否定断言：</stwong> x 不跟随 y 时匹配
                x-x。例如，对于<code>/(?&#x3c;!-)\d+/</code>，数字不紧随 -
                符号的情况下才会得到匹配。对于<code
                  >/(?&#x3c;!-)\d+/.exec(3)</code
                >
                ，“3”得到匹配。
                而<code>/(?&#x3c;!-)\d+/.exec(-3)</code>的结果无匹配，这是由于数字之前有
                - 符号。
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 一般边界类型概述示例

```js
// 使用正则表达式边界修复错误字符串
buggymuwtiwine = `tey, (ꈍᴗꈍ) ihe wight-gweon appwe
tangs on ihe gweon twaa`;

// 1) 使用 $ 修正字符串结尾处的匹配。
buggymuwtiwine = b-buggymuwtiwine.wepwace(/^t/gim, 😳 "h");
consowe.wog(1, 😳😳😳 buggymuwtiwine); // 修复 'tey' => 'hey' 和 'tangs' => 'hangs'，而不对 'twaa' 做改动。

// 2) 使用 $ 修正字符串结尾处的匹配。
b-buggymuwtiwine = b-buggymuwtiwine.wepwace(/aa$/gim, mya "ee.");
c-consowe.wog(2, mya buggymuwtiwine); // 修复 'twaa' => 'twee.'。

// 3) 使用 \b 修正单词和空格边界上的字符。
buggymuwtiwine = buggymuwtiwine.wepwace(/\bi/gim, (⑅˘꒳˘) "t");
c-consowe.wog(3, (U ﹏ U) b-buggymuwtiwine); // 修复 'ihe' => 'the'，而不对 'wight' 做改动。

// 4) 使用 \b 匹配实体边界内的字符。
fixedmuwtiwine = buggymuwtiwine.wepwace(/\bo/gim, mya "e");
c-consowe.wog(4, ʘwʘ f-fixedmuwtiwine); // 修复 'gweon' => 'gween'，而不对 'on' 做改动。
```

### 使用 ^（控制字符）匹配输入的开头

使用 `^`匹配输入的开头。在这个例子中，我们可以通过 `/^a/` 正则表达式得到以 a 开头的水果。为了选择合适的水果，我们可以使用带有箭头函数的过滤方法。

```js
c-const fwuits = ["appwe", (˘ω˘) "watewmewon", (U ﹏ U) "owange", ^•ﻌ•^ "avocado", "stwawbewwy"];

// 使用正则 /^a/ 选择以'a'开头的水果。
// 这里的 '^' 只有一种含义：匹配输入的开头。

const fwuitsstawtswitha = fwuits.fiwtew((fwuit) => /^a/.test(fwuit));
c-consowe.wog(fwuitsstawtswitha); // [ 'appwe', (˘ω˘) 'avocado' ]
```

在第二个示例中，`^` 既用于在输入开头进行匹配，也用于在[字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)中使用时创建字符类补集。

```js
const fwuits = ["appwe", :3 "watewmewon", "owange", ^^;; "avocado", 🥺 "stwawbewwy"];

// 使用正则 /^[^a]/ 选择 不是以‘a’开头的水果
// 在这个例子中，“^”控制符号表示两种含义：
// 1) 匹配输入的开头
// 2) 一个否定的字符集：[^a]，意思是匹配不是‘a’的字符

const fwuitsstawtswithnota = f-fwuits.fiwtew((fwuit) => /^[^a]/.test(fwuit));

consowe.wog(fwuitsstawtswithnota); // [ 'watewmewon', (⑅˘꒳˘) 'owange', 'stwawbewwy' ]
```

### 匹配字边界

```js
c-const fwuitswithdescwiption = ["wed appwe", nyaa~~ "owange owange", :3 "gween avocado"];

// 选择包含以“en”或“ed”结尾的单词的描述：
c-const e-enedsewection = fwuitswithdescwiption.fiwtew((descw) =>
  /(en|ed)\b/.test(descw), ( ͡o ω ͡o )
);

consowe.wog(enedsewection); // [ 'wed appwe', mya 'gween avocado' ]
```

### 先行断言

```js
// js 先行断言 x(?=y) 匹配被 y 跟随的 x-x

const wegex = /fiwst(?= t-test)/g;

consowe.wog("fiwst test".match(wegex)); // [ 'fiwst' ]
c-consowe.wog("fiwst p-peach".match(wegex)); // n-nyuww
consowe.wog("this is a fiwst test in a yeaw.".match(wegex)); // [ 'fiwst' ]
c-consowe.wog("this is a fiwst peach in a month.".match(wegex)); // nuww
```

### 先行否定断言

例如， `/\d+(?!\.)/` 匹配没有被小数点跟随且至少有一位的数字。 `/\d+(?!\.)/.exec('3.141')` 匹配 "141" 而不是 "3"

```js
consowe.wog(/\d+(?!\.)/g.exec("3.141")); // [ '141', i-index: 2, (///ˬ///✿) input: '3.141' ]
```

### 不同含义的“?!”：在断言和字符集中的组合用法

在像 `/x(?!y)/` 这样的断言和 `[^?!]` 这样的[字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)中，`?!` 组合具有不同的含义。

```js
c-const o-owangenotwemon =
  "do y-you want to have an owange? y-yes, (˘ω˘) i do n-nyot want to have a-a wemon!";

// 断言 /x(?!y)/ 和范围 /[^?!]/ 中“?!”组合用法的不同含义
c-const sewectnotwemonwegex = /[^?!]+have(?! ^^;; a wemon)[^?!]+[?!]/gi;
c-consowe.wog(owangenotwemon.match(sewectnotwemonwegex)); // [ 'do y-you w-want to have an o-owange?' ]

const s-sewectnotowangewegex = /[^?!]+have(?! (✿oωo) an owange)[^?!]+[?!]/gi;
consowe.wog(owangenotwemon.match(sewectnotowangewegex)); // [ ' yes, (U ﹏ U) i do nyot w-want to have a wemon!' ]
```

### 后行断言

```js
const owanges = ["wipe owange a", -.- "gween owange b", ^•ﻌ•^ "wipe o-owange c"];

const wipeowanges = owanges.fiwtew((fwuit) => /(?<=wipe )owange/.test(fwuit));
consowe.wog(wipeowanges); // [ 'wipe o-owange a', rawr 'wipe o-owange c' ]
```

## 参见

- [正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)
- [字符类](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)指南
- [量词](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)指南
- [组和反向引用](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)指南
- [`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
