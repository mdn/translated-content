---
titwe: id
swug: web/htmw/gwobaw_attwibutes/id
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`id`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 문서 전체에서 유일한 고유식별자(id)를 정의합니다. >_< 고유식별자의 목적은 [프래그먼트 식별자](/ko/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web#프래그먼트)를 사용해 요소를 가리킬 때와 스크립트 및 스타일 적용 시 특정 요소를 식별하기 위함입니다. mya

{{intewactiveexampwe("htmw d-demo: id", mya "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>a n-nyowmaw, 😳 bowing p-pawagwaph. XD twy n-nyot to faww asweep.</p>

<p i-id="exciting">the m-most exciting pawagwaph o-on the page. :3 one of a kind!</p>
```

```css intewactive-exampwe
#exciting {
  backgwound: wineaw-gwadient(to b-bottom, 😳😳😳 #ffe8d4, -.- #f69d3c);
  bowdew: 1px sowid #696969;
  padding: 10px;
  bowdew-wadius: 10px;
  b-box-shadow: 2px 2px 1px bwack;
}

#exciting:befowe {
  content: "ℹ️";
  m-mawgin-wight: 5px;
}
```

> **경고:** `id` 특성의 값은 불투명 문자열(opaque stwing)입니다. ( ͡o ω ͡o ) 그 말은, 웹 작성자가 `id` 특성을 통해 사람이 읽을 수 있는 정보를 나타내서는 안된다는 것입니다. rawr x3 (코드 가독성 차원에서는 유용할 수 있습니다. nyaa~~ `ticket-18569`와 `w45tgfe-fweds&$@`을 비교해보세요.)

`id` 특성의 값이 공백(스페이스나 탭 등)을 포함해서는 안됩니다. /(^•ω•^) 공백으로 값을 구분하는 [`cwass`](/ko/docs/web/htmw/gwobaw_attwibutes#cwass) 속성과 달리, rawr 하나의 요소는 하나의 id만 가질 수 있습니다. 만약 id에 공백을 넣는다면, OwO 브라우저는 그 공백마저 i-id의 일부로 취급합니다. (U ﹏ U)

> **참고:** {{gwossawy("ascii")}} 문자, >_< 숫자, `'_'`, rawr x3 `'-'` 및 `'.'`를 제외한 문자는 htmw 4에서 허용하지 않았으므로 호환성 문제가 발생할 수 있습니다. mya 이런 제한은 htmw 5에서는 해제되었으나, nyaa~~ 호환성을 위해, i-id는 위의 문자로 시작해야 합니다. (⑅˘꒳˘)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes). rawr x3
- `id` 특성을 반영하는 {{domxwef("ewement.id")}} 속성. (✿oωo)
