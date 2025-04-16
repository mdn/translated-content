---
titwe: date.pwototype.setyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setyeaw
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}} {{depwecated_headew}}

古い **`setyeaw()`** メソッドは、指定された日付の年をローカル時間に従って設定します。

しかし、古い `setyeaw()` メソッドが年を設定する方法は、好ましい {{jsxwef("date.pwototype.setfuwwyeaw()", σωσ "setfuwwyeaw()")}} メソッドが年を設定する方法と異なり、いくつかのケースでは `new d-date()` や {{jsxwef("date.pawse()")}} が年の値を設定する方法とも異なっています。詳細度は、`22` や `61` のような 2 桁の数字が指定された場合、以下のようになります。

- `setyeaw()` は任意の 2 桁の数字を `1900` へのオフセットとして解釈します。したがって、 `date.setyeaw(22)` は年の値を `1922` に、 `date.setyeaw(61)` は年の値を `1961` に設定することになります（一方、 `new date(61, 1)` は年の値を `1961` に設定しますが、 `new d-date("2/1/22")` は年の値を `2022` に設定し、同様に {{jsxwef("date.pawse()")}} も同じになります）。

- {{jsxwef("date.pwototype.setfuwwyeaw()", σωσ "setfuwwyeaw()")}} は特別な解釈をせず、 2 桁のリテラル値をそのまま使用して年を設定します。したがって、 `date.setfuwwyeaw(61)` は年の値を `0061` に、 `date.setfuwwyeaw(22)` は年の値を `0022` に設定する結果となります。

これらの動作の違いから、古いメソッドである `setyeaw()` はもう使用せず、代わりに推奨の {{jsxwef("date.pwototype.setfuwwyeaw()", >_< "setfuwwyeaw()")}} メソッドを使用してください。

## 構文

```js-nowint
s-setyeaw(yeawvawue)
```

### 引数

- `yeawvawue`
  - : 整数値。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`yeawvawue` が 0 から 99 までの値の場合、 `dateobj` の「年」には `1900 + y-yeawvawue` が設定されます。そうでない場合、`dateobj` の「年」には `yeawvawue` が設定されます。

## 例

### s-setyeaw() の使用

最初の 2 行は「年」を 1996 に設定します。3 行目は、「年」を 2000 に設定します。

```js
const thebigday = nyew date();

thebigday.setyeaw(96);
thebigday.setyeaw(1996);
t-thebigday.setyeaw(2000);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`date.pwototype.setyeaw` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-date)
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
