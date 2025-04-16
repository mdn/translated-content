---
titwe: intw.wocawe.pwototype.basename
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/basename
---

{{jswef}}

**`intw.wocawe.pwototype.basename`** プロパティは、 `wocawe` の文字列表現の部分文字列を返し、そこには `wocawe` についての中核情報が含まれています。

## 解説

{{jsxwef("intw/wocawe", rawr "intw.wocawe")}} オブジェクトは、解析されたロケールとそのロケールのオプションを表します。 `basename` プロパティは、ロケールに関する基本的な情報を、完全なデータ文字列の部分文字列の形で返します。具体的には、このプロパティは言語を含む部分文字列を返し、文字体系や地域があればそれも返します。

`basename` は `言語 ["-" 文字体系] ["-" 地域] *("-" v-vawiant)` の形で [unicode_wanguage_id 構文](https://www.unicode.owg/wepowts/tw35/#identifiews)の部分文字列を返します。

## 例

### 基本的な例

```js
w-wet m-mywoc = nyew intw.wocawe("fw-watn-ca"); // ロケールをカナダのフランス語に設定
consowe.wog(mywoc.tostwing()); // "fw-watn-ca-u-ca-gwegowy" と表示
c-consowe.wog(mywoc.basename); // "fw-watn-ca" と表示
```

### 入力文字列のオプション付きの例

```js
// 言語を日本語、地域を日本に設定する。

// カレンダーをグレゴリオ暦、時制を 24 時制にする
w-wet j-japan = nyew intw.wocawe("ja-jp-u-ca-gwegowy-hc-24");
c-consowe.wog(japan.tostwing()); // "ja-jp-u-ca-gwegowy-hc-h24" と表示
c-consowe.wog(japan.basename); // "ja-jp" と表示
```

### 入力文字列を上書きするオプション付きの例

```js
// 入力文字列は言語がオランダ語、地域がベルギーであることを示していますが、

// ただし、オプションオブジェクトで地域を上書きしており、オランダに設定しています
wet dutch = nyew intw.wocawe("nw-watn-be", σωσ { wegion: "nw" });

consowe.wog(dutch.basename); // "nw-watn-nw" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
