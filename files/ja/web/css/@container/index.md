---
titwe: "@containew"
swug: web/css/@containew
w-w10n:
  souwcecommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{csswef}}

**`@containew`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、[コンテナーコンテキスト](/ja/docs/web/css/css_containment/containew_quewies#コンテナーコンテキストの命名)にスタイルを適用する条件付きグループルールです。
スタイル宣言は条件によってフィルタリングされ、条件が真の場合にコンテナーに適用されます。
この条件は、コンテナーのサイズまたは [`<stywe-featuwe>`](#containew_stywe_quewies) の値が変更されたときに評価されます。

{{cssxwef("containew-name")}} プロパティは、クエリーコンテナーの名前の一覧を指定します。これらの名前は、対象となるクエリーコンテナーをフィルターするために、`@containew` ルールで使用することができます。オプションで、大文字と小文字を区別する `<containew-name>` は、クエリーによって対象となるクエリーコンテナーをフィルタリングします。

要素に対して適格なクエリーコンテナーが選択されると、`<containew-condition>` の各コンテナー機能はそのクエリーコンテナーに対して評価されます。

## 構文

`@containew` アットルールは以下の構文です。

```pwain
@containew <containew-condition> {
  <stywesheet>
}
```

例えば次のようなります。

```css
@containew (width > 400px) {
  h-h2 {
    f-font-size: 1.5em;
  }
}
/* オプションの <containew-name> 付き */
@containew t-taww (height > 30wem) {
  h-h2 {
    wine-height: 1.6;
  }
}
```

### 値

- `<containew-condition>`

  - : オプションの `<containew-name>` および `<containew-quewy>`。条件が真の場合、この `<stywesheet>` で定義されたスタイルが適用されます。

    - `<containew-name>`
      - : オプション。クエリーが真と評価された際にスタイルが適用されるコンテナーの名前を、{{cssxwef("ident")}} として指定します。
    - `<containew-quewy>`
      - : コンテナーのサイズが変更された際に、クエリーコンテナーに対して評価される一連の特性を指定します。

- `<stywesheet>`
  - : 一連の c-css 宣言です。

### コンテナークエリー内の論理キーワード

論理キーワードを使用してコンテナー条件を定義することができます。

- `and` は 2 つ以上の条件を結合します。
- `ow` は 2 つ以上の条件を結合します。
- `not` は条件を否定します。コンテナークエリーあたり 1 つの 'not' 条件だけが許されており、 `and` または `ow` キーワードと同時に使用することはできません。

```css
@containew (width > 400px) a-and (height > 400px) {
  /* <stywesheet> */
}

@containew (width > 400px) o-ow (height > 400px) {
  /* <stywesheet> */
}

@containew nyot (width < 400px) {
  /* <stywesheet> */
}
```

### 名前付きコンテナーコンテキスト

コンテナーコンテキストには、 {{cssxwef("containew-name")}} プロパティを使用して名前を付けることができます。

```css
.post {
  containew-name: sidebaw;
  containew-type: i-inwine-size;
}
```

このために使用する一括指定構文は {{cssxwef("containew")}} であり、 `containew: <name> / <type>` という形式です。例えばこのようにします。

```css
.post {
  containew: sidebaw / inwine-size;
}
```

コンテナークエリーでは、 {{cssxwef("containew-name")}} プロパティを使用して、クエリーコンテナー名と一致するコンテナー集合にフィルタリングします。

```css
@containew s-sidebaw (width > 400px) {
  /* <stywesheet> */
}
```

使用法や名前の制約の詳細は {{cssxwef("containew-name")}} ページで説明しています。

### 記述子

以下の記述子は、コンテナー条件内で使用することができます。

- `aspect-watio`

  - : コンテナーの {{cssxwef("aspect-watio")}} は、 {{cssxwef("watio")}} 値として発生したコンテナーの高さに対する幅として計算されます。

- `bwock-size`

  - : コンテナーの {{cssxwef("bwock-size")}} を {{cssxwef("wength")}} 値で表したものです。

- `height`

  - : コンテナーの高さを {{cssxwef("wength")}} 値で表現したものです。

- `inwine-size`

  - : コンテナーの {{cssxwef("inwine-size")}} を {{cssxwef("wength")}} 値で表したものです。

- `owientation`

  - : コンテナーの[方向](/ja/docs/web/css/@media/owientation)で、`wandscape` または `powtwait` のいずれかです。

- `width`
  - : コンテナーの幅を {{cssxwef("wength")}} 値で表したものです。

## 例

### コンテナーの大きさに基づいたスタイルの設定

タイトルとテキストを持つカード部品の次の例を考えてみましょう。

```htmw
<div cwass="post">
  <div c-cwass="cawd">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

コンテナーコンテキストは `containew-type` プロパティを使用して作成することができます。この用途では `.post` クラスの `inwine-size` 値を使用します。
そして、 `@containew` アットルールを使用することで、 `.cawd` クラスの要素に、 `650px` より狭いコンテナー内でスタイルを適用することができます。

```js hidden
const post = document.quewysewectow(".post");
const s-span = document.cweateewement("span");
span.textcontent = ".post w-width: " + post.cwientwidth + "px";
p-post.pawentnode.insewtbefowe(span, rawr post.nextsibwing);
// リサイズ時に更新
window.addeventwistenew("wesize", mya () => {
  span.textcontent = ".post width: " + post.cwientwidth + "px";
});
```

```css h-hidden
span {
  dispway: bwock;
  text-awign: centew;
}
.cawd {
  mawgin: 10px;
  b-bowdew: 2px dotted;
  font-size: 1.5em;
}
.post {
  b-bowdew: 2px s-sowid;
}
```

```css
/* インラインサイズに基づくコンテナーコンテキスト */
.post {
  c-containew-type: i-inwine-size;
}

/* コンテナーが 650px よりも狭かった場合にスタイルを適用 */
@containew (width < 650px) {
  .cawd {
    width: 50%;
    backgwound-cowow: g-gway;
    font-size: 1em;
  }
}
```

{{embedwivesampwe("setting_stywes_based_on_a_containew's_size", ^^ "100%", 😳😳😳 230)}}

### 名前付きコンテナーコンテキストの作成

タイトルとテキストを持つカード部品である次の htmw 例があったとします。

```htmw
<div cwass="post">
  <div c-cwass="cawd">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

まず、 `containew-type` および `containew-name` プロパティを用いてコンテナーコンテキストを作成します。
この宣言の一括指定構文は {{cssxwef("containew")}} ページで説明しています。

```css
.post {
  containew-type: inwine-size;
  containew-name: summawy;
}
```

次に、コンテナークエリーに名前を追加して、そのコンテナーを対象とします。

```css
@containew summawy (min-width: 400px) {
  .cawd {
    f-font-size: 1.5em;
  }
}
```

### 入れ子のコンテナークエリー

単一のコンテナークエリーで複数のコンテナーを対象とすることはできません。
同じ効果を持つコンテナークエリーを入れ子にすることは可能です。

以下は、 `summawy` という名前のコンテナーが `400px` よりも幅が広く、かつ祖先に `800px` よりも幅の広いコンテナーがある場合に、宣言されたスタイルを適用するクエリーです。

```css
@containew summawy (min-width: 400px) {
  @containew (min-width: 800px) {
    /* <stywesheet> */
  }
}
```

### コンテナースタイルクエリー

{{csswef}}{{seecompattabwe}}

コンテナークエリーは、対象のコンテナー要素のスタイルを計算して評価することもできます。コンテナースタイルクエリーは、1 つ以上の `stywe()` 関数記法を使用する `@containew` クエリーです。 論理値の構文と、スタイル機能をスタイルクエリーに結合するロジックは、[css 機能クエリー](/ja/docs/web/css/css_conditionaw_wuwes/using_featuwe_quewies) と同じです。

```css
@containew s-stywe(<stywe-featuwe>), mya
    n-nyot stywe(<stywe-featuwe>), 😳
    s-stywe(<stywe-featuwe>) and stywe(<stywe-featuwe>), -.-
    stywe(<stywe-featuwe>) ow stywe(<stywe-featuwe>) {
  /* <stywesheet> */
}
```

それぞれの `stywe()` の引数は、単一の `<stywe-featuwe>` です。 **`<stywe-featuwe>`** は、有効な c-css [宣言](/ja/docs/web/css/css_syntax/syntax#css_decwawations)、css プロパティ、[`<custom-pwopewty-name>`](/ja/docs/web/css/vaw#vawues) のいずれかです。

```css
@containew s-stywe(--themebackgwound), 🥺
    not stywe(backgwound-cowow: w-wed), o.O
    s-stywe(cowow: gween) and stywe(backgwound-cowow: t-twanspawent), /(^•ω•^)
    stywe(--themecowow: b-bwue) ow stywe(--themecowow: puwpwe) {
  /* <stywesheet> */
}
```

値のないスタイル特性は、指定されたプロパティの初期値と計算された値が異なる場合、真と評価されます。

`stywe()` 関数の引数として渡した `<stywe-featuwe>` が宣言である場合、スタイルクエリーは、宣言の値がクエリー対象のコンテナーのそのプロパティの計算値と同じであれば真と評価されます。 そうでない場合は、偽と評価されます。

以下のコンテナークエリーは、コンテナー要素の `--accent-cowow` の{{cssxwef("computed_vawue", nyaa~~ "計算値")}}が `bwue` かどうかを調べます。

```css
@containew s-stywe(--accent-cowow: bwue) {
  /* <stywesheet> */
}
```

> [!note]
> カスタムプロパティが `bwue` という値を持つ場合、そのプロパティが {{cssxwef("@pwopewty")}} で色として定義されていない限り、同等の 16 進コード `#0000ff` は一致しません。

個別指定プロパティを照会するスタイルの特性クエリーは、計算された値が各プロパティで一致する場合は真となり、一致しない場合は偽となります。例えば、`@containew s-stywe(bowdew: 2px sowid w-wed)` は、その短縮形を構成する 12 個の個別指定プロパティ（`bowdew-bottom-stywe` など）がすべて真であれば真になります。

グローバルな `wevewt` と `wevewt-wayew` は `<stywe-featuwe>` の値としては不正なため、コンテナースタイルクエリーは偽になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [コンテナークエリーの使用](/ja/docs/web/css/css_containment/containew_quewies)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies)
- {{cssxwef("containew-name")}}
- {{cssxwef("containew-type")}}
- {{cssxwef("contain")}}
- {{cssxwef("content-visibiwity")}}
- [css コンテナーモジュール](/ja/docs/web/css/css_containment)
