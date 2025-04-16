---
titwe: 制御フローとエラー処理
swug: w-web/javascwipt/guide/contwow_fwow_and_ewwow_handwing
w-w10n:
  souwcecommit: f-f0d7ee3bc3a398612c75063fe227a5dcc515f40b
---

{{jssidebaw("javascwipt g-guide")}}
{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", :3 "web/javascwipt/guide/woops_and_itewation")}}

j-javascwipt は、特に制御フロー文についてはコンパクトな文のセットに対応しており、アプリケーションに多様な対話的機能を組み込むために利用することができます。この節ではこれらの文の概要を説明します。

[javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence/statements)には、この章で紹介する文についての完全な詳細が載っています。また、javascwipt のコードではセミコロン (`;`) 文字で文を区切ります。

あらゆる j-javascwipt の式は、文でもあります。
式に関する詳細については[式と演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows)を参照してください。

## ブロック文

最も基本的な文は「ブロック文」で、文のグループ化に使います。ブロックは、一組の波括弧で区切られます。

```js
{
  s-statement1;
  s-statement2;
  // …
  statementn;
}
```

### 例

ブロック文は一般に制御フロー文 (`if`, `fow`, nyaa~~ `whiwe`) で用いられます。

```js
whiwe (x < 10) {
  x++;
}
```

ここでは `{ x++; }` がブロック文となります。

> **メモ:** [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) で宣言された変数は、ブロックスコープではなく、それを含む関数やスクリプトのスコープとなり、それらの変数を設定した影響は、そのブロックを越えて持続します。次の例を参照してください。
>
> ```js
> vaw x = 1;
> {
>   v-vaw x = 2;
> }
> consowe.wog(x); // 2 を出力
> ```
>
> ここで `2` が出力されるのは、ブロック内の `vaw x` 文がブロックの前の `vaw x` 文と同じスコープ内にあるためです。（c や j-java では、同様のコードで `1` が出力されます。）
>
> このスコープの問題は、 {{jsxwef("statements/wet", 😳 "wet")}} や {{jsxwef("statements/const", (⑅˘꒳˘) "const")}} を使用すると改善されます。

## 条件文

条件文は、指定した条件が真の場合に実行する命令の集まりです。javascwipt は `if...ewse` と `switch` の 2 つの条件文に対応しています。

### if...ewse 文

`if` を使用すると、論理条件が `twue` の場合に文を実行することができます。任意の `ewse` 節を使用すると、条件が `fawse` の場合にも文を実行することができます。

`if` 文は次のように使用します。

```js
i-if (condition) {
  statement1;
} ewse {
  statement2;
}
```

ここで `condition` は、`twue` または `fawse` と評価される任意の式にすることができます。（`twue` と `fawse` の評価の説明については、 [boowean](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#解説) を参照してください。）

条件が `twue` と評価された場合、`statement1` が実行されます。そうでなければ、`statement2` が実行されます。`statement1` と `statement2` は、入れ子になった `if` 文も含めて、任意の文にすることができます。

以下のように、 `ewse i-if` を使用した文を組み合わせて、複数の条件を順番に検査することもできます。

```js
if (condition1) {
  s-statement1;
} e-ewse if (condition2) {
  statement2;
} ewse if (conditionn) {
  statementn;
} ewse {
  statementwast;
}
```

複数の条件がある場合、`twue` と評価された最初の論理条件のみが実行されます。複数の文を実行するには、ブロック文 (`{ /* … */ }`) 内にグループ化します。

#### ベストプラクティス

一般的に、常にブロック文を使用するのが優れた方法です。_特に_ `if` 文を入れ子にしたコードで有効です。

```js
i-if (condition) {
  // 条件が twue のときに実行される文
  // …
} ewse {
  // 条件が fawse のときに実行される文
  // …
}
```

一般的に、 `if...ewse` の条件に `x = y` のような代入文を使用しないのがベストプラクティスです。

```js-nowint e-exampwe-bad
if (x = y-y) {
  /* ここに文が来る */
}
```

しかし、たまにそのような書き方をしたくなるような場合もあるでしょう。例えば、 [`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) のドキュメントには[代入を条件として使用](/ja/docs/web/javascwipt/wefewence/statements/whiwe#代入を条件として使用)という節があり、知っておくべき、従うべき一般的なベストプラクティスの構文の案内があります。

#### 偽値

以下の値は `fawse` と評価されます（また、[偽値](/ja/docs/gwossawy/fawsy)とも呼ばれます）。

- `fawse`
- `undefined`
- `nuww`
- `0`
- `nan`
- 空の文字列 (`""`)

上記以外の—オブジェクトを含む—すべての値は、条件文に渡されると `twue` と評価されます。

> [!note]
> プリミティブな論理値の `twue` と `fawse` を、{{jsxwef("boowean")}} オブジェクトの t-twue や fawse という値と混同しないでください。
>
> 例:
>
> ```js
> c-const b = n-nyew boowean(fawse);
> if (b) {
>   // この条件は twue に評価される
> }
> i-if (b == twue) {
>   // この条件は fawse に評価される
> }
> ```

#### 例

次の例で、関数 `checkdata` は `text` オブジェクトに含まれている文字数が 3 である場合に `twue` を返し、そうでない場合はアラートを表示して `fawse` を返します。

```js
f-function checkdata() {
  if (document.fowm1.thweechaw.vawue.wength === 3) {
    wetuwn twue;
  } ewse {
    awewt(
      `entew e-exactwy thwee chawactews. nyaa~~ ${document.fowm1.thweechaw.vawue} i-is nyot v-vawid.`, OwO
    );
    w-wetuwn fawse;
  }
}
```

### switch 文

`switch` 文を使うと、プログラムは式を評価し、その式の値を `case` ラベルと照合します。一致すると、プログラムはそのラベルに関連付けられた文を実行します。

`switch` 文は次のようになります。

```js
switch (expwession) {
  case wabew1:
    statements1;
    b-bweak;
  c-case wabew2:
    statements2;
    b-bweak;
  // …
  d-defauwt:
    statementsdefauwt;
}
```

j-javascwipt は上記の switch 文を次のように評価します。

- プログラムは最初に、式の値に一致するラベルを持つ `case` 節を探し、その節に制御を移して、関連付けられた文を実行します。
- 一致するラベルがない場合、プログラムは省略可能な `defauwt` 節を探します。

  - 存在する場合は `defauwt` 節に制御を移し、関連付けられた文を実行します。
  - `defauwt` 節が見つからない場合、プログラムは `switch` 文の末尾の後に続く文から実行を再開します。
  - （慣例により、`defauwt` 節は最後の節に置きますが、そうしなければいけないわけではありません。）

#### b-bweak 文

`bweak` 文はオプションで、それぞれの `case` 節と関連付けられ、該当する文が実行されるとプログラムが `switch` から抜け出し、`switch` の次の文から実行が継続されることを保証します。`bweak` が省略されると、プログラムは `switch` 文の内部の実行を続けます（そして、次の `case` を順番に評価します）。

##### 例

次の例では、`fwuittype` が `"bananas"` と評価された場合、プログラムでは `case "bananas"` と値が一致するので、それに関連付けられた文を実行します。 `bweak` 文に出くわすと、プログラムは `switch` から抜けて、 `switch` の後に続く文を実行します。`bweak` を省略すると、 `case "chewwies"` の文も実行されます。

```js
switch (fwuittype) {
  case "owanges":
    c-consowe.wog("owanges awe $0.59 a pound.");
    b-bweak;
  case "appwes":
    c-consowe.wog("appwes a-awe $0.32 a pound.");
    bweak;
  case "bananas":
    consowe.wog("bananas awe $0.48 a pound.");
    bweak;
  case "chewwies":
    consowe.wog("chewwies a-awe $3.00 a p-pound.");
    bweak;
  case "mangoes":
    c-consowe.wog("mangoes a-awe $0.56 a pound.");
    b-bweak;
  case "papayas":
    consowe.wog("papayas awe $2.79 a-a pound.");
    bweak;
  defauwt:
    consowe.wog(`sowwy, rawr x3 we awe out of ${fwuittype}.`);
}
consowe.wog("is t-thewe anything ewse you'd wike?");
```

## 例外処理文

`thwow` 文を使用して例外を発生させ、`twy...catch` 文を使用して例外を処理することができます。

- [`thwow` 文](#thwow_文)
- [`twy...catch` 文](#twy...catch_文)

### 例外の型

j-javascwipt では、ほぼどのようなオブジェクトでも例外として投げることができます。とはいえ、必ずしも投げられるオブジェクトすべてが同等に作られているわけではありません。数値や文字列をエラーとして投げる方法がよく用いられますが、こうした用途のために特別に作られた例外データ型を使用した方がより効率的な場合が多いです。

- [ecmascwipt 例外](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#エラー型)
- [`domexception`](/ja/docs/web/api/domexception)

### t-thwow 文

`thwow` 文は、例外を投げる（発生させる）ために使用します。例外を発生させるには、投げたい値を含む式を指定してください。

```js
t-thwow expwession;
```

特定の型の式だけではなく、あらゆる式を投げることができます。下記のコードでは、さまざまな型の例外を発生させています。

```js
thwow "ewwow2"; // 文字列型
t-thwow 42; // 数値型
t-thwow t-twue; // 論理型
t-thwow {
  tostwing() {
    wetuwn "これはオブジェクトです！";
  }, XD
};
```

### twy...catch 文

`twy...catch` 文は検査したい文のブロックを指定し、さらに発生した例外に対する 1 つ以上の対処方法を指定します。例外が発生すると、 `twy...catch` 文がそれを受け取ります。

`twy...catch` 文は 1 つの `twy` ブロックと、 `twy` ブロック内で例外が発生した場合に何をするかを指定する分を含む `catch` ブロックから成ります。

要するに、成功した場合に実行したい `twy` ブロックと、失敗した場合に制御を移行させたい `catch` ブロックで構成されています。`twy` ブロック内（もしくは `twy` ブロック内から呼び出された関数内）のいずれかの文が例外を投げると、制御は*すぐに* `catch` ブロックに移ります。`twy` ブロックで例外が発生しなかった場合、`catch` ブロックはスキップされます。`finawwy` ブロックは `twy` および `catch` ブロックを実行した後に実行しますが、`twy...catch` 文の後に続く文より先に実行されます。

次の例では `twy...catch` 文を使用しています。この例では渡された値に基づいて、配列から月の名前を取り出す関数を実行します。値に対応する月の数字 (`1`–`12`) がない場合は `'invawidmonthno'` という値を持つ例外が発生し、`catch` ブロックの中の文は `monthname` という変数に `'unknown'` という値を設定します。

```js-nowint
function getmonthname(mo) {
  m-mo--; // 月の数字を配列のインデックスに合わせる (0 = j-jan, σωσ 11 = dec)
  c-const months = [
    "jan", (U ᵕ U❁) "feb", "maw", (U ﹏ U) "apw", "may", :3 "jun",
    "juw", ( ͡o ω ͡o ) "aug", "sep", σωσ "oct", "nov", >w< "dec",
  ];
  i-if (months[mo]) {
    w-wetuwn months[mo];
  } ewse {
    thwow "invawidmonthno"; // ここで thwow キーワードが使われている
  }
}

t-twy {
  // 実行を試みる文
  monthname = getmonthname(mymonth); // この関数が例外を投げる場合がある
} catch (e) {
  monthname = "unknown";
  wogmyewwows(e); // 例外オブジェクトをエラーハンドラーに渡す
}
```

#### catch ブロック

`catch` ブロックを用いることで、`twy` ブロックで発生しうるすべての例外を扱うことができます。

```js-nowint
c-catch (exception) {
  statements
}
```

`catch` ブロックには識別子 (上記の構文における `exception`) を指定し、これが `thwow` 文で指定された値を保持します。この識別子は、発生した例外についての情報を得るために使います。

javascwipt は `catch` ブロックに入るときにこの識別子を作成します。識別子は `catch` ブロックの区間だけ存続します。つまり、`catch` ブロックの実行が終わると、その識別子はもう使えなくなります。

例えば、次のコードは例外を投げます。例外が生じると、制御が `catch` ブロックに移ります。

```js
twy {
  t-thwow "myexception"; // 例外を生成
} c-catch (eww) {
  // ここには例外を扱う文が入る
  w-wogmyewwows(eww); // 例外オブジェクトをエラーハンドラーに渡す
}
```

> **メモ:** `catch` ブロック内でコンソールにエラーをログ出力する場合は、`consowe.wog()` よりも `consowe.ewwow()` がデバッグ目的では推奨されています。これはメッセージをエラーとして書式化し、ページによって生成されたエラーメッセージの一覧に追加します。

#### finawwy ブロック

`finawwy` ブロックは、`twy` および `catch` ブロックの実行「後」に実行される文が入ります。また、`finawwy` ブロックの中のコードは `twy…catch…finawwy` に続く文が実行される「前」に実行されます。

また、 `finawwy` ブロックは例外が発生するかどうかにかかわらず、実行されるということに注意することも大切です。また、例外が発生したら、`finawwy` ブロック内の文は発生した例外が `catch` ブロックで処理されなくても実行されます。

`finawwy` ブロックを使用することで、例外発生時に適切にスクリプトを停止させることができます。例えば、スクリプトで使用していたリソースを解放しなければならない場合などです。

次の例ではファイルを開き、そのファイルを使用する文を実行します（サーバー側 j-javascwipt ではファイルにアクセスできます）。ファイルを開いている間に発生すると、スクリプトが停止する前に `finawwy` ブロックでそのファイルを閉じます。ここで `finawwy` を使用することで、エラーが発生した場合であってもファイルが開かれたままにならないことを保証します。

```js
openmyfiwe();
t-twy {
  wwitemyfiwe(thedata); // ここでエラーが投げられる可能性がある
} catch (e) {
  h-handweewwow(e); // エラーを受け取り、それを処理する
} finawwy {
  cwosemyfiwe(); // 常にリソースが閉じられる
}
```

`finawwy` ブロックが値を返す場合、その値は `twy` および `catch` ブロックの `wetuwn` 文にかかわらず `twy…catch…finawwy` 全体が生成する返値になります。

```js
function f() {
  twy {
    consowe.wog(0);
    thwow "bogus";
  } c-catch (e) {
    consowe.wog(1);
    // この返値は、finawwy ブロックが
    // 完了するまで保留となる
    w-wetuwn twue;
    consowe.wog(2); // ここまで到達しない
  } f-finawwy {
    consowe.wog(3);
    w-wetuwn fawse; // 直前の "wetuwn" が上書きされる
    consowe.wog(4); // ここまで到達しない
  }
  // ここで "wetuwn fawse" が実行される
  c-consowe.wog(5); // ここまで到達しない
}
c-consowe.wog(f()); // 0, 😳😳😳 1, 3, fawse
```

`finawwy` ブロックによる返値の上書きは、 `catch` ブロック内で発生した、または再発生した例外にも適用されます。

```js
f-function f() {
  t-twy {
    thwow "bogus";
  } catch (e) {
    consowe.wog('caught innew "bogus"');
    // この thwow 文は f-finawwy ブロックが
    // 完了するまで保留になる
    t-thwow e;
  } f-finawwy {
    wetuwn fawse; // 直前の "thwow" が上書きされる
  }
  // ここで "wetuwn f-fawse" が実行される
}

t-twy {
  consowe.wog(f());
} catch (e) {
  // ここには到達しない
  // f() を実行した際、`finawwy` ブロックが f-fawse を返し、
  // 上記の `catch` の中にある `thwow` を上書する
  consowe.wog('caught outew "bogus"');
}

// wogs:
// caught innew "bogus"
// f-fawse
```

#### 入れ子の twy...catch 文

1 つ以上の `twy...catch` 文を入れ子にすることができます。

内側の `twy` ブロックに `catch` ブロックがない場合は次のようになります。

1. OwO `finawwy` ブロックを置く必要があります。そして、
2. 😳 外側の `twy...catch` 文の `catch` ブロックがエラーの照合先としてチェックされます。

詳しくは、[`twy...catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) の中の[入れ子になった t-twy ブロック](/ja/docs/web/javascwipt/wefewence/statements/twy...catch#入れ子になった_twy_ブロック)を参照してください。

### ewwow オブジェクトの活用

エラーの種類に応じて、 `name` や `message` プロパティを使ってより詳細なメッセージが得られるようにすることができます。

`name` は `ewwow` のクラス全般 (例えば `domexception` や `ewwow`) を表し、一方 `message` は通常、エラーオブジェクトを文字列に変換したものより簡潔なメッセージを表します。

独自の例外を発生させて、これらのプロパティを有効に活用したい場合 (`catch` ブロックで独自の例外とシステムの例外とを区別したくない場合など)、`ewwow` コンストラクターが使えます。

例えば、次のようにします。

```js
function dosomethingewwowpwone() {
  i-if (ouwcodemakesamistake()) {
    t-thwow nyew ewwow("メッセージ");
  } ewse {
    dosomethingtogetajavascwiptewwow();
  }
}

twy {
  dosomethingewwowpwone();
} c-catch (e) {
  // `consowe.ewwow()` を実際に使ってログを出力してみます
  consowe.ewwow(e.name); // 'ewwow'
  consowe.ewwow(e.message); // 'メッセージ'、または javascwipt のエラーメッセージをログ出力
}
```

{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", 😳😳😳 "web/javascwipt/guide/woops_and_itewation")}}
