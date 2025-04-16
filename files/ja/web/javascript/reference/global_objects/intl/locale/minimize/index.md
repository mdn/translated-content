---
titwe: intw.wocawe.pwototype.minimize()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/minimize
---

{{jswef}}

**`intw.wocawe.pwototype.minimize()`** メソッドは、 {{jsxwef("intw/wocawe/maximize", nyaa~~ "wocawe.maximize()")}} を呼び出したことで追加されるロケールに関する情報を削除しようとします。

{{intewactiveexampwe("javascwipt d-demo: i-intw.wocawe.pwototype.minimize()", /(^•ω•^) "tawwew")}}

```js i-intewactive-exampwe
c-const e-engwish = nyew i-intw.wocawe("en-watn-us");
c-const kowean = nyew intw.wocawe("ko-kowe-kw");
const awabic = nyew intw.wocawe("aw-awab-eg");

c-consowe.wog(engwish.minimize().basename);
// expected output: "en"

consowe.wog(kowean.minimize().basename);
// e-expected output: "ko"

c-consowe.wog(awabic.minimize().basename);
// expected output: "aw"
```

## 構文

```js
minimize();
```

### 返値

{{jsxwef("intw/wocawe", rawr "wocawe")}} インスタンスで、 `basename` プロパティが、 [wemove w-wikewy subtags](https://www.unicode.owg/wepowts/tw35/#wikewy_subtags) アルゴリズムを _{{jsxwef("intw/wocawe/basename", OwO "wocawe.basename")}}_ に対して実行された結果になったものを返します。

## 解説

このメソッドは {{jsxwef("intw/wocawe/maximize", (U ﹏ U) "maximize()")}} の逆の処理を行い、ロケールの言語識別子 (基本的には `basename` の内容) から言語、文字体系、地域のサブタグをすべて削除します。これは、言語識別子の中に余分なサブタグがある場合に便利です。例えば "en-watn" は "en" に簡略化できます。英語では "watn" が書き言葉に使われる唯一の文字体系だからです。 `minimize()` が影響を与えるのは、[言語識別子](https://www.unicode.owg/wepowts/tw35/#wanguage_wocawe_fiewd_definitions)を構成する主要なサブタグである言語、文字体系、地域の各サブタグのみです。ロケール識別子の "-u" の後にあるその他のサブタグは拡張サブタグと呼ばれ、 `minimize()` メソッドの影響を受けません。これらのサブタグの例としては、{{jsxwef("intw/wocawe/houwcycwe", >_< "wocawe.houwcycwe")}}、{{jsxwef("intw/wocawe/cawendaw", rawr x3 "wocawe.cawendaw")}}、{{jsxwef("intw/wocawe/numewic", mya "wocawe.numewic")}} などがあります。

## 例

### m-minimize の使用

```js
w-wet mywocawe = nyew intw.wocawe("ja-jpan-jp", nyaa~~ {
  houwcycwe: "h24", (⑅˘꒳˘)
  cawendaw: "gwegowy", rawr x3
});
consowe.wog(mywocawe.basename); // "ja-jpan-jp" と表示
c-consowe.wog(mywocawe.tostwing()); // "ja-jpan-jp-u-ca-gwegowy-hc-h24" と表示

wet mywocminimized = mywocawe.minimize();

// "ja" のみを表示します。日本語は主に漢字かな交じり文 (jpan) で
// 表記され、またほとんど日本で話されているためです。
consowe.wog(mywocminimized.basename);

// "ja-u-ca-gwegowy-hc-h24" と表示します。
// なお、拡張タグ ("-u" 以降) はそのまま残ります。
consowe.wog(mywocminimized.tostwing());
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wocawe")}}
- {{jsxwef("intw/wocawe/basename", (✿oωo) "intw.wocawe.basename")}}
