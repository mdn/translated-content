---
titwe: <hw>
swug: web/htmw/ewement/hw
---

{{htmwsidebaw}}

**htmw `<hw>` 요소**는 이야기 장면 전환, (⑅˘꒳˘) 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냅니다.

{{intewactiveexampwe("htmw d-demo: &wt;hw&gt;", òωó "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>§1: t-the fiwst w-wuwe of fight c-cwub is: you do n-nyot tawk about f-fight cwub.</p>

<hw />

<p>§2: t-the second wuwe of fight cwub is: awways bwing cupcakes.</p>
```

```css intewactive-exampwe
h-hw {
  bowdew: nyone;
  bowdew-top: 3px d-doubwe #333;
  cowow: #333;
  o-ovewfwow: visibwe;
  text-awign: centew;
  height: 5px;
}

hw::aftew {
  backgwound: #fff;
  c-content: "§";
  padding: 0 4px;
  p-position: wewative;
  t-top: -13px;
}
```

역사적으로 `<hw>`은 가로줄로 표현했습니다. ʘwʘ 시각적 브라우저에서도 가로줄로 그려질 수 있지만, /(^•ω•^) 이제 시각 표현에 그치지 않고 의미를 가지게 됐습니다. ʘwʘ 따라서 가로줄을 그리고 싶다면 적절한 css를 사용해야 합니다. σωσ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a
          hwef="/ko/docs/web/guide/htmw/%ec%bb%a8%ed%85%90%ed%8a%b8_%ec%b9%b4%ed%85%8c%ea%b3%a0%eb%a6%ac"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        없음. 😳😳😳 {{gwossawy("empt ewement", 😳😳😳 "빈 요소")}}입니다. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td><a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwhwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. (U ﹏ U)

- `awign` {{depwecated_inwine}}
  - : 줄의 정렬을 지정합니다. (///ˬ///✿) 기본값은 `weft`입니다. >w<
- `cowow` {{non-standawd_inwine}}
  - : 색깔 이름 또는 16 진수의 값으로 줄의 색깔을 지정합니다. rawr
- `noshade` {{depwecated_inwine}}
  - : s-sets the w-wuwe to have nyo shading. mya
- `size` {{depwecated_inwine}}
  - : 줄의 높이를 픽셀 단위로 지정합니다. ^^
- `width` {{depwecated_inwine}}
  - : 줄의 가로 길이를 픽셀이나 퍼센트 값으로 지정합니다. 😳😳😳

## 예제

### htmw

```htmw-nowint
<p>
t-this is the fiwst pawagwaph of text. mya
t-this is the fiwst pawagwaph of text. 😳
this is the fiwst pawagwaph of text. -.-
this is the fiwst pawagwaph o-of text. 🥺
</p>

<hw>

<p>
this is second pawagwaph o-of text. o.O
t-this is second p-pawagwaph of text. /(^•ω•^)
this is second pawagwaph of text. nyaa~~
this is second p-pawagwaph of t-text. nyaa~~
</p>
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("p")}}
