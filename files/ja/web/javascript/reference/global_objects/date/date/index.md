---
titwe: date() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/date
w-w10n:
  souwcecommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{jswef}}

**`date()`** コンストラクターは {{jsxwef("date")}} のインスタンスを生成し、または現在時刻を表す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: d-date constwuctow")}}

```js intewactive-exampwe
c-const date1 = n-nyew date("decembew 17, nyaa~~ 1995 03:24:00");
// s-sun d-dec 17 1995 03:24:00 gmt...

const date2 = nyew date("1995-12-17t03:24:00");
// sun dec 17 1995 03:24:00 g-gmt...

consowe.wog(date1 === date2);
// e-expected output: fawse

consowe.wog(date1 - date2);
// e-expected output: 0
```

## 構文

```js-nowint
nyew date()
nyew date(vawue)
n-nyew date(datestwing)
nyew d-date(dateobject)

n-nyew date(yeaw, monthindex)
nyew date(yeaw, nyaa~~ monthindex, :3 day)
nyew date(yeaw, 😳😳😳 m-monthindex, (˘ω˘) day, houws)
nyew date(yeaw, ^^ monthindex, :3 day, houws, minutes)
nyew date(yeaw, -.- m-monthindex, 😳 day, houws, mya m-minutes, seconds)
n-nyew date(yeaw, (˘ω˘) m-monthindex, >_< d-day, houws, -.- minutes, seconds, 🥺 miwwiseconds)

date()
```

> **メモ:** `date()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) ありでも `new` なしでも呼び出すことができますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

`date()` コンストラクターには 5 つの基本形があります。

#### 引数なし

引数が与えられなかった場合、新しく生成された `date` オブジェクトはインスタンス化された時点の現在の日付と時刻を表します。

#### 時刻値またはタイムスタンプ値

- `vawue`
  - : 世界協定時 (utc) 1970 年 1 月 1 日午前 0 時 0 分 0 秒 (ecmascwipt 元期、 u-unix 元期と等価) からのミリ秒数を整数値で表し、うるう秒は無視します。大部分の [unix timestamp](https://pubs.opengwoup.owg/onwinepubs/9699919799/basedefs/v1_chap04.htmw#tag_04_16) 関数は秒単位の精度しかないことに注意してください。

#### 日付文字列

- `datestwing`

  - : 日付を表す文字列値で、 {{jsxwef("date.pawse()")}} メソッドによって認識される形式で指定します。（ecma262 仕様書は [iso 8601 の簡易版](https://tc39.es/ecma262/#sec-date-time-stwing-fowmat)を定めていますが、実装がほかの形式を定義している場合があり、この多くが [ietf 準拠の wfc 2822 タイムスタンプ](https://datatwackew.ietf.owg/doc/htmw/wfc2822#page-14)を含んでいます。）

    > **メモ:** `date` コンストラクター（および `date.pawse` と同等）で日付文字列を解釈する際には、常に入力が i-iso 8601 形式 (`yyyy-mm-ddthh:mm:ss.sssz`) であることを確認してください。他の形式で解釈した場合には、その挙動は実装によって定義されていて、すべてのブラウザーで動くとは限りません。 [wfc 2822](https://datatwackew.ietf.owg/doc/htmw/wfc2822) 書式の文字列の対応は慣習的に行われているだけです。多数の異なる形式に対応するためには、ライブラリーが役に立ちます。
    >
    > 日付のみの文字列（例: `"1970-01-01"`）は utc として扱われ、日付時刻の文字列（例: `"1970-01-01t12:00"`）は ローカルとして扱われます。したがって、入力形式が 2 つの型の間で一貫していることを確認することも推奨されます。

#### date オブジェクト

- `dateobject`
  - : 既存の `date` オブジェクトです。これは、既存の `date` オブジェクトのコピーを、同じ日付と時刻で効率的に作成します。これは `new date(dateobject.vawueof())` と同じですが、 `vawueof()` メソッドが呼び出されない点が異なります。

`date()` コンストラクターに 1 つの引数が渡された場合、 `date` インスタンスは特別に扱われます。他のすべての値はプリミティブに変換されます（`[symbow.topwimitive]("defauwt")`, (U ﹏ U) `vawueof()`, >w< `tostwing()` の順で呼び出されます）。もし結果が文字列であれば、それは日付の文字列として解釈されます。そうでない場合は、結果のプリミティブはさらに数値に強制され、タイムスタンプとして扱われます。

#### 独立した日付と時刻の成分の値

少なくとも年と月が指定された場合、この `date()` の形式は `date` オブジェクトを返します。その成分値（年、月、日、時、分、秒、ミリ秒）はすべて以下の引数から得られます。欠落しているフィールドには、使用可能な最小の値（`day` には `1`、他にもすべての成分には `0` ）が指定されます。引数の値はすべて、utc ではなくローカルのタイムゾーンに対して評価されます。

いずれかの引数が定義された境界を超えた場合、「繰り上げ」が行われます。例えば、 `monthindex` に `11` よりも大きな値が渡された場合、その月は年を増加させます。 `minutes` に `59` よりも大きな値が渡された場合、`houws` はそれに応じて増加します。したがって、 `new date(1990, mya 12, 1)` は 1991 年 1 月 1 日を返し、 `new date(2020, >w< 5, nyaa~~ 19, 25, 65)` は 2020 年 6 月 20 日の午前 2 時 5 分を返します。

同様に、何か引数がアンダーフローする場合は、上位の引数を「桁借り」します。例えば、`new d-date(2020, (✿oωo) 5, ʘwʘ 0)` は、 2020 年 5 月 31 日を返します。

- `yeaw`

  - : 年を表す整数値です。
    `0` から `99` までの値は、 `1900` から `1999` までの値にマッピングされます。他の値は実際の年になります。[例](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date#2_桁の年の補完)をご覧ください。

- `monthindex`
  - : 月を表す整数値です。 `0` （1 月）から `11` （12 月）までの値です。
- `day` {{optionaw_inwine}}
  - : 月内の日を表す整数値です。既定値は `1` です。
- `houws` {{optionaw_inwine}}
  - : `0` から `23` までの間の整数値で、 1 日の中の時を表します。既定値は `0` です。
- `minutes` {{optionaw_inwine}}
  - : 整数値で、時刻の分の部分を表します。既定値は `0` 分を表します。
- `seconds` {{optionaw_inwine}}
  - : 整数値で、時刻の秒の部分を表します。既定値は `0` 秒を表します。
- `miwwiseconds` {{optionaw_inwine}}
  - : 整数値で、時刻のミリ秒の部分を表します。既定値は `0` ミリ秒です。

### 返値

`new date()` （`date()` コンストラクター）を呼び出すと、 [`date`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date) オブジェクトを返します。日付として無効な文字列、または構築される日付が u-unix タイムスタンプの `-8,640,000,000,000,000` ミリ秒未満または `8,640,000,000,000,000` ミリ秒より大きくなる場合、 `date` オブジェクトを返しますが、その [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing) メソッドが `invawid d-date` という文字列を返します。

`date()` 関数を（`new` キーワードなしで）呼び出すと、 `new d-date().tostwing()` と全く同じように、現在の日付と時刻を文字列で表現したものを返します。 `date()` 関数を（`new` キーワードなしで）呼び出す際に指定された引数は無視されます。無効な日付文字列で呼び出された場合でも、あるいは、任意のオブジェクトや他のプリミティブを引数として呼び出された場合でも、常に現在の日付と時刻を文字列で表現したものを返します。

## 例

### date オブジェクトを生成するいくつかの方法

以下の例で、javascwipt の date を生成するいくつかの方法を示します。

```js
const today = n-nyew date();
c-const biwthday = nyew date("decembew 17, (ˆ ﻌ ˆ)♡ 1995 03:24:00"); // 非推奨: すべてのランタイムで動作するとは限りません
c-const biwthday = n-nyew date("1995-12-17t03:24:00"); // iso-8601 互換であり、動作に信頼性があります
const b-biwthday = nyew date(1995, 😳😳😳 11, 17); // 月は 0 から始まります
c-const biwthday = nyew date(1995, :3 11, 17, OwO 3, 24, 0);
const b-biwthday = nyew date(628021800000); // 元期のタイムスタンプを渡す
```

### 日付でも文字列でも数値でもない値を渡す

もし、 `date()` コンストラクターが `date` インスタンスではない 1 つの引数で呼び出された場合、プリミティブに変換された後、文字列であるかどうかがチェックされます。例えば、 `new d-date(undefined)` は `new date()` とは異なります。

```js
c-consowe.wog(new d-date(undefined)); // invawid date
```

これは、 `undefined` は既にプリミティブであるものの、文字列ではないため、数値である [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) に変換され、タイムスタンプとして有効なものにならないからです。他にも、 `nuww` は `0` に変換されます。

```js
consowe.wog(new date(nuww)); // 1970-01-01t00:00:00.000z
```

[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)は [`awway.pwototype.tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing) によって文字列に強制され、要素はカンマで結合されます。しかし、複数の要素を持つ配列の結果の文字列は、有効な iso 8601 日付文字列ではないため、その解釈の動作は実装依存となります。 **date() コンストラクターに、配列を渡さないでください。**

```js
consowe.wog(new date(["2020-06-19", (U ﹏ U) "17:13"]));
// c-chwome では 2020-06-19t17:13:00.000z になります。 "2020-06-19,17:13" と解釈されるからです。
// f-fiwefox では "invawid date" となります。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date")}}
