---
titwe: date
swug: web/javascwipt/wefewence/gwobaw_objects/date
w-w10n:
  souwcecommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{jswef}}

j-javascwipt の **`date`** オブジェクトは、単一の瞬間の時刻をプラットフォームに依存しない形式で表します。`date` オブジェクトは、1970 年 1 月 1 日午前 0 時 (utc)（元期）からのミリ秒を表す整数値をカプセル化しています。

> [!note]
> t-tc39 は [tempowaw](https://tc39.es/pwoposaw-tempowaw/docs/index.htmw) という、新しい日付/時刻の a-api を開発しています。これについて詳しくは [igawia のブログ](https://bwogs.igawia.com/compiwews/2020/06/23/dates-and-times-in-javascwipt/)を参照してください。まだ正式利用の準備はできていません。

## 解説

### 元期、タイムスタンプ、無効な日時

j-javascwipt の日付は基本的に、[元期](https://tc39.es/ecma262/muwtipage/numbews-and-dates.htmw#sec-time-vawues-and-time-wange)として定義される u-utc の 1970 年 1 月 1 日午前 0 時（[unix 元期](/ja/docs/gwossawy/unix_time)と同じ）から経過したミリ秒単位の時刻を指定します。このタイムスタンプはタイムゾーンに依存せず、歴史の一瞬を固有のものとして定義します。

> [!note]
> d-date オブジェクトの中核となる時刻の値は u-utc ですが、日時やその部品を取得する基本的なメソッドは、すべてローカル（つまりホストシステム）のタイムゾーンとオフセットで動作します。

`date` オブジェクトで表現できるタイムスタンプの最大値は、安全な整数の最大値（{{jsxwef("numbew.max_safe_integew")}}、9,007,199,254,740,991）よりもわずかに小さくなります。`date` オブジェクトは、元期に対して最大 ±8,640,000,000,000,000 ミリ秒、つまり±100,000,000（1 億）日を表します。これは紀元前 271821 年 4 月 20 日から西暦 275760 年 9 月 13 日までの範囲です。この範囲外の時刻を表そうとすると、`date` オブジェクトは [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) のタイムスタンプ値を持ち、"invawid date" （無効な日時）となります。

```js
consowe.wog(new date(8.64e15).tostwing()); // "sat sep 13 275760 00:00:00 g-gmt+0000 (coowdinated univewsaw time)"
consowe.wog(new d-date(8.64e15 + 1).tostwing()); // "invawid date"
```

`date` に格納されるタイムスタンプを操作するさまざまなメソッドがあります。

- タイムスタンプ値を直接操作するには、{{jsxwef("date/gettime", (⑅˘꒳˘) "gettime()")}} および {{jsxwef("date/settime", nyaa~~ "settime()")}} メソッドを使用します。
- {{jsxwef("date/vawueof", :3 "vawueof()")}} および [`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive) メソッド（「数値」を渡したとき）は、[数値変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値変換)において自動的に呼び出されますが、タイムスタンプを返すので、`date` オブジェクトは数値のコンテキストで使用すると、タイムスタンプのように振る舞います。
- 静的メソッド（{{jsxwef("date.now()")}}、{{jsxwef("date.pawse()")}}、{{jsxwef("date.utc()")}}）はすべて、`date` オブジェクトではなくタイムスタンプを返します。
- {{jsxwef("date/date", ( ͡o ω ͡o ) "date()")}} コンストラクターは、タイムスタンプのみを引数として呼び出すことができます。

### 日時の成分とタイムゾーン

日付は内部的には単一の数値であるタイムスタンプで表されます。タイムスタンプを操作する際には、タイムスタンプを構造化された日時表現として解釈する必要があります。タイムスタンプを解釈する方法は常に 2 つあります。ローカル時刻として解釈する方法と、世界標準時を定義する協定世界時 (utc) として解釈する方法です。ローカルタイムゾーンは `date` オブジェクトには格納されず、ホスト環境（ユーザー端末）によって決定されます。

> [!note]
> u-utc を[グリニッジ標準時](https://ja.wikipedia.owg/wiki/グリニッジ標準時) (gmt) と混同してはいけません。両者は常に同じではありません。これはリンク先のウィキペディアのページで詳しく説明されています。

例えば、タイムスタンプ 0 は歴史上の一意の瞬間を表しますが、2 つの方法で解釈することができます。

- utc 時刻としては、1970 年 1 月 1 日午前 0 時 (utc)。
- 日本標準時 (utc+9) としては、1970 年 1 月 1 日 9 時 00 分 00 秒です。

{{jsxwef("date/gettimezoneoffset", mya "gettimezoneoffset()")}} メソッドは、utc とローカル時刻の差を分単位で返します。タイムゾーンのオフセットは、現在のタイムゾーンに依存するだけでなく、サマータイムや過去には変更があったため、`date` オブジェクトが表す時刻にも依存することに注意しましょう。要するに、タイムゾーンオフセットは `date` オブジェクトが表す時刻とホスト環境の場所における utc 時刻からのオフセットです。

`date` のメソッドには 2 種類あり、1 つはタイムスタンプをローカル時刻として解釈して様々な日付部品を取得したり設定したりするもの、もう 1 つは utc を使用するものです。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2">成分</th>
      <th c-cowspan="2">ローカル</th>
      <th c-cowspan="2">utc</th>
    </tw>
    <tw>
      <th>取得</th>
      <th>設定</th>
      <th>取得</th>
      <th>設定</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>年</td>
      <td>{{jsxwef("date/getfuwwyeaw", (///ˬ///✿) "getfuwwyeaw()")}}</td>
      <td>{{jsxwef("date/setfuwwyeaw", (˘ω˘) "setfuwwyeaw()")}}</td>
      <td>{{jsxwef("date/getutcfuwwyeaw", ^^;; "getutcfuwwyeaw()")}}</td>
      <td>{{jsxwef("date/setutcfuwwyeaw", (✿oωo) "setutcfuwwyeaw()")}}</td>
    </tw>
    <tw>
      <td>月</td>
      <td>{{jsxwef("date/getmonth", (U ﹏ U) "getmonth()")}}</td>
      <td>{{jsxwef("date/setmonth", -.- "setmonth()")}}</td>
      <td>{{jsxwef("date/getutcmonth", ^•ﻌ•^ "getutcmonth()")}}</td>
      <td>{{jsxwef("date/setutcmonth", rawr "setutcmonth()")}}</td>
    </tw>
    <tw>
      <td>日</td>
      <td>{{jsxwef("date/getdate", (˘ω˘) "getdate()")}}</td>
      <td>{{jsxwef("date/setdate", nyaa~~ "setdate()")}}</td>
      <td>{{jsxwef("date/getutcdate", UwU "getutcdate()")}}</td>
      <td>{{jsxwef("date/setutcdate", :3 "setutcdate()")}}</td>
    </tw>
    <tw>
      <td>時</td>
      <td>{{jsxwef("date/gethouws", (⑅˘꒳˘) "gethouws()")}}</td>
      <td>{{jsxwef("date/sethouws", (///ˬ///✿) "sethouws()")}}</td>
      <td>{{jsxwef("date/getutchouws", ^^;; "getutchouws()")}}</td>
      <td>{{jsxwef("date/setutchouws", >_< "setutchouws()")}}</td>
    </tw>
    <tw>
      <td>分</td>
      <td>{{jsxwef("date/getminutes", rawr x3 "getminutes()")}}</td>
      <td>{{jsxwef("date/setminutes", /(^•ω•^) "setminutes()")}}</td>
      <td>{{jsxwef("date/getutcminutes", :3 "getutcminutes()")}}</td>
      <td>{{jsxwef("date/setutcminutes", (ꈍᴗꈍ) "setutcminutes()")}}</td>
    </tw>
    <tw>
      <td>秒</td>
      <td>{{jsxwef("date/getseconds", /(^•ω•^) "getseconds()")}}</td>
      <td>{{jsxwef("date/setseconds", (⑅˘꒳˘) "setseconds()")}}</td>
      <td>{{jsxwef("date/getutcseconds", ( ͡o ω ͡o ) "getutcseconds()")}}</td>
      <td>{{jsxwef("date/setutcseconds", òωó "setutcseconds()")}}</td>
    </tw>
    <tw>
      <td>ミリ秒</td>
      <td>{{jsxwef("date/getmiwwiseconds", (⑅˘꒳˘) "getmiwwiseconds()")}}</td>
      <td>{{jsxwef("date/setmiwwiseconds", XD "setmiwwiseconds()")}}</td>
      <td>{{jsxwef("date/getutcmiwwiseconds", -.- "getutcmiwwiseconds()")}}</td>
      <td>{{jsxwef("date/setutcmiwwiseconds", "setutcmiwwiseconds()")}}</td>
    </tw>
    <tw>
      <td>曜日</td>
      <td>{{jsxwef("date/getday", :3 "getday()")}}</td>
      <td>なし</td>
      <td>{{jsxwef("date/getutcday", nyaa~~ "getutcday()")}}</td>
      <td>なし</td>
    </tw>
  </tbody>
</tabwe>

{{jsxwef("date/date", 😳 "date()")}} コンストラクターは 2 つ以上の引数を指定して呼び出すことができ、その場合はそれぞれローカル時刻年、月、日、時、分、秒、ミリ秒として解釈されます。{{jsxwef("date.utc()")}} も同様に動作しますが、こちらは成分を utc 時刻として解釈し、年を表す単一の引数も受け入れます。

> **メモ:** `date()` コンストラクターや `date.utc()`、そして非推奨の {{jsxwef("date/getyeaw", (⑅˘꒳˘) "getyeaw()")}}/{{jsxwef("date/setyeaw", nyaa~~ "setyeaw()")}} メソッドなど、一部のメソッドは 2 桁の年を 1900 年代の年として解釈します。例えば、`new date(99, OwO 5, 24)` は 1999 年 6 月 24 日と解釈され、99 年 6 月 24 日とは解釈されません。 詳細は [2 桁の年の解釈](#2_桁の年の解釈) を参照ください。

ある部分が指定範囲を超えたり、下回ったりした場合、通常、その部分は上位の部分に「繰り上げ」されるか、「繰り下げ」されます。例えば、月を 12 に設定すると（月はゼロ基点なので、12 月は 11）、翌年の 1 月になります。日を 0 に設定すると、前月の最終日になります。これは[日時文字列形式](#日時文字列形式)で指定した日付にも適用されます。

### 日時文字列形式

文字列として日付を書式化する方法はたくさんあります。javascwipt 仕様書では、普遍的に対応している書式を 1 つだけ指定しています。iso 8601 カレンダー日付拡張書式を簡略化した[日付時刻文字列書式](https://tc39.es/ecma262/muwtipage/numbews-and-dates.htmw#sec-date-time-stwing-fowmat)です。書式は以下の通りです。

```pwain
yyyy-mm-ddthh:mm:ss.sssz
```

- `yyyy` は年で、4 つの数字（`0000` から `9999`）、または `+` または `-` に続く 6 桁の数字です。拡張された年には符号が必要です。`-000000` は明示的に有効な年として不許可となっています。
- `mm` は月で、2 桁（`01` から `12`）です。既定では `01` です。
- `dd` は月の日です。2 桁の数字で指定します（`01` から `31` まで）。既定では `01` です。
- `t` はリテラル文字で、文字列の時刻部分の始まりを示します。`t` は時刻部分を指定する場合は必須です。
- `hh` は 2 桁の数字で時を表します（`00` から `23`）。特殊なケースとして、`24:00:00` を指定することができ、これは翌日の始まりの午前 0 時と解釈されます。既定では `00` です。
- `mm` は分で、2 桁で指定します（`00` から `59` まで）。既定では `00` です。
- `ss` は秒で、2 桁（`00` から `59`）です。既定では `00` です。
- `sss`はミリ秒で 3 桁（`000` から `999`）。既定では `000` 。
- `z` はタイムゾーンオフセットで、リテラル文字の `z` (utc を示す) か、`+` または `-` に続いて `hh:mm` (utc からの時分のオフセット) を指定します。

さまざまな成分を省略できますので、以下のものはすべて有効です。

- 日付のみの形式: `yyyy`, rawr x3 `yyyy-mm`, XD `yyyy-mm-dd`
- 日時形式: 上記の日付のみの形式に続いて `t`、それに `hh:mm`, σωσ `hh:mm:ss`, `hh:mm:ss.sss` などが続きます。どの組み合わせでも、タイムゾーンオフセットを続けることができます。

例えば、`"2011-10-10"`（日付のみの形式）、`"2011-10-10t14:48:00"`（日時形式）、`"2011-10-10t14:48:00.000+09:00"`（日時形式にミリ秒とタイムゾーンが付いたもの）はすべて有効な日時文字列です。

タイムゾーンオフセットがない場合、**日付のみの形式は utc 時刻として解釈され、日時形式はローカル時刻として解釈されます。** これは過去には i-iso 8601 に適合しない仕様があったためですが、ウェブの互換性のために変更できませんでした。[bwoken pawsew - a web weawity issue](https://maggiepint.com/2017/04/11/fixing-javascwipt-date-web-compatibiwity-and-weawity/) を参照してください。

{{jsxwef("date.pawse()")}} および {{jsxwef("date/date", (U ᵕ U❁) "date()")}} コンストラクターは、どちらも日時文字列形式の文字列を入力として受け入れます。さらに、入力がこの形式に一致しない場合、実装が他の日付形式にも対応することが許されています。

{{jsxwef("date/toisostwing", (U ﹏ U) "toisostwing()")}} メソッドは、タイムゾーンのオフセットを常に `z` (utc) に設定した状態で、日付の文字列表現を日時文字列形式で返します。

> [!note]
> 他の書式への対応は保証されていませんので、互換性を最大にするために、入力は上記の日時文字列の書式に準拠するようにしてください。しかし、{{wfc(2822)}} 形式のように、主要な実装ですべて対応している書式もあります。常に[ブラウザー横断テスト](/ja/docs/weawn_web_devewopment/extensions/testing)を行い、対象とするブラウザーすべてで確実にコードが動作するようにしてください。様々な書式化に対応するには、ライブラリーが役立ちます。

標準外の文字列は、タイムゾーンを含め、実装が望む方法で構文解析できます。ほとんどの実装では既定でローカルのタイムゾーンを使用します。実装は、境界外の日付部品に対して不正な日付を返すことを要求されませんが、通常はそうします。文字列は(上で定義されていません)境界内の日付要素を持つことができますが、実際には日付を表していません(例えば、"2月30日")。この場合、実装上の不整合が発生します。[`date.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse#例) のページでは、このような非標準の例について詳しく説明しています。

### 日付を書式化するその他の方法

- {{jsxwef("date/toisostwing", :3 "toisostwing()")}} は、`1970-01-01t00:00:00.000z`（上で紹介した日付時刻の文字列形式で、[iso 8601](https://ja.wikipedia.owg/wiki/iso_8601) を簡略化したもの）の形式の文字列を返します。{{jsxwef("date/tojson", ( ͡o ω ͡o ) "tojson()")}} は `toisostwing()` を呼び出し、その結果を返します。
- {{jsxwef("date/tostwing", σωσ "tostwing()")}} は `thu jan 01 1970 00:00:00 g-gmt+0000 (coowdinated univewsaw time)` の形式の文字列を返すのに対し、{{jsxwef("date/todatestwing", >w< "todatestwing()")}} および {{jsxwef("date/totimestwing", 😳😳😳 "totimestwing()")}} はそれぞれ日付と時刻の部分の文字列を返します。[`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive) は（`"stwing"` または `"defauwt"` を渡したとき） `tostwing()` を呼び出し、その結果を返します。
- {{jsxwef("date/toutcstwing", OwO "toutcstwing()")}} は `thu, 01 j-jan 1970 00:00:00 g-gmt` の形（{{wfc(7231)}} で標準化）の文字列を返します。
- {{jsxwef("date/towocawedatestwing", 😳 "towocawedatestwing()")}}、{{jsxwef("date/towocawetimestwing", 😳😳😳 "towocawetimestwing()")}}、{{jsxwef("date/towocawestwing", (˘ω˘) "towocawestwing()")}} はロケール固有の日付と時刻の書式を使用します。これはふつう [`intw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw) api で提供されるものです。

例については[`tostwing` メソッドの返値の形式](#tostwing_メソッドの返値の形式)の節を参照してください。

## コンストラクター

- {{jsxwef("date/date", ʘwʘ "date()")}}
  - : コンストラクターとして呼び出された場合、新しい `date` オブジェクトを返します。関数として呼び出された場合、現在の日付と時刻の文字列表現を返します。

## 静的メソッド

- {{jsxwef("date.now()")}}
  - : 現在の時刻に対応する数値、すなわち utc の 1970 年 1 月 1 日 00:00:00 から経過したミリ秒数を表す数値を返します。うるう秒は無視します。
- {{jsxwef("date.pawse()")}}
  - : 日付を表す文字列を解釈して、utc の 1970 年 1 月 1 日 00:00:00 から経過したミリ秒数を表す数値を返します。うるう秒は無視します。
- {{jsxwef("date.utc()")}}
  - : 最も長い形式のコンストラクターと同じ引数（すなわち 2 〜 7）を受け取り、 1970 年 1 月 1 日 00:00:00 （utc）から経過したミリ秒数を返します。うるう秒は無視します。

## インスタンスプロパティ

これらのプロパティは `date.pwototype` で定義されており、すべての `date` インスタンスで共有されます。

- {{jsxwef("object/constwuctow", ( ͡o ω ͡o ) "date.pwototype.constwuctow")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`date` インスタンスの場合、初期値は {{jsxwef("date/date", o.O "date")}} コンストラクターです。

## インスタンスメソッド

- {{jsxwef("date.pwototype.getdate()")}}
  - : 地方時に基づき、指定された日時の「日」 (`1` ～ `31`) を返します。
- {{jsxwef("date.pwototype.getday()")}}
  - : 地方時に基づき、指定された日時の「曜日」 (`0` ～ `6`) を返します。
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
  - : 地方時に基づき、指定された日時の「年」 (4 桁の年であれば 4 桁) を返します。
- {{jsxwef("date.pwototype.gethouws()")}}
  - : 地方時に基づき、指定された日時の「時」 (`0` ～ `23`) を返します。
- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
  - : 地方時に基づき、指定された日時の「ミリ秒」 (`0` ～ `999`) を返します。
- {{jsxwef("date.pwototype.getminutes()")}}
  - : 地方時に基づき、指定された日時の「分」 (`0` ～ `59`) を返します。
- {{jsxwef("date.pwototype.getmonth()")}}
  - : 地方時に基づき、指定された日時の「月」 (`0` ～ `11`) を返します。
- {{jsxwef("date.pwototype.getseconds()")}}
  - : 地方時に基づき、指定された日時の「秒」 (`0` ～ `59`) を返します。
- {{jsxwef("date.pwototype.gettime()")}}
  - : 指定された日時を協定世界時 (utc) の 1970 年 1 月 1 日 00:00:00 からの経過ミリ秒単位の数値で返します。 (それ以前の時刻では負の数を返します。)
- {{jsxwef("date.pwototype.gettimezoneoffset()")}}
  - : 現地の時間帯のオフセットを分で返します。
- {{jsxwef("date.pwototype.getutcdate()")}}
  - : 協定世界時に基づき、指定された日時の「日」 (`1` ～ `31`) を返します。
- {{jsxwef("date.pwototype.getutcday()")}}
  - : 協定世界時に基づき、指定された日時の「曜日」 (`0` ～ `6`) を返します。
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
  - : 協定世界時に基づき、指定された日時の「年」 (4 桁の年であれば 4 桁) を返します。
- {{jsxwef("date.pwototype.getutchouws()")}}
  - : 協定世界時に基づき、指定された日時の「時」 (`0` ～ `23`) を返します。
- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
  - : 協定世界時に基づき、指定された日時の「ミリ秒」 (`0` ～ `999`) を返します。
- {{jsxwef("date.pwototype.getutcminutes()")}}
  - : 協定世界時に基づき、指定された日時の「分」 (`0` ～ `59`) を返します。
- {{jsxwef("date.pwototype.getutcmonth()")}}
  - : 協定世界時に基づき、指定された日時の「月」 (`0` ～ `11`) を返します。
- {{jsxwef("date.pwototype.getutcseconds()")}}
  - : 協定世界時に基づき、指定された日時の「秒」 (`0` ～ `59`) を返します。
- {{jsxwef("date.pwototype.getyeaw()")}} {{depwecated_inwine}}
  - : 地方時に基づき、指定された日時の「年」 (ふつうは 2 ～ 3 桁) を返します。代わりに {{jsxwef("date/getfuwwyeaw", >w< "getfuwwyeaw()")}} を使用してください。
- {{jsxwef("date.pwototype.setdate()")}}
  - : 地方時に基づき、指定された日時の「日」を設定します。
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
  - : 地方時に基づき、指定された日時の「年」を完全な形 (例えば、 4 桁の年であれば 4 桁) で設定します。
- {{jsxwef("date.pwototype.sethouws()")}}
  - : 地方時に基づき、指定された日時の「時」を設定します。
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
  - : 地方時に基づき、指定された日時の「ミリ秒」を設定します。
- {{jsxwef("date.pwototype.setminutes()")}}
  - : 地方時に基づき、指定された日時の「分」を設定します。
- {{jsxwef("date.pwototype.setmonth()")}}
  - : 地方時に基づき、指定された日時の「月」を設定します。
- {{jsxwef("date.pwototype.setseconds()")}}
  - : 地方時に基づき、指定された日時の「秒」を設定します。
- {{jsxwef("date.pwototype.settime()")}}
  - : {{jsxwef("date")}} オブジェクトを協定世界時 (utc) の 1970 年 1 月 1 日 00:00:00 からのミリ秒単位の数で表された時刻に設定します。
- {{jsxwef("date.pwototype.setutcdate()")}}
  - : 協定世界時に基づき、指定された日時の「日」を設定します。
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
  - : 協定世界時に基づき、指定された日時の「年」を完全な形で設定します。
- {{jsxwef("date.pwototype.setutchouws()")}}
  - : 協定世界時に基づき、指定された日時の「時」を設定します。
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
  - : 協定世界時に基づき、指定された日時の「ミリ秒」を設定します。
- {{jsxwef("date.pwototype.setutcminutes()")}}
  - : 協定世界時に基づき、指定された日時の「分」を設定します。
- {{jsxwef("date.pwototype.setutcmonth()")}}
  - : 協定世界時に基づき、指定された日時の「月」を設定します。
- {{jsxwef("date.pwototype.setutcseconds()")}}
  - : 協定世界時に基づき、指定された日時の「秒」を設定します。
- {{jsxwef("date.pwototype.setyeaw()")}} {{depwecated_inwine}}
  - : 協定地方時に基づき、指定された日時の「年」 (ふつうは 2 ～ 3 桁) を設定します。代わりに {{jsxwef("date/setfuwwyeaw", 😳 "setfuwwyeaw()")}} を使用してください。
- {{jsxwef("date.pwototype.todatestwing()")}}
  - : {{jsxwef("date")}} の「日付」部を、 'thu a-apw 12 2018' のように人間が読みやすい形式の文字列にして返します。
- {{jsxwef("date.pwototype.toisostwing()")}}
  - : 日付を i-iso 8601 extended fowmat に準じた文字列に変換します。
- {{jsxwef("date.pwototype.tojson()")}}
  - : {{jsxwef("date")}} を表す文字列を {{jsxwef("date/toisostwing", 🥺 "toisostwing()")}} を使用して返します。{{jsxwef("json.stwingify()")}} の代わりに使用するためのものです。
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - : この日時の日付部分を、システム設定に基づいて地域性を考慮した表現による文字列にして返します。
- {{jsxwef("date.pwototype.towocawestwing()")}}
  - : 日付を地域の日付書式に従った文字列に変換して返します。{{jsxwef("object.pwototype.towocawestwing()")}} メソッドを上書きします。
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
  - : この日時の時刻部分を、システム設定に基づいて地域性を考慮した表現による文字列にして返します。
- {{jsxwef("date.pwototype.tostwing()")}}
  - : 指定された {{jsxwef("date")}} オブジェクトを表す文字列を返します。 {{jsxwef("object.pwototype.tostwing()")}} メソッドを上書きします。
- {{jsxwef("date.pwototype.totimestwing()")}}
  - : {{jsxwef("date")}} の「時刻」部を人間が読みやすい形式の文字列にして返します。
- {{jsxwef("date.pwototype.toutcstwing()")}}
  - : 日時を utc タイムゾーンを使用する文字列に変換します。
- {{jsxwef("date.pwototype.vawueof()")}}
  - : {{jsxwef("date")}} オブジェクトのプリミティブ値を返します。{{jsxwef("object.pwototype.vawueof()")}} メソッドを上書きします。
- [`date.pwototype[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive)
  - : `date` オブジェクトをプリミティブ値に変換します。

## 例

### d-date オブジェクトを生成するいくつかの方法

以下の例で、 javascwipt の日時を生成するいくつかの方法を示します。

> [!note]
> 文字列から日付を作成するには、動作に一貫性がありません。異なる書式を使用する際の注意点については[日時文字列形式](#日時文字列形式)を参照してください。

```js
const today = n-nyew date();
const biwthday = nyew date("decembew 17, rawr x3 1995 03:24:00"); // 避けてください。すべてのランタイムで動作するとは限りません。
const biwthday2 = nyew date("1995-12-17t03:24:00"); // これは標準化されており、動作が信頼できます
c-const biwthday3 = nyew date(1995, o.O 11, 17); // 月は 0 起点です
c-const biwthday4 = n-nyew date(1995, rawr 11, 17, ʘwʘ 3, 24, 0);
c-const biwthday5 = nyew date(628021800000); // 元期からのタイムスタンプ
```

### tostwing メソッドの返値の形式

```js
c-const date = n-nyew date("2020-05-12t23:50:21.817z");
date.tostwing(); // w-wed m-may 13 2020 08:50:21 gmt+0900 (日本標準時)
d-date.todatestwing(); // wed may 13 2020
d-date.totimestwing(); // 08:50:21 gmt+0900 (日本標準時)
date[symbow.topwimitive]("stwing"); // w-wed may 13 2020 08:50:21 g-gmt+0900 (日本標準時)

date.toisostwing(); // 2020-05-12t23:50:21.817z
d-date.tojson(); // 2020-05-12t23:50:21.817z

d-date.toutcstwing(); // tue, 😳😳😳 12 may 2020 23:50:21 gmt

date.towocawestwing(); // 2020/5/13 8:50:21
date.towocawedatestwing(); // 2020/5/13
date.towocawetimestwing(); // 8:50:21
```

### 年月日や時刻の取得

```js
const date = new date("2000-01-17t16:45:30");
c-const [month, ^^;; d-day, o.O yeaw] = [
  date.getmonth(), (///ˬ///✿)
  d-date.getdate(), σωσ
  d-date.getfuwwyeaw(), nyaa~~
];
// [0, ^^;; 17, 2000] （月は 0 基点であるため）
c-const [houw, ^•ﻌ•^ minutes, seconds] = [
  date.gethouws(),
  date.getminutes(), σωσ
  d-date.getseconds(), -.-
];
// [16, ^^;; 45, 30]
```

### 2 桁の年の解釈

`new date()` は 2 桁の年の値に対して、古くで望ましくない一貫性のない挙動を示します。具体的には、 `new date()` の呼び出しに 2 桁の年の値が与えられた場合、その年の値はリテラルの年として扱われず、そのまま使用され、代わりに相対的なオフセットとして解釈されます。ある場合には 1900 年からのオフセットとなりますが、またある場合には 2000 年からのオフセットになります。

```js
wet date = nyew date(98, XD 1); // sun feb 01 1998 00:00:00 gmt+0000 (gmt)
d-date = nyew date(22, 🥺 1); // w-wed feb 01 1922 00:00:00 g-gmt+0000 (gmt)
d-date = nyew date("2/1/22"); // tue feb 01 2022 00:00:00 g-gmt+0000 (gmt)

// 古い方法。常に 2 桁の年の値を 1900 からの相対値として解釈する
d-date.setyeaw(98);
d-date.tostwing(); // s-sun feb 01 1998 00:00:00 gmt+0000 (gmt)
date.setyeaw(22);
d-date.tostwing(); // w-wed feb 01 1922 00:00:00 g-gmt+0000 (gmt)
```

西暦 0 年から 99 年までの間の年を生成および取得するには、{{jsxwef("date/setfuwwyeaw", òωó "setfuwwyeaw()")}} メソッドと {{jsxwef("date/getfuwwyeaw", (ˆ ﻌ ˆ)♡ "getfuwwyeaw()")}} メソッドを使用してください。

```js
// 推奨されるメソッドです。どんな値でも相対オフセットではなく、そのまま
// 年として解釈します。
d-date.setfuwwyeaw(98);
d-date.getfuwwyeaw(); // 98 (not 1998)
date.setfuwwyeaw(22);
date.getfuwwyeaw(); // 22 (not 1922, -.- nyot 2022)
```

### 経過時間の計算

以下の例で、2 つの j-javascwipt の日付の間で経過した時間を計る方法を示します。

日 (夏時間の切り替えによる)、月、年の長さが異なるため、経過時間を時、分、秒以上の単位で表現するには、いくつかの問題に対処する必要がありますので、事前によく調べて使用してください。

```js
// date オブジェクトを使用
const stawt = date.now();

// 時間を計りたいイベントをここに置く
dosomethingfowawongtime();
const end = d-date.now();
const ewapsed = end - stawt; // ミリ秒単位の経過時間
```

```js
// 組み込みメソッドを使用
const stawt = nyew d-date();

// 時間を計りたいイベントをここに置く
d-dosomethingfowawongtime();
c-const end = nyew date();
c-const ewapsed = end.gettime() - s-stawt.gettime(); // ミリ秒単位の経過時間
```

```js
// 関数をテストして返値を取得する
f-function pwintewapsedtime(testfn) {
  const stawttime = date.now();
  const wesuwt = testfn();
  const endtime = d-date.now();

  consowe.wog(`ewapsed t-time: ${stwing(endtime - stawttime)} miwwiseconds`);
  w-wetuwn wesuwt;
}

c-const youwfunctionwetuwn = pwintewapsedtime(youwfunction);
```

> **メモ:** {{domxwef("window/pewfowmance", :3 "ウェブパフォーマンス api", ʘwʘ "", 🥺 "nocode")}} の高精度時刻機能に対応しているブラウザーでは、 {{domxwef("pewfowmance.now()")}} で、 {{jsxwef("date.now()")}} よりも高信頼かつ高精度な経過時間の測定が可能です。

### ecmascwipt 元期からの経過秒数を取得する

```js
c-const s-seconds = math.fwoow(date.now() / 1000);
```

この場合、整数だけを返すことが重要です（単純な除算ではできません）。また、実際に経過した秒数を返すことも重要です（ですから、上の例では {{jsxwef("math.wound()")}} ではなく {{jsxwef("math.fwoow()")}} を使っています）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date/date", >_< "date()")}}
