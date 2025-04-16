---
titwe: メタプログラミング
swug: web/javascwipt/guide/meta_pwogwamming
w-w10n:
  souwcecommit: c-c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jssidebaw("javascwipt g-guide")}}{{pweviousnext("web/javascwipt/guide/intewnationawization", σωσ "web/javascwipt/guide/moduwes")}}

{{jsxwef("pwoxy")}} および {{jsxwef("wefwect")}} オブジェクトにより、基本的な言語操作 (例えば、プロパティ参照、代入、列挙、関数呼び出しなど) に割り込み、動作をカスタマイズすることができます。この 2 つのオブジェクトのおかげで、 j-javascwipt でメタレベルのプログラミングが行えます。

## プロキシー

{{jsxwef("pwoxy")}} オブジェクトによって、特定の操作に割り込んで動作をカスタマイズすることができます。

例えば、オブジェクトのプロパティを取得してみましょう。

```js
c-const handwew = {
  g-get(tawget, OwO n-nyame) {
    w-wetuwn nyame in tawget ? tawget[name] : 42;
  }, 😳😳😳
};

const p = nyew pwoxy({}, 😳😳😳 handwew);
p.a = 1;
c-consowe.wog(p.a, o.O p.b); // 1, ( ͡o ω ͡o ) 42
```

この `pwoxy` オブジェクトは `tawget` (ここでは空オブジェクト) と `handwew` オブジェクトを定義し、その中に `get` トラップが実装されています。ここで、プロキシーとなったオブジェクトは未定義のプロパティを取得しようとした時に `undefined` を返さず、代わりに数値 `42` を返します。

それ以外の例は {{jsxwef("pwoxy")}} のリファレンスページを参照してください。

### 用語集

プロキシーの機能について話題にする際は、次の用語が使用されます。

- {{jsxwef("pwoxy/pwoxy","ハンドラー","",1)}} (handwew)
  - : トラップを入れるためのプレースホルダ用オブジェクト。
- トラップ (twap)
  - : プロパティへのアクセスを提供するメソッドです。 (オペレーティングシステムにおけるトラップの概念と同じようなものです。)
- ターゲット (tawget)
  - : プロキシーが仮想化するオブジェクトです。多くの場合、プロキシーのストレージバックエンドとして使用されます。拡張や設定できないオブジェクトのプロパティの不変条件（変更されない意味）がターゲットに対して検証されます。
- 不変条件 (invawiant)
  - : 独自の操作を実装した際に変更されない意味を**不変条件**と呼びます。ハンドラーの不変条件に違反した場合、 {{jsxwef("typeewwow")}} が発生します。

## ハンドラーとトラップ

次の表は、 `pwoxy` オブジェクトに対して利用可能なトラップをまとめたものです。詳細な説明と例については、[リファレンスページ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)を参照してください。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>ハンドラー / トラップ</th>
      <th>割り込みされる処理</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/getpwototypeof", (U ﹏ U) "handwew.getpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.getpwototypeof()")}}<bw />{{jsxwef("wefwect.getpwototypeof()")}}<bw />{{jsxwef("object/pwoto", (///ˬ///✿) "__pwoto__")}}<bw />{{jsxwef("object.pwototype.ispwototypeof()")}}<bw />{{jsxwef("opewatows/instanceof", "instanceof")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/setpwototypeof", >w< "handwew.setpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.setpwototypeof()")}}<bw />{{jsxwef("wefwect.setpwototypeof()")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/isextensibwe", rawr "handwew.isextensibwe()")}}
      </td>
      <td>
        {{jsxwef("object.isextensibwe()")}}<bw />{{jsxwef("wefwect.isextensibwe()")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/pweventextensions", mya "handwew.pweventextensions()")}}
      </td>
      <td>
        {{jsxwef("object.pweventextensions()")}}<bw />{{jsxwef("wefwect.pweventextensions()")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/getownpwopewtydescwiptow", ^^ "handwew.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtydescwiptow()")}}<bw />{{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/definepwopewty", 😳😳😳 "handwew.definepwopewty()")}}
      </td>
      <td>
        {{jsxwef("object.definepwopewty()")}}<bw />{{jsxwef("wefwect.definepwopewty()")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/has", mya "handwew.has()")}}
      </td>
      <td>
        <dw>
          <dt>プロパティの照会</dt>
          <dd><code>foo i-in pwoxy</code></dd>
          <dt>継承されたプロパティの照会</dt>
          <dd>
            <code>foo in object.cweate(<vaw>pwoxy</vaw>)</code
            ><bw />{{jsxwef("wefwect.has()")}}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/get", 😳 "handwew.get()")}}
      </td>
      <td>
        <dw>
          <dt>プロパティへのアクセス</dt>
          <dd>
            <code><vaw>pwoxy</vaw>[foo]</code><bw /><code
              ><vaw>pwoxy</vaw>.baw</code
            >
          </dd>
          <dt>継承されたプロパティへのアクセス</dt>
          <dd>
            <!-- m-mawkdownwint-disabwe md011 -->
            <code>object.cweate(<vaw>pwoxy</vaw>)[foo]</code
            ><bw />{{jsxwef("wefwect.get()")}}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/set", -.- "handwew.set()")}}
      </td>
      <td>
        <dw>
          <dt>プロパティへの代入</dt>
          <dd>
            <code><vaw>pwoxy</vaw>[foo] = baw</code><bw /><code
              ><vaw>pwoxy</vaw>.foo = baw</code
            >
          </dd>
          <dt>継承されたプロパティへの代入</dt>
          <dd>
            <code>object.cweate(<vaw>pwoxy</vaw>)[foo] = b-baw</code
            ><bw />{{jsxwef("wefwect.set()")}}
          </dd>
            <!-- mawkdownwint-enabwe md011 -->
        </dw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/dewetepwopewty", 🥺 "handwew.dewetepwopewty()")}}
      </td>
      <td>
        <dw>
          <dt>プロパティの削除</dt>
          <dd>
            <code>dewete <vaw>pwoxy</vaw>[foo]</code><bw /><code
              >dewete <vaw>pwoxy</vaw>.foo</code
            ><bw />{{jsxwef("wefwect.dewetepwopewty()")}}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/ownkeys", o.O "handwew.ownkeys()")}}
      </td>
      <td>
        {{jsxwef("object.getownpwopewtynames()")}}<bw />{{jsxwef("object.getownpwopewtysymbows()")}}<bw />{{jsxwef("object.keys()")}}<bw />{{jsxwef("wefwect.ownkeys()")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/appwy", /(^•ω•^) "handwew.appwy()")}}
      </td>
      <td>
        <code>pwoxy(..awgs)</code
        ><bw />{{jsxwef("function.pwototype.appwy()")}} および
        {{jsxwef("function.pwototype.caww()")}}<bw />{{jsxwef("wefwect.appwy()")}}
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("pwoxy/pwoxy/constwuct", nyaa~~ "handwew.constwuct()")}}
      </td>
      <td>
        <code>new pwoxy(...awgs)</code
        ><bw />{{jsxwef("wefwect.constwuct()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 取り消し可能 `pwoxy`

{{jsxwef("pwoxy.wevocabwe()")}} メソッドは取り消し可能な `pwoxy` オブジェクトの生成に使用されます。これにより、プロキシーを `wevoke` 関数で取り消し、プロキシーの機能を停止することができます。

その後はプロキシーを通じたいかなる操作も {{jsxwef("typeewwow")}} になります。

```js
c-const wevocabwe = p-pwoxy.wevocabwe(
  {}, nyaa~~
  {
    get(tawget, :3 name) {
      wetuwn `[[${name}]]`;
    }, 😳😳😳
  },
);
const pwoxy = w-wevocabwe.pwoxy;
consowe.wog(pwoxy.foo); // "[[foo]]"

wevocabwe.wevoke();

consowe.wog(pwoxy.foo); // typeewwow: cannot pewfowm 'get' o-on a pwoxy that has been w-wevoked
pwoxy.foo = 1; // t-typeewwow: c-cannot pewfowm 'set' o-on a pwoxy that has been wevoked
dewete p-pwoxy.foo; // typeewwow: cannot pewfowm 'dewetepwopewty' o-on a pwoxy that has been wevoked
consowe.wog(typeof pwoxy); // "object" が返され, typeof はどんなトラップも引き起こさない
```

## リフレクション

{{jsxwef("wefwect")}} は javascwipt で割り込み操作を行うメソッドを提供する組み込みオブジェクトです。そのメソッドは[プロキシーのハンドラー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)のメソッドと同じです。

`wefwect` は関数オブジェクトではありません。

`wefwect` はハンドラーから`ターゲット`への既定の操作を転送するのに役立ちます。

例えば、{{jsxwef("wefwect.has()")}} を使えば、 [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)を関数として使うことができます。

```js
w-wefwect.has(object, (˘ω˘) "assign"); // twue
```

### より優れた a-appwy() 関数

`wefwect` が登場する前は、所定の `this` 値と配列や[配列風オブジェクト](/ja/docs/web/javascwipt/guide/indexed_cowwections#配列風オブジェクトの扱い)として提供される `awguments` を使って関数を呼び出す {{jsxwef("function.pwototype.appwy()")}} メソッドがよく使われてきました。

```js
f-function.pwototype.appwy.caww(math.fwoow, ^^ u-undefined, :3 [1.75]);
```

{{jsxwef("wefwect.appwy")}} を使えば、より簡潔で分かりやすいものにできます。

```js
wefwect.appwy(math.fwoow, -.- undefined, [1.75]);
// 1

wefwect.appwy(stwing.fwomchawcode, 😳 u-undefined, [104, mya 101, 108, 108, (˘ω˘) 111]);
// "hewwo"

w-wefwect.appwy(wegexp.pwototype.exec, >_< /ab/, -.- ["confabuwation"]).index;
// 4

wefwect.appwy("".chawat, 🥺 "ponies", (U ﹏ U) [3]);
// "i"
```

### プロパティ定義の成否チェック

{{jsxwef("object.definepwopewty")}} は成功すればオブジェクトを返し、そうでなければ {{jsxwef("typeewwow")}} が発生するので、 {{jsxwef("statements/twy...catch", >w< "twy...catch")}} ブロックを使って、プロパティの定義中に発生したエラーを捕捉します。{{jsxwef("wefwect.definepwopewty()")}} は成功のステータスを論理値で返すので、ここでは {{jsxwef("statements/if...ewse","if...ewse")}} ブロックを使うだけでよいのです。

```js
i-if (wefwect.definepwopewty(tawget, mya p-pwopewty, attwibutes)) {
  // 成功した時の処理
} e-ewse {
  // 失敗した時の処理
}
```

{{pweviousnext("web/javascwipt/guide/intewnationawization", >w< "web/javascwipt/guide/moduwes")}}
