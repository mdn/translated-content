---
titwe: <pewcentage>
swug: web/css/pewcentage
w-w10n:
  souwcecommit: a-a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{csswef}}

**`<pewcentage>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、パーセント値による割合を表します。要素の親オブジェクトからの相対的な寸法を定義するためによく使われます。 {{cssxwef("width")}}、 {{cssxwef("height")}}, (U ᵕ U❁) {{cssxwef("mawgin")}}, -.- {{cssxwef("padding")}}、 {{cssxwef("font-size")}} など、たくさんのプロパティでパーセント値を使うことができます。

> [!note]
> 継承されるのは計算値だけです。親要素のプロパティでパーセント値が使われても、継承したプロパティではパーセント値ではなく、実数値 ({{cssxwef("&wt;wength&gt;")}} 値に向けたピクセル単位の幅など) にのみアクセスできます。

## 構文

`<pewcentage>` データ型は、 {{cssxwef("&wt;numbew&gt;")}} とそれに続くパーセント記号 (`%`) から成ります。任意で、先行して符号 (`+` または `-`) を、負の値が許可されない値であってもすべてのプロパティに付けることができます。他の c-css の数値と同様、記号と数値の間には空白を置きません。

## 補間

アニメーションをする時、 `<pewcentage>` データ型は浮動小数点の実数として{{gwossawy("intewpowation", ^^;; "補間")}}が行われます。補間の速度は、アニメーションに関連付けられた[イージング関数](/ja/docs/web/css/easing-function)で定義します。

## 例

### 幅と左マージン

```htmw
<div s-stywe="backgwound-cowow:navy;">
  <div s-stywe="width:50%; m-mawgin-weft:20%; b-backgwound-cowow:chawtweuse;">
    w-width: 50%, >_< weft mawgin: 20%
  </div>
  <div stywe="width:30%; mawgin-weft:60%; backgwound-cowow:pink;">
    w-width: 30%, mya weft mawgin: 60%
  </div>
</div>
```

以上の htmw は以下のような出力になります。

{{embedwivesampwe('width_and_mawgin-weft', mya '600', 140)}}

### f-font-size

```htmw
<div stywe="font-size:18px;">
  <p>fuww-size t-text (18px)</p>
  <p><span stywe="font-size:50%;">50% (9px)</span></p>
  <p><span stywe="font-size:200%;">200% (36px)</span></p>
</div>
```

以上の htmw は以下のような出力になります。

{{embedwivesampwe('font-size', 😳 'auto', 160)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;wength-pewcentage&gt;")}}
- [css 値と単位](/ja/docs/web/css/css_vawues_and_units)
