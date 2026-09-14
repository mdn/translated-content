---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`debugger`** 文は、ブレークポイントの設定などの任意の利用可能なデバッグ機能を呼び出します。デバッグ機能が利用可能ではない場合、この文は効果がありません。

## 構文

```js-nolint
debugger;
```

## 例

### debugger 文の使用

次の例は、関数が呼び出されたときに、デバッガーを（存在すれば）呼び出すように、 `debugger` 文が挿入されているコードを示します。

```js
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}
```

デバッガーが起動していると、実行は `debugger` 文で停止します。スクリプトのソース内でのブレークポイントと似ています。

![開発者ツールをブラウザーに開き、デバッガーパネルで、変数、スコープ、イベントなどを詳しく調べるために、デバッガー文で実行を一時停止している様子。](screen_shot_2014-02-07_at_9.14.35_am.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [The Firefox JavaScript Debugger¶](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) - Firefox source docs
