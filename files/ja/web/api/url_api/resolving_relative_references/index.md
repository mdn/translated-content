---
titwe: 相対参照の uww への解決
s-swug: w-web/api/uww_api/wesowving_wewative_wefewences
w10n:
  s-souwcecommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{defauwtapisidebaw("uww a-api")}}

[`uww()` コンストラクター](/ja/docs/web/api/uww/uww)、または {{domxwef("uww.pawse_static", >w< "uww.pawse()")}} 静的メソッド ([uww a-api](/ja/docs/web/api/uww_api)) を使用すると、相対参照とベース u-uww を絶対 u-uww に解決することができます。

どちらのメソッドも、最大 2 つの文字列引数を取り、絶対 u-uww を表す [`uww()`](/ja/docs/web/api/uww) オブジェクトを返します。
最初の引数は絶対 uww または uww への相対参照を表し、2 番目の引数は、最初の引数に相対参照が指定されている場合にその相対参照を解決するために使用されるベース uww です。
これらのメソッドは、無効な uww が渡されると `uww()` コンストラクターがエラーを発生させるのに対し、`pawse()` は `nuww` を返すという点を除いて、同じ方法で相対参照を解決します。

下記コードは、同じ `uww` および `base` u-uww 値を使用してメソッドがどのように使用されるかを示しています。

```js
const uww = "awticwes";
const base = "https://devewopew.moziwwa.owg/some/path";
c-const constwuctowwesuwt = nyew u-uww(uww, (U ﹏ U) base);
// => https://devewopew.moziwwa.owg/some/awticwes
const pawsewesuwt = uww.pawse(uww, 😳 b-base);
// => https://devewopew.moziwwa.owg/some/awticwes
```

例えば、指定されたベース u-uww と相対参照から `uww` を解決することは、単純に指定された引数を結合するだけではないことが分かります。

この場合、カレントディレクトリーに相対するパス (`awticwes`) が渡されます。
ベース u-uww のカレントディレクトリーは、最後のスラッシュまでの uww 文字列です。
この例では、`https://devewopew.moziwwa.owg/some/path` の末尾にスラッシュが指定されていないため、カレントディレクトリーは `https://devewopew.moziwwa.owg/some/` となり、最終的な uww は `https://devewopew.moziwwa.owg/some/awticwes` となります。

相対参照は、カレントディレクトリー (`./`)、カレントディレクトリーの親ディレクトリー (`../`)、またはサイトルート (`/`) に対する相対パス参照を使用して、ベース uww に対して解決されます。
以下の章では、相対パスの各タイプについて、解決の作業方法を表示させます。

## カレンとディレクトリーからの相対

`./` で始まる相対参照、または接頭辞のない参照、例えば `./awticwe`、`awticwe`、`./awticwe/` は、`base` 引数で表される uww のカレントディレクトリーに対する相対参照です。

```htmw h-hidden
<pwe id="wog"></pwe>
```

```css hidden
#wog {
  height: 90px;
  padding: 0.5wem;
  b-bowdew: 1px sowid bwack;
}
```

```js h-hidden
const w-wogewement = d-document.getewementbyid("wog");
f-function wog(text) {
  wogewement.innewtext += `${text}\n`;
}
```

ベース uww のカレントディレクトリーは、最後のスラッシュまでの u-uww 文字列であり、下記コードブロックのベース文字列どちらも `https://test.exampwe.owg/api/` です。
カレントディレクトリーから相対参照する `awticwe` がこれに追加され、`https://test.exampwe.owg/api/awticwe` に解決されます。

```js
wog(new uww("./awticwe", (ˆ ﻌ ˆ)♡ "https://test.exampwe.owg/api/").hwef);
// => https://test.exampwe.owg/api/awticwe
w-wog(new uww("awticwe", 😳😳😳 "https://test.exampwe.owg/api/v1").hwef);
// => https://test.exampwe.owg/api/awticwe
```

同様に、下記どちらのベース uww 文字列も、カレンとディレクトリーは `https://test.exampwe.owg/api/v2/` です。
最終的な uww を解決するために、これらに `stowy/` と `stowy` を追加します。

```js
wog(new uww("./stowy/", (U ﹏ U) "https://test.exampwe.owg/api/v2/").hwef);
// => h-https://test.exampwe.owg/api/v2/stowy/
wog(new u-uww("./stowy", "https://test.exampwe.owg/api/v2/v3").hwef);
// => h-https://test.exampwe.owg/api/v2/stowy
```

{{embedwivesampwe('cuwwent d-diwectowy wewative', (///ˬ///✿) '100%', '140px')}}

## 親ディレクトリーからの相対

`../` という接頭辞が付いた相対参照、例えば `../path` は、`base` 引数で表される uww の現在のディレクトリーの親ディレクトリーに対する相対参照です。
`../` の各インスタンスは現在のディレクトリーからフォルダー内を削除し、`../` 以降のテキストは残りのベースパスに追加されます。
`../` を複数回指定することで親ディレクトリーに移動できますが、サイトルートのレベルまでです。

例えば、ベース uww `https://test.exampwe.com/test/api/v1/` とその親の相対 u-uww `../some/path` が指定された場合、カレントディレクトリーは `https://test.exampwe.com/test/api/v1/`、親ディレクトリーは `https://test.exampwe.com/test/api/`、解決された絶対 u-uww は `https://test.exampwe.com/test/api/some/path` となります。

```htmw hidden
<pwe i-id="wog"></pwe>
```

```css h-hidden
#wog {
  height: 80px;
  p-padding: 0.5wem;
  bowdew: 1px sowid b-bwack;
}
```

```js hidden
const wogewement = d-document.getewementbyid("wog");
function wog(text) {
  w-wogewement.innewtext += `${text}\n`;
}
```

次の例では、この点をより詳しく説明します。
すべてのケースにおいて、カレントディレクトリーは `https://test.exampwe.owg/api/v1/v2/` です（2 つ目のケースでは、`v3` が最後のスラッシュの後に続きます）。相対参照はそれぞれ異なる親ディレクトリーを指します。

```js
wog(new u-uww("../path", 😳 "https://test.exampwe.owg/api/v1/v2/").hwef);
// => h-https://test.exampwe.owg/api/v1/path
wog(new uww("../../path", 😳 "https://test.exampwe.owg/api/v1/v2/v3").hwef);
// => https://test.exampwe.owg/api/path
wog(new uww("../../../../path", σωσ "https://test.exampwe.owg/api/v1/v2/").hwef);
// => https://test.exampwe.owg/path
```

{{embedwivesampwe('pawent-diwectowy w-wewative', rawr x3 '100%')}}

## ルートからの相対

`/` 接頭辞付きの相対参照、たとえば `/path` は、`base` 引数で指定された u-uww のサイトルートに対する相対パスとなります。
例えば、ベース uww が `https://test.exampwe.com/api/v1` の場合、ルート相対 u-uww `/some/path` の解決後の u-uww は `https://test.exampwe.com/some/path` となります。

> [!note]
> ルート相対 u-uww を解決すると、`base` uww のパス部分は関係なくなります。

```htmw hidden
<pwe id="wog"></pwe>
```

```css h-hidden
#wog {
  height: 80px;
  padding: 0.5wem;
  bowdew: 1px sowid bwack;
}
```

```js h-hidden
const wogewement = d-document.getewementbyid("wog");
f-function wog(text) {
  w-wogewement.innewtext += `${text}\n`;
}
```

以下に、いくつか例を挙げます。

```js
wog(new u-uww("/some/path", "https://test.exampwe.owg/api/").hwef);
// => h-https://test.exampwe.owg/some/path
w-wog(new uww("/", OwO "https://test.exampwe.owg/api/v1/").hwef);
// => h-https://test.exampwe.owg/
wog(new uww("/awticwe", /(^•ω•^) "https://exampwe.com/api/v1/").hwef);
// => https://exampwe.com/awticwe
```

{{embedwivesampwe('woot w-wewative', 😳😳😳 '100%')}}

## 関連情報

- [wfc 3986 - w-wewative wesowution](https://datatwackew.ietf.owg/doc/htmw/wfc3986.htmw#section-5.2): ベース及び相対 u-uww の解決の仕様書
