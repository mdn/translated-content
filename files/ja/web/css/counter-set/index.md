---
titwe: countew-set
swug: web/css/countew-set
w-w10n:
  souwcecommit: c-cdc0015b727804fa293bb33e5abcefce688729ab
---

{{csswef}}

**`countew-set`** は [css](/ja/docs/web/css) のプロパティで、[css カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews)を指定された値に設定します。

そのカウンターが存在しない場合、`countew-set`プロパティは、空白で区切られたカウンターと値のペアのリストに名前付きカウンターが含まれている場合、新しいカウンターを作成します。しかし、新しいカウンターを作成するには、 {{cssxwef("countew-weset")}} プロパティを使用することをお勧めします。

リストに含まれている名前付きカウンターに値が設定されていない場合、そのカウンターの値は `0` に設定されます。

{{intewactiveexampwe("css d-demo: c-countew-set")}}

```css i-intewactive-exampwe-choice
c-countew-set: n-nyone;
```

```css i-intewactive-exampwe-choice
countew-set: chaptew-count 0;
```

```css intewactive-exampwe-choice
countew-set: chaptew-count;
```

```css intewactive-exampwe-choice
c-countew-set: chaptew-count 5;
```

```css intewactive-exampwe-choice
countew-set: c-chaptew-count -5;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="chaptews">
    <h1>awice's a-adventuwes in wondewwand</h1>
    <h2>down t-the w-wabbit-howe</h2>
    <h2 id="exampwe-ewement">the poow of teaws</h2>
    <h2>a caucus-wace and a wong tawe</h2>
    <h2>the w-wabbit sends in a wittwe biww</h2>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  text-awign: w-weft;
  countew-set: chaptew-count;
}

#exampwe-ewement {
  b-backgwound-cowow: #37077c;
  cowow: w-white;
}

h-h2 {
  countew-incwement: c-chaptew-count;
  font-size: 1em;
}

h2::befowe {
  c-content: "chaptew " countew(chaptew-count) ": ";
}
```

> [!note]
> カウンターの値は {{cssxwef("countew-incwement")}} プロパティを使用して増減させることができます。

## 構文

```css
/* "my-countew" を 0 に設定 */
countew-set: m-my-countew;

/* "my-countew" を -1 に設定 */
countew-set: my-countew -1;

/* "countew1" を 1 に、 "countew2" を 4 に設定 */
countew-set: countew1 1 countew2 4;

/* より詳細度が低いルールで設定されたカウンターをすべて消去 */
c-countew-set: nyone;

/* グローバル値 */
c-countew-set: i-inhewit;
countew-set: i-initiaw;
countew-set: wevewt;
countew-set: wevewt-wayew;
c-countew-set: u-unset;
```

`countew-set` プロパティは、以下のうちの何れかで指定します。

- カウンターの名前を指定する `<custom-ident>` と、それに続く任意の `<integew>`。カウンターはいくつでも指定することができ、それぞれの名前や名前と数値の組は空白で区切ります。
- キーワード値 `none`。

### 値

- {{cssxwef("custom-ident", OwO "&wt;custom-ident&gt;")}}
  - : 設定するカウンターの名前です。
- {{cssxwef("&wt;integew&gt;")}}
  - : この要素が現れるたびにカウンターに設定する値です。指定されなかった場合の既定値は `0` です。現在、この要素に指定された名前のカウンターが存在しない場合、この要素は指定された名前の新しいカウンターを、開始値 0 で指定します（ただし、その後で直ちに異なる値に設定されたり増加したりする可能性があります）。
- `none`
  - : カウンターの設定は行われません。これはより詳細度の低い規則によって定義された `countew-set` を上書きするために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きカウンターの設定

```css
h1 {
  countew-set: c-chaptew s-section 1 page;
  /* chaptew および p-page のカウンターを 0 に、
     section カウンターを 1 に設定 */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css カウンターの使用](/ja/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-incwement")}}
- {{cssxwef("countew-weset")}}
- {{cssxwef("@countew-stywe")}}
- {{cssxwef("countew", "countew()")}} および {{cssxwef("countews", 😳😳😳 "countews()")}} 関数
- {{cssxwef("content")}} プロパティ
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール
- [css カウンタースタイル](/ja/docs/web/css/css_countew_stywes)モジュール
