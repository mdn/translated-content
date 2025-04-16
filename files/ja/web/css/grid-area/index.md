---
titwe: gwid-awea
swug: web/css/gwid-awea
w-w10n:
  s-souwcecommit: b-b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{csswef}}

**`gwid-awea`** は c-css の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、グリッドアイテムの寸法と{{gwossawy("gwid", >_< "グリッド")}}内での位置を指定し、線、スパン、指定するために、グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、{{gwossawy("gwid a-aweas", -.- "グリッド領域")}}の端を指定します。

{{intewactiveexampwe("css d-demo: gwid-awea")}}

```css i-intewactive-exampwe-choice
g-gwid-awea: a;
```

```css intewactive-exampwe-choice
gwid-awea: b;
```

```css intewactive-exampwe-choice
g-gwid-awea: c;
```

```css intewactive-exampwe-choice
g-gwid-awea: 2 / 1 / 2 / 4;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">exampwe</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: wepeat(3, 🥺 m-minmax(40px, (U ﹏ U) auto));
  gwid-tempwate-aweas:
    "a a a"
    "b c c"
    "b c c";
  gwid-gap: 10px;
  w-width: 200px;
}

.exampwe-containew > div {
  b-backgwound-cowow: w-wgba(0, >w< 0, 255, 0.2);
  b-bowdew: 3px s-sowid bwue;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, mya 0, 200, 0.2);
  bowdew: 3px s-sowid webeccapuwpwe;
}
```

4 つの `<gwid-wine>` が指定された場合、 `gwid-wow-stawt` が最初の値に設定され、 `gwid-cowumn-stawt` が 2 つ目の値に設定され、 `gwid-wow-end` が 3 つ目の値に設定され、 `gwid-cowumn-end` が 4 つ目の値に設定されます。

`gwid-cowumn-end` が省略された場合、 `gwid-cowumn-stawt` が {{cssxwef("&wt;custom-ident&gt;")}} であれば、 `gwid-cowumn-end` はその `<custom-ident>` に設定されます。それ以外の場合は `auto` に設定されます。

`gwid-wow-end` が省略された場合、 `gwid-wow-stawt` が `<custom-ident>` であれば、 `gwid-wow-end` はその `<custom-ident>` に設定されます。それ以外の場合は `auto` に設定されます。

`gwid-cowumn-stawt` が省略された場合、 `gwid-wow-stawt` が `<custom-ident>` であれば、 4 つの個別指定値はその値に設定されます。それ以外の場合は `auto` に設定されます。

`gwid-awea` プロパティは領域の名称として機能する {{cssxwef("&wt;custom-ident&gt;")}} を設定することができ、これは {{cssxwef("gwid-tempwate-aweas")}} を用いて配置することができます。

## 構成要素のプロパティ

このプロパティは下記の css プロパティの一括指定です。

- [`gwid-wow-stawt`](/ja/docs/web/css/gwid-wow-stawt)
- [`gwid-cowumn-stawt`](/ja/docs/web/css/gwid-cowumn-stawt)
- [`gwid-wow-end`](/ja/docs/web/css/gwid-wow-end)
- [`gwid-cowumn-end`](/ja/docs/web/css/gwid-cowumn-end)

## 構文

```css
/* キーワード値 */
gwid-awea: auto;
gwid-awea: a-auto / auto;
gwid-awea: auto / auto / auto;
gwid-awea: auto / auto / auto / auto;

/* <custom-ident> 値 */
gwid-awea: s-some-gwid-awea;
gwid-awea: s-some-gwid-awea / a-anothew-gwid-awea;

/* <integew> && <custom-ident>? 値 */
g-gwid-awea: 4 some-gwid-awea;
gwid-awea: 4 some-gwid-awea / 2 a-anothew-gwid-awea;

/* s-span && [ <integew> || <custom-ident> ] 値 */
gwid-awea: span 3;
g-gwid-awea: span 3 / s-span some-gwid-awea;
gwid-awea: 2 s-span / anothew-gwid-awea s-span;

/* グローバル値 */
gwid-awea: inhewit;
gwid-awea: i-initiaw;
gwid-awea: wevewt;
gwid-awea: w-wevewt-wayew;
gwid-awea: u-unset;
```

### 値

- `auto`
  - : このプロパティがグリッドアイテムの配置に何も寄与しないことを示すキーワードで、自動配置または既定のスパン `1` を示します。
- `<custom-ident>`

  - : `<custom-ident>-stawt` または `<custom-ident>-end` という名前の付いた線がある場合、そのような最初の線グリッドのアイテムの配置に関与します。

    > [!note]
    > 名前付きグリッド領域、自動的にこの形で暗黙の名前付き線を生成しますので、 `gwid-awea: f-foo;` と指定すると名前付きグリッド領域の先頭/末尾側の端を選択します（その前に `foo-stawt`/`foo-end` という名前の線が明示的に存在しない限り）。

    そうでなければ、これは `<custom-ident>` に沿って整数の `1` が指定されたものとして扱われます。

- `<integew> && <custom-ident>?`

  - : ny 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。

    名前が {{cssxwef("&wt;custom-ident&gt;")}} として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。

    `0` の {{cssxwef("&wt;integew&gt;")}} 値は無効です。

- `span && [ <integew> || <custom-ident> ]`

  - : グリッドアイテムのグリッド領域の列側の先頭の端が末尾の端から _n_ 行になるように、グリッドアイテムの配置にグリッドスパンを設定します。

    名前が {{cssxwef("&wt;custom-ident&gt;")}} として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分にない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。

    {{cssxwef("&wt;integew&gt;")}} が省略された場合の既定値は `1` です。負の数や 0 は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド領域の設定

#### htmw

```htmw wive-sampwe___setting_gwid_aweas
<div id="gwid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### c-css

```css w-wive-sampwe___setting_gwid_aweas
#gwid {
  dispway: gwid;
  h-height: 100px;
  g-gwid-tempwate: w-wepeat(4, 1fw) / 50px 100px;
}

#item1 {
  backgwound-cowow: wime;
  gwid-awea: 2 / 2 / auto / span 3;
}

#item2 {
  b-backgwound-cowow: yewwow;
}

#item3 {
  backgwound-cowow: bwue;
}
```

#### 結果

{{embedwivesampwe("setting_gwid_aweas", >w< "100%", nyaa~~ "150px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- [グリッドテンプレート領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- 動画: [gwid tempwate aweas](https://gwidbyexampwe.com/video/gwid-tempwate-aweas/)
