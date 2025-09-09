---
title: HTML itemprop グローバル属性
short-title: itemprop
slug: Web/HTML/Reference/Global_attributes/itemprop
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`itemprop`** は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)で、アイテムにプロパティを追加するために使用します。すべての HTML 要素に `itemprop` 属性を設定することができ、 `itemprop` は名前と値の組み合わせで構成されます。名前と値の組み合わせは**プロパティ**と呼ばれ、 1 つまたは複数のプロパティで**アイテム**を構成します。プロパティ値は文字列又は URL のどちらかで、 {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}}, {{HTMLElement("track")}}, {{HTMLElement("video")}} など、広範にわたる要素と関連付けすることができます。

## 例

以下の例は `itemprop` 属性でマークアップされた要素のセットのソースと、その後で結果の構造化データを表す表を示します。

### HTML

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>
    Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)
  </span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">
    Trailer
  </a>
</div>
```

### 構造化データ

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="2"> </td>
      <th colspan="2"><strong>アイテム</strong></th>
    </tr>
    <tr>
      <th><strong>itemprop 名</strong></th>
      <th><strong>itemprop 値</strong></th>
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

## プロパティ

プロパティは、文字列か URL のどちらかの形で値を持ちます。文字列の値が URL である場合、 {{HTMLElement("a")}} 要素とその [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性、 {{HTMLElement("img")}} 要素とその [`src`](/ja/docs/Web/HTML/Reference/Elements/img#src) 属性、または外部リソースにリンクしたり埋め込んだりするその他の要素を用いて表現されます。

### 文字列の値を持つ 3 つのプロパティ

```html
<div itemscope>
  <p>My name is <span itemprop="name">Neil</span>.</p>
  <p>My band is called <span itemprop="band">Four Parts Water</span>.</p>
  <p>I am <span itemprop="nationality">British</span>.</p>
</div>
```

### 値が URL である "image" による 1 つのプロパティ

```html
<div itemscope>
  <img itemprop="image" src="google-logo.png" alt="Google" />
</div>
```

文字列の値が人間にとって読んだり理解したりするのが簡単ではない場合（例えば、数字や文字による長い文字列）、 data 要素の中身にもっと人間理解しやすいもの（これは構造化データの一部ではありません。―以下の例を参照）を入れた上で、 value 属性を使用して表現することができます。

### 値がプロダクト ID であるプロパティがあるアイテム

ID が人間にとって読みやすくない場合、 ID の代わりに製品名が人間から見える文字列になります。

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

数値データの場合、 meter 要素とその value 属性を使用することができます。

### meter 要素

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

同様に、日付や時間に関連するデータについては、 time 要素と datetime 属性を使用することができます。

### 値が日付であるプロパティ、 "birthday" を 1 つだけ持つアイテム

```html
<div itemscope>
  I was born on
  <time itemprop="birthday" datetime="1984-05-10">May 10th 1984</time>.
</div>
```

プロパティはまた、プロパティを宣言する要素で itemscope 属性を置くことによって、名前と値の組のグループを持つことができます。それぞれの値は、文字列か名前と値の組（すなわちアイテム）のグループのいずれかです。

### 外側のアイテムは人物を表し、内側のアイテムはバンドを表す

```html
<div itemscope>
  <p>Name: <span itemprop="name">Amanda</span></p>
  <p>
    Band:
    <span itemprop="band" itemscope>
      <span itemprop="name">Jazz Band</span>
      (<span itemprop="size">12</span> players)
    </span>
  </p>
</div>
```

上の外側のアイテムは、 "name" と "band" の2つのプロパティを持ちます。 "name" は "Amanda" であり、 "band" はそれ自身がアイテムであり、2つのプロパティ "name" と "size" を持ちます。バンドの "name" は "Jazz Band" であり、 "size" は "12" です。この例における外側のアイテムは、トップレベルのマイクロデータアイテムです。他の一部でないアイテムは、トップレベルマイクロデータアイテムと呼ばれます。

### プロパティがすべてアイテムから分離された例

この例は前のものと同じですが、すべてのプロパティがアイテムから分離されています。

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

これは 1 つ前の例と同じ結果になります。最初のアイテムは2つのプロパティを持ちます、 "name" は "Amanda" に設定され、 "band" はもう 1 つのアイテムに設定されます。 2 つ目のアイテムはさらに 2 つのプロパティを持ち、 "name" は "Jazz Band" に設定され、 "size" は "12" に設定されます。

アイテムは同じ名前で異なる値をもつ複数のプロパティを持つことができます。

### 2 つの風味のアイスクリーム

```html
<div itemscope>
  <p>Flavors in my favorite ice cream:</p>
  <ul>
    <li itemprop="flavor">Lemon sorbet</li>
    <li itemprop="flavor">Apricot sorbet</li>
  </ul>
</div>
```

この結果は 2 つのプロパティを持つアイテムになり、どちらも名前は "flavor" で、値は "Lemon sorbet" および "Apricot sorbet" になります。

プロパティを導入する要素は、複数のプロパティが同じ値を持つ場合に重複を避けるために、一度に複数のプロパティを導入することもできます。

### 2 つのプロパティ "favorite-color" および "favorite-fruit" を持ち、どちらも "orange" の値に設定されるアイテム

```html
<div itemscope>
  <span
    itemprop="favorite-color
    favorite-fruit"
    >orange
  </span>
</div>
```

> [!NOTE]
> マイクロデータとマイクロデータがマークアップされる文書のコンテンツに関係はありません。

### 2 つの異なる方法でマークアップされた同じ構造化データ

以下の 2 つの例には意味的な違いはありません。

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

どちらも caption を伴う figure を持ち、両者とも、 figure に完全に関連しない、名前 "name" と値 "The Castle" をもつ名前と値の組を持つアイテムを持ちます。唯一の違いは、ユーザーが文書の外に figcaption をドラッグする場合、アイテムがドラッグ＆ドロップデータに含まれることです。アイテムに関連付けられる画像は含まれません。

## 名前と値

プロパティは、大文字小文字を区別して名前と値の組を表す一意なトークンの順序なしセットです。下記の例で、それぞれのデータセルはトークンです。

### 名前の例

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col"> </th>
      <th colspan="2" scope="col">Item</th>
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

**トークン**は、文字列か URL のいずれかです。アイテムは、 URL の場合に**型付きアイテム**と呼ばれます。そうでなければ文字列です。文字列は、ピリオドまたはコロンを含むことができません（下記参照）。

1. アイテムが型付きアイテムの場合、次のいずれかでなければなりません。
   1. 定義されたプロパティ名。
   2. または、妥当な URL。これは、語彙定義を参照します。
   3. 独自のアイテムプロパティ名を表す妥当な URL （つまり、公式な私用で定義されていないもの）。

2. アイテムが型付きアイテムでない場合は、次のようになります。
   1. "`.`" (U+002E FULL STOP) 文字と "`:`" (U+003A COLON) 文字を含まず、所有者のアイテムプロパティ名 (公式な仕様で定義されないもの) として使用される文字列。

> [!NOTE]
> 上記の規則では、URL ではない値では ":" が許可されていません。そうでなければ URL と区別できないからです。 "." 文字をもつ値は、将来の拡張のために予約されています。空白文字は複数のトークンとして解析されるために許可されません。

## 値

名前と値の組のプロパティ値は、次のリストで最初に一致するものに与えられます。

- 要素が `itemscope` 属性を持つ場合
  - 値は要素によって作成された**アイテム**を持つ

- 要素が `meta` 要素である場合
  - 値は、要素の `content` 属性の値である

- 要素が `audio`, `embed`, `iframe`, `img`, `source`, `track`, `video` 要素である場合
  - 値は、属性が設定される時に要素のノード文書（[マイクロデータ DOM API](/ja/docs/Web/HTML/Guides/Microdata) の一部）に関連する要素の src 属性の解析する値に由来する結果の URL 文字列である

- 要素が `a`, `area`, `link` 要素である場合
  - 値は、属性が設定される時に要素のノード文書に関連する要素の href 属性の解析する値に由来する結果の URL 文字列である

- 要素が `object` 要素である場合
  - 値は、属性が設定される時に要素のノード文書に関連する要素の data 属性の解析する値に由来する結果の URL 文字列である

- 要素が `data` 要素である場合
  - 値は、要素の value 属性の値である

- 要素が `meter` 要素である場合
  - 値は、要素の `value` 属性の値である

- 要素が `time` 要素である場合
  - 値は、要素の `datetime` 値である

それ以外

- 値は、要素の _textContent_ である。

プロパティの値が `URL` である場合、プロパティは URL プロパティ要素を使用して指定されなければなりません。 URL プロパティ要素は、 `a`, `area`, `audio`, `embed`, `iframe`, `img`, `link`, `object`, `source`, `track`, `video` 要素です。

### 名前の順序

名前は互いに順不同ですが、特定の名前が複数の値を持つ場合、その値は相対的な順序を持ちます。

以下の例では、 "a" プロパティは "1" 及び "2" の値を<em>その順番で</em>持ちますが、 "a" プロパティが "b" プロパティの前にくることは重要ではありません

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
  <p itemprop="b">test</p>
</div>
```

以下のものは同等です。

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

### 本のための構造化データの表現

この例では、マイクロデータ属性を用いて、以下の構造化データを表現しています。

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2">https://schema.org/Book: urn:isbn:0-374-22848-5</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>Owls of the Eastern Ice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Jonathan C Slaght</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2020-08-04</td>
    </tr>
  </tbody>
</table>

#### HTML

```html
<dl
  itemscope
  itemtype="https://schema.org/Book"
  itemid="urn:isbn:0-374-22848-5<">
  <dt>Title</dt>
  <dd itemprop="title">Owls of the Eastern Ice</dd>
  <dt>Author</dt>
  <dd itemprop="author">Jonathan C Slaght</dd>
  <dt>Publication date</dt>
  <dd>
    <time itemprop="datePublished" datetime="2020-08-04">August 4 2020</time>
  </dd>
</dl>
```

#### 結果

{{EmbedLiveSample('Representing structured data for a book')}}

## 仕様書

{{Specifications}}

## 関連情報

- [それ以外のグローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- その他のマイクロデータに関するグローバル属性:
  - [`itemid`](/ja/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemref`](/ja/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/ja/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/ja/docs/Web/HTML/Reference/Global_attributes/itemtype)
