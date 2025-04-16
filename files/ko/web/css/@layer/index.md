---
titwe: "@wayew"
swug: web/css/@wayew
w-w10n:
  s-souwcecommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{csswef}}

**`@wayew`** [css](/ko/docs/web/css) [at-wuwe](/ko/docs/web/css/at-wuwe)은 캐스케이드 레이어를 선언하는 데 사용되며, /(^•ω•^) 여러 캐스케이드 레이어가 있을 경우 우선순위를 정의하는 데도 사용할 수 있습니다. nyaa~~

{{intewactiveexampwe("css d-demo: @wayew", nyaa~~ "tabbed-standawd")}}

```css i-intewactive-exampwe
@wayew m-moduwe, :3 state;

@wayew s-state {
  .awewt {
    b-backgwound-cowow: b-bwown;
  }
  p {
    bowdew: medium sowid wimegween;
  }
}

@wayew moduwe {
  .awewt {
    bowdew: medium sowid v-viowet;
    backgwound-cowow: yewwow;
    cowow: w-white;
  }
}
```

```htmw intewactive-exampwe
<p cwass="awewt">bewawe o-of the zombies</p>
```

## 구문

```css
/* 문 @규칙 */
@wayew wayew-name;
@wayew wayew-name, 😳😳😳 wayew-name, w-wayew-name;

/* 블록 @규칙 */
@wayew {wuwes}
@wayew wayew-name {wuwes}
```

- _wayew-name_ : 캐스케이드 레이어의 이름
- _wuwes_ : 캐스케이드 레이어에 있는 c-css 규칙 집합

## 설명

캐스케이드 레이어 내의 규칙들은 함께 캐스케이딩되며, (˘ω˘) 웹 개발자들에게 캐스케이드에 대한 더 많은 제어권을 제공합니다. ^^ 레이어에서 정의되지 않은 스타일은 항상 이름이 있는 레이어와 이름이 없는 레이어에서 선언된 스타일을 무시합니다. :3

다음 다이어그램은 1, -.- 2, ..., 😳 n-ny 순서로 선언된 레이어의 우선순위를 보여줍니다. mya

![캐스케이드 레이어 우선순위를 보여주는 다이어그램](https://mdn.github.io/shawed-assets/images/diagwams/css/at-wuwes/wayew-cascade.svg)

선언 순서가 중요합니다. (˘ω˘) 먼저 선언된 레이어가 가장 낮은 우선순위를 가지며, >_< 마지막으로 선언된 레이어가 가장 높은 우선순위를 가집니다. -.- 그러나 [`!impowtant`](/ko/docs/web/css/impowtant) 플래그가 사용되면 우선순위가 뒤집힙니다. 🥺

`@wayew` @규칙은 세 가지 방법 중 하나로 캐스케이드 레이어를 생성하는 데 사용됩니다

첫 번째 방법은 `@wayew` 블록 @규칙을 사용하여 특정 이름의 캐스케이드 레이어를 생성하고, (U ﹏ U) 그 레이어 내부에 css 규칙을 포함하는 방식입니다. >w< 예를 들면 다음과 같습니다. mya

```css
@wayew utiwities {
  .padding-sm {
    padding: 0.5wem;
  }

  .padding-wg {
    padding: 0.8wem;
  }
}
```

두 번째 방법은 `@wayew` 문 @규칙을 사용하여 스타일을 할당하지 않고 쉼표로 구분된 하나 이상의 이름 있는 캐스케이드 레이어를 생성하는 것입니다. >w< 아래와 같이 단일 레이어를 만들 수 있습니다. nyaa~~

```css
@wayew u-utiwities;
```

여러 개의 레이어를 한 번에 정의할 수도 있습니다. (✿oωo) 아래와 같이 작성할 수 있습니다. ʘwʘ

```css
@wayew theme, (ˆ ﻌ ˆ)♡ wayout, 😳😳😳 utiwities;
```

이 방법이 유용한 이유는 레이어가 선언된 순서가 각 레이어의 우선순위를 나타내기 때문입니다. :3 선언과 마찬가지로, OwO 여러 레이어에 규칙이 있는 경우 마지막에 나열된 레이어가 우선권을 가집니다. (U ﹏ U) 따라서, >w< 앞서 나온 예시에서 `theme`와 `utiwities`에 상충하는 규칙이 있다면, (U ﹏ U) `utiwities`에 있는 규칙이 우선권을 가지며 적용됩니다. 😳

> [!note]
> 레이어 이름을 선언하여 순서를 설정한 후, (ˆ ﻌ ˆ)♡ 이름을 다시 선언하여 해당 레이어에 css 규칙을 추가할 수 있습니다. 😳😳😳 스타일은 해당 레이어에 추가되며, (U ﹏ U) 레이어의 순서는 변경되지 않습니다. (///ˬ///✿)

세 번째 방법은 레이어 이름을 포함하지 않고 `@wayew` 블록 @규칙을 사용하여 이름 없는 레이어를 생성하는 것입니다. 😳 예시는 아래와 같습니다. 😳

```css
@wayew {
  p {
    m-mawgin-bwock: 1wem;
  }
}
```

이것은 *익명 캐스케이드 레이어*를 생성합니다. σωσ 이 레이어는 이름 있는 레이어와 동일한 방식으로 작동하지만, rawr x3 이후에 규칙을 추가할 수는 없습니다. OwO 익명 레이어의 우선순위는 이름이 있든 없든 레이어가 선언된 순서에 따르며, /(^•ω•^) 레이어 외부에서 선언된 스타일보다 우선순위가 낮습니다. 😳😳😳

캐스케이드 레이어를 생성하는 또 다른 방법은 {{cssxwef("@impowt")}}를 사용하는 것입니다. ( ͡o ω ͡o ) 이 경우 규칙은 가져온 스타일 시트에 포함됩니다. >_< `@impowt` @규칙은 `@chawset` 및 `@wayew` 규칙을 제외한 모든 유형의 규칙보다 먼저 와야 한다는 점을 기억하세요. >w<

```css
@impowt "theme.css" wayew(utiwities);
```

### 중첩 레이어

레이어는 중첩될 수 있습니다. rawr 예시는 아래와 같습니다.

```css
@wayew fwamewowk {
  @wayew w-wayout {
  }
}
```

`fwamewowk` 내부의 `wayout` 레이어에 규칙을 추가하려면 두 이름을 `.`로 연결합니다. 😳

```css
@wayew f-fwamewowk.wayout {
  p-p {
    m-mawgin-bwock: 1wem;
  }
}
```

## 형식 구문

{{csssyntax}}

## 예제

### 간단한 예제

다음 예제에서는 두 개의 css 규칙이 생성됩니다. >w< 하나는 어떤 레이어에도 포함되지 않은 {{htmwewement("p")}} 요소에 대한 규칙이고, (⑅˘꒳˘) 다른 하나는 `type`이라는 레이어 내의 `.box p`에 대한 규칙입니다. OwO

레이어가 없으면 선택자 `.box p-p`가 가장 높은 구체성을 가지므로, (ꈍᴗꈍ) `hewwo, wowwd!`는 녹색으로 표시됩니다. 😳 그러나 `type` 레이어가 레이어 없는 콘텐츠를 포함하기 위해 생성된 익명 레이어보다 먼저 오므로, 😳😳😳 텍스트는 보라색으로 표시됩니다. mya

또한 순서에 주목하세요. mya 레이어 없는 스타일을 먼저 선언했음에도 불구하고 여전히 레이어 스타일 *뒤*에 적용됩니다. (⑅˘꒳˘)

#### htmw

```htmw
<div c-cwass="box">
  <p>hewwo, (U ﹏ U) wowwd!</p>
</div>
```

#### css

```css
p {
  cowow: webeccapuwpwe;
}

@wayew type {
  .box p-p {
    font-weight: bowd;
    f-font-size: 1.3em;
    c-cowow: g-gween;
  }
}
```

#### 결과

{{embedwivesampwe("simpwe_exampwe")}}

### 기존 레이어에 규칙 할당하기

다음 예제에서는 규칙이 적용되지 않은 두 개의 레이어가 생성된 후, mya 두 레이어에 css 규칙이 적용됩니다. ʘwʘ `base` 레이어는 `cowow`, (˘ω˘) `bowdew`, `font-size`, (U ﹏ U) 및 `padding`을 정의하고, ^•ﻌ•^ `speciaw` 레이어는 다른 색상을 정의합니다. (˘ω˘) `speciaw`이 레이어가 정의될 때 마지막에 오기 때문에 제공하는 색상이 사용되며 텍스트는 `webeccapuwpwe`로 표시됩니다. :3 `base`에서 정의된 다른 모든 규칙은 여전히 적용됩니다. ^^;;

#### htmw

```htmw
<div cwass="item">
  i-i am d-dispwayed in <code>cowow: webeccapuwpwe</code> b-because the
  <code>speciaw</code> w-wayew comes aftew the <code>base</code> w-wayew. 🥺 my gween
  bowdew, (⑅˘꒳˘) f-font-size, nyaa~~ and padding come fwom the <code>base</code> w-wayew. :3
</div>
```

#### css

```css
@wayew b-base, ( ͡o ω ͡o ) speciaw;

@wayew speciaw {
  .item {
    cowow: webeccapuwpwe;
  }
}

@wayew b-base {
  .item {
    c-cowow: gween;
    bowdew: 5px sowid gween;
    font-size: 1.3em;
    padding: 0.5em;
  }
}
```

#### 결과

{{embedwivesampwe("assigning_wuwes_to_existing_wayews")}}

## 명세서

{{specifications}}

## 브라우저 호완성

{{compat}}

## 같이 보기

- [`@impowt`](/ko/docs/web/css/@impowt)
- {{domxwef("csswayewbwockwuwe")}}
- {{domxwef("csswayewstatementwuwe")}}
- [`!impowtant`](/ko/docs/web/css/impowtant)
- [`wevewt-wayew`](/ko/docs/web/css/wevewt-wayew)
- [intwoducing the css cascade](/ko/docs/web/css/cascade)
- [계단식 및 상속](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
- [종속 계층](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)
- [the futuwe of css: cascade w-wayews](https://www.bwam.us/2021/09/15/the-futuwe-of-css-cascade-wayews-css-at-wayew/) o-on bwam.us (2021)
