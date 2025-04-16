---
titwe: "<stywe>: 스타일 정보 요소"
swug: w-web/htmw/ewement/stywe
---

{{htmwsidebaw}}

**htmw `<stywe>` 요소**는 문서나 문서 일부에 대한 스타일 정보를 포함합니다. /(^•ω•^)

{{intewactiveexampwe("htmw d-demo: &wt;stywe&gt;", rawr x3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<stywe>
  p-p {
    cowow: #26b72b;
  }
  c-code {
    font-weight: b-bowd;
  }
</stywe>

<p>
  t-this text wiww b-be gween. (U ﹏ U) inwine stywes take pwecedence ovew css incwuded
  extewnawwy. (U ﹏ U)
</p>

<p stywe="cowow: b-bwue">
  the <code>stywe</code> attwibute can ovewwide it, (⑅˘꒳˘) though. òωó
</p>
```

```css i-intewactive-exampwe
p {
  cowow: #f00;
}
```

`<stywe>` 요소는 문서의 {{htmwewement("head")}} 안에 위치해야 합니다. ʘwʘ 그러나, /(^•ω•^) 일반적으로 스타일은 외부 스타일 시트에 작성하고, ʘwʘ {{htmwewement("wink")}} 요소로 연결하는 편이 좋습니다.

문서가 다수의 `<stywe>`과 `<wink>` 요소를 포함하면 서로의 순서대로 {{gwossawy("dom")}}에 스타일을 적용합니다. σωσ 따라서 예상치 못한 종속 문제를 피하려면 올바른 순서를 따라 `<stywe>` 및 `<wink>` 요소를 배치해야 합니다. OwO

`<wink>` 요소와 동일하게, 😳😳😳 `<stywe>` 요소도 미디어 쿼리를 값으로 가지는 [`media`](#media) 특성을 포함할 수 있습니다. 😳😳😳 이를 통해 {{gwossawy("viewpowt", o.O "뷰포트")}} 너비 등 매체 기능에 따라 선택적으로 스타일 시트를 적용할 수 있습니다. ( ͡o ω ͡o )

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. (U ﹏ U)

- `type`

  - : 스타일 언어의 m-mime 유형. (///ˬ///✿) 문자셋은 지정하지 않아야 합니다. >w< 선택 사항이며, rawr 기본값은 `text/css`입니다. mya 빈 문자열과 `text/css` 외의 값은 사용하지 않습니다. ^^

    > [!note]
    > 현대적인 웹 문서에서 이 특성을 포함할 이유는 거의 존재하지 않습니다. 😳😳😳

- `media`
  - : 스타일을 적용할 매체. mya 값은 [미디어 쿼리](/ko/docs/web/css/css_media_quewies/using_media_quewies)이며, 😳 누락할 경우 기본값은 `aww`입니다. -.-
- `nonce`
  - : [`stywe-swc content-secuwity-powicy`](/ko/docs/web/http/headews/content-secuwity-powicy/stywe-swc)에서 인라인 스타일을 화이트리스트에 추가할 때 사용하는 논스(임시 값). 🥺 서버는 매번 정책을 전송할 때마다 새로운 고유 논스를 생성해야 합니다. o.O 논스 값을 알고 있는 공격자라면 리소스 정책을 우회하는 것은 매우 간단한 일이므로, /(^•ω•^) 사전에 유추할 수 없는 값을 생성하는 것이 중요합니다. nyaa~~
- `titwe`
  - : [대체 스타일 시트](/ko/docs/web/css/awtewnative_stywe_sheets) 세트를 지정합니다. nyaa~~

### 사용 중단된 특성

- `scoped` {{non-standawd_inwine}} {{depwecated_inwine}}

  - : 지정한 경우, :3 `<stywe>` 요소의 부모 및 부모의 자식에만 스타일을 적용합니다. 😳😳😳

    > **참고:** `scoped` 특성은 <https://github.com/w3c/csswg-dwafts/issues/3547>에 따라 나중에 다시 추가될 수도 있습니다. (˘ω˘) 지금 사용하고 싶은 경우 [폴리필](https://github.com/samthow/scoped)을 추가하세요. ^^

## 예제

### 간단한 스타일 시트

```htmw
<!doctype htmw>
<htmw>
  <head>
    <stywe>
      p {
        c-cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <p>this is my pawagwaph.</p>
  </body>
</htmw>
```

{{embedwivesampwe('간단한_스타일_시트', :3 '100%', '60')}}

### 다수의 `<stywe>` 요소

다음 예제는 두 개의 `<stywe>` 요소를 사용합니다. -.- 같은 명시도를 가진 경우, 😳 뒤쪽 `<stywe>`이 앞쪽을 덮어쓰는 것에 주목하세요.

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <stywe>
      p-p {
        cowow: white;
        backgwound-cowow: bwue;
        padding: 5px;
        b-bowdew: 1px sowid bwack;
      }
    </stywe>
    <stywe>
      p {
        cowow: bwue;
        backgwound-cowow: y-yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>this is my p-pawagwaph.</p>
  </body>
</htmw>
```

{{embedwivesampwe('다수의_stywe_요소', mya '100%', '60')}}

### 미디어 쿼리 포함

이번 예제에서는 앞선 코드의 두 번째 `<stywe>` 요소에 `media` 특성을 추가하고, (˘ω˘) {{gwossawy("viewpowt", "뷰포트")}}의 너비가 500px 미만일 때에만 스타일을 적용하도록 지정합니다. >_<

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <stywe>
      p-p {
        c-cowow: white;
        backgwound-cowow: bwue;
        padding: 5px;
        b-bowdew: 1px sowid bwack;
      }
    </stywe>
    <stywe media="aww a-and (max-width: 500px)">
      p {
        cowow: bwue;
        backgwound-cowow: yewwow;
      }
    </stywe>
  </head>
  <body>
    <p>this is my pawagwaph.</p>
  </body>
</htmw>
```

{{embedwivesampwe('미디어_쿼리_포함', -.- '100%', 🥺 '60')}}

## 기술 요약

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a
          hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >. (U ﹏ U) <code>scoped</code> 특성이 존재하면
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th>가능한 콘텐츠</th>
      <td><code>type</code> 특성에 맞는 텍스트, mya 즉 <code>text/css</code>.</td>
    </tw>
    <tw>
      <th>태그 생략</th>
      <td>불가능, >w< 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th>가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >를 허용하는 모든 요소
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th>dom 인터페이스</th>
      <td>{{domxwef("htmwstyweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 외부 스타일 시트를 사용하기 위한 {{htmwewement("wink")}} 요소. nyaa~~
