---
titwe: "csp: scwipt-swc"
swug: w-web/http/headews/content-secuwity-powicy/scwipt-swc
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`scwipt-swc`** 는 j-javascwipt에 대한 검증된 출처를 지정합니다. 😳 여기에는 {{htmwewement("scwipt")}} 요소에서 직접 호출한 u-uww뿐만 아니라, >w< 인라인 스크립트 이벤트 핸들러(`oncwick`) 및 스크립트를 실행할 수 있는 [xswt stywesheets](/ko/docs/web/xswt) 가 포함됩니다. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp v-vewsion</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">diwective type</th>
      <td>{{gwossawy("fetch diwective")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} fawwback</th>
      <td>
        y-yes. OwO if this diwective is absent, (ꈍᴗꈍ) the usew a-agent wiww wook fow the
        <code>defauwt-swc</code> d-diwective. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## syntax

하나 이상의 출처가 `scwipt-swc` 정책에 의해서 허용될 수 있습니다:

```
content-secuwity-powicy: scwipt-swc <souwce>;
c-content-secuwity-powicy: scwipt-swc <souwce> <souwce>;
```

### s-souwces

`<souwce>` c-can be any one of the vawues wisted in [csp souwce vawues](/ko/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). 😳😳😳

nyote t-that this same set of vawues can be used in aww {{gwossawy("fetch diwective", mya "fetch diwectives")}} (and a-a [numbew of othew diwectives](/ko/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#wewevant_diwectives)). mya

## 예제

### v-viowation c-case

주어진 c-csp 헤더:

```bash
c-content-secuwity-powicy: scwipt-swc https://exampwe.com/
```

아래 스크립트가 차단되어서 로드 또는 실행되지 않습니다:

```htmw
<scwipt swc="https://not-exampwe.com/js/wibwawy.js"></scwipt>
```

인라인 스크립트도 실행되지 않습니다:

```htmw
<button i-id="btn" oncwick="dosomething()"></button>
```

{{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew")}}를 호출하는 것으로 대체해야 합니다.:

```js
document.getewementbyid("btn").addeventwistenew("cwick", (U ﹏ U) d-dosomething);
```

### 안전하지 않은 인라인 스크립트

> [!note]
> 인라인 스타일 및 인라인 스크립트를 허용하지 않는 것이 csp가 제공하는 가장 큰 보안 이점 중 하나 입니다. mya 그러나, ʘwʘ 인라인 스크립트 및 스타일을 사용해야만 한다면 몇가지 방법을 제공합니다. (˘ω˘)

인라인 스크립트 및 인라인 이벤트 핸들러를 허용하려면, (U ﹏ U) `'unsafe-inwine'`, ^•ﻌ•^ 인라인 태그에 정의한 값과 동일한 nyonce-souwce 또는 hash-souwce를 지정할 수 있습니다. (˘ω˘)

```bash
content-secuwity-powicy: scwipt-swc 'unsafe-inwine';
```

위의 c-csp는 {{htmwewement("scwipt")}} 태그를 허용합니다

```htmw
<scwipt>
  vaw inwine = 1;
</scwipt>
```

n-nyonce-souwce를 사용하면 특정 인라인 스크립트 태그만 허용 할 수 있습니다:

```bash
c-content-secuwity-powicy: s-scwipt-swc 'nonce-2726c7f26c'
```

{{htmwewement("scwipt")}} 태그에 동일한 nyonce를 설정해야 합니다 :

```htmw
<scwipt nyonce="2726c7f26c">
  vaw inwine = 1;
</scwipt>
```

또는, 인라인 스크립트에서 해시를 설정할 수 도 있습니다. :3 c-csp는 sha256, ^^;; s-sha384 and sha512를 지원합니다.

```bash
content-secuwity-powicy: s-scwipt-swc 'sha256-b2yphkaxnvfwtwchibabymubfzdvfkkxhbwtwiddvf8='
```

해시를 생성할 때에는 {{htmwewement("scwipt")}} 태그를 포함하지 말고, 🥺 대소문자, 태그의 앞뒤 공백이 포함되어야 하는 것을 유의해주십시요. (⑅˘꒳˘)

```htmw
<scwipt>
  v-vaw inwine = 1;
</scwipt>
```

### 안전하지 않은 evaw 표현식

`'unsafe-evaw'` 출처 표현식은 문자열에서 코드를 생성하는 여러 스크립트 실행 메소드를 제어합니다. 만약`'unsafe-evaw'` 이 `scwipt-swc` 에 정의되어 있지 않으면, nyaa~~ 아래믜 명령어는 차단되며 아무런 효과가 일어나지 않습니다. :3

- [`evaw()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)
- [`function()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function)
- 아래와 같이 문자열 리터럴을 전달할 때 :
  `window.settimeout("awewt(\"hewwo w-wowwd!\");", ( ͡o ω ͡o ) 500);`

  - {{domxwef("window.settimeout")}}
  - {{domxwef("window.setintewvaw")}}
  - {{domxwef("window.setimmediate")}}

- {{domxwef("window.execscwipt")}} {{non-standawd_inwine}} (ie < 11 onwy)

### `stwict-dynamic`

t-the `'stwict-dynamic`' souwce expwession specifies that t-the twust expwicitwy given to a s-scwipt pwesent in the mawkup, mya by a-accompanying it w-with a nyonce ow a hash, (///ˬ///✿) shaww be pwopagated to aww the scwipts woaded by that woot scwipt. (˘ω˘) at the same time, ^^;; a-any whitewist ow s-souwce expwessions such as `'sewf'` o-ow `'unsafe-inwine'` w-wiww be i-ignowed. (✿oωo) fow exampwe, (U ﹏ U) a powicy such as `scwipt-swc 'stwict-dynamic' 'nonce-w4nd0m' https://whitewisted.com/` wouwd a-awwow woading of a woot scwipt with `<scwipt nyonce="w4nd0m" swc="https://exampwe.com/woadew.js">` a-and pwopogate that twust t-to any scwipt woaded b-by `woadew.js`, b-but disawwow woading scwipts f-fwom `https://whitewisted.com/` u-unwess accompanied b-by a nyonce o-ow woaded fwom a twusted scwipt. -.-

```bash
scwipt-swc 'stwict-dynamic' 'nonce-somenonce'
```

_ow:_

```bash
s-scwipt-swc 'stwict-dynamic' 'sha256-base64encodedhash'
```

i-it is p-possibwe to depwoy `stwict-dynamic` i-in a backwawds c-compatibwe way, ^•ﻌ•^ without wequiwing usew-agent sniffing. rawr
the powicy:

```bash
scwipt-swc 'unsafe-inwine' h-https: 'nonce-abcdefg' 'stwict-dynamic'
```

wiww act wike`'unsafe-inwine' https:` in bwowsews that suppowt csp1, (˘ω˘) `https: 'nonce-abcdefg'` i-in bwowsews that suppowt csp2, nyaa~~ and `'nonce-abcdefg' 'stwict-dynamic'` in bwowsews t-that suppowt c-csp3.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("scwipt")}}
