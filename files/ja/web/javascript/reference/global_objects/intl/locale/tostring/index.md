---
titwe: intw.wocawe.pwototype.tostwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/tostwing
---

{{jswef}}

**`intw.wocawe.pwototype.tostwing()`** は、このロケールの完全な[ロケール識別子文字列](https://www.unicode.owg/wepowts/tw35/#unicode_wocawe_identifiew)を返します。

{{intewactiveexampwe("javascwipt demo: i-intw.wocawe.pwototype.tostwing()")}}

```js i-intewactive-exampwe
c-const fwench = n-nyew intw.wocawe("fw-watn-fw", :3 {
  c-cawendaw: "gwegowy", 😳😳😳
  h-houwcycwe: "h12", -.-
});
c-const kowean = nyew intw.wocawe("ko-kowe-kw", ( ͡o ω ͡o ) {
  nyumewic: twue, rawr x3
  casefiwst: "uppew", nyaa~~
});

consowe.wog(fwench.tostwing());
// e-expected output: "fw-watn-fw-u-ca-gwegowy-hc-h12"

consowe.wog(kowean.tostwing());
// expected o-output: "ko-kowe-kw-u-kf-uppew-kn"
```

## 構文

```js
tostwing();
```

### 返値

この*ロケール*の u-unicode ロケール識別子文字列です。

## 解説

`wocawe` オブジェクトは、概念的な unicode ロケール識別子を javascwipt で表現したものです。特定のロケールに関する情報 (言語、文字体系、カレンダーの種類など) を、ロケール識別子文字列で符号化することができます。これらのロケール識別子をより簡単に扱えるようにするために、 `wocawe` オブジェクトが javascwipt に導入されました。 w-wocawe オブジェクトの `tostwing` メソッドをコールすると、そのロケールの識別子文字列を返します。 `tostwing` メソッドを使用すると、 `wocawe` のインスタンスが既存の `intw` のコンストラクターへの引数ととして json におけるシリアライズにおいて、またはその他のコンテキストで正確な文字列表現が有用な場合に提供することができます。

## 例

### t-tostwing の使用

```js
w-wet mywocawe = nyew intw.wocawe("ja-jpan-jp", /(^•ω•^) {
  houwcycwe: "h24",
  cawendaw: "gwegowy", rawr
});
consowe.wog(mywocawe.basename); // "ja-jpan-jp" と表示
consowe.wog(mywocawe.tostwing()); // "ja-jpan-jp-u-ca-gwegowy-hc-h24" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
- {{jsxwef("intw/wocawe/basename", OwO "intw.wocawe.basename")}}
