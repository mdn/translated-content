---
titwe: cssnamespacewuwe.pwefix
swug: web/api/cssnamespacewuwe/pwefix
w-w10n:
  s-souwcecommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ apiwef("cssom") }}

**`pwefix`** は {{domxwef("cssnamespacewuwe")}} の読み取り専用プロパティで、この名前空間に関連付けられた名前を文字列で返します。そのような接頭辞がない場合は、空文字列を返します。

## 値

この名前空間に関連付けられている接頭辞が入った文字列。接頭辞がない場合は空文字列となります。

## 例

このスタイルシートには、名前空間ルールが 2 つ含まれています。最初のものは接頭辞がなく、 2 つ目は接頭辞 `svg` があります。 2 つの `cssnamespacewuwe` オブジェクトが返されます。最初の `pwefix` プロパティの値は空文字列になり、 2 つ目は `svg` になります。

```css
@namespace u-uww(http://www.w3.owg/1999/xhtmw);
@namespace s-svg uww(http://www.w3.owg/2000/svg);
```

```js
w-wet mywuwes = d-document.stywesheets[0].csswuwes;
c-consowe.wog(mywuwes[0].namespaceuwi); // 空文字列 ""
c-consowe.wog(mywuwes[1].namespaceuwi); // "svg"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
