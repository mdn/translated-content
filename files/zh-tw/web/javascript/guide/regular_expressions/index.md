---
title: 正規表達式
slug: Web/JavaScript/Guide/Regular_expressions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

正規表達式是被用來匹配字串中字元組合的模式。在 JavaScript 中，正規表達式也是物件，這些模式在 {{jsxref("RegExp")}} 的 {{jsxref("RegExp.exec", "exec")}} 和 {{jsxref("RegExp.test", "test")}} 方法中，以及 {{jsxref("String")}} 的 {{jsxref("String.match", "match")}}、{{jsxref("String.replace", "replace")}}、{{jsxref("String.search", "search")}}、{{jsxref("String.split", "split")}} 等方法中被運用。這一章節將解說 JavaScript 中的正規表達式。

## 建立正規表達式

您可透過下列兩種方法去創建一條正規表達式：

使用正規表達式字面值（regular expression literal），包含兩個 `/` 字元之間的模式如下：

```js
var re = /ab+c/;
```

正規表達式字面值在 script 載入時會被編譯，當正規表達式為定值時，使用此方法可獲得較佳效能。

或呼叫 {{jsxref("RegExp")}} 物件的建構函式，如下：

```js
var re = new RegExp("ab+c");
```

使用建構子函數供即時編譯正則表達式，當模式會異動、事先未知匹配模式、或者您將從其他地方取得時，使用建構子函數將較為合適。

## 撰寫正規表達模式

正規表達模式由數個簡易字元組成，例如 `/abc/`，或是由簡易字元及特殊符號組合而成，例如 `/ab*c/`、`/Chapter (\d+)\.\d*/ )`。最後一個範例用到了括號，這在正規表達式中用作記憶組，使用括號的匹配將會被留到後面使用，在[使用帶括號的配對子字串](#Using_Parenthesized_Substring_Matches)有更多解釋。

### 使用簡易模式

簡易的模式是有你找到的直接匹配所構成的。比如：`/abc/` 這個模式就匹配了在一個字符串中，僅僅字符 `'abc'` 同時出現並按照這個順序。這兩個句子中「_Hi, do you know your abc's?_」和「_The latest airplane designs evolved from slabcraft._」就會匹配成功。在上面的兩個實例中，匹配的是子字符串 'abc'。在字符串中的 "Grab crab"('ab c') 中將不會被匹配，因為它不包含任何的 'abc' 字符串。

### 使用特殊字元

當你需要搜尋一個比直接匹配需要更多條件的匹配，比如搜尋一或多個 'b'，或者搜尋空格，那麼這個模式將要包含特殊字符。例如： 模式 `/ab*c/` 匹配了一個單獨的 'a' 後面跟了零或多個 'b'（\* 的意思是前面一項出現了零或多個），且後面跟著 'c' 的任何字符組合。在字符串 "cbbabbbbcdebc" 中，這個模式匹配了子字符串 "abbbbc"。

下面的表格列出了在正則表達式中可以利用的特殊字符完整列表以及描述。

| 字元                                          | 解說                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`\`](#special-backslash)                     | 反斜線放在非特殊符號前面，使非特殊符號不會被逐字譯出，代表特殊作用。 例如：'b' 如果沒有 '\\' 在前頭，功能是找出小寫 b；若改為 '\b' 則代表的是邊界功能，block 用意。 /\bter\b/.test("interest") //false /\bter\b/.test("in ter est") //true `/a*/` 找出 0 個或是 1 個以上的 a；而 /a\\\*/ 找出 'a\*' 這個字串 /aaaa\*/g.test("caaady") //true /a\\\*/.test("caaady") //false '\\' 也能使自身表現出來，表現 '\\' ，必須以 '\\\\' 表達。 /\[\\\\]/.test(">\\\\<") //true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`^`](#special-caret)                         | 匹配輸入的開頭，如果 multiline flag 被設為 true，則會匹配換行字元後。例如：`/^A/` 不會匹配「an A」的 A，但會匹配「An E」中的 A。「`^`」出現在字元集模式的字首中有不同的意思，詳見[補字元集](#special-negated-character-set)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`$`](#special-dollar)                        | 匹配輸入的結尾，如果 multiline flag 被設為 true，則會匹配換行字元。例如：`/t$/` 不會匹配「eater」中的 t，卻會匹配「eat」中的 t。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`*`](#special-asterisk)                      | 匹配前一字元 0 至多次。 下面舉例要求基本 'aaaa' ，'a\*' 後面有 0 個或多個 a 的意思 /aaaaa\*/g.test("caaady") //false 例如：`/bo*/` 匹配「A ghost booooed」中的 boooo、「A bird warbled」中的 b，但在「A goat grunted」中不會匹配任何字串。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`+`](#special-plus)                          | 匹配前一字元 1 至多次，等同於 `{1,}`。例如：`/a+/` 匹配「candy」中的 a，以及所有「caaaaaaandy」中的 a。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`?`](#special-questionmark)                  | 匹配前一字元 0 至 1 次，等同於 `{0,1}`。例如：`/e?le?/` 匹配「angel」中的 el、「angle」中的 le、以及「oslo」中的 l。如果是使用在 `*`、`+`、`?` 或 `{}` 等 quantifier 之後，將會使這些 quantifier non-greedy（也就是儘可能匹配最少的字元），與此相對的是 greedy（匹配儘可能多的字元）。例如：在「123abc」中應用 `/\d+/` 可匹配「123」，但使用 `/\d+?/` 在相同字串上只能匹配「1」。 Also used in lookahead assertions, as described in the `x(?=y)` and `x(?!y)` entries of this table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`.`](#special-dot)                           | （小數點）匹配除了換行符號之外的單一字元。例如：/.n/ 匹配「nay, an apple is on the tree」中的 an 和 on，但在「nay」中沒有匹配。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`(x)`](#special-capturing-parentheses)       | Capturing Parentheses 匹配 'x' 並記住此次的匹配，如下面的範例所示。在 正則表達示 /(foo) (bar) \1 \2/ 中的 (foo) 與 (bar) 可匹配了 "foo bar foo bar" 這段文字中的前兩個字，而 \1 與 \2 則匹配了後面的兩個字。注意， \1, \2, ..., \n 代表的就是前面的 pattern，以本範例來說，/(foo) (bar) \1 \2/ 等同於 /(foo) (bar) (foo) (bar)/。用於取代(replace)的話，則是用 $1, $2,...,$n。如 'bar boo'.replace(/(...) (...)/, '$2 $1'). `$&` 表示已匹配的字串                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`(?:x)`](#special-non-capturing-parentheses) | *Non-Capturing Parentheses*找出 'x'，這動作不會記憶 `()`為 group 的意思，檢查時會再 wrap 一次，若有 `g` flag 會無效， `?:` 代表只要 group 就好，不要 wrap 有無 `()` 差別 ？ `'foo'.match(/(foo)/)` `// ['foo', 'foo', index: 0, input: 'foo' ] 'foo'.match(/foo/) // [ 'foo', index: 0, input: 'foo' ]`有無`?:`差別？ `'foo'.match(/(foo){1,2}/) // [ 'foo', 'foo', index: 0, input: 'foo' ] 'foo'.match(/(?:foo){1,2}/) [ 'foo', index: 0, input: 'foo' ]` 連`()`都沒有，則`{1,2}`只是適用在`foo`的第二個`o`的條件而已。更多資訊詳見 [Using parentheses](/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions#Using_parentheses) 。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`x(?=y)`](#special-lookahead)                | 符合'x'，且後接的是'y'。'y'為'x'存在的意義。 例如：`/Jack(?=Sprat)/，`在後面是 Sprat 的存在下，Jack 才有意義。 `/Jack(?=Sprat\|Frost)/`後面是 Sprat「或者是」Frost 的存在下，Jack 才有意義。但我們要找的目標是 Jack，後面的條件都只是 filter/條件的功能而已。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`x(?!y)`](#special-negated-look-ahead)       | 符合'x'，且後接的不是'y'。'y'為否定'x'存在的意義，後面不行前功盡棄(negated lookahead)。 例如： `/\d+(?!\.)/` ，要找一個或多個數字時，在後面接的不是「點」的情況下成立。 `var result = /\d+(?!\.)/.exec("3.141")` ， result 執行出來為\[ '141', index: 2, input: '3.141']， index:2，代表 141 從 index = 2 開始。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`x\|y`](#special-or)                         | 符合「x」或「y」。舉例來說，`/green\|red/` 的話，會匹配 `"green apple"` 中的 `"green"` 以及 `"red apple."` 的 `"red"` 。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`{n}`](#special-quantifier)                  | 規定符號確切發生的次數，n 為正整數例如：`/a{2}/`無法在 "candy" 找到、但 "caandy" 行；若字串擁有 2 個以上 "caaandy" 還是只會認前面 2 個。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`{n,m}`](#special-quantifier-range)          | 搜尋條件：n 為至少、m 為至多，其 n、m 皆為正整數。若把 m 設定為 0，則為 Invalid regular expression。例如：`/a{1,3}/`無法在 "cndy" 匹配到；而在 "candy" 中的第 1 個"a"符合；在 "caaaaaaandy" 中的前 3 個 "aaa" 符合，雖然此串有許多 a，但只認前面 3 個。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`[xyz]`](#special-character-set)             | 字元的集合。此格式會匹配中括號內所有字元, including [escape sequences](/zh-TW/docs/JavaScript/Guide/Values,_variables,_and_literals#Unicode_escape_sequences)。特殊字元，例如點（`.`） 和米字號（`*`），在字元集合中不具特殊意義，所以不需轉換。若要設一個字元範圍的集合，可以使用橫線 `"-"` ，如下例所示： `[a-d]` 等同於 `[abcd]。`會匹配 "brisket" 的 "b" 、"city" 的 'c' ……等。 而`/[a-z.]+/` 和 `/[\w.]+/` 均可匹配字串 "test.i.ng" 。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`[^xyz]`](#special-negated-character-set)    | bracket 中寫入的字元將被否定，匹配非出現在 bracket 中的符號。 可用 '-' 來界定字元的範圍。一般直接表達的符號都可以使用這種方式。`[^abc]`可以寫作\[^`a-c]`. "brisket" 中找到 'r' 、"chop."中找到 'h'。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`[\b]`](#special-backspace)                  | 吻合倒退字元 (U+0008). (不會跟 \b 混淆)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`\b`](#special-word-boundary)                | 吻合文字邊界。A word boundary matches the position where a word character is not followed or preceded by another word-character. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero. (Not to be confused with `[\b]`.)Examples: `/\bm/` matches the 'm' in "moon" ; `/oo\b/` does not match the 'oo' in "moon", because 'oo' is followed by 'n' which is a word character; `/oon\b/` matches the 'oon' in "moon", because 'oon' is the end of the string, thus not followed by a word character; `/\w\b\w/` will never match anything, because a word character can never be followed by both a non-word and a word character.**Note:** JavaScript's regular expression engine defines a [specific set of characters](http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6) to be "word" characters. Any character not in that set is considered a word break. This set of characters is fairly limited: it consists solely of the Roman alphabet in both upper- and lower-case, decimal digits, and the underscore character. Accented characters, such as "é" or "ü" are, unfortunately, treated as word breaks. |
| [`\B`](#special-non-word-boundary)            | 吻合非文字邊界。This matches a position where the previous and next character are of the same type: Either both must be words, or both must be non-words. The beginning and end of a string are considered non-words.For example, `/\B../` matches 'oo' in "noonday", and `/y\B./` matches 'ye' in "possibly yesterday."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`\cX`](#special-control)                     | Where _X_ is a character ranging from A to Z. Matches a control character in a string.For example, `/\cM/` matches control-M (U+000D) in a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`\d`](#special-digit)                        | 吻合數字，寫法等同於 `[0-9] 。`例如：`/\d/` 或 `/[0-9]/` 在 "B2 is the suite number." 中找到 '2'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`\D`](#special-non-digit)                    | 吻合非數字，寫法等同於 `[^0-9]。`例如：`/\D/` 或`/[^0-9]/` 在 "B2 is the suite number." 中找到 'B' 。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`\f`](#special-form-feed)                    | Matches a form feed (U+000C).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`\n`](#special-line-feed)                    | Matches a line feed (U+000A).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`\r`](#special-carriage-return)              | Matches a carriage return (U+000D).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`\s`](#special-white-space)                  | Matches a single white space character, including space, tab, form feed, line feed. Equivalent to `[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`.For example, `/\s\w*/` matches ' bar' in "foo bar."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`\S`](#special-non-white-space)              | Matches a single character other than white space. Equivalent to `[^ \f\n\r\t\v\u00a0\\u1680u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]`.For example, `/\S\w*/` matches 'foo' in "foo bar."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`\t`](#special-tab)                          | Matches a tab (U+0009).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`\v`](#special-vertical-tab)                 | Matches a vertical tab (U+000B).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`\w`](#special-word)                         | 包含數字字母與底線，等同於`[A-Za-z0-9_]`。例如： `/\w/` 符合 'apple'中的 'a' 、'$5.28 中的 '5' 以及 '3D' 中的 '3'。For example, `/\w/` matches 'a' in "apple," '5' in "$5.28," and '3' in "3D."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`\W`](#special-non-word)                     | 包含"非"數字字母與底線，等同於`[^A-Za-z0-9_]`。例如： `/\W/` 或是 `/[^A-Za-z0-9_]/` 符合 "50%." 中的 '%'For example, `/\W/` or `/[^A-Za-z0-9_]/` matches '%' in "50%."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`\n`](#special-backreference)                | 其中 _n_ 是一個正整數，表示第 _n_ 個括號中的子字串匹配（包含括號中的所有的字串匹配）例如： `/apple(,)\sorange\1/` 符合 "apple, orange, cherry, peach." 的 'apple, orange,' 。（ \`\1\` 表示第一個 partten ，也就是 \`(,)\`）For example, `/apple(,)\sorange\1/` matches 'apple, orange,' in "apple, orange, cherry, peach."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`\0`](#special-null)                         | Matches a NULL (U+0000) character. Do not follow this with another digit, because `\0<digits>` is an octal [escape sequence](/zh-TW/docs/JavaScript/Guide/Values,_variables,_and_literals#Unicode_escape_sequences). Instead use `\x00`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`\xhh`](#special-hex-escape)                 | Matches the character with the code hh (two hexadecimal digits)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`\uhhhh`](#special-unicode-escape)           | Matches the character with the code hhhh (four hexadecimal digits).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

Escaping user input that is to be treated as a literal string within a regular expression—that would otherwise be mistaken for a special character—can be accomplished by simple replacement:

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
```

The g after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches. It is explained in detail below in [Advanced Searching With Flags](/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags).

### 使用括號

Parentheses around any part of the regular expression pattern causes that part of the matched substring to be remembered. Once remembered, the substring can be recalled for other use, as described in [Using Parenthesized Substring Matches](#Using_parenthesized_substring_matches).

For example, the pattern `/Chapter (\d+)\.\d*/` illustrates additional escaped and special characters and indicates that part of the pattern should be remembered. It matches precisely the characters 'Chapter ' followed by one or more numeric characters (`\d` means any numeric character and `+` means 1 or more times), followed by a decimal point (which in itself is a special character; preceding the decimal point with \ means the pattern must look for the literal character '.'), followed by any numeric character 0 or more times (`\d` means numeric character, `*` means 0 or more times). In addition, parentheses are used to remember the first matched numeric characters.

This pattern is found in "Open Chapter 4.3, paragraph 6" and '4' is remembered. The pattern is not found in "Chapter 3 and 4", because that string does not have a period after the '3'.

To match a substring without causing the matched part to be remembered, within the parentheses preface the pattern with `?:`. For example, `(?:\d+)` matches one or more numeric characters but does not remember the matched characters.

## 運用正規表達式

Regular expressions are used with the `RegExp` methods `test` and `exec` and with the `String` methods `match`, `replace`, `search`, and `split`. These methods are explained in detail in the [JavaScript reference](/zh-TW/docs/Web/JavaScript/Reference).

| Method                                  | Description                                                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.exec", "exec")}}       | A `RegExp` method that executes a search for a match in a string. It returns an array of information or null on a mismatch.        |
| {{jsxref("RegExp.test", "test")}}       | A `RegExp` method that tests for a match in a string. It returns true or false.                                                    |
| {{jsxref("String.match", "match")}}     | A `String` method that executes a search for a match in a string. It returns an array of information or null on a mismatch.        |
| {{jsxref("String.search", "search")}}   | A `String` method that tests for a match in a string. It returns the index of the match, or -1 if the search fails.                |
| {{jsxref("String.replace", "replace")}} | A `String` method that executes a search for a match in a string, and replaces the matched substring with a replacement substring. |
| {{jsxref("String.split", "split")}}     | A `String` method that uses a regular expression or a fixed string to break a string into an array of substrings.                  |

When you want to know whether a pattern is found in a string, use the `test` or `search` method; for more information (but slower execution) use the `exec` or `match` methods. If you use `exec` or `match` and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, `RegExp`. If the match fails, the `exec` method returns `null` (which coerces to `false`).

In the following example, the script uses the `exec` method to find a match in a string.

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

If you do not need to access the properties of the regular expression, an alternative way of creating `myArray` is with this script:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz"); // similar to "cdbbdbsbz".match(/d(b+)d/g); however,
// the latter outputs Array [ "dbbd" ], while
// /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ "dbbd", "bb" ].
// See below for further info (CTRL+F "The behavior associated with the".)
```

If you want to construct the regular expression from a string, yet another alternative is this script:

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

With these scripts, the match succeeds and returns the array and updates the properties shown in the following table.

<table>
  <caption>
    Results of regular expression execution.
  </caption>
  <thead>
    <tr>
      <th scope="col">物件</th>
      <th scope="col">Property or index</th>
      <th scope="col">說明</th>
      <th scope="col">範例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>The matched string and all remembered substrings.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>The 0-based index of the match in the input string.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>The original string.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>The last matched characters.</td>
      <td><code>"dbbd"</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        The index at which to start the next match. (This property is set only
        if the regular expression uses the g option, described in
        <a href="#Advanced_searching_with_flags"
          >Advanced Searching With Flags</a
        >.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        The text of the pattern. Updated at the time that the regular expression
        is created, not executed.
      </td>
      <td><code>"d(b+)d"</code></td>
    </tr>
  </tbody>
</table>

As shown in the second form of this example, you can use a regular expression created with an object initializer without assigning it to a variable. If you do, however, every occurrence is a new regular expression. For this reason, if you use this form without assigning it to a variable, you cannot subsequently access the properties of that regular expression. For example, assume you have this script:

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + myRe.lastIndex);

// "The value of lastIndex is 5"
```

However, if you have this script:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);

// "The value of lastIndex is 0"
```

The occurrences of `/d(b+)d/g` in the two statements are different regular expression objects and hence have different values for their `lastIndex` property. If you need to access the properties of a regular expression created with an object initializer, you should first assign it to a variable.

### Using Parenthesized Substring Matches

Including parentheses in a regular expression pattern causes the corresponding submatch to be remembered. For example, `/a(b)c/` matches the characters 'abc' and remembers 'b'. To recall these parenthesized substring matches, use the `Array` elements `[1]`, ..., `[n]`.

The number of possible parenthesized substrings is unlimited. The returned array holds all that were found. The following examples illustrate how to use parenthesized substring matches.

下面這個 script 以 {{jsxref("String.replace", "replace()")}} 方法移轉字串位置。對於要被置換的文字內容，以 `$1` 和 `$2` 來代表先前 re 這個變數裡面，找出來綑綁且照順序來表示兩個子字串。

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);

// "Smith, John"
```

### Advanced Searching With Flags

Regular expressions have five optional flags that allow for global and case insensitive searching. These flags can be used separately or together in any order, and are included as part of the regular expression.

| Flag | Description                                                                                                                             |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `g`  | Global search.                                                                                                                          |
| i    | Case-insensitive search.                                                                                                                |
| m    | Multi-line search.                                                                                                                      |
| u    | unicode; treat a pattern as a sequence of unicode code points                                                                           |
| y    | Perform a "sticky" search that matches starting at the current position in the target string. See {{jsxref("RegExp.sticky", "sticky")}} |

To include a flag with the regular expression, use this syntax:

```js
var re = /pattern/flags;
```

or

```js
var re = new RegExp("pattern", "flags");
```

Note that the flags are an integral part of a regular expression. They cannot be added or removed later.

For example, `re = /\w+\s/g` creates a regular expression that looks for one or more characters followed by a space, and it looks for this combination throughout the string.

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

You could replace the line:

```js
var re = /\w+\s/g;
```

with:

```js
var re = new RegExp("\\w+\\s", "g");
```

and get the same result.

The behavior associated with the '**`g`**' flag is different when the `.exec()` method is used. (The roles of "class" and "argument" get reversed: In the case of `.match()`, the string class (or data type) owns the method and the regular expression is just an argument, while in the case of `.exec()`, it is the regular expression that owns the method, with the string being the argument. Contrast _`str.match(re)`_ versus _`re.exec(str)`_.) The '**`g`**' flag is used with the **`.exec()`** method to get iterative progression.

```js
var xArray;
while ((xArray = re.exec(str))) console.log(xArray);
// produces:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```

The `m` flag is used to specify that a multiline input string should be treated as multiple lines. If the `m` flag is used, `^` and `$` match at the start or end of any line within the input string instead of the start or end of the entire string.

## 範例

The following examples show some uses of regular expressions.

### Changing the order in an input string

The following example illustrates the formation of regular expressions and the use of `string.split()` and `string.replace()`. It cleans a roughly formatted input string containing names (first name last) separated by blanks, tabs and exactly one semicolon. Finally, it reverses the name order (last name first) and sorts the list.

```js
// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = "Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
var pattern = /\s*;\s*/;

// Break the string into pieces separated by the pattern above and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters then spaces then characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.
pattern = /(\w+)\s+(\w+)/;

// Below is the new array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—the second memorized portion
// followed by a comma, a space and the first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// Display the new array.
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

// Sort by last name, then display the sorted array.
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
```

### 使用特殊字元驗證輸入

In the following example, the user is expected to enter a phone number. When the user presses the "Check" button, the script checks the validity of the number. If the number is valid (matches the character sequence specified by the regular expression), the script shows a message thanking the user and confirming the number. If the number is invalid, the script informs the user that the phone number is not valid.

Within non-capturing parentheses `(?:` , the regular expression looks for three numeric characters `\d{3}` OR `|` a left parenthesis `\(` followed by three digits `\d{3}`, followed by a close parenthesis `\)`, (end non-capturing parenthesis `)`), followed by one dash, forward slash, or decimal point and when found, remember the character `([-\/\.])`, followed by three digits `\d{3}`, followed by the remembered match of a dash, forward slash, or decimal point `\1`, followed by four digits `\d{4}`.

The `Change` event activated when the user presses Enter sets the value of `RegExp.input`.

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
