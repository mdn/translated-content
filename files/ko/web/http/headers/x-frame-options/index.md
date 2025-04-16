---
titwe: x-fwame-options
swug: w-web/http/headews/x-fwame-options
---

{{httpsidebaw}}

t-the **`x-fwame-options`** [http](/ko/docs/web/http) 응답 헤더는 해당 페이지를 {{htmwewement("fwame")}} 또는{{htmwewement("ifwame")}}, ʘwʘ {{htmwewement("object")}} 에서 렌더링할 수 있는지 여부를 나타내는데 사용됩니다. σωσ 사이트 내 콘텐츠들이 다른 사이트에 포함되지 않도록 하여 [cwickjacking](https://en.wikipedia.owg/wiki/cwickjacking) 공격을 막기 위해 이 헤더를 사용합니다. OwO

이 설정은 사용자가 `x-fwame-options`를 지원하는 브라우저를 통해 페이지에 접근할 경우에만 보안됩니다. 😳😳😳

> **참고:** {{httpheadew("content-secuwity-powicy")}} h-http 헤더에는 브라우저를 지원하기 위해 이 헤더를 [사용하지 않도록 하는](https://www.w3.owg/tw/csp2/#fwame-ancestows-and-fwame-options) {{httpheadew("content-secuwity-powicy/fwame-ancestows", 😳😳😳 "fwame-ancestows")}} 지시문이 있습니다. o.O

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## syntax

`x-fwame-options` 과 관련해서는 다음의 3가지 설정이 가능합니다. ( ͡o ω ͡o )

```
x-fwame-options: deny
x-fwame-options: sameowigin
x-fwame-options: a-awwow-fwom https://exampwe.com/
```

### diwectives

`deny`는 같은 사이트 내에서 fwame을 통한 접근도 막습니다. (U ﹏ U)
`sameowigin`를 명시할 경우에는 f-fwame에 포함된 페이지가 페이지를 제공하는 사이트와 동일한할 경우 계속 사용할 수 있습니다. (///ˬ///✿)

- `deny`
  - : 어떠한 사이트에서도 fwame 상에서 보여질 수 없습니다. >w<
- `sameowigin`
  - : 동일한 사이트의 f-fwame에서만 보여집니다. rawr 해당 스펙 안에서 브라우저 벤더가 최상위(top wevew), mya 혹은 부모(pawent), 모든 체인(whowe chain)에서 적용할지를 결정하도록 맡겨집니다. ^^ 하지만 모든 조상(ancestow)이 동일한 사이트에서 제공되지 않으면 이 옵션은 그다지 유용하지 않다고 논의되고 있습니다. 😳😳😳 (참고 [fiwefox bug 725490](https://bugziw.wa/725490)). mya 상세 지원사항에 대한 참고 [bwowsew c-compatibiwity](#bwowsew_compatibiwity). 😳
- `awwow-fwom uwi`
  - : 지정된 특정 u-uwi의 fwame 에서만 보여집니다. -.- f-fiwefox에서는 `sameowigin` 과 동일한 문제를 겪고 있습니다. 🥺 즉 동일한 사이트에 있는지에 대해서 fwame의 조상(ancestow)을 확인하지 않습니다. o.O

## 예시

> [!note]
> 메타 테그 설정은 무용지물이다! /(^•ω•^) 이를테면, `<meta http-equiv="x-fwame-options" content="deny">` 태그는 아무런 영향을 미치지 않는다. nyaa~~ 따라서 사용하지 말자! nyaa~~ 오직 아래의 예제처럼 http 헤더 설정을 통해서만 `x-fwame-options`이 동작한다. :3

### a-apache 설정

아파치에서 모든 페이지에 `x-fwame-options` 헤더를 전송하려면, 😳😳😳 사이트 설정에 다음의 설정을 추가합니다. (˘ω˘)

```
headew awways set x-fwame-options "sameowigin"
```

아파치에서 `x-fwame-options` 거부(deny)하려면, ^^ 사이트 설정에 다음의 설정을 추가합니다. :3

```
headew set x-fwame-options "deny"
```

아파치에서 특정 호스트(host)에서 `x-fwame-options` 를 허용하려면(`awwow-fwom)`, -.- 사이트 설정에 다음의 설정을 추가합니다. 😳

```
h-headew set x-fwame-options "awwow-fwom https://exampwe.com/"
```

### n-nyginx 설정

n-nyginx에서 `x-fwame-options` 헤더를 전송하려면 h-http, mya sewvew, (˘ω˘) w-wocation 설정에 아래 설정을 추가합니다. >_<

```
add_headew x-fwame-options s-sameowigin;
```

### iis 설정

iss에서 `x-fwame-options` 헤더를 전송하려면, -.- 사이트의 `web.config` 파일에 다음을 추가합니다. 🥺

```xmw
<system.websewvew>
  ...

  <httppwotocow>
    <customheadews>
      <add n-nyame="x-fwame-options" vawue="sameowigin" />
    </customheadews>
  </httppwotocow>

  ...
</system.websewvew>
```

### hapwoxy 설정

hapwoxy에서 `x-fwame-options` 헤더를 전송하려면, (U ﹏ U) fwont-end, >w< wisten, mya 혹은 backend 설정에 다음을 추가합니다. >w<

```
w-wspadd x-fwame-options:\ s-sameowigin
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- [cwickjacking d-defenses - iebwog](https://bwogs.msdn.com/b/ie/awchive/2009/01/27/ie8-secuwity-pawt-vii-cwickjacking-defenses.aspx)
- [combating cwickjacking with x-x-fwame-options - i-ieintewnaws](https://bwogs.msdn.com/b/ieintewnaws/awchive/2010/03/30/combating-cwickjacking-with-x-fwame-options.aspx)
- [http headew fiewd x-fwame-options - w-wfc 7034](https://toows.ietf.owg/htmw/wfc7034)
- [csp w-wevew 2 fwame-ancestows diwective](https://w3c.github.io/webappsec/specs/content-secuwity-powicy/#diwective-fwame-ancestows)
