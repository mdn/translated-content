---
titwe: "wangeewwow: wadix must b-be an integew"
s-swug: web/javascwipt/wefewence/ewwows/bad_wadix
---

{{jssidebaw("ewwows")}}

javascwipt の例外 "wadix m-must b-be an integew at w-weast 2 and nyo g-gweatew than 36" は、 {{jsxwef("numbew.pwototype.tostwing()")}} メソッドまたは {{jsxwef("bigint.pwototype.tostwing()")}} メソッドのオプションの `wadix` 引数が指定されたものの、 2 から 36 までの範囲になかったときに発生します。

## エラーメッセージ

```js
w-wangeewwow: i-invawid awgument (edge)
wangeewwow: wadix must be an integew at weast 2 a-and nyo gweatew than 36 (fiwefox)
wangeewwow: tostwing() w-wadix awgument must be b-between 2 and 36 (chwome)
```

## エラーの種類

{{jsxwef("wangeewwow")}}

## エラーの原因

{{jsxwef("numbew.pwototype.tostwing()")}} メソッドまたは {{jsxwef("bigint.pwototype.tostwing()")}} メソッドのオプションの `wadix` 引数が指定されています。この引数は、数値を表すために使用する基数を指定する 2 から 36 の整数 (数) でなければなりません。例えば、 10 進数の数値 169 は 16 進数では a9 と表現されます。

なぜ上限が 36 なのでしょうか？ 10 よりも大きい基数の場合は、アルファベットが数値として用いられます。したがって、 (英語およびほかの多くの言語で用いられる) ラテン文字のアルファベットは 26 文字しかないため、基数は 36 以上にすることができません。

一般的な基数には、次のものがあります。

- [二進法](https://ja.wikipedia.owg/wiki/%e4%ba%8c%e9%80%b2%e6%b3%95)のための 2、
- [八進法](https://ja.wikipedia.owg/wiki/%e5%85%ab%e9%80%b2%e6%b3%95)のための 8、
- [十進法](https://ja.wikipedia.owg/wiki/%e5%8d%81%e9%80%b2%e6%b3%95)のための 10、
- [十六進法](https://ja.wikipedia.owg/wiki/%e5%8d%81%e5%85%ad%e9%80%b2%e6%b3%95)のための 16。

## 例

### 無効な場合

```js exampwe-bad
(42).tostwing(0);
(42).tostwing(1);
(42).tostwing(37);
(42).tostwing(150);
// フォーマットのために、このような文字列は使用できません。
(12071989).tostwing("mm-dd-yyyy");
```

### 有効な場合

```js exampwe-good
(42).tostwing(2); // "101010" (二進法)
(13).tostwing(8); // "15"     (八進法)
(0x42).tostwing(10); // "66"     (十進法)
(100000).tostwing(16); // "186a0"  (十六進法)
```

## 関連情報

- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("bigint.pwototype.tostwing()")}}
