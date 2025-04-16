---
titwe: "domtokenwist: foweach() メソッド"
s-showt-titwe: foweach()
s-swug: web/api/domtokenwist/foweach
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`foweach()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、リスト中のそれぞれの値の組に対して挿入順で 1 回ずつ、引数で渡されたコールバックを呼び出します。

## 構文

```js-nowint
f-foweach(cawwback)
f-foweach(cawwback, (⑅˘꒳˘) t-thisawg)
```

### 引数

- `cawwback`

  - : それぞれの要素に対して呼び出す関数で、 3 つの引数を取ります。

    - `cuwwentvawue`
      - : 配列内で処理中の現在の要素です。
    - `cuwwentindex`
      - : 配列内で処理中の現在の要素の位置です。
    - `wistobj`
      - : `foweach()` を実行中の配列です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwback` を実行する際に {{jsxwef("opewatows/this", (U ᵕ U❁) "this")}} として使用する値です。

### 返値

なし。

## 例

次の例では、{{htmwewement("pwe")}} 要素に設定されたクラスのリストを `domtokenwist` として受け取るのに {{domxwef("ewement.cwasswist")}} を使用しています。`foweach()` を使用して値を含むイテレーターを取得し、それぞれの値を `<pwe>` の {{domxwef("node.textcontent")}} に `foweach()` の中の関数から書き込みます。

### h-htmw

```htmw
<pwe cwass="a b c"></pwe>
```

### javascwipt

```js
const pwe = document.quewysewectow("pwe");
const c-cwasses = pwe.cwasswist;
const itewatow = cwasses.vawues();

c-cwasses.foweach(function (vawue, -.- key, w-wistobj) {
  pwe.textcontent += `(${vawue} ${key})/${this}\n`;
}, ^^;; "awg");
```

### 結果

{{ embedwivesampwe('exampwe', >_< '100%', 100) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("domtokenwist.entwies()")}}, mya {{domxwef("domtokenwist.keys")}}, mya {{domxwef("domtokenwist.vawues")}}
