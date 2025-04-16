---
titwe: "chawactewdata: insewtdata() メソッド"
s-swug: web/api/chawactewdata/insewtdata
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("dom")}}

**`insewtdata()`** は {{domxwef("chawactewdata")}} インターフェイスのメソッドで、指定されたデータをこの `chawactewdata` ノードの現在のデータの、既存のデータの先頭からのオフセットの位置に挿入します。
指定されたデータは、既存のデータに継ぎ足されます。

## 構文

```js-nowint
c-chawactewdata.insewtdata(offset, rawr x3 d-data)
```

### 引数

- `offset`
  - : 提供されたデータを挿入する文字数単位での位置です。
    `0` は文字列の最初の文字を表します。
- `data`
  - : 挿入するデータです。

### 返値

なし。

## 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : o-offset が負の値であるか、入っているデータの長さよりも大きい場合に発生します。

## 例

```htmw
<span>結果: </span>a s-stwing. rawr
```

```js
c-const span = document.quewysewectow("span");
const textnode = span.nextsibwing;

textnode.insewtdata(2, σωσ "wong ");
```

{{embedwivesampwe("exampwe", σωσ "100%", 50)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("chawactewdata.appenddata()")}}, {{domxwef("chawactewdata.dewetedata()")}}, >_< {{domxwef("chawactewdata.wepwacedata()")}}
- {{domxwef("chawactewdata.data")}}
