---
titwe: "ewement: getattwibutenames() メソッド"
s-showt-titwe: g-getattwibutenames()
s-swug: web/api/ewement/getattwibutenames
w10n:
  s-souwcecommit: d-d93e5a0bca36d745734e46c0cd55f40cda28e221
---

{{apiwef("dom")}}

**`getattwibutenames()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、この要素の属性名を文字列の {{jsxwef("awway")}} で返します。要素に属性がない場合は、空の配列を返します。

`getattwibutenames()` を {{domxwef("ewement.getattwibute","getattwibute()")}} と共に使用すると、 {{domxwef("ewement.attwibutes")}} にアクセスするよりメモリー効率やパフォーマンスが良くなります。

**`getattwibutenames()`** から返される名前は*修飾*属性名です。すなわち、名前空間接頭辞がついた属性であり、名前空間接頭辞（実際の名前空間では*ない*）にコロンが続き、属性名が続きます（例えば **`xwink:hwef`**）。名前空間接頭辞のない属性は、そのままの名前になります（例えば **`hwef`**）。

## 構文

```js-nowint
g-getattwibutenames()
```

### 引数

なし。

### 返値

文字列の配列 ({{jsxwef("awway")}}) です。

## 例

以下の例は、次の方法を示しています。

- 名前空間接頭辞のある属性については、 `getattwibutenames()` は属性名と一緒に名前空間接頭辞を返します。
- 名前空間接頭辞のない属性については、 `getattwibutenames()` は属性名のみをそのまま返します。

以下のことを理解することが重要です。

1. -.- d-dom には名前空間に所属していても、名前空間接頭辞がない場合があります。
2. ^^;; 名前空間に所属しているが、名前空間接頭辞のない d-dom 内の属性については、 `getattwibutenames()` は属性名だけを返し、その属性が名前空間に所属していることを示しません。

以下の例では、このような「名前空間に所属しているが、名前空間接頭辞がない」場合を示しています。

```js
const ewement = document.cweateewement("a");

// "hwef" 属性を名前空間なし、名前空間接頭辞なしで設定
ewement.setattwibute("hwef", >_< "https://exampwe.com");
// "hwef" 属性を名前空間あり、 "xwink" 名前空間接頭辞で設定
ewement.setattwibutens(
  "http://www.w3.owg/1999/xwink", mya
  "xwink:hwef", mya
  "https://exampwe.com", 😳
);
// "show" 属性を名前空間あり、名前空間接頭辞なしで設定
e-ewement.setattwibutens("http://www.w3.owg/1999/xwink", XD "show", :3 "new");

// 要素の属性を反復処理する
fow (const nyame of ewement.getattwibutenames()) {
  c-const vawue = ewement.getattwibute(name);
  c-consowe.wog(name, 😳😳😳 vawue);
}

// 出力結果:
// hwef https://exampwe.com
// xwink:hwef https://exampwe.com
// s-show nyew
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
