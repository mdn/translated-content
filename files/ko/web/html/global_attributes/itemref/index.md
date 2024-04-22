---
title: itemref
slug: Web/HTML/Global_attributes/itemref
---

{{HTMLSidebar("Global_attributes")}}

**`itemref`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 사용하면 [`itemscope`](/ko/docs/Web/HTML/Global_attributes#itemscope) 특성을 가진 요소 바깥의 속성도 아이템과 연결할 수 있습니다.

`itemref` 특성에는 문서 내 다른 요소의 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 목록([`itemid`](/ko/docs/Web/HTML/Global_attributes#itemid) 아님)을 제공해야 합니다.

`itemref` 특성은 `itemscope` 특성을 지정한 요소에만 추가할 수 있습니다.

> **참고:**`itemref` 특성은 마이크로데이터 데이터 모델의 일부가 아니며, 트리 구조를 따르지 않는 데이터에 웹 작성자가 주석을 추가하는 것을 돕는 구문 구조에 불과합니다. 예를 들어, 표의 열이 별개의 아이템인데 데이터 속성은 열을 구성하는 칸에 포함하고 싶은 경우 사용할 수 있습니다.

## 예제

### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

### 구조화 데이터

([JSON-LD](https://json-ld.org/) 형식)

```json
{
  "@id": "amanda",
  "name": "Amanda",
  "band": {
    "@id": "b",
    "name": "Jazz Band",
    "size": 12
  }
}
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- 마이크로데이터 관련 다른 전역 특성

  - [`itemid`](/ko/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/ko/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemscope`](/ko/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/ko/docs/Web/HTML/Global_attributes#itemtype)
