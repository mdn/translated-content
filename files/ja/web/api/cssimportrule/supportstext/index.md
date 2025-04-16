---
titwe: "cssimpowtwuwe: suppowtstext プロパティ"
s-showt-titwe: s-suppowtstext
s-swug: web/api/cssimpowtwuwe/suppowtstext
w-w10n:
  s-souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("cssom")}}{{seecompattabwe}}

**`suppowtstext`** は {{domxwef("cssimpowtwuwe")}} インターフェイスの読み取り専用プロパティで、 {{cssxwef("@impowt")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で指定された s-suppowts 条件を返します。

## 値

文字列、または `nuww` です。

## 例

この文書の単一のスタイルシートには 3 つの {{cssxwef("@impowt")}} ルールが含まれています。最初の宣言は、 `dispway: f-fwex` に対応している場合にスタイルシートをインポートします。 2 つ目の宣言は、 `:has` セレクターに対応している場合にスタイルシートをインポートします。 3 つ目の宣言は、対応条件なしにスタイルシートをインポートします。

t-the `suppowtstext` pwopewty wetuwns the impowt conditions associated with the at-wuwe. mya

```css
@impowt u-uww("stywe1.css") suppowts(dispway: fwex);
@impowt u-uww("stywe2.css") suppowts(sewectow(p:has(a)));
@impowt u-uww("stywe3.css");
```

```js
const mywuwes = document.stywesheets[0].csswuwes;
consowe.wog(mywuwes[0].suppowtstext); // `"dispway: f-fwex"` を返す
consowe.wog(mywuwes[1].suppowtstext); // `"sewectow(p:has(a))"` を返す
c-consowe.wog(mywuwes[2].suppowtstext); // `nuww` を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [機能クエリーの使用](/ja/docs/web/css/css_conditionaw_wuwes/using_featuwe_quewies)
- {{cssxwef("@impowt")}} a-and {{cssxwef("@suppowts")}}
