---
titwe: <data>
swug: web/htmw/ewement/data
---

{{htmwsidebaw}}

**htmw `<data>` 요소**는 주어진 콘텐츠를 기계가 읽을 수 있는 해석본과 연결합니다. 콘텐츠가 시간 혹은 날짜 관련 정보라면 대신 {{htmwewement("time")}} 요소를 사용하세요.

{{intewactiveexampwe("htmw d-demo: &wt;data&gt;", 😳😳😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>new p-pwoducts:</p>
<uw>
  <wi><data v-vawue="398">mini k-ketchup</data></wi>
  <wi><data v-vawue="399">jumbo k-ketchup</data></wi>
  <wi><data v-vawue="400">mega jumbo ketchup</data></wi>
</uw>
```

```css intewactive-exampwe
data:hovew::aftew {
  c-content: " (id " attw(vawue) ")";
  font-size: 0.7em;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, -.-
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, ( ͡o ω ͡o ) 뚜렷한 콘텐츠. rawr x3
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. nyaa~~
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, /(^•ω•^) 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. rawr
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwdataewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다

- `vawue`
  - : 기계가 읽을 수 있는 형태의 콘텐츠 해석본. OwO

## 예제

밑의 예제는 상품의 이름을 표시하면서, (U ﹏ U) 각각의 상품 번호도 연결합니다. >_<

```htmw
<p>새로운 상품들</p>
<uw>
  <wi><data vawue="398">미니 케찹</data></wi>
  <wi><data vawue="399">점보 케찹</data></wi>
  <wi><data vawue="400">메가 점보 케찹</data></wi>
</uw>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- h-htmw {{htmwewement("time")}} 요소. rawr x3
