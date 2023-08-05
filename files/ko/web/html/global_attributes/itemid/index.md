---
title: itemid
slug: Web/HTML/Global_attributes/itemid
---

{{HTMLSidebar("Global_attributes")}}

**`itemid`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 아이템의 고유한 전역 식별자의 형태로 마이크로데이터를 제공합니다. `itemid` 특성은 [`itemscope`](/ko/docs/Web/HTML/Global_attributes#itemscope), [`itemtype`](/ko/docs/Web/HTML/Global_attributes#itemtype) 특성 모두 가진 요소에만 지정할 수 있습니다. 또한 `itemscope` 특성에 대응하는 `itemtype`이 전역 식별자 어휘를 참조하거나 정의해야 합니다.

`itemtype`의 전역 식별자에 대한 정확한 의미는 지정한 어휘 내에서의 해당 식별자 정의가 제공합니다. 어휘는 동일한 전역 식별자를 가지는 여러 아이템이 공존할 수 있는지, 공존한다면 동일한 식별자를 가진 아이템을 어떻게 처리할 것인지를 정의합니다.

> **참고:** {{glossary("WHATWG")}} 명세는 `itemid`가 반드시 {{glossary("URL")}}이어야 한다고 되어 있습니다. 하지만, 다음 예제에서는 {{glossary("URN")}} 역시 사용 가능하다는 것을 명확히 보여주고 있습니다. 이런 불일치는 마이크로데이터 명세의 불완전성을 반영한다고 볼 수 있습니다.

## 예제

### HTML

```html
<dl
  itemscope
  itemtype="http://vocab.example.net/book"
  itemid="urn:isbn:0-330-34032-8">
  <dt>Title</dt>
  <dd itemprop="title">The Reality Dysfunction</dd>
  <dt>Author</dt>
  <dd itemprop="author">Peter F. Hamilton</dd>
  <dt>Publication date</dt>
  <dd><time itemprop="pubdate" datetime="1996-01-26">26 January 1996</time></dd>
</dl>
```

### 구조화된 데이터

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2" rowspan="1">
        <div class="jyrRxf-eEDwDf jcd3Mb IZ65Hb-hUbt4d">
          http://vocab.example.net/book: urn:isbn:0-330-34032-8
        </div>
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>The Reality Dysfunction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td><div class="jyrRxf-eEDwDf jcd3Mb">Peter F. Hamilton</div></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tr>
  </tbody>
</table>

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- 마이크로데이터 관련 다른 전역 특성:

  - [`itemprop`](/ko/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/ko/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/ko/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/ko/docs/Web/HTML/Global_attributes#itemtype)
