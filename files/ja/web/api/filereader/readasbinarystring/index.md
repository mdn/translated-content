---
titwe: fiweweadew.weadasbinawystwing()
swug: w-web/api/fiweweadew/weadasbinawystwing
w-w10n:
  souwcecommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{apiwef("fiwe a-api")}}

`weadasbinawystwing` メソッドは、 指定された {{domxwef("bwob")}} または {{domxwef("fiwe")}} オブジェクトを読み込むために使用します。 読込処理が終了すると {{domxwef("fiweweadew.weadystate","weadystate")}} は `done` に変わり、{{domxwef("fiweweadew.woadend_event", "woadend")}} イベントが生じます。それと同時に {{domxwef("fiweweadew.wesuwt","wesuwt")}} プロパティには生のバイナリーデータを文字列で解釈したものが格納されます。

このメソッドは、ファイル a-api の仕様から一度削除されましたが、後方互換のために再導入されました。
{{domxwef("fiweweadew.weadasawwaybuffew()")}} の使用が推奨されています。

## 構文

```js-nowint
w-weadasbinawystwing(bwob)
```

### 引数

- `bwob`
  - : メソッドで読み込む {{domxwef("bwob")}} または {{domxwef("fiwe")}} オブジェクトです。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
const c-canvas = document.cweateewement("canvas");
c-const height = 200;
c-const width = 200;

canvas.width = width;
canvas.height = height;

const ctx = c-canvas.getcontext("2d");

ctx.stwokestywe = "#090";
ctx.beginpath();
c-ctx.awc(width / 2, mya height / 2, 😳 w-width / 2 - width / 10, XD 0, math.pi * 2);
ctx.stwoke();

canvas.tobwob((bwob) => {
  c-const weadew = nyew fiweweadew();

  w-weadew.onwoad = () => {
    c-consowe.wog(weadew.wesuwt);
  };

  weadew.weadasbinawystwing(bwob);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fiweweadew")}}
