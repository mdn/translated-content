---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
---

{{JSRef}} {{non-standard_header}}

**`stack`** は {{jsxref("Error")}} オブジェクトの標準外のプロパティで、呼び出された関数のトレース、つまり、その呼び出し順、呼び出したファイルの行番号、呼び出した関数の引数を提供します。スタック文字列は、最後の呼び出しから最初の呼び出しへ進み、元のグローバルスコープの呼び出しまで遡ります。

## 解説

各ステップは改行で区切られ、行の先頭は関数名（グローバルスコープからの呼び出しでない場合）、次に `@` 記号、ファイルの場所（エラーが投げられている時に関数がエラーコンストラクターである場合を除く）、コロン記号、ファイルの場所がある場合は行番号の順に続きます。（ただし、{{jsxref("Error")}} オブジェクトも、投げられたエラーから取り戻すため `fileName` および `lineNumber`、`columnNumber` プロパティを所有することに注意してください。これはエラーのみであり、そのトレースではありません。）

これは Firefox だけで使用される書式であることに注意してください。スタックトレースに標準の書式はありません。しかし、Safari 6 以降と Opera 12 以前ではとてもよく似た書式を使用します。一方で、V8 JavaScript エンジンを搭載したブラウザー（Chrome、Opera 15 以降、Android Browser など）や IE 10 以降のブラウザーは異なる書式を使用します。

**スタック上の引数の値**: Firefox 14 以前 ([Firefox バグ 744842](https://bugzil.la/744842)) で、関数名は、文字列に変換され括弧で囲まれた引数の値に続き、`@` 記号の直前に置かれます。オブジェクト (または配列等) は変換された形式 `"[object Object]"` で現れるため、これが実際のオブジェクトに戻され評価されることはありません。スカラー値を受け取ります (それにも関わらず、少なくとも Firefox 14 では可能です。`arguments.callee.caller.arguments` を使用し、`arguments.callee.caller.name` により、簡単に関数名を取り戻すことが可能です)。`"undefined"` は、`"(void 0)"` として記録されます。ただし、`"@"`、`"("`, `")"` (または、これらがファイル名に含まれる場合) を伴う文字列引数が渡された場合、行がそのコンポーネント部分で分かれてしまうため、これらに安易に頼ることができません。従って、Firefox 14 以降では、これが少なからず問題になります。

ブラウザによって値を設定するタイミングが異なります。例えば Firefox は、これを {{jsxref("Error")}} オブジェクトが作成された時に設定し、PhantomJS は、{{jsxref("Error")}} が投げられた時にのみ設定します。[アーカイブされた MSDN のドキュメント](https://web.archive.org/web/20180618201428/https://docs.microsoft.com/scripting/javascript/reference/stack-property-error-javascript)によれば、PhantomJS の実装とも一致するようです。

## 例

### stack プロパティの使用

次の HTML マークアップは、`stack` プロパティの使用を実演します。

```html
<!doctype html>
<meta charset="UTF-8" />
<title>Stack Trace Example</title>
<body>
  <script>
    function trace() {
      try {
        throw new Error("myError");
      } catch (e) {
        alert(e.stack);
      }
    }
    function b() {
      trace();
    }
    function a() {
      b(3, 4, "\n\n", undefined, {});
    }
    a("first call, firstarg");
  </script>
</body>
```

上記のマークアップは、Windows ファイルシステム上の `C:\example.html` に保存されているものと仮定します。これは、次のテキストを含む警告メッセージを生成します:

Firefox 30 以降では、列番号が含まれます。

```plain
trace@file:///C:/example.html:9:17
b@file:///C:/example.html:16:13
a@file:///C:/example.html:19:13
@file:///C:/example.html:21:9
```

Firefox 14 から Firefox 29 まで:

```plain
trace@file:///C:/example.html:9
b@file:///C:/example.html:16
a@file:///C:/example.html:19
@file:///C:/example.html:21
```

Firefox 13 以前は、代わりに次のテキストが生成されます。

```plain
Error("myError")@:0
trace()@file:///C:/example.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
a("first call, firstarg")@file:///C:/example.html:19
@file:///C:/example.html:21
```

### eval によるコードのスタック

Firefox 30 以降、`Function()` および `eval()` 呼び出し内のコードのエラースタックは、各呼び出しに、行番号と列番号についての詳細情報を含むスタックを生成するようになりました。関数呼び出しは、`"> Function"` で示され、eval 呼び出しは、`"> eval"` で示されます。

```js
try {
  new Function("throw new Error()")();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 > Function:1:1
// @file:///C:/example.html:7:6

try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 > eval line 1 > eval:1:1
// @file:///C:/example.html line 7 > eval:1:1
// @file:///C:/example.html:7:6
```

`//# sourceURL` ディレクティブを使用して eval ソースに名前を付けることもできます。 [デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) ドキュメント内の [eval ソースのデバッグ](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html) と [ブログ記事](https://fitzgeraldnick.com/2014/12/05/name-eval-scripts.html) も参照してください。

## 仕様書

仕様の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 外部プロジェクト: [TraceKit](https://github.com/csnover/TraceKit/) および [javascript-stacktrace](https://github.com/stacktracejs/stacktrace.js)
- [Overview of the V8 JavaScript stack trace API](https://v8.dev/docs/stack-trace-api)
