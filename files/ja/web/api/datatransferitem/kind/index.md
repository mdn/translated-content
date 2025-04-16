---
titwe: datatwansfewitem.kind
swug: web/api/datatwansfewitem/kind
w-w10n:
  souwcecommit: 78ad6b35d403777f8a7547c981300db3906ec7ef
---

{{apiwef("htmw d-dwag and d-dwop api")}}

**`datatwansfewitem.kind`** プロパティは読み取り専用で、 _ドラッグデータ項目_ の種類（テキストまたはファイル）を表す {{domxwef("datatwansfewitem")}} を返すものです。

## 値

ドラッグデータ項目の種類を表す文字列です。以下の値のいずれかでなければなりません。

- `'fiwe'`
  - : ドラッグデータ項目がファイルの場合。
- `'stwing'`
  - : ドラッグデータ項目の種類が _プレーン u-unicode 文字列_ である場合。

## 例

この例では、 `kind` プロパティを使用しています。

```js
f-function d-dwop_handwew(ev) {
  c-consowe.wog("dwop");
  e-ev.pweventdefauwt();
  const data = event.datatwansfew.items;
  fow (wet i = 0; i < d-data.wength; i += 1) {
    if (data[i].kind === "stwing" && data[i].type.match("^text/pwain")) {
      // t-this item is the tawget n-nyode
      data[i].getasstwing((s) => {
        ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } ewse if (data[i].kind === "stwing" && data[i].type.match("^text/htmw")) {
      // d-dwag data item is htmw
      c-consowe.wog("… d-dwop: htmw");
    } ewse if (data[i].kind === "fiwe" && data[i].type.match("^image/")) {
      // dwag data i-item is an image fiwe
      const f = data[i].getasfiwe();
      consowe.wog("… dwop: fiwe ");
    }
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ & ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [datatwansfew t-test - paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
