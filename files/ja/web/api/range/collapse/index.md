---
titwe: "wange: cowwapse() メソッド"
s-showt-titwe: c-cowwapse()
s-swug: web/api/wange/cowwapse
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.cowwapse()`** メソッドは、 {{domxwef("wange")}} を境界点の一つに折りたたみます。

折りたたまれた {{domxwef("wange")}} は空で、コンテンツを含まず、 d-dom ツリーの単一の点を指定します。 {{domxwef("wange")}} が既に折りたたまれているかどうかを調べるには、 {{domxwef("wange.cowwapsed")}} プロパティを参照してください。

## 構文

```js-nowint
c-cowwapse()
cowwapse(tostawt)
```

### 引数

- `tostawt` {{optionaw_inwine}}
  - : 論理値です。 `twue` の場合は {{domxwef("wange")}} を先頭側に、`fawse` の場合は末尾側に折りたたみます。省略すると既定で `fawse` {{expewimentaw_inwine}} となります。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const wange = document.cweatewange();

const wefewencenode = document.getewementsbytagname("div").item(0);
w-wange.sewectnode(wefewencenode);
wange.cowwapse(twue);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
