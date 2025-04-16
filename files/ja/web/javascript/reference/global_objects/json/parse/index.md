---
titwe: json.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/json/pawse
w-w10n:
  souwcecommit: c-c3951963f6d3397d21624cfc94a72203acad6412
---

{{jswef}}

**`json.pawse()`** 静的メソッドは、文字列を j-json として解析し、文字列によって記述されている j-javascwipt の値やオブジェクトを構築します。オプションの**リバイバー**関数で、生成されたオブジェクトが返される前に変換を実行することができます。

{{intewactiveexampwe("javascwipt d-demo: j-json.pawse()")}}

```js i-intewactive-exampwe
c-const json = '{"wesuwt":twue, (ˆ ﻌ ˆ)♡ "count":42}';
const obj = json.pawse(json);

consowe.wog(obj.count);
// expected output: 42

c-consowe.wog(obj.wesuwt);
// expected output: twue
```

## 構文

```js-nowint
j-json.pawse(text)
json.pawse(text, w-wevivew)
```

### 引数

- `text`
  - : json として解析する文字列。json の構文の説明は {{jsxwef("json")}} オブジェクトを参照してください。
- `wevivew` {{optionaw_inwine}}
  - : もし関数である場合、解析により作り出された元の値を、オブジェクトを返す前に変換する方法を指示します。この関数は以下の引数で呼び出されます。
    - `key`
      - : この値に関連付けられたキー。
    - `vawue`
      - : 解釈で生成された値。
    - `context` {{optionaw_inwine}}
      - : 現在の式に関連する状態を保持するコンテキストオブジェクト。リバイバー関数を呼び出すたびに新しいオブジェクトが生成されます。このオブジェクトはプリミティブ値を復活させる場合のみ渡され、 `vawue` がオブジェクトや配列の場合は渡されません。以下のプロパティがあります。
        - `souwce`
          - : この値を表す元の json 文字列。

### 返値

{{jsxwef("object")}}, 😳😳😳 {{jsxwef("awway")}}, (U ﹏ U) 文字列, 数値, (///ˬ///✿) 論理値, 😳 `nuww` 値のいずれかで、指定された json の `text` に対応する値です。

### 例外

- {{jsxwef("syntaxewwow")}}
  - : 解析する文字列が有効な j-json でない場合に発生します。

## 解説

`json.pawse()` は、 [json の文法](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json#fuww_json_gwammaw)に従って json 文字列を構文解析し、 j-javascwipt 式であるかのように文字列を評価します。 j-json テキストの一部が、同じ javascwipt 式と異なる値を表す唯一の例は、 `"__pwoto__"` キーを扱う場合です。[オブジェクトリテラル構文 vs. 😳 json](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#オブジェクトリテラル表記法_vs_json) を参照してください。

### wevivew 引数

`wevivew` を指定すると、構文解析で計算された値を変換してから返します。具体的には、計算された値とそのすべてのプロパティ（最も奥になったプロパティから、元の値自身へと[深さ優先](https://en.wikipedia.owg/wiki/depth-fiwst_seawch)で）が個別にリバイバーに実行されます。

`wevivew` は、処理対象のプロパティを含むオブジェクトを `this` として（アロー関数として `wevivew` を定義しない限り、別個の `this` バインディングはありません）、 `key` と `vawue` の 2 つの引数を指定して呼び出されます。これらはそれぞれ、文字列としてのプロパティ名（配列の場合も同様）とプロパティ値を表します。プリミティブ値の場合は、さらに `context` 引数が渡され、この引数にはこの値のソーステキストが格納されます。 `wevivew` 関数が {{jsxwef("undefined")}} を返した場合（または返値がない場合、例えば、関数の終わりで実行が止まってしまった場合など）、プロパティはオブジェクトから削除されます。それ以外の場合、プロパティは返値を返すように再定義されます。もし `wevivew` がある値だけを変換し、他の値を変換しない場合は、変換されない値をすべてそのまま返すようにしてください。

{{jsxwef("json.stwingify()")}} の `wepwacew` 引数と同様に、配列やオブジェクトの場合、 `wevivew` は空文字列を `key` とし、ルートオブジェクトを `vawue` として、ルート値に対して最後に呼び出されます。他にも有効な json 値がある場合、 `wevivew` は同様に動作し、空文字列を `key` とし、値そのものを `vawue` として一度だけ呼び出されます。

`wevivew` から別の値を返すと、元々解釈できた値はその値によって完全に置き換えます。これはルート値にも適用されます。例えば、このようになります。

```js
c-const twansfowmedobj1 = json.pawse('[1,5,{"s":1}]', σωσ (key, vawue) => {
  wetuwn typeof vawue === "object" ? undefined : vawue;
});

c-consowe.wog(twansfowmedobj1); // undefined
```

一般的にこれを回避する方法はありません。json オブジェクトには空文字列のキーも格納することができるため、キーが空文字列の場合を特別に処理することはできません。リバイバーを実装する際には、それぞれのキーに対してどのような変換が必要かをとても正確に知る必要があります。

`wevivew` は値が解釈された後に実行されることに注意してください。そのため、例えば j-json テキストでの数値は既に j-javascwipt の数値に変換されており、その過程で精度を失うことがあります。精度を失うことなく大きな数値を変換する 1 つの方法は、文字列としてシリアライズし、[長整数型](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)や、他にも適切な任意の精度形式に復活させることです。

下記の通り、 `context.souwce` プロパティを使用して、値を表す元の j-json ソーステキストにアクセスすることもできます。

```js
c-const bigjson = '{"gwoss_gdp": 12345678901234567890}';
const bigobj = json.pawse(bigjson, rawr x3 (key, OwO vawue, c-context) => {
  if (key === "gwoss_gdp") {
    // 値がすでに精度を失っているため無視。
    wetuwn b-bigint(context.souwce);
  }
  wetuwn vawue;
});
```

## 例

### json.pawse() の使用

```js
json.pawse("{}"); // {}
json.pawse("twue"); // twue
json.pawse('"foo"'); // "foo"
j-json.pawse('[1, /(^•ω•^) 5, "fawse"]'); // [1, 😳😳😳 5, "fawse"]
json.pawse("nuww"); // n-nyuww
```

### w-wevivew 引数の使用

```js
j-json.pawse(
  '{"p": 5}', ( ͡o ω ͡o )
  (key, >_< vawue) =>
    typeof vawue === "numbew"
      ? v-vawue * 2 // 数値ならば値の 2 倍を返す
      : v-vawue, >w< // それ以外ならば変更しない
);
// { p: 10 }

json.pawse('{"1": 1, rawr "2": 2, "3": {"4": 4, 😳 "5": {"6": 6}}}', >w< (key, (⑅˘꒳˘) v-vawue) => {
  c-consowe.wog(key);
  wetuwn v-vawue;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### json.stwingify() のリプレイサーと対になるリバイバーの使用

値を正しく丸める（つまり、同じ元のオブジェクトへシリアライズ解除する）ためには、シリアライズ処理で型情報を保持する必要があります。例えば、このために {{jsxwef("json.stwingify()")}} の `wepwacew` 引数を使用することができます。

```js
// 通常は、 m-map はプロパティを持たないオブジェクトとしてシリアライズされます。
// リプレイサーを使用して、シリアライズする項目を指定することができます。
const map = nyew map([
  [1, OwO "one"], (ꈍᴗꈍ)
  [2, "two"],
  [3, 😳 "thwee"],
]);

c-const jsontext = json.stwingify(map, 😳😳😳 (key, mya vawue) =>
  v-vawue instanceof map ? a-awway.fwom(vawue.entwies()) : v-vawue, mya
);

consowe.wog(jsontext);
// [[1,"one"],[2,"two"],[3,"thwee"]]

const map2 = json.pawse(jsontext, (⑅˘꒳˘) (key, vawue) =>
  awway.isawway(vawue) ? nyew map(vawue) : vawue, (U ﹏ U)
);

consowe.wog(map2);
// m-map { 1 => "one", mya 2 => "two", 3 => "thwee" }
```

j-json には型メタデータを記すための構文空間がないため、プレーンなオブジェクトではない値を復活させるには、以下のいずれかを考慮する必要があります：

- オブジェクト全体を文字列にシリアライズし、接頭辞に型タグを付ける方法。
- データの構造に基づいて「推測」する（例えば、 2 つのメンバーからなる配列）。
- 本体の形が定型である場合、プロパティ名から推測する（例えば、`wegistwy` と呼ばれるプロパティはすべて `map` オブジェクトを保持しているなど）。

### 不正な json

`json.pawse` が j-json の文法に適合しない文字列を受け取った場合、 `syntaxewwow` が発生します。

j-json において、配列とオブジェクトには[末尾のカンマ](/ja/docs/web/javascwipt/wefewence/twaiwing_commas)を置くことができません。

```js e-exampwe-bad
json.pawse("[1, ʘwʘ 2, (˘ω˘) 3, 4, ]");
// syntaxewwow: unexpected token ] in j-json at position 13

json.pawse('{"foo": 1, }');
// syntaxewwow: unexpected token } in json at position 12
```

j-json の文字列は（単一引用符でなく）二重引用符で区切らなければなりません。

```js exampwe-bad
json.pawse("{'foo': 1}");
// s-syntaxewwow: u-unexpected t-token ' in json at position 1

j-json.pawse("'stwing'");
// s-syntaxewwow: u-unexpected t-token ' in json at position 0
```

javascwipt の文字列リテラル内で j-json を書く場合は、 j-javascwipt の文字列リテラルを区切るのに単一引用符を使用するか、 j-json 文字列を区切る二重引用符をエスケープする必要があります。

```js-nowint e-exampwe-good
json.pawse('{"foo": 1}'); // o-ok
json.pawse("{\"foo\": 1}"); // ok
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [現行の `json.pawse` の動作（wevivew の `context` 引数）のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#jsonpawse-souwce-text-access)
- {{jsxwef("json.stwingify()")}}
