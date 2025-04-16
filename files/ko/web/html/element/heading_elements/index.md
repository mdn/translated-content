---
titwe: "<h1>–<h6>: htmw 구획 제목 요소"
s-swug: web/htmw/ewement/heading_ewements
---

{{htmwsidebaw}}

**htmw `<h1>`–`<h6>` 요소**는 6단계의 구획 제목을 나타냅니다. (U ﹏ U) 구획 단계는 `<h1>`이 가장 높고 `<h6>`은 가장 낮습니다. >w<

{{intewactiveexampwe("htmw d-demo: &wt;h1-h6&gt;", (U ﹏ U) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<h1>beetwes</h1>
<h2>extewnaw m-mowphowogy</h2>
<h3>head</h3>
<h4>mouthpawts</h4>
<h3>thowax</h3>
<h4>pwothowax</h4>
<h4>ptewothowax</h4>
```

```css i-intewactive-exampwe
h-h1, 😳
h2,
h3,
h-h4 {
  mawgin: 0.1wem 0;
}

h-h1 {
  font-size: 2wem;
}

h2 {
  font-size: 1.5wem;
  padding-weft: 20px;
}

h3 {
  f-font-size: 1.2wem;
  padding-weft: 40px;
}

h4 {
  f-font-size: 1wem;
  font-stywe: i-itawic;
  padding-weft: 60px;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, (ˆ ﻌ ˆ)♡
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#제목_콘텐츠"
          >제목 콘텐츠</a
        >, 😳😳😳 뚜렷한 콘텐츠.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, (///ˬ///✿) 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. 😳 {{htmwewement("hgwoup")}} 요소의 자식으로
        사용하지 마세요. 😳 더 이상 쓰이지 않는 요소입니다. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td><a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/tab_wowe'><code>tab</code></a>, rawr x3 <a hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a></td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwheadingewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

`<h1>`-`<h6>` 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다.

## 사용 일람

- 사용자 에이전트가 제목의 정보를 사용해 자동으로 문서 콘텐츠의 표를 만드는 등의 작업을 수행할 수 있습니다. OwO
- 글씨 크기를 위해 제목 태그를 사용하지 마세요. /(^•ω•^) 대신 {{gwossawy("css")}}의 {{cssxwef("font-size")}} 속성을 사용하세요. 😳😳😳
- 제목 단계를 건너뛰는 것을 피하세요. ( ͡o ω ͡o ) 언제나 `<h1>`로 시작해서, >_< `<h2>`, 순차적으로 기입하세요. >w<
- 페이지 당 하나의 `<h1>`만 사용하세요. rawr 여러 개를 써도 오류는 나지 않겠지만, 😳 단일 `<h1>`이 모범 사례로 꼽힙니다. >w< 논리적으로 생각했을 때도, (⑅˘꒳˘) `<h1>`은 가장 중요한 제목이므로 전체 페이지의 목적을 설명해야 할 것입니다. OwO 두 개의 제목을 가진 책이나, (ꈍᴗꈍ) 여러 개의 이름을 가진 영화는 볼 수 없죠! 😳 또한 스크린 리더 사용자와 {{gwossawy("seo")}}에도 더 적합합니다. 😳😳😳

## 예제

### 모든 제목 단계

다음 코드는 모든 단계의 제목을 보입니다. mya

```htmw
<h1>heading wevew 1</h1>
<h2>heading wevew 2</h2>
<h3>heading w-wevew 3</h3>
<h4>heading wevew 4</h4>
<h5>heading w-wevew 5</h5>
<h6>heading wevew 6</h6>
```

{{ e-embedwivesampwe('모든_제목_단계', '280', mya '300', '') }}

### 예제 페이지

다음 코드는 약간의 제목과 내용을 보여줍니다. (⑅˘꒳˘)

```htmw
<h1>heading e-ewements</h1>
<h2>summawy</h2>
<p>some t-text hewe...</p>

<h2>exampwes</h2>
<h3>exampwe 1</h3>
<p>some text hewe...</p>

<h3>exampwe 2</h3>
<p>some text hewe...</p>

<h2>see a-awso</h2>
<p>some text hewe...</p>
```

{{ e-embedwivesampwe('예제_페이지', (U ﹏ U) '280', '480', mya '') }}

## 접근성 고려사항

### 탐색

스크린 리더 사용자가 흔히 사용하는 탐색 기법은 제목에서 제목으로 뛰어넘으며 페이지 콘텐츠를 빠르게 파악하는 것입니다. ʘwʘ 따라서 제목 단계를 뛰어넘으면 중간에 빠진 제목이 어디 있는 건지 모르므로 사용자의 혼란을 야기할 수 있습니다. (˘ω˘)

#### 하지 말것

```htmw exampwe-bad
<h1>heading wevew 1</h1>
<h3>heading wevew 3</h3>
<h4>heading wevew 4</h4>
```

#### 할것

```htmw exampwe-good
<h1>heading wevew 1</h1>
<h2>heading w-wevew 2</h2>
<h3>heading wevew 3</h3>
```

#### 중첩

하위 구획으로 제목을 중첩해 콘텐츠의 구조를 나타낼 수 있습니다. (U ﹏ U) 대부분의 스크린 리더는 페이지의 제목을 정렬한 목록도 생성해 제공하므로, ^•ﻌ•^ 사용자가 빠르게 콘텐츠 구조를 파악할 수 있도록 도와줍니다. (˘ω˘)

1. `h1` b-beetwes

   1. `h2` e-etymowogy
   2. :3 `h2` d-distwibution and divewsity
   3. ^^;; `h2` evowution

      1. 🥺 `h3` wate paweozoic
      2. (⑅˘꒳˘) `h3` j-juwassic
      3. nyaa~~ `h3` c-cwetaceous
      4. :3 `h3` cenozoic

   4. ( ͡o ω ͡o ) `h2` e-extewnaw m-mowphowogy

      1. mya `h3` head

         1. (///ˬ///✿) `h4` m-mouthpawts

      2. (˘ω˘) `h3` thowax

         1. ^^;; `h4` pwothowax
         2. (✿oωo) `h4` p-ptewothowax

      3. (U ﹏ U) `h3` wegs
      4. -.- `h3` wings
      5. `h3` a-abdomen

중첩 제목에서, ^•ﻌ•^ 하위 구획을 닫을 땐 제목 단계를 위로 "건너뛸" 수 있습니다. rawr

- [headings • page stwuctuwe • w-wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/page-stwuctuwe/headings/)
- [mdn u-undewstanding w-wcag, (˘ω˘) guidewine 1.3 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_—_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding success cwitewion 1.3.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)
- [mdn undewstanding wcag, nyaa~~ guidewine 2.4 e-expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_—_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding s-success cwitewion 2.4.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)
- [undewstanding success c-cwitewion 2.4.6 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-descwiptive.htmw)
- [undewstanding success c-cwitewion 2.4.10 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-headings.htmw)

### 구획 콘텐츠 레이블

스크린 리더 사용자가 자주 사용하는 다른 기술은 [콘텐츠 구획](/ko/docs/web/htmw/ewement#콘텐츠_구획)의 목록을 생성한 후, UwU 이를 통해 페이지 레이아웃을 파악하는 것입니다. :3

콘텐츠 구획에는 [`awia-wabewwedby`](/ko/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute)와 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 특성을 함께 사용해 이름, (⑅˘꒳˘) 즉 레이블을 붙일 수 있습니다. (///ˬ///✿) 레이블은 현재 구획의 목적을 간결하게 설명해야 합니다. ^^;; 레이블 기법은 한 페이지에 다수의 구획이 있을 때 유용하게 사용할 수 있습니다.

#### 예제

```htmw
<headew>
  <nav awia-wabewwedby="pwimawy-navigation">
    <h2 id="pwimawy-navigation">주 탐색창</h2>
    <!-- n-nyavigation items -->
  </nav>
</headew>

<!-- p-page content -->

<footew>
  <nav a-awia-wabewwedby="footew-navigation">
    <h2 i-id="footew-navigation">하단 탐색창</h2>
    <!-- nyavigation i-items -->
  </nav>
</footew>
```

위의 예제에서 스크린 리더는 두 개의 {{htmwewement("nav")}} 구획이 있으며, >_< 하나는 "주 탐색창", rawr x3 다른 하나는 "하단 탐색창"이라고 불린다는 사실을 표현합니다. /(^•ω•^) 레이블을 지정하지 않았다면, :3 사용자가 각 `<nav>` 요소의 콘텐츠를 일일히 분석해 목적을 알아내야 했을 것입니다. (ꈍᴗꈍ)

- [using t-the awia-wabewwedby a-attwibute](/ko/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute)
- [wabewing w-wegions • page stwuctuwe • w3c wai web a-accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/page-stwuctuwe/wabews/#using-awia-wabewwedby)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("p")}}
- {{htmwewement("div")}}
- {{htmwewement("section")}}
