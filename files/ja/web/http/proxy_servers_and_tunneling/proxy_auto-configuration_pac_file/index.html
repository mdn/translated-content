---
title: プロキシ自動設定ファイル
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
tags:
  - Necko
  - Networking
  - PAC
  - Proxy
translation_of: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file
original_slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file
---
<div>{{HTTPSidebar}}</div>

<div><strong>プロキシ自動設定 (Proxy Auto-Configuration, PAC) ファイル</strong>は、ウェブブラウザーのリクエスト (HTTP, HTTPS, FTP 等) を直接宛先に送るか、ウェブプロキシサーバーに転送するか決める JavaScript の関数です。次の JavaScript 関数を PAC ファイル内に記述します。</div>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  // ...
}</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">function FindProxyForURL(<var>url</var>, <var>host</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>url</var></code></dt>
 <dd>アクセスする URL です。 <code>https://</code> の URL ではパスとクエリの部分が削除されます。 Chrome (バージョン52～73) ではポリシーで <code>PacHttpsUrlStrippingEnabled</code> を <code>false</code> に設定するか、コマンドラインで <code>--unsafe-pac-url</code> フラグを指定することで無効にすることができます (Chrome 74では、フラグのみが動作します。75以降では、パスの削除を無効にする方法はありません。 Chrome 81 では、パスの削除は HTTP の URL では適用されませんが、 HTTPS に合わせて変更される予定です。)。 Firefox では、設定値は <code>network.proxy.autoconfig_url.include_path</code> です。</dd>
 <dt><code><var>host</var></code></dt>
 <dd>URL から抽出したホスト名です。これは利便性のみのためのものです。 <code>://</code> とそのあとに最初に現れる <code>:</code> または <code>/</code> と同じ文字列です。この引数にはポート番号は含まれません。必要ならば URL から取り出してください。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>構成を表す文字列を返します。この文字列の書式は後述の<strong>返値の形式</strong>で定義されています。</p>

<h3 id="Return_value_format" name="Return_value_format">返値の形式</h3>

<ul>
 <li>この JavaScript の関数は1つの文字列を返す</li>
 <li>文字列が null である場合、プロキシは使用されない</li>
 <li>文字列にはセミコロン区切りで、以下の構成ブロックを任意の数だけ含むことができる</li>
</ul>

<dl>
 <dt><code>DIRECT</code></dt>
 <dd>接続はプロキシを使用せずに、直接行われる</dd>
 <dt><code>PROXY <em>host:port</em></code></dt>
 <dd>指定されたプロキシを使用する</dd>
 <dt><code>SOCKS <em>host:port</em></code></dt>
 <dd>指定された SOCKS サーバーを使用する</dd>
</dl>

<p>最近の Firefox のバージョンでは次の書き方にも対応しています。</p>

<dl>
 <dt><code>HTTP <em>host:port</em></code></dt>
 <dd>指定されたプロキシを使用する</dd>
 <dt><code>HTTPS <em>host:port</em></code></dt>
 <dd>指定された HTTPS プロキシを使用する</dd>
 <dt><code>SOCKS4 <em>host:port</em></code></dt>
 <dt><code>SOCKS5 <em>host:port</em></code></dt>
 <dd>指定された SOCKS サーバーを (指定された SOCK バージョンで) 使用する</dd>
</dl>

<p>セミコロン区切りで複数の設定があった場合、 最も左の設定が、 Firefox がプロキシへの接続の確立に失敗しない限り使用されます。この場合は、その次の設定が使用されます。</p>

<p>ブラウザーは応答がなかったプロキシに対して、30分後に再接続を試みます。その次は１時間後に試行し、試行のたびに間隔を30分追加します。</p>

<p>すべてのプロキシが使用できず、 DIRECT オプションが設定されていない場合、ブラウザーは一時的にプロキシを無視して直接接続するか尋ねます。20分後ブラウザーはプロキシが使えるか再確認するかを尋ね、その40分後に再度尋ねます。この動作は間隔を20分ずつ長くして続きます。</p>

<h4 id="Examples" name="Examples">例</h4>

<dl>
 <dt><code>PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081</code></dt>
 <dd>1番目のプロキシは w3proxy:8080 です。1番目のプロキシが使用できない場合は再度使用できるようになるまで mozilla:8081 を使用します。</dd>
 <dt><code>PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT</code></dt>
 <dd>上と同じですが、両方使用できない場合に自動的に直接接続します。 (上記の最初の例では、 Netscape はユーザーに直接接続するか確認しますが、この例では確認されません。)</dd>
 <dt><code>PROXY w3proxy.netscape.com:8080; SOCKS socks:1080</code></dt>
 <dd>1番目のプロキシが使用できない場合 SOCKS サーバを使います。</dd>
</dl>

<p id="Saving_the_Auto-Config_File_Setting_the_MIME_Type">自動設定ファイルは .pac の拡張子で保存しなければなりません。</p>

<pre class="syntaxbox notranslate">proxy.pac</pre>

<p>MIME タイプは以下のように設定してください。</p>

<pre class="syntaxbox notranslate">application/x-ns-proxy-autoconfig</pre>

<p>次に、 .pac 拡張子をこの MIME タイプに結び付けるようサーバーを設定してください。</p>

<div class="note">
<p><strong>注: </strong></p>

<ul>
 <li>JavaScript 関数は常に単体のファイルで保存し、 HTML ファイルやその他のファイルに埋め込まないでください。</li>
 <li>この文書の最後にある例は完全なものです。ファイルを保存して使用するのに追加する必要がある構文はありません。 (もちろん、 JavaScript を編集して自分のサイトのドメイン名やサブネットマスクに合わせる必要があります。)</li>
</ul>
</div>

<h2 id="Predefined_functions_and_environment" name="Predefined_functions_and_environment">定義済みの関数と環境</h2>

<p>PAC ファイルを作成するために、以下の関数を使用できます。</p>

<ul>
 <li>ホスト名に基づく条件
  <ul>
   <li><code><a href="#isPlainHostName">isPlainHostName()</a></code></li>
   <li><code><a href="#dnsDomainIs">dnsDomainIs()</a></code></li>
   <li><code><a href="#localHostOrDomainIs">localHostOrDomainIs()</a></code></li>
   <li><code><a href="#isResolvable">isResolvable()</a></code></li>
   <li><code><a href="#isInNet">isInNet()</a></code></li>
  </ul>
 </li>
 <li>関連するユーティリティー関数
  <ul>
   <li><code><a href="#dnsResolve">dnsResolve()</a></code></li>
   <li><code><a href="#convert_addr">convert_addr()</a></code></li>
   <li><code><a href="#myIpAddress">myIpAddress()</a></code></li>
   <li><code><a href="#dnsDomainLevels">dnsDomainLevels()</a></code></li>
  </ul>
 </li>
 <li>URL/ホスト名に基づく条件
  <ul>
   <li><code><a href="#shExpMatch(str, shexp)">shExpMatch()</a></code></li>
  </ul>
 </li>
 <li>時刻に基づく条件
  <ul>
   <li><code><a href="#weekdayRange">weekdayRange()</a></code></li>
   <li><code><a href="#dateRange">dateRange()</a></code></li>
   <li><code><a href="#timeRange">timeRange()</a></code></li>
  </ul>
 </li>
 <li>ログ用ユーティリティ
  <ul>
   <li>{{domxref("Window/alert", "alert()")}}</li>
  </ul>
 </li>
 <li>以前は JavaScript コードが自分自身で定義することができなかったため、定義済みの連想配列 (オブジェクト) が一つ用意されていました。
  <ul>
   <li><code>ProxyConfig.bindings</code> {{obsolete_inline}}</li>
  </ul>
 </li>
</ul>

<div class="note">
<p><strong>注:</strong> 以下の例をテストするために、 pactester (<a href="https://github.com/pacparser/pacparser">pacparser</a>パッケージの一部) を使用しました。</p>

<ul>
 <li>PAC ファイルは <code>proxy.pac</code> という名前です</li>
 <li>コマンドライン: <code>pactester -p ~/pacparser-master/tests/proxy.pac -u http://www.mozilla.org</code> (引数 <code>host</code> に <code>www.mozilla.org</code> を、引数 <code>url</code> に <code>http://www.mozilla.org</code> を渡します)</li>
</ul>
</div>

<h3 id="isPlainHostName">isPlainHostName()</h3>

<h4 id="Syntax_2" name="Syntax_2">構文</h4>

<pre class="syntaxbox notranslate">isPlainHostName(<var>host</var>)</pre>

<h4 id="Parameters_2" name="Parameters_2">引数</h4>

<dl>
 <dt>host</dt>
 <dd>URLから取り出したホスト名 (ポート番号を除いたもの)</dd>
</dl>

<h4 id="解説">解説</h4>

<p>ホスト名にドメイン名が含まれていない (=ドットを含まない) 場合は true になります。</p>

<h4 id="Examples_2" name="Examples_2">例</h4>

<pre class="brush: js notranslate">isPlainHostName("www.mozilla.org") // false
isPlainHostName("www") // true
</pre>

<h3 id="dnsDomainIshost_domain" name="dnsDomainIs(host, domain)">dnsDomainIs()</h3>

<h4 id="Syntax_3" name="Syntax_3">構文</h4>

<pre class="syntaxbox notranslate">dnsDomainIs(<var>host</var>, <var>domain</var>)</pre>

<h4 id="Parameters_3" name="Parameters_3">引数</h4>

<dl>
 <dt>host</dt>
 <dd>URL から取り出したホスト名</dd>
 <dt>domain</dt>
 <dd>ホストが所属しているか確認したいドメイン名</dd>
</dl>

<h4 id="Description_3" name="Description_3">解説</h4>

<p>ホスト名のドメインが一致する場合にのみ true を返します。</p>

<h4 id="Examples_3" name="Examples_3">例</h4>

<pre class="brush: js notranslate">dnsDomainIs("www.mozilla.org", ".mozilla.org") // true
dnsDomainIs("www", ".mozilla.org") // false
</pre>

<h3 id="localHostOrDomainIs">localHostOrDomainIs()</h3>

<h4 id="Syntax_4" name="Syntax_4">構文</h4>

<pre class="syntaxbox notranslate">localHostOrDomainIs(<var>host</var>, <var>hostdom</var>)</pre>

<h4 id="Parameters_4" name="Parameters_4">引数</h4>

<dl>
 <dt>host</dt>
 <dd>URLから取り出したホスト名です。</dd>
 <dt>hostdom</dt>
 <dd>比較対象の完全修飾ホスト名です。</dd>
</dl>

<h4 id="Description_4" name="Description_4">解説</h4>

<p>ホスト名が<em>完全に</em>指定されたホスト名と一致した場合、またはホスト名にドメイン名の部分がなく、修飾されていないホスト名が一致する場合に true を返します。</p>

<h4 id="Examples_4" name="Examples_4">例</h4>

<pre class="brush: js notranslate">localHostOrDomainIs("www.mozilla.org" , "www.mozilla.org") // true (exact match)
localHostOrDomainIs("www"             , "www.mozilla.org") // true (hostname match, domain not specified)
localHostOrDomainIs("www.google.com"  , "www.mozilla.org") // false (domain name mismatch)
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false (hostname mismatch)</pre>

<h3 id="isResolvable">isResolvable()</h3>

<h4 id="Syntax_5" name="Syntax_5">構文</h4>

<pre class="syntaxbox notranslate">isResolvable(<var>host</var>)</pre>

<h4 id="Parameters_5" name="Parameters_5">引数</h4>

<dl>
 <dt>host</dt>
 <dd>URLから取り出したホスト名です。</dd>
</dl>

<p>ホスト名の解決を試みます。成功すれば true を返します。</p>

<h4 id="Examples_5" name="Examples_5">例:</h4>

<pre class="brush: js notranslate">isResolvable("www.mozilla.org") // true
</pre>

<h3 id="isInNet">isInNet()</h3>

<h4 id="Syntax_6" name="Syntax_6">構文</h4>

<pre class="syntaxbox notranslate">isInNet(<var>host</var>, <var>pattern</var>, <var>mask</var>)</pre>

<h4 id="Parameters_6">Parameters</h4>

<dl>
 <dt>host</dt>
 <dd>a DNS hostname, or IP address. If a hostname is passed, it will be resolved into an IP address by this function.</dd>
 <dt>pattern</dt>
 <dd>an IP address pattern in the dot-separated format.</dd>
 <dt>mask</dt>
 <dd>mask for the IP address pattern informing which parts of the IP address should be matched against. 0 means ignore, 255 means match.</dd>
</dl>

<p>True if and only if the IP address of the host matches the specified IP address pattern.</p>

<p>Pattern and mask specification is done the same way as for SOCKS configuration.</p>

<h4 id="Examples_6">Examples:</h4>

<pre class="brush: js notranslate">function alert_eval(str) { alert(str + ' is ' + eval(str)) }
function FindProxyForURL(url, host) {
  alert_eval('isInNet(host, "63.245.213.24", "255.255.255.255")')
  // "PAC-alert: isInNet(host, "63.245.213.24", "255.255.255.255") is true"
}
</pre>

<h3 id="dnsResolve">dnsResolve()</h3>

<pre class="syntaxbox notranslate">dnsResolve(<em>host</em>)</pre>

<h4 id="Parameters_7">Parameters</h4>

<dl>
 <dt>host</dt>
 <dd>hostname to resolve.</dd>
</dl>

<p>Resolves the given DNS hostname into an IP address, and returns it in the dot-separated format as a string.</p>

<h4 id="Example">Example</h4>

<pre class="brush: js notranslate">dnsResolve("www.mozilla.org"); // returns the string "104.16.41.2"</pre>

<h3 id="convert_addr">convert_addr()</h3>

<h4 id="Syntax_7">Syntax</h4>

<pre class="syntaxbox notranslate">convert_addr(ipaddr)</pre>

<h4 id="Parameters_8">Parameters</h4>

<dl>
 <dt>ipaddr</dt>
 <dd>Any dotted address such as an IP address or mask.</dd>
</dl>

<p>Concatenates the four dot-separated bytes into one 4-byte word and converts it to decimal.</p>

<h4 id="Example_2">Example</h4>

<pre class="brush: js notranslate">convert_addr("104.16.41.2"); // returns the decimal number 1745889538</pre>

<h3 id="myIpAddress">myIpAddress()</h3>

<h4 id="Syntax_8">Syntax</h4>

<pre class="syntaxbox notranslate">myIpAddress()</pre>

<h4 id="Parameters_9">Parameters</h4>

<p><strong>(none)</strong></p>

<p>Returns the server IP address of the machine Firefox is running on, as a string in the dot-separated integer format.</p>

<div class="warning">
<p>myIpAddress() returns the same IP address as the server address returned by <strong><code>nslookup localhost</code> </strong>on a Linux machine. It does not return the public IP address.</p>
</div>

<h4 id="Example_3">Example</h4>

<pre class="brush: js notranslate">myIpAddress() //returns the string "127.0.1.1" if you were running Firefox on that localhost</pre>

<h3 id="dnsDomainLevels">dnsDomainLevels()</h3>

<h4 id="Syntax_9">Syntax</h4>

<pre class="syntaxbox notranslate">dnsDomainLevels(<var>host</var>)</pre>

<h4 id="Parameters_10">Parameters</h4>

<dl>
 <dt>host</dt>
 <dd>is the hostname from the URL.</dd>
</dl>

<p>Returns the number (integer) of DNS domain levels (number of dots) in the hostname.</p>

<h4 id="Examples_7">Examples:</h4>

<pre class="brush: js notranslate">dnsDomainLevels("www");             // 0
dnsDomainLevels("mozilla.org");     // 1
dnsDomainLevels("www.mozilla.org"); // 2
</pre>

<h3 id="shExpMatch">shExpMatch()</h3>

<h4 id="Syntax_10">Syntax</h4>

<pre class="syntaxbox notranslate">shExpMatch(<var>str</var>, <var>shexp</var>)</pre>

<h4 id="Parameters_11">Parameters</h4>

<dl>
 <dt>str</dt>
 <dd>is any string to compare (e.g. the URL, or the hostname).</dd>
 <dt>shexp</dt>
 <dd>is a shell expression to compare against.</dd>
</dl>

<p>Returns true if the string matches the specified shell expression.</p>

<p><strong>Note that the patterns are <em>shell</em> glob <em>expressions</em>, not regular expressions. </strong><code>*</code> and <code>?</code> are always supported, while <code>[characters]</code> and <code>[^characters]</code> are supported by some implmentations including Firefox. This is mainly because the expression is translated to a RegExp via subsitution of <code>[.*?]</code>. For a reliable way to use these RegExp syntaxes, just use RegExp instead.</p>

<h4 id="Examples_8">Examples</h4>

<pre class="brush: js notranslate">shExpMatch("http://home.netscape.com/people/ari/index.html"     , "*/ari/*"); // returns true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // returns false</pre>

<h3 id="weekdayRange">weekdayRange()</h3>

<h4 id="Syntax_11">Syntax</h4>

<pre class="syntaxbox notranslate">weekdayRange(<var>wd1</var>, <var>wd2</var>, [<var>gmt</var>])</pre>

<div class="note">
<p><strong>Note:</strong> (Before Firefox 49) wd1 must be less than wd2 if you want the function to evaluate these parameters as a range. See the warning below.</p>
</div>

<h4 id="Parameters_12">Parameters</h4>

<dl>
 <dt>wd1 and wd2</dt>
 <dd>One of the ordered weekday strings:</dd>
 <dt>
 <pre class="syntaxbox notranslate">"SUN"|"MON"|"TUE"|"WED"|"THU"|"FRI"|"SAT"</pre>
 </dt>
 <dt>gmt</dt>
 <dd>Is either the string "GMT" or is left out.</dd>
</dl>

<p>Only the first parameter is mandatory. Either the second, the third, or both may be left out.</p>

<p>If only one parameter is present, the function returns a value of true on the weekday that the parameter represents. If the string "GMT" is specified as a second parameter, times are taken to be in GMT. Otherwise, they are assumed to be in the local timezone.</p>

<p>If both <strong>wd1 </strong>and <strong>wd1 </strong>are defined, the condition is true if the current weekday is in between those two <em>ordered </em>weekdays. Bounds are inclusive, <em>but the bounds are ordered</em>. If the "GMT" parameter is specified, times are taken to be in GMT. Otherwise, the local timezone is used.</p>

<div class="warning">
<p><strong>The order of the days matters</strong>; Before Firefox 49, <code>weekdayRange("<em>SUN", "SAT"</em>)</code> will always evaluate to true. Now <code>weekdayRange("<em>WED", "SUN"</em>)</code> will only evaluate true if the current day is Wednesday or Sunday.</p>
</div>

<h4 id="Examples_9">Examples</h4>

<pre class="brush: js notranslate">weekdayRange("MON", "FRI");        // returns true Monday through Friday (local timezone)
weekdayRange("MON", "FRI", "GMT"); // returns true Monday through Friday (GMT timezone)
weekdayRange("SAT");               // returns true on Saturdays local time
weekdayRange("SAT", "GMT");        // returns true on Saturdays GMT time
weekdayRange("FRI", "MON");        // returns true Friday and Monday only (note, order does matter!)</pre>

<h3 id="dateRange">dateRange()</h3>

<h4 id="Syntax_12">Syntax</h4>

<pre class="syntaxbox notranslate">dateRange(&lt;day&gt; | &lt;month&gt; | &lt;year&gt;, [gmt])  // ambiguity is resolved by assuming year is greater than 31
dateRange(&lt;day1&gt;, &lt;day2&gt;, [gmt])
dateRange(&lt;month1&gt;, &lt;month2&gt;, [gmt])
dateRange(&lt;year1&gt;, &lt;year2&gt;, [gmt])
dateRange(&lt;day1&gt;, &lt;month1&gt;, &lt;day2&gt;, &lt;month2&gt;, [gmt])
dateRange(&lt;month1&gt;, &lt;year1&gt;, &lt;month2&gt;, &lt;year2&gt;, [gmt])
dateRange(&lt;day1&gt;, &lt;month1&gt;, &lt;year1&gt;, &lt;day2&gt;, &lt;month2&gt;, &lt;year2&gt;, [gmt])</pre>

<div class="note">
<p><strong>Note:</strong> (Before Firefox 49) day1 must be less than day2, month1 must be less than month2, and year1 must be less than year2 if you want the function to evaluate these parameters as a range. See the warning below.</p>
</div>

<h4 id="Parameters_13">Parameters</h4>

<dl>
 <dt>day</dt>
 <dd>Is the ordered day of the month between 1 and 31 (as an integer).</dd>
</dl>

<pre class="syntaxbox notranslate">1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31</pre>

<dl>
 <dt>month</dt>
 <dd>Is one of the ordered month strings below.</dd>
</dl>

<pre class="syntaxbox notranslate">"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"</pre>

<dl>
 <dt>year</dt>
 <dd>Is the ordered full year integer number. For example, 2016 (<strong>not</strong> 16).</dd>
 <dt>gmt</dt>
 <dd>Is either the string "GMT", which makes time comparison occur in GMT timezone, or is left out. If left unspecified, times are taken to be in the local timezone.</dd>
</dl>

<p>If only a single value is specified (from each category: day, month, year), the function returns a true value only on days that match that specification. If both values are specified, the result is true between those times, including bounds, <em>but the bounds are ordered</em>.</p>

<div class="warning">
<p><strong>The order of the days, months, and years matter</strong>; Before Firefox 49, <code>dateRange("<em>JAN", "DEC"</em>)</code> will always evaluate to <code>true</code>. Now <code>dateRange("<em>DEC", "JAN"</em>)</code> will only evaluate true if the current month is December or January.</p>
</div>

<h4 id="Examples_10">Examples</h4>

<pre class="brush: js notranslate">dateRange(1);            // returns true on the first day of each month, local timezone
dateRange(1, "GMT")      // returns true on the first day of each month, GMT timezone
dateRange(1, 15);        // returns true on the first half of each month
dateRange(24, "DEC");    // returns true on 24th of December each year
dateRange("JAN", "MAR"); // returns true on the first quarter of the year

dateRange(1, "JUN", 15, "AUG");
// returns true from June 1st until August 15th, each year
// (including June 1st and August 15th)

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// returns true from June 1st, 1995, until August 15th, same year

dateRange("OCT", 1995, "MAR", 1996);
// returns true from October 1995 until March 1996
// (including the entire month of October 1995 and March 1996)

dateRange(1995);
// returns true during the entire year of 1995

dateRange(1995, 1997);
// returns true from beginning of year 1995 until the end of year 1997</pre>

<h3 id="timeRange">timeRange()</h3>

<h4 id="Syntax_13">Syntax</h4>

<pre class="syntaxbox notranslate">// The full range of expansions is analogous to dateRange.
timeRange(&lt;hour1&gt;, &lt;min1&gt;, &lt;sec1&gt;, &lt;hour2&gt;, &lt;min2&gt;, &lt;sec2&gt;, [gmt])</pre>

<div class="note">
<p><strong>Note:</strong> (Before Firefox 49) the category hour1, min1, sec1 must be less than the category hour2, min2, sec2 if you want the function to evaluate these parameters as a range. See the warning below.</p>
</div>

<h4 id="Parameters_14">Parameters</h4>

<dl>
 <dt>hour</dt>
 <dd>Is the hour from 0 to 23. (0 is midnight, 23 is 11 pm.)</dd>
 <dt>min</dt>
 <dd>Minutes from 0 to 59.</dd>
 <dt>sec</dt>
 <dd>Seconds from 0 to 59.</dd>
 <dt>gmt</dt>
 <dd>Either the string "GMT" for GMT timezone, or not specified, for local timezone.</dd>
</dl>

<p>If only a single value is specified (from each category: hour, minute, second), the function returns a true value only at times that match that specification. If both values are specified, the result is true between those times, including bounds, <em>but the bounds are ordered</em>.</p>

<div class="warning">
<p><strong>The order of the hour, minute, second matter</strong>; Before Firefox 49, <code>timeRange(<em>0, 23</em>)</code> will always evaluate to true. Now <code>timeRange(<em>23, 0</em>)</code> will only evaluate true if the current hour is 23:00 or midnight.</p>
</div>

<h4 id="Examples_11">Examples</h4>

<pre class="brush: js notranslate">timerange(12);                // returns true from noon to 1pm
timerange(12, 13);            // returns true from noon to 1pm
timerange(12, "GMT");         // returns true from noon to 1pm, in GMT timezone
timerange(9, 17);             // returns true from 9am to 5pm
timerange(8, 30, 17, 00);     // returns true from 8:30am to 5:00pm
timerange(0, 0, 0, 0, 0, 30); // returns true between midnight and 30 seconds past midnight</pre>

<h2 id="Example_1">Example 1</h2>

<h3 id="Use_proxy_for_everything_except_local_hosts">Use proxy for everything except local hosts</h3>

<div class="note">
<p><strong>Note:</strong> Since all of the examples that follow are very specific, they have not been tested.</p>
</div>

<p>All hosts which aren't fully qualified, or the ones that are in local domain, will be connected to directly. Everything else will go through <code>w3proxy.mozilla.org:8080</code>. If the proxy goes down, connections become direct automatically:</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}</pre>

<div class="note">
<p><strong>Note:</strong> This is the simplest and most efficient autoconfig file for cases where there's only one proxy.</p>
</div>

<h2 id="Example_2_2">Example 2</h2>

<h3 id="As_above_but_use_proxy_for_local_servers_which_are_outside_the_firewall">As above, but use proxy for local servers which are outside the firewall</h3>

<p>If there are hosts (such as the main Web server) that belong to the local domain but are outside the firewall and are only reachable through the proxy server, those exceptions can be handled using the <code>localHostOrDomainIs()</code> function:</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  if (
    (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) &amp;&amp;
    !localHostOrDomainIs(host, "www.mozilla.org") &amp;&amp;
    !localHostOrDoaminIs(host, "merchant.mozilla.org")
  ) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}</pre>

<p>The above example will use the proxy for everything except local hosts in the mozilla.org domain, with the further exception that hosts <code>www.mozilla.org</code> and <code>merchant.mozilla.org</code> will go through the proxy.</p>

<div class="note">
<p><strong>Note</strong> the order of the above exceptions for efficiency: localHostOrDomainIs() functions only get executed for URLs that are in local domain, not for every URL. Be careful to note the parentheses around the<em> or</em> expression before the <em>and</em> expression to achieve the above-mentioned efficient behaviour.</p>
</div>

<h2 id="Example_3_2">Example 3</h2>

<h3 id="Use_proxy_only_if_cannot_resolve_host">Use proxy only if cannot resolve host</h3>

<p>This example will work in an environment where the internal DNS server is set up so that it can only resolve internal host names, and the goal is to use a proxy only for hosts that aren't resolvable:</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  if (isResolvable(host))
    return "DIRECT";
  else
    return "PROXY proxy.mydomain.com:8080";
}</pre>

<p>The above requires consulting the DNS every time; it can be grouped intelligently with other rules so that DNS is consulted only if other rules do not yield a result:</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isResolvable(host)
  ) {
    return "DIRECT";
  } else {
    return "PROXY proxy.mydomain.com:8080";
  }
}</pre>

<h2 id="Example_4">Example 4</h2>

<h3 id="Subnet_based_decisions">Subnet based decisions</h3>

<p>In this example all of the hosts in a given subnet are connected-to directly, others are connected through the proxy:</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  if (isInNet(host, "198.95.0.0", "255.255.0.0"))
    return "DIRECT";
  else
    return "PROXY proxy.mydomain.com:8080";
}</pre>

<p>Again, use of the DNS server in the above can be minimized by adding redundant rules in the beginning:</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isInNet(host, "198.95.0.0", "255.255.0.0")
  ) {
    return "DIRECT";
  } else {
    return "PROXY proxy.mydomain.com:8080";
  }
}</pre>

<h2 id="Example_5">Example 5</h2>

<h3 id="Load_balancingrouting_based_on_URL_patterns">Load balancing/routing based on URL patterns</h3>

<p>This example is more sophisticated. There are four (4) proxy servers; one of them is a hot stand-by for all of the other ones, so if any of the remaining three goes down the fourth one will take over. Furthermore, the three remaining proxy servers share the load based on URL patterns, which makes their caching more effective (there is only one copy of any document on the three servers - as opposed to one copy on each of them). The load is distributed like this:</p>

<table>
 <tbody>
  <tr>
   <th>Proxy</th>
   <th>Purpose</th>
  </tr>
  <tr>
   <td>#1</td>
   <td>.com domain</td>
  </tr>
  <tr>
   <td>#2</td>
   <td>.edu domain</td>
  </tr>
  <tr>
   <td>#3</td>
   <td>all other domains</td>
  </tr>
  <tr>
   <td>#4</td>
   <td>hot stand-by</td>
  </tr>
 </tbody>
</table>

<p>All local accesses are desired to be direct. All proxy servers run on the port 8080 (they don't need to, you can just change your port but remember to modify your configuations on both side). Note how strings can be concatenated with the <code><strong>+</strong></code> operator in JavaScript.</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {

  if (isPlainHostName(host) || dnsDomainIs(host, ".mydomain.com"))
    return "DIRECT";

  else if (shExpMatch(host, "*.com"))
    return "PROXY proxy1.mydomain.com:8080; " +
           "PROXY proxy4.mydomain.com:8080";

  else if (shExpMatch(host, "*.edu"))
    return "PROXY proxy2.mydomain.com:8080; " +
           "PROXY proxy4.mydomain.com:8080";

  else
    return "PROXY proxy3.mydomain.com:8080; " +
           "PROXY proxy4.mydomain.com:8080";
}</pre>

<h2 id="Example_6">Example 6</h2>

<h3 id="Setting_a_proxy_for_a_specific_protocol">Setting a proxy for a specific protocol</h3>

<p>Most of the standard JavaScript functionality is available for use in the <code>FindProxyForURL()</code> function. As an example, to set different proxies based on the protocol the {{jsxref("String.prototype.startsWith()", "startsWith()")}} function can be used:</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {

  if (url.startsWith("http:"))
    return "PROXY http-proxy.mydomain.com:8080";

  else if (url.startsWith("ftp:"))
    return "PROXY ftp-proxy.mydomain.com:8080";

  else if (url.startsWith(“gopher:"))
    return "PROXY gopher-proxy.mydomain.com:8080";

  else if (url.startsWith("https:") || url.startsWith("snews:"))
    return "PROXY security-proxy.mydomain.com:8080";

  else
    return "DIRECT";

}</pre>

<div class="note">
<p><strong>Note:</strong> The same can be accomplished using the <code><a href="#shExpMatch">shExpMatch()</a></code> function described earlier.</p>
</div>

<p>For example:</p>

<pre class="brush: js notranslate">// ...
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
// ...</pre>

<div class="note">
<p>The autoconfig file can be output by a CGI script. This is useful, for example, when making the autoconfig file act differently based on the client IP address (the <code>REMOTE_ADDR</code> environment variable in CGI).</p>

<p>Usage of <code>isInNet()</code>, <code>isResolvable()</code> and <code>dnsResolve()</code> functions should be carefully considered, as they require the DNS server to be consulted. All the other autoconfig-related functions are mere string-matching functions that don't require the use of a DNS server. If a proxy is used, the proxy will perform its DNS lookup which would double the impact on the DNS server. Most of the time these functions are not necessary to achieve the desired result.</p>
</div>

<h2 id="History_and_implementation">History and implementation</h2>

<p>Proxy auto-config was introduced into Netscape Navigator 2.0 in the late 1990s, at the same time when JavaScript was introduced. Open-sourcing Netscape eventually lead to Firefox itself.</p>

<p>The most "original" implementation of PAC and its JavaScript libraries is, therefore, <code>nsProxyAutoConfig.js</code> found in early versions of Firefox. These utilities are found in many other open-source systems including <a href="https://cs.chromium.org/chromium/src/services/proxy_resolver/pac_js_library.h">Chromium</a>. Firefox later integrated the file into <code><a href="https://dxr.mozilla.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp">ProxyAutoConfig.cpp</a></code> as a C++ string literal. To extract it into its own file, it suffices to copy the chunk into JavaScript with a <code>console.log</code> directive to print it.</p>

<p>Microsoft in general made its own implementation. There used to be <a href="https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems">some problems with their libraries</a>, but most are resolved by now. They have defined <a href="https://docs.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format">some new "Ex" suffixed functions</a> around the address handling parts to support IPv6. The feature is supported by Chromium, but not yet by Firefox (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=558253">bugzilla #558253</a>).</p>
