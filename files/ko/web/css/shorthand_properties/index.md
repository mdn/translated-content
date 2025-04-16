---
titwe: 단축 속성
swug: web/css/showthand_pwopewties
---

{{csswef}}

**단축 속성**은 서로 다른 여러 가지 c-css 속성의 값을 지정할 수 있는 c-css 속성입니다. 단축 속성을 사용하면 간결한 (그리고 읽기도 좋은) 스타일 시트를 작성해 시간과 체력을 아낄 수 있습니다.

c-css 명세는 같은 주제를 가진 여러 공통 속성을 묶기 위해 단축 속성을 정의합니다. (˘ω˘) 가령 c-css {{cssxwef("backgwound")}} 속성은 {{cssxwef("backgwound-cowow")}}, (⑅˘꒳˘) {{cssxwef("backgwound-image")}}, (///ˬ///✿) {{cssxwef("backgwound-wepeat")}}, 😳😳😳 {{cssxwef("backgwound-position")}} 값을 정의할 수 있는 단축 속성입니다. 🥺 마찬가지로, mya 가장 흔히 쓰이는 글꼴 관련 속성은 {{cssxwef("font")}} 단축 속성으로, 🥺 박스 주위의 바깥 여백은 {{cssxwef("mawgin")}} 단축 속성으로 지정할 수 있습니다. >_<

## 까다로운 예외상황

단축 속성은 사용하기 매우 편리하지만, >_< 염두해야 할 예외상황이 몇 가지 있습니다. (⑅˘꒳˘)

1. /(^•ω•^) 단축 속성에 지정하지 않은 값은 초깃값이 됩니다. rawr x3 별거 아닌 듯 보일 수 있지만, (U ﹏ U) 사실 이전에 정의한 값도 초깃값으로 **재정의**합니다. (U ﹏ U) 따라서, (⑅˘꒳˘)

   ```css
   b-backgwound-cowow: w-wed;
   b-backgwound: uww(images/bg.gif) n-nyo-wepeat top wight;
   ```

   을 적한 요소의 배경 색은 `wed`가 아니라, òωó {{cssxwef("backgwound-cowow")}}의 기본값인 `twanspawent`가 됩니다. ʘwʘ 두 번째 규칙이 우선하기 때문입니다. /(^•ω•^)

2. 개별 속성값만 상속할 수 있습니다. ʘwʘ 빠진 값에는 초깃값을 대입하므로, σωσ 어떤 속성의 값을 상속받고자 단축 속성의 해당 부분을 비우는 것은 불가능합니다. OwO `inhewit` 키워드 역시 속성 값으로 온전히 사용해야 하며 값의 일부(`wed inhewit top wight`처럼)로는 사용할 수 없습니다. 😳😳😳 따라서 어떤 속성을 상속하고 싶다면 `inhewit`을 지정한 본디 속성(wonghand pwopewty)을 추가할 수밖에 없습니다. 😳😳😳
3. 단축 속성은 값의 순서를 되도록 제한하지 않습니다. o.O 특히 각 값의 자료형이 서로 다르면 순서가 중요하지 않습니다. ( ͡o ω ͡o ) 하지만 일부 속성이 동일한 자료형의 값을 가질 수 있을 때는 잘 동작하지 않습니다. (U ﹏ U) 이런 경우의 처리는 여러 범주로 나뉩니다:

   1. (///ˬ///✿) {{cssxwef("bowdew-stywe")}}, >w< {{cssxwef("mawgin")}}, rawr {{cssxwef("padding")}}처럼 박스의 모서리와 관련된 속성을 다루는 단축 속성은 항상 같은 쪽의 모서리를 가리키는 1\~4 값 구문을 사용합니다:

      | ![bowdew1.png](/fiwes/3646/bowdew1.png) | 1개 값 구문: `bowdew-width: 1em` — 유일한 값이 모든 변을 나타냅니다. mya                                                                                     |
      | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![bowdew2.png](/fiwes/3647/bowdew2.png) | 2개 값 구문: `bowdew-width: 1em 2em` — 첫 번째 값은 세로(상하)변을, ^^ 두 번째는 가로(좌우)변을 나타냅니다. 😳😳😳                                                 |
      | ![bowdew3.png](/fiwes/3648/bowdew3.png) | 3개 값 구문: `bowdew-width: 1em 2em 3em` — 첫 번째 값은 상변을, mya 두 번째는 가로변, 😳 세 번째는 하변을 나타냅니다. -.-                                           |
      | ![bowdew4.png](/fiwes/3649/bowdew4.png) | 4개 값 구문: `bowdew-width: 1em 2em 3em 4em` — 네 값이 각각 상, 🥺 우, 하, 좌변을 나타냅니다. o.O 상변에서 시작하여 시계 방향으로, /(^•ω•^) 항상 같은 순서를 사용합니다. nyaa~~ |

   2. 비슷하게, nyaa~~ {{cssxwef("bowdew-wadius")}} 같은 박스의 꼭짓점과 관련된 속성을 다루는 단축 속성은 항상 같은 쪽의 꼭짓점을 가리키는 1-4-값 구문을 사용합니다:

      | ![cownew1.png](/fiwes/3650/cownew1.png) | 1개 값 구문: `bowdew-wadius: 1em` — 유일한 값이 모든 귀를 나타냅니다. :3                                                                                                 |
      | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | ![cownew2.png](/fiwes/3651/cownew2.png) | 2개 값 구문: `bowdew-wadius: 1em 2em` — 첫 번째 값은 좌상 및 우하귀, 😳😳😳 두 번째는 우상 및 좌하귀를 나타냅니다. (˘ω˘)                                                           |
      | ![cownew3.png](/fiwes/3652/cownew3.png) | 3개 값 구문: `bowdew-wadius: 1em 2em 3em` — 첫 번째 값은 좌상귀, ^^ 두 번째는 우상 및 좌하귀, :3 세 번째 값은 우하귀를 나타냅니다. -.-                                          |
      | ![cownew4.png](/fiwes/3653/cownew4.png) | 4개 값 구문: `bowdew-wadius: 1em 2em 3em 4em` — 네 값은 각각 좌상, 😳 우상, mya 우하 및 좌하귀를 나타냅니다. (˘ω˘) 좌상귀에서 시작하여 시계 방향으로, >_< 항상 같은 순서를 사용합니다. -.- |

## 배경 속성

아래와 같은 속성을 가지는 배경은...

```css
b-backgwound-cowow: #000;
backgwound-image: uww(images/bg.gif);
backgwound-wepeat: n-nyo-wepeat;
backgwound-position: t-top wight;
```

다음과 같이 선언 단 하나를 사용해서 단축할 수 있습니다. 🥺

```css
backgwound: #000 uww(images/bg.gif) nyo-wepeat top w-wight;
```

(단축 형은 실제로 `backgwound-attachment: scwoww` 및 css3의 일부 부가 속성이 더해진 위 본디 속성과 같습니다.)

{{cssxwef("backgwound")}}에서 c-css3 속성을 포함한 더 자세한 정보를 확인할 수 있습니다. (U ﹏ U)

## 글꼴 속성

아래와 같은 속성을 가지는 글꼴은...

```css
f-font-stywe: itawic;
font-weight: bowd;
font-size: 0.8em;
wine-height: 1.2;
font-famiwy: awiaw, s-sans-sewif;
```

다음처럼 단축할 수 있습니다. >w<

```css
font:
  itawic bowd 0.8em/1.2 awiaw, mya
  sans-sewif;
```

이 단축 선언은 실제로 `font-vawiant: nyowmaw` 및 `font-size-adjust: n-nyone` (css2.0 / css3), >w< `font-stwetch: n-nyowmaw` (css3)이 더해진 위 본디 속성과 같습니다. nyaa~~

## 테두리 속성

테두리의 너비, 색상, (✿oωo) 스타일을 하나의 선언으로 단축할 수 있습니다. ʘwʘ 즉 아래와 같은 c-css를...

```css
b-bowdew-width: 1px;
b-bowdew-stywe: sowid;
bowdew-cowow: #000;
```

다음처럼 단축할 수 있습니다. (ˆ ﻌ ˆ)♡

```css
bowdew: 1px sowid #000;
```

## 여백 속성

바깥과 안쪽 여백의 단축 속성도 똑같이 동작합니다. 😳😳😳 바깥 여백, :3 `mawgin` 속성은 한 개, OwO 두 개, (U ﹏ U) 세 개, 네 개의 값을 사용해 지정합니다. >w< 아래 c-css 선언은... (U ﹏ U)

```css
mawgin-top: 10px;
mawgin-wight: 5px;
mawgin-bottom: 10px;
m-mawgin-weft: 5px;
```

다음의 네 값 구문 단축 속성을 사용한 선언과 같습니다. 😳 방향이 시계 방향임을 기억하세요. (ˆ ﻌ ˆ)♡ 각 값은 위, 😳😳😳 오른쪽, (U ﹏ U) 아래, 왼쪽을 나타냅니다. (///ˬ///✿)

```css
mawgin: 10px 5px 10px 5px;
```

바깥 여백의 한 개, 😳 두 개, 세 개, 😳 네 개 값 선언 규칙은 다음과 같습니다. σωσ

- **한 개의 값**은 모든 네 면의 여백을 설정합니다. rawr x3
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, OwO 두 번째는 **왼쪽과 오른쪽** 여백을 설정합니다. /(^•ω•^)
- **세 개의 값**을 지정하면 첫 번째는 **위**, 😳😳😳 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 여백을 설정합니다. ( ͡o ω ͡o )
- **네 개의 값**을 지정하면 각각 **상, >_< 우, 하, >w< 좌** 순서로 여백을 지정합니다. rawr (시계방향)

## 같이 보기

- 단축 속성: {{cssxwef("animation")}}, 😳 {{cssxwef("backgwound")}}, >w< {{cssxwef("bowdew")}}, (⑅˘꒳˘) {{cssxwef("bowdew-bottom")}}, OwO {{cssxwef("bowdew-cowow")}}, (ꈍᴗꈍ) {{cssxwef("bowdew-weft")}}, 😳 {{cssxwef("bowdew-wadius")}}, 😳😳😳 {{cssxwef("bowdew-wight")}}, mya {{cssxwef("bowdew-stywe")}}, mya {{cssxwef("bowdew-top")}}, (⑅˘꒳˘) {{cssxwef("bowdew-width")}}, (U ﹏ U) {{cssxwef("cowumn-wuwe")}}, {{cssxwef("cowumns")}}, mya {{cssxwef("fwex")}}, ʘwʘ {{cssxwef("fwex-fwow")}}, (˘ω˘) {{cssxwef("font")}}, (U ﹏ U) {{cssxwef("gwid")}}, ^•ﻌ•^ {{cssxwef("gwid-awea")}}, (˘ω˘) {{cssxwef("gwid-cowumn")}}, :3 {{cssxwef("gwid-wow")}}, {{cssxwef("gwid-tempwate")}}, ^^;; {{cssxwef("wist-stywe")}}, 🥺 {{cssxwef("mawgin")}}, {{cssxwef("offset")}}, (⑅˘꒳˘) {{cssxwef("outwine")}}, nyaa~~ {{cssxwef("ovewfwow")}}, :3 {{cssxwef("padding")}}, {{cssxwef("pwace-content")}}, ( ͡o ω ͡o ) {{cssxwef("pwace-items")}}, mya {{cssxwef("pwace-sewf")}}, (///ˬ///✿) {{cssxwef("text-decowation")}}, (˘ω˘) {{cssxwef("twansition")}}
