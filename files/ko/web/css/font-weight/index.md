---
title: font-weight
slug: Web/CSS/font-weight
---

{{CSSRef}}

## 요약

**`font-weight`** [CSS](/ko/docs/CSS) 속성은 폰트(font)의 가중치(weight)나 굵기(boldness)를 명시한다. 몇몇 폰트들은 `normal` 나 `bold` 일 때만 가능하다.

{{cssinfo}}

## 구문

```css
font-weight: normal;
font-weight: bold;

/* Relative to the parent */
font-weight: lighter;
font-weight: bolder;

font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: unset;
```

### 값

- `normal`
  - : 보통 폰트 가중치. `400` 과 같음.
- `bold`
  - : 굵은 폰트 가중치. `700` 과 같음.
- `lighter`
  - : (가능한 폰트 가중치 중) 부모 요소(element) 보다 얇은 폰트 가중치.
- `bolder`
  - : (가능한 폰트 가중치 중) 부모 요소 보다 굵은 폰트 가중치.
- `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
  - : normal 과 bold 이외를 제공하는 폰트를 위한 숫자형 폰트 가중치.

### 대비책(Fallback)

만약 정확히 주어진 가중치를 사용할 수없다면, 실제로 렌더링 되는 가중치를 결정하기 위해 다음과 같은 경험적 접근이 적용된다:

- 만약 `500` 초과의 가중치가 주어지면, 가능한 굵은(darker) 가중치 중 가장 가까운 것이 사용된다 (만약 없다면, 얇은(lighter) 가중치 중 가장 가까운 것).
- 만약 `400` 미만의 가중치가 주어지면, 가능한 얇은 가중치 중 가장 가까운 것이 사용된다 (만약 없다면, 굵은 가중치 중 가장 가까운 것).
- 만약 가중치가 `400` 이 주어지면, `500` 이 사용된다. 만약 `500` 이 불가능하면, `500` 미만의 폰트 가중치를 위한 경험적 접근이 사용된다.
- 만약 가중치가 `500` 이 주어지면, `400` 이 사용된다. 만약 `400` 이 불가능하면, `400` 미만의 폰트 가중치를 위한 경험적 접근이 사용된다.

이것은 `normal` 과 `bold` 만 지원하는 폰트일 경우, 100-500 은 normal, 600-900 은 bold 임을 의미한다.

### 상대적 가중치의 의미

`lighter` 나 `bolder` 가 주어진 경우, 요소의 절대적인 가중치를 계산하기 위해 다음 차트가 사용된다:

| 상속된 값 | `bolder` | `lighter` |
| --------- | -------- | --------- |
| 100       | 400      | 100       |
| 200       | 400      | 100       |
| 300       | 400      | 100       |
| 400       | 700      | 100       |
| 500       | 700      | 100       |
| 600       | 900      | 400       |
| 700       | 900      | 400       |
| 800       | 900      | 700       |
| 900       | 900      | 700       |

### 일반적인 가중치 이름 매핑

100\~900 의 가중치 값들은 다음의 일반적인 두께 이름으로 대응된다:

- `100`
  - : Thin (Hairline)
- `200`
  - : Extra Light (Ultra Light)
- `300`
  - : Light
- `400`
  - : Normal
- `500`
  - : Medium
- `600`
  - : Semi Bold (Demi Bold)
- `700`
  - : Bold
- `800`
  - : Extra Bold (Ultra Bold)
- `900`
  - : Black (Heavy)

### 보간

`font-weight` 값은 100 단위로 보간된다. 보간은 실수 공간에서 이루어지며 100의 배수에 가까운 값으로 어림한다. 100의 배수 중간의 값들은 양의 무한대 방향의 가까운 값으로 어림한다.

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the bank,
  and of having nothing to do: once or twice she had peeped into the book her
  sister was reading, but it had no pictures or conversations in it, 'and what
  is the use of a book,' thought Alice 'without pictures or conversations?'
</p>

<div>
  I'm heavy<br />
  <span>I'm lighter</span>
</div>
```

### CSS

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps darker than
   normal but less than a standard bold. */
div {
  font-weight: 600;
}

/* Sets text enclosed within span tag
   to be one step lighter than the parent. */
span {
  font-weight: lighter;
}
```

### 결과

{{EmbedLiveSample("Examples","400","300")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
