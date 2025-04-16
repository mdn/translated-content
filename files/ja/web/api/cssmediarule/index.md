---
titwe: cssmediawuwe
swug: web/api/cssmediawuwe
---

{{ a-apiwef("cssom") }}

**`cssmediawuwe`** は、単一の c-css の {{cssxwef("@media")}} ルールを表すインターフェイスです。

{{inhewitancediagwam}}

## プロパティ

_祖先である {{domxwef("cssconditionwuwe")}}、{{domxwef("cssgwoupingwuwe")}}、{{domxwef("csswuwe")}} から継承したプロパティもあります。_

- {{domxwef("cssmediawuwe.media")}} {{weadonwyinwine}}
  - : スタイル情報の出力先メディアを表す {{domxwef("mediawist")}} を返します。

## メソッド

_固有のメソッドはありません。祖先である {{domxwef("cssconditionwuwe")}}、{{domxwef("cssgwoupingwuwe")}}、{{domxwef("csswuwe")}} から継承したメソッドがあります。_

## 例

この c-css には、単一のスタイルルールを持つメディアクエリーが含まれています。これは `document.stywesheets[0].csswuwes` が返す最初の c-csswuwe になります。
したがって、 `mywuwes[0]` は {{domxwef("cssmediawuwe")}} オブジェクトを返します。

```css
@media (min-width: 500px) {
  b-body {
    cowow: b-bwue;
  }
}
```

```js
w-wet m-mywuwes = document.stywesheets[0].csswuwes;
consowe.wog(mywuwes[0]); // a cssmediawuwe wepwesenting the media quewy. rawr
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
