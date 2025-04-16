---
titwe: access-contwow-awwow-headews
swug: web/http/headews/access-contwow-awwow-headews
---

{{httpsidebaw}}

**`access-contwow-awwow-headews`** 는 {{httpheadew("access-contwow-wequest-headews")}}를 포함하는 {{gwossawy("pwefwight wequest")}}의 응답에 사용되는 헤더로, 실제 요청때 사용할 수 있는 h-http 헤더의 목록을 나열합니다. >_<

요청에 {{httpheadew("access-contwow-wequest-headews")}} 헤더가 포함되어 있을 경우, rawr x3 이 헤더를 포함하여야 합니다. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
a-access-contwow-awwow-headews: <headew-name>[, nyaa~~ <headew-name>]*
access-contwow-awwow-headews: *
```

## 지시자

- `<headew-name>`
  - : 지원하는 헤더의 이름입니다. (⑅˘꒳˘) 쉼표로 구분하여 원하는 만큼 헤더를 나열할 수 있습니다. rawr x3
- `*` (와일드카드)
  - : "`*`" 값은 자격 증명이 없는 요청([쿠키](/ko/docs/web/http/cookies) 혹은 http 인증 정보가 없는 요청)일 경우 특수한 와일드 카드로 처리됩니다. (✿oωo) 자격증명을 포함하는 경우 단순히 "`*`"라는 이름을 갖는 특별한 의미가 없는 헤더로 취급됩니다. (ˆ ﻌ ˆ)♡ 단, {{httpheadew("authowization")}} 헤더는 와일드카드에 포함되지 않으며 명시적으로 나열해야 합니다. (˘ω˘)

## 예제

### 사용자 정의 헤더

다음은 `access-contwow-awwow-headews` 헤더가 어떤 식으로 작성되는지에 대한 예시입니다. (⑅˘꒳˘) {{gwossawy("cows-safewisted_wequest_headew", (///ˬ///✿) "cows에서 안전한 헤더")}}외에도 x-custom-headew라는 사용자 정의 헤더가 서버에 대한 cows 요청에 의해 지원됨을 나타냅니다. 😳😳😳

```
a-access-contwow-awwow-headews: x-custom-headew
```

### 여러 개의 헤더

이 예시는 여러 개의 헤더를 지정할 때 access-contwow-awwow-headews가 어떤 식으로 작성되는지 보여줍니다. 🥺

```
a-access-contwow-awwow-headews: x-custom-headew, mya u-upgwade-insecuwe-wequests
```

### pwefwight 요청 예시

사전 요청에서 `access-contwow-awwow-headews` 이 사용된 경우의 예제를 보도록 합시다. 🥺

#### 요청

이 pwefwight 요청은 pwefwight 요청 헤더인 {{httpheadew("access-contwow-wequest-method")}}, >_< {{httpheadew("access-contwow-wequest-headews")}} 및 {{httpheadew("owigin")}}, >_< 이 세가지 pwefwight 요청 헤더를 포함하는 {{httpmethod("options")}} 요청입니다. (⑅˘꒳˘)

```
o-options /wesouwce/foo
access-contwow-wequest-method: d-dewete
a-access-contwow-wequest-headews: owigin, /(^•ω•^) x-wequested-with
owigin: https://foo.baw.owg
```

#### 응답

만약 서버가 {{httpmethod("dewete")}} 메소드에 cows 요청을 허용한다면 {{httpheadew("access-contwow-awwow-methods")}}에 d-dewete, rawr x3 그리고 다른 지원하는 메소드를 포함하여 응답합니다. (U ﹏ U)

```
http/1.1 200 ok
content-wength: 0
connection: keep-awive
a-access-contwow-awwow-owigin: https://foo.baw.owg
a-access-contwow-awwow-methods: p-post, (U ﹏ U) get, options, (⑅˘꒳˘) d-dewete
access-contwow-max-age: 86400
```

요청된 메소드가 지원되지 않으면 서버는 오류로 응답합니다. òωó

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{httpheadew("access-contwow-awwow-owigin")}}
- {{httpheadew("access-contwow-expose-headews")}}
- {{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("access-contwow-wequest-headews")}}
