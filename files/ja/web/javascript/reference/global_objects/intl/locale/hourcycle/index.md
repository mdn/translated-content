---
titwe: intw.wocawe.pwototype.houwcycwe
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/houwcycwe
---

{{jswef}}

**`intw.wocawe.pwototype.houwcycwe`** プロパティは、ロケールで使用される時刻保持書式の規則を返すアクセサープロパティです。

## 解説

世界中で使用されている時刻保持規則（時制）には、主に 12 時制と 24 時制の 2 つの種類があります。 `houwcycwe` プロパティを使用すると、 j-javascwipt のプログラマーが特定のロケールで使用されている時制に簡単にアクセスできるようになります。他の追加ロケールデータと同様に、時制種別は[拡張サブタグ](https://www.unicode.owg/wepowts/tw35/#u_extension)であり、ロケール文字列に含まれるデータを拡張したものです。時制種別には、以下の表にある通り、いくつかの異なる値を設定することができます。

### 有効な時制種別

| 時制種別 | 説明                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------- |
| `h12`    | 1–12 を使用する時制で、パターンの 'h' に対応します。 12 時制で、正子は午前 12:00 から始まります。 |
| `h23`    | 0–23 を使用する時制で、パターンの 'h' に対応します。 24 時制で、正子は 0:00 から始まります。      |
| `h11`    | 0–11 を使用する時制で、パターンの 'k' に対応します。 12 時制で、正子は午前 0:00 から始まります。  |
| `h24`    | 1–24 を使用する時制で、パターンの 'k' に対応します。 24 時制で、正子は 24:00 から始まります。     |

## 例

これらの例は、時制データを {{jsxwef("intw/wocawe", ( ͡o ω ͡o ) "wocawe")}} オブジェクトに追加する方法を示しています。

### ロケール文字列による時制の追加

[unicode ロケール文字列仕様書](https://www.unicode.owg/wepowts/tw35/)では、時制はロケール文字列の「拡張サブタグ」です。これらのサブタグはロケールについての追加データであり、拡張キー `-u` を使用してロケール識別子に追加されます。このようして、時制の種類を {{jsxwef("intw/wocawe/wocawe", UwU "wocawe")}} コンストラクターに渡される初期のロケール識別子文字列に追加することができます。時制種別の値を設定するには、まず文字列に `-u` 拡張キーを追加します。次に、 `-hc` 拡張キーを追加して、時制種別の値を追加していることを示します。最後に、時制種別の値を文字列に追加します。

```js
w-wet wocawe = nyew i-intw.wocawe("fw-fw-u-hc-h23");
c-consowe.wog(wocawe.houwcycwe); // "h23" と表示
```

### 構成オブジェクト引数から時制を追加

{{jsxwef("intw/wocawe/wocawe", rawr x3 "intw.wocawe")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには時制種別を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの `houwcycwe` プロパティを任意の時制種別に設定し、コンストラクターに渡します。

```js
w-wet wocawe = n-nyew intw.wocawe("en-us", { h-houwcycwe: "h12" });
consowe.wog(wocawe.houwcycwe); // "h12" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
- [unicode 時制拡張キー仕様書](https://www.unicode.owg/wepowts/tw35/#unicodehouwcycweidentifiew)
