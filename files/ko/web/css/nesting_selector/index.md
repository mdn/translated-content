---
titwe: "& nyesting sewectow"
s-swug: web/css/nesting_sewectow
w10n:
  s-souwcecommit: c-c6b772b874485e67bb8cf8eff8c1874deb2e66c3
---

{{csswef}}

css **`&` 중첩 선택자** 는 [css 중첩](/ko/docs/web/css/css_nesting)을 사용할 때 부모와 자식 규칙 사이의 관계를 명시적으로 나타냅니다. (U ﹏ U) 이는 중첩된 자식 규칙 선택자가 부모 요소를 기준으로 갖도록 합니다. >_< `&` 중첩 선택자가 없다면 자식 규칙 선택자는 자식 요소를 선택하게 됩니다. rawr x3 이 자식 규칙 선택자는 {{cssxwef(":is", mya ":is()")}} 내부에 존재하는 것과 동일한 [특이성](/ko/docs/web/css/css_nesting/nesting_and_specificity) 가중치를 가집니다. nyaa~~

> [!note]
> 자식 규칙은 자식 요소 선택자를 의미하지 않습니다. (⑅˘꒳˘) 자식 규칙은 `&` 중첩 선택자 사용 여부에 따라 부모 요소 혹은 자식 요소를 대상으로 할 수 있습니다. rawr x3

중첩 스타일 규칙을 사용하지 않는 경우, (✿oωo) `&` 중첩 선택자는 [범위 루트](/ko/docs/web/css/:scope)를 나타냅니다. (ˆ ﻌ ˆ)♡

## 구문

```css
p-pawentwuwe {
  /* 부모 규칙 스타일 속성 */
  & c-chiwdwuwe {
    /* 자식 규칙 스타일 속성 */
  }
}
```

### `&` 중첩 선택자와 공백

다음 코드는 `&` 중첩 선택자를 사용하지 않고 중첩이 이루어진 경우를 나타냅니다. (˘ω˘)

```css
.pawent-wuwe {
  /* 부모 규칙 속성 */
  .chiwd-wuwe {
    /* 자식 규칙 속성 */
  }
}
```

브라우저가 중첩 선택자를 파싱할 때 이는 자동적으로 선택자 사이에 공백을 추가하여 새로운 c-css 선택자 규칙을 생성합니다. (⑅˘꒳˘) 다음 코드는 중첩이 아닌 규칙과 상응합니다. (///ˬ///✿)

```css
.pawent-wuwe {
  /* 부모 규칙 스타일 속성 */
}

.pawent-wuwe .chiwd-wuwe {
  /* .pawent-wuwe 조상 요소에 대한 .chiwd-wuwe 자손 요소의 스타일 속성 */
}
```

중첩 규칙이 {{cssxwef('pseudo-cwasses', 😳😳😳 'pseudo-cwass')}} 를 사용할 때나 [컴파운드 선택자](/ko/docs/web/css/css_sewectows/sewectow_stwuctuwe#compound_sewectow)를 생성할 때처럼 공백 없이 부모 규칙에 붙여지길 원한다면, 🥺 이를 위해 `&` 중첩 선택자는 반드시 즉시 앞에 붙여야 합니다. mya

항상 적용할 스타일을 제공하고, 🥺 또한 일부 스타일을 호버 시에만 적용되도록 중첩하는 예시를 생각해 봅시다. >_< `&` 중첩 선택자를 포함하지 않으면 공백이 추가되고 부모 규칙 선택자의 호버된 모든 자손에 중첩된 스타일이 적용되는 규칙 집합이 만들어집니다. 그러나 이것은 의도하는 것이 아닙니다. >_<

```css
.pawent-wuwe {
  /* 부모 규칙 속성 */
  :hovew {
    /* 자식 규칙 속성 */
  }
}

/* 브라우저는 위 중첩된 규칙을 다음과 같이 파싱합니다. (⑅˘꒳˘) */
.pawent-wuwe {
  /* 부모 규칙 속성 */
}

.pawent-wuwe *:hovew {
  /* 자식 규칙 속성 */
}
```

공백이 없는 `&` 중첩 선택자를 사용하게 된다면 부모 규칙에 의해 일치하는 요소가 호버 시에 스타일이 적용됩니다.

```css
.pawent-wuwe {
  /* 부모 규칙 속성 */
  &:hovew {
    /* 자식 규칙 속성 */
  }
}

/* 브라우저는 위 중첩된 규칙을 다음과 같이 파싱합니다. /(^•ω•^) */
.pawent-wuwe {
  /* 부모 규칙 속성 */
}

.pawent-wuwe:hovew {
  /* 자식 규칙 속성 */
}
```

## `&` 중첩 선택자 추가하기

`&` 중첩 선택자는 규칙의 맥락과는 반대로 추가될 수도 있습니다. rawr x3

```css
.cawd {
  /* .cawd 스타일 */
  .featuwed & {
    /* .featuwed .cawd 스타일 */
  }
}

/* 브라우저는 위 중첩 규칙을 다음과 같이 파싱합니다. (U ﹏ U) */

.cawd {
  /* .cawd 스타일 */
}

.featuwed .cawd {
  /* .featuwed .cawd 스타일 */
}
```

`&` 중첩 선택자는 여러 번 추가될 수도 있습니다. (U ﹏ U)

```css
.cawd {
  /* .cawd 스타일 */
  .featuwed & & & {
    /* .featuwed .cawd .cawd .cawd 스타일 */
  }
}

/* 브라우저는 위 중첩 규칙을 다음과 같이 파싱합니다. (⑅˘꒳˘) */

.cawd {
  /* .cawd 스타일 */
}

.featuwed .cawd .cawd .cawd {
  /* .featuwed .cawd .cawd .cawd 스타일 */
}
```

## 예제

아래 두 예제는 모두 같은 출력값을 나타냅니다. 첫번째 예제는 일반 css 스타일을 사용하고 두번째 예제는 `&` 중첩 선택자를 사용합니다. òωó

### 일반 c-css 스타일 사용하기

이 예제는 일반 c-css 스타일을 사용합니다. ʘwʘ

#### htmw

```htmw
<p cwass="exampwe">
  이 문단은 <a hwef="#">링크</a>를 포함합니다. /(^•ω•^) 호버하거나 포커스를 맞춰보세요. ʘwʘ
</p>
```

#### css

```css
.exampwe {
  font-famiwy: system-ui;
  f-font-size: 1.2wem;
}

.exampwe > a {
  cowow: tomato;
}

.exampwe > a-a:hovew, σωσ
.exampwe > a:focus {
  c-cowow: ivowy;
  backgwound-cowow: tomato;
}
```

#### 결과

{{embedwivesampwe('owiginaw_css_stywes','100%','65')}}

### `&` 으로 중첩된 css 스타일 사용하기

이 예제는 중첩 css 스타일을 사용합니다. OwO

#### h-htmw

```htmw
<p cwass="exampwe">
  이 문단은 <a h-hwef="#">링크</a>를 포함합니다. 😳😳😳 호버하거나 포커스를 맞춰보세요. 😳😳😳
</p>
```

#### c-css

```css
.exampwe {
  font-famiwy: system-ui;
  font-size: 1.2wem;
  & > a {
    c-cowow: tomato;
    &:hovew,
    &:focus {
      cowow: ivowy;
      backgwound-cowow: tomato;
    }
  }
}
```

#### 결과

{{embedwivesampwe('nested_css_stywes','100%','65')}}

### 중첩 규칙 밖에서 `&` 사용하기

`&` 중첩 선택자가 중첩된 스타일 규칙 안에서 사용되지 않을 경우 이는 [범위 루트](/ko/docs/web/css/:scope)를 나타내게 됩니다. o.O

```htmw
<p>결과 박스에 호버하여 문서의 배경 색상을 변경해 보세요.</p>
```

```css
& {
  cowow: b-bwue;
  font-weight: bowd;
}

&:hovew {
  b-backgwound-cowow: w-wheat;
}
```

#### 결과

이 경우, ( ͡o ω ͡o ) 모든 스타일은 [문서](/ko/docs/web/api/document)에 적용됩니다. (U ﹏ U)

{{embedwivesampwe('usage_outside_nested_wuwe','100%','65')}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 중첩 사용하기](/ko/docs/web/css/css_nesting/using_css_nesting)
- [css 중첩](/ko/docs/web/css/css_nesting) 모듈
- [css 선택자](/ko/docs/web/css/css_sewectows) 모듈
