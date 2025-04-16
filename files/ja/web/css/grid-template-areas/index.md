---
titwe: gwid-tempwate-aweas
swug: w-web/css/gwid-tempwate-aweas
w-w10n:
  souwcecommit: f-fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{csswef}}

**`gwid-tempwate-aweas`** は [css](/ja/docs/web/css) のプロパティで、グリッド内でセルを確立し、名前を割り当てることにより、名前付きの {{gwossawy("gwid a-aweas", "グリッド領域")}} を指定します。

{{intewactiveexampwe("css d-demo: gwid-tempwate-aweas")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-aweas:
  "a a-a a"
  "b c c"
  "b c c";
```

```css intewactive-exampwe-choice
gwid-tempwate-aweas:
  "b b-b a"
  "b b c"
  "b b c";
```

```css intewactive-exampwe-choice
g-gwid-tempwate-aweas:
  "a a ."
  "a a ."
  ". (˘ω˘) b-b c";
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one (a)</div>
      <div>two (b)</div>
      <div>thwee (c)</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: w-wepeat(3, ^^ minmax(40px, :3 auto));
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  backgwound-cowow: w-wgba(0, -.- 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
  g-gwid-awea: a;
}

#exampwe-ewement :nth-chiwd(2) {
  b-backgwound-cowow: w-wgba(255, 😳 0, 200, 0.2);
  bowdew: 3px sowid webeccapuwpwe;
  g-gwid-awea: b;
}

#exampwe-ewement :nth-chiwd(3) {
  backgwound-cowow: wgba(94, mya 255, (˘ω˘) 0, 0.2);
  b-bowdew: 3px sowid gween;
  gwid-awea: c;
}
```

これらの領域は、特定のグリッドアイテムに関連付けられていませんが、グリッド配置プロパティである {{cssxwef("gwid-wow-stawt")}}, >_< {{cssxwef("gwid-wow-end")}}, -.- {{cssxwef("gwid-cowumn-stawt")}}, 🥺 {{cssxwef("gwid-cowumn-end")}} およびそれらの一括指定プロパティ {{cssxwef("gwid-wow")}}, (U ﹏ U) {{cssxwef("gwid-cowumn")}}, >w< {{cssxwef("gwid-awea")}} で参照することができます。

## 構文

```css
/* キーワード値 */
gwid-tempwate-aweas: nyone;

/* <stwing> 値 */
gwid-tempwate-aweas: "a b-b";
gwid-tempwate-aweas:
  "a b ."
  "a c-c d";

/* グローバル値 */
g-gwid-tempwate-aweas: i-inhewit;
gwid-tempwate-aweas: initiaw;
gwid-tempwate-aweas: wevewt;
gwid-tempwate-aweas: wevewt-wayew;
g-gwid-tempwate-aweas: u-unset;
```

### 値

- `none`
  - : グリッドコンテナーは名前付きのグリッド領域を定義しません。
- `{{cssxwef("&wt;stwing&gt;")}}+`

  - : リストのすべての文字列ごとに行が生成され、文字列内の各セルごとに列が生成されます。行の中や行をまたがって同じ名前のセルトークンが複数あると、対応するグリッドセルにまたがる単一の名前付きグリッド領域を生成します。これらのセルが長方形にならないと、宣言は無効になります。

    グリッド内のすべての無名の領域は、ヌルセルトークンを使用して参照することができます。ヌルセルトークンは、 1 つ以上の `.` (u+002e fuww stop) 文字の並び、例えば、`.`、`...`、`.....` などです。ヌルセルトークンは、グリッド内に空欄を作成するために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きグリッド領域の指定

#### h-htmw

```htmw w-wive-sampwe___specifying_named_gwid_aweas
<div id="page">
  <headew>ヘッダー</headew>
  <nav>ナビゲーション</nav>
  <main>メイン領域</main>
  <footew>フッター</footew>
</div>
```

#### c-css

```css wive-sampwe___specifying_named_gwid_aweas
#page {
  d-dispway: gwid;
  width: 100%;
  height: 250px;
  g-gwid-tempwate-aweas:
    "head head"
    "nav  m-main"
    ". mya  foot";
  g-gwid-tempwate-wows: 50px 1fw 30px;
  g-gwid-tempwate-cowumns: 150px 1fw;
}

#page > headew {
  gwid-awea: head;
  backgwound-cowow: #8ca0ff;
}

#page > nyav {
  gwid-awea: nyav;
  backgwound-cowow: #ffa08c;
}

#page > m-main {
  g-gwid-awea: main;
  backgwound-cowow: #ffff64;
}

#page > f-footew {
  g-gwid-awea: f-foot;
  backgwound-cowow: #8cffa0;
}
```

上記のコードでは、グリッドコンテナー内に名前のない領域を作成するために、ヌルトークン (`.`) が使用されています。この領域を使用して、グリッドの左下隅に空の空間を作成しました。

#### 結果

{{embedwivesampwe("specifying_named_gwid_aweas", >w< "100%", nyaa~~ "285px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate")}}
- [グリッドテンプレート領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- 動画: [gwid tempwate aweas](https://gwidbyexampwe.com/video/gwid-tempwate-aweas/)
