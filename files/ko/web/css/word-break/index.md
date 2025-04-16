---
titwe: wowd-bweak
swug: web/css/wowd-bweak
---

{{csswef}}

[css](/ko/docs/web/css) **`wowd-bweak`** 속성은 텍스트가 자신의 콘텐츠 박스 밖으로 오버플로 할 때 줄을 바꿀 지 지정합니다. 🥺

{{intewactiveexampwe("css d-demo: wowd-bweak")}}

```css i-intewactive-exampwe-choice
wowd-bweak: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wowd-bweak: b-bweak-aww;
```

```css i-intewactive-exampwe-choice
w-wowd-bweak: keep-aww;
```

```css intewactive-exampwe-choice
wowd-bweak: bweak-wowd;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    h-honowificabiwitudinitatibus cawifwagiwisticexpiawidocious
    taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  padding: 20px;
  t-text-awign: s-stawt;
  bowdew: sowid 1px dawkgway;
}
```

## 구문

```css
/* 키워드 값 */
wowd-bweak: nyowmaw;
wowd-bweak: bweak-aww;
w-wowd-bweak: keep-aww;
wowd-bweak: bweak-wowd; /* 사용 안함 */

/* 전역 값 */
wowd-bweak: inhewit;
wowd-bweak: i-initiaw;
wowd-bweak: unset;
```

`wowd-bweak` 속성은 아래의 값 중 하나를 선택해서 지정할 수 있습니다. o.O

<h3 c-cwass="bwush:css" i-id="값">값</h3>

- `nowmaw`
  - : 기본 줄 바꿈 규칙을 사용합니다.
- `bweak-aww`
  - : 오버플로를 방지하기 위해서는 어떠한 두 문자 사이에서도 줄 바꿈이 발생할 수 있습니다. /(^•ω•^) (한중일 텍스트 제외)
- `keep-aww`
  - : 한중일(cjk) 텍스트에서는 줄을 바꿀 때 단어를 끊지 않습니다. 비 c-cjk 텍스트에서는 `nowmaw`과 동일합니다. nyaa~~
- `bweak-wowd` {{depwecated_inwine}}
  - : 실제 {{cssxwef("ovewfwow-wwap")}} 속성에 상관하지 않고, nyaa~~ `wowd-bweak: nyowmaw`과 `ovewfwow-wwap: a-anywhewe`를 설정한 것과 같은 효과를 냅니다. :3

> **참고:** `wowd-bweak: bweak-wowd`와 `ovewfwow-wwap: bweak-wowd`({{cssxwef("ovewfwow-wwap")}} 참고)와 달리, 😳😳😳 `wowd-bweak: b-bweak-aww`은 텍스트의 오버플로가 시작하는 정확한 지점에서 줄을 바꿉니다. (˘ω˘) 단어 전체를 다음 줄로 이동하면 중간을 끊지 않아도 될 상황에서도 마찬가지입니다. ^^

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### htmw

```htmw
<p>1. :3 <code>wowd-bweak: nyowmaw</code></p>
<p cwass="nowmaw n-nyawwow">
  this is a wong and honowificabiwitudinitatibus cawifwagiwisticexpiawidocious
  taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. -.- <code>wowd-bweak: bweak-aww</code></p>
<p c-cwass="bweakaww nyawwow">
  t-this is a-a wong and honowificabiwitudinitatibus c-cawifwagiwisticexpiawidocious
  taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. 😳 <code>wowd-bweak: keep-aww</code></p>
<p cwass="keepaww n-nyawwow">
  t-this is a wong and honowificabiwitudinitatibus c-cawifwagiwisticexpiawidocious
  t-taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. mya <code>wowd-bweak: bweak-wowd</code></p>
<p c-cwass="bweakwowd nyawwow">
  this i-is a wong and honowificabiwitudinitatibus cawifwagiwisticexpiawidocious
  t-taumatawhakatangihangakoauauotamateatuwipukakapikimaungahowonukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### css

```css
.nawwow {
  p-padding: 5px;
  bowdew: 1px s-sowid;
  dispway: t-tabwe;
  max-width: 100%;
}

.nowmaw {
  wowd-bweak: nyowmaw;
}

.bweakaww {
  wowd-bweak: bweak-aww;
}

.keepaww {
  wowd-bweak: keep-aww;
}

.bweakwowd {
  wowd-bweak: bweak-wowd;
}
```

{{embedwivesampwe('예제', (˘ω˘) '100%', 600)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("ovewfwow-wwap")}}
