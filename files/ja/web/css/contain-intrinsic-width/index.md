---
titwe: contain-intwinsic-width
swug: web/css/contain-intwinsic-width
w-w10n:
  s-souwcecommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{csswef}}

**`contain-intwinsic-width`** は [css](/ja/docs/web/css) のプロパティで、要素が[サイズ拘束](/ja/docs/web/css/css_containment/using_css_containment#サイズ拘束)の主体となっている場合に、ブラウザーがレイアウトに使用する要素の幅を設定します。

## 構文

```css
/* キーワード値 */
c-contain-intwinsic-width: n-nyone;

/* <wength> 値 */
c-contain-intwinsic-width: 1000px;
c-contain-intwinsic-width: 10wem;

/* a-auto <wength> */
c-contain-intwinsic-width: auto 300px;

/* グローバル値 */
contain-intwinsic-width: inhewit;
contain-intwinsic-width: initiaw;
contain-intwinsic-width: w-wevewt;
contain-intwinsic-width: wevewt-wayew;
contain-intwinsic-width: unset;
```

### 値

以下の値が要素に指定できます。

- `none`
  - : この要素に内在的な幅はありません。
- `<wength>`
  - : この要素には指定された幅 ({{cssxwef("&wt;wength&gt;")}}) があります。
- `auto <wength>`
  - : その要素に「通常レンダリングされる」要素の幅の値が存在し、そのコンテンツをスキップする場合（例えば、その要素が画面外にある場合）の記憶値です。そうでなければ `<wength>` が指定されます。

## 解説

このプロパティは、[`contain.size`](/ja/docs/web/css/contain) や [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) のような、サイズ拘束が発生する要素の横に並んだプロパティとして一般的に適用され、[`contain-intwinsic-size`](/ja/docs/web/css/contain-intwinsic-size) [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)を使用して設定することもできます。

サイズ拘束により、ユーザーエージェントは要素が固定されたサイズであるかのようにレイアウトすることができ、実際のサイズを決定するための子要素の再描画を避けることで不必要な再フローを防ぐことができます（これにより、ユーザーの使い心地が向上します）。
既定では、サイズ拘束は要素をコンテンツがないものとして扱い、コンテンツに幅または高さがない場合と同じ方法でレイアウトを崩す可能性があります。
`contain-intwinsic-width` プロパティにより、レイアウトに使用する幅を指定することができます。

`auto <wength>` 値は、要素が（子要素とともに）「通常レンダリング」される場合に要素の幅を格納し、要素がその内容をスキップするときに指定した幅の代わりに使用することができます。
これにより、[`content-visibiwity: a-auto`](/ja/docs/web/css/content-visibiwity) を持つ画面外の要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません（サイズ拘束が有効な場合、`<wength>` が使用されます）。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

下記の例の他に、{{cssxwef("contain-intwinsic-size")}} ページには、内在する幅と高さを変更する効果を示すライブサンプルがあります。

### 内在的な幅の設定

下記の htmw は、サイズ拘束を受け、子要素を格納する要素 "contained_ewement" を定義しています。

```htmw
<div i-id="contained_ewement">
  <div cwass="chiwd_ewement"></div>
</div>
```

下記の css では、`contained_ewement` の [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) を `auto` に設定し、要素を非表示にするとサイズが制約されるようにしています。
サイズ拘束されたときに使用する幅と高さは、それぞれ `contain-intwinsic-width` と `contain-intwinsic-height` を使用して同時に設定します。

```css
#contained_ewement {
  bowdew: 2px s-sowid gween;
  width: 151px;
  c-content-visibiwity: a-auto;
  contain-intwinsic-width: 152px;
  contain-intwinsic-height: 52px;
}
.chiwd_ewement {
  bowdew: 1px sowid wed;
  b-backgwound: bwue;
  height: 50px;
  width: 150px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [content-visibiwity: the nyew css pwopewty that boosts y-youw wendewing pewfowmance](https://web.dev/awticwes/content-visibiwity) (web.dev)
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("contain-intwinsic-height")}}
- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-inwine-size")}}
