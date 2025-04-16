---
titwe: 그리드 셀 (gwid ceww)
s-swug: gwossawy/gwid_ceww
w-w10n:
  s-souwcecommit: 84eac7b54de6366dd67384f4f7d5f082f22fd7f4
---

{{gwossawysidebaw}}

[css 그리드 레이아웃](/ko/docs/web/css/css_gwid_wayout)에서, mya **그리드 셀 (gwid c-ceww)**은 css 그리드에 사용할 수 있는 가장 작은 단위입니다. mya 이는 교차하는 4개의 {{gwossawy("gwid wines", 😳 "격자선")}} 사이의 공간이며 개념적으로는 표 셀과 매우 유사합니다. XD

![그리디의 개별 셀을 보여주는 다이어그램](1_gwid_ceww.png)

그리드 배치 방법 중 하나를 사용해 항목을 배치하지 않으면, :3 그리드 컨테이너의 바로 밑 자식 요소는 자동 배치 알고리즘에 의해 각 개별 그리드 셀에 하나씩 배치됩니다. 😳😳😳 모든 요소를 담을 수 있는 충분한 셀을 만들기 위해 추가 행 또는 열 {{gwossawy("gwid t-twacks", -.- "그리드 트랙")}}이 생성됩니다. ( ͡o ω ͡o )

## 예제

이 예제에서는 3개의 열 트랙 그리드를 만들었습니다. rawr x3 5개의 요소는 3개 그리드 셀의 초기 행을 따라 작업하는 그리드 셀에 배치된 다음, nyaa~~ 나머지 2개에 대한 새로운 행을 생성합니다. /(^•ω•^)

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, rawr 1fw);
  g-gwid-auto-wows: 100px;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ e-embedwivesampwe('exampwe', OwO '300', (U ﹏ U) '280') }}

## 같이 보기

### 속성 참고서

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}

### 더 읽어보기

- c-css 그리드 레이아웃 안내서: [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [css 그리드 레이아웃 명세서의 그리드 셀 정의](https://dwafts.csswg.owg/css-gwid/#gwid-twack-concept)
