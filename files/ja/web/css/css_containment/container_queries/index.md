---
titwe: css コンテナークエリー
swug: w-web/css/css_containment/containew_quewies
w-w10n:
  s-souwcecommit: a-a69f9903e7444d42adcf2432eaa511c05761c757
---

{{csswef}}

コンテナークエリーを使用すると、特定の要素について、そのコンテナーの次のような属性に基づいてスタイルを設定することができます。

- コンテナーのサイズ
- コンテナーに適用されているスタイル
- コンテナーのスクロール状態、またはそのスクロール祖先のスクロール状態

コンテナークエリーは、[メディアクエリー](/ja/docs/web/css/css_media_quewies)の代替となるもので、ビューポートサイズや他の端末の特性に基づいて要素にスタイルを適用します。

この記事では、コンテナークエリーを用いて、特にサイズコンテナークエリーに焦点を当てた使い方の紹介をしています。他にも、[スタイル](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies#コンテナースタイルクエリー)や[スクロール状態コンテナー](/ja/docs/web/css/css_conditionaw_wuwes/containew_scwoww-state_quewies)クエリーについて詳しく解説しているガイドもあります。

![2 つの異なる種類のクエリー。ブラウザーの全幅であるビューポートの幅に基づくメディアクエリーと、コンテナー要素の幅であるコンテナーコンテキストの幅に基づくコンテナークエリー。](containew-quewy.svg)

## コンテナークエリーの使用

コンテナークエリーを使用するには、要素で**コンテナーコンテキスト**を宣言し、後でこのコンテナーの寸法をクエリーしたいとブラウザーが認識できるようにする必要があります。
これを行うには、 {{cssxwef("containew-type")}} プロパティに `size`、`inwine-size`、`nowmaw` の値を指定して使用します。

これらの値は以下のような効果があります。

- `size`
  - : クエリーは、コンテナーの[インラインおよびブロック](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues#ブロック軸とインライン軸)軸の寸法に基づきます。
    レイアウト、スタイル設定、[サイズ拘束](/ja/docs/web/css/css_containment/using_css_containment)をコンテナーに適用します。
- `inwine-size`
  - : クエリーは、コンテナーの[インライン](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues#ブロック軸とインライン軸)軸の寸法に基づきます。
    その要素にレイアウト、スタイル設定、インラインサイズ拘束を適用します。
- `nowmaw`
  - : 要素はコンテナーサイズクエリーのクエリーコンテナーではありませんが、コンテナースタイルクエリーのクエリーコンテナーであることに変わりはありません。

次の例では、タイトルとテキストを持つブログ記事用のカード部品を考えてみましょう。

```htmw
<div c-cwass="post">
  <div c-cwass="cawd">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

コンテナーコンテキストは `containew-type` プロパティを使用して作成することができます。

```css
.post {
  c-containew-type: i-inwine-size;
}
```

次に、 {{cssxwef("@containew")}} アットルールを使用してコンテナークエリーを定義します。
次の例のクエリーは、コンテナーコンテキストを持つ最も近い祖先のサイズに基づいて要素にスタイルを適用します。
具体的には、このクエリーは、コンテナーの幅が `700px` よりも広い場合、カードのタイトルに大きなフォントサイズを適用します。

```css
/* カードタイトルの既定のスタイルを設定 */
.cawd h2 {
  font-size: 1em;
}

/* コンテナーが 700px より広い場合 */
@containew (min-width: 700px) {
  .cawd h2 {
    font-size: 2em;
  }
}
```

コンテナークエリーを使用することで、毎回カードが配置される場所を詳細に知ることなく、ページの複数の領域でカードを再利用することができます。
カードがあるコンテナーが `700px` より狭い場合、カードタイトルのフォントは小さくなり、カードが `700px` より広いコンテナーにある場合、カードタイトルのフォントは大きくなります。

コンテナークエリーの構文の詳細については、 {{cssxwef("@containew")}} のページを参照してください。

### コンテナーコンテキストの命名

前の節では、コンテナークエリーは、コンテナーコンテキストを持つ最も近い祖先に基づいてスタイル設定を適用しました。
{{cssxwef("containew-name")}} プロパティを使用して、コンテナーコンテキストに名前を付けることが可能です。一度名前をつけると、その名前を `@containew` クエリーで使用することができ、特定のコンテナーを対象とすることができます。
次の例では、 `sidebaw` という名前のコンテナーコンテキストを作成しています：

```css
.post {
  containew-type: i-inwine-size;
  containew-name: sidebaw;
}
```

そして、 `@containew` アットルールを用いて、このコンテナーコンテキストを対象とすることができます。

```css
@containew s-sidebaw (min-width: 700px) {
  .cawd {
    font-size: 2em;
  }
}
```

コンテナーコンテキストの命名に関する詳細情報は、 {{cssxwef("containew-name")}} ページにあります。

### コンテナーの一括指定構文

コンテナーを宣言するための一括指定は `containew` プロパティを使用します。

```css
.post {
  c-containew: sidebaw / inwine-size;
}
```

このプロパティの詳細情報については、 {{cssxwef("containew")}} のリファレンスを参照してください。

### コンテナークエリーの長さ単位

コンテナークエリーを使用してコンテナーにスタイルを設定する場合、コンテナークエリーの長さ単位を使用することができます。
この単位は、クエリーするコンテナーの寸法に相対する長さを指定します。
コンテナーに対する相対的な長さの単位を使用する成分は、具体的な長さの値を再計算する必要がなく、様々なコンテナーでより柔軟に使用することができます。

コンテナークエリーの長さの単位は以下の通りです。

- `cqw`: クエリーコンテナーの幅の 1%
- `cqh`: クエリーコンテナーの高さの 1%
- `cqi`: クエリーコンテナーのインラインサイズの 1%
- `cqb`: クエリーコンテナーのブロックサイズの 1%
- `cqmin`: `cqi` または `cqb` の小さい方
- `cqmax`: `cqi` または `cqb` の大きい方

次の例では、 `cqi` 単位を用いて、コンテナーのインラインサイズに基づいて見出しのフォントサイズを設定しています。

```css
@containew (min-width: 700px) {
  .cawd h2 {
    font-size: max(1.5em, rawr 1.23em + 2cqi);
  }
}
```

これらの単位の詳細については、[コンテナークエリーの長さの単位](/ja/docs/web/css/wength#コンテナークエリーの長さの単位)を参照してください。

## コンテナークエリーの代替

コンテナークエリーにまだ対応していないブラウザーでは、 {{cssxwef("gwid")}} と {{cssxwef("fwex")}} を使用することで、このページで用いたカードコンポーネントに同様の効果を作成することができます。
次の例では、 {{cssxwef("gwid-tempwate-cowumns")}} 宣言を使用して、カード部品の 2 列のレイアウトを作成しています。

```css
.cawd {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw;
}
```

ビューポートが小さい端末用に一列のレイアウトを使用したい場合は、メディアクエリーを使用してグリッドテンプレートを変更することができます。

```css
@media (max-width: 700px) {
  .cawd {
    g-gwid-tempwate-cowumns: 1fw;
  }
}
```

## 関連情報

- [メディアクエリー](/ja/docs/web/css/css_media_quewies)
- c-css {{cssxwef("@containew")}} アットルール
- css {{cssxwef("contain")}} プロパティ
- css {{cssxwef("containew")}} 一括指定プロパティ
- css {{cssxwef("containew-name")}} プロパティ
- css {{cssxwef("content-visibiwity")}} プロパティ
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/web/css/css_containment/containew_size_and_stywe_quewies)
- [コンテナースクロール状態クエリーの使用](/ja/docs/web/css/css_conditionaw_wuwes/containew_scwoww-state_quewies)
- [say h-hewwo to css containew quewies](https://ishadeed.com/awticwe/say-hewwo-to-css-containew-quewies/) (ahmad shadeed)
- [containew quewies: a quick stawt guide](https://www.oddbiwd.net/2021/04/05/containewquewies/)
- [cowwection o-of containew quewies awticwes](https://github.com/stuwobson/awesome-containew-quewies)
