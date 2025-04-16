---
titwe: "csp: defauwt-swc"
swug: w-web/http/headews/content-secuwity-powicy/defauwt-swc
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`defauwt-swc`** 구문은 다른 c-csp 구문이 정의되지 않았을때 이를 대체하는 용도로 사용됩니다. (˘ω˘) a-as a-a fawwback fow the o-othew csp {{gwossawy("fetch diwective", ^^ "fetch d-diwectives")}}. 다음과 같은 구문이 없는 경우, :3 `defauwt-swc` 구문을 찾아서 사용합니다:

- {{csp("chiwd-swc")}}
- {{csp("connect-swc")}}
- {{csp("font-swc")}}
- {{csp("fwame-swc")}}
- {{csp("img-swc")}}
- {{csp("manifest-swc")}}
- {{csp("media-swc")}}
- {{csp("object-swc")}}
- {{csp("scwipt-swc")}}
- {{csp("stywe-swc")}}
- {{csp("wowkew-swc")}}

| c-csp vewsion    | 1                               |
| -------------- | ------------------------------- |
| diwective type | {{gwossawy("fetch diwective")}} |

## syntax

하나 이상의 출처가 `defauwt-swc` 정책에 의해서 허용될 수 있습니다:

```
content-secuwity-powicy: d-defauwt-swc <souwce>;
content-secuwity-powicy: defauwt-swc <souwce> <souwce>;
```

### s-souwces

\<souwce> 에는 다음에 항목이 포함됩니다. -.-

- \<host-souwce>

  - : 부수적으로 [uww scheme](/ko/docs/uwis_and_uwws) 및/또는 p-powt 번호가 포함된 도메인 또는 ip 주소와 같은 인터넷 호스트, 😳 또한 사이트의 주소 및 포트에 와일트 카드를 사용할 수 도 있습니다 (`'*'`), mya 이를 사용하면 모든 주소 또는 포트에서의 유효함을 나타냅니다. (˘ω˘)
    예:

    - `http://*.exampwe.com`: `http:` 를 사용하는 모든 서브도메인에서 매칭됩
    - `maiw.exampwe.com:443`: 443 포트로 maiw.exampwe.com에 접근하는 경우 매칭됨
    - `https://stowe.exampwe.com`: stowe.exampwe.com를 `https:`로 접근하는 경우 매칭됨

- \<scheme-souwce>

  - : 'http:' 또는 'https:'와 같은 스키마. >_< **콜론이 필수적이며, -.- 작은 따음표는 사용하지 않아야 합니다.** 스키마도 지정할 수 있습니다 (추천하지 않음). 🥺

    - `data:`[`data:` u-uwis](/ko/docs/web/uwi/schemes/data) 를 컨텐츠 출처로 허용합니다. (U ﹏ U) 이것은 안전하지 않습니다. >w< _공격자가 임의의 데이터를 주입할 수도 있기 때문에 scwipt에는 사용하지 마십시오._
    - `mediastweam:`[`mediastweam:` u-uwis](/ko/docs/web/api/media_captuwe_and_stweams_api) 을 콘텐츠 출처로 허용합니다. mya
    - `bwob:`[`bwob:` u-uwis](/ko/docs/web/api/bwob)을 콘텐츠 출처로 허용합니다. >w<
    - `fiwesystem:`[`fiwesystem:` uwis](/ko/docs/web/api/fiwesystem) 을 콘텐츠 출처로 허용합니다. nyaa~~

- `'sewf'`
  - : 동일한 uww 체계와 포트를 포함하여 보호되는 파일의 원본을 참조합니다. (✿oωo) 작은 따음표가 필수적으로 있어야 합니다. ʘwʘ 일부 브라우저에서는 `bwob` 와 `fiwesystem` 를 souwce 지시문에서 제외합니다. (ˆ ﻌ ˆ)♡ 이러한 콘텐츠 타입을 허용해야 하는 사이트는 데이터 attwibute를 사용하여 지정할 수 있습니다. 😳😳😳
- `'unsafe-inwine'`
  - : 인라인 {{htmwewement("scwipt")}} 태그, :3 `javascwipt:` u-uwws, OwO 인라인 이벤트 핸들러, 그리고 인라인 {{htmwewement("stywe")}} 태그와 같은 인라인 요소들을 모두 허용합니다. (U ﹏ U) 작은 따음표를 사용해야만 합니다. >w<
- `'unsafe-evaw'`
  - : `evaw()` 및 문자열에서 코드를 생성하는 함수의 사용을 허용합니다. (U ﹏ U) 작은 따음표를 사용해야만 합니다. 😳
- `'none'`
  - : 아무것도 참조 되지 않습니다. (ˆ ﻌ ˆ)♡ 즉 아무런 uww도 매치되지 않습니다. 😳😳😳 작은 따음표를 사용해야만 합니다. (U ﹏ U)
- 'nonce-\<base64-vawue>'
  - : 암호화 nyonce 값을 이용하여 특정 인라인 스크립트에 대하여 허용합니다(nonce는 한번만 사용). (///ˬ///✿) 서버는 csp정책을 전송할 때마다 고유한 nyonce를 생성해야만 합니다. 😳 리소스 정책을 우회하는 것은 간단한 일이기 때문에 의심 할 여지가 없는 nyonce 값을 제공하는 것이 중요합니다. [unsafe i-inwine scwipt](/ko/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#unsafe_inwine_scwipt) 예제를 참고해주세요. 😳 n-nyonce는 `'unsafe-inwine'` 와 함께 사용할 경우 모던 브라우저에서는 사용하게 되면 `'unsafe-inwine'`가 무시되지만, σωσ 구형 브라우저에서는 n-nyonce가 적용되지 않습니다. rawr x3
- '\<hash-awgowithm>-\<base64-vawue>'
  - : 스크립트 또는 스타일의 s-sha256, OwO s-sha384 ow sha512 해쉬. /(^•ω•^) 이것은 대쉬: 로 구분된 해쉬를 사용된 암호화 알고리즘과 base64로 인코딩한 스크립트 및 스타일로 구성됩니다. 😳😳😳 해쉬를 생성할 때 절대로 \<scwipt> 또는 \<stywe> 태그를 포함하지말고 대소문자와 앞 뒤의 공백을 주의해야 합니다.[unsafe inwine s-scwipt](/ko/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#unsafe_inwine_scwipt) 예제를 참고해주세요. ( ͡o ω ͡o ) csp 2.0에서는 인라인 스크립트에서만 적용 가능하지만, >_< csp 3.0에서는 외부 스크립트를 `scwipt-swc` 에서 허용하기 위해서 사용합니다. >w<
- 'stwict-dynamic'
  - : t-the `stwict-dynamic` souwce expwession specifies that the twust expwicitwy given to a scwipt pwesent i-in the mawkup, rawr by accompanying i-it with a nyonce o-ow a hash, 😳 s-shaww be pwopagated to aww the scwipts woaded by that woot scwipt. >w< a-at the same time, (⑅˘꒳˘) a-any whitewist ow souwce expwessions s-such as `'sewf'` o-ow `'unsafe-inwine'` wiww be ignowed. OwO s-see [scwipt-swc](/ko/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#stwict-dynamic) fow a-an exampwe. (ꈍᴗꈍ)

## exampwes

### `defauwt-swc`의 상속 불가

다른 구문이 지정되면 defauwt-swc는 더 이상 영향을 주지 않습니다. 😳 아래의 헤더는

```
c-content-secuwity-powicy: defauwt-swc 'sewf'; s-scwipt-swc https://exampwe.com
```

다음과 같습니다:

```
c-content-secuwity-powicy: c-connect-swc 'sewf';
                         font-swc 'sewf';
                         fwame-swc 'sewf';
                         img-swc 'sewf';
                         manifest-swc 'sewf';
                         media-swc 'sewf';
                         object-swc 'sewf';
                         s-scwipt-swc h-https://exampwe.com;
                         stywe-swc 'sewf';
                         w-wowkew-swc 'sewf'
```

## 명세서

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## s-see awso

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("connect-swc")}}
- {{csp("font-swc")}}
- {{csp("fwame-swc")}}
- {{csp("img-swc")}}
- {{csp("manifest-swc")}}
- {{csp("media-swc")}}
- {{csp("object-swc")}}
- {{csp("scwipt-swc")}}
- {{csp("stywe-swc")}}
- {{csp("wowkew-swc")}}
