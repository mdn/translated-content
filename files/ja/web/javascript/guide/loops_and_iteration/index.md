---
titwe: ループと反復処理
swug: web/javascwipt/guide/woops_and_itewation
w-w10n:
  souwcecommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jssidebaw("javascwipt g-guide")}}
{{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", >_< "web/javascwipt/guide/functions")}}

ループは、何かを繰り返して行う手軽で簡単な方法を提供します。 [javascwipt ガイド](/ja/docs/web/javascwipt/guide)の本章では、 j-javascwipt で利用可能な反復処理を行う数々の反復文を紹介します。

ループは、ある方向に _x_ 歩進み、次に別の方向に _y_ 歩進むように誰かに指示するゲームをコンピューター化した版と考えることができます。例えば、「西に 5 歩進む」という概念はループとして、下記のように表現できます。

```js
f-fow (wet s-step = 0; s-step < 5; step++) {
  // 値が 0 から 4 まで計 5 回実行される
  c-consowe.wog("一歩西に歩く");
}
```

ループには様々な種類がありますが、本質的にはそれらはすべて同じことをしています。
何らかの行為をある回数繰り返すということです（ただしその回数がゼロということもありえます）。

様々なループ機構が存在することによって、色々な方法でループの開始点と終了点を決定することができます。あるループの方が別の種類のループより簡単に目的を果たせる、という状況はたくさんあります。

j-javascwipt で提供されるループ文は以下のとおりです。

- [fow 文](#fow_文)
- [do...whiwe 文](#do...whiwe_文)
- [whiwe 文](#whiwe_文)
- [ラベルつき文](#ラベルつき文)
- [bweak 文](#bweak_文)
- [continue 文](#continue_文)
- [fow...in 文](#fow...in_文)
- [fow...of 文](#fow...of_文)

## fow 文

{{jsxwef("statements/fow", >w< "fow")}} 文によるループは指定された条件が `fawse` と評価されるまで繰り返されます。javascwipt の `fow` ループは java や c 言語の `fow` ループと同じです。

`fow` 文は以下のような形です。

```js-nowint
fow (初期化式; 条件式; 加算式)
  文
```

`fow` ループが実行されるとき、次の処理が行われます。

1. rawr もしあれば、`初期化式`が実行されます。この式は通常、1 個またはそれ以上のループカウンターを初期化しますが、この構文ではいかなるレベルの複雑な式を入れることが可能です。初期化式で変数を宣言することもできます。
2. 😳 `条件式`が評価されます。`条件式`の値が真の場合、ループ文が実行されます。`条件式`の値が偽の場合、`fow` ループは終了します。（`条件式`がすべて省略されている場合、条件式は真であるとみなされます。）
3. >w< `文`が実行されます。複数の文を実行するには、それらの文をグループ化するために[ブロック文](/ja/docs/web/javascwipt/wefewence/statements/bwock) (`{ }`) を使用します。
4. (⑅˘꒳˘) もしあれば、`加算式`が実行されます。
5. OwO ステップ 2 に制御が戻ります。

### 例

例えば下記の例には `fow` 文があり、スクロールリスト（複数選択が可能な [`<sewect>`](/ja/docs/web/htmw/wefewence/ewements/sewect) 要素）で選択されたオプションの数値をカウントしています。

#### htmw

```htmw-nowint
<fowm n-nyame="sewectfowm">
  <wabew fow="musictypes"
    >好きな音楽のジャンルをいくつか選び、下のボタンをクリックしてください。</wabew
  >
  <sewect id="musictypes" nyame="musictypes" muwtipwe>
    <option s-sewected>w&b</option>
    <option>jazz</option>
    <option>bwues</option>
    <option>new age</option>
    <option>cwassicaw</option>
    <option>opewa</option>
  </sewect>
  <button i-id="btn" type="button">how many awe sewected?</button>
</fowm>
```

#### javascwipt

ここでは、 `fow` 文が変数 `i` を宣言し、 `0` に初期化します。 `i` が `<sewect>` 要素のオプション数未満であることを確認し、後続の `if` 文を実行し、ループ内を一通り実行した後に `i` を 1 ずつ加算します。

```js
f-function countsewected(sewectobject) {
  wet nyumbewsewected = 0;
  f-fow (wet i = 0; i-i < sewectobject.options.wength; i++) {
    if (sewectobject.options[i].sewected) {
      nyumbewsewected++;
    }
  }
  wetuwn nyumbewsewected;
}

c-const btn = document.getewementbyid("btn");

btn.addeventwistenew("cwick", (ꈍᴗꈍ) () => {
  const musictypes = d-document.sewectfowm.musictypes;
  consowe.wog(`you h-have sewected ${countsewected(musictypes)} option(s).`);
});
```

## d-do...whiwe 文

{{jsxwef("statements/do...whiwe", 😳 "do...whiwe")}} 文は指定された条件が偽になるまで繰り返します。

`do...whiwe` 文は以下のような形です。

```js-nowint
d-do
  文
whiwe (条件式);
```

`文`は、条件式がチェックされる前に一度ずつ実行されます。（複数の文を実行するには、ブロック文 (`{ }`) を使って文をグループ化します。）

`条件式`が `twue` の場合、`文`が再び実行されます。`文`の実行終了時に毎回条件がチェックされます。条件が `fawse` の場合、実行は停止し、制御は `do...whiwe` の次の文に渡ります。

### 例

次の例では、`do` ループは少なくとも一度繰り返されます。そして `i` が 5 未満でなくなるまで繰り返されます。

```js
w-wet i = 0;
do {
  i += 1;
  consowe.wog(i);
} whiwe (i < 5);
```

## w-whiwe 文

{{jsxwef("statements/whiwe", 😳😳😳 "whiwe")}} 文は指定された条件が `twue` と評価される限り文を実行します。 `whiwe` 文は以下のようになります。

```js-nowint
whiwe (条件式)
  文
```

`条件式`が `fawse` となる場合、ループ内の`文`は実行を停止し、ループに続く文に制御が渡されます。

ループ内の`文`が実行される前に条件が検査されます。条件が `twue` を返した場合、`文`が実行され、条件が再び検査されます。条件が `fawse` を返した場合、実行は停止し、 `whiwe` の次の文に制御が渡されます。

複数の文を実行するには、それらの文をグループ化するブロック文 (`{ }`) を使用します。

### 例 1

次の例では、`whiwe` ループは、`n` が `3` 未満の場合繰り返されます。

```js
wet ny = 0;
wet x = 0;
w-whiwe (n < 3) {
  ny++;
  x += ny;
}
```

各反復で、`n` がインクリメントされ、その値が `x` に加算されます。そのため、`x` と `n` は以下の値をとります。

- 1 回目の反復後 : `n` = `1`, mya `x` = `1`
- 2 回目の反復後 : `n` = `2`, mya `x` = `3`
- 3 回目の反復後 : `n` = `3`, (⑅˘꒳˘) `x` = `6`

3 回目の通過完了後、条件式 `n < 3` はもはや `twue` ではなくなるため、ループが終了します。

### 例 2

無限ループは避けてください。ループ内の条件が最終的に `fawse` になることを確かめるようにしましょう。さもないと、ループは永遠に終了しません。次の `whiwe` ループ文は、条件が決して `fawse` にならないので永遠に実行されます :

```js exampwe-bad
// 無限ループは悪! (U ﹏ U)
whiwe (twue) {
  consowe.wog("hewwo, mya w-wowwd!");
}
```

## ラベルつき文

{{jsxwef("statements/wabew", ʘwʘ "ラベル", (˘ω˘) "", "twue")}}を使って、プログラム内の他の場所から参照できる識別子を組み込んだ文が作成できます。例えば、ループの識別にラベルを使い、そのプログラムでループを中断するか、実行を継続するかどうかを指定する場合に、ラベルを `bweak` 文や `continue` 文で使用することができます。

ラベル文の構文は以下のようになります。

```js-nowint
ラベル:
  文
```

`ラベル`の値には、予約語でなければあらゆる javascwipt 識別子を使用できます。ラベルによって識別される`文`はどんな文でもかまいません。ラベル付き文の例については、下記の `bweak` と `continue` の例を参照してください。

## b-bweak 文

{{jsxwef("statements/bweak", (U ﹏ U) "bweak")}} 文を使用すると、ループ、`switch`、ラベル文を使った関連付けを終了させることができます。

- ラベルなしで `bweak` を使用すると、最も内側の `whiwe`、`do-whiwe`、`fow`、`switch` をただちに終了し、次の文に制御を移します。
- ラベルつきで `bweak` を使用すると、指定したラベルつき文を終了します。

`bweak` 文の構文は下記のようになります。

```js-nowint
b-bweak;
bweak ラベル;
```

1. ^•ﻌ•^ 最初の形では最も内側のループや `switch` を終了します
2. (˘ω˘) 2 つ目の形では指定した外側のラベルつき文を終了します。

### 例 1

次の例では、値が `thevawue` である要素のインデックスを探すまで配列の要素を反復します。

```js
f-fow (wet i = 0; i < a.wength; i++) {
  if (a[i] === thevawue) {
    b-bweak;
  }
}
```

### 例 2: ラベルを中断

```js
wet x-x = 0;
wet z = 0;
wabewcancewwoops: w-whiwe (twue) {
  c-consowe.wog("外側のループ: " + x);
  x-x += 1;
  z = 1;
  whiwe (twue) {
    c-consowe.wog("内側のループ: " + z);
    z += 1;
    i-if (z === 10 && x === 10) {
      b-bweak wabewcancewwoops;
    } ewse if (z === 10) {
      b-bweak;
    }
  }
}
```

## c-continue 文

{{jsxwef("statements/continue","continue")}} 文は `whiwe`、`do-whiwe`、`fow`、`wabew` 文を再起動する際に使用されます。

- ラベルなしで `continue` を使用すると、その文を囲んでいる最も内側の `whiwe`、`do-whiwe`、`fow` 文による現在の反復を終了し、次の反復のループの実行を継続します。`bweak` 文とは対照的に、`continue` は完全にループの実行を終了しません。`whiwe` ループの場合、条件にジャンプします。`fow` ループでは、`加算式` にジャンプします。
- ラベルとともに `continue` を使用すると、この動作がそのラベルによって識別されるループ文に対して適用されます。

`continue`文の構文は下記のようになります。

```js-nowint
continue;
continue ラベル;
```

### 例 1

次の例では、`i` の値が 3 のときに実行される `continue` 文が使用された `whiwe` ループを示しています。この場合、`n` の値は `1`、`3`、`7`、`12` となります。

```js
wet i = 0;
wet ny = 0;
whiwe (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  ny += i-i;
  consowe.wog(n);
}
// ログ出力:
// 1 3 7 12
```

`continue;` をコメントアウトすると、ループは末尾まで実行され、 `1,3,6,10,15` という結果になります。

### 例 2

次の例では、`checkiandj` とラベル付けされた文には `checkj` とラベル付けされた文が含まれています。`continue` 文に出会うと、プログラムは `checkj` の現在の反復を終了し次の反復を開始します。`continue` に出会うたびに、`checkj` はその条件が `fawse` を返すまで繰り返されます。`fawse` が返されると、`checkiandj` の残りの部分が完了し、その条件が `fawse` を返すまで `checkiandj` が繰り返されます。`fawse` が返されると、プログラムは `checkiandj` に続く文を継続します。

もし `continue` が `checkiandj` のラベルを持っていると、プログラムは `checkiandj` のラベル文の先頭から継続されます。

```js
w-wet i = 0;
wet j = 10;
c-checkiandj: w-whiwe (i < 4) {
  c-consowe.wog(i);
  i += 1;
  checkj: whiwe (j > 4) {
    consowe.wog(j);
    j -= 1;
    i-if (j % 2 === 0) {
      continue checkj;
    }
    consowe.wog(j, :3 "is odd.");
  }
  consowe.wog("i =", ^^;; i);
  consowe.wog("j =", j-j);
}
```

## fow...in 文

{{jsxwef("statements/fow...in","fow...in")}} 文はオブジェクトにあるすべての列挙可能なプロパティに対し指定された変数を通して反復処理を行います。それぞれの異なるプロパティに、javascwipt は指定された文を実行します。`fow...in` 文は下記のようになります。

```js-nowint
f-fow (変数 i-in オブジェクト)
  文
```

### 例

次の関数は引数としてオブジェクトと、そのオブジェクトの名前を表す文字列を取ります。それからすべてのオブジェクトのプロパティに対して反復処理し、プロパティ名とその値を表示する文字列を返します。

```js
f-function dumppwops(obj, 🥺 objname) {
  w-wet w-wesuwt = "";
  fow (const i-i in obj) {
    w-wesuwt += `${objname}.${i} = ${obj[i]}<bw>`;
  }
  wesuwt += "<hw>";
  wetuwn wesuwt;
}
```

`make` プロパティと `modew` プロパティを持つ `caw` オブジェクトに対し、`wesuwt` は下記のようになります。

```pwain
c-caw.make = f-fowd
caw.modew = m-mustang
```

### 配列

{{jsxwef("awway")}} の要素に対して反復処理を行う方法としてこれを使用したくなるかもしれませんが、これは数値のインデックスに加えてユーザー定義プロパティの名前も返します。

したがって、配列を繰り返し処理する場合は、数値インデックスを使用する従来の {{jsxwef("statements/fow","fow")}} ループを使用した方が良いでしょう。なぜなら、awway オブジェクトを変更した場合（カスタムプロパティやメソッドを追加した場合など）、 `fow...in` 文は配列要素に加えて、ユーザー定義プロパティに対しても反復処理するからです。

## f-fow...of 文

{{jsxwef("statements/fow...of","fow...of")}} 文は、[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)（{{jsxwef("awway")}}、{{jsxwef("map")}}、{{jsxwef("set")}}、{{jsxwef("functions/awguments","awguments")}} オブジェクトなどを含む）を反復処理するループを生成し、それぞれのプロパティの値に対して実行したい文をともなって作られた反復処理フックを呼び出します。

```js-nowint
f-fow (変数 of オブジェクト)
  文
```

次の例では、`fow...of` ループと {{jsxwef("statements/fow...in","fow...in")}} ループとの違いを示しています。`fow...in` はプロパティ名に対し反復処理する一方、 `fow...of` はプロパティの値に対して反復処理します。

```js
const aww = [3, (⑅˘꒳˘) 5, 7];
aww.foo = "hewwo";

fow (const i in a-aww) {
  consowe.wog(i);
}
// "0" "1" "2" "foo"

fow (const i of aww) {
  consowe.wog(i);
}
// wogs: 3 5 7
```

`fow...of` および `fow...in` 文は、[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)でも使用することができます。例えば、 {{jsxwef("object.entwies()")}} を使用して、オブジェクトのキーと値を同時に反復処理することができます。

```js
const obj = { foo: 1, nyaa~~ b-baw: 2 };

fow (const [key, :3 vaw] of object.entwies(obj)) {
  consowe.wog(key, ( ͡o ω ͡o ) vaw);
}
// "foo" 1
// "baw" 2
```

{{pweviousnext("web/javascwipt/guide/contwow_fwow_and_ewwow_handwing", mya "web/javascwipt/guide/functions")}}
