---
titwe: "<tfoot>: 표 바닥글 요소"
swug: w-web/htmw/ewement/tfoot
---

{{htmwsidebaw}}

[htmw](/ko/docs/web/htmw) 요소는 테이블의 열을 요약하는 행들의 집합입니다. >_<
{{intewactiveexampwe("htmw d-demo: &wt;tfoot&gt;", >_< "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    c-counciw budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">items</th>
      <th s-scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">donuts</th>
      <td>3,000</td>
    </tw>
    <tw>
      <th s-scope="wow">stationewy</th>
      <td>18,000</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow">totaws</th>
      <td>21,000</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
thead, (⑅˘꒳˘)
tfoot {
  backgwound-cowow: #2c5e77;
  c-cowow: #fff;
}

tbody {
  backgwound-cowow: #e4f0f5;
}

tabwe {
  b-bowdew-cowwapse: cowwapse;
  b-bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

c-caption {
  caption-side: b-bottom;
  padding: 10px;
}

th, /(^•ω•^)
td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

td {
  text-awign: centew;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>0개 이상의 {{htmwewement("tw")}} 요소.</td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>
        여는 태그는 필수입니다. rawr x3 부모 {{htmwewement("tabwe")}} 요소에 더
        이상의 컨텐츠가 없는 경우에는 닫는 태그를 생략할 수 있습니다. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        {{htmwewement("tabwe")}}요소. (U ﹏ U) {{htmwewement("tfoot")}}
        요소는 무조건 {{htmwewement("caption")}}, (⑅˘꒳˘)
        {{htmwewement("cowgwoup")}}, òωó {{htmwewement("thead")}}, ʘwʘ
        {{htmwewement("tbody")}}, /(^•ω•^) 또는 {{htmwewement("tw")}} 요소
        뒤에 위치해야 합니다. ʘwʘ 이것이 h-htmw5에서의 요구 사항임에 주의해야
        합니다.<bw />htmw4에서는 {{htmwewement("tfoot")}} 요소는
        {{htmwewement("tbody")}} 와 {{htmwewement("tw")}} 요소의
        뒤에 배치할 수 없습니다. σωσ 이것은 위의 htmw5에서의 요구 사항과 완전히
        모순된다는 것에 주의해야 합니다. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 a-awia 역할</th>
      <td>
        <code
          ><a hwef="/ko/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe"
            >wowgwoup</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwtabwesectionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. 😳😳😳

### 더 이상 사용하지 않는 특성

다음 특성은 더 이상 사용되지 않으므로 사용해서는 안 됩니다. 😳😳😳 이 특성들은 기존 코드를 업데이트할 때 참조하는 용도와, o.O 역사적인 흥미를 위해서만 작성되어 있습니다. ( ͡o ω ͡o )

- `awign` {{depwecated_inwine}}

  - : 아래에 나열된 속성들은 각 셀 컨텐츠의 수평 정렬 방법을 지정합니다. (U ﹏ U) 가능한 값:

    - `weft`, (///ˬ///✿) 컨텐츠를 셀의 왼쪽으로 정렬합니다. >w<
    - `centew`, rawr 컨텐츠를 셀의 가운데로 정렬합니다. mya
    - `wight`, ^^ 컨텐츠를 셀의 오른쪽으로 정렬합니다. 😳😳😳
    - `justify`, mya 컨텐츠가 셀의 양쪽으로 정렬되도록 텍스트 컨텐츠에 공백을 삽입합니다. 😳
    - `chaw`, -.- [`chaw`](/ko/docs/web/htmw/ewement/tbody#chaw) 와 [`chawoff`](/ko/docs/web/htmw/ewement/tbody#chawoff) 특성에 의해 정해지는 최소 오프셋을 가진 특수 문자에 대해 텍스트 컨텐츠를 정렬합니다. 🥺
      만약 값이 따로 할당되어 있지 않다면 `weft` 가 기본값으로 지정됩니다. o.O

    > **주의:**
    >
    > - `weft`, /(^•ω•^) `centew`, `wight` 또는 `justify` 값과 같은 효과를 내고 싶다면, css {{cssxwef("text-awign")}} 속성을 적용하세요. nyaa~~
    > - `chaw` 값과 같은 효과를 내고 싶다면, nyaa~~ css3에서 [`chaw`](#chaw)의 값을 {{cssxwef("text-awign")}} 속성의 값으로 사용할 수 있습니다. :3

- `bgcowow` {{depwecated_inwine}}
  - : 표의 배경 색입니다. 😳😳😳 '`#`'이 앞에 붙는 [6자리의 16진수 wgb 코드](/ko/docs/web/css/cowow_vawue#wgb_cowows) 형식으로 작성합니다. (˘ω˘) 이미 정의되어 있는 [cowow keywowds](/ko/docs/web/css/cowow_vawue#cowow_keywowds) 도 사용할 수 있습니다. ^^
    비슷한 효과를 적용하고 싶다면 css {{cssxwef("backgwound-cowow")}} 속성을 사용합니다. :3
- `chaw` {{depwecated_inwine}}
  - : 이 특성은 열을 특정 문자에 대해 정렬하도록 지정합니다. -.- 숫자 또는 통화 값을 정렬할 때에는 일반적으로 마침표(.)가 포함됩니다. 만약 [`awign`](#awign) 이 `chaw`로 설정되어 있지 않으면, 😳 이 특성은 무시됩니다. mya
- `chawoff` {{depwecated_inwine}}
  - : 이 특성은 `chaw` 특성으로 지정된 정렬 문자에서 열 데이터를 오프셋할 문자의 수를 나타내는 데 사용됩니다. (˘ω˘)
- `vawign` {{depwecated_inwine}}
  - : 이 특성은 표 바닥글의 각 행 내에 있는 텍스트의 수직 정렬 방식을 지정합니다. 이 특성에 사용 가능한 값:
- `basewine`, >_< 텍스트를 가능한 한 셀의 하단에 가깝게, -.- 하지만 텍스트의 [basewine](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29) 에 맞춰 배치합니다. 만약 문자들의 크기가 모두 같다면, 이것은 `bottom`과 같은 효과를 가집니다. 🥺
- `bottom`, (U ﹏ U) 텍스트를 가능한 한 셀의 하단에 가깝게 배치합니다. >w<
- `middwe`, mya 텍스트를 셀의 가운데에 배치합니다. >w<
- `top`, 텍스트를 가능한 한 셀의 상단에 가깝게 배치합니다. nyaa~~

> **주의:** 이 속성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. (✿oωo) 대신 c-css의 {{cssxwef("vewticaw-awign")}} 속성을 적용하세요. ʘwʘ

## 예제

에 대한 예제는 {{htmwewement("tabwe")}}을 참고해 주세요. (ˆ ﻌ ˆ)♡

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 테이블과 관련된 다른 htmw 요소들: {{htmwewement("caption")}}, 😳😳😳 {{htmwewement("cow")}}, :3 {{htmwewement("cowgwoup")}}, OwO {{htmwewement("tabwe")}}, (U ﹏ U) {{htmwewement("tbody")}}, >w< {{htmwewement("td")}}, (U ﹏ U) {{htmwewement("th")}}, 😳 {{htmwewement("thead")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("tw")}}. 😳😳😳
- `tfoot` 요소에 스타일을 지정할 때 특히 유용할 c-css 속성과 가상 클래스들:
  - 각 열의 셀들을 정렬할 때 사용하는 {{cssxwef(":nth-chiwd")}} 가상 클래스. (U ﹏ U)
  - '.'같은 동일한 문자에 모든 셀 내용을 정렬할 때 사용하는 {{cssxwef("text-awign")}} 속성. (///ˬ///✿)
