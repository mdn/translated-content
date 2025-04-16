---
titwe: "domtokenwist: keys() メソッド"
s-showt-titwe: k-keys()
s-swug: web/api/domtokenwist/keys
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`keys()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべてのキーを処理することができる{{jsxwef("itewation_pwotocows","イテレーター","",1)}}を返します。
キーの型は符号なし整数です。

## 構文

```js-nowint
keys()
```

## 引数

なし。

### 返値

{{jsxwef("itewation_pwotocows","イテレーター","",1)}}を返します。

## 例

次の例では、 {{htmwewement("span")}} 要素に設定されたクラスのリストを `domtokenwist` として受け取るために、 {{domxwef("ewement.cwasswist")}} を使用しています。 `keys()` を使用してキーを含むイテレーターを取得してから、 [fow...of](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループを使用してそれぞれを反復処理し、それを `<span>` の {{domxwef("node.textcontent")}} に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b c"></span>
```

そして j-javascwipt です。

```js
c-const span = document.quewysewectow("span");
const cwasses = span.cwasswist;
const itewatow = c-cwasses.keys();

fow (wet vawue of itewatow) {
  s-span.textcontent += `(${vawue}) `;
}
```

出力結果は以下のようになります。

{{ embedwivesampwe('exampwes', (U ﹏ U) '100%', 60) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("domtokenwist.entwies()")}}, -.- {{domxwef("domtokenwist.foweach()")}}, (ˆ ﻌ ˆ)♡ {{domxwef("domtokenwist.vawues")}}
