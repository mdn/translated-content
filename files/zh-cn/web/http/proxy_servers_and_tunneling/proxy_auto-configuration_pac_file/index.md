---
title: 代理自动配置文件（PAC）文件
slug: Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
---

{{HTTPSidebar}}

**代理自动配置**（PAC）文件是一个 JavaScript 脚本，其核心是一个 JavaScript 函数，用来决定网页浏览请求（HTTP、HTTPS，和 FTP）应当直连目标地址，还是被转发给一个网页代理服务器并通过代理连接。PAC 文件中的核心 JavaScript 函数通常是这样定义的：

```js
function FindProxyForURL(url, host) {
  // ...
}
```

## 语法

```plain
function FindProxyForURL(url, host)
```

### 参数

- `url`
  - : 要访问的 URL。`https://` URL 中的路径和查询组件已被去除。在 Chrome 浏览器（版本 52 至 73）中，你可以通过设置 `PacHttpsUrlStrippingEnabled` 为 `false` 来禁止这种行为，或者以 `--unsafe-pac-url` 命令行参数启动（自 Chrome 74 起，仅命令行参数有效，且在 Chrome 75 及之后的版本中无法禁用这种行为；至于 Chrome 81，路径剥离对 HTTP URL 不适用，但有意改变这一行为以适应 HTTPS）；在 Firefox 浏览器中，对应的选项是 `network.proxy.autoconfig_url.include_path`。
- `host`
  - : 从 URL 中提取得到的主机名。这只是为了方便；它与 `://` 之后到第一个 `:` 或 `/` 之前的字符串相同。端口号不包括在此参数中，必要时可以自行从 URL 中提取。

## 描述

返回一个描述了代理设置的字符串。字符串的格式按照返回值格式进行定义。

### 返回值格式

- `FindProxyForURL()` 函数返回一个字符串
- 如果那个字符串为空，则不使用任何代理
- 字符串中可以包含如下任意数量的“代理配置块”（building blocks），用分号分隔：

<!---->

- `DIRECT`
  - : 直连，不经过任何代理
- `PROXY host:port`
  - : HTTP 代理
- `SOCKS host:port`
  - : SOCKS 代理

最近版本的 Firefox 同时还支持：

- `HTTP host:port`
  - : HTTP 代理
- `HTTPS host:port`
  - : HTTPS 代理
- `SOCKS4 host:port`

  `SOCKS5 host:port`

  - : SOCKS 代理（同时指定 SOCKS 版本）

如果有多个使用分号分隔的代理配置，将使用最左边的配置，除非 Firefox 无法与其中指定的代理服务器建立连接。在这种情况下，将使用下一个配置，等等。

30 分钟后，浏览器将自动重试之前没有响应的代理。下一次尝试则将在一小时后开始，再下一次是一个半小时。每次尝试后，间隔会增加 30 分钟。

如果所有代理都挂了，并且最后没有指定直连配置项（`DIRECT`），浏览器将询问是否应该暂时忽略代理，并尝试直接连接。20 分钟后，浏览器会再次询问是否应该重试代理，40 分钟后会再问一次。每次询问后，间隔会增加 20 分钟。

#### 例子

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : 主代理是 `w3proxy:8080`；如果它出现故障，则使用 `mozilla:8081`，直到主代理恢复。
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : 和上面的基本一样，但如果两个代理都挂了，则自动改为直连。（在上面的例子中，Netscape 浏览器将询问用户是否要改用直接连接；在本例中，则不需要用户干预。）
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : 如果主代理出现问题，则使用 SOCKS 连接。

自动配置文件应当被保存为一个以 .pac 作为文件拓展名的文件，比如：

```plain
proxy.pac
```

其 MIME 类型应被设置为：

```plain
application/x-ns-proxy-autoconfig
```

接下来，你应当配置你的服务器，让文件拓展名 .pac 映射到如上所示的 MIME 类型。

> **备注：** PAC 文件的 JavaScript 代码应该总是单独保存到 .pac 文件中，而不是嵌入到 HTML 文件或是任何其他文件之中。
>
> - 本文档末尾的示例都是完整的，使用时不需要增加任何其他代码，直接保存应用即可。（当然，你需要改成你自己的域名/子域）

## 预定义的函数与环境

这些函数可以在 PAC 文件中使用：

- 基于主机名的判断函数

  - [`isPlainHostName()`](#isPlainHostName)
  - [`dnsDomainIs()`](#dnsDomainIs)
  - [`localHostOrDomainIs()`](#localHostOrDomainIs)
  - [`isResolvable()`](#isResolvable)
  - [`isInNet()`](#isInNet)

- 和代理相关的功能函数

  - [`dnsResolve()`](#dnsResolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myIpAddress)
  - [`dnsDomainLevels()`](#dnsDomainLevels)

- 基于 URL 或主机名的判断函数

  - [`shExpMatch()`](#shExpMatchstr_shexp)

- 基于时间的判断函数

  - [`weekdayRange()`](#weekdayRange)
  - [`dateRange()`](#dateRange)
  - [`timeRange()`](#timeRange)

- 日志记录功能函数

  - [`alert()`](/zh-CN/docs/Web/API/Window/alert)

- 同时，还定义了一个关联数组（associative array），因为 JavaScript 目前无法自行定义它们：

  - `ProxyConfig.bindings` {{Deprecated_Inline}}

> **备注：** pactester ([pacparser](https://github.com/pacparser/pacparser) 的一部分) 可以用来检测语法是否符合要求，使用方法如下：
>
> - PAC 文件保存为 `proxy.pac`
> - 命令行输入：`pactester -p ~/pacparser-master/tests/proxy.pac -u http://www.mozilla.org`。
>
>   - 该命令中， `host` 参数为 `www.mozilla.org` ， `url` 参数为`http://www.mozilla.org`。

### isPlainHostName()

#### 语法

```plain
isPlainHostName(host)
```

#### 参数

- host
  - : 从 URL 中得到的主机名（端口除外）。

#### 描述

当且仅当主机名中没有域名时为真（没有分隔域名的点）。

#### 例子

```js
isPlainHostName("www.mozilla.org"); // false
isPlainHostName("www"); // true
```

### dnsDomainIs()

#### 语法

```plain
dnsDomainIs(host, domain)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。
- domain
  - : 域名/部分域名

#### 描述

如果匹配，返回 true。

#### 例子

```js
dnsDomainIs("www.mozilla.org", ".mozilla.org"); // true
dnsDomainIs("www", ".mozilla.org"); // false
```

### localHostOrDomainIs()

#### 语法

```plain
localHostOrDomainIs(host, hostdom)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。
- hostdom
  - : 完整域名

#### 描述

完整域名匹配或主机名（如`www`）匹配时返回 true。

#### 例子

```js
localHostOrDomainIs("www.mozilla.org", "www.mozilla.org"); // true (exact match)
localHostOrDomainIs("www", "www.mozilla.org"); // true (hostname match, domain not specified)
localHostOrDomainIs("www.google.com", "www.mozilla.org"); // false (domain name mismatch)
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org"); // false (hostname mismatch)
```

### isResolvable()

#### 语法

```plain
isResolvable(host)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。

尝试解析主机名。如果成功，则返回 true。

#### 例子：

```js
isResolvable("www.mozilla.org"); // true
```

### isInNet()

#### 语法

```plain
isInNet(host, pattern, mask)
```

#### 参数

- host
  - : 一个 DNS 主机名，或者一个 IP 地址。如果传入了主机名，则会被此函数解析为 IP 地址，再进行判断。
- pattern
  - : 点号（.）分隔的 IP 地址。
- mask
  - : 子网掩码，0 代表忽略，255 代表完全匹配。

仅在 host 属于由 pattern 和 mask 指定的 ip 地址段时返回 true。

Pattern and mask specification is done the same way as for SOCKS configuration.

#### 例子：

```js
function alert_eval(str) {
  alert(str + " is " + eval(str));
}
function FindProxyForURL(url, host) {
  alert_eval('isInNet(host, "63.245.213.24", "255.255.255.255")');
  // "PAC-alert: isInNet(host, "63.245.213.24", "255.255.255.255") is true"
}
```

### dnsResolve()

```plain
dnsResolve(host)
```

#### 参数

- host
  - : 要解析的主机名。

将给定的 DNS 主机名解析为 IP 地址并返回为标准格式的 IP 地址字符串。

#### 例子

```js
dnsResolve("www.mozilla.org"); // returns the string "104.16.41.2"
```

### convert_addr()

#### 语法

```plain
convert_addr(ipaddr)
```

#### 参数

- ipaddr
  - : 点号（.）分隔的 IP 地址或子网掩码。

将 IP 地址转换为 32 位整数地址。

#### 例子

```js
convert_addr("104.16.41.2"); // returns the decimal number 1745889538
```

### myIpAddress()

#### 语法

```plain
myIpAddress()
```

#### 参数

**（无）**

获取当前 Firefox 所在设备的 IP 地址，并返回为标准格式的 IP 地址字符串。

> **警告：** myIpAddress() 返回与 **`nslookup localhost` **命令在 Linux 主机上的执行结果相同的 IP 地址。不会返回公网 IP 地址。

#### 例子

```js
myIpAddress(); //returns the string "127.0.1.1" if you were running Firefox on that localhost
```

### dnsDomainLevels()

#### 语法

```plain
dnsDomainLevels(host)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。

返回主机名中 DNS 域名级别的整数数量（域名中包含点的个数）。

#### 例子：

```js
dnsDomainLevels("www"); // 0
dnsDomainLevels("mozilla.org"); // 1
dnsDomainLevels("www.mozilla.org"); // 2
```

### shExpMatch()

#### 语法

```plain
shExpMatch(str, shexp)
```

#### 参数

- str
  - : 任何要比较的字符串（如 URL 或主机名）。
- shexp
  - : 要用来对比的 Shell 表达式。

如果字符串匹配指定的 Shell 表达式则返回 true。

**注意，本函数接收 shell glob 表达式而非正则表达式。**`*` 和 `?` 始终被支持，`[characters]` 和 `[^characters]` 只在包括 Firefox 在内的某些实现上被支持。这主要是由于 glob 表达式在内部被翻译为正则表达式。如要使用正则表达式语法，请直接使用 RegExp 类。

#### 例子

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // returns false
```

### weekdayRange()

#### 语法

```plain
weekdayRange(wd1, wd2, [gmt])
```

> **备注：** (Before Firefox 49) `wd1` must be less than `wd2` if you want the function to evaluate these parameters as a range. See the warning below.

#### 参数

- wd1 和 wd2

  - : One of the ordered weekday strings:

  ```plain
  "SUN"|"MON"|"TUE"|"WED"|"THU"|"FRI"|"SAT"
  ```

- gmt

  - : 可以指定为字符串 "`GMT`"，或留白不指定。

Only the first parameter is mandatory. Either the second, the third, or both may be left out.

If only one parameter is present, the function returns a value of true on the weekday that the parameter represents. If the string "GMT" is specified as a second parameter, times are taken to be in GMT. Otherwise, they are assumed to be in the local timezone.

If both **wd1** and **wd1** are defined, the condition is true if the current weekday is in between those two _ordered_ weekdays. Bounds are inclusive, _but the bounds are ordered_. 如果指定了 "`GMT`" 参数，则使用 GMT 时区，否则使用浏览器获取到的平台本地时区。

> **警告：** **The order of the days matters**; Before Firefox 49, `weekdayRange("SUN", "SAT")` will always evaluate to true. Now `weekdayRange("WED", "SUN")` will only evaluate true if the current day is Wednesday or Sunday.

#### 例子

```js
weekdayRange("MON", "FRI"); // returns true Monday through Friday (local timezone)
weekdayRange("MON", "FRI", "GMT"); // returns true Monday through Friday (GMT timezone)
weekdayRange("SAT"); // returns true on Saturdays local time
weekdayRange("SAT", "GMT"); // returns true on Saturdays GMT time
weekdayRange("FRI", "MON"); // returns true Friday and Monday only (note, order does matter!)
```

### dateRange()

#### 语法

```plain
dateRange(<day> | <month> | <year>, [gmt])  // ambiguity is resolved by assuming year is greater than 31
dateRange(<day1>, <day2>, [gmt])
dateRange(<month1>, <month2>, [gmt])
dateRange(<year1>, <year2>, [gmt])
dateRange(<day1>, <month1>, <day2>, <month2>, [gmt])
dateRange(<month1>, <year1>, <month2>, <year2>, [gmt])
dateRange(<day1>, <month1>, <year1>, <day2>, <month2>, <year2>, [gmt])
```

> **备注：** (Before Firefox 49) day1 must be less than day2, month1 must be less than month2, and year1 must be less than year2 if you want the function to evaluate these parameters as a range. See the warning below.

#### 参数

- day
  - : Is the ordered day of the month between 1 and 31 (as an integer).

```plain
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- month
  - : Is one of the ordered month strings below.

```plain
"JAN"|"FEB"|"MAR"|"APR"|"MAY"|"JUN"|"JUL"|"AUG"|"SEP"|"OCT"|"NOV"|"DEC"
```

- year
  - : Is the ordered full year integer number. For example, 2016 (**not** 16).
- gmt
  - : 可以指定为字符串 "`GMT`"，代表使用 GMT 时区进行比较；或者留白不指定，代表使用浏览器获取到的平台本地时区。

If only a single value is specified (from each category: day, month, year), the function returns a true value only on days that match that specification. If both values are specified, the result is true between those times, including bounds, _but the bounds are ordered_.

> **警告：** **The order of the days, months, and years matter**; Before Firefox 49, `dateRange("JAN", "DEC")` will always evaluate to `true`. Now `dateRange("DEC", "JAN")` will only evaluate true if the current month is December or January.

#### 例子

```js
dateRange(1); // returns true on the first day of each month, local timezone
dateRange(1, "GMT"); // returns true on the first day of each month, GMT timezone
dateRange(1, 15); // returns true on the first half of each month
dateRange(24, "DEC"); // returns true on 24th of December each year
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
// returns true from beginning of year 1995 until the end of year 1997
```

### timeRange()

#### 语法

```plain
// The full range of expansions is analogous to dateRange.
timeRange(<hour1>, <min1>, <sec1>, <hour2>, <min2>, <sec2>, [gmt])
```

> **备注：** (Before Firefox 49) the category hour1, min1, sec1 must be less than the category hour2, min2, sec2 if you want the function to evaluate these parameters as a range. See the warning below.

#### 参数

- hour
  - : 小时，区间为 0 到 23。（0 是午夜 0 点，1 是上午 1 点，11 是正午 12 点，23 是下午 11 点。）
- min
  - : 分钟，区间为 0 到 59。
- sec
  - : 秒，区间为 0 到 59。
- gmt
  - : 可以指定为字符串 "`GMT`"，代表使用 GMT 时区，或者留白不指定，代表使用浏览器获取到的平台本地时区。

If only a single value is specified (from each category: hour, minute, second), the function returns a true value only at times that match that specification. If both values are specified, the result is true between those times, including bounds, _but the bounds are ordered_.

> **警告：** **The order of the hour, minute, second matter**; Before Firefox 49, `timeRange(0, 23)` will always evaluate to true. Now `timeRange(23, 0)` will only evaluate true if the current hour is 23:00 or midnight.

#### 例子

```js
timerange(12); // returns true from noon to 1pm
timerange(12, 13); // returns true from noon to 1pm
timerange(12, "GMT"); // returns true from noon to 1pm, in GMT timezone
timerange(9, 17); // returns true from 9am to 5pm
timerange(8, 30, 17, 00); // returns true from 8:30am to 5:00pm
timerange(0, 0, 0, 0, 0, 30); // returns true between midnight and 30 seconds past midnight
```

## 例 1

### 对除本地主机以外的所有连接使用代理

> **备注：** 以下所有示例都只针对特定需求并未经测试

所有并非完全限定的主机名，以及在本地域内的主机名，都将直接连接。其他的会通过 w3proxy:8080 连接。如果代理不可用，则自动回退到直连。

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}
```

> **备注：** 这是只有一个代理服务器情况下最简单高效的自动配置脚本。

## 例 2

### 和例 1 一样，但是对防火墙外的本地服务器使用代理

如果有主机（例如生产环境中的 Web 服务器）属于本地域但在防火墙外，仅可通过代理访问，可以通过 `localHostOrDomainIs()` 来为上述主机添加例外：

```js
function FindProxyForURL(url, host) {
  if (
    (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) &&
    !localHostOrDomainIs(host, "www.mozilla.org") &&
    !localHostOrDoaminIs(host, "merchant.mozilla.org")
  ) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}
```

以上示例为 mozilla.org 域外所有主机使用代理，同时添加了例外使 `www.mozilla.org` 和 `merchant.mozilla.org` 也使用代理。

> **备注：** 以上例外的顺序影响效率：localHostOrDomainIs() 只在 URL 位于本地域内时执行，注意位于 || 外和 && 前的括号。

## 例 3

### 如果无法解析域名，则使用代理

这个示例可用于网络中的 DNS 服务器只解析内部主机名的情况，其功能是只对不能成功解析的域名使用代理。

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) return "DIRECT";
  else return "PROXY proxy.mydomain.com:8080";
}
```

以上代码每一次均会进行 DNS 查询，这可以通过添加其他一些规则，只在其他规则不能给出结果时进行 DNS 查询来解决：

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isResolvable(host)
  ) {
    return "DIRECT";
  } else {
    return "PROXY proxy.mydomain.com:8080";
  }
}
```

## 例 4

### 基于网域（Subnet）的选择方案

在此示例中，所有同一子网内的主机均直接连接，其他主机则通过代理连接：

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "198.95.0.0", "255.255.0.0")) return "DIRECT";
  else return "PROXY proxy.mydomain.com:8080";
}
```

同样的，对 DNS 的使用可以通过添加冗余的规则来最小化：

```js
function FindProxyForURL(url, host) {
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".mydomain.com") ||
    isInNet(host, "198.95.0.0", "255.255.0.0")
  ) {
    return "DIRECT";
  } else {
    return "PROXY proxy.mydomain.com:8080";
  }
}
```

## 例 5

### 负载均衡 / 基于 URL 模式（pattern）的路由规划

This example is more sophisticated. There are four (4) proxy servers; one of them is a hot stand-by for all of the other ones, so if any of the remaining three goes down the fourth one will take over. Furthermore, the three remaining proxy servers share the load based on URL patterns, which makes their caching more effective (there is only one copy of any document on the three servers - as opposed to one copy on each of them). The load is distributed like this:

| 代理 | 用途                                         |
| ---- | -------------------------------------------- |
| #1   | .com 域名                                    |
| #2   | .edu 域名                                    |
| #3   | 所有其他域名                                 |
| #4   | 备用（原文：hot stand-by，活跃备用、热备用） |

All local accesses are desired to be direct. All proxy servers run on the port 8080 (they don't need to, you can just change your port but remember to modify your configuations on both side). Note how strings can be concatenated with the **`+`** operator in JavaScript.

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mydomain.com"))
    return "DIRECT";
  else if (shExpMatch(host, "*.com"))
    return (
      "PROXY proxy1.mydomain.com:8080; " + "PROXY proxy4.mydomain.com:8080"
    );
  else if (shExpMatch(host, "*.edu"))
    return (
      "PROXY proxy2.mydomain.com:8080; " + "PROXY proxy4.mydomain.com:8080"
    );
  else
    return (
      "PROXY proxy3.mydomain.com:8080; " + "PROXY proxy4.mydomain.com:8080"
    );
}
```

## 例 6

### 为特定协议设置代理

大多数 JavaScript 标准功能在 `FindProxyForURL()` 中可用。作为例子，我们通过{{jsxref("String.prototype.startsWith()", "startsWith()")}} 为不同的协议设置不同的代理。

```js
function FindProxyForURL(url, host) {

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

}
```

> **备注：** `shExpMatch()` 也可以做到，例如：
>
> ```js
> // ...
> if (shExpMatch(url, "http:*")) {
>   return "PROXY http-proxy.mydomain.com:8080";
> }
> // ...
> ```

> **备注：** 自动配置脚本也可以在服务端动态生成。这在某些情况下比较有用，例如根据客户端地址指定不同的代理服务器。`isInNet()`， `isResolvable()` 和 `dnsResolve()` 应该谨慎使用，这些函数会进行 DNS 查询。其他函数则大都是字符处理函数，不需要 DNS。如果通过代理连接，代理本身也会进行一次 DNS 查询，这产生了额外的 DNS 请求。并且绝大多数情况下，不需要这些函数来实现特定的功能。

## 历史与实现

Proxy auto-config was introduced into Netscape Navigator 2.0 in the late 1990s, at the same time when JavaScript was introduced. Open-sourcing Netscape eventually lead to Firefox itself.

The most "original" implementation of PAC and its JavaScript libraries is, therefore, `nsProxyAutoConfig.js` found in early versions of Firefox. These utilities are found in many other open-source systems including Chromium. Firefox later integrated the file into [`ProxyAutoConfig.cpp`](https://dxr.mozilla.org/mozilla-central/source/netwerk/base/ProxyAutoConfig.cpp) as a string literal.

Microsoft in general made its own implementation. There used to be [some problems with their libraries](https://en.wikipedia.org/wiki/Proxy_auto-config#Old_Microsoft_problems), but most are resolved by now. They have defined [some new "Ex" suffixed functions](https://docs.microsoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format) around the address handling parts to support IPv6. The feature is supported by Chromium, but not yet by Firefox ([bugzilla #558253](https://bugzilla.mozilla.org/show_bug.cgi?id=558253)).
