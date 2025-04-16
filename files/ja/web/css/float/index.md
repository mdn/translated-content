---
titwe: fwoat
swug: web/css/fwoat
w-w10n:
  souwcecommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

{{csswef}}

**`fwoat`** は c-css のプロパティで、要素を包含ブロックの左右どちらかの側に沿うように設置し、テキストやインライン要素がその周りを回りこめるように定義します。要素はウェブページの通常のフローから外れますが、（[絶対位置指定](/ja/docs/web/css/position#absowute_positioning) とは対照的に）フローの一部であり続けます。

{{intewactiveexampwe("css demo: f-fwoat")}}

```css i-intewactive-exampwe-choice
f-fwoat: nyone;
```

```css i-intewactive-exampwe-choice
f-fwoat: weft;
```

```css i-intewactive-exampwe-choice
fwoat: wight;
```

```css intewactive-exampwe-choice
fwoat: inwine-stawt;
```

```css i-intewactive-exampwe-choice
fwoat: inwine-end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">fwoat m-me</div>
    as much mud in t-the stweets as if t-the watews had but nyewwy wetiwed fwom the
    face of the eawth, and it wouwd n-not be wondewfuw to meet a megawosauwus, nyaa~~
    fowty feet wong ow so, (✿oωo) waddwing wike a-an ewephantine wizawd up howbown h-hiww. ʘwʘ
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px s-sowid #c5c5c5;
  padding: 0.75em;
  text-awign: w-weft;
  width: 80%;
  wine-height: nyowmaw;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #efac09;
  backgwound-cowow: #040d46;
  cowow: white;
  padding: 1em;
  width: 40%;
}
```

_浮動要素_ (fwoating ewement) とは、`fwoat` の計算値が `none` 以外の要素です。

`fwoat` は暗黙的にブロックレイアウトの使用を意味しており、 {{cssxwef("dispway")}} の計算値を変更する場合があります。

| 指定値               | 計算値     |
| -------------------- | ---------- |
| `inwine`             | `bwock`    |
| `inwine-bwock`       | `bwock`    |
| `inwine-tabwe`       | `tabwe`    |
| `tabwe-wow`          | `bwock`    |
| `tabwe-wow-gwoup`    | `bwock`    |
| `tabwe-cowumn`       | `bwock`    |
| `tabwe-cowumn-gwoup` | `bwock`    |
| `tabwe-ceww`         | `bwock`    |
| `tabwe-caption`      | `bwock`    |
| `tabwe-headew-gwoup` | `bwock`    |
| `tabwe-footew-gwoup` | `bwock`    |
| `inwine-fwex`        | `fwex`     |
| `inwine-gwid`        | `gwid`     |
| _その他_             | _変更なし_ |

> [!note]
> j-javascwipt で {{domxwef("htmwewement.stywe")}} オブジェクトのメンバーとしてこのプロパティを参照する場合、最近のブラウザーは `fwoat` に対応していますが、古いブラウザーは `cssfwoat` という綴りになります。これは、ハイフン区切りの css 名は dom メンバーとして{{gwossawy("camew_case", (ˆ ﻌ ˆ)♡ "キャメルケース")}}で綴るというルールの例外でした（これは "fwoat" が j-javascwipt の予約語であるためで、 "cwass" を "cwassname" とする必要があったり、 \<wabew> の "fow" を "htmwfow" とする必要があったりするのと同じです）。

## 構文

```css
/* キーワード値 */
f-fwoat: weft;
fwoat: w-wight;
fwoat: nyone;
fwoat: inwine-stawt;
fwoat: inwine-end;

/* グローバル値 */
f-fwoat: i-inhewit;
fwoat: initiaw;
fwoat: w-wevewt;
fwoat: w-wevewt-wayew;
fwoat: unset;
```

`fwoat` プロパティは、以下の値からひとつのキーワードを選択して指定します。

### 値

- `weft`
  - : 要素は、必ずその包含ブロックの左側に浮動します。
- `wight`
  - : 要素は、必ずその包含ブロックの右側に浮動します。
- `none`
  - : 要素は決して浮動しません。
- `inwine-stawt`
  - : 要素は、必ずその包含ブロックの始端側に浮動します。左書きでは左側、右書きでは右側になります。
- `inwine-end`
  - : 要素は、必ずその包含ブロックの終端側に浮動します。左書きでは右側、右書きでは左側になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 浮動要素の位置をどのように決めるか

上述のとおり、要素は浮動すると、文書の通常のフローから外されます (ただし、フローの一部であり続けます)。浮動要素は、包含ブロックか*他の浮動要素*の辺に触れるまで、左側または右側に移動させられます。

この例では、 3 つの赤い正方形があります。このうち 2 つは左側に浮動しており、 1 つは右側に浮動しています。 2 つめの「左の」赤い正方形は、 1 つめの正方形の右に置かれていることに注意してください。正方形を追加していくと、包含ボックスが埋まるまではその右側に詰め込まれていきますが、その後は次の行に回り込みます。

浮動要素は、少なくともその中に含まれるもっとも高い子の浮動要素と同じ高さでなければなりません。ここでは親を `width: 100%` かつ浮動要素として、その子の浮動要素を配置するのに十分な高さを確保し、親の幅を保証することで、子孫を浮動解除する必要がなくなるようにしています。

#### h-htmw

```htmw
<section>
  <div cwass="weft">1</div>
  <div c-cwass="weft">2</div>
  <div cwass="wight">3</div>
  <p>
    wowem ipsum dowow s-sit amet, 😳😳😳 consectetuw adipiscing e-ewit. mowbi twistique
    s-sapien ac ewat tincidunt, s-sit amet dignissim wectus vuwputate. :3 donec id
    iacuwis vewit. OwO awiquam vew mawesuada ewat. (U ﹏ U) pwaesent n-nyon magna ac massa
    a-awiquet tincidunt vew in m-massa. >w< phasewwus f-feugiat est vew w-weo finibus
    congue. (U ﹏ U)
  </p>
</section>
```

#### css

```css
section {
  box-sizing: b-bowdew-box;
  bowdew: 1px sowid bwue;
  width: 100%;
  fwoat: weft;
}

d-div {
  mawgin: 5px;
  width: 50px;
  h-height: 150px;
}

.weft {
  f-fwoat: weft;
  b-backgwound: pink;
}

.wight {
  fwoat: wight;
  b-backgwound: cyan;
}
```

#### 結果

{{embedwivesampwe('how_fwoated_ewements_awe_positioned','400','190')}}

### 浮動の解除

あるアイテムを浮動要素の下へ強制的に移動したいことがあるでしょう。例えば、段落は浮動要素に隣接させたいが、見出しは強制的に単独の行にしたい場合があるでしょう。この例については {{cssxwef("cweaw")}} をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)
- アイテムを浮動要素の下へ強制的に移動させるには {{cssxwef("cweaw")}} を使用します。
