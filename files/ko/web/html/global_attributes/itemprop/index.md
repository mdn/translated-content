---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
---

{{HTMLSidebar("Global_attributes")}}

**`itemprop`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 아이템에 속성을 추가할 때 사용합니다. 모든 요소는 `itemprop` 특성을 가질 수 있으며, 하나의 `itemprop`은 키-값 쌍으로 구성됩니다. 각각의 키-값 쌍은 **속성**이라고 부르고, 하나 이상의 속성으로 구성한 그룹을 **아이템**이라고 부릅니다. 속성의 값으로는 문자열이나 {{glossary("URL")}}을 사용할 수 있고, {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}} , {{HTMLElement("track")}}, {{HTMLElement("video")}} 등 다양한 요소와 연관지을 수 있습니다.

## 예제

다음 예제는 일련의 요소에 `itemprop` 특성을 표기한 소스 코드와, 그 결과인 구조화된 데이터를 나타내는 표를 보입니다.

### HTML

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span
    >Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)</span
  >
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer"
    >Trailer</a
  >
</div>
```

### 구조화된 데이터

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="2"></td>
      <th colspan="2" rowspan="1"><strong>Item</strong></th>
    </tr>
    <tr>
      <th><strong>itemprop name</strong></th>
      <th><strong>itemprop value</strong></th>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>trailer</td>
      <td>../movies/avatar-theatrical-trailer.html</td>
    </tr>
  </tbody>
</table>

## 속성

속성은 문자열이나 {{glossary("URL")}}을 값으로 가질 수 있습니다. 문자열 값으로 URL을 지정할 경우 {{htmlelement("a")}}와 [`href`](/ko/docs/Web/HTML/Element/a#href) 특성, {{htmlelement("img")}} 요소와 {{htmlelement("src", "img")}} 특성, 또는 그 외의 외부 리소스를 연결하는 기타 요소를 사용해 표현합니다.

### 문자열을 값으로 갖는 세 개의 속성

```html
<div itemscope>
  <p>My name is <span itemprop="name">Neil</span>.</p>
  <p>My band is called <span itemprop="band">Four Parts Water</span>.</p>
  <p>I am <span itemprop="nationality">British</span>.</p>
</div>
```

### 값이 URL인 "image" 속성

```html
<div itemscope>
  <img itemprop="image" src="google-logo.png" alt="Google" />
</div>
```

숫자와 문자로 구성된 긴 문자열처럼 사람이 쉽게 읽고 이해할 수 없는 문자열이 값일 경우, {{htmlelement("data")}} 요소의 [`value`](/ko/docs/Web/HTML/Element/data#value) 특성 값을 사용해 나타내고, 사람이 보다 쉽게 읽을 수 있도록 표현한 문자열을 `<data>`의 콘텐츠로 지정할 수 있습니다. (`<data>` 콘텐츠는 구조화된 데이터의 일부가 아닙니다. 아래 예제를 참고하세요.)

### 값이 상품 ID인 속성을 가진 아이템

ID가 사람에게 친화적인 형태가 아니므로, 사람이 읽을 수 있는 텍스트로는 ID 대신 상품 ID를 사용합니다.

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

숫자 값으로는 {{htmlelement("meter")}} 요소와 그 [`value`](/ko/docs/Web/HTML/Element/meter#value) 특성을 대신 사용할 수 있습니다.

### `<meter>` 요소

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="name">Panasonic White 60L Refrigerator</span>
  <img src="panasonic-fridge-60l-white.jpg" alt="" />
  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="http://schema.org/AggregateRating">
    <meter itemprop="ratingValue" min="0" value="3.5" max="5">
      Rated 3.5/5
    </meter>
    (based on <span itemprop="reviewCount">11</span>
    customer reviews)
  </div>
</div>
```

비슷하게, 날짜와 시간 관련 데이터는 {{htmlelement("time")}}과 그 [`datetime`](/ko/docs/Web/HTML/Element/time#datetime) 특성을 사용할 수 있습니다.

### 날짜 값인 생년월일 속성을 가지는 아이템

```html
<div itemscope>
  I was born on
  <time itemprop="birthday" datetime="2009-05-10">May 10th 2009</time>.
</div>
```

속성을 선언하는 요소에 `itemscope` 특성을 지정해, 이름-값 쌍의 그룹으로 만들 수도 있습니다. 각 값은 문자열이거나, 이름-값 쌍 그룹(즉, 아이템)이어야 합니다.

### 사람을 나타내는 바깥쪽 아이템과 밴드를 나타내는 안쪽 아이템

```html
<div itemscope>
  <p>Name: <span itemprop="name">Amanda</span></p>
  <p>
    Band:
    <span itemprop="band" itemscope>
      <span itemprop="name">Jazz Band</span>
      (<span itemprop="size">12</span> players)</span
    >
  </p>
</div>
```

위의 코드에서 바깥쪽 아이템은 `name`과 `band` 두 개의 속성을 가지고 있습니다. `name`은 `Amanda`이고 `band`는 그 자체로 `name`과 `size`라는 두 가지 속성을 가진 아이템입니다. 밴드의 `name`은 `Jazz Band`이고, `size`는 `12`입니다. 이 예제에서, 바깥쪽 아이템은 최상위 마이크로데이터 아이템입니다. 다른 아이템의 일부가 아닌 아이템을 최상위 마이크로데이터 아이템이라고 합니다.

### 모든 속성이 아이템에서 분리된 경우

이 예제는 앞의 예제와 동일하지만 모든 속성이 아이템에서 분리되어 있습니다.

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

이 예제의 결과는 이전 예제와 동일합니다. 첫 번째 아이템은 두 가지 속성을 가지고 있는데, "name"은 "Amanda"로 설정했고, "band"는 다른 아이템으로 연결되어 있습니다. "band"가 가리킨 아이템은 또 다시 두 가지 속성을 가지고 있는데, "name"은 "Jazz Band"이고, "size"는 "12"입니다.

아이템은 같은 이름을 가지나 서로 다른 값을 갖는 다수의 속성을 가질 수 있습니다.

### 두 가지 맛의 아이스크림

```html
<div itemscope>
  <p>Flavors in my favorite ice cream:</p>
  <ul>
    <li itemprop="flavor">Lemon sorbet</li>
    <li itemprop="flavor">Apricot sorbet</li>
  </ul>
</div>
```

이 예제는 두 가지 프로퍼티를 가지고 있는 아이템을 보여주고 있는데, 두 프로퍼티 모두 "flavor"라는 이름을 가지고 "Lemon sorbet"와 "Apricot sorbet"라는 값을 각각 가지고 있습니다.

어떤 속성을 가진 요소는 프로퍼티 중 일부가 동일한 값을 가질 때 중복을 피하기 위해 한 번에 여러 프로퍼티를 가질 수도있습니다(An element introducing a property can also introduce multiple properties at once, to avoid duplication when some of the properties have the same value).

### 값이 모두 "orange"인 "favorit-color"와 "favorite-fruit" 두 프로퍼티를 가진 아이템

```html
<div itemscope>
  <span
    itemprop="favorite-color
    favorite-fruit"
    >orange</span
  >
</div>
```

> **참고:** 참고: 마이크로 데이터와 마이크로 데이터가 표시된 문서의 컨텐츠 사이에는 아무런 연관관계가 없습니다.

### 구조화된 데이터를 두 가지 다른 방식으로 표시하기

다음의 두 예제는 의미상 차이는 없습니다.

```html
<figure>
  <img src="castle.jpeg" />
  <figcaption>
    <span itemscope><span itemprop="name">The Castle</span></span> (1986)
  </figcaption>
</figure>
```

```html
<span itemscope><meta itemprop="name" content="The Castle" /></span>
<figure>
  <img src="castle.jpeg" />
  <figcaption>The Castle (1986)</figcaption>
</figure>
```

두 예제 모두 caption을 가지고 있으며 figure와 전혀 관계가 없고 "name" 이라는 이름과 "The Castle"이라는 값의 쌍을 가진 아이템을 가지고 있습니다. 단 한 가지 차이는 사용자가 문서의 바깥쪽으로 figcaption을 드래그하면 drag-and-drop 데이터에 그 아이템이 포함된다는 점입니다다. 그 아이템과 연관된 이미지는 포함되지 않습니다.

## 이름과 값

프로퍼티는 고유한 토큰으로 이루어진 순서가 없는(unordered) 집합으로 대소문자를 구분하고 이름-값의 쌍을 나타냅니다. 프로퍼티 값은 하나 이상의 토큰을 가지고 있어야 합니다. 다음의 예제에서 각 데이터 셀이 토큰입니다.

### 이름 예제

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="col"></th>
      <th colspan="2" rowspan="1" scope="col">Item</th>
    </tr>
    <tr>
      <th scope="col">itemprop <strong>name</strong></th>
      <th scope="col">itemprop <strong>value</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>itemprop</th>
      <td>country</td>
      <td>Ireland</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>Option</td>
      <td>2</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
      <td>Ring of Kerry</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>img</td>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>website</td>
      <td>flickr</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>(token)</td>
      <td>(token)</td>
    </tr>
  </tbody>
</table>

**토큰**(**Tokens**)은 문자열이거나 URL일 수 있습니다. item이 URL일 경우는 **typed item**이라고 하고 그렇지 않은 경우는 문자열(string)이라고 합니다. 문자열에는 마침표(period)나 콜론(colon)이 포함되어서는 안됩니다(아래 참고).

1. 아이템이 typed item일 경우 다음 중 하나이어야 합니다:

   1. 정의된 프로퍼티 이름이거나
   2. 어휘(vocabulary)의 정의를 참조하는 유효한 URL이거나
   3. 전용(proprietary) 아이템 프로퍼티(예: 공개된 명세서에 정의되지 않은)로 사용되는 유효한 URL이어야 합니다.

2. 아이템이 typed item이 아닐 경우 다음을 따라야 합니다:

   1. "**.**" (U+002E FULL STOP) 문자나 "**:**" characters (U+003A COLON) 문자를 포함하지 않는 문자열로 전용(proprietary) 아이템 프로퍼티(예: 공개된 명세서에 정의되지 않은)로 사용되는 유효한 URL이어야 합니다.

> **참고:** 위에서 금지한, URL 값이 아닌 경우 ":" 문자가 포함되면 안되는 이유는 이 문자가 문자열에 포함되어 있으면 URL과 구분할 수 없기 때문입니다. "."를 포함하는 문자는 향후 확장을 고려해 예약된 것입니다. 공백(space) 문자는 공백이 포함되어 있을 경우 여러 개의 토큰으로 파싱될 수 있기 때문에 금지되어 있습니다.

## 값

이름-값 쌍의 프로퍼티 값은 다음 목록에서 처음으로 일치하는 값입니다:

- 해당 요소가 **itemscope** 속성을 가지고 있을 경우

  - 그 값은 해당 요소가 생성한 **아이템**(**item**)입니다.

- 해당 요소가 **meta** 요소일 경우

  - 그 값은 해당 요소의 **content** 속성의 값입니다.

- 해당 요소가 **audio**, **embed**, **iframe**, **img**, **source**, **track**, 또는 **video**일 경우

  - 그 값은 src 속성이 해당 요소에 설정될 당시 노드 문서(node document;[Microdata DOM API](/ko/docs/Web/API/Microdata_DOM_API)의 일부)에 상대적인 src 속성의 값을 파싱한 URL 문자열입니다.

- 해당 요소가 **a**, **area**, 또는 **link** 요소일 경우

  - 그 값은 href 속성이 해당 요소에 설정될 당시 노드 문서에 상대적인 href 속성의 값을 파싱한 URL 문자열입니다.

- 해당 요소가 **object** 요소일 경우

  - 그 값은 data 속성이 해당 요소에 설정될 당시 노드 문서에 상대적인 data 속성의 값을 파싱한 URL 문자열입니다.

- 해당 요소가 **data**일 경우

  - 그 값은 해당 요소의 value 속성의 값입니다.

- 해당 요소가 **meter**일 경우

  - 그 값은 해당 요소의 **value** 속성의 값입니다.

- 해당 요소가 **time**일 경우

  - 그 값은 해당 요소의 **datetime** 값 입니다.

그 외의 경우

- 그 값은 해당 요소의 **textContent** 입니다.

어떤 프로퍼티의 값이 **URL**이라면, 그 프로퍼티는 URL 속성 요소를 이용해 지정되어야 합니다. URL 속성 요소는 **a**, **area**, **audio**, **embed**, **iframe**, **img**, **link**, **object**, **source**, **track**, 그리고 **video** 요소입니다.

### 이름 순서

이름은 서로 순서가 없지만, 특정한 이름이 여러 값을 가지는 경우라면 상대적인 순서를 가집니다.

#### 다음 예제에서 "a" 프로퍼티는 순서대로 "1"과 "2"의 값을 가지지만, "a" 프로퍼티가 "b" 프로퍼티 보다 먼저 오는지 아닌지는 중요하지 않습니다

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
  <p itemprop="b">test</p>
</div>
```

#### 다음 세 예제는 모두 같습니다

```html
<div itemscope>
  <p itemprop="b">test</p>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
</div>
```

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="b">test</p>
  <p itemprop="a">2</p>
</div>
```

```html
<div id="x">
  <p itemprop="a">1</p>
</div>
<div itemscope itemref="x">
  <p itemprop="b">test</p>
  <p itemprop="a">2</p>
</div>
```

## 다른 예제

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
        http://vocab.example.net/book: urn:isbn:0-330-34032-8
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
      <td>Peter F. Hamilton</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tr>
  </tbody>
</table>

### 결과

{{EmbedLiveSample('HTML_2', '', '', '', 'Web/HTML/Global_attributes/itemprop')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [다른 전역 특성](/ko/docs/Web/HTML/Global_attributes)
- 다른 마이크로데이터와 관련된 전역 속성:

  - [`itemid`](/ko/docs/Web/HTML/Global_attributes#itemid)
  - [`itemref`](/ko/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/ko/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/ko/docs/Web/HTML/Global_attributes#itemtype)
