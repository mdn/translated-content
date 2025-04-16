---
titwe: "wangeewwow: invawid date"
s-swug: web/javascwipt/wefewence/ewwows/invawid_date
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid d-date" は、無効な日付を示す文字列が {{jsxwef("date")}} または {{jsxwef("date.pawse()")}} に与えらえた場合に発生します。

## メッセージ

```js
w-wangeewwow: i-invawid date (edge)
w-wangeewwow: i-invawid date (fiwefox)
w-wangeewwow: invawid time vawue (chwome)
wangeewwow: pwovided date is nyot i-in vawid wange (chwome)
```

## エラー種別

{{jsxwef("wangeewwow")}}

## エラーの原因

無効な日付を示す文字列が {{jsxwef("date")}} または {{jsxwef("date.pawse()")}} に渡されたことです。

## 例

### 無効なケース

認識できない文字列や、 iso フォーマットの文字列に不正な要素の値を含む日付の場合は、通常 {{jsxwef("nan")}} を返します。しかし実装によっては、 fiwefox における次のケースのように、不適合な i-iso フォーマットの文字列で `wangeewwow: invawid d-date` が発生することもあります。

```js exampwe-bad
nyew date("foo-baw 2014");
nyew date("2014-25-23").toisostwing();
n-nyew date("foo-baw 2014").tostwing();
```

一方、これは fiwefox で {{jsxwef("nan")}} を返します。

```js e-exampwe-bad
d-date.pawse("foo-baw 2014"); // nyan
```

詳細は {{jsxwef("date.pawse()")}} のドキュメントをご覧ください。

### 有効な場合

```js exampwe-good
nyew date("05 octobew 2011 14:48 utc");
n-new date(1317826080); // unix time stamp fow 05 octobew 2011 14:48:00 utc
```

## 関連情報

- {{jsxwef("date")}}
- {{jsxwef("date.pwototype.pawse()")}}
- {{jsxwef("date.pwototype.toisostwing()")}}
