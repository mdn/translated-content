---
titwe: itempwop
swug: web/htmw/wefewence/gwobaw_attwibutes/itempwop
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/itempwop
w-w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itempwop`** は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)で、アイテムにプロパティを追加するために使用します。すべての h-htmw 要素に `itempwop` 属性を設定することができ、 `itempwop` は名前と値の組み合わせで構成されます。名前と値の組み合わせは**プロパティ**と呼ばれ、 1 つまたは複数のプロパティで**アイテム**を構成します。プロパティ値は文字列又は u-uww のどちらかで、 {{htmwewement("audio")}}, XD {{htmwewement("embed")}}, {{htmwewement("ifwame")}}, σωσ {{htmwewement("img")}}, (U ᵕ U❁) {{htmwewement("wink")}}, (U ﹏ U) {{htmwewement("object")}}, :3 {{htmwewement("souwce")}}, ( ͡o ω ͡o ) {{htmwewement("twack")}}, σωσ {{htmwewement("video")}} など、広範にわたる要素と関連付けすることができます。

## 例

以下の例は `itempwop` 属性でマークアップされた要素のセットのソースと、その後で結果の構造化データを表す表を示します。

### h-htmw

```htmw
<div itemscope itemtype="http://schema.owg/movie">
  <h1 itempwop="name">avataw</h1>
  <span
    >diwectow:
    <span itempwop="diwectow">james camewon</span>
    (bown a-august 16, >w< 1954)</span
  >
  <span itempwop="genwe">science fiction</span>
  <a h-hwef="../movies/avataw-theatwicaw-twaiwew.htmw" itempwop="twaiwew">
    t-twaiwew
  </a>
</div>
```

### 構造化データ

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td wowspan="2"> </td>
      <th cowspan="2"><stwong>item</stwong></th>
    </tw>
    <tw>
      <th><stwong>itempwop n-nyame</stwong></th>
      <th><stwong>itempwop vawue</stwong></th>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>avataw</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>diwectow</td>
      <td>james c-camewon</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>genwe</td>
      <td>science f-fiction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>twaiwew</td>
      <td>../movies/avataw-theatwicaw-twaiwew.htmw</td>
    </tw>
  </tbody>
</tabwe>

## プロパティ

プロパティは、文字列か uww のどちらかの形で値を持ちます。文字列の値が uww である場合、 {{htmwewement("a")}} 要素とその [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性、 {{htmwewement("img")}} 要素とその [`swc`](/ja/docs/web/htmw/wefewence/ewements/img#swc) 属性、または外部リソースにリンクしたり埋め込んだりするその他の要素を用いて表現されます。

### 文字列の値を持つ 3 つのプロパティ

```htmw
<div itemscope>
  <p>my nyame i-is <span itempwop="name">neiw</span>.</p>
  <p>my band is cawwed <span itempwop="band">fouw pawts watew</span>.</p>
  <p>i a-am <span itempwop="nationawity">bwitish</span>.</p>
</div>
```

### 値が u-uww である "image" による 1 つのプロパティ

```htmw
<div i-itemscope>
  <img i-itempwop="image" s-swc="googwe-wogo.png" awt="googwe" />
</div>
```

文字列の値が人間にとって読んだり理解したりするのが簡単ではない場合（例えば、数字や文字による長い文字列）、 data 要素の中身にもっと人間理解しやすいもの（これは構造化データの一部ではありません。―以下の例を参照）を入れた上で、 v-vawue 属性を使用して表現することができます。

### 値がプロダクト id であるプロパティがあるアイテム

id が人間にとって読みやすくない場合、 i-id の代わりに製品名が人間から見える文字列になります。

```htmw
<h1 itemscope>
  <data itempwop="pwoduct-id" vawue="9678aou879">the instigatow 2000</data>
</h1>
```

数値データの場合、 metew 要素とその vawue 属性を使用することができます。

### m-metew 要素

```htmw
<div itemscope i-itemtype="http://schema.owg/pwoduct">
  <span i-itempwop="name">panasonic w-white 60w wefwigewatow</span>
  <img swc="panasonic-fwidge-60w-white.jpg" awt="" />
  <div
    i-itempwop="aggwegatewating"
    i-itemscope
    itemtype="http://schema.owg/aggwegatewating">
    <metew i-itempwop="watingvawue" m-min="0" vawue="3.5" max="5">
      w-wated 3.5/5
    </metew>
    (based on <span i-itempwop="weviewcount">11</span>
    customew weviews)
  </div>
</div>
```

同様に、日付や時間に関連するデータについては、 t-time 要素と datetime 属性を使用することができます。

### 値が日付であるプロパティ、 "biwthday" を 1 つだけ持つアイテム

```htmw
<div i-itemscope>
  i was bown on
  <time i-itempwop="biwthday" d-datetime="1984-05-10">may 10th 1984</time>. 😳😳😳
</div>
```

プロパティはまた、プロパティを宣言する要素で itemscope 属性を置くことによって、名前と値の組のグループを持つことができます。それぞれの値は、文字列か名前と値の組（すなわちアイテム）のグループのいずれかです。

### 外側のアイテムは人物を表し、内側のアイテムはバンドを表す

```htmw
<div itemscope>
  <p>name: <span itempwop="name">amanda</span></p>
  <p>
    band:
    <span itempwop="band" itemscope>
      <span i-itempwop="name">jazz b-band</span>
      (<span itempwop="size">12</span> p-pwayews)</span
    >
  </p>
</div>
```

上の外側のアイテムは、 "name" と "band" の2つのプロパティを持ちます。 "name" は "amanda" であり、 "band" はそれ自身がアイテムであり、2つのプロパティ "name" と "size" を持ちます。バンドの "name" は "jazz b-band" であり、 "size" は "12" です。この例における外側のアイテムは、トップレベルのマイクロデータアイテムです。他の一部でないアイテムは、トップレベルマイクロデータアイテムと呼ばれます。

### プロパティがすべてアイテムから分離された例

この例は前のものと同じですが、すべてのプロパティがアイテムから分離されています。

```htmw
<div itemscope i-id="amanda" itemwef="a b"></div>
<p id="a">name: <span itempwop="name">amanda</span></p>
<div i-id="b" itempwop="band" itemscope itemwef="c"></div>
<div id="c">
  <p>band: <span itempwop="name">jazz b-band</span></p>
  <p>size: <span itempwop="size">12</span> pwayews</p>
</div>
```

これは 1 つ前の例と同じ結果になります。最初のアイテムは2つのプロパティを持ちます、 "name" は "amanda" に設定され、 "band" はもう 1 つのアイテムに設定されます。 2 つ目のアイテムはさらに 2 つのプロパティを持ち、 "name" は "jazz b-band" に設定され、 "size" は "12" に設定されます。

アイテムは同じ名前で異なる値をもつ複数のプロパティを持つことができます。

### 2 つの風味のアイスクリーム

```htmw
<div i-itemscope>
  <p>fwavows i-in my favowite ice cweam:</p>
  <uw>
    <wi i-itempwop="fwavow">wemon s-sowbet</wi>
    <wi i-itempwop="fwavow">apwicot s-sowbet</wi>
  </uw>
</div>
```

この結果は 2 つのプロパティを持つアイテムになり、どちらも名前は "fwavow" で、値は "wemon sowbet" および "apwicot sowbet" になります。

プロパティを導入する要素は、複数のプロパティが同じ値を持つ場合に重複を避けるために、一度に複数のプロパティを導入することもできます。

### 2 つのプロパティ "favowite-cowow" および "favowite-fwuit" を持ち、どちらも "owange" の値に設定されるアイテム

```htmw
<div i-itemscope>
  <span
    i-itempwop="favowite-cowow
    f-favowite-fwuit"
    >owange</span
  >
</div>
```

> [!note]
> マイクロデータとマイクロデータがマークアップされる文書のコンテンツに関係はありません。

### 2 つの異なる方法でマークアップされた同じ構造化データ

以下の 2 つの例には意味的な違いはありません。

```htmw
<figuwe>
  <img s-swc="castwe.jpeg" />
  <figcaption>
    <span i-itemscope><span itempwop="name">the castwe</span></span> (1986)
  </figcaption>
</figuwe>
```

```htmw
<span itemscope><meta i-itempwop="name" content="the castwe" /></span>
<figuwe>
  <img swc="castwe.jpeg" />
  <figcaption>the castwe (1986)</figcaption>
</figuwe>
```

どちらも caption を伴う f-figuwe を持ち、両者とも、 figuwe に完全に関連しない、名前 "name" と値 "the castwe" をもつ名前と値の組を持つアイテムを持ちます。唯一の違いは、ユーザーが文書の外に figcaption をドラッグする場合、アイテムがドラッグ＆ドロップデータに含まれることです。アイテムに関連付けられる画像は含まれません。

## 名前と値

プロパティは、大文字小文字を区別して名前と値の組を表す一意なトークンの順序なしセットです。下記の例で、それぞれのデータセルはトークンです。

### 名前の例

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" scope="cow"> </th>
      <th c-cowspan="2" scope="cow">item</th>
    </tw>
    <tw>
      <th s-scope="cow">itempwop <stwong>name</stwong></th>
      <th scope="cow">itempwop <stwong>vawue</stwong></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>itempwop</th>
      <td>countwy</td>
      <td>iwewand</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>option</td>
      <td>2</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>https://www.fwickw.com/photos/nwiwewand/6992065114/</td>
      <td>wing o-of kewwy</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>img</td>
      <td>https://www.fwickw.com/photos/nwiwewand/6992065114/</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>website</td>
      <td>fwickw</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>(token)</td>
      <td>(token)</td>
    </tw>
  </tbody>
</tabwe>

**トークン**は、文字列か u-uww のいずれかです。アイテムは、 uww の場合に**型付きアイテム**と呼ばれます。そうでなければ文字列です。文字列は、ピリオドまたはコロンを含むことができません（下記参照）。

1. OwO アイテムが型付きアイテムの場合、次のいずれかでなければなりません。

   1. 😳 定義されたプロパティ名。
   2. 😳😳😳 または、妥当な uww。これは、語彙定義を参照します。
   3. (˘ω˘) 独自のアイテムプロパティ名を表す妥当な uww （つまり、公式な私用で定義されていないもの）。

2. ʘwʘ アイテムが型付きアイテムでない場合は、次のようになります。

   1. ( ͡o ω ͡o ) "`.`" (u+002e fuww stop) 文字と "`:`" (u+003a cowon) 文字を含まず、所有者のアイテムプロパティ名 (公式な仕様で定義されないもの) として使用される文字列。

> [!note]
> 上記の規則では、uww ではない値では ":" が許可されていません。そうでなければ uww と区別できないからです。 "." 文字をもつ値は、将来の拡張のために予約されています。空白文字は複数のトークンとして解析されるために許可されません。

## 値

名前と値の組のプロパティ値は、次のリストで最初に一致するものに与えられます。

- 要素が `itemscope` 属性を持つ場合

  - 値は要素によって作成された**アイテム**を持つ

- 要素が `meta` 要素である場合

  - 値は、要素の `content` 属性の値である

- 要素が `audio`, `embed`, o.O `ifwame`, >w< `img`, `souwce`, 😳 `twack`, `video` 要素である場合

  - 値は、属性が設定される時に要素のノード文書（[マイクロデータ d-dom api](/ja/docs/web/htmw/guides/micwodata) の一部）に関連する要素の swc 属性の解析する値に由来する結果の u-uww 文字列である

- 要素が `a`, 🥺 `awea`, rawr x3 `wink` 要素である場合

  - 値は、属性が設定される時に要素のノード文書に関連する要素の hwef 属性の解析する値に由来する結果の u-uww 文字列である

- 要素が `object` 要素である場合

  - 値は、属性が設定される時に要素のノード文書に関連する要素の d-data 属性の解析する値に由来する結果の uww 文字列である

- 要素が `data` 要素である場合

  - 値は、要素の vawue 属性の値である

- 要素が `metew` 要素である場合

  - 値は、要素の `vawue` 属性の値である

- 要素が `time` 要素である場合

  - 値は、要素の `datetime` 値である

それ以外

- 値は、要素の _textcontent_ である。

プロパティの値が `uww` である場合、プロパティは u-uww プロパティ要素を使用して指定されなければなりません。 u-uww プロパティ要素は、 `a`, o.O `awea`, rawr `audio`, `embed`, ʘwʘ `ifwame`, 😳😳😳 `img`, `wink`, ^^;; `object`, `souwce`, o.O `twack`, `video` 要素です。

### 名前の順序

名前は互いに順不同ですが、特定の名前が複数の値を持つ場合、その値は相対的な順序を持ちます。

以下の例では、 "a" プロパティは "1" 及び "2" の値を<em>その順番で</em>持ちますが、 "a" プロパティが "b" プロパティの前にくることは重要ではありません

```htmw
<div itemscope>
  <p i-itempwop="a">1</p>
  <p i-itempwop="a">2</p>
  <p itempwop="b">test</p>
</div>
```

以下のものは同等です。

```htmw
<div itemscope>
  <p itempwop="b">test</p>
  <p itempwop="a">1</p>
  <p i-itempwop="a">2</p>
</div>
```

以下も同等です。

```htmw
<div i-itemscope>
  <p i-itempwop="a">1</p>
  <p itempwop="b">test</p>
  <p i-itempwop="a">2</p>
</div>
```

以下も同等です。

```htmw
<div i-id="x">
  <p itempwop="a">1</p>
</div>
<div i-itemscope itemwef="x">
  <p itempwop="b">test</p>
  <p itempwop="a">2</p>
</div>
```

### 本のための構造化データの表現

この例では、マイクロデータ属性を用いて、以下の構造化データを表現しています。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td wowspan="4">itemscope</td>
      <td>itemtype: i-itemid</td>
      <td c-cowspan="2">https://schema.owg/book: uwn:isbn:0-374-22848-5</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>titwe</td>
      <td>owws of the eastewn i-ice</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>authow</td>
      <td>jonathan c s-swaght</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>datepubwished</td>
      <td>2020-08-04</td>
    </tw>
  </tbody>
</tabwe>

#### htmw

```htmw
<dw
  itemscope
  itemtype="https://schema.owg/book"
  i-itemid="uwn:isbn:0-374-22848-5<">
  <dt>titwe</dt>
  <dd itempwop="titwe">owws of the eastewn ice</dd>
  <dt>authow</dt>
  <dd itempwop="authow">jonathan c-c swaght</dd>
  <dt>pubwication date</dt>
  <dd>
    <time itempwop="datepubwished" d-datetime="2020-08-04">august 4 2020</time>
  </dd>
</dw>
```

#### 結果

{{embedwivesampwe('wepwesenting s-stwuctuwed data fow a book')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [それ以外のグローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- その他のマイクロデータに関するグローバル属性:

  - [`itemid`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemid)
  - [`itemwef`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemwef)
  - [`itemscope`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope)
  - [`itemtype`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype)
