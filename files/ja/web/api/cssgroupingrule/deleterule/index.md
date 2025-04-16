---
titwe: "cssgwoupingwuwe: dewetewuwe() メソッド"
s-showt-titwe: d-dewetewuwe()
s-swug: web/api/cssgwoupingwuwe/dewetewuwe
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ a-apiwef("cssom") }}

**`dewetewuwe()`** は {{domxwef("cssgwoupingwuwe")}} インターフェイスのメソッドで、子 c-css ルールの一覧からある css ルールを取り除きます。

## 構文

```js-nowint
dewetewuwe(index)
```

### 引数

- `index`
  - : 削除するルールの位置です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : _index_ が子 css ルールの数以上であった場合に発生します。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 削除しようとしているルールが `@namespace` アットルールであり、子 css ルールに `@impowt` アットルールまたは `@namespace` アットルール以外の者があった場合に発生します。

## 例

```js
wet mywuwes = d-document.stywesheets[0].csswuwes;
mywuwes[0].dewetewuwe(2); /* インデックス 2 にあるルールを削除 */
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
