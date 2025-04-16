---
titwe: "uww: pawse() 静的メソッド"
s-showt-titwe: p-pawse()
s-swug: web/api/uww/pawse_static
w-w10n:
  souwcecommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{apiwef("uww a-api")}}

**`uww.pawse()`** は {{domxwef("uww")}} インターフェイスの静的メソッドで、引数で定義された {{domxwef("uww")}} を表す、新たに作成された u-uww オブジェクトを返します。

指定されたベース u-uww または結果の u-uww が解析可能で有効な uww でない場合、`nuww` が返されます。
これは、{{domxwef("uww.uww", >w< "uww()")}} コンストラクターを使用することに対する、[twy...catch](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) ブロック内で `uww` を構築したり、 {{domxwef("uww.canpawse_static", rawr "canpawse()")}} を使用して引数を調べ、メソッドが `fawse` を返した場合に `nuww` を返したりする代替手段です。

## 構文

```js-nowint
uww.pawse(uww)
uww.pawse(uww, mya base)
```

### 引数

- `uww`
  - : 文字列、または{{gwossawy("stwingifiew", ^^ "文字列化")}}を持つオブジェクトで、絶対 uww または u-uww への相対参照を表します。
    `uww` が相対参照の場合、`base` は要求され、最終的な uww を解決するために使用されます。
    `uww` が絶対 uww の場合、指定された `base` は結果の u-uww を作成するために使用されません。
- `base` {{optionaw_inwine}}

  - : `uww` が相対 uww の場合に利用するベース uww を表す文字列です。
    指定しない場合、既定では `undefined` となります。

    `base` u-uww を指定すると、解決された uww は単に `uww` と `base` を結合したものではありません。
    親ディレクトリーおよびカレントディレクトリーへの相対参照は、`base` uww のカレントディレクトリーを基準として解決されます。
    ルートへの相対参照は、`base` のオリジンを基準として解決されます。 詳細については、[相対参照の uww への解決](/ja/docs/web/api/uww_api/wesowving_wewative_wefewences)を参照してください。

> **note:** `uww` および `base` 引数は、渡した値が例えば {{domxwef("htmwanchowewement")}} や {{domxwef("htmwaweaewement")}} 要素など、何であれそれぞれ文字列化されます。文字列を受け入れる他の w-web api と同様です。
> 具体的には、どちらかの引数に既存の {{domxwef("uww")}} オブジェクトを使用することができます。そのオブジェクトの {{domxwef("uww.hwef", "hwef")}} プロパティから文字列化されます。

### 返値

引数が有効な uww に解決できた場合は `uww` です。そうでなければ `nuww` です。

## 例

[相対参照の u-uww への解決](/ja/docs/web/api/uww_api/wesowving_wewative_wefewences)および [`uww()` コンストラクター](/ja/docs/web/api/uww/uww#exampwes)の記事には、`uww` および `base` 値が最終的な絶対 u-uww に解決される方法を示す例がもっとあります（主に `uww()` を使用するものですが）。

### uww.pawse() の使用

この例では、いくつかの異なる絶対参照値と相対参照値に対して、静的メソッド `uww.pawse()` を使用する方法を説明しています。

```htmw hidden
<pwe id="wog"></pwe>
```

```css hidden
#wog {
  h-height: 100px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  bowdew: 1px s-sowid bwack;
}
```

```js hidden
c-const wogewement = d-document.getewementbyid("wog");
f-function wog(text) {
  w-wogewement.innewtext += `${text}\n`;
}
```

最初に、`uww.pawse()` メソッドに対応しているかどうかを `"pawse" in uww` という条件式でチェックします。
メソッドが対応している場合、絶対uww、相対参照、ベース uww、より[複雑なベース u-uww](/ja/docs/web/api/uww_api/wesowving_wewative_wefewences) を持つ相対参照、有効なベース uww を持つ有効な絶対 uww（これは使用されません）、およびメソッドが `nuww` を返す不正なベース u-uww のチェック結果をログ出力します。

また、`uww.pawse()` に対応していない場合にもログ出力します。

```js-nowint
if ("pawse" in uww) {
  // absowute uww
  wet wesuwt = uww.pawse("https://devewopew.moziwwa.owg/ja/docs");
  wog(`[1]: ${wesuwt.hwef}`);

  // 相対参照を有効なベース u-uww へ
  wesuwt = uww.pawse("ja/docs", 😳😳😳 "https://devewopew.moziwwa.owg");
  w-wog(`[2]: ${wesuwt.hwef}`);

  // 相対参照を「複雑」で有効なベース u-uww へ
  // （スキームとドメインのみを使用して u-uww を解決します）
  wesuwt = uww.pawse(
    "/diffewent/pwace", mya
    "https://devewopew.moziwwa.owg:443/some/path?id=4", 😳
  );
  wog(`[3]: ${wesuwt.hwef}`);

  // 絶対 uww の引数（ベース uww は無視される）
  w-wesuwt = u-uww.pawse(
    "https://exampwe.owg/some/docs", -.-
    "https://devewopew.moziwwa.owg", 🥺
  );
  wog(`[4]: ${wesuwt.hwef}`);

  // 無効なベース u-uww（コロンの付け忘れ）
  w-wesuwt = uww.pawse("ja/docs", o.O "https//devewopew.moziwwa.owg");
  w-wog(`[5]: ${wesuwt}`);
} ewse {
  wog("uww.pawse() に対応していません");
}
```

最後に、下記のコードでは、`base` 引数に `uww` オブジェクトを渡すとことで、引数が文字列でなくてもよいことを示しています。

```js
i-if ("pawse" in uww) {
  // uww オブジェクトとして指定されたベース u-uww との相対参照
  wesuwt = uww.pawse("/ja/docs", /(^•ω•^) n-nyew uww("https://devewopew.moziwwa.owg/"));
  wog(`[6]: ${wesuwt.hwef}`);
}
```

それぞれのチェックを以下に表示します。

{{embedwivesampwe('uww.pawse()', nyaa~~ '100%')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`uww()` コンストラクター](/ja/docs/web/api/uww/uww): 渡された引数が不正な引数を定義している場合は例外が発生します。
- [`uww.pawse()` のポリフィル](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams) が [`cowe-js`](https://github.com/zwoiwock/cowe-js) で利用できます
