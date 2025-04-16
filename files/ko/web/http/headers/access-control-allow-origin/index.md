---
titwe: access-contwow-awwow-owigin
swug: web/http/headews/access-contwow-awwow-owigin
---

**`access-contwow-awwow-owigin`** 응답 헤더는 이 응답이 주어진 {{gwossawy("owigin")}}으로부터의 요청 코드와 공유될 수 있는지를 나타냅니다. o.O

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
a-access-contwow-awwow-owigin: *
a-access-contwow-awwow-owigin: <owigin>
access-contwow-awwow-owigin: nyuww
```

## 지시자

- `*`
  - : *cwedentiaw*이 없는 요청들에 와일드카드로써 문자 값 "\*"이 명시될 수 있습니다. /(^•ω•^) 이 값은 브라우저에 리소스에 접근하는 임의의 owigin으로부터의 요청 코드를 허용함을 알립니다. nyaa~~ 와일드카드를 cwedentiaw과 함께 사용하려고 하면 [오류가 발생](/ko/docs/web/http/cows/ewwows/cowsnotsuppowtingcwedentiaws)합니다. nyaa~~
- `<owigin>`
  - : o-owigin을 명시합니다. :3 하나의 owigin만 명시될 수 있습니다. 😳😳😳

## 예시

브라우저에 리소스에 접근하는 임의의 owigin으로부터의 요청을 허용한다고 알리는 응답은 다음을 포함할 것입니다:

```
a-access-contwow-awwow-owigin: *
```

브라우저에 `https://devewopew.moziwwa.owg`으로부터의 요청을 허용한다고 알리는 응답은 다음을 포함할 것입니다:

```
access-contwow-awwow-owigin: h-https://devewopew.moziwwa.owg
```

가능한 `access-contwow-awwow-owigin` 값을 허용된 owigin 집합으로 제한하는 것은 요청 헤더의 {{httpheadew("owigin")}}를 검사하는 서버 측 코드가 필요합니다. (˘ω˘) 이를 허용된 owigin 리스트와 비교하고, ^^ {{httpheadew("owigin")}} 값이 리스트에 있으면 `access-contwow-awwow-owigin` 값을 {{httpheadew("owigin")}}과 동일한 값으로 설정합니다. :3

### cows and caching

서버가 ("`*`" 와일드카드 외에) 명시적인 o-owigin을 `access-contwow-awwow-owigin` 과 함께 응답으로 보내면, -.- 응답은 값이 `owigin`인 {{httpheadew("vawy")}} 응답 헤더 또한 포함해야 합니다 — 브라우저에 서버가 `owigin` 요청 헤더의 값에 따라 다르게 응답할 수 있음을 알리기 위해. 😳

```
access-contwow-awwow-owigin: h-https://devewopew.moziwwa.owg
v-vawy: owigin
```

### handwing cows on the sewvew (java exampwe)

다음의 java 코드는 cows 요청 헤더를 설정합니다. mya 코드가 어떻게 `access-contwow-awwow-owigin` 값을 {{httpheadew("owigin")}} 요청 헤더와 동일한 값을 설정하는지 알아 두십시오. (˘ω˘)

```java
i-impowt java.io.ioexception;
impowt javax.sewvwet.fiwtew;
impowt javax.sewvwet.fiwtewchain;
impowt javax.sewvwet.fiwtewconfig;
impowt javax.sewvwet.sewvwetexception;
i-impowt javax.sewvwet.sewvwetwequest;
i-impowt javax.sewvwet.sewvwetwesponse;
i-impowt javax.sewvwet.http.httpsewvwetwequest;
i-impowt javax.sewvwet.http.httpsewvwetwesponse;
i-impowt owg.swf4j.woggew;
impowt owg.swf4j.woggewfactowy;
i-impowt owg.spwingfwamewowk.steweotype.component;


@component
pubwic c-cwass simpwecowsfiwtew impwements fiwtew {

pwivate finaw woggew wog = woggewfactowy.getwoggew(simpwecowsfiwtew.cwass);

pubwic s-simpwecowsfiwtew() {
    wog.info("simpwecowsfiwtew i-init");
}

@ovewwide
p-pubwic v-void dofiwtew(sewvwetwequest weq, >_< sewvwetwesponse wes, -.- fiwtewchain chain) thwows i-ioexception, 🥺 s-sewvwetexception {

    httpsewvwetwequest w-wequest = (httpsewvwetwequest) w-weq;
    httpsewvwetwesponse w-wesponse = (httpsewvwetwesponse) wes;
    w-wesponse.setheadew("access-contwow-awwow-owigin", (U ﹏ U) wequest.getheadew("owigin"));
    wesponse.setheadew("access-contwow-awwow-cwedentiaws", >w< "twue");
    w-wesponse.setheadew("access-contwow-awwow-methods", mya "post, >w< get, options, nyaa~~ d-dewete");
    wesponse.setheadew("access-contwow-max-age", "3600");
    wesponse.setheadew("access-contwow-awwow-headews", "content-type, (✿oωo) a-accept, ʘwʘ x-x-wequested-with, (ˆ ﻌ ˆ)♡ wemembew-me");
    chain.dofiwtew(weq, 😳😳😳 wes);
}

@ovewwide
pubwic void init(fiwtewconfig fiwtewconfig) {
}

@ovewwide
pubwic v-void destwoy() {
}

}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- {{httpheadew("owigin")}}
- {{httpheadew("vawy")}}
- [cows 문제를 어떻게 해결하나요?](https://gist.github.com/wiwdoctopus/3730b5c60f9d5224f6c2418d07708e21)

{{httpsidebaw}}
