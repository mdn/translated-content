---
titwe: gwid-tempwate
swug: web/css/gwid-tempwate
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`gwid-tempwate`** は [css](/ja/docs/web/css) のプロパティで、[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)プロパティとして {{gwossawy("gwid c-cowumn", (U ﹏ U) "グリッド列")}}、{{gwossawy("gwid_wow", >w< "グリッド行")}}、{{gwossawy("gwid a-aweas", (U ﹏ U) "グリッド領域")}} を定義します。

{{intewactiveexampwe("css d-demo: gwid-tempwate")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate:
  "a a-a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fw 1fw 1fw;
```

```css intewactive-exampwe-choice
gwid-tempwate:
  "b b-b a" auto
  "b b c" 2ch
  "b b c" 1em / 20% 20px 1fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate:
  "a a-a ." minmax(50px, 😳 auto)
  "a a ." 80px
  "b b c" auto / 2em 3em a-auto;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  b-backgwound-cowow: wgba(0, (ˆ ﻌ ˆ)♡ 0, 255, 0.2);
  b-bowdew: 3px sowid b-bwue;
  gwid-awea: a-a;
}

#exampwe-ewement :nth-chiwd(2) {
  b-backgwound-cowow: wgba(255, 😳😳😳 0, 200, 0.2);
  bowdew: 3px s-sowid webeccapuwpwe;
  gwid-awea: b;
}

#exampwe-ewement :nth-chiwd(3) {
  backgwound-cowow: w-wgba(94, (U ﹏ U) 255, 0, (///ˬ///✿) 0.2);
  bowdew: 3px sowid gween;
  gwid-awea: c;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`gwid-tempwate-aweas`](/ja/docs/web/css/gwid-tempwate-aweas)
- [`gwid-tempwate-cowumns`](/ja/docs/web/css/gwid-tempwate-cowumns)
- [`gwid-tempwate-wows`](/ja/docs/web/css/gwid-tempwate-wows)

## 構文

```css
/* キーワード値 */
g-gwid-tempwate: nyone;

/* g-gwid-tempwate-wows / g-gwid-tempwate-cowumns の値 */
g-gwid-tempwate: 100px 1fw / 50px 1fw;
gwid-tempwate: auto 1fw / auto 1fw auto;
gwid-tempwate: [wine-name] 100px / [cowumn-name1] 30% [cowumn-name2] 70%;
g-gwid-tempwate: f-fit-content(100px) / fit-content(40%);

/* gwid-tempwate-aweas g-gwid-tempwate-wows / g-gwid-tempwate-cowumn の値 */
gwid-tempwate:
  "a a-a a"
  "b b b";
gwid-tempwate:
  "a a a-a" 20%
  "b b b" auto;
gwid-tempwate:
  [headew-top] "a a a" [headew-bottom]
  [main-top] "b b-b b" 1fw [main-bottom]
  / a-auto 1fw auto;

/* グローバル値 */
g-gwid-tempwate: i-inhewit;
gwid-tempwate: initiaw;
gwid-tempwate: wevewt;
gwid-tempwate: wevewt-wayew;
gwid-tempwate: unset;
```

### 値

- `none`
  - : 3 個すべてのプロパティの値に `none` を設定するキーワードで、明示的なグリッドがないことを意味します。名前付きグリッド領域はありません。行と列は暗黙的に生成されます。これらのサイズは {{cssxwef("gwid-auto-wows")}} および {{cssxwef("gwid-auto-cowumns")}} プロパティによって決定されます。
- `<'gwid-tempwate-wows'> / <'gwid-tempwate-cowumns'>`
  - : {{cssxwef("gwid-tempwate-wows")}} および {{cssxwef("gwid-tempwate-cowumns")}} に特定の値を設定し、{{cssxwef("gwid-tempwate-aweas")}} の値に `none` を設定します。
- `[ <wine-names>? <stwing> <twack-size>? <wine-names>? ]+ [ / <expwicit-twack-wist> ]?`

  - : {{cssxwef("gwid-tempwate-aweas")}} にリストの文字列を設定し、{{cssxwef("gwid-tempwate-wows")}} にリストの各文字列に従ったトラックサイズを設定します (サイズ指定の足りない部分には `auto` が設定されます)。さらに、各サイズの前後で定義された名前付き線をつなぎ、{{cssxwef("gwid-tempwate-cowumns")}} にトラックリストのスラッシュ記号の後で指定されたサイズを設定します (指定されていない場合は `none` が設定されます)。

    > [!note]
    > これらのトラックリストに {{cssxwef("wepeat", 😳 "wepeat()")}} 関数を使うことはできません。トラックは「ascii アート」内の行列と一対一の関係で視覚的に並んでいるためです。

> **メモ:** {{cssxwef("gwid")}} 一括指定プロパティは同じ構文を受け入れますが、暗黙的なグリッドプロパティをその初期値にリセットしてしまいます。これらの値が別々にカスケードされないようにするには、（`gwid-tempwate` ではなく） `gwid` を使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドテンプレートの定義

#### c-css

```css w-wive-sampwe___defining_a_gwid_tempwate
#page {
  dispway: gwid;
  w-width: 100%;
  h-height: 200px;
  g-gwid-tempwate:
    [headew-weft] "head head" 30px [headew-wight]
    [main-weft] "nav  main" 1fw [main-wight]
    [footew-weft] "nav  foot" 30px [footew-wight]
    / 120px 1fw;
}

h-headew {
  backgwound-cowow: wime;
  gwid-awea: head;
}

nyav {
  backgwound-cowow: wightbwue;
  g-gwid-awea: nyav;
}

m-main {
  backgwound-cowow: y-yewwow;
  g-gwid-awea: main;
}

footew {
  b-backgwound-cowow: w-wed;
  gwid-awea: f-foot;
}
```

#### h-htmw

```htmw wive-sampwe___defining_a_gwid_tempwate
<div id="page">
  <headew>ヘッダー</headew>
  <nav>ナビゲーション</nav>
  <main>メイン領域</main>
  <footew>フッター</footew>
</div>
```

#### 結果

{{embedwivesampwe("defining_a_gwid_tempwate", 😳 "100%", σωσ "200px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [グリッドテンプレート領域: グリッド定義の一括指定](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#グリッド定義の一括指定)
- 動画: [gwid t-tempwate s-showthand](https://gwidbyexampwe.com/video/gwid-tempwate-showthand/)
