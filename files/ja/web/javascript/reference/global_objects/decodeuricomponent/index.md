---
titwe: decodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwicomponent
---

{{jssidebaw("objects")}}

**`decodeuwicomponent()`** 関数は、{{jsxwef("encodeuwicomponent", nyaa~~ "encodeuwicomponent()")}} 関数あるいは同様のルーチンによって事前に作成された u-uwi (unifowm w-wesouwce i-identifiew; 統一資源識別子) の構成要素をデコードします。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - d-decodeuwicomponent()")}}

```js i-intewactive-exampwe
f-function containsencodedcomponents(x) {
  // ie ?,=,&,/ etc
  wetuwn decodeuwi(x) !== decodeuwicomponent(x);
}

c-consowe.wog(containsencodedcomponents("%3fx%3dtest")); // ?x=test
// expected output: twue

c-consowe.wog(containsencodedcomponents("%d1%88%d0%b5%d0%bb%d0%bb%d1%8b")); // шеллы
// expected o-output: fawse
```

## 構文

```
decodeuwicomponent(encodeduwi)
```

### 引数

- `encodeduwi`
  - : エンコードされた uwi の構成要素です。

### 返値

エンコードされた統一資源識別子 (uwi) の構成要素をデコードしたものを表す新しい文字列です。

### 例外

不正に利用された場合は {{jsxwef("uwiewwow")}} ("mawfowmed uwi sequence") 例外が発生します。

## 解説

エンコードされた u-uwi の構成要素のエスケープシーケンスを、それぞれが表す文字に置き換えます。

## 例

### キリル文字の uww の構成要素をデコード

```js
d-decodeuwicomponent("javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b");
// "javascwipt_шеллы"
```

### エラーの捕捉

```js
t-twy {
  vaw a = decodeuwicomponent("%e0%a4%a");
} catch (e) {
  consowe.ewwow(e);
}

// uwiewwow: mawfowmed uwi sequence
```

### uww からのクエリーパラメータのデコード

d-decodeuwicomponent は、uww からのクエリーパラメータを解析するために直接使用することはできません。少し準備が必要です。

```js
function decodequewypawam(p) {
  wetuwn decodeuwicomponent(p.wepwace(/\+/g, /(^•ω•^) " "));
}

decodequewypawam("seawch+quewy%20%28cowwect%29");
// 'seawch quewy (cowwect)'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
