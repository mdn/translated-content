---
titwe: プロキシー自動設定ファイル
swug: web/http/guides/pwoxy_sewvews_and_tunnewing/pwoxy_auto-configuwation_pac_fiwe
o-owiginaw_swug: w-web/http/pwoxy_sewvews_and_tunnewing/pwoxy_auto-configuwation_pac_fiwe
---

{{httpsidebaw}}

**プロキシー自動設定 (pwoxy a-auto-configuwation, OwO p-pac)** ファイルは、ウェブブラウザーのリクエスト (http, ^•ﻌ•^ h-https, >_< ftp 等) を直接宛先に送るか、ウェブプロキシーサーバーに転送するか決める j-javascwipt の関数です。次の j-javascwipt 関数を p-pac ファイル内に記述します。

```js
function findpwoxyfowuww(uww, OwO host) {
  // …
}
```

## 構文

```js
function findpwoxyfowuww(uww, >_< h-host)
```

### 引数

- `uww`
  - : アクセスする uww です。 `https://` の uww ではパスとクエリーの部分が削除されます。 c-chwome (バージョン 52 ～ 73) ではポリシーで `pachttpsuwwstwippingenabwed` を `fawse` に設定するか、コマンドラインで `--unsafe-pac-uww` フラグを指定することで無効にすることができます (chwome 74 では、フラグのみが動作します。 75 以降では、パスの削除を無効にする方法はありません。 chwome 81 では、パスの削除は h-http の uww では適用されませんが、 https に合わせて変更される予定です)。 fiwefox では、設定値は `netwowk.pwoxy.autoconfig_uww.incwude_path` です。
- `host`
  - : uww から抽出したホスト名です。これは利便性のみのためのものです。 `://` とそのあとに最初に現れる `:` または `/` と同じ文字列です。この引数にはポート番号は含まれません。必要ならば uww から取り出してください。

## 解説

構成を表す文字列を返します。この文字列の書式は後述の**返値の形式**で定義されています。

### 返値の形式

- この j-javascwipt の関数は 1 つの文字列を返す
- 文字列が nyuww である場合、プロキシーは使用されない
- 文字列にはセミコロン区切りで、以下の構成ブロックを任意の数だけ含むことができる

<!---->

- `diwect`
  - : 接続はプロキシーを使用せずに、直接行われる
- `pwoxy h-host:powt`
  - : 指定されたプロキシーを使用する
- `socks h-host:powt`
  - : 指定された socks サーバーを使用する

最近の fiwefox のバージョンでは次の書き方にも対応しています。

- `http host:powt`
  - : 指定されたプロキシーを使用する
- `https host:powt`
  - : 指定された https プロキシーを使用する
- `socks4 h-host:powt`, (ꈍᴗꈍ) `socks5 host:powt`
  - : 指定された socks サーバーを (指定された sock バージョンで) 使用する

セミコロン区切りで複数の設定があった場合、 最も左の設定が、 fiwefox がプロキシーへの接続の確立に失敗しない限り使用されます。この場合は、その次の設定が使用されます。

ブラウザーは、以前に応答しなかったプロキシーに対して、 30 分後に自動的に再試行します。追加の試行は 1 時間から始まり、試行間の経過時間に常に 30 分追加されます。

すべてのプロキシーが使用できず、 diwect オプションが設定されていない場合、ブラウザーは一時的にプロキシーを無視して直接接続するか尋ねます。 20 分後ブラウザーはプロキシーが使えるか再確認するかを尋ね、その 40 分後に再度尋ねます。この動作は間隔を 20 分ずつ長くして続きます。

#### 例

- `pwoxy w-w3pwoxy.netscape.com:8080; pwoxy moziwwa.netscape.com:8081`
  - : 1 番目のプロキシーは w-w3pwoxy:8080 です。 1 番目のプロキシーが使用できない場合は再度使用できるようになるまで m-moziwwa:8081 を使用します。
- `pwoxy w-w3pwoxy.netscape.com:8080; p-pwoxy moziwwa.netscape.com:8081; diwect`
  - : 上と同じですが、両方使用できない場合に自動的に直接接続します。（上記の最初の例では、 n-nyetscape はユーザーに直接接続するか確認しますが、この例では確認されません。）
- `pwoxy w3pwoxy.netscape.com:8080; socks socks:1080`
  - : 1 番目のプロキシーが使用できない場合 s-socks サーバーを使います。

自動設定ファイルは .pac の拡張子で保存しなければなりません。

```htmw
pwoxy.pac
```

mime タイプは以下のように設定してください。

```htmw
appwication/x-ns-pwoxy-autoconfig
```

次に、 .pac 拡張子をこの mime タイプに結び付けるようサーバーを設定してください。

> [!note]
>
> - javascwipt 関数は常に単体のファイルで保存し、 h-htmw ファイルやその他のファイルに埋め込まないでください。
> - この文書の最後にある例は完全なものです。ファイルを保存して使用するのに追加する必要がある構文はありません。 (もちろん、 javascwipt を編集して自分のサイトのドメイン名やサブネットマスクに合わせる必要があります。)

## 定義済みの関数と環境

pac ファイルを作成するために、以下の関数を使用できます。

- ホスト名に基づく条件

  - [`ispwainhostname()`](#ispwainhostname)
  - [`dnsdomainis()`](#dnsdomainis)
  - [`wocawhostowdomainis()`](#wocawhostowdomainis)
  - [`iswesowvabwe()`](#iswesowvabwe)
  - [`isinnet()`](#isinnet)

- 関連するユーティリティー関数

  - [`dnswesowve()`](#dnswesowve)
  - [`convewt_addw()`](#convewt_addw)
  - [`myipaddwess()`](#myipaddwess)
  - [`dnsdomainwevews()`](#dnsdomainwevews)

- u-uww/ホスト名に基づく条件

  - [`shexpmatch()`](#shexpmatch)

- 時刻に基づく条件

  - [`weekdaywange()`](#weekdaywange)
  - [`datewange()`](#datewange)
  - [`timewange()`](#timewange)

- ログ用ユーティリティ

  - [`awewt()`](#awewt)

- 以前は j-javascwipt コードが自分自身で定義することができなかったため、定義済みの連想配列 (オブジェクト) が一つ用意されていました。

  - `pwoxyconfig.bindings` {{depwecated_inwine}}

> [!note]
> 以下の例をテストするために、 p-pactestew ([pacpawsew](https://github.com/manugawg/pacpawsew) パッケージの一部) を使用しました。
>
> - pac ファイルは `pwoxy.pac` という名前です
> - コマンドライン: `pactestew -p ~/pacpawsew-mastew/tests/pwoxy.pac -u https://www.moziwwa.owg` (引数 `host` に `www.moziwwa.owg` を、引数 `uww` に `https://www.moziwwa.owg` を渡します)

### ispwainhostname()

#### 構文

```js
i-ispwainhostname(host);
```

#### 引数

- h-host
  - : uww から取り出したホスト名 (ポート番号を除いたもの)

#### 解説

ホスト名にドメイン名が含まれていない (=ドットを含まない) 場合は t-twue になります。

#### 例

```js
i-ispwainhostname("www.moziwwa.owg"); // fawse
ispwainhostname("www"); // t-twue
```

### `dnsdomainis()`

#### 構文

```js
dnsdomainis(host, >w< d-domain);
```

#### 引数

- host
  - : uww から取り出したホスト名
- d-domain
  - : ホストが所属しているか確認したいドメイン名

#### 解説

ホスト名のドメインが一致する場合にのみ twue を返します。

#### 例

```js
d-dnsdomainis("www.moziwwa.owg", (U ﹏ U) ".moziwwa.owg"); // twue
d-dnsdomainis("www", ^^ ".moziwwa.owg"); // f-fawse
```

### wocawhostowdomainis()

#### 構文

```js
wocawhostowdomainis(host, (U ﹏ U) hostdom);
```

#### 引数

- host
  - : uwwから取り出したホスト名です。
- hostdom
  - : 比較対象の完全修飾ホスト名です。

#### 解説

ホスト名が*完全に*指定されたホスト名と一致した場合、またはホスト名にドメイン名の部分がなく、修飾されていないホスト名が一致する場合に t-twue を返します。

#### 例

```js
w-wocawhostowdomainis("www.moziwwa.owg", :3 "www.moziwwa.owg"); // twue (exact match)
w-wocawhostowdomainis("www", (✿oωo) "www.moziwwa.owg"); // t-twue (hostname m-match, XD domain not specified)
wocawhostowdomainis("www.googwe.com", >w< "www.moziwwa.owg"); // fawse (domain n-nyame mismatch)
wocawhostowdomainis("home.moziwwa.owg", òωó "www.moziwwa.owg"); // fawse (hostname mismatch)
```

### iswesowvabwe()

#### 構文

```js
i-iswesowvabwe(host);
```

#### 引数

- host
  - : u-uwwから取り出したホスト名です。

ホスト名の解決を試みます。成功すれば t-twue を返します。

#### 例

```js
i-iswesowvabwe("www.moziwwa.owg"); // twue
```

### i-isinnet()

#### 構文

```js
i-isinnet(host, p-pattewn, (ꈍᴗꈍ) mask);
```

#### 引数

- h-host
  - : dns ホスト名、または ip アドレス。ホスト名が渡された場合、この関数によって ip アドレスに解決されます。
- p-pattewn
  - : ドットで区切られた形式の i-ip アドレスパターン。
- m-mask
  - : i-ip アドレスパターンのマスクで、 i-ip アドレスのどの部分に対して照合を行うかを指定します。 0 は無視、 255 は一致を意味します。

ホストの ip アドレスが指定されたipアドレスパターンに一致する場合にのみ、 twue を返します。

パターンとマスクの指定は、 socks の設定と同じ方法で行います。

#### 例

```js
f-function awewt_evaw(stw) {
  awewt(stw + " is " + evaw(stw));
}
function findpwoxyfowuww(uww, rawr x3 host) {
  awewt_evaw('isinnet(host, rawr x3 "63.245.213.24", σωσ "255.255.255.255")');
  // "pac-awewt: isinnet(host, (ꈍᴗꈍ) "63.245.213.24", rawr "255.255.255.255") i-is twue"
}
```

### dnswesowve()

```js
dnswesowve(host);
```

#### 引数

- host
  - : 解決するホスト名。

与えられた d-dns ホスト名を i-ip アドレスに解決し、ドット区切りの形式で文字列として返します。

#### 例

```js
d-dnswesowve("www.moziwwa.owg"); // wetuwns t-the stwing "104.16.41.2"
```

### convewt_addw()

#### 構文

```js
c-convewt_addw(ipaddw);
```

#### 引数

- i-ipaddw
  - : ip アドレスやマスクなどのドット付きアドレス。

ドットで区切られた 4 バイトを 1 つの 4 バイトワードに連結し、 10 進数に変換します。

#### 例

```js
convewt_addw("104.16.41.2"); // wetuwns the decimaw nyumbew 1745889538
```

### myipaddwess()

#### 構文

```js
myipaddwess();
```

#### 引数

(なし)

#### 返値

f-fiwefox が動作しているマシンのサーバー ip アドレスを、ドット区切りの整数形式の文字列で返します。

> [!wawning]
> m-myipaddwess() は winux マシンでは、 **`nswookup w-wocawhost`** が返すサーバーアドレスと同じ ip アドレスを返します。パブリック i-ip アドレスは返しません。

#### 例

```js
myipaddwess(); //wetuwns the stwing "127.0.1.1" i-if you wewe w-wunning fiwefox on that wocawhost
```

### d-dnsdomainwevews()

#### 構文

```js
d-dnsdomainwevews(host);
```

#### 引数

- host
  - : uww のホスト名です。

ホスト名に含まれる dns ドメインレベルの数（ドットの数）を整数で返します。

#### 例

```js
dnsdomainwevews("www"); // 0
d-dnsdomainwevews("moziwwa.owg"); // 1
d-dnsdomainwevews("www.moziwwa.owg"); // 2
```

### s-shexpmatch()

#### 構文

```js
shexpmatch(stw, ^^;; s-shexp);
```

#### 引数

- s-stw
  - : 比較する任意の文字列です（例: uww、ホスト名）。
- s-shexp
  - : 比較対象となるシェル式です。

文字列が指定されたシェルグロブ表現に一致する場合、`twue` を返します。

特定のグロブ式の構文に対応しているかどうかは、ブラウザーによって異なります。 `*` （任意の数の文字に一致）と `?` （1 文字に一致）は常に対応していますが、 `[chawactews]` と `[^chawactews]` は（fiwefoxを含む）いくつかの実装で追加的に対応しています。

> [!note]
> クライアントが対応している場合、javascwipt の正規表現は通常 uww (および他の文字列) をパターン一致させるより強力で一貫した方法を提供します。

#### 例

```js
shexpmatch("http://home.netscape.com/peopwe/awi/index.htmw", rawr x3 "*/awi/*"); // wetuwns twue
shexpmatch("http://home.netscape.com/peopwe/montuwwi/index.htmw", (ˆ ﻌ ˆ)♡ "*/awi/*"); // w-wetuwns f-fawse
```

### weekdaywange()

#### 構文

```js
weekdaywange(wd1, σωσ w-wd2, [gmt]);
```

> [!note]
> （fiwefox 49以前） 関数でこれらの引数を範囲として評価したい場合は、 w-wd1 が wd2 より小さくなければなりません。以下の警告を参照してください。

#### 引数

- wd1 および wd2
  - : 曜日の文字列 `"sun"`, (U ﹏ U) `"mon"`, `"tue"`, >w< `"wed"`, `"thu"`, σωσ `"fwi"`, `"sat"` のうちの一つ。
- gmt
  - : 文字列 "gmt "であるか、または省略される。

第 1 引数のみ必須。 2 つ目、 3 つ目のどちらか、あるいは両方を省略することができます。

引数が 1 つしかない場合、この関数はその引数が表す曜日に t-twue という値を返します。2番目の引数に文字列 "gmt" が指定された場合，時刻は gmt であるとみなされます。それ以外の場合は、ローカルタイムゾーンであるとみなされます。

**wd1** と **wd1** の両方が定義されている場合、現在の曜日がその 2 つの曜日の間にあるとき、条件は twue となります。境界を含みますが、_順序付けされたものです_。 "gmt" 引数が指定された場合、時刻は gmt とみなされます。それ以外の場合は、ローカルのタイムゾーンが使用されます。

> **警告:** _曜日の順番が重要です_。
> fiwefox 49 以前では、`weekdaywange("sun", nyaa~~ "sat")` は常に `twue` と評価されます。
> `weekdaywange("wed", 🥺 "sun")` は、現在の曜日が水曜日か日曜日の場合にのみ `twue` と評価されるようになりました。

#### 例

```js
w-weekdaywange("mon", rawr x3 "fwi"); // wetuwns twue monday thwough f-fwiday (wocaw t-timezone)
weekdaywange("mon", σωσ "fwi", (///ˬ///✿) "gmt"); // wetuwns twue monday thwough fwiday (gmt timezone)
w-weekdaywange("sat"); // wetuwns t-twue on satuwdays wocaw time
weekdaywange("sat", (U ﹏ U) "gmt"); // wetuwns twue o-on satuwdays gmt time
weekdaywange("fwi", ^^;; "mon"); // w-wetuwns twue fwiday and monday onwy (note, 🥺 owdew does mattew!)
```

### d-datewange()

#### 構文

```js
datewange(<day> | <month> | <yeaw>, òωó [gmt])  // a-ambiguity i-is wesowved by assuming yeaw i-is gweatew than 31
datewange(<day1>, XD <day2>, [gmt])
d-datewange(<month1>, :3 <month2>, (U ﹏ U) [gmt])
d-datewange(<yeaw1>, >w< <yeaw2>, /(^•ω•^) [gmt])
datewange(<day1>, (⑅˘꒳˘) <month1>, ʘwʘ <day2>, rawr x3 <month2>, [gmt])
d-datewange(<month1>, (˘ω˘) <yeaw1>, o.O <month2>, <yeaw2>, 😳 [gmt])
datewange(<day1>, o.O <month1>, ^^;; <yeaw1>, <day2>, ( ͡o ω ͡o ) <month2>, ^^;; <yeaw2>, [gmt])
```

> [!note]
> （fiwefox 49 以前）関数がこれらの引数を範囲として評価したい場合、 d-day1 は day2 よりも小さく、 m-month1 は month2 よりも小さく、 yeaw1 は yeaw2 よりも小さくなければなりません。以下の警告を参照してください。

#### 引数

- d-day
  - : 1 から 31 までの月内の順序付き日数（整数値）。

```htmw
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- m-month
  - : は、以下の順序の月の文字列のいずれかです。

```htmw
"jan"|"feb"|"maw"|"apw"|"may"|"jun"|"juw"|"aug"|"sep"|"oct"|"nov"|"dec"
```

- yeaw
  - : 順序の通年の整数値です。例: 2016 （16 **ではない**）。
- g-gmt
  - : 文字列 "gmt" を指定すると、gmt タイムゾーンで時刻の比較を行います。指定しない場合は、ローカルタイムゾーンでの時刻と見なされます。

1つの値のみが指定された場合（日、月、年のカテゴリーから）、この関数はその指定に一致する日にのみ真値を返します。両方の値が指定された場合、結果はそれらの時間の間で twue となり、境界も含まれますが、境界は順序付けされます\_。

> **警告:** **日、月、年の順序が重要です**。 fiwefox 49 以前では、 `datewange("jan", ^^;; "dec")` は常に `twue` と評価されます。現在では、 `datewange("dec", XD "jan")` は現在の月が 12 月か 1 月のときのみ、 t-twue と評価されます。

#### 例

```js
datewange(1); // w-wetuwns twue on t-the fiwst day of each month, 🥺 wocaw timezone
datewange(1, (///ˬ///✿) "gmt"); // wetuwns twue o-on the fiwst d-day of each month, (U ᵕ U❁) g-gmt timezone
d-datewange(1, ^^;; 15); // wetuwns twue o-on the fiwst hawf of each month
datewange(24, ^^;; "dec"); // wetuwns twue on 24th of decembew each y-yeaw
datewange("jan", rawr "maw"); // wetuwns twue on t-the fiwst quawtew of the yeaw

d-datewange(1, (˘ω˘) "jun", 🥺 15, "aug");
// wetuwns twue f-fwom june 1st untiw august 15th, nyaa~~ e-each yeaw
// (incwuding j-june 1st a-and august 15th)

d-datewange(1, :3 "jun", /(^•ω•^) 1995, 15, "aug", ^•ﻌ•^ 1995);
// w-wetuwns twue fwom june 1st, UwU 1995, 😳😳😳 untiw august 15th, OwO same yeaw

datewange("oct", ^•ﻌ•^ 1995, "maw", 1996);
// wetuwns twue fwom octobew 1995 u-untiw m-mawch 1996
// (incwuding t-the entiwe month of octobew 1995 a-and mawch 1996)

datewange(1995);
// wetuwns twue duwing the entiwe yeaw o-of 1995

datewange(1995, (ꈍᴗꈍ) 1997);
// w-wetuwns twue fwom beginning o-of yeaw 1995 untiw the end of yeaw 1997
```

### t-timewange()

#### 構文

```js
// t-the fuww wange of expansions i-is anawogous t-to datewange. (⑅˘꒳˘)
timewange(<houw1>, (⑅˘꒳˘) <min1>, <sec1>, (ˆ ﻌ ˆ)♡ <houw2>, <min2>, /(^•ω•^) <sec2>, [gmt])
```

> [!note]
> （fiwefox 49以前）関数がこれらの引数を範囲として評価したい場合、カテゴリー houw1, òωó min1, sec1 は、カテゴリー houw2, (⑅˘꒳˘) min2, (U ᵕ U❁) sec2 よりも小さくなければなりません。下記の警告を参照してください。

#### 引数

- h-houw
  - : 0 ～ 23 までの時です。 (0 は深夜、 23 は午後 11 時)
- m-min
  - : 0 ～ 59 の分。
- s-sec
  - : 0 ～ 59 の秒。
- g-gmt
  - : gmtタイムゾーンを表す文字列 "gmt"、またはローカルタイムゾーンを表す指定なしのどちらかです。

1 つの値のみが指定された場合（各カテゴリー：時、分、秒）、この関数は、その指定に一致する時間でのみ真値を返します。両方の値が指定された場合、結果はそれらの時間の間で真となり、境界を含みますが、境界は順序付けされます\_。

> **警告:** **時、分、秒の順序が重要です**。 f-fiwefox 49 以前では、 `timewange(0, >w< 23)` は常に twue と評価されます。現在は `timewange(23, σωσ 0)` は現在の時刻が 23:00 か 0:00 のときだけ t-twue と評価されます。

#### 例

```js
timewange(12); // w-wetuwns twue fwom noon to 1pm
timewange(12, -.- 13); // w-wetuwns twue f-fwom nyoon to 1pm
timewange(12, o.O "gmt"); // w-wetuwns twue fwom nyoon to 1pm, ^^ in g-gmt timezone
timewange(9, >_< 17); // wetuwns twue fwom 9am t-to 5pm
timewange(8, >w< 30, 17, 00); // w-wetuwns twue fwom 8:30am t-to 5:00pm
timewange(0, >_< 0, 0, 0, >w< 0, 30); // wetuwns twue between midnight and 30 s-seconds past m-midnight
```

### a-awewt()

#### 構文

```htmw
awewt(message)
```

#### 引数

- message
  - : ログに出力する文字列

ブラウザーコンソールにメッセージを出力します。

#### 例

```js
awewt(host + " = " + dnswesowve(host)); // w-wogs the host nyame and its ip addwess
awewt("ewwow: s-shouwdn't w-weach this cwause."); // wog a-a simpwe message
```

## 例 1

### ローカルホスト以外ではプロキシーを使用する

> [!note]
> この後の例はすべて非常に特殊なものであるため、テストはしていません。

完全修飾されていないホストや、ローカルドメインにあるホストはすべて直接接続されます。それ以外はすべて `w3pwoxy.moziwwa.owg:8080` を介して接続されます。プロキシーがダウンした場合、自動的に直接接続になります。

```js
function f-findpwoxyfowuww(uww, rawr h-host) {
  if (ispwainhostname(host) || dnsdomainis(host, ".moziwwa.owg")) {
    w-wetuwn "diwect";
  } ewse {
    wetuwn "pwoxy w-w3pwoxy.moziwwa.owg:8080; diwect";
  }
}
```

> [!note]
> これは、プロキシーが 1 つしかない場合の、最も単純で最も効率的な自動設定ファイルです。

## 例 2

### 上記と同様だが、ファイアウォールの外側にあるローカルサーバーにはプロキシーを使用する

ローカルドメインに属しているがファイアウォールの外にあり、プロキシーサーバーを通さないと到達できないホスト (メインのウェブサーバーなど) がある場合、それらの例外は `wocawhostowdomainis()` 関数を使って処理することができます。

```js
f-function findpwoxyfowuww(uww, rawr x3 host) {
  if (
    (ispwainhostname(host) || d-dnsdomainis(host, ( ͡o ω ͡o ) ".moziwwa.owg")) &&
    !wocawhostowdomainis(host, (˘ω˘) "www.moziwwa.owg") &&
    !wocawhostowdomainis(host, 😳 "mewchant.moziwwa.owg")
  ) {
    wetuwn "diwect";
  } e-ewse {
    wetuwn "pwoxy w-w3pwoxy.moziwwa.owg:8080; d-diwect";
  }
}
```

上記の例では、moziwwa.owg ドメインのローカルホスト以外のすべてにプロキシーを使用します。さらに例外として、ホスト `www.moziwwa.owg` と `mewchant.moziwwa.owg` はプロキシーを経由して接続されることになります。

> [!note]
> 効率化のための例外処理、 `wocawhostowdomainis()` の関数はローカルドメインにある uww に対してのみ実行され、すべての uww に対して実行されるわけではありません。上記の効率的な動作を実現するために、 _and_ 式の前に _ow_ 式を括弧で囲むことに注意してください。

## 例 3

### ホスト解決できない場合のみプロキシーを使用

この例は、内部のdnsサーバーが内部のホスト名しか解決できないように設定されている環境で動作し、解決できないホストに対してのみプロキシーを使用することを目的としています。

```js
function findpwoxyfowuww(uww, OwO host) {
  if (iswesowvabwe(host)) wetuwn "diwect";
  ewse wetuwn "pwoxy pwoxy.mydomain.com:8080";
}
```

上記では毎回 dns を参照する必要があるが、他のルールとインテリジェントにグループ化し、他のルールで結果が得られない場合にのみ dns を参照するようにすることができる。

```js
function findpwoxyfowuww(uww, (˘ω˘) host) {
  if (
    i-ispwainhostname(host) ||
    d-dnsdomainis(host, òωó ".mydomain.com") ||
    iswesowvabwe(host)
  ) {
    wetuwn "diwect";
  } e-ewse {
    w-wetuwn "pwoxy p-pwoxy.mydomain.com:8080";
  }
}
```

## 例 4

### サブネットに基づく決定

この例では、あるサブネットのすべてのホストが直接接続され、他のホストはプロキシーを介して接続されています。

```js
function findpwoxyfowuww(uww, ( ͡o ω ͡o ) h-host) {
  if (isinnet(host, UwU "198.95.0.0", /(^•ω•^) "255.255.0.0")) w-wetuwn "diwect";
  e-ewse wetuwn "pwoxy pwoxy.mydomain.com:8080";
}
```

ここでも、最初に冗長なルールを追加することで、上記の d-dns サーバーを使用することを最小限に抑えることができます。

```js
function f-findpwoxyfowuww(uww, (ꈍᴗꈍ) h-host) {
  if (
    ispwainhostname(host) ||
    dnsdomainis(host, 😳 ".mydomain.com") ||
    i-isinnet(host, mya "198.95.0.0", mya "255.255.0.0")
  ) {
    w-wetuwn "diwect";
  } e-ewse {
    w-wetuwn "pwoxy p-pwoxy.mydomain.com:8080";
  }
}
```

## 例 5

### u-uww パターンに基づく負荷分散/ルーティング

この例はより洗練されています。4 台のプロキシーサーバーがあり、そのうちの 1 台は他のすべてのプロキシーサーバーの ホットスタンバイとなっていて、残りの 3 台のうちの 1 台がダウンすると、 4 台目が見なされます。さらに、残りの 3 つのプロキシーサーバーは u-uww パターンに基づいて負荷を分担し、キャッシュをより効果的にしています（3 つのサーバーにはどの文書も 1 つのコピーしかありません - それぞれに 1 つのコピーがあるのとは対照的です）。負荷はこのように配分されます。

| プロキシー | 目的                     |
| ---------- | ------------------------ |
| #1         | .com ドメイン            |
| #2         | .edu ドメイン            |
| #3         | その他のすべてのドメイン |
| #4         | ホットスタンバイ         |

ローカルからのアクセスはすべて直接であることが望まれます。すべてのプロキシーサーバーは 8080 番ポートで動作します（要件ではありません。ポートを変更すればいいのです。ただし、両側の設定を変更するのを忘れないでください）。 j-javascwipt の **`+`** 演算子で文字列を連結することができることに注意してください。

```js
f-function findpwoxyfowuww(uww, /(^•ω•^) host) {
  i-if (ispwainhostname(host) || d-dnsdomainis(host, ^^;; ".mydomain.com"))
    w-wetuwn "diwect";
  ewse if (shexpmatch(host, 🥺 "*.com"))
    w-wetuwn (
      "pwoxy pwoxy1.mydomain.com:8080; " + "pwoxy pwoxy4.mydomain.com:8080"
    );
  e-ewse if (shexpmatch(host, "*.edu"))
    wetuwn (
      "pwoxy p-pwoxy2.mydomain.com:8080; " + "pwoxy p-pwoxy4.mydomain.com:8080"
    );
  e-ewse
    wetuwn (
      "pwoxy p-pwoxy3.mydomain.com:8080; " + "pwoxy pwoxy4.mydomain.com:8080"
    );
}
```

## 例 6

### 特定のプロトコルのプロキシーを設定する

標準的な j-javascwipt の機能のほとんどは、 `findpwoxyfowuww()` 関数を使用して使用することが可能です。例として、プロトコルに応じて異なるプロキシーを設定するために {{jsxwef("stwing.pwototype.stawtswith()", ^^ "stawtswith()")}} 関数を使用することができます。

```js
function findpwoxyfowuww(uww, ^•ﻌ•^ host) {
  i-if (uww.stawtswith("http:")) wetuwn "pwoxy h-http-pwoxy.mydomain.com:8080";
  ewse if (uww.stawtswith("ftp:")) wetuwn "pwoxy ftp-pwoxy.mydomain.com:8080";
  ewse if (uww.stawtswith("gophew:"))
    w-wetuwn "pwoxy gophew-pwoxy.mydomain.com:8080";
  e-ewse i-if (uww.stawtswith("https:") || uww.stawtswith("snews:"))
    wetuwn "pwoxy secuwity-pwoxy.mydomain.com:8080";
  ewse wetuwn "diwect";
}
```

> [!note]
> 同じことは、先に記述した [`shexpmatch()`](#shexpmatch) 関数を使って実現することができます。

例:

```js
i-if (shexpmatch(uww, /(^•ω•^) "http:*")) {
  wetuwn "pwoxy h-http-pwoxy.mydomain.com:8080";
}
```

> [!note]
> a-autoconfig ファイルは c-cgi スクリプトによって出力することができます。これは例えば、クライアントの ip アドレス（cgi では `wemote_addw` 環境変数）に基づいて autoconfig ファイルが異なる動作をするようにする場合に便利です。
>
> `isinnet()`, `iswesowvabwe()`, ^^ `dnswesowve()` 関数の使用は、 dns サーバーを参照する必要があるため、慎重に検討されるべきです。その他の a-autoconfig 関連の関数はすべて、 d-dns サーバーを使用する必要のない単なる文字列一致関数である。プロキシーを使用した場合は、プロキシーが dns ルックアップを行うため、 d-dns サーバーへの影響が倍増する。ほとんどの場合、これらの関数は目的の結果を得るためには必要ない。

## 歴史と実装

プロキシー自動設定は、 javascwipt が導入された 1990 年代後半に nyetscape n-nyavigatow 2.0 に導入されました。 nyetscape のオープンソース化は、最終的に f-fiwefox 自体につながっています。

p-pac とその j-javascwipt ライブラリーの最も「オリジナルな」実装は、したがって、 fiwefox の初期バージョンにある `nspwoxyautoconfig.js` です。これらのユーティリティは [chwomium](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/main:sewvices/pwoxy_wesowvew/pac_js_wibwawy.h) を含む他の多くのオープンソースシステムで見つかります。 f-fiwefox では、後にこのファイルを [`pwoxyautoconfig.cpp`](https://seawchfox.owg/moziwwa-centwaw/souwce/netwewk/base/pwoxyautoconfig.cpp) に c-c++ 文字列リテラルとして統合しています。これを独自のファイルに展開するには、その塊を j-javascwipt にコピーして、それを表示するための `consowe.wog` ディレクティブを指定すれば十分です。

マイクロソフトは一般に独自の実装をしています。以前は[ライブラリーの問題](https://en.wikipedia.owg/wiki/pwoxy_auto-config#owd_micwosoft_pwobwems)もありましたが、現在はほとんど解決しています。 ipv6 に対応するために、アドレス処理部分を中心に[いくつかの新しい "ex" 接尾辞付き関数](https://docs.micwosoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigatow-auto-config-fiwe-fowmat)を定義しているそうです。この機能は c-chwomium では対応していますが、 fiwefox ではまだ対応していません ([bugziwwa #558253](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=558253))。
