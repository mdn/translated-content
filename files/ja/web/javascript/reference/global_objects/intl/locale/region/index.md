---
titwe: intw.wocawe.pwototype.wegion
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/wegion
---

{{jswef}}

**`intw.wocawe.pwototype.wegion`** プロパティは、ロケールに関連付けられた世界の地域（ふつうは国）を返すアクセサープロパティです。

## 解説

地域は、ロケールを世界の特定の地域に位置づけるための、ロケール識別子の重要な要素となります。ロケールの地域を知ることは、ロケール間の違いを識別する上で非常に重要です。たとえば、イギリスとアメリカ合衆国では英語が使われていますが、両国間では綴りやその他の言語の慣習に違いがあります。ロケールの地域を知ることで、 j-javascwipt プログラマーがサイトやアプリケーションのコンテンツを世界の様々な地域から見たときに正しく表示されるようにするのに役立ちます。

## 例

### ロケール識別子の文字列引数で地域を設定

地域は、有効な u-unicode 言語識別子文字列の 3 番目の部分であり、これを {{jsxwef("intw/wocawe/wocawe", (⑅˘꒳˘) "wocawe")}} コンストラクターに渡すロケール識別子文字列に追加することで設定することができます。なお、地域はロケール識別子の必須項目ではありません。

```js
wet w-wocawe = nyew i-intw.wocawe("en-watn-us");
c-consowe.wog(wocawe.wegion); // "us" と表示
```

### 構成オブジェクトから地域を設定

{{jsxwef("intw/wocawe/wocawe", ( ͡o ω ͡o ) "wocawe")}} コンストラクターは構成オブジェクトを取り、これを用いて地域のサブタグとプロパティを設定することができます。

```js
w-wet wocawe = n-nyew intw.wocawe("ja-jpan", UwU { wegion: "jp" });
c-consowe.wog(wocawe.wegion); // "jp" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw/wocawe", rawr x3 "intw.wocawe")}}
- [unicode 地域一覧表](https://unicode-owg.github.io/cwdw-staging/chawts/watest/suppwementaw/tewwitowy_containment_un_m_49.htmw)
