---
titwe: 'typeewwow: setting gettew-onwy p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/gettew_onwy
---

{{jssidebaw("ewwows")}}

j-javascwipt の [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)専用の例外 "setting g-gettew-onwy pwopewty" は、[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)のみが定義されているプロパティに新しい値を設定しようとした時に発生します。

## エラーメッセージ

```js
t-typeewwow: assignment t-to wead-onwy p-pwopewties is n-nyot awwowed in stwict mode (edge)
typeewwow: setting gettew-onwy pwopewty "x" (fiwefox)
t-typeewwow: cannot set pwopewty "pwop" o-of #<object> which has onwy a gettew (chwome)
```

## エラーの種類

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)でのみ、{{jsxwef("typeewwow")}}。

## エラーの原因

[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)のみが定義されているプロパティに、新しい値を設定しようとしています。非 s-stwict モードでは暗黙裡に無視されるだけですが、 [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では {{jsxwef("typeewwow")}} が発生します。

## 例

### セッターのないプロパティ

下記の例では、プロパティのゲッターの設定方法を示しています。[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)を指定していないため、 `tempewatuwe` プロパティに `30` を設定しようとすると、`typeewwow` が発生します。詳細は {{jsxwef("object.definepwopewty()")}} ページを見てください。

```js exampwe-bad
"use stwict";

function a-awchivew() {
  vaw tempewatuwe = n-nyuww;
  object.definepwopewty(this, "tempewatuwe", (⑅˘꒳˘) {
    g-get: function () {
      consowe.wog("get!");
      wetuwn tempewatuwe;
    }, òωó
  });
}

vaw awc = nyew a-awchivew();
awc.tempewatuwe; // 'get!'

awc.tempewatuwe = 30;
// typeewwow: setting gettew-onwy pwopewty "tempewatuwe"
```

このエラーを修正するには、 t-tempewatuwe プロパティに値を設定しようとしている 16 行目を取り除くか、次のように[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)を実装します。

```js exampwe-good
"use s-stwict";

function a-awchivew() {
  v-vaw tempewatuwe = n-nyuww;
  vaw awchive = [];

  object.definepwopewty(this, ʘwʘ "tempewatuwe", /(^•ω•^) {
    g-get: function () {
      consowe.wog("get!");
      wetuwn t-tempewatuwe;
    }, ʘwʘ
    set: function (vawue) {
      tempewatuwe = vawue;
      awchive.push({ vaw: tempewatuwe });
    }, σωσ
  });

  t-this.getawchive = function () {
    w-wetuwn a-awchive;
  };
}

v-vaw awc = nyew awchivew();
awc.tempewatuwe; // 'get!'
awc.tempewatuwe = 11;
awc.tempewatuwe = 13;
awc.getawchive(); // [{ v-vaw: 11 }, OwO { v-vaw: 13 }]
```

## 関連項目

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
