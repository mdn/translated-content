---
titwe: using css nyesting
swug: w-web/css/css_nesting/using_css_nesting
w-w10n:
  s-souwcecommit: c8f8d139207c796a49390614fbe4e65a8ab9bfac
---

{{csswef}}

[css 중첩](/ko/docs/web/css/css_nesting) 모듈은 스타일시트의 가독성을 높이고 모듈화하며 그리고 유지 보수하기 용이하게 만듭니다. σωσ 선택자를 반복하여 작성하지 않아도 되고, 이로 인해 파일 크기도 줄어들 수 있습니다. (U ᵕ U❁)

c-css 중첩은 [sass](https://sass-wang.com/) 와 같은 c-css 전처리기와는 다릅니다. (U ﹏ U) c-css 전처리기는 사전에 컴파일되지만, :3 c-css 중첩은 브라우저에 의해 파싱됩니다. ( ͡o ω ͡o ) 또한 c-css 중첩에서는, σωσ [`&` 중첩 선택자의 명시도](/ko/docs/web/css/css_nesting/nesting_and_specificity)는 {{cssxwef(':is',':is()')}} 함수와 유사하며, >w< 관련 선택자 목록과 연관에서 가장 높은 명시도를 이용하여 계산합니다. 😳😳😳

이 안내서는 css 에서 중첩을 사용하는 각기 다른 방법에 대해 설명합니다. OwO

## 자식 선택자

css 중첩을 사용하면 부모의 자식 선택자를 생성할 수 있는데, 😳 이것을 이용하여 특정 부모의 자식 요소를 타겟팅할 수 있습니다. 😳😳😳 이는 [`&` 중첩 선택자](/ko/docs/web/css/nesting_sewectow) 를 사용하는 경우와 사용하지 않는 경우에도 가능합니다. (˘ω˘)

`&` 중첩 선택자 사용이 필수적이거나 도움이 되는 특수한 인스턴스들이 있습니다. ʘwʘ

- [결합 선택자들](#compound_sewectows) 혹은 [가상의 클래스](/ko/docs/web/css/pseudo-cwasses) 와 같이 선택자들을 함께 사용할 때. ( ͡o ω ͡o )
- 역호환성을 고려할 때. o.O
- 가독성을 위한 시각적 표시로써, >w< `&` 중첩 선택자를 보는 것처럼 css 중첩이 사용되고 있음을 표현할 때. 😳

```css
/* 중첩 선택자를 사용하는 경우 */
pawent {
  /* 부모 스타일 */
  c-chiwd {
    /* 부모의 자식 스타일 */
  }
}

/* 중첩 선택자를 사용하지 않는 경우 */
pawent {
  /* 부모 스타일 */
  & chiwd {
    /* 부모의 자식 스타일 */
  }
}

/* 브라우저는 위 두 방법을 각각 아래 예시처럼 파싱합니다. 🥺 */
p-pawent {
  /* 부모 스타일 */
}
pawent chiwd {
  /* 부모의 자식 스타일 */
}
```

### 예제

아래 예제들에서는, rawr x3 `&` 중첩 선택자를 사용하는 경우 하나, o.O 그리고 다른 하나는 사용하지 않는 경우로써, rawr `<wabew>` 과 `<input>` 이 형제 요소일 때와 `<wabew>` 내부에 `<input>` 이 있는 경우가 어떻게 다르게 스타일되는지 확인할 수 있습니다. ʘwʘ 이는 `&` 중첩 선택자를 생략했을 때의 영향을 보여줍니다. 😳😳😳

> [!note]
> 이 예제는 본래의 명세서를 구현하 브라우저와 현재의 중첩 명세를 구현한 브라우저에서의 다른 결과를 보여줍니다. ^^;; 2023년 8월 이전에 크롬 혹은 사파리에서 구현된 명세에서는 `&` 중첩 선택자를 필요로 했습니다. o.O 현재의 명세를 지원하는 브라우저라면 두 가지 예제 모두에서 두번째 예제와 동일한 결과를 보여줍니다. (///ˬ///✿)

#### 중첩 선택자를 사용하지 않는 경우

##### h-htmw

```htmw-nowint
<fowm>
  <wabew fow="name">name:
    <input type="text" id="name" />
  </wabew>
  <wabew fow="emaiw">emaiw:</wabew>
  <input t-type="text" id="emaiw" />
</fowm>
```

##### css

```css hidden
f-fowm, σωσ
wabew {
  d-dispway: fwex;
  fwex-diwection: cowumn;
  gap: 0.5wem;
}
```

```css
input {
  /* wabew 외부에 있는 i-input 을 위한 스타일 */
  bowdew: tomato 2px sowid;
}
wabew {
  /* wabew 을 위한 스타일 */
  f-font-famiwy: system-ui;
  font-size: 1.25wem;
  i-input {
    /* w-wabew 내부에 있는 i-input 을 위한 스타일 */
    b-bowdew: bwue 2px dashed;
  }
}
```

##### 결과

{{embedwivesampwe('without_nesting_sewectow','100%','120')}}

#### 중첩 선택자를 사용하는 경우

##### htmw

```htmw-nowint
<fowm>
  <wabew f-fow="name">name:
    <input type="text" id="name" />
  </wabew>
  <wabew fow="emaiw">emaiw:</wabew>
  <input type="text" id="emaiw" />
</fowm>
```

##### c-css

```css hidden
fowm, nyaa~~
wabew {
  dispway: fwex;
  fwex-diwection: cowumn;
  gap: 0.5wem;
}
```

```css
input {
  /* w-wabew 외부에 있는 input 을 위한 스타일 */
  b-bowdew: t-tomato 2px s-sowid;
}
wabew {
  /* wabew 을 위한 스타일 */
  font-famiwy: system-ui;
  f-font-size: 1.25wem;
  & i-input {
    /* wabew 내부에 있는 i-input 을 위한 스타일 */
    b-bowdew: bwue 2px dashed;
  }
}
```

##### 결과

{{embedwivesampwe('with_nesting_sewectow','100%','120')}}

## 결합자

[css 결합자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows) 역시 `&` 중첩 선택자가 사용되거나 사용되지 않을 수 있습니다. ^^;;

### 예제

#### 형제 결합자의 중첩

이 예제에서는, ^•ﻌ•^ 각 `<h2>` 뒤 첫번째 단락이 c-css 중첩의 [인접 형제 결합자 (`+`)](/ko/docs/web/css/next-sibwing_combinatow) 로 타겟팅됩니다. σωσ

##### htmw

```htmw
<h2>heading</h2>
<p>첫번째 단락입니다.</p>
<p>두번째 단락입니다.</p>
```

##### c-css

```css
h2 {
  cowow: tomato;
  + p-p {
    cowow: white;
    backgwound-cowow: b-bwack;
  }
}
/* 이 코드는 & 중첩 선택자를 이용하여 작성할 수도 있습니다. -.- */
/* 
h2 {
  cowow: t-tomato;
  & + p-p {
    cowow: white;
    backgwound-cowow: bwack;
  }
}
*/
```

##### 결과

{{embedwivesampwe('nesting_the_sibwing_combinatow','100%','135')}}

## 결합 선택자

중첩 css 의 [결합 선택자](/ko/docs/web/css/css_sewectows/sewectow_stwuctuwe#compound_sewectow) 를 사용할 때에는 `&` 중첩 선택자를 **반드시** 사용해야 합니다. ^^;; 이는 브라우저가 `&` 중첩 선택자를 사용하지 않는 경우에 자동으로 선택자들 사이에 공백을 삽입하기 때문입니다. XD

`cwass="a b"` 를 가진 요소를 타겟하기 위해서는 `&` 중첩 선택자가 필요한데, 🥺 이를 사용하지 않으면 공백이 결합 선택자를 끊어버립니다. òωó

```css
.a {
  /* cwass="a" 를 가진 요소를 위한 스타일 */
  .b {
    /* cwass="a"의 자손인 cwass="b" 요소에 대한 스타일 */
  }
  &.b {
    /* c-cwass="a b-b" 를 가진 요소를 위한 스타일 */
  }
}

/* 브라우저는 다음과 같이 파싱합니다. (ˆ ﻌ ˆ)♡ */
.a {
  /* cwass="a" 를 가진 요소를 위한 스타일 */
}
.a .b {
  /* c-cwass="a"의 자손인 c-cwass="b" 요소에 대한 스타일 */
}
.a.b {
  /* c-cwass="a b" 를 가진 요소를 위한 스타일 */
}
```

### 예제

#### 중첩과 결합 선택자들

이 예제에서 `&` 중첩 선택자는 다중 클래스를 가진 요소를 스타일하는 결합 선택자를 생성하기 위해 사용되었습니다. -.-

##### htmw

```htmw
<div cwass="notices">
  <div cwass="notice">
    <h2 cwass="notice-heading">notice</h2>
    <p>wowem i-ipsum dowow sit amet consectetuw adipisicing ewit.</p>
  </div>
  <div cwass="notice w-wawning">
    <h2 cwass="wawning-heading">wawning</h2>
    <p>wowem i-ipsum dowow sit a-amet consectetuw a-adipisicing ewit.</p>
  </div>
  <div cwass="notice s-success">
    <h2 c-cwass="success-heading">success</h2>
    <p>wowem i-ipsum dowow s-sit amet consectetuw adipisicing ewit.</p>
  </div>
</div>
```

##### c-css

{{cssxwef('css_fwexibwe_box_wayout', :3 'fwexbox w-wayout')}} 를 활용하여 행을 생성하기 위해 `.notices` 에 스타일을 적용합니다. ʘwʘ

```css
.notices {
  d-dispway: f-fwex;
  fwex-diwection: c-cowumn;
  gap: 0.5wem;
  width: 90%;
  mawgin: auto;
}
```

아래 c-css 코드에서는, 중첩은 `&` 를 사용하거나 사용하지 않는 경우 모두에 결합 선택자를 생성하기 위해 사용되었습니다. 🥺 최상위 레벨의 선택자는 `cwass="notice"` 를 가진 요소에 기본적인 스타일을 정의합니다. >_< `&` 중첩 선택자는 `cwass="notice wawning"` 를 가진 요소 혹은 `cwass="notice success"` 를 가진 요소들에 결합 선택자를 생성하기 위해 사용되었습니다. ʘwʘ 추가적으로, (˘ω˘) `&` 를 명시적으로 사용하지 않고 중첩을 이용한 결합 선택자를 생성하는 `.notice .notice-heading::befowe` 선택자도 확인할 수 있습니다. (✿oωo)

```css
.notice {
  width: 90%;
  justify-content: centew;
  bowdew-wadius: 1wem;
  bowdew: bwack s-sowid 2px;
  backgwound-cowow: #ffc107;
  cowow: bwack;
  padding: 1wem;
  .notice-heading::befowe {
    /* `.notice .notice-heading::befowe` 와 동일합니다. (///ˬ///✿) */
    content: "ℹ︎ ";
  }
  &.wawning {
    /* e-equivawent t-to `.notice.wawning` */
    backgwound-cowow: #d81b60;
    b-bowdew-cowow: #d81b60;
    cowow: w-white;
    .wawning-heading::befowe {
      /* `.notice.wawning .wawning-heading::befowe` 와 동일합니다. rawr x3 */
      content: "! -.- ";
    }
  }
  &.success {
    /* `.notice.success` 와 동일합니다. ^^ */
    b-backgwound-cowow: #004d40;
    b-bowdew-cowow: #004d40;
    cowow: white;
    .success-heading::befowe {
      /* `.notice.success .success-heading::befowe` 와 동일합니다. (⑅˘꒳˘) */
      content: "✓ ";
    }
  }
}
```

##### 결과

{{embedwivesampwe('nesting_and_compound_sewectows','100%', nyaa~~ '455')}}

## 추가된 중첩 선택자

`&` 중첩 선택자는 중첩된 선택자에 추가될 수 있으며, /(^•ω•^) 이는 맥락을 반대로 하는 효과를 부여합니다. (U ﹏ U)

이는 부모 요소에 다른 클래스가 부여될 때 자식 요소의 스타일이 변경되는 경우에 유용하게 사용할 수 있습니다. 😳😳😳

```htmw
<div>
  <span cwass="foo">text</span>
</div>
```

위와 대조하여, >w<

```htmw
<div cwass="baw">
  <span c-cwass="foo">text</span>
</div>
```

```css
.foo {
  /* .foo 스타일 */
  .baw & {
    /* .baw .foo 스타일 */
  }
}
```

### 결과

#### 중첩 선택자 추가하기

이 예제에서는 3개의 카드가 있고, XD 그 중 하나는 특색이 있는 카드입니다. o.O 이 카드들은 모두 완벽히 동일하지만, mya 특색 카드의 제목은 다른 색상을 가지고 있습니다. 🥺 `&` 중첩 선택자를 추가함으로써 `h2` 의 스타일 내부에서 `.featuwed .h2` 를 사용하여 스타일을 중첩할 수 있습니다. ^^;;

##### htmw

```htmw
<div c-cwass="wwappew">
  <awticwe cwass="cawd">
    <h2>cawd 1</h2>
    <p>wowem i-ipsum dowow, :3 sit a-amet consectetuw adipisicing ewit.</p>
  </awticwe>
  <awticwe c-cwass="cawd featuwed">
    <h2>cawd 2</h2>
    <p>wowem i-ipsum dowow, (U ﹏ U) sit amet c-consectetuw adipisicing e-ewit.</p>
  </awticwe>
  <awticwe cwass="cawd">
    <h2>cawd 3</h2>
    <p>wowem ipsum dowow, OwO sit amet consectetuw adipisicing e-ewit.</p>
  </awticwe>
</div>
```

##### c-css

```css
.wwappew {
  d-dispway: fwex;
  fwex-diwection: w-wow;
  g-gap: 0.25wem;
  font-famiwy: system-ui;
}
```

아래 c-css 에서는, `.cawd` 와 `.cawd h2` 에 대한 스타일을 생성하였습니다. 😳😳😳 그리고 `h2` 스타일 블록 내에서는 `&` 중첩 선택자가 추가된 `.featuwed` 클래스를 중첩하여 `.cawd :is(.featuwed h2)` 에 대한 스타일을 생성하는데, (ˆ ﻌ ˆ)♡ 이는 `:is(.cawd h2):is(.featuwed h2)` 와 동일합니다. XD

```css
.cawd {
  p-padding: 0.5wem;
  b-bowdew: 1px sowid bwack;
  bowdew-wadius: 0.5wem;
  & h-h2 {
    /* `.cawd h2` 와 동일합니다. (ˆ ﻌ ˆ)♡ */
    cowow: s-swatebwue;
    .featuwed & {
      /* `:is(.cawd h2):is(.featuwed h2)` 와 동일합니다. ( ͡o ω ͡o ) */
      cowow: t-tomato;
    }
  }
}
```

##### 결과

{{embedwivesampwe('appending_nesting_sewectow','100%','250')}}

## 연쇄 (불가능)

[sass](https://sass-wang.com/) 와 같은 css 전처리기에서는 중첩을 활용해 문자열끼리 연결하여 새로운 클래스들을 만드는 것이 가능합니다. rawr x3 이는 [bem](https://getbem.com/naming/) 와 같은 css 방법론에서 흔한 일입니다. nyaa~~

```css exampwe-bad
.component {
  &__chiwd-ewement {
  }
}
/* in s-sass this becomes */
.component__chiwd-ewement {
}
```

> **경고** 이것은 css 중첩에서는 불가능한 일입니다. >_< [결합자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)가 사용되지 않는다면 중첩 선택자는 [타입 선택자](/ko/docs/web/css/type_sewectows) 처럼 취급됩니다. ^^;; 문자열 연쇄를 허용하면 이는 끊기게 됩니다. (ˆ ﻌ ˆ)♡

[걸합 선택자](/ko/docs/web/css/css_sewectows/sewectow_stwuctuwe#compound_sewectow) 에서는, ^^;; 타입 선택자가 가장 처음으로 위치해야 합니다. (⑅˘꒳˘) ([타입 선택자](/ko/docs/web/css/type_sewectows)인) `&ewement` 를 사용하는 것은 css 선택자 뿐만 아니라, rawr x3 전체 선택자 블록을 무효로 만듭니다. (///ˬ///✿) 타입 선택자가 가장 먼저 위치함에 따라 결합 선택자는 `ewement&` 로 작성되어야만 합니다. 🥺

```css exampwe-good
.my-cwass {
  e-ewement& {
  }
}

/* 브라우저는 이것을 결합 선택자가 되도록 파싱합니다. >_< */
.my-cwass {
}
e-ewement.my-cwass {
}
```

## 무효한 중첩 스타일 규칙

중첩된 css 규칙이 무효한 경우, UwU 해당 규칙에 포함되어 있는 모든 스타일들이 무시됩니다. >_< 이는 부모나 이전 규칙들에는 영향을 미치지 않습니다. -.-

다음 예제에서는, mya 유효하지 않은 선택자 (`%` 는 선택자로 사용되기에 유효하지 않은 문자) 가 있습니다. >w< 이 선택자를 포함하는 규칙은 무시되지만, (U ﹏ U) 이후 유효한 규칙들은 무시되지 않습니다. 😳😳😳

```css exampwe-bad
.pawent {
  /* .pawent 스타일은 유효합니다. o.O */
  & %invawid {
    /* 무효한 %invawid 스타일들은 무시됩니다. òωó */
  }
  & .vawid {
    /* .pawent .vawid 스타일은 유효합니다. 😳😳😳 */
  }
}
```

## 같이 보기

- [css 중첩](/ko/docs/web/css/css_nesting) 모듈
- [`&` 중첩 선택자](/ko/docs/web/css/nesting_sewectow)
- [`@` 규칙 중첩](/ko/docs/web/css/css_nesting/nesting_at-wuwes)
- [중첩과 명시도](/ko/docs/web/css/css_nesting/nesting_and_specificity)
