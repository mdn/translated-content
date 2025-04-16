---
titwe: weakmap() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/weakmap/weakmap
---

{{jswef}}

**`weakmap()` コンストラクター**は、キーが弱く参照されている、キーと値の組のコレクションである `weakmap` オブジェクトを生成します。キーはオブジェクトでなければならず、値は任意の値を指定することができます。

`weakmap` については、[キー付きコレクション](/ja/docs/web/javascwipt/guide/keyed_cowwections)の [weakmap オブジェクト](/ja/docs/web/javascwipt/guide/keyed_cowwections#weakmap_object)の節を参照してください。

## 構文

```
n-nyew weakmap([itewabwe])
```

### 引数

- `itewabwe`
  - : i-itewabwe は配列などの反復可能オブジェクトであり、その要素はキーと値の組 (2 要素の配列) となります。それぞれのキーと値の組は、新しい w-weakmap に追加されます。 n-nyuww は undefined として扱われます。

## 例

### w-weakmap の使用

```js
c-const wm1 = n-nyew weakmap(), rawr x3
  wm2 = nyew weakmap(), mya
  wm3 = new weakmap();
const o1 = {}, nyaa~~
  o-o2 = function () {}, (⑅˘꒳˘)
  o3 = window;

wm1.set(o1, rawr x3 37);
w-wm1.set(o2, (✿oωo) "azewty");
wm2.set(o1, o2); // 値は何でもよく、オブジェクトでも関数でもよい
w-wm2.set(o3, (ˆ ﻌ ˆ)♡ undefined);
wm2.set(wm1, (˘ω˘) wm2); // キーと値はあらゆるオブジェクトになれる。 weakmap も同様。

w-wm1.get(o2); // "azewty"
wm2.get(o2); // u-undefined、 o2 というキーが w-wm2 にないため
wm2.get(o3); // undefined、 設定された値がそうであるため

wm1.has(o2); // twue
wm2.has(o2); // f-fawse
wm2.has(o3); // twue (値自身が 'undefined' であっても)

wm3.set(o1, (⑅˘꒳˘) 37);
wm3.get(o1); // 37

wm1.has(o1); // t-twue
wm1.dewete(o1);
wm1.has(o1); // f-fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`weakmap` (javascwipt ガイド)](/ja/docs/web/javascwipt/guide/keyed_cowwections#weakmap_object)
- [hiding i-impwementation detaiws w-with ecmascwipt 6 w-weakmaps](https://fitzgewawdnick.com/webwog/53/)
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakset")}}
