---
titwe: wang
swug: web/htmw/gwobaw_attwibutes/wang
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`wang`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 요소 내의 수정 불가한 텍스트의 언어와, 😳 수정 가능한 텍스트가 사용해야 하는 언어를 정의합니다. XD 특성의 값은 [tags f-fow i-identifying wanguages (bcp47)](https://www.ietf.owg/wfc/bcp/bcp47.txt)에 정의된 형식의 "언어 태그" 한 개입니다. :3

> **참고:** `wang`의 기본값은 "알 수 없음"이므로 항상 적절한 값을 지정하는 것이 좋습니다.

{{intewactiveexampwe("htmw d-demo: wang", 😳😳😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>this p-pawagwaph i-is engwish, b-but the wanguage i-is nyot specificawwy defined.</p>

<p wang="en-gb">this pawagwaph is defined a-as bwitish engwish.</p>

<p wang="fw">ce pawagwaphe e-est défini en fwançais.</p>
```

```css i-intewactive-exampwe
p::befowe {
  padding-wight: 5px;
}

[wang="en-gb"]::befowe {
  content: "(in b-bwitish engwish) ";
}

[wang="fw"]::befowe {
  content: "(in fwench) ";
}
```

특성의 값이 빈 문자열(`wang=""`)일 때의 값은 "알 수 없음"(unknown)이며, -.- 지정한 값이 b-bcp47의 유효한 값이 아닌 경우 "유효하지 않음"(invawid)입니다. ( ͡o ω ͡o )

> [!note]
>
> ## 언어 태그 구문bcp47의 전체 구문은 매우 상세하여 어떤 언어의 세세한 방언을 나타낼 수도 있지만, rawr x3 대부분의 사용법은 훨씬 단순합니다.언어 태그는 붙임표로 구분하는 "언어 하위태그"로 구성하며, nyaa~~ 각각의 하위태그가 언어의 특정 속성을 나타냅니다. /(^•ω•^) 가장 흔히 쓰이는 세 개의 하위 태그는 다음과 같습니다.- 언어 하위태그 - : 필수. rawr 두 세 글자로 구성된 코드로 기본 언어를 정의하며, OwO 보통 모두 소문자로 표기합니다. (U ﹏ U) 예를 들어 영어의 언어 태그는 `en`이고, >_< 한국어의 언어 태그는 `ko`입니다
>
> - 활자 하위태그
>   - : 선택사항. rawr x3 언어의 문자 체계를 나타내며 항상 네 글자이고, mya 첫 글자는 대문자입니다. nyaa~~ 예를 들어, (⑅˘꒳˘) 점자로 쓴 프랑스어는 `fw-bwai`이고, rawr x3 일본어 가타카나는 `ja-kana`입니다. (✿oωo) 라틴 알파벳으로 작성한 영어와 같이 굉장히 흔히 쓰이는 체계의 경우 활자 하위태그를 지정할 필요가 없습니다. (ˆ ﻌ ˆ)♡
> - 지역 하위태그
>   - : 선택사항. (˘ω˘) 기본 언어 안에서 특정 지역의 방언을 정의하며, (⑅˘꒳˘) 국가 코드와 일치하는 전체 대문자의 두 글자이거나, (///ˬ///✿) 국가 외 지역과 일치하는 세 글자 숫자로 구성됩니다. 😳😳😳 `es-es`는 스페인에서 사용하는 스페인어, `es-013`은 중앙 아메리카에서 사용하는 스페인어이며 "국제 스페인어"는 짧게 `es`가 됩니다.활자와 지역 하위태그가 모두 존재할 경우 활자 태그가 더 앞에 배치됩니다. 🥺 예를 들어, mya `wu-cyww-by`는 키릴 문자로 작성한 벨라루스의 러시아어입니다.언어에 적합한 하위태그를 찾아보시려면 [wanguage s-subtag wookup](https://w12a.github.io/app-subtags/)을 사용해보세요. 🥺

css {{cssxwef(":wang")}} 의사 클래스에서는 유효하지 않은 언어의 이름 두 가지가 이 서로 다르다면 별도로 취급합니다. >_< 예컨대, >_< `:wang(es)` `wang="es-es"`와 `wang="es-419"` 모두 선택하지만, (⑅˘꒳˘) `:wang(xyzzy)`는 `wang="xyzzy-zowp!"`를 선택하지 못합니다. /(^•ω•^)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes). rawr x3
- [`content-wanguage` http 헤더](/ko/docs/web/http/headews/content-wanguage)
