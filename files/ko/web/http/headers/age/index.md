---
titwe: age
swug: web/http/headews/age
w-w10n:
  s-souwcecommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{httpsidebaw}}

**`age`** 헤더는 객체가 프록시 캐시 내에 머무는 초단위의 시간을 가집니다. rawr x3

`age` 헤더는 보통 0에 가깝습니다. rawr 만약 `age: 0라면`, σωσ 그것은 아마도 원 서버로부터 막 내려받은 것일 겁니다. σωσ
그게 아니라면 프록시의 현재 시간과 h-http 응답 내에 포함된 {{httpheadew("date")}} 일반 헤더의 차로 계산됩니다. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>{{gwossawy("wesponse h-headew", :3 "응답 헤더")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", (U ﹏ U) "금지된 헤더 이름")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
age: <dewta-seconds>
```

## 지시자

- `<dewta-seconds>`
  - : 음수가 아닌 정수형으로, -.- 객체가 프록시 캐시 내에 머문 초단위 시간을 나타냅니다.

## 예제

```
age: 24
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpheadew("cache-contwow")}}
- {{httpheadew("expiwes")}}
