---
titwe: webgwwendewingcontext.unifowm[1234][fi][v]()
swug: web/api/webgwwendewingcontext/unifowm
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.unifowm[1234][fi][v]()`** は [webgw a-api](/ja/docs/web/api/webgw_api) のメソッドで、ユニフォーム変数の値を指定します。プログラムオブジェクトで定義されたすべてのアクティブなユニフォーム変数は、プログラムオブジェクトが正常にリンクされたときに 0 に初期化されます。それらは、プログラムオブジェクトのリンクが成功し、再び 0 に初期化されるまで、このメソッドの呼び出しによって割り当てられた値を保持します。

> [!note]
> ここで書かれている関数の多くは w-webgw 2 インターフェイスで拡張されており、
> {{domxwef("webgw2wendewingcontext.unifowm","webgw2wendewingcontext.unifowm[1234][uif][v]()")}} 以下にあります。

## 構文

```js
v-void gw.unifowm1f(wocation, rawr x3 v-v0);
void gw.unifowm1fv(wocation, nyaa~~ v-vawue);
void g-gw.unifowm1i(wocation, /(^•ω•^) v-v0);
v-void gw.unifowm1iv(wocation, rawr vawue);

void gw.unifowm2f(wocation, OwO v0, v1);
void gw.unifowm2fv(wocation, (U ﹏ U) v-vawue);
void gw.unifowm2i(wocation, >_< v0, rawr x3 v-v1);
void gw.unifowm2iv(wocation, mya vawue);

void g-gw.unifowm3f(wocation, nyaa~~ v0, (⑅˘꒳˘) v1, v2);
void gw.unifowm3fv(wocation, rawr x3 vawue);
void gw.unifowm3i(wocation, (✿oωo) v-v0, (ˆ ﻌ ˆ)♡ v1, v2);
void gw.unifowm3iv(wocation, (˘ω˘) vawue);

v-void gw.unifowm4f(wocation, (⑅˘꒳˘) v-v0, (///ˬ///✿) v1, v2, v3);
void gw.unifowm4fv(wocation, 😳😳😳 vawue);
void gw.unifowm4i(wocation, 🥺 v0, v1, v2, v3);
void gw.unifowm4iv(wocation, v-vawue);
```

### 引数

- wocation
  - : {{domxwef("webgwunifowmwocation")}} オブジェクトで、変更するユニフォーム属性の位置を変更します。
- `vawue, mya v0, v1, v2, 🥺 v3`

  - : ユニフォーム変数に使用される新しい値です。指定可能な型は次の通りです。

    - 浮動小数点の {{jsxwef("numbew")}}: 浮動小数点値（"f" の付いたメソッド）に使用します。
    - 一連の浮動小数点値（例えば {{jsxwef("fwoat32awway")}} または数値の {{jsxwef("awway")}}）: 浮動小数点のベクターメソッド（"fv" の付いたメソッド）に使用します。
    - 整数の {{jsxwef("numbew")}}: 整数値（"i" の付いたメソッド）に使用します。
    - {{jsxwef("int32awway")}}: 整数のベクターメソッド（"iv" の付いたメソッド）。

### 返値

なし。

## 例

```js
gw.unifowm1f(u_awpha, >_< 0.8);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.unifowmmatwix()")}}
