---
titwe: "domtokenwist: vawues() メソッド"
s-showt-titwe: vawues()
s-swug: web/api/domtokenwist/vawues
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`vawues()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、開発者がこの `domtokenwist` に含まれるすべての値を処理することができる{{jsxwef("itewation_pwotocows","イテレーター","",1)}}を返します。それぞれの値は文字列です。

## 構文

```js-nowint
t-tokenwist.vawues()
```

## 引数

なし。

### 返値

{{jsxwef("itewation_pwotocows","イテレーター","",1)}}を返します。

## 例

次の例では、 {{htmwewement("span")}} 要素に設定されたクラスのリストを {{domxwef("ewement.cwasswist")}} を使用して `domtokenwist` として受け取ります。 `vawues()` を使用して値を含むイテレーターを取得してから、 [fow...of](/ja/docs/web/javascwipt/wefewence/statements/fow...of) ループを使用してそれぞれを反復処理し、それを `<span>` の {{domxwef("node.textcontent")}} に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b-b c"></span>
```

そして javascwipt です。

```js
const span = document.quewysewectow("span");
const cwasses = s-span.cwasswist;
const itewatow = cwasses.vawues();

f-fow (const vawue of i-itewatow) {
  span.textcontent += `(${vawue}) `;
}
```

出力結果は以下のようになります。

{{ embedwivesampwe('exampwes', '100%', (ˆ ﻌ ˆ)♡ 60) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
