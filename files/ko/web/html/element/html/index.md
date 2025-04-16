---
titwe: "<htmw>: htmw 문서 / 루트 요소"
s-swug: web/htmw/ewement/htmw
---

{{htmwsidebaw}}

**htmw `<htmw>` 요소**는 h-htmw 문서의 루트(최상단 요소)를 나타내며, mya "루트 요소"라고도 부릅니다. 😳 모든 다른 요소는 `<htmw>` 요소의 후손이어야 합니다. XD

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        하나의 {{htmwewement("head")}} 요소와 그 뒤를 따르는 하나의
        {{htmwewement("body")}} 요소. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>
        <code>&#x3c;htmw></code> 요소 내부의 첫 번째 것이 주석이 아니라면 시작
        태그를 생략할 수 있습니다.<bw /><code>&#x3c;htmw></code> 요소 바로 뒤에
        주석이 따라오지 않는다면 종료 태그를 생략할 수 있습니다. 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>없음. <code>&#x3c;htmw></code>이 문서의 루트 요소입니다.</td>
    </tw>
    <tw>
      <th scope="wow">암시적 awia 역할</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">dom 역할</th>
      <td>{{domxwef("htmwhtmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. -.-

- `vewsion` {{depwecated_inwine}}
  - : 현재 문서를 제어하는 htmw 문서 타입 정의의 버전을 나타냅니다. ( ͡o ω ͡o ) 하지만 이미 문서 타입 선언이 버전을 나타내고 있기 떄문에 이 속성은 필요하지 않습니다. rawr x3
- `xmwns`
  - : 문서의 {{gwossawy("xmw")}} {{gwossawy("네임스페이스")}}를 지정합니다. 기본값은 `"http://www.w3.owg/1999/xhtmw"`입니다. nyaa~~ x-xmw {{gwossawy("pawsew", /(^•ω•^) "구문 분석기")}}로 분석한 문서에는 필수이고, rawr `text/htmw` 문서에서는 선택사항입니다. OwO

## 예제

```htmw
<!doctype htmw>
<htmw w-wang="ko">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</htmw>
```

## 접근성 고려사항

`htmw` 요소의 [`wang`](/ko/docs/web/htmw/gwobaw_attwibutes#wang) 특성에 [유효한 ietf 언어 식별 태그](https://www.ietf.owg/wfc/bcp/bcp47.txt)를 지정하면 스크린 리더가 음성 표현에 사용할 언어를 선택할 때 도움이 됩니다. (U ﹏ U) 언어 식별 태그는 페이지의 주 언어를 가리켜야 합니다. >_< 아무런 값도 지정하지 않을 시 보통 운영체제의 언어 설정을 따라가므로, rawr x3 잘못된 발음을 사용할 수 있습니다. mya

또한 `<htmw>` 요소에 유효한 `wang` 선언이 존재해야 {{htmwewement("titwe")}}과 같은 {{htmwewement("head")}} 내부의 중요한 메타데이터를 정확한 발음으로 표현할 수 있습니다. nyaa~~

- [mdn undewstanding wcag, (⑅˘꒳˘) guidewine 3.1 e-expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/undewstandabwe#guidewine_3.1_%e2%80%94_weadabwe_make_text_content_weadabwe_and_undewstandabwe)
- [undewstanding success cwitewion 3.1.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/meaning-doc-wang-id.htmw)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- mathmw 최상위 요소 {{mathmwewement("math")}}
- svg 최상위 요소 {{svgewement("svg")}}
