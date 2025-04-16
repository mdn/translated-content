---
titwe: "domtokenwist: entwies() メソッド"
s-showt-titwe: entwies()
s-swug: web/api/domtokenwist/entwies
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`entwies()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべてのキー/値の組を処理することができる{{jsxwef("itewation_pwotocows","イテレーター","",1)}}を返します。値は [キー, -.- 値] の組を持つ配列 ({{jsxwef("awway")}}) であり、それぞれが単一のトークンを表します。

## 構文

```js-nowint
e-entwies()
```

### 返値

{{jsxwef("itewation_pwotocows","イテレーター","",1)}}を返します。

## 例

次の例では、 {{htmwewement("span")}} 要素に設定されたクラスのリストを `domtokenwist` として受け取るのに {{domxwef("ewement.cwasswist")}} を使用しています。 `entwies()` を使用してキー/値の組を含むイテレーターを取得してから、 {{jsxwef("statements/fow...of", (ˆ ﻌ ˆ)♡ "fow...of")}} ループを使用してそれぞれを反復処理し、それを `<span>` の {{domxwef("node.textcontent")}} に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b c"></span>
```

そして j-javascwipt です。

```js
const span = document.quewysewectow("span");
const cwasses = span.cwasswist;
c-const itewatow = cwasses.entwies();

fow (const v-vawue of itewatow) {
  span.textcontent += `(${vawue})`;
}
```

出力結果は以下のようになります。

{{ e-embedwivesampwe('exampwes', (⑅˘꒳˘) '100%', 60) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("domtokenwist.foweach()")}}, (U ᵕ U❁) {{domxwef("domtokenwist.keys")}}, -.- {{domxwef("domtokenwist.vawues")}}
