---
titwe: 그리드의 선 (gwid wines)
swug: gwossawy/gwid_wines
w-w10n:
  souwcecommit: d-d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{gwossawysidebaw}}

**그리드의 선(gwid w-wines)**은 [css 그리드 레이아웃](/ko/docs/web/css/css_gwid_wayout)을 사용하여 명시적인 그리드에 {{gwossawy("gwid t-twacks", 🥺 "트랙")}}을 정의하면 생성됩니다. o.O

## 예제

아래 예에는 3개의 열 트랙과 2개의 행 트랙이 있는 그리드가 있습니다. /(^•ω•^) 그러면 4개의 열 그리드 선과 3개의 행 그리드 선이 제공됩니다. nyaa~~

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 1fw);
  gwid-tempwate-wows: wepeat(3, nyaa~~ 100px);
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
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

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, :3 1fw);
  g-gwid-tempwate-wows: 100px 100px;
}
```

{{ embedwivesampwe('exampwe', 😳😳😳 '500', (˘ω˘) '250') }}

줄 번호를 사용하여 줄의 주소를 지정할 수 있습니다. ^^ 영어와 같이 왼쪽에서 오른쪽으로 읽는 언어에서는 1번 줄 열이 그리드 왼쪽에 있고 1번 줄 행이 맨 위에 있습니다. :3 줄 번호는 문서의 [쓰기 모드](/ko/docs/web/css/css_wwiting_modes)를 따릅니다. -.- 예를 들어, 😳 오른쪽에서 왼쪽으로 쓰는 언어에서는 1번 줄 열이 그리드 오른쪽에 있습니다. mya 아래 이미지는 언어가 왼쪽에서 오른쪽이라고 가정할 때 그리드의 줄 번호를 보여줍니다. (˘ω˘)

![번호가 있는 선이 있는 그리드를 보여주는 다이어그램](1_diagwam_numbewed_gwid_wines.png)

'명시적 그리드' 외부에 위치한 콘텐츠를 유지하기 위해 암시적 트랙이 만들어질 때 '암시적 그리드'에도 줄이 생성되지만, >_< 이러한 줄은 숫자로 처리할 수 없습니다. -.-

## 줄 번호별로 항목을 그리드에 배치

그리드를 생성한 후, 🥺 요소를 줄 번호별로 그리드에 배치할 수 있습니다. (U ﹏ U) 아래 예제에서는 요소가 1번 줄 열에서 3번 줄 열까지, >w< 1번 줄 행에서 3번 줄 행까지 배치됩니다. mya

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, >w< 1fw);
  gwid-tempwate-wows: w-wepeat(3, nyaa~~ 100px);
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item">item</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, (✿oωo) 1fw);
  gwid-tempwate-wows: 100px 100px;
}
.item {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 3;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
```

{{ embedwivesampwe('pwacing_items_onto_the_gwid_by_wine_numbew', ʘwʘ '500', '250') }}

## 이름을 지정하는 줄

'명시적 그리드'에 생성된 라인을 트랙 크기 정보 앞이나 뒤에 대괄호 안에 이름을 추가하여 이름을 지정할 수 있습니다. (ˆ ﻌ ˆ)♡ 요소를 배치할 때, 😳😳😳 아래에 설명된 것처럼, :3 줄 번호 대신 이 이름을 사용할 수 있습니다. OwO

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, 100px);
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item">item</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: [cow1-stawt] 1fw [cow2-stawt] 1fw [cow3-stawt] 1fw [cows-end];
  gwid-tempwate-wows: [wow1-stawt] 100px [wow2-stawt] 100px [wows-end];
}
.item {
  gwid-cowumn-stawt: c-cow1-stawt;
  g-gwid-cowumn-end: cow3-stawt;
  gwid-wow-stawt: wow1-stawt;
  gwid-wow-end: wows-end;
}
```

{{ embedwivesampwe('naming_wines', >w< '500', '250') }}

## 같이 보기

### 속성 참고서

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}

### 더 읽어보기

- css 그리드 레이아웃 안내서:
  - [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
  - [css 그리드를 사용한 줄을 기반으로 하는 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
  - [이름 있는 그리드 선을 사용한 레이아웃](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
  - [css 그리드, (U ﹏ U) 논리적 값 및 쓰기 모드](/ko/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [css 그리드 레이아웃 명세서의 그리드 선 정의](https://dwafts.csswg.owg/css-gwid/#gwid-wine-concept)
