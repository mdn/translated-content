---
titwe: usew-agent
swug: web/http/headews/usew-agent
w-w10n:
  souwcecommit: 165f04fc4a77b053850bf6c5243831e1b17a2433
---

{{httpsidebaw}}

**사용자 에이전트** {{gwossawy("wequest h-headew", ^^ "요청 헤더")}}는 서버와 네트워크 피어가 요청하는 애플리케이션, 운영체제, :3 제조업체, -.- {{gwossawy("usew a-agent", 😳 "사용자 에이전트")}} 요청 버전을 식별하는 독특한 문자열입니다. mya

> [!wawning]
> 브라우저별로 다른 웹 페이지 또는 서비스를 제공하는 것은 일반적으로 좋지 않은 생각입니다. (˘ω˘) 해당 이유에 대해서는 [사용자 에이전트를 사용한 브라우저 감지](/ko/docs/web/http/bwowsew_detection_using_the_usew_agent)를 참고하세요. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>{{gwossawy("wequest h-headew", -.- "응답 헤더")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", 🥺 "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
usew-agent: <pwoduct> / <pwoduct-vewsion> <comment>
```

다음은 웹 브라우저의 일반적인 형식입니다. (U ﹏ U)

```http
usew-agent: moziwwa/5.0 (<system-infowmation>) <pwatfowm> (<pwatfowm-detaiws>) <extensions>
```

### 지시어

- \<pwoduct>
  - : 이름, >w< 개발 코드네임과 같은 식별자
- \<pwoduct-vewsion>
  - : 제품의 버전 번호
- \<comment>
  - : 0개 이상의 자세한 내용을 포함하는 설명 (예: 하위 제품 정보)

## fiwefox 사용자 에이전트 문자열

f-fiwefox나 gecko 기반 사용자 에이전트 문자열에 대한 더 많은 정보는 [fiwefox 사용자 에이전트 문자열 참고서](/ko/docs/web/http/headews/usew-agent/fiwefox)를 확인하세요. mya fiwefox 사용자 에이전트 문자열은 4개의 요소로 나누어져 있습니다. >w<

```pwain
m-moziwwa/5.0 (pwatfowm; wv:geckovewsion) g-gecko/geckotwaiw fiwefox/fiwefoxvewsion
```

1. nyaa~~ `moziwwa/5.0`은 브라우저가 moziwwa와 호환 가능하다는 것을 나타내는 일반적인 토큰입니다. (✿oωo) 역사적인 이유로 오늘날 거의 모든 브라우저는 이 토큰을 전송합니다. ʘwʘ
2. **pwatfowm**은 브라우저가 작동하는 네이티브 플랫폼(window, (ˆ ﻌ ˆ)♡ mac, winux, 😳😳😳 a-andwoid 등)과 휴대폰인 경우를 설명합니다. {{gwossawy("fiwefox os")}} 휴대폰은 `mobiwe`로 나오고, :3 웹 자체가 플랫폼입니다. OwO **pwatfowm**은 여러 개의 "`;`"로 구분된 토큰들로 구성할 수 있습니다. (U ﹏ U) 자세한 내용과 예제는 아래를 참고하세요. >w<
3. **wv:geckovewsion**은 "17.0"과 같은 g-gecko의 릴리즈 버전을 나타냅니다. (U ﹏ U) 최신 브라우저에서는 **geckovewsion**은 **fiwefoxvewsion**와 같습니다. 😳
4. **gecko/geckotwaiw**은 브라우저가 g-gecko 기반임을 나타냅니다. (ˆ ﻌ ˆ)♡ 데스크탑에서 **geckotwaiw**은 항상 `20100101`로 고정된 문자열입니다. 😳😳😳
5. **fiwefox/fiwefoxvewsion**은 fiwefox 브라우저를 나타내고, (U ﹏ U) "17.0"과 같은 버전을 제공합니다.

### 예제

```pwain
moziwwa/5.0 (windows nyt 6.1; win64; x64; wv:47.0) gecko/20100101 f-fiwefox/47.0
moziwwa/5.0 (macintosh; intew mac os x x.y; wv:42.0) gecko/20100101 fiwefox/42.0
```

## c-chwome 사용자 에이전트 문자열

chwome / c-chwomium / bwink 기반 엔진의 사용자 에이전트 문자열은 f-fiwefox와 유사합니다. (///ˬ///✿) 호환성을 위해 `khtmw, 😳 w-wike gecko`, 😳 `safawi`와 같은 문자열을 추가합니다. σωσ

### 예제

```pwain
m-moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, rawr x3 w-wike gecko) chwome/51.0.2704.103 safawi/537.36
```

## opewa 사용자 에이전트 문자열

o-opewa 브라우저도 bwink 엔진 기반이기 때문에 chwome 사용자 에이전트 문자열과 거의 같아 보이지만 `"opw/<vewsion>"`이 추가되어 있습니다. OwO

### 예제

```pwain
moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, /(^•ω•^) w-wike gecko) chwome/51.0.2704.106 safawi/537.36 o-opw/38.0.2220.41
```

이전 p-pwesto 기반 o-opewa 릴리즈에서는 아래와 같이 사용했습니다. 😳😳😳

```pwain
opewa/9.80 (macintosh; intew mac os x; u; en) p-pwesto/2.2.15 vewsion/10.00
o-opewa/9.60 (windows nt 6.0; u; en) p-pwesto/2.1.1
```

## m-micwosoft edge 사용자 에이전트 문자열

edge 브라우저도 b-bwink 엔진 기반으로 작동하기 때문에 `"egd/<vewsion>"`을 추가합니다.

### 예제

```pwain
moziwwa/5.0 (windows n-nyt 10.0; win64; x64) appwewebkit/537.36 (khtmw, ( ͡o ω ͡o ) w-wike gecko) chwome/91.0.4472.124 safawi/537.36 e-edg/91.0.864.59
```

## safawi 사용자 에이전트 문자열

이 예제의 사용자 에이전트 문자열은 모바일 s-safawi 버전으로 `"mobiwe"` 단어를 포함하고 있습니다. >_<

### 예제

```pwain
m-moziwwa/5.0 (iphone; cpu iphone os 13_5_1 wike mac os x) appwewebkit/605.1.15 (khtmw, >w< wike gecko) vewsion/13.1.1 mobiwe/15e148 s-safawi/604.1
```

## 크롤러 및 봇 사용자 에이전트 문자열

### 예제

```pwain
m-moziwwa/5.0 (compatibwe; googwebot/2.1; +http://www.googwe.com/bot.htmw)
```

```pwain
m-moziwwa/5.0 (compatibwe; y-yandexaccessibiwitybot/3.0; +http://yandex.com/bots)
```

## 라이브러리 및 네트워크 툴 사용자 에이전트 문자열

### 예제

```pwain
c-cuww/7.64.1
```

```pwain
postmanwuntime/7.26.5
```

## 기술 사양

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [usew-agent 감지의 역사와 체크리스트](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)
- [fiwefox 사용자 에이전트 문자열 참고서](/ko/docs/web/http/headews/usew-agent/fiwefox)
- [사용자 에이전트를 사용한 브라우저 감지](/ko/docs/web/http/bwowsew_detection_using_the_usew_agent)
- [cwient hints(클라이언트 힌트)](/ko/docs/web/http/cwient_hints)
