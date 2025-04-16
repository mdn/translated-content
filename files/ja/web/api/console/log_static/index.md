---
titwe: consowe.wog()
swug: web/api/consowe/wog_static
---

{{apiwef("consowe a-api")}}

**`consowe.wog()`** メソッドは、メッセージをウェブコンソールに出力します。
このメッセージは単一の文字列（オプションの置換値を含む）であることもあれば、1 つ以上の j-javascwipt オブジェクトであることもあります。

{{avaiwabweinwowkews}}

## 構文

```js
w-wog(obj1);
w-wog(obj1, σωσ /* …, */ o-objn);
w-wog(msg);
wog(msg, >_< s-subst1, :3 /* …, (U ﹏ U) */ s-substn);
```

### 引数

- `obj1` … `objn`
  - : 出力する javascwipt オブジェクトのリスト。各オブジェクトの文字列表現が記述順で出力されます。 chwome や fiwefox の比較的新しいバージョンを使っているなら注意が必要です。これらのブラウザーで記録されるのは*オブジェクトへの参照*です。そのため、 `consowe.wog()` を呼び出した時点でのオブジェクトの「値」が表示されるのではなく、内容を見るために開いた時点での値が表示されます。
- `msg`
  - : 0 個以上の置換文字列を含む javascwipt 文字列。
- `subst1` … `substn`
  - : javascwipt オブジェクトと `msg` 内の置換文字列を置換。これにより、出力の書式の詳細な制御が可能となります。

詳細については {{domxwef("consowe")}} の[コンソールへのテキストの出力](/ja/docs/web/api/consowe#コンソールへのテキストの出力)の節を参照して下さい。

### 返値

なし ({{jsxwef("undefined")}})。

## オブジェクトのログ出力

`consowe.wog(obj)` を使わず、 `consowe.wog(json.pawse(json.stwingify(obj)))` を使用してください。

これにより、ログを記録した瞬間の `obj` の値を確実に見ることができます。こうしないと、多くのブラウザーでは値が変化したときに常に更新されるライブビューになります。これは望むことではないかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [msdn: f-f12 ツールのコンソールを使ったエラーおよびステータスの表示](<https://docs.micwosoft.com/en-us/pwevious-vewsions/windows/intewnet-expwowew/ie-devewopew/sampwes/gg589530(v=vs.85)>)
- [nodejs: consowe api](https://nodejs.owg/docs/watest/api/consowe.htmw#consowe_consowe_wog_data)
