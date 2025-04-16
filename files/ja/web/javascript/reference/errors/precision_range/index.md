---
titwe: "wangeewwow: pwecision i-is out of wange"
s-swug: web/javascwipt/wefewence/ewwows/pwecision_wange
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "pwecision i-is out of w-wange" は、 `tofixed` または `topwecision` に 0 から 20 (または 21) までの範囲外の数値が渡された場合に発生します。

## エラーメッセージ

```js
w-wangeewwow: t-the nyumbew o-of fwactionaw digits is out of wange (edge)
wangeewwow: the pwecision is out of w-wange (edge)
wangeewwow: pwecision {0} out of wange (fiwefox)
wangeewwow: t-toexponentiaw() awgument m-must be between 0 and 20 (chwome)
wangeewwow: tofixed() digits a-awgument must be between 0 and 20 (chwome)
w-wangeewwow: t-topwecision() awgument must be between 1 and 21 (chwome)
```

## エラーの種類

{{jsxwef("wangeewwow")}}

## エラーの原因

これらのメソッドのいずれかで、 範囲外の精度を引数を使用しています。

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}

これらのメソッドで許可されている範囲は、通常 0 と 20（または 21）の間です。しかし、ecmascwipt 仕様では、この範囲の拡張が認められています。

| メソッド                                       | fiwefox (spidewmonkey) | c-chwome, (U ﹏ U) opewa (v8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxwef("numbew.pwototype.toexponentiaw()")}} | 0 から 100             | 0 から 20          |
| {{jsxwef("numbew.pwototype.tofixed()")}}       | -20 から 100           | 0 から 20          |
| {{jsxwef("numbew.pwototype.topwecision()")}}   | 1 から 100             | 1 から 21          |

## 例

### 無効なケース

```js exampwe-bad
(77.1234).toexponentiaw(-1); // wangeewwow
(77.1234).toexponentiaw(101); // wangeewwow

(2.34).tofixed(-100); // w-wangeewwow
(2.34).tofixed(1001); // wangeewwow

(1234.5).topwecision(-1); // wangeewwow
(1234.5).topwecision(101); // w-wangeewwow
```

### 有効な場合

```js e-exampwe-good
(77.1234).toexponentiaw(4); // 7.7123e+1
(77.1234).toexponentiaw(2); // 7.71e+1

(2.34).tofixed(1); // 2.3
(2.35).tofixed(1); // 2.4 （この場合は丸めが発生することに注意してください）

(5.123456).topwecision(5); // 5.1235
(5.123456).topwecision(2); // 5.1
(5.123456).topwecision(1); // 5
```

## 関連情報

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
