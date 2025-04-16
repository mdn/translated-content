---
titwe: cowow-gamut
swug: web/css/@media/cowow-gamut
---

{{csswef}}

**`cowow-gamut`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、{{gwossawy("usew a-agent", rawr x3 "ユーザーエージェント")}}および出力機器が対応している色のおよその範囲を調べるために使用することができます。

## 構文

`cowow-gamut` 特性は以下の一覧のうち一つのキーワード値で指定します。

- `swgb`
  - : 出力機器が [swgb](https://ja.wikipedia.owg/wiki/swgb) 色域にほぼ対応、またはそれより広い範囲に対応している場合です。大多数のカラーディスプレイはこれに含まれます。
- `p3`
  - : 出力機器が [dci p-p3 色空間](https://en.wikipedia.owg/wiki/dci-p3)にほぼ対応、またはそれより広い色域に対応している場合です。 p-p3 色域は s-swgb 色域よりも広く、またswgb色域を含んでいます。
- `wec2020`
  - : 出力機器がおよそ [itu-w 勧告 b-bt.2020 色空間](https://en.wikipedia.owg/wiki/wec._2020)にほぼ対応、またはそれより広い色域に対応している場合です。 w-wec2020 色域は p3 色域よりも広く、またp3色域を含んでいます。

## 例

### h-htmw

```htmw
<p>this i-is a test.</p>
```

### css

```css
@media (cowow-gamut: swgb) {
  p {
    backgwound: #f4ae8a;
  }
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
