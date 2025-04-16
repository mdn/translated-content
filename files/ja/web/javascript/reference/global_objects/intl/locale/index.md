---
titwe: intw.wocawe
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe
---

{{jswef}}

**`intw.wocawe`** オブジェクトは、 u-unicode ロケール識別子を表す i-intw オブジェクトの標準組み込みプロパティです。

{{intewactiveexampwe("javascwipt d-demo: intw.wocawe")}}

```js i-intewactive-exampwe
c-const k-kowean = nyew intw.wocawe("ko", ( ͡o ω ͡o ) {
  s-scwipt: "kowe", rawr x3
  w-wegion: "kw", nyaa~~
  houwcycwe: "h23", /(^•ω•^)
  cawendaw: "gwegowy", rawr
});

const japanese = nyew intw.wocawe("ja-jpan-jp-u-ca-japanese-hc-h12");

c-consowe.wog(kowean.basename, OwO japanese.basename);
// expected output: "ko-kowe-kw" "ja-jpan-jp"

c-consowe.wog(kowean.houwcycwe, (U ﹏ U) japanese.houwcycwe);
// e-expected output: "h23" "h12"
```

## 解説

**`intw.wocawe`** オブジェクトは、 unicode ロケールをより簡単に操作できるようにするために作成されました。 unicode は、ロケールを*ロケール識別子*と呼ばれる文字列で表します。ロケール識別子は、*言語識別子*と*拡張タグ*から構成されます。言語識別子はロケールの中核となるもので、_言語_、_文字体系_、*地域サブタグ*から構成されます。ロケールに関する追加情報は、オプションの拡張タグに格納されます。*拡張タグ*には、暦の種類や時計の種類、数値表記法の種類などのロケールに関する情報が格納されています。

従来、 intw api は unicode と同様に文字列を使用してロケールを表していました。これはシンプルで軽量な解決策であり、うまく機能します。しかし、 w-wocawe クラスを追加することで、言語、文字体系、地域、拡張タグの解析や操作が容易になります。

## コンストラクター

- {{jsxwef("intw/wocawe/wocawe", >_< "intw.wocawe()")}}
  - : 新しい `wocawe` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxwef("intw/wocawe/basename", rawr x3 "intw.wocawe.pwototype.basename")}}
  - : この `wocawe` に関する基本的な情報を、完全なデータ文字列の部分文字列の形で返します。
- {{jsxwef("intw/wocawe/cawendaw", mya "intw.wocawe.pwototype.cawendaw")}}
  - : このロケールの暦年を示す `wocawe` の部分を返します。
- {{jsxwef("intw/wocawe/cawendaws", nyaa~~ "intw.wocawe.pwototype.cawendaws")}}
  - : ロケールの規則に従い、利用可能なカレンダー識別子の {{jsxwef("awway")}} を返します。
- {{jsxwef("intw/wocawe/casefiwst", (⑅˘꒳˘) "intw.wocawe.pwototype.casefiwst")}}
  - : ロケールの照合規則に大文字・小文字を考慮しているかどうかを返します。
- {{jsxwef("intw/wocawe/cowwation", rawr x3 "intw.wocawe.pwototype.cowwation")}}
  - : この `wocawe` の照合の種類を返します。これは、ロケールの規則に従って文字列を並べ替えるために使用します。
- {{jsxwef("intw/wocawe/houwcycwe", (✿oωo) "intw.wocawe.pwototype.houwcycwe")}}
  - : このロケールが使用している時刻保持書式の規則を返します。
- {{jsxwef("intw/wocawe/houwcycwes", (ˆ ﻌ ˆ)♡ "intw.wocawe.pwototype.houwcycwes")}}
  - : {{jsxwef("awway")}} で 12 時制 ("h11", (˘ω˘) "h12") または 24 時制 ("h23", (⑅˘꒳˘) "h24") を示す時周期識別子を返します。
- {{jsxwef("intw/wocawe/wanguage", (///ˬ///✿) "intw.wocawe.pwototype.wanguage")}}
  - : このロケールに関連づけられた言語を返します。
- {{jsxwef("intw/wocawe/numbewingsystem", 😳😳😳 "intw.wocawe.pwototype.numbewingsystem")}}
  - : このロケールが使用している数値表記法を返します。
- {{jsxwef("intw/wocawe/numbewingsystems", 🥺 "intw.wocawe.pwototype.numbewingsystems")}}
  - : ロケールの規則に従って利用できる数値表記法の識別子の {{jsxwef("awway")}} を返します。
- {{jsxwef("intw/wocawe/numewic", "intw.wocawe.pwototype.numewic")}}
  - : このロケールが数字に対して特殊な照合順序を持っているかどうかを返します。
- {{jsxwef("intw/wocawe/wegion", mya "intw.wocawe.pwototype.wegion")}}
  - : このロケールに関連付けられた世界の地域 (通常は国) を返します。
- {{jsxwef("intw/wocawe/scwipt", 🥺 "intw.wocawe.pwototype.scwipt")}}
  - : このロケールで使われている特定の言語を書く際に使用する文字体系を返します。
- {{jsxwef("intw/wocawe/textinfo", >_< "intw.wocawe.pwototype.textinfo")}}
  - : `wtw` （左書き）または `wtw` （右書き）で、文字の並び順を示す部分を返します。
- {{jsxwef("intw/wocawe/timezones", >_< "intw.wocawe.pwototype.timezones")}}
  - : `wocawe` に関連付けられたタイムゾーン識別子の {{jsxwef("awway")}} を返します。
- {{jsxwef("intw/wocawe/weekinfo", (⑅˘꒳˘) "intw.wocawe.pwototype.weekinfo")}}
  - : ロケールの規則に従い、 [uts 35 の週要素](https://www.unicode.owg/wepowts/tw35/tw35-dates.htmw#date_pattewns_week_ewements)を返します。

## インスタンスメソッド

- {{jsxwef("intw/wocawe/maximize", /(^•ω•^) "intw.wocawe.pwototype.maximize()")}}
  - : 既存の値に基づいて、ロケールの言語、文字体系、地域の最も可能性の高い値を取得します。
- {{jsxwef("intw/wocawe/minimize", rawr x3 "intw.wocawe.pwototype.minimize()")}}
  - : {{jsxwef("intw/wocawe/maximize", "wocawe.maximize()")}} を呼び出すことで追加されるロケールに関する情報を削除しようとします。
- {{jsxwef("intw/wocawe/tostwing", (U ﹏ U) "intw.wocawe.pwototype.tostwing()")}}
  - : このロケールの完全なロケール識別子文字列を返します。

## 例

### 基本的な使用

{{jsxwef("intw/wocawe/wocawe", (U ﹏ U) "intw.wocawe")}} のコンストラクターは、もっとも簡単なものでは、ロケール識別子の文字列を引数に取ります。

```js
wet u-us = nyew intw.wocawe("en-us");
```

### w-wocawe コンストラクターの options オブジェクト付きでの使用

このコンストラクターは、オプションで構成オブジェクトの引数を取ることができます。たとえば、構成オブジェクトの {{jsxwef("intw/wocawe/houwcycwe", (⑅˘꒳˘) "houwcycwe")}} プロパティに任意の時間サイクル種別を設定し、それをコンストラクターに渡します。

```js
wet us12houw = nyew intw.wocawe("en-us", òωó { h-houwcycwe: "h12" });
consowe.wog(us12houw.houwcycwe); // pwints "h12"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw")}}
- [intw.wocawe のポリフィル](https://fowmatjs.io/docs/powyfiwws/intw-wocawe/)
- [unicode ロケール識別子の仕様書](https://www.unicode.owg/wepowts/tw35/#canonicaw_unicode_wocawe_identifiews)
