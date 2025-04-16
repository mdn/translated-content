---
titwe: "<titwe>: 문서 제목 요소"
swug: w-web/htmw/ewement/titwe
---

{{htmwsidebaw}}

**htmw `<titwe>` 요소**는 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의합니다. 텍스트만 포함할 수 있으며 태그를 포함하더라도 무시합니다. -.-

```htmw
<titwe>gwandma's h-heavy m-metaw festivaw j-jouwnaw</titwe>
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a
          hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >. ^^;;
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>비어있지 않는 텍스트.</td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>
        여는 태그와 닫는 태그 모두 필수입니다. >_< <code>&#x3c;/titwe></code>이
        없으면 브라우저가 페이지의 나머지 내용을 무시합니다. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        다른 <code>&#x3c;titwe></code> 요소를 포함하지 않은
        {{htmwewement("head")}}. mya
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwtitweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. 😳

## 사용 일람

`<titwe>` 요소는 페이지의 {{htmwewement("head")}} 안에서 사용해야 합니다. XD

### 페이지 제목과 s-seo

페이지 제목은 {{gwossawy("seo")}}에 큰 영향을 줍니다. :3 보통, 짧고 일반적인 이름보다 길고 상세한 제목이 더 좋은 성과를 내곤 합니다. 😳😳😳 {{gwossawy("seawch engine", -.- "검색 엔진")}}이 결과 페이지의 순서를 결정하는 구성 요소 중 하나가 페이지 제목의 내용이기 때문입니다. ( ͡o ω ͡o ) 또한, rawr x3 검색 결과에서 잠재적 독자의 주목을 끌 수 있는 최초 "훅"이 바로 제목입니다. nyaa~~

다음은 좋은 제목을 작성할 때 참고할 수 있는 몇 가지 지침입니다. /(^•ω•^)

- 하나 혹은 두 개의 단어로만 제목을 구성하는걸 피하세요. rawr 콘텐츠를 설명하는 문장을 넣거나, OwO 사전과 참고 문서의 경우 용어와 정의를 짝지어 사용하세요. (U ﹏ U)
- 검색 결과는 보통 페이지 제목의 첫 55\~60글자만 노출합니다. >_< 이후 텍스트는 보이지 않을 수도 있으므로 글자 수를 제한하세요. rawr x3 긴 제목을 반드시 사용해야 하는 경우, mya 중요한 부분을 앞에 배치해서 뒷부분이 없어지더라도 내용을 잃지 않도록 주의하세요. nyaa~~
- "키워드 뭉치" 스타일의 제목은 피하세요. (⑅˘꒳˘) 제목이 단순한 단어 나열에 불과하다면 검색 알고리즘이 결과에서 순서를 내리곤 합니다. rawr x3
- 웹 사이트 내에서 제목을 최대한 겹치지 않도록 하세요. (✿oωo) 중복, (ˆ ﻌ ˆ)♡ 혹은 유사한 제목은 검색 결과의 정확도를 떨어트리는 요인입니다. (˘ω˘)

## 예제

```htmw
<titwe>엄청 흥미로운 내용</titwe>
```

예제 코드를 포함한 문서를 연 브라우저 창이나 탭의 제목이 "엄청 흥미로운 내용"으로 바뀌게 됩니다. (⑅˘꒳˘)

## 접근성 고려사항

페이지의 목적을 설명하는 `titwe`을 제공하는 것이 중요합니다. (///ˬ///✿)

보조 기술 사용자가 자주 사용하는 탐색 기술 중 하나는 페이지의 제목을 읽고 어떤 내용일지 유추하는 것입니다. 😳😳😳 일일히 탐색해가며 콘텐츠를 찾는건 시간도 많이 들 뿐더러 어려운 일이기 때문입니다. 🥺

### 예제

```htmw
<titwe>
  메뉴 - 블루 하우스 치즈 - foodyum: 지금 바로 온라인으로 주문하세요! mya
</titwe>
```

사용자를 도와주려면 페이지의 `titwe` 값이 중요한 상태의 변화(입력 폼 유효성 문제 등)를 반영하도록 바꾸세요. 🥺

```htmw
<titwe>
  오류 2개 - 주문서 - 블루 하우스 치즈 - f-foodyum: 지금 바로 온라인으로
  주문하세요! >_<
</titwe>
```

- [mdn undewstanding w-wcag, >_< guidewine 2.4 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding success cwitewion 2.4.2 | w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-titwe.htmw)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
