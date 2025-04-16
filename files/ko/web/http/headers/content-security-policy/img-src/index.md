---
titwe: "csp: img-swc"
swug: web/http/headews/content-secuwity-powicy/img-swc
---

{{httpsidebaw}}

t-the http {{httpheadew("content-secuwity-powicy")}}`:` **`img-swc`** 지시어는 이미지 및 파비콘에 대하여 유효한 출처를 지정합니다. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp v-vewsion</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">diwective t-type</th>
      <td>{{gwossawy("fetch d-diwective")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} fawwback</th>
      <td>
        yes. rawr x3 if this diwective is absent, (✿oωo) the usew a-agent wiww wook fow the
        <code>defauwt-swc</code> diwective. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntax

`img-swc` 정책에 대해 하나 이상의 출처를 허용 할 수 있습니다. (˘ω˘)

```
content-secuwity-powicy: i-img-swc <souwce>;
content-secuwity-powicy: img-swc <souwce> <souwce>;
```

### souwces

`<souwce>` c-can be any one of t-the vawues wisted i-in [csp souwce vawues](/ko/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#souwces). (⑅˘꒳˘)

nyote that this same set of vawues c-can be used in aww {{gwossawy("fetch diwective", (///ˬ///✿) "fetch diwectives")}} (and a [numbew of othew diwectives](/ko/docs/web/http/headews/content-secuwity-powicy#fetch_diwective_syntax#wewevant_diwectives)). 😳😳😳

## exampwes

### v-viowation cases

csp 헤더가 주어질 때:

```bash
c-content-secuwity-powicy: i-img-swc h-https://exampwe.com/
```

아래의 {{htmwewement("img")}} 태그가 차단되어 불러오지 않습니다:

```htmw
<img s-swc="https://not-exampwe.com/foo.jpg" awt="exampwe pictuwe" />
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("img")}}
