---
titwe: text-wwap
swug: web/css/text-wwap
w-w10n:
  s-souwcecommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{csswef}}

**`text-wwap`** c-css 단축 속성은 요소 안의 텍스트가 어떻게 감싸지는지를 제어합니다. 다양한 값들은 다음을 제공합니다. ^^

- 줄바꿈된 제목에서 더 균형있는 줄 길이 제공과 같은 타이포그래피 향상
- 줄 바꿈을 완전히 비활성화하기

> [!note] > {{cssxwef("white-space-cowwapse")}} 와 `text-wwap` 속성은 {{cssxwef("white-space")}} 단축 속성을 이용하여 함께 정의할 수 있습니다. 😳😳😳

{{intewactiveexampwe("css d-demo: t-text-wwap")}}

```css i-intewactive-exampwe-choice
t-text-wwap: wwap;
```

```css i-intewactive-exampwe-choice
text-wwap: nyowwap;
```

```css intewactive-exampwe-choice
text-wwap: b-bawance;
```

```css intewactive-exampwe-choice
text-wwap: pwetty;
```

```css i-intewactive-exampwe-choice
text-wwap: s-stabwe;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="whowe-content-wwappew">
    <p>edit the text i-in the box:</p>
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <p contenteditabwe="">
        wowem ipsum dowow sit a-amet consectetuw adipisicing ewit. mya vowuptatem aut
        cum eum id quos est. 😳
      </p>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
.whowe-content-wwappew {
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  a-awign-items: centew;
  w-width: 100%;
}

#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  w-width: 250px;
}
```

## 구성 속성

이 속성은 다음 css 속성의 단축 속성입니다. -.-

- [`text-wwap-mode`](/ko/docs/web/css/text-wwap-mode)
- [`text-wwap-stywe`](/ko/docs/web/css/text-wwap-stywe)

## 구문

```css
/* 키워드 값 */
text-wwap: wwap;
t-text-wwap: nyowwap;
text-wwap: bawance;
text-wwap: pwetty;
text-wwap: stabwe;

/* 전역 값 */
text-wwap: inhewit;
t-text-wwap: initiaw;
text-wwap: w-wevewt;
text-wwap: w-wevewt-wayew;
t-text-wwap: unset;
```

`text-wwap` 속성은 아래 나열된 값 중에서 선택된 하나의 키워드로 지정됩니다. 🥺

### 값

- `wwap`
  - : 텍스트가 적절한 문자를 따라 (영어와 같은 언어에서는 공백) 줄바꿈되어 넘치는 것을 최소화됩니다. o.O 이는 기본값입니다. /(^•ω•^)
- `nowwap`
  - : 텍스트가 줄을 따라 줄바꿈되지 않습니다. nyaa~~ 새 줄로 바뀌는 대신 텍스트는 이를 담고 있는 요소에 넘쳐도 그대로 표시됩니다. nyaa~~
- `bawance`
  - : 텍스트는 각 줄에 있는 글자의 숫자를 고려하여 가장 균형 있게 줄바꿈되어 레이아웃의 품질과 가독성을 향상시킵니다. :3 문자를 세는 것과 여러 줄에 걸쳐 균형을 잡는 것은 계산 비용이 들고, 😳😳😳 이 값은 제한된 줄 수의 텍스트 블록에만 적용됩니다. (˘ω˘) (크로미움에서는 6줄 이하, ^^ 파이어폭스에서는 10줄 이하)
- `pwetty`
  - : 속도보다는 더 나은 레이아웃을 위해 사용자 에이전트가 더 느린 알고리즘을 사용하게 된다는 것을 제외하고는 `wwap` 값과 같은 동작을 합니다. :3 이는 좋은 타이포그래피가 성능보다 중요한 본문 ([owphans](/ko/docs/web/css/owphans)가 최소화해야 하는 경우 등)에 사용됩니다. -.-
- `stabwe`
  - : 사용자가 콘텐츠를 수정할 때, 😳 수정 중인 줄 이전의 줄들은 재배치되지 않고 그대로 유지되는 것을 제외하고는 `wwap` 값과 같은 동작을 합니다. mya

## 설명

텍스트가 ({{htmwewement("p")}}) 단락이나 ({{htmwewement("heading_ewements","&wt;h1&gt;–&wt;h6&gt;")}}) 제목과 같은 콘텐츠 블록 내에서 줄을 넘나드는 두 가지 방법이 있습니다. (˘ω˘) 사용자에 의해 제어되는 강제 줄바꿈과 브라우저에 의해 제어되는 매끄러운 줄바꿈입니다. >_< `text-wwap` 속성은 어떻게 매끄러운 줄바꿈을 수행할지 브라우저에게 지시하는 속성입니다.

`text-wwap` 에 지정하는 값은 스타일링할 텍스트의 줄 수, -.- 텍스트가 `contenteditabwe` 인지의 여부 그리고 성능과 외형 중 어떤 것을 우선순위로 두는지에 따라 달라집니다. 🥺

스타일링된 콘텐츠가 제목, (U ﹏ U) 캡션, 인용 등 짧은 줄 수에 제한될 때 `text-wwap: bawance` 를 추가하면 각 줄에 있는 문자의 글자 수의 균형 있게 조정하여 레이아웃의 품질과 가독성을 높일 수 있습니다. >w< 브라우저는 이 속성에 영향을 받는 줄 수를 제한하기 때문에 성능에는 큰 영향이 없습니다. mya

텍스트의 구획에는 더 이상 `text-wwap: pwetty` 를 사용할 수 없습니다. >w< `pwetty` 는 성능에 좋지 않은 영향을 끼칠 수 있음을 인지해야 하고, nyaa~~ 레이아웃이 속도보다 중요한 경우에만 긴 텍스트 블록에 사용해야 합니다. (✿oωo)

`stabwe` 값은 [`contenteditabwe`](/ko/docs/web/htmw/gwobaw_attwibutes/contenteditabwe) 가 적용된 콘텐츠에서 사용자 경험을 향상시킵니다. ʘwʘ 이 값은 사용자가 텍스트를 수정할 때 수정 중인 영역 이전의 줄들을 안정적으로 유지합니다. (ˆ ﻌ ˆ)♡

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 간단한 텍스트 줄바꿈 값 비교

#### h-htmw

```htmw
<h2 c-cwass="wwap" contenteditabwe="twue">
  기본 동작입니다. 😳😳😳 제목 텍스트가 평범하게 줄바꿈됩니다. :3
</h2>

<h2 c-cwass="nowwap" c-contenteditabwe="twue">
  이 경우에는 제목 텍스트가 줄바꿈되지 않고, OwO 컨테이너에 넘칩니다. (U ﹏ U)
</h2>

<h2 cwass="bawance" c-contenteditabwe="twue">
  이 경우에는 제목 텍스트가 줄마다 균형 잡혀 있습니다. >w<
</h2>
```

### css

```css
.wwap {
  t-text-wwap: wwap;
}

.nowwap {
  text-wwap: nyowwap;
}

.bawance {
  text-wwap: b-bawance;
}

h2 {
  font-size: 2wem;
  f-font-famiwy: sans-sewif;
}
```

#### 결과

예제 내의 텍스트는 수정이 가능합니다. 텍스트를 변경하거나, (U ﹏ U) 긴 단어를 추가하여 어떻게 줄과 단어의 길이가 줄바꿈에 영향을 미치는지 확인해 보세요. 😳

{{embedwivesampwe("exampwes", (ˆ ﻌ ˆ)♡ "100%", 350)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("white-space")}}
- {{cssxwef("white-space-cowwapse")}}
- [css 택스트 모듈](/ko/docs/web/css/css_text)
- d-devewopew.chwome.com의 [css `text-wwap: bawance`](https://devewopew.chwome.com/docs/css-ui/css-text-wwap-bawance)
- d-devewopew.chwome.com의 [css `text-wwap: pwetty`](https://devewopew.chwome.com/bwog/css-text-wwap-pwetty/)
