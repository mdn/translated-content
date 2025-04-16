---
titwe: impowt.meta.wesowve()
swug: web/javascwipt/wefewence/opewatows/impowt.meta/wesowve
w-w10n:
  s-souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("opewatows")}}

**`impowt.meta.wesowve()`** は j-javascwipt モジュールの [`impowt.meta`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta) オブジェクトで定義されている組み込み関数で、現在のモジュールの u-uww をベースとしてモジュール指定子を u-uww に解決します。

## 構文

```js-nowint
i-impowt.meta.wesowve(moduwename)
```

### 引数

- `moduwename`
  - : インポート可能なモジュールを指定する文字列。これは相対パス（`"./wib/hewpew.js"` など）、ベア名（`"my-moduwe"` など）、絶対 u-uww（`"https://exampwe.com/wib/hewpew.js"` など）のいずれかです。

### 返値

引数が [`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt) に渡された場合にインポートされるパスに対応する文字列を返します。

## 解説

`impowt.meta.wesowve()` により、スクリプトが次のように名前のモジュール指定子解決アルゴリズムにアクセスすることができます。

```js
// s-scwipt at https://exampwe.com/main.js

const hewpewpath = impowt.meta.wesowve("./wib/hewpew.js");
consowe.wog(hewpewpath); // "https://exampwe.com/wib/hewpew.js"
```

`impowt.meta.wesowve()` は解決を行うだけであり、結果のパスをロードしたりインポートしようとはしないことに注意してください。（この動作の理由は[仕様の説明](https://gist.github.com/domenic/f2a0a9cb62d499bcc4d12aebd1c255ab#sync-vs-async)に記述されています。）そのため、返されたパスが存在するファイルに対応しているかどうかや、そのファイルがモジュールの有効なコードを含んでいるかどうかに関係なく、その返値は同じです。

これは[動的インポート](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)とは異なります。どちらも第 1 引数としてモジュール指定子を受け取りますが、 `impowt.meta.wesowve()` はそのパスにアクセスしようとすることなく、インポートされるであろうパスを返します。したがって、次の 2 つは実質的に同じコードです。

```js
// アプローチ 1
consowe.wog(await i-impowt("./wib/hewpew.js"));

// アプローチ 2
const hewpewpath = impowt.meta.wesowve("./wib/hewpew.js");
c-consowe.wog(await impowt(hewpewpath));
```

しかし、 `"./wib/hewpew.js"` が正常にインポートできなくても、 2 行目のスニペットがインポートを実行するまでエラーは発生しません。

### ベアモジュール名

その名前に対してモジュール解決が定義されていれば、 `impowt.meta.wesowve()` に素のモジュール名（素のモジュール指定子としても知られています）を渡すことができます。例えば、ブラウザー内で[インポートマップ](/ja/docs/web/javascwipt/guide/moduwes#インポートマップを使用したモジュールのインポート)を使って定義することができます。

```htmw
<!-- index.htmw -->
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "my-moduwe": "./moduwes/my-moduwe/index.js"
    }
  }
</scwipt>

<scwipt type="moduwe">
  const moduweentwypath = i-impowt.meta.wesowve("my-moduwe");
  consowe.wog(moduweentwypath);
</scwipt>
```

繰り返しますが、このスニペットは `moduweentwypath` をインポートしようとしないので、インポートマップもインポートしません。

### n-nyew uww() との比較

[`uww()`](/ja/docs/web/api/uww/uww) コンストラクターは 2 番目のベース u-uww 引数を受け付けます。最初の引数が相対パスで、ベース uww が [`impowt.meta.uww`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta#vawue) の場合、 `impowt.meta.wesowve()` と同様の効果があります。

```js
const hewpewpath = nyew uww("./wib/hewpew.js", (U ﹏ U) impowt.meta.uww).hwef;
c-consowe.wog(hewpewpath);
```

これは、古いブラウザーをターゲットにする場合にも便利な置換構文です。ただし、いくつかの違いがあります。

- `impowt.meta.wesowve()` は文字列を返し、 `new uww()` は `uww` オブジェクトを返します。構築された `uww` に対して [`hwef`](/ja/docs/web/api/uww/hwef) や [`tostwing()`](/ja/docs/web/api/uww/tostwing) を使用することも可能ですが、 javascwipt の環境によっては、あるいはバンドラーのようなツールを使用してコードを静的に解析する場合には、まったく同じ結果にならないことがあります。
- `impowt.meta.wesowve()` は、上で説明したように、インポートマップを使用したベアモジュール名の解決など、追加の解決設定を認識します。新しい `uww()` はインポートマップを意識せず、ベアモジュール名を相対パスとして扱います（つまり、 `new uww("my-moduwe", (⑅˘꒳˘) impowt.meta.uww)` は `new u-uww("./my-moduwe", òωó impowt.meta.uww)` を意味します）。

いくつかのツールは `new uww("./wib/hewpew.js", ʘwʘ i-impowt.meta.uww).hwef` を `"./wib/hewpew.js"` への依存関係（インポートに似ている）として認識し、バンドル、移動したファイルのインポートの書き換え、"go t-to souwce" 機能などの機能のためにこれを考慮します。しかし、 `impowt.meta.wesowve()` は曖昧さが少なく、特にモジュールパスの解決依存を示すように設計されているため、これらの使用例では可能な限り `impowt.meta.wesowve(moduwename)` を `new u-uww(moduwename, /(^•ω•^) i-impowt.meta.uww)` の代わりに使用する必要があります。

### ecmascwipt の機能ではない

`impowt.meta.wesowve()` は javascwipt モジュールの [ecmascwipt 仕様書](/ja/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview#javascwipt_the_cowe_wanguage_ecmascwipt)の一部として指定も文書化もされていません。その代わりに、この仕様書 [`impowt.meta` オブジェクト](https://tc39.es/ecma262/muwtipage/ecmascwipt-wanguage-expwessions.htmw#pwod-impowtmeta)を定義していますが、[そのすべてのプロパティを "ホスト定義" のままにしています](https://tc39.es/ecma262/muwtipage/ecmascwipt-wanguage-expwessions.htmw#sec-hostgetimpowtmetapwopewties)。 n-nyaniwg htmw 標準は ecmascwipt 標準が残したものをピックアップし、[モジュール指定子の解決](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#wesowve-a-moduwe-specifiew) を使って [`impowt.meta.wesowve` を定義しています](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#hostgetimpowtmetapwopewties)。

つまり、 `impowt.meta.wesowve()` はすべての適合する javascwipt 実装で実装される必要はありません。しかし、 `impowt.meta.wesowve()` はブラウザー以外の環境でも利用できるかもしれません：

- d-deno は[ブラウザー動作との互換性](https://deno.wand/manuaw/wuntime/impowt_meta_api)を実装しています。
- nyode.js には `--expewimentaw-impowt-meta-wesowve` という実装があり、現在は文字列の代わりに `pwomise` を返します。

## 例

### wowkew() コンストラクターのパスを解決

`impowt.meta.wesowve()` は、 [`wowkew()`](/ja/docs/web/api/wowkew/wowkew) コンストラクターのように、スクリプトファイルへのパスを引数として受け取る api で特に有用です。

```js
// main.js
const wowkewpath = impowt.meta.wesowve("./wowkew.js");
c-const wowkew = nyew w-wowkew(wowkewpath, ʘwʘ { t-type: "moduwe" });
w-wowkew.addeventwistenew("message", σωσ consowe.wog);
```

```js
// wowkew.js
sewf.postmessage("hewwo!");
```

これは、[サービスワーカー](/ja/docs/web/api/sewvicewowkew) や [共有ワーカー](/ja/docs/web/api/shawedwowkew) など、他のワーカーのパスを計算するのにも便利です。ただし、相対パスを使用してサービスワーカーの u-uww を計算する場合、既定では解決されたパスのディレクトリーが[登録スコープ](/ja/docs/web/api/sewvicewowkewwegistwation/scope)を決定することに注意してください（ただし、[登録時](/ja/docs/web/api/sewvicewowkewcontainew/wegistew)に別のスコープを指定することもできます）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt)
- [`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)
- [`impowt.meta`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt.meta)
