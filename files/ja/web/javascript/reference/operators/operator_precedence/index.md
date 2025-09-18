---
title: 演算子の優先順位
slug: Web/JavaScript/Reference/Operators/Operator_precedence
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**演算子の優先順位**は、演算子が互いにどのように解釈されるかを決定します。優先度の高い演算子は、優先度の低い演算子のオペランドになります。

{{InteractiveExample("JavaScript デモ: 式 - 演算子の優先順位")}}

```js interactive-example
console.log(3 + 4 * 5); // 3 + 20
// 予想される結果: 23

console.log(4 * 3 ** 2); // 4 * 9
// 予想される結果: 36

let a;
let b;

console.log((a = b = 5));
// 予想される結果: 5
```

## 優先度と結合性

以下の表現で記述できる式を考えてみましょう。なお、`OP1` と `OP2` は演算子に置き換わります。

```plain
a OP1 b OP2 c
```

上記の組み合わせには 2 つの解釈の可能性があります。

```plain
(a OP1 b) OP2 c
a OP1 (b OP2 c)
```

言語がどちらを採用するかは、`OP1`と`OP2`の組み合わせによって決まります。

`OP1` と `OP2` の優先順位（下記の一覧表を参照）が異なる場合は、優先順位の高い演算子が先に実行され、結合性は関係ありません。コードの中で加算が先に書かれているにもかかわらず、乗算の方が加算よりも優先順位が高く、先に実行されていることを確認してください。

```js-nolint
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 括弧の優先順位が高いので、23 を出力
console.log((3 + 10) * 2); // 括弧が順位を変更するので 26 を出力
```

同じ優先度の演算子同士では、言語は「結合性」によってグループ化します。左結合（左→右）は `(a OP1 b) OP2 c` のように処理されることであり、右結合（右→左）は `a OP1 (b OP2 c)` のように解釈されることです。代入演算子は右結合なので、このように書くことができます。

```js
a = b = 5; // a = (b = 5); と書いたのと同じ
```

これで、`a` と `b` が 5 の値を得るという期待通りの結果を得ることができます。これは代入演算子が代入した値を返すためです。まず `b` に 5 が設定されます。そして `a` にも、代入演算子の右オペランドである `b = 5` が返す 5 が設定されるのです。

他の例として、べき乗演算子だけが右結合性を持ちますが、他の算術演算子は左結合性を持ちます。

```js-nolint
const a = 4 ** 3 ** 2; // 4 ** (3 ** 2) と同じ、 262144 に解釈される
const b = 4 / 3 / 2; // (4 / 3) / 2 と同じ、 0.6666... に解釈される
```

演算子は最初のステップで優先順位によってグループ化され、次に同じ優先順位を持つ隣接する演算子については関連付けられた結合性によってグループ化されます。したがって、除算と累乗が混在している場合、累乗演算は常に除算より先に実行されます。例えば、`2 ** 3 / 3 ** 2` は `(2 ** 3) / (3 ** 2)` と同等であるため、結果は 0.8888888888888888 となります。

前置単項演算子の場合、次のパターンを考えてみてください。

```plain
OP1 a OP2 b
```

ここで、`OP1` は前置単項演算子であり、`OP2` は二項演算子です。 `OP1` の優先順位が `OP2` より高い場合、`(OP1 a) OP2 b` としてグループ化されます。そうでない場合は、`OP1 (a OP2 b)` となります。

```js
const a = 1;
const b = 2;
typeof a + b; // (typeof a) + b と等しくなり、 "number2" の結果になります。
```

単項演算子が 2 つ目オペランドである場合、

```plain
a OP2 OP1 b
```

二項演算子 `OP2` が `a OP2 (OP1 b)` のようにグループ化されるためには、単項演算子 `OP1` よりも優先順位が低くないといけません。例えば、次のものは無効です。

```js-nolint example-bad
function* foo() {
  a + yield 1;
}
```

`+` 演算子は `yield` よりも優先順位が高いため、これは `(a + yield) 1` となります。しかし、 `yield` はジェネレーター関数における[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#キーワード)であるため、これは構文エラーとなります。幸いなことに、ほとんどの単項演算子は二項演算子よりも優先順位が高く、この落とし穴に悩まさずに済みます。

2 つの前置単項演算子が指定された場合はどうでしょうか。

```plain
OP1 OP2 a
```

オペランドにより近い単項演算子 `OP2` は、`OP1 (OP2 a)` としてグループ化されるためには、優先順位が `OP1` より高くなければなりません。 それ以外の方法により、`(OP1 OP2) a` となる可能性があります。

```js-nolint example-bad
async function* foo() {
  await yield 1;
}
```

[`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) は [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) よりも優先順位が高いため、これは `(await yield) 1` となり、`yield` という名前の識別子を待機することになり、構文エラーとなります。同様に、`new !A;` と記述した場合、`!` の優先順位が `new` より低いため、これは `(new !) A` となり、明らかに不正な構文となります。（`!A` は常に論理値を生成し、コンストラクター関数ではないので、これはそもそも意味をなさないように見えます。）

後置単項演算子（すなわち `++` と `--`）についても同様の規則が適用されます。幸いなことに、どちらの演算子も二項演算子よりも優先順位が高いため、括弧の付け方は常に期待通りになります。さらに、 `++` は参照ではなく値を評価するため、 C 言語のように複数のインクリメントを連結することもできません。

```js-nolint example-bad
let a = 1;
a++++; // SyntaxError: Invalid left-hand side in postfix operation.
```

演算子の優先順位は再帰的に処理されます。例えば、次の式を考えてみましょう。

```js-nolint
1 + 2 ** 3 * 4 / 5 >> 6
```

まず、異なる優先度を持つ演算子を優先度の高い順にグループ化します。

1. `**` 演算子は最も高い優先順位を持つため、まずグループ化されます。
2. `**` 式を見ていくと、右側に `*`、左側に `+` があります。 `*` の優先順位が高いため、まず `*` がグループ化されます。 `*` と `/` は同じ優先順位なので、とりあえずこれらが一緒にグループ化されます。
3. 2 でグループ化された `*`/`/` 式の周りを見ると、 `+` は `>>` よりも高い優先度を持つため、前者がグループ化されます。

```js-nolint
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
```

`*`/`/` グループ内では、両方が左結合であるため、左オペランドがグループ化されます。

```js-nolint
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

演算子の優先順位と結合性は、演算子の評価順序（暗黙のグループ化）にのみ影響し、オペランドの評価順序には影響しないことに注意してください。オペランドは常に左→右へ評価されます。優先順位の高い式は常にまず評価され、その結果は演算子の優先順序に従って組み合わされます。

```js-nolint
function echo(name, num) {
  console.log(`${name}側を評価しています`);
  return num;
}
// べき乗演算子 (**) は右結合だが、
// すべての呼び出し式 (echo()) はより高い優先度を持ち、
// ** よりも前に評価される
console.log(echo("左", 4) ** echo("中", 3) ** echo("右", 2));
// 左側を評価しています
// 中側を評価しています
// 右側を評価しています
// 262144

// べき乗演算子 (**) は除算演算子 (/) よりも高い優先度を持つが、
// 評価は常に左のオペランドから行われる
console.log(echo("左", 4) / echo("中", 3) ** echo("右", 2));
// 左側を評価しています
// 中側を評価しています
// 右側を評価しています
// 0.4444444444444444
```

二分木に慣れている場合は、これを[後順走査](https://ja.wikipedia.org/wiki/Tree_traversal#深さ優先探索)と考えてください。

```plain
                /
       ┌────────┴────────┐
echo("左", 4)           **
                ┌────────┴────────┐
          echo("中", 3)     echo("右", 2)
```

すべての演算子が適切にグループ化された後、二項演算子は二分木を形成します。評価は最も外側のグループ（これは優先度が最も低い演算子 `/`）から始まります。この演算子の左オペランドがまず評価され、そこにはより優先度の高い演算子（呼び出し式 `echo("left", 4)` など）が含まれる可能性があります。左オペランドの評価後、右オペランドも同様の方法で評価されます。したがって、結合する演算子の優先度に関係なく、すべての葉ノード（`echo()` 呼び出し）は左→右へ走査されます。

### 短絡評価

前節では「優先順位の高い式は常に先に評価する」と言いましたが、これは一般的に正しいものの、「短絡評価」の存在を考慮する必要があります。短絡評価の場合、オペランドがまったく評価されない可能性があります。

短絡評価は、条件付き評価を表す用語です。例えば、`a && (b + c)` という式において、`a` が{{Glossary("falsy", "偽値")}}である場合、従属式である `(b + c)` は括弧で囲まれていて `&&` より優先順位が高くても評価されません。この論理積演算子 (`&&`) は「短絡的」といえるでしょう。論理積演算子に加えて、その他の短絡評価される演算子には、論理和演算子 (`||`)、ヌル値合体演算子 (`??`)、オプショナルチェーン演算子 (`?.`) があります。

```js-nolint
a || (b * c); // まず `a` を評価し、 `a` が「真値」であれば `a` を出力
a && (b < c); // まず `a` を評価し、 `a` が「偽値」であれば `a` を出力
a ?? (b || c); // まず `a` を評価し、 `a` が `null` または `undefined` でなければ `a` を出力
a?.b.c; // まず `a` を評価し、 `a` が `null` または `undefined` であれば `undefined` を出力
```

短絡評価される演算子を評価する際、左オペランドは常に評価されます。右オペランドは、左オペランドで操作の結果を決定できない場合にのみ評価されます。

> [!NOTE]
> 短絡評価の挙動は、これらの演算子に組み込まれています。 その他の演算子は、実際に有用かどうかに関わらず、常に両方のオペランドを評価します。 例えば、`NaN * foo()` は、結果が `NaN` 以外の値になることが絶対にない場合でも、常に `foo` を呼び出します。

前述の後順走査のモデルはこの場合も有効です。ただし、短絡評価演算子の左部分木を走査した後、言語は右オペランドの評価が必要かどうかを判断します。必要がない場合（例えば `||` の左オペランドが既に真値である場合など）、右部分木を走査せずに結果が直接返されます。

この場合を考えてみてください。

```js-nolint
function A() { console.log('called A'); return false; }
function B() { console.log('called B'); return false; }
function C() { console.log('called C'); return true; }

console.log(C() || B() && A());

// 出力:
// called C
// true
```

`&&`の優先順位がより高いにもかかわらず、`C()`のみが評価されます。これは`||`の優先順位がより高いということではありません——まさに`(B() && A())`の優先順位がより高いために、全体として無視されるのです。次のように再配置すると、

```js-nolint
console.log(A() && C() || B());
// Logs:
// called A
// called B
// false
```

`&&` の短絡評価の効果で `C()` の評価を阻止しますが、`A() && C()` 全体が `false` であるため、` B()` は評価されます。

ただし、短絡評価しても最終的な評価結果は変わりません。短絡評価はオペランドの評価にのみ影響し、演算子のグループ化方法には影響しません。オペランドの評価が副作用を持たない（例えば、コンソールへの出力、変数への割り当てる、エラーが発生する）場合、短絡評価はまったく認識できません。

これらの演算子の代入形（[`&&=`](/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)、 [`||=`](/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)、[`??=`](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)）も同様に短絡評価が行われます。これらの演算子では、短絡評価が行われると、代入がまったく現れなくなります。

## 一覧表

以下の表は優先順位の最も高いもの (18) から最も低いもの (1) の順に並べられています。

この表に関する全般的な注意:

1. ここに記載されているすべての構文が厳密な意味での「演算子」というわけではありません。例えば、スプレッド `...` や矢印 `=>` は通常、演算子とは見なされません。しかし、他の演算子や式と比較してどれほど強く結合するかを示すために、これらも記載しています。
2. 一部の演算子には、優先順位の高い演算子が生成する式よりも狭い式を要求される特定のオペランドがあります。例えば、メンバーアクセス `.` （優先順位 17）の右側は、グループ化された式ではなく識別子でなければなりません。アロー `=>` （優先順位 2）の左側は、任意の式ではなく引数リストまたは単一の識別子でなければなりません。
3. 一部の演算子には、優先順位の高い演算子が生成する式よりも広い式を受け入れる特定のオペランドがあります。例えば、ブラケット記法 `[ … ]`（優先順位 17）で囲まれた式は、カンマ（優先順位 1）で結合された式を含む任意の式にすることができます。これらの演算子は、そのオペランドが「自動的にグループ化」されたかのように動作します。この場合の結合性は省略しています。

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>優先順位</th>
      <th>結合性</th>
      <th>個々の演算子</th>
      <th>備考</th>
    </tr>
    <tr>
      <td>18: グループ化</td>
      <td>なし</td>
      <td>{{jsxref("Operators/Grouping", "グループ化", "", 1)}}<br><code>(x)</code></td>
      <td>[1]</td>
    </tr>
    <tr>
      <td rowspan="6">17: アクセスと呼び出し</td>
      <td rowspan="2">
        左→右
      </td>
      <td>{{jsxref("Operators/Property_accessors", "メンバーアクセス", "#ドット記法", 1)}}<br><code>x.y</code></td>
      <td rowspan="2">[2]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/Optional_chaining", "オプショナルチェーン", "", 1)}}<br><code>x?.y</code></td>
    </tr>
    <tr>
      <td rowspan="4">なし</td>
      <td>
        {{jsxref("Operators/Property_accessors", "計算値によるメンバーアクセス","#ブラケット記法", 1)}}<br><code>x[y]</code>
      </td>
      <td>[3]</td>
    </tr>
    <tr>
      <td>引数リスト付きの {{jsxref("Operators/new", "new")}}<br><code>new x(y)</code></td>
      <td rowspan="3">[4]</td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Guide/Functions">関数呼び出し</a><br><code>x(y)</code>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/import", "import(x)")}}</td>
    </tr>
    <tr>
      <td>16: new</td>
      <td>なし</td>
      <td>引数リストなしの {{jsxref("Operators/new", "new")}}<br><code>new x</code></td>
    </tr>
    <tr>
      <td rowspan="2">15: 後置演算子</td>
      <td rowspan="2">なし</td>
      <td>
        {{jsxref("Operators/Increment", "後置インクリメント", "", 1)}}<br><code>x++</code>
      </td>
      <td rowspan="2">[5]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "後置デクリメント", "", 1)}}<br><code>x--</code>
      </td>
    </tr>
    <tr>
      <td rowspan="10">14: 前置演算子</td>
      <td rowspan="10">なし</td>
      <td>
        {{jsxref("Operators/Increment", "前置インクリメント", "", 1)}}<br><code>++x</code>
      </td>
      <td rowspan="2">[6]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Decrement", "前置デクリメント", "", 1)}}<br><code>--x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_NOT", "論理否定", "", 1)}}<br><code>!x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_NOT", "ビット否定", "", 1)}}<br><code>~x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus", "単項プラス", "", 1)}}<br><code>+x</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_negation", "単項マイナス", "", 1)}}<br><code>-x</code>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof x")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void x")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete x")}}</td>
      <td>[7]</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await x")}}</td>
    </tr>
    <tr>
      <td>13: べき乗</td>
      <td>右→左</td>
      <td>
        {{jsxref("Operators/Exponentiation", "べき乗", "", 1)}}<br><code>x ** y</code>
      </td>
      <td>[8]</td>
    </tr>
    <tr>
      <td rowspan="3">12: 乗法的演算子</td>
      <td rowspan="3">左→右</td>
      <td>
        {{jsxref("Operators/Multiplication", "乗算", "", 1)}}<br><code>x * y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division", "除算", "", 1)}}<br><code>x / y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder", "剰余", "", 1)}}<br><code>x % y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">11: 加算的演算子</td>
      <td rowspan="2">左→右</td>
      <td>
        {{jsxref("Operators/Addition", "加算", "", 1)}}<br><code>x + y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction", "減算", "", 1)}}<br><code>x - y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="3">10: ビットシフト</td>
      <td rowspan="3">左→右</td>
      <td>
        {{jsxref("Operators/Left_shift", "左シフト", "", 1)}}<br><code>x &#x3C;&#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift", "右シフト", "", 1)}}<br><code>x >> y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift", "符号なし右シフト", "", 1)}}<br><code>x >>> y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="6">9: 関係演算子</td>
      <td rowspan="6">左→右</td>
      <td>
        {{jsxref("Operators/Less_than", "小なり", "", 1)}}<br><code>x &#x3C; y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal", "小なりイコール", "", 1)}}<br><code>x &#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than", "大なり", "", 1)}}<br><code>x > y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than_or_equal", "大なりイコール", "", 1)}}<br><code>x >= y</code>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "x in y")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "x instanceof y")}}</td>
    </tr>
    <tr>
      <td rowspan="4">8: 等価性演算子</td>
      <td rowspan="4">左→右</td>
      <td>
        {{jsxref("Operators/Equality", "等価", "", 1)}}<br><code>x == y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Inequality", "不等価", "", 1)}}<br><code>x != y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_equality", "厳密等価", "", 1)}}<br><code>x === y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_inequality", "厳密不等価", "", 1)}}<br><code>x !== y</code>
      </td>
    </tr>
    <tr>
      <td>7: ビット論理積</td>
      <td>左→右</td>
      <td>
        {{jsxref("Operators/Bitwise_AND", "ビット論理積", "", 1)}}<br><code>x &#x26; y</code>
      </td>
    </tr>
    <tr>
      <td>6: ビット排他的論理和</td>
      <td>左→右</td>
      <td>
        {{jsxref("Operators/Bitwise_XOR", "ビット排他的論理和", "", 1)}}<br><code>x ^ y</code>
      </td>
    </tr>
    <tr>
      <td>5: ビット論理和</td>
      <td>左→右</td>
      <td>
        {{jsxref("Operators/Bitwise_OR", "ビット論理和", "", 1)}}<br><code>x | y</code>
      </td>
    </tr>
    <tr>
      <td>4: 論理積</td>
      <td>左→右</td>
      <td>
        {{jsxref("Operators/Logical_AND", "論理積", "", 1)}}<br><code>x &#x26;&#x26; y</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">3: 論理和、ヌル値合体</td>
      <td rowspan="2">左→右</td>
      <td>
        {{jsxref("Operators/Logical_OR", "論理和", "", 1)}}<br><code>x || y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing", "ヌル値合体", "", 1)}}<br><code>x ?? y</code>
      </td>
      <td>[9]</td>
    </tr>
    <tr>
      <td rowspan="21">2: 代入とその他</td>
      <td rowspan="16">右→左</td>
      <td>
        {{jsxref("Operators/Assignment", "代入", "", 1)}}<br><code>x = y</code>
      </td>
      <td rowspan="16">[10]</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Addition_assignment", "加算代入", "", 1)}}<br><code>x += y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction_assignment", "減算代入", "", 1)}}<br><code>x -= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Exponentiation_assignment", "べき乗代入", "", 1)}}<br><code>x **= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Multiplication_assignment", "乗算代入", "", 1)}}<br><code>x *= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division_assignment", "除算代入", "", 1)}}<br><code>x /= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder_assignment", "剰余代入", "", 1)}}<br><code>x %= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Left_shift_assignment", "左シフト代入", "", 1)}}<br><code>x &#x3C;&#x3C;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift_assignment", "右シフト代入", "", 1)}}<br><code>x >>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift_assignment", "符号なし右シフト代入", "", 1)}}<br><code>x >>>= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_AND_assignment", "ビット論理積代入", "", 1)}}<br><code>x &#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_XOR_assignment", "ビット排他的論理和代入", "", 1)}}<br><code>x ^= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_OR_assignment", "ビット論理和代入", "", 1)}}<br><code>x |= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_AND_assignment", "論理積代入", "", 1)}}<br><code>x &#x26;&#x26;= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Logical_OR_assignment", "論理和代入", "", 1)}}<br><code>x ||= y</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing_assignment", "ヌル値合体代入", "", 1)}}<br><code>x ??= y</code>
      </td>
    </tr>
    <tr>
      <td>右→左</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator">条件（三項）演算子</a><br><code>x ? y : z</code>
      </td>
      <td>[11]</td>
    </tr>
    <tr>
      <td>右→左</td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー</a><br><code>x => y</code>
      </td>
      <td>[12]</td>
    </tr>
    <tr>
      <td rowspan="3">なし</td>
      <td>{{jsxref("Operators/yield", "yield x")}}</td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield*", "yield* x")}}</td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax">スプレッド</a><br><code>...x</code>
      </td>
      <td>[13]</td>
    </tr>
    <tr>
      <td>1: カンマ</td>
      <td>左→右</td>
      <td>
        {{jsxref("Operators/Comma_Operator", "カンマ演算子", "", 1)}}<br><code>x, y</code>
      </td>
    </tr>
  </tbody>
</table>

注釈:

1. オペランドは任意の式にすることができます。
2. 「右辺」は識別子で なければなりません。
3. 「右辺」は任意の式にすることができます。
4. 「右辺」は、優先順位が 1 より大きい（つまりカンマ式ではない）任意の式のカンマ区切りリストです。 `new` 式のコンストラクターはオプションチェーンにすることはできません。
5. オペランドは有効な代入対象（識別子またはプロパティアクセス）でなければなりません。この優先順位では、 `new Foo++` は `(new Foo)++` （構文エラー）となり、`new (Foo++)` (a TypeError: (Foo++) is not a constructor) とはなりません。
6. オペランドは有効な代入対象（識別子またはプロパティアクセスする）でなければなりません。
7. オペランドは識別子または[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)へのアクセスとすることはできません。
8. 左辺は優先順位 14 になることはできません。
9. オペランドは、グループ化されていない論理和 `||` または論理積 `&&` 演算子にすることはできません。
10. 「左辺」は有効な代入対象（識別子またはプロパティアクセスである）でなければなりません。
11. この結合性は、 `?` の後の 2 つの式が暗黙的にグループ化されるということです。
12. 「左辺」は単一の識別子または括弧で囲まれた引数リストです。
13. オブジェクトリテラル、配列リテラル、引数リスト内でのみ有効です。

グループ 17 と 16 の優先順位はやや曖昧かもしれません。明確にするために、いくつか例を挙げます。

- オプションチェーンは、常にオプション性のない対応する構文と置き換え可能です（オプションチェーンが禁止されるいくつかの特殊なケースを除く）。例えば、 `a?.b` を受け入れる場所はすべて `a.b` も受け入れ、その逆も同様です。同様に、 `a?.()` と `a()` も互換性があります。
- メンバー式と計算されたメンバー式は常にそれぞれの互いに置き換え可能です。
- 呼び出し式と `import()` 式は、常に互いに置き換え可能です。
- ここで、メンバーアクセス、引数付きの `new`、関数呼び出し、引数無しの `new` の 4 つの式の分類を示しておきます。
  - メンバーアクセスの「左辺」は、メンバーアクセス (`a.b.c`)、引数付きの新しいオブジェクト生成 (`new a().b`)、関数呼び出し (`a().b`) などにすることができます。
  - 引数付き `new` の「左辺」は、メンバーアクセス (`new a.b()`) および引数付き `new` (`new new a()()`) などにすることができます。
  - 関数呼び出しの「左辺」は、メンバーアクセス (`a.b()`)、引数付き`new` (`new a()()`)、関数呼び出し (`a()()`) などにすることができます。
  - 引数なしの`new`のオペランドは、メンバーアクセス (`new a.b`)、引数付き`new` (`new new a()`)、引数なし`new` (`new new a`) などにすることができます。
