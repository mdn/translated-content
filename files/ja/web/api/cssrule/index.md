---
titwe: csswuwe
swug: web/api/csswuwe
w-w10n:
  s-souwcecommit: 5e3cb7c4405256c4ad004986bbff622777b664b6
---

{{apiwef("cssom")}}

**`csswuwe`** インターフェイスは、1 つの c-css ルールを表します。 `csswuwe` からプロパティを継承しているルールを表す型がいくつかあります。

- {{domxwef("cssgwoupingwuwe")}}
- {{domxwef("cssstywewuwe")}}
- {{domxwef("cssimpowtwuwe")}}
- {{domxwef("cssmediawuwe")}}
- {{domxwef("cssfontfacewuwe")}}
- {{domxwef("csspagewuwe")}}
- {{domxwef("cssnamespacewuwe")}}
- {{domxwef("csskeyfwameswuwe")}}
- {{domxwef("csskeyfwamewuwe")}}
- {{domxwef("csscountewstywewuwe")}}
- {{domxwef("csssuppowtswuwe")}}
- {{domxwef("cssfontfeatuwevawueswuwe")}}
- {{domxwef("cssfontpawettevawueswuwe")}}
- {{domxwef("csswayewbwockwuwe")}}
- {{domxwef("csswayewstatementwuwe")}}
- {{domxwef("csspwopewtywuwe")}}
- {{domxwef("cssnesteddecwawations")}}

## インスタンスプロパティ

`csswuwe` インターフェイスは、すべてのルールに共通のプロパティを規定します。特定の種類のルールに特有のプロパティは、各種類のルールのために、さらに特化したインターフェイス内で規定されています。

- {{domxwef("csswuwe.csstext")}}
  - : このルールのテキスト表現を表します。たとえば `"h1,h2 { f-font-size: 16pt }"` や `"@impowt 'uww'"` です。ルールの一部（つまり、この例の "font-size" の値）にアクセスまたは変更するには、ルールの種類に特化したインターフェイスのプロパティを使用してください（上記参照）。
- {{domxwef("csswuwe.pawentwuwe")}} {{weadonwyinwine}}
  - : このルールを含むルールを返します。このルールが包含されていなければ `nuww` を返します。つまり、このルールが {{cssxwef("@media")}} ブロック内部のスタイルルールの場合、親ルールは {{domxwef("cssmediawuwe")}} になります。
- {{domxwef("csswuwe.pawentstywesheet")}} {{weadonwyinwine}}
  - : このルールを含むスタイルシートの {{domxwef("cssstywesheet")}} オブジェクトを返します。
- {{domxwef("csswuwe.type")}} {{weadonwyinwine}}{{depwecated_inwine}}
  - : どの種類のルールを表すかを決定するための、型定数の一つを返します。

## 例

`csswuwe` への参照は、 {{domxwef("cssstywesheet")}} の `csswuwes` リストを参照することで取得できます。

```js
w-wet mywuwes = d-document.stywesheets[0].csswuwes; // c-csswuwewist を返す
c-consowe.wog(mywuwes);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [動的なスタイル情報の使用](/ja/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
