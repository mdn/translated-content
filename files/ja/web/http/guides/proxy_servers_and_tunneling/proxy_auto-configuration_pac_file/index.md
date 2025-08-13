---
title: プロキシー自動構成ファイル (PAC)
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**プロキシー自動構成 (Proxy Auto-Configuration, PAC)** ファイルは、ウェブブラウザーのリクエスト (HTTP, HTTPS, FTP 等) を直接宛先に送るか、ウェブプロキシーサーバーに転送するか決める JavaScript の関数です。次の JavaScript 関数を PAC ファイル内に記述します。

## 構文

```js
function FindProxyForURL(url, host) {
  // …
}
```

### 引数

- `url`
  - : アクセスする URL です。 `https://` の URL ではパスとクエリーの部分が削除されます。 Chrome (バージョン 52 ～ 73) ではポリシーで `PacHttpsUrlStrippingEnabled` を `false` に設定するか、コマンドラインで `--unsafe-pac-url` フラグを指定することで無効にすることができます (Chrome 74 では、フラグのみが動作します。 75 以降では、パスの削除を無効にする方法はありません。 Chrome 81 では、パスの削除は HTTP の URL では適用されませんが、 HTTPS に合わせて変更される予定です)。 Firefox では、設定値は `network.proxy.autoconfig_url.include_path` です。
- `host`
  - : URL から抽出したホスト名です。これは利便性のみのためのものです。 `://` とそのあとに最初に現れる `:` または `/` と同じ文字列です。この引数にはポート番号は含まれません。必要ならば URL から取り出してください。

## 解説

構成を表す文字列を返します。この文字列の書式は後述の**返値の形式**で定義されています。

### 返値の形式

- この JavaScript の関数は 1 つの文字列を返す
- 文字列が null である場合、プロキシーは使用されない
- 文字列にはセミコロン区切りで、以下の構成ブロックを任意の数だけ含むことができる

<!---->

- `DIRECT`
  - : 接続はプロキシーを使用せずに、直接行われる
- `PROXY host:port`
  - : 指定されたプロキシーを使用する
- `SOCKS host:port`
  - : 指定された SOCKS サーバーを使用する

最近の Firefox のバージョンでは次の書き方にも対応しています。

- `HTTP host:port`
  - : 指定されたプロキシーを使用する
- `HTTPS host:port`
  - : 指定された HTTPS プロキシーを使用する
- `SOCKS4 host:port`, `SOCKS5 host:port`
  - : 指定された SOCKS サーバーを (指定された SOCK バージョンで) 使用する

セミコロン区切りで複数の設定があった場合、 最も左の設定が、 Firefox がプロキシーへの接続の確立に失敗しない限り使用されます。この場合は、その次の設定が使用されます。

ブラウザーは、以前に応答しなかったプロキシーに対して、 30 分後に自動的に再試行します。追加の試行は 1 時間から始まり、試行間の経過時間に常に 30 分追加されます。

すべてのプロキシーが使用できず、 DIRECT オプションが設定されていない場合、ブラウザーは一時的にプロキシーを無視して直接接続するか尋ねます。 20 分後ブラウザーはプロキシーが使えるか再確認するかを尋ね、その 40 分後に再度尋ねます。この動作は間隔を 20 分ずつ長くして続きます。

#### 例

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : 1 番目のプロキシーは w3proxy:8080 です。 1 番目のプロキシーが使用できない場合は再度使用できるようになるまで mozilla:8081 を使用します。
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : 上と同じですが、両方使用できない場合に自動的に直接接続します。（上記の最初の例では、 Netscape はユーザーに直接接続するか確認しますが、この例では確認されません。）
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : 1 番目のプロキシーが使用できない場合 SOCKS サーバーを使います。

自動構成ファイルは .pac の拡張子で保存しなければなりません。

そして、MIME タイプを `application/x-ns-proxy-autoconfig` に設定します。

次に、 .pac 拡張子をこの MIME タイプに結び付けるようサーバーを設定してください。

> [!NOTE]
>
> - JavaScript 関数は常に単体のファイルで保存し、 HTML ファイルやその他のファイルに埋め込まないでください。
> - この文書の最後にある例は完全なものです。ファイルを保存して使用するのに追加する必要がある構文はありません。（もちろん、 JavaScript を編集して自分のサイトのドメイン名やサブネットマスクに合わせる必要があります。）

## 定義済みの関数と環境

PAC ファイルを作成するために、以下の関数を使用できます。

- ホスト名に基づく条件
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- 関連するユーティリティー関数
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- URL/ホスト名に基づく条件
  - [`shExpMatch()`](#shexpmatch)

- 時刻に基づく条件
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- ログ用ユーティリティ
  - [`alert()`](#alert)

- 以前は JavaScript コードが自分自身で定義することができなかったため、定義済みの連想配列 (オブジェクト) が一つ用意されていました。
  - `ProxyConfig.bindings` {{deprecated_inline}}

> [!NOTE]
> 以下の例をテストするために、 pactester ([pacparser](https://github.com/manugarg/pacparser) パッケージの一部) を使用しました。
>
> - PAC ファイルは `proxy.pac` という名前です
> - コマンドライン: `pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org` (引数 `host` に `www.mozilla.org` を、引数 `url` に `https://www.mozilla.org` を渡します)

### isPlainHostName()

#### 構文

```js-nolint
isPlainHostName(host)
```

#### 引数

- host
  - : URL から取り出したホスト名（ポート番号を除いたもの）

#### 解説

ホスト名にドメイン名が含まれていない（=ドットを含まない）場合は true になります。

#### 例

```js
isPlainHostName("www.mozilla.org"); // false
isPlainHostName("www"); // true
```

### `dnsDomainIs()`

#### 構文

```js-nolint
dnsDomainIs(host, domain)
```

#### 引数

- host
  - : URL から取り出したホスト名
- domain
  - : ホストが所属しているか確認したいドメイン名

#### 解説

ホスト名のドメインが一致する場合にのみ true を返します。

#### 例

```js-nolint
dnsDomainIs("www.mozilla.org", ".mozilla.org") // true
dnsDomainIs("www", ".mozilla.org") // false
```

### localHostOrDomainIs()

#### 構文

```js-nolint
localHostOrDomainIs(host, hostDom)
```

#### 引数

- host
  - : URLから取り出したホスト名です。
- hostdom
  - : 比較対象の完全修飾ホスト名です。

#### 解説

ホスト名が完全に指定されたホスト名と一致した場合、またはホスト名にドメイン名の部分がなく、修飾されていないホスト名が一致する場合に true を返します。

#### 例

```js-nolint
localHostOrDomainIs("www.mozilla.org", "www.mozilla.org") // true （正確に一致）
localHostOrDomainIs("www", "www.mozilla.org") // true （ホスト名が一致、ドメインは指定されていない）
localHostOrDomainIs("www.google.com", "www.mozilla.org") // false （ドメイン名が一致しない）
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false （ホスト名が一致しない）
```

### isResolvable()

#### 構文

```js-nolint
isResolvable(host)
```

#### 引数

- host
  - : URLから取り出したホスト名です。

ホスト名の解決を試みます。成功すれば true を返します。

#### 例

```js-nolint
isResolvable("www.mozilla.org") // true
```

### isInNet()

#### 構文

```js-nolint
isInNet(host, pattern, mask)
```

#### 引数

- host
  - : DNS ホスト名、または IP アドレス。ホスト名が渡された場合、この関数によって IP アドレスに解決されます。
- pattern
  - : ドットで区切られた形式の IP アドレスパターン。
- mask
  - : IP アドレスパターンのマスクで、 IP アドレスのどの部分に対して照合を行うかを指定します。 0 は無視、 255 は一致を意味します。

ホストの IP アドレスが指定されたIPアドレスパターンに一致する場合にのみ、 true を返します。

パターンとマスクの指定は、 SOCKS の設定と同じ方法で行います。

#### 例

```js
function FindProxyForURL(url, host) {
  alert(isInNet(host, "192.0.2.172", "255.255.255.255"));
  // "PAC-alert: true"
}
```

### dnsResolve()

```js-nolint
dnsResolve(host)
```

#### 引数

- host
  - : 解決するホスト名。

与えられた DNS ホスト名を IP アドレスに解決し、ドット区切りの形式で文字列として返します。

#### 例

```js
dnsResolve("www.mozilla.org"); // 文字列 "104.16.41.2" を返す
```

### convert_addr()

#### 構文

```js-nolint
convert_addr(ipaddr)
```

#### 引数

- ipaddr
  - : IP アドレスやマスクなどのドット付きアドレス。

ドットで区切られた 4 バイトを 1 つの 4 バイトワードに連結し、 10 進数に変換します。

#### 例

```js
convert_addr("192.0.2.172"); // 数値 1745889538 を返す
```

### myIpAddress()

#### 構文

```js-nolint
myIpAddress()
```

#### 引数

(なし)

#### 返値

Firefox が動作しているマシンのサーバー IP アドレスを、ドット区切りの整数形式の文字列として返します。より役立つように、ループバックアドレス（`127.0.0.1` など）に代替する前に、いくつかの選択肢を試みます。

#### 例

```js-nolint
myIpAddress()
```

### dnsDomainLevels()

#### 構文

```js-nolint
dnsDomainLevels(host)
```

#### 引数

- host
  - : URL のホスト名です。

ホスト名に含まれる DNS ドメインレベルの数（ドットの数）を整数で返します。

#### 例

```js-nolint
dnsDomainLevels("www") // 0
dnsDomainLevels("mozilla.org") // 1
dnsDomainLevels("www.mozilla.org"); // 2
```

### shExpMatch()

#### 構文

```js-nolint
shExpMatch(str, shExp)
```

#### 引数

- str
  - : 比較する任意の文字列です（例: URL、ホスト名）。
- shexp
  - : 比較対象となるシェル式です。

文字列が指定されたシェルグロブ表現に一致する場合、`true` を返します。

特定のグロブ式の構文に対応しているかどうかは、ブラウザーによって異なります。 `*` （任意の数の文字に一致）と `?` （1 文字に一致）は常に対応していますが、 `[characters]` と `[^characters]` は（Firefoxを含む）いくつかの実装で追加的に対応しています。

> [!NOTE]
> クライアントが対応している場合、JavaScript の正規表現は通常 URL (および他の文字列) をパターン一致させるより強力で一貫した方法を提供します。

#### 例

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // returns false
```

### weekdayRange()

#### 構文

```js-nolint
weekdayRange(wd1, wd2)
weekdayRange(wd1, wd2, gmt)
```

> [!NOTE]
> （Firefox 49以前） 関数でこれらの引数を範囲として評価したい場合は、 wd1 が wd2 より小さくなければなりません。以下の警告を参照してください。

#### 引数

- wd1 および wd2
  - : 曜日の文字列 `"SUN"`, `"MON"`, `"TUE"`, `"WED"`, `"THU"`, `"FRI"`, `"SAT"` のうちの一つ。
- gmt
  - : 文字列 "GMT "であるか、または省略される。

第 1 引数のみ必須。 2 つ目、 3 つ目のどちらか、あるいは両方を省略することができます。

引数が 1 つしかない場合、この関数はその引数が表す曜日に true という値を返します。2番目の引数に文字列 "GMT" が指定された場合，時刻は GMT であるとみなされます。それ以外の場合は、地方時であるとみなされます。

**wd1** と **wd1** の両方が定義されている場合、現在の曜日がその 2 つの曜日の間にあるとき、条件は true となります。境界を含みますが、_順序付けされたものです_。 "GMT" 引数が指定された場合、時刻は GMT とみなされます。それ以外の場合は、ローカルのタイムゾーンが使用されます。

> [!WARNING]
> _曜日の順番が重要です_。
> Firefox 49 以前では、`weekdayRange("SUN", "SAT")` は常に `true` と評価されます。
> `weekdayRange("WED", "SUN")` は、現在の曜日が水曜日か日曜日の場合にのみ `true` と評価されるようになりました。

#### 例

```js-nolint
weekdayRange("MON", "FRI") // （地方時で）月曜日から金曜日までなら true を返す
weekdayRange("MON", "FRI", "GMT") // （GMT タイムゾーンで）月曜日から金曜日までなら true を返す
weekdayRange("SAT") // 地方時で土曜日であれば true を返す
weekdayRange("SAT", "GMT") // GME 時刻で土曜日であれば true を返す
weekdayRange("FRI", "MON") // 金曜日と月曜日にのみ true を返します（順序は重要なので注意してください）。
```

### dateRange()

#### 構文

```js-nolint
dateRange(dayOrMonthOrYear)
dateRange(dayOrMonthOrYear, gmt)  // 曖昧さは、年が 31 より大きいと想定することで解決されます。
dateRange(day1, day2)
dateRange(day1, day2, gmt)
dateRange(month1, month2)
dateRange(month1, month2, gmt)
dateRange(year1, year2)
dateRange(year1, year2, gmt)
dateRange(day1, month1, day2, month2)
dateRange(day1, month1, day2, month2, gmt)
dateRange(month1, year1, month2, year2)
dateRange(month1, year1, month2, year2, gmt)
dateRange(day1, month1, year1, day2, month2, year2)
dateRange(day1, month1, year1, day2, month2, year2, gmt)
```

> [!NOTE]
> （Firefox 49 以前）関数がこれらの引数を範囲として評価したい場合、 day1 は day2 よりも小さく、 month1 は month2 よりも小さく、 year1 は year2 よりも小さくなければなりません。以下の警告を参照してください。

#### 引数

- day
  - : 1 から 31 までの月内の順序付き日数（整数値）。
- month
  - : 順序付きの文字列 `"JAN"`, `"FEB"`, `"MAR"`, `"APR"`, `"MAY"`, `"JUN"`, `"JUL"`, `"AUG"`, `"SEP"`, `"OCT"`, `"NOV"`, `"DEC"` のいずれかです。
- year
  - : 順序の通年の整数値です。例: 2016 （16 **ではない**）。
- gmt
  - : 文字列 "GMT" を指定すると、GMT タイムゾーンで時刻の比較を行います。指定しない場合は、地方時での時刻と見なされます。

1つの値のみが指定された場合（日、月、年のカテゴリーから）、この関数はその指定に一致する日にのみ真値を返します。両方の値が指定された場合、結果はそれらの時間の間で true となり、境界も含まれますが、境界は順序付けされます\_。

> [!WARNING]
> **日、月、年の順序が重要です**。 Firefox 49 以前では、 `dateRange("JAN", "DEC")` は常に `true` と評価されます。現在では、 `dateRange("DEC", "JAN")` は現在の月が 12 月か 1 月のときのみ、 true と評価されます。

#### 例

```js-nolint
dateRange(1) // 地方時における、それぞれの月の最初の日に true を返す
dateRange(1, "GMT") // GMT タイムゾーンにおいて、毎月最初の日に true を返す
dateRange(1, 15) // 毎月の前半に true を返す
dateRange(24, "DEC");// 毎年 12 月 24 日に true を返します
dateRange("JAN", "MAR"); // 年の最初の四半期に true を返します。

dateRange(1, "JUN", 15, "AUG");
// 毎年 6 月 1 日から 8 月 15 日まで true を返します。
// （6 月 1 日および 8 月 15 日を含む）

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// 1995 年 6 月 1 日から同年 8 月 15 日まで、true を返す

dateRange("OCT", 1995, "MAR", 1996);
// 1995 年 10 月から 1996 年 3 月まで true を返す
// （1995 年 10 月および 1996 年 3 月を含む）

dateRange(1995);
// 1995 年の 1 年間を通して true を返す

dateRange(1995, 1997);
// 1995 年の初めから 1997 年の終わりまで true を返す
```

### timeRange()

#### 構文

```js-nolint
// The full range of expansions is analogous to dateRange.
timeRange(hour1, min1, sec1, hour2, min2, sec2)
timeRange(hour1, min1, sec1, hour2, min2, sec2, gmt)
```

> [!NOTE]
> （Firefox 49以前）関数がこれらの引数を範囲として評価したい場合、カテゴリー hour1, min1, sec1 は、カテゴリー hour2, min2, sec2 よりも小さくなければなりません。下記の警告を参照してください。

#### 引数

- hour
  - : 0 ～ 23 までの時です。 (0 は深夜、 23 は午後 11 時)
- min
  - : 0 ～ 59 の分。
- sec
  - : 0 ～ 59 の秒。
- gmt
  - : GMTタイムゾーンを表す文字列 "GMT"、または地方時を表す指定なしのどちらかです。

1 つの値のみが指定された場合（各カテゴリー：時、分、秒）、この関数は、その指定に一致する時間でのみ真値を返します。両方の値が指定された場合、結果はそれらの時間の間で真となり、境界を含みますが、境界は順序付けされます\_。

> [!WARNING]
> **時、分、秒の順序が重要です**。 Firefox 49 以前では、 `timeRange(0, 23)` は常に true と評価されます。現在は `timeRange(23, 0)` は現在の時刻が 23:00 か 0:00 のときだけ true と評価されます。

#### 例

```js-nolint
timerange(12); // 正午から午後 1 時まで true を返す
timerange(12, 13) // 正午から午後 1 時まで true を返す
timerange(12, "GMT") // GMT タイムゾーンで正午から午後 1 時まで true を返す
timerange(9, 17) // 午前 9 時から午後 5 時まで true を返す
timerange(8, 30, 17, 0) // 午前 8 時 30 分から午後 5 時まで true を返す
timerange(0, 0, 0, 0, 0, 30) // 午前 0 時から午前 0 時 30 秒までの間に true を返す
```

### alert()

#### 構文

```js-nolint
alert(message)
```

#### 引数

- message
  - : ログに出力する文字列

ブラウザーコンソールにメッセージを出力します。

#### 例

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // ホスト名とその IP アドレスをログ出力
alert("Error: shouldn't reach this clause.") // メッセージをログ出力
```

## 例 1

### ローカルホスト以外ではプロキシーを使用する

> [!NOTE]
> この後の例はすべて非常に特殊なものであるため、テストはしていません。

完全修飾されていないホストや、ローカルドメインにあるホストはすべて直接接続されます。それ以外はすべて `w3proxy.mozilla.org:8080` を介して接続されます。プロキシーがダウンした場合、自動的に直接接続になります。

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

> [!NOTE]
> これは、プロキシーが 1 つしかない場合の、最も単純で最も効率的な自動構成ファイルです。

## 例 2

### 上記と同様だが、ファイアウォールの外側にあるローカルサーバーにはプロキシーを使用する

ローカルドメインに属しているがファイアウォールの外にあり、プロキシーサーバーを通さないと到達できないホスト (メインのウェブサーバーなど) がある場合、それらの例外は `localHostOrDomainIs()` 関数を使って処理することができます。

```js
function FindProxyForURL(url, host) {
  if (
    (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) &&
    !localHostOrDomainIs(host, "www.mozilla.org") &&
    !localHostOrDomainIs(host, "merchant.mozilla.org")
  ) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

上記の例では、mozilla.org ドメインのローカルホスト以外のすべてにプロキシーを使用します。さらに例外として、ホスト `www.mozilla.org` と `merchant.mozilla.org` はプロキシーを経由して接続されることになります。

> [!NOTE]
> 効率化のための例外処理、 `localHostOrDomainIs()` の関数はローカルドメインにある URL に対してのみ実行され、すべての URL に対して実行されるわけではありません。上記の効率的な動作を実現するために、 _and_ 式の前に _or_ 式を括弧で囲むことに注意してください。

## 例 3

### ホスト解決できない場合のみプロキシーを使用

この例は、内部のDNSサーバーが内部のホスト名しか解決できないように設定されている環境で動作し、解決できないホストに対してのみプロキシーを使用することを目的としています。

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

上記では毎回 DNS を参照する必要があるが、他のルールとインテリジェントにグループ化し、他のルールで結果が得られない場合にのみ DNS を参照するようにすることができる。

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isResolvable(host)
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## 例 4

### サブネットに基づく決定

この例では、あるサブネットのすべてのホストが直接接続され、他のホストはプロキシーを介して接続されています。

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

ここでも、最初に冗長なルールを追加することで、上記の DNS サーバーを使用することを最小限に抑えることができます。

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isInNet(host, "192.0.2.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## 例 5

### URL パターンに基づく負荷分散/ルーティング

この例はより洗練されています。4 台のプロキシーサーバーがあり、そのうちの 1 台は他のすべてのプロキシーサーバーの ホットスタンバイとなっていて、残りの 3 台のうちの 1 台がダウンすると、 4 台目が見なされます。さらに、残りの 3 つのプロキシーサーバーは URL パターンに基づいて負荷を分担し、キャッシュをより効果的にしています（3 つのサーバーにはどの文書も 1 つのコピーしかありません - それぞれに 1 つのコピーがあるのとは対照的です）。負荷はこのように配分されます。

| プロキシー | 目的                     |
| ---------- | ------------------------ |
| #1         | .com ドメイン            |
| #2         | .edu ドメイン            |
| #3         | その他のすべてのドメイン |
| #4         | ホットスタンバイ         |

ローカルからのアクセスはすべて直接であることが望まれます。すべてのプロキシーサーバーは 8080 番ポートで動作します（要件ではありません。ポートを変更すればいいのです。ただし、両側の設定を変更するのを忘れないでください）。 JavaScript の **`+`** 演算子で文字列を連結することができることに注意してください。

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mydomain.com")) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.com")) {
    return "PROXY proxy1.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  } else if (shExpMatch(host, "*.edu")) {
    return "PROXY proxy2.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
  }
  return "PROXY proxy3.mydomain.com:8080; PROXY proxy4.mydomain.com:8080";
}
```

## 例 6

### 特定のプロトコルのプロキシーを設定する

標準的な JavaScript の機能のほとんどは、 `FindProxyForURL()` 関数を使用して使用することが可能です。例として、プロトコルに応じて異なるプロキシーを設定するために {{jsxref("String.prototype.startsWith()", "startsWith()")}} 関数を使用することができます。

```js
function FindProxyForURL(url, host) {
  if (url.startsWith("http:")) {
    return "PROXY http-proxy.mydomain.com:8080";
  } else if (url.startsWith("ftp:")) {
    return "PROXY ftp-proxy.mydomain.com:8080";
  } else if (url.startsWith("gopher:")) {
    return "PROXY gopher-proxy.mydomain.com:8080";
  } else if (url.startsWith("https:") || url.startsWith("snews:")) {
    return "PROXY security-proxy.mydomain.com:8080";
  }
  return "DIRECT";
}
```

> [!NOTE]
> 同じことは、先に記述した [`shExpMatch()`](#shexpmatch) 関数を使って実現することができます。

例:

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> autoconfig ファイルは CGI スクリプトによって出力することができます。これは例えば、クライアントの IP アドレス（CGI では `REMOTE_ADDR` 環境変数）に基づいて autoconfig ファイルが異なる動作をするようにする場合に便利です。
>
> `isInNet()`, `isResolvable()`, `dnsResolve()` 関数の使用は、 DNS サーバーを参照する必要があるため、慎重に検討されるべきです。その他の autoconfig 関連の関数はすべて、 DNS サーバーを使用する必要のない単なる文字列一致関数である。プロキシーを使用した場合は、プロキシーが DNS ルックアップを行うため、 DNS サーバーへの影響が倍増する。ほとんどの場合、これらの関数は目的の結果を得るためには必要ない。

## 歴史と実装

プロキシー自動構成は、 JavaScript が導入された 1990 年代後半に Netscape Navigator 2.0 に導入されました。 Netscape のオープンソース化は、最終的に Firefox 自体につながっています。

PAC とその JavaScript ライブラリーの最も「オリジナルな」実装は、したがって、 Firefox の初期バージョンにある `nsProxyAutoConfig.js` です。これらのユーティリティは [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h) を含む他の多くのオープンソースシステムで見つかります。 Firefox では、後にこのファイルを [`ProxyAutoConfig.cpp`](https://searchfox.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) に C++ 文字列リテラルとして統合しています。これを独自のファイルに展開するには、その塊を JavaScript にコピーして、それを表示するための `console.log` ディレクティブを指定すれば十分です。

マイクロソフトは一般に独自の実装をしています。以前は[ライブラリーの問題](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems)もありましたが、現在はほとんど解決しています。 IPv6 に対応するために、アドレス処理部分を中心に[いくつかの新しい "Ex" 接尾辞付き関数](https://learn.microsoft.com/ja-jp/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format)を定義しているそうです。この機能は Chromium では対応していますが、 Firefox ではまだ対応していません ([bugzilla #558253](https://bugzilla.mozilla.org/show_bug.cgi?id=558253))。

## 関連情報

- {{glossary("Proxy server", "プロキシーサーバー")}}
- [MIME types (IANA media types)](/ja/docs/Web/HTTP/Guides/MIME_types)
- [Automatic proxy HTTP server configuration in web browsers](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
