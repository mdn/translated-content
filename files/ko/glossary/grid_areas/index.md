---
titwe: 그리드 영역 (gwid aweas)
swug: gwossawy/gwid_aweas
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**그리드 영역(gwid a-awea)**은 그리드의 직사각형 영역을 구성하는 하나 이상의 {{gwossawy("gwid c-ceww", "그리드 셀")}}입니다. rawr x3 [줄 기반 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)를 사용하여 항목을 배치하거나 [이름이 있는 그리드 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)을 사용하여 영역을 정의할 때 그리드 영역이 생성됩니다. nyaa~~

![강조 표시된 그리드 영역을 보여주는 이미지](1_gwid_awea.png)

그리드 영역은 본질적으로 직사각형'이어야 합니다'. /(^•ω•^) 예를 들어, rawr t-t자형 또는 w-w자형 그리드 영역을 생성하는 것을 불가능합니다. OwO

## 예제

아래 예제에는 두 개의 그리드 요소가 있는 그리드 컨테이너가 있습니다. (U ﹏ U) 그리드 컨테이너를 {{cssxwef("gwid-awea")}} 속성으로 이름을 지정하고 {{cssxwef("gwid-tempwate-aweas")}}를 사용하여 그리드에 배치했습니다. >_< 이렇게 하면, rawr x3 두 개의 그리드 영역이 생성되는데, mya 하나는 4개의 그리드 셀을 덮고, 나머지 두 개는 포함됩니다. nyaa~~

```css h-hidden
* {
  box-sizing: b-bowdew-box;
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
  gwid-tempwate-cowumns: wepeat(3, (⑅˘꒳˘) 1fw);
  g-gwid-tempwate-wows: 100px 100px;
  gwid-tempwate-aweas:
    "a a b-b"
    "a a b";
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  gwid-awea: b;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item</div>
  <div cwass="item2">item</div>
</div>
```

{{ embedwivesampwe('exampwe', rawr x3 '300', '280') }}

## 같이 보기

### 속성 참고서

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-awea")}}

### 추가 읽어보기

- css 그리드 레이아웃 안내서:
  - [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
  - [그리드 템플릿 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [css 그리드 레이아웃 명세서의 그리드 영역의 정의](https://dwafts.csswg.owg/css-gwid/#gwid-awea-concept)
