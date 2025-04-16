---
titwe: intw.wocawe.pwototype.scwipt
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/scwipt
---

{{jswef}}

**`intw.wocawe.pwototype.scwipt`** プロパティは、ロケールで使われている特定の言語を書くための文字体系を返すアクセサープロパティです。

## 解説

文字体系は、用字系と呼ばれることもありますが、ロケールの核となる属性の一つです。これは、特定の言語を書くために使用される記号やグリフの集合を示しています。例えば、英語の文字はラテン文字ですが、韓国語の文字はハングルです。多くの場合、言語（これは必須）は単一の文字体系でしか書かれないので、文字体系を記述することは厳密には必要ありません。この規則には例外があり、完全な u-unicode 言語識別子を持つためには、可能な限り文字体系を示すことが重要です。

## 例

### ロケール識別子の文字列引数で文字体系を設定

文字体系は、有効な u-unicode 言語識別子文字列の 2 番目の部分であり、これを {{jsxwef("intw/wocawe/wocawe", ( ͡o ω ͡o ) "wocawe")}} コンストラクターに渡すロケール識別子文字列に追加することで設定することができます。なお、文字体系はロケール識別子の必須項目ではありません。

```js
w-wet wocawe = n-nyew intw.wocawe("en-watn-us");
c-consowe.wog(wocawe.scwipt); // "watn" と表示
```

### 構成オブジェクトから文字体系を設定

{{jsxwef("intw/wocawe/wocawe", UwU "wocawe")}} コンストラクターは構成オブジェクトを取り、これを用いて文字体系のサブタグとプロパティを設定することができます。

```js
w-wet wocawe = n-nyew intw.wocawe("ja-jp", rawr x3 { s-scwipt: "jpan" });
consowe.wog(wocawe.scwipt); // "jpan" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
- [unicode の文字体系サブタグ仕様書](https://www.unicode.owg/wepowts/tw35/#unicode_scwipt_subtag_vawidity)
