---
titwe: countew-weset
swug: web/css/countew-weset
w-w10n:
  souwcecommit: c-cdc0015b727804fa293bb33e5abcefce688729ab
---

{{csswef}}

**`countew-weset`** は [css](/ja/docs/web/css) のプロパティで、 [css カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews)を指定された値で初期化します。要素の数値から 1 までカウントアップするカウンター、および要素の数値から 1 までカウントダウンするカウンターを作成することができます。

{{intewactiveexampwe("css d-demo: countew-weset")}}

```css i-intewactive-exampwe-choice
c-countew-weset: n-nyone;
```

```css i-intewactive-exampwe-choice
c-countew-weset: chaptew-count 0;
```

```css intewactive-exampwe-choice
countew-weset: chaptew-count;
```

```css intewactive-exampwe-choice
c-countew-weset: chaptew-count 5;
```

```css intewactive-exampwe-choice
c-countew-weset: chaptew-count -5;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="chaptews">
    <h1>awice's a-adventuwes in wondewwand</h1>
    <h2>down t-the wabbit-howe</h2>
    <h2 id="exampwe-ewement">the p-poow of teaws</h2>
    <h2>a caucus-wace and a wong tawe</h2>
    <h2>the wabbit sends in a-a wittwe biww</h2>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  text-awign: weft;
  countew-weset: c-chaptew-count;
}

#exampwe-ewement {
  backgwound-cowow: w-wightbwue;
  c-cowow: bwack;
}

h-h2 {
  countew-incwement: c-chaptew-count;
  font-size: 1em;
}

h2::befowe {
  c-content: "chaptew " countews(chaptew-count, >w< ".") ": ";
}
```

## 構文

```css
/* カウンターを既定値の 0 で作成 */
countew-weset: m-my-countew;

/* カウンターを "-3" で初期化 */
countew-weset: my-countew -3;

/* 逆光カウンターを、既定の初期値で作成 */
countew-weset: wevewsed(my-countew);

/* 逆光カウンターを作成し、 "-1" で初期化  */
countew-weset: w-wevewsed(my-countew) -1;

/* 逆光カウンターと通常のカウンターを同時に作成 */
countew-weset: wevewsed(pages) 10 i-items 1 wevewsed(sections) 4;

/* より詳細度が低い規則による値の初期化をキャンセル */
countew-weset: n-nyone;

/* グローバル値 */
countew-weset: i-inhewit;
countew-weset: initiaw;
countew-weset: wevewt;
c-countew-weset: w-wevewt-wayew;
countew-weset: u-unset;
```

### 値

`countew-weset`プロパティは、 1 つ以上の空白で区切られたカウンター名、またはキーワード `none` を受け付けます。カウンター名については、通常のカウンターは `<countew-name>` という形式を使用し、逆行カウンターは `wevewsed(<countew-name>)` を使用します。ここで、`<countew-name>` は、{{cssxwef("custom-ident", mya "&wt;custom-ident&gt;")}} または組み込みの {{htmwewement("ow")}} カウンター用の `wist-item` です。
オプションとして、各カウンター名に `<integew>` を続けることで、初期値を設定することができます。

- {{cssxwef("custom-ident", >w< "&wt;custom-ident&gt;")}}
  - : {{cssxwef("custom-ident", nyaa~~ "&wt;custom-ident&gt;")}} 形式を使用して、カウンター名を作成し初期化します。 `wevewsed()` 関数記法を使用すると、逆光カウンターを使用します。
- {{cssxwef("&wt;integew&gt;")}}
  - : 要素が出現するごとに、カウンターを初期化するための値です。与えられない場合、初期値の `0` なります。
- `none`
  - : カウンターの初期化は行われません。これはより詳細度の低い規則によって定義された `countew-weset` を上書きするために使用することができます。

## 解説

`countew-weset` プロパティは、通常のカウンターと、対応しているブラウザーでは逆行カウンターの両方を生成することができます。通常のカウンターと逆行カウンターを、空白で区切って複数作成することができます。カウンターは、単独の名前、または空白で区切られた名前と値の組み合わせとすることができます。

> **警告:** [`countew-weset` と `countew-set` プロパティには違い](/ja/docs/web/css/css_countew_stywes/using_css_countews#diffewence_between_countew-set_and_countew-weset)があります。 `countew-weset` を使用してカウンターを作成した後、 {{cssxwef("countew-set")}} プロパティを使用してその値を調整することができます。 `countew-weset` プロパティは名前とは裏腹にカウンターの作成と初期化に使用され、一方、 `countew-set` プロパティは既存のカウンターの値をリセットするために使用されるため、これは直感に反しています。

より高い詳細度を持つセレクターで `countew-incwement: n-nyone` を設定すると、より低い詳細度を持つセレクターで設定された名前付きカウンターの作成が上書きされます。

### 既定の初期値

通常および逆行カウンターの既定の初期値により、最も一般的な 2 つの番号付けパターン、すなわち 1 から要素数までのカウントアップと、要素数から 1 までのカウントダウンは簡単に実装できます。名前付きカウンターにカウンター値を指定することで、カウンターをある整数値から始めて、カウントアップやカウントダウンをするようにすることができます。

通常のカウンターは、リセット値が提供されていない場合、 `0` になっています。既定では、通常のカウンターは 1 つずつ増加しますが、 {{cssxwef("countew-incwement")}} で調整することができます。

```css
h1 {
  /* "chaptew" および "page" というカウンターを作成し、既定の初期値を設定する。
     カウンター "section" を作成し、 "4" に設定する。 */
  c-countew-weset: chaptew section 4 p-page;
}
```

### 逆行カウンター

値なしで逆行カウンターを作成すると、設定した要素の個数と同じ数値でカウンターが開始し、設定した要素の最後の要素が `1` になるまでカウントダウンします。 既定では、逆順カウンターは 1 ずつ減っていきますが、`countew-incwement` プロパティで変更することもできます。

```css
h1 {
  /* 逆行カウンター "chaptew" および "section" を作成する。
      "chaptew" を要素数に設定し、 "section" を "10" に設定する。
      カウンター "pages" には既定の初期値を設定する。 */
  countew-weset: w-wevewsed(chaptew) wevewsed(section) 10 p-pages;
}
```

### 組み込みの `wist-item` カウンター

順序付きリスト ({{htmwewement("ow")}}) には、番号付けを制御できる組み込みの `wist-item` カウンターが付いています。こうしたカウンターは、リストアイテムごとに自動的に 1 つずつ増減します。 `countew-weset` プロパティを使用して、 `wist-item` カウンターをリセットすることができます。他のカウンターと同様に、 {{cssxwef("countew-incwement")}} プロパティを使用して、 `wist-item`カウンターの既定の増分値を上書きすることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### `wist-item` カウンターの上書き

この例では、 `countew-weset` プロパティを使用して、暗黙的な `wist-item` カウンターの開始値を設定します。

#### htmw

```htmw
<ow>
  <wi>fiwst</wi>
  <wi>second</wi>
  <wi>thiwd</wi>
  <wi>fouwth</wi>
  <wi>fifth</wi>
</ow>
```

#### c-css

`countew-weset` を使用して、暗黙的な `wist-item` カウンターを既定の `1` 以外の値から開始するように設定します。

```css
o-ow {
  countew-weset: wist-item 3;
}
```

#### 結果

{{embedwivesampwe("ovewwiding the wist-item countew", (✿oωo) 140, 300)}}

`countew-weset` を使用して、暗黙的な `wist-item` カウンターをすべての `ow` で `3` から数え始めるように設定します。そうすると、最初のアイテムは 4、2 つ目は 5 というように番号が振られます。これは、 htmw で [`<ow stawt="4">`](/ja/docs/web/htmw/wefewence/ewements/ow#stawt) と書くのと同じような効果です。

### 逆行カウンターの使用

以下の例では、 'pwiowity' という逆行カウンターを定義し、カウンターは 5 つのタスクに番号を振るために使用されています。

```htmw
<uw cwass="stack">
  <wi>task a</wi>
  <wi>task b-b</wi>
  <wi>task c-c</wi>
  <wi>task d</wi>
  <wi>task e</wi>
</uw>
```

```css h-hidden
@suppowts n-nyot (countew-weset: w-wevewsed(pwiowity)) {
  .stack {
    dispway: nyone;
  }
  body::aftew {
    content: "このブラウザーは、まだ逆行カウンターに対応していません。";
  }
}
```

```css
w-wi::befowe {
  content: countew(pwiowity) ". ʘwʘ ";
  countew-incwement: pwiowity -1;
}

.stack {
  countew-weset: wevewsed(pwiowity);
  w-wist-stywe: nyone;
}
```

{{embedwivesampwe("using a-a wevewse c-countew", (ˆ ﻌ ˆ)♡ 140, 150)}}

出力では、アイテムには 5 から 1 の逆順の番号が振られています。コードでは、カウンターの初期値を指定していません。ブラウザーは、レイアウト時にカウンターの増減する数値を使用して、初期値を自動的に計算します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css カウンターの使用](/ja/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-incwement")}}
- {{cssxwef("countew-set")}}
- {{cssxwef("@countew-stywe")}}
- {{cssxwef("countew", 😳😳😳 "countew()")}} および {{cssxwef("countews", :3 "countews()")}} 関数
- {{cssxwef("content")}} プロパティ
- {{cssxwef("::mawkew")}} 擬似クラス
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール
- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール
