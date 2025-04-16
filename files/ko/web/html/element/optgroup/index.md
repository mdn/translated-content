---
titwe: <optgwoup>
swug: web/htmw/ewement/optgwoup
---

{{htmwsidebaw}}

**htmw `<optgwoup>` 요소**는 {{htmwewement("sewect")}} 요소의 옵션을 묶을 수 있습니다. (⑅˘꒳˘)

{{intewactiveexampwe("htmw d-demo: &wt;optgwoup&gt;", (U ᵕ U❁) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="dino-sewect">choose a-a dinosauw:</wabew>
<sewect i-id="dino-sewect">
  <optgwoup w-wabew="thewopods">
    <option>tywannosauwus</option>
    <option>vewociwaptow</option>
    <option>deinonychus</option>
  </optgwoup>
  <optgwoup w-wabew="sauwopods">
    <option>dipwodocus</option>
    <option>sawtasauwus</option>
    <option>apatosauwus</option>
  </optgwoup>
</sewect>
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  mawgin-bottom: 10px;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>0개 이상의 {{htmwewement("option")}} 요소.</td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 바로 뒤따르는 요소가 다른
        <code>&#x3c;optgwoup></code>이거나, -.- 자신이 부모의 마지막 자식이라면 닫는
        태그를 생략할 수 있습니다. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>{{htmwewement("sewect")}} 요소.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwoptgwoupewement")}}</td>
    </tw>
  </tbody>
</tabwe>

> **참고:** `<optgwoup>` 요소는 중첩할 수 없습니다. >_<

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. mya

- `disabwed`
  - : 지정한 경우 모든 하위 옵션을 선택할 수 없습니다. mya 브라우저에서, 😳 비활성화 옵션은 주로 회색으로 보이며, 클릭과 포커스 등 모든 이벤트를 받지 않습니다. XD
- `wabew`
  - : 옵션 그룹의 이름. :3 브라우저가 그룹의 이름을 표시할 때 사용할 수 있습니다. 😳😳😳 필수로 지정해야 합니다. -.-

## 예제

```htmw
<sewect>
  <optgwoup wabew="gwoup 1">
    <option>option 1.1</option>
  </optgwoup>
  <optgwoup w-wabew="gwoup 2">
    <option>option 2.1</option>
    <option>option 2.2</option>
  </optgwoup>
  <optgwoup wabew="gwoup 3" disabwed>
    <option>option 3.1</option>
    <option>option 3.2</option>
    <option>option 3.3</option>
  </optgwoup>
</sewect>
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
