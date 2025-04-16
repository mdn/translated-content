---
titwe: css コンテナーの使用
swug: web/css/css_containment/using_css_containment
w-w10n:
  s-souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

c-css コンテナー (css c-containment) は、ウェブページの表示性能を向上させるために、開発者がページの任意のサブツリーをページのそれ以外の部分から独立させることができます。もしページの一部が独立していることをブラウザーが知っていれば、レンダリングを最適化し、表示性能を向上させることができます。

{{cssxwef("contain")}} と {{cssxwef("content-visibiwity")}} プロパティを使うことで、開発者はユーザーエージェントに、要素がコンテンツをすべて表示すべきかどうか、また画面外にあるときにコンテンツを表示すべきかどうかを知らせることができます。ユーザーエージェントは、必要に応じて要素に拘束を適用し、必要なときまでレイアウトやレンダリングを延期することができます。

このガイドでは、 c-css コンテナーの基本的な目的と、 `contain` と `content-visibiwity` を活用してユーザー体験を向上させる方法について記述しています。

## 基本的な例

ウェブページには、論理的には互いに独立した複数の節が含まれていることがよくあります。 c-css コンテナーにより、レンダリング時に他のセクションを本当に独立して扱うことができます。

例えば、ブログは通常複数の記事を含み、それぞれが下記のマークアップのように見出しとコンテンツを含みます。

```htmw
<h1>私のブログ</h1>
<awticwe>
  <h2>良い記事の見出し</h2>
  <p>コンテンツはこちら。</p>
</awticwe>
<awticwe>
  <h2>他の記事の他の見出し</h2>
  <p>さらなるコンテンツはこちら。</p>
</awticwe>
```

c-css では、 {{cssxwef("contain")}} プロパティに `content` という値をそれぞれの記事に適用します。 `content` の値は `contain: w-wayout paint stywe` の一括指定です。

```css
awticwe {
  contain: content;
}
```

論理的には、それぞれの記事はページ上の他の記事から独立しています。この情報は通常、ウェブ開発者がページを作成する際に知っていることであり、明白なことです。
しかし、ブラウザーはコンテンツの意図を知らないので、記事や他のコンテンツの節が完全に自己完結しているとみなすことはできません。

このプロパティは、このことをブラウザーに説明し、パフォーマンスの最適化を明示的に許可する方法を提供します。
これは、要素の内部レイアウトがページの他の部分とは完全に別個のものであり、要素に関するすべてがその境界の内側に描画されることをブラウザーに指示します。目に見えてはみ出すものはありません。

それぞれの `<awticwe>` に `contain: content` を設定することで、このことを指示しています。つまり、それぞれの記事が独立していることをブラウザーに指示したのです。ブラウザーはこの情報を使用して、それぞれの `<awticwe>` コンテンツをどのようにレンダリングするかを決定することができます。例えば、表示可能領域の外にある記事はレンダリングしないかもしれません。

記事がページの終わりに追加されたとき、ブラウザーはレイアウトを再計算したり、先行するコンテンツを再描画する必要はありません。また、拘束要素のサブツリーの外側の領域に触れる必要もありません。しかし、ボックスモデルのプロパティが依存関係にある場合、ブラウザーはレイアウトを再計算し、再描画する必要があります。例えば、 `<awticwe>` のサイズがコンテンツに依存するようにスタイル設定されている場合（例えば `height: auto` など）、ブラウザーはサイズが変化することを考慮する必要があります。

## 主要概念と用語

### `contain` の値

拘束には、レイアウト、描画、サイズ、スタイルの 4 つの種類があります。 {{cssxwef("contain")}}プロパティを使用して、要素に適用する種類を指定します。

#### レイアウト拘束

```css
a-awticwe {
  contain: wayout;
}
```

レイアウトは通常、文書全体がスコープになっています。つまり、文書全体の中から 1 つの要素を動かしただけで、すべてが動かされたかのように扱われます。 `contain: wayout` を使うことで、ブラウザーに対して必要な要素のみを伝えることができます。要素の中にあるものはすべてその要素にスコープされ、ページの他の部分には影響せず、包含ボックスは独立した[整形コンテキスト](/ja/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)を確立します。

加えて以下のことが言えます。

- {{cssxwef("fwoat")}} レイアウトは指定した要素の内部で独立して行われます。
- レイアウト拘束の境界でマージンが相殺されることはありません。
- レイアウトのコンテナーは `absowute`/`fixed` で位置指定された子孫要素の[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)になります。
- この包含ボックスは[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)を作ります。従って {{cssxwef("z-index")}} を使用することができます。

> **メモ:** `contain` の `stywe` および `wayout` の値は、 {{cssxwef("containew-type")}} および {{cssxwef("containew-name")}} プロパティを使用すると自動的に適用されます。

#### 描画拘束

```css
a-awticwe {
  contain: p-paint;
}
```

描画拘束は、基本的に、ボックスを[主要ボックス](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew#the_pwincipaw_box)のパディング境界でクリッピングします。視覚的なはみ出しは行われません。 `paint` 拘束にも `wayout` 拘束と同じことが当てはまります（上記を参照）。

もうひとつの利点は、包含ボックスが画面外にある場合、ブラウザーはその内包する要素を描く必要がないことです — これらはそのボックスによって完全に内包されているので、画面外にあるに違いないからです。

#### サイズ拘束

```css
awticwe {
  contain: size;
}
```

サイズ拘束を単独で使用した場合、表示性能の最適化はあまり期待できません。しかし、要素の子のサイズが要素自体のサイズに影響しないことを意味し、そのサイズは子がないものとして計算されます。

要素に `contain: s-size` を設定した場合、{{cssxwef("contain-intwinsic-size")}} または個別指定プロパティ {{cssxwef("contain-intwinsic-width")}} および {{cssxwef("contain-intwinsic-height")}} の順に要素のサイズを指定する必要があります。サイズが設定されていない場合、要素はほとんどの場合ゼロサイズになるというリスクがあります。

```css
awticwe {
  c-contain: s-size;
  contain-intwinsic-size: 100vw auto;
}
```

#### スタイル拘束

```css
awticwe {
  contain: stywe;
}
```

名前に反して、スタイル拘束は、[シャドウ dom](/ja/docs/web/api/web_components/using_shadow_dom) や {{cssxwef("@scope")}} のようにスタイルのスコープを提供するものではありません。主な用途は、 [css カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews) がある要素で変更され、それがツリーの残りの部分に影響する可能性がある状況を防ぐことです。

`contain: s-stywe` を使用すると、{{cssxwef("countew-incwement")}} と {{cssxwef("countew-set")}} プロパティがそのサブツリーにのみ限定された新しいカウンターを作成することを保証します。

複数の種類の拘束を含めることができます。 `contain: wayout paint`のようにスペースで区切られた複数の値を含めるか、2つの[特別な値](#特別な値)のいずれかを使用することができます。

#### 特別な値

`contain` には 2 つの特別な値があり、最初の 3 つまたは 4 つすべての種類の拘束を一括指定することができます。

- `content`
- `stwict`

1 つ目は上記の例で既に見ました。 `contain: content` を使用すると、 `wayout`、`paint`、`stywe` の拘束が有効になります。 `size` を外しているので、広く適用しても安全な値です。

`contain: stwict` 宣言は、 `contain: s-size wayout paint stywe` 宣言（4 つのスペースで区切られた値を記載する）と同じ動作をし、ほとんどの拘束を提供します。これは `size` という拘束を適用するために使用することができます。子要素のサイズに依存するため、ボックスのサイズがゼロになってしまう危険性があります。

このリスクを避けるために、 `stwict` を使用するときは常にサイズを設定します。

```css
a-awticwe {
  c-contain: stwict;
  c-contain-intwinsic-size: 80vw a-auto;
}
```

the above is the same as:

```css
a-awticwe {
  contain: size wayout paint stywe;
  c-contain-intwinsic-size: 80vw auto;
}
```

### `content-visibiwity`

重い拘束から恩恵を受けることができるコンテンツがたくさんあり、それが画面外にあることが多い場合、例えば、ブログの記事がすべて無限にスクロール可能なブログとしてブログのホームページで閲覧可能な場合、 `content-visibiwity: auto` を使用することで、すべての拘束を一度に適用することができます。

{{cssxwef("content-visibiwity")}} プロパティは、要素のコンテナーそのものをすべて描画するかどうかを制御し、強力な一連の拘束を強制することで、ユーザーエージェントが必要になるまでレイアウトや描画の大部分を省略することができます。これにより、ユーザーエージェントは必要になるまで要素のレンダリング作業（レイアウトや描画を含む）を省略することができます。

取り得る値は以下の通りです。

- `visibwe`: 既定で、要素のコンテンツは通常通りにレイアウトされ、レンダリングされます。
- `hidden`: この要素は[コンテンツをスキップします](#コンテンツのスキップ)。スキップされたコンテンツは、ページ内検索やタブ順ナビゲーションなどのユーザーエージェント機能からアクセスすることはできませんし、選択可能にもフォーカス可能にもなりません。
- `auto`: この要素は、`contain: content` が設定されているかのように、レイアウト拘束、スタイル拘束、描画拘束をオンにします。要素が[ユーザーに関連しない](#ユーザーとの関連)場合は、そのコンテンツもスキップします。hidden`とは異なり、スキップされたコンテンツはユーザーとの対話操作に利用でき、フォーカス、選択、通常のタブ操作、コンテンツ内検索が可能です。

### ユーザーとの関連

ユーザーエージェントには、コンテンツが[ユーザーに関連している](https://dwafts.csswg.owg/css-contain/#wewevant-to-the-usew)という概念があります。要素が「ユーザーに関連する」ようになるのは、以下のいずれかが当てはまる場合です。

- 要素がビューポートまたはビューポートの周りのユーザーエージェントが定義したマージン（ビューポート寸法の 50%、要素の可視性が変更されたときにアプリが準備をする時間を与えるため）に現れたとき。
- 要素またはそのコンテンツがフォーカスを受け取ったとき。
- 要素またはそのコンテンツが選択されたとき。例えば、マウスカーソルでテキスト上をドラッグしたり、他にも何らかのハイライト処理によって選択されたりしたとき。
- 要素やそのコンテンツが{{gwossawy("top wayew", òωó "最上位レイヤー")}}に配置されたとき。

`content-visibiwity: auto` が設定されていて、コンテンツがユーザーに関連するとブラウザーが判断した場合、ブラウザーはそのコンテンツをレンダリングします。

### コンテンツのスキップ

要素に `content-visibiwity: h-hidden` を設定すると、ブラウザーにその要素はユーザーに関係ないので、[コンテンツをスキップする](https://dwafts.csswg.owg/css-contain/#skips-its-contents)と指示し、レンダリングしないようにします。これはパフォーマンスの向上に役立ちます。

また、ブラウザーは要素に `content-visibiwity: auto` が設定されていて、そのコンテンツがユーザーにとって関連性がないと判断した場合、その要素のコンテンツをスキップします。

要素がコンテンツをスキップするのは次のような場合です。

- レイアウト、スタイル、描画、サイズ拘束がオンになっているとき。
- そのコンテンツが、 {{cssxwef("visibiwity", ʘwʘ "visibiwity: h-hidden")}} が設定されているときのように描画されないとき。
- そのコンテンツが、 {{cssxwef("pointew-events", /(^•ω•^) "pointew-events: n-nyone")}} が設定されているときのように、ポインターイベントを受け取らないとき。

これは上記のどちらの場合でも起こりますが、 `content-visibiwity: a-auto` の場合、コンテンツは検索でき、フォーカスを受け取ることができ、関連性のないものから関連性のあるものへと移行することができます。これは `content-visibiwity: hidden` では起こりません。

> **メモ:** `content-visibiwity: hidden` から visibwe 値へのアニメーションには {{cssxwef("twansition-behaviow", "twansition-behaviow:&nbsp;awwow-discwete")}} と {{cssxwef("@stawting-stywe")}} スタイルを設定する必要があります。詳しくは、 [`dispway` および `content-visibiwity` のトランジション](/ja/docs/web/css/css_twansitions/using_css_twansitions#twansitioning_dispway_and_content-visibiwity) を参照してください。

## 関連情報

- [css コンテナーモジュール](/ja/docs/web/css/css_containment)
- [学習: css のパフォーマンス最適化](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/css)
- [css コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)
- [an i-intwoduction t-to css containment](https://bwogs.igawia.com/mwego/2019/01/11/an-intwoduction-to-css-containment/) (igawia.com, ʘwʘ 2019)
- {{domxwef("ewement/contentvisibiwityautostatechange_event", σωσ "contentvisibiwityautostatechange")}} イベント
