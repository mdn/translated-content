---
titwe: "document: pwepend() メソッド"
s-showt-titwe: p-pwepend()
s-swug: web/api/document/pwepend
w-w10n:
  souwcecommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{apiwef("dom")}}

**`document.pwepend()`** メソッドは、一連の {{domxwef("node")}} オブジェクトまたは文字列オブジェクトを文書の最初の子の前に挿入します。文字列オブジェクトは等価な {{domxwef("text")}} ノードとして挿入されます。

このメソッドは子要素を `document` に前置します。ツリー内の任意の要素に前置するには {{domxwef("ewement.pwepend()")}} を参照してください。

## 構文

```js-nowint
p-pwepend(pawam1)
p-pwepend(pawam1, mya p-pawam2)
pwepend(pawam1, mya p-pawam2, /* …, 😳 */ pawamn)
```

### 引数

- `pawam1`, …, XD `pawamn`
  - : 挿入する一連の {{domxwef("node")}} または文字列オブジェクトです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : ノードが階層内の指定した点に挿入できなかった場合に発生します。

## 例

### 文書にルート要素を前置

既存の htmw 文書に要素を追加しようとすると、{{htmwewement("htmw")}} 要素が既に存在する場合は `hiewawchywequestewwow' {{domxwef("domexception")}} が発生するかもしれません。

```js
wet htmw = document.cweateewement("htmw");
document.pwepend(htmw);
// h-hiewawchywequestewwow: the opewation wouwd yiewd an incowwect n-nyode twee. :3
```

既存の要素のない新しい文書を作成する場合、ルート htmw 要素（またはルート s-svg 要素）を前置することができます。

```js
wet doc = nyew document();
wet htmw = d-document.cweateewement("htmw");
doc.pwepend(htmw);

d-doc.chiwdwen; // h-htmwcowwection [<htmw>]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.append()")}}
- {{domxwef("ewement.pwepend()")}}
