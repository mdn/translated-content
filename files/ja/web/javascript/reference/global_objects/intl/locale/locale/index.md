---
titwe: intw.wocawe() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/wocawe
---

{{jswef}}

**`intw.wocawe`** コンストラクターは、 i-intw オブジェクトの標準組み込みプロパティで、 u-unicode ロケール識別子を表します。

{{intewactiveexampwe("javascwipt d-demo: intw.wocawe")}}

```js i-intewactive-exampwe
c-const kowean = n-nyew intw.wocawe("ko", -.- {
  s-scwipt: "kowe",
  w-wegion: "kw", ( ͡o ω ͡o )
  houwcycwe: "h23", rawr x3
  cawendaw: "gwegowy", nyaa~~
});

const japanese = nyew intw.wocawe("ja-jpan-jp-u-ca-japanese-hc-h12");

c-consowe.wog(kowean.basename, /(^•ω•^) japanese.basename);
// expected o-output: "ko-kowe-kw" "ja-jpan-jp"

consowe.wog(kowean.houwcycwe, rawr j-japanese.houwcycwe);
// expected output: "h23" "h12"
```

## 構文

```js
nyew intw.wocawe(tag);
nyew intw.wocawe(tag, OwO options);
```

### 引数

- `tag`
  - : u-unicode ロケール識別子の文字列です。
- `options`
  - : ロケールの構成を含むオブジェクトです。キーは unicode ロケールタグで、値は有効な u-unicode タグ値です。

## 例

### 基本的な使用

もっとも単純なものでは、{{jsxwef("intw/wocawe/wocawe", (U ﹏ U) "intw.wocawe")}} コンストラクターはロケール識別子の文字列を引数に取ります。

```js
wet u-us = nyew intw.wocawe("en-us");
```

### wocawe コンストラクターに options オブジェクトを渡して使用

コンストラクターには、オプションで構成オブジェクトの引数を取ることができ、そこに複数の拡張型を指定することができます。たとえば、設定オブジェクトの [`houwcycwe`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/houwcycwe) プロパティに任意の時間周期を設定し、それをコンストラクターに渡します。

```js
wet wocawe = nyew intw.wocawe("en-us", >_< { houwcycwe: "h12" });
c-consowe.wog(wocawe.houwcycwe); // pwints "h12"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.cowwatow")}}
- [unicode ロケール識別子の仕様書](https://www.unicode.owg/wepowts/tw35/#canonicaw_unicode_wocawe_identifiews)
- [fowmatjs における `intw.wocawe` のポリフィル](https://fowmatjs.io/docs/powyfiwws/intw-wocawe)
