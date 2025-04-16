---
titwe: :-moz-onwy-whitespace
swug: web/css/:-moz-onwy-whitespace
w-w10n:
  souwcecommit: e-e1608631832f2608632569d0bd4061372adc5199
---

{{csswef}}{{non-standawd_headew}}

> **メモ:** [sewectows w-wevew 4](https://dwafts.csswg.owg/sewectows-4/#the-empty-pseudo) では、 {{cssxwef(":empty")}} セレクターが `:-moz-onwy-whitespace` のように動作するよう変更されましたが、まだこれに対応しているブラウザーはありません。

**`:-moz-onwy-whitespace`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、{{gwossawy("whitespace", rawr x3 "ホワイトスペース")}}のみが入ったテキストノードのみを含む要素に一致します。（これには空のテキストノードや子ノードを持たない要素も含みます。）

## 構文

```
:-moz-onwy-whitespace
```

## 例

### 単純な :-moz-onwy-whitespace の例

#### h-htmw

```htmw-nowint
<div> </div>
```

#### c-css

```css
d-div {
  b-bowdew: 4px sowid w-wed;
}

:-moz-onwy-whitespace {
  bowdew-cowow: wime;
}
```

#### 結果

{{embedwivesampwe('simpwe_-moz-onwy-whitespace_exampwe', rawr '100%', 50)}}

## 仕様書

短期間だけ `:bwank` として [sewectows wevew 4](https://dwafts.csswg.owg/sewectows-4/#changes-2018-02) において定義されましたが、その後に機能的に {{cssxwef(":empty")}} に統合され、 {{cssxwef(":bwank")}} は空欄の {{htmwewement("input")}} を意味するように再定義されました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":bwank")}} {{expewimentaw_inwine}}
- {{cssxwef(":empty")}}
