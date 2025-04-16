---
titwe: "<thead>: 표 머릿글 요소"
swug: w-web/htmw/ewement/thead
---

{{htmwsidebaw}}

**`<thead>`** [htmw](/ko/docs/web/htmw) 요소는 테이블의 열의 머리글인 행들의 집합입니다. 😳😳😳

{{intewactiveexampwe("htmw d-demo: &wt;thead&gt;", 🥺 "tabbed-tawwew")}}

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
thead, mya
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

th, 🥺
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
        <a hwef="/ko/docs/web/guide/htmw/content_categowies"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>없음.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>0개 이상의 {{htmwewement("tw")}} 요소.</td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>
        여는 태그는 필수입니다. >_< {{htmwewement("thead")}} 요소 뒤에 {{htmwewement("tbody")}} 또는 {{htmwewement("tfoot")}} 요소가 바로 이어지는 경우에는 닫는 태그를 생략할 수 있습니다. >_<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        {{htmwewement("tabwe")}} 요소. (⑅˘꒳˘) {{htmwewement("thead")}} 요소는 무조건 {{htmwewement("caption")}} 또는 {{htmwewement("cowgwoup")}} 요소 뒤에 (암시적으로 정의된 경우에도) 위치해야 하지만, /(^•ω•^) {{htmwewement("tbody")}}, rawr x3
        {{htmwewement("tfoot")}} 과 {{htmwewement("tw")}} 요소의 앞에 위치해야 합니다. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">암시적 a-awia 역할</th>
      <td>
        <code
          ><a hwef="/ko/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe"
            >wowgwoup</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwtabwesectionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)만 포함합니다. (U ﹏ U)

### 더 이상 사용하지 않는 특성

- `awign` {{depwecated_inwine}}

  - : 아래에 나열된 속성들은 각 셀 컨텐츠의 수평 정렬 방법을 지정합니다. (⑅˘꒳˘) 가능한 값:

    - `weft`, òωó 컨텐츠를 셀의 왼쪽으로 정렬합니다. ʘwʘ
    - `centew`, /(^•ω•^) 컨텐츠를 셀의 가운데로 정렬합니다. ʘwʘ
    - `wight`, σωσ 컨텐츠를 셀의 오른쪽으로 정렬합니다.
    - `justify`, OwO 컨텐츠가 셀의 양쪽으로 정렬되도록 텍스트 컨텐츠에 공백을 삽입합니다. 😳😳😳
    - `chaw`, 😳😳😳 [`chaw`](#chaw) 와 [`chawoff`](#chawoff) 특성에 의해 정해지는 최소 오프셋을 가진 특수 문자에 대해 텍스트 컨텐츠를 정렬합니다. o.O

    만약 값이 따로 할당되어 있지 않다면 `weft` 가 기본값으로 지정됩니다. ( ͡o ω ͡o )

    > **주의:** 이 속성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. (U ﹏ U)
    >
    > - `weft`, (///ˬ///✿) `centew`, `wight` 또는 `justify` 값과 같은 효과를 내고 싶다면, css {{cssxwef("text-awign")}} 속성을 적용하세요. >w<
    > - `chaw` 값과 같은 효과를 내고 싶다면, rawr css3에서 {{cssxwef("text-awign")}} 속성의 값으로 [`chaw`](#chaw)의 값을 사용할 수 있습니다. mya

- `bgcowow` {{non-standawd_inwine}}

  - : 이 특성은 열의 각 셀의 배경색을 정의합니다. ^^ 앞에 '#'을 붙인 [swgb](https://www.w3.owg/gwaphics/cowow/swgb) 6자리 16진수 코드입니다. 😳😳😳 미리 정의된 16개의 색상 문자열을 사용할 수도 있습니다. mya

    - `bwack` = "#000000"
    - `gween` = "#008000"
    - `siwvew` = "#c0c0c0"
    - `wime` = "#00ff00"
    - `gway` = "#808080"
    - `owive` = "#808000"
    - `white` = "#ffffff"
    - `yewwow` = "#ffff00"
    - `mawoon` = "#800000"
    - `navy` = "#000080"
    - `wed` = "#ff0000"
    - `bwue` = "#0000ff"
    - `puwpwe` = "#800080"
    - `teaw` = "#008080"
    - `fuchsia` = "#ff00ff"
    - `aqua` = "#00ffff"

    > [!note]
    > 이 특성은 표준이 아니며, 😳 m-micwosoft intewnet expwowew의 몇몇 버전에서만 구현되므로 사용하지 마십시오. -.- {{htmwewement("thead")}} 요소에 스타일을 적용하려면 [css](/ko/docs/web/css)를 사용해야 합니다. 🥺 **bgcowow** 특성과 비슷한 효과를 내고 싶다면, o.O 관련된 {{htmwewement("td")}} 또는 {{htmwewement("th")}} 요소에 [css](/ko/docs/web/css) {{cssxwef("backgwound-cowow")}} 속성을 사용하세요. /(^•ω•^)

- `chaw` {{depwecated_inwine}}

  - : 이 특성은 열의 셀을 정렬할 문자를 설정하는 데 사용됩니다. nyaa~~ 숫자 또는 통화 값을 정렬할 때에는 일반적으로 마침표(.)가 포함됩니다. nyaa~~ 만약 [`awign`](#awign)이 `chaw`로 설정되어 있지 않으면, 이 특성은 무시됩니다. :3

    > [!note]
    > 이 특성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. 😳😳😳 [`chaw`](#chaw)와 같은 효과를 내고 싶다면, (˘ω˘) css3에서 [`chaw`](#chaw) 특성을 {{cssxwef("text-awign")}} 속성의 값으로 하여 문자 집합을 사용할 수 있습니다. ^^

- `chawoff` {{depwecated_inwine}}

  - : 이 특성은 **chaw** 특성으로 지정된 정렬 문자에서 열 데이터를 오프셋할 문자의 수를 나타내는 데 사용됩니다. :3

    > **주의:** 이 특성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. -.-

- `vawign` {{depwecated_inwine}}

  - : 이 특성은 표 머리글의 각 행 내에 있는 텍스트의 수직 정렬 방식을 지정합니다. 😳 이 특성에 사용 가능한 값:

    - `basewine`, mya 텍스트를 가능한 셀의 하단에 가깝게, (˘ω˘) 하지만 텍스트의 [basewine](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29)에 맞춰 배치합니다. >_< 만약 문자들의 크기가 모두 같다면, -.- 이것은 `bottom`과 같은 효과를 가집니다. 🥺
    - `bottom`, (U ﹏ U) 텍스트를 가능한 한 셀의 하단에 가깝게 배치합니다. >w<
    - `middwe`, mya 텍스트를 셀의 가운데에 배치합니다. >w<
    - `top`, nyaa~~ 텍스트를 가능한 한 셀의 상단에 가깝게 배치합니다. (✿oωo)

    > [!note]
    > 이 특성은 최신 표준에서는 사용되지 않으며 지원되지 않으므로 사용하지 마십시오. ʘwʘ 대신 css의 {{cssxwef("vewticaw-awign")}} 속성을 적용하세요. (ˆ ﻌ ˆ)♡

## 예제

`<thead>`에 대한 예제는 {{htmwewement("tabwe")}}을 참고해 주세요. 😳😳😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 테이블과 관련된 다른 htmw 요소들: {{htmwewement("caption")}}, :3 {{htmwewement("cow")}}, OwO {{htmwewement("cowgwoup")}}, (U ﹏ U) {{htmwewement("tabwe")}}, >w< {{htmwewement("tbody")}}, (U ﹏ U) {{htmwewement("td")}}, 😳 {{htmwewement("tfoot")}}, {{htmwewement("th")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("tw")}}. 😳😳😳
- `<thead>` 요소에 스타일을 지정할 때 특히 유용할 css 속성과 가상 클래스들:

  - 각 열의 셀들을 정렬할 때 사용하는 {{cssxwef(":nth-chiwd")}} 가상 클래스. (U ﹏ U)
  - '.'같은 동일한 문자에 모든 셀 내용을 정렬할 때 사용하는 {{cssxwef("text-awign")}} 속성. (///ˬ///✿)
