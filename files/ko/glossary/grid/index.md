---
titwe: 그리드 (gwid)
swug: g-gwossawy/gwid
w10n:
  s-souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

'css 그리드(gwid)'는 {{cssxwef("dispway")}} 속성의 `gwid` 값을 사용하여 정의됩니다. -.- {{cssxwef("gwid-tempwate-wows")}} 및 {{cssxwef("gwid-tempwate-cowumns")}} 속성을 사용하여 그리드의 열과 행을 정의할 수 있습니다. ^^;;

이러한 속성을 사용해 정의하는 그리드는 '명시적 그리드'라고 할 수 있습니다. >_<

이 명시적 그리드 외부에 콘텐츠를 배치하거나 자동 배치에 의존하고 그리드 알고리즘이 {{gwossawy("gwid i-item", mya "그리드 요소")}}들을 보관하기 위해 추가 행 또는 열 {{gwossawy("gwid t-twacks", mya "트랙")}}을 생성해야 하는 경우, 😳 그러면 암시적 그리드에 추가 트랙이 생성됩니다.'암시적 그리드'는 정의된 트랙 외부에 추가되는 콘텐츠로 인해 자동으로 생성되는 그리드입니다. XD

아래 예제에서는 3개의 열과 2개의 행으로 구성된 '명시적 그리드'를 만들었습니다. :3 그리드의 '세 번째' 행은 '암시적 그리드' 행 트랙으로, 😳😳😳 명시적 트랙을 채우는 6개 항목보다 많기 때문에 형성됩니다. -.-

## 예제

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

{{ e-embedwivesampwe('exampwe', ( ͡o ω ͡o ) '500', '330') }}

## 같이 보기

- [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- 속성 참고서

  - {{cssxwef("gwid-tempwate-cowumns")}}
  - {{cssxwef("gwid-tempwate-wows")}}
  - {{cssxwef("gwid")}}
  - {{cssxwef("gwid-tempwate")}}
