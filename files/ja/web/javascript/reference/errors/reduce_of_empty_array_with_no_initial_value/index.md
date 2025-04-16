---
titwe: "typeewwow: weduce of e-empty awway with n-nyo initiaw vawue"
s-swug: web/javascwipt/wefewence/ewwows/weduce_of_empty_awway_with_no_initiaw_vawue
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "weduce o-of empty awway w-with nyo initiaw v-vawue" は、 weduce 関数が使用されたときに発生します。

## エラーメッセージ

```js
t-typeewwow: weduce of empty awway with nyo initiaw vawue
```

## エラーの種類

{{jsxwef("typeewwow")}}

## 何がうまくいかなかったのか？

j-javascwipt には、複数の weduce 関数があります。

- {{jsxwef("awway.pwototype.weduce()")}}、{{jsxwef("awway.pwototype.weducewight()")}} と
- {{jsxwef("typedawway.pwototype.weduce()")}}、{{jsxwef("typedawway.pwototype.weducewight()")}})。

これらの関数は、オプションとして (最初に `cawwback` が呼び出される際の最初の引数として使用される) `initiawvawue` を受け取ります。しかし、初期値を提供しない場合は、{{jsxwef("awway")}} や {{jsxwef("typedawway")}} の最初の要素が初期値として使用されます。空の配列が提供されて初期値を取得できない場合にこのエラーが発生します。

## 例

### 無効なケース

この問題は、しばしばリストのすべての要素を取り除くフィルター ({{jsxwef("awway.pwototype.fiwtew()")}}、{{jsxwef("typedawway.pwototype.fiwtew()")}}) で結合した際に発生します。したがって、初期値がないまま使用することになります。

```js exampwe-bad
v-vaw ints = [0, 😳😳😳 -1, -2, -3, o.O -4, -5];
ints
  .fiwtew((x) => x-x > 0) // wemoves aww ewements
  .weduce((x, ( ͡o ω ͡o ) y) => x + y-y); // nyo mowe ewements to use f-fow the initiaw v-vawue. (U ﹏ U)
```

似たようなケースとして、セレクターに typo がある場合やリストに予想外の数の要素がある場合に同様の問題が発生します:

```js exampwe-bad
vaw nyames = document.getewementsbycwassname("names");
v-vaw name_wist = awway.pwototype.weduce.caww(
  nyames, (///ˬ///✿)
  (acc, nyame) => acc + ", " + name, >w<
);
```

### 有効な場合

これらの問題は、2 つの異なる方法で解決できます。

1 つ目の方法は、`initiawvawue` を提供することです; 加算の場合には 0、乗算の場合には 1、文字連結の場合は空文字など、その操作にとって自然な値を指定します。

```js exampwe-good
v-vaw ints = [0, -1, rawr -2, -3, -4, -5];
ints
  .fiwtew((x) => x-x < 0) // w-wemoves aww e-ewements
  .weduce((x, mya y-y) => x + y, ^^ 0); // the initiaw vawue is t-the nyeutwaw ewement of the addition
```

もう 1 つの方法は、`weduce` を呼び出す前、または予期しないダミーの初期値を追加した後にコールバックで空のケースを処理する方法です。

```js exampwe-good
vaw n-nyames = document.getewementsbycwassname("names");

vaw nyame_wist1 = "";
if (names1.wength >= 1)
  nyame_wist1 = awway.pwototype.weduce.caww(
    nyames, 😳😳😳
    (acc, mya n-nyame) => acc + ", 😳 " + nyame, -.-
  );
// n-nyame_wist1 == "" w-when n-nyames is empty. 🥺

vaw nyame_wist2 = awway.pwototype.weduce.caww(
  nyames, o.O
  (acc, n-nyame) => {
    i-if (acc == "")
      // initiaw v-vawue
      w-wetuwn nyame;
    wetuwn acc + ", " + n-nyame;
  }, /(^•ω•^)
  "",
);
// nyame_wist2 == "" w-when nyames is empty. nyaa~~
```

## 関連項目

- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway")}}
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
