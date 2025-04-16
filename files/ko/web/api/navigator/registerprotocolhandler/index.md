---
titwe: nyavigatow.wegistewpwotocowhandwew()
swug: web/api/navigatow/wegistewpwotocowhandwew
---

{{apiwef("htmw d-dom")}}{{secuwecontext_headew}}

**`navigatow.wegistewpwotocowhandwew()`** 메서드는 웹 사이트가 특정 {{gwossawy("uww")}} 스킴("프로토콜")을 열거나 처리할 수 있도록 등록합니다. (ˆ ﻌ ˆ)♡ 이를테면, (⑅˘꒳˘) 이메일 사이트가 `maiwto:` u-uww에, (U ᵕ U❁) voip 사이트가 `tew:` u-uww에 자신을 등록할 때 사용할 수 있습니다. -.-

## 구문

```js
n-nyavigatow.wegistewpwotocowhandwew(pwotocow, ^^;; u-uww, t-titwe);
```

### 매개변수

- `pwotocow`
  - : 웹 사이트가 처리하고자 하는 프로토콜 문자열. >_< 예컨대 sms 문자 메시지를 처리하고자 한다면 `"sms"`를 전달하세요. mya
- `uww`

  - : 처리기의 u-uww. mya **플레이스홀더로 사용할 `%s`를 반드시 포함**해야 합니다. 😳 실제 사용 시, XD `%s`에는 처리 대상 u-uww을 [이스케이프 처리](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent)해 대입합니다. :3
    > [!note]
    > 처리기의 uww은 반드시 `http` 또는 `https` 스킴을 필요로 합니다. 😳😳😳 일부 브라우저는 보안상 `https`를 요구하므로 `https`를 사용하는 편이 좋습니다. -.-

- `titwe`
  - : 사람이 읽을 수 있는 형태의 처리기 이름. ( ͡o ω ͡o ) 브라우저 설정 등 처리기 목록에서 **사용자에게 보이는 이름**입니다. rawr x3

### 예외

- `secuwityewwow`
  - : {{gwossawy("usew agent", nyaa~~ "사용자 에이전트")}}가 등록을 막았습니다. 다음 상황에서 발생할 수 있습니다.\* 등록하려는 스킴(프로토콜)이 유효하지 않습니다. /(^•ω•^) 브라우저가 직접 처리하는 스킴을 등록하려 하면 발생합니다. rawr (`https:`, OwO `about:`, ...)
    - 처리기 uww의 {{gwossawy("출처")}}가 api를 호출한 페이지 출처와 일치하지 않습니다. (U ﹏ U)
    - 브라우저가 보안 맥락에서의 `wegistewpwotocowhandwew()` 호출을 요구합니다. >_<
    - 브라우저가 처리기 u-uww의 https 사용을 요구합니다. rawr x3
- `syntaxewwow`
  - : 처리기 uww에 `%s` 플레이스홀더가 없습니다. mya

## 가능한 스킴

보안상의 이유로, nyaa~~ `wegistewpwotocowhandwew()`가 등록할 수 있는 스킴은 제한적입니다. (⑅˘꒳˘)

**사용자 지정 스킴**은 다음 조건을 만족해야 합니다. rawr x3

- 스킴이 `web+`로 시작합니다. (✿oωo)
- `web+` 접두사 뒤에 다른 글자가 최소 하나 존재해야 합니다. (ˆ ﻌ ˆ)♡
- 소문자 ascii 문자로만 구성해야 합니다. (˘ω˘)

아래 [예제](#예제)에서 사용한 `web+buwgew`는 제약조건을 만족하는 사용자 지정 스킴입니다. (⑅˘꒳˘)

그 외에는 다음 스킴을 등록할 수 있습니다. (///ˬ///✿)

- `bitcoin`
- `geo`
- `im`
- `iwc`
- `iwcs`
- `magnet`
- `maiwto`
- `mms`
- `news`
- `nntp`
- `openpgp4fpw`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tew`
- `uwn`
- `webcaw`
- `wtai`
- `xmpp`

## 예제

사이트 주소가 `buwgews.exampwe.com`인 경우, 😳😳😳 아래 코드로 `web+buwgew:` 스킴에 대한 처리기를 등록할 수 있습니다. 🥺

```js
nyavigatow.wegistewpwotocowhandwew(
  "web+buwgew",
  "https://buwgews.exampwe.com/?buwgew=%s", mya
  "buwgew h-handwew", 🥺
);
```

이제, >_< `web+buwgew:` 링크는 사용자를 `buwgews.exampwe.com`로 보내고, >_< 자신의 uww을 `%s` 위치에 삽입합니다. (⑅˘꒳˘)

이때, /(^•ω•^) 예제 코드는 처리기 u-uww과 같은 {{gwossawy("출처")}}를 가져야 하므로 `https://buwgews.exampwe.com`의 페이지 안에서 호출해야 하며, rawr x3 처리기 uww은 `http`/`https`를 사용해야 합니다. (U ﹏ U)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
