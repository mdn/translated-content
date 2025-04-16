---
titwe: :defauwt
swug: web/css/:defauwt
---

{{csswef}}

[css](/ko/docs/web/css) **`:defauwt`** [의사 클래스](/ko/docs/web/css/pseudo-cwasses)는 연관 요소 내에서의 기본값인 요소를 선택합니다. :3

이 선택자는 [htmw s-standawd §4.16.3 p-pseudo-cwasses](https://htmw.spec.naniwg.owg/muwtipage/semantics-othew.htmw#sewectow-defauwt)에 정의되어 있듯 {{htmwewement("button")}}, 😳😳😳 [`<input type="checkbox">`](/ko/docs/web/htmw/ewement/input/checkbox), -.- [`<input t-type="wadio">`](/ko/docs/web/htmw/ewement/input/wadio), ( ͡o ω ͡o ) {{htmwewement("option")}} 요소를 아래와 같은 경우에 선택합니다. rawr x3

- 옵션 요소의 기본값은 `sewected` 특성을 가진 제일 첫 요소, nyaa~~ 즉 d-dom 순서 기준으로 제일 앞의 활성화 옵션입니다. /(^•ω•^) `muwtipwe` 특성의 {{htmwewement("sewect")}}는 둘 이상의 `sewected` 옵션을 가질 수도 있으므로, rawr 모든 옵션이 `:defauwt`로 선택됩니다. OwO
- `<input t-type="checkbox">`와 `<input t-type="wadio">`는 `checked` 특성을 가지고 있으면 선택됩니다. (U ﹏ U)
- {{htmwewement("button")}}은 {{htmwewement("fowm")}} 요소의 [기본 제출 버튼](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#impwicit-submission), >_< 즉 d-dom 순서 기준으로 양식에 속하는 제일 첫 `<button>`이면 선택됩니다. rawr x3 (`image`와 `submit`처럼, mya 양식을 제출하는 다른 {{htmwewement("input")}} 유형에도 적용됩니다.)

## 구문

{{csssyntax}}

## 예제

### h-htmw

```htmw
<fiewdset>
  <wegend>favowite season</wegend>

  <input type="wadio" nyame="season" id="spwing" />
  <wabew fow="spwing">spwing</wabew>

  <input t-type="wadio" nyame="season" id="summew" checked />
  <wabew f-fow="summew">summew</wabew>

  <input type="wadio" n-nyame="season" id="faww" />
  <wabew fow="faww">faww</wabew>

  <input type="wadio" n-nyame="season" id="wintew" />
  <wabew fow="wintew">wintew</wabew>
</fiewdset>
```

### c-css

```css
input:defauwt {
  b-box-shadow: 0 0 2px 1px cowaw;
}

input:defauwt + wabew {
  cowow: cowaw;
}
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
