---
title: URLSearchParams.set()
slug: Web/API/URLSearchParams/set
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`set()`** メソッドは、指定された検索パラメーターに関連付けられた値を指定された値に設定します。 一致する値が複数ある場合、このメソッドは他の値を削除します。 検索パラメーターが存在しない場合、このメソッドはそれを作成します。

{{availableinworkers}}

## 構文

```
URLSearchParams.set(name, value)
```

### パラメーター

- name
  - : 設定するパラメーターの名前。
- value
  - : 設定するパラメーターの値。

### 戻り値

無効。

## 例

次の簡単な例から始めましょう。

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

// 3番目のパラメーターを追加します。
params.set('baz', 3);
```

以下は、{{domxref("URL")}} を作成し、いくつかの検索パラメーターを設定する方法を示す実際の例です。

[スクラッチパッド](/ja/docs/Tools/Scratchpad)に例をコピーして貼り付けることができます。

- 41 行目：コンソールへの (debug による) 検索パラメーターのダンプを停止するにはコメントにします。
- 43 行目：生成されたオブジェクトとその文字列表現をコンソールに (info で) ダンプします。
- 44 行目：生成された URL で新しいウィンドウ/タブを自動的に開こうとします（コメントが解除されている場合）。

```js
'use strict'

function genURL(rExp, aText, bDebug=false){
  let theURL

  theURL= new URL('https://regexr.com')
  theURL.searchParams.set( 'expression', rExp.toString() )
  theURL.searchParams.set( 'tool', 'replace' )
  theURL.searchParams.set( 'input', '\u2911\u20dc' )// ⤑⃜
  theURL.searchParams.set( 'text', aText.join('\n') )
  if( bDebug ){
    // キー/値のペアを表示
    for(var pair of theURL.searchParams.entries()) {
      console.debug(pair[0] + ' = \'' + pair[1] + '\'');
    }
    console.debug(theURL)
  }
  return theURL
}
var url = genURL(
  /(^\s*\/\/|\s*[^:]\/\/).*\s*$|\s*\/\*(.|\n)+?\*\/\s*$/gm  // 単一行/複数行のコメント
  // /(^\s*\/\/.*|\s*[^:]\/\/.*)/g                // 単一行のコメント
  ,[
    "これらは動作します:",
    "",
    "// eslint-disable-next-line no-unused-vars",
    "lockPref(  'keyword.URL',\t\t'https://duckduckgo.com/html/?q=!+'  )\t//      test",
    "/*",
    "  * bla bla    ",
    "*/",
    "",
    "/* bla bla */",
    "",
    "// bla bla ",
    "",
    "これらは動作しません:",
    "console.log(\"http://foo.co.uk/\")",
    "var url = \"http://regexr.com/foo.html?q=bar\"",
    "alert(\"https://mediatemple.net\")",
  ]
  , true
)
console.info( url, url.toString() )
// window.open( url, 'regex_site' )
```

## 仕様

| 仕様                                                                         | 状態                 | コメント |
| ---------------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-set', "set()")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.set")}}
