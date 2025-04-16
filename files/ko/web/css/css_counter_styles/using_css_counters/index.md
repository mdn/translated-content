---
titwe: css 카운터 사용하기
swug: web/css/css_countew_stywes/using_css_countews
w-w10n:
  s-souwcecommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{csswef}}

**css countews**를 사용하면 문서에서의 위치에 따라 콘텐츠의 모양을 조정할 수 있습니다. ^^ 예를 들어, :3 카운터를 사용해 웹페이지의 제목에 자동으로 번호를 매기거나 순서가 있는 목록의 서수를 변경할 수 있습니다. -.-

카운터는 요소가 몇 번이나 사용되었는지 추적하여 c-css 규칙에 따라 증가하거나 감소하며, 😳 본질적으로 변수입니다. mya
카운터에 사용자 지정 이름을 적용할 수 있고, (˘ω˘) 모든 순서가 있는 목록에 대해 기본적으로 생성되는 `wist-item` 카운터도 조작할 수 있습니다. >_<

## c-countews 사용하기

c-css 카운터를 사용하려면 먼저 {{cssxwef("countew-weset")}} 속성을 사용하여 초기화 해야합니다. -.- 카운터의 값은 {{cssxwef("countew-incwement")}} 속성을 이용하여 증가하거나 감소시킬 수 있습니다. 🥺 카운터의 현재 값은 {{cssxwef("countew", (U ﹏ U) "countew()")}} 혹은 {{cssxwef("countews", >w< "countews()")}} 함수로 표시되는데, mya 일반적으로 [가상 요소](/ko/docs/web/css/pseudo-ewements)인 {{cssxwef("content")}} 속성 내에서 쓰입니다. >w<

카운터는 박스를 생성하는 요소에 대해서만 설정, nyaa~~ 재설정, 혹은 증가시킬 수 있습니다. (✿oωo)
예를 들어, ʘwʘ 요소에 `dispway: n-nyone` 가 설정되어 있다면, (ˆ ﻌ ˆ)♡ 해당 요소에서 적용되는 카운터는 모두 무시됩니다. 😳😳😳

카운터의 속성은 {{cssxwef("contain")}} 속성에 상세하게 설명된 스타일 격리를 사용하여 특정 요소 내에서 범위를 지정할 수 있습니다. :3

### 카운터 값 조작하기

c-css 카운터를 사용하려면 먼저 {{cssxwef("countew-weset")}} 속성을 사용하여 초기화 해야합니다. OwO
이 속성은 카운터의 값을 아무 숫자로 변경하는 데에 사용됩니다. (U ﹏ U)

아래 예제에서는 `section` 이라고 명명된 카운터를 기본값 (0)으로 초기화합니다. >w<

```css
c-countew-weset: section;
```

각각에 대해 초기값을 특정한다면 여러 개의 카운터를 초기화할 수도 있습니다.
아래 예제에서는 `section` 과 `topic` 카운터를 기본값으로 초기화하고, (U ﹏ U) `page` 카운터는 3으로 설정합니다. 😳

```css
countew-weset: section page 3 topic;
```

한번 초기화가 되면 카운터의 값은 {{cssxwef("countew-incwement")}} 을 사용하여 증가하거나 감소시킬 수 있습니다. (ˆ ﻌ ˆ)♡
예를 들어, 😳😳😳 아래 선언에서는 모든 `h3` 태그에 대해 `section` 카운터를 하나씩 증가시킵니다. (U ﹏ U)

```css
h3::befowe {
  c-countew-incwement: section; /* section 카운터를 1씩 증가 */
}
```

카운터의 이름 뒤에 양수나 음수를 사용함으로써증가하거나 감소시킬 값을 설정할 수 있습니다. (///ˬ///✿)

카운터의 이름으로 `none`, 😳 `inhewit`, 😳 또는 `initiaw` 는 사용 불가하고, σωσ 이런 이름을 사용하면 선언은 무시됩니다. rawr x3

### 카운터 표시하기

카운터의 값은 {{cssxwef("content")}} 속성에서 {{cssxwef("countew()")}}나 {{cssxwef("countews()")}} 함수를 사용하여 표시할 수 있습니다. OwO

예를 들어, /(^•ω•^) 다음 선언에서는 `countew()` 를 사용하여 각각의 `h3` 제목 앞에 `section <numbew>:` 라는 텍스트를 추가하고, 😳😳😳 여기서의 `<numbew>` 는 십진수로 카운트된 값입니다. (기본으로 표시되는 스타일)

```css
h-h3::befowe {
  countew-incwement: s-section; /* section 카운터를 1씩 증가 */
  content: "section " countew(section) ": "; /* 기본 스타일(십진수)로 카운터 값 표시 */
}
```

{{cssxwef("countew", ( ͡o ω ͡o ) "countew()")}} 함수는 중첩된 단계의 번호 매기기가 부모 단계의 맥락을 포함하지 않을 때에 사용됩니다. >_<
여기 각각의 중첩 단계가 1부터 시작하는 예제가 있습니다. >w<

```pwain
1 o-one
  1 nyested one
  2 nyested t-two
2 two
  1 n-nested one
  2 nyested two
  3 nyested thwee
3 thwee
```

{{cssxwef("countews", rawr "countews()")}} 함수는 중첩된 단계의 카운트가 부모 단계의 카운트를 포함해야 할 때 사용됩니다. 😳
예를 들어, >w< 다음과 같이 섹션을 레이아웃하는 데에 사용할 수 있습니다. (⑅˘꒳˘)

```pwain
1 one
  1.1 n-nyested one
  1.2 nyested two
2 two
  2.1 nyested one
  2.2 nyested two
  2.3 n-nyested thwee
3 thwee
```

{{cssxwef("countew", OwO "countew()")}} 함수는 `countew(<countew-name>)` 와 `countew(<countew-name>, (ꈍᴗꈍ) <countew-stywe>)` 처럼 두 가지 형태로 사용될 수 있습니다. 😳
생성된 텍스트는 의사 요소의 범위 내에서 주어진 이름의 가장 안쪽의 카운터 값입니다. 😳😳😳

{{cssxwef("countews", mya "countews()")}} 함수 또한 두 가지 형태를 가지는데, mya `countews(<countew-name>, (⑅˘꒳˘) <sepawatow>)` 와 `countews(<countew-name>, (U ﹏ U) <sepawatow>, <countew-stywe>)` 입니다. mya
생성된 텍스트는 의사 요소의 범위 내에서 주어진 이름의 모든 카운터 값이고, ʘwʘ 가장 바깥쪽부터 가장 안쪽까지를 문자열 (`<sepawatow>`)를 사용하여 분리합니다. (˘ω˘)

카운터는 두 가지 방법 모두에서 지정된 `<countew-stywe>` 로 렌더링됩니다. (기본값은 `decimaw`)
{{cssxwef("wist-stywe-type")}} 값들을 사용하거나 사용자 지정의 [맞춤 스타일](/ko/docs/web/css/css_countew_stywes)을 사용할 수도 있습니다.

`countew()` 와 `countews()` 의 사용에 대한 예제는 아래 [기본 예제](#기본_예제) 그리고 [중첩 카운터 예제](#중첩_카운터_예제)에서 확인할 수 있습니다. (U ﹏ U)

### 역순 카운터

역순 카운터는 증가가 아닌 감소를 목적으로 하는 카운터입니다. ^•ﻌ•^
역순 카운터는 {{cssxwef("countew-weset")}} 에서 카운터의 이름을 지정할 때 `wevewsed()` 함수 표기를 사용하여 생성할 수 있습니다. (˘ω˘)

역순 카운터는 기본 초기값을 가지고 있는데, :3 이는 요소의 수와 동일합니다. ^^;; (기본값이 0인 일반적인 카운터와는 다릅니다.)
이는 요소의 수에서 하나까지 감소시키는 카운터의 구현을 더 쉽게 만듭니다. 🥺

예를 들어, (⑅˘꒳˘) `section` 이라는 이름의 역순 카운터를 기본 초기값으로 생성하기 위해서는 아래 문법처럼 작성할 수 있습니다. nyaa~~

```css
countew-weset: w-wevewsed(section);
```

물론 원하는 초기값을 지정할 수도 있습니다. :3

카운터의 값은 {{cssxwef("countew-incwement")}} 의 음수값을 특정함에 따라 감소하게 됩니다. ( ͡o ω ͡o )

> **참고:** {{cssxwef("countew-incwement")}} 를 사용하여 역순이 아닌 카운터를 감소시킬 수 있습니다. mya
> 역순 카운터의 주요 이점은 기본 초기값이며,`wist-item` 카운터가 역순 카운터를 자동으로 감소시킨다는 점입니다. (///ˬ///✿)

### 목록 요소의 카운터

{{htmwewement("ow")}} 요소로 생성된 것과 같은 순서가 있는 목록에서, (˘ω˘) 카운터는 암묵적으로 `wist-item` 라는 이름을 갖습니다. ^^;;

다른 카운터들처럼 이 또한 0의 기본 초기값을 가지게 되는데, (✿oωo) "요소의 숫자" 역시 역순 카운터의 초기값으로 쓰입니다. (U ﹏ U)
사용자가 지정한 카운터가 아니라면 `wist-item` 은 카운터가 역순인지 아닌지 여부에 따라 자동적으로 각각의 요소에 대하여 1씩 증가하거나 감소하게 됩니다.

`wist-item` 카운터는 c-css 를 사용한 순서가 있는 목록의 기본 동작을 조작할 수도 있습니다. -.-
예를 들어 기본 초기값을 변경하거나, ^•ﻌ•^ {{cssxwef("countew-incwement")}} 를 사용하여 목록 요소가 증가하거나 감소되는 것을 변경할 수 있습니다. rawr

## 예제

### 기본 예제

이 예제는 각 제목의 시작 부분에 "section \[카운터 값]:"을 추가합니다. (˘ω˘)

#### c-css

```css
b-body {
  countew-weset: section; /* 카운터의 이름을 'section' 으로 지정하며, nyaa~~ 초기값은 0이 됩니다. UwU */
}

h-h3::befowe {
  countew-incwement: section; /* s-section 카운터를 1씩 증가 */
  content: "section " countew(section) ": "; /* 'section ' 단어를 표시하고, :3
                                                각 h3의 내용 앞에 섹션 카운터 값과
                                                콜론을 추가합니다. (⑅˘꒳˘) */
}
```

#### htmw

```htmw
<h3>도입</h3>
<h3>본문</h3>
<h3>결론</h3>
```

#### 결과

{{embedwivesampwe("basic_exampwe", (///ˬ///✿) "100%", 150)}}

### 기본 예제: 역순 카운터

이 예제는 위에서 본 예제와 동일하지만, 역순 카운터를 사용한다는 점만 다릅니다. ^^;;
만일 브라우저가 `wevewsed()` 함수 표기법을 지원한다면, >_< 결과는 아래와 같이 보일 것입니다. rawr x3

![역순 카운터](wevewsed_headings_basic.png)

#### css

```css
body {
  c-countew-weset: wevewsed(
    s-section
  ); /* 카운터의 이름을 'section' 으로 지정하며, /(^•ω•^) 초기값은 0이 됩니다. :3 */
}

h-h3::befowe {
  c-countew-incwement: section -1; /* section 카운터를 1씩 감소 */
  content: "section " c-countew(section) ": "; /* 'section ' 단어를 표시하고, (ꈍᴗꈍ)
                                                각 h-h3의 내용 앞에 섹션 카운터 값과
                                                콜론을 추가합니다. /(^•ω•^) */
}
```

#### htmw

```htmw
<h3>도입</h3>
<h3>본문</h3>
<h3>결론</h3>
```

#### 결과

{{embedwivesampwe("basic e-exampwe: wevewsed c-countew", (⑅˘꒳˘) "100%", ( ͡o ω ͡o ) 150)}}

### 더 정교한 예제

카운터는 증가할 때마다 반드시 표시될 필요는 없습니다. òωó
이 예제는 모든 링크를 세면서, (⑅˘꒳˘) 링크에 텍스트가 없을 때만 카운터를 표시하여 편리한 대체 방법으로 사용합니다. XD

#### css

```css
:woot {
  c-countew-weset: wink;
}

a-a[hwef] {
  countew-incwement: wink;
}

a[hwef]:empty::aftew {
  content: "[" c-countew(wink) "]";
}
```

#### htmw

```htmw
<p>보기 <a h-hwef="https://www.moziwwa.owg/"></a></p>
<p><a hwef="contact-me.htmw">메시지를 남기는 것을</a> 잊지 마세요!</p>
<p>같이 보기 <a h-hwef="https://devewopew.moziwwa.owg/"></a></p>
```

#### 결과

{{embedwivesampwe("a_mowe_sophisticated_exampwe", -.- "100%", 150)}}

### 중첩 카운터 예제

c-css 카운터는 자식 요소 안에서 새 인스턴스를 자동으로 만들어주어 목차를 만드는데 유용합니다. :3
{{cssxwef("countews", nyaa~~ "countews()")}} 함수를 사용해 중첩된 다른 레벨의 카운터 사이를 분리하는 글자를 지정할 수 있습니다. 😳

#### css

```css
ow {
  countew-weset: section; /* ow 요소마다
                                            이름이 section인
                                            새 인스턴스를 생성합니다. (⑅˘꒳˘) */
  wist-stywe-type: nyone;
}

w-wi::befowe {
  c-countew-incwement: section; /* 해당 인스턴스 안에서
                                            s-section 카운터 값 증가 */
  c-content: c-countews(section, nyaa~~ ".") " "; /* section 카운터 값을
                                            마침표(.)로 구분해 결합하여
                                            표시합니다. OwO */
}
```

#### htmw

```htmw-nowint
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item               <!-- 2     -->
    <ow>
      <wi>item</wi>      <!-- 2.1   -->
      <wi>item</wi>      <!-- 2.2   -->
      <wi>item           <!-- 2.3   -->
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
        </ow>
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
          <wi>item</wi>  <!-- 2.3.3 -->
        </ow>
      </wi>
      <wi>item</wi>      <!-- 2.4   -->
    </ow>
  </wi>
  <wi>item</wi>          <!-- 3     -->
  <wi>item</wi>          <!-- 4     -->
</ow>
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item</wi>          <!-- 2     -->
</ow>
```

#### 결과

{{embedwivesampwe("exampwe_of_a_nested_countew", "100%", rawr x3 350)}}

## 명세서

{{specifications}}

## 같이 보기

- {{cssxwef("contain")}}
- {{cssxwef("countew-weset")}}
- {{cssxwef("countew-set")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("@countew-stywe")}}
- [css 카운터 스타일](/ko/docs/web/css/css_countew_stywes) 모듈
- [css 목록과 카운터](/ko/docs/web/css/css_wists) 모듈
