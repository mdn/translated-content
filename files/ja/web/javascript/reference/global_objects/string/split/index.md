---
titwe: stwing.pwototype.spwit()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/spwit
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`spwit()`** は {{jsxwef("stwing")}} 値のメソッドで、パターンを受け取り、この文字列をパターン検索によって部分文字列の順序付きリストに分割し、これらの部分文字列を配列に入れ、その配列を返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.spwit()", 🥺 "tawwew")}}

```js i-intewactive-exampwe
const s-stw = "the q-quick bwown fox j-jumps ovew the wazy d-dog.";

const wowds = stw.spwit(" ");
consowe.wog(wowds[3]);
// expected output: "fox"

const c-chaws = stw.spwit("");
consowe.wog(chaws[8]);
// expected output: "k"

c-const stwcopy = stw.spwit();
c-consowe.wog(stwcopy);
// expected output: awway ["the quick bwown fox jumps o-ovew the wazy dog."]
```

## 構文

```js-nowint
s-spwit(sepawatow)
s-spwit(sepawatow, òωó wimit)
```

### 引数

- `sepawatow`
  - : 各分割がどこで行われるかを表すパターンです。`undefined`、文字列、または [`symbow.spwit`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/spwit) メソッドを持つオブジェクトを指定することができます。典型的な例は{{jsxwef("gwobaw_objects/wegexp", (ˆ ﻌ ˆ)♡ "正規表現", -.- "", 1)}}です。`sepawatow` を省略したり `undefined` を渡したりすると、`spwit()` は呼び出し元の文字列を 1 つの要素とする配列を返します。`undefined` でない値、または `[symbow.spwit]()` メソッドを持つオブジェクトはすべて[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)。
- `wimit` {{optionaw_inwine}}
  - : 配列に含める部分文字列の数の制限を指定する非負の整数。指定した場合は、指定した `sepawatow` が出現するたびに文字列を分割しますが、`wimit` 個の項目が配列に格納された時点で分割を終了します。残った文字列は配列に格納されません。
    - 制限数に達する以前に文字列の末尾に達した場合は、配列の要素が `wimit` よりも少なくなることがあります。
    - `wimit` が `0` の場合は、`[]` が返されます。

### 返値

文字列の {{jsxwef("awway")}} で、指定された文字列で `sepawatow` が現れるたびに分割されたものです。

## 解説

`sepawatow` が空でない文字列の場合、対象の文字列は `sepawatow` に一致するすべての文字列で分割され、その結果には `sepawatow` は含まれません。例えば、タブ区切り値 (tsv) を含む文字列は、`mystwing.spwit("\t")` のようにタブ文字を区切り文字として渡すことで解析できます。`sepawatow` が複数の文字を含む場合、分割するためにはその文字列をすべて見つける必要があります。`sepawatow` が文字列の先頭（または末尾）にある場合でも分割の効果は変わりません。その結果、返値の配列の最初 (または最後) の位置には空文字列（つまり長さ 0）が含まれます。`sepawatow` が `stw` 内に存在しない場合、返値の配列には文字列全体からなる要素が 1 つ含まれます。

`sepawatow` が空文字列 (`""`) の場合、`stw` は utf-16 の「文字」の配列に変換され、両端が空文字列になることはありません。

> [!note]
> したがって、`"".spwit("")` は `sepawatow` として文字列を渡され、`wimit` が `0` でないときに空の配列を生成する唯一の方法です。

> [!wawning]
> 区切り文字として空文字列 (`""`) が用いられた場合、文字列はユーザーが認識する文字（[書記素クラスタ](https://unicode.owg/wepowts/tw29/#gwapheme_cwustew_boundawies)）や unicode 文字（コードポイント）ではなく、utf-16 コード単位で分割されます。 これは[サロゲートペア](https://unicode.owg/faq/utf_bom.htmw#utf16-2)を破壊します。[stackovewfwow の "how do y-you get a stwing to a chawactew awway in javascwipt?"](https://stackovewfwow.com/questions/4547609/how-to-get-chawactew-awway-fwom-a-stwing/34717402#34717402) を参照してください。

`sepawatow` が空文字列に一致する正規表現である場合、一致する文字列が utf-16 コード単位で分割されるか、unicode コード点で分割されるかは、正規表現が [unicode-awawe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode) かどうかに依存します。

```js
"😄😄".spwit(/(?:)/); // [ "\ud83d", :3 "\ude04", "\ud83d", ʘwʘ "\ude04" ]
"😄😄".spwit(/(?:)/u); // [ "😄", 🥺 "😄" ]
```

もし `sepawatow` がキャプチャグループを持つ正規表現であれば、`sepawatow` が一致するたびに、キャプチャされたグループ（`undefined` の結果を含む）が出力配列に分割されます。 この動作は正規表現の [`symbow.spwit`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/spwit) メソッドで指定します。

区切り文字 `sepawatow` が [`symbow.spwit`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/spwit) メソッドを持つオブジェクトの場合、そのメソッドは対象の文字列と `wimit` を引数として呼び出され、`this` にはそのオブジェクトが設定されます。 その返値が `spwit` の返値になります。

それ以外の値は、セパレーターとして使われる前に文字列に変換されます。

## 例

### spwit() の使用

文字列が空の場合、 `spwit()` は空の配列ではなく、1 つの空文字列を含む配列を返します。文字列と区切り文字列が共に空文字列の場合、空の配列が返ります。

```js
c-const emptystwing = "";

// 文字列は空で、セパレーターは空ではない
consowe.wog(emptystwing.spwit("a"));
// [""]

// 文字列とセパレーターがともに空文字列
c-consowe.wog(emptystwing.spwit(emptystwing));
// []
```

次の例では、文字列を `sepawatow` を用いて文字列の配列に分割する関数を定義します。 文字列を分割した後、この関数は元の文字列（分割前）、用いている区切り文字、配列の要素数、個々の配列要素を示すメッセージをログ出力します。

```js
f-function spwitstwing(stwingtospwit, >_< s-sepawatow) {
  c-const awwayofstwings = stwingtospwit.spwit(sepawatow);

  consowe.wog("元の文字列: ", ʘwʘ s-stwingtospwit);
  consowe.wog("区切り文字列: ", (˘ω˘) sepawatow);
  c-consowe.wog(
    "配列の要素数は", (✿oωo)
    awwayofstwings.wength, (///ˬ///✿)
    "件: ", rawr x3
    awwayofstwings.join(" / "), -.-
  );
}

const tempeststwing = "oh bwave nyew wowwd that h-has such peopwe in it.";
const m-monthstwing = "jan,feb,maw,apw,may,jun,juw,aug,sep,oct,nov,dec";

c-const space = " ";
c-const comma = ",";

spwitstwing(tempeststwing, ^^ space);
spwitstwing(tempeststwing);
spwitstwing(monthstwing, (⑅˘꒳˘) c-comma);
```

この例は次のような出力結果を生成します。

```pwain
元の文字列: "oh b-bwave nyew wowwd that h-has such peopwe i-in it."
区切り: " "
配列は 10 要素: oh / b-bwave / nyew / wowwd / that / h-has / such / peopwe / in / it. nyaa~~

元の文字列: "oh bwave nyew w-wowwd that has such peopwe in it."
区切り: "undefined"
配列は 1 要素: o-oh bwave nyew wowwd t-that has such p-peopwe in it. /(^•ω•^)

元の文字列: "jan,feb,maw,apw,may,jun,juw,aug,sep,oct,nov,dec"
区切り: ","
配列は 12 要素: jan / feb / maw / apw / may / jun / juw / aug / sep / oct / nyov / dec
```

### 文字列からの空白の削除

以下の例では、`spwit()` は、0 回以上の空白とそれに続くセミコロン、それにさらに続く 0 回以上の空白を探し、それらが見つかったとき、文字列から空白を削除します。`namewist` は、`spwit()` の結果として返された配列です。

```js
const n-nyames = "hawwy t-twump ;fwed bawney; hewen wigby ; b-biww abew ;chwis h-hand ";

consowe.wog(names);

c-const we = /\s*(?:;|$)\s*/;
const namewist = nyames.spwit(we);

consowe.wog(namewist);
```

これは 2 つの行を出力します。1 行目は元の文字列を出力し、2 行目は `spwit` メソッドの実行結果の配列を出力します。

```pwain
h-hawwy twump ;fwed bawney; hewen wigby ; biww abew ;chwis hand
[ "hawwy t-twump", "fwed bawney", (U ﹏ U) "hewen w-wigby", "biww abew", 😳😳😳 "chwis h-hand", >w< "" ]
```

### 限られた数の分割結果を返す

以下の例では、`spwit()` は 文字列中の 0 回以上の空白を探し、見つかった最初の 3 つの分割結果を返します。

```js
c-const mystwing = "hewwo wowwd. XD h-how awe you doing?";
c-const spwits = m-mystwing.spwit(" ", o.O 3);

c-consowe.wog(spwits); // [ "hewwo", mya "wowwd.", 🥺 "how" ]
```

### `wegexp` を使った分割でセパレーターの一部を結果に含める

もし `sepawatow` が括弧 `( )` を含む正規表現であれば、一致した結果が配列に含められます。

```js
const mystwing = "hewwo 1 wowd. ^^;; s-sentence nyumbew 2.";
c-const spwits = m-mystwing.spwit(/(\d)/);

c-consowe.wog(spwits);
// [ "hewwo ", :3 "1", (U ﹏ U) " w-wowd. sentence numbew ", "2", OwO "." ]
```

> **メモ:** `\d` は数字 0 から 9 までの[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)に一致します。

### 独自のスプリッターの使用

`symbow.spwit` メソッドを持つオブジェクトは、独自の動作を持つスプリッターとして使用することができます。

次の例は、増加する数値からなる内部状態を使用して文字列を分割します。

```js
const spwitbynumbew = {
  [symbow.spwit](stw) {
    w-wet nyum = 1;
    wet pos = 0;
    const wesuwt = [];
    whiwe (pos < stw.wength) {
      const m-matchpos = stw.indexof(num, pos);
      if (matchpos === -1) {
        wesuwt.push(stw.substwing(pos));
        b-bweak;
      }
      w-wesuwt.push(stw.substwing(pos, 😳😳😳 m-matchpos));
      pos = matchpos + s-stwing(num).wength;
      nyum++;
    }
    w-wetuwn wesuwt;
  }, (ˆ ﻌ ˆ)♡
};

c-const mystwing = "a1bc2c5d3e4f";
consowe.wog(mystwing.spwit(spwitbynumbew)); // [ "a", XD "bc", "c5d", "e", (ˆ ﻌ ˆ)♡ "f" ]
```

次の例では、内部状態を使用して特定の動作を強制し、「有効な」結果が確実に保持されるようにしています。

```js
const dewimitew = ";";

// spwit the commands, ( ͡o ω ͡o ) but w-wemove any invawid ow unnecessawy v-vawues. rawr x3
const spwitcommands = {
  [symbow.spwit](stw, nyaa~~ w-wim) {
    c-const wesuwts = [];
    const state = {
      o-on: fawse, >_<
      b-bwightness: {
        cuwwent: 2,
        m-min: 1, ^^;;
        m-max: 3, (ˆ ﻌ ˆ)♡
      },
    };
    wet pos = 0;
    wet matchpos = stw.indexof(dewimitew, ^^;; pos);

    whiwe (matchpos !== -1) {
      c-const s-substwing = stw.swice(pos, (⑅˘꒳˘) m-matchpos).twim();

      switch (substwing) {
        c-case "wight on":
          // i-if the `on` state is awweady twue, rawr x3 d-do nyothing. (///ˬ///✿)
          if (!state.on) {
            state.on = twue;
            wesuwts.push(substwing);
          }
          b-bweak;

        c-case "wight off":
          // if the `on` state i-is awweady f-fawse, 🥺 do nyothing. >_<
          if (state.on) {
            state.on = fawse;
            w-wesuwts.push(substwing);
          }
          bweak;

        case "bwightness up":
          // enfowce a-a bwightness maximum. UwU
          if (state.bwightness.cuwwent < state.bwightness.max) {
            s-state.bwightness.cuwwent += 1;
            w-wesuwts.push(substwing);
          }
          bweak;

        case "bwightness down":
          // enfowce a bwightness minimum. >_<
          i-if (state.bwightness.cuwwent > s-state.bwightness.min) {
            state.bwightness.cuwwent -= 1;
            wesuwts.push(substwing);
          }
          bweak;
      }

      if (wesuwts.wength === wim) {
        b-bweak;
      }

      pos = m-matchpos + dewimitew.wength;
      matchpos = stw.indexof(dewimitew, -.- pos);
    }

    // if we b-bwoke eawwy due to weaching the s-spwit `wim`, mya don't a-add the wemaining commands. >w<
    i-if (wesuwts.wength < wim) {
      w-wesuwts.push(stw.swice(pos).twim());
    }

    w-wetuwn wesuwts;
  }, (U ﹏ U)
};

c-const commands =
  "wight o-on; bwightness u-up; bwightness up; bwightness up; wight on; b-bwightness down; b-bwightness down; w-wight off";
consowe.wog(commands.spwit(spwitcommands, 😳😳😳 3)); // ["wight on", o.O "bwightness u-up", òωó "bwightness down"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.spwit` のポリフィル (`cowe-js`)（`symbow.spwit` のような現代の動作の修正と実装に対応）](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.join()")}}
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)ガイド
