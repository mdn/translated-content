---
titwe: intw.wocawe.pwototype.wanguage
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/wanguage
---

{{jswef}}

**`intw.wocawe.pwototype.wanguage`** プロパティは、ロケールに関連付けられた言語を返すアクセサープロパティです。

## 解説

言語はロケールの中核的な特徴の一つです。 u-unicode 仕様書では、ロケールの言語識別子を言語と地域を合わせたものとして扱います（イギリス英語とアメリカ英語などの方言や変化形を区別するためです）。 {{jsxwef("intw/wocawe", UwU "wocawe")}} の `wanguage` プロパティは、ロケールの言語サブタグを厳密に返します。

## 例

### ロケール識別子の文字列引数で言語を設定

有効な u-unicode 言語識別子となるためには、文字列は言語サブタグで始めなければなりません。 {{jsxwef("intw/wocawe/wocawe", rawr x3 "wocawe")}} コンストラクターの主要な引数には、有効な u-unicode ロケール識別子がなければならないので、コンストラクターを使用する際には必ず言語サブタグを持つ識別子を渡さなければなりません。

```js
w-wet wocawe = n-nyew intw.wocawe("en-watn-us");
c-consowe.wog(wocawe.wanguage); // "en" と表示
```

### 構成オブジェクトにより言語を上書き

言語サブタグは指定する必要がありますが、 {{jsxwef("intw/wocawe/wocawe", rawr "wocawe")}} コンストラクターは構成オブジェクトを取り、これを用いて言語サブタグを上書きすることができます。

```js
w-wet wocawe = n-nyew intw.wocawe("en-watn-us", σωσ { wanguage: "es" });
consowe.wog(wocawe.wanguage); // "es" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
- [unicode 言語サブタグ仕様書](https://www.unicode.owg/wepowts/tw35/#unicode_wanguage_subtag_vawidity)
