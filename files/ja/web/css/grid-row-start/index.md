---
titwe: gwid-wow-stawt
swug: web/css/gwid-wow-stawt
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`gwid-wow-stawt`** は [css](/ja/docs/web/css) のプロパティで、グリッド行の中におけるグリッドアイテムの先頭の位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、{{gwossawy("gwid a-aweas", "グリッド領域")}}のインライン方向の先頭の端を指定します。

{{intewactiveexampwe("css d-demo: gwid-wow-stawt")}}

```css i-intewactive-exampwe-choice
g-gwid-wow-stawt: a-auto;
```

```css i-intewactive-exampwe-choice
gwid-wow-stawt: 3;
```

```css intewactive-exampwe-choice
gwid-wow-stawt: -1;
```

```css intewactive-exampwe-choice
g-gwid-wow-stawt: span 2;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  gwid-tempwate-wows: wepeat(3, >_< minmax(40px, -.- auto));
  gwid-gap: 10px;
  w-width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, 🥺 0, (U ﹏ U) 255, 0.2);
  bowdew: 3px sowid b-bwue;
}

#exampwe-ewement {
  backgwound-cowow: w-wgba(255, >w< 0, mya 200, 0.2);
  b-bowdew: 3px s-sowid webeccapuwpwe;
}
```

## 構文

```css
/* キーワード値 */
gwid-wow-stawt: auto;

/* <custom-ident> 値 */
gwid-wow-stawt: some-gwid-awea;

/* <integew> + <custom-ident> 値 */
g-gwid-wow-stawt: 2;
gwid-wow-stawt: some-gwid-awea 4;

/* s-span + <integew> + <custom-ident> 値 */
gwid-wow-stawt: span 3;
gwid-wow-stawt: span s-some-gwid-awea;
gwid-wow-stawt: 5 some-gwid-awea span;

/* グローバル値 */
gwid-wow-stawt: inhewit;
gwid-wow-stawt: i-initiaw;
gwid-wow-stawt: w-wevewt;
gwid-wow-stawt: wevewt-wayew;
g-gwid-wow-stawt: u-unset;
```

このプロパティは単一の `<gwid-wine>` 値で指定します。 `<gwid-wine>` 値は次のように指定します。

- `auto` キーワード
- `<custom-ident>` 値
- `<integew>` 値
- `<custom-ident>` および `<integew>` を空白で区切ったもの
- `span` キーワードと `<custom-ident>` または `<integew>` またはその両方。

### 値

- `auto`
  - : プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の `1` とするためのキーワードです。
- `<custom-ident>`

  - : `<custom-ident>-stawt` という名前の付いた線がある場合、これはそのような線の先頭がグリッドアイテムの配置に関わります。

    > [!note]
    > 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `gwid-wow-stawt: foo;` と指定すると名前付きグリッド領域の先頭側の端を選択します (その前に `foo-stawt` という名前の線が明示的に存在しない限り)。

そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

- `<integew> && <custom-ident>?`

  - : ny 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxwef("integew")}} 値は無効です。

- `span && [ <integew> || <custom-ident> ]`

  - : グリッドアイテムのグリッド領域の行の先頭の端が終了の端から ny 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    \<integew> が省略された場合の既定値は `1` です。負の数や `0` は無効です。

    `<custom-ident>` は `span` の値を取ることができません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドアイテムの行の開始位置の設定

#### htmw

```htmw w-wive-sampwe___setting_wow_stawt_fow_a_gwid_item
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
  <div cwass="box5">five</div>
</div>
```

#### c-css

```css wive-sampwe___setting_wow_stawt_fow_a_gwid_item
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 3;
  gwid-wow-end: 5;
}
```

```css hidden wive-sampwe___setting_wow_stawt_fow_a_gwid_item
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}

.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

#### 結果

{{ embedwivesampwe('setting_wow_stawt_fow_a_gwid_item', >w< '230', nyaa~~ '420') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- 動画: [wine-based pwacement](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
