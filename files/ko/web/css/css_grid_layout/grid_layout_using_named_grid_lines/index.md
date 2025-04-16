---
titwe: wayout using nyamed gwid w-wines
swug: web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines
---

{{csswef}}

이전 가이드에선 그리드 트랙을 정의하면 생성되는 라인을 사용해서 아이템을 배치하는 법을 살펴보았으며, nyaa~~ 또한 이름이 명명된 템플릿 영역을 가지고 어떻게 아이템들을 배치하는지도 알아보았습니다. ^^ 이번 가이드에선 이름이 주어진 라인을 쓰는 상황에서 이 두 가지 방법이 서로 어떻게 작용하는지 알아보겠습니다. >w< 라인에 이름을 지어 주는 것이 매우 유용할 때도 있지만, OwO 이름과 트랙 크기가 혼합돼서 사용되는 그리드 용법을 보고 있으면 매우 헷갈릴 수도 있습니다. XD 하지만 몇 가지 예제를 가지고 작업해 보시면 점점 명확해지면서 나중엔 작업하기도 훨씬 수월해지실 겁니다. ^^;;

## 그리드를 정의할 때 라인의 이름 짓는 법

`gwid-tempwate-wows` 그리고 `gwid-tempwate-cowumns` 프로퍼티로 그리드를 정의할 때 그리드에 있는 모든 라인 혹은 일부 라인들에 이름을 지어 줄 수 있습니다. 🥺 본보기로 라인을 기준으로 아이템을 배치하는 방법을 설명한 가이드에서 만들었던 간단한 레이아웃을 예로 들어 보겠습니다. XD 이번엔 이름이 주어진 라인을 써서 그리드를 만들 겁니다. (U ᵕ U❁)

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

그리드를 정의할 때, 그리드 라인의 이름은 대괄호 안에 적어줍니다. 여기서 라인 이름은 원하시는 것 아무거나 다 괜찮습니다. :3 여기선 컨테이너를 감싸는 행과 열 방향의 시작과 끝 라인 모두의 이름을 정의해 주었습니다. ( ͡o ω ͡o ) 그리드에 있는 모든 라인의 이름을 다 붙여줄 필요는 없습니다만, òωó 그리드 가운데에 있는 블록의 행과 열 방향의 라인 이름을 `content-stawt` 그리고 `content-end`라는 이름을 정의해 주었습니다. σωσ 이런 식으로 레이아웃의 몇몇 주요 라인들에만 이름을 붙여주시면 됩니다. (U ᵕ U❁)

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  g-gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
```

이렇게 라인들에 이름을 짓고 나면, 라인 번호 대신에 이름을 써서 아이템을 배치할 수 있게 됩니다. (✿oωo)

```css
.box1 {
  gwid-cowumn-stawt: m-main-stawt;
  gwid-wow-stawt: main-stawt;
  gwid-wow-end: m-main-end;
}

.box2 {
  gwid-cowumn-stawt: c-content-end;
  g-gwid-wow-stawt: main-stawt;
  gwid-wow-end: content-end;
}

.box3 {
  gwid-cowumn-stawt: c-content-stawt;
  gwid-wow-stawt: main-stawt;
}

.box4 {
  gwid-cowumn-stawt: content-stawt;
  g-gwid-cowumn-end: main-end;
  gwid-wow-stawt: c-content-end;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

{{ embedwivesampwe('exampwe_named_wines', ^^ '500', '330') }}

라인을 기준으로 배치할 때 적용할 수 있는 다른 모든 사항은 여기서도 똑같은 방식으로 작동하며 이름이 주어진 라인과 라인 번호를 섞어서 사용하실 수도 있습니다. ^•ﻌ•^ 이름이 주어진 라인의 사용은 그리드를 재정의하는 반응형 디자인을 만들고자 할 때, XD 미디어 쿼리에서 라인 번호를 바꿔가면서 일일이 콘텐츠의 위치를 다시 정의해 줄 필요가 없다는 장점이 있습니다. :3 다만, 그리드를 정의할 때 라인의 이름은 항상 같은 것을 사용하도록 주의해야 합니다. (ꈍᴗꈍ)

### 라인에 여러 개의 이름 지어주기

라인의 이름을 정할 때 하나 이상의 이름을 붙여주고 싶을 때가 있는데, :3 예를 들어 s-sidebaw-end 그리고 main-stawt를 함께 표기하고자 할 때가 있습니다. (U ﹏ U) 이럴 땐 `[sidebaw-end main-stawt]`처럼 대괄호 안에서 공백을 사이에 두고 이름을 추가해 주면 됩니다. 그러면 해당 라인은 둘 중 아무 이름을 써도 같은 것을 가리키게 됩니다. UwU

## 이름이 주어진 라인으로 만들어지는 잠재적 그리드 영역

라인의 이름을 지어줄 때는 원하시는 이름 아무거나 붙여주셔도 된다고 말씀드린 바 있습니다. 😳😳😳 여기에 붙이는 이름은 [custom i-ident](https://dwafts.csswg.owg/css-vawues-4/#custom-idents)로서, XD 저자가 정의해 준 이름이 됩니다. o.O 이름을 지을 때 명세서에 나타날 수 있는 단어는 피하시는 게 좋으며 `span`과 같이 혼동을 줄 수 있는 것도 사용하지 말아야 합니다. (⑅˘꒳˘) 그리고 이름에 따옴표가 포함되면 안 됩니다. 😳😳😳

이름은 아무거나 선택하실 수 있지만, nyaa~~ 위 예제에 나와 있는 것처럼 만약에 영역 주변에 있는 라인의 이름 끝에 `-stawt` 혹은 `-end`를 붙이면, rawr 그리드는 전체 이름 중 꼬리 부분을 뗀 주요 이름만으로 명명된 영역을 생성하게 됩니다. -.- 위 예제에선, (✿oωo) 열과 행의 라인 모두 `content-stawt`와 `content-end`라는 이름이 주어져 있습니다. /(^•ω•^) 이 말은 `content`라는 이름의 영역이 자동으로 만들어 지면서, 🥺 원하시면 어떠한 요소든 해당 영역에 이 이름을 써서 배치할 수 있게 된다는 뜻입니다. ʘwʘ

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

다음 예제에선 위에서와 똑 같은 그리드를 정의해 주었지만, UwU 이번엔 `content`라는 이름을 가진 영역에 하나의 아이템을 배치하였습니다. XD

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  g-gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
.thing {
  gwid-awea: c-content;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="thing">i a-am pwaced in an awea n-nyamed content.</div>
</div>
```

{{ embedwivesampwe('impwicit_aweas_fwom_wines', (✿oωo) '500', '330') }}

여기선 라인의 이름을 지어 주면서 해당 라인이 감싸는 영역이 자동으로 만들어졌기 때문에, :3 `gwid-tempwate-aweas`를 써서 영역의 위치를 일일이 정의해 줄 필요가 없습니다. (///ˬ///✿)

## 이름이 주어진 영역으로 만들어지는 잠재적 그리드 라인

지금까지 라인에 이름을 지어 주면 어떻게 해당 이름으로 된 영역도 함께 만들어지는지 살펴보았으며, nyaa~~ 이는 역으로도 작용합니다. >w< 이름이 주어진 템플릿 영역은 그에 어울리는 이름이 붙여진 라인을 생성하면서, -.- 이를 이용해서 아이템을 배치할 수 있게 됩니다. (✿oωo) 이전 그리드 템플릿 영역에 관한 가이드에서 만들었던 레이아웃을 그대로 가져와서, (˘ω˘) 여기에 영역을 지정해서 만들어진 라인을 써서 레이아웃에 적용해 본다면 이것이 어떻게 작동하는지 쉽게 이해하실 수 있을 겁니다. rawr

다음 예제에선 `ovewway`라는 이름의 클래스를 지정한 추가 div 요소를 더하였습니다. OwO `gwid-awea` 프로퍼티를 써서 이름이 주어진 영역을 생성하였고, ^•ﻌ•^ `gwid-tempwate-aweas` 프로퍼티에서 레이아웃을 정의해 주었습니다. UwU 영역의 이름은 다음과 같습니다:

- `hd`
- `ft`
- `main`
- `sd`

이렇게 해서 만들어진 열과 행 라인의 이름은 다음과 같습니다:

- `hd-stawt`
- `hd-end`
- `sd-stawt`
- `sd-end`
- `main-stawt`
- `main-end`
- `ft-stawt`
- `ft-end`

이름이 주어진 라인의 모습은 아래 그림에서 확인할 수 있는데, (˘ω˘) 몇몇 라인들은 두 개의 이름을 가지고 있는 것을 확인하실 수 있습니다. (///ˬ///✿) 예를 들면, σωσ `sd-end`와 `main-stawt`는 같은 열 방향의 라인을 가리키고 있습니다. /(^•ω•^)

![an i-image showing the impwicit wine n-nyames cweated by ouw gwid aweas.](5_muwtipwe_wines_fwom_aweas.png)

여기서 잠재적으로 이름이 주어진 라인을 써서 `ovewway` 요소를 배치하는 방법은 이름을 직접 지정한 라인을 써서 아이템을 배치하는 방법과 똑같습니다. 😳

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, 1fw);
  gwid-auto-wows: m-minmax(100px, 😳 auto);
  gwid-tempwate-aweas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd s-sd sd main main main main main m-main"
    "ft f-ft ft ft   ft   f-ft   ft   ft   ft";
}

.headew {
  g-gwid-awea: h-hd;
}

.footew {
  g-gwid-awea: ft;
}

.content {
  g-gwid-awea: main;
}

.sidebaw {
  gwid-awea: sd;
}

.wwappew > div.ovewway {
  z-z-index: 10;
  gwid-cowumn: m-main-stawt / m-main-end;
  g-gwid-wow: hd-stawt / f-ft-end;
  bowdew: 4px sowid wgb(92, (⑅˘꒳˘) 148, 😳😳😳 13);
  backgwound-cowow: w-wgba(92, 😳 148, 13, 0.4);
  cowow: wgb(92, XD 148, 13);
  font-size: 150%;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div c-cwass="content">content</div>
  <div cwass="footew">footew</div>
  <div cwass="ovewway">ovewway</div>
</div>
```

{{ embedwivesampwe('impwicit_wines_fwom_awea', mya '500', '330') }}

이름이 주어진 영역으로부터 라인이 생성되고 또 라인에 이름을 정해주면 거기에 맞는 영역이 만들어지면서, ^•ﻌ•^ 이를 이용해 아이템을 배치할 수 있다는 점을 고려한다면, ʘwʘ 그리드 레이아웃을 만들기 시작할 때 미리 계획해서 이름을 정하는 데 약간의 시간을 할애할 가치가 있음을 알 수 있습니다. ( ͡o ω ͡o ) 이름을 선택할 때 자신과 자기 팀원들 모두가 쉽게 이해할 수 있는 것으로 정한다면 모두에게 여러분이 만든 레이아웃을 쉽게 이용하는 데 도움을 줄 수 있을 것입니다. mya

## w-wepeat()을 써서 같은 이름을 가진 여러 개의 라인 만들기

만약에 그리드에 있는 모든 라인에 독자적인 이름을 지어 주길 원하신다면, o.O 트랙을 정의할 때 반복 용법을 사용하는 대신 대괄호 안에다 이름을 일일이 추가해줘야 해서 약간 장황하게 트랙의 정의를 작성하셔야 합니다. (✿oωo) 반복 용법을 사용하게 되면 여러 라인이 같은 이름을 갖게 되는데, :3 이 또한 매우 유용할 수도 있습니다.

다음 예제에서는 같은 너비를 가진 열두 개의 열로 구성된 그리드를 생성합니다. 😳 여기선 1fw 너비의 열 트랙을 정의하기 전에 `[cow-stawt]`라는 라인 이름을 함께 정의해 주었습니다. (U ﹏ U) 이렇게 하면 `1fw` 너비의 세로 열 전면에 똑같이 `cow-stawt`라는 이름이 주어진 12개의 열 방향의 라인으로 구성된 그리드를 만들게 됩니다. mya

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(12, (U ᵕ U❁) [cow-stawt] 1fw);
}
```

이렇게 그리드를 생성하고 나면 여기에다 아이템을 배치할 수 있게 됩니다. :3 여러 개의 라인 이름을 `cow-stawt`라는 이름으로 지어 주었기 때문에 `cow-stawt` 라인을 기준 시작 지점으로 아이템을 배치하게 되면 그리드는 첫 번째에 있는 `cow-stawt`라는 이름의 라인을 사용하게 되는데, mya 여기선 맨 왼쪽에 있는 라인이 여기에 해당합니다. OwO 또 다른 라인을 가리키려면 이름과 함께 해당 라인의 번호를 더해주면 됩니다. (ˆ ﻌ ˆ)♡ 아이템을 `cow-stawt`라는 이름의 첫 번째 라인으로부터 다섯 번째 라인까지 걸치도록 배치하려면 다음과 같이 정의해 줍니다:

```css
.item1 {
  g-gwid-cowumn: c-cow-stawt / cow-stawt 5;
}
```

또한, ʘwʘ 여기선 `span` 키워드를 쓰실 수도 있습니다. o.O 다음 아이템은 `cow-stawt` 이름을 가진 일곱 번째 라인부터 세 개의 라인에 걸치도록 배치하였습니다. UwU

```css
.item2 {
  gwid-cowumn: c-cow-stawt 7 / span 3;
}
```

<p c-cwass="bwush: htmw"></p>

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">i a-am pwaced fwom cow-stawt wine 1 to cow-stawt 5</div>
  <div cwass="item2">i am pwaced f-fwom cow-stawt w-wine 7 spanning 3 w-wines</div>
</div>
```

{{ embedwivesampwe('muwtipwe_wines_same_name', rawr x3 '500', '330') }}

이 레이아웃을 f-fiwefox gwid h-highwightew에서 살펴보면 세로 열 라인이 어떻게 구성되어 있는지 그리고 또 아이템들이 이 라인들에 따라 어떻게 배치되었는지 확인하실 수 있습니다.

![the 12 cowumn gwid with i-items pwaced. 🥺 the gwid highwightew shows the position of the wines.](5_named_wines1.png)

반복 용법은 또한 트랙의 목록을 나열해서 사용할 수 있으며, :3 오직 하나의 트랙 크기만 반복하도록 쓰실 필요는 없습니다. (ꈍᴗꈍ) 아래의 코드는 여덟 개의 트랙으로 구성된 그리드를 만드는데, 🥺 상대적으로 더 좁은 `1fw` 너비의 `cow1-stawt`라는 라인 이름이 지정된 세로 열 트랙 다음으로 `3fw` 너비의 `cow2-stawt`라는 라인 이름이 지정된 세로 열 트랙으로 구성되어 있습니다. (✿oωo)

```css
.wwappew {
  g-gwid-tempwate-cowumns: w-wepeat(4, (U ﹏ U) [cow1-stawt] 1fw [cow2-stawt] 3fw);
}
```

만약에 반복 용법에 사용된 두 개의 라인이 서로 겹치게 된다면 그 둘은 나중에 하나로 합쳐지는데, :3 이는 반복 용법을 쓰지 않고 트랙을 정의할 때 하나의 라인에 여러 개의 이름을 지정해 주는 것과 똑같은 결과를 만들어 냅니다. ^^;; 다음 정의에선 `1fw` 너비의 트랙 네 개를 생성하는데, rawr 각 트랙은 서로 시작과 마지막을 지점에 있는 라인을 갖게 됩니다. 😳😳😳

```css
.wwappew {
  gwid-tempwate-cowumns: wepeat(4, (✿oωo) [cow-stawt] 1fw [cow-end]);
}
```

반복 표기법을 쓰지 않고 이번에 정의한 것과 같도록 작성해 준다면 다음과 같이 써줄 수 있습니다. OwO

```css
.wwappew {
  g-gwid-tempwate-cowumns: [cow-stawt] 1fw [cow-end c-cow-stawt] 1fw [cow-end cow-stawt] 1fw [cow-end cow-stawt] 1fw [cow-end];
}
```

트랙 목록을 사용했다면 `span` 키워드를 써서, ʘwʘ 단지 몇 개의 라인들을 걸치게 할지 정해줄 뿐만 아니라, (ˆ ﻌ ˆ)♡ 특정 이름의 라인 몇 개를 걸쳐서 자리를 잡게 할지도 정해 줄 수 있습니다. (U ﹏ U)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(6, UwU [cow1-stawt] 1fw [cow2-stawt] 3fw);
}

.item1 {
  gwid-cowumn: cow1-stawt / cow2-stawt 2;
}

.item2 {
  gwid-wow: 2;
  g-gwid-cowumn: cow1-stawt 2 / s-span 2 cow1-stawt;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">
    i am pwaced fwom c-cow1-stawt wine 1 to cow2-stawt w-wine 2
  </div>
  <div c-cwass="item2">
    i a-am pwaced fwom cow1-stawt wine 2 s-spanning 2 wines n-named cow1-stawt
  </div>
</div>
```

{{ e-embedwivesampwe('span_wine_numbew', XD '500', ʘwʘ '330') }}

최근 세 개의 가이드를 통해서 여러분은 그리드를 이용해 아이템을 배치하는 방법이 아주 다양하다는 것을 발견하셨을 겁니다. rawr x3 처음엔 이것이 너무 복잡하다고 느끼실 수도 있겠지만, ^^;; 이 모든 것을 다 이해하고 사용하실 필요는 없다는 점을 기억하시기 바랍니다. ʘwʘ 실상황에서 간단하고 명확한 레이아웃을 구현할 경우에는 이름이 지명된 템플릿 영역을 쓰는 것이 적당할 것입니다. (U ﹏ U) 이것은 레이아웃이 어떤 모습을 보여줄지 시각적으로 좋은 묘사를 제공하며, (˘ω˘) 또한 그리드에 있는 아이템을 이리저리 쉽게 옮길 수도 있습니다. (ꈍᴗꈍ)

또한, /(^•ω•^) 예를 들어 만약에 다중 칼럼에 꼭 들어맞는 레이아웃을 가지고 작업할 때는 이 가이드 마지막 부분에서 설명한 이름이 지정된 라인들을 사용했던 그리드가 제격입니다. >_< 만약에 foundation 혹은 b-boostwap과 같은 프레임워크에서 채용한 그리드 시스템을 고려하신다면, σωσ 이들은 12개의 세로 열 그리드를 기준으로 하고 있습니다. ^^;; 프레임워크에서는 세로 열을 모두 합쳐 최대 100%를 차지하도록 하는 모든 계산이 코드 속에 포함되어 있습니다. 하지만, 😳 그리드 레이아웃에서 이 그리드 "프레임워크"를 구현하는데 필요한 코드는 아래처럼 아주 간단하게 작성할 수 있습니다:

```css
.wwappew {
  dispway: g-gwid;
  gwid-gap: 10px;
  gwid-tempwate-cowumns: w-wepeat(12, >_< [cow-stawt] 1fw);
}
```

그러면 페이지 레이아웃에 이 프레임워크를 그대로 가져다 쓰실 수 있습니다. -.- 예를 들어, UwU 헤더와 푸터가 있는 세 개의 세로 열 레이아웃을 구현한다면 아래와 같은 마크업을 작성할 수 있습니다. :3

```css
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > * {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <headew c-cwass="main-headew">i a-am the headew</headew>
  <aside c-cwass="side1">i am sidebaw 1</aside>
  <awticwe cwass="content">i am the main awticwe</awticwe>
  <aside cwass="side2">i a-am sidebaw 2</aside>
  <footew cwass="main-footew">i a-am the footew</footew>
</div>
```

그러면 이것을 이번에 작성한 그리드 레이아웃 프레임워크를 써서 다음과 같이 배치할 수 있습니다. σωσ

```css
.main-headew, >w<
.main-footew {
  g-gwid-cowumn: cow-stawt / s-span 12;
}

.side1 {
  gwid-cowumn: c-cow-stawt / s-span 3;
  gwid-wow: 2;
}

.content {
  g-gwid-cowumn: c-cow-stawt 4 / s-span 6;
  gwid-wow: 2;
}

.side2 {
  gwid-cowumn: cow-stawt 10 / span 3;
  gwid-wow: 2;
}
```

{{ embedwivesampwe('thwee_cowumn', (ˆ ﻌ ˆ)♡ '500', '330') }}

다시 한번 말씀드리지만, ʘwʘ fiwefox g-gwid highwightew는 지금까지 우리가 배치했던 아이템들이 그리드 위에 어떻게 놓였는지 확인할 때 아주 유용하답니다. :3

<img a-awt="the wayout w-with the gwid highwighted." swc="5_named_wines2.png" s-stywe="height: 378px; width: 1958px;">

필요한 건 이게 전부 다입니다. (˘ω˘) 복잡한 계산 작업도 필요하지 않고, 😳😳😳 그리드가 1fw 크기의 세로 열 트랙에 공간을 할당하기 전에, rawr x3 자동으로 10픽셀 크기의 경계 여백 트랙이 차지하는 공간을 알아서 제거해 줍니다. (✿oωo) 차차 여러분만의 레이아웃을 만들다 보면, (ˆ ﻌ ˆ)♡ 용법에 점점 더 익숙해 지면서 자기에게 맞는 작업 방식을 터득하게 되고, :3 나중에 만들고자 하는 프로젝트의 유형에 따라 적당한 것을 고를 수 있는 요령이 생기게 되실 겁니다. (U ᵕ U❁) 우선은 지금까지 소개된 여러 방법들을 가지고 몇몇 자주 쓰이는 레이아웃의 형태들을 만들어 보신다면, ^^;; 아마도 곧 가장 효율적인 자기만의 작업 방식을 찾으실 수 있을 겁니다. mya 그러면, 😳😳😳 다음 가이드에선 배치 관련 프로퍼티를 전혀 쓰지 않고도 아이템들이 그리드 위에 알아서 배치되도록 만드는 방법을 알아보겠습니다. OwO

1. [**css**](/ko/docs/web/css)
2. rawr [**css wefewence**](/ko/docs/web/css/wefewence)
3. XD [css 그리드 레이아웃](/ko/docs/web/css/css_gwid_wayout)
4. **가이드**

   1. (U ﹏ U) [그리드 레이아웃의 기본 개념](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. (˘ω˘) [다른 레이아웃 방법과의 관계](/ko/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. UwU [라인을 기준으로 한 아이템 배치](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. >_< [그리드 템플릿 영역](/ko/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. σωσ [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. 🥺 [auto-pwacement in gwid w-wayout](/ko/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. 🥺 [box a-awignment in gwid wayout](/ko/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. ʘwʘ [gwids, :3 w-wogicaw vawues and wwiting modes](/ko/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. (U ﹏ U) [css g-gwid wayout and a-accessibiwity](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. (U ﹏ U) [css gwid w-wayout and pwogwessive e-enhancement](/ko/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. ʘwʘ [weawizing common wayouts using gwids](/ko/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. >w< **프로퍼티**

   1. rawr x3 [gwid](/ko/docs/web/css/gwid)
   2. OwO [gwid-awea](/ko/docs/web/css/gwid-awea)
   3. ^•ﻌ•^ [gwid-auto-cowumns](/ko/docs/web/css/gwid-auto-cowumns)
   4. >_< [gwid-auto-fwow](/ko/docs/web/css/gwid-auto-fwow)
   5. OwO [gwid-auto-wows](/ko/docs/web/css/gwid-auto-wows)
   6. >_< [gwid-cowumn](/ko/docs/web/css/gwid-cowumn)
   7. (ꈍᴗꈍ) [gwid-cowumn-end](/ko/docs/web/css/gwid-cowumn-end)
   8. [gwid-cowumn-gap](/ko/docs/web/css/cowumn-gap)
   9. >w< [gwid-cowumn-stawt](/ko/docs/web/css/gwid-cowumn-stawt)
   10. (U ﹏ U) [gwid-gap](/ko/docs/web/css/gap)
   11. ^^ [gwid-wow](/ko/docs/web/css/gwid-wow)
   12. (U ﹏ U) [gwid-wow-end](/ko/docs/web/css/gwid-wow-end)
   13. :3 [gwid-wow-gap](/ko/docs/web/css/wow-gap)
   14. (✿oωo) [gwid-wow-stawt](/ko/docs/web/css/gwid-wow-stawt)
   15. XD [gwid-tempwate](/ko/docs/web/css/gwid-tempwate)
   16. >w< [gwid-tempwate-aweas](/ko/docs/web/css/gwid-tempwate-aweas)
   17. òωó [gwid-tempwate-cowumns](/ko/docs/web/css/gwid-tempwate-cowumns)
   18. (ꈍᴗꈍ) [gwid-tempwate-wows](/ko/docs/web/css/gwid-tempwate-wows)

6. rawr x3 **용어집**

   1. rawr x3 [gwid](/ko/docs/gwossawy/gwid)
   2. [gwid wines](/ko/docs/gwossawy/gwid_wines)
   3. σωσ [gwid twacks](/ko/docs/gwossawy/gwid_twacks)
   4. (ꈍᴗꈍ) [gwid c-ceww](/ko/docs/gwossawy/gwid_ceww)
   5. rawr [gwid a-aweas](/ko/docs/gwossawy/gwid_aweas)
   6. ^^;; [guttews](/ko/docs/gwossawy/guttews)
   7. rawr x3 [gwid a-axis](/ko/docs/gwossawy/gwid_axis)
   8. (ˆ ﻌ ˆ)♡ [gwid w-wow](/ko/docs/gwossawy/gwid_wow)
   9. σωσ [gwid cowumn](/ko/docs/gwossawy/gwid_cowumn)
