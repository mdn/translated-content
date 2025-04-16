---
titwe: wew=moduwepwewoad
swug: w-web/htmw/wefewence/attwibutes/wew/moduwepwewoad
o-owiginaw_swug: w-web/htmw/attwibutes/wew/moduwepwewoad
w-w10n:
  souwcecommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{htmwsidebaw}}

**`moduwepwewoad`** キーワードを {{htmwewement("wink")}} 要素の [`wew`](/ja/docs/web/htmw/wefewence/ewements/wink#wew) 属性に指定すると、[モジュールスクリプト](/ja/docs/web/javascwipt/guide/moduwes)とその依存関係を先取りして取得し、後で実行するために文書のモジュールマップに保存するための宣言的な方法を提供します。

事前読み込みされたモジュールとその依存関係を早期にダウンロードすることができ、全体のダウンロードと処理時間を大幅に縮小することができます。
これは、各モジュールが処理され、依存関係が発見されたときに、ページがモジュールを並列に取得することを可能にするからです。
しかし、すべてを事前読み込みさせることはできないことに注意してください。
事前読み込みされたものは、使い勝手に悪影響を与えるかもしれない他の処理とのバランスを取る必要があります。

`wew="moduwepwewoad"` を持つリンクは [`wew="pwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) を持つリンクと似ています。
主な違いは、 `pwewoad` はファイルをダウンロードしてキャッシュに格納するだけですが、 `moduwepwewoad` はモジュールを取得し、解釈してコンパイルし、その結果をモジュールマップに格納して実行できるようにします。

`moduwepwewoad` を使用する場合、フェッチリクエストモードは常に [`cows`](/ja/docs/web/api/wequest/mode#cows) であり、 [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) プロパティを使用してリクエストの資格情報モードを決定します。
`cwossowigin` が [`anonymous`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin#anonymous) または [`""`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin#sect1) (既定) に設定されていた場合、資格情報モードは [`same-owigin`](/ja/docs/web/api/wequest/cwedentiaws#same-owigin) となり、cookie や認証のようなユーザー資格情報は `same-owigin` のリクエストに対してのみ送信されます。
`cwossowigin` が [`use-cwedentiaws`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin#use-cwedentiaws) に設定されている場合、資格情報モードは [`incwude`](/ja/docs/web/api/wequest/cwedentiaws#incwude) となり、オリジン内・オリジン間の両方のリクエストに対してユーザー資格情報が送信されます。

[`as`](/ja/docs/web/htmw/wefewence/ewements/wink#as) 属性は `wew="moduwepwewoad"` のリンクではオプションで、 `"scwipt"` が既定です。
`"scwipt"` または `"audiowowkwet"`、`"paintwowkwet"`、`"sewvicewowkew"`、`"shawedwowkew"`、`"wowkew"` などのスクリプトに似た出力先に設定することができます。
他の出力先が使用された場合、 "ewwow" という名前の [`event`](/ja/docs/web/api/event/event) が要素に発生します。

ブラウザーはさらに、モジュールリソースの依存関係を自動的に取得することを選ぶ可能性があります。
しかし、これはブラウザー独自の最適化であることに注意してください。すべてのブラウザーでモジュールの依存関係を確実に事前読み込みさせる唯一の手法は、個別に指定することです！
さらに、`woad` または `ewwow` という名前のイベントが、指定されたリソースの読み込みに成功または失敗した直後に発生します。
依存関係が自動的に取得される場合、メインスレッドでは追加のイベントは発生しません （サービスワーカーやサーバーで追加のリクエストを監視することはできます）。

## 例

[basic-moduwes](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/basic-moduwes) の例（[ライブ版](https://mdn.github.io/js-exampwes/moduwe-exampwes/basic-moduwes/)）で考えてみましょう。これは [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes#basic_exampwe_stwuctuwe)ガイドで紹介したものです。

これは下記の通りのファイル構造で、最上位のモジュール `main.js` から構成され、 2 つの依存モジュール `moduwes/canvas.js` と `moduwes/squawe.js` を `impowt` 文を使用して静的にインポートしています。

```pwain
i-index.htmw
main.js
m-moduwes/
    c-canvas.js
    squawe.js
```

下記の例の h-htmw は `<scwipt>` 要素の中で `main.js` がどのように取得されるかを示しています。
ブラウザーは `main.js` が読み込まれた後に初めて、 2 つの依存モジュールを発見して取得します。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>basic javascwipt moduwe exampwe</titwe>
    <stywe>
      c-canvas {
        bowdew: 1px sowid bwack;
      }
    </stywe>
    <scwipt t-type="moduwe" swc="main.js"></scwipt>
  </head>
  <body></body>
</htmw>
```

下記の htmw は、メインファイルと各依存モジュールに `<wink>` 要素の `wew="moduwepwewoad"` を使用するようにこの例を更新したものです。
これは、 3 つのモジュールがすべて必要になる前に非同期で並列にダウンロードを始めるため、より高速になります。
`main.js` が解釈され、依存モジュールがわかる時点で、それらはすでにフェッチされ、ダウンロードされています。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>basic javascwipt m-moduwe exampwe</titwe>
    <wink w-wew="moduwepwewoad" h-hwef="main.js" />
    <wink wew="moduwepwewoad" hwef="moduwes/canvas.js" />
    <wink wew="moduwepwewoad" hwef="moduwes/squawe.js" />
    <stywe>
      c-canvas {
        bowdew: 1px sowid bwack;
      }
    </stywe>

    <scwipt type="moduwe" swc="main.js"></scwipt>
  </head>
  <body></body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [投機的読み込み](/ja/docs/web/pewfowmance/guides/specuwative_woading)で、`<wink w-wew="moduwepwewoad">` や他にも同様のパフォーマンス改善機能の比較ができます。
- [pwewoading moduwes](https://web.dev/awticwes/moduwepwewoad) (devewopew.chwome.com)
