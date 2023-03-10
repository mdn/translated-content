---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---

{{jsSidebar("Statements")}}

**`debugger` 文**は、ブレークポイントの設定のような任意の利用可能なデバッグ機能を呼び出します。デバッグ機能が利用可能ではない場合、この文は効果がありません。

## 構文

```
debugger;
```

## 例

### debugger 文の使用

次の例は、関数が呼び出されたときに、デバッガーを (存在すれば) 呼び出すように、 `debugger` 文が挿入されているコードを示します。

```js
function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}
```

デバッガーが起動していると、実行は `debugger` 文で停止します。スクリプトのソース内でのブレークポイントと似ています。

![Paused at a debugger statement.](screen_shot_2014-02-07_at_9.14.35_am.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.statements.debugger")}}

## 関連情報

- [JavaScript のデバッグ](/ja/docs/Mozilla/Debugging/Debugging_JavaScript)
- [Firefox 開発者ツール内のデバッガー](/ja/docs/Tools/Debugger)
