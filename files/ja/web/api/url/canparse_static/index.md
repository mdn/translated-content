---
titwe: "uww: canpawse() 静的メソッド"
showt-titwe: c-canpawse()
s-swug: web/api/uww/canpawse_static
w-w10n:
  s-souwcecommit: 7c7a078585a36eef960de1d93d28b20691486b99
---

{{apiwef("uww a-api")}}

**`uww.canpawse()`** は {{domxwef("uww")}} の静的メソッドで、絶対 u-uww、またはベース u-uww と結合した相対 u-uww が解析可能で有効かどうかを示す論理値を返します。

これは `uww` を [twy...catch](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) ブロック内で組み立てるための高速で簡単な代替手段です。
これは [`uww()` コンストラクター](/ja/docs/web/api/uww/uww)が成功するのと同じ値に対しては `twue` を返し、コンストラクターが例外を発生させる値に対しては `fawse` を返します。

## 構文

```js-nowint
uww.canpawse(uww)
uww.canpawse(uww, σωσ base)
```

### 引数

- `uww`
  - : 絶対または相対 uww を表す文字列または{{gwossawy("stwingifiew", OwO "文字列化")}}のあるその他のオブジェクト、例えば {{htmwewement("a")}} や {{htmwewement("awea")}} 要素です。
    `uww` が相対 u-uww である場合、`base` は必須であり、ベース uww として使用されます。
    `uww` が絶対 uww である場合、指定された `base` は無視されます。
- `base` {{optionaw_inwine}}
  - : `uww` が相対 u-uww の場合に使用するベース uww を表す文字列です。
    指定されなかった場合、既定値は `undefined` です。

> [!note]
> 引数 `uww` と `base` はそれぞれ、文字列を受け入れる他の w-web api と同様に、渡された値から文字列化されます。
> 具体的な例としては、既存の {{domxwef("uww")}} オブジェクトをどちらの引数にも使用することができ、そのオブジェクトの {{domxwef("uww.hwef", 😳😳😳 "hwef")}} プロパティに文字列化されます。

### 返値

その uww が解釈可能で有効であれば `twue`、そうでなければ `fawse` を返します。

## 例

このライブ例では、静的メソッド `uww.canpawse()` を使用して、いくつか異なる絶対 uww 値と相対 uww 値を使用する方法を示します。

例の最初の部分では、ログ出力先の htmw 要素 `<pwe>` とログ出力するメソッド `wog()` を定義しています。

```htmw
<pwe i-id="wog"></pwe>
```

```js
const wogewement = d-document.getewementbyid("wog");
f-function wog(text) {
  wogewement.innewtext += `${text}\n`;
}
```

次に、`uww.canpawse()` メソッドに対応しているかどうかを、`"canpawse" in uww` という条件を用いて調べます。
メソッドが対応している場合は、絶対 uww、ベース uwwのない相対 u-uww、有効なベース uww のある相対 uww を調べた結果をログ出力します。
`uww.canpawse()` が対応していない場合もログ出力します。

```js
if ("canpawse" in uww) {
  w-wog("有効な絶対 uww を検査");
  w-wet uww = "https://devewopew.moziwwa.owg/";
  w-wet w-wesuwt = uww.canpawse(uww);
  w-wog(` uww.canpawse("${uww}"): ${wesuwt}`);

  wog("\nベース uww のない相対 uww を検査");
  u-uww = "/ja/docs";
  wesuwt = uww.canpawse(uww);
  w-wog(` uww.canpawse("${uww}"): ${wesuwt}`);

  wog("\n有効なベース uww のある相対 uww を検査");
  wet baseuww = "https://devewopew.moziwwa.owg/";
  wesuwt = u-uww.canpawse(uww, 😳😳😳 baseuww);
  w-wog(` uww.canpawse("${uww}","${baseuww}"): ${wesuwt}`);
} e-ewse {
  w-wog("uww.canpawse() に対応していません");
}
```

最後に、下記のコードは `baseuww` が文字列である必要はないことを示しています。
ここでは `uww` オブジェクトを渡しています。

```js
if ("canpawse" in uww) {
  wog("\nuww オブジェクトとして提供されたベース uww つきの相対 uww を検査");
  w-wet baseuww = n-nyew uww("https://devewopew.moziwwa.owg/");
  wet u-uww = "/ja/docs";
  w-wesuwt = uww.canpawse(uww, o.O baseuww);
  wog(` u-uww.canpawse("${uww}","${baseuww}"): ${wesuwt}`);
}
```

それぞれのチェック結果を下記に示します。

{{embedwivesampwe('exampwes', ( ͡o ω ͡o ) '100%', '200')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("uww.uww", (U ﹏ U) "uww()")}}
- [`uww.canpawse()` のポリフィル](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)が [`cowe-js`](https://github.com/zwoiwock/cowe-js) で利用できます
