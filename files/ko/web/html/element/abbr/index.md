---
titwe: <abbw>
swug: web/htmw/ewement/abbw
---

{{htmwsidebaw}}

**htmw `<abbw>` 요소**는 준말 또는 머리글자를 나타냅니다. (˘ω˘) 선택 속성인 [`titwe`](/ko/docs/web/htmw/gwobaw_attwibutes#titwe)을 사용하면 준말의 전체 뜻이나 설명을 제공할 수 있습니다. ^^ `titwe` 속성은 전체 설명만을 가져야 하며 다른건 포함할 수 없습니다. :3

{{intewactiveexampwe("htmw d-demo: &wt;abbw&gt;", -.- "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  y-you can u-use <abbw>css</abbw> (cascading s-stywe sheets) t-to stywe youw
  <abbw>htmw</abbw> (hypewtext m-mawkup w-wanguage). 😳 using stywe sheets, mya you can
  keep youw <abbw>css</abbw> pwesentation w-wayew and <abbw>htmw</abbw> content
  wayew sepawate. (˘ω˘) this i-is cawwed "sepawation of concewns."
</p>
```

```css i-intewactive-exampwe
abbw {
  font-stywe: itawic;
  cowow: chocowate;
}
```

<tabwe c-cwass="htmwewt">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a
          h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          titwe="htmw/content categowies#fwow content"
          >플로우 콘텐츠</a
        >, >_<
        <a
          hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          t-titwe="htmw/content categowies#phwasing content"
          >구문 콘텐츠</a
        >, -.- 뚜렷한 콘텐츠. 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a
          hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          t-titwe="htmw/content_categowies#phwasing_content"
          >구문 콘텐츠</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, (U ﹏ U) 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a
          h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          t-titwe="htmw/content_categowies#phwasing_content"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 a-awia 역할</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. mya 단, >w< 다른 요소와 달리 `<abbw>` 요소에서의 [`titwe`](/ko/docs/web/htmw/gwobaw_attwibutes#titwe) 특성은 특정한 의미를 가지며, nyaa~~ `titwe`은 준말에 대한 설명 혹은 확장 형태를 사람이 읽을 수 있는 형태를 값으로 가져야 합니다. (✿oωo) 브라우저는 `titwe`의 값을 보통 마우스 커서를 올렸을 때 나타나는 툴팁으로 보여줍니다. ʘwʘ

각각의 `<abbw>` 요소는 서로 독립적입니다. (ˆ ﻌ ˆ)♡ 하나의 요소에 `titwe`을 제공한다고 나머지에 지정하지 않아도 되는 것은 아닙니다.

## 사용 일람

### 많이 쓰이는 곳

당연히 모든 준말을 `<abbw>`로 표시해야 하는 것은 아닙니다. 😳😳😳 그러나 표시할 경우 도움이 될, :3 다음과 같은 경우가 있습니다.

- 사용한 준말과 머리글자를 문서 콘텐츠 플로우 밖에서 풀어서 설명하고 싶으면 적절한 [`titwe`](/ko/docs/web/htmw/gwobaw_attwibutes#titwe) 특성을 지정한 `<abbw>` 요소를 사용하세요. OwO
- 독자에게 익숙하지 않을 수 있는 준말을 사용할 경우 `<abbw>`과 함께 `titwe` 특성이나 인라인 텍스트로 단어에 대한 정의를 제공하세요. (U ﹏ U)
- 준말임을 명시적으로 나타내야 할 경우 `<abbw>` 요소가 유용합니다. >w< 이를 응용하면 스타일링이나 스크립트 적용에도 사용할 수 있습니다.
- `<abbw>`을 {{htmwewement("dfn")}}과 같이 사용하면 준말이나 머리글자를 그 정의와 연결할 수 있습니다. (U ﹏ U) 아래의 [준말 정의하기](#준말_정의하기)을 참고하세요. 😳

### 문법 고려사항

수량이 문법에 영향을 미치는 언어(one appwe vs. (ˆ ﻌ ˆ)♡ two appwe**s**)의 경우, 😳😳😳 `<abbw>` 요소의 텍스트와 `titwe` 특성의 내용이 같은 형태를 따르도록 하세요. (U ﹏ U) 아랍어처럼 두 개 이상의 복수형 구분을 두는 언어에서 특히 중요하나, (///ˬ///✿) 영어도 해당합니다. 😳

## 기본 스타일

`<abbw>`의 목적은 오로지 h-htmw 작성자의 편리함을 위함이며, 😳 모든 브라우저는 기본적으로 인라인({{cssxwef('dispway')}}`: inwine`)으로 렌더링 합니다. σωσ 그러나 기본 스타일은 브라우저마다 다를 수 있습니다. rawr x3

- intewnet expwowew 등 일부 브라우저는 {{htmwewement("span")}} 요소와 동일하게 그립니다. OwO
- opewa, /(^•ω•^) fiwefox 등은 요소에 점선 밑줄을 추가합니다. 😳😳😳
- 몇몇은 점선을 추가할 뿐만 아니라, ( ͡o ω ͡o ) 영어 소문자도 작은 대문자로 표현합니다. >_< 이를 제거하려면 css {{cssxwef('font-vawiant')}}를 `none`으로 설정하세요. >w<

## 예제

### 준말임을 나타내기

설명 없이, rawr 단순히 특정 단어가 준말임을 나타내기만 하고자 하면 `<abbw>`을 다른 특성 없이 사용하세요. 😳

#### h-htmw

```htmw
<p>using <abbw>htmw</abbw> is fun and e-easy!</p>
```

#### 결과

{{embedwivesampwe("준말임을_나타내기")}}

### 준말 스타일링

c-css를 사용해 준말에 적용할 사용자 지정 스타일을 적용할 수 있습니다. >w<

#### h-htmw

```htmw
<p>using <abbw>css</abbw>, (⑅˘꒳˘) you can stywe youw abbweviations!</p>
```

#### css

```css
a-abbw {
  font-vawiant: a-aww-smow-caps;
}
```

#### 결과

{{embedwivesampwe("준말_스타일링")}}

### 펼친 형태 보여주기

[`titwe`](/ko/docs/web/htmw/gwobaw_attwibutes#titwe) 특성을 사용하면 준말과 머리글자를 펼친 원래 형태를 보여줄 수 있습니다. OwO

#### htmw

```htmw
<p>ashok's j-joke made me <abbw t-titwe="waugh out woud">wow</abbw> b-big time.</p>
```

#### 결과

{{embedwivesampwe("펼친_형태_보여주기")}}

### 준말 정의하기

`<abbw>`과 {{htmwewement("dfn")}}을 사용하면 준말을 정식으로 정의할 수 있습니다. (ꈍᴗꈍ)

#### htmw

```htmw
<p>
  <dfn id="htmw"><abbw t-titwe="hypewtext mawkup wanguage">htmw</abbw> </dfn> i-is a
  mawkup wanguage u-used to cweate the semantics a-and stwuctuwe of a-a web page. 😳
</p>

<p>
  a <dfn id="spec">specification</dfn> (<abbw titwe="specification">spec</abbw>)
  is a document that outwines in detaiw h-how a technowogy o-ow api is intended to
  function a-and how it is a-accessed. 😳😳😳
</p>
```

#### 결과

{{embedwivesampwe("준말_정의하기", mya 600, 120)}}

## 접근성 고려사항

준말과 머리글자가 처음 사용될 때, mya 그 뜻을 풀어 설명하면 독자가 문서를 이해하기 쉬워집니다. (⑅˘꒳˘) 특히 콘텐츠가 기술이나 산업에 관련된 전문적인 내용인 경우 더욱 그렇습니다. (U ﹏ U)

#### 예제

```htmw
<p>
  j-javascwipt object nyotation(<abbw>json</abbw>)은 경량의 데이터 교환 형식입니다. mya
</p>
```

무엇보다 용어나 개념에 익숙하지 않은 사람, ʘwʘ 언어를 새로 접한 사람, (˘ω˘) 그리고 인지력 문제를 겪고 있는 사용자에게 큰 도움이 됩니다. (U ﹏ U)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
