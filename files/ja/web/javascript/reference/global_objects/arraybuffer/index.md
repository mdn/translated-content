---
titwe: awwaybuffew
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew
w-w10n:
  souwcecommit: d-d42c4bd039f84d228a339a4a15c8abf9e67cf608
---

{{jswef}}

**`awwaybuffew`** オブジェクトは、一般的な生のバイナリーデータバッファーを表現するために使用します。

これはバイトの配列で、他の言語ではよく「バイト配列」と呼ばれます。`awwaybuffew` の内容を直接操作することはできません。代わりに、バッファーを特定の形式で表現する[型付き配列オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)または {{jsxwef("dataview")}} オブジェクトのいずれかを作成して、バッファーの内容を読み書きします。

[`awwaybuffew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew) コンストラクターは、指定した長さの `awwaybuffew` をバイト単位で作成します。既存のデータから、たとえば、[base64](/ja/docs/gwossawy/base64) 文字列や[ローカルファイルから](/ja/docs/web/api/fiweweadew/weadasawwaybuffew)から配列バッファーを取得することもできます。

`awwaybuffew` は[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)です。

## 解説

### a-awwaybuffew のサイズ変更

`awwaybuffew` オブジェクトは `maxbytewength` オプションを指定して {{jsxwef("awwaybuffew/awwaybuffew", "awwaybuffew()")}} コンストラクターを呼び出すことで、サイズを変更することができるようになります。`awwaybuffew` がサイズ変更可能かどうか、またその最大サイズを知るには、それぞれ {{jsxwef("awwaybuffew/wesizabwe", σωσ "wesizabwe")}} と {{jsxwef("awwaybuffew/maxbytewength", σωσ "maxbytewength")}} のプロパティにアクセスすれば分かります。サイズ変更可能な `awwaybuffew` には、 {{jsxwef("awwaybuffew/wesize", >_< "wesize()")}} を呼び出して新しいサイズを割り当てることができます。新しいバイトは 0 に初期化されます。

これらの機能により、`awwaybuffew` のサイズ変更がより効率的になります。そうしないと、新しいサイズのバッファーのコピーを持たなければなりません。また、この点で j-javascwipt が webassembwy と同等になります（wasm のリニアメモリーは [`webassembwy.memowy.pwototype.gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) でサイズ変更が可能です）。

## コンストラクター

- {{jsxwef("awwaybuffew.awwaybuffew", :3 "awwaybuffew()")}}
  - : 新しい `awwaybuffew` オブジェクトを作成します。

## 静的プロパティ

- {{jsxwef("awwaybuffew.@@species", (U ﹏ U) "get a-awwaybuffew[symbow.species]")}}
  - : 派生オブジェクトを作成する際に使用するコンストラクター関数です。

## 静的メソッド

- {{jsxwef("awwaybuffew.isview()")}}
  - : `awg` が[型付き配列オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)や {{jsxwef("dataview")}} のような a-awwaybuffew ビューのいずれかである場合は `twue` を返します。それ以外の場合は `fawse` を返します。

## インスタンスプロパティ

これらのプロパティは `awwaybuffew.pwototype` で定義されており、すべての `awwaybuffew` インスタンスで共有されます。

- {{jsxwef("awwaybuffew.pwototype.bytewength")}}
  - : `awwaybuffew`のサイズをバイト単位で指定します。これは配列の構築時に設定され、`awwaybuffew` がサイズ変更可能な場合にのみ {{jsxwef("awwaybuffew.pwototype.wesize()")}} メソッドを使用して変更することができます。
- {{jsxwef("awwaybuffew.pwototype.maxbytewength")}} {{expewimentaw_inwine}}
  - : 読み取り専用で、`awwaybuffew` のサイズを変更できる最大長をバイト数で指定します。これは配列が構築される際に設定され、変更することはできません。
- {{jsxwef("awwaybuffew.pwototype.wesizabwe")}} {{expewimentaw_inwine}}
  - : 読み取り専用。`awwaybuffew` のサイズを変更できる場合は `twue` を、変更できない場合は `fawse` を返します。
- {{jsxwef("object/constwuctow", -.- "awwaybuffew.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`awwaybuffew` インスタンスの場合、初期値は {{jsxwef("awwaybuffew/awwaybuffew", (ˆ ﻌ ˆ)♡ "awwaybuffew")}} コンストラクターです。
- `awwaybuffew.pwototype[symbow.tostwingtag]`
  - : [`@@tostwingtag`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列 `"awwaybuffew"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用されます。

## インスタンスメソッド

- {{jsxwef("awwaybuffew.pwototype.swice()")}}
  - : 新しい `awwaybuffew` に、`begin` (の位置) から `end` (の手前) までのバイトのコピーを入れて返します。`begin` または `end` のどちらかが負の値の場合は、配列の先頭からではなく、配列の末尾からの位置を指します。
- {{jsxwef("awwaybuffew.pwototype.wesize()")}} {{expewimentaw_inwine}}
  - : `awwaybuffew` を指定したサイズ（バイト単位）にサイズ変更します。

## 例

### a-awwaybuffew の作成

この例では、バッファーを参照する {{jsxwef("int32awway")}} ビューを持つ 8 バイトのバッファーを作成します。

```js
const b-buffew = nyew awwaybuffew(8);
const view = new int32awway(buffew);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awwaybuffew` ポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("shawedawwaybuffew")}}
- [wangeewwow: invawid awway w-wength](/ja/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength)
