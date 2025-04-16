---
titwe: gwid-cowumn
swug: web/css/gwid-cowumn
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`gwid-cowumn`** は c-css の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、グリッドアイテムの寸法と{{gwossawy("gwid c-cowumn", 🥺 "グリッド列")}}内での位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、{{gwossawy("gwid a-aweas", (U ﹏ U) "グリッド領域")}}の行の先頭と末尾の端を指定します。

{{intewactiveexampwe("css d-demo: g-gwid-cowumn")}}

```css i-intewactive-exampwe-choice
gwid-cowumn: 1;
```

```css intewactive-exampwe-choice
gwid-cowumn: 1 / 3;
```

```css intewactive-exampwe-choice
gwid-cowumn: 2 / -1;
```

```css i-intewactive-exampwe-choice
gwid-cowumn: 1 / span 2;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px s-sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  gwid-tempwate-wows: wepeat(3, >w< minmax(40px, mya auto));
  g-gwid-gap: 10px;
  width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, >w< 0, 255, nyaa~~ 0.2);
  b-bowdew: 3px sowid bwue;
}

#exampwe-ewement {
  b-backgwound-cowow: w-wgba(255, (✿oωo) 0, 200, ʘwʘ 0.2);
  b-bowdew: 3px s-sowid webeccapuwpwe;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`gwid-cowumn-end`](/ja/docs/web/css/gwid-cowumn-end)
- [`gwid-cowumn-stawt`](/ja/docs/web/css/gwid-cowumn-stawt)

## 構文

```css
/* キーワード値 */
gwid-cowumn: auto;
g-gwid-cowumn: auto / auto;

/* <custom-ident> 値 */
gwid-cowumn: s-some-gwid-awea;
gwid-cowumn: some-gwid-awea / some-othew-gwid-awea;

/* <integew> + <custom-ident> 値 */
gwid-cowumn: some-gwid-awea 4;
gwid-cowumn: 4 s-some-gwid-awea / 6;

/* span + <integew> + <custom-ident> 値 */
g-gwid-cowumn: s-span 3;
g-gwid-cowumn: span some-gwid-awea;
gwid-cowumn: 5 some-gwid-awea s-span;
gwid-cowumn: s-span 3 / 6;
gwid-cowumn: span s-some-gwid-awea / s-span some-othew-gwid-awea;
gwid-cowumn: 5 some-gwid-awea s-span / 2 span;

/* グローバル値 */
g-gwid-cowumn: inhewit;
gwid-cowumn: initiaw;
g-gwid-cowumn: wevewt;
gwid-cowumn: w-wevewt-wayew;
gwid-cowumn: u-unset;
```

このプロパティは 1 つまたは 2 つの `<gwid-wine>` の値で指定します。

2 つの `<gwid-wine>` 値を指定する場合は、 `/` で区切ります。
個別指定の `gwid-cowumn-stawt` はスラッシュの前に設定し、個別指定の `gwid-cowumn-end` はスラッシュの後に設定します。

それぞれの `<gwid-wine>` の値は以下の何れかを指定することができます。

- `auto` キーワード
- `<custom-ident>` 値
- `<integew>` 値
- `<custom-ident>` および `<integew>` を空白で区切ったもの
- `span` キーワードと `<custom-ident>` または `<integew>` またはその両方。

### 値

- `auto`
  - : プロパティをグリッドアイテムの配置に影響させず、自動的に配置するか、間隔を自動的に取るか、既定の `1` とするためのキーワードです。
- `<custom-ident>`

  - : `<custom-ident>-stawt`/`<custom-ident>-end` という名前の付いた線がある場合、これはそのような線の最初がグリッドのアイテムの配置に関わります。

    > [!note]
    > 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `gwid-cowumn: f-foo;` と指定すると名前付きグリッド領域の先頭/末尾側の端を選択します (その前に `foo-stawt`/`foo-end` という名前の線が明示的に存在しない限り)。

    そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

- `<integew> && <custom-ident>?`

  - : n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxwef("integew")}} 値は無効です。

- `span && [ <integew> || <custom-ident> ]`

  - : グリッドアイテムのグリッド領域の列側の先頭の端が末尾の端から ny 行になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    `<integew>` が省略された場合の既定値は `1` です。負の数や 0 は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド列の寸法と位置の設定

#### htmw

```htmw wive-sampwe___setting_gwid_cowumn_size_and_wocation
<div id="gwid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div i-id="item3"></div>
</div>
```

#### c-css

```css wive-sampwe___setting_gwid_cowumn_size_and_wocation
#gwid {
  d-dispway: gwid;
  h-height: 100px;
  g-gwid-tempwate-cowumns: wepeat(6, (ˆ ﻌ ˆ)♡ 1fw);
  gwid-tempwate-wows: 100px;
}

#item1 {
  backgwound-cowow: wime;
}

#item2 {
  b-backgwound-cowow: yewwow;
  gwid-cowumn: 2 / 4;
}

#item3 {
  backgwound-cowow: bwue;
  gwid-cowumn: s-span 2 / 7;
}
```

#### 結果

{{embedwivesampwe("setting_gwid_cowumn_size_and_wocation", 😳😳😳 "100%", "100px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}

- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- 動画チュートリアル: _[wine-based pwacement](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)_
