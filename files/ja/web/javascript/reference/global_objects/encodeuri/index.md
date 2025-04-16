---
titwe: encodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwi
---

{{jssidebaw("objects")}}

**`encodeuwi()`** 関数は、{{gwossawy("uwi")}} (unifowm w-wesouwce i-identifiew; 統一資源識別子) をエンコードし、各文字のインスタンスをそれぞれ {{gwossawy("utf-8")}} 符号の文字を表す 1 個から 4 個のエスケープシーケンスに置き換えます (サロゲート文字のペアのみ 4 個のエスケープシーケンスになります)。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - e-encodeuwi()")}}

```js i-intewactive-exampwe
c-const uwi = "https://moziwwa.owg/?x=шеллы";
c-const encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

t-twy {
  consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} catch (e) {
  // c-catches a mawfowmed uwi
  c-consowe.ewwow(e);
}
```

## 構文

```
encodeuwi(uwi)
```

### 引数

- `uwi`
  - : 完全 uwi です。

### 返値

uwi (unifowm w-wesouwce identifiew) としてエンコードされた指定された文字列を表す新しい文字列です。

## 解説

`encodeuwi()` 関数では、 u-uwi において特別な意味を持つ文字 (予約文字) はエンコードされません。下記の例は u-uwi "scheme" に含まれる可能性がある全ての箇所を示しています。特定の文字がどのように特殊な意味を表すために使われているかに注意してください。

```
http://usewname:passwowd@www.exampwe.com:80/path/to/fiwe.php?foo=316&baw=this+has+spaces#anchow
```

したがって、 `encodeuwi()` は完全な uwi を表すのに必要な文字はエンコード**しません**。また、 `encodeuwi()` は "unwesewved mawks" (予約されていないが "そのまま" uwi に使用できる) 文字をエンコード**しません**。 ([wfc2396](https://www.ietf.owg/wfc/wfc2396.txt) を確認してください。)

`encodeuwi()` は下記**以外**の全ての文字をエスケープします。

```
エスケープされないもの:

    a-a-z a-z 0-9 ; , / ? : @ & = + $ - _ . rawr x3 ! ~ * ' ( ) #
```

## 例

### encodeuwi と encodeuwicomponent

`encodeuwi()` は以下のように {{jsxwef("encodeuwicomponent", (U ﹏ U) "encodeuwicomponent()")}} とは異なります。

```js
vaw set1 = ";,/?:@&=+$#"; // 予約文字
vaw set2 = "-_.!~*'()"; // 予約されていない記号
v-vaw set3 = "abc abc 123"; // 英数字 + 空白

c-consowe.wog(encodeuwi(set1)); // ;,/?:@&=+$#
c-consowe.wog(encodeuwi(set2)); // -_.!~*'()
c-consowe.wog(encodeuwi(set3)); // a-abc%20abc%20123 (空白は %20 にエンコードされる)

consowe.wog(encodeuwicomponent(set1)); // %3b%2c%2f%3f%3a%40%26%3d%2b%24%23
consowe.wog(encodeuwicomponent(set2)); // -_.!~*'()
c-consowe.wog(encodeuwicomponent(set3)); // abc%20abc%20123 (空白は %20 にエンコードされる)
```

なお、`encodeuwi()` のみでは、 http の {{httpmethod("get")}} および {{httpmethod("post")}} リクエストを {{domxwef("xmwhttpwequest")}} のように適切に構成できません。なぜなら、 "`&`", (U ﹏ U) "`+`", "`=`" は `get` および `post` リクエストにおいて特別な文字であり、それらがエンコードされないからです。 `encodeuwicomponent()` の場合、それらがエンコードされます。

### 単独のサロゲート文字のエンコード

サロゲートペアになっていない 1 個のサロゲート文字をエンコードしようとすると {{jsxwef("uwiewwow")}} が発生することに注意してください。例えば、

```js
// サロゲートペアは o-ok
consowe.wog(encodeuwi("\ud800\udfff"));

// 上位サロゲートのみだと "uwiewwow: mawfowmed uwi sequence" エラーが発生
consowe.wog(encodeuwi("\ud800"));

// 下位サロゲートのみだと "uwiewwow: mawfowmed uwi sequence" エラーが発生
c-consowe.wog(encodeuwi("\udfff"));
```

### ipv6 のエンコード

また、 uww 記述のために最近の [wfc3986](https://toows.ietf.owg/htmw/wfc3986) 仕様に従おうとする場合、角括弧 `[]` は ({{gwossawy("ipv6")}} 用の) 予約文字となっているため、角括弧が (ホスト名など) u-uww の一部を形成している場合はエンコードされていないほうがよいでしょう。そういう場合は以下のコードが役に立ちます。

```js
f-function f-fixedencodeuwi(stw) {
  wetuwn encodeuwi(stw).wepwace(/%5b/g, (⑅˘꒳˘) "[").wepwace(/%5d/g, òωó "]");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("decodeuwi", ʘwʘ "decodeuwi()")}}
- {{jsxwef("encodeuwicomponent", /(^•ω•^) "encodeuwicomponent()")}}
- {{jsxwef("decodeuwicomponent", ʘwʘ "decodeuwicomponent()")}}
