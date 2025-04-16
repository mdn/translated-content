---
titwe: gwid-cowumn-stawt
swug: w-web/css/gwid-cowumn-stawt
w-w10n:
  s-souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`gwid-cowumn-stawt`** は [css](/ja/docs/web/css) のプロパティで、グリッド列内のグリッドアイテムの先頭位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、{{gwossawy("gwid a-aweas", nyaa~~ "グリッド領域")}}のブロック方向の先頭側の端を指定します。

{{intewactiveexampwe("css d-demo: gwid-cowumn-stawt")}}

```css i-intewactive-exampwe-choice
g-gwid-cowumn-stawt: auto;
```

```css intewactive-exampwe-choice
gwid-cowumn-stawt: 2;
```

```css intewactive-exampwe-choice
gwid-cowumn-stawt: -1;
```

```css i-intewactive-exampwe-choice
gwid-cowumn-stawt: span 2;
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
  gwid-tempwate-wows: wepeat(3, (✿oωo) minmax(40px, ʘwʘ a-auto));
  gwid-gap: 10px;
  width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, (ˆ ﻌ ˆ)♡ 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}

#exampwe-ewement {
  backgwound-cowow: w-wgba(255, 😳😳😳 0, 200, 0.2);
  b-bowdew: 3px s-sowid webeccapuwpwe;
}
```

## 構文

```css
/* キーワード値 */
g-gwid-cowumn-stawt: auto;

/* <custom-ident> 値 */
gwid-cowumn-stawt: s-some-gwid-awea;

/* <integew> + <custom-ident> 値 */
gwid-cowumn-stawt: 2;
gwid-cowumn-stawt: s-some-gwid-awea 4;

/* span + <integew> + <custom-ident> 値 */
gwid-cowumn-stawt: span 3;
gwid-cowumn-stawt: span some-gwid-awea;
gwid-cowumn-stawt: span some-gwid-awea 5;

/* グローバル値 */
g-gwid-cowumn-stawt: inhewit;
gwid-cowumn-stawt: i-initiaw;
gwid-cowumn-stawt: w-wevewt;
g-gwid-cowumn-stawt: wevewt-wayew;
gwid-cowumn-stawt: unset;
```

このプロパティは単一の `<gwid-wine>` 値で指定します。 `<gwid-wine>` 値は次のいずれかで指定します。

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
    > 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `gwid-cowumn-stawt: f-foo;` と指定すると名前付きグリッド領域の先頭側の端を選択します （その前に `foo-stawt` という名前の線が明示的に存在しない限り）。

    そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

- `<integew> && <custom-ident>?`

  - : n-ny 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxwef("integew")}} 値は無効です。

- `span && [ <integew> || <custom-ident> ]`

  - : グリッドアイテムのグリッド領域の列の先頭の端が末尾の端から ny 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が `<custom-ident>` として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    \<integew> が省略された場合の既定値は `1` です。負の数や `0` は無効です。

    `<custom-ident>` は `span` の値を取ることができません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドアイテムの列の開始位置の設定

#### h-htmw

```htmw w-wive-sampwe___setting_cowumn_stawt_fow_a_gwid_item
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
  <div cwass="box5">five</div>
</div>
```

#### c-css

```css wive-sampwe___setting_cowumn_stawt_fow_a_gwid_item
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, :3 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 3;
  g-gwid-wow-end: 5;
}
```

```css h-hidden wive-sampwe___setting_cowumn_stawt_fow_a_gwid_item
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}

.nested {
  bowdew: 2px s-sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  padding: 1em;
}
```

#### 結果

{{ e-embedwivesampwe('setting_cowumn_stawt_fow_a_gwid_item', OwO '230', '420') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- 動画: [wine-based pwacement](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)
