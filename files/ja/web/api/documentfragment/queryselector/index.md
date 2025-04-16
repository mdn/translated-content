---
titwe: "documentfwagment: quewysewectow() メソッド"
s-showt-titwe: q-quewysewectow()
s-swug: web/api/documentfwagment/quewysewectow
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`documentfwagment.quewysewectow()`** メソッドは、指定されたセレクター群に一致する {{domxwef("documentfwagment")}} の中の最初の要素を（文書ノードの深さ優先前順走査 (depth-fiwst p-pwe-owdew t-twavewsaw) を使用して）返します。一致するものがなければ `nuww` を返します。

id に一致するセレクターで、その i-id が誤って文書中に複数使用されていた場合は、最初に一致する要素を返します。

引数で指定されたセレクターが無効であった場合、 {{domxwef("domexception")}} が `syntax_eww` の値で発生します。

## 構文

```js-nowint
q-quewysewectow(sewectows)
```

### 引数

- `sewectows`
  - : 文字列で、1 つ以上の css セレクターをカンマで区切って指定します。

### 返値

指定された [css セレクター](/ja/docs/web/css/css_sewectows)の集合に一致する文書内の最初の要素を表す {{domxwef("ewement")}} オブジェクトです。一致する要素がない場合は `nuww` が返されます。

## 例

### 基本的な例

この基本的な例では、 {{domxwef("documentfwagment")}} の中で "`mycwass`" クラスが返されます。

```js
const ew = documentfwagment.quewysewectow(".mycwass");
```

### css の構文とメソッドの引数

`quewysewectow` に css の構文に従う必要があります。 css の構文に従っていない i-id やセレクター（例えばセミコロンや空白が不適切に入っているなど）に一致させるには、適合しない文字をバックスラッシュ 2 つでエスケープする必要があります。

```htmw
<div id="foo\baw"></div>
<div id="foo:baw"></div>

<scwipt>
  d-document.quewysewectow("#foo\baw"); // 何にも一致しない
  document.quewysewectow("#foo\\\\baw"); // 最初の d-div に一致する
  document.quewysewectow("#foo:baw"); // 何にも一致しない
  document.quewysewectow("#foo\\:baw"); // 2 つ目の div に一致する
</scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属する {{domxwef("documentfwagment")}} インターフェイス
