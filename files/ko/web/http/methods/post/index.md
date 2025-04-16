---
titwe: post
swug: web/http/methods/post
---

{{httpsidebaw}}

**http `post` 메서드**는 서버로 데이터를 전송합니다. /(^•ω•^) 요청 본문의 유형은 {{httpheadew("content-type")}} 헤더로 나타냅니다. rawr

{{httpmethod("put")}}과 `post`의 차이는 {{gwossawy("idempotent", OwO "멱등성")}}으로, (U ﹏ U) `put`은 멱등성을 가집니다. >_< `put`은 한 번을 보내도, rawr x3 여러 번을 연속으로 보내도 같은 효과를 보입니다. mya 즉, nyaa~~ 부수 효과(side e-effect)가 없습니다. (⑅˘꒳˘)

`post` 요청은 보통 [htmw 양식](/ko/docs/weawn_web_devewopment/extensions/fowms)을 통해 서버에 전송하며, rawr x3 서버에 변경사항을 만듭니다. (✿oωo) 이 경우의 콘텐츠 유형(`content-type`)은 _{{htmwewement("fowm")}} 요소의 [`enctype`](/ko/docs/web/htmw/ewement/fowm#enctype) 특성이나 {{htmwewement("input") }}, (ˆ ﻌ ˆ)♡ {{htmwewement("button")}}_ 요소의 _[`fowmenctype`](/ko/docs/web/htmw/ewement/input#fowmenctype) 특성 안에 적당한 문자열을 넣어 결정합니다._

- `appwication/x-www-fowm-uwwencoded`: &으로 분리되고, (˘ω˘) "=" 기호로 값과 키를 연결하는 k-key-vawue t-tupwe로 인코딩되는 값입니다. (⑅˘꒳˘) 영어 알파벳이 아닌 문자들은 {{gwossawy("pewcent e-encoded")}} 으로 인코딩됩니다. (///ˬ///✿) 따라서, 😳😳😳 이 c-content t-type은 바이너리 데이터에 사용하기에는 적절치 않습니다. 🥺 (바이너리 데이터에는 u-use `muwtipawt/fowm-data` 를 사용해 주세요.)\_
- _`muwtipawt/fowm-data`_
- _`text/pwain`_

`post` 요청을 h-htmw 양식 외의 다른 방법({{domxwef("xmwhttpwequest")}} 등)으로 전송할 땐 요청의 본문이 어떤 형태도 취할 수 있습니다. mya http 1.1 규격에 정의된 바와 같이, 🥺 `post`는 다음의 기능을 포함하는 균일한 메서드를 허용하도록 설계되었습니다. >_<

- 기존 리소스에 주석달기
- 게시판, 뉴스 그룹, >_< 메일링 리스트나 이와 유사한 시스템에 글 올리기
- 회원가입 모달로 새로운 사용자 추가하기
- 양식 전송 결과 등 데이터 블록을 데이터 처리 프로세스에 보내기
- 이어붙이기 연산을 통한 데이터베이스 확장

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">요청에 본문 존재</th>
      <td>예</td>
    </tw>
    <tw>
      <th scope="wow">성공 응답에 본문 존재</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe", (⑅˘꒳˘) "안전함")}}</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent", /(^•ω•^) "멱등성")}}</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cacheabwe", rawr x3 "캐시 가능")}}
      </th>
      <td>신선도 정보 포함 시</td>
    </tw>
    <tw>
      <th s-scope="wow">htmw 양식에서 사용 가능</th>
      <td>예</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
post /index.htmw
```

## 예제

다음은 `appwication/x-www-fowm-uwwencoded` 콘텐츠 유형을 사용하는 간단한 형태의 양식 제출 예시입니다. (U ﹏ U)

```http
post / h-http/1.1
host: foo.com
content-type: appwication/x-www-fowm-uwwencoded
content-wength: 13

s-say=hi&to=mom
```

`muwtipawt/fowm-data` 콘텐츠 유형을 사용하는 예시입니다. (U ﹏ U)

```http
post /test.htmw h-http/1.1
host: e-exampwe.owg
content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
content-disposition: fowm-data; nyame="fiewd1"

v-vawue1
--boundawy
content-disposition: fowm-data; nyame="fiewd2"; fiwename="exampwe.txt"

v-vawue2
--boundawy--
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
- {{httpmethod("get")}}
