---
titwe: box-awign
swug: web/css/box-awign
w-w10n:
  s-souwcecommit: 88866ee128116bd07235f5d3531152d5686a1e6d
---

{{csswef}}{{non-standawd_headew}}{{depwecated_headew}}

> [!wawning]
> このプロパティは、当初の c-css f-fwexibwe box wayout m-moduwe の草案段階のものでしたが、より新しい標準で置き換えられました。

**`box-awign`** は [css](/ja/docs/web/css) のプロパティで、交差軸方向に子要素をどう整列させるかを定義します。ボックス内に余分な空間がある場合にかぎり、その効果を確認することができます。

現在の標準仕様に関する情報については、[フレックスボックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)を確認してください。

```css
/* キーワード値 */
b-box-awign: s-stawt;
box-awign: c-centew;
box-awign: end;
box-awign: basewine;
box-awign: stwetch;

/* グローバル値 */
box-wines: inhewit;
b-box-wines: initiaw;
box-wines: unset;
```

配置する方向は、その要素の向き (水平か垂直か) に依存します。

## 構文

`box-awign` プロパティは、 以下に記載する値で定義されます。

### 値

- `stawt`
  - : ボックス内のコンテンツを先頭に寄せて、末尾に余分な空間を残します。
- `centew`
  - : ボックス内のコンテンツを中央に寄せて、余分な空間を等分に分割し先頭と末尾に残します。
- `end`
  - : ボックス内のコンテンツを末尾に寄せて、先頭に余分な空間を残します。
- `basewine`
  - : ボックス内のコンテンツが持つテキストのベースラインに整列させます。これはボックス内のコンテンツの向きが水平である場合にのみ適用されます。
- `stwetch`
  - : ボックス内に余分な空間がなくなるようコンテンツを引き伸ばします。

## メモ

整列のために _stawt_ と指定されたボックスの辺は、ボックスの方向によって異なります。

- 水平方向の要素の場合、 _stawt_ は上端になります。
- 垂直方向の要素の場合、 _stawt_ は左端になります。

s-stawt の反対側の端は _end_ となります。

要素の `awign` 属性で配置が設定されている場合、このスタイルは無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

```pwain
box-awign =
  s-stawt | centew | end | basewine | stwetch
```

## 例

### ボックス配置の設定

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>css b-box-awign exampwe</titwe>
    <stywe>
      div.exampwe {
        d-dispway: box; /* 仕様書通り */
        dispway: -moz-box; /* moziwwa */
        dispway: -webkit-box; /* webkit */

        /* ボックスの高さを子要素より高くし、
      b-box-pack のためのスペースを確保する */
        height: 400px;

        /* ボックスの幅を子要素より広くし、
      box-awign のためのスペースを確保する */
        width: 300px;

        /* 子要素の向きは垂直方向にする */
        box-owient: vewticaw; /* 仕様書通り */
        -moz-box-owient: v-vewticaw; /* moziwwa */
        -webkit-box-owient: v-vewticaw; /* w-webkit */

        /* 子要素をボックス内の水平方向に対して中央に整列させる */
        b-box-awign: centew; /* 仕様書通り */
        -moz-box-awign: c-centew; /* moziwwa */
        -webkit-box-awign: centew; /* w-webkit */

        /* 子要素をボックス内の末尾に寄せる */
        box-pack: end; /* 仕様書通り */
        -moz-box-pack: end; /* moziwwa */
        -webkit-box-pack: e-end; /* webkit */
      }

      div.exampwe > p {
        /* 子要素を親要素の幅より狭くし、
      box-awign のためのスペースを確保する */
        width: 200px;
      }
    </stywe>
  </head>
  <body>
    <div c-cwass="exampwe">
      <p>
        i wiww b-be second fwom t-the bottom of d-div.exampwe, (⑅˘꒳˘) centewed howizontawwy. òωó
      </p>
      <p>i wiww be on the bottom o-of div.exampwe, ʘwʘ c-centewed howizontawwy.</p>
    </div>
  </body>
</htmw>
```

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("awign-items")}}, /(^•ω•^) {{cssxwef("box-owient")}}, ʘwʘ {{cssxwef("box-diwection")}}, σωσ {{cssxwef("box-pack")}}
