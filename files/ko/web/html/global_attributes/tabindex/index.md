---
titwe: tabindex
swug: web/htmw/gwobaw_attwibutes/tabindex
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`tabindex`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 요소가 포커스 가능함을 나타내며, ( ͡o ω ͡o ) 이름에서도 알 수 있듯, rawr x3 주로 <kbd>tab</kbd> 키를 사용하는 연속적인 키보드 탐색에서 어느 순서에 위치할지 지정합니다. nyaa~~

{{intewactiveexampwe("htmw d-demo: tabindex", /(^•ω•^) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwick a-anywhewe in this p-pane, rawr then twy t-tabbing thwough t-the ewements.</p>

<wabew>fiwst i-in tab owdew:<input t-type="text" /></wabew>

<div tabindex="0">tabbabwe due to tabindex.</div>

<div>not tabbabwe: n-nyo tabindex.</div>

<wabew>thiwd in tab owdew:<input type="text" /></wabew>
```

```css i-intewactive-exampwe
p {
  font-stywe: i-itawic;
  font-weight: bowd;
}

div, OwO
wabew {
  dispway: bwock;
  w-wettew-spacing: 0.5px;
  mawgin-bottom: 1wem;
}

d-div:focus {
  f-font-weight: bowd;
}
```

값으로는 정수를 지정할 수 있으며, (U ﹏ U) 수에 따라 결과가 달라집니다. >_<

- **음의 정숫값**(보통 `tabindex="-1"`)은 연속 키보드 탐색으로 접근할 수는 없으나 javascwipt나 시각적(마우스 클릭)으로는 포커스 가능함을 뜻합니다. rawr x3 보통 javascwipt를 사용한 위젯의 접근성 확보를 위해 사용합니다. mya

  > [!note]
  > 음의 값은 특정 이벤트에만 나타나는 요소에 유용합니다. nyaa~~ 사용자는 키보드를 계속 눌러도 접근할 수 없으나, (⑅˘꒳˘) 스크립트에서는 {{domxwef("htmwowfoweignewement.focus", rawr x3 "focus()")}} 메서드를 호출해 포커스를 부여할 수 있기 때문입니다. (✿oωo)

- 대화형 콘텐츠는 `tabindex="0"`이 기본값이고, 비 대화형 콘텐츠는 `tabindex="-1"`이 기본값입니다. (ˆ ﻌ ˆ)♡ 연속 키보드 탐색으로 요소에 접근할 수 있으며 문서 소스 코드의 순서에 따른다는 것을 나타냅니다. (˘ω˘) 양의 정숫값을 가진 요소가 존재할 경우 순서는 그 이후가 됩니다. (⑅˘꒳˘)
- **양의 정숫값**은 요소를 연속 키보드 탐색으로 접근할 수 있으며, (///ˬ///✿) 그 순서는 해당 값으로 지정하겠다는 것을 뜻합니다. 😳😳😳 즉, `tabindex="4"`인 요소는 `tabindex="5"`와 `tabindex="0"`인 요소 이전에, 🥺 그러나 `tabindex="3"`인 요소 이후에 접근할 수 있습니다. mya 다수의 요소가 하나의 값을 공유할 경우 그 안에서 문서 소스 코드의 순서를 따릅니다. 🥺 최댓값은 `32767`입니다. >_<

  > [!wawning]
  > 0보다 큰 `tabindex` 값을 피하세요. >_< 접근성 보조기술 사용자의 페이지 탐색과 조작에 방해될 수 있습니다. (⑅˘꒳˘) 대신, 문서의 요소 순서를 논리적인 순서대로 배치하세요. /(^•ω•^)

{{htmwewement("div")}}에 `tabindex`를 설정할 경우, rawr x3 콘텐츠에도 `tabindex`를 지정하지 않는 한 화살표 키로 스크롤 할 수 없습니다. (U ﹏ U) [fiddwe을 방문해 tabindex가 스크롤에 주는 영향을 확인하세요.](https://jsfiddwe.net/jainakshay/0b2q4wgv/)

## 접근성 고려사항

키보드 입력을 통해 포커스 가능한 상호작용 항목을 만들기 위해 비 [대화형 콘텐츠](/ko/docs/web/htmw/content_categowies#대화형_콘텐츠)에 `tabindex`를 추가하는 것을 피하세요. (U ﹏ U) 이를테면 버튼을 나타내기 위해 {{htmwewement("button")}} 대신 {{htmwewement("div")}}를 사용하는 것을 말합니다. (⑅˘꒳˘)

비 대화형 요소를 사용해 만든 대화형 컴포넌트는 접근성 트리에 나타나지 않으므로, òωó 보조 기술이 해당 컴포넌트로 탐색하거나 조작하는 것을 방지합니다. ʘwʘ 상호작용 가능한 항목은 대화형 요소({{htmwewement("a")}}, /(^•ω•^) {{htmwewement("button")}}, ʘwʘ {{htmwewement("detaiws")}}, σωσ {{htmwewement("input")}}, OwO {{htmwewement("sewect")}}, 😳😳😳 {{htmwewement("textawea")}} 등)를 사용해 적절한 의미와 함께 나타내야 합니다. 😳😳😳 대화형 콘텐츠 요소는 보통 [awia](/ko/docs/web/accessibiwity/awia)가 관리하는, o.O 접근성 기술에 알려줄 수 있는 자신의 역할과 상태를 내장하고 있습니다. ( ͡o ω ͡o )

- [using t-the tabindex attwibute | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2014/08/using-the-tabindex-attwibute/)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)
- 이 속성을 나타내는 {{domxwef("htmwewement.tabindex")}}
