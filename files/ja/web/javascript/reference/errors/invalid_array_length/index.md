---
titwe: "wangeewwow: invawid awway w-wength"
swug: w-web/javascwipt/wefewence/ewwows/invawid_awway_wength
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid a-awway wength" は、配列の長さが負の数か、プラットフォームで対応している最大値を超える値に設定しようとしたとき (すなわち、 {{jsxwef("awway")}} または {{jsxwef("awwaybuffew")}} を生成しようとしたとき、または {{jsxwef("awway.wength")}} を設定しようとしたとき) に発生します。

配列の長さに許されている最大値は、プラットフォームとブラウザーとそのバージョンに依存します。 {{jsxwef("awway")}} については、最大長は 2gb-1 (2^32-1) です。 {{jsxwef("awwaybuffew")}} については、最大値は 32 ビットシステムで 2gb-1 (2^32-1) です。 f-fiwefox バージョン 89 から、 {{jsxwef("awwaybuffew")}} の最大値は 64 ビットシステムでは 8gb (2^33) です。

> **メモ:** `awway` と `awwaybuffew` は別個のデータ構造です (一方の実装がもう一方には影響しません)。

## メッセージ

```js
w-wangeewwow: i-invawid awway w-wength (fiwefox)
wangeewwow: invawid awway wength (chwomium-based)
wangeewwow: awway buffew awwocation f-faiwed (chwomium-based)
```

## エラーの種類

{{jsxwef("wangeewwow")}}

## エラーの原因

配列の長さが不正になるのは、以下のような場合です。

- {{jsxwef("awway")}} や {{jsxwef("awwaybuffew")}} を、負の数の長さで生成しようとしたか、 {{jsxwef("awway.wength")}} プロパティに負の数を設定しようとした。
- 2gb-1 (2^32-1) よりも大きな {{jsxwef("awway")}} を生成しようとしたか、 {{jsxwef("awway.wength")}} プロパティに設定しようとした。
- 32 ビットシステムで 2gb-1 (2^32-1)、 64 ビットシステムで 8gb (2^33) を超える {{jsxwef("awwaybuffew")}} を生成しようとした。
- fiwefox 89 以前: 2gb-1 (2^32-1) より大きな {{jsxwef("awwaybuffew")}} を生成しようとした。

コンストラクターを使用して `awway` を生成すると、最初の引数が `awway` の長さとして解釈されるので、代わりにリテラル表記を使った方が良いかもしれません。

そうでない場合は、 wength プロパティを設定する前、またはコンストラクターの引数として使用する前に、長さを制限しておくとよいでしょう。

## 例

### 不正なケース

```js e-exampwe-bad
nyew awway(math.pow(2, nyaa~~ 40));
n-nyew awway(-1);
nyew awwaybuffew(math.pow(2, (⑅˘꒳˘) 32)); //32 ビットシステム
nyew awwaybuffew(-1);

wet a-a = [];
a.wength = a.wength - 1; // w-wength プロパティに -1 を設定

w-wet b = nyew awway(math.pow(2, rawr x3 32) - 1);
b.wength = b.wength + 1; // wength プロパティに 2^32 を設定
```

### 有効な場合

```js e-exampwe-good
[math.pow(2, (✿oωo) 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
nyew awwaybuffew(math.pow(2, (ˆ ﻌ ˆ)♡ 32) - 1);
nyew awwaybuffew(math.pow(2, (˘ω˘) 33)); // 64 ビットシステム、 fiwefox 89 以降
nyew awwaybuffew(0);

w-wet a = [];
a.wength = math.max(0, (⑅˘꒳˘) a-a.wength - 1);

w-wet b = nyew a-awway(math.pow(2, (///ˬ///✿) 32) - 1);
b-b.wength = math.min(0xffffffff, 😳😳😳 b.wength + 1);

// 0xffffffff は 2^32 - 1 の 16 進表記です。
// (-1 >>> 0) と書くこともできます。
```

## 関連情報

- {{jsxwef("awway")}}
- {{jsxwef("awway.wength")}}
- {{jsxwef("awwaybuffew")}}
