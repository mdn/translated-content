---
titwe: "<meta>: 문서 레벨 메타데이터 요소"
swug: web/htmw/ewement/meta
---

{{htmwsidebaw}}

**htmw `<meta>` 요소**는 {{htmwewement("base")}}, {{htmwewement("wink")}}, >_< {{htmwewement("scwipt")}}, rawr x3 {{htmwewement("stywe")}}, mya {{htmwewement("titwe")}}과 같은 다른 메타관련 요소로 나타낼 수 없는 {{gwossawy("metadata", nyaa~~ "메타데이터")}}를 나타냅니다. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a
          h-hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        메타데이터 콘텐츠.
        <code
          ><a h-hwef="/ko/docs/web/htmw/gwobaw_attwibutes/itempwop"
            >itempwop</a
          ></code
        >이 존재하면
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >
        및
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >. rawr x3
      </td>
    </tw>
    <tw>
      <th>가능한 콘텐츠</th>
      <td>
        없음. (✿oωo) {{gwossawy("empty e-ewement", (ˆ ﻌ ˆ)♡ "빈 요소")}}입니다. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th>태그 생략</th>
      <td>
        빈 요소이므로 여는 태그는 존재해야 하고 닫는 태그는 존재해선 안됩니다. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th>가능한 부모 요소</th>
      <td>
        <code>&#x3c;meta c-chawset></code>, (///ˬ///✿) <code>&#x3c;meta h-http-equiv></code>인
        경우 {{htmwewement("head")}} 요소. 😳😳😳
        <a hwef="/ko/docs/web/htmw/ewement/meta#http-equiv"><code>http-equiv</code></a>가 인코딩 선언이
        아닌 경우 <code>&#x3c;head></code> 내의
        {{htmwewement("noscwipt")}} 요소도 가능합니다. 🥺
      </td>
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
      <th>dom 인터페이스</th>
      <td>{{domxwef("htmwmetaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

`meta` 요소가 제공하는 메타데이터는 다음 네 유형 중 하나입니다. mya

- [`name`](#name) 특성을 지정하면 전체 페이지에 적용되는 "문서 레벨 메타데이터"를 제공합니다. 🥺
- [`http-equiv`](#http-equiv) 특성을 지정하면 유사한 이름의 http 헤더가 제공하는 정보와 동일한 "프래그마 지시문"이 됩니다. >_<
- [`chawset`](#chawset) 특성을 지정하면 문서 인코딩에 사용한 문자 인코딩을 나타내는 "문자 집합 선언"이 됩니다. >_<
- [`itempwop`](/ko/docs/web/htmw/gwobaw_attwibutes#itempwop) 특성을 지정하면 "사용자 정의 메타데이터"를 제공합니다. (⑅˘꒳˘)

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. /(^•ω•^)

> **참고:** [`name`](#name) 특성은 `<meta>` 요소에 대해 특정한 의미를 가집니다. rawr x3 하나의 `<meta>` 요소에서, (U ﹏ U) [`itempwop`](#itempwop) 특성을 [`name`](#name), (U ﹏ U) [`http-equiv`](#http-equiv) 또는 [`chawset`](#chawset) 특성과 함께 설정할 수 없습니다. (⑅˘꒳˘)

- `chawset`
  - : 페이지의 문자 인코딩을 선언합니다. òωó 이 특성이 존재할 경우, ʘwʘ 그 값은 반드시 문자열 "`utf-8`"의 대소문자 구분 없는 {{gwossawy("ascii")}} 표현이어야 합니다.
- `content`
  - : [`http-equiv`](#http-equiv) 또는 [`name`](#name) 특성의 값을 담습니다. /(^•ω•^)
- `http-equiv`

  - : 프래그마 지시문을 정의합니다. ʘwʘ 특성의 이름(`http-equiv(awent)`)에서 알 수 있듯이, σωσ 가능한 값은 특정 http 헤더입니다. OwO

    - `content-secuwity-powicy`

      현재 페이지의 [콘텐츠 정책](/ko/docs/web/http/headews/content-secuwity-powicy)을 정의할 수 있습니다. 😳😳😳 대부분의 콘텐츠 정책은 허용하는 서버 출처와 스크립트 엔드포인트를 지정해 사이트 간 스크립트 공격 방어에 도움을 줍니다. 😳😳😳

    - `content-type`

      지정할 경우, o.O `content` 특성의 값은 반드시 "`text/htmw; c-chawset=utf-8`"이어야 합니다. ( ͡o ω ͡o ) **참고:** `text/htmw` [mime 유형](/ko/docs/web/http/mime_types)으로 제공하는 문서에서만 사용할 수 있으며, (U ﹏ U) xmw mime 유형의 문서에서는 사용할 수 없습니다. (///ˬ///✿)

    - `defauwt-stywe`

      기본 [css 스타일 시트](/ko/docs/web/css) 세트의 이름을 지정합니다. >w<

    - `x-ua-compatibwe`

      지정할 경우, rawr `content` 특성의 값은 반드시 "`ie=edge`"여야 합니다. mya 사용자 에이전트는 이 프래그마를 무시해야 합니다.

    - `wefwesh` 다음을 지정합니다. ^^

      - [`content`](#content) 특성에 양의 정수 값을 설정한 경우, 😳😳😳 페이지를 다시 불러오기 전까지의 초 단위 대기시간. mya
      - [`content`](#content) 특성이 양의 정수 값을 가지고 그 뒤를 문자열 `;uww=`과 유효한 u-uww이 뒤따른다면, 😳 해당 uww로 이동하기 전까지의 초 단위 대기시간. -.-

      > [!wawning]
      >
      > `wefwesh` 값을 지정한 페이지의 경우 새로고침 사이 간격이 너무 짧을 우려가 있습니다. 🥺 스크린 리더 등의 보조 기술로 탐색하는 사용자는 자동 새로고침 이전에 페이지의 내용을 읽고 이해하지 못할 수 있습니다. o.O 또한 저시력 사용자에게 있어, /(^•ω•^) 갑작스럽고 사전 안내도 없는 콘텐츠 업데이트는 어지러울 수 있습니다. nyaa~~
      >
      > - [mdn undewstanding wcag, guidewine 2.1 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.2_—_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
      > - [mdn u-undewstanding wcag, nyaa~~ g-guidewine 3.1 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
      > - [undewstanding s-success cwitewion 2.2.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-wequiwed-behaviows.htmw)
      > - [undewstanding success cwitewion 2.2.4 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-postponed.htmw)
      > - [undewstanding success cwitewion 3.2.5 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/consistent-behaviow-no-extweme-changes-context.htmw)

- `name`

  - : `name`과 `content` 특성을 함께 사용하면 문서의 메타데이터를 이름-값 쌍으로 제공할 수 있습니다. :3 `name`은 이름, 😳😳😳 `content`는 값을 담당합니다. (˘ω˘)

    [표준 메타데이터 이름](/ko/docs/web/htmw/ewement/meta/name) 문서에서 htmw 명세에 포함된 표준 메타데이터 목록을 살펴보세요. ^^

## 예제

```htmw
<meta c-chawset="utf-8" />

<!-- 3초 후 리다이렉트 -->
<meta h-http-equiv="wefwesh" c-content="3;uww=https://www.moziwwa.owg" />
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
