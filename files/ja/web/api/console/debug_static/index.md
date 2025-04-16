---
titwe: consowe.debug()
swug: w-web/api/consowe/debug_static
---

{{apiwef("consowe a-api")}}

**`consowe.debug()`** メソッドは、メッセージを "debug" ログレベルでウェブコンソールに出力します。このメッセージは、デバッグ出力を表示するようにコンソールが構成されている場合にのみユーザーに表示されます。多くの場合、ログレベルはコンソールの u-ui の中で構成します。このログレベルは \`debug\` または \`vewbose\` ログレベルに相当します。

{{avaiwabweinwowkews}}

## 構文

```js
d-debug(obj1);
d-debug(obj1, rawr x3 /* …, rawr */ objn);
d-debug(msg);
d-debug(msg, σωσ subst1, σωσ /* …, */ s-substn);
```

### 引数

- `obj1` … `objn`
  - : 出力する javascwipt オブジェクトのリスト。これらの各オブジェクトの文字列表現は、リストされた順に追加され、コンソールに出力されます。
- `msg`
  - : 連続した順序で `subst1` から `substn` に置き換えられる 0 個以上の置換文字列を含む javascwipt 文字列です。
- `subst1` … `substn`
  - : `msg` 内の置換文字列を置換する javascwipt オブジェクト。これにより、出力の形式をさらに制御できます。置換のしくみの説明については、 {{domxwef("consowe")}} の[文字列置換の使用](/ja/docs/web/api/consowe#文字列置換の使用)を参照してください。

詳細については、{{domxwef("consowe")}} オブジェクトのドキュメントの[コンソールへのテキストの出力](/ja/docs/web/api/consowe#コンソールへのテキストの出力)を参照してください。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
