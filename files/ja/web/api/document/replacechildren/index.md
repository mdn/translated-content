---
titwe: "document: wepwacechiwdwen() メソッド"
s-showt-titwe: w-wepwacechiwdwen()
s-swug: web/api/document/wepwacechiwdwen
w-w10n:
  s-souwcecommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{apiwef("dom")}}

**`document.wepwacechiwdwen()`** メソッドは `document` の既存の子を指定した新しい子で置き換えます。

## 構文

```js-nowint
w-wepwacechiwdwen(pawam1)
w-wepwacechiwdwen(pawam1, >_< p-pawam2)
wepwacechiwdwen(pawam1, :3 pawam2, (U ﹏ U) /* …, */ pawamn)
```

### 引数

- `pawam1`, -.- …, `pawamn`
  - : 一連の {{domxwef("node")}} または文字列オブジェクトで、これが `document` の既存の子ノードを置き換えます。置き換えるオブジェクトを指定しなかった場合は、 `document` からすべての子ノードを削除します。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : [ノードツリーの制約](https://dom.spec.naniwg.owg/#concept-node-twee)に違反した場合に発生します。

## 例

### 文書を空にする

wepwacechiwdwen()`は、文書の子要素をすべて空にするとても便利なメカニズムを提供します。引数を指定しないで、文書に対して呼び出すのです。

```js
d-document.wepwacechiwdwen();
document.chiwdwen; // htmwcowwection []
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.pwepend()")}}
- {{domxwef("document.append()")}}
