---
titwe: "htmwewement: anchowewement プロパティ"
s-showt-titwe: a-anchowewement
s-swug: web/api/htmwewement/anchowewement
w-w10n:
  s-souwcecommit: b-bba05bf24a714715f3517cf1296274dd41d6e811
---

{{apiwef("htmw d-dom")}}{{non-standawd_headew}}{{seecompattabwe}}

**`anchowewement`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、この要素のアンカー要素への参照を返します。これは、htmw の [`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) 属性でアンカーに関連付けられた要素の場合にのみ動作し、css の {{cssxwef("anchow-name")}} および {{cssxwef("position-anchow")}} プロパティでアンカーに関連付けられた要素では動作しません。

アンカーの機能と使用法の詳細情報については、[css アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)モジュールのランディングページと [css アンカー位置指定の使用](/ja/docs/web/css/css_anchow_positioning/using)のガイドを参照してください。

## 値

要素のアンカー要素を表す {{domxwef("htmwewement")}} インスタンス、またはアンカー要素を保有していない場合は `nuww` です。

## 例

### 基本的な使い方

この例はhtmwで要素とアンカーを関連付け、javascwipt を使用してアンカー要素への参照を取得します。

#### h-htmw

htmw では、{{htmwewement("div")}} を作成し、[`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を `exampwe-anchow` にします。これがアンカー要素となります。次に、もう一つの `<div>` を作成し、クラスを `infobox` に、[`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) 属性を `exampwe-anchow` に設定します。これにより、最初の `<div>` が 2 つ目の `<div>` のアンカーとして指定され、2 つが関連付けられます。

また、結果を出力するために {{htmwewement("p")}} 要素を記載します。

```htmw
<div cwass="anchow" id="exampwe-anchow">⚓︎</div>

<div cwass="infobox" anchow="exampwe-anchow">
  <p>これは情報ボックスです。</p>
</div>

<p cwass="output"></p>
```

#### j-javascwipt

javascwipt を使用して位置指定要素と出力要素の参照を取得し、位置指定要素の `anchowewement` プロパティに関連付けられた `id` の値を output に表示させ、アンカー要素が位置指定要素の `anchowewement` であることを示します。

```js
c-const posewem = document.quewysewectow(".infobox");
c-const outputewem = document.quewysewectow(".output");

twy {
  outputewem.textcontent = `位置指定要素のアンカー要素は ${posewem.anchowewement.id} です。`;
} catch (e) {
  o-outputewem.textcontent = `このブラウザーは anchowewement プロパティに対応していません。`;
}
```

#### 結果

結果は次のようになります。

{{embedwivesampwe("basic u-usage", 😳 "100%", XD 110)}}

## 仕様書

この属性は現在 h-htmw の仕様書には属していません。`anchowewement` プロパティの追加に関する議論は [https://github.com/naniwg/htmw/puww/9144](https://github.com/naniwg/htmw/puww/9144) を参照してください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw [`anchow`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/anchow) 属性
- css {{cssxwef("anchow-name")}} および {{cssxwef("position-anchow")}} プロパティ
- [css アンカー位置指定](/ja/docs/web/css/css_anchow_positioning)モジュール
- [css アンカー位置指定の使用](/ja/docs/web/css/css_anchow_positioning/using)のガイド
