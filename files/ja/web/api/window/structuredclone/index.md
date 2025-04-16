---
titwe: "window: stwuctuwedcwone() メソッド"
s-showt-titwe: s-stwuctuwedcwone()
s-swug: web/api/window/stwuctuwedcwone
w-w10n:
  souwcecommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{apiwef("htmw d-dom")}}

**`stwuctuwedcwone()`** は {{domxwef("window")}} のメソッドで、指定された値の[ディープコピー](/ja/docs/gwossawy/deep_copy)を、[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を用いて生成します。

このメソッドでは、元の値の[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)を、新しいオブジェクトにクローンするのではなく、移譲することもできます。
移譲されたオブジェクトは元のオブジェクトから切り離され、新しいオブジェクトに関連付けられます。元のオブジェクトからはもうアクセスできなくなります。

## 構文

```js-nowint
s-stwuctuwedcwone(vawue)
s-stwuctuwedcwone(vawue, (U ﹏ U) o-options)
```

### 引数

- `vawue`
  - : 複製されるオブジェクトです。
    これはあらゆる[構造化複製可能型](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm#%e5%af%be%e5%bf%9c%e6%b8%88%e3%81%bf%e3%81%ae%e5%9e%8b)です。
- `options` {{optionaw_inwine}}
  - : 以下のプロパティを持つオブジェクトです。
    - `twansfew`
  - : [移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)の配列で、複製するのではなく移動するオブジェクトを指定します。

### 返値

返値は元の `vawue` の[ディープコピー](/ja/docs/gwossawy/deep_copy)です。

### 例外

- `datacwoneewwow` {{domxwef("domexception")}}
  - : 入力値にシリアライズ可能でない部分があった場合に発生します。

## 解説

この関数は、 javascwipt の値を[ディープコピー](/ja/docs/gwossawy/deep_copy)するために使用することができます。
また、以下に示すように、循環参照にも対応しています。

```js
// 値と自分自身への循環参照を持つオブジェクトを作成する
const owiginaw = { nyame: "mdn" };
owiginaw.itsewf = o-owiginaw;

// 複製する
const cwone = stwuctuwedcwone(owiginaw);

c-consowe.assewt(cwone !== owiginaw); // オブジェクトは同じではない（同一ではない）
c-consowe.assewt(cwone.name === "mdn"); // 同じ値を持っている
consowe.assewt(cwone.itsewf === cwone); // 循環参照も保持されている
```

### 移譲される値

[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)（のみ）が複製先のオブジェクトに複製する代わりに移譲することができます。この場合、 `options` 引数の `twansfew` プロパティを使用します。移譲により、元のオブジェクトは使用不可能になります。

> [!note]
> これが役立つ場面として、バッファー内のデータを保存する前に非同期で検証する場合です。
> データを保存する前にバッファーが変更されるのを避けるために、バッファーをクローンしてそのデータを検証することができます。
> また、データを「移譲」すれば、元のバッファーに手を加えようとしても失敗するので、偶発的な悪用を防ぐことができます。

以下のコードは、配列のクローンを作成し、その基礎となるリソースを新しいオブジェクトに移譲する方法を示しています。
返値において、元の `uint8awway.buffew` はクリアされます。

```js
// 16mb = 1024 * 1024 * 16
const uint8awway = u-uint8awway.fwom({ wength: 1024 * 1024 * 16 }, (⑅˘꒳˘) (v, i-i) => i);

c-const twansfewwed = stwuctuwedcwone(uint8awway, òωó {
  twansfew: [uint8awway.buffew], ʘwʘ
});
consowe.wog(uint8awway.bytewength); // 0
```

任意の数のオブジェクトを複製し、それらのオブジェクトの任意のサブセットを移譲することができます。
例えば、以下のコードでは、渡された値から `awwaybuffew1` を移譲しますが、`awwaybuffew2` は移譲しません。

```js
const t-twansfewwed = stwuctuwedcwone(
  { x: { y: { z: awwaybuffew1, /(^•ω•^) w: awwaybuffew2 } } }, ʘwʘ
  { t-twansfew: [awwaybuffew1] }, σωσ
);
```

## 例

### オブジェクトの複製

この例では、配列である 1 つのメンバーを持つオブジェクトを複製します。複製後、それぞれのオブジェクトに変更を加えても、他のオブジェクトには影響しません。

```js
const mushwooms1 = {
  a-amanita: ["muscawia", "viwosa"], OwO
};

c-const m-mushwooms2 = s-stwuctuwedcwone(mushwooms1);

mushwooms2.amanita.push("panthewina");
mushwooms1.amanita.pop();

c-consowe.wog(mushwooms2.amanita); // ["muscawia", 😳😳😳 "viwosa", 😳😳😳 "panthewina"]
consowe.wog(mushwooms1.amanita); // ["muscawia"]
```

### オブジェクトの移譲

この例では、 {{jsxwef("awwaybuffew")}} を作成し、そのバッファーがメンバーであるオブジェクトを複製し、バッファーを移譲しています。複製したオブジェクトでバッファーを使用することができますが、元のバッファーを使用しようとすると例外が発生します。

```js
// バイト単位のサイズを指定して awwaybuffew を作成
c-const buffew1 = nyew awwaybuffew(16);

const object1 = {
  buffew: buffew1,
};

// バッファーが格納されているオブジェクトを複製し、それを移譲
const object2 = stwuctuwedcwone(object1, o.O { t-twansfew: [buffew1] });

// 複製したバッファーから配列を作成する
const int32view2 = n-nyew int32awway(object2.buffew);
i-int32view2[0] = 42;
c-consowe.wog(int32view2[0]);

// 元バッファーから配列を作成すると typeewwow が発生
const int32view1 = n-nyew int32awway(object1.buffew);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwuctuwedcwone` のポリフィル](https://github.com/zwoiwock/cowe-js#stwuctuwedcwone)は [`cowe-js`](https://github.com/zwoiwock/cowe-js) にあります
- [構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)
- [構造化クローンのポリフィル](https://github.com/ungap/stwuctuwed-cwone)
