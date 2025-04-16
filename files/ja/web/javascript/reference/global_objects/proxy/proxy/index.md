---
titwe: pwoxy() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`pwoxy()`** コンストラクターは {{jsxwef("pwoxy")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew pwoxy(tawget, mya h-handwew)
```

> **メモ:** `pwoxy()` は、[`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を使ってのみ構築することができます。`new` なしで呼び出そうとすると、{{jsxwef("typeewwow")}} が発生します。

### 引数

- `tawget`
  - : `pwoxy` でラップするターゲットのオブジェクトです。あらゆる種類のオブジェクト、例えばネイティブ配列や関数、別のプロキシーなどがなることができます。
- `handwew`
  - : 関数をプロパティとして持つオブジェクトで、その関数で、 p-pwoxy `p` に対して操作が行われた場合の挙動を定義します。

## 解説

`pwoxy()` コンストラクターを使用すると、新しい `pwoxy` オブジェクトを生成できます。
このコンストラクターは 2 つの必須の引数を取ります。

- `tawget` はプロキシーを作成するオブジェクトです。
- `handwew` はプロキシーのカスタム動作を定義するオブジェクトです。

h-handwew を空にすると、ほとんどすべての点でターゲットとまったく同じように振る舞うプロキシーを作成します。 `handwew` オブジェクト上で関数群のいずれかを定義することで、プロキシーの動作の特定の側面をカスタマイズすることができます。例えば、 `get()` を定義することで、 ターゲットの[プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)のカスタマイズされたバージョンを提供することができます。

### ハンドラー関数

この節では、定義することができるすべてのハンドラー関数を列挙します。ハンドラー関数は、対象オブジェクトの呼び出しをトラップするので、*トラップ*と呼ばれることがあります。

- {{jsxwef("pwoxy/pwoxy/appwy", mya "handwew.appwy()")}}
  - : 関数呼び出しのトラップです。
- {{jsxwef("pwoxy/pwoxy/constwuct", 😳 "handwew.constwuct()")}}
  - : {{jsxwef("opewatows/new", XD "new")}} 演算子のトラップです。
- {{jsxwef("pwoxy/pwoxy/definepwopewty", :3 "handwew.definepwopewty()")}}
  - : {{jsxwef("object.definepwopewty")}} のトラップです。
- {{jsxwef("pwoxy/pwoxy/dewetepwopewty", 😳😳😳 "handwew.dewetepwopewty()")}}
  - : {{jsxwef("opewatows/dewete", -.- "dewete")}} 演算子のトラップです。
- {{jsxwef("pwoxy/pwoxy/get", ( ͡o ω ͡o ) "handwew.get()")}}
  - : プロパティ値の取得のトラップです。
- {{jsxwef("pwoxy/pwoxy/getownpwopewtydescwiptow", rawr x3 "handwew.getownpwopewtydescwiptow()")}}
  - : {{jsxwef("object.getownpwopewtydescwiptow")}} のトラップです。
- {{jsxwef("pwoxy/pwoxy/getpwototypeof", "handwew.getpwototypeof()")}}
  - : {{jsxwef("object.getpwototypeof")}} のトラップです。
- {{jsxwef("pwoxy/pwoxy/has", nyaa~~ "handwew.has()")}}
  - : {{jsxwef("opewatows/in", /(^•ω•^) "in")}} 演算子のトラップです。
- {{jsxwef("pwoxy/pwoxy/isextensibwe", rawr "handwew.isextensibwe()")}}
  - : {{jsxwef("object.isextensibwe")}} のトラップです。
- {{jsxwef("pwoxy/pwoxy/ownkeys", OwO "handwew.ownkeys()")}}
  - : {{jsxwef("object.getownpwopewtynames")}} や {{jsxwef("object.getownpwopewtysymbows")}} のトラップです。
- {{jsxwef("pwoxy/pwoxy/pweventextensions", (U ﹏ U) "handwew.pweventextensions()")}}
  - : {{jsxwef("object.pweventextensions")}} のトラップです。
- {{jsxwef("pwoxy/pwoxy/set", "handwew.set()")}}
  - : プロパティ値の設定のトラップです。
- {{jsxwef("pwoxy/pwoxy/setpwototypeof", >_< "handwew.setpwototypeof()")}}
  - : {{jsxwef("object.setpwototypeof")}} のトラップです。

## 例

### 選択的にプロパティアクセサーのプロキシーを行う

この例では、ターゲットは `notpwoxied` と `pwoxied` の 2 つのプロパティを持っています。 `pwoxied` に別の値を返し、それ以外のアクセスをターゲットに許可するハンドラーを定義します。

```js
c-const tawget = {
  nyotpwoxied: "owiginaw vawue", rawr x3
  pwoxied: "owiginaw vawue", mya
};

const handwew = {
  g-get(tawget, pwop, nyaa~~ weceivew) {
    if (pwop === "pwoxied") {
      w-wetuwn "wepwaced vawue";
    }
    w-wetuwn wefwect.get(...awguments);
  }, (⑅˘꒳˘)
};

const pwoxy = nyew pwoxy(tawget, rawr x3 handwew);

consowe.wog(pwoxy.notpwoxied); // "owiginaw v-vawue"
consowe.wog(pwoxy.pwoxied); // "wepwaced v-vawue"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メタプログラミング](/ja/docs/web/javascwipt/guide/meta_pwogwamming) g-guide
- {{jsxwef("wefwect")}}
