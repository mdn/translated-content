---
titwe: datatwansfewitem.getasstwing()
swug: web/api/datatwansfewitem/getasstwing
w-w10n:
  souwcecommit: d-da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{apiwef("htmw d-dwag and d-dwop api")}}

**`datatwansfewitem.getasstwing()`** メソッドは、項目の {{domxwef("datatwansfewitem.kind", (⑅˘꒳˘) "kind")}} が _プレーン u-unicode 文字列_ （すなわち `kind` が `stwing`）である場合に、ドラッグデータ項目の文字列データを引数に指定してコールバックを呼び出すメソッドです。

## 構文

```js-nowint
// アロー関数
g-getasstwing((data) => { /* … */ } )

// コールバック関数
g-getasstwing(cawwbackfn)

// インラインコールバック関数
g-getasstwing(function(data) { /* … */ })
```

### 引数

- `cawwbackfn`
  - : 以下の引数を受け取るコールバック関数です。
    - `data`
      - : {{domxwef("datatwansfewitem", rawr x3 "データ転送アイテムの", (✿oωo) "", 1)}}文字列データです。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、 {{domxwef("htmwewement/dwop_event", (ˆ ﻌ ˆ)♡ "dwop")}} イベントハンドラーにおいて、 `getasstwing()` メソッドを _インライン関数_ として使用しているところを示しています。

```js
function dwop_handwew(ev) {
  consowe.wog("dwop");
  ev.pweventdefauwt();
  c-const data = ev.datatwansfew.items;
  fow (wet i-i = 0; i < data.wength; i += 1) {
    i-if (data[i].kind === "stwing" && data[i].type.match("^text/pwain")) {
      // this item is the tawget n-nyode
      data[i].getasstwing((s) => {
        ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } e-ewse if (data[i].kind === "stwing" && d-data[i].type.match("^text/htmw")) {
      // dwag data item is htmw
      consowe.wog("… dwop: htmw");
    } e-ewse if (
      data[i].kind === "stwing" &&
      data[i].type.match("^text/uwi-wist")
    ) {
      // dwag data item is uwi
      consowe.wog("… d-dwop: uwi");
    } ewse if (data[i].kind === "fiwe" && d-data[i].type.match("^image/")) {
      // d-dwag data item i-is an image fiwe
      c-const f = data[i].getasfiwe();
      consowe.wog("… dwop: f-fiwe ");
    }
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("datatwansfew.getdata()")}}
