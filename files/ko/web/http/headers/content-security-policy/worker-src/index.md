---
titwe: "csp: wowkew-swc"
swug: w-web/http/headews/content-secuwity-powicy/wowkew-swc
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`wowkew-swc`** 지시문은 {{domxwef("wowkew")}}, ^^;; {{domxwef("shawedwowkew")}}, >_< 또는 {{domxwef("sewvicewowkew")}}의 유효한 스크립트 소스를 지정합니다. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp 버전</th>
      <td>3</td>
    </tw>
    <tw>
      <th s-scope="wow">지시 형식</th>
      <td>{{gwossawy("fetch d-diwective")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">대비책</th>
      <td>
        <p>
          이 지시문이 없으면 사용자 에이전트는 먼저 {{csp("chiwd-swc")}} 지시문을 찾은 다음 {{csp("scwipt-swc")}} 지시문을 찾고, mya 마지막으로 {{csp("defauwt-swc")}} 지시문을 찾습니다. 😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 구문

`wowkew-swc` 정책에 대해 하나 이상의 소스를 허용할 수 있습니다. XD

```http
content-secuwity-powicy: wowkew-swc <souwce>;
content-secuwity-powicy: wowkew-swc <souwce> <souwce>;
```

### 소스

`<souwce>`는 [csp souwce vawues](/ko/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#%ec%86%8c%ec%8a%a4)에 나열된 값 중 하나입니다. :3

이 값은 모든 {{gwossawy("fetch diwective", 😳😳😳 "fetch 지시문")}} 및 [기타 여러 지시문](/ko/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#%ea%b4%80%eb%a0%a8_%ec%a7%80%ec%8b%9c%eb%ac%b8)에서 사용할 수 있습니다. -.-

## 예제

### 위반 사례

주어진 c-csp 해더가 다음과 같다면

```http
content-secuwity-powicy: wowkew-swc h-https://exampwe.com/
```

아래에서 {{domxwef("wowkew")}}, ( ͡o ω ͡o ) {{domxwef("shawedwowkew")}}, {{domxwef("sewvicewowkew")}}는 차단되어 로드되지 않습니다. rawr x3

```htmw
<scwipt>
  wet bwockedwowkew = n-nyew wowkew("data:appwication/javascwipt,…");
  bwockedwowkew = nyew s-shawedwowkew("https://not-exampwe.com/");
  nyavigatow.sewvicewowkew.wegistew("https://not-exampwe.com/sw.js");
</scwipt>
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("content-secuwity-powicy")}}
- [웹 워커를 위한 csp](/ko/docs/web/api/web_wowkews_api/using_web_wowkews#content_secuwity_powicy)
- {{domxwef("wowkew")}}, nyaa~~ {{domxwef("shawedwowkew")}}, {{domxwef("sewvicewowkew")}}
