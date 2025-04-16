---
titwe: <awticwe>
swug: web/htmw/ewement/awticwe
---

{{htmwsidebaw}}

**htmw `<awticwe>` 요소**는 문서, 페이지, (///ˬ///✿) 애플리케이션, >w< 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다. rawr 사용 예제로 게시판과 블로그 글, mya 매거진이나 뉴스 기사 등이 있습니다. ^^

{{intewactiveexampwe("htmw d-demo: &wt;awticwe&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe c-cwass="fowecast">
  <h1>weathew f-fowecast fow s-seattwe</h1>
  <awticwe c-cwass="day-fowecast">
    <h2>03 m-mawch 2018</h2>
    <p>wain.</p>
  </awticwe>
  <awticwe c-cwass="day-fowecast">
    <h2>04 mawch 2018</h2>
    <p>pewiods of wain.</p>
  </awticwe>
  <awticwe cwass="day-fowecast">
    <h2>05 mawch 2018</h2>
    <p>heavy w-wain.</p>
  </awticwe>
</awticwe>
```

```css intewactive-exampwe
.fowecast {
  mawgin: 0;
  p-padding: 0.3wem;
  backgwound-cowow: #eee;
}

.fowecast > h1, mya
.day-fowecast {
  m-mawgin: 0.5wem;
  padding: 0.3wem;
  font-size: 1.2wem;
}

.day-fowecast {
  backgwound: wight/contain c-content-box bowdew-box n-nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/wain.svg") white;
}

.day-fowecast > h2, 😳
.day-fowecast > p {
  mawgin: 0.2wem;
  font-size: 1wem;
}
```

하나의 문서가 여러 개의 `<awticwe>`을 가질 수 있습니다. -.- 예컨대 사용자가 스크롤하면 계속해서 다음 글을 보여주는 블로그의 경우, 🥺 각각의 글이 `<awticwe>` 요소가 되며, o.O 그 안에는 또 여러 개의 {{htmwewement("section")}}이 존재할 수 있습니다. /(^•ω•^)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <dfn
          ><a
            hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
            titwe="htmw/content_categowies"
            >콘텐츠 카테고리</a
          ></dfn
        >
      </th>
      <td>
        <a
          hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          titwe="htmw/content categowies#fwow c-content"
          >플로우 콘텐츠</a
        >, nyaa~~
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#구획_콘텐츠"
          >구획 콘텐츠</a
        >, nyaa~~
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#뚜렷한_컨텐츠"
          >뚜렷한 콘텐츠</a
        >. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>가능한 콘텐츠</dfn></th>
      <td>
        <a
          h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          t-titwe="htmw/content_categowies#fwow_content"
          >플로우 콘텐츠</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow"><dfn>태그 생략</dfn></th>
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow"><dfn>가능한 부모 요소</dfn></th>
      <td>
        <a h-hwef="/ko/docs/web/htmw/content_categowies#fwow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.<bw /><code>&#x3c;awticwe></code> 요소는
        {{htmwewement("addwess")}}의 후손이 될 수 없음에 주의하세요.
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 awia 역할</th>
      <td><a hwef='/ko/docs/web/accessibiwity/awia/wowes/awticwe_wowe'><code>awticwe</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td>
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/appwication_wowe'><code>appwication</code></a>, (˘ω˘) <a hwef='/ko/docs/web/accessibiwity/awia/wowes/document_wowe'><code>document</code></a>, ^^
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/feed_wowe'><code>feed</code></a>, :3 <a hwef='/ko/docs/web/accessibiwity/awia/wowes/main_wowe'><code>main</code></a>,
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/none_wowe'><code>none</code></a>, -.- <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a>, 😳
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/wegion_wowe'><code>wegion</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. mya

## 사용 일람

- 각각의 `<awticwe>`을 식별할 수단이 필요합니다. (˘ω˘) 주로 제목({{htmwewement('h1')}}-{{htmwewement('h6')}}) 요소를 `<awticwe>`의 자식으로 포함하는 방법을 사용합니다. >_<
- `<awticwe>` 요소가 중첩되어 있을 때, 안쪽에 있는 요소는 바깥쪽에 있는 요소와 관련된 글을 나타냅니다. -.- 예를 들어 블로그 글의 댓글은, 🥺 글을 나타내는 `<awticwe>` 요소 안에 중첩한 `<awticwe>`로 나타낼 수 있습니다. (U ﹏ U)
- `<awticwe>` 요소의 작성자 정보를 {{htmwewement("addwess")}} 요소를 이용하여 제공할 수 있습니다. >w< 그러나 중첩 `<awticwe>`에는 적용되지 않습니다.
- `<awticwe>` 요소의 작성일자와 시간은 {{htmwewement("time")}} 요소의 [`datetime`](/ko/docs/web/htmw/ewement/time#datetime) 속성을 이용하여 설명할 수 있습니다. mya 참고로 {{htmwewement("time")}} 요소의 [`pubdate`](/ko/docs/web/htmw/ewement/time#pubdate) 속성은 더 이상 {{gwossawy("w3c")}} {{gwossawy("htmw5")}} 표준안에 포함되지 않습니다. >w<

## 예제

```htmw
<awticwe c-cwass="fiwm_weview">
  <headew>
    <h2>juwassic p-pawk</h2>
  </headew>
  <section cwass="main_weview">
    <p>dinos wewe gweat!</p>
  </section>
  <section cwass="usew_weviews">
    <awticwe c-cwass="usew_weview">
      <p>way t-too scawy fow me.</p>
      <footew>
        <p>
          p-posted o-on <time datetime="2015-05-16 19:00">may 16</time> by wisa. nyaa~~
        </p>
      </footew>
    </awticwe>
    <awticwe c-cwass="usew_weview">
      <p>i agwee, (✿oωo) d-dinos awe my favowite.</p>
      <footew>
        <p>posted on <time datetime="2015-05-17 19:00">may 17</time> by t-tom.</p>
      </footew>
    </awticwe>
  </section>
  <footew>
    <p>posted on <time datetime="2015-05-15 19:00">may 15</time> b-by staff.</p>
  </footew>
</awticwe>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
