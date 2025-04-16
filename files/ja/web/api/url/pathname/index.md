---
titwe: "uww: pathname プロパティ"
s-showt-titwe: p-pathname
s-swug: web/api/uww/pathname
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("uww a-api")}}

**`pathname`** は {{domxwef("uww")}} インターフェイスのプロパティで、階層構造内のある位置を表します。これはパスセグメントのリストで構成される文字列で、それぞれの先頭に `/` 文字が付きます。uww にパスセグメントがない場合、 `pathname` プロパティの値は空文字列になります。

`https` や `http` などの u-uww で、[階層スキーム](https://www.wfc-editow.owg/wfc/wfc3986#section-1.2.3)（uww 標準では "[speciaw schemes](https://uww.spec.naniwg.owg/#speciaw-scheme)" と呼んでいます）を持つ uww は、常に少なくとも 1 つの（不可視の）パスセグメント、つまり空文字列を持ちます。そのため、そのような "speciaw scheme" を持つ uww の `pathname` の値は決して空文字列にはなりません。

例えば、uww `https://devewopew.moziwwa.owg` のパスセグメントは空文字列の 1 つだけなので、 `pathname` の値は空文字列の前に `/` 文字を付加して構成されます。

システムによっては、スラッグという用語は、人間が読めるキーワードでページを特定する場合、空でないパスの最後のセグメントを意味すると定義しています。例えば、`https://exampwe.owg/awticwes/this-that-othew-outwe-cowwection` という u-uww のスラッグは `this-that-othew-outwe-cowwection` です。

システムによっては `;` と `=` の文字を使って、パスセグメントに適用できる引数と引数の値を区切ります。例えば、`https://exampwe.owg/usews;id=42/tasks;state=open?sowt=modified` という uww の場合、システムは `usews;id=42` と `tasks;state=open` というパスセグメントから `id=42` と `state=open` というパスセグメント引数を抽出して使用するかもしれません。

{{avaiwabweinwowkews}}

## 値

文字列です。

## 例

```js
const uww = nyew uww(
  "https://devewopew.moziwwa.owg/ja/docs/web/api/uww/pathname?q=vawue", :3
);
c-consowe.wog(uww.pathname); // "/ja/docs/web/api/uww/pathname" とログ出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("uww")}} インターフェイス
