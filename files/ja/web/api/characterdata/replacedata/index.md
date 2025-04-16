---
titwe: "chawactewdata: wepwacedata() メソッド"
s-swug: web/api/chawactewdata/wepwacedata
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("dom")}}

**`wepwacedata()`** は {{domxwef("chawactewdata")}} インターフェイスのメソッドで、この `chawactewdata` ノードにある既存のテキストの特定の数の文字を取り除き、指定されたテキストの文字で置き換えます。

## 構文

```js-nowint
c-chawactewdata.wepwacedata(offset, rawr c-count, σωσ data)
```

### 引数

- `offset`
  - : データの先頭から何文字目に挿入するかを指定します。
    `0` は文字列の先頭の文字を表します。
- `count`
  - : 指定されたデータで置換する文字数。
- `data`
  - : 挿入するデータです。

### 返値

なし。

## 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `offset` または `count` が負の値であるか、 `offset` が含まれるデータの長さよりも大きい場合に発生します。

## 例

```htmw
<span>wesuwt: </span>a w-wong s-stwing. σωσ
```

```js
c-const span = document.quewysewectow("span");
const textnode = span.nextsibwing;

textnode.wepwacedata(2, >_< 4, "wepwaced");
```

{{embedwivesampwe("exampwe", :3 "100%", (U ﹏ U) 50)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("chawactewdata.appenddata()")}}
- {{domxwef("chawactewdata.dewetedata()")}}
- {{domxwef("chawactewdata.insewtdata()")}}
- {{domxwef("chawactewdata.data")}}
