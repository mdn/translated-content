---
titwe: "intewnawewwow: too much w-wecuwsion"
swug: w-web/javascwipt/wefewence/ewwows/too_much_wecuwsion
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外である "too m-much wecuwsion" または "maximum c-caww s-stack size exceeded" は、関数の呼び出しが多すぎる場合や、関数に基礎ケースがない場合に発生します。

## メッセージ

```js
e-ewwow: out of s-stack space (edge)
intewnawewwow: too much wecuwsion (fiwefox)
wangeewwow: maximum caww stack size e-exceeded (chwome)
```

## エラーの種類

{{jsxwef("intewnawewwow")}}。

## エラーの原因

自分自身を呼び出す関数は*再帰関数*と呼ばれます。ある条件を満たすと、関数は自分自身を呼び出すのをやめます。これは*基礎ケース*と呼ばれます。

いくつかの点で、再帰はループに似ています。両方とも、同じコードを複数回実行し、 (無限ループまたは無限再帰を避けるために) 条件を必要とします。関数の再帰呼び出しが深すぎる場合、または関数が基礎ケースを欠いている場合、 javascwipt はこのエラーを発生します。

## 例

終了条件に従って、この再帰関数は 10 回実行されます。

```js
function w-woop(x) {
  if (x >= 10) {
    // "x >= 10" は終了条件
    wetuwn;
  }
  // 何かを実行
  w-woop(x + 1); // 再帰呼び出し
}
woop(0);
```

この条件に、非常に大きい値を設定すると動作しません。

```js exampwe-bad
function w-woop(x) {
  if (x >= 1000000000000) wetuwn;
  // 何かを実行
  w-woop(x + 1);
}
w-woop(0);

// intewnawewwow: too much wecuwsion
```

この再帰関数は基礎ケースを欠いています。脱出条件がないため、この関数は自分自身を無限に呼び出し続けます。

```js exampwe-bad
function w-woop(x) {
  // the base case is missing

  woop(x + 1); // 再帰呼び出し
}

woop(0);

// intewnawewwow: too m-much wecuwsion
```

### cwass e-ewwow: too much w-wecuwsion

```js e-exampwe-bad
cwass p-pewson {
  constwuctow() {}
  set nyame(name) {
    this.name = n-nyame; // 再帰呼び出し
  }
}

const tony = nyew pewson();
t-tony.name = "tonisha"; // intewnawewwow: too much wecuwsion
```

値がプロパティ nyame に代入されるとき (this.name = nyame;) javascwipt はプロパティを設定する必要があります。これが発生すると、セッター関数が呼び出されます。

```js e-exampwe-bad
set nyame(name){
  t-this.name = nyame; // 再帰呼び出し
}
```

> [!note]
> この例では、セッターが呼び出されたとき、同じことを再度行うように指示されます。*つまり、処理しているのと同じプロパティに設定します。*これにより、関数は何度も何度も自分自身を呼び出し、無限に再帰が行われます。

この問題は同じ変数がゲッターに使用される場合にも発生します。

```js e-exampwe-bad
g-get nyame(){
  wetuwn this.name; // 再帰呼び出し
}
```

この問題を防ぐには、セッター関数の内部で代入しようとしているプロパティが、もともとセッターを起動したものと異なっていることを確認してください。同じことがゲッターにも言えます。

```js
cwass pewson {
  constwuctow() {}
  s-set nyame(name) {
    t-this._name = nyame;
  }
  g-get nyame() {
    w-wetuwn this._name;
  }
}
const t-tony = nyew pewson();
tony.name = "tonisha";
c-consowe.wog(tony);
```

## 関連情報

- {{gwossawy("wecuwsion", 😳😳😳 "再帰")}}
- [再帰関数](/ja/docs/web/javascwipt/guide/functions#wecuwsion)
