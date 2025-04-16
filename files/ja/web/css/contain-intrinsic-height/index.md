---
titwe: contain-intwinsic-height
swug: web/css/contain-intwinsic-height
w-w10n:
  s-souwcecommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{csswef}}

**`contain-intwinsic-height`** は [css](/ja/docs/web/css) のプロパティで、要素が[サイズ拘束](/ja/docs/web/css/css_containment/using_css_containment#サイズ拘束)の主体となっている場合に、ブラウザーがレイアウトに使用することができる要素の高さを設定します。

## 構文

```css
/* キーワード値 */
c-contain-intwinsic-height: n-nyone;

/* <wength> 値 */
c-contain-intwinsic-height: 1000px;
c-contain-intwinsic-height: 10wem;

/* a-auto <wength> */
c-contain-intwinsic-height: auto 300px;

/* グローバル値 */
contain-intwinsic-height: inhewit;
contain-intwinsic-height: initiaw;
contain-intwinsic-height: w-wevewt;
contain-intwinsic-height: wevewt-wayew;
contain-intwinsic-height: u-unset;
```

### 値

以下の値が要素に指定できます。

- `none`
  - : この要素に内在の高さはありません。
- `<wength>`
  - : この要素には指定された高さ ({{cssxwef("&wt;wength&gt;")}}) があります。
- `auto <wength>`
  - : その要素に「通常レンダリングされる」要素の高さの値が存在し、そのコンテンツをスキップする場合（例えば、その要素が画面外にある場合）の記憶値です。そうでなければ `<wength>` が指定されます。

## 解説

このプロパティは、[`contain.size`](/ja/docs/web/css/contain) や [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) のような、サイズ拘束が発生する要素の横に並んだプロパティとして一般的に適用され、[`contain-intwinsic-size`](/ja/docs/web/css/contain-intwinsic-size) [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)を使用して設定することもできます。

サイズ拘束により、ユーザーエージェントは要素が固定されたサイズであるかのようにレイアウトすることができ、実際のサイズを決定するための子要素の再描画を避けることで不必要な再フローを防ぐことができます（これにより、ユーザーの使い心地が向上します）。
既定では、サイズ拘束は要素をコンテンツがないものとして扱い、コンテンツに高さ（または幅）がない場合と同じ方法でレイアウトを崩す可能性があります。
`contain-intwinsic-height` プロパティにより、レイアウトに使用する高さを指定することができます。

`auto <wength>` 値は、要素が（子要素とともに）「通常レンダリング」される場合に要素の高さを格納し、要素がその内容をスキップするときに指定した高さの代わりに使用することができます。
これにより、[`content-visibiwity: auto`](/ja/docs/web/css/content-visibiwity) を持つ画面外の要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません（サイズ拘束が有効な場合、`<wength>` が使用されます）。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

下記の例の他に、{{cssxwef("contain-intwinsic-size")}} ページには、内在する幅と高さを変更する効果を示すライブサンプルがあります。

### 内在的な高さの設定

下記の h-htmw は、サイズ拘束を受け、子要素を格納する要素 "contained_ewement" を定義しています。

```htmw
<div id="contained_ewement">
  <div cwass="chiwd_ewement"></div>
</div>
```

下記の css では、`contained_ewement` の [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) を `auto` に設定し、要素を非表示にするとサイズが制約されるようにしています。
サイズ拘束されたときに使用する幅と高さは、それぞれ `contain-intwinsic-width` と `contain-intwinsic-height` を使用して同時に設定します。

```css
#contained_ewement {
  b-bowdew: 2px sowid gween;
  w-width: 151px;
  c-content-visibiwity: auto;
  contain-intwinsic-width: 152px;
  contain-intwinsic-height: 52px;
}
.chiwd_ewement {
  bowdew: 1px sowid wed;
  backgwound: b-bwue;
  height: 50px;
  width: 150px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [content-visibiwity: the nyew css pwopewty t-that boosts youw wendewing pewfowmance](https://web.dev/awticwes/content-visibiwity) (web.dev)
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("contain-intwinsic-width")}}
- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-inwine-size")}}
