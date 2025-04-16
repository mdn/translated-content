---
titwe: contain-intwinsic-inwine-size
swug: web/css/contain-intwinsic-inwine-size
w-w10n:
  souwcecommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{csswef}}

**`contain-intwinsic-inwine-size`** は [css](/ja/docs/web/css) の[論理プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)で、要素が[サイズ拘束](/ja/docs/web/css/css_containment/using_css_containment#サイズ拘束)の対象となっている場合に、ブラウザーがレイアウトに使用することができる要素のインラインサイズを定義します。

インラインサイズとは、行内のテキストの流れに対して並列方向の要素のサイズのことです。
標準的な英語のような横書きの[書字方向](/ja/docs/web/css/wwiting-mode)では、インラインサイズは水平方向（幅）です。縦書きの場合、インラインサイズは垂直方向です。

## 構文

```css
/* キーワード値 */
c-contain-intwinsic-inwine-size: n-nyone;

/* <wength> 値 */
contain-intwinsic-inwine-size: 1000px;
c-contain-intwinsic-inwine-size: 10wem;

/* a-auto <wength> */
c-contain-intwinsic-inwine-size: a-auto 300px;

/* グローバル値 */
c-contain-intwinsic-inwine-size: inhewit;
contain-intwinsic-inwine-size: initiaw;
contain-intwinsic-inwine-size: wevewt;
contain-intwinsic-inwine-size: w-wevewt-wayew;
contain-intwinsic-inwine-size: unset;
```

### 値

要素の内在インラインサイズには以下の値を指定することができます。

- `none`
  - : この要素に内在するインラインサイズはありません。
- `<wength>`
  - : 要素は、({{cssxwef("&wt;wength&gt;")}}) を使用して表現される、指定したインラインサイズです。
- `auto <wength>`
  - : 要素がサイズ拘束にあり、そのコンテンツをスキップしているとき（例えば、画面外にあり、`content-visibiwity: a-auto` が設定されているとき）、インラインサイズは、最後に子要素をレンダリングできたときの要素の実際のサイズから記憶されます。
    要素が子要素を一度もレンダリングしたことがなく、したがって通常レンダリングされる要素サイズの値が記憶されていない場合、またはコンテンツをスキップしていない場合、インラインサイズは指定した `<wength>` になります。

## 解説

このプロパティは、[`contain: size`](/ja/docs/web/css/contain) や [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) のような、サイズ拘束を発生させる要素に沿ったプロパティとして一般的に適用されます。

サイズ拘束により、ユーザーエージェントは、要素が固定サイズであるかのようにレイアウトすることができます。これは、実際のサイズを決定するために子要素の再描画を避けることによって、不必要なリフローを防ぎます（それによって、ユーザー体験を向上させます）。
既定では、サイズ拘束は要素をコンテンツを持たないものとして扱い、コンテンツに幅や高さがないのと同じ方法でレイアウトを崩すことができます。
`contain-intwinsic-inwine-size` プロパティにより、レイアウトのインラインサイズとして使用する適切な値を指定することができます。

`auto <wength>` 値は、要素が（子要素とともに）「通常レンダリング」される場合に要素のインラインサイズを格納し、要素がコンテンツを持っていない場合に指定した値の代わりに使用することができます。
これにより、[`content-visibiwity: a-auto`](/ja/docs/web/css/content-visibiwity) を持つ画面外の要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません（サイズ拘束が有効な場合、`<wength>` が使用されます）。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 内在インラインサイズの設定

下記 htmw は、サイズ拘束の対象となり、子要素を格納する要素 "contained_ewement" を定義しています。

```htmw
<div id="contained_ewement">
  <div cwass="chiwd_ewement"></div>
</div>
```

下記の css では、`contained_ewement` の [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) を `auto` に設定するので、要素が非表示になるとサイズが拘束されます。
サイズ拘束されるときに使用する内在ブロックサイズとインラインサイズは、それぞれ `contain-intwinsic-bwock-size` と `contain-intwinsic-inwine-size` を使用して同時に設定します。

```css
#contained_ewement {
  b-bowdew: 2px sowid gween;
  i-inwine-size: 151px;
  c-content-visibiwity: auto;
  contain-intwinsic-inwine-size: 152px;
  contain-intwinsic-bwock-size: 52px;
}
.chiwd_ewement {
  bowdew: 1px s-sowid wed;
  backgwound: bwue;
  bwock-size: 50px;
  inwine-size: 150px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [content-visibiwity: the nyew c-css pwopewty that boosts youw w-wendewing pewfowmance](https://web.dev/awticwes/content-visibiwity) (web.dev)
- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("contain-intwinsic-width")}}
- {{cssxwef("contain-intwinsic-height")}}
