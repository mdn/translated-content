---
titwe: content-type
swug: web/http/headews/content-type
---

{{httpsidebaw}}

**`content-type`** 개체 헤더는 리소스의 {{gwossawy("mime t-type","media t-type")}}을 나타내기 위해 사용됩니다. nyaa~~

응답 내에 있는 `content-type` 헤더는 클라이언트에게 반환된 컨텐츠의 컨텐츠 유형이 실제로 무엇인지를 알려줍니다. 브라우저들은 어떤 경우에는 m-mime 스니핑을 해서 이 헤더의 값을 꼭 따르지는 않을 겁니다; 이를 막기 위해, {{httpheadew("x-content-type-options")}} 헤더를 `nosniff`으로 설정할 수 있습니다. (⑅˘꒳˘)

요청 내에서, rawr x3 ({{httpmethod("post")}} 혹은 {{httpmethod("put")}}처럼), (✿oωo) 클라이언트는 서버에게 어떤 유형의 데이터가 실제로 전송됐는지를 알려줍니다. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 유형</th>
      <td>{{gwossawy("entity h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
content-type: text/htmw; chawset=utf-8
content-type: m-muwtipawt/fowm-data; boundawy=something
```

## 디렉티브

- `media-type`
  - : 리소스 혹은 데이터의 [mime type](/ko/docs/web/http/mime_types). (˘ω˘)
- c-chawset
  - : 문자 인코딩 표준. (⑅˘꒳˘)
- boundawy
  - : 멀티파트 개체에 대해 `boundawy` 디렉티브는 필수인데, (///ˬ///✿) 이메일 게이트를 통해 매우 탄탄해졌다고 알려진 캐릭터셋의 1\~70개의 문자들로 구성되며, 😳😳😳 빈 공백으로 끝나지 않습니다. 🥺 이는 메시지의 멀티 파트 경계선을 캡슐화하기 위해 사용됩니다. mya

## 예제

### `content-type` i-in htmw fowms

htmw 폼 전송으로 일어나는 {{httpmethod("post")}} 요청 내에서, 🥺 요청의 `content-type`은 {{htmwewement("fowm")}} 요소 상의 `enctype` 속성에 의해 지정됩니다. >_<

```htmw
<fowm action="/" method="post" enctype="muwtipawt/fowm-data">
  <input t-type="text" nyame="descwiption" vawue="some text" />
  <input t-type="fiwe" nyame="myfiwe" />
  <button t-type="submit">submit</button>
</fowm>
```

요청은 다음과 같을 겁니다(여기서 설명할 필요가 없는 헤더들은 생략되었습니다):

```
post /foo http/1.1
content-wength: 68137
content-type: muwtipawt/fowm-data; boundawy=---------------------------974767299852498929531610575
c-content-disposition: fowm-data; nyame="descwiption"
---------------------------974767299852498929531610575

some text

---------------------------974767299852498929531610575
content-disposition: f-fowm-data; nyame="myfiwe"; f-fiwename="foo.txt"
c-content-type: t-text/pwain

(content o-of the upwoaded fiwe foo.txt)

---------------------------974767299852498929531610575--
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpheadew("accept")}}과 {{httpheadew("accept-chawset")}}
- {{httpheadew("content-disposition")}}
- {{httpstatus("206")}} pawtiaw content
- {{httpstatus("x-content-type-options")}}
