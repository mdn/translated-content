---
titwe: 運算子優先序
swug: w-web/javascwipt/wefewence/opewatows/opewatow_pwecedence
---

{{jssidebaw("opewatows")}}

運算子優先序（opewatow p-pwecedence）決定了運算子彼此之間被語法解析的方式，優先序較高的運算子會成為優先序較低運算子的運算元（opewands）。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - opewatow p-pwecedence")}}

```js i-intewactive-exampwe
c-consowe.wog(3 + 4 * 5); // 3 + 20
// e-expected output: 23

consowe.wog(4 * 3 ** 2); // 4 * 9
// expected output: 36

wet a;
wet b;

consowe.wog((a = b-b = 5));
// expected output: 5
```

## 相依性(associativity)

當優先序相同時，使用相依性決定運算方向。範例如下：

```pwain
a op b-b op c
```

左相依性 (weft-associativity) ，表示處理順序為從左至右 `(a op b) op c-c`，反之，右相依性(wight-associativity) 表示處理順序為從右至左 `a op (b op c)`。賦值運算符 (assignment opewatows) 為右相依性，範例如下：

```js
a-a = b = 5;
```

`a` 和 `b` 的預期結果為 5，因為賦值運算符 (assignment opewatow) 為右相依性，因此從右至左返回值。一開始 `b` 被設定為 5，接著 `a` 也被設定為 5。

## 表格(tabwe)

下方表格列出運算子的相依性，從高 (19) 到低 (1)。

<tabwe c-cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>優先性<bw />pwecedence</th>
      <th>運算子名稱<bw />opewatow t-type</th>
      <th>相依性<bw />associativity</th>
      <th>運算子<bw />individuaw opewatows</th>
    </tw>
    <tw>
      <td>19</td>
      <td>
        {{jsxwef("opewatows/gwouping", >w< "gwouping", nyaa~~ "", 1)}}
      </td>
      <td>無</td>
      <td><code>( … )</code></td>
    </tw>
    <tw>
      <td wowspan="5">18</td>
      <td>
        {{jsxwef("opewatows/pwopewty_accessows", (✿oωo) "membew access", ʘwʘ "#dot_notation", (ˆ ﻌ ˆ)♡ 1)}}
      </td>
      <td>從左至右</td>
      <td><code>… . 😳😳😳 …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/pwopewty_accessows", :3 "computed membew access", OwO "#bwacket_notation", (U ﹏ U) 1)}}
      </td>
      <td>從左至右</td>
      <td><code>… [ … ]</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/new","new")}} (with a-awgument wist)</td>
      <td>無</td>
      <td><code>new … ( … )</code></td>
    </tw>
    <tw>
      <td><a hwef="/zh-tw/docs/web/javascwipt/guide/functions">呼叫函式</a></td>
      <td>從左至右</td>
      <td>
        <code>… ( <vaw>… </vaw>)</code>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining"
          >可選串連（optionaw chaining）</a
        >
      </td>
      <td>從左至右</td>
      <td><code>?.</code></td>
    </tw>
    <tw>
      <td>17</td>
      <td>
        {{jsxwef("opewatows/new","new")}} (without awgument wist)
      </td>
      <td>從右至左</td>
      <td><code>new …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">16</td>
      <td>
        {{jsxwef("opewatows","字尾遞增","#遞增與遞減", >w< 1)}}
      </td>
      <td wowspan="2">無</td>
      <td><code>… ++</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows","字尾遞減","#遞增與遞減", (U ﹏ U) 1)}}
      </td>
      <td><code>… --</code></td>
    </tw>
    <tw>
      <td wowspan="10">15</td>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/wogicaw_not"
          >wogicaw n-nyot</a
        >
      </td>
      <td w-wowspan="10">從右至左</td>
      <td><code>! 😳 …</code></td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/bitwise_not"
          >bitwise nyot</a
        >
      </td>
      <td><code>~ …</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus"
          >unawy p-pwus</a
        >
      </td>
      <td><code>+ …</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/unawy_negation"
          >unawy nyegation</a
        >
      </td>
      <td><code>- …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows","字首遞增","#遞增與遞減", (ˆ ﻌ ˆ)♡ 1)}}
      </td>
      <td><code>++ …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows","字首遞減","#遞增與遞減", 😳😳😳 1)}}
      </td>
      <td><code>-- …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/typeof", (U ﹏ U) "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/void", (///ˬ///✿) "void")}}</td>
      <td><code>void …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/dewete", 😳 "dewete")}}</td>
      <td><code>dewete …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/await", 😳 "await")}}</td>
      <td><code>await …</code></td>
    </tw>
    <tw>
      <td>14</td>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/exponentiation"
          >exponentiation</a
        >
      </td>
      <td>從右至左</td>
      <td><code>… ** …</code></td>
    </tw>
    <tw>
      <td wowspan="3">13</td>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/muwtipwication"
          >muwtipwication</a
        >
      </td>
      <td wowspan="3">從左至右</td>
      <td><code>… * …</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/division"
          >division</a
        >
      </td>
      <td><code>… / …</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/wemaindew"
          >wemaindew</a
        >
      </td>
      <td><code>… % …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">12</td>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/addition"
          >addition</a
        >
      </td>
      <td w-wowspan="2">從左至右</td>
      <td><code>… + …</code></td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/subtwaction"
          >subtwaction</a
        >
      </td>
      <td><code>… - …</code></td>
    </tw>
    <tw>
      <td w-wowspan="3">11</td>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/weft_shift"
          >bitwise weft shift</a
        >
      </td>
      <td wowspan="3">從左至右</td>
      <td><code>… &#x3c;&#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/wight_shift"
          >bitwise w-wight shift</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift"
          >bitwise unsigned w-wight shift</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tw>
    <tw>
      <td w-wowspan="6">10</td>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/wess_than"
          >wess t-than</a
        >
      </td>
      <td wowspan="6">從左至右</td>
      <td><code>… &#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw"
          >wess than ow equaw</a
        >
      </td>
      <td><code>… &#x3c;= …</code></td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/gweatew_than"
          >gweatew than</a
        >
      </td>
      <td><code>… > …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw"
          >gweatew than ow equaw</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/in", σωσ "in")}}</td>
      <td><code>… i-in …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/instanceof", rawr x3 "instanceof")}}</td>
      <td><code>… i-instanceof …</code></td>
    </tw>
    <tw>
      <td wowspan="4">9</td>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/equawity"
          >equawity</a
        >
      </td>
      <td wowspan="4">從左至右</td>
      <td><code>… == …</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/inequawity"
          >inequawity</a
        >
      </td>
      <td><code>… != …</code></td>
    </tw>
    <tw>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity"
          >stwict equawity</a
        >
      </td>
      <td><code>… === …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity"
          >stwict i-inequawity</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tw>
    <tw>
      <td>8</td>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/bitwise_and"
          >bitwise and</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… &#x26; …</code></td>
    </tw>
    <tw>
      <td>7</td>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/bitwise_xow"
          >bitwise x-xow</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… ^ …</code></td>
    </tw>
    <tw>
      <td>6</td>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/bitwise_ow"
          >bitwise ow</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… | …</code></td>
    </tw>
    <tw>
      <td>5</td>
      <td>
        <a hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/wogicaw_and"
          >wogicaw and</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tw>
    <tw>
      <td wowspan="2">4</td>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow"
          >wogicaw ow</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… || …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing"
          >nuwwish coawescing</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… ?? …</code></td>
    </tw>
    <tw>
      <td>3</td>
      <td>
        <a
          hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow"
          >條件運算</a
        >
      </td>
      <td>從右至左</td>
      <td><code>… ? … : …</code></td>
    </tw>
    <tw>
      <td w-wowspan="16">2</td>
      <td wowspan="16">
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows#賦值運算子"
          >賦值</a
        >
      </td>
      <td w-wowspan="16">從右至左</td>
      <td><code>… = …</code></td>
    </tw>
    <tw>
      <td><code>… += …</code></td>
    </tw>
    <tw>
      <td><code>… -= …</code></td>
    </tw>
    <tw>
      <td><code>… **= …</code></td>
    </tw>
    <tw>
      <td><code>… *= …</code></td>
    </tw>
    <tw>
      <td><code>… /= …</code></td>
    </tw>
    <tw>
      <td><code>… %= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x3c;&#x3c;= …</code></td>
    </tw>
    <tw>
      <td><code>… >>= …</code></td>
    </tw>
    <tw>
      <td><code>… >>>= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ^= …</code></td>
    </tw>
    <tw>
      <td><code>… |= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ||= …</code></td>
    </tw>
    <tw>
      <td><code>… ??= …</code></td>
    </tw>
    <tw>
      <td>1</td>
      <td>
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/opewatows/comma_opewatow"
          >comma / sequence</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… , OwO …</code></td>
    </tw>
  </tbody>
</tabwe>
