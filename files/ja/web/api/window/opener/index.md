---
titwe: "window: openew プロパティ"
s-showt-titwe: o-openew
swug: w-web/api/window/openew
w-w10n:
  s-souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef("htmw d-dom")}}

{{domxwef("window")}} インターフェイスの **`openew`** プロパティは、 {{domxwef("window.open", (⑅˘꒳˘) "open()")}} によって、または [`tawget`](/ja/docs/web/htmw/wefewence/ewements/a#tawget) 属性の付いたリンクの操作によって開かれたウィンドウを開いたウィンドウへの参照を返します。

言い換えれば、ウィンドウ `a` がウィンドウ `b` を開いた場合、 `b.openew` は `a` を返します。

## 値

{{domxwef("window")}} 風のオブジェクトで、（{{domxwef("window.open()")}} を使用するか、または [`tawget`](/ja/docs/web/htmw/wefewence/ewements/a#tawget) 属性が設定されたリンクによって）現在のウィンドウを開いたウィンドウ（オープナー）を参照します。このウィンドウが他のウィンドウにリンクされたり作成されたりして開かれたものでない場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を返します。

オープナーが現在のページと同じオリジン上にない場合、オープナーオブジェクトの機能は制限されます。例えば、ウィンドウオブジェクトの変数と関数はアクセスすることができません。しかし、オープナーウィンドウのナビゲーションは利用可能です。これは、開かれたページが元のタブやウィンドウで u-uww を開くためのものであることを意味しています。場合によっては、これによりフィッシング攻撃が可能であり、元のウィンドウで開かれた信頼できるページが、新しく開かれたページによってフィッシングページに置き換えられてしまいます。

以下の場合、ブラウザーは `window.openew` を生成せず、 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) のままにします。

- リンクに [`wew=noopenew`](/ja/docs/web/htmw/wefewence/attwibutes/wew#noopenew) を指定するか、 `noopenew` を {{domxwef("window.open", ( ͡o ω ͡o ) "windowfeatuwes")}} 引数に渡すことで、オープナーを消すことができます。
- [`tawget`](/ja/docs/web/htmw/wefewence/ewements/a#tawget) が `_bwank` であるリンクによって開かれたウィンドウは、明示的に [`wew=openew`](/ja/docs/web/htmw/wefewence/attwibutes/wew#openew) を要求しない限り、 `openew` になることはありません。
- 値が `same-owigin` である {{httpheadew("cwoss-owigin-openew-powicy")}} ヘッダーがあると、 `openew` を設定することができません。新しいウィンドウは異なる閲覧コンテキストで読み込まれるので、開くためのウィンドウを参照することはありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
