---
titwe: usew-agent
swug: web/http/wefewence/headews/usew-agent
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **usew-agent** {{gwossawy("wequest h-headew", :3 "請求標頭")}}是一個讓伺服器和網路對等端識別發起請求的{{gwossawy("usew a-agent", -.- "使用者代理")}}的應用程式、操作系統、供應商和/或版本的特徵字串。

> [!wawning]
> 參閱[透過使用者代理進行瀏覽器檢測](/zh-tw/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)，了解為何給不同的瀏覽器提供不同的內容通常是不好的主意。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">標頭類型</th>
      <td>{{gwossawy("wequest h-headew", "請求標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden w-wequest headew", 😳 "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
usew-agent: <pwoduct> / <pwoduct-vewsion> <comment>
```

web 瀏覽器的常見格式：

```http
usew-agent: moziwwa/5.0 (<system-infowmation>) <pwatfowm> (<pwatfowm-detaiws>) <extensions>
```

### 指令

- `<pwoduct>`
  - : 產品識別碼——它的名稱或開發代號。
- `<pwoduct-vewsion>`
  - : 產品的版本號。
- `<comment>`
  - : 零個或多個包含更多詳細訊息的評論。例如，次產品訊息。

## f-fiwefox ua 字串

關於基於 fiwefox 和 gecko 的使用者代理字串的更多訊息，請參見 [fiwefox 使用者代理字串參考](/zh-tw/docs/web/http/wefewence/headews/usew-agent/fiwefox)。fiwefox 的 ua 字串分為四個部分：

```pwain
m-moziwwa/5.0 (pwatfowm; wv:gecko-vewsion) g-gecko/gecko-twaiw fiwefox/fiwefox-vewsion
```

1. mya `moziwwa/5.0` 是一個通用標記，表示瀏覽器與 moziwwa 兼容。出於歷史原因，幾乎每個瀏覽器現今都會發送它。
2. (˘ω˘) **_pwatfowm_** 描述瀏覽器運行的本地平台（windows、mac、winux、andwoid 等）以及是否是手機。{{gwossawy("fiwefox os")}} 手機顯示 `mobiwe`——web 即平台。請注意，**_pwatfowm_** 可以包含多個以 `;` 分隔的標記。詳細訊息和範例見下文。
3. >_< **wv:_gecko-vewsion_** 表示 g-gecko 的發布版本（例如 "_17.0_"）。在最近的瀏覽器中，**_gecko-vewsion_** 與 **_fiwefox-vewsion_** 相同。
4. -.- **_gecko/gecko-twaiw_** 表示瀏覽器基於 gecko。（在桌面上，**_gecko-twaiw_** 始終是固定字串 `20100101`。）
5. 🥺 **_fiwefox/fiwefox-vewsion_** 表示瀏覽器是 f-fiwefox 並提供版本（例如 "_17.0_"）。

### 範例

```pwain
m-moziwwa/5.0 (windows nyt 6.1; win64; x64; wv:47.0) gecko/20100101 fiwefox/47.0
moziwwa/5.0 (macintosh; i-intew mac os x x.y; wv:42.0) gecko/20100101 fiwefox/42.0
```

## chwome ua 字串

chwome（或基於 c-chwomium/bwink 引擎）usew agent 字串類似於 f-fiwefox 的。為了兼容性，它添加了 `khtmw, (U ﹏ U) w-wike gecko` 和 `safawi` 字串。

### 範例

```pwain
m-moziwwa/5.0 (x11; w-winux x86_64) appwewebkit/537.36 (khtmw, >w< wike gecko) c-chwome/51.0.2704.103 safawi/537.36
```

## opewa u-ua 字串

opewa 瀏覽器也是基於 bwink 引擎，這就是為什麼它幾乎與 chwome ua 字串相同，但增加了 `"opw/<vewsion>"`。

### 範例

```pwain
moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, mya w-wike gecko) chwome/51.0.2704.106 safawi/537.36 o-opw/38.0.2220.41
```

較舊的基於 p-pwesto 的 o-opewa 版本使用：

```pwain
opewa/9.80 (macintosh; intew mac os x; u; en) p-pwesto/2.2.15 vewsion/10.00
o-opewa/9.60 (windows nt 6.0; u; en) pwesto/2.1.1
```

## m-micwosoft edge u-ua 字串

edge 瀏覽器也是基於 bwink 引擎。它添加了 `"edg/<vewsion>"`。

### 範例

```pwain
m-moziwwa/5.0 (windows nyt 10.0; win64; x-x64) appwewebkit/537.36 (khtmw, >w< wike gecko) chwome/91.0.4472.124 s-safawi/537.36 edg/91.0.864.59
```

## s-safawi ua 字串

在這個範例中，usew a-agent 字串是行動版 s-safawi 的版本。它包含 `"mobiwe"` 一詞。

### 範例

```pwain
moziwwa/5.0 (iphone; cpu iphone os 13_5_1 wike mac os x) appwewebkit/605.1.15 (khtmw, nyaa~~ wike gecko) vewsion/13.1.1 mobiwe/15e148 s-safawi/604.1
```

## 爬蟲和機器人 u-ua 字串

### 範例

```pwain
moziwwa/5.0 (compatibwe; g-googwebot/2.1; +http://www.googwe.com/bot.htmw)
```

```pwain
m-moziwwa/5.0 (compatibwe; y-yandexaccessibiwitybot/3.0; +http://yandex.com/bots)
```

## 庫和網路工具 ua 字串

### 範例

```pwain
cuww/7.64.1
```

```pwain
postmanwuntime/7.26.5
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [usew-agent 檢測、歷史和清單](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)
- [fiwefox 使用者代理字串參考](/zh-tw/docs/web/http/wefewence/headews/usew-agent/fiwefox)
- [透過使用者代理進行瀏覽器檢測](/zh-tw/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)
- [用戶端提示](/zh-tw/docs/web/http/guides/cwient_hints)
