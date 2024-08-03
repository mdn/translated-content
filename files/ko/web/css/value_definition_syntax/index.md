---
title: 값 정의 구문
slug: Web/CSS/Value_definition_syntax
---

{{CSSRef}}

**CSS 값 정의 구문**은 [형식 문법](https://ko.wikipedia.org/wiki/%ED%98%95%EC%8B%9D_%EB%AC%B8%EB%B2%95)으로서 CSS 속성이나 함수가 받을 수 있는 유효한 값의 집합을 정의합니다. 유효한 값 집합은 정의 구문으로 인한 제한 외에도 반드시 양의 수가 와야 하는 등, 맥락에 따라 추가로 제한될 수 있습니다.

정의 구문은 허용하는 값과 그 값 사이의 상호 작용을 설명합니다. "키워드", 일부 문자 "리터럴", 주어진 CSS 자료형에 속하는 값이거나, 다른 CSS 속성이 구문의 구성 요소가 될 수 있습니다.

## 구성 요소 값 유형

### 키워드

#### 일반 키워드

사전 정의된 의미가 있는 키워드는 따옴표 없이 문자 그대로 나타납니다. 예시로는 `auto`, `smaller`, `ease-in`이 있습니다.

#### 특별 키워드: `inherit`, `initial`, `unset`

모든 CSS 속성은 전역으로 정의한 `inherit`, `initial`, `unset` 키워드를 허용합니다. 세 키워드는 값 정의에 나타나지 않으며 암시적으로 정의됩니다.

### 리터럴

CSS에서 빗금('`/`')과 쉼표('`,`')와 같은 일부 문자는 그대로 나타날 수 있고, 속성 정의에서 값 구분을 위해 사용합니다. 쉼표는 종종 열거하는 값이나 수학형 함수의 매개변수를 구분할 때 사용합니다. 빗금은 의미가 다르지만 구문이 같은 값을 분리할 때 종종 사용합니다. 보통 빗금은 단축 속성에서 자료형이 같은 서로 다른 속성의 값을 구분할 때 쓰입니다.

두 기호 모두 값 정의에 문자 그대로 나타납니다.

### 자료형

#### 기본 자료형

어떤 종류의 데이터는 CSS의 전반에서 사용하며, 명세의 모든 값에 대해 한 번만 정의합니다. 이런 데이터의 자료형을 "기본 자료형"이라고 부르며, {{CSSxRef("&lt;angle&gt;")}}과 {{CSSxRef("&lt;string&gt;")}}처럼 이름을 '`<`'와 '`>`' 기호로 감싸서 표현합니다.

#### 비 말단 자료형

보다 덜 흔한 자료형인 "비 말단 자료형" 역시 '`<`'와 '`>`'로 감쌉니다.

비 말단 자료형에는 두 종류가 존재합니다.

- **어떤 속성과 같은 이름을 공유하는** 자료형으로, 이름을 따옴표로 감싸는 경우. 이 자료형의 값은 해당 속성이 허용하는 값과 동일합니다. 많은 경우 단축 속성에서 사용합니다.
- **다른 속성과 이름을 공유하지 않는** 자료형. 기본 자료형과 매우 유사하며, 차이점은 이 자료형의 정의가 어디에 되어있나 정도입니다. 기본 자료형과는 달리, 보통 이 자료형을 사용하는 속성과 가까운 곳에서 정의합니다.

## 구성 요소 값 결합자

### 대괄호

**대괄호**는 다수의 개체, 결합자, 곱수를 감싸서 하나의 구성 요소로 변환합니다. 대괄호는 **구성 요소를 묶어서 우선순위 규칙을 우회**할 때 사용합니다.

```
bold [ thin && <length> ]
```

위의 예제는 다음의 값과 일치합니다.

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

하지만 다음과는 일치하지 않습니다.

- `thin bold 3em`. `bold`를 대괄호로 정의한 구성 요소와 병치했기 때문에 반드시 그 앞에 나타나야 합니다.

### 병치

여러 단어, 리터럴, 자료형을 한 개 이상의 공백으로만 구분해서 나란히 배치하는 것을 **병치**라고 합니다. 병치한 모든 구성 요소는 **필수이며 정확히 순서 그대로 나타나야 합니다**.

```
bold <length> , thin
```

위의 예제는 다음의 값과 일치합니다.

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

하지만 다음과는 일치하지 않습니다.

- `thin 1em, bold`. 모든 개체가 정확한 순서를 따라야 합니다.
- `bold 1em thin`. 모든 개체가 필수이므로, 리터럴로 표기한 쉼표 역시 존재해야 합니다.
- `bold 0.5ms, thin`. `ms` 값은 {{CSSxRef("&lt;length&gt;")}}가 아닙니다.

### 이중 앰퍼샌드

두 개 이상의 구성 요소를 **이중 앰퍼샌드**, `&&`로 구분하면 모든 개체가 **필수지만 순서는 상관 없음**을 의미합니다.

```
bold && <length>
```

위의 예제는 다음의 값과 일치합니다.

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

하지만 다음과는 일치하지 않습니다.

- `bold`. 두 구성 요소가 값에 모두 나타나야 합니다.
- `bold 1em bold`, 두 구성 요소는 한 번씩만 나타나야 합니다.

> [!NOTE]
> 병치는 이중 앰퍼샌드보다 우선순위가 높습니다. 즉 `bold thin && <length>`는 `[ bold thin ] && <length>`와 같습니다. 따라서 `bold thin <length>`와 `<length> bold thin`은 일치하지만 `bold <length> thin`은 일치하지 않습니다.

### 이중 바

두 개 이상의 구성 요소를 **이중 바**, `||`로 구분하면 모든 개체 중 **적어도 하나는 나타나야 하고 순서는 상관하지 않습니다**. 보통 [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)의 여러 값을 정의할 때 사용합니다.

```
<'border-width'> || <'border-style'> || <'border-color'>
```

위의 예제는 다음의 값과 일치합니다.

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

하지만 다음과는 일치하지 않습니다.

- `blue yellow`, 하나의 구성 요소는 한 번만 나타나야 합니다.
- `bold`, 이 키워드는 어느 개체에도 속하지 않는 값입니다.

> [!NOTE]
> 이중 앰퍼샌드는 이중 바보다 우선순위가 높습니다. `bold || thin && <length>`는 `bold || [ thin && <length> ]`와 같으며, `bold`, `thin <length>`, `bold thin <length>`, 그리고 `thin <length> bold`와 일치합니다. 하지만 `<length> bold thin`은 일치하지 않는데, `bold`를 생략하지 않으면 `thin && <length>` 구성 요소 이전 또는 다음에 위치해야 하기 때문입니다.

### 단일 바

두 개 이상의 개체를 **단일 바**, `|`로 구분하면 모든 개체 중에서 **한 개만이 반드시 존재해야 합니다**. 보통 가능한 키워드 값의 목록을 구성할 때 사용합니다.

```
<percentage> | <length> | left | center | right | top | bottom
```

위의 예제는 다음의 값과 일치합니다.

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

하지만 다음과는 일치하지 않습니다.

- `center 3%`, 오직 하나의 구성 요소만 나타나야 합니다.
- `3em 4.5em`, 구성 요소는 한 번만 나타나야 합니다.

> [!NOTE]
> 이중 바는 단일 바보다 우선순위가 높으며 `bold | thin || <length>`는 `bold | [ thin || <length> ]`와 같습니다. `bold`, `thin`, `<length>`, `<length> thin`, `thin <length>`는 일치하지만, `|` 결합자는 좌우 중 단 하나만 선택할 수 있기 때문에 `bold <length>`는 일치하지 않습니다.

## 구성 요소 값 배수

배수는 기호로서, 앞의 개체를 몇 번이나 반복할 수 있는지 표시합니다. 배수가 없는 개체는 반드시 단 한 번만 나타나야 합니다.

배수는 거듭 표시할 수 없고, 모든 결합자보다 우선순위가 높습니다.

### 별표 (`*`)

**별표 배수**는 개체가 **0번, 한 번, 또는 여러 번 나타날 수 있음**을 표시합니다.

```
bold smaller*
```

위의 예제는 다음의 값과 일치합니다.

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` 등등.

하지만 다음과는 일치하지 않습니다.

- `smaller`, `bold`는 병치이기 때문에 `smaller` 키워드 앞에 반드시 나타나야 합니다.

### 더하기 (`+`)

**더하기 배수**는 개체가 **한 번 또는 여러 번 나타날 수 있음**을 표시합니다.

```
bold smaller+
```

위의 예제는 다음의 값과 일치합니다.

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` 등등.

하지만 다음과는 일치하지 않습니다.

- `bold`, `smaller`는 적어도 한 번 나타나야 합니다.
- `smaller`, `bold`는 병치이기 때문에 `smaller` 키워드 앞에 반드시 나타나야 합니다.

### 물음표 (`?`)

**물음표 배수**는 개체가 선택 사항이며, **반드시 0번 또는 한 번만 나타나야 함**을 표시합니다.

```
bold smaller?
```

위의 예제는 다음의 값과 일치합니다.

- `bold`
- `bold smaller`

하지만 다음과는 일치하지 않습니다.

- `bold smaller smaller`, `smaller`는 최대 한 번만 나타나야 합니다.
- `smaller`, `bold`는 병치이기 때문에 `smaller` 키워드 앞에 반드시 나타나야 합니다.

### 중괄호 (`{ }`)

**중괄호 배수**는 쉼표로 구분한 두 개의 정수, A와 B를 포함하며 개체가 **최소 A번, 최대 B번 나타나야 함**을 표시합니다.

```
bold smaller{1,3}
```

위의 예제는 다음의 값과 일치합니다.

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

하지만 다음과는 일치하지 않습니다.

- `bold`, `smaller`는 적어도 한 번 나타나야 합니다.
- `bold smaller smaller smaller smaller`, `smaller`는 최대 3회까지만 나타나야 합니다.
- `smaller`, `bold`는 병치이기 때문에 `smaller` 키워드 앞에 반드시 나타나야 합니다.

### 해시 (`#`)

**해시 배수**는 (더하기 배수처럼) 개체가 한 번 또는 여러 번 나타날 수 있지만, 서로 쉼표로 구분해야 함을 표시합니다.

```
bold smaller#
```

위의 예제는 다음의 값과 일치합니다.

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, 등등.

하지만 다음과는 일치하지 않습니다.

- `bold`, `smaller`는 적어도 한 번 나타나야 합니다.
- `bold smaller smaller smaller`, 각각의 `smaller`를 쉼표로 구분해야 합니다.
- `smaller`, `bold`는 병치이기 때문에 `smaller` 키워드 앞에 반드시 나타나야 합니다.

### 느낌표 (`!`)

그룹 뒤에 표시하는 **느낌표 배수**는 그룹이 반드시 존재해야 하며, 그룹 내 항목의 문법으로 인해 전체 콘텐츠가 생략 가능한 형태더라도 최소한 하나의 값은 생성해내야 함을 나타냅니다.

```
[ bold? smaller? ]!
```

위의 예제는 다음의 값과 일치합니다.

- `bold`
- `smaller`
- `bold smaller`

하지만 다음과는 일치하지 않습니다.

- `bold`도 없고 `smaller`도 없는 경우, 적어도 하나의 값은 나타나야 합니다.
- `smaller`, `bold`는 병치이기 때문에 `smaller` 키워드 앞에 반드시 나타나야 합니다.
- `bold smaller bold`, `bold`와 `smaller`는 단 한 번만 나타나야 합니다.

## 요약

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">기호</th>
      <th scope="col">이름</th>
      <th scope="col">설명</th>
      <th scope="col">예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">결합자</th>
    </tr>
    <tr>
      <td></td>
      <td>병치</td>
      <td>구성 요소가 필수이고 순서에 따라 나타나야 함</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>이중 앰퍼샌드</td>
      <td>구성 요소가 필수이지만 순서에 무관함</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>이중 바</td>
      <td>구성 요소가 하나 이상 나타나야 하고 순서에 무관함</td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>단일 바</td>
      <td>구성 요소가 정확히 하나만 나타나야 함</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>대괄호</td>
      <td>우선순위를 우회하기 위해 구성 요소를 묶음</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">배수</th>
    </tr>
    <tr>
      <td></td>
      <td>배수 없음</td>
      <td>정확히 한 번</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>별표</td>
      <td>0회 이상</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>더하기</td>
      <td>1회 이상</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>물음표</td>
      <td>0회 또는 1회 (선택 사항)</td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{A,B}</code></td>
      <td>중괄호</td>
      <td>최소 <code>A</code>회, 최대 <code>B</code>회</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>해시</td>
      <td>1회 이상, 단 쉼표로 구분</td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>느낌표</td>
      <td>그룹이 적어도 하나의 값을 생성해야 함</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}
