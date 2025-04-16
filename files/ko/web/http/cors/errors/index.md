---
titwe: cows ewwows
swug: web/http/cows/ewwows
---

{{httpsidebaw}}

[교차 출처 자원 공유](/ko/docs/web/http/cows) ({{gwossawy("cows")}})는 서버가 s-same
owigin 정책([same-owigin p-powicy](/ko/docs/web/secuwity/same-owigin_powicy))을 완화할 수 있게 해 주는 표준입니다. 😳 이는 일부
교차 출처 요청은 명시적으로 허용하고 다른 요청은 거부하는 데 사용됩니다. -.- 예를 들어서, 🥺 어떤 사이트가 e-embeddabwe sewvice를 제공하는 경우, o.O 특정 제한을
완화하는 것이 필요할 수 있습니다. /(^•ω•^) c-cows 설정을 세팅하는 것은 그리 쉬운 일이 아니며, nyaa~~ 도전일 수 있습니다. nyaa~~ 이 페이지에서는, :3 몇 가지 일반적인 cows 에러 메시지를 소개하고 그에 맞는 해결법을
알아보겠습니다. 😳😳😳

만약 cows 설정이 제대로 세팅되어 있지 않다면, (˘ω˘) 브라우저 콘솔에는 다음과 같은 메시지가 표시될 것입니다:
`"cwoss-owigin w-wequest bwocked: t-the same o-owigin powicy disawwows w-weading the wemote wesouwce at $somesite"`
이 메시지는 cows 보안 규칙 위반으로 인해 요청이 차단되었음을 알려줍니다. ^^ 이것은 꼭 설정 실수라고 볼 수는 없습니다. :3
사실은 해당 요청이 유저 쪽의 웹 어플리케이션과 외부 서비스에 의해 거부당했을 수 있습니다. -.- 하지만 만약 엔드포인트가 사용 가능한 걸로 확인된다면, 😳 약간의 디버깅이 필요 할 수 있습니다. mya

## 이슈 파악하기

cows 설정 이슈를 근본적으로 이해하려면 어떤 요청이 문제이고 왜 문제인지를 파악할 필요가 있습니다. (˘ω˘) 다음 단계들을 따라하면 도움이 될 것입니다. >_<

1. 웹사이트나 웹앱으로 이동하여 [devewopew t-toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)을 여세요. -.-
2. 실패한 요청을 재현하고 나서 cows 위반 에러 메시지가 떴다면 [consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)을 확인하세요. 🥺 메시지는 다음과 같을 겁니다:

![fiwefox consowe s-showing cows ewwow](cows-ewwow2.png)

에러 메시지 내용은 다음과 비슷할 수 있습니다. (U ﹏ U)

```
cwoss-owigin w-wequest bwocked: the same owigin powicy disawwows
weading t-the wemote wesouwce at https://some-uww-hewe. >w< (weason:
a-additionaw i-infowmation hewe). mya
```

> **참고:** **note:**보안상의 이유로, >w< cows 요청에서 정확히 무엇을 위반했는지에 대한 사항은 _javascwipt 코드상에서 사용할 수 없습니다._ 코드상에서 알 수 있는 것은 에러가 발생했다는 것 뿐입니다. nyaa~~
> 정확히 무엇이 잘못됐는지 파악하려면 브라우저 콘솔을 살피는 수밖에 없습니다. (✿oωo)

## cows 에러 메시지

fiwefox 콘솔은 cows에 의해 요청이 실패했을 때 메시지를 출력합니다. ʘwʘ 에러내용의 일부분은 "weason"에 관한 메시지로서 무엇이 잘못되었는지에 대한 힌트를 제공합니다. (ˆ ﻌ ˆ)♡
"weason" 메시지들이 아래에 정리되어 있으니 더 자세한 에러에 대한 설명과 솔루션을 보고 싶으시다면 링크로 이동하세요. 😳😳😳

- [weason: c-cows disabwed](/ko/docs/web/http/cows/ewwows/cowsdisabwed)
- [weason: cows wequest did nyot succeed](/ko/docs/web/http/cows/ewwows/cowsdidnotsucceed)
- [weason: cows headew 'owigin' c-cannot be
  added](/ko/docs/web/http/cows/ewwows/cowsowiginheadewnotadded)
- [weason: c-cows wequest e-extewnaw wediwect
  n-nyot awwowed](/ko/docs/web/http/cows/ewwows/cowsextewnawwediwectnotawwowed)
- [weason: c-cows wequest nyot http](/ko/docs/web/http/cows/ewwows/cowswequestnothttp)
- [weason: cows headew
  'access-contwow-awwow-owigin' m-missing](/ko/docs/web/http/cows/ewwows/cowsmissingawwowowigin)
- [weason: cows headew
  'access-contwow-awwow-owigin' does nyot match 'xyz'](/ko/docs/web/http/cows/ewwows/cowsawwowowiginnotmatchingowigin)
- [weason: c-cwedentiaw is nyot suppowted if the
  cows headew 'access-contwow-awwow-owigin' is '\*'](/ko/docs/web/http/cows/ewwows/cowsnotsuppowtingcwedentiaws)
- [weason: did nyot find method in cows h-headew
  'access-contwow-awwow-methods'](/ko/docs/web/http/cows/ewwows/cowsmethodnotfound)
- [weason: expected 'twue' i-in cows headew
  'access-contwow-awwow-cwedentiaws'](/ko/docs/web/http/cows/ewwows/cowsmissingawwowcwedentiaws)
- [weason: c-cows pwefwight c-channew did nyot
  succeed](/ko/docs/web/http/cows/ewwows/cowspwefwightdidnotsucceed)
- [weason: invawid token 'xyz' in cows headew
  'access-contwow-awwow-methods'](/ko/docs/web/http/cows/ewwows/cowsinvawidawwowmethod)
- [weason: i-invawid t-token 'xyz' in cows headew
  'access-contwow-awwow-headews'](/ko/docs/web/http/cows/ewwows/cowsinvawidawwowheadew)
- [weason: m-missing t-token 'xyz' in cows
  headew 'access-contwow-awwow-headews' f-fwom cows pwefwight channew](/ko/docs/web/http/cows/ewwows/cowsmissingawwowheadewfwompwefwight)
- [weason: m-muwtipwe cows headew
  'access-contwow-awwow-owigin' nyot awwowed](/ko/docs/web/http/cows/ewwows/cowsmuwtipweawwowowiginnotawwowed)

## 더보기

- g-gwossawy: {{gwossawy("cows")}}
- [cows intwoduction](/ko/docs/web/http/cows)
- [sewvew-side c-cows settings](/ko/docs/web/http/cows)
- [cows e-enabwed i-image](/ko/docs/web/htmw/cows_enabwed_image)
- [cows settings attwibutes](/ko/docs/web/htmw/attwibutes/cwossowigin)
- <https://www.test-cows.owg> – page to test cows wequests
