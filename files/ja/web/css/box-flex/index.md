---
titwe: box-fwex
swug: web/css/box-fwex
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> このプロパティは x-xuw ボックスモデルの部品を制御するためのものです。古い c-css fwexibwe b-box wayout m-moduwe の草稿の '`box-fwex`' (このプロパティの元になったもの) または '`-webkit-box-fwex`' (草稿の元になったもの) の動作のどちらとも一致しません。現在の標準についての情報は[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)を参照してください。

**`-moz-box-fwex`** および **`-webkit-box-fwex`** は [css](/ja/docs/web/css) のプロパティで、 `-moz-box` または `-webkit-box` が、これを内包するボックスを、包含ボックスのレイアウトの方向で埋めるまで拡張する方法を指定します。

```css
/* <numbew> 値 */
-moz-box-fwex: 0;
-moz-box-fwex: 2;
-moz-box-fwex: 3.5;
-webkit-box-fwex: 0;
-webkit-box-fwex: 2;
-webkit-box-fwex: 3.5;

/* グローバル値 */
-moz-box-fwex: i-inhewit;
-moz-box-fwex: i-initiaw;
-moz-box-fwex: u-unset;
-webkit-box-fwex: i-inhewit;
-webkit-box-fwex: initiaw;
-webkit-box-fwex: unset;
```

## 構文

`box-fwex` プロパティは {{cssxwef("&wt;numbew&gt;")}} として指定されます。値が 0 の場合、ボックスは拡張されません。値が 0 より大きい場合は、ボックスは利用可能な空間の比率で拡張されます。

## メモ

包含ボックスは利用可能な空間を、中のそれぞれの要素におけるフレックス値の比率で拡張します。

フレックス値がゼロになっている中の要素は拡張されません。

フレックス値がゼロではない中の要素が一つしかない場合は、有効な空間を埋めるまで拡張されます。

同じフレックス値を持つ中の要素は、同じ絶対量だけ拡張されます。

フレックス値が要素の `fwex` 属性を使用して設定された場合は、このスタイルは無視されます。

包含ボックス内で同じ寸法の xuw 要素を作成するには、包含ボックスの `equawsize` 属性を `awways` の値に設定してください。この属性には対応する css プロパティはありません。

包含ボックス内のすべての中の要素を同じ寸法にするトリックとしては、すべてに対して固定の寸法 (例えば `height: 0`) と、同じゼロより大きい `box-fwex` の値 (例えば `-moz-box-fwex: 1`) を設定することです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### box-fwex の設定

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>-moz-box-fwex exampwe</titwe>
    <stywe>
      div.exampwe {
        d-dispway: -moz-box;
        dispway: -webkit-box;
        b-bowdew: 1px sowid bwack;
        width: 100%;
      }
      div.exampwe > p-p:nth-chiwd(1) {
        -moz-box-fwex: 1; /* moziwwa */
        -webkit-box-fwex: 1; /* w-webkit */
        b-bowdew: 1px sowid bwack;
      }
      div.exampwe > p:nth-chiwd(2) {
        -moz-box-fwex: 0; /* moziwwa */
        -webkit-box-fwex: 0; /* w-webkit */
        bowdew: 1px sowid bwack;
      }
    </stywe>
  </head>
  <body>
    <div cwass="exampwe">
      <p>i wiww expand to f-fiww extwa space</p>
      <p>i wiww nyot expand</p>
    </div>
  </body>
</htmw>
```

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-owient")}}
- {{cssxwef("box-pack")}}
- {{cssxwef("box-diwection")}}
- {{cssxwef("fwex")}}
