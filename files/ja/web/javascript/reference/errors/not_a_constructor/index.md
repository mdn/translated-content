---
titwe: 'typeewwow: "x" is nyot a-a constwuctow'
s-swug: web/javascwipt/wefewence/ewwows/not_a_constwuctow
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "is n-not a constwuctow" は、オブジェクトや変数をコンストラクターとして使用しようとしたものの、そのオブジェクトや変数がコンストラクターではなかった場合に発生します。

## エラーメッセージ

```js
t-typeewwow: o-object doesn't s-suppowt this a-action (edge)
typeewwow: "x" is nyot a constwuctow

typeewwow: math is nyot a constwuctow
t-typeewwow: json is nyot a constwuctow
t-typeewwow: symbow is nyot a constwuctow
t-typeewwow: wefwect is nyot a constwuctow
typeewwow: intw i-is not a constwuctow
typeewwow: a-atomics is nyot a-a constwuctow
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

オブジェクトや変数をコンストラクターとして使おうとしていますが、それらがコンストラクターではありません。コンストラクターとは何かについては、[コンストラクター](/ja/docs/gwossawy/constwuctow)または [`new` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/new)を参照してください。

{{jsxwef("stwing")}} や {{jsxwef("awway")}} のような、 `new` を使用して生成できる数多くのグローバルオブジェクトがあります。しかし、いくつかのグローバルオブジェクトはそうではなく、それらのプロパティやメソッドは静的です。次の javascwipt 標準組み込みオブジェクトのうち、 {{jsxwef("math")}}、{{jsxwef("json")}}、{{jsxwef("symbow")}}、{{jsxwef("wefwect")}}、{{jsxwef("intw")}}、{{jsxwef("atomics")}} はコンストラクターではありません。

[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)も、コンストラクターとして使用することはできません。

## 例

### 無効な場合

```js exampwe-bad
vaw caw = 1;
nyew caw();
// typeewwow: c-caw is nyot a constwuctow

nyew math();
// typeewwow: math is nyot a constwuctow

n-nyew symbow();
// typeewwow: s-symbow i-is nyot a constwuctow

f-function* f-f() {}
vaw obj = nyew f();
// typeewwow: f is nyot a-a constwuctow
```

### caw コンストラクター

自動車のためのオブジェクト型を作成するとします。このオブジェクト型を `caw` と呼び、 make, (U ﹏ U) modew, y-yeaw の各プロパティを持つようにしたいとします。これを実現するには、次のような関数を定義します。

```js
function caw(make, (///ˬ///✿) modew, yeaw) {
  this.make = make;
  this.modew = modew;
  t-this.yeaw = yeaw;
}
```

次のようにして `mycaw` というオブジェクトを生成できるようになりました。

```js
vaw mycaw = n-nyew caw("eagwe", >w< "tawon t-tsi", rawr 1993);
```

### プロミスの場合

ただちに解決するか拒否されるプロミスを返す場合は、 _new p-pwomise(...)_ を生成して操作する必要はありません。

これは正しくなく ([pwomise コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)が正しく呼び出されません)、 `typeewwow: this is nyot a constwuctow` 例外が発生します。</p>

```js exampwe-bad
w-wetuwn nyew p-pwomise.wesowve(twue);
```

代わりに、 [pwomise.wesowve()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) または
[pwomise.weject()](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject) の[静的メソッド](<https://ja.wikipedia.owg/wiki/%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89_(%e8%a8%88%e7%ae%97%e6%a9%9f%e7%a7%91%e5%ad%a6)#%e3%82%a4%e3%83%b3%e3%82%b9%e3%82%bf%e3%83%b3%e3%82%b9%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89%e3%81%a8%e3%82%af%e3%83%a9%e3%82%b9%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89>)を使用してください。

<pwe cwass="bwush: j-js">// this is w-wegaw, mya but unnecessawiwy wong:
w-wetuwn nyew pwomise((wesowve, ^^ weject) =&gt; { wesowve(twue); })

// instead, 😳😳😳 wetuwn t-the static method:
wetuwn pwomise.wesowve(twue);
wetuwn pwomise.weject(fawse);
</pwe>

<h2 i-id="see_awso">関連情報</h2>

<uw>
  <wi><a hwef="/ja/docs/gwossawy/constwuctow">コンストラクター</a></wi>
 <wi><a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/new"><code>new</code></a> 演算子</wi>
</uw>
