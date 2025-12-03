---
title: 代理自动配置（PAC）文件
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
l10n:
  sourceCommit: f8ccc0ae0f29d206eea0666fd5081bf41810116d
---

**代理自动配置**（**PAC**）文件是一个用来决定 Web 浏览请求（HTTP、HTTPS 和 FTP）应当直连目标地址，还是被转发给一个 Web 代理服务器的 JavaScript 函数。PAC 文件中的 JavaScript 函数通常是这样定义的：

## 语法

```js
function FindProxyForURL(url, host) {
  // ……
}
```

### 参数

- `url`
  - : 要访问的 URL。`https://` URL 中的路径和查询部分已被去除。在 Chrome 浏览器（版本 52 至 73）中，你可以通过将 `PacHttpsUrlStrippingEnabled` 设置为 `false` 来禁用这种行为，或者以 `--unsafe-pac-url` 命令行参数启动（自 Chrome 74 起，仅命令行参数有效，且在 Chrome 75 及之后的版本中无法禁用这种行为；至于 Chrome 81，路径剥离对 HTTP URL 不适用，但这是有意改变行为以匹配 HTTPS）；在 Firefox 浏览器中，对应的选项是 `network.proxy.autoconfig_url.include_path`。
- `host`
  - : 从 URL 中提取得到的主机名。这只是为了方便；它与 `://` 之后到第一个 `:` 或 `/` 之前的字符串相同。端口号不包括在此参数中，必要时可以自行从 URL 中提取。

## 描述

返回一个描述配置的字符串。字符串的格式按照下方的**返回值格式**进行定义。

### 返回值格式

- JavaScript 函数返回单个字符串
- 如果那个字符串为 null，则不使用任何代理
- 字符串中可以包含如下任意数量的“配置块”（building block），用分号分隔：

<!---->

- `DIRECT`
  - : 直连，不经过任何代理
- `PROXY host:port`
  - : 应使用指定的代理
- `SOCKS host:port`
  - : 应使用指定的 SOCKS 服务器

最近版本的 Firefox 同时还支持：

- `HTTP host:port`
  - : 应使用指定的代理
- `HTTPS host:port`
  - : 应使用指定的 HTTPS 代理
- `SOCKS4 host:port`、`SOCKS5 host:port`
  - : 应使用指定的 SOCKS 服务器（具有指定的 SOCK 版本）

如果有多个使用分号分隔的配置，将使用最左边的配置，除非 Firefox 无法与指定的代理服务器建立连接。在这种情况下，将使用下一个配置，依此类推。

30 分钟后，浏览器将自动重试之前没有响应的代理。下一次尝试则将在一小时后开始，每次尝试后间隔会增加 30 分钟。

如果所有代理都不可用，并且最后没有指定直连（DIRECT）选项，浏览器将询问是否应该暂时忽略代理，并尝试直接连接。20 分钟后，浏览器会再次询问是否应该重试代理，40 分钟后会再问一次。后面会继续询问，并增加 20 分钟的间隔时间。

#### 示例

- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081`
  - : 主代理是 `w3proxy:8080`；如果其不可用，则使用 `mozilla:8081`，直到主代理恢复。
- `PROXY w3proxy.netscape.com:8080; PROXY mozilla.netscape.com:8081; DIRECT`
  - : 和上面的基本一样，但如果两个代理都不可用，则自动改为直连。（在上面的例子中，Netscape 浏览器将询问用户是否要改用直连；在本例中，则不需要用户干预。）
- `PROXY w3proxy.netscape.com:8080; SOCKS socks:1080`
  - : 如果主代理不可用，则使用 SOCKS 连接。

自动配置文件应当被保存为一个以 .pac 作为文件扩展名的文件：`proxy.pac`。

其 MIME 类型应被设置为：`application/x-ns-proxy-autoconfig`。

接下来，你应当配置你的服务器，让文件扩展名 .pac 映射到如上所示的 MIME 类型。

> [!NOTE]
>
> - JavaScript 函数应总是单独保存到文件中，而不是嵌入到 HTML 文件或任何其他文件之中。
> - 本文档末尾的示例都是完整的，使用时不需要增加任何其他语法，直接保存应用即可。（当然，你需要将 JavaScript 中的域名/子域改成自己需要的。）

## 预定义的函数与环境

这些函数可以在 PAC 文件中使用：

- 基于主机名的条件
  - [`isPlainHostName()`](#isplainhostname)
  - [`dnsDomainIs()`](#dnsdomainis)
  - [`localHostOrDomainIs()`](#localhostordomainis)
  - [`isResolvable()`](#isresolvable)
  - [`isInNet()`](#isinnet)

- 相关实用函数
  - [`dnsResolve()`](#dnsresolve)
  - [`convert_addr()`](#convert_addr)
  - [`myIpAddress()`](#myipaddress)
  - [`dnsDomainLevels()`](#dnsdomainlevels)

- 基于 URL 或主机名的条件
  - [`shExpMatch()`](#shexpmatch)

- 基于时间的条件
  - [`weekdayRange()`](#weekdayrange)
  - [`dateRange()`](#daterange)
  - [`timeRange()`](#timerange)

- 日志记录实用函数
  - [`alert()`](#alert)

- 已经定义的一个关联数组（对象），因为当时 JavaScript 代码无法自行定义它：
  - `ProxyConfig.bindings` {{Deprecated_Inline}}

> [!NOTE]
> pactester（属于 [pacparser](https://github.com/pacparser/pacparser) 组件）可以用于测试以下语法示例。
>
> - PAC 文件保存为 `proxy.pac`
> - 命令行输入：`pactester -p ~/pacparser-master/tests/proxy.pac -u https://www.mozilla.org`（传入 `host` 参数 `www.mozilla.org`、`url` 参数 `https://www.mozilla.org`）

### isPlainHostName()

#### 语法

```js-nolint
isPlainHostName(host)
```

#### 参数

- host
  - : 从 URL 中得到的主机名（端口除外）。

#### 描述

当且仅当主机名中没有域名时为真（没有句点）。

#### 示例

```js
isPlainHostName("www.mozilla.org"); // false
isPlainHostName("www"); // true
```

### dnsDomainIs()

#### 语法

```js-nolint
dnsDomainIs(host, domain)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。
- domain
  - : 用来测试主机名的域名。

#### 描述

当且仅当主机名与域名匹配时才返回真。

#### 示例

```js-nolint
dnsDomainIs("www.mozilla.org", ".mozilla.org") // true
dnsDomainIs("www", ".mozilla.org") // false
```

### localHostOrDomainIs()

#### 语法

```js-nolint
localHostOrDomainIs(host, hostDom)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。
- hostDom
  - : 要匹配的完全限定主机名。

#### 描述

如果主机名与指定的主机名*完全*匹配，或者主机名中没有域名的部分，但非限定主机名匹配，则为真。

#### 示例

```js-nolint
localHostOrDomainIs("www.mozilla.org", "www.mozilla.org") // true（完全匹配）
localHostOrDomainIs("www", "www.mozilla.org") // true（主机名匹配，但未指定域名）
localHostOrDomainIs("www.google.com", "www.mozilla.org") // false（域名不匹配）
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org") // false（主机名不匹配）
```

### isResolvable()

#### 语法

```js-nolint
isResolvable(host)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。

尝试解析主机名。如果成功，则返回真。

#### 示例

```js-nolint
isResolvable("www.mozilla.org") // true
```

### isInNet()

#### 语法

```js-nolint
isInNet(host, pattern, mask)
```

#### 参数

- host
  - : DNS 主机名，或者 IP 地址。如果传入了主机名，则会被此函数解析为 IP 地址。
- pattern
  - : 句点（.）分隔的 IP 地址。
- mask
  - : IP 地址模式的掩码，告知应与 IP 地址的哪些部分匹配。0 表示忽略，255 表示匹配。

仅在 host 属于由 pattern 和 mask 指定的 IP 地址段时返回真。

模式和掩码规范与 SOCKS 配置相同。

#### 示例

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

#### 参数

- host
  - : 要解析的主机名。

将给定的 DNS 主机名解析为 IP 地址，并以句点分隔格式将其以字符串形式返回。

#### 示例

```js
dnsResolve("www.mozilla.org"); // 返回字符串“104.16.41.2”
```

### convert_addr()

#### 语法

```js-nolint
convert_addr(ipaddr)
```

#### 参数

- ipaddr
  - : 句点（.）分隔的 IP 地址或子网掩码。

将四个以句点分隔的字节连接成一个 4 字节的字节序列，并将其转换为十进制数值。

#### 示例

```js
convert_addr("192.0.2.172"); // 返回十进制数字 1745889538
```

### myIpAddress()

#### 语法

```js-nolint
myIpAddress()
```

#### 参数

无。

### 返回值

返回 Firefox 所在机器的服务器 IP 地址，以句点分隔的整数格式的字符串形式返回。为了更有帮助，它会尝试多种方法，最后才回退到回环地址（如 `127.0.0.1`）。

#### 示例

```js-nolint
myIpAddress()
```

### dnsDomainLevels()

#### 语法

```js-nolint
dnsDomainLevels(host)
```

#### 参数

- host
  - : 从 URL 中得到的主机名。

返回主机名中 DNS 域名级别（包含的句点个数）的整数数字。

#### 示例

```js-nolint
dnsDomainLevels("www") // 0
dnsDomainLevels("mozilla.org") // 1
dnsDomainLevels("www.mozilla.org"); // 2
```

### shExpMatch()

#### 语法

```js-nolint
shExpMatch(str, shExp)
```

#### 参数

- str
  - : 任何要比较的字符串（如 URL 或主机名）。
- shexp
  - : 要用来比对的 shell 表达式。

如果字符串匹配指定的 shell glob 表达式则返回 `true`。

不同浏览器对特定 glob 表达式语法的支持有所不同：`*`（匹配任意数量的字符）和 `?`（匹配单个字符）始终被支持，而 `[characters]` 和 `[^characters]` 只在包括 Firefox 在内的某些实现上被支持。

> [!NOTE]
> 如果客户端支持，JavaScript 正则表达式通常会提供一种更强大、更一致的方式来对 URL（和其他字符串）进行模式匹配。

#### 示例

```js
shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // 返回 true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // 返回 false
```

### weekdayRange()

#### 语法

```js-nolint
weekdayRange(wd1, wd2)
weekdayRange(wd1, wd2, gmt)
```

> [!NOTE]
> （Firefox 49 之前版本）如果希望函数将这些参数作为范围进行计算，则 wd1 必须小于 wd2。请参阅下面的警告。

#### 参数

- wd1 和 wd2
  - : 有序的星期字符串之一：`"SUN"`、`"MON"`、`"TUE"`、`"WED"`、`"THU"`、`"FRI"`、`"SAT"`
- gmt
  - : 可以指定为字符串“GMT”或省略。

只有第一个参数是必需的。第二个、第三个参数或这两者一起都可以省略。

如果只有一个参数，该函数将在参数所代表的星期返回真。如果将字符串“GMT”指定为第二个参数，则时间将采用 GMT 时间。否则，将假定时间采用本地时区。

如果同时定义了 **wd1** 和 **wd2**，则在当前星期位于这两个*有序*星期之间时，条件为真。包含边界，_但边界是有序的_。如果指定了 `"GMT"` 参数，则时间将采用 GMT 时间。否则，将使用本地时区。

> [!WARNING]
> 在 Firefox 49 之前，`weekdayRange("SUN", "SAT")` 的计算结果始终为 `true`。现在，`weekdayRange("WED", "SUN")` 仅在当前日期为星期三或星期日时才计算结果为 `true`。

#### 示例

```js-nolint
weekdayRange("MON", "FRI") // 在星期一到星期五之间返回 true（本地时区）
weekdayRange("MON", "FRI", "GMT") // 在星期一到星期五之间返回 true（GMT 时区）
weekdayRange("SAT") // 在星期六返回 true（本地时区）
weekdayRange("SAT", "GMT") // 在星期六返回 true（GMT 时区）
weekdayRange("FRI", "MON") // 仅在星期五和星期一返回 true（注意，顺序很重要！）
```

### dateRange()

#### 语法

```js-nolint
dateRange(dayOrMonthOrYear)
dateRange(dayOrMonthOrYear, gmt)  // 通过假设年份大于 31 来消除歧义
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
> （Firefox 49 之前）如果你希望函数将这些参数作为范围进行计算，则 day1 必须小于 day2，month1 必须小于 month2，year1 必须小于 year2。请参阅下方的警告。

#### 参数

- day
  - : 月份中有序的日期，介于 1 到 31 之间（整数）。
- month
  - : 有序的月份字符串之一：`"JAN"`、`"FEB"`、`"MAR"`、`"APR"`、`"MAY"`、`"JUN"`、`"JUL"`、`"AUG"`、`"SEP"`、`"OCT"`、`"NOV"`、`"DEC"`。
- year
  - : 有序的完整年份整数。例如，2016（**不是** 16）。
- gmt
  - : 可以指定为字符串“GMT”，代表使用 GMT 时区进行比较；或者不指定，代表使用本地时区获取时间。

如果仅指定一个值（分别来自日、月、年类别），则该函数仅在与该规范匹配的日期返回真值。如果指定了两个值，则结果在这些时间之间为真，包括边界，_但边界需要有序的_。

> [!WARNING]
> **日期、月份和年份的顺序很重要**；在 Firefox 49 之前，`dateRange("JAN", "DEC")` 的计算结果始终为 `true`。现在，只有在当前月份为 12 月或 1 月时，`dateRange("DEC", "JAN")` 才会计算为真。

#### 示例

```js-nolint
dateRange(1) // 每月第一天返回 true（本地时区）
dateRange(1, "GMT") // 每月第一天返回 true（GMT 时区）
dateRange(1, 15) // 每月的上半月返回 true
dateRange(24, "DEC"); // 每年 12 月 24 日返回 true
dateRange("JAN", "MAR"); // 在一年的第一季度返回 true

dateRange(1, "JUN", 15, "AUG");
// 每年 6 月 1 日至 8 月 15 日（包括 6 月 1 日和 8 月 15 日）返回 true

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// 从 1995 年 6 月 1 日至同年 8 月 15 日返回 true

dateRange("OCT", 1995, "MAR", 1996);
// 从 1995 年 10 月到 1996 年 3 月（包括 1995 年 10 月和 1996 年 3 月整个月份）返回 true

dateRange(1995);
// 在 1995 年全年都返回 true

dateRange(1995, 1997);
// 从 1995 年初到 1997 年底返回 true
```

### timeRange()

#### 语法

```js-nolint
// 整个扩展范围类似于 dateRange。
timeRange(hour1, min1, sec1, hour2, min2, sec2)
timeRange(hour1, min1, sec1, hour2, min2, sec2, gmt)
```

> [!NOTE]
> （Firefox 49 之前版本）如果你希望函数将这些参数作为范围进行计算，则范围“hour1、min1、sec1”必须小于范围“hour2、min2、sec2”。请参阅下方警告。

#### 参数

- hour
  - : 从 0 到 23 的小时数。（0 是午夜 0 点，23 是下午 11 点。）
- min
  - : 从 0 到 59 的分钟数。
- sec
  - : 从 0 到 59 的秒数。
- gmt
  - : 可以指定为字符串“GMT”，代表使用 GMT 时区，或者不指定，代表使用本地时区。

如果仅指定一个值（分别来自日、月、年类别），则该函数仅在与该规范匹配的时间返回真值。如果指定了两个值，则结果在这些时间之间为真，包括边界，_但边界需要有序的_。

> [!WARNING]
> **日期、月份和年份的顺序很重要**；在 Firefox 49 之前，`timeRange(0, 23)` 的计算结果始终为 `true`。现在，只有在当前小时为 23:00 或午夜时分，`timeRange(23, 0)` 才会计算为真。

#### 示例

```js
timeRange(12); // 从中午到下午 1 点返回 true
timeRange(12, 13); // 从中午到下午 1 点返回 true
timeRange(12, "GMT"); // 从中午到下午 1 点返回 true（GMT 时区）
timeRange(9, 17); // 从早上 9 点到下午 5 点返回 true
timeRange(8, 30, 17, 0); // 从早上 8:30 到下午 5:00 返回 true
timeRange(0, 0, 0, 0, 0, 30); // 从午夜到午夜 30 秒返回 true
```

### alert()

#### 语法

```js-nolint
alert(message)
```

#### 参数

- message
  - : 要记录的字符串

在浏览器控制台中记录消息。

#### 示例

```js-nolint
alert(`${host} = ${dnsResolve(host)}`) // 记录主机名及其 IP 地址
alert("错误：不应该到达当前条目。") // 记录消息
```

## 示例 1

### 对除本地主机以外的所有连接使用代理

> [!NOTE]
> 以下所有示例都只针对特定需求，并未经过测试。

所有并非完全限定的主机名，以及在本地域内的主机名，都将直接连接。其他所有的都会通过 `w3proxy.mozilla.org:8080` 进行连接。如果代理不可用，则自动回退到直连。

```js
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  }
  return "PROXY w3proxy.mozilla.org:8080; DIRECT";
}
```

> [!NOTE]
> 这是只有一个代理服务器情况下最简单高效的自动配置脚本。

## 示例 2

### 和示例 1 一样，但是对防火墙外的本地服务器使用代理

如果有主机（例如主 Web 服务器）属于本地域但在防火墙外，仅可通过代理访问，可以通过 `localHostOrDomainIs()` 来为上述主机添加例外：

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

以上示例为 mozilla.org 域外所有主机使用代理，同时添加了例外使 `www.mozilla.org` 和 `merchant.mozilla.org` 也使用代理。

> [!NOTE]
> 以上例外的顺序影响效率：`localHostOrDomainIs()` 只在 URL 位于本地域内时执行，而不是对所有 URL 执行。注意位于*或*表达式外和*与*表达式前的括号，以实现上述高效行为。

## 示例 3

### 如果无法解析主机，则使用代理

这个示例可用于网络中的 DNS 服务器只解析内部主机名的情况，其功能是只对不能成功解析的主机使用代理。

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
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
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## 示例 4

### 基于子网的选择方案

在此示例中，所有同一子网内的主机均直接连接，其他主机则通过代理连接：

```js
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.0.2.172", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

同样地，可以通过在开头添加冗余规则来最大限度地减少前述 DNS 服务器的使用：

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

## 示例 5

### 负载均衡 / 基于 URL 模式的路由规划

这个示例更加复杂。共有四台代理服务器；其中一台是其他所有代理服务器的热备服务器，因此，如果其余三台服务器中的任何一台出现故障，第四台服务器将进行接管。此外，剩下的三台代理服务器根据 URL 模式分担负载，这使得它们的缓存更加高效（任何文档在三台服务器上都只有一个副本，而不是每台服务器上各有一个副本）。负载分布如下：

| 代理 | 用途         |
| ---- | ------------ |
| #1   | .com 域名    |
| #2   | .edu 域名    |
| #3   | 所有其他域名 |
| #4   | 热备用       |

所有本地访问都应为直连。所有代理服务器均在 8080 端口上运行（不是必须的，你可以更改端口，但请记住修改两端的配置）。请注意 JavaScript 中如何使用 **`+`** 运算符连接字符串。

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

## 示例 6

### 为特定协议设置代理

大多数 JavaScript 标准功能在 `FindProxyForURL()` 中可用。例如，要根据协议设置不同的代理，可以使用 {{jsxref("String.prototype.startsWith()", "startsWith()")}} 函数。

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
> 使用前面描述的 [`shExpMatch()`](#shexpmatch) 函数可以实现相同的效果。

例如：

```js
if (shExpMatch(url, "http:*")) {
  return "PROXY http-proxy.mydomain.com:8080";
}
```

> [!NOTE]
> 自动配置文件也可以由 CGI 脚本生成。例如，当需要根据客户端 IP 地址（CGI 中的 `REMOTE_ADDR` 环境变量）使自动配置文件执行不同操作时，此功能非常有用。
>
> `isInNet()`、`isResolvable()` 和 `dnsResolve()` 应该谨慎使用，这些函数需要查询 DNS 服务器。所有其他与自动配置相关的函数都只是字符串匹配函数，不需要使用 DNS 服务器。如果通过代理连接，代理本身也会进行一次 DNS 查询，这会使 DNS 服务器的负载加倍。并且绝大多数情况下，这些函数对于实现预期结果并非必需。

## 历史与实现

代理自动配置功能于 20 世纪 90 年代末引入 Netscape Navigator 2.0，与 JavaScript 同期推出。Netscape 的开源最终促成了 Firefox 的诞生。

因此，PAC 及其 JavaScript 库最“原始”的实现是 Firefox 早期版本中的 `nsProxyAutoConfig.js`。这些实用程序在许多开源系统中都有发现，包括 [Chromium](https://source.chromium.org/chromium/chromium/src/+/main:services/proxy_resolver/pac_js_library.h)。Firefox 后来将该文件以 C++ 字符串字面量的形式集成到 [`ProxyAutoConfig.cpp`](https://searchfox.org/firefox-main/source/netwerk/base/ProxyAutoConfig.cpp) 中。要将其提取到自己的文件中，只需将该块复制到带有 `console.log` 指令的 JavaScript 中进行打印即可。

微软通常有自己的实现。[他们的库曾经存在一些问题](https://zh.wikipedia.org/wiki/代理自动配置#DnsResolve)，但现在大多数问题都已解决。他们围绕地址处理部分定义了[一些新的以“Ex”为后缀的函数](https://learn.microsoft.com/zh-cn/windows/win32/winhttp/ipv6-extensions-to-navigator-auto-config-file-format)，以支持 IPv6。Chromium 已支持该特性，但 Firefox 尚未支持（[bugzilla #558253](https://bugzil.la/558253)）。

## 参见

- {{glossary("Proxy server", "代理服务器")}}
- [MIME 类型（IANA 媒体类型）](/zh-CN/docs/Web/HTTP/Guides/MIME_types)
- [Web 浏览器中的自动代理 HTTP 服务器配置](https://jdebp.uk/FGA/web-browser-auto-proxy-configuration.html)
