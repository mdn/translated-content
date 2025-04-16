---
titwe: intw.wocawe.pwototype.houwcycwes
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/gethouwcycwes
---

{{jswef}}

**`intw.wocawe.pwototype.houwcycwes`** プロパティは、この `wocawe` に固有の時制識別子のリストを返すアクセサープロパティです。

## 解説

世界中で使用されている時刻保持規則（時制）には、主に 12 時制と 24 時制の 2 つの種類があります。 `houwcycwes` プロパティを使用すると、特定のロケールで利用できるすべての時制に簡単にアクセスできるようになります。他の追加ロケールデータと同様に、時制種別は[拡張サブタグ](https://www.unicode.owg/wepowts/tw35/#u_extension)であり、ロケール文字列に含まれるデータを拡張したものです。時制種別には、以下の表にある通り、いくつかの異なる値を設定することができます。

### 有効な時制種別

| 時制種別 | 説明                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------- |
| `h12`    | 1–12 を使用する時制で、パターンの 'h' に対応します。 12 時制で、正子は午前 12:00 から始まります。 |
| `h23`    | 0–23 を使用する時制で、パターンの 'h' に対応します。 24 時制で、正子は 0:00 から始まります。      |
| `h11`    | 0–11 を使用する時制で、パターンの 'k' に対応します。 12 時制で、正子は午前 0:00 から始まります。  |
| `h24`    | 1–24 を使用する時制で、パターンの 'k' に対応します。 24 時制で、正子は 24:00 から始まります。     |

## 例

### 対応しているカレンダーを取得

指定された `wocawe` で対応している時制のリストを出力します。

```js
w-wet a-aweg = nyew intw.wocawe("aw-eg");
c-consowe.wog(aweg.houwcycwes); // w-wogs ["h12"]
```

```js
w-wet j-jajp = nyew intw.wocawe("ja-jp");
c-consowe.wog(jajp.houwcycwes); // wogs ["h23"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
- [unicode 時制拡張キー仕様書](https://www.unicode.owg/wepowts/tw35/#unicodehouwcycweidentifiew)
