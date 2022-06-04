---
title: 演算子の優先順位
slug: Web/JavaScript/Reference/Operators/Operator_Precedence
tags:
  - ガイド
  - JavaScript
  - 優先順位
translation_of: Web/JavaScript/Reference/Operators/Operator_Precedence
---
{{jsSidebar("Operators")}}

**演算子の優先順位**は、演算子が互いにどのように解釈されるかを決定します。優先度の高い演算子は、優先度の低い演算子のオペランドになります。

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## 優先度と結合性

以下の表現で記述できる式を考えてみましょう。なお、`OP1` と `OP2` は演算子に置き換わります。

```js
a OP1 b OP2 c
```

`OP1` と `OP2` の優先順位（下記の一覧表を参照）が異なる場合は、優先順位の高い演算子が先に実行され、結合性は関係ありません。コードの中で加算が先に書かれているにもかかわらず、乗算の方が加算よりも優先順位が高く、先に実行されていることを確認してください。

```js
console.log(3 + 10 * 2);   // 23 を出力
console.log(3 + (10 * 2)); // 括弧の優先順位が高いので、23 を出力
console.log((3 + 10) * 2); // 括弧が順位を変更するので 26 を出力
```

左結合（左から右）は `(a OP1 b) OP2 c` のように処理されることであり、右結合（右から左）は `a OP1 (b OP2 c)` のように解釈されることです。代入演算子は右結合なので、このように書くことができます。

```js
a = b = 5; // a = (b = 5); と書いたのと同じ
```

これで、`a` と `b` が 5 の値を得るという期待通りの結果を得ることができます。これは代入演算子が代入した値を返すためです。まず `b` に 5 が設定されます。そして `a` にも、代入演算子の右オペランドである `b = 5` が返す 5 が設定されるのです。

他の例として、べき乗演算子だけが右結合性を持ちますが、他の算術演算子は左結合性を持ちます。興味深いのは、結合性や優先順位に関係なく、評価の順序は常に左から右になることです。

<table class="standard-table">
  <tbody>
    <tr>
      <td>コード</td>
      <td>出力結果</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 除算演算子 (/) の場合
console.log(echo("left", 6) / echo("right", 2));
</pre>
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the right side
3
</pre>
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// べき乗演算子 (**) の場合
console.log(echo("left", 2) ** echo("right", 3));
</pre>
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the right side
8</pre>
      </td>
    </tr>
  </tbody>
</table>

結合性の違いは、同じ優先順位の演算子が複数存在する場合に現れます。上の例のように演算子が一つだけの場合や、演算子の優先順位が異なる場合は、結合性は出力に影響を与えません。下の例では、同じ演算子が複数使われている場合に、結合性が出力結果にどのような影響を与えるかを見てみましょう。

<table class="standard-table">
  <tbody>
    <tr>
      <td>コード</td>
      <td>出力結果</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 除算演算子 (/) の場合
console.log(echo("left", 6) / echo("middle", 2) / echo("right", 3));
</pre>
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
1
</pre>
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// べき乗演算子 (**) の場合
console.log(echo("left", 2) ** echo("middle", 3) ** echo("right", 2));
</pre>
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
512
</pre>
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 左と中央の間のべき乗を括弧で囲んだ場合
console.log((echo("left", 2) ** echo("middle", 3)) ** echo("right", 2));</pre>
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
64</pre
        >
      </td>
    </tr>
  </tbody>
</table>

上記のコードを見てください。`6 / 3 / 2` は、除算が左結合なので `(6 / 3) / 2` と同じになります。一方で、べき乗は右結合なので、`2 ** 3 ** 2` は `2 ** (3 ** 2)` と同じになります。したがって、 `(2 ** 3) ** 2` とすると上記の表にある通り、演算順序が変わって結果が 64 になります。

優先順位は結合度よりも優先されることを忘れないでください。そのため、割り算とべき乗を交ぜた場合、べき乗は割り算よりも先に計算されます。例えば `2 ** 3 / 3 ** 2` の結果は 0.8888888888888888 となります。これは `(2 ** 3) / (3 ** 2)` と同じだからです。

### グループ化と短絡評価の注意

下記の表では、**グループ化**が最上位の優先順位を持つものとして挙げられています。しかし、特に短絡が発生する場合は、グループ化記号 `( … )` の中の式が最初に評価されるとは限りません。

短絡評価は、条件付き評価を表す用語です。例えば、`a && (b + c)` という式において、`a` が{{Glossary("falsy", "偽値")}}である場合、従属式である `(b + c)` は括弧で囲まれていても評価されません。この論理的分離演算子 ("OR") は「短絡的」といえるでしょう。論理的分離演算子の他にも、ほかに短絡が発生する演算子には、論理的結合 ("AND") 演算子、Null 合体演算子、オプション連鎖演算子、条件演算子があります。以下に例を示します。

```js
a || (b * c);  // 最初に `a` を評価し、 `a` が「真値」であれば `a` を出力
a && (b < c);  // 最初に `a` を評価し、 `a` が「偽値」であれば `a` を出力
a ?? (b || c); // 最初に `a` を評価し、 `a` が `null` または `undefined` でなければ `a` を出力
a?.b.c;        // 最初に `a` を評価し、 `a` が `null` または `undefined` であれば `undefined` を出力
```

## 例

```js
3 > 2 && 2 > 1
// true を返す

3 > 2 > 1
// 結果は false となる。3 > 2 は true であり、true は
// 不等号で 1 に変換されるため、true > 1 は 1 > 1 となり、
// false となる。(3 > 2) > 1 のように括弧を付けると明確になる。
```

## 一覧表

以下の表は優先順位の最も高いもの (19) から最も低いもの (1) の順に並べられています。

なお、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)はこの表から除外しています。 — 理由は [Stack Overflow の回答](https://stackoverflow.com/a/48656377)を引用します。「[スプレッド構文は演算子ではなく](https://stackoverflow.com/q/44934828/1048572)、優先度はありません。これは配列リテラルと関数呼び出し（およびオブジェクトリテラル）の構文の一部です。」


<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>優先順位</th>
      <th>演算子の種類</th>
      <th>結合性</th>
      <th>演算子</th>
    </tr>
    <tr>
      <td>19</td>
      <td>
        {{jsxref("Operators/Grouping", "グループ化", "", 1)}}
      </td>
      <td>なし</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td>
        {{jsxref("Operators/Property_Accessors", "メンバーへのアクセス", "#Dot_notation", 1)}}
      </td>
      <td>左から右</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Property_Accessors", "計算値によるメンバーへのアクセス","#Bracket_notation", 1)}}
      </td>
      <td>左から右</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/new","new")}} (引数リスト付き)</td>
      <td>なし</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Guide/Functions">関数呼び出し</a>
      </td>
      <td>左から右</td>
      <td>
        <code>… ( <var>… </var>)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining">オプション連鎖</a>
      </td>
      <td>左から右</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        {{jsxref("Operators/new","new")}} (引数リストなし)
      </td>
      <td>右から左</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        {{jsxref("Operators","後置インクリメント","#インクリメントとデクリメント", 1)}}
      </td>
      <td rowspan="2">なし</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
    <td>{{jsxref("Operators","後置デクリメント","#インクリメントとデクリメント", 1)}}</td>
    <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT">論理 NOT (!)</a>
      </td>
      <td rowspan="10">右から左</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT">ビットごとの NOT (~)</a>
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus">単項 +</a>
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation">単項 -</a>
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators#インクリメントとデクリメント">前置インクリメント</a>
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators#インクリメントとデクリメント">前置デクリメント</a>
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void")}}</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete")}}</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await")}}</td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗 (**)</a>
      </td>
      <td>右から左</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Multiplication">乗算 (*)</a>
      </td>
      <td rowspan="3">左から右</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Division">除算 (/)</a>
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余 (%)</a>
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">加算 (+)</a>
      </td>
      <td rowspan="2">左から右</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算(-)</a>
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Left_shift">左ビットシフト (&#x3C;&#x3C;)</a>
      </td>
      <td rowspan="3">左から右</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Right_shift">右ビットシフト</a>
      </td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">符号なし右ビットシフト (>>>)</a>
      </td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than">小なり (&#x3C;)</a>
      </td>
      <td rowspan="6">左から右</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">小なりイコール (&#x3C;=)</a>
      </td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than">大なり (>)</a>
      </td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">大なりイコール (>=)</a>
      </td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "in")}}</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価 (==)</a>
      </td>
      <td rowspan="4">左から右</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Inequality">不等価 (!=)</a>
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality">厳密等価 (===)</a>
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality">厳密不等価 (!==)</a>
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">ビット単位 AND (&#x26;)</a>
      </td>
      <td>左から右</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR">ビット単位 XOR (^)</a>
      </td>
      <td>左から右</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR">ビット単位 OR (|)</a>
      </td>
      <td>左から右</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND">論理 AND (&#x26;&#x26;)</a>
      </td>
      <td>左から右</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR">論理 OR (||)</a>
      </td>
      <td>左から右</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">Null 合体 (??)</a>
      </td>
      <td>左から右</td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">条件（三項）演算子</a>
      </td>
      <td>右から左</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16">
        <a href="/ja/docs/Web/JavaScript/Reference/Operators#assignment_operators">代入</a>
      </td>
      <td rowspan="16">右から左</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x3C;&#x3C;= …</code></td>
    </tr>
    <tr>
      <td><code>… >>= …</code></td>
    </tr>
    <tr>
      <td><code>… >>>= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield", "yield")}}</td>
      <td rowspan="2">右から左</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield*", "yield*")}}</td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Comma_Operator">カンマ / シーケンス</a>
      </td>
      <td>左から右</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
