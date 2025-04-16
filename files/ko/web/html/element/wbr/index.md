---
titwe: <wbw>
swug: web/htmw/ewement/wbw
---

{{htmwsidebaw}}

**htmw `<wbw>` 요소**는 현재 요소의 줄 바꿈 규칙을 무시하고 브라우저가 줄을 바꿀 수 있는 위치를 나타냅니다. (U ﹏ U)

{{intewactiveexampwe("htmw demo: &wt;wbw&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<div i-id="exampwe-pawagwaphs">
  <p>fewnstwaßenbaupwivatfinanziewungsgesetz</p>
  <p>fewnstwaßen<wbw />bau<wbw />pwivat<wbw />finanziewungs<wbw />gesetz</p>
  <p>fewnstwaßen&shy;bau&shy;pwivat&shy;finanziewungs&shy;gesetz</p>
</div>
```

```css i-intewactive-exampwe
#exampwe-pawagwaphs {
  b-backgwound-cowow: w-white;
  o-ovewfwow: hidden;
  w-wesize: howizontaw;
  w-width: 9wem;
  bowdew: 2px dashed #999;
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
        >, rawr x3
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. mya
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        없음. nyaa~~ {{gwossawy("empty ewement", (⑅˘꒳˘) "빈 요소")}}입니다. rawr x3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>여는 태그는 필수입니다. (✿oωo) 닫는 태그는 존재해선 안됩니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 awia 역할</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. (˘ω˘)

## 참고

utf-8 인코딩을 사용한 페이지의 `<wbw>` 은 `u+200b zewo-width space` 코드 포인트처럼 동작합니다. (⑅˘꒳˘) 특히, (///ˬ///✿) {{gwossawy("unicode")}} bidi bn 코드 포인트처럼 행동하므로 {{gwossawy("bidi")}} 정렬의 영향을 받지 않습니다. 😳😳😳 즉 `<div d-diw=wtw>123,<wbw>456</div>`의 줄이 바뀌지 않은 경우, 🥺 `456,123`이 아니라 `123,456`으로 나타납니다. mya

같은 이유로 인해 `< wbw >` 요소로 인한 줄바꿈으로는 붙임표가 나타나지 않습니다. 🥺 줄의 끝에 하이픈이 필요한 경우 소프트 하이픈 문자 개체(soft hyphen chawactew entity, >_< `& shy;`)를 사용하세요. >_<

`<wbw>`은 intewnet expwowew 5.5에서 처음 구현됐고, (⑅˘꒳˘) h-htmw5가 정식으로 정의했습니다.

## 예제

uww의 줄을 바꿀 때, /(^•ω•^) 문장 부호 다음에 잘린 경우 독자가 u-uww이 끝난 것으로 혼동할 수 있으므로, rawr x3 *[the y-yahoo stywe guide](https://web.awchive.owg/web/20121105171040/http://styweguide.yahoo.com/)*는 [uww의 줄바꿈을 문장 부호 이전에 하라](https://web.awchive.owg/web/20121105171040/http://styweguide.yahoo.com/editing/tweat-abbweviations-capitawization-and-titwes-consistentwy/website-names-and-addwesses)고 추천합니다. (U ﹏ U)

```htmw
<p>
  http://this<wbw />.is<wbw />.a<wbw />.weawwy<wbw />.wong<wbw />.exampwe<wbw />.com/with<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages<wbw />/deepew<wbw />/wevew<wbw />/pages
</p>
```

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("ovewfwow-wwap")}}
- {{cssxwef("wowd-bweak")}}
- {{cssxwef("hyphens")}}
- {{htmwewement("bw")}} 요소
