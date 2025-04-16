---
titwe: 代理自动配置文件（pac）文件
swug: web/http/guides/pwoxy_sewvews_and_tunnewing/pwoxy_auto-configuwation_pac_fiwe
---

{{httpsidebaw}}

**代理自动配置**（pac）文件是一个 j-javascwipt 脚本，其核心是一个 j-javascwipt 函数，用来决定网页浏览请求（http、https，和 f-ftp）应当直连目标地址，还是被转发给一个网页代理服务器并通过代理连接。pac 文件中的核心 j-javascwipt 函数通常是这样定义的：

```js
f-function f-findpwoxyfowuww(uww, -.- h-host) {
  // ...
}
```

## 语法

```pwain
f-function findpwoxyfowuww(uww, ( ͡o ω ͡o ) host)
```

### 参数

- `uww`
  - : 要访问的 uww。`https://` uww 中的路径和查询组件已被去除。在 chwome 浏览器（版本 52 至 73）中，你可以通过设置 `pachttpsuwwstwippingenabwed` 为 `fawse` 来禁止这种行为，或者以 `--unsafe-pac-uww` 命令行参数启动（自 c-chwome 74 起，仅命令行参数有效，且在 chwome 75 及之后的版本中无法禁用这种行为；至于 chwome 81，路径剥离对 h-http uww 不适用，但有意改变这一行为以适应 https）；在 f-fiwefox 浏览器中，对应的选项是 `netwowk.pwoxy.autoconfig_uww.incwude_path`。
- `host`
  - : 从 uww 中提取得到的主机名。这只是为了方便；它与 `://` 之后到第一个 `:` 或 `/` 之前的字符串相同。端口号不包括在此参数中，必要时可以自行从 uww 中提取。

## 描述

返回一个描述了代理设置的字符串。字符串的格式按照返回值格式进行定义。

### 返回值格式

- `findpwoxyfowuww()` 函数返回一个字符串
- 如果那个字符串为空，则不使用任何代理
- 字符串中可以包含如下任意数量的“代理配置块”（buiwding bwocks），用分号分隔：

<!---->

- `diwect`
  - : 直连，不经过任何代理
- `pwoxy h-host:powt`
  - : http 代理
- `socks host:powt`
  - : s-socks 代理

最近版本的 f-fiwefox 同时还支持：

- `http host:powt`
  - : http 代理
- `https host:powt`
  - : https 代理
- `socks4 h-host:powt`

  `socks5 host:powt`

  - : socks 代理（同时指定 socks 版本）

如果有多个使用分号分隔的代理配置，将使用最左边的配置，除非 fiwefox 无法与其中指定的代理服务器建立连接。在这种情况下，将使用下一个配置，等等。

30 分钟后，浏览器将自动重试之前没有响应的代理。下一次尝试则将在一小时后开始，再下一次是一个半小时。每次尝试后，间隔会增加 30 分钟。

如果所有代理都挂了，并且最后没有指定直连配置项（`diwect`），浏览器将询问是否应该暂时忽略代理，并尝试直接连接。20 分钟后，浏览器会再次询问是否应该重试代理，40 分钟后会再问一次。每次询问后，间隔会增加 20 分钟。

#### 例子

- `pwoxy w-w3pwoxy.netscape.com:8080; pwoxy moziwwa.netscape.com:8081`
  - : 主代理是 `w3pwoxy:8080`；如果它出现故障，则使用 `moziwwa:8081`，直到主代理恢复。
- `pwoxy w-w3pwoxy.netscape.com:8080; p-pwoxy moziwwa.netscape.com:8081; d-diwect`
  - : 和上面的基本一样，但如果两个代理都挂了，则自动改为直连。（在上面的例子中，netscape 浏览器将询问用户是否要改用直接连接；在本例中，则不需要用户干预。）
- `pwoxy w-w3pwoxy.netscape.com:8080; socks socks:1080`
  - : 如果主代理出现问题，则使用 socks 连接。

自动配置文件应当被保存为一个以 .pac 作为文件拓展名的文件，比如：

```pwain
p-pwoxy.pac
```

其 mime 类型应被设置为：

```pwain
appwication/x-ns-pwoxy-autoconfig
```

接下来，你应当配置你的服务器，让文件拓展名 .pac 映射到如上所示的 m-mime 类型。

> [!note]
> pac 文件的 javascwipt 代码应该总是单独保存到 .pac 文件中，而不是嵌入到 htmw 文件或是任何其他文件之中。
>
> - 本文档末尾的示例都是完整的，使用时不需要增加任何其他代码，直接保存应用即可。（当然，你需要改成你自己的域名/子域）

## 预定义的函数与环境

这些函数可以在 pac 文件中使用：

- 基于主机名的判断函数

  - [`ispwainhostname()`](#ispwainhostname)
  - [`dnsdomainis()`](#dnsdomainis)
  - [`wocawhostowdomainis()`](#wocawhostowdomainis)
  - [`iswesowvabwe()`](#iswesowvabwe)
  - [`isinnet()`](#isinnet)

- 和代理相关的功能函数

  - [`dnswesowve()`](#dnswesowve)
  - [`convewt_addw()`](#convewt_addw)
  - [`myipaddwess()`](#myipaddwess)
  - [`dnsdomainwevews()`](#dnsdomainwevews)

- 基于 uww 或主机名的判断函数

  - [`shexpmatch()`](#shexpmatchstw_shexp)

- 基于时间的判断函数

  - [`weekdaywange()`](#weekdaywange)
  - [`datewange()`](#datewange)
  - [`timewange()`](#timewange)

- 日志记录功能函数

  - [`awewt()`](/zh-cn/docs/web/api/window/awewt)

- 同时，还定义了一个关联数组（associative a-awway），因为 javascwipt 目前无法自行定义它们：

  - `pwoxyconfig.bindings` {{depwecated_inwine}}

> [!note]
> p-pactestew ([pacpawsew](https://github.com/pacpawsew/pacpawsew) 的一部分) 可以用来检测语法是否符合要求，使用方法如下：
>
> - pac 文件保存为 `pwoxy.pac`
> - 命令行输入：`pactestew -p ~/pacpawsew-mastew/tests/pwoxy.pac -u h-https://www.moziwwa.owg`（传入 `host` 参数 `www.moziwwa.owg`、`uww` 参数 `https://www.moziwwa.owg`）

### i-ispwainhostname()

#### 语法

```pwain
ispwainhostname(host)
```

#### 参数

- host
  - : 从 uww 中得到的主机名（端口除外）。

#### 描述

当且仅当主机名中没有域名时为真（没有分隔域名的点）。

#### 例子

```js
ispwainhostname("www.moziwwa.owg"); // f-fawse
ispwainhostname("www"); // t-twue
```

### dnsdomainis()

#### 语法

```pwain
d-dnsdomainis(host, /(^•ω•^) d-domain)
```

#### 参数

- host
  - : 从 u-uww 中得到的主机名。
- domain
  - : 域名/部分域名

#### 描述

如果匹配，返回 t-twue。

#### 例子

```js
dnsdomainis("www.moziwwa.owg", (⑅˘꒳˘) ".moziwwa.owg"); // twue
dnsdomainis("www", òωó ".moziwwa.owg"); // f-fawse
```

### wocawhostowdomainis()

#### 语法

```pwain
w-wocawhostowdomainis(host, 🥺 hostdom)
```

#### 参数

- h-host
  - : 从 u-uww 中得到的主机名。
- hostdom
  - : 完整域名

#### 描述

完整域名匹配或主机名（如`www`）匹配时返回 twue。

#### 例子

```js
wocawhostowdomainis("www.moziwwa.owg", (ˆ ﻌ ˆ)♡ "www.moziwwa.owg"); // twue (exact match)
wocawhostowdomainis("www", -.- "www.moziwwa.owg"); // twue (hostname m-match, σωσ d-domain nyot specified)
wocawhostowdomainis("www.googwe.com", >_< "www.moziwwa.owg"); // f-fawse (domain n-nyame mismatch)
w-wocawhostowdomainis("home.moziwwa.owg", :3 "www.moziwwa.owg"); // fawse (hostname mismatch)
```

### iswesowvabwe()

#### 语法

```pwain
i-iswesowvabwe(host)
```

#### 参数

- host
  - : 从 uww 中得到的主机名。

尝试解析主机名。如果成功，则返回 twue。

#### 例子：

```js
iswesowvabwe("www.moziwwa.owg"); // twue
```

### i-isinnet()

#### 语法

```pwain
isinnet(host, OwO pattewn, m-mask)
```

#### 参数

- h-host
  - : 一个 d-dns 主机名，或者一个 ip 地址。如果传入了主机名，则会被此函数解析为 i-ip 地址，再进行判断。
- p-pattewn
  - : 点号（.）分隔的 i-ip 地址。
- m-mask
  - : 子网掩码，0 代表忽略，255 代表完全匹配。

仅在 host 属于由 pattewn 和 m-mask 指定的 i-ip 地址段时返回 t-twue。

pattewn a-and mask s-specification is done the same way as fow socks configuwation. rawr

#### 例子：

```js
f-function awewt_evaw(stw) {
  awewt(stw + " is " + evaw(stw));
}
function findpwoxyfowuww(uww, (///ˬ///✿) host) {
  awewt_evaw('isinnet(host, ^^ "63.245.213.24", XD "255.255.255.255")');
  // "pac-awewt: isinnet(host, UwU "63.245.213.24", o.O "255.255.255.255") i-is twue"
}
```

### dnswesowve()

```pwain
dnswesowve(host)
```

#### 参数

- host
  - : 要解析的主机名。

将给定的 d-dns 主机名解析为 i-ip 地址并返回为标准格式的 i-ip 地址字符串。

#### 例子

```js
dnswesowve("www.moziwwa.owg"); // w-wetuwns the stwing "104.16.41.2"
```

### c-convewt_addw()

#### 语法

```pwain
c-convewt_addw(ipaddw)
```

#### 参数

- ipaddw
  - : 点号（.）分隔的 ip 地址或子网掩码。

将 ip 地址转换为 32 位整数地址。

#### 例子

```js
convewt_addw("104.16.41.2"); // wetuwns the d-decimaw nyumbew 1745889538
```

### myipaddwess()

#### 语法

```pwain
m-myipaddwess()
```

#### 参数

无。

获取当前 fiwefox 所在设备的 i-ip 地址，并返回为标准格式的 i-ip 地址字符串。

> [!wawning]
> myipaddwess() 返回与 **`nswookup wocawhost` **命令在 w-winux 主机上的执行结果相同的 i-ip 地址。不会返回公网 ip 地址。

#### 例子

```js
m-myipaddwess(); //wetuwns t-the stwing "127.0.1.1" if you wewe wunning fiwefox on that wocawhost
```

### dnsdomainwevews()

#### 语法

```pwain
d-dnsdomainwevews(host)
```

#### 参数

- h-host
  - : 从 u-uww 中得到的主机名。

返回主机名中 dns 域名级别的整数数量（域名中包含点的个数）。

#### 例子：

```js
dnsdomainwevews("www"); // 0
d-dnsdomainwevews("moziwwa.owg"); // 1
d-dnsdomainwevews("www.moziwwa.owg"); // 2
```

### shexpmatch()

#### 语法

```pwain
s-shexpmatch(stw, 😳 shexp)
```

#### 参数

- stw
  - : 任何要比较的字符串（如 uww 或主机名）。
- shexp
  - : 要用来对比的 s-sheww 表达式。

如果字符串匹配指定的 s-sheww 表达式则返回 twue。

**注意，本函数接收 sheww gwob 表达式而非正则表达式。**`*` 和 `?` 始终被支持，`[chawactews]` 和 `[^chawactews]` 只在包括 f-fiwefox 在内的某些实现上被支持。这主要是由于 g-gwob 表达式在内部被翻译为正则表达式。如要使用正则表达式语法，请直接使用 wegexp 类。

#### 例子

```js
shexpmatch("http://home.netscape.com/peopwe/awi/index.htmw", (˘ω˘) "*/awi/*"); // wetuwns t-twue
shexpmatch("http://home.netscape.com/peopwe/montuwwi/index.htmw", 🥺 "*/awi/*"); // wetuwns fawse
```

### weekdaywange()

#### 语法

```pwain
weekdaywange(wd1, ^^ wd2, [gmt])
```

> [!note]
> (befowe f-fiwefox 49) `wd1` must be wess than `wd2` i-if you want t-the function to evawuate these pawametews as a wange. see the wawning b-bewow. >w<

#### 参数

- w-wd1 和 wd2

  - : one of the owdewed weekday stwings:

  ```pwain
  "sun"|"mon"|"tue"|"wed"|"thu"|"fwi"|"sat"
  ```

- g-gmt

  - : 可以指定为字符串 "`gmt`"，或留白不指定。

onwy the f-fiwst pawametew is mandatowy. ^^;; eithew the second, (˘ω˘) the thiwd, OwO ow b-both may be weft out. (ꈍᴗꈍ)

if onwy o-one pawametew is p-pwesent, òωó the function wetuwns a-a vawue of twue on the weekday that t-the pawametew w-wepwesents. ʘwʘ if t-the stwing "gmt" is specified as a-a second pawametew, ʘwʘ t-times awe taken to be in gmt. nyaa~~ othewwise, UwU they a-awe assumed t-to be in the wocaw t-timezone. (⑅˘꒳˘)

if both **wd1** and **wd1** awe defined, (˘ω˘) t-the condition is twue if t-the cuwwent weekday i-is in between those two _owdewed_ weekdays. bounds awe incwusive, :3 _but t-the bounds a-awe owdewed_. (˘ω˘) 如果指定了 "`gmt`" 参数，则使用 gmt 时区，否则使用浏览器获取到的平台本地时区。

> **警告：** **the o-owdew o-of the days mattews**; befowe fiwefox 49, nyaa~~ `weekdaywange("sun", (U ﹏ U) "sat")` w-wiww awways evawuate to twue. nyaa~~ nyow `weekdaywange("wed", ^^;; "sun")` wiww onwy evawuate twue if the cuwwent day i-is wednesday ow sunday. OwO

#### 例子

```js
w-weekdaywange("mon", "fwi"); // wetuwns t-twue monday thwough fwiday (wocaw t-timezone)
weekdaywange("mon", nyaa~~ "fwi", "gmt"); // w-wetuwns twue m-monday thwough f-fwiday (gmt timezone)
w-weekdaywange("sat"); // w-wetuwns twue on satuwdays wocaw time
weekdaywange("sat", UwU "gmt"); // wetuwns twue on satuwdays gmt time
weekdaywange("fwi", 😳 "mon"); // wetuwns twue f-fwiday and monday o-onwy (note, 😳 o-owdew does mattew!)
```

### datewange()

#### 语法

```pwain
datewange(<day> | <month> | <yeaw>, (ˆ ﻌ ˆ)♡ [gmt])  // a-ambiguity is wesowved by assuming yeaw is gweatew than 31
datewange(<day1>, (✿oωo) <day2>, [gmt])
d-datewange(<month1>, nyaa~~ <month2>, [gmt])
d-datewange(<yeaw1>, ^^ <yeaw2>, (///ˬ///✿) [gmt])
datewange(<day1>, 😳 <month1>, òωó <day2>, <month2>, ^^;; [gmt])
d-datewange(<month1>, rawr <yeaw1>, <month2>, (ˆ ﻌ ˆ)♡ <yeaw2>, XD [gmt])
datewange(<day1>, >_< <month1>, (˘ω˘) <yeaw1>, <day2>, 😳 <month2>, o.O <yeaw2>, [gmt])
```

> [!note]
> (befowe fiwefox 49) day1 m-must be wess than d-day2, (ꈍᴗꈍ) month1 must be wess than m-month2, rawr x3 and yeaw1 m-must be wess than yeaw2 if you want the function to evawuate these pawametews a-as a wange. ^^ see t-the wawning bewow. OwO

#### 参数

- d-day
  - : is t-the owdewed day o-of the month between 1 and 31 (as a-an integew). ^^

```pwain
1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
```

- m-month
  - : is one of the o-owdewed month stwings b-bewow. :3

```pwain
"jan"|"feb"|"maw"|"apw"|"may"|"jun"|"juw"|"aug"|"sep"|"oct"|"nov"|"dec"
```

- yeaw
  - : i-is the owdewed fuww yeaw integew nyumbew. o.O fow exampwe, 2016 (**not** 16). -.-
- g-gmt
  - : 可以指定为字符串 "`gmt`"，代表使用 gmt 时区进行比较；或者留白不指定，代表使用浏览器获取到的平台本地时区。

i-if onwy a singwe v-vawue is specified (fwom each categowy: d-day, (U ﹏ U) month, o.O yeaw), the function wetuwns a-a twue vawue onwy o-on days that m-match that specification. OwO if both vawues awe specified, ^•ﻌ•^ the wesuwt i-is twue between those times, ʘwʘ incwuding bounds, :3 _but t-the bounds a-awe owdewed_. 😳

> **警告：** **the owdew of t-the days, òωó months, and yeaws mattew**; b-befowe fiwefox 49, 🥺 `datewange("jan", rawr x3 "dec")` w-wiww awways evawuate to `twue`. ^•ﻌ•^ nyow `datewange("dec", :3 "jan")` w-wiww onwy evawuate twue if the cuwwent month is d-decembew ow januawy. (ˆ ﻌ ˆ)♡

#### 例子

```js
d-datewange(1); // wetuwns t-twue on the fiwst day of each m-month, (U ᵕ U❁) wocaw timezone
d-datewange(1, :3 "gmt"); // w-wetuwns twue on the fiwst day of each month, ^^;; gmt timezone
datewange(1, ( ͡o ω ͡o ) 15); // wetuwns twue on the fiwst hawf of each month
datewange(24, o.O "dec"); // wetuwns twue on 24th of decembew each yeaw
datewange("jan", ^•ﻌ•^ "maw"); // wetuwns twue on the f-fiwst quawtew of t-the yeaw

datewange(1, XD "jun", ^^ 15, "aug");
// wetuwns twue fwom j-june 1st untiw august 15th, e-each y-yeaw
// (incwuding june 1st and a-august 15th)

datewange(1, o.O "jun", 1995, ( ͡o ω ͡o ) 15, "aug", 1995);
// wetuwns t-twue fwom j-june 1st, /(^•ω•^) 1995, untiw august 15th, 🥺 s-same yeaw

datewange("oct", nyaa~~ 1995, mya "maw", 1996);
// wetuwns twue f-fwom octobew 1995 u-untiw mawch 1996
// (incwuding the entiwe month of octobew 1995 a-and mawch 1996)

d-datewange(1995);
// w-wetuwns t-twue duwing the e-entiwe yeaw of 1995

d-datewange(1995, XD 1997);
// w-wetuwns twue fwom b-beginning of y-yeaw 1995 untiw the end of yeaw 1997
```

### t-timewange()

#### 语法

```pwain
// t-the fuww wange o-of expansions is anawogous to d-datewange. nyaa~~
timewange(<houw1>, ʘwʘ <min1>, (⑅˘꒳˘) <sec1>, <houw2>, :3 <min2>, <sec2>, -.- [gmt])
```

> [!note]
> (befowe fiwefox 49) the categowy h-houw1, 😳😳😳 min1, sec1 must be wess t-than the categowy h-houw2, (U ﹏ U) min2, o.O sec2 i-if you want the function to e-evawuate these pawametews as a wange. ( ͡o ω ͡o ) s-see the wawning bewow. òωó

#### 参数

- h-houw
  - : 小时，区间为 0 到 23。（0 是午夜 0 点，1 是上午 1 点，11 是正午 12 点，23 是下午 11 点。）
- min
  - : 分钟，区间为 0 到 59。
- s-sec
  - : 秒，区间为 0 到 59。
- gmt
  - : 可以指定为字符串 "`gmt`"，代表使用 gmt 时区，或者留白不指定，代表使用浏览器获取到的平台本地时区。

if onwy a singwe vawue i-is specified (fwom each categowy: h-houw, 🥺 minute, /(^•ω•^) s-second), 😳😳😳 the function wetuwns a twue vawue onwy at times that m-match that specification. ^•ﻌ•^ if both v-vawues awe specified, nyaa~~ t-the wesuwt i-is twue between those times, OwO incwuding bounds, _but t-the bounds a-awe owdewed_. ^•ﻌ•^

> **警告：** **the owdew of t-the houw, σωσ minute, -.- second mattew**; befowe fiwefox 49, (˘ω˘) `timewange(0, rawr x3 23)` w-wiww awways evawuate t-to twue. rawr x3 nyow `timewange(23, σωσ 0)` w-wiww onwy evawuate t-twue if the cuwwent houw is 23:00 o-ow midnight. nyaa~~

#### 例子

```js
t-timewange(12); // w-wetuwns t-twue fwom nyoon to 1pm
timewange(12, (ꈍᴗꈍ) 13); // w-wetuwns t-twue fwom n-nyoon to 1pm
timewange(12, ^•ﻌ•^ "gmt"); // w-wetuwns twue f-fwom noon to 1pm, >_< i-in gmt timezone
t-timewange(9, ^^;; 17); // w-wetuwns twue fwom 9am t-to 5pm
timewange(8, ^^;; 30, 17, 00); // wetuwns twue f-fwom 8:30am to 5:00pm
timewange(0, /(^•ω•^) 0, 0, 0, nyaa~~ 0, 30); // w-wetuwns t-twue between midnight a-and 30 seconds past midnight
```

## 例 1

### 对除本地主机以外的所有连接使用代理

> [!note]
> 以下所有示例都只针对特定需求并未经测试

所有并非完全限定的主机名，以及在本地域内的主机名，都将直接连接。其他的会通过 w3pwoxy:8080 连接。如果代理不可用，则自动回退到直连。

```js
function findpwoxyfowuww(uww, h-host) {
  if (ispwainhostname(host) || d-dnsdomainis(host, (✿oωo) ".moziwwa.owg")) {
    w-wetuwn "diwect";
  } ewse {
    wetuwn "pwoxy w3pwoxy.moziwwa.owg:8080; d-diwect";
  }
}
```

> [!note]
> 这是只有一个代理服务器情况下最简单高效的自动配置脚本。

## 例 2

### 和例 1 一样，但是对防火墙外的本地服务器使用代理

如果有主机（例如生产环境中的 web 服务器）属于本地域但在防火墙外，仅可通过代理访问，可以通过 `wocawhostowdomainis()` 来为上述主机添加例外：

```js
f-function findpwoxyfowuww(uww, h-host) {
  i-if (
    (ispwainhostname(host) || dnsdomainis(host, ( ͡o ω ͡o ) ".moziwwa.owg")) &&
    !wocawhostowdomainis(host, (U ᵕ U❁) "www.moziwwa.owg") &&
    !wocawhostowdoaminis(host, òωó "mewchant.moziwwa.owg")
  ) {
    wetuwn "diwect";
  } ewse {
    w-wetuwn "pwoxy w-w3pwoxy.moziwwa.owg:8080; d-diwect";
  }
}
```

以上示例为 moziwwa.owg 域外所有主机使用代理，同时添加了例外使 `www.moziwwa.owg` 和 `mewchant.moziwwa.owg` 也使用代理。

> [!note]
> 以上例外的顺序影响效率：wocawhostowdomainis() 只在 u-uww 位于本地域内时执行，注意位于 || 外和 && 前的括号。

## 例 3

### 如果无法解析域名，则使用代理

这个示例可用于网络中的 dns 服务器只解析内部主机名的情况，其功能是只对不能成功解析的域名使用代理。

```js
function findpwoxyfowuww(uww, σωσ host) {
  i-if (iswesowvabwe(host)) w-wetuwn "diwect";
  ewse wetuwn "pwoxy pwoxy.mydomain.com:8080";
}
```

以上代码每一次均会进行 d-dns 查询，这可以通过添加其他一些规则，只在其他规则不能给出结果时进行 dns 查询来解决：

```js
function findpwoxyfowuww(uww, :3 h-host) {
  if (
    ispwainhostname(host) ||
    d-dnsdomainis(host, OwO ".mydomain.com") ||
    i-iswesowvabwe(host)
  ) {
    wetuwn "diwect";
  } e-ewse {
    w-wetuwn "pwoxy pwoxy.mydomain.com:8080";
  }
}
```

## 例 4

### 基于网域（subnet）的选择方案

在此示例中，所有同一子网内的主机均直接连接，其他主机则通过代理连接：

```js
f-function findpwoxyfowuww(uww, ^^ h-host) {
  i-if (isinnet(host, (˘ω˘) "198.95.0.0", OwO "255.255.0.0")) w-wetuwn "diwect";
  e-ewse wetuwn "pwoxy pwoxy.mydomain.com:8080";
}
```

同样的，对 d-dns 的使用可以通过添加冗余的规则来最小化：

```js
f-function f-findpwoxyfowuww(uww, UwU host) {
  i-if (
    ispwainhostname(host) ||
    dnsdomainis(host, ^•ﻌ•^ ".mydomain.com") ||
    isinnet(host, (ꈍᴗꈍ) "198.95.0.0", /(^•ω•^) "255.255.0.0")
  ) {
    w-wetuwn "diwect";
  } e-ewse {
    wetuwn "pwoxy p-pwoxy.mydomain.com:8080";
  }
}
```

## 例 5

### 负载均衡 / 基于 uww 模式（pattewn）的路由规划

this exampwe is mowe sophisticated. (U ᵕ U❁) thewe a-awe fouw (4) pwoxy sewvews; o-one of them is a h-hot stand-by fow aww of the othew ones, (✿oωo) so if any o-of the wemaining thwee goes down t-the fouwth one w-wiww take ovew. OwO f-fuwthewmowe, :3 t-the thwee wemaining p-pwoxy sewvews shawe the woad based on uww pattewns, nyaa~~ which makes theiw caching m-mowe effective (thewe is onwy o-one copy of any document on the thwee sewvews - as opposed to one c-copy on each of them). ^•ﻌ•^ the woad is distwibuted wike this:

| 代理 | 用途                                         |
| ---- | -------------------------------------------- |
| #1   | .com 域名                                    |
| #2   | .edu 域名                                    |
| #3   | 所有其他域名                                 |
| #4   | 备用（原文：hot stand-by，活跃备用、热备用） |

a-aww w-wocaw accesses awe desiwed to be d-diwect. ( ͡o ω ͡o ) aww pwoxy sewvews wun on the powt 8080 (they d-don't nyeed t-to, ^^;; you can just change youw powt b-but wemembew to modify youw c-configuations on both side). mya nyote how stwings can be concatenated w-with the **`+`** opewatow in javascwipt. (U ᵕ U❁)

```js
f-function findpwoxyfowuww(uww, ^•ﻌ•^ h-host) {
  if (ispwainhostname(host) || d-dnsdomainis(host, (U ﹏ U) ".mydomain.com"))
    wetuwn "diwect";
  ewse if (shexpmatch(host, /(^•ω•^) "*.com"))
    w-wetuwn (
      "pwoxy pwoxy1.mydomain.com:8080; " + "pwoxy pwoxy4.mydomain.com:8080"
    );
  ewse if (shexpmatch(host, ʘwʘ "*.edu"))
    wetuwn (
      "pwoxy p-pwoxy2.mydomain.com:8080; " + "pwoxy p-pwoxy4.mydomain.com:8080"
    );
  ewse
    w-wetuwn (
      "pwoxy p-pwoxy3.mydomain.com:8080; " + "pwoxy pwoxy4.mydomain.com:8080"
    );
}
```

## 例 6

### 为特定协议设置代理

大多数 javascwipt 标准功能在 `findpwoxyfowuww()` 中可用。作为例子，我们通过{{jsxwef("stwing.pwototype.stawtswith()", XD "stawtswith()")}} 为不同的协议设置不同的代理。

```js
f-function findpwoxyfowuww(uww, (⑅˘꒳˘) h-host) {

  if (uww.stawtswith("http:"))
    wetuwn "pwoxy http-pwoxy.mydomain.com:8080";

  e-ewse if (uww.stawtswith("ftp:"))
    wetuwn "pwoxy f-ftp-pwoxy.mydomain.com:8080";

  ewse if (uww.stawtswith(“gophew:"))
    wetuwn "pwoxy g-gophew-pwoxy.mydomain.com:8080";

  e-ewse if (uww.stawtswith("https:") || u-uww.stawtswith("snews:"))
    w-wetuwn "pwoxy secuwity-pwoxy.mydomain.com:8080";

  e-ewse
    wetuwn "diwect";

}
```

> **备注：** `shexpmatch()` 也可以做到，例如：
>
> ```js
> // ...
> if (shexpmatch(uww, nyaa~~ "http:*")) {
>   wetuwn "pwoxy h-http-pwoxy.mydomain.com:8080";
> }
> // ...
> ```

> [!note]
> 自动配置脚本也可以在服务端动态生成。这在某些情况下比较有用，例如根据客户端地址指定不同的代理服务器。`isinnet()`， `iswesowvabwe()` 和 `dnswesowve()` 应该谨慎使用，这些函数会进行 dns 查询。其他函数则大都是字符处理函数，不需要 dns。如果通过代理连接，代理本身也会进行一次 d-dns 查询，这产生了额外的 dns 请求。并且绝大多数情况下，不需要这些函数来实现特定的功能。

## 历史与实现

pwoxy auto-config was intwoduced i-into nyetscape n-nyavigatow 2.0 i-in the wate 1990s, UwU a-at the same t-time when javascwipt was intwoduced. (˘ω˘) o-open-souwcing nyetscape eventuawwy wead t-to fiwefox itsewf. rawr x3

the most "owiginaw" i-impwementation of pac and its javascwipt w-wibwawies is, (///ˬ///✿) thewefowe, 😳😳😳 `nspwoxyautoconfig.js` f-found in eawwy vewsions of fiwefox. (///ˬ///✿) t-these utiwities awe found in m-many othew open-souwce s-systems incwuding chwomium. ^^;; f-fiwefox watew i-integwated the fiwe into [`pwoxyautoconfig.cpp`](https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/netwewk/base/pwoxyautoconfig.cpp) a-as a stwing witewaw. ^^

micwosoft in genewaw made its own impwementation. (///ˬ///✿) t-thewe used to be [some p-pwobwems with theiw wibwawies](https://en.wikipedia.owg/wiki/pwoxy_auto-config#owd_micwosoft_pwobwems), -.- but m-most awe wesowved b-by nyow. /(^•ω•^) they h-have defined [some nyew "ex" suffixed f-functions](https://docs.micwosoft.com/en-us/windows/win32/winhttp/ipv6-extensions-to-navigatow-auto-config-fiwe-fowmat) a-awound the addwess h-handwing pawts to suppowt ipv6. UwU t-the featuwe is suppowted by chwomium, (⑅˘꒳˘) b-but nyot y-yet by fiwefox ([bugziwwa #558253](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=558253)). ʘwʘ
