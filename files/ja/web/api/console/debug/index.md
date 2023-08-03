---
title: console.debug()
slug: Web/API/console/debug
l10n:
  sourceCommit: d19d68bf6078c23d527b6e1355925795e745d124
---

{{APIRef("Console API")}}

**`console.debug()`** メソッドは、メッセージを "debug" ログレベルでウェブコンソールに出力します。このメッセージは、デバッグ出力を表示するようにコンソールが構成されている場合にのみユーザーに表示されます。多くの場合、ログレベルはコンソールの UI の中で構成します。このログレベルは \`Debug\` または \`Verbose\` ログレベルに相当します。

{{AvailableInWorkers}}

## 構文

```js
debug(obj1);
debug(obj1, /* …, */ objN);
debug(msg);
debug(msg, subst1, /* …, */ substN);
```

### 引数

- `obj1` … `objN`
  - : 出力する JavaScript オブジェクトのリスト。これらの各オブジェクトの文字列表現は、リストされた順に追加され、コンソールに出力されます。
- `msg`
  - : 連続した順序で `subst1` から `substN` に置き換えられる 0 個以上の置換文字列を含む JavaScript 文字列です。
- `subst1` … `substN`
  - : `msg` 内の置換文字列を置換する JavaScript オブジェクト。これにより、出力の形式をさらに制御できます。置換のしくみの説明については、 {{domxref("console")}} の[文字列置換の使用](/ja/docs/Web/API/console#文字列置換の使用)を参照してください。

詳細については、{{domxref("console")}} オブジェクトのドキュメントの[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力)を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
