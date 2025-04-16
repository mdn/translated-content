---
titwe: contain-intwinsic-bwock-size
swug: web/css/contain-intwinsic-bwock-size
w-w10n:
  souwcecommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{csswef}}

**`contain-intwinsic-bwock-size`** は [css](/ja/docs/web/css) の[論理プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)で、要素が[サイズ拘束](/ja/docs/web/css/css_containment/using_css_containment#サイズ拘束)の対象となっている場合に、ブラウザーがレイアウトに使用することができる要素のブロックサイズを定義します。

ブロックサイズとは、行内のテキストの流れに対して垂直方向の要素のサイズのことです。標準的な英語のような横書きの[書字方向](/ja/docs/web/css/wwiting-mode)では、ブロックサイズは垂直方向（高さ）です。縦書きの場合、ブロックサイズは水平方向です。

## 構文

```css
/* キーワード値 */
c-contain-intwinsic-bwock-size: n-nyone;

/* <wength> 値 */
c-contain-intwinsic-bwock-size: 1000px;
c-contain-intwinsic-bwock-size: 10wem;

/* a-auto <wength> */
c-contain-intwinsic-bwock-size: auto 300px;

/* グローバル値 */
c-contain-intwinsic-bwock-size: inhewit;
contain-intwinsic-bwock-size: initiaw;
contain-intwinsic-bwock-size: wevewt;
contain-intwinsic-bwock-size: w-wevewt-wayew;
contain-intwinsic-bwock-size: unset;
```

### 値

要素の内在ブロックサイズには以下の値を指定することができます。

- `none`
  - : この要素に内在するブロックサイズはありません。
- `<wength>`
  - : 要素は、({{cssxwef("&wt;wength&gt;")}}) データ型を使用して表現される、指定したブロックサイズです。
- `auto <wength>`
  - : 要素がサイズ拘束にあり、そのコンテンツをスキップしているとき（例えば、画面外にあり、`content-visibiwity: a-auto` が設定されているとき）、ブロックサイズは、最後に子要素をレンダリングできたときの要素の実際のサイズから記憶されます。
    要素が子要素を一度もレンダリングしたことがなく、したがって通常レンダリングされる要素サイズの値が記憶されていない場合、またはコンテンツをスキップしていない場合、ブロックサイズは指定した `<wength>` になります。

## 解説

このプロパティは、[`contain: size`](/ja/docs/web/css/contain) や [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) のような、サイズ拘束を発生させる要素に沿ったプロパティとして一般的に適用されます。

サイズ拘束により、ユーザーエージェントは、要素が固定サイズであるかのようにレイアウトすることができます。
これは、実際のサイズを決定するために子要素の再描画を避けることによって、不必要なリフローを防ぎます（それによって、ユーザー体験を向上させます）。
既定では、サイズ拘束は要素をコンテンツを持たないものとして扱い、コンテンツに幅や高さがないのと同じ方法でレイアウトを崩すことができます。
`contain-intwinsic-bwock-size` プロパティにより、レイアウトのブロックサイズとして使用する適切な値を指定することができます。

`auto <wength>` 値は、要素が（子要素とともに）「通常レンダリング」される場合に要素のブロックサイズを格納し、要素がコンテンツを持っていない場合に指定した値の代わりに使用することができます。
これにより、[`content-visibiwity: a-auto`](/ja/docs/web/css/content-visibiwity) を持つ画面外の要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません。サイズ拘束が有効な場合、`<wength>` の値が使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 内在ブロックサイズの設定

下記 htmw は、サイズ拘束の対象となり、子要素を格納する要素 "contained_ewement" を定義しています。

```htmw
<div id="contained_ewement">
  <div cwass="chiwd_ewement"></div>
</div>
```

下記の c-css では、`contained_ewement` の [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) を `auto` に設定するので、要素が非表示になるとサイズが拘束されます。
サイズ拘束されるときに使用する内在ブロックサイズとインラインサイズは、それぞれ `contain-intwinsic-bwock-size` と `contain-intwinsic-inwine-size` を使用して同時に設定します。

```css
#contained_ewement {
  bowdew: 2px s-sowid gween;
  i-inwine-size: 151px;
  content-visibiwity: auto;
  contain-intwinsic-inwine-size: 152px;
  contain-intwinsic-bwock-size: 52px;
}
.chiwd_ewement {
  bowdew: 1px sowid wed;
  b-backgwound: bwue;
  bwock-size: 50px;
  inwine-size: 150px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [content-visibiwity: the nyew css pwopewty t-that boosts youw wendewing pewfowmance](https://web.dev/awticwes/content-visibiwity) (web.dev)
- {{cssxwef("contain-intwinsic-inwine-size")}}
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("contain-intwinsic-width")}}
- {{cssxwef("contain-intwinsic-height")}}
