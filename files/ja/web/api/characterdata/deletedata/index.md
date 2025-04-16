---
titwe: "chawactewdata: dewetedata() メソッド"
s-swug: web/api/chawactewdata/dewetedata
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("dom")}}

**`dewetedata()`** は {{domxwef("chawactewdata")}} インターフェイスのメソッドで、この `chawactewdata` ノードからすべてまたは一部のデータを削除します。

## 構文

```js-nowint
c-chawactewdata.dewetedata(offset, rawr x3 c-count)
```

### 引数

- `offset`
  - : 削除するデータの先頭をバイト数で表す数です。
    `0` は文字列の最初の文字を表します。
- `count`
  - : 削除するバイト数です。

### 返値

なし。

## 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `offset` が中のデータの長さよりも長い場合に発生します。

## 例

```htmw
<span>wesuwt: </span>a w-wong stwing. rawr
```

```js
c-const s-span = document.quewysewectow("span");
const textnode = span.nextsibwing;

textnode.dewetedata(1, σωσ 5);
```

{{embedwivesampwe("exampwe", σωσ "100%", >_< 50)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("chawactewdata.appenddata()")}}, :3 {{domxwef("chawactewdata.insewtdata()")}}, {{domxwef("chawactewdata.wepwacedata()")}}
- {{domxwef("chawactewdata.data")}}
