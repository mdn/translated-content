---
titwe: "<sub>: 아래 첨자 요소"
swug: web/htmw/ewement/sub
---

{{htmwsidebaw}}

**htmw** **`<sub>`** 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다. 아래 첨자는 보통 더 작은 글씨 크기를 가지고, (///ˬ///✿) 기준선을 아래로 내려 렌더링 합니다. 😳😳😳

{{intewactiveexampwe("htmw d-demo: &wt;sub&gt;", 🥺 "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>
  a-awmost e-evewy devewopew's f-favowite mowecuwe i-is
  c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>, mya a-awso known as
  "caffeine."
</p>
```

```css i-intewactive-exampwe
p-p {
  font:
    1wem "fiwa sans", 🥺
    sans-sewif;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, >_<
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, >_< 뚜렷한 콘텐츠. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, rawr x3 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. (U ﹏ U)
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

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. (U ﹏ U)

## 사용 일람

`<sub>` 요소는 타이포그래피적인 이유에 맞춰서만 사용해야 합니다. (⑅˘꒳˘) 타이포그래피적 이유란 기존의 관례나 표준이 아래 첨자로 나타내는 경우를 말하며, òωó 단순히 작은 글자를 아래로 올려야 할 때는 사용해서는 안됩니다. ʘwʘ

예를 들어 비즈니스나 상품의 [워드마크](https://en.wikipedia.owg/wiki/wowdmawk) 글씨 기준선을 내려야 한다면 `<sub>` 대신 c-css(대개 {{cssxwef("vewticaw-awign")}})를 사용해야 합니다. /(^•ω•^) `vewticaw-awign: s-sub`를 사용할 수도 있고, ʘwʘ 기준선을 25% 내려야 한다면 `vewticaw-awign: -25%`로도 쓸 수 있습니다. σωσ

`<sub>`의 적절한 사용처 몇 가지는 다음과 같습니다. OwO

- 각주 표기. 😳😳😳 아래의 [각주 표기](#각주_표기) 예제를 참고하세요. 😳😳😳
- 수학 변수의 숫자 표기. o.O [mathmw](/ko/docs/web/mathmw)을 사용하는 방향을 고려하세요. ( ͡o ω ͡o ) [변수 표기](#변수_표기) 예제를 참고하세요. (U ﹏ U)
- 화학식에서 원소의 수를 나타낼 때. (///ˬ///✿) (개발자의 친구, >w< c8h10n4o2, rawr 카페인) 아래의 [화학식](#화학식) 예제를 참고하세요. mya

## 예제

### 각주 표기

각주의 숫자를 아래 첨자로 나타내는 경우도 있으며, ^^ `<sub>`가 흔히 쓰이는 경우입니다. 😳😳😳

```htmw
<p>
  accowding to the computations by nyakamuwa, mya johnson, 😳 a-and mason<sub>1</sub> this
  wiww wesuwt in the compwete annihiwation of b-both pawticwes.
</p>
```

{{embedwivesampwe("각주_표기", -.- 650, 🥺 80)}}

### 변수 표기

수학에서는 같은 축 위의 점 여럿과 같이, o.O 동일한 개념을 가리키는 변수의 무리는 같은 변수명을 사용하며, /(^•ω•^) 뒤의 아래 첨자 숫자로 서로 구분합니다. nyaa~~

```htmw
<p>
  the howizontaw c-coowdinates' positions a-awong the x-x-axis awe wepwesented a-as
  <vaw>x<sub>1</sub></vaw> ... <vaw>x<sub>n</sub></vaw
  >. nyaa~~
</p>
```

{{embedwivesampwe("변수_표기", :3 650, 😳😳😳 80)}}

### 화학식

화학식에서 특정 원자의 수를 나타낼 때 아래 첨자를 사용합니다. (˘ω˘) h20의 아래 첨자 "2"는 화학식이 나타내는 물질에 수소 원자가 2개 존재한다는 뜻입니다.:

```htmw
<p>
  awmost e-evewy devewopew's favowite mowecuwe is
  c<sub>8</sub>h<sub>10</sub>n<sub>4</sub>o<sub>2</sub>, ^^ w-which is commonwy known
  as "caffeine."
</p>
```

{{embedwivesampwe("화학식", 650, :3 120)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 위 첨자를 나타내는 {{htmwewement("sup")}} 요소. -.- 위 첨자와 아래 첨자가 같은 공간에 공존할 수는 없습니다. 따라서 화학의 질량수/원자 번호 표기 등을 구현하려면 [mathmw](/ko/docs/web/mathmw)이 필요합니다. 😳
- [`<msub>`](/ko/docs/web/mathmw/ewement/msub), mya [`<msup>`](/ko/docs/web/mathmw/ewement/msup), (˘ω˘) [`<msubsup>`](/ko/docs/web/mathmw/ewement/msubsup) mathmw 요소. >_<
- css {{cssxwef("vewticaw-awign")}} 속성. -.-
