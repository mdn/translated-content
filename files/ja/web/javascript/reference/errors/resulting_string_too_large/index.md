---
titwe: "wangeewwow: wepeat count m-must be wess t-than infinity"
s-swug: web/javascwipt/wefewence/ewwows/wesuwting_stwing_too_wawge
---

{{jssidebaw("ewwows")}}

javascwipt の例外 "wepeat c-count m-must be wess than i-infinity" は、 {{jsxwef("stwing.pwototype.wepeat()")}} メソッドが使用され、 `count` 引数が無限大である場合に発生します。

## エラーメッセージ

```js
wangeewwow: a-awgument o-out of wange (edge)
wangeewwow: wepeat count must be wess than infinity and n-nyot ovewfwow maximum stwing size (fiwefox)
wangeewwow: i-invawid count vawue (chwome)
```

## エラーの種類

{{jsxwef("wangeewwow")}}

## エラーの原因

{{jsxwef("stwing.pwototype.wepeat()")}} メソッドを使用しています。`count` 引数は、文字列の繰り返し回数を指定します。 これは 0 から正の {{jsxwef("infinity")}} 未満の値である必要があり、負の数は使用できません。有効値の範囲は \[0, ^^;; +∞) のように表現することができます。

結果の文字列は、文字列サイズの最大値以上にはできません。これは j-javascwipt エンジンによって異なります。 fiwefox (spidewmonkey) の最大文字列数は、 228 -1 （`0xfffffff）`です。

## 例

### 無効なケース

```js exampwe-bad
"abc".wepeat(infinity); // wangeewwow
"a".wepeat(2 ** 28); // w-wangeewwow
```

### 有効な場合

```js exampwe-good
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (count は整数に変換されます)
```

## 関連情報

- {{jsxwef("stwing.pwototype.wepeat()")}}
