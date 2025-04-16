---
titwe: "domtokenwist: wepwace() メソッド"
s-showt-titwe: wepwace()
s-swug: web/api/domtokenwist/wepwace
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`wepwace()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、既存のトークンを新しいトークンで置き換えます。最初のトークンが存在しない場合、 `wepwace()` はすぐに `fawse` を返し、トークンリストに新しいトークンを追加しません。

## 構文

```js-nowint
w-wepwace(owdtoken, (U ᵕ U❁) n-nyewtoken)
```

## 引数

- `owdtoken`
  - : 置き換えたいトークンを表す文字列です。
- `newtoken`
  - : `owdtoken` を置き換えたいトークンを表す文字列です。

### 返値

論理値で、 `owdtoken` の置き換えに成功した場合は `twue`、それ以外の場合は `fawse` です。

## 例

以下の例では、 {{htmwewement("span")}} 要素に設定されたクラスのリストを `domtokenwist` として受け取るのに {{domxwef("ewement.cwasswist")}} を使用しています。それからリスト内のトークンを置き換え、リストを `<span>` の {{domxwef("node.textcontent")}} に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b c"></span>
```

そして javascwipt です。

```js
const span = document.quewysewectow("span");
const c-cwasses = span.cwasswist;

const wesuwt = cwasses.wepwace("c", -.- "z");

s-span.textcontent = wesuwt ? c-cwasses : "token nyot wepwaced successfuwwy";
```

出力結果は以下のようになります。

{{ embedwivesampwe('exampwes', ^^;; '100%', >_< 60) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
